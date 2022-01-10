const INF = Number.MAX_SAFE_INTEGER;
const minKey = (key, visited) => {
    let min = INF;
    let minIndex = -1;
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i] && key[i] < min) {
            min = key[i];
            minIndex = i;
        }
    }
    return minIndex;
}
const prim = (graph) => {
    const key = []; //用来保存到父节点的距离
    const parent = [];  //用来保存父节点是谁
    const visited = []; //用来保存某个点是否已经加入了最小生成树中
    const length = graph.length;

    const edge = [];

    for (let i = 0; i < length; i++) {
        key[i] = INF;
        visited[i] = false;
    }
    parent[0] = -1;
    key[0] = 0;
    for (let i = 0; i < length - 1; i++) {
        const u = minKey(key, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
                parent[v] = u;
                // edge.push({ source: "node" + (v + 1), target: "node" + (u + 1), style: { stroke: 'green' } });
                //console.log({ source: "node" + (v + 1), target: "node" + (u + 1) });
            }
        }
    }
    for (let i = 1; i < parent.length; i++){
        edge.push({ source: "node"+(i+1) , target: "node"+(parent[i]+1), style: { stroke: 'green' } });
    }
    //return { parent, key };
    return edge;
}

const graph = [ [0, 280, 0, 0, 0, 0, 0, 0, 2000, 0],
                [280, 0, 370, 0, 0, 0, 0, 0, 0, 0],
                [0, 370, 0, 690, 790, 0, 1000, 0, 0, 0],
                [0, 0, 690, 0, 0, 0, 560, 0, 0, 0],
                [0, 0, 790, 0, 0, 170, 0, 640, 0, 0],
                [0, 0, 0, 0, 170, 0, 320, 0, 0, 0],
                [0, 0, 1000, 560, 0, 320, 0, 0, 0, 710],
                [0, 0, 0, 0, 640, 0, 0, 0, 0, 610],
                [2000, 0, 0, 0, 0, 0, 0, 0, 0, 410],
                [0, 0, 0, 0, 0, 0, 710, 610, 410, 0]    ];
const msTree = prim(graph);
export { msTree };
