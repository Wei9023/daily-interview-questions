//141. Linked List Cycle
//Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

const hasCycle = head =>{
    while(head){
        if(head.val === null)return true;
        head.val = null;
        head = head.next;
    }
    return false;
}