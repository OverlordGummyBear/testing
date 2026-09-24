import { calculator } from "./index.js";

//int
test("add floats", () => {
    expect(calculator.add(5, 3)).toBe(8);
});

test("subtract floats", () => {
    expect(calculator.subtract(52, 6)).toBe(46);
});

test("multiply floats", () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});

test("divide floats", () => {
    expect(calculator.divide(7, 2)).toBe(3.5);
});

//float
test("add floats", () => {
    expect(calculator.add(5.44, 3.23)).toBeCloseTo(8.67);
});

test("subtract floats", () => {
    expect(calculator.subtract(52.45, 6.21)).toBeCloseTo(46.24);
});

test("multiply floats", () => {
    expect(calculator.multiply(3.34, 3.34)).toBeCloseTo(11.16);
});

test("divide floats", () => {
    expect(calculator.divide(7.1, 2.5)).toBeCloseTo(2.84);
});

//throw errors
test("add: more than 2 arguments", () => {
    expect(() => calculator.add(1, 2, 3)).toThrow("The function expects precisely two numbers")
});

test("subtract: more than 2 arguments", () => {
    expect(() => calculator.subtract(1, 2, 3)).toThrow("The function expects precisely two numbers")
});

test("multiply: more than 2 arguments", () => {
    expect(() => calculator.multiply(1, 2, 3)).toThrow("The function expects precisely two numbers")
});

test("divide: more than 2 arguments", () => {
    expect(() => calculator.divide(1, 2, 3)).toThrow("The function expects precisely two numbers")
});

test("divide: cannot divide by 0", () => {
    expect(() => calculator.divide(10, 0)).toThrow("The second number cannot be 0");
});

test("a is not typeOf number", () => {
    expect(() => calculator.add("23", 2)).toThrow("Both arguments should be numbers");
});

test("b is not typeOf number", () => {
    expect(() => calculator.add(23, null)).toThrow("Both arguments should be numbers");
});

test("neither argument is typeOf number", () => {
    expect(() => calculator.add("23", undefined)).toThrow("Both arguments should be numbers");
});