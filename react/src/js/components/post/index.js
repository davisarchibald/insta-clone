import React, { PropTypes } from 'react';

// post header
// post body, i.e. image
// post Footer
    // comments, like, actions

// dynamic actions handled here should include save like, save comment, handle footer actions

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
