const koa=require('koa');
const app=new koa();
const path=require('path');
const static=require('koa-static');
const koaBody=require('koa-body');
const nunjucks=require('koa-nunjucks-2');
const controller=require('./controller')
//第一个中间件
app.use(async(ctx,next)=>{
  let start=new Date().getTime();
  await next();
  let exeTime=new Date().getTime()-start;
  ctx.response.set('X-Response-Time',`${exeTime}ms`);
})
//第二个处理静态文件
app.use(static(path.join(__dirname,'static')));
//第三个解析POST请求
app.use(koaBody());
//第四个使用NUNJUCKS模板渲染
app.use(nunjucks({
  ext:'njk',
  path:path.join(__dirname,'views'),
  nunjucksConfig:{
    trimBlocks:true
  }
}))
//第五个处理URL路由
app.use(controller());

app.listen(3000);
console.log('app started at port http://localhost:3000 ...');
