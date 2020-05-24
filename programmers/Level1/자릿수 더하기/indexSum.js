/* 자릿수 더하기 */

function solution(n) {
    if(n > 100000000) {
        return
    }

    let sum = 0
    let str = String(n)
    
    for(let i=0; i<str.length; i++) {
        sum += parseInt(str[i])
    }

    return sum
}


// TEST CASE
console.log('1. TEST ==== ', solution(123)) // return 6
console.log('2. TEST ==== ', solution(987)) // return 24
console.log('2. TEST ==== ', solution(1)) // return 24

// 최초 풀이 - test case 실패
function solution(n) {
    if(n > 100000000) {
        return
    }
    let sum = 0
    let num = n.toString()

    for(let i=1; i<=num.length; i++) {
        let value = num / (Math.pow(10, i))
        let pos = value.toString().indexOf('.')
        sum += Number.parseInt(value.toString().substring(pos+1, pos+2))
    }

    return sum
}