// 다른 사람 풀이
function solution(arrayA, arrayB) {
    const aResult = getAnswer(arrayA, arrayB)
    const bResult = getAnswer(arrayB, arrayA)

    return aResult > bResult ? aResult : bResult
}

function getAnswer (A, B) {
    A.sort((a, b) => a - b)
    for (let i = A[0]; i > 1; i--) {
        if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) return i
    }
    return 0
}

console.log(solution([10, 17], [5, 20]))
console.log(solution([10, 20], [5, 17]))
console.log(solution([14, 35, 119], [18, 30, 102]))