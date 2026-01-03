const userEmail = []

if (userEmail) {
    console.log("Got user Eamil")
}
else {
    console.log("don't have user Email");
    
}

// falsy Values

// false, 0, -0, BinInt 0n, "", null, undefined, NaN

//truthy Values
//"0", 'false', " ", [], {}, function(){}



if (userEmail.length === 0) {

    console.log("Array is empty");
    
}


const emptyObject = {}

if (Object.keys(emptyObject).length === 0) 
    {
        console.log("Object is empty")
    
}

// false == 0 ; o/p is true.
// false == ''; o/p is true.
// 0 == ''; o/p is true.



// Nullish Coalescing Operator (??) : null Underfined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 10

console.log(val1);


// Terniary OPerator

// condition ? true : false

const coldCOffiePrice = 150;
coldCOffiePrice <=80 ? console.log("less than 80") : console.log("more than 80");

