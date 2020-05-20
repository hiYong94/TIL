/* 같은 숫자는 싫어 */

function solution(array){
    const resultArray = array.filter((value, index) => {
        return value != array[index-1]
    });

    return resultArray
}


// TEST CASE
console.log('1. TEST ==== ', solution([1, 1, 3, 3, 0, 1, 1])) // return [1, 3, 0, 1]
console.log('2. TEST ==== ', solution([4, 4, 4, 3, 3])) // return [4, 3]