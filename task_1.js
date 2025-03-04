'use strict'

// Задание #1

const convertDollar = (dollar) => {
    let money = dollar
    return money * 64;
}

const convertEuro = (euro) => {
    let money = euro;
    return money * 1.2;
}

console.log(convertDollar(1), convertEuro(2));