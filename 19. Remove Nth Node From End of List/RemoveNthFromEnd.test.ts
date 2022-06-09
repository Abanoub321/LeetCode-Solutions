import ListNode from "../Interfaces/ListNode";
import removeNthFromEnd from "./RemoveNthFromEnd";

describe('Remove Nth Node From End of List', () => {
    it('pass test case 1', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        const result = removeNthFromEnd(head, 2);
        expect(result!.val).toBe(1);
        expect(result!.next!.val).toBe(2);
        expect(result!.next!.next!.val).toBe(3);
        expect(result!.next!.next!.next!.val).toBe(5);
    })
    it('pass test case 2', () => {
        const head = new ListNode(1);
        const result = removeNthFromEnd(head, 1);
        expect(result).toBeNull();
    })
    it('pass test case 3', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        const result = removeNthFromEnd(head, 1);
        expect(result!.val).toBe(1);
    })
})