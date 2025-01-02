//http
const http = require('http')

const server=http.createServer((req, res)=>{
    res.writeHead(200, "OK", {'content-type' : 'text/html'})
    res.end("Bhavesh Joshi the Superhero")
})

server.listen(4604, ()=>{
    console.log("listening on http://localhost:4604");
})