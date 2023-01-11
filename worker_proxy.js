!function() {
    "use strict";
    var worker_proxy_token, proxyFrame, EXTENSION_ORIGIN = "chrome-extension://" + chrome.runtime.id, MSG_GET_TOKEN = "worker_proxy wants to get communication token";
    location.origin == EXTENSION_ORIGIN ? chrome.extension.getBackgroundPage && chrome.extension.getBackgroundPage() === window ? chrome.runtime.onMessage.addListener((function(message, sender, sendResponse) {
        message === MSG_GET_TOKEN && sendResponse(function() {
            if (!worker_proxy_token) {
                var buffer = new Uint8Array(100);
                crypto.getRandomValues(buffer);
                for (var random_token = "", i = 0; i < buffer.length; ++i) random_token += buffer[i].toString(36);
                worker_proxy_token = random_token;
            }
            return worker_proxy_token;
        }());
    })) : window.addEventListener("message", (function(event) {
        if (!event.data || !event.data.channel_token) return;
        chrome.runtime.sendMessage(MSG_GET_TOKEN, (function(token) {
            var messagePort, metadataPort, url, worker;
            token && event.data.channel_token === token && (messagePort = event.ports[0], metadataPort = event.ports[1], 
            url = event.data.worker_url, (worker = new Worker(url)).onmessage = function(event) {
                messagePort.postMessage(event.data);
            }, worker.onerror = function(event) {
                metadataPort.postMessage({
                    type: "error",
                    errorDetails: {
                        message: event.message,
                        filename: event.filename,
                        lineno: event.lineno,
                        colno: event.colno
                    }
                });
            }, metadataPort.onmessage = function(event) {
                "terminate" == event.data.type && (worker.terminate(), messagePort.close(), metadataPort.close());
            }, messagePort.onmessage = function(event) {
                worker.postMessage(event.data);
            }, metadataPort.start(), messagePort.start());
        }));
    })) : window.Worker = function(url) {
        if (!url) throw new TypeError("Not enough arguments");
        var messageChannel = new MessageChannel, metadataChannel = new MessageChannel, fakeWorker = messageChannel.port1;
        return fakeWorker.terminate = function() {
            metadataChannel.port1.postMessage({
                type: "terminate"
            });
        }, metadataChannel.port1.onmessage = function(event) {
            if ("error" == event.data.type) {
                var error = new ErrorEvent("error", event.data.errorDetails);
                fakeWorker.dispatchEvent(error), "function" == typeof fakeWorker.onerror && fakeWorker.onerror(error);
            }
        }, messageChannel.port1.start(), metadataChannel.port1.start(), function(message, transferables) {
            proxyFrameMessageQueue.push([ message, transferables ]), proxyFrame ? proxyFrameReady && chrome.runtime.sendMessage(MSG_GET_TOKEN, (function(token) {
                "string" == typeof token && flushMessages(token);
            })) : loadFrameAndFlush();
            function loadFrameAndFlush() {
                proxyFrameReady = !1, (proxyFrame = document.createElement("iframe")).src = chrome.runtime.getURL("worker_proxy.html"), 
                proxyFrame.style.cssText = "position:fixed!important;top:-99px!important;left:-99px!important;width:2px!important;height:2px!important;border:0!important", 
                proxyFrame.onload = function() {
                    chrome.runtime.sendMessage(MSG_GET_TOKEN, (function(token) {
                        "string" == typeof token && (proxyFrameReady = !0, flushMessages(token));
                    }));
                }, (document.body || document.documentElement).appendChild(proxyFrame);
            }
            function flushMessages(token) {
                var contentWindow = proxyFrame.contentWindow;
                if (contentWindow) for (;proxyFrameMessageQueue.length; ) {
                    var data = proxyFrameMessageQueue.shift();
                    data[0].channel_token = token, contentWindow.postMessage(data[0], EXTENSION_ORIGIN, data[1]);
                } else loadFrameAndFlush();
            }
        }({
            worker_url: url
        }, [ messageChannel.port2, metadataChannel.port2 ]), fakeWorker.close = fakeWorker.startCapture = void 0, 
        fakeWorker;
    };
    var proxyFrameMessageQueue = [], proxyFrameReady = !1;
}();