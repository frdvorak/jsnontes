ARRAY METHODS
//https://www.w3schools.com/jsref/jsref_obj_array.asp

unshift()	Adds new elements to the beginning of an array, and returns the new length
shift()		Removes the first element of an array, and returns that element
push()		Adds new elements to the end of an array, and returns the new length
pop()		Removes the last element of an array, and returns that element

concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()		Checks if every element in an array pass a test
some()		Checks if any of the elements in an array pass a test
fill()		Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()		Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
forEach()	Calls a function for each array element
from()		Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()		Joins all elements of an array into a string
keys()		Returns a Array Iteration Object, containing the keys of the original array
map()		Creates a new array with the result of calling a function for each array element
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
slice()		Selects a part of an array, and returns the new array
sort()		Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
valueOf()	Returns the primitive value of an array



UNSHIFT() SHIFT() PUSH() POP() //These methods change the length of an array!
//////unshift()////////////////////
//Adds new elements to the beginning of an array, and returns the new length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple"); //6

//////shift()////////////////////
//Removes the first element of an array, and returns that element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();	//Banana

//////push()////////////////////
//Adds new elements to the end of an array, and returns the new length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //5

//////pop()////////////////////
//Removes the last element of an array, and returns that element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); //Mango



//////concat()////////////////////
//Joins two or more arrays, and returns a copy of the joined arrays
//This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
var first = ["Cecilie", "Lone"];
var second = ["Emil", "Tobias", "Linus"];
var third = ["Robin"]
first.concat(second, third); //["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin"]


//////copyWithin()////////////////////
//Copies array elements within the array, to and from specified positions
//array.copyWithin(target, start, end)
//target	Required. The index position to copy the elements to
//start		Optional. The index position to start copying elements from  (default is 0)
//end		Optional. The index position to stop copying elements from (default is array.length)
//Copy the first two array elements to the last two array elements:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); //(4) ["Banana", "Orange", "Banana", "Orange"]
//Copy the first two array elements to the third and fourth position:
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2, 0, 2); //(6) ["Banana", "Orange", "Banana", "Orange", "Kiwi", "Papaya"]
// it appears 'END' parameter value is one position lower, it ends at 'end-1'
arr1 = [1,2,3,4,5];
arr1.copyWithin(0,1,4); 	//[2, 3, 4, 4, 5]
arr1.copyWithin(0,1); 		//[2, 3, 4, 5, 5] - end is not specified, therefore default is array.length
arr1.copyWithin(0,1,5); 	//[2, 3, 4, 5, 5]

//////entries()//////////////////// ???
//Returns a key/value pair Array Iteration Object
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.entries(); //Array Iterator {}


//////every()////////////////////
//Checks if every element in an array pass a test
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
array1.every(isBelowThreshold); // returns true
//same with ES6
array1.every(item => item < 40); // returns true
let arrX = ['superlongword', 'anotherlongword', 'thiswordisalsoverylong', 'short'];
arrX.every(word => word.length > 6); //false
let arrY = ['superlongword', 'anotherlongword', 'thiswordisalsoverylong'];
arrY.every(word => word.length > 6); //true

//////some()////////////////////
//Checks if any of the elements in an array pass a test
//some() does not change the original array
//If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
ages.some(checkAdult); //true
//the same with ES6
ages.some(age => age > 40); //false


//////fill()////////////////////
//Fill the elements in an array with a static value
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi"); //(4) ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]


//////filter()////////////////////
//Creates a new array with every element in an array that pass a test
//The filter() method creates an array filled with all array elements that pass a test (provided as a function)
//filter() does not execute the function for array elements without values
//filter() does not change the original array
function checkChars(data){
	return data.length > 6;
}
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.filter(checkChars)); //(3) ["exuberant", "destruction", "present"]
//same thing with ES6:
console.log(words.filter(word => word.length > 6)); //(3) ["exuberant", "destruction", "present"]
//more examples:
var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
ages.filter(checkAdult); //(2) [18, 20]
//same thing with ES6
ages.filter(age => age >=18); //(2) [18, 20]


//////find()////////////////////
//Returns the value of the first element in an array that pass a test(function)
//The find() method executes the function once for each element present in the array:
//If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
ages.find(checkAdult); //18
//same thing with ES6
ages.find(age => age >=18); //(18


//////findIndex()////////////////////
//Returns the index of the first element in an array that pass a test
var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
console.log(ages.findIndex(checkAdult)); //2
//if it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
//findIndex() does not execute the function for array elements without values.
//findIndex() does not change the original array.


//////forEach()////////////////////
//Calls a function for each array element
var numbers = [4, 9, 16, 25];
var newArr = [];
numbers.forEach(number => newArr.push(number * 2));
console.log(newArr); //(4) [8, 18, 32, 50]
//RETURNS UNDEFINED, doen'r change the original array, unless specified in callback. NEED TO CREATE NEW ARRAY WITH RESULTS AND CONSOLE LOG THAT!!!!
//forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.


//////from()////////////////////
//Creates an array from an object
//The Array.from() method returns an Array object from any object with a length property or an iterable object.
console.log(Array.from('foo')); //(3) ["f", "o", "o"]


//////includes()////////////////////
//Check if an array contains the specified element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); //true
//fromIndex: Optional. The position in this array at which to begin searching: 
console.log(fruits.includes('Orange', 2)); //false 
//A negative value searches from the index of array.length - fromIndex by asc. Defaults to 0.
console.log(fruits.includes('Orange', -3)); //true


//////indexOf()////////////////////
//Search the array for an element and returns its position. Returns -1 if the item is not found
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple")); //2
//If the item is present more than once, the indexOf method returns the position of the first occurence
//fromIndex: Optional. The index to start the search at:
console.log(fruits.indexOf('Apple', 2)); //2
//if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched
console.log(fruits.indexOf('Apple', -1)); // -1


//////lastIndexOf()////////////////////
//Search the array for an element, starting at the end, and returns its position
var fruits = ["Apple", "Orange", "Apple", "Apple", "Mango"];
console.log(fruits.lastIndexOf("Apple")); //3
//The search will start at the specified position, or at the end if no start position is specified, and end the search at the beginning of the array.
var fruits = ["Apple", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
console.log(fruits.lastIndexOf("Apple", 4)); //2 - search only from position 4 to position 0 and return the position of first 'Apple' encountered while going from back


//////isArray()////////////////////
//Checks whether an object is an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.isArray(fruits); //true


//////join()////////////////////
//Joins all elements of an array into a string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join()); //Banana,Orange,Apple,Mango
//The elements will be separated by a specified separator. The default separator is comma (,).
console.log(fruits.join('/')); //Banana/Orange/Apple/Mango


//////keys()////////////////////
//Returns a Array Iteration Object, containing the keys of the original array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.keys(); //Array Iterator {}


//////map()////////////////////
//Creates and RETURNS a new array with the result of calling a PROVIDED functionfor each array element
//map() does not change the original array
//function takes 3 parameters: currentValue(Required. The value of the current element(ie.data)) + Optional Index(the array index of the current element) + arr(The array object the current element belongs to)
var numbers = [4, 9, 16, 25];
function double(data, index){
	return data*2 + ' - index ' + index;
}
numbers.map(double); //(4) [8, 18, 32, 50] //(4) ["8 - index 0", "18 - index 1", "32 - index 2", "50 - index 3"]
//the same thing with ES6:
var numbers = [4, 9, 16, 25];
console.log(numbers.map(number => number*2)); //(4) [8, 18, 32, 50]


//////reduce()////////////////////
//Reduce the values of an array to a single value (going LEFT-TO-RIGHT)
//The reduce() method reduces the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).
//Accumulator/Reducer(total) represents the initialValue, or the previously returned value of the function
//The reducer function is fed four parameters: Accumulator (acc), Current Value (cur), Current Index (idx), Source Array (src)
//Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.
var numbers = [65, 44, 12, 4];
function getTotalSum(total, num){
	return total + num;
}
numbers.reduce(getTotalSum);//125
//the same thing with ES6:
var numbers = [65, 44, 12, 4];
numbers.reduce( (total, num) => total + num ); //125


//////reduceRight()////////////////////
//Reduce the values of an array to a single value (from RIGHT-TO-LEFT!!!!!)
//The reduceRight() method executes a provided function for each value of the array 
//The return value of the function is stored in an accumulator (result/total).
var numbers = [65, 44, 12, 4];
numbers.reduceRight((total, num) => total + num); //125


//////reverse()////////////////////
//Reverses the order of the elements in an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse(); //(4) ["Mango", "Apple", "Orange", "Banana"]


//////slice()////////////////////
//Selects a part of an array, and returns the new array
//The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
//The original array will not be changed.
//END Optional. An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1, 3)); //(2) ["Orange", "Lemon"]
console.log(fruits.slice(-3, -1)); //(2) ["Lemon", "Apple"]
console.log(fruits.slice(4)); //["Mango"]


//////splice()////////////////////
//Adds/Removes elements from an array
//array.splice(start, deleteCount, item1, item2 ...);
//start - index at which to start changing the array
//deleteCount - Optional. An integer indicating the number of old array elements to remove
var itemsArr = ['angel', 'clown', 'trumpet', 'sturgeon'];
itemsArr.splice(0, 2, 'parrot', 'anemone', 'blue'); //(2) ["angel", "clown"] RETURNS REMOVED ELEMENTS
console.log(itemsArr); //(5) ["parrot", "anemone", "blue", "trumpet", "sturgeon"] OLD ARRAY WAS CHANGED, 3 items added to position 0, 2 items removed from original array
//2nd example:
itemsArr.splice(0, 0, 'parrot', 'anemone', 'blue'); // [] NOTHING WAS REMOVED, RETURNS EMPTY
console.log(itemsArr); //(8) ["parrot", "anemone", "blue", "parrot", "anemone", "blue", "trumpet", "sturgeon"] 3 items were added to original array, at position 0, 0 items removed


//////toString()////////////////////
//Converts an array to a string, and returns the result
var array1 = [1, 2, 'a', '1a'];
console.log(array1.toString()); //1,2,a,1a


//////valueOf()()////////////////////
//method returns the primitive value of the specified object
//JavaScript calls the valueOf method to convert an object to a primitive value. You rarely need to invoke the valueOf method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.




