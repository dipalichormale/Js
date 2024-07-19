// let myName = 'dipali     ';
// let myChannel = 'chai     ';

// console.log(myName.truelenght);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dipali = function(){
    console.log(`dipali is present in all objects`);
}

Array.prototype.heydipali = function(){
    console.log(`dipali says hello`);
}

// heroPower.dipali()
// myHeros.dipali()
// myHeros.heydipali()
// heroPower.heydipali()


// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    videa: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupoort = {
    makeAssingment: "JS assingment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "chaiaurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dipali   ".trueLength()
"iceTea".trueLength()