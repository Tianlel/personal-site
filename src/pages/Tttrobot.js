import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const sections = [
];

const Qupcakes = () => (
  <Main
    title="Tic-Tac-Toe Robot"
  >
    <article className="post" id="tttrobot">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="robot">Tic-Tac-Toe Robot</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <p>This was a project that combined robot navigation and
        reinforcement learning. A single TurtleBot3 was implemented to execute
        for both players.
      </p>
      <p>Game play demo:
      </p>
      <li>Trained red player vs random blue player
        <img
          src={`${process.env.PUBLIC_URL}${'/images/projects/red_max_blue_random_10x.gif'}`}
          alt="trained red player vs random blue player"
          width="800"
          height="500"
        />
      </li>
      <li>Trained red player vs trained blue player
        <img
          src={`${process.env.PUBLIC_URL}${'/images/projects/red_max_blue_min_20x.gif'}`}
          alt="trained red player vs trained blue player"
          width="800"
          height="500"
        />
      </li>
    </article>
  </Main>
);

export default Qupcakes;
