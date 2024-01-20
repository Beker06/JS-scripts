// RETURN TRUE IF ROBOT RETURNS TO ORIGIN, FALSE OTHERWISE

const judgeCircle = function(moves){
    let x = 0;
    let y = 0;

    for(let move of moves){
        switch(move){
            case 'U': y++; break;
            case 'R': x++; break;
            case 'D': y--; break;
            case 'L': x--; break;
        }
    }
    return x === 0 && y === 0;
}

const moves1 = "UD";
const moves2 = "LL";
const moves3 = "URDL"

console.log(judgeCircle(moves1));// Output: true
console.log(judgeCircle(moves2));// Output: false
console.log(judgeCircle(moves3));// Output: true