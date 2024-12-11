// ------------------- TASK - #gEFoxMMO ----------------------------

let info:(string | number | boolean)[] = ['hello',1,false,'Okten'];

function createList(array:(string | number | boolean)[]){
    document.write(`<ul>`);
    for(let i = 0; i<array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
createList(info)