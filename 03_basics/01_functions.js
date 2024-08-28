const names = ["varun", "tanmay", "harsh", "sumit", "vaibhav"];

function sayMyName(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`hi my name is ${names[i]}`);
  }
}

// sayMyName(names);

function add(a, b) {
  return a + b;
}

const result = add(3, 5);
// console.log(result);

function loginUserMsg(username="sam") {
  if (!username) {
    console.log("Please enter a user name");
    return;
  }
  return `${username} just logged in!`;
}

console.log(loginUserMsg());
