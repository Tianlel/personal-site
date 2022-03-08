import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const sections = [
];

const Qupcakes = () => (
  <Main
    title="Qupcakes"
  >
    <article className="post" id="qupcakes">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="qupcakes">Qupcakes</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <p>Qupcakes aims to teach middle school students about quantum gate
        operations in the context of a cupcakeria.
        The player needs to utilize quantum gate
        logic to serve the correct cupcakes to the customers.

      </p>
      <p>The project is motivated by the following:
        <li>Urging need for future quantum workforce</li>
        <li>Lack of QIS (quantum information science) educational materials
          for k-12
        </li>
        <li>Educational games are engaging and non-intimidating</li>
        <li>Understanding basic quantum computing concepts doesn&apos;t
          require advanced math or physics
        </li>
      </p>
      <p> Everything in this game is created by me, including
        the representation design,
        the interaction design, the level progression, and the art assets.
        The current game version introduces 5 different quantum gates and
        explores the quantum concepts of superposition, measurement and phases.
        The next step is to include entanglement.
      </p>
      <p>You can try out the game
        <a href="https://chord.cs.uchicago.edu/Quander/QuantumCafe/"> here</a>!
      </p>
    </article>
  </Main>
);

export default Qupcakes;
