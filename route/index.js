//从app.js 转到 index.js
module.exports = (req, res) => {
    // res.send('欢迎来到听歌识曲，访问http://127.0.0.1');
    res.render('index');
}