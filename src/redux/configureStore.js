import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';

import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
