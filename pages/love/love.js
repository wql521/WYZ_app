// pages/love/love.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickCount: 0, // 点击次数
    topButtonStyle: '', // 上面按钮的样式
    bottomButtonStyle: '', // 下面按钮的样式
    isTopButtonDisabled: false, // 上面按钮是否禁用
    buttonText: '不要', // 按钮初始文字
    buttonTextList: [ // 按钮文字内容数组
      '？你认真的吗…',
      '要不再想想？',
      '不许选这个！ ',
      '我会很伤心…',
      '不行:(',
      '不行:(',
      '不行:(',
      '不行:(',
      '不行:(',
      '不行:(',
    ],
    love_images:'/images/heart.png',
    love_imagesList:[
      "/images/shocked.png",// 震惊
      "/images/think.png", // 思考
      "/images/angry.png", // 生气
      "/images/crying.png", // 哭
      "/images/crying.png", // 之后一直是哭
      "/images/crying.png", // 之后一直是哭
      "/images/crying.png", // 之后一直是哭
      "/images/crying.png", // 之后一直是哭
      "/images/crying.png", // 之后一直是哭
      "/images/crying.png", // 之后一直是哭
    ]
  },

  handleTopButtonClick() {
    const { clickCount, buttonTextList,love_imagesList} = this.data;

    // 如果点击次数达到 10 次，禁用上面的按钮
    if (clickCount >= 10) {
      this.setData({
        isTopButtonDisabled: true
      });
      return;
    }

    // 更新按钮文字
    const newButtonText = buttonTextList[clickCount];

    // 计算缩放比例
    const topScale = 1 - clickCount * 0.05; // 每次缩小 5%
    const bottomScale = 1 + clickCount * 0.1; // 每次放大 10%

    //更新图片
    const new_love_images = love_imagesList[clickCount]; 

    // 更新数据
    this.setData({
      clickCount: clickCount + 1,
      buttonText: newButtonText,
      love_images:new_love_images,
      topButtonStyle: `transform: scale(${topScale});`,
      bottomButtonStyle: `transform: scale(${bottomScale});`

    });
  },

  yesButtonClick() {
    wx.redirectTo({
      url: '/pages/love_success/love_success'  // 目标页面路径
    });
    console.log("表白成功")
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