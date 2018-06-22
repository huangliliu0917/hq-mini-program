const indexData = require('../../utils/mock/index.js')
Page({
  data: {
    checked: false,
    checkedTitle: '已选 （0）',
    hotItems:[],
    startX: 0, //开始坐标
    startY: 0
  },

  onLoad: function (options) {
    this.setData({
      hotItems: indexData.collectItems
    });
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function(e) {
    console.log(e)
    //开始触摸时 重置所有删除
    this.data.hotItems.forEach(function(v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      hotItems: this.data.hotItems
    })
  },
  //滑动事件处理
  touchmove: function(e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    that.data.hotItems.forEach(function(v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      hotItems: that.data.hotItems
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function(start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function(e) {
    this.data.hotItems.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      hotItems: this.data.hotItems
    })
  },
  // 选中和不选中
  clickFavTab: function(e) {
    var item = e.currentTarget.dataset.item
    var index = e.currentTarget.dataset.index
    var _items = this.data.hotItems
    _items[index].isFav = !item.isFav
    this.setData({
      hotItems: _items
    })
    let num = 0
    for (var i = 0; i < _items.length; i++) {
      if (!_items[i].isFav) {
        num++
      }
    }
    if (num < _items.length) {
      this.setData({
        checked: false,
        checkedTitle: '已选（' + num + '）'
      })
    } else {
      this.setData({
        checked: true,
        checkedTitle: '全选（' + num + '）'
      })
    }
  },

  // 全选全部选
  checkedAll: function(e) {
    var _items = this.data.hotItems
    var check = this.data.checked
    if (!check) {
      for (var i = 0; i < _items.length; i++) {
        if (_items[i].isFav) {
          _items[i].isFav = false
        }
      }
      this.setData({
        hotItems: _items,
        checked: true,
        checkedTitle: '全选（' + _items.length + '）'
      })
    } else {
      for (var i = 0; i < _items.length; i++) {
        if (!_items[i].isFav) {
          _items[i].isFav = true
        }
      }
      this.setData({
        hotItems: _items,
        checked: false,
        checkedTitle: '已选（0）'
      })
    }
  },

  goodsDetails: function(e) {
    wx.navigateTo({
      url: '../goodsdetails/details?goodsid=' + e.currentTarget.dataset.goodsId
    })
  },

  onReady: function() {

  },

  onShow: function() {

  },

  onHide: function() {

  },

  onUnload: function() {

  },

  onPullDownRefresh: function() {

  },

  onReachBottom: function() {

  },

  onShareAppMessage: function() {

  }
})