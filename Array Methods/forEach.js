// forEach()
// The forEach() method calls a function once for each element in an array, in order.

// Syntax:- array.forEach(function(currentValue,index,arr),thisValue);

// CurrentValue (Required) = The value of the current element
// Index (Optional) = The array index of the current element
// arr (Optional) = The array object the current element belongs to 
// thisValue(Optional) = A value to be passed to the function to be used as its "this" value. if this parameter is empty,
// the value "undefined" will be passed as its "this" value.
// Key Point:=
// forEach expects a synchronous function
// forEach does not wait for promises.

const arr = ["a","b","c"];
arr.forEach(ele => console.log(ele)) // a b c

// const arr1 = [2,3,4];
// let sum = 0;
// let sumFunc = (a,b) => a+b;

// arr1.forEach((ele)=>sum = sumFunc(sum,ele));
// console.log('sum: ', sum); // sum:  9

const arr1 = [2,3,4];
let sum = 0;
let sumFunc = async (a,b) => a+b;

arr1.forEach(async function(ele){
    sum = await sumFunc(sum,ele);
});
console.log('sum: ', sum); // sum:  0