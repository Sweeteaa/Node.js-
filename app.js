//引入express框架
const express = require('express')

//创建网站服务器对象
const app = express()

//监听一个端口
app.listen(80, () => {
    console.log('服务器启动成功')
})

//创建一个测试路由
app.get('/', (req, res) => {
    res.send('欢迎来到听歌识曲，访问http://127.0.0.1')
})