var http = require('http');
//创建服务
var server = http.createServer();

//接受请求
server.on('request',function(request,response){
    console.log('收到请求了');
    console.log('请求路径'+request.url);
    var url = request.url;
    // if(url==='/'){
    //     response.end('index page');
    // }else if(url==='/login'){
    //     response.end('login page');
    // }else{
    //     response.end('404 no found');

    // }

    if(url==='/products'){
        var products = [
            {
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },
        ];
        response.end(JSON.stringify(products));
    }
    //响应
    // response.write('hollo');
    // response.write('node.js');
    // response.end();

    // response.end('hollo world');
})
//绑定端口号
server.listen(3000,function(){
    console.log('服务器启动了，可以访问了')
})