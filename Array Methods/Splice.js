// Splice();

// The Splice() method adds/removes item to/from an array, and returns the removed item(s).

// Syntax:= array.splice(index,howmany,item1,...., itemX);

// index(Required) := An integer that specifies at what position to add/remove items, Use negative values to 
// specify the position from the end of the array 
// howmany(Optional) := The number of items to be removed. if set to 0, no items will be removed.
// item1,....,itemX(Optional) := The new item(s) to be added to the array.

// Key Point := this method will change the original array.

const animals = ["cat","dog","tiger","lizard","Lion"];
animals.splice(1,0,"mouse")
console.log('animals: ', animals); // animals:  (6) ['cat', 'mouse', 'dog', 'tiger', 'lizard', 'Lion']
animals.splice(1,4,"Rat")
console.log('animals: ', animals); // animals:  (3) ['cat', 'Rat', 'Lion']









