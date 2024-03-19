// LARGER SUM BETWEEN TWO ADJACENT NUMBERS.

const array = [2, 4, 1, 5, 6, ,3];

function maxAdjacentSuma(array){
    let maxSum = -Infinity
    const { length } = array

    for(let i = 0; i < length-1; i++){
        const sum = array[i] + array[i+1];
        if (sum > maxSum){
            maxSum = sum
        }

        // Also could be this
        // maxSum = Math.max(maxSum, sum)
    }

    return maxSum;
}


console.log(`The larger sum between two adjacent numbers is: ${maxAdjacentSuma(array)}`);

