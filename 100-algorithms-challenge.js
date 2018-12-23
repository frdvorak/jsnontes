JS Algorithm Challenges
// Big O Notation - is used to clasify how scalable and performant an algorithm or function is. It allows us to estimate the worst case runtime of an algorithm or how long it takes for the alhorithm to complete based on the input size. It informs us how much slower an alorithm will run if it's input size grows

// Constant runtime(time complexity), big 0 Notation: "0 (1)"
// runtime is constant because as the input size increases, the number of operations we perform never changes, we only log the first element no matter how large the array gets.
// as the input increases, the time it takes never changes
// example: simple function that takes array and logs out the first element of the array
function log(array){
	console.log(array[0]);
}
log([1,2,3,4]); //1
log([5,6,7,8,9,10]); //5

// Linear runtime(time complexity), big O Notation "0 (n)"
// as the input size increases our runtime will also increase proportionately.
function logAll(array){
	for (var i=0; i< array.length; i++){
		console.log(array[i]);
	}
}
logAll([1,2,3]); //  1 2 3 
logAll([1,2,3,4,5,6]); // 1 2 3 4 5 6

// Exponential runtime(time complexity), big O Notation "0(n^2)"
// as we add 1 to the input the runtime makes an exponential jump
// this is not very efficient/performant, as the input scales, the function becomes very inefficient
function addAndLog(array){
	for (var i = 0; i< array.length; i++){
		for (var j = 0; j < array.length; j++){
			console.log(array[i] + array[j]);
		}
	}
}
addAndLog(['A', 'B', 'C']); //AB AC BA BB BC ... 8 pairs logged 
addAndLog(['A', 'B', 'C', 'D']); // 16 pairs logged

// Logarithic runtime(time complexity), big O Notation 0 (log n)
// very performant, even if we have huge input we will only be looking at the fraction of the elements
// array needs to be sorted numerically or alphabetically etc.
// key is single value that we want to search for within our array

function binarySearch(array, key){
	var low = 0;
	var high = array.length - 1;
	var mid;
	var element;

	while(low <= high){
		mid = Math.floor((low+high)/2,10);
		element = array[mid];
		if (element < key) {
			low = mid + 1;
		} else if (element > key) {
			high = mid - 1;
		} else {
			return mid
		}
	}
	return -1;
}
// exapmles don't work, looking into it
// binarySearch([0,1,2,3,4,5,6,7,8,9,10], 5);
// binarySearch(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], 'f');

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
// 5 Find the longest word in an array FOR LOOP
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

//////////////////////////////////////////////////////
// 6 Find the longest word in a string
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

//////////////////////////////////////////////////////
// 7 Find the longest word SORT
let str = ('It is a beautiful day outside!');
function longestWord(data){
	let words = data.split(' ');
	words.sort((a,b)=>b.length-a.length);
	console.log(words[0]); //return the first word which is the longest
}
longestWord(str); 

//////////////////////////////////////////////////////
// 8 Reverse string with Reduce
function reverseWord(word){
	const reversedWord = word.split('').reduce((a,b)=>b+=a);
	return reversedWord;
}
reverseWord('ahoj'); //joha
reverseWord('arrays are fun'); //"nuf era syarra"

console.log(aaa);
var aaa = "Hello World!!";

//////////////////////////////////////////////////////
// 9 Find common characters in 2 strings, ignore repeated letters and white space
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

//////////////////////////////////////////////////////
// 10 Rock paper scissors
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

//////////////////////////////////////////////////////
// 11 Check if every character in a string is UNIQUE - solution 1
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

//////////////////////////////////////////////////////
// 12 Check if UNIQUE - solution 2 with sort
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

//////////////////////////////////////////////////////
// 13 Check if UNIQUE - solution 3 with Object()
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

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////
// 18 Harmless Random Note
function harmlessRansomeNote(noteText, magazineText){
	// no punctuation, all is lower case
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineObj = {};
	
	// using a hashtable - we want 'magazineObj' to have every word in 'magazineArr' as a property on it and for each work we want it's value to be the number of times it appears in 'magazineArr'.
	console.log(magazineObj);
	
	magazineArr.forEach(function(word){
		if (!magazineObj[word]){ 
			magazineObj[word] = 0; // if the current word is not a property on our magazineObj we put the property on the object and set it's value to 0;
		}
		magazineObj[word]++; // we increment that words value by 1
	});
	
	var noteIsPossible = true;
	noteArr.forEach(word => { // check if every word is present on our 'magazineObj', if it's not we do not have the right words to complete our note
	
	// if the word is present we want to decrement it's value by 1
		if (magazineObj[word]){
			magazineObj[word]--;
			if (magazineObj[word] < 0){
				noteIsPossible = false;
			}
		}
		else {
			noteIsPossible = false;
		}
		
	});
	return noteIsPossible;
}
harmlessRansomeNote('the magazine', 'this is all the magazine text we need'); //true
harmlessRansomeNote('a magazine', 'this is all the magazine text we need'); //false

//////////////////////////////////////////////////////
// 19 isPalindrome (without regex)
//word that is spelled the same way when it's read forwards and backwards
function isPalindrome(string){
	string = string.toLowerCase();
	var charactersArr = string.split('');
	var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	
	var lettersArr = [];
	charactersArr.forEach(char => {
		if(validCharacters.indexOf(char) > -1){// if 'char' is in 'validCharacters'
			lettersArr.push(char);
		}
	});
	
	if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
	else return false;
}
isPalindrome("Madam I'm Adam"); //true
isPalindrome("Racecar");		//true
isPalindrome("Apples and Pears");	//false

//////////////////////////////////////////////////////
// 20 Caesar Cipher
function caesarCipher(str, num){
 	var lowerCaseString = str.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	num = num % alphabet.length;
	var newString = '';

	for (var i = 0; i < lowerCaseString.length; i++){
		var currentLetter = lowerCaseString[i];
		if (currentLetter === ' '){
			newString += currentLetter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var newIndex = currentIndex + num; 
		if (newIndex > (alphabet.length)) newIndex = newIndex - alphabet.length;
		if (newIndex < 0) newIndex = alphabet.length + newIndex;
		if (alphabet.indexOf(currentLetter)===-1) continue; // if the current letter is not letter of the alphabet move to the next character
		if (str[i] === str[i].toUpperCase()) {
			newString += alphabet[newIndex].toUpperCase();
		}
		else newString += alphabet[newIndex];
	}
	return newString;
}
caesarCipher('Zoo Keeper',2); 		//"Bqq Mggrgt"
caesarCipher('Zoo Keeper',28); 		//"Bqq Mggrgt"
caesarCipher('JavaScript',-900); 	//"TkfkCmbszd"
caesarCipher('Zoo K.......)))eeper',28); //"Bqq Mggrgt"

//////////////////////////////////////////////////////
// 21 Reverse words (not the entire string, cannot use .reverse())
function reverseWords(string){
	var wordsArr = string.split(' ');
	var reversedWordsArr = [];

	wordsArr.forEach(word => {
		var reversedWord = '';
		for (var i = word.length - 1; i >=0; i--){
			reversedWord += word[i];
		}
		reversedWordsArr.push(reversedWord);
	});
	return reversedWordsArr.join(' ')
};
reverseWords('Hi, how are you today?'); //",iH woh era uoy ?yadot"
reverseWords('this is a string of words'); //"siht si a gnirts fo sdrow"

//////////////////////////////////////////////////////
// 22 Reverse array in place
function reverseArrayInPlace(arr){
	for (var i = 0; i < arr.length / 2; i++){
		var tempVar = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tempVar;
	}
	return arr;
}
reverseArrayInPlace([1,2,3,4,5,6]); // [6, 5, 4, 3, 2, 1]

//////////////////////////////////////////////////////
// 23 Mean Median Mode
function meanMedianMode(array){
	return {
		mean: getMean(array),
		median: getMedian(array),
		mode: getMode(array)
	}
}
function getMean(array){
	var sum = 0;

	array.forEach(num => {
		sum += num;
	});

	var mean = sum / array.length;
	return mean;
}
function getMedian(array){ 
	array.sort(function(a,b){
		return a - b;
	});
	var median;

	if (array.length % 2 !== 0){
		median = array[Math.floor(array.length/2)]; 
	}
	else {
		var mid1 = array[(array.length/2)-1];
		var mid2 = array[array.length/2];
		median = (mid1 + mid2) / 2; 
	}
	return median
}
function getMode(array){ // what numbers appear the most in our array
	var modeObj = {};

	array.forEach(num =>{
		if (!modeObj[num]) modeObj[num] = 0;
			modeObj[num]++;
	});
	var maxFrequency = 0;
	var modes = [];
	for (var num in modeObj){
		if (modeObj[num] > maxFrequency){
			modes = [num];
			maxFrequency = modeObj[num];
		}
		else if (modeObj[num] === maxFrequency) modes.push(num);
	}
	if (modes.length === Object.keys(modeObj).length) modes = [];

	return modes;
}
meanMedianMode([1,2,3,4,5,4,6,1]);//{mean: 3.25, median: 3.5, mode:[2,4]
meanMedianMode([9,10,23,10,23,9]);//{mean: 14, median: 10, mode: []}

//////////////////////////////////////////////////////
// 24 Two Sum constant 0(n) time complexity
// return array of two numbers from our array that add up to a sum
// return array of arrays, it is ok for number to be used in multiple pairs
function twoSum(numArray, sum){
 var pairs = [];
 var hastable = [];
 for (var i=0; i<numArray.length; i++){
 	var currNum = numArray[i];
 	var counterpart = sum - currNum; 
 	if (hastable.indexOf(counterpart) !== -1){
 		pairs.push([currNum, counterpart]);
 	}
 	hastable.push(currNum);
 }
 return pairs;
}
console.log(twoSum([1,6,4,5,3,3],7)); //[[6, 1],[3, 4],[3, 4]]
console.log(twoSum([40,11,19,17,-12],28)); //[[17, 11],[-12, 40]]

//////////////////////////////////////////////////////
// 25 Binary Search (recursion)
// find number (key) in given array (numArray)
function binarySearch(numArray, key){ //given array must be sorted
	var middleInx = Math.floor(numArray.length/2);	//we split given array in the middle
	var middleElem = numArray[middleInx];

	if (middleElem === key) return true; // base case 
	else if (middleElem < key && numArray.length > 1) {
			return binarySearch(numArray.splice(middleInx, numArray.length), key);
	}	// first recursive case, if 'middleElem' is less than 'key'
	else if (middleElem > key && numArray.length > 1){
			return binarySearch(numArray.splice(0, middleInx), key);
	}	// second recursive case, if 'middleElem' is more than 'key'
	else return false; // when our middleElem is not the key we are looking for and numArray.length is 0 or 1
};
binarySearch([5,7,12,16,36,39,42,56,71], 56); //true
binarySearch([5,7,12,16,36,39,42,56,71], 5); //true
binarySearch([5,7,12,16,36,39,42,56,71], 15); // false, 15 is not in our array

//////////////////////////////////////////////////////
// 26 Bubble Sort
function bubbleSort(array){
	for (var i = array.length; i > 0; i--){
		for (var j = 0; j < i; j++){
			if (array[j] > array[j+1]){ //if its bigger we switch them
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	return array;
}

bubbleSort([5,3,8,2,1,4]);         	//(6) [1, 2, 3, 4, 5, 8]
bubbleSort([20,20,31,56,1,12,12]); 	//(7) [1, 12, 12, 20, 20, 31, 56]
bubbleSort([3,-9,-12,-1,8]);		//(5) [-12, -9, -1, 3, 8]

//////////////////////////////////////////////////////
// 27 Sieve of Erathosthenes
// find all prime numbers up to a given number
// a prime number is a whole number greater than 1 whose only factors are 1 and itself
function sieveOfErathocenes(n){
	var primes = [];
	for (var i = 0; i<=n; i++){
			primes[i] = true; // create array from 0 to 'n' and set the value to 'true'
	}
	primes[0] = false; // 0 and 1 are never prime numbers
	primes[1] = false;
	for(var i=2; i<= Math.sqrt(n); i++){//outer for loop from 2 to square root 'n'
		for (var j=2; j*i <=n; j++){
			primes[i*j] = false;
		}
	}
	var result = [];
	for (var i=0; i<primes.length; i++){
			if (primes[i]) result.push(i);
	}
	return result;
}
sieveOfErathocenes(10); //(4) [2, 3, 5, 7]

// 28 Merge Sort
// break initial unordered array into many arrays of single element, then merge each of those until we are left with single fully merged array
// 'mergeSort'(recursion) will take in single unsorted array and split the array into two halves over and over until we have arrays of 1
function mergeSort(arr){
    if (arr.length < 2) return arr;
	var middleIndex = Math.floor(arr.length/2);
	var firstHalf = arr.slice(0, middleIndex);
	var secondHalf = arr.slice(middleIndex);
	return merge(mergeSort(firstHalf) , mergeSort(secondHalf));
}
//'merge' will take two sorted arrays as parameters, it will merge those arrays into one sorted array and return it
function merge(arr1, arr2){
	var result = [];
	while (arr1.length && arr2.length){ // run until both arrays are empty
		var minElem;
		if (arr1[0] < arr2[0]) minElem = arr1.shift();
		else minElem = arr2.shift();
		result.push(minElem);
	}
	if (arr1.length) result =  result.concat(arr1);
	else result = result.concat(arr2);
	return result;
}
mergeSort([6000,34,203,3,746,200,984,198,764,1,9,1]);
// (12) [1, 1, 3, 9, 34, 198, 200, 203, 746, 764, 984, 6000]
mergeSort([100,-20,40,-30,16,-100,-101]);
//(7) [-101, -100, -30, -20, 16, 40, 100]