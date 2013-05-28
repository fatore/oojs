Person = require("./models/Person.js");

Person.saySpecie();

var p1 = new Person("John");
p1.sayName();

var p2 = new Person();
p2.sayName();
