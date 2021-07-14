var foo = "hollo World!";

console.log(foo)

var fs = require('fs');

fs.readFile('./data/aaa.txt',function(error,data){
    
    if(error){
        console.log('读取文件失败')
    }else{
        console.log(data.toString())
    console.log(data)
    }
})