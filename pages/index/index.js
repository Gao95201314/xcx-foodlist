Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935292084,2640874667&fm=27&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4127249999,3890697627&fm=27&gp=0.jpg',
    ],
    indicatorDots:true,
    vertical:false,
    circular:true,
    autoplay:true,
    interval:2000,
    duration:500,
    foodArr:[
      {
        url:'/pages/crop/crop',
        src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4171942658,3402394313&fm=27&gp=0.jpg',
        name:'五谷'
      },
      {
        url:'/pages/doctor/doctor',
        src:'http://img0.imgtn.bdimg.com/it/u=61474540,4260967176&fm=26&gp=0.jpg',
        name:'中医'
      },
      {
        url:'/pages/food/food',
        src:'http://img1.imgtn.bdimg.com/it/u=962374716,3405171719&fm=26&gp=0.jpg',
        name:'膳食'
      },
      {
        url:'/pages/foodgroup/foodgroup',
        src:'http://img5.imgtn.bdimg.com/it/u=4113954283,2556895520&fm=26&gp=0.jpg',
        name:'食物库'
      },
      {
        url:'/pages/sport/sport',
        src:'http://img2.imgtn.bdimg.com/it/u=1690024107,464927825&fm=26&gp=0.jpg',
        name:'运动'
      },
      {
        url:'/pages/theme/theme',
        src:'http://img0.imgtn.bdimg.com/it/u=3225983062,50135618&fm=26&gp=0.jpg',
        name:'专题'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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