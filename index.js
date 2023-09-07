const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shape');

// Prompt the user for text input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo (e.g., ABC):',
      validate: function (input) {
        return /^[A-Za-z]{1,3}$/.test(input);
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    let shapeInstance;

    switch (shape) {
      case 'circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'square':
        shapeInstance = new Square(shapeColor);
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    const svg = shapeInstance.render(text, textColor);

    // Save the SVG to a file
    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
