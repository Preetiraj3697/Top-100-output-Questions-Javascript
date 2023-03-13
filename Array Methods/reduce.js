// reduce();

// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right);
// The return value of the function is stored in an accumulator (result/total).

// Syntax := array.reduce(function(total,currentValue,currentIndex,arr),initailValue);
// total(Required) := The initailValue, or the previously returned value of the function
// currentValue(Required) := The value of the current element
// currentIndex(Optional) := The array index of the current element
// arr(Optional) := The array object the current element belongs to
// initialValue(Optional) := A value to be passed to the function as the initail value

// Key Point:=

// reduce() does not execute the function for array elements without values.
// this method does not change the original array.

// const array1 = [1,2,3,4,5,6,7,8];

// const reducer = (acc,curr) => {
//     return acc + curr;
// }
// console.log(array1.reduce(reducer)); // 36 
// console.log(array1.reduce(reducer,9));// 45

const sum = [1,2,3,4,5,6,7,8].reduce(function(acc,curr){
    
    return acc+curr;
})
console.log('sum: ', sum); // sum:  36