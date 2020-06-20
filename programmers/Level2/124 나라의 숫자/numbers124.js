// 124 나라의 숫자

function solution(n) {
    let array = ['4', '1', '2']
    let result = ''
    let remainder = 0

    while(n > 0) {
        remainder = n % 3
        n = (parseInt(n / 3))
        if(remainder === 0) {
            n = n - 1
        }
        result = array[remainder] + result
    }
    
    return result
}

// TEST CASE
console.log('1. TEST ==== ', solution(1)) // return 1
console.log('2. TEST ==== ', solution(2)) // return 2
console.log('3. TEST ==== ', solution(3)) // return 4
console.log('4. TEST ==== ', solution(4)) // return 11

console.log('5. TEST ==== ', solution(6)) // return 14
console.log('6. TEST ==== ', solution(7)) // return 21
console.log('7. TEST ==== ', solution(8)) // return 22
console.log('8. TEST ==== ', solution(9)) // return 24
console.log('9. TEST ==== ', solution(10)) // return 41