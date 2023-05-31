// Type conversion
console.log("welcome to tut5");
let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);
let boooleanVar = String(true);
console.log(boooleanVar, typeof boooleanVar);
let date = String(new Date());
console.log(typeof date);

let arr = String([1, 2, 3, 4, 5]);
console.log(arr.length, typeof arr);

let i = new Date();
console.log(i.getFullYear().toString() === i.getFullYear());

let stri = Number("3434");
stri = Number("3434a");
stri = Number(true);
stri = Number([1, 2, 3, 4, 5]);
console.log(stri, typeof stri);

let number = Number("35.33123456");

console.log(number.toFixed(4), typeof number);

// type conversion

let nmystr = Number("555");
let nmynum = 55;
console.log(nmystr + nmynum);

let mystr = "555";
let mynum = 55;
console.log(mystr + mynum);
