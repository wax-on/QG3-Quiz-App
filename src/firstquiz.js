import React from "react"; 
import AnswerKomboOne from "./AnswerKomboOne.js"
import AnswerKomboTwo from "./AnswerKomboTwo.js"
import AnswerKomboThree from "./AnswerKomboThree.js"

import { db } from './firebase'


class Firstquiz extends React.Component {

state =  {

    start: true,
    loaded: false,
    ids:[],
    Questions: [],
    Rightanswers: [],
    Wronganswers: [],
    Questionnumber: [0],
    Answernumberone: [0],
    Answernumbertwo: [1],
    Answernumberthree: [2],
    Randomnumber: ""
    
}

componentDidMount = () => {

   // e.preventDefault()


        const newIds = [...this.state.ids]
        const newQuestions = [...this.state.Questions]
        const newRightanswers = [...this.state.Rightanswers]
        const newWronganswers = [...this.state.Wronganswers]

    db.collection("Swedenquiz").get().then(function(querySnapshot) {


        querySnapshot.forEach(function(doc) {
            
            newIds.push(doc.id)
            newQuestions.push(doc.data().Question)
            newRightanswers.push(doc.data().Rightanswer)
            newWronganswers.push(doc.data().Wronganswerone)
            newWronganswers.push(doc.data().Wronganswertwo)
            newWronganswers.push(doc.data().Wronganswerthree)
        });
    
    })
    .then(this.setState({ids: newIds, Questions: newQuestions, Rightanswers: newRightanswers, Wronganswers: newWronganswers}))
    
    .then(this.setState({loaded: true, start: false}))
    .catch(err=>console.log(err))

}

getRandom = () => {

    let ran = Math.floor(Math.random()*4)

    this.setState({Randomnumber: ran})
    console.log(this.state.Randomnumber)
}

nextQuestion = (e) => {

    e.preventDefault()

    this.getRandom()

    this.setState({loaded: false})

    let newQuestionnum = parseInt(this.state.Questionnumber)
    newQuestionnum = newQuestionnum +1
    
    let nyAnswernumberone = parseInt(this.state.Answernumberone)
    nyAnswernumberone = nyAnswernumberone + 3

    let nyAnswernumbertwo = parseInt(this.state.Answernumbertwo)
    nyAnswernumbertwo = nyAnswernumbertwo + 3

    let nyAnswernumberthree = parseInt(this.state.Answernumberthree)
    nyAnswernumberthree = nyAnswernumberthree + 3



    this.setState({Questionnumber: newQuestionnum, Answernumberone: nyAnswernumberone, Answernumbertwo: nyAnswernumbertwo, Answernumberthree: nyAnswernumberthree})

    this.setState({loaded: true})

    if (parseInt(newQuestionnum)==10) {alert("Game over");
                            this.setState({loaded:false, start:true})}
}



render () {



        return (<form onSubmit={this.nextQuestion} className="container">

                    <h2>THIS IS THE FIRST QUIZ</h2>

                    

                    {this.state.loaded && this.state.Randomnumber===0?                     
                               
                               <AnswerKomboOne submit={this.nextQuestion} Questions={this.state.Questions} Questionnumber={this.state.Questionnumber} Wronganswers={this.state.Wronganswers} Rightanswers={this.state.Rightanswers} Answerone={this.state.Answernumberone} Answertwo={this.state.Answernumbertwo} Answerthree={this.state.Answernumberthree}/>:null}

                               {this.state.loaded && this.state.Randomnumber===1?                     
                               
                               <AnswerKomboTwo submit={this.nextQuestion} Questions={this.state.Questions} Questionnumber={this.state.Questionnumber} Wronganswers={this.state.Wronganswers} Rightanswers={this.state.Rightanswers} Answerone={this.state.Answernumberone} Answertwo={this.state.Answernumbertwo} Answerthree={this.state.Answernumberthree}/>:null}

                               {this.state.loaded && this.state.Randomnumber===2?                     
                               
                               <AnswerKomboThree submit={this.nextQuestion} Questions={this.state.Questions} Questionnumber={this.state.Questionnumber} Wronganswers={this.state.Wronganswers} Rightanswers={this.state.Rightanswers} Answerone={this.state.Answernumberone} Answertwo={this.state.Answernumbertwo} Answerthree={this.state.Answernumberthree}/>:null}

                    {this.state.loaded && this.state.Randomnumber===3?          
                         <form className="quizform" onSubmit={this.nextQuestion}>
                            <h2>{this.state.Questions[this.state.Questionnumber]}</h2>
                                
                            {this.state.Wronganswers[this.state.Answernumberone]!==undefined?
                                   <label>
                                    <input type="radio" name="answer" value={this.state.Wronganswers[this.state.Answernumberone]}/> {this.state.Wronganswers[this.state.Answernumberone]}
                                    </label>:null}

                            {this.state.Wronganswers[this.state.Answernumbertwo]!==undefined?
                                    <label>
                                    <input type="radio" name="answer" value={this.state.Wronganswers[this.state.Answernumbertwo]}/>{this.state.Wronganswers[this.state.Answernumbertwo]}
                                    </label>:null}

                            {this.state.Wronganswers[this.state.Answernumberthree]!==undefined?
                                    <label>
                                    <input type="radio" name="answer" value={this.state.Wronganswers[this.state.Answernumberthree]}/> {this.state.Wronganswers[this.state.Answernumberthree]}
                                    </label>:null}

                             {this.state.Rightanswers[this.state.Questionnumber]?     
                                    <label>                   
                                    <input type="radio" name="answer" value={this.state.Rightanswers[this.state.Questionnumber]}/>
                                    {this.state.Rightanswers[this.state.Questionnumber]}
                                    </label> :null} 
                                <div>
                                     
                                </div>
                        </form>:null}
                        <button className="btn" type="Submit" >TAKE QUESTION</button>
                </form>)}
                
        }


export default Firstquiz