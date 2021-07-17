var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function(req,res){
    console.log('收到请求')
    var url = req.url;
    if(url==='/index'){
        fs.readFile('./data/index.html',function(error,data){
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('获取文件失败，请稍后再试')
            }else{
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data)
            }
        })
    }else if(url==='/img'){
        fs.readFile('./img/tips.jpg',function(error,data){
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('获取文件失败，请稍后再试')
            }else{
                res.setHeader('Content-Type','image/jpeg');
                res.end(data)
            }
        })
    }
})
server.listen(3000,function(){
    console.log('服务器启动了')
})