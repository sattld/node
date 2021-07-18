var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request',function(req,res){
    var url = req.url;
    fs.readFile('./temeplate.html',function(err,data){
        if(err){
            return res.end('文件不存在')
        }
        fs.readdir('./www',function(err,fileData){
            if(err){
                return res.end('文件不存在');
            }
            var contentStr = '';
            fileData.map(function(v,k){
                contentStr += `<tr>
                    <td data-value="img/"><a class="icon dir" href="/C:/Users/lichen/Desktop/node%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93/node/%E5%88%9D%E6%AD%A5%E5%AE%9E%E7%8E%B0apache/www/img/">${v}/</a></td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1626508699">2021/7/17 下午3:58:19</td>
                </tr>`
            })
            data = data.toString().replace('^_^',contentStr);
            res.end(data)
        })
    })
})

server.listen(3000,function(){
    console.log('服务器启动了')
})