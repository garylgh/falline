'use strict';

import RemotingHttp from '../proxy/remoting-http';
import RemotingMock from '../proxy/remoting-mock';

var ProxyFactory = {
	create: function(interfaceDesc) { // 工厂方法，根据协议，构造不同的代理对象
		var p;
		switch (interfaceDesc.protocol) { // 考虑到可能有其它协议，此处统一暴露同一个proxy接口
		case 'http':
			p = new RemotingHttp(interfaceDesc);
			break;
		default:
			p = new RemotingMock(interfaceDesc);
		}
		return function(remoteParams) {
			return p.invoke(remoteParams); // retrun promise
		};
	}
};

module.exports = ProxyFactory;
