const fs = require('fs');

//console.log(process);
//console.log(process.arch); 
//output is array 2nd value store in txt file and 3rd is content.
//console.log(process.argv[4]);

const input = process.argv;
//fs.writeFileSync(input[2],input[3]);
console.log(input);
if (input[2] == 'add'){
    fs.writeFileSync(input[3],input[4]);
}
else if (input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log('invalid input');
}

