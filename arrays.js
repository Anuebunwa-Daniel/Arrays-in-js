//arrays
//what is an array
//arrays stores multiple  value in one variables
//it is a data type that falls under  the non-primitive
//syntax
var any_variables_Name = []; // An empty array

var arr= [1, "kenny", 3, 4, true , 56, 7, 8]; // An array with values;
console.log (arr[1]); // Accessing the values from the arrays


//overriding the values in an arrays
arr[1] = "fola";
console.log (arr[1]);

//Method
//what is a method?;
//Methods are functions!
//Examples of methods are 
//1. length
//2.

console.log (arr.length);

//Deleting values from arrays
//pop () //method
//shift() //method

arr.pop(); // Deletes the last value (item)
console.log (arr);


arr.shift(); //Deletes the first value (item)
console.log (arr);


// adding values to array
// push () // method adds value from the last index
// arr.push ("princeWill");
// console.log (arry);


// claas work

var arr =["getmilk", "Bread", "apples"];

console.log (arr.length);

arr [1] ="bananas";
console.log (arr)

//more methods in arrays
//sort() and reverse()

let Names = ["james", "alicia", "fatima", "maria", "bert"];
console.log (Names);
console.log (Names.sort ());

console.log (Names.reverse ());

//more arrays method
//slice & splice
let  $names =["james ",  "alicia", "fatima", "maria", "bert"];
let somenames = $names.slice (1, 3);

console.log($names);
console.log (somenames);

let $_names = ["james ",  "alicia", "fatima", "maria", "bert"];
let s = $_names. splice(2);
console.log ($_names);
console.log(s);