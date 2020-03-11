import React from "react";
import { db } from "../firebase";
import Firstquiz from "../firstquiz"


class mainPage extends React.Component {
  state = {
    Quizes: [],
    Actualquiz: ""
  };
  // nyQuiz = (id, title) => {
  //   this.id = id;
  //   this.title = title;
  // };
  componentDidMount() {
    db.collection("QG3-Quiz")
      .get()
      .then(doc => {
        doc.forEach(doc => {
          this.nyQuiz(doc.id, doc.data().title);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  nyQuiz = (id, title) => {
    let tommaquiz = [];
    let obj = {};
    obj.realid = id;
    obj.realtitle = title;
    console.log("quizes", tommaquiz);
    tommaquiz = [...this.state.Quizes, obj];
    this.setState({ Quizes: tommaquiz });
  };

  getQuiz = id => {
    this.props.history.push("./Quizrender/" + id);
  };

  render() {
    const NewQuizes = this.state.Quizes.map(obj => {
      console.log(obj);
      const i = obj.realid;
      return (
        <div class="col-md-6 col-lg-4">
          <div className="card">
            <div className="text-center card-body">
              <h3 className="card-title">{obj.realtitle}</h3>
              <p className="quiz-icon">🎲</p>
              <button
                className="btn btn-secondary"
                onClick={() => {this.getQuiz(i);}}> 
                  Take Quiz
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="content">
          <h1 className="mb-5">The Quiz App</h1>
          <div className="card-deck">
              {NewQuizes}
            </div>
          </div>
        </div>
    );
  }
}

export default mainPage;
