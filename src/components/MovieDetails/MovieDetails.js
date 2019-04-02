import React, { Component } from 'react'
import './MovieDetails.css';

import { connect } from 'react-redux';
import { movieDetails } from '../../actions/searchAction';

class MovieDetails extends Component {

    componentDidMount() {
        this.props.movieDetails(this.props.match.params.id)
    }

  render() {
    return (
        <div id="content_hero" class="center-content hero-ontop" style={{ backgroundImage: `url(${this.props.movie.Poster})` }} >
            <div class="container">
                <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
                    <div class="col-md-9">
                        <h1>{this.props.movie.Title}</h1>
                        <h4><span>Director : </span> {this.props.movie.Director}</h4>
                        <h4><span>Actors : </span> {this.props.movie.Actors}</h4>
                        <h4><span>Genre : </span> {this.props.movie.Genre}</h4>
                        <p></p>
                        <div class="buttons">
                            <a href={this.props.movie.Website} data-vbtype="video" class="venobox btn btn-default vbox-item">
                                <span>More Details</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        movie: state.searchMovie.movie
    }
}

export default connect(mapStateToProps, { movieDetails })(MovieDetails);