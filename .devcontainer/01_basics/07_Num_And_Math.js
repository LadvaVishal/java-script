const balance= new Number(100);  // we are define data type explicitly
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // for showing precition value 



const otherNumber=123.893
// console.log(otherNumber.toPrecision(3)); // ans= 124....  3 digit sudhi number ne purnak ma badali de
// console.log(otherNumber.toPrecision(4)); // ans=123.9.... 4 digit sudhi number ne purnak ma badali de



const hundreds=10000000;
// console.log(hundreds.toLocaleString()); // ans 10,000,000   by default usa formate 
// console.log(hundreds.toLocaleString('en-IN'));  // ans 1,00,00,000   in indian formate





// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// output of above four 
// 1.7976931348623157e+308
// 5e-324
// 9007199254740991
// -9007199254740991


// ______________________Maths______________________

// console.log(Math)
// console.log(Math.abs(-4)); // and 4  ....convert into positive number
// console.log(Math.round(4.323)); //ans 4  .... round of value
// console.log(Math.ceil(4.323));//ans 5   ... converting in upper value
// console.log(Math.floor(4.323));//ans 5   ... converting in lower value
// console.log(Math.max(5,1,8,3,8,9))// ans 9  ... find max from given
// console.log(Math.min(5,1,8,3,8,9))// ans 1 ... find min from given number



// console.log(Math.random()); // give random value in range of 0 to 1...  eturns a random number between 0 (inclusive),  and 1 (exclusive)
// console.log(Math.floor(Math.random()*10) +1);// in range from 1 to 10


const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min +1)) + min)