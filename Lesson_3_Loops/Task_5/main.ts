//----------------------- TASK - #vLSZKMlO ---------------------------

let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


document.write(`<ul>`)
    for (let item of listOfItems) {
        document.write(`<li>${item}</li>`)
    }
document.write(`</ul>`);
