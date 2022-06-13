import ListNode from "../Interfaces/ListNode";
import removeElements from "./RemoveElements";


describe('Remove Linked List Elements', () => {
    it('pass test case 1', () => {
        let head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(6);
        head.next.next.next = new ListNode(3);
        head.next.next.next.next = new ListNode(4);
        head.next.next.next.next.next = new ListNode(5);
        head.next.next.next.next.next.next = new ListNode(6);
        let result = removeElements(head, 6);
        expect(result!.val).toBe(1);
        expect(result!.next!.val).toBe(2);
        expect(result!.next!.next!.val).toBe(3);
        expect(result!.next!.next!.next!.val).toBe(4);
        expect(result!.next!.next!.next!.next!.val).toBe(5);
    })
})