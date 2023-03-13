// filter();
// The filter() method creates an array filled with all array elements that pass a test (provided as a function);
// Syntax:- array.filter(function(currentValue,index,arr),thisValue);
// value = The value of the current Element
// index(optional) = The array index of the current element
// arr(optional) = The array object the current element belongs to
// thisValue (optional) = A value to be passed to the function to be used as its "this" value. if this parameter is empty.
// the value "undefined" will be passed as its "this" value. 

// Key point
// filter() does not execute the function for array elements without values.
// filter() does not change the original array.

let ages = [12,34,56,78,14,35];
const checkAdult = age => age >= 20;
console.log(ages.filter(checkAdult));  //  [34, 56, 78, 35]

let sports = ["cricket","Football","Chess","Hockey","Badminton","Tennis"];

const result = sports.filter(word => word.length>=6);
console.log('result: ', result); //  ['cricket', 'Football', 'Hockey', 'Badminton', 'Tennis']

let num = [1,2,3,4,5,6,7,8,9];
const even = num.filter(num=>num%2==0);
console.log('even: ', even); // even:  (4) [2, 4, 6, 8]

let sports1 = ["Bat","Ball","Kit","Shoes","Hat"];
const filterItem = (arr,query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}
console.log("Search", filterItem(sports1,"ba")); // ['Bat', 'Ball']