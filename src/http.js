const http = require('http')

const url=require('url')

const server = http.createServer((req, res) => {
    
    console.log(req.method);
    console.log(req.url)
    console.log(req.headers);
    console.log(url.parse(req.url,true).query.id);
    res.writeHead(200,{'content-Type':'application/json'})
    res.write('hello')
    res.end()  

})

server.listen(3000,()=>{
    console.log("Create server successfully");
})