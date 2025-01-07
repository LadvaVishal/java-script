//reduce method
// const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,curVal)=>{
//     console.log(`acc : ${acc} and currval:${curVal}`)
//     return acc+curVal;
// },0)  //here 0 is intitial value of accumulator

// console.log(myTotal)


const shoppingCart=[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 9999
    },
    {
        itemName:"android course",
        price: 29999
    },
    {
        itemName:"data science course",
        price: 12999
    }
]

const priceTopay=shoppingCart.reduce((acc,item)=>{
       return item.price + acc
},0)

console.log(priceTopay)