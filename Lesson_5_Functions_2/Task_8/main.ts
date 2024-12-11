// ------------------- TASK - #gEFoxMMO ----------------------------

let infoArray:(string|number|boolean)[] = ['hello',1,false,'Okten'];

let ul = (array:(string|number|boolean)[]):void =>{
    document.write(`<ul>`);
    for(let i = 0; i<array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

ul(infoArray);