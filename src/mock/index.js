import Mock from 'mockjs'

//使用mockjs模拟数据
Mock.mock('product/search',{
  'ret':0,
  "data":{
    "mtime":"@datetie",
    //三个生成随机数，后面的1主要是确定类型，具体数值取几不重要
    "score|1-800": 1,
    "rank|1-100": 1,
    "stars1-5":1,
    "nickname":"@cname",
    //生成图片
    "img":"@image('200x100','#ffcc33','#FFF','png','Fast Mock)"
  }

});

