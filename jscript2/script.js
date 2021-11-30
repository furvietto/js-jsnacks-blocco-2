// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbers = [2,45,34,24,11,13,79,26]
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        result += numbers[i]
    }
}

console.log(result)