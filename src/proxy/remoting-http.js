// {
// 	"title": "测试接口集合定义",
// 	"version": "1.0.0",
// 	"interfaces": [{
// 		"name": "主搜索接口",
// 		"id": "Search.getItems",
// 		"protocol": "http",
// 		"method": "get",
// 		"url": "http://s.m.taobao.com/client/search.do"
// 	}]
// }

'use strict';
import BaseRemoting from './remoting';
import request from 'request';
const Promise = require('bluebird');

export default class RemotingHttp extends BaseRemoting {
	constructor(interfaceDesc) {
		super();
		this.meta = interfaceDesc;
	}
	invoke(params) {
		var url = this.meta.url;
		// TODO 根据不同的restful method调用request不同的方法。目前只实现get方法
		var method = this.meta.method;
		return new Promise(function(resolve, reject) {
			request(url, function(error, response, body) {
				if (!error && response.statusCode === 200) {
					resolve(body);
				} else {
					reject(error);
				}
			});
		});
	}
}
