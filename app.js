//引入express框架
const express = require('express');

//导入path路径模块
const path = require('path');

//导入模板
const template = require('art-template');

//创建网站服务器对象
const app = express();

//连接数据库
require('./model/connect');

//托管静态资源文件
app.use(express.static('public'));

//配置view视图
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

//创建一个首页路由
app.get('/', (require('./route/index')));
//音乐上传的路由
app.get('/upload', (require('./route/upload')));

//监听一个端口
app.listen(80, () => {
    console.log('服务器启动成功')
})