// RETURN LENGTH OF LAST WORD

const lengthOfLastWord = function(s){
    let i = s.length-1;
    let count = 0;

    while(i>=0){
        if(s[i] == " " && count > 0){
            return count;
        }else if(s[i] != " "){
            count++;
        }
        i--;
    }
    return count;
}

const s1 = "Hello World";
const s2 = "Fly me to the moon";
const s3 = "OneWord"

console.log(lengthOfLastWord(s1));// Output: 5
console.log(lengthOfLastWord(s2));// Output: 4
console.log(lengthOfLastWord(s3));// Output: 7