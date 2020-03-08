import React from 'react'

class AddQuizAnswer extends React.Component {

	handleAddInputClick = e => {
		e.preventDefault()
		const answers = this.props.answers
		answers.push("")

		this.setState({
			answers,
		})
	}

	handleInputChange = (e, i) => {
		const answers = this.props.answers
		answers[i] = e.target.value

		this.setState({
			answers,
		})
	}

	render() {
		return (
			<div>
			{
				this.props.answers.map((answer, i) => (
					<div id="answer-inputs" className="form-row" key={i}>
						<div className="form-group w-100">
							<input 
								type="text" 
								name="answer" 
								className="form-control" 
								placeholder="Enter an answer" 
								value={answer} 
								onChange={e => {this.handleInputChange(e, i)}} />
						</div>
					</div>
				))
			}

			<button className="btn btn-secondary" onClick={this.handleAddInputClick}>+</button>

			<div className="form-group">
				<p>Please select the correct answer:</p>
					<select 
						name="correctAnswer" 
						className="form-control" 
						value={this.props.correctAnswer} 
						onChange={this.props.handleChange}>
							{
								this.props.answers.map((answer, i) => (
									<option value={answer}>{answer}</option>
								))
							}
				</select>
			</div>
		</div>
		)
	}
}

export default AddQuizAnswer