// ------------------- TASK - #EKRNVPM ----------------------------

let numsList:number[] = [23,24,56,92,56,85,32,4,12,-1,2,-34];

let getSum = (numsList:number[]):number=>{
    let sum = 0;
    for (const arrElement of numsList) {
        sum +=arrElement;
    }
    return sum;
};

let suma = getSum(numsList);
console.log(suma);