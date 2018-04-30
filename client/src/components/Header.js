import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header>
    <NavLink to="/" exact className="logo">
      <h3>{props.title}</h3>
    </NavLink>
    <nav>
      {/* <button onClick={props.increase}>Increase</button> */}

      <NavLink to="/create" exact>Create Note</NavLink>
    </nav>
  </header>
);

export default Header;