var http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream('./index.html').pipe(res);
    }
    else if (req.url == '/form' && req.method == 'POST') {
        var rawData = '';
        req.on('data', function (data) {
            rawData += data;
        })
        req.on('end', function () {
            var inputdata = new URLSearchParams(rawData);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write('Name: ' + inputdata.get('name') + '<br><br>');
            res.write('RegNo: ' + inputdata.get('reg') + '<br><br>');
            res.write('Year of Study: ' + inputdata.get('year') + '<br><br>');
            res.write('Department: ' + inputdata.get('dept') + '<br><br>');
            res.write('School: ' + inputdata.get('school') + '<br><br>');
            res.write('Type of event: ' + inputdata.get('event') + '<br><br>');
            res.end();
        });
    }
});

server.listen(1158, function () {
    console.log('listening at 1158')
});
