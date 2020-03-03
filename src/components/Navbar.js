import React from "react";
import { Icon } from "@iconify/react";
import bxGame from "@iconify/icons-bx/bx-game";

class navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <Icon icon={bxGame} />
        </a>
      </nav>
    );
  }
}

export default navbar;
