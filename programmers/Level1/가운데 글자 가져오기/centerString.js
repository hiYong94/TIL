/* 가운데 글자 가져오기 */

function solution(s) {
    if(s.length % 2 == 0) {
        return s.substring(s.length/2 - 1, s.length/2 + 1)
    } else {
        return s.charAt(s.length/2)
    }
}


// TEST CASE
console.log('1. TEST ==== ', solution("abcde")) // return "c"
console.log('2. TEST ==== ', solution("qwer")) // return "we"
console.log('3. TEST ==== ', solution("")) // return "we"