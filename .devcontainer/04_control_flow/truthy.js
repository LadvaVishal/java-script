// const userEmail="abc@123gamil"

// if(userEmail)
// {
//     console.log("got email")
// }
// else{
//     console.log("NOT GET")
// }




//falsy values

// false, 0, -0, BigInt 0n,"" , null, undefined, NaN


//truthy value

//   "0", 'false' , " " , []==> empty array, {}=> empty obj, function(){}=> empty function




// const arr=[];
// if(arr.length===0)
// {
//     console.log("empty array")
// }

// const emptyObj={};
// if(Object.keys(emptyObj).length ===0){
//     console.log("empty object")
// }

//Nullish coalescing operator (??) : null undefined

let val1;
val1= 5 ?? 10

// val1= null ?? 10
// console.log(val1);


//ternairy operator

const teaPrice=10;
teaPrice <= 80? console.log("less than 80") : console.log("more than 80")