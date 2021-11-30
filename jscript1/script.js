// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let names = ["fulvio " , "daniele " , "piero " , "giorgio " , "marco " , "paolo "];

let surname = ["gaudenzi" , "emili" , "surfissi" , "padella" , "seratto" , "cognome"];

let empty = []



while (empty.length < 6) {
    let mathname = getRndInteger(0,5);
    let mathsurname = getRndInteger(0,5);
    if (!empty.includes(names[mathname] + surname[mathsurname])) { 
        empty.push(names[mathname] + surname[mathsurname])
      }   
}

console.log(empty);