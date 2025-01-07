const express = require('express'); 
const app = express();

const PORT = 3000; 


app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page!');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact Page!');
});

app.get('/services', (req, res) => {
    res.send('These are our Services!');
});

app.get('/portfolio', (req, res) => {
    res.send('Welcome to the Portfolio Page!');
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
