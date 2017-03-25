import { RECEIVE_POSTS } from './actions';

const initialState = [];

export default function feed(state = initialState, action) {
    switch (action.type) {
    case RECEIVE_POSTS:
        return [...state, ...action.posts];
    // case TOGGLE_LIKE:
    default:
        return state;
    }
}
