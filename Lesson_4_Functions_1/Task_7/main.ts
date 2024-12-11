// ------------------- TASK - #0Kxco1edSN ----------------------------

function createList1(desc:string,amount:number):void{
    document.write(`<ul>`);
    for(let i = 0; i<amount; i++){
        document.write(`<li>${desc}</li>`);
    }
    document.write(`</ul>`);
}

createList1('Okten',6);