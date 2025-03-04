'use strict'

const coup = (str) => {
    let getRevers = str;
    return getRevers.split('').reverse().join('');


}

console.log(coup('Привет мир!'))