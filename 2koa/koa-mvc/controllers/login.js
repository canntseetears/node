let fn_sign=async(ctx,next)=>{
  let email=ctx.request.body.email || '';
  let password= ctx.request.body.password || '';
  if(email==='comic@qq.com' && password==='suki'){
    const n=Number(ctx.cookies.get('view') || 0)+1;
    ctx.cookies.set('view',n);
    await ctx.render('login/login_ok',{title:'登录成功'})
  }else{
    await ctx.render('login/login_fail',{title:'登录失败！'})
  }
}
let fn_login=async(ctx,next)=>{
  await ctx.render('login/login',{title:'登录'});
}
module.exports={
  'GET /login':fn_login,
  'POST /login':fn_sign
}
