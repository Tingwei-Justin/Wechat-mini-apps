var plugin = requirePlugin("myPlugin")
Page({
  onLoad: function() {//接口的调用
    console.log(plugin.getData())
    console.log(plugin.getPluginInfo())
  },
  data: {
    index:2
  },
  changeEvent(e) {
    console.log(e)
    this.setData({
      index: e.detail.index
    })
    console.log("country = " +e.detail.country)
    console.log("index = "+this.data.index)
  },
  submitInfo: function(){
    wx.request({
      url: 'http://t-tizh-miniprogram.chinacloudsites.cn/api/...',
      method: 'POST',
      data: {
        country: this.data.index
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
      }
    })
  }
})