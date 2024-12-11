// ------------------- TASK - #pghbnSB ----------------------------

let numberArr:number[] = [23,24,56,92,56,85,32,4,12,-1,2,-34,-70];


// 1й спосіб

// function getMin(arr){
//     let min = Math.min(...arr);
//     console.log(min);
// }

// 2й спосіб

function getMin(arr:number[]){
    let min = arr[0];
    for (const item of arr) {
        if(min > item){
            min = item;
        }
    }
    console.log(min);
}

getMin(numberArr);