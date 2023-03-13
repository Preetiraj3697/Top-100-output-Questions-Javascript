// map();

// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Syntax:= array.map(function(currentValue,index,arr),thisValue);
// currentValue (Required) := The value of the current element.
// index(Optional) := The array index of the current element.
// arr(Optional) := The array object the current element belongs to 
// thisValue(Optional) := A value to be passed to the function to be used as its "this" value. if this
// parameter is empty, the value "undefined" will be passed as its "this" value.

// Key Point :=

// map() does not execute the function for array elements without values.
// this method does not change the original array.

const numbers = [2,3,4,5,6];
const mul = numbers.map(el => el*3);
console.log('mul: ', mul); // mul:  (5) [6, 9, 12, 15, 18]

const squreRoot  = numbers.map(ele => Math.floor(Math.sqrt(ele)));
console.log('squreRoot : ', squreRoot ); // squreRoot :  (5) [1, 1, 2, 2, 2]



