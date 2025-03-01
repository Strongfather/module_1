const myWeight = 80;
const speedLight = Math.log(3e8);

const energy = myWeight * Math.pow(speedLight, 2);

console.log(`Энергия (Е) для массы тела ${myWeight} кг: ${energy} Джоулей`);