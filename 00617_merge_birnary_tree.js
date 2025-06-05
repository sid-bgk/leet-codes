function mergeTrees(root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1) return root2;
  if (!root2) return root1;

  const newNode = new TreeNode(root1.val + root2.val);
  newNode.left = mergeTrees(root1.left, root2.left);
  newNode.right = mergeTrees(root1.right, root2.right);

  return newNode;
}

console.log(mergeTrees([1,3,2,5], [2,1,3,null,4,null,7]));
console.log(mergeTrees([1,2,3], [4,5]));
console.log(mergeTrees([1,2,3], []));
console.log(mergeTrees([], [1,2]));
console.log(mergeTrees([], []));
console.log(mergeTrees([1,3,null], [2,null,4]));
console.log(mergeTrees([5,3,6], [7,2,null,4]));
console.log(mergeTrees([1,null,2], [1,3,null]));