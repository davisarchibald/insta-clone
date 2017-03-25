import React, { PropTypes } from 'react';
import buildTags from '../utils/buildTags';

function handleText(text) {
    const tags = buildTags(text);
    let textArray = text.split(' ');
    if (tags.length) {
        textArray = textArray.map((currentText) => {
            const tag = tags.filter(item => currentText === item.tag);
            if (tag.length) {
                return tag[0].linkedTag;
            }
            return `${currentText} `;
        });
    } else {
        textArray = textArray.join(' ');
    }
    return textArray;
}

export default function Comment({ text, username }) {
    return (
        <p className="comment">
            <strong>
                <a href={`${window.location.origin}/${username}/`}>{username} </a>
            </strong>
            {handleText(text)}
        </p>
    );
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};
