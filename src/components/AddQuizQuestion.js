import React from 'react'

class AddQuizQuestion extends React.Component {

	state = {
		answers: [],
	}

	render() {
		return (
			<input 
				type="text" 
				name="question"
				className="form-control" 
				placeholder="Enter a question" 
				aria-label="Question input"
				value={this.props.question}
				onChange={this.props.handleChange} 
			/>
		)
	}
}

export default AddQuizQuestion