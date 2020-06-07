// 시저 암호

/*
    어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
    예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다.
    z는 1만큼 밀면 a가 됩니다.
    문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

    -제한 조건
        공백은 아무리 밀어도 공백입니다.
        s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
        s의 길이는 8000이하입니다.
        n은 1 이상, 25이하인 자연수입니다.
*/

// 첫번째 풀이
function solution(s, n) {
    // 대문자 A ~ Z 는 65 ~ 90
    // 소문자 a ~ z 는 97 ~ 122
    // 문자를 한개 추출해서 +1 한후 원래 자리에 replace
    let result = ''
    for(let i = 0; i < s.length; i++) {
        console.log(s.charAt(i), s.charCodeAt(i))
        if(s.charCodeAt(i) === 32) {
            result += ' '
        }
        if(s.charCodeAt(i) === 90) { //대문자는 소문자로
            result += String.fromCharCode(64 + n)
        }
        if(s.charCodeAt(i) === 122) { // 소문자는 대문자로 돌아갑니다.
            result += String.fromCharCode(96 + n)
        }
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) < 90) {
            result += String.fromCharCode(s.charCodeAt(i) + n)
        }
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) < 122) {
            result += String.fromCharCode(s.charCodeAt(i) + n)
        }
    }

    return result
}

// 두번째 풀이
// Test Case 실패 : 6,7,8,10,12
function solution(s, n) {
    // 대문자 A ~ Z 는 65 ~ 90
    // 소문자 a ~ z 는 97 ~ 122

    const result = s.split('').map((value, index, array) => {
        console.log(index, value, value.charCodeAt(), value.charCodeAt() + n)

        if(value.charCodeAt() === 32) {
            return ' '
        }
        // 대문자는 대문자로 Z -> A, 소문자는 소문자로 z -> a
        if(value.charCodeAt() + n > 90 && value.charCodeAt() + n < 97) {
            return String.fromCharCode((((value.charCodeAt() + n) % 65) - 26) + 65)
        }
        if(value.charCodeAt() + n > 122) {
            return String.fromCharCode((((value.charCodeAt() + n) % 97) - 26) + 97)
        }

        return String.fromCharCode(value.charCodeAt() + n)
    }).join('')
    
    return result
}

// TEST CASE
console.log('1. TEST ==== ', solution('AB', 1)) // return 'BC'
console.log('2. TEST ==== ', solution('z', 1)) // return 'a'
console.log('2. TEST ==== ', solution('a B z', 1)) // return 'e F d'