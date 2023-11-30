// ******************************************* NUMBERS ******************************************************************//
const score = 400;
const balance = new Number(100);
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.6668;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

const MIN_VALUE = Number.MIN_VALUE;
console.log(MIN_VALUE);

const MAX_VALUE = Number.MAX_VALUE;
console.log(MAX_VALUE);

// ********************************************************* MATHS ****************************************************//
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(2));
console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + 1);
