!function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function(t) {
            return e[t];
        }.bind(null, i));
        return o;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 19);
}({
    1: function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        n.d(t, "a", (function() {
            return o;
        }));
    },
    19: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1), i = n(2);
        new (function() {
            function e() {
                Object(o.a)(this, e), this.settings = {
                    main: {
                        AE: !0,
                        CGS: !0,
                        FP: !0,
                        CF: !0
                    },
                    quality: [ {
                        id: 1,
                        name: "4320p",
                        status: !1,
                        lable: "8K",
                        value: "highres"
                    }, {
                        id: 2,
                        name: "2160p",
                        status: !1,
                        lable: "4K",
                        value: "hd2160"
                    }, {
                        id: 3,
                        name: "1440p",
                        status: !1,
                        lable: "Quad HD",
                        value: "hd1440"
                    }, {
                        id: 4,
                        name: "1080p",
                        status: !1,
                        lable: "HD",
                        value: "hd1080"
                    }, {
                        id: 5,
                        name: "720p",
                        status: !1,
                        value: "hd720"
                    }, {
                        id: 6,
                        name: "480p",
                        status: !1,
                        value: "large"
                    }, {
                        id: 7,
                        name: "360p",
                        status: !1,
                        value: "medium"
                    }, {
                        id: 8,
                        name: "240p",
                        status: !1,
                        value: "small"
                    }, {
                        id: 9,
                        name: "144p",
                        status: !1,
                        value: "tiny"
                    }, {
                        id: 10,
                        name: "Auto",
                        status: !0,
                        value: "auto"
                    } ]
                }, this.flag = !1, this.setDefaultOptionsToStorage(), this.initialListener(), this.actionUrl = "http://tools-tube.com/action/", 
                this.uninstallUrl = "http://tools-tube.com/uninstall/", this.config = {}, this.queue = [], 
                this.queueProcessorReady = !1, this.uid = "", this.version = chrome.runtime.getManifest().version, 
                this.initStorage(), this.initListeners();
            }
            return Object(i.a)(e, [ {
                key: "setDefaultOptionsToStorage",
                value: function() {
                    var e = this;
                    window.chrome.storage.sync.get((function(t) {
                        t.hasOwnProperty("defaultSettingsFromAHD") || window.chrome.storage.sync.set({
                            defaultSettingsFromAHD: e.settings
                        });
                    }));
                }
            }, {
                key: "initialListener",
                value: function() {
                    var e = this;
                    window.chrome.runtime.onMessage.addListener((function(t, n, o) {
                        var i = t.action, r = t.type, u = t.url, s = t.filename;
                        "getOptions" === i || "updateConfig" === i ? e.getOptionsFromStorage().then((function(t) {
                            return e.sendMassageToContent(t);
                        })) : "DOWNLOAD" === r && window.chrome.downloads.download({
                            url: u,
                            filename: s,
                            saveAs: !0
                        });
                    })), window.chrome.webRequest.onHeadersReceived.addListener((function(e) {
                        return {
                            responseHeaders: e.responseHeaders
                        };
                    }), {
                        urls: [ "<all_urls>" ]
                    }, [ "blocking", "responseHeaders" ]);
                }
            }, {
                key: "getOptionsFromStorage",
                value: function() {
                    return new Promise((function(e, t) {
                        window.chrome.storage.sync.get((function(n) {
                            if (window.chrome.runtime.lastError) return t(window.chrome.runtime.lastError);
                            e(n.defaultSettingsFromAHD);
                        }));
                    }));
                }
            }, {
                key: "sendMassageToContent",
                value: function(e) {
                    window.chrome.tabs.query({
                        url: "*://www.youtube.com/*"
                    }, (function(t) {
                        0 !== t.length && window.chrome.tabs.sendMessage(t[0].id, {
                            action: "newConfig",
                            data: e
                        });
                    }));
                }
            }, {
                key: "processQueue",
                value: function() {
                    for (;this.queue.length > 0; ) {
                        var e = this.queue.shift();
                        if (!e.type || "action" != e.type) return !0;
                        var t = "p=" + encodeURIComponent(btoa(JSON.stringify({
                            id: chrome.runtime.id,
                            v: this.version,
                            action: e.action,
                            uid: this.uid,
                            t: Date.now()
                        })));
                        fetch(this.actionUrl + "?" + t).then((function(e) {
                            return e.json();
                        })).then((function(e) {
                            e.url && window.chrome.tabs.create({
                                url: e.url
                            });
                        }));
                    }
                }
            }, {
                key: "setUninstallUrl",
                value: function() {
                    var e = "p=" + encodeURIComponent(btoa(JSON.stringify({
                        id: chrome.runtime.id,
                        v: this.version,
                        action: "uninstall",
                        uid: this.uid,
                        t: Date.now()
                    })));
                    window.chrome.runtime.setUninstallURL(this.uninstallUrl + "?" + e);
                }
            }, {
                key: "initListeners",
                value: function() {
                    var e = this;
                    window.chrome.runtime.onInstalled.addListener((function(t) {
                        e.queue.push({
                            type: "action",
                            action: t.reason
                        }), e.queueProcessorReady && e.processQueue();
                    }));
                }
            }, {
                key: "initStorage",
                value: function() {
                    var e = this;
                    window.chrome.storage.local.get((function(t) {
                        t && t.config && (e.config = t.config), e.config.uid ? e.uid = e.config.uid : (e.uid = e.config.uid = e.generateUID(), 
                        e.saveConfig()), e.queueProcessorReady = !0, e.setUninstallUrl(), e.processQueue();
                    }));
                }
            }, {
                key: "saveConfig",
                value: function() {
                    window.chrome.storage.local.set({
                        config: this.config
                    });
                }
            }, {
                key: "generateUID",
                value: function() {
                    return "xxxxxxxx-xxxx-2xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16);
                    }));
                }
            } ]), e;
        }());
    },
    2: function(e, t, n) {
        "use strict";
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function i(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
        }
        n.d(t, "a", (function() {
            return i;
        }));
    }
});