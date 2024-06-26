const user = {
    username : "dipali",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
 } 

//  user.welcomeMessage()
//  user.username = " sam"
//  user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "dipali"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "dipali"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "dipali"
    console.log(this);
}
// chai()


// explicit return(we use return keyword)
// const addTwo = (num1, num2) => {
// return num1+num2
// }
// console.log(addTwo(2,3));


// implicit return(dont use return keyword) 
// const addTwo = (num1, num2) =>  num1+num2

// const addTwo = (num1, num2) =>  ( num1+num2) 

const addTwo = (num1, num2) =>  ({username:"dipali"}) 

// console.log(addTwo(2,3));

// const myArray = [2, 3, 4, 5]

// myArray.forEach()