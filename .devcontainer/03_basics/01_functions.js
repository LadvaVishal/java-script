// function AddNum(num1,num2){ // perameters
//     console.log(num1+num2)
// }
// AddNum(3,7)  // argument




function AddNum(num1,num2){ 
    return(num1+num2)
}

const result=AddNum(5,6)
// console.log("Result:",result)




// function loginUserMessage(username){
//    if(!username) //if(username=== undefined)
//     {
//         console.log("Please enter a username")
//         return
//     }
//         return `${username} just logged in`
// }

// console.log(loginUserMessage("Vishal"))

// console.log(loginUserMessage())






function calculateCartPrice(val1, val2,...num1) // rest operator... accept multiple number of argument
{
    return num1;
}

// console.log(calculateCartPrice(200,400,500,234)) // val1=>200, val2=>400 and rest of argument in num1 array and print num1 array



const user={
    username:"Vishal",
    price:299
}

function handleObject(anyobject){
    console.log(` Useraname is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"same",
    price:599
})



const myNewArray=[200,490,133,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))