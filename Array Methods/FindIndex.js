// findIndex();
// The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
// if if finds an array element where the function returns a true value, findIndex() returns the index of that array
// element (and does not check the remaning values) otherwise it returns -1.
// Syntax :- array.findIndex(function(currentValue,index,arr),thisValue);
// value = The value of the current element
// index (optional) = The array index of the current element
// arr (optional) = The array object the current element belongs to
// thisValue (optional) = A value to be passed to the function to be used as its "this" value. If this
// parameter is empty, the value "undefined" will be passed as its "this" value
// Key Point
// findIndex() does not execute the function for empty arrays.
// findIndex() does not change the original array. 

let sports = ["cricket","Football","Chess","Hockey","Badminton","Tennis"];
const index = sports.findIndex(item => item ==="Football");
console.log('index: ', index);  // index:  1
