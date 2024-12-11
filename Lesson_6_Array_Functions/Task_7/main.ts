// ----------------------- TASK - #5hqyKTfmc --------------------------------

let numsArr:number[] = [11,21,3];

function sortNums(nums:number[],direction:string){
    if(direction === 'ascending') return nums.sort((a,b) => a - b)
    if(direction === 'descending') return nums.sort((a,b) => b - a)
}

console.log(sortNums(numsArr,'ascending'));