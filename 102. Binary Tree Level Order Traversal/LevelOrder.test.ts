import TreeNode from "../Interfaces/TreeNode";
import levelOrder from "./LevelOrder";


describe('Binary Tree Level Order Traversal', () => {
    it('pass test case 1', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    })
    it('pass test case 2', () => {
        const root = new TreeNode(1);
        expect(levelOrder(root)).toEqual([[1]]);
    })
    it('pass test case 3', () => {
        expect(levelOrder(null)).toEqual([]);
    })
})