import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* MovieCard */

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-2 bottomMargin">
        <div className="card card-body bg-dark text-center h-100">
          <iframe src={movie.TrailerURL}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media;"
            allowfullscreen>
          </iframe>
        </div>
        <Link to={'/movie/' + movie.EventCode}>
          <h5 className="text-left eventName">
            {movie.EventName}
          </h5>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
