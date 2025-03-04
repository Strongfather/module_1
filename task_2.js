'use strict'

// Задание №2

const getUpperCase = (str) => {
    let upper = str;
    return upper.charAt(0).toUpperCase() + upper.slice(1);

}

console.log(getUpperCase('привет мир!'))