// implemente aqui as funções de teste
// Kata 1
function testReverseString1() {
    let result = reverseString('hello')
    console.assert(result === 'olleh')
}

function testReverseString2() {
    let result = reverseString('Hello There!')
    console.assert(result === '!erehT olleH')
}

function reverseString(string) {
    return string.split("").reverse().join("")
}

testReverseString1()
testReverseString2()

// Kata 2
function testReverseSentence1() {
    let result = reverseSentence('Essa frase é um teste')
    console.assert(result === 'teste um é frase Essa')
}

function testReverseSentence2() {
    let result = reverseSentence('Não sei o que colocar')
    console.assert(result === 'colocar que o sei Não')
}

function reverseSentence(string) {
    return string.split(" ").reverse().join(" ")
}

testReverseSentence1()
testReverseSentence2()

// Kata 3
function testMinimumValue1() {
    let result = minimunValue([3,5,8,2])
    console.assert(result === 2)
}

function testMinimumValue2() {
    let result = minimunValue([24,4,73,-501])
    console.assert(result === -501)
}

function minimunValue(arr) {
    return Math.min(...arr)
}

testMinimumValue1()
testMinimumValue2()

// Kata 4
function testMaximumValue1() {
    let result = maximumValue([5,10,2,28])
    console.assert(result === 28)
}

function testMaximumValue2() {
    let result = maximumValue([8,10,56,1000])
    console.assert(result === 1000)
}

function maximumValue(arr) {
    return Math.max(...arr)
}

testMaximumValue1()
testMaximumValue2()

// Kata 5
function testCalculateRemainder1() {
    let result = calculateRemainder(5,2)
    console.assert(result === 1)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(10,2)
    console.assert(result === 0)
}

function calculateRemainder(numerador, denominador) {
    return numerador % denominador
}

testCalculateRemainder1()
testCalculateRemainder2()

// Kata 6
function testDistinctValues1() {
    let result = JSON.stringify(distinctValues([1,2,3,4,4,5,9,9]))
    let expected = JSON.stringify([1,2,3,4,5,9])
    console.assert(result === expected)
}

function testDistinctValues2() {
    let result = JSON.stringify(distinctValues([55,22,3,3,-2,2,0]))
    let expected = JSON.stringify([55,22,3,-2,2,0])
    console.assert(result === expected)
}

function distinctValues(arr) {
    return arr.filter((cur,idx,src) => src.indexOf(cur) === idx)
}

testDistinctValues1()
testDistinctValues2()

// Kata 7
function testCountValues1() {
    let result = JSON.stringify(countValues([1,2,3,4,4,5,9,9,9]))
    let expected = JSON.stringify([[1,1],[2,1],[3,1],[4,2],[5,1],[9,3]])
    console.assert(result === expected)
}

function testCountValues2() {
    let result = JSON.stringify(countValues([55,33,-2,-2,0,0,0,0,5,3]))
    let expected = JSON.stringify( [[55,1],[33,1],[-2,2],[0,4],[5,1],[3,1]])
    console.assert(result === expected)
}

function countValues(arr) {
    let output = arr.map((cur,idx,src) => {
        if (src.indexOf(cur) === idx) {
            let counter = 0
            for (let n of arr) {
                if (n === cur) counter++
            }
            return [cur,counter]
        }
    })
    return output.filter(cur => cur)
}

testCountValues1()
testCountValues2()

// Kata 8
function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})
    console.assert(result === -3)
}

function testEvaluateExpression2() {
    let result = evaluateExpression("( c * j ) - ( d / c )", {j: 3, c: 9, d: 81 })
    console.assert(result === 18)
}

function evaluateExpression(expression,variables) {
   let output = expression.replace(/\w/g,getVariableValue)

    function getVariableValue(match) {
        return variables[match]
    }
    return eval(output)
}

testEvaluateExpression1()
testEvaluateExpression2()
