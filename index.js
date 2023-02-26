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