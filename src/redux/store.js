import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import indexReducer from './reducers/indexReducer';

export default createStore(indexReducer, {}, applyMiddleware(ReduxThunk));