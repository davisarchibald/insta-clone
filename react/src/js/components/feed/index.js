import React, { PropTypes } from 'react';
import Post from '../post';

// dynamic actions handled here should be infinite scroll

export default function Feed({ posts, userInfo }) {
    if (!posts) {
        return null;
    }
    return (
        <section className="feed">
            {posts.map(post => (
                <Post
                  post={post}
                  userInfo={userInfo}
                  key={post.id}
                />
            ))}
        </section>
    );
}

Feed.propTypes = {
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
