# 工具箱（微信小程序）

使用了微信小程序原生开发，使用了vant weapp。工具不依赖任何的后台服务。

体验功能，可下方的扫二维码：
<p align="center">
  <img src="./images/wxscan.png">
</p>

## 功能清单
1. 漫画头像
2. 手持弹幕
3. 二维码生成
4. 二维码识别
5. 倒计时
6. 全屏时钟
7. 常用号码
8. 带壳截屏
9. 国旗头像
10. 图片拼接
11. 九宫格切图
12. 网络测速
13. 血型计算
14. 关系计算器
15. 一生时间
16. 房贷计算器
17. 尺码计算
18. 色盲测试
19. 尺子
20. 量角器
21. BMI计算器
22. 恶搞理发器
23. 插电充钱
24. 数钱
25. 2048
26. 震动
27. 手机清灰

## 使用说明

### 发布小程序
修改project.config.json 的 appid 为自己的小程序id

### 使用的域名

在微信小程序后台配置以下域名：
```
https://mmbiz.qpic.cn
https://res.wx.qq.com
https://apps.bdimg.com
https://fanyi.baidu.com
https://api.fanyi.baidu.com
https://whois.pconline.com.cn
https://api.btstu.cn
https://img.xjh.me
# 漫画头像域名
https://akhaliq-animeganv2.hf.space

因为微信小程序版本无法识别该域名：https://akhaliq-animeganv2.hf.space
可使用nginx进行方向代理来使用。
```