import React, { Component, PropTypes } from 'react';
import Heart from '../Heart';

export default class PostFooter extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            username: PropTypes.string
        })).isRequired,
        favoriteImage: PropTypes.func.isRequired,
        isLiked: PropTypes.bool.isRequired,
        likes: PropTypes.number.isRequired,
        saveComment: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            commentInput: ''
        };
    }
    handleCommentInputChange = (event) => {
        this.setState({
            commentInput: event.target.value
        });
    };
    handleSave = (event) => {
        if (event.key === 'Enter') {
            this.props.saveComment(event);
            this.setState({
                commentInput: ''
            });
        }
    };
    render() {
        const { likes, isLiked, comments, favoriteImage } = this.props;
        return (
            <footer>
                <p className="postLikes">
                    {!likes ? null : `${likes} likes`}
                </p>
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
                    <Heart
                      isLiked={isLiked}
                      favoriteImage={favoriteImage}
                    />
                    <input
                      type="text"
                      value={this.state.commentInput}
                      onChange={this.handleCommentInputChange}
                      placeholder="Add a comment..."
                      onKeyPress={this.handleSave}
                    />
                    {/* dot dot dot */}
                </div>
            </footer>
        );
    }
}
