import React from 'react'

class QuizCreator extends React.Component {

	state = {
		question: '',
		answer1: '',
		answer2: '',
		answer3: '',
		answer4: '',
		quiz: [],
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

	render() {
		return (
			<div className="container mb-4">
				<form onSubmit={this.handleSubmit}>
					<h1>Create a Quiz</h1>
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
								<input 
									type="text" 
									name="answer1"
									className="form-control mb-3" 
									placeholder="Enter an answer" 
									aria-label="Answer input"
									value={this.state.answer1}
									onChange={this.handleChange}
								/>

								<input 
									type="text" 
									name="answer2"
									className="form-control mb-3" 
									placeholder="Enter an answer" 
									aria-label="Answer input" 
									value={this.state.answer2}
									onChange={this.handleChange}
									/>

								<input 
									type="text" 
									name="answer3"
									className="form-control mb-3" 
									placeholder="Enter an answer" 
									aria-label="Answer input" 
									value={this.state.answer3}
									onChange={this.handleChange}
									/>

								<input 
									type="text" 
									name="answer3"
									className="form-control mb-3" 
									placeholder="Enter an answer" 
									aria-label="Answer input" 
									value={this.state.answer4}
									onChange={this.handleChange}
									/>
						</div>

						<label>Select correct answer:</label>
							<div className="form-group">
								<select className="custom-select">
									<option selected value="">Select correct answer</option>
									<option value="1">Answer 1</option>
									<option value="2">Answer 2</option>
									<option value="3">Answer 3</option>
									<option value="4">Answer 4</option>
								</select>
							</div>

						<button className="btn btn-secondary">Submit your question</button>
				</form>
			</div>
		)
	}

}

export default QuizCreator
