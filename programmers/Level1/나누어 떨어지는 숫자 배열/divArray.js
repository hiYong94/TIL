// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
    const result = arr.map((value, index, array) => {
        if(value % divisor === 0) {
            return value
        }
    }).filter(value => value !== undefined).sort((a, b) => a - b)
    
    if(result.length === 0) {
        return [-1]
    }

    return result
}

// TEST CASE
console.log('1. TEST ==== ', solution([5, 9, 7, 10], 5)) // return [5, 10]
console.log('2. TEST ==== ', solution([2, 36, 1, 3], 1)) // return [1, 2, 3, 36]
console.log('3. TEST ==== ', solution([3, 2, 6], 10)) // return [-1]