// const tinderUser= new object();  // singletone object
const tinderUser={}       //  none singletone object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email: "some@gamil.com",
    fullname:{
        userfullname:{
        firstname: "vishal",
        lastname:"ladava"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);




const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

// const obj3={obj1, obj2}
// console.log(obj3);   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign({},obj1,obj2) // {}==> target object  obj1,obj2==> source object..   target object  will modifie so here we use {} /(empty object) as target object and return object
// console.log(obj3);




//spread
// const obj3={...obj1, ...obj2}
// console.log(obj3)



const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },

]

users[1].email



// console.log(tinderUser)
// console.log(Object.keys(tinderUser));  // return keys of object in array form  output=> [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // return values of object in array form  output==>>  [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));  // conver in array form like this==>>>  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check ,, object have this type of property or not.. return boolean value




//______________part-2______________

const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor : instructor} = course // this will reduce to write course.courseIntructor... just need to write instructor
console.log(instructor)


// -------api----------

