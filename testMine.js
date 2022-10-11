const http = require("http");

http.createServer((req, res) =>{
    
    if(req.url === "/"){
        res.write("Welcome to my Server")
        return res.end()
    }
    if(req.url === "/about"){
        res.write("Now... Welcome to the About")
        return res.end()
    }

    res.end(" Not Found 404 ")
    
}).listen(3000, "127.0.0.1");


// Creando un servidor
console.log("Server on port 3000");