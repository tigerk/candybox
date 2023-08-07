var e = null;

Page({
  data: {
    msg: "",
    img: ""
  },

  goAlbum: function () {
    var that = this
    wx.chooseImage({
      count: that.data.count, // 默认3
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths[0];
        wx.hideLoading()
        wx.getImageInfo({
          src: tempFilePaths,
          success: function (n) {
            var o = n.height / n.width;
            that.goIndex(n.width, n.height, o, n.path);
          }
        });
      }
    })
  },
  goIndex: function (e, n, o, t) {
    wx.navigateTo({
      url: "/pages/my_module/phoneAlbum/display/index?pic=" + t + "&k=" + o + "&width=" + e + "&height=" + n
    });
  },
  goAbout: function () {
    wx.navigateTo({
      url: "/pages/about/about"
    });
  },
  paytome: function () {
    wx.previewImage({
      urls: [""],
      success: function (e) { }
    });
  },
  onShareTimeline: function () {
    return {
      title: "推荐使用潮人截图、壁纸分享必备小程序",
      imageUrl: "https://cdn.uiunion.cn/screenshot/images/images-share.png"
    };
  },
  onShareAppMessage: function () {
    return {
      path: "/pagesA/pages/album/index",
      title: "推荐使用潮人截图、壁纸分享必备小程序",
      desc: "让您轻松的把截图套上手机壳，再分享截图、壁纸或者App给好友呢！",
      imageUrl: "https://cdn.uiunion.cn/screenshot/images/images-share.png"
    };
  },
  onLoad: function (a) {
    var that = this;

  },
  showinte: function () {
    var that = this;
    let InterstitialAd;
    if (that.data.appConfig.ad.wxinter) {
      if (wx.createInterstitialAd) {
        InterstitialAd = wx.createInterstitialAd({
          adUnitId: that.data.appConfig.ad.wxinter
        })
        InterstitialAd.onLoad(() => { })
        InterstitialAd.offClose();
        InterstitialAd.offError();
        InterstitialAd.onError((err) => { })
        InterstitialAd.onClose(() => { })
      }
      // 在适合的场景显示插屏广告
      if (InterstitialAd) {
        if (that.data.appConfig.ad.insetgp == 1) {
          that.inadset = setInterval(() => {
            InterstitialAd.show().catch((err) => {
              console.error(err)
            })
          }, that.data.appConfig.ad.wxinsettime * 1000)
        } else {
          setTimeout(() => {
            InterstitialAd.show().catch((err) => {
              console.error(err)
            })
          }, that.data.appConfig.ad.wxinsettime * 1000)
        }
      }
    }
  },
});