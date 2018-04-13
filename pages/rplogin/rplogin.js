// pages/rplogin/rplogin.js
Page({























  
  radioChange: function (e) {
    var a=(e.detail.value)
    this.setData({
      a: true
    })
    console.log(a)
  },
  nav() {
    console.log(this.data.a)
    if (this.data.a == true){
      console.log("成功");
      wx.navigateTo({
        url: '../rpRelease/rpRelease'
      })
    } else {
      console.log("请选择我已同意")
    }
  },
  zzi() {
    wx.navigateTo({
      url: '../myMap/myMap'
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    a: "",
    diao: 18,
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
  
  }




})