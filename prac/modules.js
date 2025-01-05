//Node modules
const path = require('path');
const {exec} = require('child_process');
const { stderr } = require('process');
const os = require('os')
const url = require('url')
const util = require('util')
const fs = require('fs')

//========== PATH ==================
// const filepath= 'E:/WT2/prac/modules.js';
// console.log(path.basename(filepath));   //modules.js
// console.log(path.dirname(filepath));    //E:/WT2/prac
// console.log(path.extname(filepath));    //.js
// console.log(path.join('/folder1', 'folder2', 'file.txt'));  //\folder1\folder2\file.txt




//============= CHILD PROCESS ======================
// exec('dir', (error, stdout, stderr) => {
//     if (error) {
//         console.error(error.message);
//         return;
//     }
//     if (stderr) {
//         console.error(stderr);
//         return;
//     }
//     console.log(stdout);
// });





// ============ OS ============================
// console.log(os.homedir());      //C:\Users\Dhara
// console.log(os.platform());     //win32
// console.log(os.arch());         //x64
// console.log(os.freemem());      //761176064
// console.log(os.totalmem());     //6373715968




// ================= URL ============================
// const myurl = new URL('https://example.com:8080/path/name?query=test#hash');
// console.log(myurl.pathname);        ///path/name
// console.log(myurl.hostname);        //example.com
// console.log(myurl.hash);        //#hash
// console.log(myurl.protocol);        //https:
// console.log(myurl.port);        //8080







// ===================== UTIL ===================== 
// function utilfunc(a, b, callback){
//     setTimeout(()=>{
//         callback(null, a+b)
//     }, 5000)
// }

// const promisefunc = util.promisify(utilfunc)

// promisefunc(150, 140).then(result => console.log(result))       //290 (after 5 seconds)







//=================== FS ====================
// //writing to a file
// fs.writeFileSync('example.txt', 'BHAVESH JOSHIIIII THE SUPERHERO');
// console.log("File is written"); 

// //reading the file
// fs.readFile('example.txt', 'utf-8', (err, data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data); 
//     }
// })

   


