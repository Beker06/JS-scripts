// Count the repeated words

const phrase = 'The quick brown fox jumps on the lazy dog. The dog does not flinch'

const words = phrase.toLowerCase().replace(/[.]/g, '').split(' ')

const wordsFrecuency = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1 
    return acc;
}, {})

console.log(wordsFrecuency)

// Output
// {
//     the: 3,  
//     quick: 1,
//     brown: 1,
//     fox: 1,  
//     jumps: 1,
//     on: 1,   
//     lazy: 1, 
//     dog: 2,  
//     does: 1,
//     not: 1,
//     flinch: 1
// }