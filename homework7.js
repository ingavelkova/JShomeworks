const words = 'Wonderful, Joyful, Happiness, Time, Task, Apple'; 
const pattern = /\b[B-Zb-z]{6,}\b/
let result = words.match(new RegExp(pattern, 'g'));
console.log(result);