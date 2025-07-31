// console.log(2 > 3);
// console.log(2 >= 3);
// console.log(2 == 3);
// console.log(2 != 3);
// console.log(2 < 3);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); //The reason is that an equaity check == and comparisons > < >= <= works differently.
//Comparisons convert null to a number, treating as a zero

// === strict check means datatypes are also considered

//==================================================================
//stack and heap memory 

let myName = "jaywardhan"
console.log(myName)
let anotherName = myName
anotherName = "js"
console.log(anotherName);
