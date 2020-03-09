import React from 'react'
import AddQuizAnswer from "./AddQuizAnswer"
import { db } from '../firebase'

class AddQuizQuestion extends React.Component {

	state = {
		title: '',
		question: '',
		correctAnswer: '',
		answers: [""],
		questions: [],
	}

	componentDidMount() {
		db.collection("QG3-Quiz").doc(this.props.match.params.quiz_id).get()
		.then(doc => {
			console.log('response', doc.data())
			this.setState({
				title: doc.data().title,
			})
		})
		.catch(error => {
			console.error(error)
		})	
	}

	createQuizQuestion = () => {
		const newQuestion = {
			question: this.state.question,
			answers: this.state.answers,
			correctAnswer: this.state.correctAnswer,
		}

		const questionList = [...this.state.questions, newQuestion]
		this.setState({
			title: this.state.title,
			questions: questionList,
		})

		this.emptyInputValue()
	}

	emptyInputValue = () => {
		this.setState({
			question: '',
			answers: [""],
			correctAnswer: '',
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.createQuizQuestion()
	}

	submitQuiz = (e) => {
		e.preventDefault()

		db.collection("QG3-Quiz").doc(this.props.match.params.quiz_id).update({
			title: this.state.title,
			questions: this.state.questions,
		})
		.then(() => {
			console.log('Success!')
		})
		.catch(err => {
			console.error(err)
		})
	}

	render() {
		const quizOutput = this.state.questions.map((question, i) => {
			return (
				<div>
					<h2> {i + 1}. {question.question} </h2>
					<ol>
						{
							question.answers.map(answer => {
								return (
									<li> 
										{answer} 
									</li>
									)
							})
						}
					</ol>
					<p><span className="correct">Correct answer:</span> {question.correctAnswer}</p>
				</div>
			)
		})

		return (
			<div>
				<div className="quizcreator-container container mb-4">
					<h1>Create a Quiz</h1>
						<form onSubmit={this.handleSubmit}>
									<div className="quizcreator-form">
										<div className="form-group mb-3">
											<label>Add a question:</label>
												<input 
													type="text" 
													name="question"
													className="form-control" 
													placeholder="Enter a question" 
													aria-label="Question input"
													value={this.state.question}
													onChange={this.handleChange} 
												/>
											</div>

										<div className="form-group mb-3">
											<label>Add your answers:</label>
												<AddQuizAnswer 
													answers={this.state.answers}
													correctAnswer={this.state.correctAnswer} 
													handleChange={this.handleChange} />
										</div>

										<button type="submit" className="btn btn-secondary">Submit your question</button>
									</div>
							</form>
					</div>

					<div className="create-quiz-output">
						<h1>{this.state.title}</h1>
							<div className="created-question-output">
								{quizOutput}
							</div>
						<button onClick={this.submitQuiz} className="btn btn-secondary">Submit your finished quiz</button>
					</div>
			</div>
		)
	}
}

export default AddQuizQuestion