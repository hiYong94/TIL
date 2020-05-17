/* 문자열을 정수로 바꾸기 */

function solution(s) {
    var answer = '0'
    
    if(s.length >= 1 || s.length <= 5) {
        answer = Number(s)
    } else {
        console.log('s의 길이가 1 이상 5이하가 아닌 경우')
    }
    
    return answer
}   

console.log('===== Test Case =====')
// console.log(solution('1234'))
// console.log(solution('+1234'))
// console.log(solution('-1234'))
// console.log(solution('01234'))