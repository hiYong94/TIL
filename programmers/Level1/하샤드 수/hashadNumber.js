// 하샤드 수

function solution(x) {
    let target = x.toString()
    let sumTarget = 0
    for (let i = 0; i < target.length; i++) {
        sumTarget += parseInt(target.charAt(i))
    }

    return (x % sumTarget === 0)
}

// TEST CASE
console.log('1. TEST ==== ', solution(10)) // return true
console.log('2. TEST ==== ', solution(12)) // return true
console.log('3. TEST ==== ', solution(11)) // return false
console.log('4. TEST ==== ', solution(13)) // return false