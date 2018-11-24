STRING practice

//charAt();
let slovo = 'opice';
slovo.charAt(2); //i

//charCodeAt()
let slovo = 'opice';
slovo.charCodeAt(2); //105

//fromCharCode();
console.log(String.fromCharCode(105,105,105)); //iii

//concat()
let slovo1 = 'opice';
let slovo2 = 'ji';
let slovo3 = 'banan';
slovo1.concat(slovo2, slovo3); //"opicejibanan"

//startsWith()
let veta = 'Hello world!';
veta.startsWith('Hello'); //true
veta.startsWith('hello'); //false
veta.startsWith('world'); //false

//endsWith()
let zkusCimToKonci = 'How Are You?';
zkusCimToKonci.endsWith(' you?'); //false
zkusCimToKonci.endsWith(' You?'); //true

//includes()
let str = 'Hello world!';
str.includes('Hello'); // true
str.includes('hello'); //false
str.includes('lo'); //true

//indexOf()
let str = 'Cau, jak se mas';
str.indexOf('a'); //1
str.indexOf('a', 5); //6
str.indexOf('ma', 5); //12

//lastIndexOf()
let str = 'Hello, how are you today?';
str.lastIndexOf('you'); //15

//match()
...

//repeat()
let str = 'Hello';
str.repeat(3); //"HelloHelloHello"

//replace()
let str = 'Today is Monday, every Monday I have to go to work!';
str.replace('Monday', 'Friday'); 	//"Today is Friday, every Monday I have to go to work!"
str.replace(/Monday/gi, 'Friday');	//"Today is Friday, every Friday I have to go to work!"
str.replace(/Monday/i, 'Friday'); 	//"Today is Friday, every Monday I have to go to work!"

//search()
let str = 'This is a sentence I will search for a word whale';
str.search('whale'); //44
let str = 'This ? is a sentence I will search for first characted that is not a character or a white space!!!';
str.search(/[^\w\s]/g); //5

//slice()
let str = 'This is a string I will slice now!';
str.slice(-10); 	// "slice now!"
str.slice(10); 		// "string I will slice now!"
str.slice(10, 23); 	// "string I will"

//split()
let str = 'I will split this sentence into arrays!';
str.split(' '); //(7) ["I", "will", "split", "this", "sentence", "into", "arrays!"]
str.split(' ')[1]; //"will"
str.split('');  //(39) ["I", " ", "w", "i", "l", "l", " ", "s", "p", "l", "i", "t", " ", "t", "h", "i", "s", " ", "s", "e", "n", "t", "e", "n", "c", "e", " ", "i", "n", "t", "o", " ", "a", "r", "r", "a", "y", "s", "!"]

//substr() start position + number of characters
let str = 'Extracting a substring!';
str.substr(1, 4); //"xtra"
str.substr(-10, 4); //"subs"

//substring() start position + end position
let str = 'Extracting a substring!';
str.substring(1, 4); //"xtr"
str.substring(-10, 4); //"Extr"

//toLowerCase() + toUpperCase()
let str = 'Making THIS bigger AND smaller!';
str.toLowerCase(); //"making this bigger and smaller!"
str.toUpperCase(); //"MAKING THIS BIGGER AND SMALLER!"

//trim()
let str = " This string has white space before and after! ";
str.trim(); //"This string has white space before and after!"

ARRAY practice
//unshift() ADDS TO BEGINNING
arr = [1,2,3,4,5];
arr.unshift('start');	// 6 
console.log(arr); 		// ["start", 1, 2, 3, 4, 5]

//push() ADDS TO END
arr = [1,2,3,4,5];
arr.push('end');	// 6
console.log(arr); 	// [1, 2, 3, 4, 5, "end"]

//shift() REMOVES FROM BEGINNING
arr = [1,2,3,4,5]; 
arr.shift(); //1 returns removed element
console.log(arr); // [2, 3, 4, 5]

//pop() REMOVES FROM END
arr = [1,2,3,4,5]; 
arr.pop(); //5 - removed element
console.log(arr); //[1, 2, 3, 4]


//.concat()
arr1 = [1,2,3,4,5]; 
arr2 = ['opice', 'krava', 'jabko'];
arr3 = [21,22];
arr2.concat(arr1, arr3); //(10) ["opice", "krava", "jabko", 1, 2, 3, 4, 5, 21, 22]

//copyWithin()
arr1 = [1,2,3,4,5]; //target position + start copying from + end copying from(default is array.length)
arr1.copyWithin(1, 3); //[1, 4, 5, 4, 5]
arr1.copyWithin(2,3,4); //[1, 2, 4, 4, 5]
arr1.copyWithin(0,1,2); //[2, 2, 3, 4, 5]
arr1.copyWithin(0,1,4); //[2, 3, 4, 4, 5]
arr1.copyWithin(0,1); //[2, 3, 4, 5, 5]
arr1.copyWithin(0,1,5); //[2, 3, 4, 5, 5]

//every()
let arr = ['superlongword', 'anotherlongword', 'thiswordisalsoverylong', 'short'];
arr.every(word => word.length > 6); //false
let arr = ['superlongword', 'anotherlongword', 'thiswordisalsoverylong'];
arr.every(word => word.length > 6); //true

