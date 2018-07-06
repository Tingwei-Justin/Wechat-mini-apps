Component({
  properties: {
    country: {
      type: Array,
      value: ['巴西', '比利时', '英格兰','法国','乌拉圭','俄罗斯','克罗地亚','瑞士']
    },
    index: {
      type: Number,
      value: 0
    }
  },

  data: {
    list: [],
  },

  attached: function () {
    // 可以在这里发起网络请求获取插件的数据
    this.setData({
      list: [{
        team1: '乌拉圭',
        team2: '法国'
      }, {
        team1: '巴西',
        team2: '比利时'
      }, {
        team1: '瑞典',
        team2: '英格兰'
      }, {
        team1: '俄罗斯',
        team2: '克罗地亚'
      }]
    })
  },

  methods: {
    bindPickerChange(e) {
      this.setData({
        index: e.detail.value
      })

      // 触发回调
      this.triggerEvent("changeEvent", { index: this.data.index,
                                        country: this.data.country[this.data.index]})
    }
  }
  
})