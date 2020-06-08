// 시저 암호

// 첫번째 풀이
function solution(s, n) {
    let result = ''
    for(let i = 0; i < s.length; i++) {
        console.log(s.charAt(i), s.charCodeAt(i))
        if(s.charCodeAt(i) === 32) {
            result += ' '
        }
        if(s.charCodeAt(i) === 90) {
            result += String.fromCharCode(64 + n)
        }
        if(s.charCodeAt(i) === 122) {
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
function solution(s, n) {
    const result = s.split('').map((value, index, array) => {
        const charCodeAtWord = value.charCodeAt()

        if(charCodeAtWord === 32) {
            return ' '
        }

        if(charCodeAtWord >= 65 && charCodeAtWord <= 90) {
            if(charCodeAtWord + n > 90) {
                return String.fromCharCode((((charCodeAtWord + n) % 65) - 26) + 65)
            }
            return String.fromCharCode(charCodeAtWord + n)
        }
        
        if(charCodeAtWord >= 97 && charCodeAtWord <= 122) {
            if(charCodeAtWord + n > 122) {
                return String.fromCharCode((((charCodeAtWord + n) % 97) - 26) + 97)
            }
            return String.fromCharCode(charCodeAtWord + n)
        }
    }).join('')
    
    return result
}

// TEST CASE
console.log('1. TEST ==== ', solution('AB', 1)) // return 'BC'
console.log('2. TEST ==== ', solution('z', 1)) // return 'a'
console.log('3. TEST ==== ', solution('a B z', 4)) // return 'e F d'
console.log('4. TEST ==== ', solution('az AZ', 1)) // return 'ba BA'