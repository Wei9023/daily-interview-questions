//234. Palindrome Linked List
//Given a singly linked list, determine if it is a palindrome.

const palindromeLinkedList = (head) =>{
    if(head == null || head.next == null) return true;
    var slow = head;
    var fast = head;
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    while(slow !== null){
        if(head.val !== slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
}

reverseList = function(head){
    var pre = null;
    var next = null;
    while(head !== null){
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}