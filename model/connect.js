//实现数据库连接工作
//引入mongoose第三方模块
const mongoose = require('mongoose');
mongoose.set('useCreateIndes', true)
mongoose.set('useFindAndModify', false)

mongoose.connect('mongodb://localhost/songs', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    });