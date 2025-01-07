
//if
// const isUserloggedIn= true
// const temp=43
// if(temp<=50){
//     console.log("temp less then 50")
// }   else{
//     console.log("temp greater than 50")
// }


//shorthand 
// const balance=1000;
// if(balance>500) console.log("test");// implecity scope




// const balance=1000;
// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance <900)
// {
//     console.log("less than 900")
// }


const isUserloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail= true

if(isUserloggedIn && debitCard){
    console.log("allow to buy")
}

if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("user logged in");
}
