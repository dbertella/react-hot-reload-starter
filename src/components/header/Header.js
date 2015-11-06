import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header id="main_header" className="cf">
        <div className="wrapper_wide">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
