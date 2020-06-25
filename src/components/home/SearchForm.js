import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  filterMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    console.log('componentDidMount');
    this.props.fetchMovies();
  }

  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.filterMovies(this.props.text);
  };

  componentDidMount() {
    this.props.fetchMovies();

  }

/* Search Form */

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container-fluid">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movies
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search By EventName..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text,
  movieFilter: state.movies.movies
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, filterMovies, setLoading }
)(SearchForm);
