import React from "react"; 
import Answer from './Answer.js'

import { db } from './firebase'


class Firstquiz extends React.Component {

state =  {

    loaded: false,
    ids:[],
    Quiztitle:"",
    Questions: [],
    Answers: [],
    data:[],
    index: -1
    
}

componentDidMount = () => {


   this.setState({loaded: false})

   const dat = [...this.state.data]

   db.collection("QG3-Quiz").doc("Quiz 1").get().then(function(doc) {
       
    if (doc.exists) {dat.push(doc.data())}}).catch(err=>console.log(err))

    this.setState({data: dat, loaded:true})
    this.updatastate()}


updatastate = () => {


    let dat = [...this.state.data]

   let i = parseInt(this.state.index)

    const end = dat.filter(dat=>dat.questions.length==i)

    if (end.length) {alert("GAME OVER"); this.setState({loaded:false});return}

    const ques = dat.map(dat=>dat.questions[i].question)

    this.setState({Questions: ques.map(que=><p>{que}</p>)})

    const ans = dat.map(dat=>dat.questions[i].answers)

    this.setState({Answers: ans.map(answers=>answers.map(ans=><Answer text={ans.text}/>))})

    const tit = dat.map(dat=>dat.title)

    this.setState({Quiztitle: tit, index: i+1})

   }

render () {


        return (<div> 
                
                    <div>
                        <h2>WELCOME TO THE QUIZ</h2>
                        <h3>QUIZ NAME: {this.state.Quiztitle}</h3>

                        {this.state.loaded? 
                        <div>
                            <div className="question" >{this.state.Questions}</div>
                             <form className="answerform">
                                {this.state.Answers}
                             </form>   
                        </div>:null}
                    </div>
               
                    <div className="next">
                        <button className="btn" type="click" onClick={this.updatastate} >TAKE QUESTION</button>
                    </div>
                </div>)}
                
        }


export default Firstquiz