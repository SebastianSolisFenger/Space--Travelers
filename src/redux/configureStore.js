import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
