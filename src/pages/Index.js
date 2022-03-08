import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Tianle Liu's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">What I am working on ...</Link></h2>
          <p>
            An educational game called <a href="https://chord.cs.uchicago.edu/Quander/QuantumCafe/">Qupcakes</a> that teaches quantum gate operations.
          </p>
          <a href="https://chord.cs.uchicago.edu/Quander/QuantumCafe/" className="image">
            <img
              src={`${process.env.PUBLIC_URL}${'/images/projects/qupcakesscene.jpg'}`}
              alt="Qupcakes Game Scene"
              width="800"
              height="500"
            />
          </a>
        </div>
      </header>
      <p> Welcome! I am working on putting more stuff onto my website. Maybe check
        back in a month if you want to find more about me :)
      </p>
    </article>
  </Main>
);

export default Index;
