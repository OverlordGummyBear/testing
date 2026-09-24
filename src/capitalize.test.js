import { capitalize } from "./index.js";

test('capitalize word', () => {
    expect(capitalize("word")).toBe("Word");
});

test('keep capitalized word capitalized', () => {
    expect(capitalize("Expect")).toBe("Expect");
});

test('keep cases in rest of string', () => {
    expect(capitalize("siGnIFIcant")).toBe("SiGnIFIcant");
});

test('only first char in string is capitalized', () => {
    expect(capitalize("this is a small function")).toBe("This is a small function");
});

test('space as first char', () => {
    expect(capitalize(" word")).toBe(" word");
});

test('capitalized word same length after', () => {
    expect(capitalize("    word     ").length).toBe("    word     ".length);
});

test('throw error for invalid input', () => {
    expect(() => capitalize(undefined)).toThrow("capitalize expect a string");
})