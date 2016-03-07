'use strict';

import Falline from '../lib/';

console.log('init falline');
Falline.init('../test/interface.json');

var haha = new Falline({
	'getItems': 'Search.getItems'
});
console.log(haha.getItems({a: '123'}).then(function(data) {
	console.log(data);
}).catch(function(){
	console.log('接口调用失败');
}));
