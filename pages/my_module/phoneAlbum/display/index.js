getApp();
var e = null;
Page({
    data: {
        userImage: "",
        userImageWidth: 0,
        userImageHeight: 0,
        userImageK: 0,
        bgMarginLeft: 20,
        bgMarginTop: 20,
        bgSrc: [{
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-silver.png",
            srcs: [{
                name: "银 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-silver.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "深空灰",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-space-gray.png",
                isCDN: "true"
            }, {
                name: "金 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-gold.png",
                isCDN: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-no.png",
                isCDN: "true"
            }],
            title: "iPhone 11 Pro/Max",
            originBgFrame: [0, 0, 509, 1020],
            originPicFrame: [37, 27, 436, 944],
            originBgOffset: [80, 40]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-desk-2.png",
            srcs: [{
                name: "带刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-desk-2.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-desk-no.png",
                isCDN: "true"
            }],
            title: "iPhone 11 Pro 充电",
            originBgFrame: [0, 0, 943, 1055],
            originPicFrame: [487, 323, 310, 670],
            originBgOffset: [0, 0]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-in-hand-01.png",
            srcs: [{
                name: "带刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-in-hand-01.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-in-hand-01-no.png",
                isCDN: "true"
            }],
            title: "iPhone 11 Pro 手持",
            originBgFrame: [0, 0, 872, 591],
            originPicFrame: [365, 104, 168, 363],
            originBgOffset: [0, 0]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-in-hand-02.png",
            srcs: [{
                name: "带刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-in-hand-02.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-in-hand-02-no.png",
                isCDN: "true"
            }],
            title: "iPhone 11 Pro 手持",
            originBgFrame: [0, 0, 713, 980],
            originPicFrame: [272, 145, 263, 569],
            originBgOffset: [0, 0]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-plants.png",
            srcs: [{
                name: "带刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-plants.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-plants-no.png",
                isCDN: "true"
            }],
            title: "iPhone 11 Pro 多肉",
            originBgFrame: [0, 0, 900, 756],
            originPicFrame: [82, 170, 193, 417],
            originBgOffset: [0, 0]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-card.png",
            srcs: [{
                name: "带刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-card.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-pro-max-card-no.png",
                isCDN: "true"
            }],
            title: "iPhone 11 Pro 黑卡",
            originBgFrame: [0, 0, 829, 728],
            originPicFrame: [129, 124, 187, 403],
            originBgOffset: [0, 0]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-11-white.png",
            srcs: [{
                name: "白 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-white.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "黑 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-black.png",
                isCDN: "true"
            }, {
                name: "红 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-red.png",
                isCDN: "true"
            }, {
                name: "黄 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-yellow.png",
                isCDN: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-11-black-no.png",
                isCDN: "true"
            }],
            title: "iPhone 11",
            originBgFrame: [0, 0, 497, 993],
            originPicFrame: [40, 32, 414, 900],
            originBgOffset: [80, 40]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-8-plus-grey.png",
            srcs: [{
                name: "黑 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-8-plus-grey.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "银 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-8-plus-silver.png",
                isCDN: "true"
            }, {
                name: "金 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-8-plus-gold.png",
                isCDN: "true"
            }],
            title: "iPhone 7/8 Plus",
            originBgFrame: [0, 0, 446, 916],
            originPicFrame: [27, 101, 393, 699],
            originBgOffset: [80, 40]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/iphone-se-space-gray.png",
            srcs: [{
                name: "深空灰",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-se-space-gray.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "玫瑰金",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-se-rose-gold.png",
                isCDN: "true"
            }, {
                name: "金 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-se-gold.png",
                isCDN: "true"
            }, {
                name: "银 色",
                src: "https://yp.jinjinyl.cn/ymimg/iphone-se-gold.png",
                isCDN: "true"
            }],
            title: "iPhone SE/5s/5",
            originBgFrame: [0, 0, 383, 801],
            originPicFrame: [26, 111, 329, 585],
            originBgOffset: [80, 40]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/huawei-mate30.png",
            srcs: [{
                name: "带刘海",
                src: "https://yp.jinjinyl.cn/ymimg/huawei-mate30.png",
                isCDN: "true",
                checked: "true"
            }, {
                name: "无刘海",
                src: "https://yp.jinjinyl.cn/ymimg/huawei-mate30-no.png",
                isCDN: "true"
            }],
            title: "Huawei Mate 30",
            originBgFrame: [0, 0, 360, 668],
            originPicFrame: [35, 22, 288, 625],
            originBgOffset: [40, 24]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/xiaomi-10-pro-sky-blue.png",
            srcs: [{
                name: "星空蓝",
                src: "https://yp.jinjinyl.cn/ymimg/xiaomi-10-pro-sky-blue.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "无摄像头",
                src: "https://yp.jinjinyl.cn/ymimg/xiaomi-10-pro-sky-blue-no.png",
                isCDN: "true"
            }],
            title: "小米10 Pro",
            originBgFrame: [0, 0, 600, 1199],
            originPicFrame: [31, 20, 537, 1163],
            originBgOffset: [64, 58]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/xiaomi-mix-3-no.png",
            srcs: [{
                name: "无后盖",
                src: "https://yp.jinjinyl.cn/ymimg/xiaomi-mix-3-no.png",
                checked: "true",
                isCDN: "true"
            }],
            title: "小米MIX 3",
            originBgFrame: [0, 0, 468, 880],
            originPicFrame: [46, 36, 374, 810],
            originBgOffset: [40, 20]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/xiaomi-mix-3-palace.png",
            srcs: [{
                name: "故宫版",
                src: "https://yp.jinjinyl.cn/ymimg/xiaomi-mix-3-palace.png",
                checked: "true",
                isCDN: "true"
            }, {
                name: "经典黑",
                src: "https://yp.jinjinyl.cn/ymimg/xiaomi-mix-3-black.png",
                isCDN: "true"
            }],
            title: "小米MIX3 带后盖",
            originBgFrame: [0, 0, 782, 880],
            originPicFrame: [341, 28, 382, 828],
            originBgOffset: [64, 58]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/xiaomi-mix-alpho-2.png",
            srcs: [{
                name: "星空蓝",
                src: "https://yp.jinjinyl.cn/ymimg/xiaomi-mix-alpho-2.png",
                checked: "true",
                isCDN: "true"
            }],
            title: "小米MIX Alrha",
            originBgFrame: [0, 0, 604, 881],
            originPicFrame: [198, 204, 264, 572],
            originBgOffset: [0, 0]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/oppo-reno3-pro.png",
            srcs: [{
                name: "日出印象",
                src: "https://yp.jinjinyl.cn/ymimg/oppo-reno3-pro.png",
                isCDN: "true",
                checked: "true"
            }, {
                name: "无摄像头",
                src: "https://yp.jinjinyl.cn/ymimg/oppo-reno3-pro-no.png",
                isCDN: "true"
            }],
            title: "OPPO Reno3 Rro",
            originBgFrame: [0, 0, 600, 1181],
            originPicFrame: [52, 40, 496, 1102],
            originBgOffset: [30, 20]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/one-plus7-pro-black.png",
            srcs: [{
                name: "黑 色",
                src: "https://yp.jinjinyl.cn/ymimg/one-plus7-pro-black.png",
                isCDN: "true",
                checked: "true"
            }],
            title: "One Plus 7 Pro",
            originBgFrame: [0, 0, 538, 980],
            originPicFrame: [57, 29, 423, 914],
            originBgOffset: [0, 40]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/samsung-galaxy-note-10.png",
            srcs: [{
                name: "星空蓝",
                src: "https://yp.jinjinyl.cn/ymimg/samsung-galaxy-note-10.png",
                isCDN: "true",
                checked: "true"
            }, {
                name: "无摄像头",
                src: "https://yp.jinjinyl.cn/ymimg/samsung-galaxy-note-10-no.png",
                isCDN: "true"
            }],
            title: "Samsung Note 10",
            originBgFrame: [0, 0, 702, 1256],
            originPicFrame: [83, 53, 533, 1140],
            originBgOffset: [40, 24]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/samsung-galaxy-s10-silver.png",
            srcs: [{
                name: "黑  色",
                src: "https://yp.jinjinyl.cn/ymimg/samsung-galaxy-s10-silver.png",
                isCDN: "true",
                checked: "true"
            }, {
                name: "无摄像头",
                src: "https://yp.jinjinyl.cn/ymimg/samsung-galaxy-s10-silver-no.png",
                isCDN: "true"
            }],
            title: "Samsung S10",
            originBgFrame: [0, 0, 642, 1228],
            originPicFrame: [56, 51, 530, 1117],
            originBgOffset: [40, 40]
        }, {
            selectedSrcIndex: 0,
            selectedSrc: "https://yp.jinjinyl.cn/ymimg/apple-watch-42mm-silver.png",
            srcs: [{
                name: "银 蓝",
                src: "https://yp.jinjinyl.cn/ymimg/apple-watch-42mm-silver.png",
                isCDN: "true",
                checked: "true"
            }],
            title: "AppleWatch",
            originBgFrame: [0, 0, 512, 950],
            originPicFrame: [100, 280, 312, 390],
            originBgOffset: [58, 0]
        }],
        selectedBgItem: {},
        canvasWidth: 0,
        canvasHeight: 0,
        screenWidth: 375,
        screenHeight: 667,
        windowHeight: 603,
        pixelRatio: 2,
        bgWidth: 225,
        bgHeight: 449,
        picWidth: 180,
        picHeight: 319,
        marginLeft: 23,
        marginTop: 66
    },
    onLoad: function (e) {
        this.setData({
            userImage: e.pic,
            userImageWidth: e.width,
            userImageHeight: e.height,
            userImageK: e.k
        });
        var s = this;
        e.k > 2 ? this.setData({
            selectedBgItem: this.data.bgSrc[3]
        }) : this.setData({
            selectedBgItem: this.data.bgSrc[0]
        }), wx.getSystemInfo({
            success: function (e) {
                s.setData({
                    screenWidth: e.screenWidth,
                    screenHeight: e.screenHeight,
                    windowHeight: e.windowHeight,
                    pixelRatio: e.pixelRatio
                }), s.findPosition(0);
            }
        });
    },
    changeBg: function (e) {
        this.findPosition(e.currentTarget.dataset.index);
    },
    redrawCanvas: function () {
        this.setUpCanvas();
        var e = this.data;
        e.showCanvas = !0;
        var s = e.selectedBgItem.originBgFrame, t = e.selectedBgItem.originPicFrame, i = e.selectedBgItem.originBgOffset, n = t[3] / t[2], c = 0, o = 0, r = t[2], a = t[3];
        n > e.userImageK ? (a = e.userImageHeight * t[2] / e.userImageWidth, o = (t[3] - a) / 2) : (r = e.userImageWidth * t[3] / e.userImageHeight,
            c = (t[2] - r) / 2);
        var u = wx.createCanvasContext("myCanvas");
        u.clearRect(0, 0, s[2] + 2 * i[0], s[3] + 2 * i[1]), u.fillStyle = "#ffffff", u.fillRect(0, 0, s[2] + 2 * i[0], s[3] + 2 * i[1]),
            u.fillStyle = "#000000", u.fillRect(i[0] + t[0], i[1] + t[1], t[2], t[3]), u.drawImage(e.userImage, i[0] + t[0] + c, i[1] + t[1] + o, r, a),
            u.drawImage(e.selectedBgItem.selectedSrc, 0, 0, s[2], s[3], i[0], i[1], s[2], s[3]),
            u.draw(!1, this.saveToAlbum);
    },
    cleanCanvas: function () {
        this.setData({
            canvasHeight: 0,
            canvasWidth: 0
        });
    },
    setUpCanvas: function () {
        var e = this.data.selectedBgItem, s = e.originBgFrame[2] + 2 * e.originBgOffset[0], t = e.originBgFrame[3] + 2 * e.originBgOffset[1];
        this.setData({
            canvasHeight: t,
            canvasWidth: s
        });
    },
    saveToAlbum: function () {
        var e = this;
        wx.canvasToTempFilePath({
            quality: 1,
            canvasId: "myCanvas",
            success: function (s) {
                e.cleanCanvas(), wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function () {
                        wx.saveImageToPhotosAlbum({
                            filePath: s.tempFilePath,
                            success: function (s) {
                                e.showCanvas = !1, wx.navigateTo({
                                    url: "/pages/my_module/phoneAlbum/success/index"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    createPic: function () {
        wx.showLoading({
            title: "制作中"
        });
        var e = this.data.selectedBgItem, s = e.selectedSrcIndex;
        if (e.srcs[s].isCDN) {
            var t = this;
            wx.getImageInfo({
                src: e.srcs[s].src,
                success: function (s) {
                    wx.saveFile({
                        tempFilePath: s.path,
                        success: function (s) {
                            e.selectedSrc = s.savedFilePath, t.redrawCanvas();
                        }
                    });
                }
            });
        } else this.redrawCanvas();
    },
    findPosition: function (e) {
        var s = this.data.bgSrc[e], t = s.originBgFrame[2], i = s.originBgFrame[3], n = s.originPicFrame[2], c = s.originPicFrame[3], o = s.originPicFrame[0], r = s.originPicFrame[1], a = this.data.windowHeight - 220 / this.data.pixelRatio, u = (.6 * this.data.screenWidth - this.data.bgMarginLeft) / t, p = a / i;
        p < u && (u = p);
        var l = o * u - Math.floor(o * u), h = r * u - Math.floor(r * u), g = Math.round(n * u) - n * u, m = Math.round(c * u) - c * u;
        t = Math.round(t * u), i = Math.round(i * u), n = Math.round(n * u), c = Math.round(c * u),
            o = Math.floor(o * u), r = Math.floor(r * u), l >= g && n++, h >= m && c++;
        var d = (a - i) / 2;
        this.setData({
            selectedBgItem: s,
            bgWidth: t,
            bgHeight: i,
            picWidth: n,
            picHeight: c,
            marginLeft: o,
            marginTop: r,
            bgMarginTop: d
        });
    },
    radioChange: function (e) {
        var s = e.detail.value;
        if (s != this.data.selectedBgItem.selectedSrcIndex) {
            for (var t = 0; t < this.data.selectedBgItem.srcs.length; ++t) {
                var i = this.data.selectedBgItem.srcs[t];
                t == s ? (i.checked = !0, this.data.selectedBgItem.selectedSrcIndex = s, this.data.selectedBgItem.selectedSrc = i.src) : i.checked = !1;
            }
            this.setData({
                selectedBgItem: this.data.selectedBgItem
            });
        }
    },
    onShareAppMessage: function () {
        return {
            path: "/pagesA/pages/album/index",
            title: "推荐使用【有料工具】截图、壁纸分享必备小程序",
            desc: "让您轻松的把截图套上手机壳，再分享截图、壁纸或者App给好友呢！",
            imageUrl: "https://cdn.uiunion.cn/screenshot/images/images-share.png"
        };
    },
    onReady: function () {
        wx.createInterstitialAd && ((e = wx.createInterstitialAd({
            adUnitId: "adunit-46faf356d01e8f5d"
        })).onLoad(function () {
            console.log("onLoad event emit");
        }), e.onError(function (e) {
            console.log("onError event emit", e);
        }), e.onClose(function (e) {
            console.log("onClose event emit", e);
        }));
    },
    onShow: function () {
        e && e.show().catch(function (e) {
            console.error(e);
        });
    }
});