const user=
{
    username: "vishal",
    price: 999,
    
    welcomeMessage : function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}



// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this) // output: {}  because we are in node environment




//1)
// function chai(){
//     let username="vishal"
//     console.log(this.username);
// }

// chai()



//2)
const chai=function (){
    let username="vishal"
    console.log(this.username);// output: undefined.... context work in object . not work on function .. futher study in details in next videos
}
chai()


//3)
//arrow function
// const chai=  () => {
//     let username="vishal"
//     console.log(this.username);
// }
// chai()




// const addTwo=(num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(4,6))



// const addTwo=(num1, num2)=>  (num1+num2 )    //implicite return... not require to write return keyword
// // if  we use {} then required to write return... if we use () then not required to write return statement
// console.log(addTwo(43,6))
