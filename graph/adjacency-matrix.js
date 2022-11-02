// 인접행렬 만들기

// case1
let n = 6 // path의 길이
// path 원소 의미 : [i, j, w] = i에서 j까지 연결하는 간선이 있음, 해당 간선의 weight는 w
let path = [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]]

function getGraph(len, input){
    let graph = Array.from({length: len}, () => Array.from({length: len}, () => 0))
    input.forEach((item) => {
        let i = item[0]-1
        let j = item[1]-1
        let w = item[2]

        graph[i][j] = w
        graph[j][i] = w
    })
    return graph
}

let result = getGraph(n, path)
result.forEach((item) => {
    console.log(item.toString())
})