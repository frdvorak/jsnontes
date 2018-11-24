JS METHODS
https://webcache.googleusercontent.com/search?q=cache:sDGHfzQ4sAcJ:https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d+&cd=5&hl=en&ct=clnk&gl=uk

// bind, apply and call
// Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, with modification of the context.

//3) Understand JavaScript scope well (Closures as well)

//4) Understand this keyword well(global, function and object scopes)

//5) Understand objects well (Object.freeze, Object.seal)

//6) Understand Prototypical Inheritance well

//7) Understand the callbacks and promises well

//8) Understand the regular expressions well

//9) Understand Map, Reduce and Filter well

//10) Understand Error handling patterns

//Other things to know (Hoisting, Event Bubbling)



//Function.prototype.bind()
//method creates a new function that, when called, has its this keyword set to the provided value
Syntax: function.bind(thisArg[, arg1[, arg2[, ...]]])
//thisArg:
- The value to be passed as the this parameter to the target function when the bound function is called
- The value is ignored if the bound function is constructed using the new operator
//The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value
//A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its this (e.g. by using that method in callback-based code). Without special care, however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:


