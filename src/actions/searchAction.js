import { SEARCH_MOVIE, FETCH_MOVIE, MOVIE_DETAILS } from './types';
import axios from 'axios';
import { APIKey } from '../components/APIKey';

export const searchMovie = (text) => dispatch => {
    
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })

};

export const fetchMovie = (text) => dispatch => {

    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
         .then(res => dispatch({
             type: FETCH_MOVIE,
             payload: res.data.Search
         }))

}

export const movieDetails = (id) => dispatch => {

    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(res => dispatch({
            type: MOVIE_DETAILS,
            payload: res.data
        }))

}