var http = require('http');
var fs = require('fs');
var path = require('path');

console.log('Create Server ... ');

var server = http.createServer(function (request, response) {

    var fileExtesion,
        contentType,
        fileName = 'inc/index.html',
        contentTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.map': null,
            '.css': 'text/css'
        },
        extensions = Object.keys(contentTypes);

    if(request.url.indexOf('/app/') > -1 || request.url.indexOf('/build/') > -1) {
        fileName = '.' + request.url;
        fileExtension = path.extname(fileName);

        if(contentTypes[fileExtension]) {
            if(fileExtension == '.map') {
                fileExtension = (fileName.indexOf('.js.')) ? '.js' : '.css'
            }
            contentType = contentTypes[fileExtension] || 'text/css';
        }
    }

    response.writeHead(200, { 'Content-Type': contentType });
    fileData = fs.readFileSync(fileName, 'utf8');
    response.write(fileData);

    response.end();
});

server.listen(9000);
console.log('Server started !');
