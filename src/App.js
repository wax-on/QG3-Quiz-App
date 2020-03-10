import React from "react";
import "./index.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "./components/mainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Firstquiz from "./firstquiz";
=======
import QuizCreator from "./components/QuizCreator";
import AddQuizQuestion from "./components/AddQuizQuestion"
import Firstquiz from "./firstquiz.js"
>>>>>>> adbb0f56794d0d315b972c220e8b1d4fb2d3716a

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/create-quiz" component={QuizCreator} />
<<<<<<< HEAD
            <Route path="/create-quiz-question" component={AddQuizQuestion} />
=======
            <Route path="/create-quiz-question/:quiz_id" component={AddQuizQuestion} />
            <Route path="/Quizrender/:quiz_id" component={Firstquiz} />
>>>>>>> adbb0f56794d0d315b972c220e8b1d4fb2d3716a
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
