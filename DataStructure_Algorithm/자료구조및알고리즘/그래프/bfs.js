// 너비우선탐색(BFS) 알고리즘 구현
// Quequ 큐를 활용한 구현 선입선출 구조

let graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"],
}

function bfs(graph, startNode) {
    let visitedQueue = []    // 이미 탐색한 노드 - 큐
    let needVisitQueue = []  // 탐색을 해야하는 노드 - 큐

    needVisitQueue.push(startNode)   // 노드 탐색 시작

    // 더 이상 순회할것이 없을 때 까지
    while(needVisitQueue.length > 0) {
        let node = needVisitQueue.shift(0)   // Queue를 이용
        if(!visitedQueue.includes(node)) {   // 이미 탐색한 노드의 배열에 없다면
            visitedQueue.push(node)          // 방문한 곳에 노드의 값을 삽입
            needVisitQueue = needVisitQueue.concat(graph[node])
        }
    }
    return visitedQueue
}

console.log(bfs(graph, 'A'))