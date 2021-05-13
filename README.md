### 使用
```shell
yarn add https://github.com/zzzzzshPig/advertisingLaw.git
```

```js
const advertisingLaw = require('advertisingLaw')
const advertising = advertisingLaw({
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
> 百度相关配置，需要配置`appId`,`apiKey`,`secretKey`，具体看https://ai.baidu.com/ai-doc/ANTIPORN/Ck3h6xef3#%E5%86%85%E5%AE%B9%E5%AE%A1%E6%A0%B8%E5%B9%B3%E5%8F%B0-%E6%96%87%E6%9C%AC

#### jy
> 句易网相关配置，需要cookie，具体看http://www.ju1.cn/

``` js
// 0表示不包括，1表示包括
{
    mgtype: 0 | 1, // 敏感词
    ty_wj_type: 0 | 1, // 通用违禁词
    mz_wj_type: 0 | 1, // 美妆违禁词
    xw_wj_type: 0 | 1, // 新闻违禁词
}
```
