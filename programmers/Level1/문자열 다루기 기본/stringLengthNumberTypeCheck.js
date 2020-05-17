/* 문자열 다루기 기본 */

function stringLengthNumberTypeCheck(target) {
    if(target.length == 4 || target.length == 6) {
        if (Number.parseInt(target) != target) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}


console.log('===== Test Case =====')
// console.log('1. TEST ==== ', stringLengthNumberTypeCheck('a1234')) // return false
// console.log('2. TEST ==== ', stringLengthNumberTypeCheck('1234')) // return true
// console.log('3. TEST ==== ', stringLengthNumberTypeCheck('a234')) // return false
// console.log('4. TEST ==== ', stringLengthNumberTypeCheck('456p')) // return false
// console.log('5. TEST ==== ', stringLengthNumberTypeCheck('123456')) // return true
// console.log('5. TEST ==== ', stringLengthNumberTypeCheck('12356')) // return false