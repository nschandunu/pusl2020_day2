console.log("Hi, i'm working rn !!");

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

let currentName = "";

app.post('/submit', (req, res) => {
    currentName = req.body.userName; 
    res.redirect('/greeting'); 
});

app.get('/greeting', (req, res) => {
    res.send(`
        <h1>Hello, ${currentName}!</h1>
        <br>
        <a href="/">Go Back</a>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});