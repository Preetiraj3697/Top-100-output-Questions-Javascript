// Slice

// The Slice() method returns the selected elements in array, as a new array object.
// The slice() method selects the elements starting at the given start argument,
// and ends at, but does not include, the given end argument.
// Syntax := array.slice(start,end);

// Key Point := this method will change the original array.

const animals = ["cat","dog","tiger","lizard","Lion"];

console.log(animals.slice(2)); // ['tiger', 'lizard', 'Lion']
console.log(animals.slice(2,4));  // ['tiger', 'lizard']
console.log(animals.slice(1,5)); // ['dog', 'tiger', 'lizard', 'Lion']
console.log(animals.slice(0,5)); // ['cat', 'dog', 'tiger', 'lizard', 'Lion']
