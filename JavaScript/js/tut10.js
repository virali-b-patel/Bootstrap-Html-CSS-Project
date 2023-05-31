console.log("Function & scope");

const mygreet = function (name, thanks = "Thank You") {
  let msg = `Happy Birthday ${name}. Many Many Happy Returns of the Day.God Bless You Alls. Happy and Healthy Life Afead. ${thanks}!`;
  return msg;
};

let name = "Riddhi";
let name2 = "Jaimini";

let val = mygreet(name, "Thanks a lot");

console.log(val);

const myobj = {
  name: "Riddhi",
  game: function () {
    return "GTA";
  },
};
console.log(myobj.game());

arr = ["fruit", "vegetable", "dry-fruit"];
arr.forEach(function (elements, index, array) {
  console.log(elements, index, array);
});
if (1) {
  var i = 200;
  console.log(i);
}
console.log(i);
function ui(name) {
  let i = 9;
  console.log(i);
  return `This is a ${name} ui`;
}
console.log(ui("Virali"), i);
