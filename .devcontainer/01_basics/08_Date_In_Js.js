let myDate=new Date();
// Zero time is January 01, 1970 00:00:00 UTC.

// console.log(myDate) // ans 2025-01-06T06:50:14.528Z
// console.log(myDate.toString()); //Mon Jan 06 2025 06:50:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // Mon Jan 06 2025
// console.log(myDate.toLocaleString()) //1/6/2025, 6:51:41 AM
// console.log(typeof myDate) //object



let myCreatedDate= new Date(2023,0,24,5,3,2)  // month is start from index 0(zero) so january=0 and so on...
// console.log(myCreatedDate.toDateString());   //Tue Jan 24 2023
// console.log(myCreatedDate.toLocaleString());  //1/24/2023, 5:03:02 AM



let myCreatedDate1= new Date("01-01-2024");
// console.log(myCreatedDate1.toLocaleString()); //1/1/2024, 12:00:00 AM
// console.log(myCreatedDate1.getTime())

let myTimeStamp=Date.now(); // give time in  milisecond
// console.log(myTimeStamp);  // give time value in milisecond



// console.log(Math.floor(Date.now() / 1000)); // return time in second

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month:"long"
}))