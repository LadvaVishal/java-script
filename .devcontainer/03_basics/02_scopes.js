// var c=300;

// let a=300;   // global scope

if(true) {        //block scope
   // let a=10;
    const b=20;
    var c=30;
    // console.log("Inner:", a)
}


// console.log(a)
// console.log(b)
// console.log(c)



//-----------------------------


//clouser
// function one()  
// {
//     const username="vishal"

//     function two()
//     {
//         const website="youtube"
//         console.log(username)
//     }
//     // console.log(website)  

//      two() 
// }

// one()




//-----
if(true){
    const username ="vishal"
    if(username=="vishal")
    {
        const website= " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)




console.log(addOne(8))  // not give any error. we can use this before function defination in code
function addOne(num){
    return num + 1;
}

console.log(addOne(8))



// console.log(addTwo(8)); // give an error. we can not use before function defination
const addTwo= function(num)  // some time call exprecation
{
    return num +2;
}
console.log(addTwo(8));

