function capitalize(string){
    if(typeof string !== "string")
        throw new Error("capitalize expect a string");

    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    if(typeof string !== "string") throw new Error("reverseString expects a string");

    return string.split("").reverse().join("");
}

const calculator = {
    add: function(a, b) {
        if(arguments.length !== 2) throw new Error("The function expects precisely two numbers");
        if(typeof a !== "number" || typeof b !== "number") throw new Error("Both arguments should be numbers");

        return a + b;
    },
    subtract: function (a, b) {
        if(arguments.length !== 2) throw new Error("The function expects precisely two numbers");
        if(typeof a !== "number" || typeof b !== "number") throw new Error("Both arguments should be numbers");

        return a - b;
    },
    multiply: function(a, b){
        if(arguments.length !== 2) throw new Error("The function expects precisely two numbers");
        if(typeof a !== "number" || typeof b !== "number") throw new Error("Both arguments should be numbers");

        return a * b;
    },
    divide: function(a, b){
        if(arguments.length !== 2) throw new Error("The function expects precisely two numbers");
        if(b === 0) throw new Error("The second number cannot be 0");
        if(typeof a !== "number" || typeof b !== "number") throw new Error("Both arguments should be numbers");

        return a / b;
    },
};

function caesarCipher(string){

}

function analyzeArray(numArr){

}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };