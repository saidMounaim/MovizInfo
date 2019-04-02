import { SEARCH_MOVIE, FETCH_MOVIE, MOVIE_DETAILS } from '../actions/types';

const initialState = {
    text: "",
    movies: [],
    movie: {}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movies: action.payload,
            }
        case MOVIE_DETAILS:
            return {
                ...state,
                movie: action.payload,
            }
        default:
            return state;
    }

}