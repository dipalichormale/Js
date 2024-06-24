// singleton or using contructor

// const tinderuser = new Object()
const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "dipali"

// console.log(tinderUser);

const regularUser = {
    email:"dd@gmail.com",
    fullname:{
        userfullname:{ 
            firstname: "dipali",
            lastname: "chormale"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 =  Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// array object

const user = [
    {
        email:"d@gmail.com",
        name: "dipa"
    },
    {
        email:"d@gmail.com",
        name: "dipa"
    },
    {
        email:"d@gmail.com",
        name: "dipa"
    },
    {
        email:"d@gmail.com",
        name: "dipa"
    }
]

// user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

// ************************ De-structure*****************

const course ={
    coursename:"js",
    price:"999",
    courseInstructor: "dipali"
}
 
// console.log(course.courseInstructor)

const {courseInstructor:Intructor} = course 
console.log(Intructor);

// ***********API concept(JSON)*****************


// {
//     name: "dipali",
//     coursename: "js",
//     price: "free"
// }

// api in array format
[
    {},
    {},
    {}
]