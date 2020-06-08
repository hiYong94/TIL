// 문자열 내 마음대로 정렬하기

function solution(array, num) {
    const sort = array.sort((a, b) => {
        if(a[num] > b[num]) {
            return 1
        }
        if(a[num] < b[num]) {
            return -1
        }

        if(a[num] === b[num]) {
            if(a > b) {
                return 1
            }
            if(a < b) {
                return -1
            }
        }
    })

    return sort
}

// TEST CASE
console.log('1. TEST ==== ', solution(['sun', 'bed', 'car'], 1)) // return ['car', 'bed', 'sun']
console.log('2. TEST ==== ', solution(['abce', 'abcd', 'cdx'], 2)) // return ['abcd', 'abce', 'cdx']
console.log('3. TEST ==== ', solution(['abzcd','cdzab', 'bbzaa'], 2)) // return ['abzcd', 'bbzaa', 'cdzab']