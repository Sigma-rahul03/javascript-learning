function functionName (){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

// functionName ()


// function addTwoNumber(num1, num2) {

//     console.log(num1 + num2);
    
// }


function addTwoNumber(num1, num2) {

    // let result = num1 + num2
    // console.log("Rahul");
    // return result; 
    
    return num1 + num2;
    console.log("Rahul")   // if call return then nothing else will be execute. 
    

}

const result = addTwoNumber(3, 8)

// console.log("Result : ", result);


function loginUseMessage(username = "sam"){
    if(!username ){
        console.log("Please enter Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUseMessage("Rahul"))   outputs: //Rahul just logged in
// console.log(loginUseMessage(""))                 // just logged in
console.log(loginUseMessage("Bandu"))                     // undefined just logged in