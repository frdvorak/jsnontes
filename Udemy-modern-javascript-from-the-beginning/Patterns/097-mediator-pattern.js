// Chatroom is 'mediator', Users are 'colleagues'. We want user to be able to send messages directly to other users or to broadcast them to the entire chatroom

const User = function(name){
    this.name = name;
    this.chatroom = null;
}
User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}
const Chatroom = function(){
    let users = {}; // list of users

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if (to) {
                // message to single user
                to.receive(message, from);
            } else {
                // message to everyone in the chatroom
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message.from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

brad.send('Hello Jeff', jeff);