import { combineReducers } from 'redux';

import entities from './entities_reducer';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import posts from './posts_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  entities,
  ui,
  posts,
});

export default rootReducer;