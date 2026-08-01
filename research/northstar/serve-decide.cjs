const http=require('http'),fs=require('fs'),path=require('path');
http.createServer((req,res)=>{
  const f=path.join(__dirname,'decide.html');
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  res.end(fs.readFileSync(f));
}).listen(5711,()=>console.log('http://localhost:5711'));
