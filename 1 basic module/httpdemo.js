const path=require('path');
const url=require('url');
const http=require('http');
const fs=require('fs');
//匹配本地开启服务的文件夹的路径 这里如果没有输入参数，那么默认就是当前文件夹
let root=path.resolve(process.argv[2] || '.');//数组，[0]为node.exe目录；[1]为当前执行的JS路径
const server=http.createServer((req,res)=>{
  let pathname=url.parse(req.url).pathname;//获取URL的pathname,如/cdd/dd
  let filepath=path.join(root,pathname);//获取对应本地文件路径
  fs.stat(filepath,(err,stat)=>{
    if(!err && stat.isFile()){
      //没出错并且文件存在
      console.log('200'+req.url);
      res.writeHead(200);//发送200响应
      fs.createReadStream(filepath).pipe(res);//文件流写入响应
    }else if(!err && stat.isDirectory()){//是目录
      fs.stat(path.join(filepath,'index.html'),(err,stat)=>{//利用join拼接出index路径
        if(!err){
          res.writeHead(200);
          fs.createReadStream(path.join(filepath,'index.html')).pipe(res);
        }
      })
    }
    else{
      console.log('404'+req.url);
      res.writeHead(404);
      res.end('404 not found')      
    }
  })
})
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');