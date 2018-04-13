// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str: "",
    userInfo:{
      Name:"",
      codeV: "",
      Pic:""
    },
  },
  bindInputBlur: function (e) {
    var userName = e.detail.value;
    this.setData({
      str: userName
    });
  },
  btn () {
    // console.log(this.data.str)
    // console.log(this.data.codeV)
    if (this.data.codeV == this.data.str.toUpperCase() ){
      console.log("成功");
        wx.navigateTo({
          url: '../myWork/myWork'
        })
    }else{
      console.log("验证码错误")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var code;
    var _this = this
    var Name = 'userInfo.Name'
    var Pic = 'userInfo.Pic'
    wx.getUserInfo({
      success: function (res) {
          
        var userInfo = res.userInfo //用户基本信息
        // _this.user.nickName = userInfo.nickName //用户名
        // _this.user.avatarUrl = userInfo.avatarUrl //头像链接
        _this.setData({
          [Name]: userInfo.nickName,
          [Pic]: userInfo.avatarUrl
        })
      }
    }),
    // 验证码
    // function createCode (){
      code = "";
      var codeLength = 4;
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
      for (var i = 0; i < codeLength;i++){
        var index = Math.floor(Math.random()*36);
        code += random[index];
      }
      
      var codeV = 'userInfo.codeV'
      this.setData({
        codeV: code
      })
      console.log(this.data.codeV)
    // },
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