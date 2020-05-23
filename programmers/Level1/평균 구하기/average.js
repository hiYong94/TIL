/* 평균 구하기 */ 

function average(array) {
    if(array.length < 1 || array.length > 100) {
        return
    }
    
    let sum = 0
    array.forEach(value => sum += value)
    return sum / array.length
}

// ==>> array.reduce() refactor
function average(array) {
    if(array.length < 1 || array.length > 100) {
        return
    }
    
    const result = array.reduce((pre, cur) => pre + cur)
    return result / array.length
}

// TEST CASE
console.log('1. TEST ==== ', solution([1,2,3,4])) // return 2.5
console.log('2. TEST ==== ', solution([5,5])) // return 5