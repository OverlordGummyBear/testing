# JavaScript Testing Practice

A small collection of utility functions, each covered by unit tests written using [Jest](https://jestjs.io/).

## Functions

* `capitalize(str)`: returns the string with its first character capitalized
* `reverseString(str)`: returns the string reversed
* `calculator`: an object with `add`, `subtract`, `multiply` and `divide`, each taking exactly two numbers (`divide` throws when dividing by 0)
* `caesarCipher(str, shiftFactor)`: shifts each English letter by the given amount, wrapping around from `z` to `a` and preserving case and punctuation
* `analyzeArray(arr)`: returns an object with the `average`, `min`, `max` and `length` of an array of numbers

Functions validate their input and throw an error when given the wrong type or number of arguments.

## Getting Started

Clone the repo and install dependencies:
```bash
git clone https://github.com/OverlordGummyBear/testing.git
cd testing
npm install
```

## Running the Tests

```bash
npm test
```

## Notes

* Tests live next to the source in `src/` and follow the `*.test.js` naming pattern.
* Babel (`@babel/preset-env`) is configured so Jest can use ES module `import`/`export` syntax.