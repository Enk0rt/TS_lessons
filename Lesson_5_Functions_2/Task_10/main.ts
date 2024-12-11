// ------------------- TASK - #pghbnSB ----------------------------

let nums:number[] = [23,24,56,92,56,85,32,4,12,-1,2,-34,-70];


// 1й спосіб

// let minNum = (arr) =>{
//     let min = Math.min(...arr);
//     return min;
// }

// 2й спосіб

let minNum = (nums:number[]):number =>{
    let min = nums[0];
    for (const item of nums) {
        if(min > item){
            min = item;
        }
    }
    return min;
}
let minimum = minNum(nums);
console.log(minimum);