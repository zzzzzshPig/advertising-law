const $ = require('axios')
const qs = require('querystring')
const AipContentCensorClient = require('baidu-aip-sdk').contentCensor

function advertisingLaw ({ bd, jy }) {
    const client = new AipContentCensorClient(bd.appId, bd.apiKey, bd.secretKey)
    // 百度广告法检测接口 接口返回值看 https://ai.baidu.com/ai-doc/ANTIPORN/Ck3h6xef3#%E5%86%85%E5%AE%B9%E5%AE%A1%E6%A0%B8%E5%B9%B3%E5%8F%B0-%E6%96%87%E6%9C%AC
    async function bdAdTextFilter (text) {
        return await client.textCensorUserDefined(text)
    }

    // 句易网广告法检测接口
    // <span style="background-color:#f95647;">地铁上盖</span><span style="background-color:#f95647;">地铁上盖</span>
    async function jyAdTextFilter (text) {
        const res = await $.post('http://www.ju1.cn/Index/add', qs.stringify({
            mgtype: 0,
            ty_wj_type: 1,
            mz_wj_type: 0,
            xw_wj_type: 0,
            text
        }), {
            headers: {
                cookie: jy.cookie,
                Host: 'www.ju1.cn',
                Origin: 'http://www.ju1.cn',
                Referer: 'http://www.ju1.cn/',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })

        return res.data
    }

    async function getWjWordByBd (text) {
        const ad = await bdAdTextFilter(text)
        const word = new Set()

        if ([2, 3].includes(ad.conclusionType) && ad.data) {
            ad.data.forEach(a => {
                a.hits.forEach(b => {
                    b.words.forEach(c => {
                        word.add(c)
                    })
                })
            })
        }

        return Array.from(word)
    }

    async function getWjWordByJy (text) {
        const ad = await jyAdTextFilter(text)
        const span = ad.match(/<span(([\s\S])*?)<\/span>/g)
        const word = new Set()

        if (span) {
            span.join('').replace(/<span[^>]+>/g, '').replace(/<\/span>/g, ',').split(',').forEach(a => {
                word.add(a)
            })
        }

        return Array.from(word)
    }

    return {
        getWjWordByBd,
        getWjWordByJy
    }
}

module.exports = advertisingLaw
