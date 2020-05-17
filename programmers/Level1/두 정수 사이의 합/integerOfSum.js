/* 두 정수 사이의 합*/

function integerOfSum(min, max) {
    if(min == max) {
        return false
    }
    
    var swap
    if(min > max) {
        swap = min
        min = max
        max = swap   
    }

    var sum = 0;
    for(var i = min; i <= max; i++) {
        sum += i
    }
    console.log(sum)

    return sum
}

console.log('===== Test Case =====')
console.log('1. TEST ==== ', integerOfSum(3, 5)) // return 12
console.log('2. TEST ==== ', integerOfSum(3, 3)) // return 3
console.log('3. TEST ==== ', integerOfSum(5, 3)) // return 12

// 가우스의 재림 - 알고리즘으로 추가 구현하기