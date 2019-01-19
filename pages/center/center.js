// pages/center/center.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    userimg:null,
    currentSize:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getUserInfo({
      success: function (res) {
         that.setData({
           username: res.userInfo.nickName,
           userimg: res.userInfo.avatarUrl,
         })
      }
    });
    wx.getStorageInfo({
      success(res) {
        console.log(res.currentSize);
        that.setData({
          currentSize: res.currentSize,
        })
      }
    })
  },
  //清除缓存
  clearStorage(){
    var that=this;
     wx.clearStorage({
        success: (res) => {
          console.log(res);
          that.setData({
            currentSize: '0'
          })
        }
      });
  },
  //换头像
  changeImage: () => {
    var that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(res)=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        //上传图片
        wx.uploadFile({
          url: 'https://wx.qlogo.cn/mmopen',
          filePath: tempFilePaths[0],
          name: 'file',
          success:(res)=>{
            const data = res.data
            // do something
            console.log(tempFilePaths[0]);
            that.setData({
              userimg: tempFilePaths[0],
            })
            console.log(userimg);
          }
        })
      }
    });
  },
  //分享给朋友
  sharefriend:()=>{
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: ()=> {
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