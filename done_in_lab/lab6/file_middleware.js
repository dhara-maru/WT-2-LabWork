//file middleware
const express = require('express')
const app = express();

app.use(express.static('./'))


const middleware1 = (req, res, next) =>{
    console.log("Middleware file executed!");
    next();
}

app.get('/', middleware1, (req, res)=>{
    console.log("Middleware file demo");
    res.send("Middleware executed in res")
})

app.listen(4568, ()=>{
    console.log("http://localhost:4568");
});