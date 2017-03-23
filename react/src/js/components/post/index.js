import React, { PropTypes } from 'react';

export default function Post({ data }) {
    if (!data) return null;
    return (
        <section>
            POST
        </section>
    );
}

Post.propTypes = {
    data: PropTypes.shape.isRequired
};
