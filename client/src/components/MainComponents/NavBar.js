import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">GitHub Repositories Search</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={'/bookmarks'} className="nav-link">Bookmarks<span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
