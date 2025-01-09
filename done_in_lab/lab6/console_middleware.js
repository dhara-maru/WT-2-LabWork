//middleware in console
const express = require('express')
const app = express();

const middleware1 = (req, res, next) =>{
    console.log("Middleware1 executed!");
    next();
}

app.get('/', middleware1, (req, res)=>{
    console.log("Middleware 1 demo");
    res.send("Middleware executed in res")
})

app.listen(4567, ()=>{
    console.log("http://localhost:4567");
});