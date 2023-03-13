// fill();
// The fill() method fills the specified elements in an array with a static value. You can specify the position
// of where to start and end the filling. if not specified, all elements will be filled.
// Syntax:= array.fill(value,start,end);
// value = The value to fill the array with
// start (optional) = The index to start filling the array (default is 0);
// end (optional) = The index to stop filling the array (default is array.length);

// Key Point
// Method overwrites the original array
// Method is not supported in Internet Explorer 11 and earlier versions.


let sports = ["cricket","Football","Chess","Hockey"];
// sports.fill("Tennies");
// console.log('sports: ', sports); // ['Tennies', 'Tennies', 'Tennies', 'Tennies']
// sports.fill("Tennies",1);
// console.log('sports: ', sports); // ['cricket', 'Tennies', 'Tennies', 'Tennies']
sports.fill("Tennies",2,sports.length);
console.log('sports: ', sports); // ['cricket', 'Football', 'Tennies', 'Tennies']