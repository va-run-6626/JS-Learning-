// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log("\n\n");

console.log(typeof myDate);

let newDate = new Date(2023,0,23);
console.log(newDate.toDateString());

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());



