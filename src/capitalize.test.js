import { capitalize } from "./index.js";

test('capitalize word', () => {
    expect(capitalize("word")).toBe("word");
});