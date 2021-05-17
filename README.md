# 使用
```shell
yarn add https://github.com/zzzzzshPig/advertisingLaw.git
```

## 文字识别
```js
const { filterText } = require('advertisingLaw')
const _filterText = filterImage({
    bd: {
        appId: 'xxx',
        apiKey: 'xxx',
        secretKey: 'xxx'
    },
    jy: {
        cookie: 'xxx'
    }
})
```

### 参数
#### bd
> 百度相关配置，参考https://ai.baidu.com/ai-doc/ANTIPORN/Ck3h6xef3#%E5%86%85%E5%AE%B9%E5%AE%A1%E6%A0%B8%E5%B9%B3%E5%8F%B0-%E6%96%87%E6%9C%AC

#### jy
> 句易网相关配置，参考http://www.ju1.cn/

``` js
// 0表示不包括，1表示包括
{
    mgtype: 0 | 1, // 敏感词
    ty_wj_type: 0 | 1, // 通用违禁词
    mz_wj_type: 0 | 1, // 美妆违禁词
    xw_wj_type: 0 | 1, // 新闻违禁词
}
```

### 返回值
`['最新', '第一']`

## 图片识别

### 注意
* 目前只提供图片文字提取功能，广告法检测请配合`filterText`使用
* 注意并发限制，不能超过2

```js
const { filterImage } = require('advertisingLaw')
const _filterImage = filterImage({
    bd: {
        appId: 'xxx',
        apiKey: 'xxx',
        secretKey: 'xxx'
    }
})
```

### 参数
#### bd
> 百度相关配置 参考 https://cloud.baidu.com/doc/OCR/s/rkibizxtw

### 返回值
`'地铁上盖，1分钟直达'`
