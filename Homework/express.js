const express = require('express'); 
const app = express(); 

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(4040, () => {
    console.log(`Server is running on http://localhost:4040`);
});
