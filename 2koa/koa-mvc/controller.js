//处理URL的middle
const fs = require('fs');
function addMapping(router, mapping) {
  for (const key in mapping) {
    //这里forin只遍历属性，是module.exports导出对象的遍历
    if (key.startsWith('GET')) {
      let path = key.substring(4); //获取请求路径sus方法从4开始截取
      router.get(path, mapping[key]);
    } else if (key.startsWith('POST')) {
      let path = key.substring(5);
      router.post(path, mapping[key])
    } else {
      console.log(`invalid URL: ${url}`);
    }
  }
}
function addControllers(router) {
  let files = fs.readdirSync(__dirname + '/controllers'); //返回包含“指定目录下所有文件名称”的数组对象。
  let js_file = files.filter((f) => f.endsWith('.js')); //拿出JS文件，endsWith ES6
  for (const f of js_file) {
    let mapping = require(__dirname + '/controllers/' + f); //导入每个js完整路径
    addMapping(router, mapping);
  }
}
module.exports=function(dir){
  let controllers_dir=dir || 'controllers';
  const router = require('koa-router')(); //koa-router返回函数
  addControllers(router,controllers_dir);
  return router.routes();
}
