// 핸드폰 번호 가리기

function solution(phoneNumber) {
    let phoneNumberArray = phoneNumber.split('')
    for(let i = 0; i < phoneNumberArray.length - 4; i++) {
        phoneNumberArray[i] = phoneNumber[i].replace(phoneNumber[i], '*')
    }

    return phoneNumberArray.join('')
}


// TEST CASE
console.log('1. TEST ==== ', solution('01033334444')) // return '*******4444'
console.log('12. TEST ==== ', solution('027778888')) // return '*****8888'