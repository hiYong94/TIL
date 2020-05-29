/* 행렬의 덧셈 */ 

function solution(array1, array2) {
    let newArray = new Array(array1.length)
    for (let i = 0; i < array1.length; i++) {
        newArray[i] = new Array(array1[0].length)
    }
    
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[0].length; j++) {
            newArray[i][j] = array1[i][j] + array2[i][j]
        }
    }

    return newArray
}

// TEST CASE
console.log('1. TEST ==== ', solution([[1,2],[2,3]], [[3,4],[5,6]])) // return [[4,6],[7,9]]
console.log('2. TEST ==== ', solution([[1],[2]], [[3],[4]])) // return [[4],[6]]