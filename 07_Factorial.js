// finding factorail of input value

function findingFactorial(params) {
    try {
        if (typeof params !== "number") {
            throw new Error("not a valid number")
        }

        if (params < 0) {
            throw new Error("please provide a positive number")
        }

        // approach 1 : my first try
        // let res = 1

        // for (let i = params; i >= 0; i--) {
        //     if (i === 0 || i === 1) {
        //         return `Factorial of ${params}: ${res}`
        //     }
        //     else {
        //         res = res * i
        //     }
        // }

        // approach 2 : optimized way
        // let res = 1

        // for (let i = 1; i <= params; i++) {
        //     res = res * i
        // }
        // return (`Factorial of ${params}: ${res}`)

        // approach 3: recursion way
        if (params === 0 || params === 1) {
            return 1
        }
        else {
            return params * findingFactorial(params - 1)
        }

    }

    catch (err) {
        return (`${err.name}: ${err.message}`)
    }
}

const value = 3

const result = findingFactorial(value)
console.log(result);
