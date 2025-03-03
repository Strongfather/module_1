'use strict';

// задание №1 Урок 4

const resultDesignation = prompt('Наименование товара');
const resultAmount = prompt('Колличество товара');
if (!isNaN(resultAmount)) {
    parseInt(resultAmount);
} else {
    alert('Вы ввели не корректное число');
}
const resultCategory = prompt('Категории товара');
const resultPrice = prompt('Цена товара');
if (!isNaN(resultPrice)) {
    parseInt(resultAmount);
} else {
    alert('Вы ввели не корректное число');
}
console.log(typeof(resultDesignation));
console.log(typeof(parseInt(resultAmount)));
console.log(typeof(resultCategory));
console.log(typeof(parseInt(resultAmount)));

const sumResult = resultAmount * resultPrice

console.log(`На складе ${resultAmount} товара ${resultDesignation} на сумму ${sumResult} руб.`);



