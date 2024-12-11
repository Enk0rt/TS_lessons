// ------------------- TASK - #Mbiz5K4yFe7 ----------------------------
const Pi:number = 3.14;

function getArea(h:number,r:number):number{
    return 2*Pi*Math.pow(r,2)+2*PI*r*h;
}

let cylinderArea = getArea(20,5);
console.log(cylinderArea)