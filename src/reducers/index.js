import searchMovie from './searchReducer.js';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    searchMovie,
})

export default rootReducer;