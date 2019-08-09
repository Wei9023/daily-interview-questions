//160. Intersection of Two Linked Lists
//Write a program to find the node at which the intersection of two singly linked lists begins.

const getIntersectionNode = (headA, headB) =>{
    if(!headA || !headB) return null;
    let ha = headA;
    let hb = headB;
    while( ha !== hb){
        ha = ha.next;
        hb = hb.next;
        if(ha === hb)return ha;
        if(!ha)ha = headB;
        if(!hb)hb = headA;
    }
    return ha;
}