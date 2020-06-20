// 기능개발

function solution(progresses, speeds) {
    let progressesList = progresses.map((value, index) => {
        let sum = value
        let i = 0
        while(sum < 100) {
            sum += speeds[index]
            i++
        }
        return i
    })
    
    let result = []
    let count = 1
    let fixValue = progressesList[0]
    for(let i = 1; i < progressesList.length; i++) {
        if(fixValue >= progressesList[i]) {
            count++
        } else {
            result.push(count)
            count = 1
            fixValue = progressesList[i]
        }

        if(i === progressesList.length - 1) {
            result.push(count)
        }
    }

    return result
}

// TEST CASE
console.log('1. TEST ==== ', solution([93,30,55], [1,30,5] )) // return [2,1]
console.log('2. TEST ==== ', solution([99,99,99,99,99], [3,3,3,3,3])) // return [5]
console.log('3. TEST ==== ', solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5 , 10, 7])) // return [1,2,3]
console.log('4. TEST ==== ', solution([93, 30, 55, 60, 40, 65], [1, 30, 5 , 10, 60, 7])) // return [2,4]