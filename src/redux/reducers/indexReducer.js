import {combineReducers} from 'redux';

import homepageReducer from './homepageReducer';
import videopageReducer from './videopageReducer';

export default combineReducers({homepageReducer, videopageReducer});