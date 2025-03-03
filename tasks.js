'use strict';

 // Задание №2
const rain = Math.round(Math.random());

if (rain > 0) {
    console.log('Пошёл дождь. Возьмите зонт!')
} else {
    console.log('Дождя нет!')
}

// Задание №3 

const mathematics = prompt('Введите кол-во баллов по математике');
const russianLanguage = prompt('Введите кол-во баллов по русскому языку');
const informatics = prompt('Введите кол-во баллов по информатике');

if ((mathematics + russianLanguage + informatics) >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('Попробуйте еще раз');
}

// Задание 4 

const amount = parseInt(prompt('Cколько денег хотите снять?'))
    if (isNaN(amount) || amount <= 0) {
        console.log('Ошибка: Введите конкретную сумму');
    }
        else if (amount % 100 !== 0) {
             console.log('Ошибка: Сумма должна быть кратна 100');
            }
        else if (amount /100) {
            console.log(`Вы успешно сняли деньги`);
        }
        
