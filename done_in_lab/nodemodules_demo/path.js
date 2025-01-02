const pathvar = require('path');

const path = 'C:/Users/student/Desktop/WT2dhara/path.js'

console.log(pathvar.basename(path));
console.log(pathvar.dirname(path));
console.log(pathvar.extname(path));
console.log(pathvar.isAbsolute(path));
console.log(pathvar.join('abc', 'xyz'));
console.log(pathvar.relative('C:', 'Desktop'));