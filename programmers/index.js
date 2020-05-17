const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
    console.log('Coding-Test TIL express Server runngint: port: 3000')
})

/*
    - 문제 설명
        배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
        이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
        단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
        
        예를 들면,
        arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
        arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
        배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

    - 제한사항
        배열 arr의 크기 : 1,000,000 이하의 자연수
        배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
*/

function solution(array){
    if(array.length > 1000000) {
        console.log("Array의 크기가 1,000,000 이하의 자연수가 아닙니다.")
    }
    
    // 스택을 활용
    var resultArray = new Array()
    for(var i=0; i<array.length-1; i++) {
        console.log(array, array[i], array[i+1])
        
    }

    return resultArray
}

// console.log('===== Test Case =====')
console.log('1. TEST ==== ', solution([1, 1, 3, 3, 0, 1, 1])) // return [1, 3, 0, 1]
// console.log('2. TEST ==== ', solution([4, 4, 4, 3, 3])) // return [4, 3]



// array.forEach((item, index, array) => {
//     if(array[index] == array[index+1]) {
//         console.log("index", index)
//         console.log("array pop전", array)
//         resultArray.push(array[index])
//         console.log("array pop후", array)
//     } else {
//         resultArray.push(item)
//     }
// })








// function solution(array){
//     if(array.length > 1000000) {
//         console.log("Array의 크기가 1,000,000 이하의 자연수가 아닙니다.")
//     }
    
//     //원소의 바로 뒤를 비교
//     //비교 값이 같으면 index push
//     //값이 한개면 push
//     //다른 원소까지 가서 다시 비교
//     var resultArray = new Array()
//     for(var i=0; i<array.length; i++) {
//         console.log(array[i], array[i+1])
//         if(array[i] == array[i+1]) {
//             resultArray.push(array[i])
//         } 
//         if(array[i] != array[i-1] && array[i] != array[i+1]) {
//             resultArray.push(array[i])
//         }
//     }

//     return resultArray
// }

// function loop(n) {
    
//     return n
// }