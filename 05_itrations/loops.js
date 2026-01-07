// for

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");

    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //    console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);

    }
}

// let myArray = ["crime", "police", "investigation"]

// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);

// }


// ************************************************//

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        // console.log(`i is detected at ${index}`);
        continue;
    }
    // console.log(`Value of i is ${index}`);   
}


//  _______________________****__________________________//


// while Loop

let i = 0;
while (i <= 10) {
    // console.log(i);
    i++;
}

let myArray = ['ACP Pratuman', 'CID Daya', 'Dr.Salunke']

let arr = 0;
while (arr < myArray.length) {
    // console.log(`Officer name is ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 123;
do {
    // console.log(`score is ${score}`);
    score++;
} while (score <= 10);


// &&&&&&&&&&&&&&^^^^^^^^^^^^^^^^^^^^^^^^^&&&&&&&&&&&&&&&&&&& //

// for of

// ["", "", "",]
// [{}, {}, {}]

const arr1 = [1, 3, 4, 5, 6, 7]

for (const num of arr1) {
    // console.log(num);

}

const greetings = "Hello Wolrd!"
for (const greet of greetings) {
    // if(greet == " ")
    // {
    //     continue;
    // }
    // console.log(`Each char value is ${greet}`);
}


// Maps


// map is object by self;
// Map objects are collections of key-value pairs.
//  A key in the Map may only occur once; 
// it is unique in the Map's collection.
//  A Map object is iterated by key-value pairs — 
// a for...of loop returns a 2-member array of [key, value] for each iteration.

const map = new Map() 
map.set('IN', 'India')
map.set('RUS', 'Russia')
map.set('USA', 'United States of America')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '-->', value );
    
}

// const myObject = {
//     GamePro : 'BGMI',
//     GameNoob : 'FF'
// }

// for (const [key, value] of myObject) {
//     console.log(key, '--', value);
    
// } it's  gives TypeError: myObject is not iterable



//************************************************/


// for in // 

const myObject = {
    java : 'Java SpringBoot',
    Js : 'Java Script',
    cpp : 'C++',
    R : 'R - programming'
} 


for (const key in myObject) {
    // console.log(key);  
}
// its run successfully :-
// java
// Js
// cpp
// R


for (const object in myObject) {
    // console.log(myObject[object]);   
}
// its run successfully :-
// Java SpringBoot
// Java Script
// C++
// R - programming


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);

// java shortcut is for Java SpringBoot
// Js shortcut is for Java Script
// cpp shortcut is for C++
// R shortcut is for R - programming
}


const programming = ['JS', 'java', 'c++', 'c#']

for (const key in programming) {
    // console.log(programming[key]);
        
}

// const map1 = new Map() 
// map.set('IN', 'India')
// map.set('RUS', 'Russia')
// map.set('USA', 'United States of America')

// for (const key in map1) {
//   console.log(key);
    
// } it's not work

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (val) {
//     console.log(val);  
// })

// coding.forEach( (items) => {
//  console.log(items);
 
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe )
 
// coding.forEach( (item, index, arr) => {
// console.log(item, index, arr);
// })

const myCoding = [
    {
        name : 'RAHUL',
        surname : 'Patil'
    }, 
    {
        petName : 'Bandu',
        surname : 'Patil'
    }
]

myCoding.forEach( (item) => {
    // console.log(item.surname);
    
})

// return
 
// const coding2 = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding2.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);





