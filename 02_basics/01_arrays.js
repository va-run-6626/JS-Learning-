const myArr = [0, 1, 2, 3, 4, 5, 6];
const myHeros = ["Iron man", "captain america"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArr[4]);

//Array Methods

// myArr.push(7);
// myArr.push(8);
// myArr.pop();

// myArr.unshift(0)
// myArr.shift(0)

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);


// slice , splice 

console.log("A ", myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


