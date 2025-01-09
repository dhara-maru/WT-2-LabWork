const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send("Hi")
})

app.listen(4444, ()=>console.log("http://localhost:4444"))