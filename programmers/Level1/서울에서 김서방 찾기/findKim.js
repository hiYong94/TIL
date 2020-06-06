// 서울에서 김서방 찾기

function solution(seoul) {
    let index
    for(let i = 0; i < seoul.length; i++) {
        if(seoul[i] === 'Kim') {
            index = i
            break
        }
    }
    return '김서방은 ' + index +'에 있다'
}

// TEST CASE
console.log('1. TEST ==== ', solution(['Jane', 'Kim'])) // return '김서방은 1에 있다'