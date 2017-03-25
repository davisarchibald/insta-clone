import React, { PropTypes } from 'react';

export default function PostHeader({ username, userphoto, timeSincePost, linkToPost, linkToUser, location }) {
    return (
        <header>
            <a href={linkToUser} className="userInfo">
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
    linkToUser: PropTypes.string,
    location: PropTypes.string,
    timeSincePost: PropTypes.string,
    username: PropTypes.string.isRequired,
    userphoto: PropTypes.string
};
PostHeader.defaultProps = {
    location: null,
    linkToUser: '',
    userphoto: '',
    timeSincePost: ''
};
