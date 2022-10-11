const { readFile } = require("fs");
const { promisify } = require("util");


const readFilePromise = promisify(readFile);


async function readFiles (){
    const first = await readFilePromise("./data/tuti.jsx");
    const second = await readFilePromise("./data/second.txt", "utf-8");
    console.log(first.toString());
    console.log(second);
}
readFiles();