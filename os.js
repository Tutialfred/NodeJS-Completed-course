const os = require("os");
// requerir modulo para poder utilizar sus metodos

console.log(os.userInfo())
// Información del sistema, nombre del usuario o carpeta del usuario

console.log(os.uptime())
// Segundos de cuanto esta encendida "node en?? " la maquina PC

console.log(os.platform())
// Sistema operativo del que esta ejecutando node

console.log(os.totalmem())
// memoria total (RAM)

console.log(os.freemem())
// memoria disponible (libre) (RAM)

console.log(os.release())
// Version del window