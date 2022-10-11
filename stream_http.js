const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
    const stream = createReadStream("./modules/appT2.txt", { encoding: "utf-8" });
                                    // ↑ Leer obligado un archivo bien grande
    stream.on("data", (chunk) => {
        stream.pipe(res) 
        // Te voy↑ a enviar un dato o pasar los datos a otra funcion 
        // Enviar datos al cliente → Frontend
    })
    stream.on("error", error => {
        console.log(error);
    })
})

server.listen(3000)
console.log(`Server on port ${3000}`);
