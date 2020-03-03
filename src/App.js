import React from "react";
import "./index.css";
import MainPage from "./components/mainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
