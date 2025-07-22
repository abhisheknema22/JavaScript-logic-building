// this program takes two numbers as input and adds them

function sum(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "one or more value is not a anumber"
    }

    let res = a + b
    return res
}

let result = sum(10, 20);
console.log(result);