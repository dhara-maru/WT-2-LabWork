//read from file
const http = require('http')
const fs = require('fs')

const server=http.createServer((req, res)=>{
    res.writeHead(200, "OK", {'content-type' : 'text/html'})
const url = req.url;

    if(url=='/'){
        fs.readFile('test.txt', (err, data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
                res.end(data)
            }
        })
    }else if(url=='/about'){
        fs.readFile('about.txt', (err, data)=>{
            if(err){
                console.log(err);
            }else{
                res.end(data)
            }
        })
    }else if(url=='/contact'){
        fs.readFile('contact.txt', (err, data)=>{
            if(err){
                console.log(err);
            }else{
                res.end(data)
            }
        })
    }else if(url=='/work'){
        fs.readFile('work.txt', (err, data)=>{
            if(err){
                console.log(err);
            }else{
                res.end(data)
            }
        })
    }else{
        fs.readFile('404.txt', (err, data)=>{
            if(err){
                console.log(err);
            }else{
                res.end(data)
            }
        })
    }


    
})

server.listen(4610, ()=>{
    console.log("listening on http://localhost:4610");
})