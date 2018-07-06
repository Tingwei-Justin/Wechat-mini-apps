var data = 'init data'

// 获取插件信息
function getPluginInfo() {
  return {
    name: 'region champion',
    version: '1.0.0',
    date: '2018-07-06'
  }
}


function getData() {
  return data
}

function setData(value) {
  data = value
}

module.exports = {
  getData: getData,
  setData: setData,
  getPluginInfo
}