import React, { PropTypes } from 'react';

export default function PostImage({ image, favoriteImage }) {
    return (
        <section className="postImage">
            <img src={image} alt="" onDoubleClick={favoriteImage} />
        </section>
    );
}

PostImage.propTypes = {
    favoriteImage: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired
};
