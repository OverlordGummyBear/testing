import { analyzeArray } from "./index.js";

test("int array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        "average": 4,
        "min": 1,
        "max": 8,
        "length": 6
    })
})

test("float array", () => {
    expect(analyzeArray([1.3,8.2,3.3,4.9,2.7,6.8])).toEqual({
        "average": expect.closeTo(4.53, 2),
        "min": 1.3,
        "max": 8.2,
        "length": 6
    })
})

test("one number array", () => {
    expect(analyzeArray([4])).toEqual({
        "average": 4,
        "min": 4,
        "max": 4,
        "length": 1
    });
});

test("empty array", () => {
    expect(() => analyzeArray([])).toThrow("analyzeArray expect a non-empty number array");
});

test("throw error for non number array", () => {
    expect(() => analyzeArray([1, 4, "5"])).toThrow("analyzeArray expects an number array as the input");
}); 

test('throw error for non array input', () => {
    expect(() => analyzeArray(1)).toThrow("analyzeArray expects an array as the input");
});