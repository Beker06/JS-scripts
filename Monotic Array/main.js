const isMonotic = function(nums){
    let increasing = true;
    let decreasing = true;

    for(let i=0; i<nums.length-1; i++){
        if(nums[i] > nums[i+1]){
            increasing = false;
        }
        if(nums[i] < nums[i+1]){
            decreasing = false;
        }
    }

    return increasing || decreasing;
}

console.log(isMonotic([1,2,2,3])); // true
console.log(isMonotic([6,5,4,4])); // true
console.log(isMonotic([1,3,2])); // false