// Return the smallest missing possive num in a array

const nums = [5, 2, 1, 5, 8 ,2, 3 ,6, 7]

function smallestMissingPositive(nums){
    if(nums.length === 0) return  1;

    //Filtrar numeros positivos
    const onlyPositives = nums.filter(
        num => num > 0
    )

    const set = new Set(onlyPositives)

    for(let i = 1;i<= set.size +1 ;i++){
        if( !set.has(i)) return i;
    }
}

console.log(smallestMissingPositive(nums)); // output: 4

