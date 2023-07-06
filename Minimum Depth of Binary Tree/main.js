let tree = [3, 9, 20, null, null, 15, 7];

var minDepth = function(root) {
    if(root === null) return 0;
    let minDepth = 1;
    let queue = [root];

    while(queue.length){
        let levelSize = queue.length;
        while(levelSize){
            let current = queue.shift();
            if(current.left === null && current.right === null){
                return minDepth;
            }else {
                if(current.left)queue.push(current.left);
                if(current.right)queue.push(current.right);
            }
            levelSize--;
        }
        minDepth++;
    }
    return minDepth;
}

let output = minDepth(tree);
console.log(output)
