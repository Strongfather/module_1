'use strict' 

const calculate = (sum, quantity,promo) => {
    let money = sum;
    let amount = quantity;
    let sale = promo;

    if ( amount > 10 ) {
        return money * 0.97;
    }
    else if (money > 30000) {
        return money * 0.85;
    }
    else if ( sale = 'METHED') {
        return money * 0.90;
    }
    else if ( sale = G3H2Z1 || money > 2000) {
        return money - 500;
    }
}

console.log(calculate(5000,2,'G3H2Z1'));