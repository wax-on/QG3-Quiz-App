import React from "react"; 
import Answer from './Answer.js'

import { db } from './firebase'


class Firstquiz extends React.Component {

state =  {

    loaded: false,
    start:true,
    ids:[],
    Quiztitle:"",
    Questions: [],
    Answers: [],
    Correctans:"",
    data:[],
    finnished: false,
    answerpoint:"",
    points:0,
    index: -1
    
}

componentDidMount = () => {


   this.setState({loaded: false})

   const dat = [...this.state.data]

   db.collection("QG3-Quiz").doc(this.props.match.params.quiz_id).get().then(function(doc) {
       
    if (doc.exists) {dat.push(doc.data())}}).catch(err=>console.log(err))

    this.setState({data: dat, loaded:true, start:false})
    this.updatastate()}


updatastate = () => {


    let dat = [...this.state.data]

   let i = parseInt(this.state.index)

    const end = dat.filter(dat=>dat.questions.length==i)

    if (end.length) {this.setState({loaded:false, finnished:true});return}

    const ques = dat.map(dat=>dat.questions[i].question)

    this.setState({Questions: ques.map(que=><p>{que}</p>)})

    const ans = dat.map(dat=>dat.questions[i].answers)

    this.setState({Answers: ans.map(answer=>answer.map(ans=><Answer lagra={this.lagrasvar} text={ans} value={false}/>))})

    const correct = dat.map(dat=>dat.questions[i].correctAnswer)

    this.setState({Correctans: <Answer lagra={this.lagrasvar} text={correct} value={true}/>})

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


        return (<div> 
                
                    <div>
                        <h2>WELCOME TO THE QUIZ</h2>

                        {this.state.Questions.length && !this.state.finnished? 
                        <div>
                             <h3>QUIZ NAME: {this.state.Quiztitle}</h3>
                            <div className="question" >{this.state.Questions}</div>

                             <form onSubmit={this.rattasvar} className="answerform">
                                {this.state.Answers}
                                {this.state.Correctans}
                                <button type="submit">SEND ANSWER</button>

                             </form>   
                        </div>:null}
                    </div>
               
               {!this.state.Questions.length?
                    <div className="next">
                        <button className="startbtn" type="click" onClick={this.updatastate} >START QUIZ</button>
                    </div>:null}

                 {this.state.finnished?<p className="result">YOU GOT {this.state.points} POINTS</p>:null}
                </div>)}
                
        }


export default Firstquiz