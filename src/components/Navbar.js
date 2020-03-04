import React from "react";
import { Icon } from "@iconify/react";
import bxGame from "@iconify/icons-bx/bx-game";

class navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-darken">
        <a className="navbar-brand rounded mx-auto d-block" href="#">
          <Icon icon={bxGame} />
        </a>
      </nav>
    );
  }
}

export default navbar;
