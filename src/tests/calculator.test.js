/**
 * Unit tests for the Node.js CLI Calculator
 *
 * Covers all arithmetic operations:
 *   - add        : Addition
 *   - subtract   : Subtraction
 *   - multiply   : Multiplication
 *   - divide     : Division
 *   - modulo     : Modulo/Remainder
 *   - power      : Exponentiation
 *   - squareRoot : Square Root
 *
 * Includes edge cases such as division by zero, modulo by zero,
 * square root of negative numbers, negative numbers, and decimals.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// ─── Addition ─────────────────────────────────────────────────────────────────
describe("add", () => {
  // Example from image: 2 + 3 = 5
  test("2 + 3 equals 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test("adds with zero", () => {
    expect(add(0, 42)).toBe(42);
    expect(add(42, 0)).toBe(42);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ─── Subtraction ──────────────────────────────────────────────────────────────
describe("subtract", () => {
  // Example from image: 10 - 4 = 6
  test("10 - 4 equals 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("result is negative when second operand is larger", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts a negative number (double negative)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts with zero", () => {
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(5, 0)).toBe(5);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe("multiply", () => {
  // Example from image: 45 * 2 = 90
  test("45 * 2 equals 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(3, 7)).toBe(21);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test("multiplies two negative numbers yields positive result", () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test("multiplies by zero yields zero", () => {
    expect(multiply(99, 0)).toBe(0);
    expect(multiply(0, 99)).toBe(0);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe("divide", () => {
  // Example from image: 20 / 5 = 4
  test("20 / 5 equals 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(21, 3)).toBe(7);
  });

  test("divides a negative by a positive number", () => {
    expect(divide(-20, 4)).toBe(-5);
  });

  test("divides two negative numbers yields positive result", () => {
    expect(divide(-18, -3)).toBe(6);
  });

  test("zero divided by a number yields zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3.0);
  });

  // Edge case: division by zero must throw
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ─── Modulo ───────────────────────────────────────────────────────────────────
describe("modulo", () => {
  // Example from image: 5 % 2 = 1
  test("5 % 2 equals 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns zero when dividend is exactly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("modulo with a larger divisor returns the dividend", () => {
    expect(modulo(3, 10)).toBe(3);
  });

  test("modulo with negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("modulo with negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("modulo with decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero must throw
  test("throws an error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });

  test("throws an error when zero modulo zero", () => {
    expect(() => modulo(0, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// ─── Power ────────────────────────────────────────────────────────────────────
describe("power", () => {
  // Example from image: 2 ^ 3 = 8
  test("2 ^ 3 equals 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to the power of zero yields one", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises a number to the power of one yields itself", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("raises a negative base to an even exponent yields positive", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("raises a negative base to an odd exponent yields negative", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("raises a number to a negative exponent (fraction)", () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test("raises a decimal base to a power", () => {
    expect(power(2.5, 2)).toBeCloseTo(6.25);
  });
});

// ─── Square Root ──────────────────────────────────────────────────────────────
describe("squareRoot", () => {
  // Example from image: √16 = 4
  test("square root of 16 equals 4", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("square root of 9 equals 3", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("square root of 0 equals 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of 1 equals 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("square root of a non-perfect square returns correct decimal", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test("square root of a decimal number", () => {
    expect(squareRoot(2.25)).toBeCloseTo(1.5);
  });

  // Edge case: square root of negative number must throw
  test("throws an error for square root of a negative number", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws an error for square root of a large negative number", () => {
    expect(() => squareRoot(-100)).toThrow("Square root of a negative number is not allowed.");
  });
});
