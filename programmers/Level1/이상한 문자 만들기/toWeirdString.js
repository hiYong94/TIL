// 이상한 문자 만들기

function solution(s) {
    let array = s.split(' ')
    let resultArray = new Array()
    for(let i = 0; i < array.length; i++) {
        array[i] = array[i].split('')
        for(let j = 0; j < array[i].length; j++) {
            if(j % 2 === 0) {
                array[i][j] = array[i][j].toUpperCase()
            } else {
                array[i][j] = array[i][j].toLowerCase()
            }
        }
        resultArray.push(array[i].join(''))
    }
    return resultArray.join(' ')
}

// TEST CASE
console.log('1. TEST ==== ', solution('try hello world')) // return 'TrY HeLlO WoRlD'