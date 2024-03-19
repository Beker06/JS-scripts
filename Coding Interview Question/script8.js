// Reverse a word  using recursion.

function solution(str){
    if(str === "") return "";

    return str[str.length-1] + solution(str.slice(0, str.length - 1));
}

console.log(solution('hello'))