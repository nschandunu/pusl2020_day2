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
    const safeName = String(currentName || 'Guest')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Greeting</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1>Hello, ${safeName}!</h1>
            <p>This is your greeting page.</p>
            <a href="/">Go Back</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});