// ------------------- TASK - #kpsbSQCt2Lf ----------------------------

let rowNums:number[] = [11,22,33,44]

let swappedArr = (arr:number[],idx1:number,idx2:number):number[] => {
        let firstNum:number = arr[idx1];
        let secondNum:number = arr[idx2];
        arr[idx1] = secondNum;
        arr[idx2] = firstNum;
        return arr
}

let reverse = swappedArr(rowNums,1,3);
console.log(reverse);