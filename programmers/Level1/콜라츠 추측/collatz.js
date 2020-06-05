// 콜라츠 추측

function solution(num) {
    let i = 0
    
    while (i <= 500) {
        if(i === 500) {
            return -1
        }

        if(num === 1) {
            return i
        }

        num = (num % 2 === 0) ? num = num / 2 : (num * 3) + 1
        i++
    }
}

// TEST CASE
console.log('1. TEST ==== ', solution(6)) // return 8
console.log('2. TEST ==== ', solution(16)) // return 4
console.log('3. TEST ==== ', solution(626331)) // return -1