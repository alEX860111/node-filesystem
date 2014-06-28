var read = require('../lib/read');
var assert = require('assert');

describe('', function() {
	it('', function(done) {
		read(function(data) {
			assert.equal(data, 'hello\r\nworld');
			done();
		});
	});
});