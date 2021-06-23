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
class Shape {
    constructor(x, y) {
        this.div = document.createElement('div')
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        container.appendChild(this.div);
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
        this.div.addEventListener('click', () => {
            this.describe();
        });
    };
    describe() {
        shapeType.innerText = 'Rectangle';
        shapeWidth.innerText = `${this.width} pixels`;
        shapeHeight.innerText = `${this.height} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.height * this.height} pixels`;
        shapePerimeter.innerText = `${this.height * 4} pixels`;
    };
};
//----------------------------------------------------------------------//
rectangleButton.addEventListener('click', () => {
    let widthField = document.getElementById('rw').value;
    let heightField = document.getElementById('rh').value;
    let xLim = (600 - widthField);
    let yLim = (600 - heightField);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (widthField > 600 || heightField > 600 || widthField < 0.00001 || heightField < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed 600px on any axis!")
    } else {
        new Rectangle(xPos, yPos, widthField, heightField);
    };
});
//////////////////////////////////////////////////////////////////////////
class Square extends Shape {
    constructor(x, y, sideLength) {
        super(x, y);
        this.sideLength = sideLength;
        this.div.classList.add('square');
        this.div.style.width = `${this.sideLength}px`;
        this.div.style.height = `${this.sideLength}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }
    describe() {
        shapeType.innerText = 'Square';
        shapeWidth.innerText = `${this.sideLength} pixels`;
        shapeHeight.innerText = `${this.sideLength} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.sideLength * this.sideLength} pixels`;
        shapePerimeter.innerText = `${this.sideLength * 4} pixels`;
    };
};
//----------------------------------------------------------------------//
squareButton.addEventListener('click', () => {
    let sideLengthField = document.getElementById('sqr').value;
    let xLim = (600 - sideLengthField);
    let yLim = (600 - sideLengthField);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (sideLengthField > 600 || sideLengthField < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed 600px on any axis!")
    } else {
        new Square(xPos, yPos, sideLengthField);
    };
});
//////////////////////////////////////////////////////////////////////////
class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
        this.height = height;
        this.div.classList.add('triangle');
        this.div.style.borderTop = `${this.height}px solid rgba(255, 255, 0, 0.8)`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
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
//----------------------------------------------------------------------//
triangleButton.addEventListener('click', () => {
    let heightField = document.getElementById('tri').value;
    let xLim = (600 - heightField);
    let yLim = (600 - heightField);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (heightField > 600 || heightField < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed 600px on any axis!")
    } else {
        new Triangle(xPos, yPos, heightField);
    };
});
//////////////////////////////////////////////////////////////////////////
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
        this.div.classList.add('circle');
        this.div.style.width = `${(this.radius / 2)}px`;
        this.div.style.height = `${(this.radius / 2)}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
    };
    describe() {
        shapeType.innerText = 'Circle';
        shapeWidth.innerText = `${this.radius} pixels`;
        shapeHeight.innerText = `${this.radius} pixels`;
        shapeRadius.innerText = `${this.radius / 2} pixels`;
        shapeArea.innerText = `${Math.floor(Math.PI * this.radius * this.radius)} pixels`;
        shapePerimeter.innerText = `${Math.floor(2 * Math.PI * this.radius)} pixels`;
    };
};
//----------------------------------------------------------------------//
circleButton.addEventListener('click', () => {
    let radiusFieldAlpha = document.getElementById('cir').value;
    let radiusField = (radiusFieldAlpha * 2)
    let xLim = ((1200 - radiusField) / 2);
    let yLim = ((1200 - radiusField) / 2);
    let xPos = randomPos(0, xLim);
    let yPos = randomPos(0, yLim);
    if (radiusField > 1200 || radiusField < 0.00001) {
        alert("Error! Shapes must have a value and cannot exceed 600px on any axis!")
    } else {
        new Circle(xPos, yPos, radiusField);
    };
});
//////////////////////////////////////////////////////////////////////////