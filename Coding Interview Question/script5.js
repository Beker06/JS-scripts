// Return Minium Number in array with Binary Search

const findMin = function (nums){
    let left = 0;
    let right = nums.length -1

    while(left < right){
        let  mid = Math.floor((right + left) /2);
        if(nums[mid] > nums[right]){
            left = mid + 1;
        }else {
            right = mid;
        }
    }

    return nums[left];
}


// Test case 1
console.log(findMin([3, 4, 5, 1, 2] ));//Expected Output: 1
// Test case 2
console.log(findMin([4, 5, 6, 7, 0, 1, 2] ));//Expected Output: 0
// Test case 3
console.log(findMin([11, 13, 15, 17] ));//Expected Output: 11