let mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://www.zhangyesong.com:27017/test');
connect.then((() => {
    console.log('连接数据库成功');
}), (error => {
    console.log('连接数据库失败' + error);
}));
