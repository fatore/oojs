;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
Person = require("./models/Person.js");

Person.saySpecie();

var p1 = new Person("John");
p1.sayName();

var p2 = new Person();
p2.sayName();

},{"./models/Person.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
;