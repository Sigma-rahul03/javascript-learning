let myData = new Date()
// console.log(myData.toString()); //Mon Dec 15 2025 07:27:58 GMT+0000 (Coordinated Universal Time)
// console.log(myData.toDateString()); //Mon Dec 15 2025
// console.log(myData.toISOString());  //2025-12-15T07:27:58.675Z
// console.log(myData.toJSON());       //2025-12-15T07:27:58.675Z
// console.log(myData.toLocaleDateString()); //12/15/2025
// console.log(myData.toLocaleString());  //12/15/2025, 7:27:58 AM
// console.log(typeof myData);  // object


// let myCreatedDate = new Date(2025, 11, 25)
// let myCreatedDate = new Date(2025, 5, 21, 9, 0)
// let myCreatedDate = new Date("2001-2-23")
let myCreatedDate = new Date("2-23-2001")

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMinutes());
console.log(newDate.getDate());
console.log(newDate.getUTCFullYear()+3);
console.log(newDate.getDay()+2);
// outputs:=
// 57
// 15
// 2028
// 3


// `${newDate.getFullYear()} and the month` 

newDate.toLocaleString('default', {
    weekday: "narrow",
})