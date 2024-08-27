// Singleton if made form constructor
// Object.create()

// object litrals

const mySym = Symbol("Key1");

const jsUser = {
  name: "Varun",
  "full name": "Varun Bhutada",
  [mySym]: "mykey1",
  age: 23,
  location: "Hyderabad",
  email: "varun@123.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Varun@chatGpt.com";
// Object.freeze(jsUser)
jsUser.email = "Varun@chatGemini.com";
console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello js user");
};

console.log(jsUser.greeting());

jsUser.greeting2 = function () {
  console.log(`Hello js user, ${this.name}`);
};

console.log(jsUser.greeting2());
