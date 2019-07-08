// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

var findleaves = (root) =>{
    let ans = [];
    dfs(root, hash);
    return ans;
}

var dfs=(node, hash)=>{
    if(node === null)return -1;
    let level = Math.max(dfs(node.left, hash), dfs(node.right, hash))+1;
    if(ans.length < level + 1) ans.push([]);
    ans[level].push(node.val);
    return level;
}