//Homework10_ex2
class Person{
    private _firstName: string = "Default";

    get firstName(){
        return this._firstName;
    }
    set firstName(value: string){
        this._firstName = value.toUpperCase();
    }    
    // enumerable:true;
    // configurable: true;
}

let person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);