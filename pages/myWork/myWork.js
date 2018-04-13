//index.js
//获取应用实例
const app = getApp()

Page({
  


  // onLoad: function (options) {
  //   this.setData({
  //     companyUrl: App.globalData.companyUrl
  //   })
  //   wx.request({
  //     url: "this.data.companyUrl",
  //     success: function (e) {
  //       _this.setData({
  //         arr: e.data
  //       })
  //     }
  //   })
  // },  





  nav() {
    wx.navigateTo({
      url:'../myMap/myMap'
    })
  },
  nvv(){
    wx.navigateTo({
      url: '../details/details'
    })
  },
  wor() {
    wx.navigateTo({
      url: '../workDetails/workDetails'
    })
  },
  data: {
    companyUrl:'',
    arr:[],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../myMap/myMap'
    })
  },
  onLoad: function () {
    var that = this;
    this.setData({
      companyUrl: app.globalData.companyUrl
    })
    wx.request({
      url: that.data.companyUrl,
      success: function (e) {
        console.log(e.data)
        that.setData({
           arr: e.data
        })
      }
    })



   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  }
})