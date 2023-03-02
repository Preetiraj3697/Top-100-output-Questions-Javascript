/** @format */

// console.log("hello world")
//===============================//
//1
// let a = [];
// let b = [];
// console.log(a==b); // false
// console.log(a===b); // false
//==============================//
//2
// let a = [];
// let b = a;
// console.log(a==b); // true
// console.log(a===b); // true
//because of memory location
//==============================//
//3
// let a = [20];
// let b = [20];
// console.log(a[0]==b[0]); // true
// console.log(a[0]===b[0]); // true
//because of memory location
//==============================//
//4
// let z = [1,2,3,4]
// let a = {name:"anil"};
// console.log(...z); // 1,2,3,4
//==============================//
//5
// console.log(typeof NaN); //number
//==============================//
//6
// let data = 10 - -10;
// console.log(data); //20
//==============================//
//7

// const set = new Set([1,2,2,3,4,4,5]);
// console.log(set); //Set(5) {1, 2, 3, 4, 5}

//==============================//
//8
// let data = {name:"Anil"};
// console.log(delete data.name); //true
// console.log(data); //{}

//==============================//
//9
// const data ={name:"anil"};
// console.log(delete data); // false
// console.log(data); // {name: 'anil'}

//==============================//
//10
// const data = ['Peter','anil','sam'];
// const [y] = data;
// console.log(y); //Peter
//==============================//
//11
// const data = ['Peter','anil','sam'];
// const [,y] = data; //how to get second value without first value
// console.log(y); //anil
//==============================//
//12
// const data = {name:"anil",age:29,skill:"JS"};
// const {name} = data;
// const {age} = data;
// console.log(name); //anil
// console.log(age); //29
//how to get name property without . operator
//==============================//
//13
// let data = {name:"anil", age:29, skill:"JS"};
// let info = {city:"Noida", mail:"anil@test.com"};
// data = {...data,...info}
// // merge 2 object
// console.log(data) // {name: 'anil', age: 29, skill: 'JS', city: 'Noida', mail: 'anil@test.com'}
//==============================//
//14
// let data = {name:"anil", age:29, skill:"JS"};
// let info = {city:"Noida",};
// data = {data,...info}
// // merge 2 object
// console.log(data) // {data:  {name: 'anil', age: 29, skill: 'JS'}, city: 'Noida'}
//==============================//
//15
// let data = {name:"anil", age:29, skill:"JS"};
// let info = {city:"Noida", skill:"NodeJs"};
// data = {...data,...info}
// // merge 2 object
// console.log(data) // {name: 'anil', age: 29, skill: 'NodeJs', city: 'Noida'}
//==============================//
//16
// const result = false || {} || null;
// console.log(result); // {}
//first positive value take || or operator
//==============================//
//17
// const name = "Anil";
// console.log(name()); // index.js:98 Uncaught TypeError: name is not a function
//==============================//
//18
// const result = null || false || '';
// console.log(result); // ''
// if not have any positive value than or operator take last value
//==============================//
//19
// console.log(Promise.resolve(5));  // Promise {<fulfilled>: 5}
//==============================//
//20
// const result = [] || 0 || true;
// console.log(result); //[]
//==============================//
//21
// console.log('🧡'==='🧡') // true
//emoji have unique code

//==============================//
//22
//JSON.parse();
//What this method will do
// A: Parses JSON to a Javascript Value
// B: Parses a Javascript object to JSON
// C: Parses any Javascript value to JSON
// D: Parses JSON to a JavaScript OBject only
// answer is A.

//==============================//
//23
// let name = 'Preeti';
// function getName(){
//     console.log(name); // Uncaught ReferenceError: Cannot access 'name' before initialization
//     let name = 'anil';
// }
// getName();

//==============================//
//24
// let name = 'Preeti';
// function getName(){
//     console.log(name); // Preeti
// }
// getName();

//==============================//
//25
// console.log(`${(x=>x)('I Love')} to Program`) // I Love to Program

//==============================//
//26
// function sumValues(x,y,z){
//     return x+y+z;
// }
//A: sumValues([...1,2,3]);
//B: sumValues([...[1,2,3]]);
//C: sumValues(...[1,2,3]);
//D: sumValues([1,2,3]);
// console.log(sumValues(...[1,2,3])) //6
//answer is B;

//==============================//
//27
// const name = "I am full stack web developer";
// console.log(!typeof name === "object"); //false
// console.log(!typeof name === "string"); //false

//==============================//
//28
// const name = "Subscribe";
// const age = 21;

// console.log(isNaN(name));//true
// console.log(isNaN(age)); //false

//==============================//
//29
// let person = {name:"Preeti"};
// //what can modify person object;
// Object.seal(person);
// person.name="Paarthav";
// console.log(person); // {name: 'Paarthav'}

//==============================//
//30
// let data = [2,9,5,3];
// //remove first element;
// data.shift();
// console.log(data); // [9, 5, 3]
//==============================//
//31
// let data = [2,9,5,3];
// //remove last element;
// data.pop();
// console.log(data); // [2,9,5]
//==============================//
//32
//check any value is odd or even
// let num = 24;
// if(num%2===0){
//     console.log("even")
// }else{
//     console.log("odd");
// }
// //answer is even
//==============================//
//33
// let data={
//     name:"anil"
// }
// delete data;
// console.log(data); // {name: 'anil'}

//==============================//
//34
// let data = "true";
// //convert data to boolean false value
// console.log(typeof !data); //boolean

//==============================//
//35
// let data = "true";
// //convert data to boolean true value
// console.log(typeof !!data); //boolean

//==============================//
//36
//differnce between map and forEach function
// The forEach() method is used to loop through each element of an array or object. The forEach() method takes a callback function as an argument. The callback function is invoked for each element of the array or object.
// The forEach() method is similar to the for loop, but it does not have a return value.
// The map() method is similar to the forEach() method, but it returns a new array.

//==============================//
//37
// let data = ['anil','peter','bruce'];
// delete  data[1];
// console.log(data) // ['anil', empty, 'bruce']
// console.log(data.length) // 3

//==============================//
//38
// merge two array
// let a = [1,2,3];
// let b = [4,5,6];
// let c = [...a,...b];
// console.log(c); //(6) [1, 2, 3, 4, 5, 6]

//==============================//
//39
// let a = [1,2,3,4];
// let b = [4,5,6];
// let c = [...a,...b];
// console.log(c); // [1, 2, 3, 4, 4, 5, 6]

//==============================//
//40
// let c = 3 ** 3
// console.log(c); // 27

//==============================//
//41
// let a = 2;
// setTimeout(()=>{
//     console.log(a);  //100
// },0)
// a=100;

//==============================//
//42
// let a = 2;
// let A = 30;
// console.log(A); //30
//==============================//
//43
// let A10 = "like"; // it possible variable name
// let 10A = 'like'; // it's not possible variable name because variable name are not start with numbers.
// console.log(A10)

//==============================//
//44
// let a = 'like';
// let b =`like`;
// console.log(a===b); //true
//==============================//
//45
// let a = 1;
// let b = 2;
// console.log(--b === a); // true
//==============================//
//46
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c) //false
//==============================//
//47
// console.log(3*3); // 9
// console.log(3**3); //27
// console.log(3***3); //Error unexpected token *
//==============================//
//48
// console.log(a); //undefined;
// var a;
//==============================//
//49
// console.log(b); // b is not defined;
//==============================//
//50
// console.log([[[[]]]]) 
// [Array(1)]0: Array(1)0: Array(1)0: Array(0) // nested array
//==============================//
//51
// how to find OS name
// console.log(navigator.platform) // Win32
//==============================//
//52
// let for = 100;
// console.log(for); // Error :  for is reserver keyboard
//==============================//
//53
// function fruit(){
//     console.log(name); // undefined;
//     console.log(price); // Error: Cannot access 'price' before initialization
//     var name = 'apple';
//     let price = 20;
// };
// fruit();
//==============================//
//54
// console.log(+true); //1
// console.log(typeof +true); // number
//==============================//
//55
// console.log(!"anil"); //false
// console.log(typeof("anil")); //string
//==============================//
//56
// let data = 'size';
// const bird = {
//     size: 'small',
// }
// console.log(bird[data]); // small
// console.log(bird["size"]); // small
// console.log(bird.size); // small
// console.log(bird.data); // undefined
//==============================//
//57
// let c = {name:"peter"};
// let d;
// d = c;
// c.name = 'anil'
// console.log(d.name); //anil
//==============================//
//58
// var x;
// var x = 10;
// console.log(x); //10
//==============================//
//59
// var x;
// let x = 10;
// console.log(x); //Identifier 'x' has already been declared
//==============================//
//60
// let a = 3;
// let b = new Number(3);
// console.log(a==b); //true
// console.log(a===b); //false
//==============================//
//61
// let name;
// nmae = {}; //Typo!
// console.log(name); // undefined; 
//==============================//
//62
// let name;
// nmae = {}; //Typo!
// console.log(nmae); //{}
//==============================//
//63
// function fruit(){
//     console.log("Woof!"); //Woof!;
// }
// fruit.name = "apple";
// fruit();
//==============================//
//64
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,"2")); //12
//==============================//
//65
// let number = 0;
// console.log(number++); // 0
// console.log(++number); // 2
// console.log(number); // 2
//==============================//
//66
// function getAge(...args){
//     console.log(args); // [21];
//     console.log(typeof args); //object
// }
// getAge(21);
//==============================//
//67
// function getAge(){
//     'use strict'
//     age = 21;
//     console.log(age); // age is not defined at getAge 
// }
// getAge();
//==============================//
//68
// const sum = eval('10*10+5');
// console.log(sum); // 105;
//==============================//
//69
// How long is cool_secret assessbile?
// sessionStorage.setItem('cool_secret',123);
// The data stored in sessionStorage is removed after closing the tab.
// If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked.
//==============================//
//70
// function sayHi() {
//   console.log(name); // undefined
//   console.log(age); // Error
//   var name = 'Lydia';
//   let age = 21;
// }

// sayHi();
// D: undefined and ReferenceError
//==============================//
//71
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1); // 3, 3, 3
//   }
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1); // 0, 1, 2
//   }
  // C: 3 3 3 and 0 1 2
//==============================//
//72
// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter()); // 20
//   console.log(shape.perimeter()); //NaN
  // B: 20 and NaN
//==============================//
//73
// console.log(+true); // 1
// console.log(!!'Lydia'); //true
//==============================//
//74
// const bird = {
//     size: 'small',
//   };
  
//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };
//   console.log(mouse.bird.size) //not valid
//   console.log(mouse[bird.size]) //true
//   console.log(mouse[bird["size"]]) //true
//   A: mouse.bird.size is not valid
//   B: mouse[bird.size] is not valid
//   C: mouse[bird["size"]] is not valid
//   D: All of them are valid
 //Answer A: mouse.bird.size is not valid
//==============================//
//75

// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }
  
//     constructor({ newColor = 'green' } = {}) {
//       this.newColor = newColor;
//     }
//   }
  
//   const freddie = new Chameleon({ newColor: 'purple' });
//   console.log(freddie.colorChange('orange'));

  // D: TypeError
  // The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since freddie is a child, the function is not passed down, and not available on the freddie instance: a TypeError is thrown.

  //==============================//
//76
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(member.getFullName());
//   Answer: A TypeError
// You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
// would have made member.getFullName() work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every Person instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!


//==============================//
//77
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah = Person('Sarah', 'Smith');
  
//   console.log(lydia); // Person {firstName: "Lydia", lastName: "Hallie"}
//   console.log(sarah); // undefined
  // A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
//==============================//
//78
// . What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling
// Answer: D
// During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.
//==============================//
//79
// All object have prototypes.
// A: true
// B: false
// Answer: B
// All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.

//==============================//
//80
// function getPersonInfo(one, two, three) {
//     console.log(one); // ['', ' is ', ' years old', raw: Array(3)]
//     console.log(two); // Lydia
//     console.log(three); // 21
//   }
  
//   const person = 'Lydia';
//   const age = 21;
  
//   getPersonInfo`${person} is ${age} years old`;
  // Answer: B: ["", " is ", " years old"] "Lydia" 21
  // If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!

//==============================//
//81
// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
  
//   checkAge({ age: 18 });  // Hmm.. You don't have an age I guess
//When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.
// The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
// This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.
//==============================//
//82

// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty('1');
// obj.hasOwnProperty(1);
// set.has('1');
// set.has(1);
// C: true true false true
// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.
// It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.
//==============================//
//83
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj); // {a: 'three', b: 'two'}
//==============================//
//84
// for(let i=1; i<5; i++){
//     if(i===3) continue;
//     console.log(i); // 1,2,4
// }
//==============================//
//85
// const foo = () => console.log("First");
// const bar = () => setTimeout(()=>console.log("Second"));
// const baz = () => console.log('Third');
// bar();
// foo();
// baz();
//First
// Third
// Second
//==============================//
//86
{/* <div>
<div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
        <button onclick="console.log('button')">
            Click!
        </button>
    </div>
</div>
</div> */}
//button
//second div
//first div
//==============================//
//87
// const person = {name:'anil'};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person,21)); // anil is 21
// console.log(sayHi.bind(person,21)); 
// // sayHi(age){
// //     return `${this.name} is ${age}`;
// // }
// console.log(sayHi.bind(person,21)());  // anil is 21

//==============================//
//88
// function sayHi(){
//     return (()=>0)();
// }
// console.log(typeof sayHi()); //number
//==============================//
//89
// function sayHi(){
//  return () => 0;
// }
// console.log(typeof sayHi()); //function;
// console.log(typeof sayHi()()); //number;

//==============================//
//90
// console.log(typeof typeof 1); // string
//==============================//
//91
// const numbers = [1,2,3];
// numbers[6] =11;
// console.log(numbers); // (7) [1, 2, 3, empty × 3, 11]
//==============================//
//92
// const numbers = [1,2,3];
// numbers[9] = numbers;
// console.log(numbers); // Infinity array add in position at 9 position.
//==============================//
//93
// Everythibg is Javascript is either a...
// A: primitive or object
// B: function or object
// c: Trick question only objects
// D: number or object
// answer is A;
//==============================//
//94
// console.log(!!null); //false
// console.log(!!""); //false
// console.log(!!1); // true

//==============================//
//95
// console.log(setInterval(()=>console.log("HI"),1000));
// console.log(setInterval(()=>console.log("HI"),1000));
// console.log(setInterval(()=>console.log("HI"),1000));

//==============================//
//96
// console.log([...'anil']); //(4) ['a', 'n', 'i', 'l']

//==============================//
//97
// const firstPromise = new Promise((res,rej)=>{
//     setTimeout(res,500,'one');
// });
// const secondPromise = new Promise((res,rej)=>{
//     setTimeout(res,100,'two');
// });
// Promise.race([firstPromise,secondPromise]).then(res=>console.log(res)); // two
//==============================//
//98
// let person = {name:'peter'};
// const members = [person];
// person = null;
// console.log(members); // [{name: 'peter'}]
//==============================//
//99
// const person = {
//     name : 'batman',
//     age: 21,
// };

// for(const item in person){
//     console.log(item); // name,age
//     console.log(person[item]); //batman , 21
// } 
//==============================//
//100
// let data = 3+4+'5';
// console.log(typeof data); // string;

//==============================//
//101
// console.log(typeof 3+4+"5") // number45

//==============================//
//102
// console.log(typeof (3+4+ +"5")); //number

//==============================//
//103
// console.log([]==[]); //false;

//==============================//
//104
// let data = [1,2,3].map(num => {
//     if(typeof num === 'number') return;
//     return num *2;
// });
// console.log(data); // (3) [undefined, undefined, undefined]

//==============================//
//105
// function getInfo(member){
//     member.name = 'Anil';
// };
// const person = {name: 'Sarah'};
// getInfo(person);
// console.log(person); // {name: 'Anil'}
//==============================//
//106
// function Car(){
//     this.make = 'tata';
//     return {make: 'Kia'};
// }
// const myCar = new Car();
// console.log(myCar.make); // "Kia";
//==============================//
//107
// (()=>{
//     let x = (y=10);
// })();
// console.log(typeof x); //undefined;
//==============================//
//108
// (()=>{
//     let x = y = 10;
// })();
// console.log(typeof y); //number
//==============================//
//109
// (()=>{
//     let x = 10;
// })();
// (()=>{
//     let x = 10;
// })();
// console.log(typeof x); //undefined;
//==============================//
//110
// (()=>{
//     let x = y =  10;
// })();
// (()=>{
//     let x = y = 20;
// })();
// console.log(y);  // 20
//==============================//
//111
// let x = 100;
// (()=>{
//     let x = 20;
// })();
// console.log(x); // 100
//==============================//
//112
// console.log(!true-true); //-1
//==============================//
//113
// console.log(true+ +"10"); //11
//==============================//
//========String interview Question==============//
let str = "Hello, How are you";

//convert str in only 1 array;
// console.log(str.split()); or console.log([str]); // ['Hello, How are you']

//convert string to array iwth each character
// console.log(str.split("")); or console.log([...str]);  //['H', 'e', 'l', 'l', 'o', ',', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']

//convert string to array with space or any sequence
// console.log(str.split(" ")) // (4) ['Hello,', 'How', 'are', 'you']
//  console.log(str.split('a')) // ['Hello, How ', 're you']

// replace any character
// console.log(str.replace('H',"P")) // Pello, How are you
// console.log(str.replace("Hello","Hi"));  // Hi, How are you

// Get substring from string
// console.log(str.substring(6,10)) //  How

// Remove First Character
// console.log(str.substring(1,str.length)) // ello, How are you

// Remove last Character
// console.log(str.substring(0,str.length-1)) //Hello, How are yo

// Remove string before specific character
// let temp = str.split("o");
// console.log(temp); // ['Hell', ', H', 'w are y', 'u']
// console.log(temp[0]); // Hell

//reverse string
// let temp = str.split("").reverse().join("");
// console.log(temp); //uoy era woH ,olleH

// Remove extra space from both side;
// let string = "    Hello World       "
// console.log(string.trim())  // Hello World

// var roles = {
//     writer: {
//      firstname: "Ravindu",
//      lastname: "Shehan", 
//      email: "ravindu@gmail.com"
//     }, 
//     reviewer: {
//      firstname: "Ravindu",
//      lastname: "Shehan", 
//      email: "ravindu@gmail.com"
//     }
//   }
  
//   console.table (roles);
  