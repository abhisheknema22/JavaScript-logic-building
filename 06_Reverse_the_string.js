function reverseTheString(str) {

    let arrayOfString = [...str]


    // approach 1: using for loop

    // for (let i = 0; i < arrayOfString.length; i++) {
    //     reversedArray.unshift(arrayOfString[i])
    // }
    // const resultedData = reversedArray

    // approach 2: using map() method

    // let reversedArray = []
    // let mappedArr = arrayOfString.map((elm) => reversedArray.unshift(elm))
    // const resultedData = reversedArray
    // return resultedData.join("")  

    // approach 3: using reverse() method

    const reversedArray = arrayOfString.reverse()
    return reversedArray.join("")
}

let myStr = "Raju pandit"
const resultedString = reverseTheString(myStr)
console.log(resultedString);

// ------------------------------------
// another approach without using array

function stringReversal(str) {
    let resultedString = ""

    for (let i = str.length - 1; i >= 0; i--) {
        resultedString = resultedString + str[i]
    }

    return resultedString
}

const str = "My array"
let result = stringReversal(str)
console.log(result);
