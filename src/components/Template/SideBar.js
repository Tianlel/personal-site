import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Tianle Liu</h2>
        <p><a href="mailto:liutianle@uchicago.edu">liutianle@uchicago.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey, I&apos;m Tianle.
        I am currently a pre-doctoral master&apos;s student in computer science at UChicago.
        Before this, I studied physics and mathematics in the College.
      </p>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Tianle Liu <Link to="/">tianleliu.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
