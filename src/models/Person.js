module.exports = function() {

    var Person = function(name) {
        // public field 
        this.name = name;
    };

    // public method
    Person.prototype.sayName =
    function() {
        console.log(this.name);
    };
    // static method
    Person.saySpecie = function() {console.log("Human")};

    return Person;
}();
