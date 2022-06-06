import ListNode from "../Interfaces/ListNode";
import addTwoNumbers from "./AddTwoNumbers";

describe('Add Two Numbers', () => {
    it('should pass test 1', () => {
        const l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        const l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        const result: ListNode | null = addTwoNumbers(l1, l2);

        expect(result!.val).toBe(7);
        expect(result!.next!.val).toBe(0);
        expect(result!.next!.next!.val).toBe(8);
    })
    it('should pass test 2', () => {
        const l1 = new ListNode(0);
        const l2 = new ListNode(0);
        const result: ListNode | null = addTwoNumbers(l1, l2);
        expect(result!.val).toBe(0);
    })
    it('should pass test 3', () => {
        const l1 = new ListNode(9);
        l1.next = new ListNode(9);
        l1.next.next = new ListNode(9);
        const l2 = new ListNode(9);
        l2.next = new ListNode(9);

        const result: ListNode | null = addTwoNumbers(l1, l2);

        expect(result!.val).toBe(8);
        expect(result!.next!.val).toBe(9);
        expect(result!.next!.next!.val).toBe(0);
        expect(result!.next!.next!.next!.val).toBe(1);
    })
})