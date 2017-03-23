import React, { PropTypes } from 'react';
import Post from '../post';

// dynamic actions handled here should be infinite scroll

export default function Feed({ posts }) {
    return (
        <section>
            {posts.map(post => (
                <Post
                  data={post}
                  key={post.id}
                />
            ))}
        </section>
    );
}

Feed.propTypes = {
    posts: PropTypes.arrayOf.isRequired
};
