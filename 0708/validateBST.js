// Given a binary tree, determine if it is a valid binary search tree (BST).

const isValidBST = (root)=>{
    if(!root) return true;
    const helper = (root, min, max) =>{
        if(!root) return true;
        if(min !== null && root.val <= min || max !== null && root.val >= max)return false;
        return helper(root.left,min,root.val) && helper(root.right,root.val,max)
    }
    return helper(root, null, null);
}