// 문자열 내림차순으로 배치하기

// 1번째 풀이
function solution(s) { 
    let array = new Array(), temp = 0
    for(let k = 0; k < s.length; k++) {
        array.push(s.charAt(k))
    }
    
    for(let p = 0; p < array.length; p++) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] < array[i+1]) {
                temp = array[i+1]
                array[i+1] = array[i]
                array[i] = temp
            }
        }
    }

    return array.join('')
}


// 2번째 풀이
function solution(s) { 
    return s.split('').sort().reverse().join('')
}

// 3번째 풀이 quick sort()


// TEST CASE
console.log('1. TEST ==== ', solution('Zbcdefg')) // return 'gfedcbZ'