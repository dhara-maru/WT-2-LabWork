const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
readFile('example.txt', 'utf-8').then(console.log);

const message = util.format('%s:%d', 'Hello', 2025);
console.log(message);
