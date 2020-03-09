import React from "react";
import "./index.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "./components/mainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuizCreator from "./components/QuizCreator";
import AddQuizQuestion from "./components/AddQuizQuestion";
import Firstquiz from "./firstquiz.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/create-quiz" component={QuizCreator} />
            <Route
              path="/create-quiz-question/:quiz_id"
              component={AddQuizQuestion}
            />
            <Route path="/Quizrender/:quiz_id" component={Firstquiz} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
