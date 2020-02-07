let fn_index=async(ctx,next)=>{
  await ctx.render('login/login',{title:'index'})
}
let fn_signin=async(ctx,next)=>{
  let name=ctx.request.body.name || '';
  let password= ctx.request.body.password || '';
  if(name==='koa' && password==='666'){
    const n=Number(ctx.cookies.get('view') || 0)+1;
    ctx.cookies.set('view',n);
    //let obj={n:n,name:name};
    await ctx.render('login/sign',{title:'登录成功',n,name})
  }else{
    await ctx.render('login/signfail',{title:'登录失败！'})
  }
}
module.exports={
  'GET /':fn_index,
  'POST /signin':fn_signin
}