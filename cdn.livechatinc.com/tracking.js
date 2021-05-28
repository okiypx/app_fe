! function() {
    "use strict";
    var e = function() {
        var e = setTimeout;

        function n() {}

        function t(e) {
            if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
        }

        function r(e, n) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, t._immediateFn((function() {
                var t = 1 === e._state ? n.onFulfilled : n.onRejected;
                if (null !== t) {
                    var r;
                    try {
                        r = t(e._value)
                    } catch (e) {
                        return void o(n.promise, e)
                    }
                    i(n.promise, r)
                } else(1 === e._state ? i : o)(n.promise, e._value)
            }))) : e._deferreds.push(n)
        }

        function i(e, n) {
            try {
                if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var r = n.then;
                    if (n instanceof t) return e._state = 3, e._value = n, void a(e);
                    if ("function" == typeof r) return void c((i = r, u = n, function() {
                        i.apply(u, arguments)
                    }), e)
                }
                e._state = 1, e._value = n, a(e)
            } catch (n) {
                o(e, n)
            }
            var i, u
        }

        function o(e, n) {
            e._state = 2, e._value = n, a(e)
        }

        function a(e) {
            2 === e._state && 0 === e._deferreds.length && t._immediateFn((function() {
                e._handled || t._unhandledRejectionFn(e._value)
            }));
            for (var n = 0, i = e._deferreds.length; i > n; n++) r(e, e._deferreds[n]);
            e._deferreds = null
        }

        function u(e, n, t) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
        }

        function c(e, n) {
            var t = !1;
            try {
                e((function(e) {
                    t || (t = !0, i(n, e))
                }), (function(e) {
                    t || (t = !0, o(n, e))
                }))
            } catch (e) {
                if (t) return;
                t = !0, o(n, e)
            }
        }
        t.prototype.catch = function(e) {
            return this.then(null, e)
        }, t.prototype.then = function(e, t) {
            var i = new this.constructor(n);
            return r(this, new u(e, t, i)), i
        }, t.prototype.finally = function(e) {
            var n = this.constructor;
            return this.then((function(t) {
                return n.resolve(e()).then((function() {
                    return t
                }))
            }), (function(t) {
                return n.resolve(e()).then((function() {
                    return n.reject(t)
                }))
            }))
        }, t.all = function(e) {
            return new t((function(n, t) {
                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                var r = Array.prototype.slice.call(e);
                if (0 === r.length) return n([]);
                var i = r.length;

                function o(e, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var u = a.then;
                            if ("function" == typeof u) return void u.call(a, (function(n) {
                                o(e, n)
                            }), t)
                        }
                        r[e] = a, 0 == --i && n(r)
                    } catch (e) {
                        t(e)
                    }
                }
                for (var a = 0; r.length > a; a++) o(a, r[a])
            }))
        }, t.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === t ? e : new t((function(n) {
                n(e)
            }))
        }, t.reject = function(e) {
            return new t((function(n, t) {
                t(e)
            }))
        }, t.race = function(e) {
            return new t((function(n, t) {
                for (var r = 0, i = e.length; i > r; r++) e[r].then(n, t)
            }))
        }, t._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        } || function(n) {
            e(n, 0)
        }, t._unhandledRejectionFn = function(e) {
            void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        };
        var s = t;
        return /native code/.test(window.Promise) ? window.Promise : s
    }();

    function n() {
        return (n = Object.assign || function(e) {
            for (var n = 1; arguments.length > n; n++) {
                var t = arguments[n];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }).apply(this, arguments)
    }

    function t(e, n) {
        return e + n
    }
    var r = {}.hasOwnProperty;

    function i(e, n) {
        return r.call(n, e)
    }

    function o() {
        return (o = Object.assign || function(e) {
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) t[r - 1] = arguments[r];
            return t.forEach((function(n) {
                for (var t in n) i(t, n) && (e[t] = n[t])
            })), e
        }).apply(void 0, arguments)
    }
    var a = Array.isArray;

    function u(e) {
        return "object" == typeof e && null !== e && !a(e)
    }

    function c(e, n) {
        return Object.keys(n).reduce((function(t, r) {
            return t[r] = e(n[r]), t
        }), {})
    }

    function s(e) {
        return a(e) ? e.map(s) : u(e) ? c(s, e) : e
    }

    function d(e, n) {
        for (var t = 0; n.length > t; t++) {
            var r = n[t];
            if (e(r)) return r
        }
    }

    function l(e, n) {
        for (var t = n.length - 1; t >= 0; t--)
            if (e(n[t])) return n[t]
    }

    function f(e) {
        return e
    }

    function p(e, n) {
        return Object.keys(n).forEach((function(t) {
            e(n[t], t)
        }))
    }

    function h() {
        return Math.random().toString(36).substring(2)
    }

    function m(e) {
        var n = h();
        return i(n, e) ? m(e) : n
    }

    function v(e, n, t) {
        var r = function(e, n) {
            for (var t = "string" == typeof e ? e.split(".") : e, r = 0, i = n; i && t.length > r;) i = i[t[r++]];
            return i
        }(n, t);
        return null != r ? r : e
    }

    function g(e, n) {
        return -1 !== n.indexOf(e)
    }

    function _(e) {
        return 0 === (a(e) ? e : Object.keys(e)).length
    }

    function w(e) {
        return !e
    }

    function y(e) {
        return !!e
    }

    function b(e) {
        return e.length > 0 ? e[e.length - 1] : null
    }

    function k(e, n) {
        return Object.keys(n).reduce((function(t, r) {
            return t[e(r)] = n[r], t
        }), {})
    }

    function C(e, n) {
        if (_(n)) return e;
        var t = {};
        return p((function(r, o) {
            if (i(o, n))
                if (u(e[o]) && u(n[o])) t[o] = C(e[o], n[o]);
                else if (a(e[o]) && a(n[o])) {
                var c = Math.max(e[o].length, n[o].length);
                t[o] = Array(c);
                for (var s = 0; c > s; s++) s in n[o] ? t[o][s] = n[o][s] : s in e[o] && (t[o][s] = e[o][s])
            } else t[o] = n[o];
            else t[o] = e[o]
        }), e), p((function(e, r) {
            i(r, t) || (t[r] = n[r])
        }), n), t
    }

    function I(e) {
        if (0 === e.length) return {};
        var n = e[0];
        return e.slice(1).reduce((function(e, n) {
            return C(e, n)
        }), n)
    }

    function x(e) {
        return function(e, n) {
            var t = {};
            return function() {
                var r = e.apply(void 0, arguments);
                if (i(r, t)) return t[r];
                var o = n.apply(void 0, arguments);
                return t[r] = o, o
            }
        }(f, e)
    }

    function E() {}

    function L(e, n) {
        return e === n ? 0 !== e || 0 !== n || 1 / e == 1 / n : e != e && n != n
    }

    function O(e, n) {
        if (L(e, n)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
        var t = Object.keys(e);
        if (t.length !== Object.keys(n).length) return !1;
        for (var r = 0; t.length > r; r++)
            if (!i(t[r], n) || !L(e[t[r]], n[t[r]])) return !1;
        return !0
    }

    function T(e) {
        return e.reduce(t, 0)
    }
    var z = function(e) {
        return Object.keys(e).map((function(n) {
            return [n, e[n]]
        }))
    };
    var A = function(e, n) {
            p((function(e, t) {
                n.style[t] = e
            }), e)
        },
        M = function(e, n) {
            p((function(e, t) {
                "style" !== t ? n.setAttribute(t, e) : A(e, n)
            }), e)
        },
        P = !!document.documentElement.currentStyle,
        S = function(e, n) {
            var t = window.getComputedStyle(n),
                r = "border-box" === t.boxSizing,
                o = function(e, n) {
                    return e.reduce((function(e, t) {
                        return e[t] = n[t], e
                    }), {})
                }(e, t);
            P && r && i("width", o) && null !== o.width && (o.width = T([o.width, t.paddingLeft, t.paddingRight, t.borderLeftWidth, t.borderRightWidth].map(parseFloat)) + "px");
            P && r && i("height", o) && null !== o.height && (o.height = T([o.height, t.paddingTop, t.paddingBottom, t.borderTopWidth, t.borderBottomWidth].map(parseFloat)) + "px");
            return o
        };

    function j() {
        return new e((function(e) {
            ! function n() {
                document.body ? e(document.body) : setTimeout(n, 100)
            }()
        }))
    }

    function N(e) {
        var n = e.parentNode;
        n && n.removeChild(e)
    }
    var q = function(e) {
            return z(e).map((function(e) {
                return e.map(encodeURIComponent).join("=")
            })).join("&")
        },
        D = /(?:[^:]+:\/\/)?([^/\s]+)/;
    var V = /[^:]+:\/\/[^(/|?)\s]+/,
        H = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/,
        B = function(e) {
            return e.replace(/\w/g, "$&[\\r\\n\\t]*")
        },
        F = (RegExp("^[\0-]*(" + B("javascript") + "|" + B("data") + "):", "i"), /^((http(s)?:)?\/\/)/),
        G = function(e) {
            return function(n, t) {
                if (0 === n) {
                    if ("function" != typeof e) return t(0, (function() {})), void t(2);
                    var r, i = !1;
                    t(0, (function(e) {
                        i || (i = 2 === e) && "function" == typeof r && r()
                    })), i || (r = e((function(e) {
                        i || t(1, e)
                    }), (function(e) {
                        i || void 0 === e || (i = !0, t(2, e))
                    }), (function() {
                        i || (i = !0, t(2))
                    })))
                }
            }
        },
        R = function(e) {
            return function(n, t) {
                var r, i;
                0 === n && e(0, (function(e, n) {
                    if (0 === e) r = n, t(0, o);
                    else if (1 === e) {
                        var a = n;
                        i && i(2), a(0, (function(e, n) {
                            0 === e ? (i = n)(1) : 1 === e ? t(1, n) : 2 === e && n ? (r && r(2), t(2, n)) : 2 === e && (r ? (i = void 0, r(1)) : t(2))
                        }))
                    } else 2 === e && n ? (i && i(2), t(2, n)) : 2 === e && (i ? r = void 0 : t(2))
                }));

                function o(e, n) {
                    1 === e && (i || r)(1, n), 2 === e && (i && i(2), r && r(2))
                }
            }
        },
        W = function(e, n) {
            return e === n
        };

    function U(e) {
        return void 0 === e && (e = W),
            function(n) {
                return function(t, r) {
                    if (0 === t) {
                        var i, o, a = !1;
                        n(0, (function(n, t) {
                            0 === n && (o = t), 1 === n ? a && e(i, t) ? o(1) : (a = !0, i = t, r(1, t)) : r(n, t)
                        }))
                    }
                }
            }
    }
    var J = function(e) {
            return function(n) {
                return function(t, r) {
                    var i;
                    0 === t && n(0, (function(n, t) {
                        0 === n ? (i = t, r(n, t)) : 1 === n ? e(t) ? r(n, t) : i(1) : r(n, t)
                    }))
                }
            }
        },
        X = function(e) {
            return function(n) {
                var t;
                n(0, (function(n, r) {
                    0 === n && (t = r), 1 === n && e(r), 1 !== n && 0 !== n || t(1)
                }))
            }
        },
        Y = function(e, n, t) {
            return function(r, i) {
                if (0 === r) {
                    var o = !1,
                        a = function(e) {
                            i(1, e)
                        };
                    i(0, (function(r) {
                        2 === r && (o = !0, e.removeEventListener(n, a, t))
                    })), o || e.addEventListener(n, a, t)
                }
            }
        };
    var $ = function() {
        for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
        return function(e, t) {
            if (0 === e)
                for (var r = n.length, i = Array(r), o = 0, a = 0, u = function(e) {
                        if (0 !== e)
                            for (var n = 0; r > n; n++) i[n] && i[n](e)
                    }, c = function(e) {
                        n[e](0, (function(n, c) {
                            0 === n ? (i[e] = c, 1 == ++o && t(0, u)) : 2 === n ? (i[e] = void 0, ++a === r && t(2)) : t(n, c)
                        }))
                    }, s = 0; r > s; s++) c(s)
        }
    };

    function K(e, n) {
        return G((function(t) {
            return e.on(n, t),
                function() {
                    e.off(n, t)
                }
        }))
    }! function(e) {
        var n, t = e.Symbol;
        "function" == typeof t ? t.observable ? n = t.observable : (n = t("observable"), t.observable = n) : n = "@@observable"
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());
    var Q = function() {
            for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
            for (var r = n[0], i = 1, o = n.length; o > i; i++) r = n[i](r);
            return r
        },
        Z = function(e) {
            return function(n) {
                return function(t, r) {
                    var i;
                    0 === t && n(0, (function(n, t) {
                        0 === n ? (i = t, r(0, (function(e, n) {
                            0 !== e && i(e, n)
                        })), r(1, e)) : r(n, t)
                    }))
                }
            }
        },
        ee = function(e) {
            return function(n) {
                return function(t, r) {
                    0 === t && n(0, (function(n, t) {
                        r(n, 1 === n ? e(t) : t)
                    }))
                }
            }
        };

    function ne(e) {
        return function(n) {
            return R(ee(e)(n))
        }
    }
    var te = function() {};

    function re(e, n) {
        0 === e && n(0, te)
    }

    function ie() {
        for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
        return function(e, t) {
            if (0 === e) {
                var r = !1;
                for (t(0, (function(e) {
                        2 === e && (r = !0, n.length = 0)
                    })); 0 !== n.length;) t(1, n.shift());
                r || t(2)
            }
        }
    }

    function oe(e) {
        return function(n, t) {
            if (0 === n) {
                var r, i, o, a = 0;
                e(0, (function(e, n) {
                    if (0 === e && (o = n), 1 === e) {
                        var u = [i, n];
                        r = u[0], i = u[1], 2 > ++a ? o(1) : t(1, [r, i])
                    } else t(e, n)
                }))
            }
        }
    }
    var ae = function() {},
        ue = {};

    function ce(e) {
        var n, t, r = [],
            i = !1,
            o = ue;
        return function(a, u) {
            if (0 === a) {
                if (o !== ue) return u(0, ae), i && u(1, t), void u(2, o);
                r.push(u);
                var c = function(e, t) {
                    if (2 !== e) o === ue && n(e, t);
                    else {
                        var i = r.indexOf(u); - 1 !== i && r.splice(i, 1)
                    }
                };
                1 !== r.length ? (u(0, c), i && o === ue && u(1, t)) : e(0, (function(e, a) {
                    if (0 === e) return n = a, void u(0, c);
                    1 === e && (i = !0, t = a);
                    var s = r.slice(0);
                    2 === e && (o = a, r = null), s.forEach((function(n) {
                        n(e, a)
                    }))
                }))
            }
        }
    }
    var se = function(e) {
            return function(n) {
                return function(t, r) {
                    if (0 === t) {
                        var i, o = 0;
                        n(0, (function(n, t) {
                            0 === n ? (i = t, r(n, t)) : 1 === n && e > o ? (o++, i(1)) : r(n, t)
                        }))
                    }
                }
            }
        },
        de = function(e) {
            return void 0 === e && (e = {}),
                function(n) {
                    "function" == typeof e && (e = {
                        next: e
                    });
                    var t, r = e.next,
                        i = e.error,
                        o = e.complete;
                    n(0, (function(e, n) {
                        0 === e && (t = n), 1 === e && r && r(n), 1 !== e && 0 !== e || t(1), 2 === e && !n && o && o(), 2 === e && n && i && i(n)
                    }));
                    return function() {
                        t && t(2)
                    }
                }
        },
        le = function(e) {
            return function(n) {
                return function(t, r) {
                    if (0 === t) {
                        var i, o = 0;
                        n(0, (function(n, t) {
                            0 === n ? (i = t, r(0, a)) : 1 === n ? e > o && (o++, r(n, t), o === e && (r(2), i(2))) : r(n, t)
                        }))
                    }

                    function a(n, t) {
                        e > o && i(n, t)
                    }
                }
            }
        },
        fe = {},
        pe = function(e) {
            return function(n) {
                return function(t, r) {
                    if (0 === t) {
                        var i, o, a = !1,
                            u = fe;
                        n(0, (function(n, t) {
                            if (0 === n) return i = t, e(0, (function(e, n) {
                                if (0 !== e) return 1 === e ? (u = void 0, o(2), i(2), void(a && r(2))) : void(2 === e && (o = null, n && (u = n, i(2), a && r(e, n))));
                                (o = n)(1)
                            })), a = !0, r(0, (function(e, n) {
                                u === fe && (2 === e && o && o(2), i(e, n))
                            })), void(u !== fe && r(2, u));
                            2 === n && o(2), r(n, t)
                        }))
                    }
                }
            }
        };

    function he(n) {
        return new e((function(e, t) {
            de({
                next: e,
                error: t,
                complete: function() {
                    var e = Error("No elements in sequence.");
                    e.code = "NO_ELEMENTS", t(e)
                }
            })(function(e) {
                return function(n, t) {
                    if (0 === n) {
                        var r, i, o = !1,
                            a = !1;
                        e(0, (function(e, n) {
                            return 0 === e ? (r = n, void t(0, (function(e, n) {
                                2 === e && (a = !0), r(e, n)
                            }))) : 1 === e ? (o = !0, i = n, void r(1)) : void(2 === e && !n && o && (t(1, i), a) || t(e, n))
                        }))
                    }
                }
            }(n))
        }))
    }
    var me = function(e, n, t) {
            return e(t = {
                path: n,
                exports: {},
                require: function(e, n) {
                    return function() {
                        throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    }()
                }
            }, t.exports), t.exports
        }((function(e, n) {
            function t(e, n) {
                return e === n
            }

            function r(e, n, t) {
                if (null === n || null === t || n.length !== t.length) return !1;
                for (var r = n.length, i = 0; r > i; i++)
                    if (!e(n[i], t[i])) return !1;
                return !0
            }

            function i(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                    i = null,
                    o = null;
                return function() {
                    return r(n, i, arguments) || (o = e.apply(null, arguments)), i = arguments, o
                }
            }

            function o(e) {
                var n = Array.isArray(e[0]) ? e[0] : e;
                if (!n.every((function(e) {
                        return "function" == typeof e
                    }))) {
                    var t = n.map((function(e) {
                        return typeof e
                    })).join(", ");
                    throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + t + "]")
                }
                return n
            }

            function a(e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) t[r - 1] = arguments[r];
                return function() {
                    for (var n = arguments.length, r = Array(n), a = 0; n > a; a++) r[a] = arguments[a];
                    var u = 0,
                        c = r.pop(),
                        s = o(r),
                        d = e.apply(void 0, [function() {
                            return u++, c.apply(null, arguments)
                        }].concat(t)),
                        l = i((function() {
                            for (var e = [], n = s.length, t = 0; n > t; t++) e.push(s[t].apply(null, arguments));
                            return d.apply(null, e)
                        }));
                    return l.resultFunc = c, l.recomputations = function() {
                        return u
                    }, l.resetRecomputations = function() {
                        return u = 0
                    }, l
                }
            }
            n.__esModule = !0, n.defaultMemoize = i, n.createSelectorCreator = a, n.createStructuredSelector = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                if ("object" != typeof e) throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
                var t = Object.keys(e);
                return n(t.map((function(n) {
                    return e[n]
                })), (function() {
                    for (var e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
                    return n.reduce((function(e, n, r) {
                        return e[t[r]] = n, e
                    }), {})
                }))
            };
            var u = n.createSelector = a(i)
        })),
        ve = function(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        },
        ge = function() {
            function e() {
                ve(this, e), this._cache = {}
            }
            return e.prototype.set = function(e, n) {
                this._cache[e] = n
            }, e.prototype.get = function(e) {
                return this._cache[e]
            }, e.prototype.remove = function(e) {
                delete this._cache[e]
            }, e.prototype.clear = function() {
                this._cache = {}
            }, e
        }();
    (function() {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = n.cacheSize;
            if (ve(this, e), void 0 === t) throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(t) || 0 >= t) throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {}, this._cacheOrdering = [], this._cacheSize = t
        }
        e.prototype.set = function(e, n) {
            (this._cache[e] = n, this._cacheOrdering.push(e), this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }, e.prototype.get = function(e) {
            return this._cache[e]
        }, e.prototype.remove = function(e) {
            var n = this._cacheOrdering.indexOf(e);
            n > -1 && this._cacheOrdering.splice(n, 1), delete this._cache[e]
        }, e.prototype.clear = function() {
            this._cache = {}, this._cacheOrdering = []
        }
    })(),
    function() {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = n.cacheSize;
            if (ve(this, e), void 0 === t) throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(t) || 0 >= t) throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {}, this._cacheOrdering = [], this._cacheSize = t
        }
        e.prototype.set = function(e, n) {
            (this._cache[e] = n, this._registerCacheHit(e), this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }, e.prototype.get = function(e) {
            return this._registerCacheHit(e), this._cache[e]
        }, e.prototype.remove = function(e) {
            this._deleteCacheHit(e), delete this._cache[e]
        }, e.prototype.clear = function() {
            this._cache = {}, this._cacheOrdering = []
        }, e.prototype._registerCacheHit = function(e) {
            this._deleteCacheHit(e), this._cacheOrdering.push(e)
        }, e.prototype._deleteCacheHit = function(e) {
            var n = this._cacheOrdering.indexOf(e);
            n > -1 && this._cacheOrdering.splice(n, 1)
        }
    }();

    function _e() {
        for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
        var r = ge;
        return function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = void 0,
                o = void 0;
            "function" == typeof t ? (console.warn('[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'), i = new r, o = t) : (i = t.cacheObject || new r, o = t.selectorCreator || me.createSelector);
            var a = function() {
                var t = e.apply(void 0, arguments);
                if ("string" == typeof t || "number" == typeof t) {
                    var r = i.get(t);
                    return void 0 === r && (r = o.apply(void 0, n), i.set(t, r)), r.apply(void 0, arguments)
                }
            };
            return a.getMatchingSelector = function() {
                var n = e.apply(void 0, arguments);
                return i.get(n)
            }, a.removeMatchingSelector = function() {
                var n = e.apply(void 0, arguments);
                i.remove(n)
            }, a.clearCache = function() {
                i.clear()
            }, a.resultFunc = n[n.length - 1], a
        }
    }
    var we = function(e, n) {
            return n
        },
        ye = function(e, n) {
            return function(e) {
                return e.entities.chats.byIds
            }(e)[n]
        },
        be = _e([function(e, n) {
            return ye(e, n).events.orderedIds
        }, function(e, n) {
            return ye(e, n).events.byIds
        }], (function(e, n) {
            return e.map((function(e) {
                return n[e]
            }))
        }))(we),
        ke = _e([ye, be], (function(e, t) {
            return n({}, e, {
                events: t
            })
        }))(we),
        Ce = function(e) {
            return e.entities.users.byIds
        },
        Ie = function(e) {
            return Ce(e)[function(e) {
                return e.session.id
            }(e)]
        },
        xe = function(e, n) {
            return Ce(e)[n]
        },
        Ee = function(e) {
            return Ie(e).id
        },
        Le = (_e([be, Ee], (function(e, n) {
            return l((function(e) {
                return e.delivered && e.author === n
            }), e)
        }))(we), _e([be, Ee], (function(e, n) {
            return l((function(e) {
                return e.seen && e.author === n
            }), e)
        }))(we), {
            boosters: !0,
            form: !0,
            system_message: !0
        }),
        Oe = (me.createSelector([be, function(e) {
            return Ie(e).id
        }], (function(e, n) {
            return function(e, n, t) {
                for (var r = n; r >= 0; r--)
                    if (e(t[r])) return r;
                return -1
            }((function(e) {
                return e.author === n && "message" === e.type && !(e.properties && "file" === e.properties.serverType) || !0 === e.seen && !Le[e.type] && e.serverId
            }), (t = e).length - 1, t);
            var t
        })), _e([function(e, n) {
            return ye(e, n).participants
        }, Ce], (function(e, n) {
            return e.map((function(e) {
                return n[e]
            }))
        }))(we), function(e, n) {
            return void 0 === n ? e.application : e.application[n]
        });

    function Te(e, n) {
        if (null == e) return {};
        var t, r, i = {},
            o = Object.keys(e);
        for (r = 0; o.length > r; r++) 0 > n.indexOf(t = o[r]) && (i[t] = e[t]);
        return i
    }
    var ze = "application/x-postmate-v1+json",
        Ae = 0,
        Me = {
            handshake: 1,
            "handshake-reply": 1,
            call: 1,
            emit: 1,
            reply: 1,
            request: 1
        },
        Pe = function(e, n) {
            return ("string" != typeof n || e.origin === n) && (!!e.data && ("object" == typeof e.data && ("postmate" in e.data && (e.data.type === ze && !!Me[e.data.postmate]))))
        },
        Se = function() {
            function e(e) {
                var n = this;
                this.parent = e.parent, this.frame = e.frame, this.child = e.child, this.childOrigin = e.childOrigin, this.events = {}, this.listener = function(e) {
                    if (!Pe(e, n.childOrigin)) return !1;
                    var t = ((e || {}).data || {}).value || {},
                        r = t.name;
                    "emit" === e.data.postmate && r in n.events && n.events[r].call(n, t.data)
                }, this.parent.addEventListener("message", this.listener, !1)
            }
            var n = e.prototype;
            return n.get = function(e) {
                var n = this;
                return new Ne.Promise((function(t) {
                    var r = ++Ae;
                    n.parent.addEventListener("message", (function e(i) {
                        i.data.uid === r && "reply" === i.data.postmate && (n.parent.removeEventListener("message", e, !1), t(i.data.value))
                    }), !1), n.child.postMessage({
                        postmate: "request",
                        type: ze,
                        property: e,
                        uid: r
                    }, n.childOrigin)
                }))
            }, n.call = function(e, n) {
                this.child.postMessage({
                    postmate: "call",
                    type: ze,
                    property: e,
                    data: n
                }, this.childOrigin)
            }, n.on = function(e, n) {
                this.events[e] = n
            }, n.destroy = function() {
                window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame)
            }, e
        }(),
        je = function() {
            function e(e) {
                var n = this;
                this.model = e.model, this.parent = e.parent, this.parentOrigin = e.parentOrigin, this.child = e.child, this.child.addEventListener("message", (function(e) {
                    if (Pe(e, n.parentOrigin)) {
                        var t = e.data,
                            r = t.property,
                            i = t.uid,
                            o = t.data;
                        "call" !== e.data.postmate ? function(e, n) {
                            var t = "function" == typeof e[n] ? e[n]() : e[n];
                            return Ne.Promise.resolve(t)
                        }(n.model, r).then((function(n) {
                            return e.source.postMessage({
                                property: r,
                                postmate: "reply",
                                type: ze,
                                uid: i,
                                value: n
                            }, e.origin)
                        })) : r in n.model && "function" == typeof n.model[r] && n.model[r].call(n, o)
                    }
                }))
            }
            return e.prototype.emit = function(e, n) {
                this.parent.postMessage({
                    postmate: "emit",
                    type: ze,
                    value: {
                        name: e,
                        data: n
                    }
                }, this.parentOrigin)
            }, e
        }(),
        Ne = function() {
            function e(e) {
                var n = e.container,
                    t = void 0 === n ? void 0 !== t ? t : document.body : n,
                    r = e.model,
                    i = e.url,
                    o = e.allowVideoConferencing,
                    a = void 0 !== o && o;
                return this.parent = window, this.frame = document.createElement("iframe"), this.frame.allow = "autoplay", a && (this.frame.allow = this.frame.allow + "; microphone *; camera *;"), t.appendChild(this.frame), this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow, this.model = r || {}, this.sendHandshake(i)
            }
            return e.prototype.sendHandshake = function(n) {
                var t, r = this,
                    i = function(e) {
                        var n = document.createElement("a");
                        n.href = e;
                        var t = n.protocol.length > 4 ? n.protocol : window.location.protocol,
                            r = n.host.length ? "80" === n.port || "443" === n.port ? n.hostname : n.host : window.location.host;
                        return n.origin || t + "//" + r
                    }(n),
                    o = 0;
                return new e.Promise((function(e, a) {
                    r.parent.addEventListener("message", (function n(o) {
                        return !!Pe(o, i) && ("handshake-reply" === o.data.postmate ? (clearInterval(t), r.parent.removeEventListener("message", n, !1), r.childOrigin = o.origin, e(new Se(r))) : a("Failed handshake"))
                    }), !1);
                    var u = function() {
                            o++, r.child.postMessage({
                                postmate: "handshake",
                                type: ze,
                                model: r.model
                            }, i), 5 === o && clearInterval(t)
                        },
                        c = function() {
                            u(), t = setInterval(u, 500)
                        };
                    r.frame.attachEvent ? r.frame.attachEvent("onload", c) : r.frame.addEventListener("load", c), r.frame.src = n
                }))
            }, e
        }();
    Ne.debug = !1, Ne.Promise = function() {
        try {
            return window ? window.Promise : e
        } catch (e) {
            return null
        }
    }(), Ne.Model = function() {
        function e(e) {
            return this.child = window, this.model = e, this.parent = this.child.parent, this.sendHandshakeReply()
        }
        return e.prototype.sendHandshakeReply = function() {
            var e = this;
            return new Ne.Promise((function(n, t) {
                e.child.addEventListener("message", (function r(i) {
                    if (i.data.postmate) {
                        if ("handshake" === i.data.postmate) {
                            e.child.removeEventListener("message", r, !1), i.source.postMessage({
                                postmate: "handshake-reply",
                                type: ze
                            }, i.origin), e.parentOrigin = i.origin;
                            var o = i.data.model;
                            return o && Object.keys(o).forEach((function(n) {
                                e.model[n] = o[n]
                            })), n(new je(e))
                        }
                        return t("Handshake Reply Failed")
                    }
                }), !1)
            }))
        }, e
    }();
    var qe = function(e) {
            return e = e || Object.create(null), {
                on: function(n, t) {
                    (e[n] || (e[n] = [])).push(t)
                },
                off: function(n, t) {
                    e[n] && e[n].splice(e[n].indexOf(t) >>> 0, 1)
                },
                emit: function(n, t) {
                    (e[n] || []).slice().map((function(e) {
                        e(t)
                    })), (e["*"] || []).slice().map((function(e) {
                        e(n, t)
                    }))
                }
            }
        },
        De = function() {
            var e = Object.create(null),
                t = qe(e);
            return n({}, t, {
                off: function(n, r) {
                    n ? t.off(n, r) : Object.keys(e).forEach((function(n) {
                        delete e[n]
                    }))
                },
                once: function(e, n) {
                    t.on(e, (function r(i, o) {
                        t.off(e, r), n(i, o)
                    }))
                }
            })
        };
    Ne.Promise = e;
    var Ve = function(n) {
            var t = n.methods,
                r = Te(n, ["methods"]);
            return new Ne(r).then((function(n) {
                var r = n.on,
                    i = n.call,
                    a = function() {
                        for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                        return i.apply(n, t)
                    },
                    u = De(),
                    c = {},
                    s = {};
                return t.resolveRemoteCall = function(e) {
                    var n = e.id,
                        t = e.value,
                        r = s[n];
                    delete s[n], r(t)
                }, n.on = function(e, t) {
                    u.on(e, t), c[e] || (c[e] = !0, function() {
                        for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                        r.apply(n, t)
                    }(e, (function(n) {
                        u.emit(e, n)
                    })))
                }, n.off = u.off, n.on("remote-call", (function(e) {
                    var r = e.id,
                        i = e.method,
                        o = "function" == typeof t[i] ? t[i].apply(n, e.args) : void 0;
                    o && "function" == typeof o.then ? o.then((function(e) {
                        a("resolveRemoteCall", {
                            id: r,
                            value: e
                        })
                    })) : a("resolveRemoteCall", {
                        id: r,
                        value: o
                    })
                })), n.emit = function(e, n) {
                    a("emitEvent", {
                        event: e,
                        data: n
                    })
                }, n._emit = u.emit, n.call = function(n) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) r[i - 1] = arguments[i];
                    return new e((function(e) {
                        var t = m(s);
                        s[t] = e, a("remoteCall", {
                            id: t,
                            method: n,
                            args: r
                        })
                    }))
                }, o(n, t)
            }))
        },
        He = function(e, n) {
            var t = document.createElement(e);
            return M(n, t), t
        };

    function Be(e, n) {
        return null != n && null != e && "object" == typeof n && "object" == typeof e ? Fe(n, e) : e
    }

    function Fe(e, t) {
        var r;
        if (Array.isArray(e)) {
            r = e.slice(0, t.length);
            for (var o = 0; t.length > o; o++) void 0 !== t[o] && (r[o] = Be(t[o], r[o]))
        } else
            for (var a in r = n({}, e), t) i(a, t) && (void 0 === t[a] ? delete r[a] : r[a] = Be(t[a], r[a]));
        return r
    }
    var Ge = function(n) {
            return new e((function(e) {
                n.on("state", (function t(r) {
                    n.off("state", t), n.state = r, e(r)
                })), n.on("state_diff", (function(e) {
                    n.state = Fe(n.state, e)
                })), n.on("store_event", (function(e) {
                    n._emit(e[0], e[1])
                })), n.call("startStateSync")
            }))
        },
        Re = "chat-widget",
        We = {
            opacity: 0,
            visibility: "hidden",
            zIndex: -1
        },
        Ue = {
            opacity: 1,
            visibility: "visible",
            zIndex: 2147483639
        },
        Je = {
            id: Re + "-container",
            style: n({}, We, {
                position: "fixed",
                bottom: 0,
                width: 0,
                height: 0,
                maxWidth: "100%",
                maxHeight: "100%",
                minHeight: 0,
                minWidth: 0,
                backgroundColor: "transparent",
                border: 0,
                overflow: "hidden"
            })
        },
        Xe = {
            id: "livechat-eye-catcher",
            style: {
                position: "fixed",
                visibility: "visible",
                zIndex: 2147483639,
                background: "transparent",
                border: 0,
                padding: "10px 10px 0 0",
                float: "left",
                marginRight: "-10px",
                webkitBackfaceVisibility: "hidden"
            }
        },
        Ye = {
            style: {
                position: "absolute",
                display: "none",
                top: "-5px",
                right: "-5px",
                width: "16px",
                lineHeight: "16px",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                color: "#000",
                fontSize: "20px",
                fontFamily: "Arial, sans-serif",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.5)"
            }
        },
        $e = {
            id: "livechat-eye-catcher-img",
            style: {
                display: "block",
                overflow: "hidden",
                cursor: "pointer"
            }
        },
        Ke = {
            alt: "",
            style: {
                display: "block",
                border: 0,
                float: "right"
            }
        },
        Qe = {
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px"
        },
        Ze = {
            allowtransparency: !0,
            allow: "autoplay",
            id: Re,
            name: Re,
            title: "LiveChat chat widget",
            scrolling: "no",
            style: {
                width: "100%",
                height: "100%",
                "min-height": "0px",
                "min-width": "0px",
                margin: "0px",
                padding: "0px",
                "background-image": "none",
                "background-position-x": "0%",
                "background-position-y": "0%",
                "background-size": "initial",
                "background-attachment": "scroll",
                "background-origin": "initial",
                "background-clip": "initial",
                "background-color": "rgba(0, 0, 0, 0)",
                "border-width": "0px",
                float: "none"
            }
        },
        en = e.resolve(),
        nn = function(e) {
            en.then(e)
        },
        tn = function(e) {
            return nn((function() {
                throw e
            }))
        },
        rn = function(e) {
            return function(n) {
                var t = window.LC_API || {};
                if ("function" == typeof n && n(t), "function" == typeof t[e]) try {
                    t[e]()
                } catch (e) {
                    tn(e)
                }
            }
        },
        on = function(e, n) {
            if (!e) return !0;
            var t = function(e) {
                var n = e.match(D);
                return n && n[1]
            }(n);
            return !!t && [].concat(e, ["livechatinc.com", "lc.chat"]).some((function(e) {
                var n = t.length - e.length;
                return -1 !== t.indexOf(e, n) && (t.length === e.length || "." === t.charAt(n - 1))
            }))
        },
        an = [],
        un = function(e) {
            30 > an.length || (an = an.slice(1));
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) t[r - 1] = arguments[r];
            an.push({
                name: e,
                args: t
            })
        },
        cn = "always visible",
        sn = "always hide",
        dn = "hide until it gets activated";

    function ln(e, n, t) {
        return function(r) {
            var i, o = (void 0 === r ? {} : r).prettyPrint,
                a = void 0 === o || o,
                u = n.analytics.googleAnalytics.trackerName,
                c = !on(t.allowedDomains, document.location.href),
                s = [
                    ["window.open", !/native code/.test(window.open)],
                    ["document.domain", window.location.hostname !== document.domain],
                    ["window.frames", window.frames !== window],
                    ["JSON.stringify", !/native code/.test(window.JSON.stringify)],
                    ["JSON.parse", !/native code/.test(window.JSON.parse)],
                    ["Object.keys", !/native code/.test(Object.keys)],
                    ["console.log", !/native code/.test(console.log)]
                ].filter((function(e) {
                    return e[1]
                })).map((function(e) {
                    return e[0]
                })),
                d = function(e) {
                    var n = [];
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                    return n
                }(Ze.style).some((function(n) {
                    return e.frame.style.getPropertyValue(n) !== Ze.style[n]
                })),
                l = function(e) {
                    var n = "";
                    return {
                        desktopVisibility: n = e.initiallyHidden ? e.disabledMinimized ? sn : dn : cn,
                        mobileVisibility: e.hasCustomMobileSettings ? e.hiddenOnMobile ? sn : e.initiallyHiddenOnMobile ? e.disabledMinimizedOnMobile ? sn : dn : cn : n
                    }
                }(t.__unsafeProperties.group),
                f = l.desktopVisibility,
                p = l.mobileVisibility,
                h = [{
                    msg: "language: " + t.__unsafeProperties.group.language
                }, {
                    msg: "region: " + t.region
                }, {
                    msg: "license number: " + window.__lc.license
                }, {
                    msg: "group id: " + e.state.application.group
                }, {
                    msg: "protocol version: " + t.__unsafeProperties.license.protocolVersion
                }, {
                    msg: "hidden: " + (e.state.application.hidden ? "yes" : "no")
                }, {
                    msg: "tracker name: " + u
                }, {
                    msg: "desktop visibility: " + f,
                    isNotStandard: f !== cn
                }, {
                    msg: "mobile visibility: " + p,
                    isNotStandard: p !== cn
                }, {
                    msg: "chat between groups: " + (window.__lc.chat_between_groups ? "yes" : "no")
                }, {
                    msg: "is iframe inline style modified: " + (d ? "yes" : "no"),
                    isNotStandard: d
                }, {
                    msg: "is current domain not allowed by the allowed domains: " + (c ? "yes" : "no"),
                    isNotStandard: c
                }, {
                    msg: "overrides: " + (s.length > 0 ? s.join(",\n") : "none"),
                    isNotStandard: s.length > 0
                }, {
                    msg: "LC_API call history: " + (an.length > 0 ? an.map((function(e) {
                        return e.name + "(" + e.args.join(", ") + ")"
                    })).join(",\n") : "none"),
                    isNotStandard: an.length > 0
                }];
            if (!a) return h;
            var m = h.filter((function(e) {
                    return e.isNotStandard
                })),
                v = h.filter((function(e) {
                    return !e.isNotStandard
                })),
                g = [].concat(m, v);
            return -1 !== s.indexOf("console.log") ? g.map((function(e) {
                return e.msg
            })).join("\n\n") : ((i = console).log.apply(i, [g.map((function(e) {
                return "%c" + e.msg
            })).join("\n\n")].concat(g.map((function(e) {
                return e.isNotStandard ? "color: red;" : ""
            })))), "")
        }
    }

    function fn(e) {
        for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) t[r - 1] = arguments[r];
        return function() {
            "function" == typeof e && e.apply(void 0, t)
        }
    }

    function pn(e, n, t) {
        return Q(K(e, t), X((function(e) {
            return nn(fn(n[t], e))
        })))
    }

    function hn(e) {
        return I(e.filter(Boolean).map((function(e) {
            var n;
            return (n = {})[e.name] = e.value + "", n
        })))
    }

    function mn(e, n) {
        var t, r = d((function(e) {
            return !e[1]
        }), z((t = n, ["name", "email"].reduce((function(e, n) {
            return i(n, t) && (e[n] = t[n]), e
        }), {}))));
        if (r) {
            var o = r[1];
            console.error("[LiveChatWidget] Customer " + r[0] + " cannot be set to " + ("" === o ? "empty string" : o))
        } else e.call("storeMethod", ["requestUpdateUser", Ee(e.state), n])
    }

    function vn(e, n) {
        e.call("storeMethod", ["requestSetUserProperties", Ee(e.state), n])
    }

    function gn(e) {
        return null != e ? e + "" : null
    }
    var _n = function(e, n) {
        return Oe(e, "visibility").state === n
    };

    function wn(e, n) {
        return R((t = function() {
            return Q(K(e, "state_diff"), ee((function() {
                return e.state
            })), Z(e.state), ee(n), U(O), pe(K(e, "unbind")))
        }, function(e, n) {
            if (0 === e) {
                var r = !1;
                n(0, (function(e) {
                    2 === e && (r = !0)
                })), n(1, t()), r || n(2)
            }
        }));
        var t
    }
    var yn = function(e, n) {
        return Q(wn(e, n), se(1))
    };

    function bn(e) {
        return Q(wn(e, (function(e) {
            return Oe(e, "availability")
        })), J(y))
    }
    var kn = "liveChatChatId";

    function Cn(e) {
        return Q(wn(e, (function(e) {
            return ke(e, kn).active
        })), se(1), ne((function(n) {
            return n ? Q(wn(e, (function(e) {
                return ke(e, kn).properties.currentAgent
            })), J(Boolean), ee((function() {
                return n
            })), le(1)) : ie(n)
        })))
    }

    function In(e, n) {
        return Q(K(e, "state_diff"), ee((function() {
            return Oe(e.state, "readyState")
        })), J((function(e) {
            return e === n
        })), le(1), ce)
    }
    var xn = "not_ready",
        En = "ready",
        Ln = "bootstrapped";

    function On(e, n) {
        return Q(In(e, En), ne(n))
    }

    function Tn(e, n) {
        return Q(In(e, Ln), ne(n))
    }

    function zn(e, n) {
        return Q(wn(e, (function(e) {
            return Oe(e, "invitation")
        })), ee((function(e) {
            return e[n]
        })), J(y), oe, J((function(e) {
            return e[1].length > e[0].length
        })), ee((function(e) {
            return b(e[1])
        })))
    }
    var An = function(e) {
            return e.actingAsDirectLink || e.isInCustomContainer
        },
        Mn = "liveChatChatId",
        Pn = function(e) {
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) t[r - 1] = arguments[r];
            return nn(fn.apply(void 0, [e].concat(t)))
        };

    function Sn(e, n, t) {
        window.LC_API = window.LC_API || {};
        var r = window.LC_API;
        Q(function(e) {
            return Q(wn(e, (function(e) {
                return _n(e, "maximized")
            })), J(y))
        }(e), X((function() {
            return Pn(r.on_chat_window_opened)
        }))), Q(Tn(e, (function() {
            return function(e) {
                return Q(wn(e, (function(e) {
                    return _n(e, "minimized")
                })), se(1), J(y))
            }(e)
        })), X((function() {
            return Pn(r.on_chat_window_minimized)
        }))), Q(function(e) {
            return Q(wn(e, (function(e) {
                return _n(e, "hidden")
            })), J(y))
        }(e), X((function() {
            return Pn(r.on_chat_window_hidden)
        }))), Q(bn(e), X((function(e) {
            return Pn(r.on_chat_state_changed, {
                state: "online" === e ? "online_for_chat" : "offline"
            })
        }))), Q(Tn(e, (function() {
            return Cn(e)
        })), J(y), X((function() {
            return Pn(r.on_chat_started, {
                agent_name: xe(e.state, ke(e.state, Mn).properties.currentAgent).name
            })
        }))), Q(Tn(e, (function() {
            return Cn(e)
        })), J(w), X((function() {
            return Pn(r.on_chat_ended)
        }))), Q(Tn(e, (function() {
            return K(e, "on_message")
        })), X((function(e) {
            return Pn(r.on_message, e)
        }))), Q(K(e, "widget_resize"), X((function(e) {
            return Pn(r.on_widget_resize, e.size)
        }))), Q(function(e) {
            return Q(K(e, "add_event"), J((function(e) {
                return e.event.properties.invitation
            })), ee((function(n) {
                var t = n.event;
                return {
                    event: t,
                    author: xe(e.state, t.author)
                }
            })))
        }(e), X((function(e) {
            var n = e.author,
                t = e.event,
                i = t.properties;
            Pn(r.on_message, {
                text: i.text,
                timestamp: t.timestamp,
                invitation: !0,
                user_type: "agent",
                agent_login: n.id,
                agent_name: n.name,
                received_first_time: i.receivedFirstTime
            })
        }))), pn(e, r, "on_postchat_survey_submitted"), pn(e, r, "on_prechat_survey_submitted"), pn(e, r, "on_rating_comment_submitted"), pn(e, r, "on_rating_submitted"), pn(e, r, "on_ticket_created"), r.set_custom_variables = function(n) {
            un("set_custom_variables", n), vn(e, hn(n))
        }, r.update_custom_variables = function(n) {
            un("update_custom_variables", n), mn(e, {
                properties: hn(n)
            })
        }, r.set_visitor_name = function(n) {
            un("set_visitor_name", n), mn(e, {
                name: gn(n)
            })
        }, r.set_visitor_email = function(n) {
            un("set_visitor_email", n), mn(e, {
                email: gn(n)
            })
        }, r.open_chat_window = r.show_full_view = r.open_mobile_window = function() {
            un("open_chat_window"), e.maximize()
        }, r.minimize_chat_window = function() {
            un("minimize_chat_window"), An(n) || e.minimize()
        }, r.hide_eye_catcher = function() {
            un("hide_eye_catcher"), e.call("hideEyeCatcher")
        }, r.hide_chat_window = function() {
            un("hide_chat_window"), An(n) || e.hide()
        }, r.agents_are_available = function() {
            return un("agents_are_available"), "online" === Oe(e.state, "availability")
        }, r.chat_window_maximized = function() {
            return un("chat_window_maximized"), _n(e.state, "maximized")
        }, r.chat_window_minimized = function() {
            return un("chat_window_minimized"), _n(e.state, "minimized")
        }, r.chat_window_hidden = function() {
            return un("chat_window_hidden"), _n(e.state, "hidden")
        }, r.visitor_queued = function() {
            return un("visitor_queued"), ke(e.state, Mn).properties.queued
        }, r.chat_running = function() {
            return un("chat_running"), ke(e.state, Mn).active
        }, r.visitor_engaged = function() {
            return un("visitor_engaged"), r.visitor_queued() || r.chat_running() || !!ke(e.state, Mn).properties.fakeAgentMessageId
        }, r.get_window_type = function() {
            return un("get_window_type"), "embedded"
        }, r.close_chat = function() {
            un("close_chat"), e.call("storeMethod", ["requestUpdateChat", Mn, {
                active: !1
            }])
        }, r.diagnose = ln(e, n, t), r.get_last_visit_timestamp = function() {
            return Oe(e.state).clientLastVisitTimestamp
        }, r.get_visits_number = function() {
            return Oe(e.state).clientVisitNumber
        }, r.get_page_views_number = function() {
            return Oe(e.state).clientPageViewsCount
        }, r.get_chats_number = function() {
            return Oe(e.state).clientChatNumber
        }, r.get_visitor_id = function() {
            return Ie(e.state).serverId
        }, r.get_chat_id = function() {
            return ke(e.state, Mn).serverId
        }, r.trigger_sales_tracker = function(e, n) {
            var t = a(n) ? n : [];
            "string" == typeof e && "" !== e && r.set_custom_variables([].concat(t, [{
                name: "__sales_tracker_" + e,
                value: "1"
            }]))
        }, r.scriptTagVersion = function() {
            return "LiveChatWidget" in window ? window.LiveChatWidget._v : "1.0"
        }, ["on", "off", "call", "get"].forEach((function(e) {
            r[e] = function() {
                var n = "LiveChatWidget" in window ? 'call it on the new "LiveChatWidget" global object.' : "upgrade your snippet code. You can do it by going to: https://my.livechatinc.com/settings/code";
                console.warn('[LiveChatWidget] In order to use "' + e + '" function you need to ' + n)
            }
        })), r.disable_sounds = function() {}
    }
    var jn = {
            handler: null,
            setHandler: function(e) {
                this.handler = e
            },
            navigate: function(e) {
                var n = this;
                nn((function() {
                    window.location.origin === function(e) {
                        var n = e.match(V);
                        return n && n[0]
                    }(e) && "function" == typeof n.handler ? n.handler(function(e) {
                        var n = e.match(H);
                        return "/" + (n && n[1] || "")
                    }(e)) : window.open(e, "_blank")
                }))
            }
        },
        Nn = "liveChatChatId",
        qn = function(e) {
            var t, r = e.trackerId,
                i = e.variables;
            return n({}, c(String, void 0 === i ? {} : i), ((t = {})["__sales_tracker_" + r] = "1", t))
        },
        Dn = function(e) {
            var t = e.id;
            return n({
                uniqueId: e.uniqueId
            }, t && {
                id: t
            })
        },
        Vn = function(e, n) {
            return v(null, "properties", l((function(e) {
                return e.properties.uniqueId === n
            }), be(e.state, Nn)))
        },
        Hn = function(e) {
            return n = function(e) {
                if ("call" !== e[0]) return "other";
                switch (e[1][0]) {
                    case "set_customer_email":
                        return "email";
                    case "set_customer_name":
                        return "name";
                    case "set_session_variables":
                    case "trigger_sales_tracker":
                    case "update_session_variables":
                        return "fields";
                    case "destroy":
                    case "hide":
                    case "maximize":
                    case "minimize":
                        return "visibility"
                }
            }, Object.keys(t = e).reduce((function(e, r) {
                var i = t[r],
                    o = n(i);
                return e[o] = e[o] || [], e[o].push(i), e
            }), {});
            var n, t
        };

    function Bn(e, t, r) {
        var i, o = De(),
            a = window.LiveChatWidget,
            u = function(e, n) {
                var t;
                return (t = {
                    get: _,
                    call: w,
                    on: m,
                    once: v,
                    off: o.off
                })[e].apply(t, n)
            },
            l = function(e, n) {
                return nn((function() {
                    return o.emit(e, n)
                }))
            },
            f = function(e) {
                void 0 === e && (e = []);
                var n = b(e);
                if (n) {
                    var t = n[1];
                    w(t[0], t[1])
                }
            },
            p = Hn(a._q);

        function h(n, t, r) {
            switch (t) {
                case "new_event":
                case "form_submitted":
                case "greeting_hidden":
                case "rating_submitted":
                case "visibility_changed":
                case "greeting_displayed":
                case "availability_changed":
                case "customer_status_changed":
                case "rich_message_button_clicked":
                    return void o[n](t, r);
                case "ready":
                    return void(Oe(e.state, "readyState") !== xn ? nn((function() {
                        return r({
                            state: _("state"),
                            customerData: _("customer_data")
                        })
                    })) : o[n](t, r));
                default:
                    return void console.error('[LiveChatWidget] callback "' + t + '" does not exist.')
            }
        }

        function m(e, n) {
            h("on", e, n)
        }

        function v(e, n) {
            h("once", e, n)
        }

        function _(n) {
            switch (n) {
                case "state":
                    var t = Oe(e.state);
                    return {
                        availability: t.availability,
                        visibility: t.visibility.state
                    };
                case "chat_data":
                    var r = ke(e.state, Nn),
                        i = r.serverId,
                        o = r.active,
                        a = r.properties,
                        u = Oe(e.state);
                    return {
                        chatId: i || null,
                        threadId: (o || a.ended) && ("lc2" === u.protocol ? i : a.lastThread) || null
                    };
                case "customer_data":
                    var c = Ie(e.state),
                        l = c.serverId,
                        f = c.name,
                        p = c.email,
                        h = c.properties,
                        m = Oe(e.state).isReturning,
                        v = ke(e.state, Nn),
                        g = v.active,
                        _ = v.properties,
                        w = _.queued,
                        y = _.fakeAgentMessageId,
                        b = d((function(e) {
                            return e.id === y
                        }), v.events);
                    return {
                        name: f,
                        email: p,
                        isReturning: m,
                        sessionVariables: h,
                        id: l,
                        status: w ? "queued" : g ? "chatting" : b && b.properties.invitation ? "invited" : "browsing"
                    };
                case "features":
                    return s(Oe(e.state).config.features);
                default:
                    return void console.error('[LiveChatWidget] property "' + n + '" not exists.')
            }
        }

        function w(n, r) {
            switch (n) {
                case "hide":
                case "maximize":
                case "minimize":
                    if (An(t)) return;
                    return void e[n](r);
                case "destroy":
                    return e.kill(), delete window.__lc_inited, delete window.LC_API, void delete window.LiveChatWidget;
                case "set_session_variables":
                    return void vn(e, c(String, r));
                case "set_customer_name":
                    return void mn(e, {
                        name: gn(r)
                    });
                case "set_customer_email":
                    return void mn(e, {
                        email: gn(r)
                    });
                case "update_session_variables":
                    return void mn(e, {
                        properties: c(String, r)
                    });
                case "trigger_sales_tracker":
                    return void vn(e, qn(r));
                case "hide_greeting":
                    return void e.call("hideGreeting");
                case "set_navigation_handler":
                    return void jn.setHandler(r);
                default:
                    return void console.error('[LiveChatWidget] method "' + n + '" not exists.')
            }
        }
        void 0 === (i = p.other) && (i = []), i.forEach((function(e) {
                u(e[0], e[1])
            })), f(p.visibility), f(p.name), f(p.email),
            function(e) {
                var t, r = (void 0 === (t = e) && (t = []), t.reduce((function(e, t) {
                        var r = t[1],
                            i = r[1];
                        switch (r[0]) {
                            case "set_session_variables":
                                return e.mode = "set", e.properties = i, e;
                            case "trigger_sales_tracker":
                                return e.mode = "set", e.properties = qn(i), e;
                            case "update_session_variables":
                                return "none" === e.mode && (e.mode = "update"), e.properties = n({}, e.properties, i), e
                        }
                    }), {
                        mode: "none"
                    })),
                    i = r.mode;
                "none" !== i && w(i + "_session_variables", r.properties)
            }(p.fields), a._q = [], a._h = u, a.scriptTagVersion = function() {
                return a._v
            }, a.diagnose = ln(e, t, r), Q(In(e, Ln), X((function() {
                var e;
                e = function(e) {
                    return "function" == typeof e && nn((function() {
                        return e(a)
                    }))
                }, Array.isArray(window.__lc_onready) && (window.__lc_onready.forEach(e), window.__lc_onready = {
                    push: e
                }), l("ready", {
                    state: _("state"),
                    customerData: _("customer_data")
                })
            }))), Q(Tn(e, (function() {
                return bn(e)
            })), X((function(e) {
                return l("availability_changed", {
                    availability: e
                })
            }))), Q(Tn(e, (function() {
                return yn(e, (function() {
                    return _("state").visibility
                }))
            })), X((function(e) {
                l("visibility_changed", {
                    visibility: e
                })
            }))), Q(Tn(e, (function() {
                return yn(e, (function() {
                    return _("customer_data").status
                }))
            })), X((function(e) {
                return l("customer_status_changed", {
                    status: e
                })
            }))), Q(Tn(e, (function() {
                return zn(e, "hiddenIds")
            })), ee((function(n) {
                return Vn(e, n)
            })), J(y), X((function(e) {
                return l("greeting_hidden", Dn(e))
            }))), Q(Tn(e, (function() {
                return zn(e, "displayedIds")
            })), ee((function(n) {
                return Vn(e, n)
            })), J(y), X((function(e) {
                return l("greeting_displayed", Dn(e))
            }))), Q(K(e, "on_rating_submitted"), X((function(e) {
                return l("rating_submitted", e)
            }))), Q($(K(e, "add_event"), K(e, "send_event")), ee((function(t) {
                var r = t.event,
                    i = r.timestamp,
                    o = r.properties,
                    a = xe(e.state, r.author),
                    u = !0 === o.invitation;
                return n({
                    timestamp: i,
                    type: r.type,
                    author: {
                        id: a.serverId,
                        type: a.id === Ee(e.state) ? "customer" : "agent"
                    }
                }, u && {
                    greeting: Dn(o)
                })
            })), J((function(e) {
                return g(e.type, ["message", "rich_message", "file"])
            })), X((function(e) {
                return l("new_event", e)
            }))), Q($(Q(K(e, "send_event"), ee((function(e) {
                var n = e.event,
                    t = n.type,
                    r = n.properties;
                if ("rich_message_postback" === t) return {
                    postbackId: "postback" in r ? r.postback.id : r.id,
                    eventId: r.eventId
                };
                if ("message" === t && r.triggeredBy) {
                    var i = r.triggeredBy;
                    return {
                        postbackId: i.button.postbackId,
                        eventId: i.event
                    }
                }
                return null
            })), J(y)), Q(K(e, "rich_greeting_button_clicked"), ee((function(e) {
                var n = e.event;
                return {
                    eventId: n.id,
                    postbackId: e.button.postbackId,
                    greeting: Dn(n.properties)
                }
            })))), X((function(e) {
                return l("rich_message_button_clicked", e)
            }))), Q($(Q(K(e, "on_ticket_created"), ee((function() {
                return "ticket"
            }))), Q(K(e, "on_prechat_survey_submitted"), ee((function() {
                return "prechat"
            }))), Q(K(e, "on_postchat_survey_submitted"), ee((function() {
                return "postchat"
            })))), X((function(e) {
                return l("form_submitted", {
                    type: e
                })
            })))
    }
    var Fn = function() {
            return window.GoogleAnalyticsObject || "ga"
        },
        Gn = function(e) {
            var n = e.event,
                t = e.label,
                r = e.nonInteraction,
                i = e.trackerName,
                o = window[Fn()];
            o && "function" == typeof o && o([i, "send"].filter(Boolean).join("."), {
                hitType: "event",
                eventCategory: "LiveChat",
                eventAction: n,
                eventLabel: t,
                nonInteraction: r
            })
        },
        Rn = {
            ga: Gn,
            gaAll: function(e) {
                var t = window[Fn()];
                if (t && "function" == typeof t.getAll) {
                    var r = t.getAll();
                    a(r) && r.forEach((function(t) {
                        Gn(n({}, e, {
                            trackerName: t && "function" == typeof t.get ? t.get("name") : null
                        }))
                    }))
                }
            },
            gaq: function(e) {
                var n = window._gaq;
                n && "function" == typeof n.push && n.push(["_trackEvent", "LiveChat", e.event, e.label, null, e.nonInteraction])
            },
            gtm: function(e) {
                var n = window.dataLayer;
                n && "function" == typeof n.push && n.push({
                    event: "LiveChat",
                    eventCategory: "LiveChat",
                    eventAction: e.event,
                    eventLabel: e.label,
                    nonInteraction: e.nonInteraction
                })
            },
            pageTracker: function(e) {
                var n = window.pageTracker;
                n && "function" == typeof n._trackEvent && n._trackEvent("LiveChat", e.event, e.label, null, e.nonInteraction)
            },
            urchinTracker: function(e) {
                var n = window.urchinTracker;
                n && "function" == typeof n && n(e.event)
            },
            gtag: function(e) {
                var n = window.gtag;
                n && "function" == typeof n && n("event", e.event, {
                    event_category: "LiveChat",
                    event_label: e.label,
                    non_interaction: e.nonInteraction
                })
            }
        },
        Wn = function(e) {
            var n = e.version,
                t = e.sendToAll;
            if (n && "function" == typeof Rn[n]) return t && "ga" === n ? "gaAll" : n;
            if ("object" == typeof window.pageTracker && "function" == typeof window.pageTracker._trackEvent) return "pageTracker";
            if ("function" == typeof window.urchinTracker) return "urchinTracker";
            if ("function" == typeof window.gtag) return "gtag";
            if (!e.omitGtm && "object" == typeof window.dataLayer && "function" == typeof window.dataLayer.push) return "gtm";
            if ("object" == typeof window._gaq) return "gaq";
            if (window.GoogleAnalyticsObject && "string" == typeof window.GoogleAnalyticsObject) return t ? "gaAll" : "ga";
            if ("function" == typeof window.ga) {
                var r = !1;
                if (window.ga((function(e) {
                        r = "object" == typeof e
                    })), r) return t ? "gaAll" : "ga"
            }
            return null
        },
        Un = {
            Chat: "LiveChat Chat started",
            "Automated greeting": "LiveChat Automated greeting displayed",
            "Ticket form": "LiveChat Ticket form displayed",
            "Ticket form filled in": "LiveChat Ticket form filled in",
            "Pre-chat survey": "LiveChat Pre-chat survey displayed",
            "Pre-chat survey filled in": "LiveChat Pre-chat survey filled in",
            "Post-chat survey": "LiveChat Post-chat survey displayed",
            "Post-chat survey filled in": "LiveChat Post-chat survey filled in"
        },
        Jn = function() {
            return window.mixpanel && "function" == typeof window.mixpanel.track && "function" == typeof window.mixpanel.register
        },
        Xn = {
            googleAnalytics: function(e) {
                var n = e.trackerName;
                return n ? Rn[n] : null
            },
            kissmetrics: function() {
                return null
            },
            mixpanel: function() {
                if (!Jn()) return null;
                return function(e) {
                    var n = e.event,
                        t = e.eventData,
                        r = e.persistentData;
                    if (Jn()) {
                        var i = window.mixpanel;
                        r && (i.register(r), !Jn()) || n in Un && i.track(Un[n], t)
                    }
                }
            }
        },
        Yn = function(e, t) {
            var r = t.analytics,
                i = Object.keys(r).filter((function(e) {
                    return r[e].enabled
                })).map((function(e) {
                    var n = r[e],
                        t = Xn[e];
                    try {
                        return t(n)
                    } catch (e) {
                        return tn(e), null
                    }
                })).filter(Boolean);
            if (0 !== i.length) {
                var o = function(t, r) {
                    var o = void 0 === r ? {} : r,
                        a = o.group,
                        u = void 0 === a ? Oe(e.state, "group") : a,
                        c = o.nonInteraction,
                        s = void 0 !== c && c,
                        d = o.eventData,
                        l = void 0 === d ? {} : d,
                        f = o.persistentData,
                        p = void 0 === f ? null : f,
                        h = o.useDataAsLabel,
                        m = 0 !== u ? "Group ID: " + u : "(no group)",
                        v = void 0 !== h && h ? z(l).map((function(e) {
                            return e[0] + ": " + e[1]
                        })).join(", ") : m;
                    i.forEach((function(e) {
                        try {
                            e({
                                event: t,
                                nonInteraction: s,
                                label: v,
                                eventData: n({}, l, {
                                    group: m
                                }),
                                persistentData: p
                            })
                        } catch (e) {
                            tn(e)
                        }
                    }))
                };
                Q(wn(e, (function(e) {
                    return Oe(e, "readyState")
                })), J((function(e) {
                    return e === En
                })), le(1), ne((function() {
                    return Cn(e)
                })), J(Boolean), X((function() {
                    var n = Ie(e.state);
                    o("Chat", {
                        eventData: {
                            email: n.email,
                            name: n.name
                        },
                        persistentData: {
                            "performed chat": !0
                        }
                    })
                }))), e.on("add_event", (function(e) {
                    var n = e.event.properties;
                    n.invitation && n.receivedFirstTime && o("Automated greeting", {
                        nonInteraction: !0
                    })
                })), e.on("on_chat_booster_launched", (function(e) {
                    var n = e.title;
                    o("Chat Booster Launched: " + n, {
                        eventData: {
                            appId: e.id,
                            title: n
                        }
                    })
                })), e.on("on_prechat_survey_submitted", (function() {
                    o("Pre-chat survey filled in")
                })), e.on("on_postchat_survey_submitted", (function() {
                    o("Post-chat survey filled in")
                })), e.on("on_ticket_created", (function(e) {
                    o("Ticket form filled in", {
                        eventData: {
                            email: e.visitor_email
                        }
                    })
                })), e.on("rich_greeting_button_clicked", (function(e) {
                    o("Rich greeting button clicked", {
                        eventData: {
                            buttonText: e.button.text,
                            greetingId: e.event.properties.id
                        },
                        useDataAsLabel: !0
                    })
                })), ["prechat", "postchat", "ticket", "offline"].forEach((function(n) {
                    var t;
                    Q($(K(e, "set_default_view"), K(e, "set_current_view")), J((function(e) {
                        return e.viewInfo && "Chat" === e.viewInfo.view && e.viewInfo.default === n
                    })), pe(K(e, "unbind")), (t = function() {
                        var t, r, i, o, a = {
                                prechat: ["on_prechat_survey_submitted", "Pre-chat survey"],
                                postchat: ["on_postchat_survey_submitted", "Post-chat survey"],
                                ticket: ["on_ticket_created", "Ticket form"],
                                offline: ["on_ticket_created", "Ticket form"]
                            }[n],
                            u = a[0];
                        return Q(function() {
                            for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
                            return function(e, t) {
                                if (0 === e) {
                                    var r = n.length;
                                    if (0 === r) return t(0, (function() {})), void t(2);
                                    var i, o = 0,
                                        a = function(e, n) {
                                            i(e, n)
                                        };
                                    ! function e() {
                                        o !== r ? n[o](0, (function(n, r) {
                                            0 === n ? (i = r, 0 === o ? t(0, a) : i(1)) : 2 === n && r ? t(2, r) : 2 === n ? (o++, e()) : t(n, r)
                                        })) : t(2)
                                    }()
                                }
                            }
                        }(ie(a[1]), re), (t = Q(wn(e, (function(e) {
                            return _n(e, "maximized")
                        })), J(Boolean)), o = void 0 === (i = (void 0 === r ? {} : r).size) ? 100 : i, function(e) {
                            return function(n, r) {
                                var i = [];
                                if (0 === n) {
                                    var a, u, c = !1;
                                    e(0, (function(e, n) {
                                        if (0 === e && (a = n, t(0, (function(e, n) {
                                                if (0 === e)(u = n)(1);
                                                else if (1 === e) {
                                                    c = !0, u(2);
                                                    var t = i.slice();
                                                    i.length = 0, t.forEach((function(e) {
                                                        return r(1, e)
                                                    }))
                                                }
                                            }))), 1 === e) return c ? void r(1, n) : (i.push(n), i.length > o && i.shift(), void a(1));
                                        r(e, n)
                                    }))
                                }
                            }
                        }), pe(K(e, u)))
                    }, function(e) {
                        return function(n, r) {
                            if (0 === n) {
                                var i, o = null,
                                    a = function(e, n) {
                                        if (0 !== e) return 1 === e ? (r(1, n), void o(1)) : void(2 === e && (o = null));
                                        (o = n)(1)
                                    },
                                    u = function(e, n) {
                                        2 === e && null !== o && o(2, n), i(e, n)
                                    };
                                e(0, (function(e, n) {
                                    if (0 === e) return i = n, void r(0, u);
                                    if (1 !== e) {
                                        if (2 === e) {
                                            if (r(2, n), null === o) return;
                                            o(2, n)
                                        }
                                    } else {
                                        if (null !== o) return;
                                        t(n)(0, a)
                                    }
                                }))
                            }
                        }
                    }), X((function(e) {
                        o(e)
                    })))
                }))
            }
        },
        $n = /\.(\w+)$/i,
        Kn = new Audio,
        Qn = {
            mp3: "audio/mpeg",
            ogg: "audio/ogg"
        },
        Zn = function(e) {
            var n, t = (n = e.match($n)) ? n[1].toLowerCase() : "";
            return t in Qn && "" !== Kn.canPlayType(Qn[t])
        },
        et = function(n) {
            return new e((function(e, t) {
                var r = new Audio(n);
                r.onloadeddata = function() {
                    e(r)
                }, r.onerror = t
            }))
        },
        nt = function(n) {
            var t, r = n.play();
            return (t = r) && "function" == typeof t.then ? r : e.resolve()
        },
        tt = function(e) {
            return "function" == typeof e.start && "function" == typeof e.stop
        },
        rt = function(e) {
            tt(e) ? e.start(0) : e.noteOn(0)
        },
        it = function() {
            var n = new(window.AudioContext || window.webkitAudioContext),
                t = !0,
                r = [],
                i = function(t) {
                    return new e((function(e, r) {
                        n.decodeAudioData(t, e, r)
                    }))
                },
                o = function(t) {
                    return {
                        play: function() {
                            var r = n.createBufferSource();
                            return r.connect(n.destination), r.buffer = t, {
                                playback: new e((function(e, t) {
                                    if (r.onended = function() {
                                            return e()
                                        }, rt(r), "running" !== n.state) {
                                        var i = Error("Playback failed, AudioContext is in incorrect state '" + n.state + "'");
                                        i.name = "PlaybackError", t(i)
                                    }
                                })),
                                stop: function() {
                                    ! function(e) {
                                        tt(e) ? e.stop(0) : e.noteOff(0)
                                    }(r)
                                }
                            }
                        }
                    }
                };
            return {
                preload: function(n) {
                    return function(n) {
                        return new e((function(e, t) {
                            var r = new XMLHttpRequest;
                            r.onload = function() {
                                e(r.response)
                            }, r.onerror = t, r.open("GET", n), r.responseType = "arraybuffer", r.send()
                        }))
                    }(n).then(i).then(o)
                },
                playSound: function(e) {
                    var n = e.play();
                    return t && r.push(n), n.playback
                },
                unlock: function() {
                    return new e((function(e) {
                        document.addEventListener("click", (function i() {
                            var o, a;
                            document.removeEventListener("click", i, !0), t && (r.forEach((function(e) {
                                e.stop()
                            })), r = [], t = !1), n.resume(), o = n.createBuffer(1, 1, 22050), (a = n.createBufferSource()).buffer = o, a.connect(n.destination), rt(a), e()
                        }), !0)
                    }))
                }
            }
        },
        ot = function() {
            return "function" == typeof window.webkitAudioContext ? (n = it(), {
                play: function(e) {
                    var r = t(e).then(n.playSound);
                    return r.catch(E), r
                },
                preload: t = x((function(e) {
                    var t = n.preload(e);
                    return t.catch(E), t
                })),
                unlock: function() {
                    return n.unlock()
                }
            }) : function() {
                var n = x(et);
                return {
                    play: function(e) {
                        return n(e).then(nt)
                    },
                    preload: n,
                    unlock: function() {
                        return e.resolve()
                    }
                }
            }();
            var n, t
        },
        at = function(e) {
            return Object.keys(e).reduce((function(n, t) {
                var r, i = d((function(e) {
                    return Zn(e)
                }), a(r = e[t]) ? r : [r]);
                return n[t] = i, n
            }), {})
        },
        ut = "new_message",
        ct = function() {
            var e, n, t, r, i = ((e = {}).new_message = ["https://cdn.livechatinc.com/widget/static/media/new_message.a37211a6.ogg", "https://cdn.livechatinc.com/widget/static/media/new_message.c597c3a2.mp3"], n = e, t = ot(), r = at(n), {
                play: function(e) {
                    t.play(r[e]).then(E, E)
                },
                preload: function(e) {
                    t.preload(r[e]).then(E, E)
                },
                unlock: function() {
                    return t.unlock()
                }
            });
            return i.unlock().then((function() {
                return e = 2e3, n = function(e) {
                        i.play(e)
                    }, t = 0,
                    function() {
                        var r = Date.now();
                        e > r - t || (t = Date.now(), n.apply(void 0, arguments))
                    };
                var e, n, t
            }))
        },
        st = function(e, n) {
            return void 0 === n && (n = !1), n && e.__unsafeProperties.group.hasCustomMobileSettings
        },
        dt = function(e, n) {
            var t = e.__unsafeProperties.group;
            return st(e, n) ? t.screenPositionOnMobile : t.screenPosition
        },
        lt = function(e, n) {
            var t = e.__unsafeProperties.group;
            return st(e, n) ? {
                x: t.offsetXOnMobile,
                y: t.offsetYOnMobile
            } : {
                x: t.offsetX,
                y: t.offsetY
            }
        },
        ft = function(e) {
            return !!e && /native code/.test(e + "")
        },
        pt = function() {
            return /mobile/gi.test(navigator.userAgent) && !("MacIntel" === navigator.platform && g("iPad", navigator.userAgent))
        },
        ht = function(e, n) {
            var t = function() {
                    n() || A(We, e)
                },
                r = function() {
                    n() || A(Ue, e)
                };
            if ("onbeforeprint" in window) window.addEventListener("beforeprint", t), window.addEventListener("afterprint", r);
            else if (ft(window.matchMedia)) {
                var i = window.matchMedia("print");
                i && i.addListener((function(e) {
                    e.matches ? t() : r()
                }))
            }
        },
        mt = function(e, t, r) {
            var i = t.__unsafeProperties.group.eyeCatcher;
            if (i.enabled && ! function(e, n) {
                    var t = e.__unsafeProperties.group;
                    return st(e, n) ? t.disabledMinimizedOnMobile : t.disabledMinimized
                }(t)) {
                var o, a, u = function(e) {
                        var n = Oe(e);
                        return n.eyeCatcher.hidden || "minimized" !== n.visibility.state || "online" !== n.availability || n.readyState === xn
                    },
                    c = function() {
                        o && (N(o), o = null), clearTimeout(a)
                    },
                    s = function() {
                        var o, a = He("div", Xe),
                            s = dt(t);
                        A(((o = {
                            bottom: i.y + "px"
                        })[s] = i.x + "px", o), a);
                        var d, l = He("div", Ye);
                        15 > i.x && "right" === s && A(((d = {})[s] = 10 - i.x + "px", d), l);
                        l.innerHTML = "&times;";
                        var f = He("div", $e),
                            p = n({}, Ke, {
                                src: i.src,
                                alt: r.embedded_chat_now
                            });
                        i.srcset && (p.srcset = z(i.srcset).map((function(e) {
                            return e[1] + " " + e[0]
                        })).join(", "));
                        var h = He("img", p);
                        return f.appendChild(h), h.addEventListener("load", (function() {
                            A({
                                width: h.width + "px"
                            }, f)
                        })), h.addEventListener("error", c), a.appendChild(l), a.appendChild(f), ht(a, (function() {
                            return u(e.state)
                        })), document.body.appendChild(a), ft(window.matchMedia) && window.matchMedia("(hover: none)").matches ? A({
                            display: "block"
                        }, l) : (a.addEventListener("mouseover", (function() {
                            A({
                                display: "block"
                            }, l)
                        })), a.addEventListener("mouseout", (function() {
                            A({
                                display: "none"
                            }, l)
                        }))), a.addEventListener("click", (function(n) {
                            n.stopPropagation(), n.preventDefault(), e.maximize()
                        })), l.addEventListener("mouseover", (function() {
                            A({
                                color: "#444"
                            }, l)
                        })), l.addEventListener("mouseout", (function() {
                            A({
                                color: "#000"
                            }, l)
                        })), l.addEventListener("click", (function(n) {
                            n.preventDefault(), n.stopPropagation(), e.call("hideEyeCatcher")
                        })), a
                    };
                Q(wn(e, u), de({
                    next: function(e) {
                        e ? c() : a = setTimeout((function() {
                            o = s()
                        }), 430)
                    },
                    complete: c
                }))
            }
        },
        vt = function(e) {
            e.innerHTML = ""
        },
        gt = function(e, n) {
            var t = document.querySelectorAll(".livechat_button"),
                r = g(n.groupId, n.onlineGroupIds);
            [].forEach.call(t, (function(t) {
                var i = t.getAttribute("data-id"),
                    o = d((function(e) {
                        return e.id === i
                    }), n.buttons);
                if (o) {
                    var a = v("#", "0.href", t);
                    "image" === o.type ? function(e, n) {
                        var t = e.text,
                            r = e.url,
                            i = e.src;
                        vt(n);
                        var o = He("a", {
                                href: r
                            }),
                            a = He("img", {
                                src: i,
                                alt: t,
                                title: t
                            });
                        o.appendChild(a), n.appendChild(o)
                    }({
                        url: a,
                        text: t.textContent,
                        src: r ? o.onlineValue : o.offlineValue
                    }, t) : function(e, n) {
                        var t = e.text,
                            r = e.url;
                        vt(n);
                        var i = He("a", {
                            href: r
                        });
                        i.appendChild(document.createTextNode(t)), n.appendChild(i)
                    }({
                        url: a,
                        text: r ? o.onlineValue : o.offlineValue
                    }, t), t.children[0].addEventListener("click", (function(n) {
                        n.preventDefault(), e.maximize()
                    }))
                }
            }))
        },
        _t = function(e) {
            return e.replace(/\?+$/, "")
        },
        wt = function() {
            return {
                title: document.title,
                url: _t(document.location + ""),
                referrer: document.referrer
            }
        },
        yt = function(e) {
            var n;
            Q((n = 2e3, function(e, t) {
                if (0 === e) {
                    var r = 0,
                        i = setInterval((function() {
                            t(1, r++)
                        }), n);
                    t(0, (function(e) {
                        2 === e && clearInterval(i)
                    }))
                }
            }), ee(wt), U((function(e, n) {
                return e.url === n.url
            })), pe(K(e, "unbind")), X((function(n) {
                e.call("storeMethod", ["setApplicationState", {
                    page: n
                }])
            })))
        };
    var bt = function(e) {
            Q(On(e, (function() {
                return K(e, "add_event")
            })), J((function(e) {
                var n = e.event;
                return "custom" === n.type && n.properties.customId && -1 !== n.properties.customId.indexOf("cyber-finger-snapshot-request-")
            })), X((function(n) {
                var t, r = n.event.properties.customId.replace("cyber-finger-snapshot-request-", "");
                try {
                    var i = (t = (void 0)[0], JSON.stringify(t));
                    e.call("storeMethod", ["emit", "send_snapshot", {
                        snapshot: i,
                        requestId: r
                    }])
                } catch (e) {}
            })))
        },
        kt = window.Wix,
        Ct = function() {
            return new e((function(e) {
                kt.getSiteInfo((function(n) {
                    var t = n.url,
                        r = n.referrer || n.referer || "";
                    n.baseUrl && -1 === t.indexOf(n.baseUrl) && (t = n.baseUrl), e({
                        title: n.pageTitle,
                        referrer: r,
                        url: t
                    })
                }))
            }))
        },
        It = function(e) {
            var n, t, r, i;
            Q((n = function() {
                return !!document.hasFocus && document.hasFocus()
            }, t = function(e, t) {
                if (0 === e) {
                    var r = !1;
                    t(0, (function(e) {
                        2 === e && (r = !0)
                    })), t(1, n()), r || t(2)
                }
            }, r = ee((function() {
                return !0
            }))(Y(window, "focus")), i = ee((function() {
                return !1
            }))(Y(window, "blur")), $(t, r, i)), pe(K(e, "unbind")), X((function(n) {
                e.emit("focus", n)
            })))
        },
        xt = null,
        Et = !1;

    function Lt() {
        return e = /^Mac/, null != window.navigator && e.test(window.navigator.platform);
        var e
    }

    function Ot(e) {
        Et = !0,
            function(e) {
                return !(e.metaKey || !Lt() && e.altKey || e.ctrlKey)
            }(e) && (xt = "keyboard")
    }

    function Tt(e) {
        xt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Et = !0)
    }

    function zt(e) {
        (function(e) {
            return !(0 !== e.mozInputSource || !e.isTrusted) || 0 === e.detail && !e.pointerType
        })(e) && (Et = !0, xt = "virtual")
    }

    function At(e) {
        e.target !== window && e.target !== document && (Et || (xt = "keyboard"), Et = !1)
    }

    function Mt() {
        Et = !1
    }
    var Pt = (document.addEventListener("keydown", Ot, !0), document.addEventListener("keyup", Ot, !0), document.addEventListener("click", zt, !0), window.addEventListener("focus", At, !0), window.addEventListener("blur", Mt, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", Tt, !0), document.addEventListener("pointermove", Tt, !0), document.addEventListener("pointerup", Tt, !0)) : (document.addEventListener("mousedown", Tt, !0), document.addEventListener("mousemove", Tt, !0), document.addEventListener("mouseup", Tt, !0)), function() {
        document.removeEventListener("keydown", Ot, !0), document.removeEventListener("keyup", Ot, !0), document.removeEventListener("click", zt, !0), window.removeEventListener("focus", At, !0), window.removeEventListener("blur", Mt, !1), "undefined" != typeof PointerEvent ? (document.removeEventListener("pointerdown", Tt, !0), document.removeEventListener("pointermove", Tt, !0), document.removeEventListener("pointerup", Tt, !0)) : (document.removeEventListener("mousedown", Tt, !0), document.removeEventListener("mousemove", Tt, !0), document.removeEventListener("mouseup", Tt, !0))
    });

    function St(e) {
        if ("Google Inc." === navigator.vendor && "Win32" === navigator.platform) {
            var n, t, r, i = e.frame,
                o = (n = 100, t = function() {
                    A(S(["width"], i), i), requestAnimationFrame((function() {
                        A({
                            width: Ze.style.width
                        }, i)
                    }))
                }, function() {
                    clearTimeout(r);
                    for (var e = arguments.length, i = Array(e), o = 0; e > o; o++) i[o] = arguments[o];
                    r = setTimeout.apply(void 0, [t, n].concat(i))
                });
            document.addEventListener("scroll", o);
            e.on("unbind", (function n() {
                e.off("unbind", n), document.removeEventListener("scroll", o)
            }))
        }
    }
    var jt = {
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            overflowY: "hidden"
        },
        Nt = function(e) {
            var n = document.querySelector('meta[name="viewport"]') || function() {
                    var e = He("meta", {
                        name: "viewport"
                    });
                    return document.getElementsByTagName("head")[0].appendChild(e), e
                }(),
                t = null,
                r = function() {
                    var e, r = n.content,
                        i = (e = document.body, Object.keys(jt).reduce((function(n, t) {
                            return n[t] = e.style[t], n
                        }), {})),
                        o = document.documentElement.scrollTop;
                    return n.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0", A(jt, document.body),
                        function() {
                            t = null, A(i, document.body), n.content = r, document.documentElement.scrollTop = o
                        }
                };
            _n(e.state, "maximized") && (t = r()), Q(wn(e, (function(e) {
                return _n(e, "maximized")
            })), oe, de({
                next: function(e) {
                    e[1] ? t = r() : t()
                },
                complete: function() {
                    t && t()
                }
            }))
        },
        qt = pt(),
        Dt = function(e, n) {
            if (e.iframeAddress) return e.iframeAddress;
            var t = "https://secure" + ((1520 === e.licenseId ? "-lc" : "") + ".livechatinc.com");
            if (n.region && (t = t.replace("secure", "secure-" + n.region)), "3" === n.__unsafeProperties.license.protocolVersion && .5 >= Math.random()) return t + "/customer/action/open_chat";
            var r = t + "/licence/" + e.licenseId + "/v2/open_chat.cgi";
            return e.uniqueGroups && (r = r.replace("/" + e.licenseId + "/", "/g" + e.licenseId + "_" + n.groupId + "/")), r
        },
        Vt = function(e, n, t) {
            var r = !!e.customContainer;
            return {
                page: n,
                license: e.licenseId,
                region: t.region,
                group: t.groupId,
                requestedGroup: e.requestedGroupId,
                customer: e.customer,
                hidden: !(e.actingAsDirectLink || r) && function(e) {
                    var n = e.__unsafeProperties.group;
                    return qt && n.hasCustomMobileSettings ? n.initiallyHiddenOnMobile : n.initiallyHidden
                }(t),
                uniqueGroups: e.uniqueGroups,
                analytics: {
                    googleAnalytics: {
                        enabled: !!t.integrations.analytics,
                        trackerName: Wn(e.gaParams)
                    },
                    kissmetrics: {
                        enabled: !!t.integrations.kissmetrics
                    },
                    mixpanel: {
                        enabled: !!t.integrations.mixpanel
                    }
                },
                actingAsDirectLink: e.actingAsDirectLink,
                isInCustomContainer: r,
                clientLimitExceeded: t.clientLimitExceeded,
                integrationName: e.integrationName,
                iframeAddress: Dt(e, t)
            }
        },
        Ht = function() {
            var e = "lc_get_time_" + h();
            window.performance && "function" == typeof window.performance.mark && window.performance.mark(e);
            var n = performance.getEntriesByName(e)[0].startTime;
            return performance.clearMarks(e), n
        },
        Bt = function() {
            if ("undefined" == typeof PerformanceObserver) return null;
            var n = Ht(),
                t = [],
                r = new PerformanceObserver((function(e) {
                    t.push.apply(t, e.getEntries())
                }));
            r.observe({
                entryTypes: ["longtask"]
            });
            var i = function() {
                var e, r = b(t);
                return r ? (e = r, Ht() - e.startTime + e.duration) : Ht() - n
            };
            return {
                disconnect: function() {
                    return r.disconnect()
                },
                getLongTasks: function() {
                    return [].concat(t)
                },
                waitForIdle: function(n) {
                    return new e((function(e) {
                        ! function o() {
                            t.push.apply(t, r.takeRecords());
                            var a = i();
                            n > a ? setTimeout(o, Math.ceil(n - a)) : e()
                        }()
                    }))
                }
            }
        },
        Ft = function(n) {
            void 0 === n && (n = "first-contentful-paint");
            var t, r = Bt();
            return r ? (t = n, new e((function(e) {
                var n = performance.getEntriesByName(t);
                if (_(n))
                    if ("undefined" != typeof PerformanceObserver) {
                        var r = setTimeout((function() {
                                i.disconnect(), e(null)
                            }), 6e4),
                            i = new PerformanceObserver((function(n) {
                                var o = d((function(e) {
                                    return e.name === t
                                }), n.getEntries());
                                o && (i.disconnect(), clearTimeout(r), e(o))
                            }));
                        i.observe({
                            entryTypes: ["paint"]
                        })
                    } else e(null);
                else e(n[0])
            }))).then((function(e) {
                return e ? r.waitForIdle(5e3).then((function() {
                    return r.disconnect(), r.getLongTasks()
                })) : null
            })) : e.resolve(null)
        },
        Gt = function(e) {
            var n = performance.getEntriesByName(e);
            return 1 !== n.length ? null : n[0]
        },
        Rt = function(e, n) {
            return e && n ? Math.abs(n.startTime - e.startTime) : null
        },
        Wt = function(e) {
            if (!e) return null;
            var n = performance.getEntriesByType("navigation");
            return e.startTime - (_(n) ? performance.timing.domContentLoadedEventStart - performance.timing.navigationStart : n[0].domContentLoadedEventStart)
        },
        Ut = function() {
            if (!Math.floor(1e3 * Math.random())) {
                var e = Ft().then((function(e) {
                    return e ? T(e.filter((function(e) {
                        return g(".livechatinc.com", e.attribution[0].containerSrc)
                    })).map((function(e) {
                        return e.duration
                    }))) : null
                }));
                return {
                    getLogs: function() {
                        return e.then((function(e) {
                            var n, t = 1 !== (n = performance.getEntriesByType("resource").filter((function(e) {
                                    return /livechatinc\.com\/(.+\/)?tracking.js/.test(e.name)
                                }))).length ? null : n[0],
                                r = Gt("lc_bridge_init"),
                                i = Gt("lc_bridge_ready");
                            return c((function(e) {
                                return e && Number(e.toFixed(2))
                            }), {
                                timeFromTrackingStart: Rt(t, i),
                                timeFromBridgeInit: Rt(r, i),
                                timeFromDomContentLoaded: Wt(i),
                                totalBlockingTimeContributedToOurScript: e
                            })
                        }))
                    }
                }
            }
        };

    function Jt(n, t) {
        return t = t || {}, new e((function(r, i) {
            var o = new XMLHttpRequest,
                a = [],
                u = [],
                c = {},
                s = function n() {
                    return {
                        ok: 2 == (o.status / 100 | 0),
                        statusText: o.statusText,
                        status: o.status,
                        url: o.responseURL,
                        text: function() {
                            return e.resolve(o.responseText)
                        },
                        json: function() {
                            return e.resolve(o.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return e.resolve(new Blob([o.response]))
                        },
                        clone: n,
                        headers: {
                            keys: function() {
                                return a
                            },
                            entries: function() {
                                return u
                            },
                            get: function(e) {
                                return c[e.toLowerCase()]
                            },
                            has: function(e) {
                                return e.toLowerCase() in c
                            }
                        }
                    }
                };
            for (var d in o.open(t.method || "get", n, !0), o.onload = function() {
                    o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, n, t) {
                        a.push(n = n.toLowerCase()), u.push([n, t]), c[n] = c[n] ? c[n] + "," + t : t
                    })), r(s())
                }, o.onerror = i, o.withCredentials = "include" == t.credentials, t.headers) o.setRequestHeader(d, t.headers[d]);
            o.send(t.body || null)
        }))
    }
    var Xt = {};

    function Yt(t, r) {
        var i = void 0 === r ? {} : r,
            o = i.query,
            a = void 0 === o ? {} : o,
            u = i.jsonpParam,
            c = void 0 === u ? "jsonp" : u,
            s = i.callbackName;
        return new e((function(e, r) {
            j().then((function(i) {
                var o, u = document.createElement("script"),
                    d = s || m(Xt);
                Xt[d] = !0;
                var l = "__" + d;
                window[l] = function(n) {
                    delete Xt[d], delete window[l], N(u), e(n)
                }, u.src = t + "?" + q(n({}, a, ((o = {})[c] = l, o))), u.addEventListener("error", (function() {
                    setTimeout((function() {
                        return r(Error("JSONP request failed."))
                    }), 100)
                })), i.appendChild(u)
            }))
        }))
    }
    var $t, Kt, Qt, Zt, er = "__test_storage_support__",
        nr = "@@test",
        tr = function() {
            var e = Object.create(null);
            return {
                getItem: function(n) {
                    var t = e[n];
                    return "string" == typeof t ? t : null
                },
                setItem: function(n, t) {
                    e[n] = t
                },
                removeItem: function(n) {
                    delete e[n]
                },
                clear: function() {
                    e = Object.create(null)
                }
            }
        }(),
        rr = (function(e) {
            void 0 === e && (e = "local");
            try {
                var n = "session" === e ? window.sessionStorage : window.localStorage;
                return n.setItem(er, nr), n.getItem(er) !== nr ? !1 : (n.removeItem(er), !0)
            } catch (e) {
                return !1
            }
        }() && window, Object.freeze({
            success: !0
        }), ($t = {}).CONNECTION_LOST = "Connection lost.", $t.MISDIRECTED_CONNECTION = "Connected to wrong region.", function(e) {
            return e.map((function(e) {
                switch (e.type) {
                    case "group_chooser":
                        return n({}, e, {
                            options: e.options.map((function(e) {
                                var t = e.group_id;
                                return n({}, Te(e, ["group_id"]), {
                                    groupId: t
                                })
                            }))
                        });
                    case "rating":
                        var t = e.comment_label;
                        return n({}, Te(e, ["comment_label"]), {
                            commentLabel: t
                        });
                    default:
                        return e
                }
            }))
        }),
        ir = function(e) {
            var t, r;
            return {
                id: e.id,
                fields: !("id" in e.fields[0]) ? (t = e.fields, r = t.map((function(e, t) {
                    return n({}, e, {
                        id: t + ""
                    })
                })), rr(r)) : rr(e.fields)
            }
        },
        or = function(e) {
            var n = function(e) {
                return e.replace(F, "")
            }(e);
            return "https://" + (!g("cdn.livechatinc.com/cloud/?uri", n) && !g(".livechat-static.com/", n) ? "cdn.livechatinc.com/cloud/?" + q({
                uri: "https://" + n
            }) : n)
        },
        ar = /\.([a-z]{1,})$/i,
        ur = function(e) {
            var n = e.__priv,
                t = {
                    enabled: !0,
                    x: parseInt(n.group["embedded_chat.eye_grabber.x"]) + 15,
                    y: parseInt(n.group["embedded_chat.eye_grabber.y"]),
                    src: or(n.group["embedded_chat.eye_grabber.path"])
                };
            if (-1 !== t.src.indexOf("/default/eyeCatchers/")) {
                var r = t.src.match(ar)[1];
                t.srcset = {
                    "1x": t.src,
                    "2x": t.src.replace(RegExp("\\." + r, "i"), "-2x." + r)
                }
            }
            return t
        },
        cr = function(e, n) {
            return "https://api" + ((r = (t = n).region) ? "-" + r : "") + ((1520 === t.licenseId ? ".staging" : "") + ".livechatinc.com/v3.3/customer/action/") + e;
            var t, r
        },
        sr = function e(t) {
            return Yt(cr("get_dynamic_configuration", t), {
                query: n({
                    license_id: t.licenseId,
                    url: t.url
                }, "number" == typeof t.groupId && {
                    group_id: t.groupId
                }, t.channelType && {
                    channel_type: t.channelType
                }, t.skipCodeInstallationTracking && {
                    test: 1
                })
            }).then((function(r) {
                if (r.error) switch (r.error.type) {
                    case "misdirected_request":
                        return e(n({}, t, {
                            region: r.error.data.region
                        }));
                    default:
                        var i = Error(r.error.message);
                        throw i.code = r.error.type.toUpperCase(), i
                }
                if (!r.domain_allowed) {
                    var o = Error("Current domain is not added to the allowlist.");
                    throw o.code = "DOMAIN_NOT_ALLOWED", o
                }
                return {
                    groupId: r.group_id,
                    clientLimitExceeded: r.client_limit_exceeded,
                    configVersion: r.config_version,
                    localizationVersion: r.localization_version,
                    onlineGroupIds: r.online_group_ids || [],
                    region: t.region || null
                }
            }))
        },
        dr = function(e) {
            return Yt(cr("get_localization", e), {
                callbackName: "lc_localization",
                query: n({
                    license_id: e.licenseId,
                    version: e.version,
                    language: e.language
                }, "number" == typeof e.groupId && {
                    group_id: e.groupId
                })
            }).then((function(e) {
                return k((function(e) {
                    return e.toLowerCase()
                }), e)
            }))
        },
        lr = function(e) {
            return e.sort((function(e, n) {
                return e.order - n.order
            })).map((function(e) {
                switch (e.type) {
                    case "header":
                        return n({}, e, {
                            label: e.value
                        });
                    case "checkbox":
                    case "radio":
                    case "select":
                        return n({}, e, {
                            options: e.options_data ? e.options_data.map((function(e, t) {
                                return n({}, e, {
                                    id: t + ""
                                })
                            })) : e.options.map((function(e, n) {
                                return {
                                    label: e,
                                    id: n + "",
                                    checked: !1
                                }
                            }))
                        });
                    case "skill":
                        return n({}, e, {
                            type: "group_chooser",
                            options: e.skills.map((function(e, n) {
                                return {
                                    label: e.label,
                                    groupId: e.skill_id,
                                    id: n + ""
                                }
                            }))
                        });
                    case "checkbox_for_email":
                        return n({}, e, e.options_data[0]);
                    case "facebookConnect":
                        return null;
                    default:
                        return e
                }
            })).filter(Boolean)
        },
        fr = function(e, t) {
            return {
                id: t.id,
                fields: "ticket" === e ? (r = t.fields, i = r.map((function(e, t) {
                    return n({}, e, {
                        id: t + ""
                    })
                })), lr(i)) : lr(t.fields)
            };
            var r, i
        },
        pr = function(e, n) {
            if (1520 === e) return "https://secure-lc.livechatinc.com";
            var t = "https://secure.livechatinc.com";
            return n ? function(e, n) {
                var t = e.match(/secure(-(labs|lc))/i);
                return "https://secure-" + n + (null !== t && t.length > 0 ? t[1] : "") + ".livechatinc.com"
            }(t, n) : t
        },
        hr = function e(t, r) {
            var i = r.licenseId,
                o = r.uniqueGroups,
                a = r.groupId,
                u = r.region,
                c = r.query,
                s = r.callbackName;
            return Yt(pr(i, u) + "/" + function(e) {
                var n = e.license;
                return "licence/" + (e.uniqueGroups ? "g" + n + "_" + (e.group || 0) : n)
            }({
                uniqueGroups: o,
                license: i,
                group: a
            }) + "/v2/" + t + ".js", {
                query: c,
                callbackName: s
            }).then((function(r) {
                if (r.error && "incorrect region" === r.error) return e(t, {
                    licenseId: i,
                    uniqueGroups: o,
                    groupId: a,
                    region: r.region,
                    query: c,
                    callbackName: s
                });
                if (r.error) throw Error(r.error);
                return n({}, r, {
                    region: u
                })
            }))
        },
        mr = function(e) {
            var t = e.licenseId,
                r = e.url,
                i = e.groupId,
                o = e.uniqueGroups,
                a = void 0 !== o && o,
                u = e.skipCodeInstallationTracking,
                c = void 0 !== u && u,
                s = e.channelType,
                d = n({
                    t: Date.now(),
                    url: r,
                    referrer: document.referrer
                }, "number" == typeof i && {
                    groups: i
                }, s && {
                    channel_type: s
                }, c && {
                    test: 1
                });
            return hr("get_dynamic_config", {
                licenseId: t,
                groupId: i,
                uniqueGroups: a,
                query: d
            }).then((function(e) {
                return [e, {
                    groupId: e.visitor.groups,
                    clientLimitExceeded: e.client_limit_exceeded,
                    onlineGroupIds: e.skills_online || [],
                    region: e.region,
                    configVersion: e.static_config_version
                }]
            }))
        },
        vr = function(e) {
            var n = e.licenseId,
                t = e.groupId,
                r = e.version,
                i = e.language;
            return Yt(pr(n, e.region) + "/licence/" + n + "/v2/localization." + i + "." + t + "." + r + ".js", {
                callbackName: "lc_localization"
            }).then((function(e) {
                return k((function(e) {
                    return e.toLowerCase()
                }), e.localization)
            }))
        },
        gr = pt(),
        _r = function(e) {
            return /px$/.test(e) ? Math.ceil(parseFloat(e)) + "px" : e
        },
        wr = function(e) {
            return gr ? {
                width: "100%",
                height: "100%"
            } : "modern" === e.__unsafeProperties.group.theme.name ? {
                width: "400px",
                height: "465px"
            } : {
                width: "352px",
                height: "652px"
            }
        },
        yr = function(e, n, t) {
            var r, i, o, a = lt(n, gr);
            return !e && t ? ((i = {})[dt(n, gr)] = "0", i.bottom = a.y + "px", i.maxHeight = "100%", i) : gr && e ? ((o = {})[dt(n, gr)] = "0", o.bottom = "0", o.maxHeight = "100%", o) : ((r = {})[dt(n, gr)] = a.x + "px", r.bottom = a.y + "px", r.maxHeight = "calc(100% - " + a.y + "px)", r)
        },
        br = function(e) {
            return e.style.setProperty("transition", "none", "important")
        },
        kr = function(e, t) {
            var r, i = He("div", Je),
                o = lt(e, gr),
                a = yr(t, e),
                u = wr(e);
            return A(n(((r = {
                width: u.width,
                height: u.height
            })[dt(e, gr)] = o.x + "px", r), a), i), i
        },
        Cr = function(e, n, t) {
            if (function(e) {
                    return Object.keys(e.properties.license).some((function(n) {
                        return e.properties.license[n].microphone
                    }))
                }(t)) {
                var r = {
                        "display-capture *;": !g("Chrome", navigator.userAgent),
                        "picture-in-picture *;": "PictureInPictureEvent" in window
                    },
                    i = Object.keys((o = Boolean, a = r, Object.keys(a).reduce((function(e, n) {
                        return o(a[n]) && (e[n] = a[n]), e
                    }), {}))).join(" ");
                Ze.allow += "; microphone *; camera *; " + i
            }
            var o, a;
            M(Ze, n), e.custom || A(Qe, n)
        },
        Ir = function(t, r, i, o, a) {
            var u, c, s = q({
                    license: r.license,
                    license_id: r.license,
                    group: r.group,
                    embedded: 1,
                    widget_version: 3,
                    unique_groups: Number(r.uniqueGroups),
                    custom_identity_provider: Number(!!a)
                }),
                l = {
                    kill: function() {
                        this._emit("widget_resize", {
                            size: {
                                width: "0px",
                                height: "0px"
                            }
                        }), this.unbind(), t.custom || N(t.element)
                    },
                    applyHiddenStyles: function() {
                        A(We, t.element)
                    },
                    isFocused: function() {
                        return !!document.hasFocus && document.hasFocus()
                    },
                    resize: function(e) {
                        var r = void 0 === e ? {} : e,
                            o = r.height,
                            a = r.maximized,
                            u = r.ignoreHorizontalOffset,
                            c = {
                                width: _r(r.width),
                                height: _r(o)
                            },
                            s = yr(a, i, u);
                        A(n({}, c, s), t.element);
                        var d = S(["width", "height"], t.element);
                        this._emit("widget_resize", {
                            size: c,
                            computedSize: d
                        })
                    },
                    show: function() {
                        A(Ue, t.element)
                    },
                    hide: function() {
                        this.call("hide")
                    },
                    minimize: function() {
                        this.call("minimize")
                    },
                    maximize: function() {
                        var e = this;
                        if (!!window.event && window.event.isTrusted && g(window.event.type, ["click", "pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"])) {
                            var n = document.activeElement;
                            n.addEventListener("blur", (function t() {
                                n.removeEventListener("blur", t), e.emit("host_focus_shifted")
                            })), this.call("maximize", {
                                modality: xt
                            })
                        } else this.call("maximize")
                    },
                    unbind: function() {
                        var e = this;
                        this.hide(), this.destroy(), this._emit("unbind"), this.off(), this.call = E, Object.keys(l).forEach((function(n) {
                            e[n] = E
                        })), Pt()
                    },
                    callIdentityProvider: function(e) {
                        return null == a ? void 0 : a[e]()
                    }
                },
                f = r.iframeAddress + "?" + s,
                p = new MutationObserver((function(e) {
                    return e.forEach((function(e) {
                        var n = d((function(e) {
                            return "IFRAME" === e.tagName && e.getAttribute("src") === f
                        }), e.addedNodes);
                        n && Cr(t, n, i)
                    }))
                }));
            return p.observe(t.element, {
                childList: !0
            }), new Ve({
                container: t.element,
                url: f,
                methods: l,
                allowVideoConferencing: !0,
                model: n({}, r, {
                    fullWidth: null == (u = t.size) ? void 0 : u.width,
                    fullHeight: null == (c = t.size) ? void 0 : c.height,
                    serverConfig: i,
                    ogServerConfig: o,
                    newServerConfig: i
                })
            }).then((function(n) {
                return e.all([n, Ge(n)])
            })).then((function(e) {
                var n = e[0];
                return p.disconnect(), n
            }))
        },
        xr = function e(t, r, i, o, a, u, c) {
            t.call("storeMethod", ["setLocalization", o]), i.custom || ht(i.element, (function() {
                    return _n(t.state, "hidden")
                })), gr || "wix" === r.integrationName || mt(t, a, o), br(t.frame),
                function(e, n, t) {
                    Sn(e, n, t), "LiveChatWidget" in window && Bn(e, n, t)
                }(t, r, a), Yn(t, r), Q(On(t, (function() {
                    return function(e) {
                        var n = !1;
                        e.on("iframe_sound_unlocked", (function() {
                            return n = !0
                        })), ct().then((function(t) {
                            n || (e.emit("bridge_sound_unlocked"), e.on("add_event", (function(n) {
                                var r = n.event;
                                Oe(e.state, "muted") || function(e, n) {
                                    return "system" !== e.author && !e.properties.welcomeMessage && e.author !== n && "custom" !== e.type
                                }(r, Ee(e.state)) && t(ut)
                            })))
                        }))
                    }(t), re
                })), X(E)), "wix" === r.integrationName ? function(e) {
                    kt.addEventListener(kt.Events.PAGE_NAVIGATION, (function() {
                        Ct().then((function(n) {
                            return e.call("storeMethod", ["setApplicationState", {
                                page: n
                            }])
                        }))
                    }))
                }(t) : yt(t), It(t), r.actingAsDirectLink || i.custom || function(e) {
                    Q(wn(e, (function(e) {
                        return _n(e, "hidden")
                    })), se(1), X((function(n) {
                        n ? e.applyHiddenStyles() : e.show()
                    })))
                }(t), St(t),
                function(e) {
                    var n = function() {
                        setTimeout((function() {
                            document.addEventListener("touchstart", E), setTimeout((function() {
                                document.removeEventListener("touchstart", E)
                            }), 500)
                        }), 500)
                    };
                    window.addEventListener("orientationchange", n), e.on("unbind", (function t() {
                        e.off("unbind", t), window.removeEventListener("orientationchange", n)
                    }))
                }(t), gt(t, a), gr && Nt(t), bt(t), t.on("protocol_upgraded", (function(s) {
                    var d = s.version;
                    t.unbind();
                    var l = n({}, a, {
                            __unsafeProperties: n({}, a.__unsafeProperties, {
                                license: n({}, a.__unsafeProperties.license, {
                                    protocolVersion: d
                                })
                            })
                        }),
                        f = n({}, u, {
                            license_properties: n({}, u.license_properties, {
                                lc_version: d
                            })
                        });
                    Ir(i, r, l, f, c).then((function(n) {
                        return e(n, r, i, o, l, f, c)
                    }))
                })), t.on("rich_greeting_button_clicked", (function(e) {
                    var n = e.button;
                    "url" === n.type && jn.navigate(n.value)
                }))
        },
        Er = function(t) {
            return sr(t).then((function(r) {
                var i;
                return e.all([r, (i = {
                    licenseId: t.licenseId,
                    groupId: r.groupId,
                    region: r.region,
                    version: r.configVersion
                }, Yt(cr("get_configuration", i), {
                    callbackName: "lc_static_config",
                    query: n({
                        license_id: i.licenseId,
                        version: i.version
                    }, "number" == typeof i.groupId && {
                        group_id: i.groupId
                    })
                }).then((function(e) {
                    var t = e.buttons,
                        r = e.allowed_domains,
                        i = e.prechat_form,
                        o = e.ticket_form,
                        a = e.__priv;
                    return n({}, Te(e, ["buttons", "allowed_domains", "prechat_form", "ticket_form", "__priv"]), i && {
                        prechatForm: ir(i)
                    }, o && {
                        ticketForm: ir(o)
                    }, {
                        buttons: t.map((function(e) {
                            return "image" === e.type ? {
                                id: e.id,
                                type: e.type,
                                onlineValue: or(e.online_value),
                                offlineValue: or(e.offline_value)
                            } : {
                                id: e.id,
                                type: e.type,
                                onlineValue: e.online_value,
                                offlineValue: e.offline_value
                            }
                        }))
                    }, r && {
                        allowedDomains: r
                    }, {
                        __unsafeProperties: n({}, a.s && {
                            s: !0
                        }, {
                            group: {
                                chatBoosters: a.group.chat_boosters,
                                disabledMinimized: "1" === a.group["chat_window.disable_minimized"],
                                disabledMinimizedOnMobile: "1" === a.group["chat_window.mobile_disable_minimized"],
                                disabledOnMobile: "1" === a.group["chat_window.hide_on_mobile"],
                                eyeCatcher: "1" === a.group["embedded_chat.display_eye_catcher"] ? ur(e) : {
                                    enabled: !1
                                },
                                hasAgentAvatarsEnabled: "1" === a.group["chat_window.display_avatar"],
                                hasCustomMobileSettings: "1" === a.group["chat_window.custom_mobile_settings"],
                                hasHiddenTrademark: "1" === a.group["chat_window.hide_trademark"],
                                hasSoundsEnabled: "0" === a.group["chat_window.disable_sounds"],
                                initiallyHidden: "1" === a.group["chat_window.hide_on_init"] || "1" === a.group["chat_window.disable_minimized"],
                                initiallyHiddenOnMobile: "1" === a.group["chat_window.mobile_hide_on_init"] || "1" === a.group["chat_window.mobile_disable_minimized"],
                                language: a.group.language,
                                linksUnfurlingEnabled: "1" === a.group.links_unfurling,
                                logo: "1" === a.group["chat_window.display_logo"] ? {
                                    enabled: !0,
                                    src: a.group["chat_window.logo_path"]
                                } : {
                                    enabled: !1
                                },
                                minimizedType: a.group["chat_window.theme.minimized"],
                                minimizedTypeOnMobile: a.group["chat_window.mobile_minimized_theme"],
                                offlineMessagesEnabled: "0" === a.group.tickets_enabled,
                                offsetX: parseInt(a.group["chat_window.offset_x"]),
                                offsetXOnMobile: parseInt(a.group["chat_window.mobile_offset_x"]),
                                offsetY: parseInt(a.group["chat_window.offset_y"]),
                                offsetYOnMobile: parseInt(a.group["chat_window.mobile_offset_y"]),
                                prechatFormAfterGreetingEnabled: "1" === a.group.pre_chat_survey_after_greeting,
                                ratingEnabled: "1" === a.group["rate_me.enabled"],
                                screenPosition: a.group["chat_window.screen_position"],
                                screenPositionOnMobile: a.group["chat_window.mobile_screen_position"],
                                transcriptButtonEnabled: "1" === a.group["chat_window.display_transcript_button"],
                                theme: {
                                    name: a.group["chat_window.new_theme.name"],
                                    customJson: a.group["chat_window.new_theme.custom_json"],
                                    agentbarBackgroundColor: a.group["chat_window.new_theme.agentbar_background_color"],
                                    agentbarText: a.group["chat_window.new_theme.agentbar_text"],
                                    agentMessageBackgroundColor: a.group["chat_window.new_theme.agent_message_color_background"],
                                    agentMessageColorText: a.group["chat_window.new_theme.agent_message_color_text"],
                                    backgroundColor: a.group["chat_window.new_theme.background_color"],
                                    ctaColor: a.group["chat_window.new_theme.cta_color"],
                                    minimizedColorBackground: a.group["chat_window.new_theme.minimized_color_background"],
                                    minimizedColorIcon: a.group["chat_window.new_theme.minimized_color_icon"],
                                    minimizedColorText: a.group["chat_window.new_theme.minimized_color_text"],
                                    systemMessageColor: a.group["chat_window.new_theme.system_message_color"],
                                    titlebarBackgroundColor: a.group["chat_window.new_theme.titlebar_background_color"],
                                    titlebarText: a.group["chat_window.new_theme.titlebar_text"],
                                    visitorMessageBackgroundColor: a.group["chat_window.new_theme.visitor_message_color_background"],
                                    visitorMessageColorText: a.group["chat_window.new_theme.visitor_message_color_text"]
                                }
                            },
                            license: {
                                continuousChatWidgetEnabled: "1" === a.license.continuous_chat_widget_enabled,
                                creditCardMaskingEnabled: "1" === a.license.mask_credit_cards,
                                customerHistoryEnabled: "1" === a.license.customer_history_enabled,
                                fileSharingEnabled: "1" === a.license["attachments.enable_for_visitors"],
                                inboundForwardingToHelpdeskEnabled: "1" === a.license["helpdesk.inbound_forwarding"],
                                nonProfit: "1" === a.license.non_profit,
                                protocolVersion: a.license.lc_version
                            }
                        })
                    })
                })))]).then((function(e) {
                    return {
                        serverConfig: n({}, e[0], e[1])
                    }
                }))
            }))
        },
        Lr = function(t) {
            return Er(t).catch((function(r) {
                if ("WRONG_PRODUCT_VERSION" === (null == r ? void 0 : r.code)) return function(t) {
                    return mr(t).then((function(r) {
                        var i, o, a, u = r[1],
                            c = u.groupId,
                            s = t.uniqueGroups,
                            d = s && t.groupId !== c && mr(n({}, t, {
                                groupId: c
                            }));
                        return e.all([d || r, (i = {
                            licenseId: t.licenseId,
                            groupId: c,
                            uniqueGroups: s,
                            region: u.region,
                            version: u.configVersion
                        }, o = i.groupId, a = i.uniqueGroups, hr("get_static_config." + o + "." + i.version, {
                            licenseId: i.licenseId,
                            groupId: o,
                            uniqueGroups: void 0 !== a && a,
                            region: i.region,
                            callbackName: "lc_static_config"
                        }).then((function(e) {
                            var t;
                            return [e, n({
                                localizationVersion: e.localization_url.split(".")[3]
                            }, (null == (t = e.domain_whitelist) ? void 0 : t.length) && {
                                allowedDomains: e.domain_whitelist
                            }, e.pre_chat_survey && {
                                prechatForm: fr("prechat", e.pre_chat_survey)
                            }, !e.embedded_chat.hide_when_offline && {
                                ticketForm: fr("ticket", e.offline_form)
                            }, {
                                buttons: e.buttons.map((function(e) {
                                    return "image" === e.type ? {
                                        id: e.id,
                                        type: e.type,
                                        onlineValue: or(e.online_value),
                                        offlineValue: or(e.offline_value)
                                    } : {
                                        id: e.id,
                                        type: e.type,
                                        onlineValue: e.online_value,
                                        offlineValue: e.offline_value
                                    }
                                })),
                                integrations: n({}, e.integrations.analytics && {
                                    analytics: e.integrations.analytics
                                }, e.integrations.kissmetrics && {
                                    kissmetrics: e.integrations.kissmetrics
                                }, e.integrations.mixpanel && {
                                    mixpanel: e.integrations.mixpanel
                                }),
                                properties: e.properties,
                                __unsafeProperties: n({}, e.s && {
                                    s: !0
                                }, {
                                    license: {
                                        continuousChatWidgetEnabled: "1" === e.license_properties.continuous_chat_widget_enabled,
                                        creditCardMaskingEnabled: "1" === e.license_properties.mask_credit_cards,
                                        customerHistoryEnabled: "1" === e.license_properties.customer_history_enabled,
                                        fileSharingEnabled: "1" === e.license_properties.attachments.enable_for_visitors,
                                        inboundForwardingToHelpdeskEnabled: "1" === e.license_properties.helpdesk.inbound_forwarding,
                                        nonProfit: "1" === e.license_properties.non_profit,
                                        protocolVersion: e.license_properties.lc_version
                                    },
                                    group: {
                                        chatBoosters: e.group_properties.chat_boosters,
                                        disabledMinimized: "1" === e.group_properties.chat_window.disable_minimized,
                                        disabledMinimizedOnMobile: "1" === e.group_properties.chat_window.mobile_disable_minimized,
                                        disabledOnMobile: "1" === e.group_properties.chat_window.hide_on_mobile,
                                        eyeCatcher: function() {
                                            if ("0" === e.group_properties.embedded_chat.display_eye_catcher) return {
                                                enabled: !1
                                            };
                                            var n = e.group_properties.embedded_chat.eye_grabber.path,
                                                t = {
                                                    enabled: !0,
                                                    x: parseInt(e.group_properties.embedded_chat.eye_grabber.x) + 15,
                                                    y: parseInt(e.group_properties.embedded_chat.eye_grabber.y),
                                                    src: or(n)
                                                };
                                            if (-1 !== t.src.indexOf("/default/eyeCatchers/")) {
                                                var r = t.src.match(/\.([a-z]{1,})$/i)[1];
                                                t.srcset = {
                                                    "1x": t.src,
                                                    "2x": t.src.replace(RegExp("\\." + r, "i"), "-2x." + r)
                                                }
                                            }
                                            return t
                                        }(),
                                        hasAgentAvatarsEnabled: "1" === e.group_properties.chat_window.display_avatar,
                                        hasCustomMobileSettings: "1" === e.group_properties.chat_window.custom_mobile_settings,
                                        hasHiddenTrademark: "1" === e.group_properties.chat_window.hide_trademark,
                                        hasSoundsEnabled: "0" === e.group_properties.chat_window.disable_sounds,
                                        initiallyHidden: "1" === e.group_properties.chat_window.hide_on_init || "1" === e.group_properties.chat_window.disable_minimized,
                                        initiallyHiddenOnMobile: "1" === e.group_properties.chat_window.mobile_hide_on_init || "1" === e.group_properties.chat_window.mobile_disable_minimized,
                                        language: e.lang,
                                        linksUnfurlingEnabled: "1" === e.group_properties.links_unfurling,
                                        logo: "1" === e.group_properties.chat_window.display_logo ? {
                                            enabled: !0,
                                            src: e.group_properties.chat_window.logo_path
                                        } : {
                                            enabled: !1
                                        },
                                        minimizedType: e.group_properties.chat_window.theme.minimized,
                                        minimizedTypeOnMobile: e.group_properties.chat_window.mobile_minimized_theme,
                                        offsetX: e.group_properties.chat_window.offset_x,
                                        offsetXOnMobile: e.group_properties.chat_window.mobile_offset_x,
                                        offsetY: e.group_properties.chat_window.offset_y,
                                        offsetYOnMobile: e.group_properties.chat_window.mobile_offset_y,
                                        prechatFormAfterGreetingEnabled: "1" === e.group_properties.pre_chat_survey_after_greeting,
                                        ratingEnabled: "1" === e.group_properties.rate_me.enabled,
                                        screenPosition: e.group_properties.chat_window.screen_position,
                                        screenPositionOnMobile: e.group_properties.chat_window.mobile_screen_position,
                                        offlineMessagesEnabled: "0" === e.group_properties.tickets_enabled,
                                        transcriptButtonEnabled: "1" === e.group_properties.chat_window.display_transcript_button,
                                        theme: {
                                            name: e.group_properties.chat_window.new_theme.name,
                                            customJson: e.group_properties.chat_window.new_theme.custom_json,
                                            agentbarBackgroundColor: e.group_properties.chat_window.new_theme.agentbar_background_color,
                                            agentbarText: e.group_properties.chat_window.new_theme.agentbar_text,
                                            agentMessageBackgroundColor: e.group_properties.chat_window.new_theme.agent_message_color_background,
                                            agentMessageColorText: e.group_properties.chat_window.new_theme.agent_message_color_text,
                                            backgroundColor: e.group_properties.chat_window.new_theme.background_color,
                                            ctaColor: e.group_properties.chat_window.new_theme.cta_color,
                                            minimizedColorBackground: e.group_properties.chat_window.new_theme.minimized_color_background,
                                            minimizedColorIcon: e.group_properties.chat_window.new_theme.minimized_color_icon,
                                            minimizedColorText: e.group_properties.chat_window.new_theme.minimized_color_text,
                                            systemMessageColor: e.group_properties.chat_window.new_theme.system_message_color,
                                            titlebarBackgroundColor: e.group_properties.chat_window.new_theme.titlebar_background_color,
                                            titlebarText: e.group_properties.chat_window.new_theme.titlebar_text,
                                            visitorMessageBackgroundColor: e.group_properties.chat_window.new_theme.visitor_message_color_background,
                                            visitorMessageColorText: e.group_properties.chat_window.new_theme.visitor_message_color_text
                                        }
                                    }
                                })
                            })]
                        })))]).then((function(e) {
                            var t = e[0],
                                r = t[0],
                                i = e[1],
                                o = i[0];
                            return {
                                serverConfig: n({}, t[1], i[1]),
                                ogServerConfig: n({}, r, o)
                            }
                        }))
                    }))
                }(t);
                throw r
            }))
        },
        Or = function(e, n) {
            var t = {
                name: null,
                email: null,
                properties: {}
            };
            if ("object" == typeof e && e) {
                var r = e.name,
                    i = e.email;
                "string" == typeof r && (t.name = r), "string" == typeof i && (t.email = i)
            }
            return Array.isArray(n) && (t.properties = hn(n)), t
        };
    window.__lc_inited || (window.__lc_inited = !0, 3 === [1].reduce((function(e, n) {
        return e + n
    }), 2) ? function(t) {
        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_init");
        var r = !1;
        window.LC_API = window.LC_API || {}, window.LC_API.is_loaded = function() {
            return r
        };
        var i = t.requestedGroupId,
            o = t.uniqueGroups,
            u = t.integrationName,
            c = t.customIdentityProviderInitializer,
            s = n({
                licenseId: t.licenseId,
                skipCodeInstallationTracking: t.skipCodeInstallationTracking,
                channelType: t.actingAsDirectLink ? "direct_link" : "code",
                url: _t(document.location + "")
            }, "number" == typeof i && {
                groupId: i
            }, {
                uniqueGroups: o
            });
        e.all([Lr(s), "wix" === u ? Ct() : wt(), j()]).then((function(i) {
            var o = i[0],
                u = o.serverConfig,
                s = o.ogServerConfig,
                d = i[1],
                l = i[2];
            if (on(u.allowedDomains, window.top === window ? window.location.hostname : document.referrer)) {
                if (!gr || !u.__unsafeProperties.group.disabledOnMobile || t.actingAsDirectLink) {
                    var f = Ut(),
                        p = function(e) {
                            if (null === e) return null;
                            var n = e();
                            return "object" != typeof n || "function" != typeof n.getToken || "function" != typeof n.getFreshToken || "function" != typeof n.hasToken || "function" != typeof n.invalidate ? (console.error("custom_identity_provider() does not return proper handlers. ({getFreshToken: () => Promise<Token>, getToken: () => Promise<Token>, hasToken: () => Promise<boolean>, invalidate: () => Promise<void> })"), null) : n
                        }(c),
                        h = Vt(t, d, u),
                        m = function(e, n) {
                            return e.customContainer ? {
                                custom: !0,
                                element: e.customContainer
                            } : {
                                custom: !1,
                                element: kr(n, e.actingAsDirectLink),
                                size: wr(n)
                            }
                        }(t, u),
                        v = {},
                        g = !1,
                        _ = rn("on_before_load"),
                        w = rn("on_after_load");
                    _((function(e) {
                        e.disable_sounds = E, e.mobile_is_detected = function() {
                            return gr
                        }, e.chat_running = function() {
                            return !1
                        }, e.visitor_engaged = function() {
                            return !1
                        }, e.agents_are_available = function() {
                            return -1 !== u.onlineGroupIds.indexOf(u.groupId)
                        }, e.get_window_type = function() {
                            return "embedded"
                        }, e.hide_chat_window = An(h) ? E : function() {
                            return g = !0
                        }, e.set_visitor_name = function(e) {
                            return v.name = gn(e)
                        }, e.set_visitor_email = function(e) {
                            return v.email = gn(e)
                        }, e.set_custom_variables = function(e) {
                            return v.properties = e ? hn(e) : {}
                        }, e.update_custom_variables = function(e) {
                            e && (v.properties = n({}, v.properties, hn(e)))
                        }
                    }));
                    var y = n({}, h, {
                        customer: n({}, h.customer, v),
                        hidden: h.hidden || g
                    });
                    m.custom || l.appendChild(m.element), window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bind_child"), e.all([Ir(m, y, u, s, p), ("3" === u.__unsafeProperties.license.protocolVersion ? dr : vr)({
                        licenseId: y.license,
                        groupId: y.group,
                        region: y.region,
                        version: u.localizationVersion,
                        language: u.__unsafeProperties.group.language
                    })]).then((function(e) {
                        var n = e[0],
                            t = e[1];
                        return m.custom || br(m.element), xr(n, y, m, t, u, s, p), Q(wn(n, (function(e) {
                            return Oe(e, "readyState")
                        })), J((function(e) {
                            return e === En
                        })), le(1), ee((function() {
                            return n
                        })), he)
                    })).then((function(e) {
                        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_ready"), f && f.getLogs().then((function(n) {
                            var t;
                            e.call("logInfo", "loading_time_measured", a(t = n) ? t.filter((function(e) {
                                return null != e
                            })) : Object.keys(t).reduce((function(e, n) {
                                var r = t[n];
                                return null != r && (e[n] = r), e
                            }), {}))
                        })), w((function() {
                            return r = !0
                        })), "3" !== u.__unsafeProperties.license.protocolVersion || Math.floor(10 * Math.random()) || setTimeout((function() {
                            var t;
                            (t = {
                                licenseId: h.license,
                                groupId: h.group,
                                region: h.region,
                                version: u.localizationVersion,
                                language: u.__unsafeProperties.group.language
                            }, Jt(cr("get_localization", t) + "?" + q(n({
                                license_id: t.licenseId,
                                version: t.version,
                                language: t.language
                            }, "number" == typeof t.groupId && {
                                group_id: t.groupId
                            }))).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                return k((function(e) {
                                    return e.toLowerCase()
                                }), e)
                            }))).catch((function() {
                                e.call("logInfo", "potential_csp_problem", {
                                    url: window.location + ""
                                })
                            }))
                        }), 1e4)
                    }))
                }
            } else console.log("[LiveChat] Current domain is not added to the allowed domains. LiveChat has been disabled.")
        })).catch((function(e) {
            switch (null == e ? void 0 : e.code) {
                case "ACCESS_NOT_RESOLVED":
                case "CUSTOMER_BANNED":
                    return void console.warn("[LiveChat] " + e.message);
                default:
                    throw e
            }
        }))
    }((Kt = window.__lc, {
        licenseId: parseInt(Kt.license),
        requestedGroupId: (Qt = void 0 !== Kt.group ? Kt.group : Kt.skill, Zt = "string" == typeof Qt ? parseInt(Qt, 10) : Qt, function(e) {
            return "number" == typeof e && e >= 0
        }(Zt) ? Zt : null),
        uniqueGroups: !1 === Kt.chat_between_groups,
        customer: Or(Kt.visitor, Kt.params),
        skipCodeInstallationTracking: 1 === Kt.test,
        integrationName: Kt.wix ? "wix" : "string" == typeof Kt.integration_name ? Kt.integration_name : null,
        actingAsDirectLink: !0 === Kt.direct_link,
        customContainer: Kt.custom_container || null,
        gaParams: {
            version: "string" == typeof Kt.ga_version ? Kt.ga_version : null,
            omitGtm: !!Kt.ga_omit_gtm,
            sendToAll: !!Kt.ga_send_to_all_trackers
        },
        customIdentityProviderInitializer: "function" == typeof Kt.custom_identity_provider ? Kt.custom_identity_provider : null,
        iframeAddress: null
    })) : console.error("[LiveChat] This site has overriden Array.prototype.reduce (for example by using Prototype library) to a version that is not compatible with Web standards. LiveChat code couldn't be initialized because of this."))
}();