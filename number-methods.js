NUMBER METHODS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

Number.isNaN()			Determine whether the passed value is NaN.
Number.isFinite()		Determine whether the passed value is a finite number.
Number.isInteger()		Determine whether the passed value is an integer.
Number.isSafeInteger() 	Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1).
Number.parseFloat()		The value is the same as parseFloat() of the global object.
Number.parseInt()		The value is the same as parseInt() of the global object.

Number.isNaN()	
method determines whether the passed value is NaN and its type is Number
Number.isNaN(10); 		//false
Number.isNaN('abc'); 	//false
Number.isNaN(NaN); 		//true
Number.isNaN(0 / 0);  	//true
Number.isNaN(Number.NaN); //true

Number.isFinite()
method determines whether the passed value is a finite number
Number.isFinite(0); 		//true
Number.isFinite(2e64); 		//true
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false

Number.isInteger()
method determines whether the passed value is an integer
Number.isInteger(0);        // true
Number.isInteger(1);        // true
Number.isInteger(-100000);  // true
Number.isInteger('10'); 	// false

//Number.isSafeInteger()
//determines whether the provided value is a number that is a safe integer
//For example, 253 - 1 is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false

//Number.parseFloat()	
//parses a string argument and returns a floating point number. This method behaves identically to the global function parseFloat()

//Number.parseInt()
//method parses a string argument and returns an integer of the specified radix or base


