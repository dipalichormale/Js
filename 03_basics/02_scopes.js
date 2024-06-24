// var c = 300
let a = 200

if(true){
    let a = 10
    const b = 20
    // console.log("INNER:", a);  
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "dipali"

    function two(){
        website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "dipali"
    if (username=="dipali") {
        const website = " utube"
        // console.log(username+website);
    }
    // console.log(website);

}

// console.log(username);


// *************intresting******************

// we can access before declation
addOne(5)
function addOne(num){
    return num+1
}


// if we hold value in variable we cant access it before declaration

const addTwo = function(num){
    return num+2
}

addTwo(5)