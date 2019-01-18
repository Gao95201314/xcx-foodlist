// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playIndex: null,//用于记录当前播放的视频的索引值
    url: [],//video组件可用的url链接
    arr: ['https://v.qq.com/txp/iframe/player.html?vid=m0827jfx7mv', 'https://v.qq.com/txp/iframe/player.html?vid=g08260q1y9x', 'https://v.qq.com/txp/iframe/player.html?vid=t0507dzy0h8', 'https://v.qq.com/txp/iframe/player.html?vid=a0637wo1zhz', 'https://v.qq.com/txp/iframe/player.html?vid=s0820t3fq5u', 'https://v.qq.com/txp/iframe/player.html?vid=m0826bcmn97','https://v.qq.com/txp/iframe/player.html?vid=r0825t4zwmp'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
   for(var i=0;i<_this.data.arr.length;i++){
     var url = _this.data.arr[i];
     //通过正则表达式拿到分享地址中vid的值
     if (url.includes("vid=")) {
       var vid = takeParam(url, "vid");

     }
     //此函数为获取url中指定参数的函数
     function takeParam(url, key) {

       var a = url;
       var b = key;
       try {
         var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
         return reg.exec(a).toString().split("=")[1];
       } catch (e) {
         console.log(e);
         console.log("正则表达式取参数值错误" + key);
       }
       return "";
     }

     //通过以下接口拿到视频的详细参数 通过正则拼装成一个可以在小程序中使用的URl
     wx.request({
       url: "https://vv.video.qq.com/getinfo?vid=" + vid + "&platform=101001&charge=0&otype=json",
       method: 'get',
       header: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       success: function (res) {

         var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
         var dataJson1 = dataJson.replace(/;qwe/, '');
         var data = JSON.parse(dataJson1);
         var url = data.vl.vi[0].ul.ui[0].url
         var url2 = url.replace(/http/, "https"); //把'http'替换为https
         var fu = data.vl.vi[0].fn
         var fvkey = data.vl.vi[0].fvkey
         var a = url2 + fu + '?vkey=' + fvkey
         _this.setData({
           url:[..._this.data.url,a]
         })
       }
     })
   }
  },
  //判断播放下一个停止下一个
  videoPlay:function(e){
    var curIdx = e.target.id;
    // 没有播放时播放视频
    if (this.data.playIndex===null) {
      this.setData({
        playIndex: curIdx
      })
      var videoContext = wx.createVideoContext(curIdx); //这里对应的视频id
      videoContext.play();
      //进入全屏模拟器不可以手机可以
      // videoContext.requestFullScreen({ direction: 0 })
    }else{
      if (this.data.playIndex != curIdx) {
        // 有播放时先将prev暂停，再播放当前点击的current
        var videoContextPrev = wx.createVideoContext(this.data.playIndex);
        videoContextPrev.pause();
        var videoContext = wx.createVideoContext(curIdx); //这里对应的视频id
        videoContext.play();
        this.setData({
          playIndex: curIdx
        })
      }
    }
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