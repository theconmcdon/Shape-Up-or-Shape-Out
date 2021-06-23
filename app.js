//////////////////////////////////////////////////////////////////////////
let container = document.getElementById('container');
let rectangleButton = document.getElementById('rectButton');
let squareButton = document.getElementById('sqrButton');
let circleButton = document.getElementById('circButton');
let triangleButton = document.getElementById('triButton');
let shapeType = document.getElementById('s1');
let shapeWidth = document.getElementById('s2');
let shapeHeight = document.getElementById('s3');
let shapeRadius = document.getElementById('s4');
let shapeArea = document.getElementById('s5');
let shapePerimeter = document.getElementById('s6');
//////////////////////////////////////////////////////////////////////////
function randomPos(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
//////////////////////////////////////////////////////////////////////////
rectangleButton.addEventListener('click', () => {
    let width = document.getElementById('rw').value;
    let height = document.getElementById('rh').value;
    let xLim = (600 - width);
    let yLim = (600 - height);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (width > 600 || height > 600 || width < 0.00001 || height < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed 600px on any axis!")
    } else {
        new Rectangle(xPos, yPos, width, height);
    };
});
//////////////////////////////////////////////////////////////////////////
squareButton.addEventListener('click', () => {
    let sideLength = document.getElementById('sqr').value;
    let xLim = (600 - sideLength);
    let yLim = (600 - sideLength);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (sideLength > 600 || sideLength < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed 600px on any axis!")
    } else {
        new Square(xPos, yPos, sideLength);
    };
});
//////////////////////////////////////////////////////////////////////////
circleButton.addEventListener('click', () => {
    let radiusLength = document.getElementById('cir').value;
    let diameter = (radiusLength * 2);
    let xLim = (600 - diameter);
    let yLim = (600 - diameter);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (radiusLength > 300 || radiusLength < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed a 300px radius!")
    } else {
        new Circle(xPos, yPos, radiusLength);
    };
});
//////////////////////////////////////////////////////////////////////////
triangleButton.addEventListener('click', () => {
    let height = document.getElementById('tri').value;
    let xLim = (600 - height);
    let yLim = (600 - height);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (height > 600 || height < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed 600px on any axis!")
    } else {
        new Triangle(xPos, yPos, height);
    };
});
//////////////////////////////////////////////////////////////////////////
class Shape {
    constructor(x, y) {
        this.div = document.createElement('div')
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        container.appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        });
    };
};
//////////////////////////////////////////////////////////////////////////
class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.div.classList.add('rectangle');
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
    };
    describe() {
        shapeType.innerText = 'Rectangle';
        shapeWidth.innerText = `${this.width} pixels`;
        shapeHeight.innerText = `${this.height} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.height * this.width} pixels`;
        shapePerimeter.innerText = `${(this.height * 2) + (this.width * 2)} pixels`;
    };
};
//////////////////////////////////////////////////////////////////////////
class Square extends Shape {
    constructor(x, y, sideLength) {
        super(x, y);
        this.sideLength = sideLength;
        this.div.classList.add('square');
        this.div.style.width = `${this.sideLength}px`;
        this.div.style.height = `${this.sideLength}px`;
    };
    describe() {
        shapeType.innerText = 'Square';
        shapeWidth.innerText = `${this.sideLength} pixels`;
        shapeHeight.innerText = `${this.sideLength} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.sideLength * this.sideLength} pixels`;
        shapePerimeter.innerText = `${this.sideLength * 4} pixels`;
    };
};
//////////////////////////////////////////////////////////////////////////
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
        this.div.classList.add('circle');
        this.div.style.width = `${this.radius * 2}px`;
        this.div.style.height = `${this.radius * 2}px`;
    };
    describe() {
        shapeType.innerText = 'Circle';
        shapeWidth.innerText = `${this.radius * 2} pixels`;
        shapeHeight.innerText = `${this.radius * 2} pixels`;
        shapeRadius.innerText = `${this.radius} pixels`;
        shapeArea.innerText = `${Math.floor(Math.PI * this.radius * this.radius)} pixels`;
        shapePerimeter.innerText = `${Math.floor(2 * Math.PI * this.radius)} pixels`;
    };
};
//////////////////////////////////////////////////////////////////////////
class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
        this.height = height;
        this.div.classList.add('triangle');
        this.div.style.borderTop = `${this.height}px solid rgba(255, 255, 0, 0.8)`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
    };
    describe() {
        shapeType.innerText = 'Triangle';
        shapeWidth.innerText = `${this.height} pixels`;
        shapeHeight.innerText = `${this.height} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.height * this.height * 0.5} pixels`;
        shapePerimeter.innerText = `${Math.floor(2 * this.height + Math.sqrt(2) * this.height)} pixels`;
    };
};
//////////////////////////////////////////////////////////////////////////