import { caesarCipher } from "./index.js";

test("shift by one", () => {
    expect(caesarCipher("abcdefg", 1)).toBe("bcdefgh");
});

test("wrapping case", () => {
    expect(caesarCipher('xyz', 3)).toBe("abc");
});

test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("very large shift factor", () => {
    expect(caesarCipher("hello", 107)).toBe("khoor");
})

test("0 shift factor", () => {
    expect(caesarCipher("Hello World", 0)).toBe("Hello World");
});

test("unchanged special characters", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
});

test("negative shift factor", () => {
    expect(() => caesarCipher("hello", -1)).toThrow("caesarCipher expects a non-negative shift factor");
});

test("wrong types: int instead of string", () => {
    expect(() => caesarCipher(5, 1)).toThrow("caesarCipher a string and an int shift factor");
});

test("wrong types: float instead of int", () => {
    expect(() => caesarCipher(5, 1.5)).toThrow("caesarCipher a string and an int shift factor");
});

test("wrong types: string insted of int", () => {
    expect(() => caesarCipher("hello", "1")).toThrow("caesarCipher a string and an int shift factor");
});