import { RECEIVE_POSTS, TOGGLE_LIKE, ADD_COMMENT } from './actions';

const initialState = [];

export default function feed(state = initialState, action) {
    const newState = [...state];
    switch (action.type) {
    case RECEIVE_POSTS:
        return [...state, ...action.posts];
    case TOGGLE_LIKE:
        // this isn't ideal, but should do the trick at the moment
        newState.forEach((post, index) => {
            if (post.id === action.postId) {
                newState[index].isLiked = action.value;
            }
        });
        return newState;
    case ADD_COMMENT:
        newState.forEach((post, index) => {
            if (post.id === action.postId) {
                newState[index].comments = [...newState[index].comments, action.comment];
            }
        });
        return newState;
    default:
        return state;
    }
}
