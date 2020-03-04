import React from "react";
import "./index.css";
import MainPage from "./components/mainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuizCreator from "./components/QuizCreator";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainPage />
        <QuizCreator />
        <Footer />
      </div>
    );
  }
}

export default App;
