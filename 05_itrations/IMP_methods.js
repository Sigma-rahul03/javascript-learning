// push()

const myNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newNum = myNums.filter((num) => {
//    return num > 4;
// })

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


 //filter()///
 

const Phone = [
{Company: 'Redmi', series : 'note15', publish: 2026},
{Company: 'Realme', series : 'P3', publish: 2025},
{Company: 'Apple', series : '16pro', publish: 2024},
{Company: 'Nothing', series : '2a', publish: 2023},
];

let userPhone = Phone.filter((mobile) => mobile.Company === 'Redmi')

userPhone  = Phone.filter( (mobile) => {
    return mobile.publish >= 2024 && mobile.series === 'P3'
});
// console.log(userPhone);


// map()

const myNums2 = [1,2,3,4,5,6,7,8,9,10]

// const newNum3 =  myNums2.map((num)=> {return num + 10})

const newNum3 = myNums2
                .map((num) => num * 10)
                .map((num) => num + 1)
                // .filter((num) => num > 39)

// console.log(newNum3);


// reduse()

const myNumbers = [1, 2, 4, 5, .5, 6, 7]

// const mySum = myNumbers.reduce(function (accumulative, CurentValue){
//        console.log(`acc : ${accumulative} and curval: ${CurentValue}`);
       
//     return accumulative + CurentValue

// }, 0)

const mySum = myNumbers.reduce((acc, curVal) => acc + curVal, 0)

console.log(mySum);


const shoppingCart = [
    {
        itemName : "C++",
        price : 1999
    },
    {
        itemName : "Js",
        price : 2999
    },
    {
        itemName : "JAVA",
        price : 3999
    },
    {
        itemName : "DA",
        price : 999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
