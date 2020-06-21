// 순차 탐색

let dataList = [10, 2, 5, 1, 3, 7, 6, 4, 8, 9]
console.log(dataList)

function sequencialSearch(dataList, search) {
    for(let i = 0; i < dataList.length - 1; i++) {
        if(dataList[i] === search) {
            return i
        }
    }
}

console.log(sequencial(dataList, 5))