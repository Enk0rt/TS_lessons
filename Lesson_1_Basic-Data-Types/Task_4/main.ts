// ----------------------- TASK ID - #ruUtWDUI ----------------------

let surName:string = prompt('Enter your second name'),
    nameFirst:string = prompt('Enter your first name'),
    nameLast:string = prompt('Enter your last name'),
    fullName:string = `${surName} ${nameFirst} ${nameLast}`;
 
console.log(fullName);
alert(`Hello, ${fullName}`);