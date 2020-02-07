const fs=require('fs');
// 1.1 读取普通文件
fs.readFile('./file/hh.txt','utf-8',(err,data)=>{
  if(!err){
    console.log(data);
  }else
  console.log(err);
})
// 1.2 读取二进制文件,不传入文件编码时，data返回一个buffer对象(和数组不同)
fs.readFile('./file/cool.jpeg',(err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
    console.log(data.length+'bytes');
    let s=data.toString('utf-8');
    //console.log(s);//buffer -> string
    let b=Buffer.from(s,'utf-8'); //string -> buffer
    console.log(b);
  }
})
// 1.3 同步读文件synchronized     asynchronous
try {
  let data=fs.readFileSync('./file/hh.txt','utf-8');
  console.log(data);
} catch (error) {
  console.log('出错了');
}
