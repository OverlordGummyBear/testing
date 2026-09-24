function capitalize(string){
    if(typeof string !== "string")
        throw new Error("capitalize expect a string");

    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){

}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

function caesarCipher(string){

}

function analyzeArray(numArr){

}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };