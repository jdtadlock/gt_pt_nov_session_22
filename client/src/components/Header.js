import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header>
    <h3>{props.title}</h3>
    <nav>
      {/* <button onClick={props.increase}>Increase</button> */}

      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>
);

export default Header;