const accountId =135238
let accountEmail = "harsh0207"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;
/*
not use var
because of issue in block scope and functional scope
*/

// accountId = 2 not allowed
accountEmail = "hello@gmail"
accountPassword = "54789"
accountCity = "Pune"
console.log(accountId);
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);