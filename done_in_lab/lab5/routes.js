const express = require('express')
const app = express();

app.get('/', (req, res)=>{fs.readFile('homepage.html', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        
        res.send(data)
    }
})})


app.get('/about', (req, res)=>res.send("About"))
app.get('/contact', (req, res)=>res.send("Contact"))
app.get('/services', (req, res)=>res.send("Services"))
app.get('/portfolio', (req, res)=>res.send("Portfolio"))

app.listen(4446, ()=>console.log("http://localhost:4446"))