/* 짝수와 홀수 */

function solution(num) {
    return num % 2 == 0 ? 'Even' : 'Odd'
}


// TEST CASE
console.log('1. TEST ==== ', solution(3)) // return "Odd"
console.log('2. TEST ==== ', solution(4)) // return "Even"