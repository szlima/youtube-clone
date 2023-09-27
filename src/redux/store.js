import {combineReducers, createStore} from 'redux';

import youtubeReducer from './reducers/youtubeReducer';

const indexReducer= combineReducers({youtubeReducer});

export default createStore(indexReducer);