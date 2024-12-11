// ------------------- TASK - #kpsbSQCt2Lf ----------------------------

let numArr:number[] = [11,22,33,44]

function swap(arr:number[],idx1:number, idx2:number){
        let firstNum = arr[idx1];
        let secondNum = arr[idx2];
        console.log(arr)
        arr[idx1] = secondNum;
        console.log(arr);
        arr[idx2] = firstNum;
    return arr
}
let res = swap(numArr,1,3);
console.log(res);