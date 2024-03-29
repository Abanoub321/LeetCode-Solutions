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

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0);
    let slow = dummy, fast = dummy;
    dummy.next = head;
    while (n--) {
        fast = fast.next!;
    }
    while (fast.next) {
        slow = slow.next!;
        fast = fast.next!;
    }
    slow.next = slow.next!.next;
    return dummy.next;

};

export default removeNthFromEnd;