//open page
const http = require('http')

const server=http.createServer((req, res)=>{
    res.writeHead(200, "OK", {'content-type' : 'text/html'})
    let url = req.url;
    if(url=='/'){
        res.end("Home : Malad");
    }else if(url=='/about'){
        res.end("About : Superhero");
    }else if(url=='/contact'){
        res.end("Contact : Contact Sikku to call me");
    }else if(url=='/work'){
        res.end("Work : Fighting my Inner demons, and yours too!");
    }else{
        res.end("Superhero is out of station");
    }
    
})

server.listen(4605, ()=>{
    console.log("listening on http://localhost:4605");
})











