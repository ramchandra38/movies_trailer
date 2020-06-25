import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';


/* MoviesContainer */

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    content = movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
