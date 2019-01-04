/**
 * @param{boolean} useVux 是否需要使用vux组件 default true
 * @param{boolean} useEslint default false
 * @param{boolean} needLogServer default false 看电脑性能是否支撑
 * @param{number} serverLogPort default 3003 写死的
 * @param{string} proxyUrl 需要代理转接的地址
 * @param{number} proxyPort 代理端口
 * @param{string} proxyRule 代理规则
 */
module.exports = {
	"useVux": true,
	"useEslint": false,
	"needLogServer": false,
	"serverLogPort": 3003,
	// "proxyUrl": "http://192.168.117.238:4444",
	// "proxyUrl": "https://atestapp.51fanbei.com:443",
	// "proxyPort": 443,
	// "proxyRule": "/proxy",
	"proxyUrl": "https://btestapp.51fanbei.com",
	"proxyPort": 443,
	"proxyRule": "/proxy",
	// "proxyUrl": "https://testapp.51fanbei.com",//测试
	// "proxyPort": 4444,
	// "proxyRule": "/proxy",
	// "proxyUrl": "http://172.20.17.6:4444",//本地
	// "proxyRule": "/proxy",
}
