//for  of loop
// const arr=[1,2,3,4,5]
// for(const num of arr)
// {
//     console.log(num)
// }


const greeting="hello world";
// for (const greet of greeting) {
//     console.log("each char is:",greet)
// }


//Maps

const map=new Map()  // map is object.  holding key-value pair..  give only unique value
map.set('IN', "India");
map.set('USA', "United States of America")

// console.log(map);

for (const key of map) {
    console.log(key)  
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]


// for (const [key,value] of map) {
//     console.log(key)  
// }
// output:
// IN
// USA



const myObj={
    'game1':'NFS',
    'game2':"SpiderMan"
}

for (const [key, value] of myObj) {
    console.log(key,"=>", value)
}  // TypeError: myObj is not iterable
   // for of loop is applicable on object