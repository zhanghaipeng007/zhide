// pages/rpRegistration/rpRegistration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brands: [],
    objectArray: [
      
      {
        brand: "北京",
        id: 0,
        array: ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县"]
      },
      {
        brand: "天津",
        id: 1,
        array: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟  县"]
      },
      {
        brand: "河北",
        id: 2,
        array: ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"]
      },
      {
        brand: "山西",
        id: 3,
        array: ["大同", "朔州", "忻州", "太原"]
      }
    ],
    object: [],
    brandindex: 0,
    index1: 0,
    check:"",//性别
    zhuce:[
      {name:""}
    ],
    provinces:[]
  },
  bindInputBlur: function (e) {
    var userName = e.detail.value;
    this.setData({
      zhuce: {
        
      }
    });
    console.log(userName)
    console.log(this.data.name)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var objectArray = this.data.objectArray
    var brands = []
    for (var i = 0; i < objectArray.length; i++) {
      brands.push(objectArray[i].brand, )
    }
    this.setData({ brands: brands, object: objectArray[this.data.brandindex].array })
    var _this = this
    // 调取城市接口
    wx.request({
      url:"https://ehcto.com/api/city.json",
      success:function(data){
        //省
        var provinces = [];
        for (i = 0; i < data.data.length; i++){
          var province = data.data[i].name
          provinces.push(province)
          _this.setData({ provinces: [{ name: provinces ,id:[i]}] })
        }
        // console.log(_this.data)
        //市
        for(i in data.data){
          var Data = data.data;
          // console.log(Data)

          for(i in Data){
            var DataName = Data[i];
            // console.log(DataName)
            // for(i in DataName){
            //   console.log(DataName[i].name)
            // }
          }
        }
        // console.log(data.data[1].city)
      }
    })
  },
  bindPickerChange0: function (e) {
    this.setData({ brandindex: e.detail.value, index1: 0 })
    var objectArray = this.data.objectArray
    this.setData({ object: objectArray[this.data.brandindex].array })
  },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
    
  },
  checkboxChange: function (e) {
    this.setData({
      check: e.detail.value
    })
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