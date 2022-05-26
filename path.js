/*
const fs      = require('fs');
const path    = require('path');
const dirPath = path.join(__dirname);
console.log(__dirname);

*/
/*
setTimeout(() =>{
    console.log('Let Two..')
},3000);

console.log('Let One ..');

var a = 10;
var b = 0;


let waitingData = new Promise( (resolve, reject) => {
    setTimeout(() =>{
        resolve(b = 30);
    }, 2000);
});
waitingData.then( () => {
    console.log(a + b);
});
*/

console.log('Starting Up!');

setTimeout( () => {
    console.log('2 Sec waiting');
}, 2000);

setTimeout( () => {
    console.log('0 Sec waiting');
});

console.log('Finshing Up');

    



var n = 2;
function squre (num){
    var ans = num * num;
    console.log(ans);
    return ans
};
var squree2 = squre(2);