const marvel_heros=["thor","IronMan","Hulk"];
const dc_heros=["SuperMan","BatMan","Flash"]

//marvel_heros.push(dc_heros);
// console.log(marvel_heros)  //[ 'thor', 'IronMan', 'Hulk', [ 'SuperMan', 'BatMan', 'Flash' ] ]

// const all_heros=marvel_heros.concat(dc_heros)  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(all_heros)  //[ 'thor', 'IronMan', 'Hulk', 'SuperMan', 'BatMan', 'Flash' ]

const all_heros=[...marvel_heros, ...dc_heros] // spread opeartor
// console.log(all_heros)   //[ 'thor', 'IronMan', 'Hulk', 'SuperMan', 'BatMan', 'Flash' ]


const another_arr=[1,2,3,[4,5,7,3],3,[6,7,[4,5]]]
const real_anoher_arr=another_arr.flat(Infinity)
// console.log(real_anoher_arr); 
//output:
//   [
//     1, 2, 3, 4, 5,
//     7, 3, 3, 6, 7,
//     4, 5
//   ]



////////
// console.log(Array.isArray(all_heros)); //true
// console.log(Array.isArray("Hitesh"))  //false
// console.log(Array.from("vishal")) // create array from "vishal" string  output: [ 'v', 'i', 's', 'h', 'a', 'l' ] 
// console.log(Array.from({name:"Vishal"})) // output: []    interesting


let score1=123
let score2=300
console.log(Array.of(score1,score2))