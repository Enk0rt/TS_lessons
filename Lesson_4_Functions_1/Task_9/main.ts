// ------------------- TASK - #bovDJDTIjt ----------------------------

let infoArr:{id:number,name:string,age:number}[] = [
    {
        id:1,
        name:'Axe',
        age:22
    },
    {
        id:2,
        name:'QoP',
        age:40
    },
    {
        id:3,
        name:'Sniper',
        age:30
    }
]

function showObj(info:{id:number,name:string,age:number}[]){
    document.write(`<div>`)
    for (const infoElement of info) {
            document.write(`<p>`)
                for (const field in infoElement){
                        document.write(`<span>${field}: ${infoElement[field]} </span>`)
                }
            document.write(`</p>`)
    }
    document.write(`</div>`)
}

showObj(infoArr);