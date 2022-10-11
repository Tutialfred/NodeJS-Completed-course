// Dividir archivos en multiples partes
// Ejemplo de ver la pelicula Online

const { writeFile } = require("fs/promises");

const createFile = async () => {
    await writeFile("./modules/appT2.txt", "This is my file Cabron  ".repeat(10000))
    // Creando archivo grande, con multible contenido dentro
}
// createFile();


// 💿 Creando sistema de streams ↓ Here ! 

const { createReadStream } = require("fs");

const strings = createReadStream("./modules/appT.txt");

strings.on("data", data => console.log(data.toString()));
strings.on("end" , () => console.log("PROCESO TERMINADO"));
strings.on("error", (error) => console.log(error));
