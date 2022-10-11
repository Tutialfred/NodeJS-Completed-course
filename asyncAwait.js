const { readFile } = require("fs");


const leer = (pathFile) => {
    return new Promise((resolve, rejects) => {

        readFile(pathFile, "utf-8", (error, data) => {

            if (error) {
                rejects(error)
            }
            resolve(data);
        });
    })
}
// Mismo ejemplo ↑ que " promise.js " ↑


// Forma más sencilla (comoda) de leer y escribir


// ✨ ASYNC & AWAIT ❕

async function read() {
    try {
        const result = await leer("./data/first.txt")
        const react = await leer("./data/tuti.jsx")
        console.log(result)
        console.log(react)
    } catch (error) {
        console.log(error)
    }
}

read()

// throw new Error("Errors here...")
// ↑ Crear Errores 📍