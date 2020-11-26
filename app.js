/*
// 1.Ways to print in JS

alert("This is a alert")
document.write("This a write method");

// 1. js console api
 console.log("Hello World", 8 + 4, "JS");
 console.warn("this a warning");
 console.error("This is a error");
 console.assert(4==(6-2)); 

 // 3.Javascript variable

 var number = 56;
 var number2 = 45;
 // console.log(number + number2);


 // 4. Data types in js
 // Numbers
 var num = 34;
 var num2 = 34.78;
 // String
 var str = "this is a string";

 // Objects
 var age = {
     rohit: 13,
     sam: 34,
     chinmay: 14
 }
 // console.log(age);

 // Booleans
 var bool1 = true;
 var bool2 = false;
 console.log(bool1,bool2);

 var und = undefined;
 var a;
 console.log(a);

 var b = null;
 console.log(b);

 
  At a very high level, there are two types of datatype i in js
  1. Primitive datatypes: undefined, null, number, string, boolean,symbol
  2.Reference datatypes: Arrays and objects
 

  var arr = [1, 3, 56, 99, "Germany"]
  console.log(arr);

 //  Operators in js
 // Arithmetic Operators
 var a = 89;
 var b = 75;
 console.log("The value of a + b is", a+b);
 console.log("The value of a - b is", a-b);
 console.log("The value of a * b is", a*b);
 console.log("The value of a / b is", a/b); 

// Assignment Operators
var c = b;
c += 4;
c -= 4;
c *= 4;
c /= 4;
console.log(c);


// Comparison Operators
var x = 45;
var y = 32;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x < y);
console.log(x > y);

// Logical Operators
// logical and
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);     

// Logical or
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

// Logical not
console.log(!false);
console.log(!true);

// Function in js
// DRY = Do not repeat yourself
function avg (a,b)
{
   c = (a + b)/2;
   return c;
}

c1 = avg(45, 6);
c2 = avg(78, 90);
console.log(c1, c2);

// Conditionals in js 
var age = 18;
if (age > 18) {
    console.log("You are eligible");
} else if(age == 18) {
    console.log("We will think about you");
} 
else {
    console.log("You are not eligible");
} 

// loops in js
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    if(i == 2)
    {
        // break;
        continue;
    }
     console.log(arr[i]);
}

arr.forEach(function(elements){
    console.log(elements);
})

let i = 0;
const c = 45; Constant can't change
while (i<arr.length) {
    console.log(arr[i]);
    i++;
}

do {
    console.log(arr[i]);
        i++;
} while (i < arr.length);

let arr = ["This a array", 45, null, true];

console.log(arr.length);
arr.pop();
arr.push("Chinmay");
arr.shift();
 console.log(arr.toString());
const newLen = arr.unshift("rohit");

console.log(newLen);
let num = [1, 3, 2, 9, 6];
num.sort();
console.log(arr); 
console.log(num);  

// String Methods in js
let str = "This a string string";
console.log(str.length);
console.log(str.indexOf("string"));
console.log(str.lastIndexOf("string"));
console.log(str.slice(0,5));
c = str.replace("This", "bansal");
console.log(c); 

//Dates in js
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours()); 

// DOM Manipulation
let btn = document.getElementById('btn');
console.log(btn);

let elemClass = document.getElementsByClassName('container');
// elemClass[0].style.background = "orange";
elemClass[0].classList.add('bg-primary');
// elemClass[0].classList.remove('bg-primary');
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);
console.log(elemClass); 

let tag = document.getElementsByTagName('div')
console.log(tag);
let cE = document.createElement('p');
cE.innerText = "This is a js para";
tag[0].appendChild(cE);
let cE2 = document.createElement('button');
cE2.innerText = "This is a js Button";
tag[0].replaceChild(cE2, cE);

console.log(document.location);
console.log(document.title);
console.log(document.URL);
console.log(document.scripts);
console.log(document.links);
console.log(document.images);
console.log(document.domain);
console.log(document.forms); 

// Selecting using Qurey

let Q = document.querySelector('.container')
console.log(Q);
Q = document.querySelectorAll('.container')
console.log(Q); 

const clicked = () => {
    console.log('Button is clicked');
}
window.onload =  function() {
    console.log("Document loaded");
}

// Events in js
let firstContainer = document.querySelector('.container');
firstContainer.addEventListener('click', function() {
    console.log("Container clicked");
})
firstContainer.addEventListener('mouseover', function() {
    console.log("Mouse hovered on Container");
}) 
firstContainer.addEventListener('mouseout', function() {
    console.log("Mouse out of Container");
}) 
let preHtml = document.querySelectorAll('.container')[2].innerHTML;
firstContainer.addEventListener('mouseup', function() {
    document.querySelectorAll('.container')[2].innerHTML = preHtml;
    console.log("Mouse up Container");
})
firstContainer.addEventListener('mousedown', function() {
    document.querySelectorAll('.container')[2].innerHTML = '<b>Clicked Event fired</b>'
    console.log("Mouse down Container");
}) 

// Arrow Functions
const sum = (a,b) => {
    return a+b;
}  
// Set Time out and set interval
const log = () => {
    console.log("Set Timeout Fired");
}
let clr = setTimeout(log, 2000)
let clr = setInterval(log, 2000)
// use clearInterval (clr)/clearTimeout(clr) to cancel setInterval/setTimeout
clearInterval(clr)
clearTimeout(clr) 

// Js localStorage

localStorage.setItem('perfomance', 'great');
localStorage.getItem('perfomance');
localStorage.clear(); 
localStorage.removeItem('perfomance'); 

// JSON

obj = {
    name: "chinmay", length: 1, w: {word: "de"}
};
jso = JSON.stringify(obj);
console.log(jso);
par = JSON.parse(jso)
console.log(par); */

// Template literals
let n = 45;
console.log(`My number is ${n}`);