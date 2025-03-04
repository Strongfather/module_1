'use strict'

const result = (num_1,num_2) => {
    let a = Math.abs(num_1);  // проверка на неотрицательные числа
    let b = Math.abs(num_2); // проверка на неотрицательные числа

    while ( b !== 0 ) {   // Алгоритм Евклида
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;

}

console.log(result(56,98));