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
let data = "true";
//convert data to boolean true value
console.log(typeof !!data); //boolean
