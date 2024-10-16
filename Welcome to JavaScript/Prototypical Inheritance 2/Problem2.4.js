function Shape(){}
Shape.prototype.calculateArea = function(area=0) {
    return area;
}


Shape.prototype.compareArea = function(shape1, shape2) {
    const area1 = Shape.prototype.calculateArea.call(shape1);
    const area2 = Shape.prototype.calculateArea.call(shape2);
    return area1 > area2 ? shape1 : shape2;
};

// Rectangle constructor
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
};

// Triangle constructor
function Triangle(base, height) {
    this.base = base;
    this.height = height;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.calculateArea = function() {
    return 0.5 * this.base * this.height;
};

// Parallelogram constructor
function Parallelogram(base, height) {
    Rectangle.call(this, base, height);
}

Parallelogram.prototype = Object.create(Rectangle.prototype);
Parallelogram.prototype.calculateArea = function() {
    return this.width * this.height; // Same as rectangle, but using its own formula
};

// Instances
const rectangle = new Rectangle(10, 5);
const triangle = new Triangle(10, 5);
const parallelogram = new Parallelogram(10, 5);

console.log(`Rectangle Area: ${rectangle.calculateArea()}`); // Rectangle Area: 50
console.log(`Triangle Area: ${triangle.calculateArea()}`); // Triangle Area: 25
console.log(`Parallelogram Area: ${parallelogram.calculateArea()}`); // Parallelogram Area: 50

// Comparing areas
const largerShape = Shape.prototype.compareArea(rectangle, triangle);
console.log(`Larger Shape Area: ${largerShape.calculateArea()}`);
