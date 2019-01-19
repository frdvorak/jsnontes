// we will use WeapMap to intitialize private property
"use strict"
const _items = new WeakMap();
class Stack {
    constructor(){
        _items.set(this, []); // key is this object, value is empty array
    }

    push(obj){
        _items.get(this).push(obj);
        console.log(`added ${obj}`)
    }
    
    pop(){
        const items = _items.get(this);
        if(items.length === 0)
            throw new Error('Stack is empty.');
    
        return items.pop();
    }

    peek(){
        const items = _items.get(this);

        if(items.length === 0)
            throw new Error('Stack is empty');

        return items[items.length-1];
    }

    // count is a read-only property, we should not be able to change it from the outside, that's why we use a getter
    get count(){
        return _items.get(this).length;
    }
}

const stack = new Stack();
console.log(stack);
stack.push('a');
stack.push('b');
stack.push('c');
stack.count;
stack.peek();