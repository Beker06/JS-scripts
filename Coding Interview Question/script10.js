// Return is b is an anagram o a

var isAnagram = function(a, b){
    if (a.length !== b.length) return false;

    let freqMap = {};

    for(let letter of a){
        freqMap[letter] = (freqMap[letter] || 0) + 1;
    }

    for(let bLetter of b){
        if (!freqMap[bLetter] ||
            freqMap[bLetter] === 0){
                return false;
        } else {
            freqMap[bLetter]--;
        }
    }

    return true;
};

// Test case 1
let a1 = "anagram"
let b1 = "nagaram"
console.log(isAnagram(a1,b1)) //Expected output: true

// Test case 2
let a2 = "rat";
let b2 =  "car";
console.log(isAnagram(a2,b2)); // Expected output : false

// Test case 3
let a3 = "";
let b3 = "";
console.log(isAnagram(a3,b3)); // Expected output : true

// Test case 4
let a4 = "a";
let b4 = "b";
console.log(isAnagram(a4,b4)); // Expected output : false