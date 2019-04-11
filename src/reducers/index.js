import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  // dummyKey: () => 'hi'
  posts: postsReducer,
  users: usersReducer
});
