(function(global, $){
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype; // Any objects created with this function should point to Greetr.prototype, instead to each single instance of objects we create

    // now we want to expose Greetr and attach it to our global object so we can call our function anywhere
    global.G$ = Greetr;

}(window, jQuery));