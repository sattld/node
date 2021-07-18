var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    var wwwDir = 'C:/Users/lichen/Desktop/node代码仓库/node/初步实现apache/www';
    filePath = '/index.html';

    if(url!=='/'){
        filePath = url;
    }
    fs.readFile(wwwDir+filePath,function(err,data){
        if(err){
            res.end('404 no found');
            return;
        }
        res.end(data);
    })
})

server.listen(3000,function(){
    console.log('服务器启动了')
})