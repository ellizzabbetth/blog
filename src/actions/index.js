
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// only action creator that is called
// whenever calling an action creator inside an action creator
// we need to make sure we dispatch the result of calling the
// action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('About to fetch posts');
  // 1. call fetchPosts
   // redux thunk will invoke it
   await dispatch(fetchPosts());
   // 2. get list of posts
   const userIds = _.uniq(_.map(getState().posts, 'userId'));
   console.log(userIds);
   userIds.forEach(id => dispatch(fetchUser(id)));

   _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id => dispatch(fetchUser(id)))
   .value(); // execute lodash
};

// returns array
export const fetchPosts = () =>
//  return async function(dispatch, getState) {
    async dispatch => {
    // request
    const response =  await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

//
export const fetchUser = (id) => async dispatch => {

    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// returns object
// can we memoize this function??
// Can only fetch one user each one inside of app
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });
