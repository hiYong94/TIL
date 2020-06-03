/*
    정수 내림차순으로 배치하기
 */

function solution(n) {
    let array = []
    let str = n.toString()
    for(let k = 0; k < str.length; k++) {
        array.push(parseInt(str[k]))
    }

    let temp
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] < array[j+1]) {
                temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
        }
    }
    
    return parseInt(array.join(''))
}

// TEST CASE
console.log('1. TEST ==== ', solution(118372)) // return 873211