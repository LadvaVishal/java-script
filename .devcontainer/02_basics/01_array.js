// js array are resizeable and mix typed
const myArr=[0,1,2,3,4,5];

// shallow copy: copy refence of memory
// deep copy: not copy refence of memory

const myArr2= new Array(1,2,3,4,5)
// console.log(myArr2[1])

// Array method

// myArr.push(6); // insert at end
// myArr.push(7);
// myArr.pop(); //remove from end


// myArr.unshift(9)// insert in start of array
// myArr.shift()   //Remove from start of array


// console.log(myArr.includes(9)); // return boolean value . check element is present in array or not
// console.log(myArr.indexOf(3)); // return index of perticular element


const newArr=myArr.join() // convert in string of array
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);




// slice and splice

console.log("A" ,myArr);
const myn1= myArr.slice(1,3)  // not manipulate original array and store in myn1 and exclude last index
console.log(myn1);
console.log("B", myArr)


const myn2=myArr.splice(1,3) // manipulate original array and store in myn2 and include last index
console.log("C" , myArr);
console.log(myn2)