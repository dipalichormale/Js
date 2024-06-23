// singleton  //  object using contructor it is singleton
// object.create // contructor method 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dipali",
    "full name" : "depali choramle",
    [mySym]: "mykeys",
    age: 22,
    location : "pune",
    email: "d@gmail.com",
    LastLoggdindays: ["monday", "sunday"]
}

// to access the object values
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "yxz@gmail.com"          // to change the object values
// Object.freeze(JsUser)                  // to lock the value(means freez so know one can change the value)
JsUser.email = "abc@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



