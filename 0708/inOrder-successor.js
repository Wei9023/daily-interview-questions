// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

// The successor of a node p is the node with the smallest key greater than p.val.

var inorderSuccessor = function(root, p) {
    if (p.right) {
        // element is most left of the right sub-tree
        let subRoot = p.right;
        while (subRoot.left) {
            subRoot = subRoot.left;
        }
        return subRoot;
    } else {
        // element is last "left turned" node
        let lastLeft = null;
        let subRoot = root;
        while (subRoot && (subRoot.val != p.val)) {
            if (p.val < subRoot.val) {
                // turning left
                lastLeft = subRoot;
                subRoot = subRoot.left;
            } else {
                // turning right
                subRoot = subRoot.right;
            }
        }
        return lastLeft;
    }
};