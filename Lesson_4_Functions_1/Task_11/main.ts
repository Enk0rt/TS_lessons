// ------------------- TASK - #EKRNVPM ----------------------------

let numbersArr:number[] = [23,24,56,92,56,85,32,4,12,-1,2,-34];

function sumArr(arr:number[]){
    let sum = 0;
    for (const arrElement of arr) {
        sum +=arrElement;
    }
    return sum;
}

let result = sumArr(numbersArr);
console.log(result);