/*
* @Author: acer
* @Date:   2017-04-17 22:24:51
* @Last Modified by:   acer
* @Last Modified time: 2017-04-19 00:21:26
*/

'use strict';
//服务器模块
var http = require("http");
var url = require("url");

function start (route, handle) {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;