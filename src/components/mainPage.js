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
        <div className="text-center card ruta col-sm-12 col-md-4 col-lg-3 mx-auto">
          <div className="text-center card-body">
            <p className="text-center card-text text-center">{obj.realtitle}</p>
            <button
              className="btn btn-info"
              onClick={() => {
                this.getQuiz(i);
              }}
            >
              Take Quiz
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="container my-5">
          <h1 className="mb-5">Name</h1>
          <div className="container">
            <div className="row">{NewQuizes}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainPage;
