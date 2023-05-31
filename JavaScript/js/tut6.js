console.log("Wel come to tut.6");
const name = "vijay";
const greeting = "Hello";
console.log(greeting + " " + name);
let html;
html = "<h1>This is a Heading</h1>" + "<p>This is a Paragraph</p>";
html = html.concat("This", " Stri2");
console.log(html);
console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toLocaleUpperCase());
// counting from 0,1,2...and so on
console.log(html[1]);
console.log(html.indexOf("This"));
console.log(html.indexOf("gbjf"));
console.log(html.lastIndexOf(">"));
console.log(html.charAt(4));
console.log(html.endsWith("Stri2"));
console.log(html.endsWith("This"));
console.log(html.includes("Goddes"));
console.log(html.includes("is"));
// 7-2=5 it means that it takes 5 numbers only
console.log(html.substring(2, 7));
// so we cant use substring when we want last value
console.log(html.substring(-4));
console.log(html.slice(-5));
console.log(html.slice(0, 4));
console.log(html.split(" "));
console.log(html.split(">"));
console.log(html.replace("This", "It"));

let fruit1 = "Orange";
let fruit2 = "Apple";
let myHtml = `Hello ${name}
          <h1>This is a Heading</h1>
          <p>You Like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;
