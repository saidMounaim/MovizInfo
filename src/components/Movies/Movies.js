import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/searchAction';

class Movies extends Component {
  
  render() {
    console.log("MOCIEEE", this.props.movies)
    return (
      <div className="container">
        <div className="row">
          {this.props.movies.map(movie =>
            <div className="col-md-4 mb-3">
              <Link to={`/movie/${movie.imdbID}`} >
                <div class="box">
                  <img src={movie.Poster} alt="" />
                  <div class="box-content">
                    <h3 class="title">{movie.Title}</h3>
                    <div class="icon">
                      <i className="fas fa-star" ></i>
                      <span>{movie.Year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.searchMovie.movies
  }
}

export default connect(mapStateToProps, { fetchMovie })(Movies);