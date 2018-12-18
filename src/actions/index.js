import jsonPlaceHolder from '../apis/jsonPlaceHolder';

//action creator for fetching all the posts using the middleware redux thunk.
export const fetchPosts = () =>
    async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        })
    }