// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 != 1);

// console,log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // O/P : false
// console.log(null == 0); // O/P : false
// console.log(null >= 0);// O/P :  true


// Because : The reason is that an equality check == and comparisons >, < , >= , <= work differently.
// Comparisons"" Convert null to number"", treating it as 0.
// That's why null >= 0 is true and null > 0 is false.

console.log(undefined == 0); // O/P : false
console.log(undefined  < 0); // O/P : false
console.log(undefined  < 0);// O/P :  false


// ===

console.log("2" === 2)