import { RECEIVE_POSTS, TOGGLE_LIKE } from './actions';

const initialState = [];

export default function feed(state = initialState, action) {
    switch (action.type) {
    case RECEIVE_POSTS:
        return [...state, ...action.posts];
    case TOGGLE_LIKE:
        const newState = [...state];
        // this isn't ideal, but should do the trick at the moment
        newState.forEach((post, index) => {
            if (post.id === action.postId) {
                newState[index].isLiked = action.value;
            }
        });
        return newState;
    default:
        return state;
    }
}
