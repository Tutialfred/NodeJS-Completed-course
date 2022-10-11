// Haciendo pruebas con nodemon y el package.JSON
// con → npm run security → poner a vigilar este archivo con el modulo Nodemon

// 🤍 Haciendo prubes con Express 🤍


// var express = require("express")

// var app = express()

// app.listen(3000) 

// 🏓 EcmaScript modules 🏓 ↓

const multiply = (x, y) => x * y
const resta = (x, y) => x - y

// Exportar por defecto
export default {
    multiply,
    resta
}

// Exportar individualmente
export const add = (x, y) => x + y
export const divide = (x, y) => x / y 
