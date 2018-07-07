"use strict";
//Homework10_ex2
class Person {
    constructor() {
        this._firstName = "Default";
        // enumerable:true;
        // configurable: true;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value.toUpperCase();
    }
}
let person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);
