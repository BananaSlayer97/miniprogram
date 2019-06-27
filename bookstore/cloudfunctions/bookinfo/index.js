// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//声明一个封装对戏
var rq = require("request-promise")


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  console.log("bookinfo云函数:"+event)
 
 //通过封装对象，调用方法得到最终的数据，并进行返回
  var res =   rq('https://api.douban.com/v2/book/isbn/'+event.isbn).then(html =>{
    return html;
  }).catch(err =>{
    console.log(err);
  })
 
  return res;
}