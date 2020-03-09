import React from "react"; 


const AnswerKomboOne = (props) => {


    return (<div>
                <div className="quizform">
                            <h2>{props.Questions[props.Questionnumber]}</h2>

                            {props.Rightanswers[props.Questionnumber]?     
                                    <label>                   
                                    <input type="radio" name="answer" value={props.Rightanswers[props.Questionnumber]}/>
                                    {props.Rightanswers[props.Questionnumber]}
                                    </label> :null} 
                                
                            {props.Wronganswers[props.Answerone]!==undefined?
                                   <label>
                                    <input type="radio" name="answer" value={props.Wronganswers[props.Answerone]}/> {props.Wronganswers[props.Answerone]}
                                    </label>:null}

                            {props.Wronganswers[props.Answertwo]!==undefined?
                                    <label>
                                    <input type="radio" name="answer" value={props.Wronganswers[props.Answertwo]}/>{props.Wronganswers[props.Answertwo]}
                                    </label>:null}

                            {props.Wronganswers[props.Answerthree]!==undefined?
                                    <label>
                                    <input type="radio" name="answer" value={props.Wronganswers[props.Answerthree]}/> {props.Wronganswers[props.Answerthree]}
                                    </label>:null}

                        </div>
            </div>)
}




export default AnswerKomboOne