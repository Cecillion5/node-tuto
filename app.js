const http = require('http') ;

const server = http.createServer((request, result)=>{
    result.write("<h1> Time to reach money... </h1>") ;
    result.end() ;
})

server.listen(8000) ;
