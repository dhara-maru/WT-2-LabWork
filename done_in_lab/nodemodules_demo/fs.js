const fs = require('fs');

fs.writeFileSync('example.txt', 'Hello, World!');
console.log(fs.readFileSync('example.txt', 'utf-8'));
fs.appendFileSync('example.txt', '\nAppending text.');
fs.renameSync('example.txt', 'newfile.txt');


