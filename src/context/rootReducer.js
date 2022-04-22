import { combineReducers } from 'redux';

import { authReducer } from './auth/authReducer';
import { coursesReducer } from './courses/coursesReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  courses: coursesReducer,
});

export default rootReducer;
