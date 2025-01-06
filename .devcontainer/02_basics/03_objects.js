// object literals
const mySym=Symbol("key1")

const jsUser={
    name: "vishal",
    "full name":"ladva Vishal",
    age: 20,
    [mySym]:"mykey1",
    location: "ahemdabad",
    email: "vishal22@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email)  //vishal22@gmail.com
// console.log(jsUser.[email])  // give an error
// console.log(jsUser["email"])  //vishal22@gmail.com
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email="abc@121gmail.com"
// Object.freeze(jsUser)  // not allow to make any changes in object
jsUser.age=25;
// console.log(jsUser)



jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
}


console.log(jsUser.greeting) //output undefined

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())