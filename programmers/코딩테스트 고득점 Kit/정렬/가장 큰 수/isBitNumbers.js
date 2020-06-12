// 가장 큰 수

// 첫번째 풀이
/*
    마지막 0 처리가 미숙하였다..
*/ 
function solution(numbers) {
    if(numbers.map(value => value + '').sort((a, b) => (a + b) - (b + a)).reverse()[0] === '0') {
        return '0'
    }
    return numbers.map(value => value + '').sort((a, b) => (a + b) - (b + a)).reverse().join('')
}

// 두번째 풀이
function solution(numbers) {
    let result = numbers.map(value => value + '').sort((a, b) => (a + b) - (b + a)).reverse().join('')
    return result[0] === '0' ? '0' : result
}

// TEST CASE
console.log('1. TEST ==== ', solution([6, 10, 2])) // return '6210'
console.log('2. TEST ==== ', solution([3, 30, 34, 5, 9])) // return '9534330'
console.log('3. TEST ==== ', solution([0, 0, 0])) // return '0'