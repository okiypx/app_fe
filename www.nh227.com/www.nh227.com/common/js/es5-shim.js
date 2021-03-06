/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.7/LICENSE
 */
(function(t, e) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(e)
    } else if (typeof exports === "object") {
        module.exports = e()
    } else {
        t.returnExports = e()
    }
})(this, function() {
    var t = Array.prototype;
    var e = Object.prototype;
    var r = Function.prototype;
    var n = String.prototype;
    var i = Number.prototype;
    var a = t.slice;
    var o = t.splice;
    var u = t.push;
    var l = t.unshift;
    var f = t.concat;
    var s = r.call;
    var c = e.toString;
    var p = Array.isArray || function yt(t) {
        return c.call(t) === "[object Array]"
    };
    var h = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
    var v;
    var g = Function.prototype.toString,
        y = function dt(t) {
            try {
                g.call(t);
                return true
            } catch (e) {
                return false
            }
        },
        d = "[object Function]",
        m = "[object GeneratorFunction]";
    v = function mt(t) {
        if (typeof t !== "function") {
            return false
        }
        if (h) {
            return y(t)
        }
        var e = c.call(t);
        return e === d || e === m
    };
    var b;
    var w = RegExp.prototype.exec,
        T = function bt(t) {
            try {
                w.call(t);
                return true
            } catch (e) {
                return false
            }
        },
        x = "[object RegExp]";
    b = function wt(t) {
        if (typeof t !== "object") {
            return false
        }
        return h ? T(t) : c.call(t) === x
    };
    var O;
    var j = String.prototype.valueOf,
        S = function Tt(t) {
            try {
                j.call(t);
                return true
            } catch (e) {
                return false
            }
        },
        N = "[object String]";
    O = function xt(t) {
        if (typeof t === "string") {
            return true
        }
        if (typeof t !== "object") {
            return false
        }
        return h ? S(t) : c.call(t) === N
    };
    var E = function Ot(t) {
        var e = c.call(t);
        var r = e === "[object Arguments]";
        if (!r) {
            r = !p(t) && t !== null && typeof t === "object" && typeof t.length === "number" && t.length >= 0 && v(t.callee)
        }
        return r
    };
    var I = function(t) {
        var e = Object.defineProperty && function() {
            try {
                var t = {};
                Object.defineProperty(t, "x", {
                    enumerable: false,
                    value: t
                });
                for (var e in t) {
                    return false
                }
                return t.x === t
            } catch (r) {
                return false
            }
        }();
        var r;
        if (e) {
            r = function(t, e, r, n) {
                if (!n && e in t) {
                    return
                }
                Object.defineProperty(t, e, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: r
                })
            }
        } else {
            r = function(t, e, r, n) {
                if (!n && e in t) {
                    return
                }
                t[e] = r
            }
        }
        return function n(e, i, a) {
            for (var o in i) {
                if (t.call(i, o)) {
                    r(e, o, i[o], a)
                }
            }
        }
    }(e.hasOwnProperty);
    var D = function jt(t) {
        var e = typeof t;
        return t === null || e !== "object" && e !== "function"
    };
    var M = {
        ToInteger: function St(t) {
            var e = +t;
            if (e !== e) {
                e = 0
            } else if (e !== 0 && e !== 1 / 0 && e !== -(1 / 0)) {
                e = (e > 0 || -1) * Math.floor(Math.abs(e))
            }
            return e
        },
        ToPrimitive: function Nt(t) {
            var e, r, n;
            if (D(t)) {
                return t
            }
            r = t.valueOf;
            if (v(r)) {
                e = r.call(t);
                if (D(e)) {
                    return e
                }
            }
            n = t.toString;
            if (v(n)) {
                e = n.call(t);
                if (D(e)) {
                    return e
                }
            }
            throw new TypeError
        },
        ToObject: function(t) {
            if (t == null) {
                throw new TypeError("can't convert " + t + " to object")
            }
            return Object(t)
        },
        ToUint32: function Et(t) {
            return t >>> 0
        }
    };
    var k = function It() {};
    I(r, {
        bind: function Dt(t) {
            var e = this;
            if (!v(e)) {
                throw new TypeError("Function.prototype.bind called on incompatible " + e)
            }
            var r = a.call(arguments, 1);
            var n;
            var i = function() {
                if (this instanceof n) {
                    var i = e.apply(this, f.call(r, a.call(arguments)));
                    if (Object(i) === i) {
                        return i
                    }
                    return this
                } else {
                    return e.apply(t, f.call(r, a.call(arguments)))
                }
            };
            var o = Math.max(0, e.length - r.length);
            var u = [];
            for (var l = 0; l < o; l++) {
                u.push("$" + l)
            }
            n = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this, arguments); }")(i);
            if (e.prototype) {
                k.prototype = e.prototype;
                n.prototype = new k;
                k.prototype = null
            }
            return n
        }
    });
    var A = s.bind(e.hasOwnProperty);
    var F = function() {
        var t = [1, 2];
        var e = t.splice();
        return t.length === 2 && p(e) && e.length === 0
    }();
    I(t, {
        splice: function Mt(t, e) {
            if (arguments.length === 0) {
                return []
            } else {
                return o.apply(this, arguments)
            }
        }
    }, !F);
    var R = function() {
        var e = {};
        t.splice.call(e, 0, 0, 1);
        return e.length === 1
    }();
    I(t, {
        splice: function kt(t, e) {
            if (arguments.length === 0) {
                return []
            }
            var r = arguments;
            this.length = Math.max(M.ToInteger(this.length), 0);
            if (arguments.length > 0 && typeof e !== "number") {
                r = a.call(arguments);
                if (r.length < 2) {
                    r.push(this.length - t)
                } else {
                    r[1] = M.ToInteger(e)
                }
            }
            return o.apply(this, r)
        }
    }, !R);
    var U = [].unshift(0) !== 1;
    I(t, {
        unshift: function() {
            l.apply(this, arguments);
            return this.length
        }
    }, U);
    I(Array, {
        isArray: p
    });
    var C = Object("a");
    var P = C[0] !== "a" || !(0 in C);
    var Z = function At(t) {
        var e = true;
        var r = true;
        if (t) {
            t.call("foo", function(t, r, n) {
                if (typeof n !== "object") {
                    e = false
                }
            });
            t.call([1], function() {
                "use strict";
                r = typeof this === "string"
            }, "x")
        }
        return !!t && e && r
    };
    I(t, {
        forEach: function Ft(t) {
            var e = M.ToObject(this);
            var r = P && O(this) ? this.split("") : e;
            var n = -1;
            var i = r.length >>> 0;
            var a;
            if (arguments.length > 1) {
                a = arguments[1]
            }
            if (!v(t)) {
                throw new TypeError("Array.prototype.forEach callback must be a function")
            }
            while (++n < i) {
                if (n in r) {
                    if (typeof a !== "undefined") {
                        t.call(a, r[n], n, e)
                    } else {
                        t(r[n], n, e)
                    }
                }
            }
        }
    }, !Z(t.forEach));
    I(t, {
        map: function Rt(t) {
            var e = M.ToObject(this);
            var r = P && O(this) ? this.split("") : e;
            var n = r.length >>> 0;
            var i = Array(n);
            var a;
            if (arguments.length > 1) {
                a = arguments[1]
            }
            if (!v(t)) {
                throw new TypeError("Array.prototype.map callback must be a function")
            }
            for (var o = 0; o < n; o++) {
                if (o in r) {
                    if (typeof a !== "undefined") {
                        i[o] = t.call(a, r[o], o, e)
                    } else {
                        i[o] = t(r[o], o, e)
                    }
                }
            }
            return i
        }
    }, !Z(t.map));
    I(t, {
        filter: function Ut(t) {
            var e = M.ToObject(this);
            var r = P && O(this) ? this.split("") : e;
            var n = r.length >>> 0;
            var i = [];
            var a;
            var o;
            if (arguments.length > 1) {
                o = arguments[1]
            }
            if (!v(t)) {
                throw new TypeError("Array.prototype.filter callback must be a function")
            }
            for (var u = 0; u < n; u++) {
                if (u in r) {
                    a = r[u];
                    if (typeof o === "undefined" ? t(a, u, e) : t.call(o, a, u, e)) {
                        i.push(a)
                    }
                }
            }
            return i
        }
    }, !Z(t.filter));
    I(t, {
        every: function Ct(t) {
            var e = M.ToObject(this);
            var r = P && O(this) ? this.split("") : e;
            var n = r.length >>> 0;
            var i;
            if (arguments.length > 1) {
                i = arguments[1]
            }
            if (!v(t)) {
                throw new TypeError("Array.prototype.every callback must be a function")
            }
            for (var a = 0; a < n; a++) {
                if (a in r && !(typeof i === "undefined" ? t(r[a], a, e) : t.call(i, r[a], a, e))) {
                    return false
                }
            }
            return true
        }
    }, !Z(t.every));
    I(t, {
        some: function Pt(t) {
            var e = M.ToObject(this);
            var r = P && O(this) ? this.split("") : e;
            var n = r.length >>> 0;
            var i;
            if (arguments.length > 1) {
                i = arguments[1]
            }
            if (!v(t)) {
                throw new TypeError("Array.prototype.some callback must be a function")
            }
            for (var a = 0; a < n; a++) {
                if (a in r && (typeof i === "undefined" ? t(r[a], a, e) : t.call(i, r[a], a, e))) {
                    return true
                }
            }
            return false
        }
    }, !Z(t.some));
    var J = false;
    if (t.reduce) {
        J = typeof t.reduce.call("es5", function(t, e, r, n) {
            return n
        }) === "object"
    }
    I(t, {
        reduce: function Zt(t) {
            var e = M.ToObject(this);
            var r = P && O(this) ? this.split("") : e;
            var n = r.length >>> 0;
            if (!v(t)) {
                throw new TypeError("Array.prototype.reduce callback must be a function")
            }
            if (n === 0 && arguments.length === 1) {
                throw new TypeError("reduce of empty array with no initial value")
            }
            var i = 0;
            var a;
            if (arguments.length >= 2) {
                a = arguments[1]
            } else {
                do {
                    if (i in r) {
                        a = r[i++];
                        break
                    }
                    if (++i >= n) {
                        throw new TypeError("reduce of empty array with no initial value")
                    }
                } while (true)
            }
            for (; i < n; i++) {
                if (i in r) {
                    a = t(a, r[i], i, e)
                }
            }
            return a
        }
    }, !J);
    var z = false;
    if (t.reduceRight) {
        z = typeof t.reduceRight.call("es5", function(t, e, r, n) {
            return n
        }) === "object"
    }
    I(t, {
        reduceRight: function Jt(t) {
            var e = M.ToObject(this);
            var r = P && O(this) ? this.split("") : e;
            var n = r.length >>> 0;
            if (!v(t)) {
                throw new TypeError("Array.prototype.reduceRight callback must be a function")
            }
            if (n === 0 && arguments.length === 1) {
                throw new TypeError("reduceRight of empty array with no initial value")
            }
            var i;
            var a = n - 1;
            if (arguments.length >= 2) {
                i = arguments[1]
            } else {
                do {
                    if (a in r) {
                        i = r[a--];
                        break
                    }
                    if (--a < 0) {
                        throw new TypeError("reduceRight of empty array with no initial value")
                    }
                } while (true)
            }
            if (a < 0) {
                return i
            }
            do {
                if (a in r) {
                    i = t(i, r[a], a, e)
                }
            } while (a--);
            return i
        }
    }, !z);
    var $ = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
    I(t, {
        indexOf: function zt(t) {
            var e = P && O(this) ? this.split("") : M.ToObject(this);
            var r = e.length >>> 0;
            if (r === 0) {
                return -1
            }
            var n = 0;
            if (arguments.length > 1) {
                n = M.ToInteger(arguments[1])
            }
            n = n >= 0 ? n : Math.max(0, r + n);
            for (; n < r; n++) {
                if (n in e && e[n] === t) {
                    return n
                }
            }
            return -1
        }
    }, $);
    var B = Array.prototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
    I(t, {
        lastIndexOf: function $t(t) {
            var e = P && O(this) ? this.split("") : M.ToObject(this);
            var r = e.length >>> 0;
            if (r === 0) {
                return -1
            }
            var n = r - 1;
            if (arguments.length > 1) {
                n = Math.min(n, M.ToInteger(arguments[1]))
            }
            n = n >= 0 ? n : r - Math.abs(n);
            for (; n >= 0; n--) {
                if (n in e && t === e[n]) {
                    return n
                }
            }
            return -1
        }
    }, B);
    var G = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        H = function() {}.propertyIsEnumerable("prototype"),
        L = !A("x", "0"),
        X = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        Y = X.length;
    I(Object, {
        keys: function Bt(t) {
            var e = v(t),
                r = E(t),
                n = t !== null && typeof t === "object",
                i = n && O(t);
            if (!n && !e && !r) {
                throw new TypeError("Object.keys called on a non-object")
            }
            var a = [];
            var o = H && e;
            if (i && L || r) {
                for (var u = 0; u < t.length; ++u) {
                    a.push(String(u))
                }
            }
            if (!r) {
                for (var l in t) {
                    if (!(o && l === "prototype") && A(t, l)) {
                        a.push(String(l))
                    }
                }
            }
            if (G) {
                var f = t.constructor,
                    s = f && f.prototype === t;
                for (var c = 0; c < Y; c++) {
                    var p = X[c];
                    if (!(s && p === "constructor") && A(t, p)) {
                        a.push(p)
                    }
                }
            }
            return a
        }
    });
    var q = Object.keys && function() {
        return Object.keys(arguments).length === 2
    }(1, 2);
    var K = Object.keys;
    I(Object, {
        keys: function Gt(e) {
            if (E(e)) {
                return K(t.slice.call(e))
            } else {
                return K(e)
            }
        }
    }, !q);
    var Q = -621987552e5;
    var V = "-000001";
    var W = Date.prototype.toISOString && new Date(Q).toISOString().indexOf(V) === -1;
    I(Date.prototype, {
        toISOString: function Ht() {
            var t, e, r, n, i;
            if (!isFinite(this)) {
                throw new RangeError("Date.prototype.toISOString called on non-finite value.")
            }
            n = this.getUTCFullYear();
            i = this.getUTCMonth();
            n += Math.floor(i / 12);
            i = (i % 12 + 12) % 12;
            t = [i + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
            n = (n < 0 ? "-" : n > 9999 ? "+" : "") + ("00000" + Math.abs(n)).slice(0 <= n && n <= 9999 ? -4 : -6);
            e = t.length;
            while (e--) {
                r = t[e];
                if (r < 10) {
                    t[e] = "0" + r
                }
            }
            return n + "-" + t.slice(0, 2).join("-") + "T" + t.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
        }
    }, W);
    var _ = function() {
        try {
            return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(Q).toJSON().indexOf(V) !== -1 && Date.prototype.toJSON.call({
                toISOString: function() {
                    return true
                }
            })
        } catch (t) {
            return false
        }
    }();
    if (!_) {
        Date.prototype.toJSON = function Lt(t) {
            var e = Object(this);
            var r = M.ToPrimitive(e);
            if (typeof r === "number" && !isFinite(r)) {
                return null
            }
            var n = e.toISOString;
            if (!v(n)) {
                throw new TypeError("toISOString property is not callable")
            }
            return n.call(e)
        }
    }
    var tt = Date.parse("+033658-09-27T01:46:40.000Z") === 1e15;
    var et = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
    var rt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    if (!Date.parse || rt || et || !tt) {
        Date = function(t) {
            var e = function l(r, n, i, a, o, u, f) {
                var s = arguments.length;
                var c;
                if (this instanceof t) {
                    c = s === 1 && String(r) === r ? new t(e.parse(r)) : s >= 7 ? new t(r, n, i, a, o, u, f) : s >= 6 ? new t(r, n, i, a, o, u) : s >= 5 ? new t(r, n, i, a, o) : s >= 4 ? new t(r, n, i, a) : s >= 3 ? new t(r, n, i) : s >= 2 ? new t(r, n) : s >= 1 ? new t(r) : new t
                } else {
                    c = t.apply(this, arguments)
                }
                I(c, {
                    constructor: e
                }, true);
                return c
            };
            var r = new RegExp("^" + "(\\d{4}|[+-]\\d{6})" + "(?:-(\\d{2})" + "(?:-(\\d{2})" + "(?:" + "T(\\d{2})" + ":(\\d{2})" + "(?:" + ":(\\d{2})" + "(?:(\\.\\d{1,}))?" + ")?" + "(" + "Z|" + "(?:" + "([-+])" + "(\\d{2})" + ":(\\d{2})" + ")" + ")?)?)?)?" + "$");
            var n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            var i = function f(t, e) {
                var r = e > 1 ? 1 : 0;
                return n[e] + Math.floor((t - 1969 + r) / 4) - Math.floor((t - 1901 + r) / 100) + Math.floor((t - 1601 + r) / 400) + 365 * (t - 1970)
            };
            var a = function s(e) {
                return Number(new t(1970, 0, 1, 0, 0, 0, e))
            };
            for (var o in t) {
                if (A(t, o)) {
                    e[o] = t[o]
                }
            }
            I(e, {
                now: t.now,
                UTC: t.UTC
            }, true);
            e.prototype = t.prototype;
            I(e.prototype, {
                constructor: e
            }, true);
            var u = function c(e) {
                var n = r.exec(e);
                if (n) {
                    var o = Number(n[1]),
                        u = Number(n[2] || 1) - 1,
                        l = Number(n[3] || 1) - 1,
                        f = Number(n[4] || 0),
                        s = Number(n[5] || 0),
                        c = Number(n[6] || 0),
                        p = Math.floor(Number(n[7] || 0) * 1e3),
                        h = Boolean(n[4] && !n[8]),
                        v = n[9] === "-" ? 1 : -1,
                        g = Number(n[10] || 0),
                        y = Number(n[11] || 0),
                        d;
                    if (f < (s > 0 || c > 0 || p > 0 ? 24 : 25) && s < 60 && c < 60 && p < 1e3 && u > -1 && u < 12 && g < 24 && y < 60 && l > -1 && l < i(o, u + 1) - i(o, u)) {
                        d = ((i(o, u) + l) * 24 + f + g * v) * 60;
                        d = ((d + s + y * v) * 60 + c) * 1e3 + p;
                        if (h) {
                            d = a(d)
                        }
                        if (-864e13 <= d && d <= 864e13) {
                            return d
                        }
                    }
                    return NaN
                }
                return t.parse.apply(this, arguments)
            };
            I(e, {
                parse: u
            });
            return e
        }(Date)
    }
    if (!Date.now) {
        Date.now = function Xt() {
            return (new Date).getTime()
        }
    }
    var nt = i.toFixed && (8e-5.toFixed(3) !== "0.000" || .9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128");
    var it = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function Yt(t, e) {
            var r = -1;
            var n = e;
            while (++r < it.size) {
                n += t * it.data[r];
                it.data[r] = n % it.base;
                n = Math.floor(n / it.base)
            }
        },
        divide: function qt(t) {
            var e = it.size,
                r = 0;
            while (--e >= 0) {
                r += it.data[e];
                it.data[e] = Math.floor(r / t);
                r = r % t * it.base
            }
        },
        numToString: function Kt() {
            var t = it.size;
            var e = "";
            while (--t >= 0) {
                if (e !== "" || t === 0 || it.data[t] !== 0) {
                    var r = String(it.data[t]);
                    if (e === "") {
                        e = r
                    } else {
                        e += "0000000".slice(0, 7 - r.length) + r
                    }
                }
            }
            return e
        },
        pow: function Qt(t, e, r) {
            return e === 0 ? r : e % 2 === 1 ? Qt(t, e - 1, r * t) : Qt(t * t, e / 2, r)
        },
        log: function Vt(t) {
            var e = 0;
            var r = t;
            while (r >= 4096) {
                e += 12;
                r /= 4096
            }
            while (r >= 2) {
                e += 1;
                r /= 2
            }
            return e
        }
    };
    I(i, {
        toFixed: function Wt(t) {
            var e, r, n, i, a, o, u, l;
            e = Number(t);
            e = e !== e ? 0 : Math.floor(e);
            if (e < 0 || e > 20) {
                throw new RangeError("Number.toFixed called with invalid number of decimals")
            }
            r = Number(this);
            if (r !== r) {
                return "NaN"
            }
            if (r <= -1e21 || r >= 1e21) {
                return String(r)
            }
            n = "";
            if (r < 0) {
                n = "-";
                r = -r
            }
            i = "0";
            if (r > 1e-21) {
                a = it.log(r * it.pow(2, 69, 1)) - 69;
                o = a < 0 ? r * it.pow(2, -a, 1) : r / it.pow(2, a, 1);
                o *= 4503599627370496;
                a = 52 - a;
                if (a > 0) {
                    it.multiply(0, o);
                    u = e;
                    while (u >= 7) {
                        it.multiply(1e7, 0);
                        u -= 7
                    }
                    it.multiply(it.pow(10, u, 1), 0);
                    u = a - 1;
                    while (u >= 23) {
                        it.divide(1 << 23);
                        u -= 23
                    }
                    it.divide(1 << u);
                    it.multiply(1, 1);
                    it.divide(2);
                    i = it.numToString()
                } else {
                    it.multiply(0, o);
                    it.multiply(1 << -a, 0);
                    i = it.numToString() + "0.00000000000000000000".slice(2, 2 + e)
                }
            }
            if (e > 0) {
                l = i.length;
                if (l <= e) {
                    i = n + "0.0000000000000000000".slice(0, e - l + 2) + i
                } else {
                    i = n + i.slice(0, l - e) + "." + i.slice(l - e)
                }
            } else {
                i = n + i
            }
            return i
        }
    }, nt);
    var at = n.split;
    if ("ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1) {
        (function() {
            var t = typeof /()??/.exec("")[1] === "undefined";
            n.split = function(e, r) {
                var n = this;
                if (typeof e === "undefined" && r === 0) {
                    return []
                }
                if (!b(e)) {
                    return at.call(this, e, r)
                }
                var i = [];
                var a = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                    o = 0,
                    l, f, s, c;
                var p = new RegExp(e.source, a + "g");
                n += "";
                if (!t) {
                    l = new RegExp("^" + p.source + "$(?!\\s)", a)
                }
                var h = typeof r === "undefined" ? -1 >>> 0 : M.ToUint32(r);
                f = p.exec(n);
                while (f) {
                    s = f.index + f[0].length;
                    if (s > o) {
                        i.push(n.slice(o, f.index));
                        if (!t && f.length > 1) {
                            f[0].replace(l, function() {
                                for (var t = 1; t < arguments.length - 2; t++) {
                                    if (typeof arguments[t] === "undefined") {
                                        f[t] = void 0
                                    }
                                }
                            })
                        }
                        if (f.length > 1 && f.index < n.length) {
                            u.apply(i, f.slice(1))
                        }
                        c = f[0].length;
                        o = s;
                        if (i.length >= h) {
                            break
                        }
                    }
                    if (p.lastIndex === f.index) {
                        p.lastIndex++
                    }
                    f = p.exec(n)
                }
                if (o === n.length) {
                    if (c || !p.test("")) {
                        i.push("")
                    }
                } else {
                    i.push(n.slice(o))
                }
                return i.length > h ? i.slice(0, h) : i
            }
        })()
    } else if ("0".split(void 0, 0).length) {
        n.split = function _t(t, e) {
            if (typeof t === "undefined" && e === 0) {
                return []
            }
            return at.call(this, t, e)
        }
    }
    var ot = n.replace;
    var ut = function() {
        var t = [];
        "x".replace(/x(.)?/g, function(e, r) {
            t.push(r)
        });
        return t.length === 1 && typeof t[0] === "undefined"
    }();
    if (!ut) {
        n.replace = function te(t, e) {
            var r = v(e);
            var n = b(t) && /\)[*?]/.test(t.source);
            if (!r || !n) {
                return ot.call(this, t, e)
            } else {
                var i = function(r) {
                    var n = arguments.length;
                    var i = t.lastIndex;
                    t.lastIndex = 0;
                    var a = t.exec(r) || [];
                    t.lastIndex = i;
                    a.push(arguments[n - 2], arguments[n - 1]);
                    return e.apply(this, a)
                };
                return ot.call(this, t, i)
            }
        }
    }
    var lt = n.substr;
    var ft = "".substr && "0b".substr(-1) !== "b";
    I(n, {
        substr: function ee(t, e) {
            var r = t;
            if (t < 0) {
                r = Math.max(this.length + t, 0)
            }
            return lt.call(this, r, e)
        }
    }, ft);
    var st = "	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028" + "\u2029\ufeff";
    var ct = "\u200b";
    var pt = "[" + st + "]";
    var ht = new RegExp("^" + pt + pt + "*");
    var vt = new RegExp(pt + pt + "*$");
    var gt = n.trim && (st.trim() || !ct.trim());
    I(n, {
        trim: function re() {
            if (typeof this === "undefined" || this === null) {
                throw new TypeError("can't convert " + this + " to object")
            }
            return String(this).replace(ht, "").replace(vt, "")
        }
    }, gt);
    if (parseInt(st + "08") !== 8 || parseInt(st + "0x16") !== 22) {
        parseInt = function(t) {
            var e = /^0[xX]/;
            return function r(n, i) {
                var a = String(n).trim();
                var o = Number(i) || (e.test(a) ? 16 : 10);
                return t(a, o)
            }
        }(parseInt)
    }
});
//# sourceMappingURL=es5-shim.map