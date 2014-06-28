var fs = require('fs');

module.exports = function(f) {
    fs.readFile('test.txt', {
        encoding: 'utf8'
    }, function(err, data) {
        if (err) throw err;
        f(data);
    });
};