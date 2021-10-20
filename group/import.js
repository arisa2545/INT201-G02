import {min, greeting,max, operator, average, reTeam} from "./function.js";

console.log([13,40,50,63]);
console.log(operator([13,40,50,63],min));
console.log(operator([13,40,50,63],max));
console.log(operator([13,40,50,63],average));

console.log([14,85,32,88,25,6]);
console.log(operator([14,85,32,88,25,6],min));
console.log(operator([14,85,32,88,25,6],max));
console.log(operator([14,85,32,88,25,6],average));

console.log([96,12,70]);
console.log(operator([96,12,70],min));
console.log(operator([96,12,70],max));
console.log(operator([96,85,70],average));

let name = greeting('benz','mod','spy');
let name2 = greeting();
let name3 = greeting('benz','mod','spy','phai','om')

console.log(name('Hi'));
console.log(name2('Hi'));
console.log(name3('Hi'));

console.log(reTeam(['benz', 'phai'],['mod','om']))
console.log(reTeam(['benz', 'phai','spy'],['mod','om']))
console.log(reTeam(['benz', 'phai', 'team'],['mod','om', 'ice']))

