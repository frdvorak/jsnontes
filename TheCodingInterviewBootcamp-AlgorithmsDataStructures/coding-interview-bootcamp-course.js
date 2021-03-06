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

// 7 Max char
function maxChar(str){
	const charMap = {};
	let max = 0;
	let maxChar = '';
	for (let char of str){
		if (charMap[char]){
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	for (let char in charMap){ // in for iteratin through object
		if (charMap[char] > max){
			max = charMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}
maxChar('Hellooo!'); // "o"

// 8 Array Chunking
function chunk(array,size){
	const chunked = []; //this holds all the chunks of data

	for (let element of array){
		const last = chunked[chunked.length - 1];//chunk we are currently working with
		console.log(last);
		if (!last || last.length === size){
			chunked.push([element]); //push new chunk and put element in it
		} else {
			last.push(element);
		}
	}
	return chunked;
} 
chunk([1,2,3,4,5,6,7,8,9], 2); // [1, 2][3, 4][5, 6][7, 8][9]

// 9 Array chunking solution 2
function chunk(array,size){
	const chunked = [];
	let index = 0;
	while(index<array.length){
		chunked.push(array.slice(index, index+size));
		index+=size;
	}
	return chunked;
} 
chunk([1,2,3,4,5,6,7,8,9], 2); // [1, 2][3, 4][5, 6][7, 8][9]