import React from 'react'

class AddQuizAnswer extends React.Component {

	state = {
		answers: [],
	}

	// addAnswerInput = () => {
	// 	let counter = 1
	// 	let limit = 5

	// 	function addInput(divName) {
	// 		if (counter === limit) {
	// 			alert ('Stop!')
	// 		} else {
	// 			let newDiv = document.createElement('div');
	// 			newDiv.innerHTML
	// 		}
	// 	}
	// }


	render() {
		return (

			// this.state.answers.map((answer, i) => )
			<div>
				<div id="answer-inputs" class="form-row">
					<div class="form-group col-md-10">
						<input type="text" name="answer" className="form-control" placeholder="Enter an answer" value={this.props.answer} onChange={this.props.handleChange} />
					</div>
		
					<div class="form-group col-md-2">
						<select id="correct" className="form-control">
							<option value="false" selected>false</option>
							<option value="true">true</option>
						</select>
					</div>
				</div>
			<button className="btn btn-secondary" onClick={this.addAnswerInput}>+</button>
		</div>
		)
	}
}

export default AddQuizAnswer