import React, { PropTypes } from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

export default function Post({
    post,
    saveImageToFavorites,
    saveComment
}) {
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
              favoriteImage={saveImageToFavorites}
            />
            <PostFooter
              likes={post.likes}
              isLiked={post.isLiked}
              comments={post.comments}
              favoriteImage={saveImageToFavorites}
              saveComment={(event) => {
                  saveComment(event.target.value);
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
        comments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            username: PropTypes.string
        })),
        link: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    saveComment: PropTypes.func.isRequired,
    saveImageToFavorites: PropTypes.func.isRequired
};
