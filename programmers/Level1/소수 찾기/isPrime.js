/* 소수 찾기 */

function findPrimeNumber(target) {
    if(target === 1) {
        console.log('1은 소수가 아닙니다.')
    }

    let count = 0
    for(let i=2; i<=target; i++) {
        for(let j=2; j<=i; j++) {
            if(i === j) {
                count++
            }

            if(i % j == 0) { 
                break;
            }
        }
    }
    
    return count
}

// TEST CASE
console.log('1. TEST ==== ', findPrimeNumber(2)) // return 4
console.log('2. TEST ==== ', findPrimeNumber(5)) // return 3

/* 
    테스트 10, 11, 12
    효율성 테스트 시간초과

    ==> 골드바흐의 추측, 에라토스테네스의 체 재풀이
*/