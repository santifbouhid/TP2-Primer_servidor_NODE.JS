// import File System Module
const fs = require("fs");

const datos = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false];

// Acá se coloca la condición
const condicion = "number";

function comparar(array, condicion) {
  console.log(`Array original: ${array}`);

  // se corrobora que la condición sea válida
  if(condicion === null || condicion===undefined){
    console.log("Condición inválida");
    
  } else{
    // se filtra el array original según la condición
    let nuevoArray = array.filter(x => typeof(x) === condicion);
    
    // se ordena de manera ascendente
    nuevoArray.sort((a, b) => a - b);

    // se eliminan datos duplicados
    nuevoArray = [...new Set(nuevoArray)];

    // si nuevoArray tiene datos, se escribirá el contenido 
    // en el archivo "doc.txt" con File System Module
    if(nuevoArray.length > 0){
      // se imprime el nuevoArray en "doc.txt"
      const imprimirArray = fs.writeFileSync("doc.txt", nuevoArray.join(","));
    }

    // logs para corroboración:
    console.log(`Array filtrado: ${nuevoArray}`);
    const leerfile = fs.readFileSync("doc.txt", "utf-8");
    console.log("impresion: ", leerfile);
  }   
};

comparar(datos, condicion);

