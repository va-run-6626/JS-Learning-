// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack
// - Primitive
// - copy

let myname = "Varun";
let anotherName = myname;

anotherName = "bhutada";

console.log(anotherName);
console.log(myname);

//Heap
// - Heap
// - original reference

let userOne = {
  email: "user@user.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "user21234@user.com";

console.log(userOne.email);
console.log(userTwo.email);
