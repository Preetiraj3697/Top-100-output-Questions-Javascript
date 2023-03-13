// from();

// The Array.from() method returns an Array object from any object with a length property or an iterable object.

// Syntax := Array.from(object,mapFunction,thisValue);

//object(Required) := The object to convert to an array.
// mapFunction(Optional) := A map function to call on each item of the array
// thisValue(Optional) := A value to use as this when executing the mapFunction
console.log(Array.from("abc")); // ['a', 'b', 'c']

console.log(Array.from([1,2,3],x=>x+x)); //  [2, 4, 6]

console.log(Array.from([1,2,3,4,5,6],x=>x%2==0)); //  [false, true, false, true, false, true]

console.log(Array.from([1,2,3,4,5,6],x=>x%2==0?x:-1)); //  [-1, 2, -1, 4, -1, 6]