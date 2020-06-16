// H-index

/*
    문제를 쉽게 이해해야.. 풀이도 더 좋게 다가갈수 있는 것 같다.
*/

// 첫번째 풀이
function solution(citations) {
    let citationsSort = citations.sort((a, b) => b-a)
    if(citationsSort.length === 1) {
        return citationsSort[0]
    }
    
    let compareArray = []
    let resultValue = 0
    let result = []
    for (let i = 0; i < citationsSort.length; i++) {
        compareArray.push(citationsSort[i])
        if(citationsSort[i] === compareArray[i]) {
            resultValue = compareArray[i]
        } else if (testArray.length === citationsSort.length) {
            return resultValue
        }
        
        if(i < citationsSort[i]) {
            result.push(i)
        }
    }

    return result.length
}

// TEST CASE
console.log('1. TEST ==== ', solution([3, 0, 6, 1, 5])) // return 3
console.log('2. TEST ==== ', solution([1, 7, 0, 1, 6, 4])) // return 3
console.log('3. TEST ==== ', solution([0])) // return 0
console.log('4. TEST ==== ', solution([7])) // return 7
console.log('5. TEST ==== ', solution([2, 2, 2, 2])) // return 2
console.log('6. TEST ==== ', solution([1, 1, 1])) // return 1
console.log('7. TEST ==== ', solution([0, 0, 0])) // return 0