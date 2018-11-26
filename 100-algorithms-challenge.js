JS Algorithm Challenges

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