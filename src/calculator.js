#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following four basic arithmetic operations:
 *   - add      : Addition       (e.g. node calculator.js add 3 5       → 8)
 *   - subtract : Subtraction    (e.g. node calculator.js subtract 10 4 → 6)
 *   - multiply : Multiplication (e.g. node calculator.js multiply 3 7  → 21)
 *   - divide   : Division       (e.g. node calculator.js divide 20 4   → 5)
 *
 * Usage: node calculator.js <operation> <num1> <num2>
 */

// Addition: returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of two numbers; errors on division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide };

// Only run CLI logic when executed directly (not when imported by tests)
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  const SUPPORTED_OPERATIONS = ["add", "subtract", "multiply", "divide"];

  if (!operation || !SUPPORTED_OPERATIONS.includes(operation)) {
    console.error(
      `Usage: node calculator.js <operation> <num1> <num2>\n` +
      `Supported operations: ${SUPPORTED_OPERATIONS.join(", ")}`
    );
    process.exit(1);
  }

  const num1 = parseFloat(arg1);
  const num2 = parseFloat(arg2);

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    let result;

    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
    }

    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
