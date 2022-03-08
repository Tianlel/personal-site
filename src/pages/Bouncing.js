import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const sections = [
];

const Qupcakes = () => (
  <Main
    title="Bouncing Band+"
  >
    <article className="post" id="bouncing">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="bouncing">Bouncing Band+</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
    </article>
  </Main>
);

export default Qupcakes;
