console.log("If Else Condition");
const age = 28;
const doesDrive = false;
// const vari = 35;

// if (age != 18) {
//   console.log("Age is not 18");
// }
// if (age !== 65) {
//   console.log("Age is 65");
// } else {
//   console.log("Age is not 18");
// }

// if (typeof vari !== "undefined") {
//   console.log("vari is defined");
// } else {
//   console.log("vari is not defined");
// }

// if (doesDrive || age > 18) {
//   console.log("You can Drive");
// } else {
//   console.log("You cannt Drive");
// }

// Ternary operator
// console.log(age == 45 ? "Age is 45" : "Age is not 45");

switch (age) {
  case 18:
    console.log("You are 18");
    break;
  case 28:
    console.log("You are 28");
    break;
  case 38:
    console.log("You are 38");
    break;
  default:
    console.log("You are unknown age");
    break;
}
