const Koa=require('koa');
const app=new Koa();
const controller=require('./controller');
const koaBody=require('koa-body');//koa-body解析原始request请求处理表单
const nunjucks=require('koa-nunjucks-2');
const path=require('path');

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});
app.use(nunjucks({
  ext:'njk',
  path:path.join(__dirname,'views'),
  nunjucksConfig:{
    trimBlocks:true
  }
}))
app.use(koaBody());  //注意返回函数
app.use(controller());
app.listen(3000);
console.log('app started at port http://localhost:3000 ...');