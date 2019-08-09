//You are given a m x n 2D grid initialized with these three possible values.

//-1 - A wall or an obstacle.
//0 - A gate.
//INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

const INF = 2147483647;
const gate = 0;
const directions = [[1,0],[-1,0],[0, -1],[0,1]];

const wallsAndGates = function(rooms){
    let m = rooms.length;
    if(m === 0)return;
    let n = rooms[0].length;

    let q = [];
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(rooms[i][j] === gate)q.push([i,j]);
        }
    }

    while(!q.length){
        let point = q.shift();
        let currentRow = point[0];
        let currentCol = point[1];
    
        directions.forEach(ele => {
            let r = currentRow + ele[0];
            let c = currentCol + ele[1];
            if(r < 0 || r > m || c < 0 || c > n || rooms[r][c] !== INF)return;
            
            room[r][c] = rooms[currentRow][currentCol] + 1;
            q.push[r,c];
        });
    }
}
