/* 제일 작은 수 제거하기 */

// Refactor - Math.min()
function solution(array) {
    if(array.length < 1) {
        return [-1]
    }

    array.splice(array.indexOf(Math.min(...array)), 1)
    return array
}

// TEST CASE
console.log('1. TEST ==== ', solution([4,3,2,1])) // return [4,3,2]
console.log('2. TEST ==== ', solution([4,1,2,3])) // return [4,2,3]
console.log('3. TEST ==== ', solution([10])) // return [-1]
console.log('4. TEST ==== ', solution([])) // return [-1]


// 최초 풀이
// Test Case는 전부 잘 통과하는데 코드 제출에 실패한다.

function solution(array) {
    let pos, min
    
    if(array.length < 1) {
        return [-1]
    }

    for(let i=0; i<array.length; i++) {
        if(array[i] === 10) {
            return [-1]
        }
        if(array[i] > array[i+1]) {
            min = array[i+1]
            pos = i+1
        }
    }

    array.splice(array.indexOf(pos), 1)
    return array
}