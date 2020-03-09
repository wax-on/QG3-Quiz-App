import React from "react";
import { Icon } from "@iconify/react";
import bxGame from "@iconify/icons-bx/bx-game";
import { NavLink } from 'react-router-dom'

class navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-darken">
        <a className="navbar-brand rounded mx-auto d-block" href="/">
          <Icon icon={bxGame} />
        </a>
        <span className="pr-3">
          <NavLink to="/create-quiz" className="list-style-none text-dark">Create Quiz</NavLink>
        </span>
        <span className="pr-3">
          <a href="/" className="list-style-none text-dark">
            Quizes
          </a>
        </span>
      </nav>
    );
  }
}

export default navbar;
