// 수박수박수박수박수박수?

function solution(n) {
    let array = ['수', '박']
    let resultString = ''
    for(let i = 0; i < n; i++) {
        resultString += array[i % 2]
    }
    
    return resultString
}

// TEST CASE
console.log('1. TEST ==== ', solution(3)) // return '수박수'
console.log('2. TEST ==== ', solution(4)) // return '수박수박'