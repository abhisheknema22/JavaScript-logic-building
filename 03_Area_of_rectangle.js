// this program finds area of rectange if arguments are numbers

const length = 10
const width = -10

function rectangleArea(l, w) {

    try {
        if (typeof l !== "number" || typeof w !== "number") {
            throw new Error("one or more value in not a number")
        }

        if (length < 0 || width < 0) {
            throw new RangeError("length or width can't be zero or negative")
        }

        return (`area of rectangle: ${l * w}`)
    }

    catch (err) {
        return (err)
    }

}

const result = rectangleArea(length, width)
console.log(result);
