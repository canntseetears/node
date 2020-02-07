const Koa=require('koa');
const app=new Koa();
/* app.use(async(ctx,next)=>{
  await next();
  ctx.response.type='text/html';
  ctx.response.body='<h3>hello world</h3>';
}); */
app.use(async (ctx, next) => {
  console.log(`process${ctx.request.method} ${ctx.request.url}...`); // 打印URL
  await next(); // 调用下一个middleware中间件
});
// app.use(async (ctx, next) => {
  //   const start = new Date().getTime(); // 当前时间
  //   await next(); // 调用下一个middleware
  //   const ms = new Date().getTime() - start; // 耗费时间
  //   console.log(`Time: ${ms}ms`); // 打印耗费时间
  // });
  // app.use(async (ctx, next) => {
    //   await next();
    //   ctx.response.type = 'text/html';
    //   ctx.response.body = '<h1>Hello, koa2!</h1>';
    // });
    
//const router=require('koa-router')();//koa-router返回函数
//add router
router.get('/hello/:name',async(ctx, next)=>{
  let name=ctx.params.name;
  ctx.response.body = `<h3>hello ${name}</h3>`;
})
/* router.get('/',async (ctx, next)=>{
  //cookies
  const n=Number(ctx.cookies.get('view') || 0)+1;
  ctx.cookies.set('view',n);
  ctx.response.body = `<p>index,访问了${n}次</p>
  <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
  </form>`;
});
router.post('/signin',async (ctx, next)=>{
  let name=ctx.request.body.name || '';
  let password=ctx.request.body.password || '';
  if(name === 'koa' && password === '666'){
    ctx.response.body=`hello ${name}!`;
  }else{
    ctx.response.body='<h3>login failed</h3><a href="/">try again</a>';
  }
}) */
const fs=require('fs');
let files=fs.readdirSync(__dirname+'/controllers');//返回包含“指定目录下所有文件名称”的数组对象。
let js_file=files.filter((f)=>f.endsWith('.js'));//拿出JS文件，endsWith ES6
for (const f of js_file) {
  let mapping=require(__dirname+'/controllers/'+f);//导入每个js完整路径
  for (const key in mapping) {
    //这里forin只遍历属性，是module.exports导出对象的遍历
    if (key.startsWith('GET')) {
      let path= key.substring(4); //获取请求路径sus方法从4开始截取
      router.get(path,mapping[key]);    
    }else if(key.startsWith('POST')){
      let path=key.substring(5);
      router.post(path,mapping[key])
    }else{
      console.log(`invalid URL: ${url}`);
    }
  }
}


//koa-body解析原始request请求处理表单
const koaBody=require('koa-body');
app.use(koaBody());  //注意返回函数
//add router middleware
app.use(router.routes());
app.listen(3000);