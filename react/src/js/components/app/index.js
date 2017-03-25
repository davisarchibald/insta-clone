import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Feed from '../feed';

class App extends Component {
    static propTypes = {
        feed: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            timeSincePost: PropTypes.string,
            likes: PropTypes.number,
            isLiked: PropTypes.bool,
            comments: PropTypes.arrayOf,
            link: PropTypes.string,
            image: PropTypes.string
        })),
        userInfo: PropTypes.shape()
    };
    static defaultProps = {
        feed: [],
        userInfo: {}
    };
    render() {
        return (
            <section>
                {/* <Nav /> */}
                <Feed
                  posts={this.props.feed}
                  userInfo={this.props.userInfo}
                />
                {/* <Footer /> */}
            </section>
        );
    }
}

function mapStateToProps(state) {
    const { feed, userInfo } = state;
    return { feed, userInfo };
}

export default connect(mapStateToProps)(App);
