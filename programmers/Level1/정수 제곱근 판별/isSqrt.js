/* 정수 제곱근 판별 */

function isSqrt(n) {
    if(Math.sqrt(n) % 1 !== 0) {
        return -1
    }

    if(n % Math.sqrt(n) == 0) {
        return Math.pow(Math.sqrt(n) + 1, 2)
    }
}

// TEST CASE
console.log('1. TEST ==== ', isSqrt(121)) // return 144
console.log('1. TEST ==== ', isSqrt(3)) // return -1