import { expect } from 'chai';
import { describe, it } from 'mocha';
import reducer, { initialState } from './reducers';
import { RECEIVE_POSTS, TOGGLE_LIKE, ADD_COMMENT } from './actions';

describe('Feed reducers', () => {
    const newPosts = [{
        id: 123,
        comments: [],
        isLiked: true,
        likes: 25,
        link: 'http://blahblah.com',
        timeSincePost: '24h',
        username: 'bobbarker'
    }];
    it('should return initial state', () => {
        expect(reducer(undefined, '')).to.deep.equal(initialState);
    });
    it('should add posts to state when RECEIVE_POSTS action is fired', () => {
        const expectedState = [...newPosts];
        expect(reducer(initialState, {
            type: RECEIVE_POSTS,
            posts: newPosts
        })).to.deep.equal(expectedState);
    });
    it('should toggle the like button on the right post when TOGGLE_LIKE action is fired', () => {
        const currentState = [...newPosts];
        const expectedState = [{
            id: 123,
            comments: [],
            isLiked: true,
            likes: 25,
            link: 'http://blahblah.com',
            timeSincePost: '24h',
            username: 'bobbarker'
        }];
        expect(reducer(currentState, {
            type: TOGGLE_LIKE,
            postId: 123,
            value: true
        })).to.deep.equal(expectedState);
    });
    it('should add comment to correct post when ADD_COMMENT action is fired', () => {
        const currentState = [...newPosts];
        const expectedState = [{
            id: 123,
            comments: [{
                id: 456,
                text: 'Rad Photo',
                username: 'billybobthorton'
            }],
            isLiked: true,
            likes: 25,
            link: 'http://blahblah.com',
            timeSincePost: '24h',
            username: 'bobbarker'
        }];
        expect(reducer(currentState, {
            type: ADD_COMMENT,
            postId: 123,
            comment: {
                id: 456,
                text: 'Rad Photo',
                username: 'billybobthorton'
            }
        })).to.deep.equal(expectedState);
    });
});
