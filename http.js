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
    //告诉浏览器解析格式，解决中文乱码问题
    // response.setHeader('Content-Type','text/plain;charset=utf-8')
    // response.end('hollo world,世界');
    var url = request.url;
    if(url==='/plain'){
        // text/plain普通文本
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.end('hollo world,世界');
    }else if(url==='/html'){
        // text/html html文本
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.end('<p>hollo world,世界</p>');

    }

    // response.end('hollo world');
})
//绑定端口号
server.listen(3000,function(){
    console.log('服务器启动了，可以访问了')
})