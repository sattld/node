var express = require('express');
var path = require('path');
var app = express();

//开放静态资源
app.use(express.static('img'))
app.use(express.static('node_modules'))
// app.use('/img', express.static('img'))
// app.use('/public', express.static('img'))

//配置art-template
app.engine('html', require('express-art-template'));

//设置art-template读取模板的默认路径   最后的views可以改成public之类的文件夹
app.set('views', path.join(__dirname, 'views'));

app.get('/admin', function (req, res) {
    //art-template渲染页面的时候默认从views文件夹里面找
    res.render('admin.html');
});

app.get('/',function(req,res){
    res.end('hello world');
})
app.get('/aaa',function(req,res){
    res.end('hello world');
})

app.listen(3000,function(){
    console.log('服务器启动了')
})