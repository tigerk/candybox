var n = null;

Page({
    data: {},
    goAlbum: function () {
        wx.navigateBack({
            delta: 2
        })
    },
    onLoad: function (o) {
        wx.createInterstitialAd && ((n = wx.createInterstitialAd({
            adUnitId: "adunit-46faf356d01e8f5d"
        })).onLoad(function () {
            console.log("onLoad event emit");
        }), n.onError(function (n) {
            console.log("onError event emit", n);
        }), n.onClose(function (n) {
            console.log("onClose event emit", n);
        }));
    },
    onReady: function () { },
    onShow: function () {
        n.show().catch(function (n) {
            console.error(n);
        });
    },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () {
        return {
            path: "/pages/my_module/phoneAlbum/index",
            title: "潮人截图、壁纸分享必备小程序",
            desc: "让您轻松的把截图套上手机壳，再分享截图、壁纸或者App给好友呢！",
            imageUrl: "https://cdn.uiunion.cn/screenshot/images/images-share.png"
        };
    }
});