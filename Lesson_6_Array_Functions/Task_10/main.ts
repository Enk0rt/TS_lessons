// ----------------------- TASK - #EP5I1UUzAX --------------------------------
let cardSuites1:string[] = ['spade', 'diamond','heart', 'clubs'];
let values1:string[] = ['6','7','8','9','10', 'ace','jack','queen','king'];

interface ICards {
    cardSuit:string,
    value:string,
    color?:string
}

let cards1:ICards[] = [];
for (const cardSuit of cardSuites1) {
    for (const value of values1) {
        let card:ICards = {
            cardSuit:cardSuit,
            value: value
        }
        if (cardSuit === 'diamond' || cardSuit === 'heart'){
            card.color = 'red';
        }else card.color = 'black'
        cards1.push(card);
    }
}
console.log(cards1);


let sortedCards = cards1.reduce((acc,curr):{spades:ICards[],diamonds:ICards[],hearts:ICards[],clubs:ICards[]} => {
    if(curr.cardSuit === 'spade'){
        acc.spades.push(curr);
    }
    else if(curr.cardSuit === 'diamond'){
        acc.diamonds.push(curr);
    }else if(curr.cardSuit === 'heart'){
        acc.hearts.push(curr);
    }else {
        acc.clubs.push(curr);
    }
    return acc
},{spades:[],diamonds:[],hearts:[],clubs:[]})

console.log(sortedCards);