import fetch from 'isomorphic-fetch';

export const RECEIVE_POSTS = 'feed/RECEIVE_POSTS';
export function recievePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    };
}

export function fetchPosts(index) {
    return function fetchPostsAction(dispatch) {
        fetch(`/feed${index ? `?index=${index}` : ''}`)
        .then(response => (
            response.json().then((data) => {
                if (response.ok) {
                    dispatch(recievePosts(data));
                }
            })
        ));
    };
}

export const TOGGLE_LIKE = 'feed/TOGGLE_LIKE';
export function toggleLike(postId, isLiked) {
    return {
        type: TOGGLE_LIKE,
        postId,
        value: !isLiked
    };
}
