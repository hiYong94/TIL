/* 문자열 내 p와 y의 개수 */ 

function solution(s) {
    if(s < 50) {
        console.log('s의 길이는 50 이하의 자연수 입니다.')
    }

    let targetStr = String(s).toLowerCase()
    let pcout = 0, ycout = 0
    if(!targetStr.includes('p') && !targetStr.includes('y')) {
        return true
    }

    
    for(let i = 0; i < s.length; i++) {
        if(targetStr.charAt(i) === 'p') {
            pcout++
        }

        if(targetStr.charAt(i) === 'y') {
            ycout++
        }
    }

    return (pcout === ycout) ? true : false
}

// TEST CASE
console.log('1. TEST ==== ', solution("pPoooyY")) // return true
console.log('2. TEST ==== ', solution("Pyy")) // return false
console.log('3. TEST ==== ', solution("aaaabb")) // return true