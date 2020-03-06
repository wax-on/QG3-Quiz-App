import React from 'react'
import { db } from '../firebase'
import AddQuizQuestion from './AddQuizQuestion'
import AddQuizAnswer from './AddQuizAnswer'

class QuizCreator extends React.Component {

	state = {
		titleInput: '',
		title: null,
		quiz: [],
		answerInputs: '',
		question: '',
		answers: [],
		quizId: '',
		}
	

	createQuizQuestion = () => {
		const newQuestion = {
			question: this.state.question,
			answers: [
				{
					text: this.state.answer,
					correct: false,
				},
			],
		}

		const quizList = [...this.state.quiz, newQuestion]
		this.setState({
			title: this.state.title,
			quiz: quizList,
		})

		this.emptyInputValue()
	}

	// addAnswer = () => {
	// 	this.setState({
	// 		answerInputs: <input 
	// 						type="text" 
	// 						name="answer1"
	// 						className="form-control mb-3" 
	// 						placeholder="Enter an answer" 
	// 						aria-label="Answer input"
	// 						value={this.state.answer1}
	// 						onChange={this.handleChange}
	// 			/>
	// 	})
	// }	

	// emptyInputValue = () => {
	// 	this.setState({
	// 		question: '',
	// 		answer: '',
	// 	})
	// }

	createQuizFirebase = (dbTitle) => {
		if (dbTitle) {
			db.collection("QG3-Quiz").add({
				title: dbTitle,
				// questions: [{
				// 	answers: [{
				// 		text: '',
				// 		correct: false,
				// 	}],
				// 	question: '',
				// }],
			})
			.then(docRef => {
				// this.setState({
				// 	quizId: docRef.id,
				// })
				console.log("Document written with ID: ", docRef.id);
				this.props.history.push('/create-quiz-question/' + docRef.id);
			})
			.catch(function(error) {
				console.error(error);
			});
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmitTitle = (e) => {
		e.preventDefault()

		const dbTitle = this.state.titleInput

		this.setState({
			title: this.state.titleInput,
			titleInput: '',
		})

		this.createQuizFirebase(dbTitle)
	}

	handleSubmitQA = (e) => {
		e.preventDefault()
	}

	render() {
		return (
			<div className="quizcreator-container container mb-4">
				<h1>Create a Quiz</h1>

				<div className="quizcreator-form">
				{
					!this.state.title ?

					(
						<form onSubmit={this.handleSubmitTitle}>
							<div className="form-group mb-3">
								<label>Name your quiz:</label>
									<input 
										type="text" 
										name="titleInput"
										className="form-control" 
										placeholder="Enter a title" 
										aria-label="Quiztitle input"
										value={this.state.titleInput}
										onChange={this.handleChange} 
									/>
								<button className="btn btn-secondary mt-3">Create your quiz</button>
							</div>
						</form>
					)

					:

					(
						<form onSubmit={this.handleSubmitQA}>
							<div>
								<div className="form-group mb-3">
									<label>Add a question:</label>
										<AddQuizQuestion 
											question={this.state.question} 
											id={this.state.quizId} 
											handleChange={this.handleChange} />
									</div>

								<div className="form-group mb-3">
									<label>Add your answers:</label>
										<AddQuizAnswer 
											answer={this.state.answer} 
											id={this.state.quizId} 
											handleChange={this.handleChange} />
										
									{/* {this.state.answerInputs ? this.state.answerInputs : ''} */}
								</div>

								<button className="btn btn-secondary">Submit your question</button>
							</div>
						</form>
					)
				}

			</div>
		</div>
		)
	}

}

export default QuizCreator
