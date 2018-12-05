JS Algorithm Challenges
// Big O Notation - is used to clasify how scalable and performant an algorithm or function is. It allows us to estimate the worst case runtime of an algorithm or how long it takes for the alhorithm to complete based on the input size. It informs us how much slower an alorithm will run if it's input size grows

// Constant runtime, big 0 Notation: "0 (1)"
// runtime is constant because as the input size increases, the number of operations we perform never changes, we only log the first element no matter how large the array gets.
// as the input increases, the time it takes never changes
// example: simple function that takes array and logs out the first element of the array
function log(array){
	console.log(array[0]);
}
log([1,2,3,4]); //1
log([5,6,7,8,9,10]); //5


// 1 - Remove duplicates from Array  - solution 1 - 
let a = [1,2,5,2,1,8];
let b = [];
let len = a.length; //so the system doesnt have to calculate it for every item in the for loop
for (let i = 0; i<len; i++){
	if(b.indexOf(a[i]) === -1){
		b.push(a[i]);
	}
}
console.log(b); //[1, 2, 5, 8]

// 2 - Remove duplicates from Array - order of array is NOT important  - solution 2 - 
let a = [1,2,5,2,1,8];
let b = [];
let len = a.length;
a.sort(); //[1, 1, 2, 2, 5, 8]
let _temp; // here we will store the previous value
for (let i=0; i<len; i++){
	if(a[i] !== _temp){ 	// if current position in array !== _temp
		b.push(a[i]);		// push it's value into b array
		_temp = a[i];		// and set _temp to that value so we can check the next one
	}
}
console.log(b); //[1, 2, 5, 8]

// 3 - Remove duplicates from Array with Object  - solution 3 - 
let a = [1,2,5,2,1,8];
obj = {};
for(let i of a){
	obj[i] = true;
}
console.log(obj); //{1: true, 2: true, 5: true, 8: true}
// because the key has to be unique it will not store anything that is duplicate, so it's automatically storing only keys that are unique
let b = Object.keys(obj); //this will give us all the keys in an array
console.log(b); //["1", "2", "5", "8"]

// 4 - Remove duplicates from Array - solution 4 - SHORTEST
let a = [1,2,5,2,1,8];
//let bSet = new Set //introduced in ES6, Set only stores unique values
[... new Set(a)]; //[1, 2, 5, 8] // spread operator converts Set into array

/*
// 5 - Generate all anagrams of a given word
let anagrams = [];
let genAnagrams = (word, anagram = '') => {
	if (!word){
		anagrams.push(anagram);
		return; 
	}
	for (let i= 0; i<word.length; i++){
		anagram += word[i];
		genAnagrams(word.slice(0,i) + word.slice(i+1), anagram) 
	}
};
genAnagrams('ABC');
console.log(anagrams);
*/

// 6 Find the longest word in an array FOR LOOP
let arr = ['thisisalongword', 'thisisverylongword', 'shortword', 'mediumlengthword', 'thiswordmustbethelongestforsure'];
function longestWord(data){
	longestWord = '';
	for (i=0; i<data.length; i++){
		if (data[i].length > longestWord.length){
			longestWord = data[i];
		}
	}
	console.log(longestWord);
}
longestWord(arr); //thiswordmustbethelongestforsure

// 7 Find the longest word in a string
let str = ('It is a beautiful day outside!');
function longestWord(data){
	let words = data.split(' ');
	let longestWord = '';
	for (i=0; i<words.length; i++){
		if(words[i].length>longestWord.length){
			longestWord = words[i];
		}
	}
	console.log(longestWord);
}
longestWord(str); //beautiful

// 8 Find the longest word SORT
let str = ('It is a beautiful day outside!');
function longestWord(data){
	let words = data.split(' ');
	words.sort((a,b)=>b.length-a.length);
	console.log(words[0]); //return the first word which is the longest
}
longestWord(str); 

// 9 Reverse string with Reduce
function reverseWord(word){
	const reversedWord = word.split('').reduce((a,b)=>b+=a);
	return reversedWord;
}
reverseWord('ahoj'); //joha
reverseWord('arrays are fun'); //"nuf era syarra"

console.log(aaa);
var aaa = "Hello World!!";

// 10 Find common characters in 2 strings, ignore repeated letters and white space
let commonCharacters = function(str1, str2){
	let one = str1.replace(/ /g,""); //remove empty space
	let two = str2.replace(/ /g, "");
	let result = [];
	for (let i = 0; i<one.length; i++){
			if (two.indexOf(one[i]) !== -1 && //if 'one[i]' is found somewhere in 'two'(indexOf is anything but '-1')
			result.indexOf(one[i]) === -1){ //and at the same time 'one[i]' is not yet in the 'result' array
			result.push(one[i]);
			}
	}
	return result.join("");
}
commonCharacters("Hello, how are you today?!", "I'm good, thank you for asking!"); //"o,haryutd!"

// 11 Rock paper scissors
var rps = function(rounds){
	var results = [];
	var possibilities = ['R', 'P', 'S'];

	var play = function(playedSoFar, rounds){
		if (rounds === 0){ //if I already played through everything
			results.push(playedSoFar);
			return;
		}
		for (var i = 0; i < 3; i++){
			play(playedSoFar+possibilities[i], rounds-1);//recursive call
		}
	}
	play('', rounds);
	return results;
}
var maple = rps(2);
maple;

// 12 Check if every character in a string is UNIQUE - solution 1
function isUnique(str){
	for(let i = 0; i < str.length; i++){
		if(str.lastIndexOf(str[i]) !== i){ //we are checking if 'lastIndexOf' the current letter is THE LAST index in that string. If the lastIndexOf is NOT the same as the first index it means we have a duplicate
			return false;
		}
	}
	return true;
}
console.log(
	isUnique('abcdef'), 		//true
	isUnique('89%^&*£'),		//true
	isUnique('abcdabcd'),		//false
	isUnique('mnopgrSTUVWXyz!'),	//true
);

// 13 Check if UNIQUE - solution 2 with sort
function isUnique(str){
	const chars = str.split('').sort(); //sort alphabetically
	for (let i = 1; i<= chars.length; i++){
		if(chars[i] === chars[i-1]){  //if there are 2 same characters next to each other we have repeating string
			return false
		}
	}
	return true;
}
console.log(
	isUnique('abcdef'), 		//true
	isUnique('89%^&*£'),		//true
	isUnique('abcdabcd'),		//false
	isUnique('mnopgrSTUVWXyz!'),	//true
);

// 14 Check if UNIQUE - solution 3 with Object()
function isUnique(str){
	const chars = {};
	for (let i = 0; i < str.length; i++){
		const thisChar = str[i];
		if (chars[thisChar] === true){
			return false;
		}
		chars[thisChar] = true;
	}
	return true;
}
console.log(
	isUnique('abcdef'), 		//true
	isUnique('89%^&*£'),		//true
	isUnique('abcdabcd'),		//false
	isUnique('mnopgrSTUVWXyz!'),	//true
);
// 14 Check if UNIQUE - solution 4 with Set()
function isUnique(str){
	const chars = new Set(); //ES6, lets you store unige value of any type. A value un the set may only occur once
	for (let i = 0; i < str.length; i++){
		const thisChar = str[i];
		if (chars.has(thisChar)){
			return false;
		}
		chars.add(thisChar);
	}
	return true;
}
console.log(
	isUnique('abcdef'), 		//true
	isUnique('89%^&*£'),		//true
	isUnique('abcdabcd'),		//false
	isUnique('mnopgrSTUVWXyz!'),	//true
);
// 15 Check if UNIQUE - solution 5 with Set() SIMPLER
function isUnique(str){
	return new Set(str).size === str.length; //Set() ignores duplicates, we are checking if size of the set it the same as the length of the original string, if there were no duplicates then they have same size and we return true 
}
console.log(
	isUnique('abcdef'), 		//true
	isUnique('89%^&*£'),		//true
	isUnique('abcdabcd'),		//false
	isUnique('mnopgrSTUVWXyz!'),	//true
);

// 16 Fibonacci
function fibonacci(n){
	const seq = [1,1];

	if (n<2){
		return seq.slice(0,n);
	}
	while (seq.length < n) {
		const lastItem = seq[seq.length - 1];
		const secondLastItem = seq[seq.length - 2];

		seq.push(lastItem + secondLastItem);
	}

	return seq;

}
fibonacci(5); //(5) [1, 1, 2, 3, 5]

// 17 Memoized fibonacci
const memoizedFibonacci = (function(){
	const seq = [1,1];

	return function(n){
		if (n<2){
			return seq.slice(0,n);
		}
		while (seq.length < n) {
			const lastItem = seq[seq.length - 1];
			const secondLastItem = seq[seq.length - 2];

			seq.push(lastItem + secondLastItem);
		}

		return seq;
	}
})();

///////////////////////////////// comparing algorithm speeds
console.time('regular fibonacci');
for (let i = 0; i < 10000; i++){
	fibonacci(1000);
}
console.timeEnd('regular fibonacci') //regular fibonacci: 15062.875ms
///----------///
console.time('memoized fibonacci');
for (let i = 0; i < 10000; i++){
	memoizedFibonacci(1000);
}
console.timeEnd('memoized fibonacci') //memoized fibonacci: 3.06396484375ms