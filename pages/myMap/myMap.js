Page({
  /** 
   * 页面的初始数据 
   */
    et(){
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
  data: {
    name:"",
    orientationList: [
      { id: "01", region: "A" },
      { id: "02", region: "B" },
      { id: "03", region: "C" },
      { id: "04", region: "D" },
      { id: "05", region: "E" },
      { id: "06", region: "F" },
      { id: "07", region: "G" },
      { id: "08", region: "H" },
      { id: "10", region: "J" },
      { id: "11", region: "K" },
      { id: "12", region: "L" },
      { id: "13", region: "M" },
      { id: "14", region: "N" },   
      { id: "15", region: "O" },
      { id: "16", region: "P" },
      { id: "17", region: "Q" },
      { id: "18", region: "R" },
      { id: "19", region: "S" },
      { id: "20", region: "T" },
      { id: "21", region: "U" },
      { id: "22", region: "V" },
      { id: "23", region: "W" },
      { id: "24", region: "X" },
      { id: "25", region: "Y" },
      { id: "26", region: "Z" }
    ],
    act_addList: [
      {
        id: "01", region: "A",
        city: [
        { id: "0101", name: "澳门" },
        { id: "0102", name: "安徽" },
        { id: "0103", name: "安康" },
        { id: "0104", name: "安顺" },
        { id: "0105", name: "安庆" },
        { id: "0106", name: "安阳" }
        ]
      },
      {
        id: "02", region: "B",
        city: [
        { id: "0201", name: "北京" },
        { id: "0202", name: "保定" },
        { id: "0203", name: "包头" },
        { id: "0204", name: "滨州" },
        { id: "0205", name: "宝鸡" },
        { id: "0206", name: "本溪" },
        { id: "0207", name: "北海" },
        ]
      },
      {
        id: "03", region: "C",
        city: [
        { id: "0303", name: "长春" },
        { id: "0304", name: "长治" },
        { id: "0305", name: "重庆" },
        { id: "0306", name: "沧州" },
        { id: "0307", name: "昌吉" },
        { id: "0308", name: "承德" }
        ]
      },
      {
        id: "04", region: "D",
        city: [
          { id: "0401", name: "大同" },
          { id: "0407", name: "东莞" },
          { id: "0408", name: "大连" },
          { id: "0409", name: "大理" },
          { id: "0410", name: "德州" }
        ]
      },
      { id: "05", region: "E", 
      city: [
        { id: "0501", name: "鄂尔多斯" },
        { id: "0501", name: "恩施" }
        ] },
      {
        id: "06", region: "F",
        city: [{ id: "0603", name: "佛山" },
        { id: "0604", name: "抚顺" },
        { id: "0605", name: "福州" },
        { id: "0606", name: "阜阳" },
        { id: "0607", name: "f防城港" }
        ]
      },
      {
        id: "07", region: "G",
        city: [
        { id: "0703", name: "广东" },
        { id: "0704", name: "广州" },
        { id: "0701", name: "广元" },
        { id: "0707", name: "贵州" },
        { id: "0708", name: "贵阳" },
        { id: "0709", name: "固原" },
        { id: "0710", name: "桂林" },
        { id: "0711", name: "格尔木" }
        ]
      },
      {
        id: "08", region: "H",
        city: [
          { id: "0803", name: "杭州" },
          { id: "0804", name: "合肥" },
          { id: "0801", name: "海口" },
          { id: "0807", name: "淮安" },
          { id: "0808", name: "黄山" },
          { id: "0809", name: "呼伦贝尔" },
          { id: "0810", name: "湖州" },
          { id: "0811", name: "呼和浩特" },
          { id: "0811", name: "h葫芦岛" }
        ]
      },
      {
        id: "10", region: "J",
        city: [
          { id: "0903", name: "吉安" },
          { id: "0904", name: "晋城" },
          { id: "0901", name: "金昌" },
          { id: "0907", name: "济南" },
          { id: "0908", name: "荆州" },
          { id: "0909", name: "济南" },
          { id: "0910", name: "景德镇" },
          { id: "0911", name: "佳木斯" },
          { id: "0912", name: "焦作" },
          { id: "0902", name: "江阴" }
        ]
      },
      {
        id: "11", region: "K",
        city: [
          { id: "1003", name: "开封" },
          { id: "1004", name: "昆明" },
          { id: "1001", name: "凯里" }
        ]
      },
      {
        id: "12", region: "L",
        city: [
          { id: "1103", name: "吕梁" },
          { id: "1104", name: "丽江" },
          { id: "1101", name: "廊坊" },
          { id: "1107", name: "辽宁" },
          { id: "1108", name: "兰州" },
          { id: "1109", name: "拉萨" },
          { id: "1110", name: "泸州" }
        ]
      },
      {
        id: "13", region: "M",
        city: [
          { id: "1203", name: "牡丹江" },
          { id: "1204", name: "眉山" },
          { id: "1201", name: "绵阳" },
          { id: "1207", name: "马鞍山" }
        ]
      },
      {
        id: "14", region: "N",
        city: [
          { id: "1303", name: "宁波" },
          { id: "1304", name: "南昌" },
          { id: "1301", name: "南京" },
          { id: "1307", name: "南宁" }
        ]
      },
      {
        id: "15", region: "P",
        city: [
          { id: "1403", name: "平顶山" },
          { id: "1404", name: "普洱" },
          { id: "1401", name: "濮阳" }
        ]
      },
      {
        id: "17", region: "Q",
        city: [
          { id: "1503", name: "青岛" },
          { id: "1504", name: "秦皇岛" },
          { id: "1501", name: "泉州" }
        ]
      },
      {
        id: "18", region: "R",
        city: [
          { id: "1603", name: "日喀则" },
          { id: "1604", name: "日照" }
        ]
      },
      {
        id: "19", region: "S",
        city: [
          { id: "1903", name: "三亚" },
          { id: "1904", name: "沈阳" },
          { id: "1901", name: "深圳" },
          { id: "1907", name: "苏州" },
          { id: "1908", name: "石家庄" },
          { id: "1909", name: "三门峡" },
          { id: "1910", name: "上海" },
          { id: "1911", name: "朔州" }
        ]
      },
      {
        id: "20", region: "T",
        city: [
          { id: "2003", name: "太原" },
          { id: "2004", name: "唐山" },
          { id: "2001", name: "天津" },
          { id: "2007", name: "铁岭" },
          { id: "2008", name: "泰安" }
        ]
      },
      {
        id: "21", region: "W",
        city: [
          { id: "2103", name: "威海" },
          { id: "2104", name: "潍坊" },
          { id: "2101", name: "温州" }
        ]
      },
      {
        id: "24", region: "X",
        city: [
          { id: "2203", name: "厦门" },
          { id: "2204", name: "西安" },
          { id: "2201", name: "许昌" },
          { id: "2207", name: "襄阳" },
          { id: "2208", name: "咸宁" },
          { id: "2209", name: "徐州" },
          { id: "2210", name: "忻州" },
          { id: "2211", name: "香格里拉" }
        ]
      },
      {
        id: "25", region: "Y",
        city: [
          { id: "2303", name: "盐城" },
          { id: "2304", name: "阳泉" },
          { id: "2301", name: "烟台" },
          { id: "2307", name: "运城" },
          { id: "2308", name: "扬州" }
        ]
      },
      {
        id: "26", region: "Z",
        city: [
          { id: "2403", name: "枣庄" },
          { id: "2404", name: "周口" },
          { id: "2401", name: "遵义" },
          { id: "2407", name: "郑州" },
          { id: "2408", name: "镇江" },
          { id: "2409", name: "张家界" },
          { id: "2410", name: "张家口" },
          { id: "2411", name: "珠海" }
        ]
      },
    ],
    toView: 'inToView01',
  },
  scrollToViewFn: function (e) {
    var _id = e.target.dataset.id;
    this.setData({
      toView: 'inToView' + _id
    })
    console.log(this.data.toView)
  },
  onLoad: function (options) {
  }
}) 


