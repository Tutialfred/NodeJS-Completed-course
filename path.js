const path = require("path");
// Modulo path → podemos usar sus metodos
// Nos permite trabajar carpetas y archivos y conocer sus direcciones

const filePath = path.join("public", "user", "tutiAlfred", "M3.js");
//Permite unir directorios, rutas de carpeta 

const baseName = path.basename(filePath);
// Retorna el ultimo archivo de la ruta

const direc = path.dirname(filePath);
// Retonar todos los archivos menos el ultimo

const parse = path.parse(filePath);
// retorna lo mismo que (dirname) pero en un formato objeto

const resolve = path.resolve("ZAVALA");
// Alternativa de join, Complete la ruta original + la ruta que le pasamos por parametro 


