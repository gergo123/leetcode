
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {

    var lev = root.val + (root.left?.val ?? 0) + (root.right?.val ?? 0);
    var left = root.left != undefined ? 1 : 0;
    var right = root.right != undefined ? 1 : 0;
    var avg = lev / (1 + left + right);

    var globDivider = 1;
    // left.left and left.right ??
    var leftAndRightAvg = 0;
    if (root.left != undefined) {
        var leftAvg = averageOfSubtree(root.left);
        leftAndRightAvg += leftAvg;
        leftAvg > 0 && globDivider++;
    }

    // right.left and right.right ??
    if (root.right != undefined) {
        var rightAvg = averageOfSubtree(root.right);
        leftAndRightAvg += rightAvg;
        rightAvg > 0 && globDivider++;
    }

    return Math.floor((avg + leftAndRightAvg) / globDivider);
};

// summary of node values
var averageOfSubtree = function (root) {
    // return value, summ all value

    var left = 0;
    var right = 0;

    if (root.right) {
        right += averageOfSubtree(root.right);
    }

    if (root.left) {
        left += averageOfSubtree(root.left);
    }

    return root.val + left + right;
}

var averageOfSubtree = function (root) {
    var counter = 0;

    const wrapp = (tree) => {
        var nodeCount = 1;
        var left = 0;
        var right = 0;

        if (tree.right) {
            var rightRes = wrapp(tree.right);
            right += rightRes.avg;
            nodeCount += rightRes.nodeCount;
        }

        if (tree.left) {
            var leftRes = wrapp(tree.left);
            left += leftRes.avg;
            nodeCount += leftRes.nodeCount;
        }

        var avg = tree.val + left + right;
        var floorAvg = Math.floor(avg / nodeCount);
        if (floorAvg == tree.val || avg == 0) {
            counter++;
        }

        return { avg, nodeCount };
    }

    // count the number of nodes where the
    // value of the node is equal to the average
    // of the values in its subtree
    var summOfNodes = wrapp(root);
    // return Math.floor(summOfNodes / globalDivider);
    return counter;
}

var t1 = new TreeNode(4, new TreeNode(8), new TreeNode(5))
var t2 = new TreeNode(5, undefined, new TreeNode(6))
var t3 = new TreeNode(8, new TreeNode(0), new TreeNode(1))

var t4 = new TreeNode(4, t3, t2)

console.log(
    // averageOfSubtree(t1),
    // averageOfSubtree(t2),
    averageOfSubtree(t4),
)
