/* 약수의 합*/

function sumOfFactors(n) {
    var resultSum = 0
    if(n >= 0 || n <= 3000) {
        for(var i=1; i<=n; i++) {
            if(n % i == 0) {
                resultSum += i
            }
        }
    }

    return resultSum
}

console.log('===== Test Case =====')
console.log('1. TEST ==== ', sumOfFactors(12)) // return 28
console.log('1. TEST ==== ', sumOfFactors(5)) // return 6