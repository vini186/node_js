const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if(req.url === '/') {
  //    fs.readFile(
  //      path.join(__dirname,'public','index.html'), (err,
  //     Content) => {
  //       if(err) throw err;
  //       res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.end(Content);

  //    });
   
  // }
  
  // if(req.url === '/api/users') {
  //  const users = [
  //    {name: 'bob Smith', age: 40},
  //    {name: 'john deo', age: 30}
  //  ];
  //  res.writeHead(200, {'Content-Type': 'application/json'});
  //  res.end(JSON.stringify(users));
  //   }
  //build file path
  let filePath = path.join(__dirname,'public',
  req.url === '/' ?
  'index.html' : req.url);
 //extension of file
 let extname = path.extname(filePath);
 //intial content type
 let contentType = 'text/html';
 switch(extname){
   case '.js':
     contentType = 'text/javascript';
     break;
     case '.css':
      contentType = 'text/css';
      break;
      case '.json':
        contentType = 'application/json';
        break;
        case '.png':
          contentType = 'image/png';
          break;
          case '.jpg':
            contentType = 'image/jpg ';
            break;

 }
 //read file
 fs.readFile(filePath, (err,content) => {
   if(err){
     if(err.code =='ENOENT'){
      //page not found
      fs.readFile (path.join(__dirname,'public','404.html'), 
      (err,content) => {
        res.writeHead(200,{'content-Type':'text/html'});
        res.end(content,'utf8');
      });
     } else {
       //some server error
       res.writeHead(500);
       res.end(`server Error: ${error.code}`);

     }
      } else {
        //success
        res.writeHead(200,{'content-Type':contentType});
        res.end(content,'utf8');
      }
 });

});

const port = process.env.port || 5000;

server.listen(port, () => console.log(`Serving running on port ${port}`));

