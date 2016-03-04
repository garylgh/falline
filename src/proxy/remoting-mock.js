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
const Promise = require('bluebird');

export default class RemotingMock extends BaseRemoting {
	constructor(interfaceDesc) {
		super();
		this.meta = interfaceDesc;
	}
	invoke(params) {
		return new Promise(function(resolve, reject) {
			resolve(1);
		});
	}
}
