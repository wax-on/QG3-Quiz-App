import React from "react"; 
import Answer from './Answer.js'

import { db } from "../fireStore/firebase";


class Firstquiz extends React.Component {

state =  {

    
    
    ids:[],
    Quiztitle:"",
    Questions: [],
    Answers: [],
    correctAnswer: [],
    data:[],
    finnished: false,
    answerpoint:"",
    points:0,
    index: -1
    
}

componentDidMount = () => {
   const dat = [...this.state.data]

   db.collection("QG3-Quiz").doc(this.props.match.params.quiz_id).get()
   .then(function(doc) {  
     if (doc.exists) {
       dat.push(doc.data())}
      })
    .catch(err=>console.log(err))

    this.setState({
      data: dat
    })
    this.updatastate()
  }


updatastate = () => {



    let dat = [...this.state.data]

   let i = parseInt(this.state.index)

    const end = dat.filter(dat=>dat.questions.length==i)

    if (end.length) {this.setState({finnished:true});return}

    const ques = dat.map(dat=>dat.questions[i].question)

    this.setState({Questions: ques.map(que=><p>{que}</p>)})

    const ans = dat.map(dat=>dat.questions[i].answers)

    let correct = dat.map(dat=>dat.questions[i].correctAnswer)

    const answers= ans.map(an=>
      
    an.map(item=>item!=correct? <Answer lagra={this.lagrasvar} text={item} value={false}/>
    
    :null))
    

    let realcorrect=[]

    realcorrect =correct.map(ans=><Answer lagra={this.lagrasvar} text={ans} value={true}/>
    )
    this.setState({Answers: answers, correctAnswer: realcorrect})


    const tit = dat.map(dat=>dat.title)

    this.setState({Quiztitle: tit, index: i+1})

   }

lagrasvar = (e) => {

    this.setState({answerpoint: e.target.value})
}

rattasvar = (e) => {

    e.preventDefault()

   if(this.state.answerpoint=="true"){this.setState({points: this.state.points + 1})}

   this.updatastate()
}

render () {


        return (<div className="container"> 
                
                    <div>
                        <h2>LET THE QUIZZING BEGIN</h2>

                        {this.state.Questions.length && !this.state.finnished? 
                        <div>
                             <h3>QUIZ NAME: {this.state.Quiztitle}</h3>
                             <div className="quiz-questions-output">
                                <div className="question" >{this.state.Questions}</div>

                                <form onSubmit={this.rattasvar} className="answerform">
                                    {this.state.Answers}
                                    {this.state.correctAnswer}
                                    <button className="btn btn-secondary" type="submit">SEND ANSWER</button>
                                </form>   
                             </div>
                        </div>:null}
                    </div>
               
               {!this.state.Questions.length?
                    <div className="next text-center mt-4">
                        <button className="startbtn btn btn-secondary" type="click" onClick={this.updatastate} >START QUIZ</button>
                    </div>:null}

                 {this.state.finnished?<p className="result">YOU GOT {this.state.points} POINTS</p>:null}
                </div>)}
                
        }


export default Firstquiz