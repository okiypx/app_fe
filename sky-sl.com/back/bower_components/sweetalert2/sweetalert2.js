! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Sweetalert2 = e()
}(this, function() {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function c() {
        return (c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t, e, n) {
        return (l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function(t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new(Function.bind.apply(t, o));
            return n && u(i, n.prototype), i
        }).apply(null, arguments)
    }

    function d(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t, e, n) {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function f(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }

    function m(t) {
        return Array.prototype.slice.call(t)
    }

    function g(t) {
        console.error("".concat(q, " ").concat(t))
    }

    function h(t, e) {
        var n;
        n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === N.indexOf(n) && (N.push(n), R(n))
    }

    function v(t) {
        return t && Promise.resolve(t) === t
    }

    function b(t) {
        return t instanceof Element || "object" === r(e = t) && e.jquery;
        var e
    }

    function t(t) {
        var e = {};
        for (var n in t) e[t[n]] = "swal2-" + t[n];
        return e
    }

    function y(t) {
        var e = z();
        return e ? e.querySelector(t) : null
    }

    function e(t) {
        return y(".".concat(t))
    }

    function n() {
        var t = W();
        return m(t.querySelectorAll(".".concat(F.icon)))
    }

    function w() {
        var t = n().filter(function(t) {
            return dt(t)
        });
        return t.length ? t[0] : null
    }

    function C() {
        return e(F.title)
    }

    function k() {
        return e(F.content)
    }

    function x() {
        return e(F.image)
    }

    function A() {
        return e(F["progress-steps"])
    }

    function P() {
        return e(F["validation-message"])
    }

    function B() {
        return y(".".concat(F.actions, " .").concat(F.confirm))
    }

    function E() {
        return y(".".concat(F.actions, " .").concat(F.cancel))
    }

    function S() {
        return e(F.actions)
    }

    function T() {
        return e(F.header)
    }

    function L() {
        return e(F.footer)
    }

    function O() {
        return e(F["timer-progress-bar"])
    }

    function M() {
        return e(F.close)
    }

    function H() {
        var t = m(W().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t, e) {
                return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            }),
            e = m(W().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t) {
                return "-1" !== t.getAttribute("tabindex")
            });
        return function(t) {
            for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t.concat(e)).filter(function(t) {
            return dt(t)
        })
    }

    function j() {
        return !K() && !document.body.classList.contains(F["no-backdrop"])
    }

    function V(t, e) {
        if (!e) return !1;
        for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
            if (!t.classList.contains(n[o])) return !1;
        return !0
    }

    function I(t, e, n) {
        var o, i;
        if (i = e, m((o = t).classList).forEach(function(t) {
                -1 === f(F).indexOf(t) && -1 === f(_).indexOf(t) && -1 === f(i.showClass).indexOf(t) && o.classList.remove(t)
            }), e.customClass && e.customClass[n]) {
            if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return R("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
            st(t, e.customClass[n])
        }
    }
    var q = "SweetAlert2:",
        R = function(t) {
            console.warn("".concat(q, " ").concat(t))
        },
        N = [],
        D = function(t) {
            return "function" == typeof t ? t() : t
        },
        U = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        F = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        _ = t(["success", "warning", "info", "question", "error"]),
        z = function() {
            return document.body.querySelector(".".concat(F.container))
        },
        W = function() {
            return e(F.popup)
        },
        K = function() {
            return document.body.classList.contains(F["toast-shown"])
        },
        Y = {
            previousBodyPadding: null
        };

    function Z(t, e) {
        if (!e) return null;
        switch (e) {
            case "select":
            case "textarea":
            case "file":
                return lt(t, F[e]);
            case "checkbox":
                return t.querySelector(".".concat(F.checkbox, " input"));
            case "radio":
                return t.querySelector(".".concat(F.radio, " input:checked")) || t.querySelector(".".concat(F.radio, " input:first-child"));
            case "range":
                return t.querySelector(".".concat(F.range, " input"));
            default:
                return lt(t, F.input)
        }
    }

    function Q(t) {
        if (t.focus(), "file" !== t.type) {
            var e = t.value;
            t.value = "", t.value = e
        }
    }

    function $(t, e, n) {
        t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function(e) {
            t.forEach ? t.forEach(function(t) {
                n ? t.classList.add(e) : t.classList.remove(e)
            }) : n ? t.classList.add(e) : t.classList.remove(e)
        }))
    }

    function J(t, e, n) {
        n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e)
    }

    function X(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "flex";
        t.style.opacity = "", t.style.display = n
    }

    function G(t) {
        t.style.opacity = "", t.style.display = "none"
    }

    function tt(t, e, n) {
        e ? X(t, n) : G(t)
    }

    function et(t) {
        var e = window.getComputedStyle(t),
            n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < o
    }

    function nt(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e,
            o = O();
        dt(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function() {
            o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%"
        }, 10))
    }

    function ot() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function it(t) {
        Je.isVisible() && ct !== t.target.value && Je.resetValidationMessage(), ct = t.target.value
    }

    function rt(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? mt(e, t) : t && (e.innerHTML = t)
    }

    function at(t, e) {
        var n = S(),
            o = B(),
            i = E();
        e.showConfirmButton || e.showCancelButton || G(n), I(n, e, "actions"), gt(o, "confirm", e), gt(i, "cancel", e), e.buttonsStyling ? function(t, e, n) {
            st([t, e], F.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
            n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor);
            var o = window.getComputedStyle(t).getPropertyValue("background-color");
            t.style.borderLeftColor = o, t.style.borderRightColor = o
        }(o, i, e) : (ut([o, i], F.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""), e.reverseButtons && o.parentNode.insertBefore(i, o)
    }
    var ct, st = function(t, e) {
            $(t, e, !0)
        },
        ut = function(t, e) {
            $(t, e, !1)
        },
        lt = function(t, e) {
            for (var n = 0; n < t.childNodes.length; n++)
                if (V(t.childNodes[n], e)) return t.childNodes[n]
        },
        dt = function(t) {
            return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
        },
        pt = '\n <div aria-labelledby="'.concat(F.title, '" aria-describedby="').concat(F.content, '" class="').concat(F.popup, '" tabindex="-1">\n   <div class="').concat(F.header, '">\n     <ul class="').concat(F["progress-steps"], '"></ul>\n     <div class="').concat(F.icon, " ").concat(_.error, '"></div>\n     <div class="').concat(F.icon, " ").concat(_.question, '"></div>\n     <div class="').concat(F.icon, " ").concat(_.warning, '"></div>\n     <div class="').concat(F.icon, " ").concat(_.info, '"></div>\n     <div class="').concat(F.icon, " ").concat(_.success, '"></div>\n     <img class="').concat(F.image, '" />\n     <h2 class="').concat(F.title, '" id="').concat(F.title, '"></h2>\n     <button type="button" class="').concat(F.close, '"></button>\n   </div>\n   <div class="').concat(F.content, '">\n     <div id="').concat(F.content, '" class="').concat(F["html-container"], '"></div>\n     <input class="').concat(F.input, '" />\n     <input type="file" class="').concat(F.file, '" />\n     <div class="').concat(F.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(F.select, '"></select>\n     <div class="').concat(F.radio, '"></div>\n     <label for="').concat(F.checkbox, '" class="').concat(F.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(F.label, '"></span>\n     </label>\n     <textarea class="').concat(F.textarea, '"></textarea>\n     <div class="').concat(F["validation-message"], '" id="').concat(F["validation-message"], '"></div>\n   </div>\n   <div class="').concat(F.actions, '">\n     <button type="button" class="').concat(F.confirm, '">OK</button>\n     <button type="button" class="').concat(F.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(F.footer, '"></div>\n   <div class="').concat(F["timer-progress-bar"], '"></div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        ft = function(t) {
            var e;
            if ((e = z()) && (e.parentNode.removeChild(e), ut([document.documentElement, document.body], [F["no-backdrop"], F["toast-shown"], F["has-column"]])), ot()) g("SweetAlert2 requires document to initialize");
            else {
                var n = document.createElement("div");
                n.className = F.container, n.innerHTML = pt;
                var o, i, r, a, c, s, u, l, d, p, f, m, h = "string" == typeof(o = t.target) ? document.querySelector(o) : o;
                h.appendChild(n), i = t, (r = W()).setAttribute("role", i.toast ? "alert" : "dialog"), r.setAttribute("aria-live", i.toast ? "polite" : "assertive"), i.toast || r.setAttribute("aria-modal", "true"), a = h, "rtl" === window.getComputedStyle(a).direction && st(z(), F.rtl), c = k(), s = lt(c, F.input), u = lt(c, F.file), l = c.querySelector(".".concat(F.range, " input")), d = c.querySelector(".".concat(F.range, " output")), p = lt(c, F.select), f = c.querySelector(".".concat(F.checkbox, " input")), m = lt(c, F.textarea), s.oninput = it, u.onchange = it, p.onchange = it, f.onchange = it, m.oninput = it, l.oninput = function(t) {
                    it(t), d.value = l.value
                }, l.onchange = function(t) {
                    it(t), l.nextSibling.value = l.value
                }
            }
        },
        mt = function(t, e) {
            if (t.innerHTML = "", 0 in e)
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0))
        },
        ht = function() {
            if (ot()) return !1;
            var t = document.createElement("div"),
                e = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
            return !1
        }();

    function gt(t, e, n) {
        var o;
        tt(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), t.innerHTML = n["".concat(e, "ButtonText")], t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = F[e], I(t, n, "".concat(e, "Button")), st(t, n["".concat(e, "ButtonClass")])
    }

    function vt(t, e) {
        var n = z();
        if (n) {
            var o, i, r, a;
            o = n, "string" == typeof(i = e.backdrop) ? o.style.background = i : i || st([document.documentElement, document.body], F["no-backdrop"]), !e.backdrop && e.allowOutsideClick && R('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), r = n, (a = e.position) in F ? st(r, F[a]) : (R('The "position" parameter is not valid, defaulting to "center"'), st(r, F.center)),
                function(t, e) {
                    if (e && "string" == typeof e) {
                        var n = "grow-".concat(e);
                        n in F && st(t, F[n])
                    }
                }(n, e.grow), I(n, e, "container");
            var c = document.body.getAttribute("data-swal2-queue-step");
            c && (n.setAttribute("data-queue-step", c), document.body.removeAttribute("data-swal2-queue-step"))
        }
    }

    function bt(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
    }
    var yt = {
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        },
        wt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        Ct = function(t) {
            if (!Pt[t.input]) return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
            var e = At(t.input),
                n = Pt[t.input](e, t);
            X(n), setTimeout(function() {
                Q(n)
            })
        },
        kt = function(t, e) {
            var n = Z(k(), t);
            if (n)
                for (var o in ! function(t) {
                        for (var e = 0; e < t.attributes.length; e++) {
                            var n = t.attributes[e].name; - 1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n)
                        }
                    }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
        },
        xt = function(t) {
            var e = At(t.input);
            t.customClass && st(e, t.customClass.input)
        },
        At = function(t) {
            var e = F[t] ? F[t] : F.input;
            return lt(k(), e)
        },
        Pt = {};
    Pt.text = Pt.email = Pt.password = Pt.number = Pt.tel = Pt.url = function(t, e) {
        return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : v(e.inputValue) || R('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), bt(t, e), t.type = e.input, t
    }, Pt.file = function(t, e) {
        return bt(t, e), t
    }, Pt.range = function(t, e) {
        var n = t.querySelector("input"),
            o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t
    }, Pt.select = function(t, e) {
        if (t.innerHTML = "", e.inputPlaceholder) {
            var n = document.createElement("option");
            n.innerHTML = e.inputPlaceholder, n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)
        }
        return t
    }, Pt.radio = function(t) {
        return t.innerHTML = "", t
    }, Pt.checkbox = function(t, e) {
        var n = Z(k(), "checkbox");
        return n.value = 1, n.id = F.checkbox, n.checked = Boolean(e.inputValue), t.querySelector("span").innerHTML = e.inputPlaceholder, t
    }, Pt.textarea = function(e, t) {
        if (e.value = t.inputValue, bt(e, t), "MutationObserver" in window) {
            var n = parseInt(window.getComputedStyle(W()).width),
                o = parseInt(window.getComputedStyle(W()).paddingLeft) + parseInt(window.getComputedStyle(W()).paddingRight);
            new MutationObserver(function() {
                var t = e.offsetWidth + o;
                W().style.width = n < t ? "".concat(t, "px") : null
            }).observe(e, {
                attributes: !0,
                attributeFilter: ["style"]
            })
        }
        return e
    };

    function Bt(t, e) {
        var n, o, i, r, a, c = k().querySelector("#".concat(F.content));
        e.html ? (rt(e.html, c), X(c, "block")) : e.text ? (c.textContent = e.text, X(c, "block")) : G(c), n = t, o = e, i = k(), r = yt.innerParams.get(n), a = !r || o.input !== r.input, wt.forEach(function(t) {
            var e = F[t],
                n = lt(i, e);
            kt(t, o.inputAttributes), n.className = e, a && G(n)
        }), o.input && (a && Ct(o), xt(o)), I(k(), e, "content")
    }

    function Et() {
        return z().getAttribute("data-queue-step")
    }

    function St(t, s) {
        var u = A();
        if (!s.progressSteps || 0 === s.progressSteps.length) return G(u);
        X(u), u.innerHTML = "";
        var l = parseInt(void 0 === s.currentProgressStep ? Et() : s.currentProgressStep);
        l >= s.progressSteps.length && R("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), s.progressSteps.forEach(function(t, e) {
            var n, o, i, r, a = (n = t, o = document.createElement("li"), st(o, F["progress-step"]), o.innerHTML = n, o);
            if (u.appendChild(a), e === l && st(a, F["active-progress-step"]), e !== s.progressSteps.length - 1) {
                var c = (i = t, r = document.createElement("li"), st(r, F["progress-step-line"]), i.progressStepsDistance && (r.style.width = i.progressStepsDistance), r);
                u.appendChild(c)
            }
        })
    }

    function Tt(t, e) {
        var n, o, i, r, a = T();
        I(a, e, "header"), St(0, e),
            function(t, e) {
                var n = yt.innerParams.get(t);
                if (n && e.icon === n.icon && w()) I(w(), e, "icon");
                else if (Mt(), e.icon)
                    if (-1 !== Object.keys(_).indexOf(e.icon)) {
                        var o = y(".".concat(F.icon, ".").concat(_[e.icon]));
                        X(o), jt(o, e), Ht(), I(o, e, "icon"), st(o, e.showClass.icon)
                    } else g('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon, '"'))
            }(t, e),
            function(t) {
                var e = x();
                if (!t.imageUrl) return G(e);
                X(e), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), J(e, "width", t.imageWidth), J(e, "height", t.imageHeight), e.className = F.image, I(e, t, "image")
            }(e), n = e, o = C(), tt(o, n.title || n.titleText), n.title && rt(n.title, o), n.titleText && (o.innerText = n.titleText), I(o, n, "title"), i = e, (r = M()).innerHTML = i.closeButtonHtml, I(r, i, "closeButton"), tt(r, i.showCloseButton), r.setAttribute("aria-label", i.closeButtonAriaLabel)
    }

    function Lt(t, e) {
        var n, o, i, r;
        n = e, o = W(), J(o, "width", n.width), J(o, "padding", n.padding), n.background && (o.style.background = n.background), qt(o, n), vt(0, e), Tt(t, e), Bt(t, e), at(0, e), i = e, r = L(), tt(r, i.footer), i.footer && rt(i.footer, r), I(r, i, "footer"), "function" == typeof e.onRender && e.onRender(W())
    }

    function Ot() {
        return B() && B().click()
    }
    var Mt = function() {
            for (var t = n(), e = 0; e < t.length; e++) G(t[e])
        },
        Ht = function() {
            for (var t = W(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
        },
        jt = function(t, e) {
            if (t.innerHTML = "", e.iconHtml) t.innerHTML = Vt(e.iconHtml);
            else if ("success" === e.icon) t.innerHTML = '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ';
            else if ("error" === e.icon) t.innerHTML = '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ';
            else {
                t.innerHTML = Vt({
                    question: "?",
                    warning: "!",
                    info: "i"
                }[e.icon])
            }
        },
        Vt = function(t) {
            return '<div class="'.concat(F["icon-content"], '">').concat(t, "</div>")
        },
        It = [],
        qt = function(t, e) {
            t.className = "".concat(F.popup, " ").concat(dt(t) ? e.showClass.popup : ""), e.toast ? (st([document.documentElement, document.body], F["toast-shown"]), st(t, F.toast)) : st(t, F.modal), I(t, e, "popup"), "string" == typeof e.customClass && st(t, e.customClass), e.icon && st(t, F["icon-".concat(e.icon)])
        };

    function Rt() {
        var t = W();
        t || Je.fire(), t = W();
        var e = S(),
            n = B();
        X(e), X(n, "inline-block"), st([t, e], F.loading), n.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
    }

    function Nt() {
        return new Promise(function(t) {
            var e = window.scrollX,
                n = window.scrollY;
            zt.restoreFocusTimeout = setTimeout(function() {
                zt.previousActiveElement && zt.previousActiveElement.focus ? (zt.previousActiveElement.focus(), zt.previousActiveElement = null) : document.body && document.body.focus(), t()
            }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
        })
    }

    function Dt() {
        if (zt.timeout) return function() {
            var t = O(),
                e = parseInt(window.getComputedStyle(t).width);
            t.style.removeProperty("transition"), t.style.width = "100%";
            var n = parseInt(window.getComputedStyle(t).width),
                o = parseInt(e / n * 100);
            t.style.removeProperty("transition"), t.style.width = "".concat(o, "%")
        }(), zt.timeout.stop()
    }

    function Ut() {
        if (zt.timeout) {
            var t = zt.timeout.start();
            return nt(t), t
        }
    }

    function Ft(t) {
        return Object.prototype.hasOwnProperty.call(Wt, t)
    }

    function _t(t) {
        return Yt[t]
    }
    var zt = {},
        Wt = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconHtml: void 0,
            toast: !1,
            animation: !0,
            showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show"
            },
            hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide"
            },
            customClass: void 0,
            target: "body",
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            onBeforeOpen: void 0,
            onOpen: void 0,
            onRender: void 0,
            onClose: void 0,
            onAfterClose: void 0,
            scrollbarPadding: !0
        },
        Kt = ["title", "titleText", "text", "html", "icon", "customClass", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeight", "imageAlt", "progressSteps", "currentProgressStep"],
        Yt = {
            animation: 'showClass" and "hideClass'
        },
        Zt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        Qt = Object.freeze({
            isValidParameter: Ft,
            isUpdatableParameter: function(t) {
                return -1 !== Kt.indexOf(t)
            },
            isDeprecatedParameter: _t,
            argsToParams: function(o) {
                var i = {};
                return "object" !== r(o[0]) || b(o[0]) ? ["title", "html", "icon"].forEach(function(t, e) {
                    var n = o[e];
                    "string" == typeof n || b(n) ? i[t] = n : void 0 !== n && g("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n)))
                }) : c(i, o[0]), i
            },
            isVisible: function() {
                return dt(W())
            },
            clickConfirm: Ot,
            clickCancel: function() {
                return E() && E().click()
            },
            getContainer: z,
            getPopup: W,
            getTitle: C,
            getContent: k,
            getHtmlContainer: function() {
                return e(F["html-container"])
            },
            getImage: x,
            getIcon: w,
            getIcons: n,
            getCloseButton: M,
            getActions: S,
            getConfirmButton: B,
            getCancelButton: E,
            getHeader: T,
            getFooter: L,
            getFocusableElements: H,
            getValidationMessage: P,
            isLoading: function() {
                return W().hasAttribute("data-loading")
            },
            fire: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return l(this, e)
            },
            mixin: function(n) {
                return function(t) {
                    function e() {
                        return o(this, e), d(this, s(e).apply(this, arguments))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && u(t, e)
                    }(e, t), a(e, [{
                        key: "_main",
                        value: function(t) {
                            return p(s(e.prototype), "_main", this).call(this, c({}, n, t))
                        }
                    }]), e
                }(this)
            },
            queue: function(t) {
                var r = this;
                It = t;

                function a(t, e) {
                    It = [], t(e)
                }
                var c = [];
                return new Promise(function(i) {
                    ! function e(n, o) {
                        n < It.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(It[n]).then(function(t) {
                            void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, {
                                dismiss: t.dismiss
                            })
                        })) : a(i, {
                            value: c
                        })
                    }(0)
                })
            },
            getQueueStep: Et,
            insertQueueStep: function(t, e) {
                return e && e < It.length ? It.splice(e, 0, t) : It.push(t)
            },
            deleteQueueStep: function(t) {
                void 0 !== It[t] && It.splice(t, 1)
            },
            showLoading: Rt,
            enableLoading: Rt,
            getTimerLeft: function() {
                return zt.timeout && zt.timeout.getTimerLeft()
            },
            stopTimer: Dt,
            resumeTimer: Ut,
            toggleTimer: function() {
                var t = zt.timeout;
                return t && (t.running ? Dt() : Ut())
            },
            increaseTimer: function(t) {
                if (zt.timeout) {
                    var e = zt.timeout.increase(t);
                    return nt(e, !0), e
                }
            },
            isTimerRunning: function() {
                return zt.timeout && zt.timeout.isRunning()
            }
        });

    function $t() {
        var t = yt.innerParams.get(this);
        if (t) {
            var e = yt.domCache.get(this);
            t.showConfirmButton || (G(e.confirmButton), t.showCancelButton || G(e.actions)), ut([e.popup, e.actions], F.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.cancelButton.disabled = !1
        }
    }

    function Jt() {
        null === Y.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (Y.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Y.previousBodyPadding + function() {
            var t = document.createElement("div");
            t.className = F["scrollbar-measure"], document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }(), "px"))
    }

    function Xt() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }

    function Gt() {
        var t = z(),
            e = W();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }
    var te = function() {
            var n, o = z();
            o.ontouchstart = function(t) {
                var e;
                n = t.target === o || !((e = o).scrollHeight > e.clientHeight) && "INPUT" !== t.target.tagName
            }, o.ontouchmove = function(t) {
                n && (t.preventDefault(), t.stopPropagation())
            }
        },
        ee = {
            swalPromiseResolve: new WeakMap
        };

    function ne(t, e, n, o) {
        n ? ae(t, o) : (Nt().then(function() {
            return ae(t, o)
        }), zt.keydownTarget.removeEventListener("keydown", zt.keydownHandler, {
            capture: zt.keydownListenerCapture
        }), zt.keydownHandlerAdded = !1), e.parentNode && e.parentNode.removeChild(e), j() && (null !== Y.previousBodyPadding && (document.body.style.paddingRight = "".concat(Y.previousBodyPadding, "px"), Y.previousBodyPadding = null), function() {
            if (V(document.body, F.iosfix)) {
                var t = parseInt(document.body.style.top, 10);
                ut(document.body, F.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t
            }
        }(), "undefined" != typeof window && Xt() && window.removeEventListener("resize", Gt), m(document.body.children).forEach(function(t) {
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        })), ut([document.documentElement, document.body], [F.shown, F["height-auto"], F["no-backdrop"], F["toast-shown"], F["toast-column"]])
    }

    function oe(t) {
        var e = W();
        if (e) {
            var n = yt.innerParams.get(this);
            if (n && !V(e, n.hideClass.popup)) {
                var o = ee.swalPromiseResolve.get(this);
                ut(e, n.showClass.popup), st(e, n.hideClass.popup);
                var i = z();
                ut(i, n.showClass.backdrop), st(i, n.hideClass.backdrop),
                    function(t, e, n) {
                        var o = z(),
                            i = ht && et(e),
                            r = n.onClose,
                            a = n.onAfterClose;
                        if (r !== null && typeof r === "function") {
                            r(e)
                        }
                        if (i) {
                            re(t, e, o, a)
                        } else {
                            ne(t, o, K(), a)
                        }
                    }(this, e, n), o(t || {})
            }
        }
    }

    function ie(t) {
        for (var e in t) t[e] = new WeakMap
    }
    var re = function(t, e, n, o) {
            zt.swalCloseEventFinishedCallback = ne.bind(null, t, n, K(), o), e.addEventListener(ht, function(t) {
                t.target === e && (zt.swalCloseEventFinishedCallback(), delete zt.swalCloseEventFinishedCallback)
            })
        },
        ae = function(t, e) {
            setTimeout(function() {
                null !== e && "function" == typeof e && e(), W() || (delete t.params, delete zt.keydownHandler, delete zt.keydownTarget, ie(yt), ie(ee))
            })
        };

    function ce(t, e, n) {
        var o = yt.domCache.get(t);
        e.forEach(function(t) {
            o[t].disabled = n
        })
    }

    function se(t, e) {
        if (!t) return !1;
        if ("radio" === t.type)
            for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
        else t.disabled = e
    }
    var ue = function() {
            function n(t, e) {
                o(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start()
            }
            return a(n, [{
                key: "start",
                value: function() {
                    return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
                }
            }, {
                key: "stop",
                value: function() {
                    return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
                }
            }, {
                key: "increase",
                value: function(t) {
                    var e = this.running;
                    return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
                }
            }, {
                key: "getTimerLeft",
                value: function() {
                    return this.running && (this.stop(), this.start()), this.remaining
                }
            }, {
                key: "isRunning",
                value: function() {
                    return this.running
                }
            }]), n
        }(),
        le = {
            email: function(t, e) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
            },
            url: function(t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
            }
        };

    function de(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(le).forEach(function(t) {
            e.input === t && (e.inputValidator = le[t])
        }), t.showLoaderOnConfirm && !t.preConfirm && R("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = D(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (R('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), ft(t)
    }

    function pe(t) {
        var e = z(),
            n = W();
        "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n), xe(e, n, t), Ce(e, n), j() && ke(e, t.scrollbarPadding), K() || zt.previousActiveElement || (zt.previousActiveElement = document.activeElement), "function" == typeof t.onOpen && setTimeout(function() {
            return t.onOpen(n)
        })
    }

    function fe(t) {
        var e = W();
        if (t.target === e) {
            var n = z();
            e.removeEventListener(ht, fe), n.style.overflowY = "auto"
        }
    }

    function me(t, e) {
        "select" === e.input || "radio" === e.input ? Ee(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && v(e.inputValue) && Se(t, e)
    }

    function he(t, e) {
        t.disableButtons(), e.input ? Oe(t, e) : Me(t, e, !0)
    }

    function ge(t, e) {
        t.disableButtons(), e(U.cancel)
    }

    function ve(t, e) {
        t.closePopup({
            value: e
        })
    }

    function be(e, t, n, o) {
        t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function(t) {
            return Ve(e, t, n, o)
        }, t.keydownTarget = n.keydownListenerCapture ? window : W(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !0)
    }

    function ye(t, e, n) {
        for (var o = H(), i = 0; i < o.length; i++) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        W().focus()
    }

    function we(t, e, n) {
        e.toast ? De(t, e, n) : (Fe(t), _e(t), ze(t, e, n))
    }
    var Ce = function(t, e) {
            ht && et(e) ? (t.style.overflowY = "hidden", e.addEventListener(ht, fe)) : t.style.overflowY = "auto"
        },
        ke = function(t, e) {
            ! function() {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !V(document.body, F.iosfix)) {
                    var t = document.body.scrollTop;
                    document.body.style.top = "".concat(-1 * t, "px"), st(document.body, F.iosfix), te()
                }
            }(), "undefined" != typeof window && Xt() && (Gt(), window.addEventListener("resize", Gt)), m(document.body.children).forEach(function(t) {
                t === z() || function(t, e) {
                    if ("function" == typeof t.contains) return t.contains(e)
                }(t, z()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
            }), e && Jt(), setTimeout(function() {
                t.scrollTop = 0
            })
        },
        xe = function(t, e, n) {
            st(t, n.showClass.backdrop), X(e), st(e, n.showClass.popup), st([document.documentElement, document.body], F.shown), n.heightAuto && n.backdrop && !n.toast && st([document.documentElement, document.body], F["height-auto"])
        },
        Ae = function(t) {
            return t.checked ? 1 : 0
        },
        Pe = function(t) {
            return t.checked ? t.value : null
        },
        Be = function(t) {
            return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null
        },
        Ee = function(e, n) {
            function o(t) {
                return Te[n.input](i, Le(t), n)
            }
            var i = k();
            v(n.inputOptions) ? (Rt(), n.inputOptions.then(function(t) {
                e.hideLoading(), o(t)
            })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))
        },
        Se = function(e, n) {
            var o = e.getInput();
            G(o), n.inputValue.then(function(t) {
                o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), X(o), o.focus(), e.hideLoading()
            }).catch(function(t) {
                g("Error in inputValue promise: ".concat(t)), o.value = "", X(o), o.focus(), e.hideLoading()
            })
        },
        Te = {
            select: function(t, e, i) {
                var r = lt(t, F.select);
                e.forEach(function(t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("option");
                    o.value = e, o.innerHTML = n, i.inputValue.toString() === e.toString() && (o.selected = !0), r.appendChild(o)
                }), r.focus()
            },
            radio: function(t, e, a) {
                var c = lt(t, F.radio);
                e.forEach(function(t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("input"),
                        i = document.createElement("label");
                    o.type = "radio", o.name = F.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
                    var r = document.createElement("span");
                    r.innerHTML = n, r.className = F.label, i.appendChild(o), i.appendChild(r), c.appendChild(i)
                });
                var n = c.querySelectorAll("input");
                n.length && n[0].focus()
            }
        },
        Le = function(e) {
            var n = [];
            return "undefined" != typeof Map && e instanceof Map ? e.forEach(function(t, e) {
                n.push([e, t])
            }) : Object.keys(e).forEach(function(t) {
                n.push([t, e[t]])
            }), n
        },
        Oe = function(e, n) {
            var o = function(t, e) {
                var n = t.getInput();
                if (!n) return null;
                switch (e.input) {
                    case "checkbox":
                        return Ae(n);
                    case "radio":
                        return Pe(n);
                    case "file":
                        return Be(n);
                    default:
                        return e.inputAutoTrim ? n.value.trim() : n.value
                }
            }(e, n);
            n.inputValidator ? (e.disableInput(), Promise.resolve().then(function() {
                return n.inputValidator(o, n.validationMessage)
            }).then(function(t) {
                e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : Me(e, n, o)
            })) : e.getInput().checkValidity() ? Me(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage))
        },
        Me = function(e, t, n) {
            (t.showLoaderOnConfirm && Rt(), t.preConfirm) ? (e.resetValidationMessage(), Promise.resolve().then(function() {
                return t.preConfirm(n, t.validationMessage)
            }).then(function(t) {
                dt(P()) || !1 === t ? e.hideLoading() : ve(e, void 0 === t ? n : t)
            })) : ve(e, n)
        },
        He = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
        je = ["Escape", "Esc"],
        Ve = function(t, e, n, o) {
            n.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? Ie(t, e, n) : "Tab" === e.key ? qe(e, n) : -1 !== He.indexOf(e.key) ? Re() : -1 !== je.indexOf(e.key) && Ne(e, n, o)
        },
        Ie = function(t, e, n) {
            if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
                if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                Ot(), e.preventDefault()
            }
        },
        qe = function(t) {
            for (var e = t.target, n = H(), o = -1, i = 0; i < n.length; i++)
                if (e === n[i]) {
                    o = i;
                    break
                }
            t.shiftKey ? ye(0, o, -1) : ye(0, o, 1), t.stopPropagation(), t.preventDefault()
        },
        Re = function() {
            var t = B(),
                e = E();
            document.activeElement === t && dt(e) ? e.focus() : document.activeElement === e && dt(t) && t.focus()
        },
        Ne = function(t, e, n) {
            D(e.allowEscapeKey) && (t.preventDefault(), n(U.esc))
        },
        De = function(t, e, n) {
            t.popup.onclick = function() {
                e.showConfirmButton || e.showCancelButton || e.showCloseButton || e.input || n(U.close)
            }
        },
        Ue = !1,
        Fe = function(e) {
            e.popup.onmousedown = function() {
                e.container.onmouseup = function(t) {
                    e.container.onmouseup = void 0, t.target === e.container && (Ue = !0)
                }
            }
        },
        _e = function(e) {
            e.container.onmousedown = function() {
                e.popup.onmouseup = function(t) {
                    e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (Ue = !0)
                }
            }
        },
        ze = function(e, n, o) {
            e.container.onclick = function(t) {
                Ue ? Ue = !1 : t.target === e.container && D(n.allowOutsideClick) && o(U.backdrop)
            }
        };
    var We = function(t, e, n) {
            var o = O();
            G(o), e.timer && (t.timeout = new ue(function() {
                n("timer"), delete t.timeout
            }, e.timer), e.timerProgressBar && (X(o), setTimeout(function() {
                nt(e.timer)
            })))
        },
        Ke = function(t, e) {
            if (!e.toast) return D(e.allowEnterKey) ? e.focusCancel && dt(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && dt(t.confirmButton) ? t.confirmButton.focus() : void ye(0, -1, 1) : Ye()
        },
        Ye = function() {
            document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        };
    var Ze, Qe = Object.freeze({
        hideLoading: $t,
        disableLoading: $t,
        getInput: function(t) {
            var e = yt.innerParams.get(t || this),
                n = yt.domCache.get(t || this);
            return n ? Z(n.content, e.input) : null
        },
        close: oe,
        closePopup: oe,
        closeModal: oe,
        closeToast: oe,
        enableButtons: function() {
            ce(this, ["confirmButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            ce(this, ["confirmButton", "cancelButton"], !0)
        },
        enableInput: function() {
            return se(this.getInput(), !1)
        },
        disableInput: function() {
            return se(this.getInput(), !0)
        },
        showValidationMessage: function(t) {
            var e = yt.domCache.get(this);
            e.validationMessage.innerHTML = t;
            var n = window.getComputedStyle(e.popup);
            e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), X(e.validationMessage);
            var o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", F["validation-message"]), Q(o), st(o, F.inputerror))
        },
        resetValidationMessage: function() {
            var t = yt.domCache.get(this);
            t.validationMessage && G(t.validationMessage);
            var e = this.getInput();
            e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), ut(e, F.inputerror))
        },
        getProgressSteps: function() {
            return yt.domCache.get(this).progressSteps
        },
        _main: function(t) {
            ! function(t) {
                for (var e in t) Ft(i = e) || R('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== Zt.indexOf(o) && R('The parameter "'.concat(o, '" is incompatible with toasts'))), _t(n = e) && h(n, _t(n));
                var n, o, i
            }(t), W() && zt.swalCloseEventFinishedCallback && (zt.swalCloseEventFinishedCallback(), delete zt.swalCloseEventFinishedCallback), zt.deferDisposalTimer && (clearTimeout(zt.deferDisposalTimer), delete zt.deferDisposalTimer);
            var e = function(t) {
                var e = c({}, Wt.showClass, t.showClass),
                    n = c({}, Wt.hideClass, t.hideClass),
                    o = c({}, Wt, t);
                if (o.showClass = e, o.hideClass = n, t.animation === false) {
                    o.showClass = {
                        popup: "",
                        backdrop: "swal2-backdrop-show swal2-noanimation"
                    };
                    o.hideClass = {}
                }
                return o
            }(t);
            de(e), Object.freeze(e), zt.timeout && (zt.timeout.stop(), delete zt.timeout), clearTimeout(zt.restoreFocusTimeout);
            var n = function(t) {
                var e = {
                    popup: W(),
                    container: z(),
                    content: k(),
                    actions: S(),
                    confirmButton: B(),
                    cancelButton: E(),
                    closeButton: M(),
                    validationMessage: P(),
                    progressSteps: A()
                };
                return yt.domCache.set(t, e), e
            }(this);
            return Lt(this, e), yt.innerParams.set(this, e),
                function(n, o, i) {
                    return new Promise(function(t) {
                        var e = function t(e) {
                            n.closePopup({
                                dismiss: e
                            })
                        };
                        ee.swalPromiseResolve.set(n, t);
                        We(zt, i, e);
                        o.confirmButton.onclick = function() {
                            return he(n, i)
                        };
                        o.cancelButton.onclick = function() {
                            return ge(n, e)
                        };
                        o.closeButton.onclick = function() {
                            return e(U.close)
                        };
                        we(o, i, e);
                        be(n, zt, i, e);
                        if (i.toast && (i.input || i.footer || i.showCloseButton)) {
                            st(document.body, F["toast-column"])
                        } else {
                            ut(document.body, F["toast-column"])
                        }
                        me(n, i);
                        pe(i);
                        Ke(o, i);
                        o.container.scrollTop = 0
                    })
                }(this, n, e)
        },
        update: function(e) {
            var t = W(),
                n = yt.innerParams.get(this);
            if (!t || V(t, n.hideClass.popup)) return R("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            var o = {};
            Object.keys(e).forEach(function(t) {
                Je.isUpdatableParameter(t) ? o[t] = e[t] : R('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
            });
            var i = c({}, n, o);
            Lt(this, i), yt.innerParams.set(this, i), Object.defineProperties(this, {
                params: {
                    value: c({}, this.params, e),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
    });

    function $e() {
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise && g("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), Ze = this;
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            var o = Object.freeze(this.constructor.argsToParams(e));
            Object.defineProperties(this, {
                params: {
                    value: o,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                }
            });
            var i = this._main(this.params);
            yt.promise.set(this, i)
        }
    }
    $e.prototype.then = function(t) {
        return yt.promise.get(this).then(t)
    }, $e.prototype.finally = function(t) {
        return yt.promise.get(this).finally(t)
    }, c($e.prototype, Qe), c($e, Qt), Object.keys(Qe).forEach(function(t) {
        $e[t] = function() {
            if (Ze) return Ze[t].apply(Ze, arguments)
        }
    }), $e.DismissReason = U, $e.version = "9.5.4";
    var Je = $e;
    return Je.default = Je
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t
    } catch (e) {
        n.innerText = t
    }
}(document, ".swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");