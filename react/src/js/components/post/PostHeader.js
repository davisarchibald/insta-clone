import React, { PropTypes } from 'react';

export default function PostHeader({ username, userphoto, timeSincePost, linkToPost, location }) {
    return (
        <header>
            <a href={linkToPost} className="userInfo">
                <img src={userphoto} alt="" className="userImage" />
                <span className="userName">{username}</span>
                {location ? <span className="postLocation">{location}</span> : null}
            </a>
            <a href={linkToPost} className="timeSincePost">
                {timeSincePost}
            </a>
        </header>
    );
}

PostHeader.propTypes = {
    linkToPost: PropTypes.string.isRequired,
    location: PropTypes.string,
    timeSincePost: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userphoto: PropTypes.string
};
PostHeader.defaultProps = {
    location: null,
    userphoto: ''
};
