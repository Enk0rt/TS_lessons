// ----------------------- TASK - #bfoJuse4ZzP --------------------------------

let str:string = 'Ревуть воли як ясла повні';

// function stringToArray(str){
//     return str.split(' ');
// }
//
// let strArr = stringToArray(str);
// console.log(strArr)

// стрілочна функція
let strArr4 = (str:string):string[] => str.split(' ');
console.log(strArr4(str));