// includes()

// The includes() method determines whether an array contains a specified element.
// This method returns true if the array contains the element, and false if not.
// Syntax := array.includes(element,start);

// SearchValue(Required) := The value of the current Element
// Start (Optional) := Default 0. At which position to start the search .

// Key Point := 
// The includes() method is case sensitive.

const arr1 = [2,3,4];
console.log(arr1.includes(3)); // true
console.log(arr1.includes(5)); // false

const animals  =  ['cat', 'mouse', 'dog', 'tiger', 'lizard', 'Lion']
console.log(animals.includes("cat")); // true

console.log(animals.includes("Cat")); // false 
console.log(animals.includes("RAt")); // false 







