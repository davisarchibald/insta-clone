import React from 'react';
import Feed from '../feed';

export default function App(props) {
    return (
        <section>
            {/* <Nav /> */}
            <Feed
              {...props}
            />
            {/* <Footer /> */}
        </section>
    );
}
