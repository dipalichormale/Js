// 1- promise creation
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task complet");
        resolve()
    }, 1000)
})

//promise consumsion
promiseOne.then(function(){
    console.log('promise consumed');
})


// promiseTwo
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async yask 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
})


// three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"xyz@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
   console.log(user);
})


// four(then, catch)
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = true;
        if (!error) {
            resolve({username:"dipali", password:"123"})
        } else{
            reject('ERROR: SOMETHING WENT wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
     console.log(user);
     return user.username
})
.then((username) => {
      console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The proimse is either resolved or rejected"))


// five(try, catch)
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
         if (!error) {
             resolve({username:"javascrupt", password:"123"})
         } else{
             reject('ERROR: Js WENT wrong')
         }
     }, 1000)
})

async function consumPromiseFive(){
    try{
        const respone  = await promiseFive
        console.log(respone);
    } catch (error){
        console.log(error);
    }
}

consumPromiseFive()


// async function getAllusers(){
//    try {
//         const respone= await fetch('https://api.github.com/users/dipalichormale')
//         const data  = await respone.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }   
// }

// getAllusers()


fetch('https://api.github.com/users/dipalichormale')
.then((respone) => {
      return respone.json()
})
.then((data) => {
     console.log(data);
})
.catch((error) => console.log(error))