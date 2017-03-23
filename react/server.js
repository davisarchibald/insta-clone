const express = require('express');
const app = express();
// const renderToString = require('./node_modules/react-dom/server').renderToString;

app.set('port', (process.env.PORT || 3000));

function handleRequests(req,res) {
    if(req.path.match(/\/dist\//g)) {
        res.sendFile(req.url, {root: __dirname});
    } else {
        res.sendFile('index.html', { root: __dirname });
    }
}

app.all('/*', handleRequests);

app.listen(app.get('port'), () => (
    console.log('insta-clone-react is running on port', app.get('port'))
));
