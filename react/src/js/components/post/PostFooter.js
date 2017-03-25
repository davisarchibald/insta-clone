import React, { PropTypes } from 'react';

export default function PostFooter({ likes, isLiked, comments, favoriteImage }) {
    return (
        <footer>
            <p className="postLikes">
                {!likes ? null : `${likes} likes`}
            </p>
            {/* Comments */}
            <div className="postComments">
                {
                    comments.map(comment => (
                        <p key={comment.id}>
                            <strong>{comment.username} </strong>
                            {comment.text}
                        </p>
                    ))
                }
            </div>
            <div className="postActions">
                {/* Heart */}
                {/* Comment input */}
                {/* dot dot dot */}
            </div>
        </footer>
    );
}

PostFooter.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        username: PropTypes.string
    })).isRequired,
    favoriteImage: PropTypes.func.isRequired,
    isLiked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired
};
