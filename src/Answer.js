import React from "react"; 

class Answer extends React.Component {

state = {

}



render () {
    
    return (<label>
             <input type="radio" name="answers" value={this.props.correct} onClick={(e)=>this.props.lagra(e)} />
             {this.props.text}
             
            </label>
            )}

}






export default Answer