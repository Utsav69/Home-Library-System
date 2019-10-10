const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(`${base}/index.html`);
});

app.get('/booklist', function (req, res) {
    res.sendFile(`${base}/booklist.html`);
});

app.get('/registerbook', function (req, res) {
    res.sendFile(`${base}/registerbook.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
   });

app.get('/login', (req, res) => {
    res.sendFile(`${base}/login.html`);
});

app.get('/register', (req, res) => {
    res.sendFile(`${base}/register.html`);
});
   
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});