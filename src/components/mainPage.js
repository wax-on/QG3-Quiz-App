import React from "react";

class mainPage extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="mb-5">Quiz App</h1>
        <div className="container">
          <div className="row">
            <div className="text-center card col-sm-12 col-md-4 col-lg-4">
              <div className="text-center card-body">
                <p className="text-center card-text text-center">Quiz name</p>
                <button className="text-center button">Take Quiz</button>
              </div>
            </div>
            <div className="text-center card col-sm-12 col-md-4 col-lg-4">
              <div className="text-center card-body">
                <p className="text-center card-text text-center">Quiz name</p>
                <button className="text-center button">Take Quiz</button>
              </div>
            </div>
            <div className="text-center card col-sm-12 col-md-4 col-lg-4">
              <div className="text-center card-body">
                <p className="text-center card-text text-center">Quiz name</p>
                <button className="text-center button">Take Quiz</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainPage;
