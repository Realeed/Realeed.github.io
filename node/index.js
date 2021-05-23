const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening to port: ${port}`));

app.use(express.static('../'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '../index.html');
})