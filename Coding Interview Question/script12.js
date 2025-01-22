//Encontrar el primer numero que no se repite

let array = [2,4,7,8,2,2,3,7]

function firstNotRepeated(arr){
    let contador = {};

    for(let num of arr){
        contador[num] = (contador[num] || 0) + 1;
    }

    for(let num of arr){
        if(contador[num] === 1){
            return num;
        }
    }

    return null;
}

console.log(firstNotRepeated(array)); // 4

//AI Improved
// function firstNotRepeated(arr){
//     const counter = new Map();

//     for(const num of arr){
//         counter.set(num, (counter.get(num) || 0) + 1);
//     }

//     for(const num of arr){
//         if(counter.get(num) === 1){
//             return num;
//         }
//     }

//     return null;
// }