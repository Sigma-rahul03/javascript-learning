const user = {
    username : "Rahul",
    price : "90908", 

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to my Website`);
        console.log(this);
    }
}
// user.welcomeMessage()

// user.price = "99999"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Rahul"
//     console.log(this.username);
    
// }
// chai()


// const chai = function(){
//     let username = "Rahul"
//     console.log(this.username);
// }



// const chai = () => {
//     let username = "Rahul"
//     console.log(this);
// }

// chai()

// explicetor return 
// const addTwo = (num1 , num2) => {  // if you use curly brecat{} then use return.
//     return num1 + num2
// }

// implisit return
// const addTwo = (num1 , num2) =>  num1 + num2 
// const addTwo = (num1 , num2) => ( num1 + num2 )   // if you use paranthesis brecat{} then no need use return

const addTwo = (num1 , num2) => ( {username : "Rahul"} )  // { username: 'Rahul' }

console.log(addTwo(38, 48));

// consr myArray = [2,3,45,6,7]
// myArray.forEach();