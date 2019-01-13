(function(global, $){
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    // if we want to create variable that is not exposed we can put it here:
    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    Greetr.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate: function(){
            if (supportedLanguages.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal){
            var msg;
            // if undefined or null this will be coerced to 'false'
            if (formal){
                msg = this.formalGreting();
            } else {
                msg = this.greeting();
            }
            if (console){
                console.log(msg);
            }
            // 'this' refers to the calling object at execution time
            // makes this method chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName())
            }
            return this;
        },
        setLang : function(lang){
            this.language = lang;
            this.validate();
            return this;
        }
    };

    Greetr.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype; // Any objects created with this function should point to Greetr.prototype, instead to each single instance of objects we create

    // now we want to expose Greetr and attach it to our global object so we can call our function anywhere, also give it alias G$
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));