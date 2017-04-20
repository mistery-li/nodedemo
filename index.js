/*
* @Author: acer
* @Date:   2017-04-17 22:24:27
* @Last Modified by:   acer
* @Last Modified time: 2017-04-18 23:45:19
*/

'use strict';
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);