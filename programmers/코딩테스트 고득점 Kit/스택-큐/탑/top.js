// 탑

function solution(heights) {
    let resultArray = [] // 수신탑
    for(let i = heights.length - 1; i >= 0; i--) {
        if(i === 0) {
            resultArray.push(0)
        }
        for(let j = i-1; j >= 0; j--) {
            if(heights[i] < heights[j]) {
                resultArray.push(j + 1)
                break
            }
            if(j === 0) {
                resultArray.push(0)
            }
        }
    }
    return resultArray.reverse()
}

// TEST CASE
console.log('1. TEST ==== ', solution([6,9,5,7,4])) // return [0,0,2,2,4]
console.log('2. TEST ==== ', solution([3,9,9,3,5,7,2])) // return [0,0,0,3,3,3,6]
console.log('3. TEST ==== ', solution([1,5,3,6,7,6,5])) // return [0,0,2,0,0,5,6]
console.log('4. TEST ==== ', solution([5, 3, 1, 2, 3])) // return [0,1,2,2,1]
