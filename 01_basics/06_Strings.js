const name = "varun";
const repoCount = 50;

// console.log(name+" " + repoCount +" "+ "Value");
console.log(`Hello my name is ${name}, and my repo count is ${repoCount}`);

const gameName = new String("Varun-bhutada");

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf("r"));

const newString = gameName.split("-");
console.log(newString);

//substring methods
const name2 = gameName.slice(-13, 2);
console.log(name2);

const nsString1 = "         Varun Bhutada   ";
console.log(nsString1);
console.log(nsString1.trim());

const url = "https://varunbhutada.com/varun%20Bhutada"
console.log(url.replace('%20','-'));



console.log(url.includes('%20'));
