import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLoading } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';

/* Movie */
export class Movie extends Component {
  render() {
    const { loading, movie, movies } = this.props;
    let selectedMovieTrailer = movies.filter(movie => movie.EventCode == this.props.match.params.id);
    let selectedMovie = Object.assign({}, selectedMovieTrailer);
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-7 card card-body">
            <img src={`https://in.bmscdn.com/events/moviecard/${selectedMovie[0].EventCode}.jpg`} className="thumbnail" />
          </div>
          <div className="col-md-5">

            <h2 className="mb-2 colorWhite ">{selectedMovie[0].EventName}</h2>
            <div className="colorWhite">{selectedMovie[0].EventLanguage}</div>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { setLoading }
)(Movie);
