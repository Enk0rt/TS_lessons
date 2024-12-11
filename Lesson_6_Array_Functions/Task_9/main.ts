// ----------------------- TASK - #bolvdlhP --------------------------------

let cardSuites:string[] = ['spade', 'diamond','heart', 'clubs']
let values:string[] = ['6','7','8','9','10', 'ace','jack','queen','king']

let cards:{cardSuit:string,value:string,color?:string}[] = [];
for (const cardSuit of cardSuites) {
    for (const value of values) {
        let card:{cardSuit:string,value:string,color?:string} = {
            cardSuit:cardSuit,
            value: value
        }
        if (cardSuit === 'diamond' || cardSuit === 'heart'){
            card.color = 'red';
        }else card.color = 'black'
    cards.push(card);
    }
}
console.log(cards);


// Знайти піковий туз
let spadeAce:object = cards.filter(item => item.value === 'ace' && item.cardSuit === 'spade');
console.log(spadeAce);

// Вивести всі червоні карти
let redCards:object[] = cards.filter(item => item.color === 'red')

// варіант 2
// let redCards = cards.reduce((acc,curr) =>{
//     if(curr.color === 'red'){
//         acc.push(curr);
//     }
//     return acc;
// },[])
console.log(redCards);

// Вивести всі буби
let allDiamonds:object[] = cards.filter(item => item.cardSuit === 'diamond');

// варіант 2
// let allDiamonds = cards.reduce((acc,curr) =>{
//     if(curr.cardSuit === 'diamonds'){
//         acc.push(curr);
//     }
//     return acc;
// },[])
console.log(allDiamonds);

// Вивести трефи від 9 та більше
let exceptions = ['6','7','8'];
let clubsFrom9 = cards.filter(item => item.cardSuit === 'clubs' && !exceptions.includes(item.value));

//варіант 2
// let clubsFrom9 = cards.reduce((acc,curr) =>{
//     if(curr.cardSuit === 'clubs' && !exceptions.includes(curr.value)) {
//         acc.push(curr);
//     }
//     return acc
// },[])
console.log(clubsFrom9);