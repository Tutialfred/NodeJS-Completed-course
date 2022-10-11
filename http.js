const http = require("http");
// modulo http → (Hypertext Transfer Protocol)

                // Recibir, devolver === datos al cliente
http.createServer((request, response) =>{

    console.log(request.url);
    // Cada vez que ↑ entramos una pagina el backend le entrega el /pagina.A.Visitar y el favicon

    if(request.url === "/"){
        response.write("Servidor oficial by: Alfredo Zavala")
        response.end()
        console.log("INICIO DEL SERVIDOR");
    
    }else if(request.url === "/home"){
        response.write("Now you are here... Home ! ")
        response.end()
        console.log("Pudiste Ingresar a 'home' de esta pagina ");

    }else if(request.url === "/about"){
        response.write("Welcome to 'about'")
        response.end()
        console.log("Pudiste Ingresar a 'about' de esta pagina ");

    } else {
        response.write(`
        <h1 style="background-color:red;
        color:black;
        text-align:end"> 
        Error 404 → not found page***$! </h1>
        
        <p style="
        background-color:black; 
        color:white;
        padding:12px;
        text-align:center">
        
        La pagina por estos momentos no se encuentra disponible en nuestro servicio, puede conocer otros enlances tambien</p>

        <a href="/">Volver al servidor inicial</a>`)
        response.end()
    }

}).listen(3000, "127.0.0.1");
// ↑ Mantenerlo ejecutando

console.log("Servidor escuchando en el puerto 3000");

// Creando mi propio servidor escuchando en el puerto 3000
