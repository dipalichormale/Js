const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc , curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// }, 0)


// myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);


const shoppingCart = [

   { itemName : "js course",
    price: 999
},
{ itemName : "mobile dev course",
    price: 1200
},
 { itemName : "dataa science course",
    price: 14000
},
 { itemName : "web course",
    price: 12999
}
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);