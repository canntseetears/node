let fn_index=async(ctx,next)=>{
  //注意必须加await
  await ctx.render('index',{title:'登录'});
}
module.exports={
  'GET /':fn_index
}