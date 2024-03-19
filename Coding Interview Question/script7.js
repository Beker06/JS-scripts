// Ways to climb stairs using  1 or 2 steps

const solution = (stairs) => {
    let prev1 = 1;
    let prev2 = 1;
    let current;
    
    for(let i = 2; i <= stairs; i++){
        current = prev1 + prev2;
        [prev1, prev2] = [prev2, current];
    }
    return prev2;
}



console.log(solution(7)) // 21