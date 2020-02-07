//文件流读取内容
const fs=require('fs');
let rs=fs.createReadStream('./file/hh.txt','utf-8');
rs.on('data',(chunk)=>{
  //注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
  //console.log('data:'+chunk);
  console.log('DATA:')
  console.log(chunk);
})
rs.on('end',()=>console.log('end'));
rs.on('error',(err)=>console.log('error:'+err))

//写入文件，所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable
let ws=fs.createWriteStream('./file/Wstream.txt','utf-8');
ws.write('使用STREAM写入、\n');
ws.write('end~~~~~~~~~~');
ws.end();

//Readable流有一个pipe()方法，Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流
fs.createReadStream('./file/hh.txt').pipe(fs.createWriteStream('./file/Wstream.txt'));