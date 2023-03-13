// copyWithin();
// The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
// Syntax := array.copyWithin(target,start,end);
// target = index position to copy element
// start (optional) = index positioin to start copying element (default is 0);
// end (optional) = index position to stop copying element (default is array length);
// Key point =>
// Method will never add more item to array
// Method overwrites the original array

let sports = ["cricket","Football","Chess","Hockey"];
sports.copyWithin(2,0);
console.log('sports: ', sports); // ['cricket', 'Football', 'cricket', 'Football']

let sports1 = ["cricket","Football","Chess","Hockey","Badminton","Tennis"];
sports1.copyWithin(2,0,2);
console.log('sports1: ', sports1); // ['cricket', 'Football', 'cricket', 'Football', 'Badminton', 'Tennis']
sports1.copyWithin(2,0);
console.log('sports1: ', sports1); // ['cricket', 'Football', 'cricket', 'Football', 'cricket', 'Football']


const num = [1,2,3,4,5]; // [1,2,3,3,5];
num.copyWithin(-2,-3,-1);
console.log('num: ', num); // [1, 2, 3, 3, 4]
// num.copyWithin(-2,-4);
// console.log('num: ', num); // [1, 2, 3, 2, 3]
// num.copyWithin(-5,-1);
// console.log('num: ', num); // [5, 2, 3, 4, 5]
// num.copyWithin(1,4);
// console.log('num: ', num); // [1, 5, 3, 4, 5]


