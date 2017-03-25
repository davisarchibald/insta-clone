const initialState = [{
    id: 48941,
    username: 'bobbarker',
    timeSincePost: '15h',
    likes: 25,
    isLiked: false,
    comments: [{
        username: 'billybobthorton',
        text: 'Rad photo!',
        id: 58967889
    }],
    link: 'https://www.instagram.com/p/BRUhIGIFego/',
    image: 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/17125662_1257127117690209_5723126681644826624_n.jpg'
}];

export default function feed(state = initialState, action) {
    switch (action.type) {
    default:
        return state;
    }
}
