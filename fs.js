const fs = require("fs"); //Sync
// Modulo file system → nos permite usar sus metodos
// Crear archivos, leerlos, 
// eliminarlos o alterarlos

const leer = fs.readFileSync("./data/first.txt", "utf-8");
// Leer archivo ↑
// console.log(leer); // or → leer.toString()

// 🚨 Creando archivos ↓ 
fs.writeFileSync("./data/tuti.jsx", "import React from 'react'");
// o colocar en una carpeta...

const message = "Now in December, i'm rich men";
fs.writeFileSync("./data/message.js", "//" + message);
// Creando archivo con variable como mensaje

fs.writeFileSync("./math/englishClass.js", "console.log('one + four = five')", {flag: "a"});

// Creando archivo y volviendo a agregar el mensaje cada vez que se ejecuta el archivo "fs.js"

    

         // 💡 CREANDO FUNCIONES DE FORMA ASINCRONICA 🧪



fs.readFile("./data/first.txt", "utf-8" , (error, data)=>{
    console.log(error);
    console.log(data); // or → data.toString()
})
// Leyendo archivo de forma asincronica ↑