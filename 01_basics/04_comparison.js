// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

//make sure the data types are same

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//The reason is that an equality check == and comparisions > < >= <= work differently
//comparisons convert null to number , treating it as 0.
// thats why null >= 0 true and null > 0 is false

console.log(undefined == 0);
console.log(undefined >= 0);

// === strict check also checks for data types 


