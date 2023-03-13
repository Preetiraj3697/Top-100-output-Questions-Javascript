// lastIndexOf();

// The lastIndexOf() method searches the array for the specified item, and returns its position.
// The search will start at the specified position, or at the end if no start position is specified,
// and end the search at the beginning of the array.
// Returns -1 if the item is not found.
// if the item to search for is present more than once, the lastIndexOf method returns the position of the last
// occurence.
// Syntax :- array.lastIndexOf(item,start);

// item(Required) = The item to search for start
// start (Optional) = Where to start the search. Negative values will start at the given position counting from the end,
// and search to the beginning.

const animals = ["cat","dog","tiger","lizard","Lion"];
console.log("LastIndex",animals.lastIndexOf("tiger"));  // LastIndex 2

const numbers = [2,5,9,7];
console.log("LastIndex1",numbers.lastIndexOf(2));
console.log("LastIndex2",numbers.lastIndexOf(4));
console.log("LastIndex3",numbers.lastIndexOf(2,3));

// LastIndex1 0
// LastIndex2 -1
//LastIndex3 0

