import React, { Component, PropTypes } from 'react';
import Post from '../post';
import { fetchPosts } from './actions';

// dynamic actions handled here should be infinite scroll
export default class Feed extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            timeSincePost: PropTypes.string,
            likes: PropTypes.number,
            isLiked: PropTypes.bool,
            comments: PropTypes.arrayOf,
            link: PropTypes.string,
            image: PropTypes.string
        })).isRequired,
        userInfo: PropTypes.shape({
            userId: PropTypes.number
        }).isRequired
    };
    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }
    render() {
        const { posts, userInfo } = this.props;
        if (!posts || !posts.length) {
            return null;
        }
        return (
            <section className="feed">
                {posts.map(post => (
                    <Post
                      post={post}
                      userInfo={userInfo}
                      key={post.id}
                      saveImageToFavorites={() => {
                          // hook this up with an action
                          console.log(post.id);
                      }}
                      saveComment={(comment) => {
                          // hook this up with an action
                          console.log(post.id, comment);
                      }}
                    />
                ))}
            </section>
        );
    }
}
