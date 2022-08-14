import TreeNode from "../Interfaces/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
    let arr: number[][] = [];
    if (root === null) return arr;
    traverse(root, 0, arr);
    return arr;
};

const traverse = (root: TreeNode | null, level: number, arr: number[][]): void => {
    if (root === null) return;
    if (arr[level] === undefined) arr[level] = [];
    arr[level].push(root.val);
    traverse(root.left, level + 1, arr);
    traverse(root.right, level + 1, arr);
}

export default levelOrder;