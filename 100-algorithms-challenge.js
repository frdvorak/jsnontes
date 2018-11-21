JS Algorithm Challenges

// 1 - Remove duplicates from Array
let a = [1,2,5,2,1,8];
let b = [];
let len = a.length; //so the system doesnt have to calculate it for every item in the for loop
for (let i = 0; i<len; i++){
	if(b.indexOf(a[i]) === -1){
		b.push(a[i]);
	}
}
console.log(b); //[1, 2, 5, 8]

// 2 - Remove duplicates from Array - order of array is NOT important
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

// 3 - Remove duplicates from Array with Object
let a = [1,2,5,2,1,8];
obj = {};
for(let i of a){
	obj[i] = true;
}
console.log(obj); //{1: true, 2: true, 5: true, 8: true}
// because the key has to be unique it will not store anything that is duplicate, so it's automatically storing only keys that are unique
let b = Object.keys(obj); //this will give us all the keys in an array
console.log(b); //["1", "2", "5", "8"]