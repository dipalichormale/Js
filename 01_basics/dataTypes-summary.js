// Primitive

// 7 tyepes : String, number, boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.9

const isLoggedIn = false                 // boolean
const outsideTemp = null                // datatypes = object
let userEmail;

const Id = Symbol('123') 
const anotherId = Symbol('123')          // symbol

// console.log(Id===anotherId);

const  bigNumber  = 122233656879894564478798986n        // bigint


// Reference( Non Primitive)

// array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]           // object

const myObj= {                             // object
    name: "dipali",
    age: 22,
}

const myFunction = function(){            // datatype = functionobject
    console.log("hello world");
}

// console.log(typeof myFunction);



// ****************************************************************

// memory type:  stack(primitive), heap(non primitive)

let myNameIs = "dipali"  

let anotherNameIs = myNameIs
anotherNameIs = "Deepachormale"

console.log(myNameIs);
console.log(anotherNameIs);

let userOne = {
    email: "dipa@gmail,com",
    age:22
}

let userTwo = userOne

userTwo.email = "yz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

