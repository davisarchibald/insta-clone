import React, { PropTypes } from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

// post Footer
    // comments, like, actions

// TODO: Build out actions and reducers for posts
// dynamic actions handled here should include save like, save comment, handle footer actions

export default function Post({ post, userInfo, saveImageToFavorites }) {
    if (!post) return null;
    return (
        <section>
            <PostHeader
              username={post.username}
              userphoto={post.userphoto}
              timeSincePost={post.timeSincePost}
              linkToPost={post.link}
              location={post.location}
            />
            <PostImage
              image={post.image}
              favoriteImage={() => {
                  // call action to save to favorites
                  saveImageToFavorites(post.id, userInfo);
              }}
            />
            <PostFooter
              likes={post.likes}
              isLiked={post.isLiked}
              comments={post.comments}
              favoriteImage={() => {
                  saveImageToFavorites(post.id, userInfo);
              }}
            />
        </section>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        timeSincePost: PropTypes.string,
        likes: PropTypes.number,
        isLiked: PropTypes.bool,
        comments: PropTypes.arrayOf,
        link: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    saveImageToFavorites: PropTypes.func.isRequired,
    userInfo: PropTypes.shape({
        userId: PropTypes.number
    }).isRequired
};
