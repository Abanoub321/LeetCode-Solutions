/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from "../Interfaces/ListNode";

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next!.next;
    }
    return slow;
};

export default middleNode;