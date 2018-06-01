var app = getApp()

// pages/usercenter/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  // 跳转至我的团队
  _goMyGroup: function() {
    wx.navigateTo({
      url: '../myGroup/myGroup'
    })
  },
  // 跳转至收益中心
  _goRevenueCenter: function() {
    wx.navigateTo({
      url: '../revenueCenter/revenueCenter'
    })
  },

  // 跳转至收藏夹
  _goCollectGoods: function() {
    wx.navigateTo({
      url: '../collectgoods/collectgoods'
    })
  },
  _goFeedback: function() {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },
  _goMyOrderList: function() {
    wx.navigateTo({
      url: '../order/order-list'
    })
  },
  _goMyBalance:function(){
    wx.navigateTo({
      url: 'balance/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
