// implemente aqui as funções de teste
    
// 1 -

const reverseString = (stc) => {
    let reverse = []
    for (let i = stc.length; i >= 0; i--) {
        reverse.push(stc[i])
    }
    return reverse.join('')
}

const testeReverseString1 = () => {
    let result = reverseString("Hiran Oliveira")
    let expected = "arievilO nariH"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testeReverseString2 = () => {
    let result = reverseString("Kenzie Academy Brasil")
    let expected = "lisarB ymedacA eizneK"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

// 2 - 

const reverseSentence = (stc) => {
    let reverse = []
    let stc2 = stc.split(' ')
    for (let i = stc2.length; i >= 0; i--){
        reverse.push(stc2[i])
    }
    return reverse.join(' ')
}

const testeReverseSentence1 = () => {
    let result = reverseSentence("Bob likes dogs")
    let expected = "dogs likes Bob"
    console.assert(result === expected, `esperado: ${expected}, obtido ${result}`)
}

const testeReverseSentence2 = () => {
    let result = reverseSentence("We need more bread")
    let expected = "bread more need We"
    console.assert(result === expected, `esperado: ${expected}, obtido ${result}`)
}

// 3 - 

const minimumValue = (arr) => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}

const testMinimumValue1 = () => {
    let result = minimumValue(2,3,1,4)
    let expected = 1
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

const testMinimumValue2 = () => {
    let result = minimumValue(513,869,1247,58)
    let expected = 58
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

// 4 - 

const maximumValue = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

const testMaximumValue1 = () => {
    let result = maximumValue(2,3,1,4)
    let expected = 1
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

const testMaximumValue2 = () => {
    let result = maximumValue(513,869,1247,58)
    let expected = 58
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

// 5 - (a, b)

const calculateRemainder = (a,b) => {
    let result = (a % b)

    return result
}

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(8,2)
    let expected = 0
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(11,3)
    let expected = 2
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

// 6 - 

const distinctValues = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.includes(arr[i]) === false) {
            result.push(arr[i])
        }
    }
    return result
}

const testDistinctValues1 = () => {
    let result = distinctValues("1 3 5 3 7 3 1 1 5")
    let expected = "1 3 5 7"
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

const testDistinctValues2 = () => {
    let result = distinctValues("1 1 1 1 2 1 1 1")
    let expected = "1 2"
    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}

// 7 - 
let array = [1, 3, 5, 3, 7, 3, 1, 1, 5]
const countValues = (arr) => {
    let result = []
    let arr2 = arr.sort((a,b) => a - b)
    let count = 0
    for (let i = 0; i < arr2.length; i++) {
        if (result.includes(arr2[i]) === false) {
           result.push(arr2[i])
        } else if(arr2[i] === arr2[i+1]) {
            
            // = arr2[i]+(count+1)
        }
    }
    // console.log(count)
    // console.log(result)
    return result
}

const testCountValues1 = () => {
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert
}

const testCountValues2 = () => {
    let result = countValues("1 2 2 45 8 1 30 2")
    let expected = "1(2) 2(3) 8(1) 30(1) 45(1)"
    console.assert
}
// "1 3 5 3 7 3 1 1 5" retorna "1(3) 3(3) 5(2) 7(1)"

// 8 - 

function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testEvaluateExpression2() {
    let result = evaluateExpression("a - (b * c) - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -34
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }