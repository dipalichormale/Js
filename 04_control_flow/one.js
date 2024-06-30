 // if control flow

 const isUserLoggedIn =true
 const temp = 41

//  if (temp >50) {
//     console.log("less than 50");
//  } else {
//   console.log("temp is greater than 50");
//   }
  

 // comparison operator
//  <, >, <=, >=, ==, !=, ===

// const score = 200

// if (score >100) {
//     const power = "fly"
//     console.log(`power : ${power}`);
// }


// const balance = 1000

// // if (balance>500) console.log("test"); 


// multiple if statement
// if (balance<500) {
//     console.log("less  than 500");
// } else if (balance<750) {
//     console.log("less than 750");
// } else if (balance<900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true 
const debitcard = true 
const loggedINFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard) {
    console.log("allow to buy");
}

if (loggedINFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}