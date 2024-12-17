// ------------------- TASK - #mkGDenYnNjn ----------------------------

let sumUAH:number = +prompt('Enter sum');

interface ICurrencyValues{
    currency:string,
    value:number
}

const currencyValues:ICurrencyValues[] = [
    {
        currency:'USD',
        value:25
    },
    {
        currency:'EUR',
        value:42
    }
]

let exchangedMoney = (total:number,currencyValues:ICurrencyValues[],currencyToExchange:string):number =>{
    let num:number  = 0;
    for (const item of currencyValues) {
        if (item.currency === currencyToExchange) {
            num = total / item.value;
        }
    }
    return num;
}

let getMoney:number = exchangedMoney(sumUAH, currencyValues,'USD');
console.log(getMoney);