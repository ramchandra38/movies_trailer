import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

export class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

/* NavBar */
    const { languages } = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-dark mb-5">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand text-white text-lg brand-text navBarPadding" to="/">
                Movie Trailers
            </Link>
            </div>
            <div className="navbar-nav ml-auto text-light marginRight d-inline-block">
              <select className="selectDropdown">
              <option selected>Select Language </option>
                <option >English </option>
                <option>Marathi </option>
              </select>
              <select className="selectDropdown">
                <option selected>All Genres  </option>
                <option>Test1 </option>
                <option>Test2 </option>
              </select>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('navbar', state);
  return {
    //you can now say this.props.mappedAppSate
    languages: state.movies.languageDropdown
  }
}

export default connect(mapStateToProps, null)(Navbar);
