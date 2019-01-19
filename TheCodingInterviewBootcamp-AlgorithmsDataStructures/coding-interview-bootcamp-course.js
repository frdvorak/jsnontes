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
		return str.split('').reduce((a,b) => {return  b+a;}, '');
}
reverse('blueberry'); // "yrrebeulb"
	// the same with simplified syntax:
function reverse(str){
		debugger;
		return str.split('').reduce((a,b) => b+a, 'starter-value-here');
}
reverse('blueberry'); // "yrrebeulbstarter-value-here"