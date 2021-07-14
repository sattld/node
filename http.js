var http = require('http');
//创建服务
var server = http.createServer();

//接受请求
server.on('request',function(request,response){
    console.log('收到请求了');
    console.log('请求路径'+request.url);


    //响应
    // response.write('hollo');
    // response.write('node.js');
    // response.end();

    response.end('hollo world');
})
//绑定端口号
server.listen(3000,function(){
    console.log('服务器启动了，可以访问了')
})