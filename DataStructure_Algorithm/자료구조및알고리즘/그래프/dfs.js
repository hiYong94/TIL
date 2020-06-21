// 깊이우선탐색(DFS) 알고리즘
// Stack을 활용한 구현 후입선출 구조

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

function dfs(graph, startNode) {
    let visitedQueue = []    // 큐
    let needVisitStack = []  //스택 

    needVisitStack.push(startNode)

    while(needVisitStack.length > 0) {
        let node = needVisitStack.pop (0)
        if(!visitedQueue.includes(node)) {
            visitedQueue.push(node)
            needVisitStack = needVisitStack.concat(graph[node])
        }
    }

    return visitedQueue
}

console.log(dfs(graph, 'A'))