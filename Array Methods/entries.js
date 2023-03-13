// entries();
// The entries() method returns an Array Iterator object with key/value pairs. For each item in the original array,
// the new iteration object will contain an array with the index as the key, and the item value as the value:
// Syntax :- array.entries();
// So, entries return an object on which you can call next(). Every invocation of next() will return an object of shape.
// {
//  value : Array | undefined
//  done  : false | true
// }

// Note: This method does not change the original array.

let sports = ["cricket","Football","Chess","Hockey"];
let s =  sports.entries();
// console.log('s: ', s.next());
// console.log('s: ', s.next());
// console.log('s: ', s.next());
// console.log('s: ', s.next());
// console.log('s: ', s.next());

//s:  {value: Array(2), done: false}
// {value: Array(2), done: false}done: falsevalue: (2) [1, 'Football'][[Prototype]]: Object
// {value: Array(2), done: false}done: falsevalue: (2) [2, 'Chess'][[Prototype]]: Object
// {value: Array(2), done: false}done: falsevalue: (2) [3, 'Hockey'][[Prototype]]: Object
// { value: undefined, done: true}

for(let value of s){
    console.log(value);
}
//(2) [0, 'cricket']
// (2) [1, 'Football']
// (2) [2, 'Chess']
// (2) [3, 'Hockey']