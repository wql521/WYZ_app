// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: ''

  },
  selection_input: function(e) {
    const newinputValue = e.detail.value; // 直接使用 e.detail.value
    console.log(newinputValue);
    if (newinputValue == 123) {
      wx.redirectTo({
          url: '/pages/calculator/calculator'  // 目标页面路径
      });
      console.log("跳转到计算机页面");
    } else if (newinputValue == 521) {
      wx.redirectTo({
          url: '/pages/love/love'  // 目标页面路径
      });
      console.log("跳转到表白页面")
    } else {
      // 可以添加一个默认分支来处理不匹配的情况
      console.log('输入的值不匹配任何条件');
    }
    this.setData({
      inputValue: newinputValue
  });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})