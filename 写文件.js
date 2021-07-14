var fs = require('fs');

fs.writeFile('./data/nihao.md','# 大家好，我是node.js',function(error){
    console.log(error);
    if(error){
        console.log('写文件失败');

    }else{
        console.log('写文件成功');

    }
})