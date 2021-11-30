// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.


let names = ["fulvio " , "daniele " , "piero " , "giorgio " , "marco " , "paolo "];

let surname = ["gaudenzi" , "emili" , "surfissi" , "padella" , "seratto" , "cognome"];

let empty = []



while (empty.length < 6) {
    let mathname = Math.floor(Math.random() * 5);
    let mathsurname = Math.floor(Math.random() * 5);
    if (!empty.includes(names[mathname] + surname[mathsurname])) { 
        empty.push(names[mathname] + surname[mathsurname])
      }   
}

console.log(empty);