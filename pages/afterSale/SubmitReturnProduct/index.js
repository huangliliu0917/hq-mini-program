// pages/afterSale/SubmitReturnProduct/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proposal: ['请选择申请方式', '我要退款'],
    pursueReason: ['请选择申请原因', '跟卖家协商,双方同意', '买错,不想要了', '商品质量有问题', '没有收到货', '其他原因']
  },
  bindProposalChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      proposalIndex: e.detail.value
    })
  },
  bindPursueReason: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

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