parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "nGBO": [function(require, module, exports) {
        var define;
        var e;
        ! function(t, r) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof e && e.amd ? e(r) : (t = t || self).barba = r()
        }(this, function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function t(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function n(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e, t, r) {
                return (s = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? Reflect.construct : function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var o = new(Function.bind.apply(e, n));
                    return r && i(o, r.prototype), o
                }).apply(null, arguments)
            }

            function a(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (a = function(e) {
                    if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return s(e, arguments, o(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(r, e)
                })(e)
            }

            function u(e, t) {
                try {
                    var r = e()
                } catch (e) {
                    return t(e)
                }
                return r && r.then ? r.then(void 0, t) : r
            }
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var c, h = "2.9.7";
            ! function(e) {
                e[e.off = 0] = "off", e[e.error = 1] = "error", e[e.warning = 2] = "warning", e[e.info = 3] = "info", e[e.debug = 4] = "debug"
            }(c || (c = {}));
            var f = c.off,
                l = function() {
                    function e(e) {
                        this.t = e
                    }
                    e.getLevel = function() {
                        return f
                    }, e.setLevel = function(e) {
                        return f = c[e]
                    };
                    var t = e.prototype;
                    return t.error = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.i(console.error, c.error, t)
                    }, t.warn = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.i(console.warn, c.warning, t)
                    }, t.info = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.i(console.info, c.info, t)
                    }, t.debug = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.i(console.log, c.debug, t)
                    }, t.i = function(t, r, n) {
                        r <= e.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(n))
                    }, e
                }(),
                p = S,
                v = P,
                d = b,
                m = x,
                g = A,
                y = "/",
                w = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

            function b(e, t) {
                for (var r, n = [], o = 0, i = 0, s = "", a = t && t.delimiter || y, u = t && t.whitelist || void 0, c = !1; null !== (r = w.exec(e));) {
                    var h = r[0],
                        f = r[1],
                        l = r.index;
                    if (s += e.slice(i, l), i = l + h.length, f) s += f[1], c = !0;
                    else {
                        var p = "",
                            v = r[2],
                            d = r[3],
                            m = r[4],
                            g = r[5];
                        if (!c && s.length) {
                            var b = s.length - 1,
                                P = s[b];
                            (!u || u.indexOf(P) > -1) && (p = P, s = s.slice(0, b))
                        }
                        s && (n.push(s), s = "", c = !1);
                        var x = d || m,
                            j = p || a;
                        n.push({
                            name: v || o++,
                            prefix: p,
                            delimiter: j,
                            optional: "?" === g || "*" === g,
                            repeat: "+" === g || "*" === g,
                            pattern: x ? k(x) : "[^" + E(j === a ? j : j + a) + "]+?"
                        })
                    }
                }
                return (s || i < e.length) && n.push(s + e.substr(i)), n
            }

            function P(e, t) {
                return function(r, n) {
                    var o = e.exec(r);
                    if (!o) return !1;
                    for (var i = o[0], s = o.index, a = {}, u = n && n.decode || decodeURIComponent, c = 1; c < o.length; c++)
                        if (void 0 !== o[c]) {
                            var h = t[c - 1];
                            a[h.name] = h.repeat ? o[c].split(h.delimiter).map(function(e) {
                                return u(e, h)
                            }) : u(o[c], h)
                        }
                    return {
                        path: i,
                        index: s,
                        params: a
                    }
                }
            }

            function x(e, t) {
                for (var r = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", j(t)));
                return function(t, n) {
                    for (var o = "", i = n && n.encode || encodeURIComponent, s = !n || !1 !== n.validate, a = 0; a < e.length; a++) {
                        var u = e[a];
                        if ("string" != typeof u) {
                            var c, h = t ? t[u.name] : void 0;
                            if (Array.isArray(h)) {
                                if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but got array');
                                if (0 === h.length) {
                                    if (u.optional) continue;
                                    throw new TypeError('Expected "' + u.name + '" to not be empty')
                                }
                                for (var f = 0; f < h.length; f++) {
                                    if (c = i(h[f], u), s && !r[a].test(c)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '"');
                                    o += (0 === f ? u.prefix : u.delimiter) + c
                                }
                            } else if ("string" != typeof h && "number" != typeof h && "boolean" != typeof h) {
                                if (!u.optional) throw new TypeError('Expected "' + u.name + '" to be ' + (u.repeat ? "an array" : "a string"))
                            } else {
                                if (c = i(String(h), u), s && !r[a].test(c)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but got "' + c + '"');
                                o += u.prefix + c
                            }
                        } else o += u
                    }
                    return o
                }
            }

            function E(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function k(e) {
                return e.replace(/([=!:$/()])/g, "\\$1")
            }

            function j(e) {
                return e && e.sensitive ? "" : "i"
            }

            function A(e, t, r) {
                for (var n = (r = r || {}).strict, o = !1 !== r.start, i = !1 !== r.end, s = r.delimiter || y, a = [].concat(r.endsWith || []).map(E).concat("$").join("|"), u = o ? "^" : "", c = 0; c < e.length; c++) {
                    var h = e[c];
                    if ("string" == typeof h) u += E(h);
                    else {
                        var f = h.repeat ? "(?:" + h.pattern + ")(?:" + E(h.delimiter) + "(?:" + h.pattern + "))*" : h.pattern;
                        t && t.push(h), u += h.optional ? h.prefix ? "(?:" + E(h.prefix) + "(" + f + "))?" : "(" + f + ")?" : E(h.prefix) + "(" + f + ")"
                    }
                }
                if (i) n || (u += "(?:" + E(s) + ")?"), u += "$" === a ? "$" : "(?=" + a + ")";
                else {
                    var l = e[e.length - 1],
                        p = "string" == typeof l ? l[l.length - 1] === s : void 0 === l;
                    n || (u += "(?:" + E(s) + "(?=" + a + "))?"), p || (u += "(?=" + E(s) + "|" + a + ")")
                }
                return new RegExp(u, j(r))
            }

            function S(e, t, r) {
                return e instanceof RegExp ? function(e, t) {
                    if (!t) return e;
                    var r = e.source.match(/\((?!\?)/g);
                    if (r)
                        for (var n = 0; n < r.length; n++) t.push({
                            name: n,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            pattern: null
                        });
                    return e
                }(e, t) : Array.isArray(e) ? function(e, t, r) {
                    for (var n = [], o = 0; o < e.length; o++) n.push(S(e[o], t, r).source);
                    return new RegExp("(?:" + n.join("|") + ")", j(r))
                }(e, t, r) : function(e, t, r) {
                    return A(b(e, r), t, r)
                }(e, t, r)
            }
            p.match = function(e, t) {
                var r = [];
                return P(S(e, r, t), r)
            }, p.regexpToFunction = v, p.parse = d, p.compile = function(e, t) {
                return x(b(e, t), t)
            }, p.tokensToFunction = m, p.tokensToRegExp = g;
            var R = {
                    container: "container",
                    history: "history",
                    namespace: "namespace",
                    prefix: "data-barba",
                    prevent: "prevent",
                    wrapper: "wrapper"
                },
                O = new(function() {
                    function e() {
                        this.o = R, this.u = new DOMParser
                    }
                    var t = e.prototype;
                    return t.toString = function(e) {
                        return e.outerHTML
                    }, t.toDocument = function(e) {
                        return this.u.parseFromString(e, "text/html")
                    }, t.toElement = function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e, t
                    }, t.getHtml = function(e) {
                        return void 0 === e && (e = document), this.toString(e.documentElement)
                    }, t.getWrapper = function(e) {
                        return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
                    }, t.getContainer = function(e) {
                        return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
                    }, t.removeContainer = function(e) {
                        document.body.contains(e) && e.parentNode.removeChild(e)
                    }, t.addContainer = function(e, t) {
                        var r = this.getContainer();
                        r ? this.s(e, r) : t.appendChild(e)
                    }, t.getNamespace = function(e) {
                        void 0 === e && (e = document);
                        var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                        return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
                    }, t.getHref = function(e) {
                        if (e.tagName && "a" === e.tagName.toLowerCase()) {
                            if ("string" == typeof e.href) return e.href;
                            var t = e.getAttribute("href") || e.getAttribute("xlink:href");
                            if (t) return this.resolveUrl(t.baseVal || t)
                        }
                        return null
                    }, t.resolveUrl = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        var n = t.length;
                        if (0 === n) throw new Error("resolveUrl requires at least one argument; got none.");
                        var o = document.createElement("base");
                        if (o.href = arguments[0], 1 === n) return o.href;
                        var i = document.getElementsByTagName("head")[0];
                        i.insertBefore(o, i.firstChild);
                        for (var s, a = document.createElement("a"), u = 1; u < n; u++) a.href = arguments[u], o.href = s = a.href;
                        return i.removeChild(o), s
                    }, t.s = function(e, t) {
                        t.parentNode.insertBefore(e, t.nextSibling)
                    }, e
                }()),
                L = new(function() {
                    function e() {
                        this.h = [], this.v = -1
                    }
                    var n = e.prototype;
                    return n.init = function(e, t) {
                        this.l = "barba";
                        var r = {
                            ns: t,
                            scroll: {
                                x: window.scrollX,
                                y: window.scrollY
                            },
                            url: e
                        };
                        this.h.push(r), this.v = 0;
                        var n = {
                            from: this.l,
                            index: 0,
                            states: [].concat(this.h)
                        };
                        window.history && window.history.replaceState(n, "", e)
                    }, n.change = function(e, t, r) {
                        if (r && r.state) {
                            var n = r.state,
                                o = n.index;
                            t = this.m(this.v - o), this.replace(n.states), this.v = o
                        } else this.add(e, t);
                        return t
                    }, n.add = function(e, t) {
                        var r = this.size,
                            n = this.p(t),
                            o = {
                                ns: "tmp",
                                scroll: {
                                    x: window.scrollX,
                                    y: window.scrollY
                                },
                                url: e
                            };
                        this.h.push(o), this.v = r;
                        var i = {
                            from: this.l,
                            index: r,
                            states: [].concat(this.h)
                        };
                        switch (n) {
                            case "push":
                                window.history && window.history.pushState(i, "", e);
                                break;
                            case "replace":
                                window.history && window.history.replaceState(i, "", e)
                        }
                    }, n.update = function(e, t) {
                        var n = t || this.v,
                            o = r({}, this.get(n), {}, e);
                        this.set(n, o)
                    }, n.remove = function(e) {
                        e ? this.h.splice(e, 1) : this.h.pop(), this.v--
                    }, n.clear = function() {
                        this.h = [], this.v = -1
                    }, n.replace = function(e) {
                        this.h = e
                    }, n.get = function(e) {
                        return this.h[e]
                    }, n.set = function(e, t) {
                        return this.h[e] = t
                    }, n.p = function(e) {
                        var t = "push",
                            r = e,
                            n = R.prefix + "-" + R.history;
                        return r.hasAttribute && r.hasAttribute(n) && (t = r.getAttribute(n)), t
                    }, n.m = function(e) {
                        return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : 0 === e ? "popstate" : e > 0 ? "back" : "forward"
                    }, t(e, [{
                        key: "current",
                        get: function() {
                            return this.h[this.v]
                        }
                    }, {
                        key: "state",
                        get: function() {
                            return this.h[this.h.length - 1]
                        }
                    }, {
                        key: "previous",
                        get: function() {
                            return this.v < 1 ? null : this.h[this.v - 1]
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.h.length
                        }
                    }]), e
                }()),
                T = function(e, t) {
                    try {
                        var r = function() {
                            if (!t.next.html) return Promise.resolve(e).then(function(e) {
                                var r = t.next;
                                if (e) {
                                    var n = O.toElement(e);
                                    r.namespace = O.getNamespace(n), r.container = O.getContainer(n), r.html = e, L.update({
                                        ns: r.namespace
                                    });
                                    var o = O.toDocument(e);
                                    document.title = o.title
                                }
                            })
                        }();
                        return Promise.resolve(r && r.then ? r.then(function() {}) : void 0)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                },
                q = p,
                _ = {
                    __proto__: null,
                    update: T,
                    nextTick: function() {
                        return new Promise(function(e) {
                            window.requestAnimationFrame(e)
                        })
                    },
                    pathToRegexp: q
                },
                H = function() {
                    return window.location.origin
                },
                M = function(e) {
                    return void 0 === e && (e = window.location.href), C(e).port
                },
                C = function(e) {
                    var t, r = e.match(/:\d+/);
                    if (null === r) /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
                    else {
                        var n = r[0].substring(1);
                        t = parseInt(n, 10)
                    }
                    var o, i = e.replace(H(), ""),
                        s = {},
                        a = i.indexOf("#");
                    a >= 0 && (o = i.slice(a + 1), i = i.slice(0, a));
                    var u = i.indexOf("?");
                    return u >= 0 && (s = N(i.slice(u + 1)), i = i.slice(0, u)), {
                        hash: o,
                        path: i,
                        port: t,
                        query: s
                    }
                },
                N = function(e) {
                    return e.split("&").reduce(function(e, t) {
                        var r = t.split("=");
                        return e[r[0]] = r[1], e
                    }, {})
                },
                B = function(e) {
                    return void 0 === e && (e = window.location.href), e.replace(/(\/#.*|\/|#.*)$/, "")
                },
                I = {
                    __proto__: null,
                    getHref: function() {
                        return window.location.href
                    },
                    getOrigin: H,
                    getPort: M,
                    getPath: function(e) {
                        return void 0 === e && (e = window.location.href), C(e).path
                    },
                    parse: C,
                    parseQuery: N,
                    clean: B
                };

            function D(e, t, r) {
                return void 0 === t && (t = 2e3), new Promise(function(n, o) {
                    var i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        if (i.readyState === XMLHttpRequest.DONE)
                            if (200 === i.status) n(i.responseText);
                            else if (i.status) {
                            var t = {
                                status: i.status,
                                statusText: i.statusText
                            };
                            r(e, t), o(t)
                        }
                    }, i.ontimeout = function() {
                        var n = new Error("Timeout error [" + t + "]");
                        r(e, n), o(n)
                    }, i.onerror = function() {
                        var t = new Error("Fetch error");
                        r(e, t), o(t)
                    }, i.open("GET", e), i.timeout = t, i.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), i.setRequestHeader("x-barba", "yes"), i.send()
                })
            }
            var U = function(e) {
                return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            };

            function $(e, t) {
                return void 0 === t && (t = {}),
                    function() {
                        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        var i = !1;
                        return new Promise(function(r, o) {
                            t.async = function() {
                                return i = !0,
                                    function(e, t) {
                                        e ? o(e) : r(t)
                                    }
                            };
                            var s = e.apply(t, n);
                            i || (U(s) ? s.then(r, o) : r(s))
                        })
                    }
            }
            var F = new(function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).logger = new l("@barba/core"), t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], t.registered = new Map, t.init(), t
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.init = function() {
                        var e = this;
                        this.registered.clear(), this.all.forEach(function(t) {
                            e[t] || (e[t] = function(r, n) {
                                e.registered.has(t) || e.registered.set(t, new Set), e.registered.get(t).add({
                                    ctx: n || {},
                                    fn: r
                                })
                            })
                        })
                    }, r.do = function(e) {
                        for (var t = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        if (this.registered.has(e)) {
                            var i = Promise.resolve();
                            return this.registered.get(e).forEach(function(e) {
                                i = i.then(function() {
                                    return $(e.fn, e.ctx).apply(void 0, n)
                                })
                            }), i.catch(function(r) {
                                t.logger.debug("Hook error [" + e + "]"), t.logger.error(r)
                            })
                        }
                        return Promise.resolve()
                    }, r.clear = function() {
                        var e = this;
                        this.all.forEach(function(t) {
                            delete e[t]
                        }), this.init()
                    }, r.help = function() {
                        this.logger.info("Available hooks: " + this.all.join(","));
                        var e = [];
                        this.registered.forEach(function(t, r) {
                            return e.push(r)
                        }), this.logger.info("Registered hooks: " + e.join(","))
                    }, t
                }(function() {})),
                W = function() {
                    function e(e) {
                        if (this.P = [], "boolean" == typeof e) this.g = e;
                        else {
                            var t = Array.isArray(e) ? e : [e];
                            this.P = t.map(function(e) {
                                return q(e)
                            })
                        }
                    }
                    return e.prototype.checkHref = function(e) {
                        if ("boolean" == typeof this.g) return this.g;
                        var t = C(e).path;
                        return this.P.some(function(e) {
                            return null !== e.exec(t)
                        })
                    }, e
                }(),
                K = function(e) {
                    function t(t) {
                        var r;
                        return (r = e.call(this, t) || this).k = new Map, r
                    }
                    n(t, e);
                    var o = t.prototype;
                    return o.set = function(e, t, r) {
                        return this.k.set(e, {
                            action: r,
                            request: t
                        }), {
                            action: r,
                            request: t
                        }
                    }, o.get = function(e) {
                        return this.k.get(e)
                    }, o.getRequest = function(e) {
                        return this.k.get(e).request
                    }, o.getAction = function(e) {
                        return this.k.get(e).action
                    }, o.has = function(e) {
                        return !this.checkHref(e) && this.k.has(e)
                    }, o.delete = function(e) {
                        return this.k.delete(e)
                    }, o.update = function(e, t) {
                        var n = r({}, this.k.get(e), {}, t);
                        return this.k.set(e, n), n
                    }, t
                }(W),
                X = function() {
                    return !window.history.pushState
                },
                z = function(e) {
                    return !e.el || !e.href
                },
                Y = function(e) {
                    var t = e.event;
                    return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
                },
                G = function(e) {
                    var t = e.el;
                    return t.hasAttribute("target") && "_blank" === t.target
                },
                Q = function(e) {
                    var t = e.el;
                    return void 0 !== t.protocol && window.location.protocol !== t.protocol || void 0 !== t.hostname && window.location.hostname !== t.hostname
                },
                V = function(e) {
                    var t = e.el;
                    return void 0 !== t.port && M() !== M(t.href)
                },
                J = function(e) {
                    var t = e.el;
                    return t.getAttribute && "string" == typeof t.getAttribute("download")
                },
                Z = function(e) {
                    return e.el.hasAttribute(R.prefix + "-" + R.prevent)
                },
                ee = function(e) {
                    return Boolean(e.el.closest("[" + R.prefix + "-" + R.prevent + '="all"]'))
                },
                te = function(e) {
                    var t = e.href;
                    return B(t) === B() && M(t) === M()
                },
                re = function(e) {
                    function t(t) {
                        var r;
                        return (r = e.call(this, t) || this).suite = [], r.tests = new Map, r.init(), r
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.init = function() {
                        this.add("pushState", X), this.add("exists", z), this.add("newTab", Y), this.add("blank", G), this.add("corsDomain", Q), this.add("corsPort", V), this.add("download", J), this.add("preventSelf", Z), this.add("preventAll", ee), this.add("sameUrl", te, !1)
                    }, r.add = function(e, t, r) {
                        void 0 === r && (r = !0), this.tests.set(e, t), r && this.suite.push(e)
                    }, r.run = function(e, t, r, n) {
                        return this.tests.get(e)({
                            el: t,
                            event: r,
                            href: n
                        })
                    }, r.checkLink = function(e, t, r) {
                        var n = this;
                        return this.suite.some(function(o) {
                            return n.run(o, e, t, r)
                        })
                    }, t
                }(W),
                ne = function(e) {
                    function t(r, n) {
                        var o;
                        void 0 === n && (n = "Barba error");
                        for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) s[a - 2] = arguments[a];
                        return (o = e.call.apply(e, [this].concat(s)) || this).error = r, o.label = n, Error.captureStackTrace && Error.captureStackTrace(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(o), t), o.name = "BarbaError", o
                    }
                    return n(t, e), t
                }(a(Error)),
                oe = function() {
                    function e(e) {
                        void 0 === e && (e = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
                            name: "namespace",
                            type: "strings"
                        }, {
                            name: "custom",
                            type: "function"
                        }], e && (this.all = this.all.concat(e)), this.update()
                    }
                    var t = e.prototype;
                    return t.add = function(e, t) {
                        switch (e) {
                            case "rule":
                                this.A.splice(t.position || 0, 0, t.value);
                                break;
                            case "transition":
                            default:
                                this.all.push(t)
                        }
                        this.update()
                    }, t.resolve = function(e, t) {
                        var r = this;
                        void 0 === t && (t = {});
                        var n = t.once ? this.once : this.page;
                        n = n.filter(t.self ? function(e) {
                            return e.name && "self" === e.name
                        } : function(e) {
                            return !e.name || "self" !== e.name
                        });
                        var o = new Map,
                            i = n.find(function(n) {
                                var i = !0,
                                    s = {};
                                return !(!t.self || "self" !== n.name) || (r.A.reverse().forEach(function(t) {
                                    i && (i = r.R(n, t, e, s), n.from && n.to && (i = r.R(n, t, e, s, "from") && r.R(n, t, e, s, "to")), n.from && !n.to && (i = r.R(n, t, e, s, "from")), !n.from && n.to && (i = r.R(n, t, e, s, "to")))
                                }), o.set(n, s), i)
                            }),
                            s = o.get(i),
                            a = [];
                        if (a.push(t.once ? "once" : "page"), t.self && a.push("self"), s) {
                            var u, c = [i];
                            Object.keys(s).length > 0 && c.push(s), (u = this.logger).info.apply(u, ["Transition found [" + a.join(",") + "]"].concat(c))
                        } else this.logger.info("No transition found [" + a.join(",") + "]");
                        return i
                    }, t.update = function() {
                        var e = this;
                        this.all = this.all.map(function(t) {
                            return e.T(t)
                        }).sort(function(e, t) {
                            return e.priority - t.priority
                        }).reverse().map(function(e) {
                            return delete e.priority, e
                        }), this.page = this.all.filter(function(e) {
                            return void 0 !== e.leave || void 0 !== e.enter
                        }), this.once = this.all.filter(function(e) {
                            return void 0 !== e.once
                        })
                    }, t.R = function(e, t, r, n, o) {
                        var i = !0,
                            s = !1,
                            a = e,
                            u = t.name,
                            c = u,
                            h = u,
                            f = u,
                            l = o ? a[o] : a,
                            p = "to" === o ? r.next : r.current;
                        if (o ? l && l[u] : l[u]) {
                            switch (t.type) {
                                case "strings":
                                default:
                                    var v = Array.isArray(l[c]) ? l[c] : [l[c]];
                                    p[c] && -1 !== v.indexOf(p[c]) && (s = !0), -1 === v.indexOf(p[c]) && (i = !1);
                                    break;
                                case "object":
                                    var d = Array.isArray(l[h]) ? l[h] : [l[h]];
                                    p[h] ? (p[h].name && -1 !== d.indexOf(p[h].name) && (s = !0), -1 === d.indexOf(p[h].name) && (i = !1)) : i = !1;
                                    break;
                                case "function":
                                    l[f](r) ? s = !0 : i = !1
                            }
                            s && (o ? (n[o] = n[o] || {}, n[o][u] = a[o][u]) : n[u] = a[u])
                        }
                        return i
                    }, t.O = function(e, t, r) {
                        var n = 0;
                        return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (n += Math.pow(10, r), e.from && e.from[t] && (n += 1), e.to && e.to[t] && (n += 2)), n
                    }, t.T = function(e) {
                        var t = this;
                        e.priority = 0;
                        var r = 0;
                        return this.A.forEach(function(n, o) {
                            r += t.O(e, n.name, o + 1)
                        }), e.priority = r, e
                    }, e
                }(),
                ie = function() {
                    function e(e) {
                        void 0 === e && (e = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new oe(e)
                    }
                    var r = e.prototype;
                    return r.get = function(e, t) {
                        return this.store.resolve(e, t)
                    }, r.doOnce = function(e) {
                        var t = e.data,
                            r = e.transition;
                        try {
                            var n = function() {
                                    o.S = !1
                                },
                                o = this,
                                i = r || {};
                            o.S = !0;
                            var s = u(function() {
                                return Promise.resolve(o.j("beforeOnce", t, i)).then(function() {
                                    return Promise.resolve(o.once(t, i)).then(function() {
                                        return Promise.resolve(o.j("afterOnce", t, i)).then(function() {})
                                    })
                                })
                            }, function(e) {
                                o.S = !1, o.logger.debug("Transition error [before/after/once]"), o.logger.error(e)
                            });
                            return Promise.resolve(s && s.then ? s.then(n) : n())
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, r.doPage = function(e) {
                        var t = e.data,
                            r = e.transition,
                            n = e.page,
                            o = e.wrapper;
                        try {
                            var i = function(e) {
                                    if (s) return e;
                                    a.S = !1
                                },
                                s = !1,
                                a = this,
                                c = r || {},
                                h = !0 === c.sync || !1;
                            a.S = !0;
                            var f = u(function() {
                                function e() {
                                    return Promise.resolve(a.j("before", t, c)).then(function() {
                                        var e = !1;

                                        function r(r) {
                                            return e ? r : Promise.resolve(a.remove(t)).then(function() {
                                                return Promise.resolve(a.j("after", t, c)).then(function() {})
                                            })
                                        }
                                        var i = function() {
                                            if (h) return u(function() {
                                                return Promise.resolve(a.add(t, o)).then(function() {
                                                    return Promise.resolve(a.j("beforeLeave", t, c)).then(function() {
                                                        return Promise.resolve(a.j("beforeEnter", t, c)).then(function() {
                                                            return Promise.resolve(Promise.all([a.leave(t, c), a.enter(t, c)])).then(function() {
                                                                return Promise.resolve(a.j("afterLeave", t, c)).then(function() {
                                                                    return Promise.resolve(a.j("afterEnter", t, c)).then(function() {})
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            }, function(e) {
                                                if (a.M(e)) throw new ne(e, "Transition error [sync]")
                                            });
                                            var r = function(r) {
                                                    return e ? r : u(function() {
                                                        var e = function() {
                                                            if (!1 !== i) return Promise.resolve(a.add(t, o)).then(function() {
                                                                return Promise.resolve(a.j("beforeEnter", t, c)).then(function() {
                                                                    return Promise.resolve(a.enter(t, c, i)).then(function() {
                                                                        return Promise.resolve(a.j("afterEnter", t, c)).then(function() {})
                                                                    })
                                                                })
                                                            })
                                                        }();
                                                        if (e && e.then) return e.then(function() {})
                                                    }, function(e) {
                                                        if (a.M(e)) throw new ne(e, "Transition error [before/after/enter]")
                                                    })
                                                },
                                                i = !1,
                                                s = u(function() {
                                                    return Promise.resolve(a.j("beforeLeave", t, c)).then(function() {
                                                        return Promise.resolve(Promise.all([a.leave(t, c), T(n, t)]).then(function(e) {
                                                            return e[0]
                                                        })).then(function(e) {
                                                            return i = e, Promise.resolve(a.j("afterLeave", t, c)).then(function() {})
                                                        })
                                                    })
                                                }, function(e) {
                                                    if (a.M(e)) throw new ne(e, "Transition error [before/after/leave]")
                                                });
                                            return s && s.then ? s.then(r) : r(s)
                                        }();
                                        return i && i.then ? i.then(r) : r(i)
                                    })
                                }
                                var r = function() {
                                    if (h) return Promise.resolve(T(n, t)).then(function() {})
                                }();
                                return r && r.then ? r.then(e) : e()
                            }, function(e) {
                                if (a.S = !1, e.name && "BarbaError" === e.name) throw a.logger.debug(e.label), a.logger.error(e.error), e;
                                throw a.logger.debug("Transition error [page]"), a.logger.error(e), e
                            });
                            return Promise.resolve(f && f.then ? f.then(i) : i(f))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, r.once = function(e, t) {
                        try {
                            return Promise.resolve(F.do("once", e, t)).then(function() {
                                return t.once ? $(t.once, t)(e) : Promise.resolve()
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, r.leave = function(e, t) {
                        try {
                            return Promise.resolve(F.do("leave", e, t)).then(function() {
                                return t.leave ? $(t.leave, t)(e) : Promise.resolve()
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, r.enter = function(e, t, r) {
                        try {
                            return Promise.resolve(F.do("enter", e, t)).then(function() {
                                return t.enter ? $(t.enter, t)(e, r) : Promise.resolve()
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, r.add = function(e, t) {
                        try {
                            return O.addContainer(e.next.container, t), F.do("nextAdded", e), Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, r.remove = function(e) {
                        try {
                            return O.removeContainer(e.current.container), F.do("currentRemoved", e), Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, r.M = function(e) {
                        return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status
                    }, r.j = function(e, t, r) {
                        try {
                            return Promise.resolve(F.do(e, t, r)).then(function() {
                                return r[e] ? $(r[e], r)(t) : Promise.resolve()
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, t(e, [{
                        key: "isRunning",
                        get: function() {
                            return this.S
                        },
                        set: function(e) {
                            this.S = e
                        }
                    }, {
                        key: "hasOnce",
                        get: function() {
                            return this.store.once.length > 0
                        }
                    }, {
                        key: "hasSelf",
                        get: function() {
                            return this.store.all.some(function(e) {
                                return "self" === e.name
                            })
                        }
                    }, {
                        key: "shouldWait",
                        get: function() {
                            return this.store.all.some(function(e) {
                                return e.to && !e.to.route || e.sync
                            })
                        }
                    }]), e
                }(),
                se = function() {
                    function e(e) {
                        var t = this;
                        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== e.length && (e.forEach(function(e) {
                            t.byNamespace.set(e.namespace, e)
                        }), this.names.forEach(function(e) {
                            F[e](t.L(e))
                        }))
                    }
                    return e.prototype.L = function(e) {
                        var t = this;
                        return function(r) {
                            var n = e.match(/enter/i) ? r.next : r.current,
                                o = t.byNamespace.get(n.namespace);
                            return o && o[e] ? $(o[e], o)(r) : Promise.resolve()
                        }
                    }, e
                }();
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            });
            var ae = {
                container: null,
                html: "",
                namespace: "",
                url: {
                    hash: "",
                    href: "",
                    path: "",
                    port: null,
                    query: {}
                }
            };
            return new(function() {
                function e() {
                    this.version = h, this.schemaPage = ae, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = F, this.dom = O, this.helpers = _, this.history = L, this.request = D, this.url = I
                }
                var n = e.prototype;
                return n.use = function(e, t) {
                    var r = this.plugins;
                    r.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : "function" == typeof e.install ? (e.install(this, t), r.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.')
                }, n.init = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.transitions,
                        o = void 0 === n ? [] : n,
                        i = t.views,
                        s = void 0 === i ? [] : i,
                        a = t.schema,
                        u = void 0 === a ? R : a,
                        c = t.requestError,
                        h = t.timeout,
                        f = void 0 === h ? 2e3 : h,
                        p = t.cacheIgnore,
                        v = void 0 !== p && p,
                        d = t.prefetchIgnore,
                        m = void 0 !== d && d,
                        g = t.preventRunning,
                        y = void 0 !== g && g,
                        w = t.prevent,
                        b = void 0 === w ? null : w,
                        P = t.debug,
                        x = t.logLevel;
                    if (l.setLevel(!0 === (void 0 !== P && P) ? "debug" : void 0 === x ? "off" : x), this.logger.info(this.version), Object.keys(u).forEach(function(e) {
                            R[e] && (R[e] = u[e])
                        }), this.$ = c, this.timeout = f, this.cacheIgnore = v, this.prefetchIgnore = m, this.preventRunning = y, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
                    this._.setAttribute("aria-live", "polite"), this.q();
                    var E = this.data.current;
                    if (!E.container) throw new Error("[@barba/core] No Barba container found");
                    if (this.cache = new K(v), this.prevent = new re(m), this.transitions = new ie(o), this.views = new se(s), null !== b) {
                        if ("function" != typeof b) throw new Error("[@barba/core] Prevent should be a function");
                        this.prevent.add("preventCustom", b)
                    }
                    this.history.init(E.url.href, E.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(e) {
                        return e.init()
                    });
                    var k = this.data;
                    k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q()
                }, n.destroy = function() {
                    this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
                }, n.force = function(e) {
                    window.location.assign(e)
                }, n.go = function(e, t, r) {
                    var n;
                    if (void 0 === t && (t = "barba"), this.transitions.isRunning) this.force(e);
                    else if (!(n = "popstate" === t ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf) return t = this.history.change(e, t, r), r && (r.stopPropagation(), r.preventDefault()), this.page(e, t, n)
                }, n.once = function(e) {
                    try {
                        var t = this;
                        return Promise.resolve(t.hooks.do("beforeEnter", e)).then(function() {
                            function r() {
                                return Promise.resolve(t.hooks.do("afterEnter", e)).then(function() {})
                            }
                            var n = function() {
                                if (t.transitions.hasOnce) {
                                    var r = t.transitions.get(e, {
                                        once: !0
                                    });
                                    return Promise.resolve(t.transitions.doOnce({
                                        transition: r,
                                        data: e
                                    })).then(function() {})
                                }
                            }();
                            return n && n.then ? n.then(r) : r()
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, n.page = function(e, t, n) {
                    try {
                        var o = function() {
                                var e = i.data;
                                return Promise.resolve(i.hooks.do("page", e)).then(function() {
                                    var t = u(function() {
                                        var t = i.transitions.get(e, {
                                            once: !1,
                                            self: n
                                        });
                                        return Promise.resolve(i.transitions.doPage({
                                            data: e,
                                            page: s,
                                            transition: t,
                                            wrapper: i._
                                        })).then(function() {
                                            i.q()
                                        })
                                    }, function() {
                                        0 === l.getLevel() && i.force(e.current.url.href)
                                    });
                                    if (t && t.then) return t.then(function() {})
                                })
                            },
                            i = this;
                        i.data.next.url = r({
                            href: e
                        }, i.url.parse(e)), i.data.trigger = t;
                        var s = i.cache.has(e) ? i.cache.update(e, {
                                action: "click"
                            }).request : i.cache.set(e, i.request(e, i.timeout, i.onRequestError.bind(i, t)), "click").request,
                            a = function() {
                                if (i.transitions.shouldWait) return Promise.resolve(T(s, i.data)).then(function() {})
                            }();
                        return Promise.resolve(a && a.then ? a.then(o) : o())
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, n.onRequestError = function(e) {
                    this.transitions.isRunning = !1;
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    var o = r[0],
                        i = r[1],
                        s = this.cache.getAction(o);
                    return this.cache.delete(o), !(this.$ && !1 === this.$(e, s, o, i) || ("click" === s && this.force(o), 1))
                }, n.prefetch = function(e) {
                    var t = this;
                    this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(e) {
                        t.logger.error(e)
                    }), "prefetch")
                }, n.F = function() {
                    !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
                }, n.H = function() {
                    !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
                }, n.B = function(e) {
                    var t = this,
                        r = this.I(e);
                    if (r) {
                        var n = this.dom.getHref(r);
                        this.prevent.checkHref(n) || this.cache.has(n) || this.cache.set(n, this.request(n, this.timeout, this.onRequestError.bind(this, r)).catch(function(e) {
                            t.logger.error(e)
                        }), "enter")
                    }
                }, n.U = function(e) {
                    var t = this.I(e);
                    if (t) return this.transitions.isRunning && this.preventRunning ? (e.preventDefault(), void e.stopPropagation()) : void this.go(this.dom.getHref(t), t, e)
                }, n.D = function(e) {
                    this.go(this.url.getHref(), "popstate", e)
                }, n.I = function(e) {
                    for (var t = e.target; t && !this.dom.getHref(t);) t = t.parentNode;
                    if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t))) return t
                }, n.q = function() {
                    var e = this.url.getHref(),
                        t = {
                            container: this.dom.getContainer(),
                            html: this.dom.getHtml(),
                            namespace: this.dom.getNamespace(),
                            url: r({
                                href: e
                            }, this.url.parse(e))
                        };
                    this.C = {
                        current: t,
                        next: r({}, this.schemaPage),
                        trigger: void 0
                    }, this.hooks.do("reset", this.data)
                }, t(e, [{
                    key: "data",
                    get: function() {
                        return this.C
                    }
                }, {
                    key: "wrapper",
                    get: function() {
                        return this._
                    }
                }]), e
            }())
        });
    }, {}],
    "pBGv": [function(require, module, exports) {

        var t, e, n = module.exports = {};

        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }

        function u(t) {
            if (e === clearTimeout) return clearTimeout(t);
            if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
            try {
                return e(t)
            } catch (n) {
                try {
                    return e.call(null, t)
                } catch (n) {
                    return e.call(this, t)
                }
            }
        }! function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : r
            } catch (n) {
                t = r
            }
            try {
                e = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (n) {
                e = o
            }
        }();
        var c, s = [],
            l = !1,
            a = -1;

        function f() {
            l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
        }

        function h() {
            if (!l) {
                var t = i(f);
                l = !0;
                for (var e = s.length; e;) {
                    for (c = s, s = []; ++a < e;) c && c[a].run();
                    a = -1, e = s.length
                }
                c = null, l = !1, u(t)
            }
        }

        function m(t, e) {
            this.fun = t, this.array = e
        }

        function p() {}
        n.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            s.push(new m(t, e)), 1 !== s.length || l || i(h)
        }, m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
            return []
        }, n.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        };
    }, {}],
    "juYr": [function(require, module, exports) {
        var global = arguments[3];
        var process = require("process");
        var define;
        var e, t = arguments[3],
            n = require("process");
        ! function(e, t) {
            "use strict";
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function(t, n) {
            "use strict";
            var r = [],
                i = Object.getPrototypeOf,
                o = r.slice,
                a = r.flat ? function(e) {
                    return r.flat.call(e)
                } : function(e) {
                    return r.concat.apply([], e)
                },
                s = r.push,
                u = r.indexOf,
                l = {},
                c = l.toString,
                f = l.hasOwnProperty,
                p = f.toString,
                d = p.call(Object),
                h = {},
                g = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                v = function(e) {
                    return null != e && e === e.window
                },
                y = t.document,
                m = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function x(e, t, n) {
                var r, i, o = (n = n || y).createElement("script");
                if (o.text = e, t)
                    for (r in m)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function b(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
            }
            var w = function(e, t) {
                return new w.fn.init(e, t)
            };

            function T(e) {
                var t = !!e && "length" in e && e.length,
                    n = b(e);
                return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            w.fn = w.prototype = {
                jquery: "3.5.1",
                constructor: w,
                length: 0,
                toArray: function() {
                    return o.call(this)
                },
                get: function(e) {
                    return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return w.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(w.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(w.grep(this, function(e, t) {
                        return (t + 1) % 2
                    }))
                },
                odd: function() {
                    return this.pushStack(w.grep(this, function(e, t) {
                        return t % 2
                    }))
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: s,
                sort: r.sort,
                splice: r.splice
            }, w.extend = w.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, w.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    x(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (T(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : u.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        s = [];
                    if (T(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                    return a(s)
                },
                guid: 1,
                support: h
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                l["[object " + t + "]"] = t.toLowerCase()
            });
            var C = function(e) {
                var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    E = ue(),
                    S = ue(),
                    k = ue(),
                    A = ue(),
                    N = function(e, t) {
                        return e === t && (f = !0), 0
                    },
                    D = {}.hasOwnProperty,
                    j = [],
                    q = j.pop,
                    L = j.push,
                    H = j.push,
                    O = j.slice,
                    P = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    M = "[\\x20\\t\\r\\n\\f]",
                    I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
                    F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                    B = new RegExp(M + "+", "g"),
                    $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                    _ = new RegExp("^" + M + "*," + M + "*"),
                    z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                    U = new RegExp(M + "|>"),
                    X = new RegExp(F),
                    V = new RegExp("^" + I + "$"),
                    G = {
                        ID: new RegExp("^#(" + I + ")"),
                        CLASS: new RegExp("^\\.(" + I + ")"),
                        TAG: new RegExp("^(" + I + "|[*])"),
                        ATTR: new RegExp("^" + W),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    oe = function() {
                        p()
                    },
                    ae = be(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    H.apply(j = O.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
                } catch (Se) {
                    H = {
                        apply: j.length ? function(e, t) {
                            L.apply(e, O.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(e, t, r, i) {
                    var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                    if (!i && (p(t), t = t || d, g)) {
                        if (11 !== w && (f = Z.exec(e)))
                            if (o = f[1]) {
                                if (9 === w) {
                                    if (!(l = t.getElementById(o))) return r;
                                    if (l.id === o) return r.push(l), r
                                } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                            } else {
                                if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                            }
                        if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (y = e, m = t, 1 === w && (U.test(e) || z.test(e))) {
                                for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                                y = h.join(",")
                            }
                            try {
                                return H.apply(r, m.querySelectorAll(y)), r
                            } catch (T) {
                                A(e, !0)
                            } finally {
                                c === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace($, "$1"), t, r, i)
                }

                function ue() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function le(e) {
                    return e[b] = !0, e
                }

                function ce(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (Se) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function fe(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function pe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function de(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function ge(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ve(e) {
                    return le(function(t) {
                        return t = +t, le(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function ye(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, o = se.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !Y.test(t || n && n.nodeName || "HTML")
                    }, p = se.setDocument = function(e) {
                        var t, i, a = e ? e.ownerDocument || e : w;
                        return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function(e) {
                            return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }), n.attributes = ce(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = ce(function(e) {
                            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
                            return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                        }), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                        }), ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                        })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                            n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", F)
                        }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, N = t ? function(e, t) {
                            if (e === t) return f = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return f = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                            if (i === o) return pe(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                        }, d) : d
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if (p(e), n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                            var r = m.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (Se) {
                            A(t, !0)
                        }
                        return se(t, d, null, [e]).length > 0
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) != d && p(e), x(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) != d && p(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, r = [],
                            i = 0,
                            o = 0;
                        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
                            for (; t = e[o++];) t === e[o] && (i = r.push(o));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return c = null, e
                    }, i = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: G,
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
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = E[e + " "];
                                return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = se.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                        v = t.parentNode,
                                        y = s && t.nodeName.toLowerCase(),
                                        m = !u && !s,
                                        x = !1;
                                    if (v) {
                                        if (o) {
                                            for (; g;) {
                                                for (p = t; p = p[g];)
                                                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                            for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                                if (1 === p.nodeType && ++x && p === t) {
                                                    c[e] = [T, d, x];
                                                    break
                                                }
                                        } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                            for (;
                                                (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                        return (x -= i) === r || x % r == 0 && x / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                                }) : function(e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: le(function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace($, "$1"));
                                return r[b] ? le(function(e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: le(function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            }),
                            contains: le(function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || i(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: le(function(e) {
                                return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return J.test(e.nodeName)
                            },
                            input: function(e) {
                                return Q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ve(function() {
                                return [0]
                            }),
                            last: ve(function(e, t) {
                                return [t - 1]
                            }),
                            eq: ve(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: ve(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: ve(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: ve(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: ve(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
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
                    return r
                }

                function be(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = C++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var l, c, f, p = [T, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                        if (c[o] = p, p[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function we(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function Te(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function Ce(e, t, n, r, i, o) {
                    return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function(o, a, s, u) {
                        var l, c, f, p = [],
                            d = [],
                            h = a.length,
                            g = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !o && t ? g : Te(g, p, e, s, u),
                            y = n ? i || (o ? e : h || r) ? [] : a : v;
                        if (n && n(v, y, s, u), r)
                            for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                    i(null, y = [], l, u)
                                }
                                for (c = y.length; c--;)(f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                            }
                        } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                    })
                }

                function Ee(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                            return e === t
                        }, s, !0), f = be(function(e) {
                            return P(t, e) > -1
                        }, s, !0), p = [function(e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, i
                        }]; u < o; u++)
                        if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                            }
                            p.push(n)
                        }
                    return we(p)
                }
                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = S[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = r.preFilter; s;) {
                        for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace($, " ")
                            }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
                }, s = se.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        s = k[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                        (s = k(e, function(e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                o = function(o, a, s, u, c) {
                                    var f, h, v, y = 0,
                                        m = "0",
                                        x = o && [],
                                        b = [],
                                        w = l,
                                        C = o || i && r.find.TAG("*", c),
                                        E = T += null == w ? 1 : Math.random() || .1,
                                        S = C.length;
                                    for (c && (l = a == d || a || c); m !== S && null != (f = C[m]); m++) {
                                        if (i && f) {
                                            for (h = 0, a || f.ownerDocument == d || (p(f), s = !g); v = e[h++];)
                                                if (v(f, a || d, s)) {
                                                    u.push(f);
                                                    break
                                                }
                                            c && (T = E)
                                        }
                                        n && ((f = !v && f) && y--, o && x.push(f))
                                    }
                                    if (y += m, n && m !== y) {
                                        for (h = 0; v = t[h++];) v(x, b, a, s);
                                        if (o) {
                                            if (y > 0)
                                                for (; m--;) x[m] || b[m] || (b[m] = q.call(u));
                                            b = Te(b)
                                        }
                                        H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                                    }
                                    return c && (T = E, l = w), x
                                };
                            return n ? le(o) : o
                        }(o, i))).selector = e
                    }
                    return s
                }, u = se.select = function(e, t, n, i) {
                    var o, u, l, c, f, p = "function" == typeof e && e,
                        d = !i && a(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                            if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                                if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                                break
                            }
                    }
                    return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                }), ce(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || fe("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ce(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || fe("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ce(function(e) {
                    return null == e.getAttribute("disabled")
                }) || fe(R, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), se
            }(t);
            w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
            var E = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && w(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                S = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                k = w.expr.match.needsContext;

            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function D(e, t, n) {
                return g(t) ? w.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? w.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? w.grep(e, function(e) {
                    return u.call(t, e) > -1 !== n
                }) : w.filter(t, e, n)
            }
            w.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, w.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (w.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                    return r > 1 ? w.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(D(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(D(this, e || [], !0))
                },
                is: function(e) {
                    return !!D(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length
                }
            });
            var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || j, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), N.test(r[1]) && w.isPlainObject(t))
                            for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = y.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
            }).prototype = w.fn, j = w(y);
            var L = /^(?:parents|prev(?:Until|All))/,
                H = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function O(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && w(e);
                    if (!k.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return E(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return E(e, "parentNode", n)
                },
                next: function(e) {
                    return O(e, "nextSibling")
                },
                prev: function(e) {
                    return O(e, "previousSibling")
                },
                nextAll: function(e) {
                    return E(e, "nextSibling")
                },
                prevAll: function(e) {
                    return E(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return E(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return E(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return S((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return S(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                }
            }, function(e, t) {
                w.fn[e] = function(n, r) {
                    var i = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (H[e] || w.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var P = /[^\x20\t\r\n\f]+/g;

            function R(e) {
                return e
            }

            function M(e) {
                throw e
            }

            function I(e, t, n, r) {
                var i;
                try {
                    e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            w.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return w.each(e.match(P) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }(e) : w.extend({}, e);
                var t, n, r, i, o = [],
                    a = [],
                    s = -1,
                    u = function() {
                        for (i = i || e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                    },
                    l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                w.each(n, function(n, r) {
                                    g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function() {
                            return w.each(arguments, function(e, t) {
                                for (var n;
                                    (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function(e) {
                            return e ? w.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return i = a = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return l
            }, w.extend({
                Deferred: function(e) {
                    var n = [
                            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return w.Deferred(function(t) {
                                    w.each(n, function(n, r) {
                                        var i = g(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(e, r, i) {
                                var o = 0;

                                function a(e, n, r, i) {
                                    return function() {
                                        var s = this,
                                            u = arguments,
                                            l = function() {
                                                var t, l;
                                                if (!(e < o)) {
                                                    if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    l = t && ("object" == typeof t || "function" == typeof t) && t.then, g(l) ? i ? l.call(t, a(o, n, R, i), a(o, n, M, i)) : (o++, l.call(t, a(o, n, R, i), a(o, n, M, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
                                                }
                                            },
                                            c = i ? l : function() {
                                                try {
                                                    l()
                                                } catch (t) {
                                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== M && (s = void 0, u = [t]), n.rejectWith(s, u))
                                                }
                                            };
                                        e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                                    }
                                }
                                return w.Deferred(function(t) {
                                    n[0][3].add(a(0, t, g(i) ? i : R, t.notifyWith)), n[1][3].add(a(0, t, g(e) ? e : R)), n[2][3].add(a(0, t, g(r) ? r : M))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? w.extend(e, i) : i
                            }
                        },
                        o = {};
                    return w.each(n, function(e, t) {
                        var a = t[2],
                            s = t[5];
                        i[t[1]] = a.add, s && a.add(function() {
                            r = s
                        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[t[0] + "With"] = a.fireWith
                    }), i.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = o.call(arguments),
                        a = w.Deferred(),
                        s = function(e) {
                            return function(n) {
                                r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
                    for (; n--;) I(i[n], s(n), a.reject);
                    return a.promise()
                }
            });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(e, n) {
                t.console && t.console.warn && e && W.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
            }, w.readyException = function(e) {
                t.setTimeout(function() {
                    throw e
                })
            };
            var F = w.Deferred();

            function B() {
                y.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), w.ready()
            }
            w.fn.ready = function(e) {
                return F.then(e).catch(function(e) {
                    w.readyException(e)
                }), this
            }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(y, [w]))
                }
            }), w.ready.then = F.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? t.setTimeout(w.ready) : (y.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
            var $ = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === b(n))
                        for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                            return l.call(w(e), n)
                        })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                },
                _ = /^-ms-/,
                z = /-([a-z])/g;

            function U(e, t) {
                return t.toUpperCase()
            }

            function X(e) {
                return e.replace(_, "ms-").replace(z, U)
            }
            var V = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function G() {
                this.expando = w.expando + G.uid++
            }
            G.uid = 1, G.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[X(t)] = n;
                    else
                        for (r in t) i[X(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !w.isEmptyObject(t)
                }
            };
            var Y = new G,
                Q = new G,
                J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                K = /[A-Z]/g;

            function Z(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (i) {}
                        Q.set(e, t, n)
                    } else n = void 0;
                return n
            }
            w.extend({
                hasData: function(e) {
                    return Q.hasData(e) || Y.hasData(e)
                },
                data: function(e, t, n) {
                    return Q.access(e, t, n)
                },
                removeData: function(e, t) {
                    Q.remove(e, t)
                },
                _data: function(e, t, n) {
                    return Y.access(e, t, n)
                },
                _removeData: function(e, t) {
                    Y.remove(e, t)
                }
            }), w.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                            Y.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        Q.set(this, e)
                    }) : $(this, function(t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                        this.each(function() {
                            Q.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Q.remove(this, e)
                    })
                }
            }), w.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = w._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                        w.dequeue(e, t)
                    }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Y.get(e, n) || Y.access(e, n, {
                        empty: w.Callbacks("once memory").add(function() {
                            Y.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        w.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = w.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                ne = ["Top", "Right", "Bottom", "Left"],
                re = y.documentElement,
                ie = function(e) {
                    return w.contains(e.ownerDocument, e)
                },
                oe = {
                    composed: !0
                };
            re.getRootNode && (ie = function(e) {
                return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
            });
            var ae = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
            };

            function se(e, t, n, r) {
                var i, o, a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return w.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && te.exec(w.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                    c *= 2, w.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }
            var ue = {};

            function le(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = ue[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
            }

            function ce(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = le(r))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e
            }
            w.fn.extend({
                show: function() {
                    return ce(this, !0)
                },
                hide: function() {
                    return ce(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        ae(this) ? w(this).show() : w(this).hide()
                    })
                }
            });
            var fe, pe, de = /^(?:checkbox|radio)$/i,
                he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ge = /^$|^module$|\/(?:java|ecma)script/i;
            fe = y.createDocumentFragment().appendChild(y.createElement("div")), (pe = y.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), fe.appendChild(pe), h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", h.option = !!fe.lastChild;
            var ve = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function ye(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
            }

            function me(e, t) {
                for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
            }
            ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, h.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
            var xe = /<|&#?\w+;/;

            function be(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);
                        else if (xe.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                    w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = p[d++];)
                    if (r && w.inArray(o, r) > -1) i && i.push(o);
                    else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && me(a), n)
                    for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);
                return f
            }
            var we = /^key/,
                Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function Ee() {
                return !0
            }

            function Se() {
                return !1
            }

            function ke(e, t) {
                return e === function() {
                    try {
                        return y.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function Ae(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
                else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return w().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
                    w.event.add(this, t, i, r, n)
                })
            }

            function Ne(e, t, n) {
                n ? (Y.set(e, t, !1), w.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r, i, a = Y.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (a = o.call(arguments), Y.set(this, t, a), r = n(this, t), this[t](), a !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                        } else a.length && (Y.set(this, t, {
                            value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === Y.get(e, t) && w.event.add(e, t, Ee)
            }
            w.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(e);
                    if (V(e))
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(re, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(P) || [""]).length; l--;) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && w.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
                    if (v && (u = v.events)) {
                        for (l = (t = (t || "").match(P) || [""]).length; l--;)
                            if (d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
                            } else
                                for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                        w.isEmptyObject(u) && Y.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = new Array(arguments.length),
                        u = w.event.fix(e),
                        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                        c = w.event.special[u.type] || {};
                    for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                        for (a = w.event.handlers.call(this, u, l), t = 0;
                            (i = a[t++]) && !u.isPropagationStopped();)
                            for (u.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, u), u.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: l,
                                    handlers: o
                                })
                            }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[w.expando] ? e : new w.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return de.test(t.type) && t.click && A(t, "input") && Ne(t, "click", Ee), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return de.test(t.type) && t.click && A(t, "input") && Ne(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return de.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, w.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, w.Event = function(e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: Se,
                isPropagationStopped: Se,
                isImmediatePropagationStopped: Se,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, w.each({
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
                which: function(e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, w.event.addProp), w.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                w.event.special[e] = {
                    setup: function() {
                        return Ne(this, e, ke), !1
                    },
                    trigger: function() {
                        return Ne(this, e), !0
                    },
                    delegateType: t
                }
            }), w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                            i = e.handleObj;
                        return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), w.fn.extend({
                on: function(e, t, n, r) {
                    return Ae(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return Ae(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                        w.event.remove(this, e, n, t)
                    })
                }
            });
            var De = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Le(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
            }

            function He(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Oe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Pe(e, t) {
                var n, r, i, o, a, s;
                if (1 === t.nodeType) {
                    if (Y.hasData(e) && (s = Y.get(e).events))
                        for (i in Y.remove(t, "handle events"), s)
                            for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
                    Q.hasData(e) && (o = Q.access(e), a = w.extend({}, o), Q.set(t, a))
                }
            }

            function Re(e, t, n, r) {
                t = a(t);
                var i, o, s, u, l, c, f = 0,
                    p = e.length,
                    d = p - 1,
                    v = t[0],
                    y = g(v);
                if (y || p > 1 && "string" == typeof v && !h.checkClone && je.test(v)) return e.each(function(i) {
                    var o = e.eq(i);
                    y && (t[0] = v.call(this, i, o.html())), Re(o, t, n, r)
                });
                if (p && (o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
                    if (u)
                        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], ge.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }, c) : x(l.textContent.replace(qe, ""), l, c))
                }
                return e
            }

            function Me(e, t, n) {
                for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && ie(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            w.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                        f = ie(e);
                    if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                        else Pe(e, c);
                    return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c
                },
                cleanData: function(e) {
                    for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (V(n)) {
                            if (t = n[Y.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                n[Y.expando] = void 0
                            }
                            n[Q.expando] && (n[Q.expando] = void 0)
                        }
                }
            }), w.fn.extend({
                detach: function(e) {
                    return Me(this, e, !0)
                },
                remove: function(e) {
                    return Me(this, e)
                },
                text: function(e) {
                    return $(this, function(e) {
                        return void 0 === e ? w.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Re(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Re(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return w.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return $(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !De.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Re(this, arguments, function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                w.fn[e] = function(e) {
                    for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                We = function(e) {
                    var n = e.ownerDocument.defaultView;
                    return n && n.opener || (n = t), n.getComputedStyle(e)
                },
                Fe = function(e, t, n) {
                    var r, i, o = {};
                    for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                    for (i in r = n.call(e), t) e.style[i] = o[i];
                    return r
                },
                Be = new RegExp(ne.join("|"), "i");

            function $e(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)), !h.pixelBoxStyles() && Ie.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function _e(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(c);
                        var e = t.getComputedStyle(c);
                        r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), i = 36 === n(e.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(l), c = null
                    }
                }

                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var r, i, o, a, s, u, l = y.createElement("div"),
                    c = y.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
                    boxSizingReliable: function() {
                        return e(), i
                    },
                    pixelBoxStyles: function() {
                        return e(), a
                    },
                    pixelPosition: function() {
                        return e(), r
                    },
                    reliableMarginLeft: function() {
                        return e(), u
                    },
                    scrollboxSize: function() {
                        return e(), o
                    },
                    reliableTrDimensions: function() {
                        var e, n, r, i;
                        return null == s && (e = y.createElement("table"), n = y.createElement("tr"), r = y.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", re.appendChild(e).appendChild(n).appendChild(r), i = t.getComputedStyle(n), s = parseInt(i.height) > 3, re.removeChild(e)), s
                    }
                }))
            }();
            var ze = ["Webkit", "Moz", "ms"],
                Ue = y.createElement("div").style,
                Xe = {};

            function Ve(e) {
                var t = w.cssProps[e] || Xe[e];
                return t || (e in Ue ? e : Xe[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                        if ((e = ze[n] + t) in Ue) return e
                }(e) || e)
            }
            var Ge = /^(none|table(?!-c[ea]).+)/,
                Ye = /^--/,
                Qe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Je = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Ke(e, t, n) {
                var r = te.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ze(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (u += w.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
            }

            function et(e, t, n) {
                var r = We(e),
                    i = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                    o = i,
                    a = $e(e, t, r),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Ie.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
            }

            function tt(e, t, n, r, i) {
                return new tt.prototype.init(e, t, n, r, i)
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = $e(e, "opacity");
                                return "" === n ? "1" : n
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
                        var i, o, a, s = X(t),
                            u = Ye.test(t),
                            l = e.style;
                        if (u || (t = Ve(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = X(t);
                    return Ye.test(t) || (t = Ve(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = $e(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), w.each(["height", "width"], function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !Ge.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : Fe(e, Qe, function() {
                            return et(e, t, r)
                        })
                    },
                    set: function(e, n, r) {
                        var i, o = We(e),
                            a = !h.scrollboxSize() && "absolute" === o.position,
                            s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                            u = r ? Ze(e, t, r, s, o) : 0;
                        return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, u)
                    }
                }
            }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
            }), w.fn.extend({
                css: function(e, t) {
                    return $(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = We(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), w.Tween = tt, tt.prototype = {
                constructor: tt,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
                }
            }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, w.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, w.fx = tt.prototype.init, w.fx.step = {};
            var nt, rt, it = /^(?:toggle|show|hide)$/,
                ot = /queueHooks$/;

            function at() {
                rt && (!1 === y.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(at) : t.setTimeout(at, w.fx.interval), w.fx.tick())
            }

            function st() {
                return t.setTimeout(function() {
                    nt = void 0
                }), nt = Date.now()
            }

            function ut(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function lt(e, t, n) {
                for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function ct(e, t, n) {
                var r, i, o = 0,
                    a = ct.prefilters.length,
                    s = w.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {},
                            easing: w.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: nt || st(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (! function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++)
                    if (r = ct.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            w.Animation = w.extend(ct, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return se(n.elem, e, te.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        g(e) ? (t = e, e = ["*"]) : e = e.match(P);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                            p = this,
                            d = {},
                            h = e.style,
                            g = e.nodeType && ae(e),
                            v = Y.get(e, "fxshow");
                        for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || s()
                            }), a.unqueued++, p.always(function() {
                                p.always(function() {
                                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                                })
                            })), t)
                            if (i = t[r], it.test(i)) {
                                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                    if ("show" !== i || !v || void 0 === v[r]) continue;
                                    g = !0
                                }
                                d[r] = v && v[r] || w.style(e, r)
                            }
                        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (ce([e], !0), l = e.style.display || l, c = w.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                                    h.display = l
                                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                                display: l
                            }), o && (v.hidden = !g), g && ce([e], !0), p.done(function() {
                                for (r in g || ce([e]), Y.remove(e, "fxshow"), d) w.style(e, r, d[r])
                            })), u = lt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
                    }
                }), w.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? w.extend({}, e) : {
                        complete: n || !n && t || g(e) && e,
                        duration: e,
                        easing: n && t || t && !g(t) && t
                    };
                    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                    }, r
                }, w.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(ae).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = w.isEmptyObject(e),
                            o = w.speed(t, n, r),
                            a = function() {
                                var t = ct(this, w.extend({}, e), o);
                                (i || Y.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = w.timers,
                                a = Y.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || w.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = Y.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = w.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), w.each(["toggle", "show", "hide"], function(e, t) {
                    var n = w.fn[t];
                    w.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
                    }
                }), w.each({
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
                }, function(e, t) {
                    w.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), w.timers = [], w.fx.tick = function() {
                    var e, t = 0,
                        n = w.timers;
                    for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || w.fx.stop(), nt = void 0
                }, w.fx.timer = function(e) {
                    w.timers.push(e), w.fx.start()
                }, w.fx.interval = 13, w.fx.start = function() {
                    rt || (rt = !0, at())
                }, w.fx.stop = function() {
                    rt = null
                }, w.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, w.fn.delay = function(e, n) {
                    return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, r) {
                        var i = t.setTimeout(n, e);
                        r.stop = function() {
                            t.clearTimeout(i)
                        }
                    })
                },
                function() {
                    var e = y.createElement("input"),
                        t = y.createElement("select").appendChild(y.createElement("option"));
                    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = y.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
                }();
            var ft, pt = w.expr.attrHandle;
            w.fn.extend({
                attr: function(e, t) {
                    return $(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        w.removeAttr(this, e)
                    })
                }
            }), w.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!h.radioValue && "radio" === t && A(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(P);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), ft = {
                set: function(e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = pt[t] || w.find.attr;
                pt[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i
                }
            });
            var dt = /^(?:input|select|textarea|button)$/i,
                ht = /^(?:a|area)$/i;

            function gt(e) {
                return (e.match(P) || []).join(" ")
            }

            function vt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function yt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
            }
            w.fn.extend({
                prop: function(e, t) {
                    return $(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[w.propFix[e] || e]
                    })
                }
            }), w.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), h.optSelected || (w.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                w.propFix[this.toLowerCase()] = this
            }), w.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each(function(t) {
                        w(this).addClass(e.call(this, t, vt(this)))
                    });
                    if ((t = yt(e)).length)
                        for (; n = this[u++];)
                            if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = gt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each(function(t) {
                        w(this).removeClass(e.call(this, t, vt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = yt(e)).length)
                        for (; n = this[u++];)
                            if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                i !== (s = gt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                        w(this).toggleClass(e.call(this, n, vt(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, a;
                        if (r)
                            for (i = 0, o = w(this), a = yt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var mt = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = g(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(mt, "") : null == n ? "" : n : void 0
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : gt(w.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), w.each(["radio", "checkbox"], function() {
                w.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                    }
                }, h.checkOn || (w.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), h.focusin = "onfocusin" in t;
            var xt = /^(?:focusinfocus|focusoutblur)$/,
                bt = function(e) {
                    e.stopPropagation()
                };
            w.extend(w.event, {
                trigger: function(e, n, r, i) {
                    var o, a, s, u, l, c, p, d, h = [r || y],
                        m = f.call(e, "type") ? e.type : e,
                        x = f.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = d = s = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), p = w.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                        if (!i && !p.noBubble && !v(r)) {
                            for (u = p.delegateType || m, xt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                            s === (r.ownerDocument || y) && h.push(s.defaultView || s.parentWindow || t)
                        }
                        for (o = 0;
                            (a = h[o++]) && !e.isPropagationStopped();) d = a, e.type = o > 1 ? u : p.bindType || m, (c = (Y.get(a, "events") || Object.create(null))[e.type] && Y.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && V(a) && (e.result = c.apply(a, n), !1 === e.result && e.preventDefault());
                        return e.type = m, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !V(r) || l && g(r[m]) && !v(r) && ((s = r[l]) && (r[l] = null), w.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, bt), r[m](), e.isPropagationStopped() && d.removeEventListener(m, bt), w.event.triggered = void 0, s && (r[l] = s)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(r, null, t)
                }
            }), w.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        w.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0)
                }
            }), h.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this.document || this,
                            i = Y.access(r, t);
                        i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this.document || this,
                            i = Y.access(r, t) - 1;
                        i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
                    }
                }
            });
            var wt = t.location,
                Tt = {
                    guid: Date.now()
                },
                Ct = /\?/;
            w.parseXML = function(e) {
                var n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = (new t.DOMParser).parseFromString(e, "text/xml")
                } catch (r) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
            };
            var Et = /\[\]$/,
                St = /\r?\n/g,
                kt = /^(?:submit|button|image|reset|file)$/i,
                At = /^(?:input|select|textarea|keygen)/i;

            function Nt(e, t, n, r) {
                var i;
                if (Array.isArray(t)) w.each(t, function(t, i) {
                    n || Et.test(e) ? r(e, i) : Nt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== b(t)) r(e, t);
                else
                    for (i in t) Nt(e + "[" + i + "]", t[i], n, r)
            }
            w.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = g(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) Nt(n, e[n], t, i);
                return r.join("&")
            }, w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !kt.test(e) && (this.checked || !de.test(e))
                    }).map(function(e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        }
                    }).get()
                }
            });
            var Dt = /%20/g,
                jt = /#.*$/,
                qt = /([?&])_=[^&]*/,
                Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ht = /^(?:GET|HEAD)$/,
                Ot = /^\/\//,
                Pt = {},
                Rt = {},
                Mt = "*/".concat("*"),
                It = y.createElement("a");

            function Wt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(P) || [];
                    if (g(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function Ft(e, t, n, r) {
                var i = {},
                    o = e === Rt;

                function a(s) {
                    var u;
                    return i[s] = !0, w.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function Bt(e, t) {
                var n, r, i = w.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && w.extend(!0, e, r), e
            }
            It.href = wt.href, w.extend({
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
                        "*": Mt,
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
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Bt(Bt(e, w.ajaxSettings), t) : Bt(w.ajaxSettings, e)
                },
                ajaxPrefilter: Wt(Pt),
                ajaxTransport: Wt(Rt),
                ajax: function(e, n) {
                    "object" == typeof e && (n = e, e = void 0), n = n || {};
                    var r, i, o, a, s, u, l, c, f, p, d = w.ajaxSetup({}, n),
                        h = d.context || d,
                        g = d.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                        v = w.Deferred(),
                        m = w.Callbacks("once memory"),
                        x = d.statusCode || {},
                        b = {},
                        T = {},
                        C = "canceled",
                        E = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!a)
                                        for (a = {}; t = Lt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return l ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (d.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l) E.always(e[E.status]);
                                    else
                                        for (t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || C;
                                return r && r.abort(t), S(0, t), this
                            }
                        };
                    if (v.promise(E), d.url = ((e || d.url || wt.href) + "").replace(Ot, wt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [""], null == d.crossDomain) {
                        u = y.createElement("a");
                        try {
                            u.href = d.url, u.href = u.href, d.crossDomain = It.protocol + "//" + It.host != u.protocol + "//" + u.host
                        } catch (k) {
                            d.crossDomain = !0
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), Ft(Pt, d, n, E), l) return E;
                    for (f in (c = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ht.test(d.type), i = d.url.replace(jt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Dt, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (Ct.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(qt, "$1"), p = (Ct.test(i) ? "&" : "?") + "_=" + Tt.guid++ + p), d.url = i + p), d.ifModified && (w.lastModified[i] && E.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i] && E.setRequestHeader("If-None-Match", w.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && E.setRequestHeader("Content-Type", d.contentType), E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : d.accepts["*"]), d.headers) E.setRequestHeader(f, d.headers[f]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || l)) return E.abort();
                    if (C = "abort", m.add(d.complete), E.done(d.success), E.fail(d.error), r = Ft(Rt, d, n, E)) {
                        if (E.readyState = 1, c && g.trigger("ajaxSend", [E, d]), l) return E;
                        d.async && d.timeout > 0 && (s = t.setTimeout(function() {
                            E.abort("timeout")
                        }, d.timeout));
                        try {
                            l = !1, r.send(b, S)
                        } catch (k) {
                            if (l) throw k;
                            S(-1, k)
                        }
                    } else S(-1, "No Transport");

                    function S(e, n, a, u) {
                        var f, p, y, b, T, C = n;
                        l || (l = !0, s && t.clearTimeout(s), r = void 0, o = u || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n) o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(d, E, a)), !f && w.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function() {}), b = function(e, t, n, r) {
                            var i, o, a, s, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (k) {
                                        return {
                                            state: "parsererror",
                                            error: a ? k : "No conversion from " + u + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(d, b, E, f), f ? (d.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[i] = T), (T = E.getResponseHeader("etag")) && (w.etag[i] = T)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, f = !(y = b.error))) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", f ? v.resolveWith(h, [p, C, E]) : v.rejectWith(h, [E, C, y]), E.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? p : y]), m.fireWith(h, [E, C]), c && (g.trigger("ajaxComplete", [E, d]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    return E
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return w.get(e, void 0, t, "script")
                }
            }), w.each(["get", "post"], function(e, t) {
                w[t] = function(e, n, r, i) {
                    return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, w.isPlainObject(e) && e))
                }
            }), w.ajaxPrefilter(function(e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            }), w._evalUrl = function(e, t, n) {
                return w.ajax({
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
                        w.globalEval(e, t, n)
                    }
                })
            }, w.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return g(e) ? this.each(function(t) {
                        w(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = g(e);
                    return this.each(function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        w(this).replaceWith(this.childNodes)
                    }), this
                }
            }), w.expr.pseudos.hidden = function(e) {
                return !w.expr.pseudos.visible(e)
            }, w.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, w.ajaxSettings.xhr = function() {
                try {
                    return new t.XMLHttpRequest
                } catch (e) {}
            };
            var $t = {
                    0: 200,
                    1223: 204
                },
                _t = w.ajaxSettings.xhr();
            h.cors = !!_t && "withCredentials" in _t, h.ajax = _t = !!_t, w.ajaxTransport(function(e) {
                var n, r;
                if (h.cors || _t && !e.crossDomain) return {
                    send: function(i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && t.setTimeout(function() {
                                n && r()
                            })
                        }, n = n("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (u) {
                            if (n) throw u
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }), w.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e
                    }
                }
            }), w.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), w.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(r, i) {
                        t = w("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), y.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var zt, Ut = [],
                Xt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ut.pop() || w.expando + "_" + Tt.guid++;
                    return this[e] = !0, e
                }
            }), w.ajaxPrefilter("json jsonp", function(e, n, r) {
                var i, o, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return a || w.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                    a = arguments
                }, r.always(function() {
                    void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Ut.push(i)), a && g(o) && o(a[0]), a = o = void 0
                }), "script"
            }), h.createHTMLDocument = ((zt = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), w.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, t.head.appendChild(r)) : t = y), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
                var r, i, o
            }, w.fn.load = function(e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = gt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, w.expr.pseudos.animated = function(e) {
                return w.grep(w.timers, function(t) {
                    return e === t.elem
                }).length
            }, w.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l = w.css(e, "position"),
                        c = w(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
                }
            }, w.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        w.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - w.css(r, "marginTop", !0),
                            left: t.left - i.left - w.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                        return e || re
                    })
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(r) {
                    return $(this, function(e, r, i) {
                        var o;
                        if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), w.each(["top", "left"], function(e, t) {
                w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
                    if (n) return n = $e(e, t), Ie.test(n) ? w(e).position()[t] + "px" : n
                })
            }), w.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    w.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return $(this, function(t, n, i) {
                            var o;
                            return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), w.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            });
            var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            w.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() {
                    return e.apply(t || this, r.concat(o.call(arguments)))
                }).guid = e.guid = e.guid || w.guid++, i
            }, w.holdReady = function(e) {
                e ? w.readyWait++ : w.ready(!0)
            }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = g, w.isWindow = v, w.camelCase = X, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, w.trim = function(e) {
                return null == e ? "" : (e + "").replace(Vt, "")
            }, "function" == typeof e && e.amd && e("jquery", [], function() {
                return w
            });
            var Gt = t.jQuery,
                Yt = t.$;
            return w.noConflict = function(e) {
                return t.$ === w && (t.$ = Yt), e && t.jQuery === w && (t.jQuery = Gt), w
            }, void 0 === n && (t.jQuery = t.$ = w), w
        });
    }, {
        "process": "pBGv"
    }],
    "JkW8": [function(require, module, exports) {
        "use strict";
        var t = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            e = function() {
                function e(i) {
                    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t(this, e), !(i instanceof Node)) throw "Can't initialize VanillaTilt because " + i + " is not a Node.";
                    this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = i, this.settings = this.extendSettings(s), this.reverse = this.settings.reverse ? -1 : 1, this.glare = e.isSettingTrue(this.settings.glare), this.glarePrerender = e.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = e.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = e.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.updateInitialPosition()
                }
                return e.isSettingTrue = function(t) {
                    return "" === t || !0 === t || 1 === t
                }, e.prototype.getElementListener = function() {
                    if (this.fullPageListening) return window.document;
                    if ("string" == typeof this.settings["mouse-event-element"]) {
                        var t = document.querySelector(this.settings["mouse-event-element"]);
                        if (t) return t
                    }
                    return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element
                }, e.prototype.addEventListeners = function() {
                    this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind)
                }, e.prototype.removeEventListeners = function() {
                    this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind)
                }, e.prototype.destroy = function() {
                    clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.reset(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null
                }, e.prototype.onDeviceOrientation = function(t) {
                    if (null !== t.gamma && null !== t.beta) {
                        this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1);
                        var e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
                            i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
                            s = e / this.width,
                            n = i / this.height,
                            a = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / s,
                            l = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / n;
                        null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = {
                            clientX: a + this.left,
                            clientY: l + this.top
                        }, this.updateCall = requestAnimationFrame(this.updateBind)
                    }
                }, e.prototype.onMouseEnter = function() {
                    this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition()
                }, e.prototype.onMouseMove = function(t) {
                    null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind)
                }, e.prototype.onMouseLeave = function() {
                    this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind)
                }, e.prototype.reset = function() {
                    this.event = {
                        clientX: this.left + this.width / 2,
                        clientY: this.top + this.height / 2
                    }, this.element && this.element.style && (this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"), this.resetGlare()
                }, e.prototype.resetGlare = function() {
                    this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0")
                }, e.prototype.updateInitialPosition = function() {
                    if (0 !== this.settings.startX || 0 !== this.settings.startY) {
                        this.onMouseEnter(), this.fullPageListening ? this.event = {
                            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
                            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
                        } : this.event = {
                            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
                            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
                        };
                        var t = this.settings.scale;
                        this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare()
                    }
                }, e.prototype.getValues = function() {
                    var t = void 0,
                        e = void 0;
                    return this.fullPageListening ? (t = this.event.clientX / this.clientWidth, e = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, e = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), e = Math.min(Math.max(e, 0), 1), {
                        tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2),
                        tiltY: (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2),
                        percentageX: 100 * t,
                        percentageY: 100 * e,
                        angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
                    }
                }, e.prototype.updateElementPosition = function() {
                    var t = this.element.getBoundingClientRect();
                    this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
                }, e.prototype.update = function() {
                    var t = this.getValues();
                    this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = "rotate(" + t.angle + "deg) translate(-50%, -50%)", this.glareElement.style.opacity = "" + t.percentageY * this.settings["max-glare"] / 100), this.element.dispatchEvent(new CustomEvent("tiltChange", {
                        detail: t
                    })), this.updateCall = null
                }, e.prototype.prepareGlare = function() {
                    if (!this.glarePrerender) {
                        var t = document.createElement("div");
                        t.classList.add("js-tilt-glare");
                        var e = document.createElement("div");
                        e.classList.add("js-tilt-glare-inner"), t.appendChild(e), this.element.appendChild(t)
                    }
                    this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        "pointer-events": "none"
                    }), Object.assign(this.glareElement.style, {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "pointer-events": "none",
                        "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                        width: 2 * this.element.offsetWidth + "px",
                        height: 2 * this.element.offsetWidth + "px",
                        transform: "rotate(180deg) translate(-50%, -50%)",
                        "transform-origin": "0% 0%",
                        opacity: "0"
                    }))
                }, e.prototype.updateGlareSize = function() {
                    this.glare && Object.assign(this.glareElement.style, {
                        width: "" + 2 * this.element.offsetWidth,
                        height: "" + 2 * this.element.offsetWidth
                    })
                }, e.prototype.updateClientSize = function() {
                    this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                }, e.prototype.onWindowResize = function() {
                    this.updateGlareSize(), this.updateClientSize()
                }, e.prototype.setTransition = function() {
                    var t = this;
                    clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing), this.transitionTimeout = setTimeout(function() {
                        t.element.style.transition = "", t.glare && (t.glareElement.style.transition = "")
                    }, this.settings.speed)
                }, e.prototype.extendSettings = function(t) {
                    var e = {
                            reverse: !1,
                            max: 15,
                            startX: 0,
                            startY: 0,
                            perspective: 1e3,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                            scale: 1,
                            speed: 300,
                            transition: !0,
                            axis: null,
                            glare: !1,
                            "max-glare": 1,
                            "glare-prerender": !1,
                            "full-page-listening": !1,
                            "mouse-event-element": null,
                            reset: !0,
                            gyroscope: !0,
                            gyroscopeMinAngleX: -45,
                            gyroscopeMaxAngleX: 45,
                            gyroscopeMinAngleY: -45,
                            gyroscopeMaxAngleY: 45,
                            gyroscopeSamples: 10
                        },
                        i = {};
                    for (var s in e)
                        if (s in t) i[s] = t[s];
                        else if (this.element.hasAttribute("data-tilt-" + s)) {
                        var n = this.element.getAttribute("data-tilt-" + s);
                        try {
                            i[s] = JSON.parse(n)
                        } catch (a) {
                            i[s] = n
                        }
                    } else i[s] = e[s];
                    return i
                }, e.init = function(t, i) {
                    t instanceof Node && (t = [t]), t instanceof NodeList && (t = [].slice.call(t)), t instanceof Array && t.forEach(function(t) {
                        "vanillaTilt" in t || (t.vanillaTilt = new e(t, i))
                    })
                }, e
            }();
        "undefined" != typeof document && (window.VanillaTilt = e, e.init(document.querySelectorAll("[data-tilt]"))), module.exports = e;
    }, {}],
    "ez7q": [function(require, module, exports) {
        var global = arguments[3];
        var t = arguments[3];

        function e(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
        }

        function s(t, e, s) {
            return e && i(t.prototype, e), s && i(t, s), t
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function o(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), i.push.apply(i, s)
            }
            return i
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(i), !0).forEach(function(e) {
                    n(t, e, i[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return t
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }

        function a(t) {
            return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function c(t, e) {
            return (c = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function h() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (t) {
                return !1
            }
        }

        function d(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function u(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ? d(t) : e
        }

        function f(t) {
            var e = h();
            return function() {
                var i, s = a(t);
                if (e) {
                    var n = a(this).constructor;
                    i = Reflect.construct(s, arguments, n)
                } else i = s.apply(this, arguments);
                return u(this, i)
            }
        }

        function p(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)););
            return t
        }

        function m(t, e, i) {
            return (m = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var s = p(t, e);
                if (s) {
                    var n = Object.getOwnPropertyDescriptor(s, e);
                    return n.get ? n.get.call(i) : n.value
                }
            })(t, e, i || t)
        }

        function v(t, e) {
            return w(t) || x(t, e) || S(t, e) || E()
        }

        function y(t) {
            return b(t) || g(t) || S(t) || T()
        }

        function b(t) {
            if (Array.isArray(t)) return k(t)
        }

        function w(t) {
            if (Array.isArray(t)) return t
        }

        function g(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }

        function x(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var i = [],
                    s = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var l, r = t[Symbol.iterator](); !(s = (l = r.next()).done) && (i.push(l.value), !e || i.length !== e); s = !0);
                } catch (a) {
                    n = !0, o = a
                } finally {
                    try {
                        s || null == r.return || r.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return i
            }
        }

        function S(t, e) {
            if (t) {
                if ("string" == typeof t) return k(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? k(t, e) : void 0
            }
        }

        function k(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
            return s
        }

        function T() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function E() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Smooth = exports.Native = exports.default = void 0;
        var A = {
                el: document,
                name: "scroll",
                offset: [0, 0],
                repeat: !1,
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical",
                reloadOnContextChange: !1,
                lerp: .1,
                class: "is-inview",
                scrollbarContainer: !1,
                scrollbarClass: "c-scrollbar",
                scrollingClass: "has-scroll-scrolling",
                draggingClass: "has-scroll-dragging",
                smoothClass: "has-scroll-smooth",
                initClass: "has-scroll-init",
                getSpeed: !1,
                getDirection: !1,
                scrollFromAnywhere: !1,
                multiplier: 1,
                firefoxMultiplier: 50,
                touchMultiplier: 2,
                resetNativeScroll: !0,
                tablet: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical",
                    breakpoint: 1024
                },
                smartphone: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical"
                }
            },
            O = function() {
                function t() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e(this, t), Object.assign(this, A, i), this.smartphone = A.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = A.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                        scroll: {
                            x: 0,
                            y: 0
                        },
                        limit: {
                            x: this.html.offsetHeight,
                            y: this.html.offsetHeight
                        },
                        currentElements: this.currentElements
                    }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
                }
                return s(t, [{
                    key: "init",
                    value: function() {
                        this.initEvents()
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        this.dispatchScroll()
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        var t = this;
                        this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function() {
                            t.resize(), t.resizeTick = !1
                        }))
                    }
                }, {
                    key: "resize",
                    value: function() {}
                }, {
                    key: "checkContext",
                    value: function() {
                        if (this.reloadOnContextChange) {
                            this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                            var t = this.context;
                            if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                        }
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        var t = this;
                        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function(e) {
                            e.addEventListener("click", t.setScrollTo, !1)
                        })
                    }
                }, {
                    key: "setScrollTo",
                    value: function(t) {
                        t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                            offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                        })
                    }
                }, {
                    key: "addElements",
                    value: function() {}
                }, {
                    key: "detectElements",
                    value: function(t) {
                        var e = this,
                            i = this.instance.scroll.y,
                            s = i + this.windowHeight,
                            n = this.instance.scroll.x,
                            o = n + this.windowWidth;
                        Object.entries(this.els).forEach(function(l) {
                            var r = v(l, 2),
                                a = r[0],
                                c = r[1];
                            if (!c || c.inView && !t || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, a) : s >= c.top && i < c.bottom && e.setInView(c, a)), c && c.inView)
                                if ("horizontal" === e.direction) {
                                    var h = c.right - c.left;
                                    c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (o < c.left || n > c.right) && e.setOutOfView(c, a)
                                } else {
                                    var d = c.bottom - c.top;
                                    c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight), (s < c.top || i > c.bottom) && e.setOutOfView(c, a)
                                }
                        }), this.hasScrollTicking = !1
                    }
                }, {
                    key: "setInView",
                    value: function(t, e) {
                        this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
                    }
                }, {
                    key: "setOutOfView",
                    value: function(t, e) {
                        var i = this;
                        this.els[e].inView = !1, Object.keys(this.currentElements).forEach(function(t) {
                            t === e && delete i.currentElements[t]
                        }), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                    }
                }, {
                    key: "dispatchCall",
                    value: function(t, e) {
                        this.callWay = e, this.callValue = t.call.split(",").map(function(t) {
                            return t.trim()
                        }), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                        var i = new Event(this.namespace + "call");
                        this.el.dispatchEvent(i)
                    }
                }, {
                    key: "dispatchScroll",
                    value: function() {
                        var t = new Event(this.namespace + "scroll");
                        this.el.dispatchEvent(t)
                    }
                }, {
                    key: "setEvents",
                    value: function(t, e) {
                        this.listeners[t] || (this.listeners[t] = []);
                        var i = this.listeners[t];
                        i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                    }
                }, {
                    key: "unsetEvents",
                    value: function(t, e) {
                        if (this.listeners[t]) {
                            var i = this.listeners[t],
                                s = i.indexOf(e);
                            s < 0 || (i.splice(s, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                        }
                    }
                }, {
                    key: "checkEvent",
                    value: function(t) {
                        var e = this,
                            i = t.type.replace(this.namespace, ""),
                            s = this.listeners[i];
                        s && 0 !== s.length && s.forEach(function(t) {
                            switch (i) {
                                case "scroll":
                                    return t(e.instance);
                                case "call":
                                    return t(e.callValue, e.callWay, e.callObj);
                                default:
                                    return t()
                            }
                        })
                    }
                }, {
                    key: "startScroll",
                    value: function() {}
                }, {
                    key: "stopScroll",
                    value: function() {}
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance.scroll = {
                            x: 0,
                            y: 0
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function(e) {
                            t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                        }), this.listeners = {}, this.scrollToEls.forEach(function(e) {
                            e.removeEventListener("click", t.setScrollTo, !1)
                        }), this.html.classList.remove(this.initClass)
                    }
                }]), t
            }(),
            D = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

        function C(t, e) {
            return t(e = {
                exports: {}
            }, e.exports), e.exports
        }
        var L = C(function(t, e) {
                ! function() {
                    t.exports = {
                        polyfill: function() {
                            var t = window,
                                e = document;
                            if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                                var i, s = t.HTMLElement || t.Element,
                                    n = 468,
                                    o = {
                                        scroll: t.scroll || t.scrollTo,
                                        scrollBy: t.scrollBy,
                                        elementScroll: s.prototype.scroll || a,
                                        scrollIntoView: s.prototype.scrollIntoView
                                    },
                                    l = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                    r = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                                t.scroll = t.scrollTo = function() {
                                    void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : o.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                                }, t.scrollBy = function() {
                                    void 0 !== arguments[0] && (c(arguments[0]) ? o.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                                }, s.prototype.scroll = s.prototype.scrollTo = function() {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== c(arguments[0])) {
                                            var t = arguments[0].left,
                                                e = arguments[0].top;
                                            p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                            o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }, s.prototype.scrollBy = function() {
                                    void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }, s.prototype.scrollIntoView = function() {
                                    if (!0 !== c(arguments[0])) {
                                        var i = function(t) {
                                                for (; t !== e.body && !1 === u(t);) t = t.parentNode || t.host;
                                                return t
                                            }(this),
                                            s = i.getBoundingClientRect(),
                                            n = this.getBoundingClientRect();
                                        i !== e.body ? (p.call(this, i, i.scrollLeft + n.left - s.left, i.scrollTop + n.top - s.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                            left: s.left,
                                            top: s.top,
                                            behavior: "smooth"
                                        })) : t.scrollBy({
                                            left: n.left,
                                            top: n.top,
                                            behavior: "smooth"
                                        })
                                    } else o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }

                            function a(t, e) {
                                this.scrollLeft = t, this.scrollTop = e
                            }

                            function c(t) {
                                if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                                if ("object" == typeof t && "smooth" === t.behavior) return !1;
                                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }

                            function h(t, e) {
                                return "Y" === e ? t.clientHeight + r < t.scrollHeight : "X" === e ? t.clientWidth + r < t.scrollWidth : void 0
                            }

                            function d(e, i) {
                                var s = t.getComputedStyle(e, null)["overflow" + i];
                                return "auto" === s || "scroll" === s
                            }

                            function u(t) {
                                var e = h(t, "Y") && d(t, "Y"),
                                    i = h(t, "X") && d(t, "X");
                                return e || i
                            }

                            function f(e) {
                                var i, s, o, r, a = (l() - e.startTime) / n;
                                r = a = a > 1 ? 1 : a, i = .5 * (1 - Math.cos(Math.PI * r)), s = e.startX + (e.x - e.startX) * i, o = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, s, o), s === e.x && o === e.y || t.requestAnimationFrame(f.bind(t, e))
                            }

                            function p(i, s, n) {
                                var r, c, h, d, u = l();
                                i === e.body ? (r = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, d = o.scroll) : (r = i, c = i.scrollLeft, h = i.scrollTop, d = a), f({
                                    scrollable: r,
                                    method: d,
                                    startTime: u,
                                    startX: c,
                                    startY: h,
                                    x: s,
                                    y: n
                                })
                            }
                        }
                    }
                }()
            }),
            M = L.polyfill,
            j = function(t) {
                r(n, t);
                var i = f(n);

                function n() {
                    var t, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e(this, n), (t = i.call(this, s)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = L, window.smoothscrollPolyfill.polyfill()), t
                }
                return s(n, [{
                    key: "init",
                    value: function() {
                        this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), m(a(n.prototype), "init", this).call(this)
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this;
                        m(a(n.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame(function() {
                            t.detectElements()
                        }), this.hasScrollTicking = !0))
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "resize",
                    value: function() {
                        Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(e, i) {
                            e.getBoundingClientRect();
                            var s, n, o, l = e.dataset[t.name + "Class"] || t.class,
                                r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                                a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                c = e.dataset[t.name + "Repeat"],
                                h = e.dataset[t.name + "Call"],
                                d = e.dataset[t.name + "Target"],
                                u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
                            s = u.top + t.instance.scroll.y, n = u.left + t.instance.scroll.x;
                            var f = s + o.offsetHeight,
                                p = n + o.offsetWidth;
                            "#header" === d && console.log(s, f), c = "false" != c && (null != c || t.repeat);
                            var m = t.getRelativeOffset(a),
                                v = {
                                    el: e,
                                    targetEl: o,
                                    id: r,
                                    class: l,
                                    top: s += m[0],
                                    bottom: f -= m[1],
                                    left: n,
                                    right: p,
                                    offset: a,
                                    progress: 0,
                                    repeat: c,
                                    inView: !1,
                                    call: h
                                };
                            t.els[r] = v, e.classList.contains(l) && t.setInView(t.els[r], r)
                        })
                    }
                }, {
                    key: "updateElements",
                    value: function() {
                        var t = this;
                        Object.entries(this.els).forEach(function(e) {
                            var i = v(e, 2),
                                s = i[0],
                                n = i[1],
                                o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                                l = o + n.targetEl.offsetHeight,
                                r = t.getRelativeOffset(n.offset);
                            t.els[s].top = o + r[0], t.els[s].bottom = l - r[1]
                        }), this.hasScrollTicking = !1
                    }
                }, {
                    key: "getRelativeOffset",
                    value: function(t) {
                        var e = [0, 0];
                        if (t)
                            for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                        return e
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = parseInt(e.offset) || 0,
                            s = !!e.callback && e.callback;
                        if ("string" == typeof t) {
                            if ("top" === t) t = this.html;
                            else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                            else if (!(t = document.querySelector(t))) return
                        } else if ("number" == typeof t) t = parseInt(t);
                        else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                        if (i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i, s) {
                            i = i.toFixed();
                            window.addEventListener("scroll", function t() {
                                window.pageYOffset.toFixed() === i && (window.removeEventListener("scroll", t), s())
                            })
                        }
                        window.scrollTo({
                            top: i,
                            behavior: "smooth"
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.addElements(), this.detectElements()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        m(a(n.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                    }
                }]), n
            }(O),
            W = Object.getOwnPropertySymbols,
            B = Object.prototype.hasOwnProperty,
            _ = Object.prototype.propertyIsEnumerable;

        function H(t) {
            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }

        function P() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var s = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    s[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
            } catch (n) {
                return !1
            }
        }
        var R = P() ? Object.assign : function(t, e) {
            for (var i, s, n = H(t), o = 1; o < arguments.length; o++) {
                for (var l in i = Object(arguments[o])) B.call(i, l) && (n[l] = i[l]);
                if (W) {
                    s = W(i);
                    for (var r = 0; r < s.length; r++) _.call(i, s[r]) && (n[s[r]] = i[s[r]])
                }
            }
            return n
        };

        function Y() {}
        Y.prototype = {
            on: function(t, e, i) {
                var s = this.e || (this.e = {});
                return (s[t] || (s[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            },
            once: function(t, e, i) {
                var s = this;

                function n() {
                    s.off(t, n), e.apply(i, arguments)
                }
                return n._ = e, this.on(t, n, i)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {}),
                    s = i[t],
                    n = [];
                if (s && e)
                    for (var o = 0, l = s.length; o < l; o++) s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
                return n.length ? i[t] = n : delete i[t], this
            }
        };
        var I = Y,
            z = C(function(t, e) {
                (function() {
                    (null !== e ? e : this).Lethargy = function() {
                        function t(t, e, i, s) {
                            this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != s ? s : 150, this.lastUpDeltas = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this), this.lastDownDeltas = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this), this.deltasTimestamp = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this)
                        }
                        return t.prototype.check = function(t) {
                            var e;
                            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                        }, t.prototype.isInertia = function(t) {
                            var e, i, s, n, o, l, r;
                            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), r = s.reduce(function(t, e) {
                                return t + e
                            }), o = i.reduce(function(t, e) {
                                return t + e
                            }), l = r / s.length, n = o / i.length, Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                        }, t.prototype.showLastUpDeltas = function() {
                            return this.lastUpDeltas
                        }, t.prototype.showLastDownDeltas = function() {
                            return this.lastDownDeltas
                        }, t
                    }()
                }).call(D)
            }),
            X = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            },
            V = Object.prototype.toString,
            F = Object.prototype.hasOwnProperty,
            q = function(t) {
                if (!t) return console.warn("bindAll requires at least one argument.");
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var i in t) F.call(t, i) && "function" == typeof t[i] && "[object Function]" == V.call(t[i]) && e.push(i);
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    t[n] = K(t[n], t)
                }
            };

        function K(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var N = z.Lethargy,
            U = "virtualscroll",
            G = J,
            $ = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SPACE: 32
            };

        function J(t) {
            q(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = R({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, t), this.options.limitInertia && (this._lethargy = new N), this._emitter = new I, this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }

        function Q(t, e, i) {
            return (1 - i) * t + i * e
        }

        function Z(t) {
            var e = {};
            if (window.getComputedStyle) {
                var i = getComputedStyle(t),
                    s = i.transform || i.webkitTransform || i.mozTransform,
                    n = s.match(/^matrix3d\((.+)\)$/);
                return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e
            }
        }

        function tt(t) {
            for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
            return e
        }
        J.prototype._notify = function(t) {
            var e = this._event;
            e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(U, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
        }, J.prototype._onWheel = function(t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var i = this._event;
                i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, X.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
            }
        }, J.prototype._onMouseWheel = function(t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
            }
        }, J.prototype._onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = e.pageX, this.touchStartY = e.pageY
        }, J.prototype._onTouchMove = function(t) {
            var e = this.options;
            e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
            var i = this._event,
                s = t.targetTouches ? t.targetTouches[0] : t;
            i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = s.pageX, this.touchStartY = s.pageY, this._notify(t)
        }, J.prototype._onKeyDown = function(t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (t.keyCode) {
                case $.LEFT:
                case $.UP:
                    e.deltaY = this.options.keyStep;
                    break;
                case $.RIGHT:
                case $.DOWN:
                    e.deltaY = -this.options.keyStep;
                    break;
                case t.shiftKey:
                    e.deltaY = i;
                    break;
                case $.SPACE:
                    e.deltaY = -i;
                    break;
                default:
                    return
            }
            this._notify(t)
        }, J.prototype._bind = function() {
            X.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), X.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), X.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), X.hasPointer && X.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), X.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, J.prototype._unbind = function() {
            X.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), X.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), X.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), X.hasPointer && X.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), X.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, J.prototype.on = function(t, e) {
            this._emitter.on(U, t, e);
            var i = this._emitter.e;
            i && i[U] && 1 === i[U].length && this._bind()
        }, J.prototype.off = function(t, e) {
            this._emitter.off(U, t, e);
            var i = this._emitter.e;
            (!i[U] || i[U].length <= 0) && this._unbind()
        }, J.prototype.reset = function() {
            var t = this._event;
            t.x = 0, t.y = 0
        }, J.prototype.destroy = function() {
            this._emitter.off(), this._unbind()
        };
        var et = 4,
            it = .001,
            st = 1e-7,
            nt = 10,
            ot = 11,
            lt = 1 / (ot - 1),
            rt = "function" == typeof Float32Array;

        function at(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function ct(t, e) {
            return 3 * e - 6 * t
        }

        function ht(t) {
            return 3 * t
        }

        function dt(t, e, i) {
            return ((at(e, i) * t + ct(e, i)) * t + ht(e)) * t
        }

        function ut(t, e, i) {
            return 3 * at(e, i) * t * t + 2 * ct(e, i) * t + ht(e)
        }

        function ft(t, e, i, s, n) {
            var o, l, r = 0;
            do {
                (o = dt(l = e + (i - e) / 2, s, n) - t) > 0 ? i = l : e = l
            } while (Math.abs(o) > st && ++r < nt);
            return l
        }

        function pt(t, e, i, s) {
            for (var n = 0; n < et; ++n) {
                var o = ut(e, i, s);
                if (0 === o) return e;
                e -= (dt(e, i, s) - t) / o
            }
            return e
        }

        function mt(t) {
            return t
        }
        var vt = function(t, e, i, s) {
                if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                if (t === e && i === s) return mt;
                for (var n = rt ? new Float32Array(ot) : new Array(ot), o = 0; o < ot; ++o) n[o] = dt(o * lt, t, i);
                return function(o) {
                    return 0 === o ? 0 : 1 === o ? 1 : dt(function(e) {
                        for (var s = 0, o = 1, l = ot - 1; o !== l && n[o] <= e; ++o) s += lt;
                        var r = s + (e - n[--o]) / (n[o + 1] - n[o]) * lt,
                            a = ut(r, t, i);
                        return a >= it ? pt(e, r, t, i) : 0 === a ? r : ft(e, s, s + lt, t, i)
                    }(o), e, s)
                }
            },
            yt = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SPACE: 32,
                TAB: 9,
                PAGEUP: 33,
                PAGEDOWN: 34,
                HOME: 36,
                END: 35
            },
            bt = function(t) {
                r(n, t);
                var i = f(n);

                function n() {
                    var t, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e(this, n), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = i.call(this, s)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = s.scrollbarContainer, t.checkKey = t.checkKey.bind(d(t)), window.addEventListener("keydown", t.checkKey, !1), t
                }
                return s(n, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = l({
                            delta: {
                                x: 0,
                                y: 0
                            }
                        }, this.instance), this.vs = new G({
                            el: this.scrollFromAnywhere ? document : this.el,
                            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                            firefoxMultiplier: this.firefoxMultiplier,
                            touchMultiplier: this.touchMultiplier,
                            useKeyboard: !1,
                            passive: !0
                        }), this.vs.on(function(e) {
                            t.stop || t.isDraggingScrollbar || requestAnimationFrame(function() {
                                t.updateDelta(e), t.isScrolling || t.startScrolling()
                            })
                        }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), m(a(n.prototype), "init", this).call(this)
                    }
                }, {
                    key: "setScrollLimit",
                    value: function() {
                        if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                            for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                            this.instance.limit.x = t - this.windowWidth
                        }
                    }
                }, {
                    key: "startScrolling",
                    value: function() {
                        this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                    }
                }, {
                    key: "stopScrolling",
                    value: function() {
                        cancelAnimationFrame(this.checkScrollRaf), this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                    }
                }, {
                    key: "checkKey",
                    value: function(t) {
                        var e = this;
                        if (this.stop) t.keyCode == yt.TAB && requestAnimationFrame(function() {
                            e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
                        });
                        else {
                            switch (t.keyCode) {
                                case yt.TAB:
                                    requestAnimationFrame(function() {
                                        e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                                            offset: -window.innerHeight / 2
                                        })
                                    });
                                    break;
                                case yt.UP:
                                    this.instance.delta[this.directionAxis] -= 240;
                                    break;
                                case yt.DOWN:
                                    this.instance.delta[this.directionAxis] += 240;
                                    break;
                                case yt.PAGEUP:
                                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                                    break;
                                case yt.PAGEDOWN:
                                    this.instance.delta[this.directionAxis] += window.innerHeight;
                                    break;
                                case yt.HOME:
                                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                    break;
                                case yt.END:
                                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                    break;
                                case yt.SPACE:
                                    document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                    break;
                                default:
                                    return
                            }
                            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                        }
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this;
                        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || this.isScrolling || this.isDraggingScrollbar) {
                            this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame(function() {
                                return t.checkScroll()
                            }), this.hasScrollTicking = !0), this.updateScroll();
                            var e = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                                i = Date.now() - this.startScrollTs;
                            if (!this.animatingScroll && i > 100 && (e < .5 && 0 != this.instance.delta[this.directionAxis] || e < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach(function(e) {
                                    var i = v(e, 2),
                                        s = (i[0], i[1]);
                                    s.persistent || t.instance.scroll[t.directionAxis] > s.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < s.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(s.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(s.el, 0, -t.instance.scroll[t.directionAxis]), s.inView || (s.inView = !0, s.el.style.opacity = 1, s.el.style.pointerEvents = "all", s.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : (s.inView && (s.inView = !1, s.el.style.opacity = 0, s.el.style.pointerEvents = "none", s.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(s.el, 0, 0))
                                }), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                                var s = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                                "horizontal" === this.direction ? this.transform(this.scrollbarThumb, s, 0) : this.transform(this.scrollbarThumb, 0, s)
                            }
                            m(a(n.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                        }
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                            x: this.windowWidth / 2,
                            y: this.windowHeight / 2
                        }, this.update()
                    }
                }, {
                    key: "updateDelta",
                    value: function(t) {
                        var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                        e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                    }
                }, {
                    key: "updateScroll",
                    value: function(t) {
                        this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = Q(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "initScrollBar",
                    value: function() {
                        if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                        this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "reinitScrollBar",
                    value: function() {
                        if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                        this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "destroyScrollBar",
                    value: function() {
                        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                    }
                }, {
                    key: "getScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                    }
                }, {
                    key: "releaseScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                    }
                }, {
                    key: "moveScrollBar",
                    value: function(t) {
                        var e = this;
                        this.isDraggingScrollbar && requestAnimationFrame(function() {
                            var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                                s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                            s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                        })
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function(e, i) {
                            var s, n, o, l = tt(e),
                                r = Object.entries(t.sections).map(function(t) {
                                    var e = v(t, 2);
                                    e[0];
                                    return e[1]
                                }).find(function(t) {
                                    return l.includes(t.el)
                                }),
                                a = e.dataset[t.name + "Class"] || t.class,
                                c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                                h = e.dataset[t.name + "Repeat"],
                                d = e.dataset[t.name + "Call"],
                                u = e.dataset[t.name + "Position"],
                                f = e.dataset[t.name + "Delay"],
                                p = e.dataset[t.name + "Direction"],
                                m = "string" == typeof e.dataset[t.name + "Sticky"],
                                y = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                b = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                w = e.dataset[t.name + "Target"],
                                g = (o = void 0 !== w ? document.querySelector("".concat(w)) : e).getBoundingClientRect();
                            null === r ? (s = g.top + t.instance.scroll.y - Z(o).y, n = g.left + t.instance.scroll.x - Z(o).x) : r.inView ? (s = g.top + t.instance.scroll.y - Z(o).y, n = g.left + t.instance.scroll.x - Z(o).x) : (s = g.top - Z(r.el).y - Z(o).y, n = g.left - Z(r.el).x - Z(o).x);
                            var x = s + o.offsetHeight,
                                S = n + o.offsetWidth,
                                k = {
                                    x: (S - n) / 2 + n,
                                    y: (x - s) / 2 + s
                                };
                            if (m) {
                                var T = e.getBoundingClientRect(),
                                    E = T.top,
                                    A = T.left,
                                    O = {
                                        x: A - n,
                                        y: E - s
                                    };
                                s += window.innerHeight, n += window.innerWidth, x = E + o.offsetHeight - e.offsetHeight - O[t.directionAxis], k = {
                                    x: ((S = A + o.offsetWidth - e.offsetWidth - O[t.directionAxis]) - n) / 2 + n,
                                    y: (x - s) / 2 + s
                                }
                            }
                            h = "false" != h && (null != h || t.repeat);
                            var D = [0, 0];
                            if (b)
                                if ("horizontal" === t.direction) {
                                    for (var C = 0; C < b.length; C++) "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowWidth / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                                    n += D[0], S -= D[1]
                                } else {
                                    for (C = 0; C < b.length; C++) "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowHeight / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                                    s += D[0], x -= D[1]
                                }
                            var L = {
                                el: e,
                                id: c,
                                class: a,
                                section: r,
                                top: s,
                                middle: k,
                                bottom: x,
                                left: n,
                                right: S,
                                offset: b,
                                progress: 0,
                                repeat: h,
                                inView: !1,
                                call: d,
                                speed: y,
                                delay: f,
                                position: u,
                                target: o,
                                direction: p,
                                sticky: m
                            };
                            t.els[c] = L, e.classList.contains(a) && t.setInView(t.els[c], c), (!1 !== y || m) && (t.parallaxElements[c] = L)
                        })
                    }
                }, {
                    key: "addSections",
                    value: function() {
                        var t = this;
                        this.sections = {};
                        var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                        0 === e.length && (e = [this.el]), e.forEach(function(e, i) {
                            var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                                n = e.getBoundingClientRect(),
                                o = {
                                    x: n.left - 1.5 * window.innerWidth - Z(e).x,
                                    y: n.top - 1.5 * window.innerHeight - Z(e).y
                                },
                                l = {
                                    x: o.x + n.width + 2 * window.innerWidth,
                                    y: o.y + n.height + 2 * window.innerHeight
                                },
                                r = "string" == typeof e.dataset[t.name + "Persistent"];
                            e.setAttribute("data-scroll-section-id", s);
                            var a = {
                                el: e,
                                offset: o,
                                limit: l,
                                inView: !1,
                                persistent: r,
                                id: s
                            };
                            t.sections[s] = a
                        })
                    }
                }, {
                    key: "transform",
                    value: function(t, e, i, s) {
                        var n;
                        if (s) {
                            var o = Z(t),
                                l = Q(o.x, e, s),
                                r = Q(o.y, i, s);
                            n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)")
                        } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                        t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n
                    }
                }, {
                    key: "transformElements",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            s = this.instance.scroll.x + this.windowWidth,
                            n = this.instance.scroll.y + this.windowHeight,
                            o = {
                                x: this.instance.scroll.x + this.windowMiddle.x,
                                y: this.instance.scroll.y + this.windowMiddle.y
                            };
                        Object.entries(this.parallaxElements).forEach(function(l) {
                            var r = v(l, 2),
                                a = (r[0], r[1]),
                                c = !1;
                            if (t && (c = 0), a.inView || i) switch (a.position) {
                                case "top":
                                    c = e.instance.scroll[e.directionAxis] * -a.speed;
                                    break;
                                case "elementTop":
                                    c = (n - a.top) * -a.speed;
                                    break;
                                case "bottom":
                                    c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * a.speed;
                                    break;
                                case "left":
                                    c = e.instance.scroll[e.directionAxis] * -a.speed;
                                    break;
                                case "elementLeft":
                                    c = (s - a.left) * -a.speed;
                                    break;
                                case "right":
                                    c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * a.speed;
                                    break;
                                default:
                                    c = (o[e.directionAxis] - a.middle[e.directionAxis]) * -a.speed
                            }
                            a.sticky && (c = a.inView ? "horizontal" === e.direction ? e.instance.scroll.x - a.left + window.innerWidth : e.instance.scroll.y - a.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < a.left - window.innerWidth && e.instance.scroll.x < a.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > a.right && e.instance.scroll.x > a.right + 100 && a.right - a.left + window.innerWidth : e.instance.scroll.y < a.top - window.innerHeight && e.instance.scroll.y < a.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > a.bottom && e.instance.scroll.y > a.bottom + 100 && a.bottom - a.top + window.innerHeight), !1 !== c && ("horizontal" === a.direction || "horizontal" === e.direction && "vertical" !== a.direction ? e.transform(a.el, c, 0, !t && a.delay) : e.transform(a.el, 0, c, !t && a.delay))
                        })
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = parseInt(i.offset) || 0,
                            n = i.duration || 1e3,
                            o = i.easing || [.25, 0, .35, 1],
                            l = !!i.disableLerp,
                            r = !!i.callback && i.callback;
                        if (o = vt.apply(void 0, y(o)), "string" == typeof t) {
                            if ("top" === t) t = 0;
                            else if ("bottom" === t) t = this.instance.limit.y;
                            else if ("left" === t) t = 0;
                            else if ("right" === t) t = this.instance.limit.x;
                            else if (!(t = document.querySelector(t))) return
                        } else if ("number" == typeof t) t = parseInt(t);
                        else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                        if ("number" != typeof t) {
                            if (!tt(t).includes(this.el)) return;
                            var a = t.getBoundingClientRect(),
                                c = a.top,
                                h = a.left,
                                d = tt(t).find(function(t) {
                                    return Object.entries(e.sections).map(function(t) {
                                        var e = v(t, 2);
                                        e[0];
                                        return e[1]
                                    }).find(function(e) {
                                        return e.el == t
                                    })
                                }),
                                u = 0;
                            u = d ? Z(d)[this.directionAxis] : -this.instance.scroll[this.directionAxis], s = "horizontal" === this.direction ? h + s - u : c + s - u
                        } else s = t + s;
                        var f = parseFloat(this.instance.delta[this.directionAxis]),
                            p = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis])) - f,
                            m = function(t) {
                                l ? "horizontal" === e.direction ? e.setScroll(f + p * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, f + p * t) : e.instance.delta[e.directionAxis] = f + p * t
                            };
                        this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                        var b = Date.now();
                        ! function t() {
                            var i = (Date.now() - b) / n;
                            i > 1 ? (m(1), e.animatingScroll = !1, 0 == n && e.update(), r && r()) : (e.scrollToRaf = requestAnimationFrame(t), m(o(i)))
                        }()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                    }
                }, {
                    key: "startScroll",
                    value: function() {
                        this.stop = !1
                    }
                }, {
                    key: "stopScroll",
                    value: function() {
                        this.stop = !0
                    }
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance = l(l({}, this.instance), {}, {
                            scroll: {
                                x: t,
                                y: e
                            },
                            delta: {
                                x: t,
                                y: e
                            },
                            speed: 0
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        m(a(n.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                    }
                }]), n
            }(O),
            wt = function() {
                function t() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e(this, t), this.options = i, Object.assign(this, A, i), this.smartphone = A.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = A.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
                }
                return s(t, [{
                    key: "init",
                    value: function() {
                        if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new bt(this.options) : this.scroll = new j(this.options), this.scroll.init(), window.location.hash) {
                            var t = window.location.hash.slice(1, window.location.hash.length),
                                e = document.getElementById(t);
                            e && this.scroll.scrollTo(e)
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.scroll.update()
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.scroll.startScroll()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.scroll.stopScroll()
                    }
                }, {
                    key: "scrollTo",
                    value: function(t, e) {
                        this.scroll.scrollTo(t, e)
                    }
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.scroll.setScroll(t, e)
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        this.scroll.setEvents(t, e)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        this.scroll.unsetEvents(t, e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.scroll.destroy()
                    }
                }]), t
            }();
        exports.Smooth = wt;
        var gt = function() {
            function t() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e(this, t), this.options = i, Object.assign(this, A, i), this.smartphone = A.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = A.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.init()
            }
            return s(t, [{
                key: "init",
                value: function() {
                    if (this.scroll = new j(this.options), this.scroll.init(), window.location.hash) {
                        var t = window.location.hash.slice(1, window.location.hash.length),
                            e = document.getElementById(t);
                        e && this.scroll.scrollTo(e)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    this.scroll.update()
                }
            }, {
                key: "start",
                value: function() {
                    this.scroll.startScroll()
                }
            }, {
                key: "stop",
                value: function() {
                    this.scroll.stopScroll()
                }
            }, {
                key: "scrollTo",
                value: function(t, e) {
                    this.scroll.scrollTo(t, e)
                }
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.scroll.setScroll(t, e)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    this.scroll.setEvents(t, e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    this.scroll.unsetEvents(t, e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.scroll.destroy()
                }
            }]), t
        }();
        exports.Native = gt;
        var xt = wt;
        exports.default = xt;
    }, {}],
    "SUij": [function(require, module, exports) {
        "use strict";

        function e() {
            var e = document.querySelectorAll(".anim-chars");
            e && e.forEach(function(e) {
                var t = $(e).text().split("");
                $(e).empty();
                for (var r = 0; r < t.length; r++) $(e).append("<span>" + t[r] + "</span>")
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "xtpW": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.initHovers = o, exports.initCursor = r;
        var e = -100,
            t = -100,
            n = document.querySelector(".cursor");

        function o() {
            var e = function(e) {
                    $(e.target).hasClass("explore") ? $(n).addClass("explore") : $(n).addClass("max")
                },
                t = function() {
                    $(n).removeClass("max explore")
                };
            document.querySelectorAll(".link, .explore").forEach(function(n) {
                n.addEventListener("mouseenter", e), n.addEventListener("mouseleave", t)
            })
        }

        function r() {
            document.addEventListener("mousemove", function(n) {
                e = n.clientX, t = n.clientY
            });
            requestAnimationFrame(function o() {
                n.style.transform = "translate(".concat(e, "px, ").concat(t, "px)"), requestAnimationFrame(o)
            })
        }
    }, {}],
    "EVAn": [function(require, module, exports) {
        "use strict";

        function e() {
            if ($(".header__menu").on("click", function(e) {
                    if ($(this).hasClass("close")) return e.preventDefault(), history.back(), !1
                }), window.innerWidth > 991) {
                $(".header__menu").hover(function() {
                    $(".section__preview").addClass("show")
                }, function() {
                    $(".section__preview").removeClass("show")
                });
                var e = document.querySelectorAll(".header .cta"),
                    t = [];
                $(e).each(function(e, n) {
                    t[e] || (t[e] = n.querySelector(".header__signup__anim")), n.addEventListener("mouseover", function(n) {
                        t[e].style.left = n.pageX - $(t[e]).parent().offset().left + "px", t[e].style.top = n.pageY - $(t[e]).parent().offset().top + "px"
                    }), n.addEventListener("mouseout", function(n) {
                        t[e].style.left = n.pageX - $(t[e]).parent().offset().left + "px", t[e].style.top = n.pageY - $(t[e]).parent().offset().top + "px"
                    })
                })
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "Hajm": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = n;
        var e = 10,
            t = 2e3;

        function n(n) {
            n ? ($("#menu").addClass("firstLoad"), setTimeout(function() {
                $("#preload").hide(), $(".intro, #menu").addClass("animate")
            }, 200), n = !1, setTimeout(function() {
                $(".intro").addClass("subtitle")
            }, 1e3), setTimeout(function() {
                $(".intro").addClass("showMenu")
            }, 2200), setTimeout(function() {
                $("#menu").removeClass("firstLoad animate"), $(".section__name, .info-tool").addClass("animate"), $("#menu .grid__text").addClass("animate-mobile")
            }, 3600)) : ($("#preload").hide(), $(".intro").remove(), $(".section__name, .info-tool").addClass("animate"), $("#menu .grid__text").addClass("animate-mobile"), $(".header__menu").removeClass("close"), $(".header__menu, .section__name, .header__logo").removeClass("dark")), VanillaTilt.init(document.querySelector(".menu"), {
                max: e,
                speed: 2e3,
                perspective: t,
                reverse: !0,
                reset: !0
            }), $(".group .explore").hover(function(e) {
                0 == $(".expand").length && $(".grid__image").not($(this).parents(".component").find(".grid__image")).addClass("fade-out")
            }, function() {
                0 == $(".expand").length && $(".grid__image").not($(this).parents(".component").find(".grid__image")).removeClass("fade-out")
            }), $(".grid__image__wrap .explore").hover(function(e) {
                0 == $(".expand").length && ($(this).parents(".component").hasClass("group") || $(".grid__image").not($(this).parents(".component").find(".grid__image")).addClass("fade-out"))
            }, function() {
                0 == $(".expand").length && ($(this).parents(".component").hasClass("group") || $(".grid__image").not($(this).parents(".component").find(".grid__image")).removeClass("fade-out"))
            }), $(".cursor .explore").text("explore")
        }
    }, {}],
    "XQmT": [function(require, module, exports) {
        var define;
        var global = arguments[3];
        var t, e = arguments[3];
        ! function(e, o) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof t && t.amd ? t(o) : (e = e || self).Preload = o()
        }(this, function() {
            "use strict";

            function t(t, e) {
                const o = new XMLHttpRequest;
                o.open("GET", t, !0), o.responseType = "blob";
                const s = this.getItemByUrl(t);
                s.xhr = o, o.onprogress = (t => {
                    if (!t.lengthComputable) return !1;
                    s.completion = parseInt(t.loaded / t.total * 100), s.downloaded = t.loaded, s.total = t.total, this.updateProgressBar(s)
                }), o.onload = (t => {
                    const n = t.target.response.type,
                        r = t.target.responseURL;
                    if (s.fileName = r.substring(r.lastIndexOf("/") + 1), s.type = n, s.status = o.status, 404 == o.status) s.blobUrl = s.size = null, s.error = !0, this.onerror(s);
                    else {
                        const e = new Blob([t.target.response], {
                            type: n
                        });
                        s.blobUrl = URL.createObjectURL(e), s.size = e.size, s.error = !1
                    }
                    e(s)
                }), o.send()
            }

            function e(t) {
                let e = 0,
                    o = this.stepped ? 100 * this.state.length : 0,
                    s = 0;
                for (const r of this.state) r.completion && s++, this.stepped ? r.completion && (e += r.completion) : this._readyForComputation ? (e += r.downloaded, o += r.total) : e = o = 0;
                this._readyForComputation = s == this.state.length;
                const n = parseInt(e / o * 100);
                isNaN(n) || this.onprogress({
                    progress: n,
                    item: t
                })
            }

            function o(t) {
                for (var e of this.state)
                    if (e.url == t) return e
            }

            function s(t) {
                return new Promise((e, o) => {
                    this.loaded = t.length;
                    for (let s of t) this.state.push({
                        url: s
                    }), this.preloadOne(s, t => {
                        this.onfetched(t), this.loaded--, 0 == this.loaded && (this.oncomplete(this.state), e(this.state))
                    })
                })
            }

            function n() {
                for (var t of this.state) t.completion < 100 && (t.xhr.abort(), t.status = 0);
                return this.oncancel(this.state), this.state
            }
            return function(r) {
                return {
                    state: [],
                    loaded: !1,
                    stepped: r && r.stepped || !0,
                    onprogress: () => {},
                    oncomplete: () => {},
                    onfetched: () => {},
                    onerror: () => {},
                    oncancel: () => {},
                    fetch: s,
                    updateProgressBar: e,
                    preloadOne: t,
                    getItemByUrl: o,
                    cancel: n
                }
            }
        });
    }, {}],
    "xKzs": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var e = n(require("@barba/core")),
            t = n(require("locomotive-scroll")),
            o = n(require("preload-it"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s, i = (0, o.default)(),
            a = !1;

        function r() {
            $(".section__preview").removeClass("top"), $(".section1__intro").addClass("rotate"), setTimeout(function() {
                $(".section1__intro").addClass("animate")
            }, 700), setTimeout(function() {
                $(".section1 .media").addClass("scaleDown")
            }, 1100), setTimeout(function() {
                $(".section1 .media, .section1 .text").addClass("animate-out")
            }, 2200), setTimeout(function() {
                $(".section1 .text").hide(), $(".section1 .media").addClass("final"), scroll = new t.default({
                    el: document.querySelector("[data-scroll-container]"),
                    smooth: !0,
                    tablet: {
                        smooth: !1
                    }
                }), a = !1;
                var o = $(".section__scroll").height() - window.innerHeight;
                if (scroll.on("scroll", function(e) {
                        (s = e.scroll.y) > o - window.innerHeight / 4 ? ($(".section1__grid").addClass("animate-out"), $(".section__footer").addClass("animate")) : ($(".section1__grid").removeClass("animate-out"), $(".section__footer").removeClass("animate"))
                    }), window.innerWidth > 1024) document.querySelector(".section1").addEventListener("wheel", function(t) {
                    t.deltaY > 0 && s >= parseInt(o) && (a || (a = !0, e.default.go("/lens.html")))
                });
                else {
                    var n = new Swipe(".section1 .section__footer");
                    n.onUp(function() {
                        a || (a = !0, e.default.go("/lens.html"))
                    }), n.run()
                }
                $(".video video")[0].play()
            }, 3200), setTimeout(function() {
                $(".video").addClass("masked")
            }, 3800), setTimeout(function() {
                $(".title-final").addClass("animate"), window.innerWidth <= 1024 && $("html, body").css("overflow", "")
            }, 5600);
            var o = document.getElementById("maskwrap");
            if (o && window.innerWidth > 1024) {
                function n(e) {
                    var t = e.clientY - ($("#maskwrap").position().top - s);
                    o.style.setProperty("--x", e.clientX + "px"), o.style.setProperty("--y", t + "px")
                }
                o.style.setProperty("--x", window.innerWidth / 2 + "px"), o.style.setProperty("--y", window.innerHeight / 2 + "px"), o.addEventListener("mousemove", n), $(".cursor .explore").text(""), $("#mask h1 span").hover(function() {
                    var e = $(this).data("cat");
                    $(".cursor .explore").text(e), $("#mask").addClass("expand"), $(".cursor").addClass("explore")
                }, function() {
                    $("#mask").removeClass("expand"), $(".cursor").removeClass("explore")
                }), $(".section1__mask").on("click", function() {
                    o.removeEventListener("mousemove", n), $("#mask").addClass("reveal"), $(".cursor").removeClass("explore")
                })
            }
        }

        function d() {
            var e = document.querySelectorAll(".load"),
                t = [];
            e && (e.forEach(function(e) {
                t.push(e.src)
            }), i.fetch(t).then(function(e) {}), i.oncomplete = function(e) {
                $(".load").addClass("loaded")
            })
        }

        function l(e) {
            $(".cursor").removeClass("next signup");
            var t = window.innerWidth > 1024 ? 500 : 100;
            e ? (e = !1, $("#overlay-preload").show(), $(".intro").css("background-color", "#fff"), setTimeout(function() {
                $("#preload").hide(), $(".intro").addClass("animate")
            }, 200), setTimeout(function() {
                $(".intro").addClass("subtitle")
            }, 1e3), setTimeout(function() {
                $("#overlay-preload").addClass("animate"), $(".intro").addClass("showMenu")
            }, 2200), setTimeout(function() {
                $(".intro").remove(), $("#overlay-preload").addClass("animate-out"), setTimeout(function() {
                    $(".section").addClass("reveal"), $(".section1__video video")[0].play(), $(".header").addClass("dark")
                }, t), setTimeout(function() {
                    $(".header").removeClass("dark"), $(".section1 .section__intro").addClass("negative")
                }, 1e3)
            }, 3e3)) : ($(".header").addClass("dark"), setTimeout(function() {
                $(".section1__video video")[0].play()
            }, t), setTimeout(function() {
                $(".header").removeClass("dark"), $(".section1 .section__intro").addClass("negative")
            }, 1e3));
            var o = !1;
            if (s = 0, a = !1, window.innerWidth > 1024) document.querySelector(".section1").addEventListener("wheel", function(e) {
                o || (o = !0, r())
            });
            else {
                $("html, body").css("overflow", "hidden");
                var n = new Swipe(".section1");
                n.onUp(function() {
                    o || (o = !0, r())
                }), n.run()
            }
            d()
        }
    }, {
        "@barba/core": "nGBO",
        "locomotive-scroll": "ez7q",
        "preload-it": "XQmT"
    }],
    "IuP3": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = c;
        var e = n(require("@barba/core")),
            t = n(require("locomotive-scroll")),
            o = n(require("preload-it"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s, a = (0, o.default)(),
            i = !1;

        function r() {
            var e = document.querySelectorAll(".load"),
                t = [];
            e && (e.forEach(function(e) {
                t.push(e.src)
            }), a.fetch(t).then(function(e) {}), a.oncomplete = function(e) {
                $(".load").addClass("loaded")
            })
        }

        function l() {
            var e = document.querySelectorAll(".section2 .cta"),
                t = [];
            $(e).each(function(e, o) {
                t[e] || (t[e] = o.querySelector(".cta__anim")), o.addEventListener("mouseover", function(o) {
                    t[e].style.left = o.pageX - $(t[e]).parent().offset().left + "px", t[e].style.top = o.pageY - $(t[e]).parent().offset().top + "px"
                }), o.addEventListener("mouseout", function(o) {
                    t[e].style.left = o.pageX - $(t[e]).parent().offset().left + "px", t[e].style.top = o.pageY - $(t[e]).parent().offset().top + "px"
                })
            })
        }

        function c() {
            setTimeout(function() {
                $(".section2 video")[0].play()
            }, 200), $(".cursor").removeClass("next signup"), scroll = new t.default({
                el: document.querySelector(".section2 .section__scroll"),
                smooth: !0
            }), i = !1;
            var o = $(".section__scroll").height() - window.innerHeight;
            if (o < 0 && (o = window.innerHeight), setTimeout(function() {
                    scroll.update(), scroll.start(), o = $(".section__scroll").height() - window.innerHeight
                }, 500), scroll.on("scroll", function(e) {
                    (s = e.scroll.y) > o - window.innerHeight / 4 ? ($(".section__last").addClass("animate-out"), $(".section__footer").addClass("animate")) : ($(".section__last").removeClass("animate-out"), $(".section__footer").removeClass("animate"))
                }), window.innerWidth > 991) {
                if (window.innerWidth > 1024) document.querySelector(".section2").addEventListener("wheel", function(t) {
                    t.deltaY > 0 && s >= parseInt(o) && (i || (i = !0, e.default.go("/better-practice.html")))
                });
                else(n = new Swipe(".section2 .section__footer")).onUp(function() {
                    i || (i = !0, e.default.go("/better-practice.html"))
                }), n.run();
                $("#show-demo").on("click", function(e) {
                    e.preventDefault(), $(this).addClass("animate-out"), $("#scroll1, #demo-wrap").addClass("animate-out"), $("#demo").addClass("show"), $("#close-demo").addClass("animate")
                }), $("#close-demo").on("click", function(e) {
                    e.preventDefault(), $("#show-demo").removeClass("animate-out"), $("#scroll1, #demo-wrap").removeClass("animate-out"), $("#demo").removeClass("show"), $(this).removeClass("animate")
                })
            } else {
                var n;
                (n = new Swipe(".section2 .section__footer")).onUp(function() {
                    i || (i = !0, e.default.go("/better-practice.html"))
                }), n.run()
            }
            r(), l()
        }
    }, {
        "@barba/core": "nGBO",
        "locomotive-scroll": "ez7q",
        "preload-it": "XQmT"
    }],
    "c641": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = c;
        var e = n(require("@barba/core")),
            t = n(require("locomotive-scroll")),
            o = n(require("preload-it"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i, s = (0, o.default)(),
            r = !1;

        function a() {
            var e = document.querySelectorAll(".load"),
                t = [];
            e && (e.forEach(function(e) {
                t.push(e.src)
            }), s.fetch(t).then(function(e) {}), s.oncomplete = function(e) {
                $(".load").addClass("loaded")
            })
        }

        function c() {
            $(".cursor").removeClass("next signup"), scroll = new t.default({
                el: document.querySelector(".section3 .section__scroll"),
                smooth: !0
            }), r = !1;
            var o = $(".section__scroll").height() - window.innerHeight;
            if (o < 0 && (o = window.innerHeight), setTimeout(function() {
                    scroll.update(), scroll.start(), o = $(".section__scroll").height() - window.innerHeight
                }, 500), scroll.on("scroll", function(e) {
                    (i = e.scroll.y) > 0 ? $(".section__preview").removeClass("top") : $(".section__preview").addClass("top"), i > o - window.innerHeight / 4 ? ($(".section__last").addClass("animate-out"), $(".section__footer").addClass("animate")) : ($(".section__last").removeClass("animate-out"), $(".section__footer").removeClass("animate")), i > .7 * window.innerHeight && ($(".section3__type").addClass("animate"), setTimeout(function() {
                        $(".section3__type").addClass("subtitle")
                    }, 1e3)), $(".section3__component").each(function() {
                        var e = $(this).position().top - window.innerHeight,
                            t = $(this).position().top,
                            o = $(this).position().top + window.innerHeight,
                            n = $(this).find(".section3__component__img");
                        if (i > e && i < t) var s = 10 * (1 - (a = i / t)),
                            r = 20 * (1 - a);
                        else if (i >= t && i < o) {
                            var a;
                            s = -10 * ((a = i / o) - .65), r = -20 * (a - .65)
                        }
                        n.css({
                            transform: "rotateX(" + s + "deg) rotateY(" + r + "deg)"
                        })
                    })
                }), window.innerWidth > 1024) document.querySelector(".section3").addEventListener("wheel", function(t) {
                t.deltaY > 0 && i >= parseInt(o) && (r || (r = !0, e.default.go("/try-it.html")))
            });
            else {
                var n = new Swipe(".section3 .section__footer");
                n.onUp(function() {
                    r || (r = !0, e.default.go("/try-it.html"))
                }), n.run()
            }
            a()
        }
    }, {
        "@barba/core": "nGBO",
        "locomotive-scroll": "ez7q",
        "preload-it": "XQmT"
    }],
    "XbIQ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = c;
        var e = o(require("locomotive-scroll")),
            s = o(require("preload-it"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var n = !1,
            t = !1;

        function i(e) {
            return !!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)
        }
        var a, r = (0, s.default)(),
            l = !1;

        function d() {
            var e = document.querySelectorAll(".load"),
                s = [];
            e && (e.forEach(function(e) {
                s.push(e.src)
            }), r.fetch(s).then(function(e) {}), r.oncomplete = function(e) {
                $(".load").addClass("loaded")
            })
        }

        function c() {
            n = !1, t = !1;
            var s = 0;
            scroll = new e.default({
                el: document.querySelector(".section4 .section__scroll"),
                smooth: !0
            }), scroll.on("scroll", function(e) {
                if ((s = e.scroll.y) > 0 ? $(".section__preview").removeClass("top") : $(".section4 .section__intro").hasClass("signup") || $(".section__preview").addClass("top"), $("#slide1").length) {
                    var o = $("#slide1").position().top + .5 * window.innerHeight;
                    s > o && $("#slide1").addClass("animate")
                }
            }), setTimeout(function() {
                scroll.update(), scroll.start()
            }, 500), setTimeout(function() {
                $(".section4 .section__intro").addClass("subtitle")
            }, 1e3);
            var o = document.querySelector(".section4 .signup"),
                a = (document.querySelector(".section4 .signup-form"), document.querySelector(".section4 .section4__slider"));

            function r() {
                var e = !0;
                $(".signup-form input").each(function() {
                    "" == $(this).val() && (e = !1)
                }), "-" == $("#ehr").val() && (e = !1), i($("#email").val()) || (e = !1), e ? $(".signup-form__submit").addClass("ready") : $(".signup-form__submit").removeClass("ready")
            }
            0 == $(".section--signup").length ? ($(".header__menu").removeClass("close"), $(".header__menu, .section__name, .header__logo").removeClass("dark"), window.innerWidth > 1024 ? (a.addEventListener("mouseenter", function(e) {
                t || $(".cursor").addClass("next")
            }), a.addEventListener("mouseleave", function(e) {
                $(".cursor").removeClass("next")
            }), a.addEventListener("click", function(e) {
                t || (t = !0, $(".cursor").removeClass("next"), $("#slide1").addClass("animate-out"), setTimeout(function() {
                    $("#slide1").addClass("translate"), $("#slide2").addClass("animate")
                }, 1200), setTimeout(function() {
                    $("#slide2 h2").first().addClass("opacity")
                }, 2600))
            }), n || $(".cursor").addClass("signup"), o.addEventListener("mouseenter", function(e) {
                $(".section4 .section__intro").hasClass("signup") || n || $(".cursor").addClass("signup")
            }), o.addEventListener("mouseleave", function(e) {
                $(".cursor").removeClass("signup")
            }), o.addEventListener("click", function(e) {
                $(".cursor").hasClass("signup") && !n && ($(".header__signup").addClass("disabled"), $(".section4 .section__intro").addClass("signup"), $(".cursor").removeClass("signup"), $(".signup-form").addClass("show"), $(".section__preview").removeClass("top"), $(".header__menu, .section__name, .header__logo").addClass("dark"), scroll && (scroll.scrollTo(0), scroll.stop()))
            })) : ($("#signup-mobile").on("click", function() {
                n || ($(".header__signup").addClass("disabled"), $(".section4 .section__intro").addClass("signup"), $(".cursor").removeClass("signup"), $(".signup-form").addClass("show"), $(".section__preview").removeClass("top"), $(".header__menu, .section__name, .header__logo").addClass("dark"))
            }), $("#next-mobile").on("click", function() {
                t || (t = !0, $("#slide1").addClass("animate-out"), $(this).addClass("hide"), setTimeout(function() {
                    $("#slide1").addClass("translate"), $("#slide2").addClass("animate")
                }, 1200), setTimeout(function() {
                    $("#slide2 h2").first().addClass("opacity")
                }, 2600))
            }))) : ($(".header__menu, .section__name, .header__logo").addClass("dark"), $(".header__signup").addClass("disabled"), $(".header__menu").addClass("close")), $(".signup-form__submit").on("click", function(e) {
                var s = {
                    fname: $("#fname").val(),
                    lname: $("#lname").val(),
                    email: $("#email").val(),
                    phone: $("#phone").val(),
                    ehr: $("#ehr").val()
                };
                $.ajax({
                    type: "POST",
                    url: "https://lens-website-mailchimp.apps.develop.cluster.science-dev.clinic",
                    data: JSON.stringify(s),
                    contentType: "application/json",
                    dataType: "json"
                }).done(function(e) {
                    n = !0, $(this).addClass("done"), $(".signup-form__wrapper").addClass("done"), $("#signup-mobile").remove(), 0 == $(".section--signup").length && setTimeout(function() {
                        $(".section4 .section__intro").removeClass("signup"), $(".signup-form").removeClass("show"), $(".section__preview").addClass("top"), $(".header__menu, .section__name, .header__logo").removeClass("dark"), scroll && scroll.start()
                    }, 3e3)
                }), e.preventDefault()
            }), $(".signup-form__back").on("click", function() {
                $(".section4 .section__intro").removeClass("signup"), $(".signup-form").removeClass("show"), $(".header__signup").removeClass("disabled"), $(".section__preview").addClass("top"), $(".header__menu, .section__name, .header__logo").removeClass("dark"), scroll && scroll.start(), setTimeout(function() {
                    n || $(".cursor").addClass("signup")
                }, 500)
            }), setTimeout(function() {
                $(".section4 .section__intro .grid__image__wrap").css("transition", "all 1s cubic-bezier(0.76, 0, 0.24, 1)")
            }, 1e3), $(".signup-form input").on("keyup", function() {
                r()
            }), d(), $(".dropdown__main").on("click", function(e) {
                $(this).parent().find(".dropdown__options").addClass("active")
            }), $(".dropdown__options__item").on("click", function(e) {
                $(this).parent().removeClass("active"), $(this).parents(".dropdown").find(".dropdown__main span").text($(this).text()), $("#ehr").val($(this).text()), r()
            }), $(document).click(function(e) {
                !$(e.target).closest(".dropdown").length && $(".dropdown__options").hasClass("active") && $(".dropdown__options").removeClass("active")
            })
        }
    }, {
        "locomotive-scroll": "ez7q",
        "preload-it": "XQmT"
    }],
    "T2Xs": [function(require, module, exports) {

    }, {
        "./../fonts/Lausanne-Regular.woff2": [
            ["Lausanne-Regular.a6168fc8.woff2", "oY8D"], "oY8D"
        ],
        "./../fonts/Lausanne-Regular.woff": [
            ["Lausanne-Regular.a084685e.woff", "ZuX6"], "ZuX6"
        ],
        "./../fonts/Lausanne-300Italic.woff2": [
            ["Lausanne-300Italic.28268fb6.woff2", "m81r"], "m81r"
        ],
        "./../fonts/Lausanne-300Italic.woff": [
            ["Lausanne-300Italic.b5005446.woff", "wOCu"], "wOCu"
        ],
        "./../../img/back.svg": [
            ["back.b442a4b6.svg", "DRPx"], "DRPx"
        ]
    }],
    "Focm": [function(require, module, exports) {
        "use strict";
        var e = l(require("@barba/core")),
            n = l(require("jquery")),
            t = l(require("vanilla-tilt")),
            o = l(require("locomotive-scroll")),
            i = l(require("./components/typo")),
            s = require("./components/cursor"),
            r = l(require("./components/header")),
            a = l(require("./components/menu")),
            c = l(require("./components/section1")),
            d = l(require("./components/section2")),
            u = l(require("./components/section3")),
            f = l(require("./components/section4"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        require("../scss/styles.scss"), window.scroll = null;
        var m, p = !0,
            h = 0,
            v = .01 * window.innerHeight;

        function _() {
            var e = document.querySelectorAll("video");

            function n(e, n) {
                var t = document.createElement("source");
                t.src = n, t.type = "video/mp4", e.appendChild(t)
            }
            void 0 !== e && e.forEach(function(e, t) {
                ! function(e, t) {
                    n(e, (window.innerWidth ? window.innerWidth : $(window).width()) > 1024 ? t.dataset.desktopVid : t.dataset.mobileVid)
                }(e, e)
            })
        }
        document.documentElement.style.setProperty("--vh", "".concat(v, "px")), window.addEventListener("resize", function() {
            var e = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
        }), window.Swipe = function() {
            function e(e) {
                this.xDown = null, this.yDown = null, this.element = "string" == typeof e ? document.querySelector(e) : e, this.element.addEventListener("touchstart", function(e) {
                    this.xDown = e.touches[0].clientX, this.yDown = e.touches[0].clientY
                }.bind(this), !1)
            }
            return e.prototype.onLeft = function(e) {
                return this.onLeft = e, this
            }, e.prototype.onRight = function(e) {
                return this.onRight = e, this
            }, e.prototype.onUp = function(e) {
                return this.onUp = e, this
            }, e.prototype.onDown = function(e) {
                return this.onDown = e, this
            }, e.prototype.handleTouchMove = function(e) {
                if (this.xDown && this.yDown) {
                    var n = e.touches[0].clientX,
                        t = e.touches[0].clientY;
                    this.xDiff = this.xDown - n, this.yDiff = this.yDown - t, 0 !== Math.abs(this.xDiff) && (this.xDiff > 2 ? "function" == typeof this.onLeft && this.onLeft() : this.xDiff < -2 && "function" == typeof this.onRight && this.onRight()), 0 !== Math.abs(this.yDiff) && (this.yDiff > 2 ? "function" == typeof this.onUp && this.onUp() : this.yDiff < -2 && "function" == typeof this.onDown && this.onDown()), this.xDown = null, this.yDown = null
                }
            }, e.prototype.run = function() {
                this.element.addEventListener("touchmove", function(e) {
                    this.handleTouchMove(e)
                }.bind(this), !1)
            }, e
        }(), (0, n.default)(function(n) {
            function o(e) {
                var t = n(e.next.container).data("section");
                "one" == t ? (0, c.default)(p) : "two" == t ? (0, d.default)() : "three" == t ? (0, u.default)() : "four" == t && (0, f.default)(), "one" == t && p || setTimeout(function() {
                    n(".section").length && n(".section").addClass("reveal")
                }, 200), p = !1, _()
            }
            window.$ = n, window.innerWidth > 1024 && (0, s.initCursor)(), (0, r.default)(), e.default.init({
                views: [{
                    namespace: "menu",
                    beforeLeave: function(e) {},
                    afterEnter: function(e) {
                        (0, i.default)(), (0, a.default)(p), p = !1, window.innerWidth >= 1024 && (0, s.initHovers)(), scroll && scroll.destroy()
                    }
                }, {
                    namespace: "page",
                    beforeEnter: function(e) {
                        scroll && scroll.destroy()
                    },
                    afterEnter: function(e) {
                        (0, i.default)(), o(e), window.innerWidth >= 1024 && (0, s.initHovers)()
                    }
                }, {
                    namespace: "signup",
                    beforeEnter: function(e) {
                        scroll && scroll.destroy()
                    },
                    afterEnter: function(e) {
                        o(e), window.innerWidth >= 1024 && (0, s.initHovers)()
                    }
                }],
                transitions: [{
                    name: "menu-transition",
                    from: {
                        namespace: ["menu"]
                    },
                    to: {
                        namespace: ["page"]
                    },
                    beforeLeave: function(e) {},
                    leave: function(e) {
                        var t = this.async(),
                            o = n(e.trigger);
                        if (n("#menu .section__name, #menu .info-tool").removeClass("animate"), n("#menu .grid__text").removeClass("animate-mobile"), 0 == o.length) {
                            var i = n(e.next.container).data("section");
                            "one" == i && (o = n(".menu .component").eq(0).find(".explore")), "two" == i && (o = n(".menu .component").eq(1).find(".explore")), "three" == i && (o = n(".menu .component").eq(2).find(".explore")), "four" == i && (o = n(".menu .component").eq(3).find(".explore"))
                        }
                        var s = !1;
                        n(".menu").addClass("transition-out"), o.parents(".component").hasClass("group") && (s = !0), s && o.parents(".component").find(".grid__image").addClass("clicked"), o.parents(".component").prevAll().addClass("prev-out"), h = o.parents(".component").index(), n(".menu").addClass("current" + h), n(".component").not(o.parents(".component")).addClass("animate-out"), o.addClass("clicked"), o.parents(".component").addClass("expand"), n(e.next.container).find(".section__intro .grid__image__wrap").css({
                            transition: "none",
                            transform: "none"
                        }), n(e.next.container).find(".grid__image__wrap img").addClass("loaded"), n(".cursor").removeClass("max"), setTimeout(function() {
                            t()
                        }, 2e3)
                    },
                    beforeEnter: function(e) {},
                    enter: function(e) {},
                    afterEnter: function(e) {}
                }, {
                    name: "back-transition",
                    from: {
                        namespace: ["page"]
                    },
                    to: {
                        namespace: ["menu"]
                    },
                    beforeLeave: function(e) {},
                    leave: function(e) {
                        scroll && scroll.stop()
                    },
                    enter: function(e) {
                        var o = this.async(),
                            i = n(e.next.container).find(".menu"),
                            s = n(".section").data("section");
                        n(".cursor").removeClass("next signup"), i.css("pointer-events", "none"), n(".section__preview").addClass("clicked"), n(".section__overlay").addClass("animate"), "one" == s && i.find(".component").first().addClass("expand"), "two" == s && i.find(".component").eq(1).addClass("expand"), "three" == s && i.find(".component").eq(2).addClass("expand"), "four" == s && (i.find(".component").eq(3).addClass("expand"), i.find(".component.group").find(".grid__image").addClass("clicked"));
                        var r = "polygon(38.2% 13%, 61.8% 13%, 61.8% 87%, 38.2% 87%)";
                        window.innerWidth <= 991 && (r = "polygon(25% 30%, 75% 30%, 75% 70%, 25% 70%)"), i.find(".component").first().find(".grid__image__wrap").css({
                            clipPath: r,
                            transition: "none"
                        }), i.find(".expand").prevAll().addClass("prev-out");
                        var a = i.find(".expand").index();
                        i.addClass("animate animating current" + a), i.find(".component").not(i.find(".expand")).addClass("animate-out"), i.find(".component, img").css("transition", "none"), t.default.init(document.querySelector(".menu"), {
                            max: 10,
                            speed: 2e3,
                            perspective: 2e3,
                            reverse: !0,
                            reset: !0
                        }), setTimeout(function() {
                            n(".grid-container").addClass("animating"), i.find(".component, img").css("transition", ""), n(".grid__image").removeClass("fade-out"), i.removeClass("current0 current1 current2 current3"), i.find(".component").removeClass("animate-out prev-out expand"), n(".grid__image").removeClass("clicked"), n(".grid__image__wrap").removeClass("animate-out")
                        }, 100), setTimeout(function() {
                            n(".section__preview").addClass("animate")
                        }, 200), setTimeout(function() {
                            n(".section__scroll, .section__footer").hide(), n(".section__overlay").addClass("animate-out"), i.find(".component").first().find(".grid__image__wrap").css({
                                clipPath: "",
                                transition: ""
                            })
                        }, 1e3), setTimeout(function() {
                            i.removeClass("animating").css("pointer-events", ""), o(), n(".grid-container").removeClass("animating")
                        }, 2100)
                    },
                    afterEnter: function(e) {}
                }, {
                    name: "next-transition",
                    from: {
                        namespace: ["page"]
                    },
                    to: {
                        namespace: ["page"]
                    },
                    beforeLeave: function(e) {},
                    leave: function(e) {
                        scroll && (scroll.stop(), scroll.destroy())
                    },
                    enter: function(e) {
                        var t = this.async(),
                            o = n(e.current.container);
                        n(e.next.container);
                        n(e.next.container).find(".section__scroll .grid__image__wrap").css({
                            transition: "none",
                            transform: "none"
                        }), n(e.next.container).find(".load").addClass("loaded"), o.find(".section__footer").addClass("animate-out"), window.innerWidth <= 1024 && n(e.next.container).hide(), setTimeout(function() {
                            t(), window.innerWidth <= 1024 && n(e.next.container).show()
                        }, 1500)
                    },
                    afterEnter: function(e) {}
                }, {
                    name: "signup-transition",
                    from: {
                        namespace: ["page", "menu"]
                    },
                    to: {
                        namespace: ["signup"]
                    },
                    beforeLeave: function(e) {},
                    leave: function(e) {
                        scroll && (scroll.stop(), scroll.destroy())
                    },
                    enter: function(e) {
                        var t = this.async(),
                            o = n(e.current.container),
                            i = n(e.next.container);
                        i.hide(), o.fadeOut(500, function() {
                            setTimeout(function() {
                                i.fadeIn(300), t()
                            }, 400)
                        })
                    },
                    afterEnter: function(e) {}
                }, {
                    name: "signup-leave-transition",
                    from: {
                        namespace: ["signup"]
                    },
                    to: {
                        namespace: ["page", "menu"]
                    },
                    beforeLeave: function(e) {},
                    leave: function(e) {
                        scroll && (scroll.stop(), scroll.destroy())
                    },
                    enter: function(e) {
                        var t = this.async();
                        n(".header__signup").removeClass("disabled");
                        var o = n(e.current.container),
                            i = n(e.next.container);
                        i.hide(), o.fadeOut(500, function() {
                            setTimeout(function() {
                                i.fadeIn(300), t(), setTimeout(function() {
                                    n(".header__menu").removeClass("close"), n(".header__menu, .section__name, .header__logo").removeClass("dark")
                                }, 500)
                            }, 400)
                        })
                    },
                    afterEnter: function(e) {}
                }]
            })
        });
    }, {
        "@barba/core": "nGBO",
        "jquery": "juYr",
        "vanilla-tilt": "JkW8",
        "locomotive-scroll": "ez7q",
        "./components/typo": "SUij",
        "./components/cursor": "xtpW",
        "./components/header": "EVAn",
        "./components/menu": "Hajm",
        "./components/section1": "xKzs",
        "./components/section2": "IuP3",
        "./components/section3": "c641",
        "./components/section4": "XbIQ",
        "../scss/styles.scss": "T2Xs"
    }]
}, {}, ["Focm"], null)
