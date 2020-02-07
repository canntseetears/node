//crypto模块的目的是为了提供通用的加密和哈希算法。
const crypto=require('crypto');
const hash=crypto.createHash('md5');
hash.update('hello world');
console.log(hash.digest('hex'));TANGRAM__PSP_4__password
