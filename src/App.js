import React from "react";
import "./index.css";
import MainPage from "./components/mainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Firstquiz from "./firstquiz.js"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainPage />
        <Firstquiz />
        <Footer />
      </div>
    );
  }
}

export default App;
