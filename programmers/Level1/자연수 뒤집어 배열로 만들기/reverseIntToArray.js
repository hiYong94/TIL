// 자연수 뒤집어 배열로 만들기

function solution(n) {
    let str = n.toString()
    let resultArray = []
    for(let i = 0; i < str.length; i++) {
        resultArray.unshift(parseInt(str[i]))
    }

    return resultArray
}


// TEST CASE
console.log('1. TEST ==== ', solution(12345)) // return [5,4,3,2,1]
	