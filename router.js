/*
* @Author: acer
* @Date:   2017-04-18 00:13:28
* @Last Modified by:   acer
* @Last Modified time: 2017-04-19 00:24:36
*/

'use strict';
//路由模块
function route (handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type" : "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;