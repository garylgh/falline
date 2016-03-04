const zookeeper = require('node-zookeeper-client');
const client = zookeeper.createClient('127.0.0.1:2181', {
	sessionTimeout: 30000,
	spinDelay: 1000,
	retries: 2
});

function connectServer() {

}

function listChildren(client, path) {
	client.getChildren(
		path,
		function(event) {
			console.log('Got watcher event: %s', event);
			listChildren(client, path);
		},
		function(error, children, stat) {
			if (error) {
				console.log(
					'Failed to list children of %s due to: %s.',
					path,
					error
				);
				return;
			}

			console.log('Children of %s are: %j.', path, children);
		});
}

client.once('connected', function() {
	console.log('Connected to ZooKeeper.');
	listChildren(client, '/dubbo');
});

console.log('do connect');
client.connect();
