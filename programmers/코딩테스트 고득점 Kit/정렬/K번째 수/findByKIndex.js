// K번째 수

function solution(array, commands) {
    let result = []
    for(let i = 0; i < commands.length; i++) {
        result.push(array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
            return a - b
        }).find((value, index) => {
            if(index === commands[i][2] - 1) {
                return value
            }
        }))
    }
    
    return result
}

// TEST CASE
console.log('1. TEST ==== ', solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) // return true[5, 6, 3]