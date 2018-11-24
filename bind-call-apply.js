//BIND CALL APPLY EXERCISES

//CALL() ///////////////
let food = {name: 'chips'}
let message = function(size, when){
	return "I'll have "+this.name+" on a "+size+" plate "+when+"!";
}
message.call(food, "big", "today"); //I'll have chips on a big plate today!

//APPLY() /////////////// same as .call(), but only accepts ARRAY of arguments
const pet = {pet: "dog", name: 'Rambo'};
const foods = ['tuna', 'chocolate', 'cake'];
const sentence = function(food1, food2, food3){
	return "My "+this.pet+ " "+this.name+" likes "+food1+ " "+food2+" "+food3;
}
sentence.apply(pet, foods); //My dog Rambo likes tuna chocolate cake

//BIND() /////////////// stores value in variable for later userAgent
const seafood = {salty: false, name: 'octopus'};
let result = function(flavour, typeOfFood){
	if (this.salty){
		return this.name+" is a salty "+typeOfFood+" with "+flavour+" flavour!!"
	} else {
		return this.name+" is a NON-salty "+typeOfFood+" with "+flavour+" flavour!!"
	}
}
let bound = result.bind(seafood);
bound('tangy', 'sea dish'); //"octopus is a NON-salty sea dish with tangy flavour!!"

function.call(thisArg, arg1, arg2, ...)
function.apply(thisArg, [argsArray])
function.bind(thisArg[, arg1[, arg2[, ...]]])
/////////////////////////////////////////////



Object oriented programming

Object.freeze() 
method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
const object1 = {
  property1: 42
};
const object2 = Object.freeze(object1);

Encapsulation - closure