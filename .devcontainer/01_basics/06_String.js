let firstName="vishal";
let LastName="Ladava";
let fullName=firstName + LastName;

// console.log(`Hello my name is ${firstName}`);
// console.log(typeof firstName)



const gameName= new String('Impero-It');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(typeof gameName)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf("m"))
const newStr=gameName.substring(0,4)// sub string will not accept negative indexing
// console.log(newStr)

const anotherStr=gameName.slice(-8,3)
// console.log(anotherStr);

const  newStr2="   vishal "
// console.log(newStr2)
// console.log(newStr2.trim())

const url="https://vishal.com/vishal%20ladava"
// console.log(url.replace('%20','-'))
// console.log(url.includes('vishal'))


const gameName2= new String('Impero-It-Pvt-Ltd');
console.log(gameName2.split('-'))
