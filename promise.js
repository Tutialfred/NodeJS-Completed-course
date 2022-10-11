const { readFile } = require("fs");
// Requeriendo modulo


// Función Promesa 
const leer = (pathFile) =>{
    return new Promise((resolve, rejects) => {

        readFile(pathFile, "utf-8", (error, data) => {

            if (error) {
                rejects(error)
            }
            resolve(data);
        });
    })
}




// ENTONCES ↓ -Despues de una promesa...- 

leer("./data/first.txt")
.then(msg => console.log(`First is → : ${msg}`))

.then( readFile("./data/second.txt", "utf-8", (erorrs,data)=>{console.log("msg is → " + data)}))

.then(leer("./data/second.txt")
.then(cas => console.log(`Also read this !!! : ${cas}`))
)

// ALGUN ERROR ↓

.catch(errors => console.log(errors));

