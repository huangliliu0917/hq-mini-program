import config from '../../../config.js'
import wallet from '../../../utils/request/user.js'
const app = getApp();

Page({
  data: {
    pageSize: 10,
    SearchType: 0,
    pageIndex: 1
  },
  _getIntegralList: function() {
    var self = this
    var data = {
      pageSize: this.data.pageSize,
      SearchType: this.data.SearchType,
      pageIndex: this.data.pageIndex
    }
    wallet.getIntegralList(data, function(res) {
      console.log(res.data)
      self.setData({
        itemList: res.data
      })
    })
  },

  onLoad: function(options) {
    var that = this
    wx.showToast({
      title: '努力加载中...',
      icon:'loading',
      success:function(){
        that._getIntegralList()
        wx.hideToast()
      }
    })
  },

  onShow: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})