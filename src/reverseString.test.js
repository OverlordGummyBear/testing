import { reverseString } from "./index.js";

test("regular one word string", () => {
    expect(reverseString("word")).toBe("drow");
})

test("reverse string with space", () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
});

test("same string length with output", () => {
    expect(reverseString(" word ").length).toBe(" drow ".length);
});

test("type is not  string", () => {
    expect(() => reverseString(43)).toThrow("reverseString expects a string");
});