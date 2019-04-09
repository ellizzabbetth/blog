import jsonPlaceholder from '../apis/jsonPlaceholder';


// returns array
export const fetchPosts = () =>
//  return async function(dispatch, getState) {
    async dispatch => {
    // request
    const response =  await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// returns object
export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
