// function doubleIt(num){
//     return num * 2;
// }

//this is called fuction declaration
const doubleIt = function(num){
    return num * 2;
}

//es6 arrow func
const doubleIt2 = num => num * 2;
let result = doubleIt2(5);

const add = (x,y=0) => x+y;
result = add(5,3);

console.log(result);

const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result2 = sum * diff;
    return result2;
}

console.log(doMath(7,5));