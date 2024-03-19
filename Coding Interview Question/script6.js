// Return Indexes of numbers in a array that sum up  to target number. 

function solution (nums ,target) {
    let map  = new Map();

    for(let i=0 ;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target - nums[i]), i]
        }else{
            map.set(nums[i],i);
        }
    }
}

console.log(solution([2,7,11,15], 26));