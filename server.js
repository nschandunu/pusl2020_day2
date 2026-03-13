console.log("Hi, i'm working rn !!")
const port = 3000;
const exp = require('express');
const app = exp();


//my dey
app.listen(port, () => {
    console.log(`Server is running on port ${port}. \n Enter Ctrl + C to stop the server.`);
});

// new way
// app.listen(port, ()

