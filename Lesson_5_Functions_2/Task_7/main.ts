// ------------------- TASK - #0Kxco1edSN ----------------------------

let simpleList = (desc:string,amount:number):void =>{
    document.write(`<ul>`);
    for(let i = 0; i<amount; i++){
        document.write(`<li>${desc}</li>`);
    }
    document.write(`</ul>`);
}
simpleList('Okten',6);