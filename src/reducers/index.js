import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
  // dummyKey: () => 'hi'
  posts: postsReducer
});
