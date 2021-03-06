/*
* @Author: acer
* @Date:   2017-04-18 00:26:41
* @Last Modified by:   acer
* @Last Modified time: 2017-04-19 00:34:15
*/

'use strict';
var querystring = require("querystring"),
          fs = require("fs"),
          formidable = require("formidable");

function start (response, postData) {
    console.log("Request handler 'start' was called");

    var body = '<html>' +
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UFT-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" ' + 'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write(body);
        response.end();
}

function upload (response, request) {
    console.log("Request handler 'upload' was called");

    var form = new formidable.IncomingForm();
    console.log("About to parse");
    form.parse(request, function (error, fields, files) {
        console.log("oarsing done");
        fs.renameSync(files.upload.path, "C:/Users/acer/node/tmp/test.PNG");
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("<img src=' /show' />");
        response.end();
    });
}

function show (response, postData) {
    console.log("Request handler 'show' was called");
    fs.readFile("C:/Users/acer/node/tmp/test.PNG", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type" : "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type" : "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;