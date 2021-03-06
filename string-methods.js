STRING METHODS
https://www.w3schools.com/jsref/jsref_obj_string.asp
//All string methods return a new value. They do not change the original variable.

charAt()		Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
fromCharCode()	Converts Unicode values to characters
concat()		Joins two or more strings, and returns a new joined strings
endsWith()		Checks whether a string ends with specified string/characters
includes()		Checks whether a string contains the specified string/characters
indexOf()		Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()			Searches a string for a match against a regular expression, and returns the matches
repeat()		Returns a new string with a specified number of copies of an existing string
replace()		Searches a string for a specified value/RegExp and returns a new string where the specified values are replaced
search()		Searches a string for a specified value/RegExp, and returns the position of the match
slice()			Extracts a part of a string and returns a new string
split()			Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()		Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()		Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toUpperCase()	Converts a string to uppercase letters
toString()		Returns the value of a String object
trim()			Removes whitespace from both ends of a string
valueOf()		Returns the primitive value of a String object

METHODS THAT CAN TAKE RegExp AS AN ARGUMENT:
.search(), .match(), .replace() ...

//charAt()
//Returns the character at the specified index (position)
var str = "HELLO WORLD";
str.charAt(0); //H

//charCodeAt()
//Returns the Unicode of the character at the specified index
var str = "HELLO WORLD";
str.charCodeAt(0); //72

//fromCharCode()
//Converts Unicode values to characters
//Note: This is a static method of the String object, and the syntax is always String.fromCharCode().
String.fromCharCode(65); //A

//concat()
//Joins two or more strings, and returns a new joined strings
var str1 = "Hello ";
var str2 = "world!";
str1.concat(str2); //Hello world!
let slovo1 = 'opice';
let slovo2 = 'ji';
let slovo3 = 'banan';
slovo1.concat(slovo2, slovo3); //"opicejibanan"

//startsWith()
//Checks whether a string begins with specified characters
//The startsWith() method is case sensitive
var str = "Hello world, welcome to the universe.";
str.startsWith("Hello"); //true
//Check if a string starts with "world", starting the search at position 6:
str.startsWith("world", 6); //true
let veta = 'Hello world!';
veta.startsWith('Hello'); //true
veta.startsWith('hello'); //false
veta.startsWith('world'); //false

//endsWith()
//Checks whether a string ends with specified string/characters
var str = "Hello world, welcome to the universe.";
str.endsWith("universe."); //true
// optional parameter length - Optional. Specify the length of the string to search. If omitted, the default value is the length of the string
str.endsWith("world", 11); //true

//includes()
//Checks whether a string contains the specified string/characters
var str = "Hello world, welcome to the universe.";
str.includes("world"); //true
// optional parameter start - Optional. Default 0. At which position to start the search
str.includes("world", 12); //false

//indexOf()
//Returns the position of the first found occurrence of a specified value in a string
var str = "Hello world, welcome to the universe.";
str.indexOf("welcome"); //13
str.indexOf('the', 5); // returns 24

//lastIndexOf()
//Returns the position of the last found occurrence of a specified value in a string
var str = "Hello planet earth, you are a great planet.";
str.lastIndexOf("planet"); //36
//start search at specified position(10) SEARCHING BACKWARDS!!!:
str.lastIndexOf("planet", 10); //6

//localeCompare()
//Compares two strings in the current locale
//The localeCompare() method returns a number indicating whether the string comes before, after or is equal as the compareString in sort order.
var str1 = "ab";
var str2 = "cd";
str1.localeCompare(str2); //-1
// A Number, indicating whether the reference string comes before, after or is the same as the compareString in sort order. Returns one of three values:
// -1 if the reference string is sorted before the compareString
// 0 if the two strings are equal
// 1 if the reference string is sorted after the compareString

//match() + TEGULAR EXPRESSIONS
//Searches a string for a match against a regular expression, and returns the matches
var str = "The rain in SPAIN stays mainly in the plain"; 
str.match(/ain/gi); // (4) ["ain", "AIN", "ain", "ain"]

//repeat()
//Returns a new string with a specified number of copies of an existing string
var str = "Hello world!";
str.repeat(2); //Hello world!Hello world!

//replace()
//Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
var str = "Visit Microsoft!";
console.log(str.replace("Microsoft", "W3Schools")); //Visit W3Schools!
//The value, or regular expression, that will be replaced by the new value
var str = "Mr Blue has a blue house and a blue car";
str.replace(/blue/g, "red"); //Mr Blue has a red house and a red car
str.replace(/blue/gi, "red"); //Mr red has a red house and a red car
//REGEX CAN FIND MULTIPLE MATCHES WITH '/g', with 'string' it seems to find only the first match:
let str = 'Today is Monday, every Monday I have to go to work!';
str.replace('Monday', 'Friday');  //"Today is Friday, every Monday I have to go to work!"
str.replace(/Monday/i, 'Friday'); //"Today is Friday, every Monday I have to go to work!"
str.replace(/Monday/gi, 'Friday'); //Today is Friday, every Friday I have to go to work!"


//search()
//Searches a string for a specified value, or regular expression, and returns the position of the match
var str = "Visit W3Schools!";
str.search("W3Schools"); //6
// The search value can be string or a regular expression.
// This method returns -1 if no match is found.
let str = 'This ? is a sentence I will search for the first characted that is not a character or a white space!!!';
str.search(/[^\w\s]/g); //5 '?'

//slice()
//Extracts a part of a string and returns a new string
var str = "Hello world!";
str.slice(1, 5); //ello
//Extract only the last character:
str.slice(-1); //!
//Extract from position 3, and to the end:
str.slice(3); //lo world!

//split()
//Splits a string into an array of substrings
var str = "How are you doing today?";
str.split(" "); //(5) ["How", "are", "you", "doing", "today?"]
str.split(' ')[1]; //"are" - split and grab a word from the array
//If an empty string ("") is used as the separator, the string is split between each character.
str.split("");//(24) ["H", "o", "w", " ", ...
//Use the limit parameter: Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array
str.split(" ", 2); //(2) ["How", "are"]

//substr()
//Extracts the characters from a string, beginning at a specified start position, and through the specified number of characters
var str = "Hello world!";
str.substr(1, 4); //ello
//Begin the extraction at position 2, and extract the rest of the string:
str.substr(2); //llo world!
//Extract only the last character:
str.substr(11, 1); //!

//substring()
//Extracts the characters from a string, between two specified indices
var str = "Hello world!";
str.substring(1, 4); //ell
//Begin the extraction at position 2, and extract the rest of the string:
str.substring(2); //llo world!
//If "start" is greater than "end", it will swap the two arguments:
str.substring(4, 1); //ell
//If "start" is less than 0, it will start extraction from index position 0:
str.substring(-3); //Hello world!

//DIFFERENCE between SUBSTR() and SUBSTRING():
//substr() = start position + number of characters
let str = 'Extracting a substring!';
str.substr(1, 4); //"xtra"
//substring() = start position + end position
let str = 'Extracting a substring!';
str.substring(1, 4); //"xtr"

//toLowerCase()
//Converts a string to lowercase letters
var str = "HELLO WORLD!";
str.toLowerCase(); //hello world!
//Generally, this method returns the same result as the toLocaleLowerCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary

//toUpperCase()
//Converts a string to uppercase letters
var str = "Hello World!";
str.toUpperCase(); //HELLO WORLD!

//toString()
//Returns the value of a String object
var str = "Hello World!";
console.log(str.toString()); //Hello World!

//trim()
//Removes whitespace from both ends of a string
var str = "       Hello World!        ";
console.log(str.trim()); //Hello World!

//valueOf()
//Returns the primitive value of a String object
var str = "Hello World!";
console.log(str.valueOf()); //Hello World!
//Note: This method is usually called automatically by JavaScript behind the scenes, and not explicitly in code.
.
.
.
.
.
//match() + REGULAR EXPRESSIONS
//Searches a string for a match against a regular expression, and returns the matches
var str = "The rain in SPAIN stays mainly in the plain"; 
console.log(str.match(/ain/gi)); // (4) ["ain", "AIN", "ain", "ain"]

let str = 'Big & brown fox!123';
str.match(/[A-Z]/g);//["B"]
str.match(/[A-Z]/gi);//(11) ["B", "i", "g", "b", "r", "o", "w", "n", "f", "o", "x"]

// '\d' Matches ANY DIGIT (Arabic numeral). Equivalent to [0-9]
let str = 'Big & brown fox!123';
str.match(/[\d]/g); //(3) ["1", "2", "3"]

// '\D' Matches any character that is NOT A DIGIT. Equivalent to [^0-9]
let str = 'Big & brown fox!123';
str.match(/[\D]/g);//(16) ["B", "i", "g", " ", "&", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", "!"]

// '\w' Matches ANY ALPHANUMERIC CHARACTER (WORD/NUMBER) from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]
let str = 'Big & brown fox!123';
str.match(/[\w]/g);//(14) ["B", "i", "g", "b", "r", "o", "w", "n", "f", "o", "x", "1", "2", "3"]

// '\W' Matches any character that is NOT A WORD/NUMBER CHARACTER from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_]
let str = 'Big & brown fox!123';
str.match(/[\W]/g);//(5) [" ", "&", " ", " ", "!"]

// '\s' Matches A SINGLE WHITE SPACE character, including space, tab etc
let str = 'Big & brown fox!123';
str.match(/[\s]/g);//(3) [" ", " ", " "]

// '\S' Matches a SINGLE character that is NOT A WHITE SPACE
let str = 'Big & brown fox!123';
str.match(/[\S]/g);//(16) ["B", "i", "g", "&", "b", "r", "o", "w", "n", "f", "o", "x", "!", "1", "2", "3"]
.
.
.
.
.
//String HTML Wrapper Methods
//The HTML wrapper methods return the string wrapped inside the appropriate HTML tag.
//These are not standard methods, and may not work as expected in all browsers.

//anchor()
//Creates an anchor
//Create an HTML anchor around a string:
var str = "Chapter 10";
txt.anchor("chap10");
console.log(str.anchor("chap10")); //<a name="chap10">Chapter 10</a>

//big() Displays a string using a big font
var str = "Hello World!";
console.log(str.big()); //<big>Hello World!</big>

//blink() Displays a blinking string
var str = "Hello World!";
console.log(str.blink()); //<blink>Hello World!</blink>

//bold() Displays a string in bold
console.log(str.bold()); //<b>Hello World!</b>

//fixed() Displays a string using a fixed-pitch font
console.log(str.fixed()); //<tt>Hello World!</tt>

//fontcolor() Displays a string using a specified color
console.log(str.fontcolor("green")); //<font color="green">Chapter 10</font>

//fontsize() Displays a string using a specified size
console.log(str.fontsize(7)); //<font size="7">Hello World!</font>

//italics() Displays a string in italic
console.log(str.italics()); //<i>Hello World!</i>

//link() Displays a string as a hyperlink
var str = "Website";
console.log(str.link("https://www.w3schools.com")); //<a href="https://www.w3schools.com">Website</a>

//small() Displays a string using a small font
var str = "Hello World!";
console.log(str.small()); //<small>Hello World!</small>

//strike() Displays a string with a strikethrough
console.log(str.strike()); //<strike>Hello World!</strike>

//sub() Displays a string as subscript text
var str = "Hello World!";
console.log(str.sub()); //<sub>Hello World!</sub>

