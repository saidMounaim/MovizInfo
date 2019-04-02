import React from 'react'
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';

const Home = () => {
  return (
    <div className="container mt-4">
      <div class="jumbotron">
          <h1 class="display-4">Search for a movies & tv shows ...</h1>
          <hr class="my-4" />
          <SearchForm />
      </div>
      <hr className="my-4" />
      <Movies />
    </div>
  )
}

export default Home;