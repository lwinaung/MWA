//Homework10_ex1
class Shape {
    width: number = 0;
    length: number = 0;
    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }
};

class Rectangle extends Shape {
    constructor() {
        super(5, 2);
    }
    calSize(){
        return this.width * this.length;
    }
};

var rectangle = new Rectangle();
console.log(rectangle.calSize());
