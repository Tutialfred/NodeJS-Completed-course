const add = (x, y) => x + y
const restar = (x, y) => x - y
const divide = (x, y) => x / y
const multiply = (x, y) => x * y

// console.log(add(1,3))
// console.log(restar(1,3))
// console.log(divide(1,3))
// console.log(multiply(1,3))


//🚁 2 formas de exportar archivos ↓ 
// CommonJS

module.exports = add

module.exports.mate = {
    restar,
    divide
}

