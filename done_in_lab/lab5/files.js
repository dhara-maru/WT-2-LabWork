const express = require('express')
const fs = require('fs')
const app = express();


const readData = (filename, res)=>{
    fs.readFile(filename, (err, data)=>{
        if(err) res.status(404).send("Page not found");
           res.send(data)
    })
}
app.get('/', (req, res)  => readData('homepage.html',res))
app.get('/about', (req, res)  => readData('aboutpage.html',res))
app.get('/contact', (req, res)  => readData('contactpage.html',res))
app.get('/portfolio', (req, res)  => readData('portfoliopage.html',res))

app.listen(4445, ()=>console.log("http://localhost:4445"))