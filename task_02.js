'use strict'

const isPrime = (number) => {
    let date = number;
    if( date <= 1) {
        return false;
    }  // простые числа больше 1

    for (let i = 2; i <= Math.sqrt(date); i++) {
        if (date % i === 0) {
            return false;
        }
    }   
    return true;
}

console.log(isPrime(5));