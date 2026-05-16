#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following four basic arithmetic operations:
 *   - add        : Addition          (e.g. node calculator.js add 3 5          → 8)
 *   - subtract   : Subtraction       (e.g. node calculator.js subtract 10 4    → 6)
 *   - multiply   : Multiplication    (e.g. node calculator.js multiply 3 7     → 21)
 *   - divide     : Division          (e.g. node calculator.js divide 20 4      → 5)
 *   - modulo     : Modulo/Remainder  (e.g. node calculator.js modulo 10 3      → 1)
 *   - power      : Exponentiation    (e.g. node calculator.js power 2 8        → 256)
 *   - squareRoot : Square Root       (e.g. node calculator.js squareRoot 16    → 4)
 *
 * Usage: node calculator.js <operation> <num1> [num2]
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

// Modulo: returns the remainder of a divided by b; errors on division by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n; errors on negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Only run CLI logic when executed directly (not when imported by tests)
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  const SUPPORTED_OPERATIONS = ["add", "subtract", "multiply", "divide", "modulo", "power", "squareRoot"];

  if (!operation || !SUPPORTED_OPERATIONS.includes(operation)) {
    console.error(
      `Usage: node calculator.js <operation> <num1> [num2]\n` +
      `Supported operations: ${SUPPORTED_OPERATIONS.join(", ")}`
    );
    process.exit(1);
  }

  const num1 = parseFloat(arg1);
  const num2 = parseFloat(arg2);

  const singleArgOps = ["squareRoot"];
  if (isNaN(num1) || (!singleArgOps.includes(operation) && isNaN(num2))) {
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
      case "modulo":
        result = modulo(num1, num2);
        break;
      case "power":
        result = power(num1, num2);
        break;
      case "squareRoot":
        result = squareRoot(num1);
        break;
    }

    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
