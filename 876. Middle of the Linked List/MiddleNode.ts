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
    let pointer = head;
    let cntr = 1;
    while (pointer?.next !== null) {
        pointer = pointer!.next;
        cntr++;
    }
    let mid = Math.floor(cntr / 2);
    pointer = head;
    while (mid > 0) {
        pointer = pointer!.next;
        mid--;
    }
    return pointer;
};

export default middleNode;