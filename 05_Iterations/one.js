// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is num");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
    //    console.log(`inner loop : ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '='+ i*j);

    }   
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// beark and continue

for (let index = 1; index <= 20; index++) {
    if(index==5){
        // console.log(`detected 5`);
        break
    }
    // console.log(`vales of i is ${index}`);   
}


for (let index = 1; index <= 20; index++) {
    if(index==5){
        // console.log(`detected 5`);
        continue
    }
    // console.log(`vales of i is ${index}`);   
}