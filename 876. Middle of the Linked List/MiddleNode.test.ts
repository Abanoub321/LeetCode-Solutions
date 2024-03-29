import ListNode from "../Interfaces/ListNode";
import middleNode from "./MiddleNode";


describe('Middle of the linked list', () => {
    it('pass test 1', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        let result = middleNode(head);
        expect(result?.val).toEqual(3);
        expect(result?.next?.val).toEqual(4);
        expect(result?.next?.next?.val).toEqual(5);
    })
    it('pass test 2', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        head.next.next.next.next.next = new ListNode(6);
        let result = middleNode(head);
        expect(result?.val).toEqual(4);
        expect(result?.next?.val).toEqual(5);
        expect(result?.next?.next?.val).toEqual(6);
    })
})