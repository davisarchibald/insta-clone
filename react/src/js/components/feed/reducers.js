const initialState = [{
    id: 48941,
    username: 'bobbarker',
    timeSincePost: '15h',
    likes: 25,
    isLiked: true,
    comments: [{
        username: 'billybobthorton',
        text: 'Rad photo!',
        id: 58967889
    }],
    link: 'https://www.instagram.com/p/BRUhIGIFego/',
    image: 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/17125662_1257127117690209_5723126681644826624_n.jpg'
}, {
    id: 75809,
    username: 'bobbarker',
    timeSincePost: '24h',
    likes: 50,
    isLiked: true,
    comments: [{
        username: 'billybobthorton',
        text: 'Rad photo!',
        id: 25328683628638
    }],
    link: 'https://www.instagram.com/p/BRUhIGIFego/',
    image: 'https://instagram.fsnc1-5.fna.fbcdn.net/t51.2885-15/e35/16789400_1336209229778203_1725555110337052672_n.jpg'
}];

export default function feed(state = initialState, action) {
    switch (action.type) {
    default:
        return state;
    }
}
