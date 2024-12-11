// ------------------- TASK - #SIdMd0hQ ----------------------------

let userss:{id:number,name:string,age:number}[] = [
    {
        id: 1,
        name: 'Artem',
        age: 22
    },
    {
        id: 2,
        name: 'Max',
        age: 17
    },
    {
        id: 3,
        name: 'Yarik',
        age: 18
    },
]

let userArray = (array:{id:number,name:string,age:number}[]):void => {
    for (const user of array) {
        console.log(user);
    }
}
userArray(userss);
