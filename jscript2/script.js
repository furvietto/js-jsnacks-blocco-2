// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari



const array = [1,2,3,4,5,6,7,8,9,10]
let numbers = 0;

for (let i = 1; i < array.length; i+=2) {
    numbers += array[i]
    console.log(array[i])
}

console.log(numbers);








// <<<<<<<<<<<!!!!!!!!!!!>>>>>>> solo numeri dispari

// function dispariNumbers(array) {
//    for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 1) {
//         result += array[i]
//     }        
//    } 
   
// }

// const numbers = [2,45,34,24,11,13,79,26]
// let result = 0;

// dispariNumbers(numbers)

// console.log(result);









//<<<<<<<!!!!!!!>>>>>> random integer


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// let result = 0;
// for (let i = 0; i < 10; i++) {
//     let mate = getRndInteger(0,100);
//     console.log(mate)
//     if (mate % 2 == 1) {
//         result += mate
//     }
// }

// console.log(result)





//<<<<<<<!!!!!!!>>>>>>ask random integer


// for (let i = 0; i < 10; i++) {
//     let ask = parseInt(prompt("dimmi un numero intero"));
    
// }
