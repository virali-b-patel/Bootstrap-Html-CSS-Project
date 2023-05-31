console.log("tut7.js");
let marks = [49, 44, 38, 34, 45];
const fruits = ["Apple", "Banana", "chickoo"];
const mixed = ["str", 24, [2, 4, 5]];
const arr = new Array("Watermelon", 10, 20, 30);
// console.log(marks);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray("ab"));
// difficulty
console.log(Array.isArray("Watermelon"));
arr[0] = "Vijay";
let arrelement = arr[0];
console.log("element:", arrelement);
console.log(arr);

let value = marks.indexOf(34);
console.log(value);

// Mutating or modifying arrays
marks.push(1000);
marks.unshift(2222);
marks.pop();
marks.shift();
marks.splice(1, 2);
marks.reverse();
let marks2 = [2, 4, 6, 8, 0];

marks = marks.concat(marks2);

// console.log(marks);

let myobj = {
  "self name": "Virali",
  channel: "CodeWithVirali",
  isActive: "true",
  marks: [99, 98, 97, 96],
};

console.log(myobj);
console.log(myobj["self name"]);
console.log(myobj.marks);
