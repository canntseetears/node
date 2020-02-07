const http=require('http');
let server=http.createServer((req,res)=>{
  console.log('HTTP请求方法和URL：'+req.method+req.url);
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('<h2>hello world!</h2>')  
})
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
//将一个字符串解析为一个   Url   对象
const url=require('url');
console.log(url.parse('http://127.0.0.1:8080/'));
//  path模块
const path=require('path');
let workDir=path.resolve('.');//获取当前目录
let fileDir=path.join(workDir,'public','index.html');//组合完整的文件路径1 basic module\public\index.html


