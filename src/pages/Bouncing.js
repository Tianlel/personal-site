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
      <p>Inspired by an
        <a href="https://experiments.withgoogle.com/bouncing-band"> Experiments with Google project -- bouncing-band
        </a> (I wasn&apos;t able to actually play with this because it could
        only be viewed with an Android phone and I did&apos;t have one),
        I wanted to build my own bouncing band with more interesting
        musical options (the sound effects of the original one were things
        like duck quacking and bomb explosion).
      </p>
      <p>Beside the yellow duck (which I borrowed from the bouncing band github),
        I found my free models on cgtrader. I took blender models and used blender
        to export them to gltf. I got my free sound tracks for the bounces from Epidemic Sound.
      </p>
      <p>By clicking on different colored boxes from above you can pick from
        different cute animals + 1 planet with different percussion sounds and
        place them in different places so that they can bounce off the ground and
        make beats. The three round buttons on the left allow you to adjust the
        bouncing speed and reset the stage.  The lower line of cubes are like piano
        keys, you can press on them to play notes and add more tune to your music.
      </p>
      <p>Video demos:
        <li>VR mode with inelastic bouncing: <a href="https://drive.google.com/file/d/1zTAnOJtwpSf4uvrthNClY3Jk-kJEAiyc/view?usp=sharing">link</a></li>
        <li>AR mode with inelastic bouncing: <a href="https://drive.google.com/file/d/1TClC4Iu046uaJIDkZLzpkbn_cCH6LhFT/view?usp=sharing">link</a></li>
      </p>
      <p>I created this project with <a href="http://openendedgroup.com/field/">Field</a>.</p>
    </article>
  </Main>
);

export default Qupcakes;
