Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * scanCode 扫码方法
   */
  scanCode:function(event){
      //官方扫码事件
      wx.scanCode({
        onlyFromCamera:true,
        scanType: ['barCode'],
        success:res =>{
          console.log("scanCode:"+res.result);

          //扫码成功，往云数据库中添加数据
          wx.cloud.callFunction({
              name:"bookinfo",  //要调用的云函数名称
              data:{            //传递过去的参数
                isbn:res.result
              },success:res =>{
                console.log("callFunction-success:" + res.result);
                var bootString = res.result;
                console.log(JSON.parse(bootString)) 

            },fail: res => {
                console.error("callFunction-fail:"+res);
            }
          })

        },
        fail:res =>{
          console.error(res);
        }
      })

  }
})