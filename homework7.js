// ДЗ 10.2. Без А
const words = 'Wonderful, Joyful, Happiness, Time, Task, Apple'; 
const pattern = /\b[B-Zb-z]{6,}\b/
let result = words.match(new RegExp(pattern, 'g'));
console.log(result);
console.log(`Result without A: ${result}`);

// ДЗ 10.1. Параноя
let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

const newArr = []
const emailPattern = /^\w+(\.\w+)?@(gmail\.com||yahoo\.com)$/;

arr.forEach(element => { 
    if (element.email.match(emailPattern, 'g')) {
        newArr.push(element.email);
    }
}   
);
console.log(newArr);
console.log(`Valid emails: ${newArr}`);   