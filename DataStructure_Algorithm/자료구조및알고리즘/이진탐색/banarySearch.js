// 이진 탐색 구현
// target number에 대해서 빠르게 탐색하기
/*
    1. 오름차순으로 되어있는 것이 핵심
    2. 중앙 요소를 찾는다
    3. 중앙 요소와 목표 값을 비교한다.
    4. 값이 작다면 왼쪽, 크다면 오른쪽으로 탐색한다
*/

/**
 * 분할 정복 알고리즘 (Divide and Conquerr)
 * Divide : 문제를 하나 또는 둘 이상으로 나눈다.
 * Conquer: 나눠진 문제가 충분히 작고, 해결이 가능하다면 해결하고, 그렇지 않다면 다시 나눈다.
 * 
 * 이진 탐색
 * Divide : 리스트를 두 개의 서브 리스트로 나눈다.
 * Conquer: 1. 검색할 숫자 (Search) > 중간 값이면, 뒷 부분의 서브리스트에서 검색할 숫자를 찾는다.
 *          2. 검색할 숫자 (Search) < 중간 값이면, 앞 부분의 서비리스트에서 검색할 숫자를 찾는다.
 */

function binarySearch(data, search) {
    console.log(data)
    // 전체 데이터에서 검색할 숫자가 없을수도있으니 확인
    if(data.length === 1 && search === data[0]) {
        return true
    }
    
    // 데이터가 없다면
    if(data.length === 1 && search !== data[0]) {
        return false
    }

    let midValue = parseInt(data.length / 2)   
    
    // 검색 값과 데이터의 중간 값이 같다면
    if(search === data[midValue]) {
        return true
    }
    
    // 값의 좌측과 우측을 비교
    if(search > data[midValue]) {
        return binarySearch(data.splice(midValue, data.length), search)
    } else {
        return binarySearch(data.splice(0, midValue), search)
    }
}

// 출처 : https://im-first-rate.tistory.com/86
function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomArray(min, max, count) {
    if (max - min + 1 < count) return;
    var rst = [];    
    while (1) {
        var index = getRandom(min, max);
        if (rst.indexOf(index) > -1) {
            continue;
        }
        rst.push(index);
     if (rst.length == count) {
            break;
        }
    }
 
    return rst.sort(function (a, b) {
        return a - b;
    });
}

let randomArray = getRandomArray(1, 100, 10)
console.log(binarySearch(randomArray, 7))