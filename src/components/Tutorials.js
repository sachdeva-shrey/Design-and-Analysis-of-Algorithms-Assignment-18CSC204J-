import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"

import Arrow from '../images/next.png'

//This is a demo

class Tutorials extends Component {

  render() {

    return (
      <>
        <Link to="/" activeClassName="active-link">
            <div className="tutorial-week">
                <h2>Foo Bar: Tutorial 1</h2>
                <img className="next" src={Arrow}></img>
            </div> 
        </Link>
        <div className="tutorial-week">
            <h2>Foo Bar: Tutorial 2</h2>
            <img className="next" src={Arrow}></img>
        </div> 
      </>
    );
  }
}

export default Tutorials;