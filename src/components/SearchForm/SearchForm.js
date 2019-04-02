import React, { Component } from 'react'
import { connect } from 'react-redux';

import { searchMovie, fetchMovie } from '../../actions/searchAction';

class SearchForm extends Component {

  onChangeHandler = (e) => {
    this.props.searchMovie(e.target.value);
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.fetchMovie(this.props.text)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} >
        <div className="form-group" >
          <div className="row">
            <div className="col-md-10">
              <input 
                type="search" 
                className="form-control"
                placeholder="Search for a movies & tv shows" 
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary" >Search</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.searchMovie.text
  }
}

export default connect(mapStateToProps, { searchMovie, fetchMovie })(SearchForm);