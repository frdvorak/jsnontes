// 1 Reverse string
function reverse(str){
	const reversedStr = str.split('').reverse().join('');
	return reversedStr;
};
reverse('apple');	// "elppa"

// 2 Reverse string
function reverse(str){
	let reversed = '';
	for (let character of str){
		reversed = character + reversed;
	}
	return reversed;
}
reverse('pineapple'); // "elppaenip"

// 3 Reverse string
function reverse(str){
		return str.split('').reduce((a,b) => {return  b + a;}, '');
}
reverse('blueberry'); // "yrrebeulb"
	// the same with simplified syntax:
function reverse(str){
		debugger;
		return str.split('').reduce((a,b) => b+a, 'starter-value-here');
}
reverse('blueberry'); // "yrrebeulbstarter-value-here"
 
// 4 Palindrome
function isPalindrome(str){
	return str.split('').reverse().join('') === str;
};
isPalindrome('racecar'); // true

// 5 Palindrome with .every()
function isPalindrome(str){
	return str.split('').every((char, i)=>{
		return char === str[str.length - i - 1];
	});
};
isPalindrome('racecar'); // true
// not very efficient becuase we are checking second half of str which is not necessary

// 6 Reverse Integer
// The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.
function reverseInt(int){
		return parseInt(String(int).split('').reverse().join('')) * Math.sign(int);
};
reverseInt(-159);