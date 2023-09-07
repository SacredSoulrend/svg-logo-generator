function Shape(shapeColor) {
    this.shapeColor = shapeColor;
  }
  
  Shape.prototype.render = function () {
    throw new Error('render() method must be implemented');
  };
  
  // triangle object
  function Triangle(shapeColor) {
    Shape.call(this, shapeColor);
  }
  
  Triangle.prototype = Object.create(Shape.prototype);
  Triangle.prototype.constructor = Triangle;
  
  Triangle.prototype.render = function (text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="36" fill="${textColor}">${text}</text>
      </svg>
    `;
  };
  
  // circle object
  function Circle(shapeColor) {
    Shape.call(this, shapeColor);
  }
  
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  
  Circle.prototype.render = function (text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="36" fill="${textColor}">${text}</text>
      </svg>
    `;
  };
  
  // square object
  function Square(shapeColor) {
    Shape.call(this, shapeColor);
  }
  
  Square.prototype = Object.create(Shape.prototype);
  Square.prototype.constructor = Square;
  
  Square.prototype.render = function (text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="36" fill="${textColor}">${text}</text>
      </svg>
    `;
  };
  
  module.exports = { Triangle, Circle, Square };
  