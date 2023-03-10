!function(a, b) {
    if ("function" == typeof define && define.amd) define("webextension-polyfill", [ "module" ], b); else if ("undefined" != typeof exports) b(module); else {
        var c = {
            exports: {}
        };
        b(c), a.browser = c.exports;
    }
}(this, (function(a) {
    "use strict";
    if ("undefined" == typeof browser) {
        "\n      Returning a Promise is the preferred way to send a reply from an\n      onMessage/onMessageExternal listener, as the sendResponse will be\n      removed from the specs (See\n      https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/onMessage)\n    ".replace(/\s+/g, " ").trim();
        a.exports = (() => {
            const e = {
                alarms: {
                    clear: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    clearAll: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    get: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    getAll: {
                        minArgs: 0,
                        maxArgs: 0
                    }
                },
                bookmarks: {
                    create: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getChildren: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getRecent: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getSubTree: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getTree: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    move: {
                        minArgs: 2,
                        maxArgs: 2
                    },
                    remove: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeTree: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    search: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    update: {
                        minArgs: 2,
                        maxArgs: 2
                    }
                },
                browserAction: {
                    disable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    enable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    getBadgeBackgroundColor: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getBadgeText: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getPopup: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getTitle: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    openPopup: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    setBadgeBackgroundColor: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    setBadgeText: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    setIcon: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    }
                },
                browsingData: {
                    remove: {
                        minArgs: 2,
                        maxArgs: 2
                    },
                    removeCache: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeCookies: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeDownloads: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeFormData: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeHistory: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeLocalStorage: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removePasswords: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removePluginData: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    settings: {
                        minArgs: 0,
                        maxArgs: 0
                    }
                },
                commands: {
                    getAll: {
                        minArgs: 0,
                        maxArgs: 0
                    }
                },
                contextMenus: {
                    remove: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeAll: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    update: {
                        minArgs: 2,
                        maxArgs: 2
                    }
                },
                cookies: {
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getAll: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getAllCookieStores: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    remove: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    set: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                },
                devtools: {
                    inspectedWindow: {
                        eval: {
                            minArgs: 1,
                            maxArgs: 2
                        }
                    },
                    panels: {
                        create: {
                            minArgs: 3,
                            maxArgs: 3,
                            singleCallbackArg: !0
                        }
                    }
                },
                downloads: {
                    cancel: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    download: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    erase: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getFileIcon: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    open: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    pause: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeFile: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    resume: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    search: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    }
                },
                extension: {
                    isAllowedFileSchemeAccess: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    isAllowedIncognitoAccess: {
                        minArgs: 0,
                        maxArgs: 0
                    }
                },
                history: {
                    addUrl: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    deleteAll: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    deleteRange: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    deleteUrl: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getVisits: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    search: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                },
                i18n: {
                    detectLanguage: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getAcceptLanguages: {
                        minArgs: 0,
                        maxArgs: 0
                    }
                },
                identity: {
                    launchWebAuthFlow: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                },
                idle: {
                    queryState: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                },
                management: {
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getAll: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    getSelf: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    setEnabled: {
                        minArgs: 2,
                        maxArgs: 2
                    },
                    uninstallSelf: {
                        minArgs: 0,
                        maxArgs: 1
                    }
                },
                notifications: {
                    clear: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    create: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    getAll: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    getPermissionLevel: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    update: {
                        minArgs: 2,
                        maxArgs: 2
                    }
                },
                pageAction: {
                    getPopup: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getTitle: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    hide: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    setIcon: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    },
                    show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0
                    }
                },
                permissions: {
                    contains: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getAll: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    remove: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    request: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                },
                runtime: {
                    getBackgroundPage: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    getBrowserInfo: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    getPlatformInfo: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    openOptionsPage: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    requestUpdateCheck: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    sendMessage: {
                        minArgs: 1,
                        maxArgs: 3
                    },
                    sendNativeMessage: {
                        minArgs: 2,
                        maxArgs: 2
                    },
                    setUninstallURL: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                },
                sessions: {
                    getDevices: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    getRecentlyClosed: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    restore: {
                        minArgs: 0,
                        maxArgs: 1
                    }
                },
                storage: {
                    local: {
                        clear: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getBytesInUse: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    managed: {
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getBytesInUse: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    sync: {
                        clear: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getBytesInUse: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    }
                },
                tabs: {
                    captureVisibleTab: {
                        minArgs: 0,
                        maxArgs: 2
                    },
                    create: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    detectLanguage: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    discard: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    duplicate: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    executeScript: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getCurrent: {
                        minArgs: 0,
                        maxArgs: 0
                    },
                    getZoom: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    getZoomSettings: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    highlight: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    insertCSS: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    move: {
                        minArgs: 2,
                        maxArgs: 2
                    },
                    query: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    reload: {
                        minArgs: 0,
                        maxArgs: 2
                    },
                    remove: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    removeCSS: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    sendMessage: {
                        minArgs: 2,
                        maxArgs: 3
                    },
                    setZoom: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    setZoomSettings: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    update: {
                        minArgs: 1,
                        maxArgs: 2
                    }
                },
                topSites: {
                    get: {
                        minArgs: 0,
                        maxArgs: 0
                    }
                },
                webNavigation: {
                    getAllFrames: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    getFrame: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                },
                webRequest: {
                    handlerBehaviorChanged: {
                        minArgs: 0,
                        maxArgs: 0
                    }
                },
                windows: {
                    create: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 2
                    },
                    getAll: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    getCurrent: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    getLastFocused: {
                        minArgs: 0,
                        maxArgs: 1
                    },
                    remove: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    update: {
                        minArgs: 2,
                        maxArgs: 2
                    }
                }
            };
            if (0 === Object.keys(e).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class f extends WeakMap {
                constructor(u, v) {
                    super(v), this.createItem = u;
                }
                get(u) {
                    return this.has(u) || this.set(u, this.createItem(u)), super.get(u);
                }
            }
            const h = (u, v) => (...w) => {
                chrome.runtime.lastError ? u.reject(chrome.runtime.lastError) : v.singleCallbackArg || 1 >= w.length ? u.resolve(w[0]) : u.resolve(w);
            }, i = u => 1 == u ? "argument" : "arguments", k = (u, v, w) => new Proxy(v, {
                apply: (x, y, z) => w.call(y, u, ...z)
            });
            let l = Function.call.bind(Object.prototype.hasOwnProperty);
            const m = (u, v = {}, w = {}) => {
                let x = Object.create(null), y = {
                    has: (A, B) => B in u || B in x,
                    get(A, B) {
                        if (B in x) return x[B];
                        if (B in u) {
                            let D = u[B];
                            if ("function" == typeof D) if ("function" == typeof v[B]) D = k(u, u[B], v[B]); else if (l(w, B)) {
                                let E = ((u, v) => function(x, ...y) {
                                    if (y.length < v.minArgs) throw new Error(`Expected at least ${v.minArgs} ${i(v.minArgs)} for ${u}(), got ${y.length}`);
                                    if (y.length > v.maxArgs) throw new Error(`Expected at most ${v.maxArgs} ${i(v.maxArgs)} for ${u}(), got ${y.length}`);
                                    return new Promise(((z, A) => {
                                        if (v.fallbackToNoCallback) try {
                                            x[u](...y, h({
                                                resolve: z,
                                                reject: A
                                            }, v));
                                        } catch (B) {
                                            x[u](...y), v.fallbackToNoCallback = !1, v.noCallback = !0, z();
                                        } else v.noCallback ? (x[u](...y), z()) : x[u](...y, h({
                                            resolve: z,
                                            reject: A
                                        }, v));
                                    }));
                                })(B, w[B]);
                                D = k(u, u[B], E);
                            } else D = D.bind(u); else {
                                if ("object" != typeof D || null === D || !l(v, B) && !l(w, B)) return Object.defineProperty(x, B, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => u[B],
                                    set(E) {
                                        u[B] = E;
                                    }
                                }), D;
                                D = m(D, v[B], w[B]);
                            }
                            return x[B] = D, D;
                        }
                    },
                    set: (A, B, C) => (B in x ? x[B] = C : u[B] = C, !0),
                    defineProperty: (A, B, C) => Reflect.defineProperty(x, B, C),
                    deleteProperty: (A, B) => Reflect.deleteProperty(x, B)
                }, z = Object.create(u);
                return new Proxy(z, y);
            }, n = u => ({
                addListener(v, w, ...x) {
                    v.addListener(u.get(w), ...x);
                },
                hasListener: (v, w) => v.hasListener(u.get(w)),
                removeListener(v, w) {
                    v.removeListener(u.get(w));
                }
            });
            let o = !1;
            const p = new f((u => "function" == typeof u ? function(w, x, y) {
                let A, C, z = !1, B = new Promise((F => {
                    A = function(G) {
                        o || (o = !0), z = !0, F(G);
                    };
                }));
                try {
                    C = u(w, x, A);
                } catch (F) {
                    C = Promise.reject(F);
                }
                const D = !0 !== C && (u => u && "object" == typeof u && "function" == typeof u.then)(C);
                if (!0 !== C && !D && !z) return !1;
                const E = F => {
                    F.then((G => {
                        y(G);
                    }), (G => {
                        let H;
                        H = G && (G instanceof Error || "string" == typeof G.message) ? G.message : "An unexpected error occurred", 
                        y({
                            __mozWebExtensionPolyfillReject__: !0,
                            message: H
                        });
                    })).catch((G => {}));
                };
                return E(D ? C : B), !0;
            } : u)), q = ({reject: u, resolve: v}, w) => {
                chrome.runtime.lastError ? "The message port closed before a response was received." === chrome.runtime.lastError.message ? v() : u(chrome.runtime.lastError) : w && w.__mozWebExtensionPolyfillReject__ ? u(new Error(w.message)) : v(w);
            }, r = (u, v, w, ...x) => {
                if (x.length < v.minArgs) throw new Error(`Expected at least ${v.minArgs} ${i(v.minArgs)} for ${u}(), got ${x.length}`);
                if (x.length > v.maxArgs) throw new Error(`Expected at most ${v.maxArgs} ${i(v.maxArgs)} for ${u}(), got ${x.length}`);
                return new Promise(((y, z) => {
                    const A = q.bind(null, {
                        resolve: y,
                        reject: z
                    });
                    x.push(A), w.sendMessage(...x);
                }));
            }, s = {
                runtime: {
                    onMessage: n(p),
                    onMessageExternal: n(p),
                    sendMessage: r.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: r.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            }, t = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            return e.privacy = {
                network: {
                    networkPredictionEnabled: t,
                    webRTCIPHandlingPolicy: t
                },
                services: {
                    passwordSavingEnabled: t
                },
                websites: {
                    hyperlinkAuditingEnabled: t,
                    referrersEnabled: t
                }
            }, m(chrome, s, e);
        })();
    } else a.exports = browser;
}));