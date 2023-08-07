import vendor from './common/vendor.js';

Page({
    /**
     * 页面的初始数据
     */
    data: {
        title: "Hello",
        imageSrc: "./static/bg.png",
        hash: null
    },

    onShareAppMessage: function () { },
    onShareTimeline: function () { },

    upload: function () {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: ["original", "compressed"],
            sourceType: ["album", "camera"],
            success: function (n) {
                wx.showLoading({ title: "AI努力生成中" });
                wx.getFileSystemManager().readFile({
                    filePath: n.tempFilePaths[0], //选择图片返回的相对路径
                    encoding: 'base64', //编码格式
                    success: res => { //成功的回调
                        t.setData({
                            imageSrc: 'data:image/png;base64,' + res.data
                        });
                        wx.request({
                            url: "https://akhaliq-animeganv2.hf.space/api/queue/push/",
                            method: "POST",
                            data: {
                                fn_index: 0,
                                data: [
                                    t.data.imageSrc,
                                    "version 2 (🔺 robustness,🔻 stylization)"
                                ],
                                action: "predict",
                                session_hash: "g16er47pd3p"
                            },
                            success: function (e) {
                                t.setData({
                                    hash: e.data.hash
                                });
                                console.log(t.data.hash);
                                setTimeout(function () {
                                    t.change();
                                }, 2e3);
                            }
                        });
                    }
                })
            }
        });
    },

    change: function () {
        var t = this;
        console.log(this.data.hash);
        wx.request({
            url: "https://akhaliq-animeganv2.hf.space/api/queue/status/",
            method: "POST",
            data: { hash: this.data.hash },
            success: function (n) {
                console.log(n);
                wx.hideLoading();
                t.setData({
                    imageSrc: n.data.data.data[0],
                });
                // t.donwloadImage();
            }
        });
    },

    // 下载图片
    downloadImg: function () {
        if (!this.data.imageSrc) {
            console.log('图片获取失败，请稍后再试')
            return;
        }

        /**
         * 需要去掉 ：'data:image/png;base64,'
         */
        var imgSrc = this.data.imageSrc.replace("data:image/png;base64,", ""); // base64编码
        var save = wx.getFileSystemManager(); // 获取文件管理器对象
        var number = Math.random();
        save.writeFile({
            filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png', // 表示生成一个临时文件名
            data: imgSrc,
            encoding: 'base64',
            success: res => {
                wx.saveImageToPhotosAlbum({
                    filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png',
                    success: function (res) {
                        wx.showToast({
                            title: '保存成功',
                        })
                    },
                    fail: function (err) {
                        console.log(err)
                    }
                })
                console.log(res)
            }, fail: err => {
                if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
                    // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
                    wx.showModal({
                        title: '提示',
                        content: '请授权保存到相册',
                        showCancel: false,
                        success() {
                            wx.openSetting({
                                success(openres) {
                                    console.log("openres", openres)
                                    if (openres.authSetting['scope.writePhotosAlbum']) {
                                        console.log('获取权限成功，再次点击图片即可保存')
                                    } else {
                                        console.log('获取权限失败，无法保存到相册哦~')
                                    }
                                },
                                fail(failerr) {
                                    console.log("failerr", failerr)
                                }
                            })
                        }
                    })
                }
            }
        })

        //图片保存到本地
        // wx.downloadFile({
        //     url: this.data.imageSrc,//图片地址
        //     success(downres) {
        //         // 保存图片到相册
        //         wx.saveImageToPhotosAlbum({
        //             filePath: downres.tempFilePath,
        //             success(res) {
        //                 wx.hideLoading()
        //                 console.log('保存成功')
        //             },
        //             fail(err) {

        //             }
        //         })
        //     },
        //     fail() {
        //         wx.hideLoading()
        //         console.log('下载失败，请稍后再试')
        //     }
        // })
    },
})