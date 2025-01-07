// Immediately invoked function Expressions(IIFE)

(function chai()
{  // named IIFE
    console.log(` DB CONNECTED`);
}) ();  // semicolen is mandatory


//writting arrow function in IIFE
( (name) =>  {              // IIFE deos not know where to stop context so ... we need put ; to end 
    console.log(`DB CONNECTED TWO ${name}`);
        }
)('vishal');