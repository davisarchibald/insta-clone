import React, { PropTypes } from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

// post Footer
    // comments, like, actions

// TODO: Build out actions and reducers for posts
// dynamic actions handled here should include save like, save comment, handle footer actions

export default function Post({ data }) {
    if (!data) return null;
    return (
        <section>
            <PostHeader
              username={data.username}
              userphoto={data.userphoto}
              timeSincePost={data.postTime}
              linkToPost={data.link}
              location={data.location}
            />
            <PostImage
              image={data.image}
              favoriteImage={() => {
                  // call action to save to favorites
                  saveImageToFavorites(data.id, userInfo);
              }}
            />
        </section>
    );
}

Post.propTypes = {
    data: PropTypes.shape.isRequired
};
