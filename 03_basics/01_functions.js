function myName(){
    console.log("d");
    console.log("i");
    console.log("p");
    console.log("a");
    console.log("l");
    console.log("i");

}

// myName()

// function addTwoNum(num1, num2){
//       console.log(num1+num2);
// }

function addTwoNum(num1, num2){
    // let result = num1+num2
    // return result

    return num1+num2
}

const result = addTwoNum(3,4)
// console.log("results:", result);


function loginuserMsg(username="dipa"){
    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuserMsg("dipali"))


function calculateCartPric(val1, val2,...num1){
       return num1
}

// console.log(calculateCartPric(200, 400, 500, 2000));


const user = {
    username: "dipali",
    prices: 199
}

function handleobject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleobject(user)
handleobject({
    username:"dip",
    price:199
})


const myNewArray = [20,30,40,50]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([20,30,40]));