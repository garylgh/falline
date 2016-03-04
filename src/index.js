'use strict';

import _ from 'lodash';
import ProxyFactory from './proxy/proxy-factory';

/**
 * @options {object} { searchItems: 'Search.getItems' // 自定义方法名: 配置文件中的定义的接口ID }
 */
function Falline(options) {
	this._init(options);
};
Falline.prototype._init = function(options) {
	var self = this;
	if (options === 'undefined') {
		throw new Error('初始化参数须指定');
	}
	_.forEach(options, function(value, key) {
		let proxyObject = Falline.cache.get(key);
		if (!proxyObject && typeof proxyObject !== 'function') { // 不存在代理函数
			let interfaceDesc = Falline.interfaces[value]; // 接口描述对象
			proxyObject = ProxyFactory.create(interfaceDesc);
			Falline.cache.set(key, proxyObject);
		}

		// TODO 将代理对象，挂载到Falline实例上？？？ 还是不挂？？？
		self[key] = proxyObject;
	});
};

Falline.version = '1.0.0';

Falline.interfaces = {};

// 换成所有初始化的代理对象
Falline.cache = new Map();

// 初始化调用，加载所有的接口描述配置
Falline.init = function(configPath) {
	var config = require(configPath);
	_.forEach(config.interfaces, function(value, key) {
		Falline.interfaces[value.id] = value;
	});
};

module.exports = Falline;
