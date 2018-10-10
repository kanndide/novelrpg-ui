import React from 'react';
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  textAlign: 'center',
  fontSize: 'medium',
}

const div = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '999',
  width: '100%',
  border: '1px solid black',
  padding: '5px',
  background: 'SlateGrey',
}

const linkDiv = {
  margin: 'auto',
  alignItems: 'center',
}

const Navbar = () =>
  <div id="navbar" className="col-sm-8" style={div}>
    <div className="col-sm-3" style={linkDiv}>
      <NavLink
        to="/"
        exact
        style={link}
        className="col-sm-3"
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
    </div>
    <div className="col-sm-3">
      <NavLink
        to="/signup"
        exact
        style={link}
        className="col-sm-3"
        activeStyle={{
          background: 'darkblue'
        }}
      >Sign Up</NavLink>
    </div>
    <div className="col-sm-3">
      <NavLink
        to="/login"
        exact
        style={link}
        className="col-sm-3"
        activeStyle={{
          background: 'darkblue'
        }}
      >Login</NavLink>
    </div>
    <div className="col-sm-3">
      <NavLink
        to="/login"
        exact
        style={link}
        className="col-sm-3"
        activeStyle={{
          background: 'darkblue'
        }}
      >Logout</NavLink>
    </div>
  </div>;

export default Navbar