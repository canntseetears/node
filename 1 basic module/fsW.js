// 1.1 异步写
const fs=require('fs');
fs.writeFile('./file/filename.txt','hello,world',(err)=>{
  //参数为文件名，文件内容，回调函数
  if(err){
    console.log(err);
  }else{
    console.log('write ok');
  }
})
// 1.2 同步写
fs.writeFileSync('./file/sync.txt','i am wrote by synchronize');

// 2 获取文件详细信息
fs.stat('./file/hh.txt',(err,stat)=>{
  if(err){
    console.log(err);
  }else if(stat.isDirectory()){
    console.log('是目录:'+stat.isDirectory());
  }else if(stat.isFile()){
    console.log('是文件:'+stat.isFile()+'，大小为：'+stat.size+'创建时间'+stat.birthtime+'修改时间'+stat.mtime);
  }
})