//101. Symmetric Tree
//Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

const isSymmetric = function(root){
    if(!root) return true;
    let isSymmetricHelper = function(left, right){
        if(!left && !right) return true;
        if(!left || !right) return false;
        if(left.val !== right.val) return false;
        return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
    }
    return isSymmetricHelper(root.left, root.right);
}