const eventEmitter = require("events");

const customEmitter = new eventEmitter



customEmitter.on("response", (data, date)=> console.log(`${data} happen in ${date}`));
// == addEventListener

customEmitter.emit("response", "Event resolved and received !!!", "December")

customEmitter.emit("response", "Alfredo are work as a programmer", "November")
// Emitir un evento
