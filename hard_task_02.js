'use strict'

const min = (a,b) => ( a + b - ((a - b) ** 2) ** 0.5) / 2 ;


console.log (min(5,3));
