/* x만큼 간격이 있는 n개의 숫자 */ 

function solution(x, n) {
    if(n < 1000) {
        console.log('n은 1000 이하의 자연수 입니다.')
    }

    let array = []
    for (let i = 1; i <= n; i++) {
        array.push(x * i)
    }

    return array
}

// TEST CASE
console.log('1. TEST ==== ', solution(2, 5)) // return [2,4,6,8,10]
console.log('2. TEST ==== ', solution(4, 3)) // return [4,8,12]
console.log('3. TEST ==== ', solution(-4, 2)) // return [-4, -8]