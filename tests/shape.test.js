const { Triangle } = require('../lib/shape');
const { Circle } = require('../lib/shape');
const { Square } = require('../lib/shape');

describe('Triangle', () => {
  it('should render a triangle SVG with the specified shape color', () => {
    const shapeColor = 'red';
    const triangle = new Triangle(shapeColor);
    const svg = triangle.render();

    expect(svg).toContain(`<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`);
  });
});

describe('Circle', () => {
  it('should render a circle SVG with the specified shape color', () => {
    const shapeColor = 'blue';
    const circle = new Circle(shapeColor);
    const svg = circle.render();

    expect(svg).toContain(`<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`);
  });
});

describe('Square', () => {
  it('should render a square SVG with the specified shape color', () => {
    const shapeColor = 'green';
    const square = new Square(shapeColor);
    const svg = square.render();

    expect(svg).toContain(`<rect width="200" height="200" fill="${shapeColor}" />`);
  });
});
