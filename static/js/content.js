/*! For license information please see content.js.LICENSE.txt */
!function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
            return e[t];
        }.bind(null, i));
        return r;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 22);
}({
    1: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        n.d(t, "a", (function() {
            return r;
        }));
    },
    2: function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e;
        }
        n.d(t, "a", (function() {
            return i;
        }));
    },
    20: function(e, t, n) {
        var r = function(e) {
            "use strict";
            var t, n = Object.prototype, r = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                u({}, "");
            } catch (D) {
                u = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function l(e, t, n, r) {
                var i = t && t.prototype instanceof g ? t : g, o = Object.create(i.prototype), a = new j(r || []);
                return o._invoke = function(e, t, n) {
                    var r = f;
                    return function(i, o) {
                        if (r === d) throw new Error("Generator is already running");
                        if (r === h) {
                            if ("throw" === i) throw o;
                            return L();
                        }
                        for (n.method = i, n.arg = o; ;) {
                            var a = n.delegate;
                            if (a) {
                                var s = S(a, n);
                                if (s) {
                                    if (s === y) continue;
                                    return s;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (r === f) throw r = h, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = d;
                            var u = c(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? h : p, u.arg === y) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                };
                            }
                            "throw" === u.type && (r = h, n.method = "throw", n.arg = u.arg);
                        }
                    };
                }(e, n, a), o;
            }
            function c(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (D) {
                    return {
                        type: "throw",
                        arg: D
                    };
                }
            }
            e.wrap = l;
            var f = "suspendedStart", p = "suspendedYield", d = "executing", h = "completed", y = {};
            function g() {}
            function v() {}
            function m() {}
            var x = {};
            u(x, o, (function() {
                return this;
            }));
            var b = Object.getPrototypeOf, w = b && b(b(N([])));
            w && w !== n && r.call(w, o) && (x = w);
            var T = m.prototype = g.prototype = Object.create(x);
            function C(e) {
                [ "next", "throw", "return" ].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e);
                    }));
                }));
            }
            function E(e, t) {
                function n(i, o, a, s) {
                    var u = c(e[i], e, o);
                    if ("throw" !== u.type) {
                        var l = u.arg, f = l.value;
                        return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                            n("next", e, a, s);
                        }), (function(e) {
                            n("throw", e, a, s);
                        })) : t.resolve(f).then((function(e) {
                            l.value = e, a(l);
                        }), (function(e) {
                            return n("throw", e, a, s);
                        }));
                    }
                    s(u.arg);
                }
                var i;
                this._invoke = function(e, r) {
                    function o() {
                        return new t((function(t, i) {
                            n(e, r, t, i);
                        }));
                    }
                    return i = i ? i.then(o, o) : o();
                };
            }
            function S(e, n) {
                var r = e.iterator[n.method];
                if (r === t) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (e.iterator.return && (n.method = "return", n.arg = t, S(e, n), "throw" === n.method)) return y;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return y;
                }
                var i = c(r, e.iterator, n.arg);
                if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, 
                y;
                var o = i.arg;
                return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", 
                n.arg = t), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), 
                n.delegate = null, y);
            }
            function k(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function A(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function j(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(k, this), this.reset(!0);
            }
            function N(e) {
                if (e) {
                    var n = e[o];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1, a = function n() {
                            for (;++i < e.length; ) if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                            return n.value = t, n.done = !0, n;
                        };
                        return a.next = a;
                    }
                }
                return {
                    next: L
                };
            }
            function L() {
                return {
                    value: t,
                    done: !0
                };
            }
            return v.prototype = m, u(T, "constructor", m), u(m, "constructor", v), v.displayName = u(m, s, "GeneratorFunction"), 
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, u(e, s, "GeneratorFunction")), 
                e.prototype = Object.create(T), e;
            }, e.awrap = function(e) {
                return {
                    __await: e
                };
            }, C(E.prototype), u(E.prototype, a, (function() {
                return this;
            })), e.AsyncIterator = E, e.async = function(t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new E(l(t, n, r, i), o);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next();
                }));
            }, C(T), u(T, s, "Generator"), u(T, o, (function() {
                return this;
            })), u(T, "toString", (function() {
                return "[object Generator]";
            })), e.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(), function n() {
                    for (;t.length; ) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n;
                    }
                    return n.done = !0, n;
                };
            }, e.values = N, j.prototype = {
                constructor: j,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, 
                    this.method = "next", this.arg = t, this.tryEntries.forEach(A), !e) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var n = this;
                    function i(r, i) {
                        return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), 
                        !!i;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o], s = a.completion;
                        if ("root" === a.tryLoc) return i("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"), l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break;
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                    y) : this.complete(a);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                    y;
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                A(n);
                            }
                            return i;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, n, r) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = t), y;
                }
            }, e;
        }(e.exports);
        try {
            regeneratorRuntime = r;
        } catch (i) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
        }
    },
    22: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(6), i = n.n(r);
        function o(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a), u = s.value;
            } catch (l) {
                return void n(l);
            }
            s.done ? t(u) : Promise.resolve(u).then(r, i);
        }
        var a = n(1), s = n(2), u = n(4), l = n.n(u);
        new (function() {
            function e() {
                Object(a.a)(this, e), this.start(), this.listener();
            }
            return Object(s.a)(e, [ {
                key: "start",
                value: function() {
                    var e = this;
                    window.chrome.runtime.sendMessage({
                        action: "getOptions"
                    }), l()(document).ready((function() {
                        l()(".ytp-right-controls").prepend('<button class="source-scripts-common-_index_floatingPlayer_2R8 source-scripts-common-page-button-_Button_button_29H ytp-button" aria-pressed="false" lable="FP">\n            <span class="">\n              <span class="source-scripts-common-page-button-_Button_icon_3S4 source-scripts-common-page-button-_Button_floating_3Gk">\n              </span>\n              <div class="ytp-tooltip ytp-tooltip-text source-scripts-common-page-button-_Button_tooltip_3-L">Floating player</div></span>\n          </button>'), 
                        l()(".source-scripts-common-page-button-_Button_icon_3S4").css("display", "block"), 
                        l()(".source-scripts-common-_index_floatingPlayer_2R8").click((function() {
                            e.floatingPlayer();
                        }));
                    }));
                }
            }, {
                key: "listener",
                value: function() {
                    var e = this;
                    window.chrome.runtime.onMessage.addListener((function(t, n, r) {
                        var i = t.action, o = t.data;
                        "newConfig" === i && e.applySettings(o);
                    }));
                }
            }, {
                key: "applySettings",
                value: function(e) {
                    var t = e.quality.filter((function(e) {
                        return !0 === e.status;
                    }));
                    for (var n in e.main) !1 === e.main[n] ? this.hideBtns(n) : !0 === e.main[n] && this.showBtns(n);
                    this.applyQuality(t);
                }
            }, {
                key: "applyQuality",
                value: function(e) {
                    !function(e) {
                        var t = document.createElement("script");
                        t.textContent = e, document.head.appendChild(t);
                    }('(function () {\n        let isEmbed = true;\n        let playback;\n        let quality = "'.concat(e[0].value, '";\n\n        onYouTubePlayerReady = function (player) {\n          document.addEventListener("updateQuality", function (e) {\n            quality = e.quality;\n            updQuality();\n          });\n          playback = false;\n          globalPlayer = player;\n          globalPlayer.addEventListener("onStateChange", function (state) {\n            if (state == 3 && !playback) {\n              updQuality();\n            } else if (state == -1) {\n              playback = false;\n            } else if (state == 5) {\n              isEmbed = true;\n            }\n          });\n\n          globalPlayer.addEventListener(\n            "onPlaybackQualityChange",\n            function (event) {\n              if (isEmbed) {\n                if (globalPlayer.getAvailableQualityLevels === null) {\n                  document.removeEventListener("updateQuality", function (e) {\n                    quality = e.quality;\n                    updQuality();\n                  });\n                  globalPlayer = document.getElementById("movie_player");\n                }\n                let avaliableQuality = globalPlayer.getAvailableQualityLevels();\n                let pbQual =\n                  avaliableQuality.indexOf(quality) == -1\n                    ? avaliableQuality[0]\n                    : quality;\n                let qualIsCorrect = pbQual === globalPlayer.getPlaybackQuality();\n                if (!qualIsCorrect) {\n                  updQuality();\n                }\n                isEmbed = false;\n              }\n            }\n          );\n          updQuality();\n        };\n\n        updQuality = function () {\n          var avaliableQuality = globalPlayer.getAvailableQualityLevels();\n          var qual =\n            avaliableQuality.length && avaliableQuality.indexOf(quality) == -1\n              ? avaliableQuality[0]\n              : quality;\n          var playerState = globalPlayer.getPlayerState();\n          playback = true;\n          var now = new Date().getTime();\n          let savedQuality = {\n            creation: now,\n            data: qual,\n            expiration: now + 2592000000,\n          };\n          localStorage["yt-player-quality"] = JSON.stringify(savedQuality);\n          globalPlayer.setPlaybackQuality(qual);\n        };\n      })();'));
                }
            }, {
                key: "hideBtns",
                value: function(e) {
                    l()(document).ready((function() {
                        "AE" === e ? l()(".source-scripts-common-_index_audioButton_3mS").css("display", "none") : "CGS" === e ? l()(".source-scripts-common-_index_captureButton_PSG").css("display", "none") : "CF" === e ? l()(".source-scripts-common-_index_videoButton_1Y6").css("display", "none") : "FP" === e && l()(".source-scripts-common-_index_floatingPlayer_2R8").css("display", "none");
                    }));
                }
            }, {
                key: "showBtns",
                value: function(e) {
                    l()(document).ready((function() {
                        "AE" === e ? l()(".source-scripts-common-_index_audioButton_3mS").css("display", "inline-block") : "CGS" === e ? l()(".source-scripts-common-_index_captureButton_PSG").css("display", "inline-block") : "CF" === e ? l()(".source-scripts-common-_index_videoButton_1Y6").css("display", "inline-block") : "FP" === e && l()(".source-scripts-common-_index_floatingPlayer_2R8").css("display", "inline-block");
                    }));
                }
            }, {
                key: "floatingPlayer",
                value: function() {
                    var e, t = (e = i.a.mark((function e() {
                        var t, n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (0 !== (t = Array.from(document.querySelectorAll("video")).filter((function(e) {
                                    return 0 !== e.readyState;
                                })).filter((function(e) {
                                    return !1 === e.disablePictureInPicture;
                                })).sort((function(e, t) {
                                    var n = e.getClientRects()[0], r = t.getClientRects()[0];
                                    return r.width * r.height - n.width * n.height;
                                }))).length) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");

                              case 3:
                                if (!(n = t[0]).hasAttribute("__pip__")) {
                                    e.next = 9;
                                    break;
                                }
                                return e.next = 7, document.exitPictureInPicture();

                              case 7:
                                e.next = 13;
                                break;

                              case 9:
                                return e.next = 11, n.requestPictureInPicture();

                              case 11:
                                n.setAttribute("__pip__", !0), n.addEventListener("leavepictureinpicture", (function(e) {
                                    n.removeAttribute("__pip__");
                                }), {
                                    once: !0
                                });

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }), e);
                    })), function() {
                        var t = this, n = arguments;
                        return new Promise((function(r, i) {
                            var a = e.apply(t, n);
                            function s(e) {
                                o(a, r, i, s, u, "next", e);
                            }
                            function u(e) {
                                o(a, r, i, s, u, "throw", e);
                            }
                            s(void 0);
                        }));
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }()
            } ]), e;
        }());
    },
    4: function(e, t, n) {
        var r;
        !function(t, n) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e);
            } : n(t);
        }("undefined" != typeof window ? window : this, (function(n, i) {
            "use strict";
            var o = [], a = Object.getPrototypeOf, s = o.slice, u = o.flat ? function(e) {
                return o.flat.call(e);
            } : function(e) {
                return o.concat.apply([], e);
            }, l = o.push, c = o.indexOf, f = {}, p = f.toString, d = f.hasOwnProperty, h = d.toString, y = h.call(Object), g = {}, v = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
            }, m = function(e) {
                return null != e && e === e.window;
            }, x = n.document, b = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function w(e, t, n) {
                var r, i, o = (n = n || x).createElement("script");
                if (o.text = e, t) for (r in b) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o);
            }
            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e;
            }
            var C = "3.6.0", E = function e(t, n) {
                return new e.fn.init(t, n);
            };
            function S(e) {
                var t = !!e && "length" in e && e.length, n = T(e);
                return !v(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
            }
            E.fn = E.prototype = {
                jquery: C,
                constructor: E,
                length: 0,
                toArray: function() {
                    return s.call(this);
                },
                get: function(e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function(e) {
                    var t = E.merge(this.constructor(), e);
                    return t.prevObject = this, t;
                },
                each: function(e) {
                    return E.each(this, e);
                },
                map: function(e) {
                    return this.pushStack(E.map(this, (function(t, n) {
                        return e.call(t, n, t);
                    })));
                },
                slice: function() {
                    return this.pushStack(s.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(E.grep(this, (function(e, t) {
                        return (t + 1) % 2;
                    })));
                },
                odd: function() {
                    return this.pushStack(E.grep(this, (function(e, t) {
                        return t % 2;
                    })));
                },
                eq: function(e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: l,
                sort: o.sort,
                splice: o.splice
            }, E.extend = E.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), 
                s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
                "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], 
                o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a;
            }, E.extend({
                expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e);
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== p.call(e) || (t = a(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== y));
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                globalEval: function(e, t, n) {
                    w(e, {
                        nonce: t && t.nonce
                    }, n);
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (S(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e;
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (S(Object(e)) ? E.merge(n, "string" == typeof e ? [ e ] : e) : l.call(n, e)), 
                    n;
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : c.call(t, e, n);
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e;
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r;
                },
                map: function(e, t, n) {
                    var r, i, o = 0, a = [];
                    if (S(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return u(a);
                },
                guid: 1,
                support: g
            }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), 
            E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
            }));
            var k = function(e) {
                var t, n, r, i, o, a, s, u, l, c, f, p, d, h, y, g, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ue(), S = ue(), k = ue(), A = ue(), j = function(e, t) {
                    return e === t && (f = !0), 0;
                }, N = {}.hasOwnProperty, L = [], D = L.pop, q = L.push, P = L.push, _ = L.slice, O = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1;
                }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", I = "\\[[\\x20\\t\\r\\n\\f]*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + R + "*\\]", B = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", F = new RegExp(R + "+", "g"), W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), $ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), Q = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), z = new RegExp(R + "|>"), G = new RegExp(B), U = new RegExp("^" + M + "$"), X = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                    bool: new RegExp("^(?:" + H + ")$", "i"),
                    needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                }, V = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"), ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
                }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }, oe = function() {
                    p();
                }, ae = be((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    P.apply(L = _.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType;
                } catch (Se) {
                    P = {
                        apply: L.length ? function(e, t) {
                            q.apply(e, _.call(t));
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                            e.length = n - 1;
                        }
                    };
                }
                function se(e, t, r, i) {
                    var o, s, l, c, f, h, v, m = t && t.ownerDocument, w = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                    if (!i && (p(t), t = t || d, y)) {
                        if (11 !== w && (f = Z.exec(e))) if (o = f[1]) {
                            if (9 === w) {
                                if (!(l = t.getElementById(o))) return r;
                                if (l.id === o) return r.push(l), r;
                            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), 
                            r;
                        } else {
                            if (f[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), 
                            r;
                        }
                        if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, m = t, 1 === w && (z.test(e) || Q.test(e))) {
                                for ((m = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), 
                                s = (h = a(e)).length; s--; ) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                                v = h.join(",");
                            }
                            try {
                                return P.apply(r, m.querySelectorAll(v)), r;
                            } catch (T) {
                                A(e, !0);
                            } finally {
                                c === b && t.removeAttribute("id");
                            }
                        }
                    }
                    return u(e.replace(W, "$1"), t, r, i);
                }
                function ue() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
                    };
                }
                function le(e) {
                    return e[b] = !0, e;
                }
                function ce(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (Se) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null;
                    }
                }
                function fe(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
                }
                function pe(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function de(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e;
                    };
                }
                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function ye(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                    };
                }
                function ge(e) {
                    return le((function(t) {
                        return t = +t, le((function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                        }));
                    }));
                }
                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                for (t in n = se.support = {}, o = se.isXML = function(e) {
                    var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                    return !V.test(t || n && n.nodeName || "HTML");
                }, p = se.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, 
                    y = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), 
                    n.scope = ce((function(e) {
                        return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })), n.attributes = ce((function(e) {
                        return e.className = "i", !e.getAttribute("className");
                    })), n.getElementsByTagName = ce((function(e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                    })), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce((function(e) {
                        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
                    })), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && y) {
                            var n = t.getElementById(e);
                            return n ? [ n ] : [];
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t;
                        };
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && y) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                            }
                            return [];
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    } : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return o;
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e);
                    }, v = [], g = [], (n.qsa = K.test(d.querySelectorAll)) && (ce((function(e) {
                        var t;
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                        e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), 
                        e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")"), 
                        e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), (t = d.createElement("input")).setAttribute("name", ""), 
                        e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), 
                        e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]"), 
                        e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]");
                    })), ce((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 
                        2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), 
                        h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), 
                        e.querySelectorAll("*,:x"), g.push(",.*:");
                    }))), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", B);
                    })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), 
                    t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                    } : function(e, t) {
                        if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                        return !1;
                    }, j = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                        if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                        if (i === o) return pe(e, t);
                        for (n = e; n = n.parentNode; ) a.unshift(n);
                        for (n = t; n = n.parentNode; ) s.unshift(n);
                        for (;a[r] === s[r]; ) r++;
                        return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
                    }, d) : d;
                }, se.matches = function(e, t) {
                    return se(e, null, null, t);
                }, se.matchesSelector = function(e, t) {
                    if (p(e), n.matchesSelector && y && !A[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
                    } catch (Se) {
                        A(t, !0);
                    }
                    return se(t, d, null, [ e ]).length > 0;
                }, se.contains = function(e, t) {
                    return (e.ownerDocument || e) != d && p(e), x(e, t);
                }, se.attr = function(e, t) {
                    (e.ownerDocument || e) != d && p(e);
                    var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !y) : void 0;
                    return void 0 !== o ? o : n.attributes || !y ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                }, se.escape = function(e) {
                    return (e + "").replace(re, ie);
                }, se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, se.uniqueSort = function(e) {
                    var t, r = [], i = 0, o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(j), f) {
                        for (;t = e[o++]; ) t === e[o] && (i = r.push(o));
                        for (;i--; ) e.splice(r[i], 1);
                    }
                    return c = null, e;
                }, i = se.getText = function(e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                        } else if (3 === o || 4 === o) return e.nodeValue;
                    } else for (;t = e[r++]; ) n += i(t);
                    return n;
                }, (r = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
                            "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), 
                            e;
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                            e[2] = n.slice(0, t)), e.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0;
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) && E(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = se.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode;
                            } : function(t, n, u) {
                                var l, c, f, p, d, h, y = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                                if (g) {
                                    if (o) {
                                        for (;y; ) {
                                            for (p = t; p = p[y]; ) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = y = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (h = [ a ? g.firstChild : g.lastChild ], a && m) {
                                        for (x = (d = (l = (c = (f = (p = g)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], 
                                        p = d && g.childNodes[d]; p = ++d && p && p[y] || (x = d = 0) || h.pop(); ) if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [ T, d, x ];
                                            break;
                                        }
                                    } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), 
                                    !1 === x) for (;(p = ++d && p && p[y] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ T, x ]), 
                                    p !== t)); ) ;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0;
                                }
                            };
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--; ) e[r = O(e, o[a])] = !(n[r] = o[a]);
                            })) : function(e) {
                                return i(e, 0, n);
                            }) : i;
                        }
                    },
                    pseudos: {
                        not: le((function(e) {
                            var t = [], n = [], r = s(e.replace(W, "$1"));
                            return r[b] ? le((function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                            })) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                            };
                        })),
                        has: le((function(e) {
                            return function(t) {
                                return se(e, t).length > 0;
                            };
                        })),
                        contains: le((function(e) {
                            return e = e.replace(te, ne), function(t) {
                                return (t.textContent || i(t)).indexOf(e) > -1;
                            };
                        })),
                        lang: le((function(e) {
                            return U.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
                            function(t) {
                                var n;
                                do {
                                    if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            };
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function(e) {
                            return e === h;
                        },
                        focus: function(e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ye(!1),
                        disabled: ye(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected;
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e);
                        },
                        header: function(e) {
                            return J.test(e.nodeName);
                        },
                        input: function(e) {
                            return Y.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: ge((function() {
                            return [ 0 ];
                        })),
                        last: ge((function(e, t) {
                            return [ t - 1 ];
                        })),
                        eq: ge((function(e, t, n) {
                            return [ n < 0 ? n + t : n ];
                        })),
                        even: ge((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        odd: ge((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        lt: ge((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                            return e;
                        })),
                        gt: ge((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                            return e;
                        }))
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = de(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = he(t);
                function me() {}
                function xe(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r;
                }
                function be(e, t, n) {
                    var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
                    return t.first ? function(t, n, i) {
                        for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i);
                        return !1;
                    } : function(t, n, u) {
                        var l, c, f, p = [ T, s ];
                        if (u) {
                            for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                        } else for (;t = t[r]; ) if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
                        i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                            if (c[o] = p, p[2] = e(t, n, u)) return !0;
                        }
                        return !1;
                    };
                }
                function we(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                        return !0;
                    } : e[0];
                }
                function Te(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
                    l && t.push(s)));
                    return a;
                }
                function Ce(e, t, n, r, i, o) {
                    return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le((function(o, a, s, u) {
                        var l, c, f, p = [], d = [], h = a.length, y = o || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n;
                        }(t || "*", s.nodeType ? [ s ] : s, []), g = !e || !o && t ? y : Te(y, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : g;
                        if (n && n(g, v, s, u), r) for (l = Te(v, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (v[d[c]] = !(g[d[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], c = v.length; c--; ) (f = v[c]) && l.push(g[c] = f);
                                    i(null, v = [], l, u);
                                }
                                for (c = v.length; c--; ) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                            }
                        } else v = Te(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : P.apply(a, v);
                    }));
                }
                function Ee(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be((function(e) {
                        return e === t;
                    }), s, !0), f = be((function(e) {
                        return O(t, e) > -1;
                    }), s, !0), p = [ function(e, n, r) {
                        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, i;
                    } ]; u < o; u++) if (n = r.relative[e[u].type]) p = [ be(we(p), n) ]; else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (i = ++u; i < o && !r.relative[e[i].type]; i++) ;
                            return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(W, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e));
                        }
                        p.push(n);
                    }
                    return we(p);
                }
                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = S[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = r.preFilter; s; ) {
                        for (a in n && !(i = $.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                        n = !1, (i = Q.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(W, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = X[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
                        o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break;
                    }
                    return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
                }, s = se.compile = function(e, t) {
                    var n, i = [], o = [], s = k[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--; ) (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                        (s = k(e, function(e, t) {
                            var n = t.length > 0, i = e.length > 0, o = function(o, a, s, u, c) {
                                var f, h, g, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, S = C.length;
                                for (c && (l = a == d || a || c); m !== S && null != (f = C[m]); m++) {
                                    if (i && f) {
                                        for (h = 0, a || f.ownerDocument == d || (p(f), s = !y); g = e[h++]; ) if (g(f, a || d, s)) {
                                            u.push(f);
                                            break;
                                        }
                                        c && (T = E);
                                    }
                                    n && ((f = !g && f) && v--, o && x.push(f));
                                }
                                if (v += m, n && m !== v) {
                                    for (h = 0; g = t[h++]; ) g(x, b, a, s);
                                    if (o) {
                                        if (v > 0) for (;m--; ) x[m] || b[m] || (b[m] = D.call(u));
                                        b = Te(b);
                                    }
                                    P.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && se.uniqueSort(u);
                                }
                                return c && (T = E, l = w), x;
                            };
                            return n ? le(o) : o;
                        }(o, i))).selector = e;
                    }
                    return s;
                }, u = se.select = function(e, t, n, i) {
                    var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && y && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                        }
                        for (o = X.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]); ) if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
                            if (u.splice(o, 1), !(e = i.length && xe(u))) return P.apply(n, i), n;
                            break;
                        }
                    }
                    return (p || s(e, d))(i, t, !y, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
                }, n.sortStable = b.split("").sort(j).join("") === b, n.detectDuplicates = !!f, 
                p(), n.sortDetached = ce((function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
                })), ce((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
                })) || fe("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                })), n.attributes && ce((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) || fe("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                })), ce((function(e) {
                    return null == e.getAttribute("disabled");
                })) || fe(H, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                })), se;
            }(n);
            E.find = k, (E.expr = k.selectors)[":"] = E.expr.pseudos, E.uniqueSort = E.unique = k.uniqueSort, 
            E.text = k.getText, E.isXMLDoc = k.isXML, E.contains = k.contains, E.escapeSelector = k.escape;
            var A = function(e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e);
                }
                return r;
            }, j = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }, N = E.expr.match.needsContext;
            function L(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function q(e, t, n) {
                return v(t) ? E.grep(e, (function(e, r) {
                    return !!t.call(e, r, e) !== n;
                })) : t.nodeType ? E.grep(e, (function(e) {
                    return e === t !== n;
                })) : "string" != typeof t ? E.grep(e, (function(e) {
                    return c.call(t, e) > -1 !== n;
                })) : E.filter(t, e, n);
            }
            E.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [ r ] : [] : E.find.matches(e, E.grep(t, (function(e) {
                    return 1 === e.nodeType;
                })));
            }, E.fn.extend({
                find: function(e) {
                    var t, n, r = this.length, i = this;
                    if ("string" != typeof e) return this.pushStack(E(e).filter((function() {
                        for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
                    })));
                    for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
                    return r > 1 ? E.uniqueSort(n) : n;
                },
                filter: function(e) {
                    return this.pushStack(q(this, e || [], !1));
                },
                not: function(e) {
                    return this.pushStack(q(this, e || [], !0));
                },
                is: function(e) {
                    return !!q(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length;
                }
            });
            var P, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (E.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || P, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : _.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), 
                        D.test(r[1]) && E.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this;
                    }
                    return (i = x.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
            }).prototype = E.fn, P = E(x);
            var O = /^(?:parents|prev(?:Until|All))/, H = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function R(e, t) {
                for (;(e = e[t]) && 1 !== e.nodeType; ) ;
                return e;
            }
            E.fn.extend({
                has: function(e) {
                    var t = E(e, this), n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
                    }));
                },
                closest: function(e, t) {
                    var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
                    if (!N.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break;
                    }
                    return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
                },
                index: function(e) {
                    return e ? "string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(e, t) {
                    return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                }
            }), E.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return A(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return A(e, "parentNode", n);
                },
                next: function(e) {
                    return R(e, "nextSibling");
                },
                prev: function(e) {
                    return R(e, "previousSibling");
                },
                nextAll: function(e) {
                    return A(e, "nextSibling");
                },
                prevAll: function(e) {
                    return A(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return A(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return A(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return j((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return j(e.firstChild);
                },
                contents: function(e) {
                    return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e), 
                    E.merge([], e.childNodes));
                }
            }, (function(e, t) {
                E.fn[e] = function(n, r) {
                    var i = E.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = E.filter(r, i)), 
                    this.length > 1 && (H[e] || E.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i);
                };
            }));
            var M = /[^\x20\t\r\n\f]+/g;
            function I(e) {
                return e;
            }
            function B(e) {
                throw e;
            }
            function F(e, t, n, r) {
                var i;
                try {
                    e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
                } catch (e) {
                    n.apply(void 0, [ e ]);
                }
            }
            E.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return E.each(e.match(M) || [], (function(e, n) {
                        t[n] = !0;
                    })), t;
                }(e) : E.extend({}, e);
                var t, n, r, i, o = [], a = [], s = -1, u = function() {
                    for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
                    n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
                }, l = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            E.each(n, (function(n, r) {
                                v(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r);
                            }));
                        }(arguments), n && !t && u()), this;
                    },
                    remove: function() {
                        return E.each(arguments, (function(e, t) {
                            for (var n; (n = E.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                        })), this;
                    },
                    has: function(e) {
                        return e ? E.inArray(e, o) > -1 : o.length > 0;
                    },
                    empty: function() {
                        return o && (o = []), this;
                    },
                    disable: function() {
                        return i = a = [], o = n = "", this;
                    },
                    disabled: function() {
                        return !o;
                    },
                    lock: function() {
                        return i = a = [], n || t || (o = n = ""), this;
                    },
                    locked: function() {
                        return !!i;
                    },
                    fireWith: function(e, n) {
                        return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                        this;
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!r;
                    }
                };
                return l;
            }, E.extend({
                Deferred: function(e) {
                    var t = [ [ "notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2 ], [ "resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                        state: function() {
                            return r;
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function(e) {
                            return i.then(null, e);
                        },
                        pipe: function() {
                            var e = arguments;
                            return E.Deferred((function(n) {
                                E.each(t, (function(t, r) {
                                    var i = v(e[r[4]]) && e[r[4]];
                                    o[r[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [ e ] : arguments);
                                    }));
                                })), e = null;
                            })).promise();
                        },
                        then: function(e, r, i) {
                            var o = 0;
                            function a(e, t, r, i) {
                                return function() {
                                    var s = this, u = arguments, l = function() {
                                        var n, l;
                                        if (!(e < o)) {
                                            if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            l = n && ("object" == typeof n || "function" == typeof n) && n.then, v(l) ? i ? l.call(n, a(o, t, I, i), a(o, t, B, i)) : (o++, 
                                            l.call(n, a(o, t, I, i), a(o, t, B, i), a(o, t, I, t.notifyWith))) : (r !== I && (s = void 0, 
                                            u = [ n ]), (i || t.resolveWith)(s, u));
                                        }
                                    }, c = i ? l : function() {
                                        try {
                                            l();
                                        } catch (n) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== B && (s = void 0, 
                                            u = [ n ]), t.rejectWith(s, u));
                                        }
                                    };
                                    e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()), 
                                    n.setTimeout(c));
                                };
                            }
                            return E.Deferred((function(n) {
                                t[0][3].add(a(0, n, v(i) ? i : I, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : I)), 
                                t[2][3].add(a(0, n, v(r) ? r : B));
                            })).promise();
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, i) : i;
                        }
                    }, o = {};
                    return E.each(t, (function(e, n) {
                        var a = n[2], s = n[5];
                        i[n[1]] = a.add, s && a.add((function() {
                            r = s;
                        }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), 
                        o[n[0]] = function() {
                            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                        }, o[n[0] + "With"] = a.fireWith;
                    })), i.promise(o), e && e.call(o, o), o;
                },
                when: function(e) {
                    var t = arguments.length, n = t, r = Array(n), i = s.call(arguments), o = E.Deferred(), a = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i);
                        };
                    };
                    if (t <= 1 && (F(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                    for (;n--; ) F(i[n], a(n), o.reject);
                    return o.promise();
                }
            });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            E.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }, E.readyException = function(e) {
                n.setTimeout((function() {
                    throw e;
                }));
            };
            var $ = E.Deferred();
            function Q() {
                x.removeEventListener("DOMContentLoaded", Q), n.removeEventListener("load", Q), 
                E.ready();
            }
            E.fn.ready = function(e) {
                return $.then(e).catch((function(e) {
                    E.readyException(e);
                })), this;
            }, E.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || $.resolveWith(x, [ E ]));
                }
            }), E.ready.then = $.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(E.ready) : (x.addEventListener("DOMContentLoaded", Q), 
            n.addEventListener("load", Q));
            var z = function e(t, n, r, i, o, a, s) {
                var u = 0, l = t.length, c = null == r;
                if ("object" === T(r)) for (u in o = !0, r) e(t, n, u, r[u], !0, a, s); else if (void 0 !== i && (o = !0, 
                v(i) || (s = !0), c && (s ? (n.call(t, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(E(e), n);
                })), n)) for (;u < l; u++) n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
                return o ? t : c ? n.call(t) : l ? n(t[0], r) : a;
            }, G = /^-ms-/, U = /-([a-z])/g;
            function X(e, t) {
                return t.toUpperCase();
            }
            function V(e) {
                return e.replace(G, "ms-").replace(U, X);
            }
            var Y = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function J() {
                this.expando = E.expando + J.uid++;
            }
            J.uid = 1, J.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t;
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r];
                    return i;
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                    void 0 !== n ? n : t);
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [ t ] : t.match(M) || []).length;
                            for (;n--; ) delete r[t[n]];
                        }
                        (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !E.isEmptyObject(t);
                }
            };
            var K = new J, Z = new J, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;
            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), 
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
                        }(n);
                    } catch (i) {}
                    Z.set(e, t, n);
                } else n = void 0;
                return n;
            }
            E.extend({
                hasData: function(e) {
                    return Z.hasData(e) || K.hasData(e);
                },
                data: function(e, t, n) {
                    return Z.access(e, t, n);
                },
                removeData: function(e, t) {
                    Z.remove(e, t);
                },
                _data: function(e, t, n) {
                    return K.access(e, t, n);
                },
                _removeData: function(e, t) {
                    K.remove(e, t);
                }
            }), E.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0], a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = Z.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), 
                            ne(o, r, i[r]));
                            K.set(o, "hasDataAttrs", !0);
                        }
                        return i;
                    }
                    return "object" == typeof e ? this.each((function() {
                        Z.set(this, e);
                    })) : z(this, (function(t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                        this.each((function() {
                            Z.set(this, e, t);
                        }));
                    }), null, t, arguments.length > 1, null, !0);
                },
                removeData: function(e) {
                    return this.each((function() {
                        Z.remove(this, e);
                    }));
                }
            }), E.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, E.makeArray(n)) : r.push(n)), 
                    r || [];
                },
                dequeue: function(e, t) {
                    var n = E.queue(e, t = t || "fx"), r = n.length, i = n.shift(), o = E._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
                    delete o.stop, i.call(e, (function() {
                        E.dequeue(e, t);
                    }), o)), !r && o && o.empty.fire();
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, {
                        empty: E.Callbacks("once memory").add((function() {
                            K.remove(e, [ t + "queue", n ]);
                        }))
                    });
                }
            }), E.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
                    }));
                },
                dequeue: function(e) {
                    return this.each((function() {
                        E.dequeue(this, e);
                    }));
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", []);
                },
                promise: function(e, t) {
                    var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function() {
                        --r || i.resolveWith(o, [ o ]);
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, 
                    n.empty.add(s));
                    return s(), i.promise(t);
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = [ "Top", "Right", "Bottom", "Left" ], ae = x.documentElement, se = function(e) {
                return E.contains(e.ownerDocument, e);
            }, ue = {
                composed: !0
            };
            ae.getRootNode && (se = function(e) {
                return E.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
            });
            var le = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === E.css(e, "display");
            };
            function ce(e, t, n, r) {
                var i, o, a = 20, s = r ? function() {
                    return r.cur();
                } : function() {
                    return E.css(e, t, "");
                }, u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && ie.exec(E.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--; ) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
                    c /= o;
                    E.style(e, t, (c *= 2) + l), n = n || [];
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
                r.start = c, r.end = i)), i;
            }
            var fe = {};
            function pe(e) {
                var t, n = e.ownerDocument, r = e.nodeName, i = fe[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = E.css(t, "display"), 
                t.parentNode.removeChild(t), "none" === i && (i = "block"), fe[r] = i, i);
            }
            function de(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
                t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), 
                "" === r.style.display && le(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none", 
                K.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e;
            }
            E.fn.extend({
                show: function() {
                    return de(this, !0);
                },
                hide: function() {
                    return de(this);
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        le(this) ? E(this).show() : E(this).hide();
                    }));
                }
            });
            var he = /^(?:checkbox|radio)$/i, ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ge = /^$|^module$|\/(?:java|ecma)script/i;
            !function() {
                var e = x.createDocumentFragment().appendChild(x.createElement("div")), t = x.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
                e.appendChild(t), g.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
                e.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, 
                e.innerHTML = "<option></option>", g.option = !!e.lastChild;
            }();
            var ve = {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            function me(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                void 0 === t || t && L(e, t) ? E.merge([ e ], n) : n;
            }
            function xe(e, t) {
                for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
            }
            ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, g.option || (ve.optgroup = ve.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
            var be = /<|&#?\w+;/;
            function we(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === T(o)) E.merge(p, o.nodeType ? [ o ] : o); else if (be.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (ye.exec(o) || [ "", "" ])[1].toLowerCase(), 
                    u = ve[s] || ve._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
                    E.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
                } else p.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = p[d++]; ) if (r && E.inArray(o, r) > -1) i && i.push(o); else if (l = se(o), 
                a = me(f.appendChild(o), "script"), l && xe(a), n) for (c = 0; o = a[c++]; ) ge.test(o.type || "") && n.push(o);
                return f;
            }
            var Te = /^([^.]*)(?:\.(.+)|)/;
            function Ce() {
                return !0;
            }
            function Ee() {
                return !1;
            }
            function Se(e, t) {
                return e === function() {
                    try {
                        return x.activeElement;
                    } catch (e) {}
                }() == ("focus" === t);
            }
            function ke(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
                    return e;
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
                r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee; else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return E().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = E.guid++)), e.each((function() {
                    E.event.add(this, t, i, r, n);
                }));
            }
            function Ae(e, t, n) {
                n ? (K.set(e, t, !1), E.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r, i, o = K.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length) (E.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = s.call(arguments), 
                            K.set(this, t, o), r = n(this, t), this[t](), o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : i = {}, 
                            o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value;
                        } else o.length && (K.set(this, t, {
                            value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                        }), e.stopImmediatePropagation());
                    }
                })) : void 0 === K.get(e, t) && E.event.add(e, t, Ce);
            }
            E.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, y, g = K.get(e);
                    if (Y(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(ae, i), 
                    n.guid || (n.guid = E.guid++), (u = g.events) || (u = g.events = Object.create(null)), 
                    (a = g.handle) || (a = g.handle = function(t) {
                        return E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
                    }), l = (t = (t || "").match(M) || [ "" ]).length; l--; ) d = y = (s = Te.exec(t[l]) || [])[1], 
                    h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                    f = E.event.special[d] || {}, c = E.extend({
                        type: d,
                        origType: y,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
                    f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                    E.event.global[d] = !0);
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, y, g = K.hasData(e) && K.get(e);
                    if (g && (u = g.events)) {
                        for (l = (t = (t || "").match(M) || [ "" ]).length; l--; ) if (d = y = (s = Te.exec(t[l]) || [])[1], 
                        h = (s[2] || "").split(".").sort(), d) {
                            for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; ) c = p[o], 
                            !i && y !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                            c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || E.removeEvent(e, d, g.handle), 
                            delete u[d]);
                        } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                        E.isEmptyObject(u) && K.remove(e, "handle events");
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = new Array(arguments.length), u = E.event.fix(e), l = (K.get(this, "events") || Object.create(null))[u.type] || [], c = E.event.special[u.type] || {};
                    for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                        for (a = E.event.handlers.call(this, u, l), t = 0; (i = a[t++]) && !u.isPropagationStopped(); ) for (u.currentTarget = i.elem, 
                        n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); ) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, 
                        u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), 
                        u.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, u), u.result;
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? E(i, this).index(l) > -1 : E.find(i, this, null, [ l ]).length), 
                        a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        });
                    }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s;
                },
                addProp: function(e, t) {
                    Object.defineProperty(E.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e];
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            });
                        }
                    });
                },
                fix: function(e) {
                    return e[E.expando] ? e : new E.Event(e);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return he.test(t.type) && t.click && L(t, "input") && Ae(t, "click", Ce), !1;
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return he.test(t.type) && t.click && L(t, "input") && Ae(t, "click"), !0;
                        },
                        _default: function(e) {
                            var t = e.target;
                            return he.test(t.type) && t.click && L(t, "input") && K.get(t, "click") || L(t, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        }
                    }
                }
            }, E.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }, (E.Event = function(e, t) {
                if (!(this instanceof E.Event)) return new E.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, 
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
            }).prototype = {
                constructor: E.Event,
                isDefaultPrevented: Ee,
                isPropagationStopped: Ee,
                isImmediatePropagationStopped: Ee,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, E.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, E.event.addProp), E.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                E.event.special[e] = {
                    setup: function() {
                        return Ae(this, e, Se), !1;
                    },
                    trigger: function() {
                        return Ae(this, e), !0;
                    },
                    _default: function() {
                        return !0;
                    },
                    delegateType: t
                };
            })), E.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                E.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === r || E.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                        e.type = t), n;
                    }
                };
            })), E.fn.extend({
                on: function(e, t, n, r) {
                    return ke(this, e, t, n, r);
                },
                one: function(e, t, n, r) {
                    return ke(this, e, t, n, r, 1);
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                    this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this;
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), 
                    this.each((function() {
                        E.event.remove(this, e, n, t);
                    }));
                }
            });
            var je = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function De(e, t) {
                return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
            }
            function qe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
            }
            function Pe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                e;
            }
            function _e(e, t) {
                var n, r, i, o, a, s;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && (s = K.get(e).events)) for (i in K.remove(t, "handle events"), 
                    s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
                    Z.hasData(e) && (o = Z.access(e), a = E.extend({}, o), Z.set(t, a));
                }
            }
            function Oe(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && he.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
            }
            function He(e, t, n, r) {
                t = u(t);
                var i, o, a, s, l, c, f = 0, p = e.length, d = p - 1, h = t[0], y = v(h);
                if (y || p > 1 && "string" == typeof h && !g.checkClone && Ne.test(h)) return e.each((function(i) {
                    var o = e.eq(i);
                    y && (t[0] = h.call(this, i, o.html())), He(o, t, n, r);
                }));
                if (p && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), 
                o || r)) {
                    for (s = (a = E.map(me(i, "script"), qe)).length; f < p; f++) l = i, f !== d && (l = E.clone(l, !0, !0), 
                    s && E.merge(a, me(l, "script"))), n.call(e[f], l, f);
                    if (s) for (c = a[a.length - 1].ownerDocument, E.map(a, Pe), f = 0; f < s; f++) l = a[f], 
                    ge.test(l.type || "") && !K.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : w(l.textContent.replace(Le, ""), l, c));
                }
                return e;
            }
            function Re(e, t, n) {
                for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(me(r)), 
                r.parentNode && (n && se(r) && xe(me(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            E.extend({
                htmlPrefilter: function(e) {
                    return e;
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0), u = se(e);
                    if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = me(s), 
                    r = 0, i = (o = me(e)).length; r < i; r++) Oe(o[r], a[r]);
                    if (t) if (n) for (o = o || me(e), a = a || me(s), r = 0, i = o.length; r < i; r++) _e(o[r], a[r]); else _e(e, s);
                    return (a = me(s, "script")).length > 0 && xe(a, !u && me(e, "script")), s;
                },
                cleanData: function(e) {
                    for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                        if (t = n[K.expando]) {
                            if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[K.expando] = void 0;
                        }
                        n[Z.expando] && (n[Z.expando] = void 0);
                    }
                }
            }), E.fn.extend({
                detach: function(e) {
                    return Re(this, e, !0);
                },
                remove: function(e) {
                    return Re(this, e);
                },
                text: function(e) {
                    return z(this, (function(e) {
                        return void 0 === e ? E.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                        }));
                    }), null, e, arguments.length);
                },
                append: function() {
                    return He(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e);
                    }));
                },
                prepend: function() {
                    return He(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = De(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    }));
                },
                before: function() {
                    return He(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    }));
                },
                after: function() {
                    return He(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    }));
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(me(e, !1)), 
                    e.textContent = "");
                    return this;
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return E.clone(this, e, t);
                    }));
                },
                html: function(e) {
                    return z(this, (function(e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !je.test(e) && !ve[(ye.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(me(t, !1)), 
                                t.innerHTML = e);
                                t = 0;
                            } catch (i) {}
                        }
                        t && this.empty().append(e);
                    }), null, e, arguments.length);
                },
                replaceWith: function() {
                    var e = [];
                    return He(this, arguments, (function(t) {
                        var n = this.parentNode;
                        E.inArray(this, e) < 0 && (E.cleanData(me(this)), n && n.replaceChild(t, this));
                    }), e);
                }
            }), E.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                E.fn[e] = function(e) {
                    for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
                    E(i[a])[t](n), l.apply(r, n.get());
                    return this.pushStack(r);
                };
            }));
            var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), Ie = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e);
            }, Be = function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = o[i];
                return r;
            }, Fe = new RegExp(oe.join("|"), "i");
            function We(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = E.style(e, t)), 
                !g.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, 
                o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
                s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
            }
            function $e(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !function() {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                        ae.appendChild(l).appendChild(c);
                        var e = n.getComputedStyle(c);
                        r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), 
                        i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), 
                        ae.removeChild(l), c = null;
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var r, i, o, a, s, u, l = x.createElement("div"), c = x.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
                g.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(g, {
                    boxSizingReliable: function() {
                        return e(), i;
                    },
                    pixelBoxStyles: function() {
                        return e(), a;
                    },
                    pixelPosition: function() {
                        return e(), r;
                    },
                    reliableMarginLeft: function() {
                        return e(), u;
                    },
                    scrollboxSize: function() {
                        return e(), o;
                    },
                    reliableTrDimensions: function() {
                        var e, t, r, i;
                        return null == s && (e = x.createElement("table"), t = x.createElement("tr"), r = x.createElement("div"), 
                        e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", 
                        t.style.height = "1px", r.style.height = "9px", r.style.display = "block", ae.appendChild(e).appendChild(t).appendChild(r), 
                        i = n.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, 
                        ae.removeChild(e)), s;
                    }
                }));
            }();
            var Qe = [ "Webkit", "Moz", "ms" ], ze = x.createElement("div").style, Ge = {};
            function Ue(e) {
                return E.cssProps[e] || Ge[e] || (e in ze ? e : Ge[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--; ) if ((e = Qe[n] + t) in ze) return e;
                }(e) || e);
            }
            var Xe = /^(none|table(?!-c[ea]).+)/, Ve = /^--/, Ye = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Je = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function Ke(e, t, n) {
                var r = ie.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function Ze(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0, s = 0, u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (;a < 4; a += 2) "margin" === n && (u += E.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + oe[a], !0, i)), 
                "margin" !== n && (u -= E.css(e, "border" + oe[a] + "Width", !0, i))) : (u += E.css(e, "padding" + oe[a], !0, i), 
                "padding" !== n ? u += E.css(e, "border" + oe[a] + "Width", !0, i) : s += E.css(e, "border" + oe[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), 
                u;
            }
            function et(e, t, n) {
                var r = Ie(e), i = (!g.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r), o = i, a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Me.test(a)) {
                    if (!n) return a;
                    a = "auto";
                }
                return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && L(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), 
                (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
            }
            function tt(e, t, n, r, i) {
                return new tt.prototype.init(e, t, n, r, i);
            }
            E.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = We(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = V(t), u = Ve.test(t), l = e.style;
                        if (u || (t = Ue(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ce(e, t, i), o = "number"), 
                        null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), 
                        g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                        a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = V(t);
                    return Ve.test(t) || (t = Ue(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
                    void 0 === i && (i = We(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), 
                    !0 === n || isFinite(o) ? o || 0 : i) : i;
                }
            }), E.each([ "height", "width" ], (function(e, t) {
                E.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !Xe.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : Be(e, Ye, (function() {
                            return et(e, t, r);
                        }));
                    },
                    set: function(e, n, r) {
                        var i, o = Ie(e), a = !g.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o), u = r ? Ze(e, t, r, s, o) : 0;
                        return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), 
                        u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = E.css(e, t)), 
                        Ke(0, n, u);
                    }
                };
            })), E.cssHooks.marginLeft = $e(g.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left;
                }))) + "px";
            })), E.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                E.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                        return i;
                    }
                }, "margin" !== e && (E.cssHooks[e + t].set = Ke);
            })), E.fn.extend({
                css: function(e, t) {
                    return z(this, (function(e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                    }), e, t, arguments.length > 1);
                }
            }), E.Tween = tt, tt.prototype = {
                constructor: tt,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, 
                    this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px");
                },
                cur: function() {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
                },
                run: function(e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                    this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
                }
            }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                    },
                    set: function(e) {
                        E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
                    }
                }
            }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
            }, E.easing = {
                linear: function(e) {
                    return e;
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing"
            }, (E.fx = tt.prototype.init).step = {};
            var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
            function at() {
                rt && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, E.fx.interval), 
                E.fx.tick());
            }
            function st() {
                return n.setTimeout((function() {
                    nt = void 0;
                })), nt = Date.now();
            }
            function ut(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i;
            }
            function lt(e, t, n) {
                for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
            }
            function ct(e, t, n) {
                var r, i, o = 0, a = ct.prefilters.length, s = E.Deferred().always((function() {
                    delete u.elem;
                })), u = function() {
                    if (i) return !1;
                    for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                    return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ l, 1, 0 ]), 
                    s.resolveWith(e, [ l ]), !1);
                }, l = s.promise({
                    elem: e,
                    props: E.extend({}, t),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: nt || st(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = E.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r;
                    },
                    stop: function(t) {
                        var n = 0, r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
                        this;
                    }
                }), c = l.props;
                for (function(e, t) {
                    var n, r, i, o, a;
                    for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
                    n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
                    delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
                }(c, l.opts.specialEasing); o < a; o++) if (r = ct.prefilters[o].call(l, e, c, l.opts)) return v(r.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
                r;
                return E.map(c, lt, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
                E.fx.timer(E.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l;
            }
            E.Animation = E.extend(ct, {
                tweeners: {
                    "*": [ function(e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, ie.exec(t), n), n;
                    } ]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = [ "*" ]) : e = e.match(M);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], 
                    ct.tweeners[n].unshift(t);
                },
                prefilters: [ function(e, t, n) {
                    var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, y = e.nodeType && le(e), g = K.get(e, "fxshow");
                    for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
                    s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s();
                    }), a.unqueued++, p.always((function() {
                        p.always((function() {
                            a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                        }));
                    }))), t) if (i = t[r], it.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (y ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            y = !0;
                        }
                        d[r] = g && g[r] || E.style(e, r);
                    }
                    if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                    null == (l = g && g.display) && (l = K.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (de([ e ], !0), 
                    l = e.style.display || l, c = E.css(e, "display"), de([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done((function() {
                        h.display = l;
                    })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
                    n.overflow && (h.overflow = "hidden", p.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                    }))), u = !1, d) u || (g ? "hidden" in g && (y = g.hidden) : g = K.access(e, "fxshow", {
                        display: l
                    }), o && (g.hidden = !y), y && de([ e ], !0), p.done((function() {
                        for (r in y || de([ e ]), K.remove(e, "fxshow"), d) E.style(e, r, d[r]);
                    }))), u = lt(y ? g[r] : 0, r, p), r in g || (g[r] = u.start, y && (u.end = u.start, 
                    u.start = 0));
                } ],
                prefilter: function(e, t) {
                    t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
                }
            }), E.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? E.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), 
                null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
                }, r;
            }, E.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r);
                },
                animate: function(e, t, n, r) {
                    var i = E.isEmptyObject(e), o = E.speed(t, n, r), a = function() {
                        var t = ct(this, E.extend({}, e), o);
                        (i || K.get(this, "finish")) && t.stop(!0);
                    };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n);
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), 
                    this.each((function() {
                        var t = !0, i = null != e && e + "queueHooks", o = E.timers, a = K.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                        t = !1, o.splice(i, 1));
                        !t && n || E.dequeue(this, e);
                    }));
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = K.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = E.timers, a = r ? r.length : 0;
                        for (n.finish = !0, E.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                        t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                        o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    }));
                }
            }), E.each([ "toggle", "show", "hide" ], (function(e, t) {
                var n = E.fn[t];
                E.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
                };
            })), E.each({
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                E.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r);
                };
            })), E.timers = [], E.fx.tick = function() {
                var e, t = 0, n = E.timers;
                for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || E.fx.stop(), nt = void 0;
            }, E.fx.timer = function(e) {
                E.timers.push(e), E.fx.start();
            }, E.fx.interval = 13, E.fx.start = function() {
                rt || (rt = !0, at());
            }, E.fx.stop = function() {
                rt = null;
            }, E.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, E.fn.delay = function(e, t) {
                return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i);
                    };
                }));
            }, function() {
                var e = x.createElement("input"), t = x.createElement("select").appendChild(x.createElement("option"));
                e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = x.createElement("input")).value = "t", 
                e.type = "radio", g.radioValue = "t" === e.value;
            }();
            var ft, pt = E.expr.attrHandle;
            E.fn.extend({
                attr: function(e, t) {
                    return z(this, E.attr, e, t, arguments.length > 1);
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        E.removeAttr(this, e);
                    }));
                }
            }), E.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? ft : void 0)), 
                    void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
                    n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r);
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!g.radioValue && "radio" === t && L(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0, i = t && t.match(M);
                    if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
                }
            }), ft = {
                set: function(e, t, n) {
                    return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
                }
            }, E.each(E.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = pt[t] || E.find.attr;
                pt[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), 
                    i;
                };
            }));
            var dt = /^(?:input|select|textarea|button)$/i, ht = /^(?:a|area)$/i;
            function yt(e) {
                return (e.match(M) || []).join(" ");
            }
            function gt(e) {
                return e.getAttribute && e.getAttribute("class") || "";
            }
            function vt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || [];
            }
            E.fn.extend({
                prop: function(e, t) {
                    return z(this, E.prop, e, t, arguments.length > 1);
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[E.propFix[e] || e];
                    }));
                }
            }), E.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, 
                    i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = E.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), g.optSelected || (E.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
            }), E.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                E.propFix[this.toLowerCase()] = this;
            })), E.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (v(e)) return this.each((function(t) {
                        E(this).addClass(e.call(this, t, gt(this)));
                    }));
                    if ((t = vt(e)).length) for (;n = this[u++]; ) if (i = gt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                        for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = yt(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (v(e)) return this.each((function(t) {
                        E(this).removeClass(e.call(this, t, gt(this)));
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = vt(e)).length) for (;n = this[u++]; ) if (i = gt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                        for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                        i !== (s = yt(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                toggleClass: function(e, t) {
                    var n = typeof e, r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                        E(this).toggleClass(e.call(this, n, gt(this), t), t);
                    })) : this.each((function() {
                        var t, i, o, a;
                        if (r) for (i = 0, o = E(this), a = vt(e); t = a[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = gt(this)) && K.set(this, "__className__", t), 
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
                    }));
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + yt(gt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1;
                }
            });
            var mt = /\r/g;
            E.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = v(e), this.each((function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, (function(e) {
                            return null == e ? "" : e + "";
                        }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                    }))) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
                }
            }), E.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = E.find.attr(e, "value");
                            return null != t ? t : yt(E.text(e));
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), a) return t;
                                s.push(t);
                            }
                            return s;
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        }
                    }
                }
            }), E.each([ "radio", "checkbox" ], (function() {
                E.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1;
                    }
                }, g.checkOn || (E.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
            })), g.focusin = "onfocusin" in n;
            var xt = /^(?:focusinfocus|focusoutblur)$/, bt = function(e) {
                e.stopPropagation();
            };
            E.extend(E.event, {
                trigger: function(e, t, r, i) {
                    var o, a, s, u, l, c, f, p, h = [ r || x ], y = d.call(e, "type") ? e.type : e, g = d.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = p = s = r = r || x, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(y + E.event.triggered) && (y.indexOf(".") > -1 && (g = y.split("."), 
                    y = g.shift(), g.sort()), l = y.indexOf(":") < 0 && "on" + y, (e = e[E.expando] ? e : new E.Event(y, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
                    e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : E.makeArray(t, [ e ]), 
                    f = E.event.special[y] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                        if (!i && !f.noBubble && !m(r)) {
                            for (u = f.delegateType || y, xt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
                            s = a;
                            s === (r.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || n);
                        }
                        for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); ) p = a, e.type = o > 1 ? u : f.bindType || y, 
                        (c = (K.get(a, "events") || Object.create(null))[e.type] && K.get(a, "handle")) && c.apply(a, t), 
                        (c = l && a[l]) && c.apply && Y(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                        return e.type = y, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !Y(r) || l && v(r[y]) && !m(r) && ((s = r[l]) && (r[l] = null), 
                        E.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, bt), r[y](), 
                        e.isPropagationStopped() && p.removeEventListener(y, bt), E.event.triggered = void 0, 
                        s && (r[l] = s)), e.result;
                    }
                },
                simulate: function(e, t, n) {
                    var r = E.extend(new E.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    E.event.trigger(r, null, t);
                }
            }), E.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        E.event.trigger(e, t, this);
                    }));
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return E.event.trigger(e, t, n, !0);
                }
            }), g.focusin || E.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this.document || this, i = K.access(r, t);
                        i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this.document || this, i = K.access(r, t) - 1;
                        i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t));
                    }
                };
            }));
            var wt = n.location, Tt = {
                guid: Date.now()
            }, Ct = /\?/;
            E.parseXML = function(e) {
                var t, r;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml");
                } catch (i) {}
                return r = t && t.getElementsByTagName("parsererror")[0], t && !r || E.error("Invalid XML: " + (r ? E.map(r.childNodes, (function(e) {
                    return e.textContent;
                })).join("\n") : e)), t;
            };
            var Et = /\[\]$/, St = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
            function jt(e, t, n, r) {
                var i;
                if (Array.isArray(t)) E.each(t, (function(t, i) {
                    n || Et.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                })); else if (n || "object" !== T(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
            }
            E.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function() {
                    i(this.name, this.value);
                })); else for (n in e) jt(n, e[n], t, i);
                return r.join("&");
            }, E.fn.extend({
                serialize: function() {
                    return E.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = E.prop(this, "elements");
                        return e ? E.makeArray(e) : this;
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !E(this).is(":disabled") && At.test(this.nodeName) && !kt.test(e) && (this.checked || !he.test(e));
                    })).map((function(e, t) {
                        var n = E(this).val();
                        return null == n ? null : Array.isArray(n) ? E.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            };
                        })) : {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        };
                    })).get();
                }
            });
            var Nt = /%20/g, Lt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:GET|HEAD)$/, _t = /^\/\//, Ot = {}, Ht = {}, Rt = "*/".concat("*"), Mt = x.createElement("a");
            function It(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, o = t.toLowerCase().match(M) || [];
                    if (v(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                };
            }
            function Bt(e, t, n, r) {
                var i = {}, o = e === Ht;
                function a(s) {
                    var u;
                    return i[s] = !0, E.each(e[s] || [], (function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                        a(l), !1);
                    })), u;
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*");
            }
            function Ft(e, t) {
                var n, r, i = E.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && E.extend(!0, e, r), e;
            }
            Mt.href = wt.href, E.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Rt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": E.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Ft(Ft(e, E.ajaxSettings), t) : Ft(E.ajaxSettings, e);
                },
                ajaxPrefilter: It(Ot),
                ajaxTransport: It(Ht),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0);
                    var r, i, o, a, s, u, l, c, f, p, d = E.ajaxSetup({}, t = t || {}), h = d.context || d, y = d.context && (h.nodeType || h.jquery) ? E(h) : E.event, g = E.Deferred(), v = E.Callbacks("once memory"), m = d.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!a) for (a = {}; t = qt.exec(o); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return l ? o : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), 
                            this;
                        },
                        overrideMimeType: function(e) {
                            return null == l && (d.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (l) C.always(e[C.status]); else for (t in e) m[t] = [ m[t], e[t] ];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || T;
                            return r && r.abort(t), S(0, t), this;
                        }
                    };
                    if (g.promise(C), d.url = ((e || d.url || wt.href) + "").replace(_t, wt.protocol + "//"), 
                    d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [ "" ], 
                    null == d.crossDomain) {
                        u = x.createElement("a");
                        try {
                            u.href = d.url, u.href = u.href, d.crossDomain = Mt.protocol + "//" + Mt.host != u.protocol + "//" + u.host;
                        } catch (k) {
                            d.crossDomain = !0;
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = E.param(d.data, d.traditional)), 
                    Bt(Ot, d, t, C), l) return C;
                    for (f in (c = E.event && d.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), 
                    d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), i = d.url.replace(Lt, ""), 
                    d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Nt, "+")) : (p = d.url.slice(i.length), 
                    d.data && (d.processData || "string" == typeof d.data) && (i += (Ct.test(i) ? "&" : "?") + d.data, 
                    delete d.data), !1 === d.cache && (i = i.replace(Dt, "$1"), p = (Ct.test(i) ? "&" : "?") + "_=" + Tt.guid++ + p), 
                    d.url = i + p), d.ifModified && (E.lastModified[i] && C.setRequestHeader("If-Modified-Since", E.lastModified[i]), 
                    E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && C.setRequestHeader("Content-Type", d.contentType), 
                    C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]), 
                    d.headers) C.setRequestHeader(f, d.headers[f]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l)) return C.abort();
                    if (T = "abort", v.add(d.complete), C.done(d.success), C.fail(d.error), r = Bt(Ht, d, t, C)) {
                        if (C.readyState = 1, c && y.trigger("ajaxSend", [ C, d ]), l) return C;
                        d.async && d.timeout > 0 && (s = n.setTimeout((function() {
                            C.abort("timeout");
                        }), d.timeout));
                        try {
                            l = !1, r.send(b, S);
                        } catch (k) {
                            if (l) throw k;
                            S(-1, k);
                        }
                    } else S(-1, "No Transport");
                    function S(e, t, a, u) {
                        var f, p, x, b, w, T = t;
                        l || (l = !0, s && n.clearTimeout(s), r = void 0, o = u || "", C.readyState = e > 0 ? 4 : 0, 
                        f = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break;
                            }
                            if (u[0] in n) o = u[0]; else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break;
                                    }
                                    a || (a = i);
                                }
                                o = o || a;
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o];
                        }(d, C, a)), !f && E.inArray("script", d.dataTypes) > -1 && E.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), 
                        b = function(e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break;
                                }
                                if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                    t = a(t);
                                } catch (k) {
                                    return {
                                        state: "parsererror",
                                        error: a ? k : "No conversion from " + u + " to " + o
                                    };
                                }
                            }
                            return {
                                state: "success",
                                data: t
                            };
                        }(d, b, C, f), f ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[i] = w), 
                        (w = C.getResponseHeader("etag")) && (E.etag[i] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, 
                        p = b.data, f = !(x = b.error))) : (x = T, !e && T || (T = "error", e < 0 && (e = 0))), 
                        C.status = e, C.statusText = (t || T) + "", f ? g.resolveWith(h, [ p, T, C ]) : g.rejectWith(h, [ C, T, x ]), 
                        C.statusCode(m), m = void 0, c && y.trigger(f ? "ajaxSuccess" : "ajaxError", [ C, d, f ? p : x ]), 
                        v.fireWith(h, [ C, T ]), c && (y.trigger("ajaxComplete", [ C, d ]), --E.active || E.event.trigger("ajaxStop")));
                    }
                    return C;
                },
                getJSON: function(e, t, n) {
                    return E.get(e, t, n, "json");
                },
                getScript: function(e, t) {
                    return E.get(e, void 0, t, "script");
                }
            }), E.each([ "get", "post" ], (function(e, t) {
                E[t] = function(e, n, r, i) {
                    return v(n) && (i = i || r, r = n, n = void 0), E.ajax(E.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, E.isPlainObject(e) && e));
                };
            })), E.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
            })), E._evalUrl = function(e, t, n) {
                return E.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        E.globalEval(e, t, n);
                    }
                });
            }, E.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), 
                    this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                    })).append(this)), this;
                },
                wrapInner: function(e) {
                    return v(e) ? this.each((function(t) {
                        E(this).wrapInner(e.call(this, t));
                    })) : this.each((function() {
                        var t = E(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    }));
                },
                wrap: function(e) {
                    var t = v(e);
                    return this.each((function(n) {
                        E(this).wrapAll(t ? e.call(this, n) : e);
                    }));
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        E(this).replaceWith(this.childNodes);
                    })), this;
                }
            }), E.expr.pseudos.hidden = function(e) {
                return !E.expr.pseudos.visible(e);
            }, E.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }, E.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest;
                } catch (e) {}
            };
            var Wt = {
                0: 200,
                1223: 204
            }, $t = E.ajaxSettings.xhr();
            g.cors = !!$t && "withCredentials" in $t, g.ajax = $t = !!$t, E.ajaxTransport((function(e) {
                var t, r;
                if (g.cors || $t && !e.crossDomain) return {
                    send: function(i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
                        i) s.setRequestHeader(a, i[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()));
                            };
                        }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout((function() {
                                t && r();
                            }));
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null);
                        } catch (u) {
                            if (t) throw u;
                        }
                    },
                    abort: function() {
                        t && t();
                    }
                };
            })), E.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1);
            })), E.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return E.globalEval(e), e;
                    }
                }
            }), E.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            })), E.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(r, i) {
                        t = E("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                        }), x.head.appendChild(t[0]);
                    },
                    abort: function() {
                        n && n();
                    }
                };
            }));
            var Qt = [], zt = /(=)\?(?=&|$)|\?\?/;
            E.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Qt.pop() || E.expando + "_" + Tt.guid++;
                    return this[e] = !0, e;
                }
            }), E.ajaxPrefilter("json jsonp", (function(e, t, r) {
                var i, o, a, s = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
                s ? e[s] = e[s].replace(zt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
                e.converters["script json"] = function() {
                    return a || E.error(i + " was not called"), a[0];
                }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                    a = arguments;
                }, r.always((function() {
                    void 0 === o ? E(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, 
                    Qt.push(i)), a && v(o) && o(a[0]), a = o = void 0;
                })), "script";
            })), g.createHTMLDocument = function() {
                var e = x.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
            }(), E.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, 
                t.head.appendChild(r)) : t = x), o = !n && [], (i = D.exec(e)) ? [ t.createElement(i[1]) ] : (i = we([ e ], t, o), 
                o && o.length && E(o).remove(), E.merge([], i.childNodes)));
                var r, i, o;
            }, E.fn.load = function(e, t, n) {
                var r, i, o, a = this, s = e.indexOf(" ");
                return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
                a.length > 0 && E.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
                })).always(n && function(e, t) {
                    a.each((function() {
                        n.apply(this, o || [ e.responseText, t, e ]);
                    }));
                }), this;
            }, E.expr.pseudos.animated = function(e) {
                return E.grep(E.timers, (function(t) {
                    return e === t.elem;
                })).length;
            }, E.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), 
                    u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, 
                    i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, E.extend({}, s))), 
                    null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
                    "using" in t ? t.using.call(e, f) : c.css(f);
                }
            }, E.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        E.offset.setOffset(this, e, t);
                    }));
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0;
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect(); else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); ) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), 
                            i.left += E.css(e, "borderLeftWidth", !0));
                        }
                        return {
                            top: t.top - i.top - E.css(r, "marginTop", !0),
                            left: t.left - i.left - E.css(r, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === E.css(e, "position"); ) e = e.offsetParent;
                        return e || ae;
                    }));
                }
            }), E.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function(r) {
                    return z(this, (function(e, r, i) {
                        var o;
                        if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
                    }), e, r, arguments.length);
                };
            })), E.each([ "top", "left" ], (function(e, t) {
                E.cssHooks[t] = $e(g.pixelPosition, (function(e, n) {
                    if (n) return n = We(e, t), Me.test(n) ? E(e).position()[t] + "px" : n;
                }));
            })), E.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                E.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, r) {
                    E.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return z(this, (function(t, n, i) {
                            var o;
                            return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s);
                        }), t, a ? i : void 0, a);
                    };
                }));
            })), E.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                E.fn[t] = function(e) {
                    return this.on(t, e);
                };
            })), E.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                }
            }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                E.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
            }));
            var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            E.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = s.call(arguments, 2), 
                (i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || E.guid++, i;
            }, E.holdReady = function(e) {
                e ? E.readyWait++ : E.ready(!0);
            }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = L, E.isFunction = v, 
            E.isWindow = m, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function(e) {
                var t = E.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }, E.trim = function(e) {
                return null == e ? "" : (e + "").replace(Gt, "");
            }, void 0 === (r = function() {
                return E;
            }.apply(t, [])) || (e.exports = r);
            var Ut = n.jQuery, Xt = n.$;
            return E.noConflict = function(e) {
                return n.$ === E && (n.$ = Xt), e && n.jQuery === E && (n.jQuery = Ut), E;
            }, void 0 === i && (n.jQuery = n.$ = E), E;
        }));
    },
    6: function(e, t, n) {
        e.exports = n(20);
    }
});