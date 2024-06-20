const accountID = 133
let accountEmail = "dipa@gmail.com"
let accountPassword = "1234"
accountCity =  "pune"
accountState = "maharashtra"

// accountID = 12334   // we cant change the const values

accountEmail = "dc@gmail.com"
accountPassword = "xyz"
accountCity = "mumbai"

console.log(accountID);

/*
prefer not to use var 
bcoz of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);
