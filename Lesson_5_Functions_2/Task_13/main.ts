// ------------------- TASK - #mkGDenYnNjn ----------------------------

let sumUAH:number = +prompt('Enter sum');

const currencyValues:{currency:string,value:number}[] = [
    {
        currency:'USD',
        value:25
    },
    {
        currency:'EUR',
        value:42
    }
]

let exchangedMoney = (sumUAH:number,currencyValues:{currency:string,value:number}[],currency:string):number =>{
    let num:number  = 0;
    for (const item of currencyValues) {
        if (item.currency === currency) {
            num = sumUAH / item.value;
        }
    }
    return num;
}

let getMoney:number = exchangedMoney(sumUAH, currencyValues,'USD');
console.log(getMoney);