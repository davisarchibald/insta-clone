import React, { PropTypes } from 'react';

export default function buildTags(text) {
    const tagMatches = text.match(/@([a-z]+)/ig);
    if (tagMatches) {
        return tagMatches.map((tag, index) => {
            const splitTag = tag.split('');
            splitTag.shift();
            const linkedTag = (
                <a
                  key={`${tag}-${index}`}
                  className="commentTag"
                  href={`${window.location.origin}/${splitTag.join('')}/`}
                >{tag} </a>
            );
            return {
                linkedTag,
                tag
            };
        });
    }
    return [];
}
