import React from "react";
import { Icon } from "@iconify/react";
import bxGame from "@iconify/icons-bx/bx-game";
import { NavLink } from 'react-router-dom'

class navbar extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg">
				<a className="navbar-brand rounded" href="/">
					<Icon icon={bxGame} />
				</a>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<NavLink to="/create-quiz" className="nav-link">Create Quiz</NavLink>
					</li>
					<li class="nav-item">
						<a href="/" className="nav-link">Quizzes</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default navbar;
