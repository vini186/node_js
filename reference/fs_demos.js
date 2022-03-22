const fs=require('fs');
const path= require('path');

// //create folder
// fs.mkdir(path.join(__dirname, '/test'),{}, err => {

//     if (err) throw err;
//     console.log('folder created...');
// });

//create and write to file
// fs.writeFile(
//  path.join(__dirname, '/test', 'hello.text'),
// 'I love node.js ....', err => {
//  if (err) throw err;
//   console.log('file written to ...');
//   //file append
//   fs.appendFile(
//     path.join(__dirname, '/test', 'hello.text'),
//    'Hello world!....', err => {
//     if (err) throw err;
//      console.log('file written to ...');
     
//    });
   
// });

//reAD file

fs.readFile(path.join(__dirname,'/test', 'hello.text'),'utf8', (err,data) => {
if (err)  throw err;
    console.log(data);
});
//rename a file
fs.rename(path.join(__dirname,'/test', 'hello.text'),
path.join(__dirname,'/test','helloworld.txt'),
 (err) => {
    if (err)  throw err;
        console.log('file renamed...');
    });

