import React from "react"; 

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
    Answernumberthree: [2]
    
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

nextQuestion = (e) => {

    e.preventDefault()

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



        return (<div className="container">

                    <h2>THIS IS THE FIRST QUIZ</h2>

                    

                    {this.state.loaded?                     
                               
                               
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
                                     <button className="btn" type="Submit" >TAKE QUESTION</button>
                                </div>
                        </form>:null}
                </div>)}
                
        }


export default Firstquiz