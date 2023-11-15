var Person = /** @class */ (function () {
    function Person(name_) {
        this.age = 30;
        this.name = name_;
    }
    Person.prototype.greet = function (frase) {
        console.log(frase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('mari');
user1.greet('holaaa...');
console.log('11', user1);
