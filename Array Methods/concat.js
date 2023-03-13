console.log("Hello world!");
// 1 concat() 
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays,
// but instead return a new array.
// syntax :- array1.concat(array2,array3,...,arrayX);

//Different Operation on Concat();
// concat two array
// concat three array
// concat alphanumeric value to array
// concat values to array
// concat nested array


// 1. concat two array
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);
console.log('array3: ', array3); // ['a', 'b', 'c', 'd', 'e', 'f']

// 2. concat three array
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];
const arr4 = arr1.concat(arr2,arr3);
console.log('arr4: ', arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3. concat values to array
const value = [];
const num = [2,3];

const arr5 = value.concat(1,num);
console.log('arr5: ', arr5); // [1, 2, 3]

// 4. concat alphanumeric value to array
const alpha = ['a','b','c'];
const numeric = [1,2,3];
const aplphanumeric = alpha.concat(numeric);
console.log('aplphanumeric : ', aplphanumeric ); // ['a', 'b', 'c', 1, 2, 3]


// 5. concat nested array
const arr6 = [[1]];
const arr7 = [2,[3]];
const arr8 = arr6.concat(arr7);
console.log('arr8: ', arr8); // arr8:  (3) [Array(1), 2, Array(1)]
