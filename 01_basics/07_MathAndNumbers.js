const score = 100;
console.log(score);

const balance = new Number(400);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.89765;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE + "\n\n\n");

// ++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.34));
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.4));
console.log(Math.min(4.4, 8));
console.log("\n\n\n");

console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
