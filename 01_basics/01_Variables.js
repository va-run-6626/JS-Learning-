const accountId = 144553;
let accountEmail = "vbhutada@1342gmail.com";
var accountPassword = "12345";
let accountState;

//accountId = 2; // not allowed
accountEmail = "vb@vb.com";
accountPassword = "456543";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope 
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
