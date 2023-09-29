import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import youtubeReducer from './reducers/youtubeReducer';
const indexReducer= combineReducers({youtubeReducer});

export default createStore(indexReducer, {}, applyMiddleware(ReduxThunk));