import ListNode from "../Interfaces/ListNode";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3: ListNode = new ListNode(0);
    let l3Head: ListNode = l3;
    let carry: number = 0;
    while (l1 != null || l2 != null || carry != 0) {
        let current: ListNode = new ListNode(0);
        let sum: number = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val) + carry;
        current.val = sum % 10;
        carry = Math.floor(sum / 10);
        l3.next = current;
        l3 = l3.next;
        l1 = l1 == null ? null : l1.next;
        l2 = l2 == null ? null : l2.next;
    }
    return l3Head.next;
};

export default addTwoNumbers;