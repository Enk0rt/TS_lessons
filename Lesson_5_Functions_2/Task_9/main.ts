// ------------------- TASK - #bovDJDTIjt ----------------------------

let infoObjects:{id:number,name:string,age:number}[] = [
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

let userInfo = (info:{id:number,name:string,age:number}[]):void => {
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

userInfo(infoObjects);