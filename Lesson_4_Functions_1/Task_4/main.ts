// ------------------- TASK - #SIdMd0hQ ----------------------------

let usersArray:{id:number,name:string,age:number}[] = [
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

function showArray(array:object[]):void{
    for (const user of array) {
        console.log(user);
    }
}


showArray(usersArray);