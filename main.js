'use strict';

// задание №1
const resultDesignation = prompt('Наименование товара');
const resultAmount = prompt('Колличество товара');
const resultCategory = prompt('Категории товара');
const resultPrice = prompt('Цена товара');

console.log(typeof(resultDesignation));
console.log(typeof(parseInt(resultAmount)));
console.log(typeof(resultCategory));
console.log(typeof(parseInt(resultPrice)));
const sumResult = resultAmount * resultPrice

console.log(`На складе ${resultAmount} товара ${resultDesignation} на сумму ${sumResult} рублей`);


// {
// const designation = 'Apple';
// const amount = 5;
// const category = 'fruits';
// const price = 100;

// let sum = amount * price

// console.log(designation);
// console.log(`общая сумма товара: ${amount * price}`);

// }

// {
// const designation = 'Orange';
// const amount = 2;
// const category = 'fruits';
// const price = 150;

// let sum = amount * price

// console.log(designation);
// console.log(`общая сумма товара: ${amount * price}`);

// }

