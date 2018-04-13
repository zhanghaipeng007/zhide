var QQMapWX = require('../../ditu/qqmap-wx-jssdk.js');
var qqmapsdk;

// import initDatepicker from '../../template/datepicker/index';
// const conf = {
//   onShow: function () {
//     initDatepicker({
//       // showInput: false, // 默认为 true
//       // placeholder: '请选择日期', // input 输入框placeholder值
//       // type: 'normal', // [normal 普通单选模式(默认), timearea 时间段选择模式(待开发), multiSelect 多选模式(待完善)]
//     });
//   }
// };
// Page(conf);

Page({
  /**
   * 页面的初始数据
   */
  data: {
    areaIndex: 0,
    area: ['选择岗位', 'web前端工程师', 'UI', 'PHP'],
    bb: 0,
    b: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    learnn: 0,
    learn: ['学历不限', '初中', '高中', '大学', '本科', '本科以上'],
    expp: 0,
    exp: ['经验不限', '3年', '4年', '5年以上'],
    moneyy: 0,
    money: ['请选择给薪空间', '8000-10000', '10000-20000', '20000以上'],


    hcatalogs: [

      {
        "hcatalogName": "全职",
        "hselect": 1
      },
      {
        "hcatalogName": "兼职",
        "hselect": 2
      },
      {
        "hcatalogName": "实习",
        "hselect": 3
      },
      {
        "hcatalogName": "校园",
        "hselect": 4
      }


    ],
    hcatalogSelect: 0,//判断是否选中


    name: "",
    wx: '',
    datess: [
      { "data_name": "0", "name": "节日福利", "state": 0 },
      { "data_name": "1", "name": "不加班", "state": 0 },
      { "data_name": "2", "name": "14薪", "state": 0 },
      { "data_name": "3", "name": "住房补贴", "state": 0 },
      { "data_name": "4", "name": "无试用期", "state": 0 },
      { "data_name": "5", "name": "免息房贷", "state": 0 },
      { "data_name": "6", "name": "每年多次调薪", "state": 0 },
      { "data_name": "7", "name": "周末双休", "state": 0 },
      { "data_name": "8", "name": "五险一金", "state": 0 },
      { "data_name": "9", "name": "年底双薪", "state": 0 },
      { "data_name": "10", "name": "绩效奖金", "state": 0 },
      { "data_name": "11", "name": "年终分红", "state": 0 },
      { "data_name": "12", "name": "股票期权", "state": 0 },
      { "data_name": "13", "name": "加班补助", "state": 0 },
      { "data_name": "14", "name": "全勤奖", "state": 0 },
      { "data_name": "9", "name": "包吃", "state": 0 },
      { "data_name": "10", "name": "包住", "state": 0 },
      { "data_name": "11", "name": "交通补助", "state": 0 },
      { "data_name": "12", "name": "餐补", "state": 0 },
      { "data_name": "13", "name": "房补", "state": 0 },
      { "data_name": "14", "name": "通讯补贴", "state": 0 },
      { "data_name": "9", "name": "采暖补贴", "state": 0 },
      { "data_name": "10", "name": "带薪年假", "state": 0 },
      { "data_name": "11", "name": "弹性工作", "state": 0 },
      { "data_name": "12", "name": "补充医疗保险", "state": 0 },
      { "data_name": "13", "name": "定期体检", "state": 0 },
      { "data_name": "14", "name": "免费班车", "state": 0 },
      { "data_name": "10", "name": "员工旅游", "state": 0 },
      { "data_name": "11", "name": "高温补贴", "state": 0 },
      { "data_name": "12", "name": "健身俱乐部", "state": 0 },
      { "data_name": "13", "name": "创业公司", "state": 0 }
    ]
  },


  select_date: function (e) {
    var index = e.currentTarget.dataset.key;
    if (this.data.datess[index].state == 1) {
      this.data.datess[index].state = 0;

    } else if (this.data.datess[index].state == 0) {
      this.data.datess[index].state = 1;

    }
    this.setData({
      datess: this.data.datess,
    });

  },
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  et() {
    var _thsh = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude

        wx.chooseLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          success: function (res) {
            _thsh.setData({
              name: res.name
            })
          }
        })
      }
    })
  },
  hchooseCatalog: function (data) {
    var that = this;
    that.setData({//把选中值放入判断值
      hcatalogSelect: data.currentTarget.dataset.select
    })
  },

  bindCasPickerChange: function (e) {
    this.setData({
      areaIndex: e.detail.value
    })
  },
  bbb: function (e) {
    this.setData({
      bb: e.detail.value
    })
  },
  learnnn: function (e) {
    this.setData({
      learnn: e.detail.value
    })
  },
  exppp: function (e) {
    this.setData({
      expp: e.detail.value
    })
  },
  moneyyy: function (e) {
    this.setData({
      moneyy: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this

    qqmapsdk = new QQMapWX({
      key: 'SDIBZ-YE3WK-QQQJ4-APZ5K-V5MVQ-VCF6C'
    });

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            that.setData({
              wx: addressRes.result.address
            })
          }
        })
      }
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