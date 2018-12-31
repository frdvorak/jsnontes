function MemberFactory(){
	this.createMember = function(name, type){
		let member;
		// based on a type we will create different type of object
		if (type === 'simple'){
			member = new SimpleMembership(name);
		} else if (type === 'standard'){
			member = new StandardMembership(name);
		} else if (type === 'super'){
			member = new SuperMembership(name);
		}
		member.type = type;
		member.define = function(){
			console.log(`${this.name} (${this.type}): ${this.cost}`);
		}
		return member;
	}
}
// create constructors for our subclasses
const SimpleMembership = function(name){
	this.name = name;
	this.cost = '$5';
}
const StandardMembership = function(name){
	this.name = name;
	this.cost = '$15';
}
const SuperMembership = function(name){
	this.name = name;
	this.cost = '$25';
}
const members = [];
const factory = new MemberFactory();
// add members
members.push(factory.createMember('John Doe', 'simple'));

console.log(members);