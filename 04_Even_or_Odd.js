// this program checks if number is even or odd

function tellNumberType(num) {
    try {
        if (typeof num !== "number") {
            return ("Not a valid number")
        }

        // normal way
        // if (num % 2 === 0) {
        //     return ("Even number")
        // }
        // else {
        //     return ("Odd number")
        // }

        // another way
        return num % 2 === 0 ? "Even number" : "Odd number"
    }

    catch (err) {
        console.error(err)
    }
}

const res = tellNumberType(6)
console.log(res);
