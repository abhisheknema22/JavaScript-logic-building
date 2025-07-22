// this program finds smallest number from inputs : don't use Math.min(...numArray)

function minimumNumber(a, b, c) {
    return a < b ? a : b < c ? b : c
}

const n1 = 6
const n2 = 5
const n3 = 0.77

const result = minimumNumber(n1, n2, n3)
console.log(`Smallest num: ${result}`);



// what if we have array of numbers...
function arraySmallestNumber(nums) {
    try {
        const numericValues = nums.filter((n) => typeof n === "number")
        // console.log("Numeric value:", numericValues);

        const resultedNumber = numericValues.reduce((acc, curr_val) => {
            if (acc > curr_val) {
                acc = curr_val
            }
            return acc
        })

        return `Smallest number in array: ${resultedNumber}`
    }
    catch (err) {
        console.error(err);
    }
}

const numArray = [5, 2, "", "0.2", 0.4]

const resSmallestNumber = arraySmallestNumber(numArray)
console.log(resSmallestNumber);