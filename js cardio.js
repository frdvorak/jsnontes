JS CARDIO 1/2 01/11/2018

////////////// REVERSE string and check if it's a palidrome
function isPalindrome(str){
revStr = str.split('').reverse().join('');

if (revStr===str){
	console.log(revStr + 'is a Palindrome');
} else {
    console.log(revStr + 'is NOT a Palindrome');
};
isPalindrome('ahoj');


////////////// REVERSE string with forEach
function reverse(str){
	let revString = '';
	str.split('').forEach(function(pismeno){
		revString = pismeno + revString;
	});
	console.log(revString);
}
reverse('ahoj jak se mas');


////////////// REVERSE string with forEach ES6
function reverse(str){
	let revString = '';
	str.split('').forEach((pismeno) => revString = pismeno + revString);
	// str.split('').forEach(pismeno => revString = pismeno + revString); //you can also remove parentheses since its only one param
	console.log(revString);
}
reverse('ahoj jak se mas');


////////////// REVERSE number
function reverseInt(int){
	const reversedNumber = int.toString().split('').reverse().join('');
	console.log(parseInt(reversedNumber) * Math.sign(int));
}
reverseInt(-456789);

////////////// CAPITALIZE letters
function capitalizeLetters(str){
	const strArr = str.toLowerCase().split(' ');
	for(let i=0; i<strArr.length; i++){
		strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
	}
	console.log(strArr.join(' '))
}
capitalizeLetters('ahoj jak se mas kamo');


////////////// CAPITALIZE letters MAP
function capitalizeLetters(str){
	let abc = str.toLowerCase().split(' ').map(function(word){
		return word[0].toUpperCase() + word.substr(1);
	}).join(' ');
	console.log(abc)
}
capitalizeLetters('ahoj jak se mas kamo');
////////////// CAPITALIZE letters MAP////ES6
function capitalizeLetters(str){
	let abc = str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substr(1)).join(' ');
	console.log(abc)
}
capitalizeLetters('ahoj jak se mas kamo');


//////////////
capitalizeLetters('ahoj jak se mas kamo');
////////////// CAPITALIZE letters MAP////REGULAR EXPRESSIONS
function capitalizeLetters(str){
	let abc = str.replace(/\b[a-z]/gi, function(char){
		console.log(abc.toUpperCase());
	});
	console.log(abc.toUpperCase());
}
capitalizeLetters('ahoj jak se mas kamo');


////////////// COUNT how many times letter appears in a string and return the most common one
function maxCharacter(str){
	const charMap = {};
	let maxNum = 0;
	let maxChar = '';
	
	str.split('').forEach(function(char){
		if(charMap[char]){
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	for(let char in charMap){
		//debugger;
		if(charMap[char] > maxNum){
			maxNum = charMap[char];
			maxChar = char;
		}
	}
	//console.log(charMap);
	return maxChar;
}
maxCharacter('Ahoj kamo jak se dneska mzzxxxxxxxxxxxxxs');
// buggy if miltiple characters appears the same amount of times


////////////// FIZZBUZZ
function fizzBuzz(){
	for (let i = 1; i <= 100; i++){
		if (i%3===0 && i%5===0){
			console.log('FIZZBUZZ');
		} else if (i%3===0){
			console.log('fizz');
		} else if (i%5===0){
			console.log('buzz');
		} else {
		console.log(i);
		}
	}
}
fizzBuzz();


//////////////
////////////// 2
//////////////

//////////////THE LONGEST WORD
function longestWord(sen){
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
	
	//sort by length
	const sorted = wordArr.sort(function(a,b){
		return b.length - a.length;
	});
	
	console.log(sorted);
}
longestWord('Hi, my name is Frantisek');


[a-z0-9]



////////////// STRING ENDS WITH ' '
function endsWith(str){
	charCount = 10; // remove this amount from string length and find space in it
	//let spaceAt = str.length;
	for(let i=str.length-charCount; i<str.length; i++){
		console.log(str[i] + i);
		if(str[i]== ' '){
			console.log('mezera '+ i)
			var spaceAt = i; // needs to be VAR not let, function scoped
		}
	}
	return str.substring(0, spaceAt)+ '...'; //cut the string where the space is
}
endsWith('Cau kamo jak se mas,dneska jeaa as as');


////////////// 	ARRAY CHUNKING
function chunkArray(arr, len){
	//init chunked arr
	const chunkedArray = [];
	//set index
	let i = 0;
	
	//loop while index is less than the array length
	while(i<arr.length){
		//slice out from the 'index' to the 'index + chunk length' and push on the chunkedArray
		chunkedArray.push(arr.slice(i, i+len));
		// increment by chunk length
		i += len;
	}
	console.log(chunkedArray);
}
chunkArray([1,2,3,4,5,6,7], 5);

////////////// 	ARRAY CHUNKING 2
function chunkArray2(arr, len){
	//init chunked arr
	const chunkedArray = [];
	//loop through arr
	arr.forEach(function(val){
		//get the last element
		const last = chunkedArray[chunkedArray.length-1];
		
		//check if last and if last.length is equal to chunk len parameter
		if(!last || last.length === len){
			chunkedArray.push([val]);
		} else {
			last.push(val);
		}
		
	});
	console.log(chunkedArray);
}
chunkArray2([1,2,3,4,5,6,7], 2);
??????????????????????
??????????????????????
??????????????????????


// FLATTEN Array
// take multiple arrays and flatten into single array

// FLATTEN Array 1
function flattenArray(arrays){
	const flattenedArray = arrays.reduce(function(a,b){
		return a.concat(b);
	});
	console.log(flattenedArray);
}
flattenArray([[1,2,3],[4,5],[6, 7],[7,8,9,10]]);

// FLATTEN Array 2
function flattenArray(arrays){
	const flattenedArray = [].concat.apply([], arrays);
	console.log(flattenedArray);
}
flattenArray([[1,2,3],[4,5],[6, 7],[7,8,9,10]]);

// FLATTEN Array 3
function flattenArray(arrays){
	/*
	function add(a,b,c){
		return a + b + c;
	}
	const arr = [1,2,3];
	console.log(add(...arr));
	*/
	return [].concat(...arrays);
}
flattenArray([[1,2,3],[4,5],[6, 7],[7,8,9,10]]);


// IS ANAGRAM?
function isAnagram(str1, str2){
	//console.log(formatStr(str1));
	return formatStr(str1) === formatStr(str2);
}
//helper function
function formatStr(str){
	return str
			.replace(/[^\w]/g, '')
			.toLowerCase()
			.split('')
			.sort()
			.join('')
}
isAnagram('elbow', 'below');
// ... this code just organises both strings alphabetically and compares them
// if the two strings are the same, it is an agagram

// sort aplhabetically
function sortArray(arr){
	const sorted = arr.split(' ').sort();
	console.log(sorted);
}
sortArray('Ahoj kamo jak se mas, ja se mam fajn ale mohlo by byt lepsi pocasi');

// sort by word length from longest down
function sortArray(arr){
	const sorted = arr.split(' ').sort(function(a, b){
		return b.length - a.length;
	});
	
	console.log(sorted);
}
sortArray('Ahoj kamo jak se mas, ja se mam fajn ale mohlo by byt lepsi pocasi');

// sort by word length from shortest up
function sortArray(arr){
	const sorted = arr.split(' ').sort(function(a, b){
		return a.length - b.length;
	});
	
	console.log(sorted);
}
sortArray('Ahoj kamo jak se mas, ja se mam fajn ale mohlo by byt lepsi pocasi');


// LETTER CHANGES 1
// Change every letter of the string to the one that follows it and capitalize the vowels
function letterChanges(str){
	let newString = str.toLowerCase().replace(/[a-z]/gi, function(char){
		if(char === 'z' || char === 'Z'){
			return 'a';
		} else {
			return String.fromCharCode(char.charCodeAt()+1);
		}
	})
	console.log(newString);
}
letterChanges('Hello There');
////////////// .REPLACE()
////////////// .FROMCHARCODE()
////////////// .CHARCODEAT()

// LETTER CHANGES 1 .REPLACE()
function letterChanges2(str){
	let newString = str.toLowerCase().replace(/[e,o]/gi, function(char){
		if(char==='e'){
			return '3';
		} if (char==='o'){
			return 'O'
		}
	})
	console.log(newString);
}
letterChanges2('Hello There'); //h3llO th3r3

//////////////
////////////// Array.ISARRAY() determines whether the PASSED value is an Array.
let arr = [1,2,3,4,5];
Array.isArray(arr); //true

//////////////
////////////// Array.FROM() creates a new, shallow-copied Array instance from an array-like or iterable object


JavaScript gives us four methods to add or remove items from the beginning or end of arrays:
//////////////
////////////// array.POP() Remove an item from the end of an array. This method changes the length of the array, returns removed element
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());	//tomato
console.log(plants);	//["broccoli", "cauliflower", "cabbage", "kale"] - tomato was removed

//////////////
////////////// array.PUSH() Add items to the end of an array, returns new length
let animals = ['pigs', 'goats', 'sheep'];
console.log(animals.push('cows')); //4
console.log(animals); //["pigs", "goats", "sheep", "cows"]

//////////////
////////////// array.SHIFT() Remove an item from the beginning of an array, returns removed element
let arr = [1,2,3,4,5];
arr.shift(1);		//1
console.log(arr); 	//[2, 3, 4, 5]

//////////////
////////////// array.UNSHIFT() Add items to the beginning of an array
let arr = [1,2,3,4,5];
arr.unshift(10);	//6
console.log(arr);	// [10, 1, 2, 3, 4, 5]


//////////////
////////////// array.SOME() - tests whether AT LEAST ONE element in the array passes the test implemented by the provided function, returns true/false
let arr = [1,2,3,4,5];
var testingFunc = function(element){
	return element === 6;
}
console.log(arr.some(testingFunc)); //false, because 6 is not in 'arr'

//////////////
////////////// array.EVERY() - tests whether ALL elements in the array pass the test implemented by the provided function
let arr2 = [1,2,3,4,5];
var testingFunc = function(element){
	return typeof element === 'number'; // tests if every element in 'arr2' is a number
}
console.log(arr2.some(testingFunc)); 	//true

//////////////
////////////// array.INCLUDES() determines whether an array includes a certain element, returns true/false
let pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); 		//true

//////////////
////////////// array.REVERSE() method reverses an array in place. 
let arr = [1,2,3,4,5];
console.log(arr.reverse()); 			//[5, 4, 3, 2, 1]

//////////////
////////////// array.FLAT() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arrToBeFlattened1 = [1, 2, [3, 4]];
arrToBeFlattened1.flat(); 				//[1, 2, 3, 4]

let arrToBeFlattened2 = [1, 2, [3, 4, [5, 6]]];
arrToBeFlattened2.flat();				//[1, 2, 3, 4, [5, 6]]

let arrToBeFlattened3 = [1, 2, [3, 4, [5, 6]]];
arrToBeFlattened3.flat(2);			//[1, 2, 3, 4, 5, 6] flattened 2 levels deep

//////////////
////////////// array.FILTER() creates a new array with all elements that pass the test implemented by the provided function.
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);				// ["exuberant", "destruction", "present"]

//////////////
////////////// array.CONCAT() used to MERGE two or more arrays. This method does not change the existing arrays, but instead returns a new array
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2)); // ["a", "b", "c", "d", "e", "f"]

//////////////
////////////// array.TOSTRING() returns a string representing the specified array and its elements
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.toString()); //broccoli,cauliflower,cabbage,kale,tomato


//////////////
////////////// array.INDEXOF() returns the first index at which a given element can be found in the array, or -1 if it is not present
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));		//1
console.log(beasts.indexOf('bison', 2));	//4

//////////////
////////////// array.FIND() returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let array1 = [5, 12, 8, 130, 44];
const found = array1.find(function(element){
	return element > 10;
})
console.log(found); //12 - first found element that satisfies provided function
//ES6
const found2 = array1.find(el => el > 10);
console.log(found2); //12

//////////////
////////////// array.FINDINDEX() returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.
let array = [5, 12, 8, 130, 44];
let result = array.findIndex(el => el>13);
console.log(result);	//3

//////////////
////////////// array.LASTINDEXOF() returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched BACKWARDS, starting at fromIndex.
let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); //3

//////////////
////////////// array.SPLICE() changes the contents of an array by removing existing elements and/or adding new elements
// array.splice(index, howmany, item1, ....., itemX)
//index: Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
//howmany	Optional. The number of items to be removed. If set to 0, no items will be removed
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0, 'Feb') // ["Jan", "Feb", "March", "April", "June"]
months.splice(0, 3, 'Opice'); //["Jan", "Feb", "March", "April", "May"]
months.splice(-2,1, 'Zirafa');
console.log(months);

//////////////
////////////// array.MAP() creates a new array with the results of calling a provided function on every element in the calling array
let months = ['Jan', 'March', 'April', 'June'];
const map = months.map(month => month.toLowerCase() + 'aaa');
console.log(map); //["janaaa", "marchaaa", "aprilaaa", "juneaaa"]
// it returns a NEW array, it doesn't change the original array !!!!!!!!!!!!

//////////////
////////////// array.FOREACH executes a provided function once for each array element
let months = ['Jan', 'March', 'April', 'June'];
let newMonthsArray = [];
let changes2 = months.forEach(month => newMonthsArray.push(month + 'aaa'));
console.log(newMonthsArray); //["Janaaa", "Marchaaa", "Aprilaaa", "Juneaaa"]

//////////////
////////////// array.FILL() fills all the elements of an array from a start index to an end index with a static value. The end index is not included
let array = [1,2,3,4,5,6,7,8];
// fill with 0 from position 3 to position 8
console.log(array.fill(0,3,8)); //[1, 2, 3, 0, 0, 0, 0, 0]

//////////////
////////////// array.SORT() sorts the elements of an array in place and returns the array.
// arr.sort([compareFunction])
// Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element
var array1 = [1, 30, 4, 21];
console.log(array1.sort()); //[1, 21, 30, 4]


















