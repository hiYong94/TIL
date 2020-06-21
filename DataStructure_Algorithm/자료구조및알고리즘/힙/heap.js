// 자료구조 힙 구현하기  (Heap)

class Heap {
    constructor() {
        //0은 0으로 가장 루트노드는 1로 채울것
        this._array = [0]
    }
    // 부모인덱스 (자식노드 / 2) 몫
    
    // 노드가 상위 노드보다 커서 바꿔야하거나 이미 노드가 루트노드라서 바꿀필요가 없던지 판별
    moveUp(insertedIdx) {
        if(insertedIdx <= 1) {
            return false
        }
        let parentIdx = parseInt(insertedIdx / 2)
        if(this._array[insertedIdx] > this._array[parentIdx]) {
            // 바꾸고 
            return true
        } else {
            return false
        }
    }

    // 데이터 추가
    insert(data) {
        this._array.push(data) // 맨 마지막에 추가

        let insertedIdx = this._array.length - 1 // 가장 마지막에 삽입된 index
        
        // 부모노드가 자식노드보다 작으면 바꿔야함
        // => 부모노드가 더 크거나 위치가 root일때까지
        while(this.moveUp(insertedIdx)) {
            let parentIdx = parseInt(insertedIdx / 2)
            let temp = 0
            // 부모랑 비교해서 삽입된 데이터가 올라가야한다면 비교해서 스왑
            temp = this._array[insertedIdx]
            this._array[insertedIdx] = this._array[parentIdx]
            this._array[parentIdx] = temp
            
            insertedIdx = parentIdx
        }

        return true
    }

    moveDown(popedIdx) {    
        let leftChildPopedIdx = popedIdx * 2 // 왼쪽자식 (부모인덱스 * 2)
        let rigthChildPopedIdx = (popedIdx * 2) + 1 // 오른쪽자식 (부모인덱스 * 2 + 1)

        // case1: 왼쪽 자식 노드도 없을 때
        if(leftChildPopedIdx >= this._array.length) {
            return false
        }

        // case2: 오른쪽 자식 노드만 없을 때(왼쪽 자식 노드만 존재)
        if(rigthChildPopedIdx >= this._array.length.length) {
            // 자식 노드가 더 크면 변경해야함
            if(this._array[popedIdx] < this._array[leftChildPopedIdx]) {
                return true
            } else {
                return false
            }
        }
        
        // case3: 왼쪽, 오른쪽 자식 노드 모두 있을 때
        if(this._array[leftChildPopedIdx] > this._array[rigthChildPopedIdx]) {
            // 왼쪽이 부모보다 더 크다면 변경
            if(this._array[popedIdx] < this._array[leftChildPopedIdx]) {
                return true
            } else {
                return false
            }
        } else {
            if(this._array[popedIdx] < this._array[rigthChildPopedIdx]) {
                return true
            } else {
                return false
            }
        }
    }

    // 데이터 삭제
    pop(data) {
        let returnedData = this._array[1] // 따로 삭제하지 않고 자식노드로 값을 덮어씌우면됌
        
        this._array[1] = this._array[this._array.length - 1] // 마지막 값을 맨 루트 값으로 변경함
        this._array.splice(this._array.length - 1, 1) // 맨마지막 노드의 값은 필요 없으므로 삭제
        
        let popedIdx = 1
        while(this.moveDown(popedIdx)) {
            let leftChildPopedIdx = popedIdx * 2 // 왼쪽자식 (부모인덱스 * 2)
            let rigthChildPopedIdx = (popedIdx * 2) + 1 // 오른쪽자식 (부모인덱스 * 2 + 1)

            // case2: 오른쪽 자식 노드만 없을 때(왼쪽 자식 노드만 존재)
            if(rigthChildPopedIdx >= this._array.length.length) {
                // 자식 노드가 더 크면 변경해야함
                if(this._array[popedIdx] < this._array[leftChildPopedIdx]) {
                    let temp = 0
                    temp = this._array[popedIdx]
                    this._array[popedIdx] = this._array[leftChildPopedIdx]
                    this._array[leftChildPopedIdx] = temp

                    popedIdx = leftChildPopedIdx
                }
            }
            
            // case3: 왼쪽, 오른쪽 자식 노드 모두 있을 때
            if(this._array[leftChildPopedIdx] > this._array[rigthChildPopedIdx]) {
                // 왼쪽이 부모보다 더 크다면 변경
                if(this._array[popedIdx] < this._array[leftChildPopedIdx]) {
                    let temp = 0
                    temp = this._array[popedIdx]
                    this._array[popedIdx] = this._array[leftChildPopedIdx]
                    this._array[leftChildPopedIdx] = temp

                    popedIdx = leftChildPopedIdx
                }
            } else {
                if(this._array[popedIdx] < this._array[rigthChildPopedIdx]) {
                    let temp = 0
                    temp = this._array[popedIdx]
                    this._array[popedIdx] = this._array[rigthChildPopedIdx]
                    this._array[rigthChildPopedIdx] = temp

                    popedIdx = rigthChildPopedIdx
                }
            }
        }

        return returnedData
    }
}


const heap = new Heap()

console.log(heap)
console.log(heap.insert(15))
console.log(heap.insert(10))
console.log(heap.insert(8))
console.log(heap.insert(5))
console.log(heap.insert(4))
console.log(heap.insert(20))
console.log(heap)

console.log('----------------')

console.log(heap.pop())
console.log(heap)


// heap의 insert구문을 통해 2진트리의 형태를 가지고 알아서 트리가 구성됨
// pop을 할때마다 가장 최대값이 뽑혀나옴 -> 최대값 판별
// 시간복잡도는 log(n)