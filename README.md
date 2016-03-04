var fallLine = new FallLine(options);

fallLine.invoke('helloService', {

})

// 根据此配置自动根据class生成proxy对象，
registry: xxx,
service: [{
            id: 'helloService',
            interface: 'com.xxx.HelloService',
            protocol: 'dubbo',
            registry: 'xxxZooKeeper'
        }]

1、接口配置容器管理
2、接口代理生成
3、zookeeper 服务查找
4、服务调用
