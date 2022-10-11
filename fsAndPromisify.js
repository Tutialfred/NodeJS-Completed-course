const { readFile } = require("fs/promises");

async function readThis(){
    const one = await readFile("./data/first.txt", "utf-8")
    console.log(one);
}

readThis();