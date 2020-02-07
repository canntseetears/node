//单线程，异步IO,事件驱动，非阻塞IO， 事件驱动执行的单线程模型

// 1 全局对象global,类似window
global.console;

// 2 内置对象process
process.cwd();//当前工作目录
process.chdir('../2');//切换当前工作，目录
//下一次响应中执行代码
process.nextTick(()=>{
  console.log('不会立即执行')//不会立即执行而是下次事件循环
});
console.log('在下面但是先执行');
console.log('--------');
process.on('exit',(code)=>console.log('about to exit with code:'+code));