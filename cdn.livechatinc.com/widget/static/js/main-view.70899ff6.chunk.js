(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [0], {
        344: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "a", (function() {
                return g
            })), n.d(t, "c", (function() {
                return j
            }));
            var r = n(1),
                a = n(4),
                i = n(0),
                o = n(5),
                c = n(335),
                l = function(e) {
                    return Object(o.z)("transition-delay:", e, "ms;")
                },
                s = Object(o.z)("&-enter,&-appear{opacity:0;transform:translateY(8px);}&-enter-active,&-appear-active{opacity:1;transform:translateY(0);transition:opacity 100ms ease-in,transform 200ms ease-in;}&-exit{opacity:1;transform:translateY(0);}&-exit-active{opacity:0;transform:translateY(8px);transition:opacity 100ms ease-in,transform 200ms ease-in;}"),
                u = function(e) {
                    var t = e.delay,
                        n = void 0 === t ? 0 : t,
                        o = Object(a.a)(e, ["delay"]);
                    return i.createElement(c.a, Object(r.a)({}, o, {
                        timeout: 200 + n,
                        classNames: s,
                        className: l(n)
                    }))
                },
                d = function(e) {
                    return void 0 === e && (e = 0), Object(o.z)("transition-delay:", e, "ms;&-enter,&-appear{opacity:0;}&-enter-active,&-appear-active{opacity:1;transition:opacity 200ms ease-out;}&-exit{opacity:1;}&-exit-active{opacity:0;transition:opacity 200ms ease-out;}")
                },
                m = function(e) {
                    var t = e.delay,
                        n = void 0 === t ? 0 : t,
                        o = Object(a.a)(e, ["delay"]);
                    return i.createElement(c.a, Object(r.a)({}, o, {
                        timeout: 200 + n,
                        classNames: d(n)
                    }))
                },
                p = n(25),
                f = function(e) {
                    var t = e.slideDuration,
                        n = e.opacityDuration,
                        r = e.opacityDelay,
                        a = e.theme;
                    return Object(o.z)("&-exit{opacity:1;}&-exit-active,&-exit-done{opacity:0;transform:translateX(100%);transition:transform ", t, "ms ", a.transitions.easings.swift, ",opacity ", n, "ms linear ", r, "ms;}")
                },
                b = (Object(p.b)((function(e) {
                    var t = e.transitionDuration,
                        n = e.onTransitionStart,
                        o = e.onTransitionEnd,
                        l = e.theme,
                        s = Object(a.a)(e, ["transitionDuration", "onTransitionStart", "onTransitionEnd", "theme"]),
                        u = t,
                        d = Math.floor(2 / 3 * t),
                        m = t - d;
                    return i.createElement(c.a, Object(r.a)({}, s, {
                        timeout: t,
                        onExited: o,
                        onEntered: o,
                        onExiting: n,
                        onEntering: n,
                        classNames: f({
                            slideDuration: u,
                            opacityDuration: d,
                            opacityDelay: m,
                            theme: l
                        })
                    }))
                })), function(e) {
                    return Object(o.z)("transition-delay:", e, "ms;")
                }),
                h = function(e) {
                    return Object(o.z)("&-enter,&-appear{opacity:0;transform:translateY(30px);}&-enter-active,&-appear-active{opacity:1;transform:translateY(0);transition:opacity 300ms ", e.transitions.easings.smooth, ",transform 400ms ", e.transitions.easings.smooth, ";}")
                },
                g = Object(p.b)((function(e) {
                    var t = e.theme,
                        n = e.delay,
                        o = void 0 === n ? 0 : n,
                        l = Object(a.a)(e, ["theme", "delay"]);
                    return i.createElement(c.a, Object(r.a)({}, l, {
                        timeout: 400 + o,
                        className: b(o),
                        classNames: h(t)
                    }))
                })),
                v = {
                    enter: 300,
                    exit: 300
                },
                E = function(e) {
                    return Object(o.z)("&-enter{transform:translate(-50%,20%);opacity:0;}&-enter-active,&-enter-done{transition:transform ", 300, "ms ", e.transitions.easings.swift, ",opacity ", 300, "ms ", e.transitions.easings.swift, ";transform:translate(-50%,0%);opacity:1;}&-exit{transform:translate(-50%,0%);opacity:1;}&-exit-active,&-exit-done{transform:translate(-50%,20%);opacity:0;transition:transform ", 300, "ms ", e.transitions.easings.swift, ",opacity ", 150, "ms ease-out 50ms;}")
                },
                j = Object(p.b)((function(e) {
                    var t = e.theme,
                        n = e.nodeRef,
                        o = Object(a.a)(e, ["theme", "nodeRef"]);
                    return i.createElement(c.a, Object(r.a)({}, o, {
                        nodeRef: n,
                        classNames: E(t),
                        timeout: v
                    }))
                }))
        },
        347: function(e, t, n) {
            "use strict";
            var r = n(1),
                a = n(0),
                i = n(5),
                o = n(25),
                c = n(2),
                l = n(4),
                s = n(157),
                u = function(e, t, n) {
                    return void 0 === n && (n = []), e.buttons ? Object(r.a)({}, e, {
                        buttons: e.buttons.map((function(e) {
                            return Object(r.a)({}, e, {
                                disabled: !!Object(c.n)((function(t) {
                                    return t === e.type
                                }), n)
                            }, t && {
                                "aria-disabled": "true"
                            })
                        }))
                    }) : e
                },
                d = function(e) {
                    var t = e.card,
                        n = e.disabledButtons,
                        i = e.eventId,
                        o = e.compactButtons,
                        c = e.onActionButtonClick,
                        d = Object(l.a)(e, ["card", "disabledButtons", "eventId", "compactButtons", "onActionButtonClick"]),
                        m = a.useState(!1),
                        p = m[0],
                        f = m[1];
                    return a.useEffect((function() {
                        if (p) {
                            var e = setTimeout((function() {
                                f(!1)
                            }), 1e3);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [p]), a.createElement(s.b, Object(r.a)({
                        card: u(t, p, n),
                        onButtonClick: function(e) {
                            p || (f(!0), c({
                                button: t.buttons[e],
                                event: i
                            }))
                        },
                        compactButtons: o
                    }, d))
                },
                m = n(196),
                p = Object(o.b)((function(e) {
                    var t, n, i = e.theme,
                        o = Object(l.a)(e, ["theme"]);
                    return i && "modern" === i.name && (t = 150, n = 250), a.createElement(m.a, Object(r.a)({
                        maxWidth: t,
                        maxHeight: n
                    }, o))
                })),
                f = n(42),
                b = Object(i.D)("span", {
                    target: "e1vbunaw0"
                })("font-size:2.5em;"),
                h = function(e) {
                    var t = e.event,
                        n = e.radiusType;
                    return a.createElement(i.c, {
                        radiusType: n
                    }, a.createElement(i.m, null, a.createElement(b, null, a.createElement(f.a, null, t.properties.text))))
                },
                g = n(197),
                v = n(15),
                E = n(190),
                j = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(v.a)(t, e);
                    var n = t.prototype;
                    return n.componentDidUpdate = function(e, t, n) {
                        n && this._messageListContext.scrollToBottom()
                    }, n.getSnapshotBeforeUpdate = function(e) {
                        return !this.shouldRenderPreview(e) && this.shouldRenderPreview() && this._messageListContext.isScrollOnBottom()
                    }, n.shouldRenderPreview = function(e) {
                        return void 0 === e && (e = this.props), Boolean(e.urlPreview.properties.title)
                    }, n.render = function() {
                        var e = this;
                        return a.createElement(i.l, null, (function(t) {
                            e._messageListContext = t;
                            var n = e.props,
                                r = n.urlPreview.properties,
                                o = n.radiusType,
                                l = Object(c.ab)(["url", "link"], r.image);
                            return e.shouldRenderPreview() ? a.createElement(i.c, {
                                radiusType: o
                            }, a.createElement(p, l), a.createElement(i.n, {
                                subtitle: r.description,
                                title: r.title
                            })) : a.createElement(i.c, {
                                radiusType: o
                            }, a.createElement(E.a, {
                                text: r.text
                            }))
                        }))
                    }, t
                }(a.Component),
                O = n(192),
                y = n(51),
                x = Object(i.D)("div", {
                    target: "e1kfksj70"
                })("margin:0;margin-bottom:4px;font-size:1em;font-weight:400;");
            t.a = Object(o.b)((function(e) {
                var t = e.event,
                    n = e.mobile,
                    o = e.radiusType,
                    l = e.disabledButtons,
                    s = e.onActionButtonClick,
                    u = e.onShow,
                    m = void 0 === u ? c.T : u,
                    f = e.theme,
                    b = e.compactButtons,
                    v = void 0 !== b && b,
                    E = e.rtl,
                    w = n && v;
                switch (Object(y.n)(m), t.type) {
                    case "carousel":
                        return a.createElement(i.e, {
                            dir: E ? "rtl" : "ltr",
                            mobile: n,
                            scrollableElementPadding: f.spaces.space5
                        }, t.properties.cards.map((function(e, n) {
                            return a.createElement(d, {
                                key: n,
                                card: e,
                                horizontalLayout: w,
                                eventId: t.id,
                                compactButtons: v,
                                disabledButtons: l,
                                onActionButtonClick: s,
                                TitleComponent: x
                            })
                        })));
                    case "message":
                    case "message_draft":
                        return a.createElement(g.a, Object(r.a)({}, t.properties, {
                            own: t.own,
                            radiusType: o,
                            draft: "message_draft" === t.type && null === t.serverId,
                            eventId: t.properties.quickReplies && t.id
                        }));
                    case "emoji":
                        return a.createElement(h, {
                            event: t,
                            radiusType: o
                        });
                    case "rich_message":
                        return a.createElement(d, {
                            eventId: t.id,
                            horizontalLayout: w,
                            card: t.properties.card,
                            compactButtons: v,
                            disabledButtons: l,
                            onActionButtonClick: s
                        });
                    case "sticker":
                        return a.createElement(O.a, t.properties);
                    case "url_preview":
                        return a.createElement(j, {
                            radiusType: o,
                            urlPreview: t
                        });
                    case "image_preview":
                        var k = Object(c.ab)(["url", "link", "width", "height", "srcSet", "alternativeText", "name"], t.properties);
                        return a.createElement(p, k)
                }
                return null
            }))
        },
        378: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                a = n(34),
                i = n(5),
                o = n(51),
                c = n(373),
                l = n(125),
                s = n(3),
                u = n(6),
                d = n(1),
                m = n(2),
                p = n(336),
                f = n(99),
                b = n(129),
                h = n(105),
                g = n(10),
                v = n(344),
                E = n(4),
                j = n(335),
                O = function(e, t) {
                    var n = new Date(e);
                    return n.toLocaleDateString() === (new Date).toLocaleDateString() ? t.today(n) : function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() - 1), e.toLocaleDateString() === t.toLocaleDateString()
                    }(n) ? t.yesterday(n) : n.toLocaleDateString([], {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    })
                },
                y = function() {
                    return "IntersectionObserver" in window && "IntersectionObserverEntry" in window
                },
                x = function(e, t, n) {
                    var r = Object(m.yb)(t).sort((function(e, t) {
                            return e.timestamp - t.timestamp
                        })),
                        a = Object(m.o)((function(t) {
                            return t.node === e
                        }), r);
                    if (a > -1) return {
                        currentTimestamp: r[a].timestamp,
                        previousTimestamp: a > 0 ? r[a - 1].timestamp : n
                    }
                },
                w = function(e, t) {
                    var n = r.useRef({
                            beginingOfTime: t,
                            currentTimestamp: 0,
                            subscribers: [],
                            dividers: {}
                        }),
                        a = function(e) {
                            var t = e.rootRef,
                                n = e.rootMargin,
                                a = e.threshold,
                                i = e.intersectionHandler;
                            if (y()) {
                                var c = r.useRef(null),
                                    l = r.useRef([]),
                                    s = Object(o.l)(i);
                                return r.useEffect((function() {
                                    return c.current = new IntersectionObserver((function(e, t) {
                                            s.current && s.current(e, t)
                                        }), {
                                            root: t.current,
                                            rootMargin: n,
                                            threshold: a
                                        }), l.current.forEach((function(e) {
                                            return c.current.observe(e)
                                        })), l.current = [],
                                        function() {
                                            return c.current.disconnect()
                                        }
                                }), [n, a, t, s]), Object(o.d)((function() {
                                    return {
                                        add: function(e) {
                                            c.current ? c.current.observe(e) : l.current.push(e)
                                        },
                                        remove: function(e) {
                                            c.current ? c.current.unobserve(e) : l.current = l.current.filter((function(t) {
                                                return t !== e
                                            }))
                                        }
                                    }
                                }))
                            }
                        }({
                            rootRef: e,
                            intersectionHandler: function(e) {
                                var t = function(e, t, n) {
                                    var r = e.filter((function(e) {
                                        return e.isIntersecting
                                    })).sort((function(e, t) {
                                        return e.boundingClientRect.top - t.boundingClientRect.top
                                    }))[0];
                                    if (r) {
                                        var a = x(r.target, t, n);
                                        return a && a.previousTimestamp
                                    }
                                    var i = e.filter((function(e) {
                                        return e.boundingClientRect.top <= e.rootBounds.top
                                    })).sort((function(e, t) {
                                        return e.boundingClientRect.top - t.boundingClientRect.top
                                    })).reverse()[0];
                                    if (i) {
                                        var o = x(i.target, t, n);
                                        return o && o.currentTimestamp
                                    }
                                }(e, n.current.dividers, n.current.beginingOfTime);
                                if (t) {
                                    var r = {
                                        timestamp: t,
                                        direction: t > n.current.currentTimestamp ? "down" : "up"
                                    };
                                    n.current.currentTimestamp = t, n.current.subscribers.forEach((function(e) {
                                        return e(r)
                                    }))
                                }
                            },
                            threshold: .2
                        });
                    return r.useEffect((function() {
                        var e = Object(m.yb)(n.current.dividers).map((function(e) {
                                return e.timestamp
                            })),
                            t = Math.max.apply(Math, e.concat([n.current.beginingOfTime]));
                        n.current.currentTimestamp = t, n.current.subscribers.forEach((function(e) {
                            return e({
                                timestamp: t,
                                direction: "up"
                            })
                        }))
                    }), []), Object(o.d)((function() {
                        return {
                            add: function(e) {
                                n.current.dividers[e.timestamp] = e, a && a.add(e.node)
                            },
                            remove: function(e) {
                                a && a.remove(e.node), delete n.current.dividers[e.timestamp]
                            },
                            subscribe: function(e) {
                                n.current.subscribers.push(e)
                            },
                            unsubscribe: function(e) {
                                n.current.subscribers = n.current.subscribers.filter((function(t) {
                                    return t !== e
                                }))
                            },
                            setBeginingOfTime: function(e) {
                                n.current.beginingOfTime = e
                            },
                            currentTimestamp: function() {
                                return n.current.currentTimestamp
                            }
                        }
                    }))
                },
                k = r.createContext(null),
                C = function() {
                    return r.useContext(k)
                },
                S = function(e) {
                    var t = e.children,
                        n = e.rootRef,
                        a = e.beginingOfTime,
                        i = w(n, a);
                    return r.useEffect((function() {
                        i.setBeginingOfTime(a)
                    })), r.createElement(k.Provider, {
                        value: i
                    }, t)
                },
                R = Object(i.D)("span", {
                    displayName: "DividerLabel",
                    target: "eceo2x80"
                })("padding:4px 8px;font-size:12px;position:relative;padding:0 8px;&:before,&:after{content:'';width:50vw;height:0;border-top:1px solid;border-top-color:inherit;position:absolute;top:50%;}&:before{right:100%;}&:after{left:100%;}"),
                D = Object(i.D)(R, {
                    target: "e1g4em790"
                })("color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";overflow:hidden;border:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";padding:2px 6px;transition:opacity 150ms linear;", (function(e) {
                    return !e.visible && Object(i.z)("opacity:0;pointer-events:none;")
                })),
                z = Object(i.D)("span", {
                    target: "e1g4em791"
                })(),
                T = function(e) {
                    return Object(i.z)("&-enter ", z, ",&-exit ", z, "{position:relative;}&-enter ", z, "{top:", "up" === e ? "-2em" : "2em", ";}&-enter-active ", z, "{top:0;transition:top ", 200, "ms ease-out;}&-exit{opacity:1;}&-exit-active{opacity:0;transition:opacity ", 200, "ms ease-out;}&-exit ", z, "{top:0;position:relative;}&-exit-active ", z, "{top:", "up" === e ? "2em" : "-2em", ";transition:top ", 200, "ms ease-out;}")
                };
            var _ = y() ? function(e) {
                    var t = e.isUserScrollingSource,
                        n = Object(E.a)(e, ["isUserScrollingSource"]),
                        i = Object(o.t)(t),
                        c = C(),
                        l = r.useState({
                            direction: "up",
                            timestamp: c.currentTimestamp()
                        }),
                        s = l[0],
                        u = l[1];
                    return r.useEffect((function() {
                        c.subscribe(u);
                        var e = c.currentTimestamp();
                        return e !== s.timestamp && u({
                                direction: "up",
                                timestamp: e
                            }),
                            function() {
                                return c.unsubscribe(u)
                            }
                    }), [c]), s.timestamp ? r.createElement(a.a, null, (function(e) {
                        var t = O(s.timestamp, {
                            today: function() {
                                return e("today")
                            },
                            yesterday: function() {
                                return e("yesterday")
                            }
                        });
                        return r.createElement(p.a, {
                            component: null,
                            childFactory: function(e) {
                                return r.cloneElement(e, {
                                    classNames: T(s.direction)
                                })
                            }
                        }, r.createElement(j.a, {
                            key: t,
                            classNames: T(s.direction),
                            timeout: 200
                        }, r.createElement(D, Object(d.a)({}, n, {
                            visible: i
                        }), r.createElement(z, null, t))))
                    })) : null
                } : function() {
                    return null
                },
                I = function(e) {
                    var t = C();
                    r.useEffect((function() {
                        var n = {
                            timestamp: e.timestamp,
                            node: e.nodeRef.current
                        };
                        return t.add(n),
                            function() {
                                t.remove(n)
                            }
                    }), [])
                },
                M = Object(i.D)("div", {
                    target: "ehmqpie0"
                })("height:20px;margin:16px -0.5em;text-align:center;overflow:hidden;"),
                F = function(e) {
                    var t = e.timestamp,
                        n = r.useRef(null);
                    return I({
                        timestamp: t,
                        nodeRef: n
                    }), r.createElement(a.a, null, (function(e) {
                        return r.createElement(M, {
                            innerRef: n
                        }, r.createElement(R, null, O(t, {
                            today: function(e) {
                                return e.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            },
                            yesterday: function() {
                                return e("yesterday")
                            }
                        })))
                    }))
                },
                B = n(58),
                P = Object(i.D)("div", {
                    displayName: "NewMessageHorizontalDivider",
                    target: "eacid5n0"
                })("height:27px;margin:16px -0.5em;text-align:center;overflow:hidden;"),
                A = Object(i.D)(B.z, {
                    target: "eacid5n1"
                })("display:inline-flex;padding:2px 12px;font-weight:normal;box-shadow:none;height:auto;&:before,&:after{border-top:0;}"),
                N = function(e) {
                    var t = e.unseenCount,
                        n = e.setScrollTargetNode,
                        i = r.useRef(null);
                    return Object(o.n)((function() {
                        i.current && n(i.current)
                    })), r.createElement(a.a, null, (function(e) {
                        return r.createElement(P, {
                            innerRef: i
                        }, r.createElement(A, {
                            minScale: .9,
                            maxScale: 1.05
                        }, e(1 === t ? "new_message" : "new_messages")))
                    }))
                },
                H = n(25),
                L = n(11),
                q = Object(i.D)("div", {
                    displayName: "Divider",
                    target: "evqzb400"
                })("border-top:1px solid rgba(0,0,0,0.05);margin:0 1em;margin-bottom:-1px;z-index:10;position:relative;"),
                V = Object(i.D)("div", {
                    target: "ekfrplk0"
                })((function(e) {
                    return e.theme.typography.basic
                }), " line-height:1.2;color:inherit;display:flex;width:100%;flex-direction:", (function(e) {
                    return e.row ? "row" : "column"
                }), ";"),
                U = function() {
                    return !0
                },
                W = Object(a.c)((function(e, t) {
                    var n = t.name,
                        r = t.condition,
                        a = void 0 === r ? U : r;
                    return function(e) {
                        var t = Object(u.g)(n, e),
                            r = t.enabled,
                            i = Object(E.a)(t, ["enabled"]);
                        return {
                            shouldRender: r && a(i)
                        }
                    }
                }))((function(e) {
                    var t = e.shouldRender,
                        n = e.children;
                    return t ? n : null
                })),
                Y = n(15),
                G = n(356),
                Z = n(195),
                K = n(14),
                Q = n(44),
                J = n.n(Q),
                X = function(e) {
                    return document.getElementById(e)
                },
                $ = function(e) {
                    var t = e.portalId,
                        n = void 0 === t ? "overlay_portal_container" : t,
                        a = e.children,
                        i = r.useState((function() {
                            return X(n)
                        })),
                        c = i[0],
                        l = i[1];
                    return Object(o.n)((function() {
                        c || l(X(n))
                    })), c ? Q.createPortal(a, c) : null
                },
                ee = n(12),
                te = function(e) {
                    return {
                        enter: 300,
                        exit: e + 300
                    }
                },
                ne = function(e, t) {
                    return Object(i.z)("&-enter,&-appear{background-color:rgba(0,0,0,0);}&-enter-active,&-appear-active,&-enter-done,&-appear-done{background-color:rgba(0,0,0,0.5);transition:background-color ", 300, "ms ", t.transitions.easings.smooth, ";}&-exit{background-color:rgba(0,0,0,0.5);}&-exit-active,&-exit-done{background-color:rgba(0,0,0,0);transition:background-color ", 300, "ms ", t.transitions.easings.smooth, ";transition-delay:", e, "ms;}")
                },
                re = Object(i.z)("z-index:999;position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;"),
                ae = function(e) {
                    var t = r.useRef(null);
                    return Object(o.g)("touchmove", t), r.createElement("div", Object(d.a)({
                        ref: t,
                        className: re
                    }, e))
                },
                ie = r.memo(Object(H.b)((function(e) {
                    var t = e.shown,
                        n = e.exitDelay,
                        a = void 0 === n ? 100 : n,
                        i = e.onPress,
                        o = e.theme,
                        c = Object(ee.l)({
                            onPress: i
                        }).pressProps;
                    return r.createElement(p.a, {
                        appear: !0,
                        component: null
                    }, t && r.createElement(j.a, {
                        classNames: ne(a, o),
                        timeout: te(a)
                    }, r.createElement(ae, c)))
                }))),
                oe = Object(i.z)("margin:0;background:transparent;"),
                ce = function(e) {
                    return Object(i.z)("position:absolute;z-index:1500;width:calc(100% - 2rem);max-width:290px;top:1em;left:50%;background:", e.colors.surface.light, ";box-shadow:", e.boxShadow.lg, ";padding:", 1 * e.spaceBase, "px;border-radius:", e.borderRadius.md, ";")
                },
                le = Object(i.D)("div", {
                    target: "e1yhh5l70"
                })("display:flex;flex-direction:row-reverse;"),
                se = Object(i.D)("div", {
                    target: "e1yhh5l71"
                })("padding:", (function(e) {
                    return 1 * e.theme.spaceBase
                }), "px;padding-top:0;"),
                ue = r.forwardRef((function(e, t) {
                    var n = e.onClose,
                        a = void 0 === n ? m.T : n,
                        i = e.children,
                        o = e.theme,
                        c = e["aria-label"],
                        s = e["aria-labelledby"],
                        u = Object(E.a)(e, ["onClose", "children", "theme", "aria-label", "aria-labelledby"]);
                    Object(Z.d)();
                    var p = Object(Z.c)({
                            isOpen: !0,
                            isDismissable: !0,
                            onClose: a
                        }, t).overlayProps,
                        f = Object(Z.b)().modalProps,
                        b = Object(G.a)({
                            "aria-label": c,
                            "aria-labelledby": s
                        }, t).dialogProps;
                    return r.createElement(l.a, {
                        contain: !0,
                        autoFocus: !0,
                        restoreFocus: !0
                    }, r.createElement("div", Object(d.a)({}, Object(K.e)(u, p, f, b), {
                        ref: t,
                        className: ce(o)
                    }), r.createElement(le, null, r.createElement(B.j, {
                        className: oe,
                        onPress: a,
                        "aria-label": "Close modal"
                    }, r.createElement(B.e, {
                        "aria-hidden": !0
                    }))), r.createElement(se, null, i)))
                })),
                de = Object(H.b)((function(e) {
                    var t = e.onClose,
                        n = void 0 === t ? m.T : t,
                        a = e.shown,
                        i = e.children,
                        o = e.theme,
                        c = Object(E.a)(e, ["onClose", "shown", "children", "theme"]),
                        l = r.useRef(null);
                    return r.createElement($, null, r.createElement(ie, {
                        shown: a,
                        onPress: n,
                        exitDelay: 25
                    }), r.createElement(p.a, {
                        component: null
                    }, a && r.createElement(v.c, {
                        nodeRef: l
                    }, r.createElement(ue, Object(d.a)({
                        onClose: n,
                        theme: o,
                        ref: l
                    }, c), i))))
                })),
                me = n(341),
                pe = n(357),
                fe = Object(i.D)("form", {
                    displayName: "Form",
                    section: !0,
                    target: "e1nyj5rz0"
                })(),
                be = n(233),
                he = Object(i.D)(be.a, {
                    target: "exlwksr0"
                })("margin:0;transition:height 100ms ", (function(e) {
                    return e.theme.transitions.easings.linear
                }), ";overflow:hidden;", (function(e) {
                    return e.theme.typography.errorCaption
                })),
                ge = function(e) {
                    var t = e.id,
                        n = e.error,
                        a = r.useRef(null);
                    return r.useLayoutEffect((function() {
                        var e = a.current;
                        if (n) {
                            e.style.height = "auto";
                            var t = getComputedStyle(e).height;
                            e.style.height = "0",
                                function(e) {
                                    e.scrollTop
                                }(e), e.style.height = t
                        } else e.style.height = "0"
                    }), [n]), r.createElement(he, {
                        id: t,
                        innerRef: a,
                        role: "alert"
                    }, n)
                },
                ve = Object(i.D)("label", {
                    target: "e2zxkge0"
                })("width:100%;display:inline-block;a{color:inherit;}", (function(e) {
                    var t = e.theme,
                        n = e.isRequired,
                        r = void 0 !== n && n;
                    return [t.typography.basic, r && Object(i.z)("&::after{display:inline;content:'\\00a0*';", t.typography.errorCaption, "}")]
                }));
            ve.defaultProps = {
                textWrap: !0
            };
            var Ee = ve,
                je = Object(i.D)("legend", {
                    target: "e1kph7ea0"
                })("padding:0;display:inline-block;width:100%;a{color:inherit;}", (function(e) {
                    var t = e.theme,
                        n = e.isRequired,
                        r = void 0 !== n && n;
                    return [t.typography.basic, r && Object(i.z)("&::after{display:inline;content:'\\00a0*';", t.typography.errorCaption, "}")]
                }));
            je.defaultProps = {
                textWrap: !0
            };
            var Oe = je,
                ye = Object(i.D)("div", {
                    target: "e1oy1v900"
                })((function(e) {
                    return {
                        margin: .25 * e.theme.spaceBase + "px 0"
                    }
                })),
                xe = Object(i.D)("div", {
                    target: "e1oy1v901"
                })("position:relative;display:inline-block;cursor:pointer;width:40px;height:40px;outline-style:", (function(e) {
                    return e.focused ? "auto" : "none"
                }), ";"),
                we = Object(i.D)("input", {
                    target: "e1oy1v902"
                })("opacity:0;margin:0;padding:0;height:100%;width:100%;position:absolute;cursor:pointer;"),
                ke = Object(i.D)("div", {
                    target: "e1oy1v903"
                })("width:", (function(e) {
                    return .75 * e.theme.spaceBase
                }), "px;display:inline-block;"),
                Ce = Object(i.D)(B.k, {
                    target: "e1oy1v904"
                })((function(e) {
                    var t = e.theme;
                    return e.checked ? Object(i.z)("color:", t.colors.text.white, ";background-color:", t.colors.cta, ";") : Object(i.z)("color:", t.colors.text.black, ";background-color:", t.colors.lightVariant, ";")
                })),
                Se = function(e) {
                    var t = e.rate,
                        n = e.input,
                        a = e.label,
                        i = e.required,
                        c = Object(ee.f)().isFocusVisible,
                        l = Object(o.j)(),
                        s = l[0],
                        u = l[1],
                        p = n.value === t,
                        f = function(e) {
                            e.preventDefault(), n.onChange(p ? "" : t)
                        };
                    return r.createElement(xe, Object(d.a)({}, u, {
                        focused: c && s
                    }), r.createElement(we, {
                        type: "radio",
                        name: n.name,
                        checked: p,
                        value: t,
                        "aria-required": i,
                        "aria-label": a,
                        onClick: f,
                        onKeyDown: function(e) {
                            c && "Enter" === e.key && f(e)
                        },
                        onChange: m.T
                    }), r.createElement(Ce, {
                        checked: p
                    }, "good" === t ? r.createElement(B.w, null) : r.createElement(B.v, null)))
                },
                Re = function(e) {
                    var t = e.input,
                        n = e.meta,
                        i = e.required,
                        o = n.error && n.touched;
                    return r.createElement(a.a, null, (function(e) {
                        return r.createElement(ye, null, r.createElement(Se, {
                            rate: "good",
                            input: t,
                            label: e("rate_me_good_tooltip"),
                            required: i
                        }), r.createElement(ke, null), r.createElement(Se, {
                            rate: "bad",
                            input: t,
                            label: e("rate_me_bad_tooltip"),
                            required: i
                        }), r.createElement(ge, {
                            error: o ? n.error : null
                        }))
                    }))
                },
                De = n(71),
                ze = Object(i.D)("div", {
                    target: "ewzcz810"
                })("position:relative;border:1px solid ", (function(e) {
                    return e.theme.colors.grayscale[500]
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.sm
                }), ";width:100%;background-color:", (function(e) {
                    return e.theme.colors.grayscale[50]
                }), ";transition:border-color 100ms linear;", (function(e) {
                    var t = e.focused,
                        n = e.theme;
                    return Object(d.a)({
                        margin: .25 * n.spaceBase + "px 0"
                    }, t && {
                        borderColor: n.colors.accent,
                        backgroundColor: n.colors.surface.light
                    })
                })),
                Te = Object(i.D)("select", {
                    target: "ewzcz811"
                })("width:100%;-webkit-appearance:none;font-family:inherit;background-color:transparent;border:none;:focus,:active{outline:none;}::-ms-expand{display:none;}", (function(e) {
                    var t = e.theme,
                        n = t.spaceBase,
                        r = t.typography;
                    return Object(d.a)({}, r.input, {
                        padding: n + "px",
                        paddingRight: "32px",
                        ":-moz-focusring": {
                            color: "transparent",
                            textShadow: "0 0 0 " + r.input.color
                        }
                    })
                })),
                _e = Object(i.z)("position:absolute;pointer-events:none;right:0;top:calc(50% - ", 16, "px);"),
                Ie = function(e) {
                    var t = e.onFocus,
                        n = e.onBlur,
                        a = Object(E.a)(e, ["onFocus", "onBlur"]),
                        i = r.useState(!1),
                        o = i[0],
                        c = i[1];
                    return r.createElement(ze, {
                        focused: o
                    }, r.createElement(Te, Object(d.a)({}, a, {
                        onFocus: function(e) {
                            t && t(e), c(!0)
                        },
                        onBlur: function(e) {
                            n && n(e), c(!1)
                        }
                    })), r.createElement(De.e, {
                        "aria-hidden": !0,
                        focusable: "false",
                        className: _e
                    }))
                },
                Me = function(e) {
                    var t = e.input,
                        n = e.meta,
                        a = Object(E.a)(e, ["input", "meta"]),
                        i = n.touched && !!n.error;
                    return r.createElement(r.Fragment, null, r.createElement(Ie, Object(d.a)({}, t, a, {
                        "aria-invalid": i || void 0
                    })), r.createElement(ge, {
                        error: i ? n.error : null
                    }))
                },
                Fe = Object(i.D)("input", {
                    target: "e1xplv9i0"
                })("width:100%;border:1px solid ", (function(e) {
                    return e.theme.colors.grayscale[500]
                }), ";-webkit-appearance:none;background-color:", (function(e) {
                    return e.theme.colors.grayscale[50]
                }), ";font-family:inherit;box-shadow:none;transition:border-color 100ms linear,background-color 100ms linear;&::placeholder{opacity:1;color:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";}&:focus,:active{outline:none;border-color:", (function(e) {
                    return e.theme.colors.accent
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";}", (function(e) {
                    var t = e.theme,
                        n = t.spaceBase,
                        r = t.typography,
                        a = t.borderRadius;
                    return Object(d.a)({
                        borderRadius: a.def
                    }, r.input, {
                        padding: n + "px",
                        margin: .25 * n + "px 0"
                    })
                })),
                Be = function(e) {
                    var t = e.value,
                        n = e.errorMessageProps,
                        a = e.inputRef,
                        i = Object(E.a)(e, ["value", "errorMessageProps", "inputRef"]);
                    return r.createElement(r.Fragment, null, r.createElement(Fe, Object(d.a)({}, i, {
                        innerRef: a,
                        value: t || ""
                    })), r.createElement(ge, n))
                },
                Pe = Object(i.D)("textarea", {
                    target: "e61759e0"
                })("width:100%;border:1px solid ", (function(e) {
                    return e.theme.colors.grayscale[500]
                }), ";-webkit-appearance:none;background-color:", (function(e) {
                    return e.theme.colors.grayscale[50]
                }), ";font-family:inherit;box-shadow:none;transition:border-color 100ms linear;resize:none;:focus,:active{outline:none;border-color:", (function(e) {
                    return e.theme.colors.accent
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";}", (function(e) {
                    var t = e.theme;
                    return Object(d.a)({
                        borderRadius: t.borderRadius.def
                    }, t.typography.input, {
                        padding: t.spaceBase + "px",
                        margin: .25 * t.spaceBase + "px 0"
                    })
                })),
                Ae = function(e) {
                    var t = e.value,
                        n = e.errorMessageProps,
                        a = e.textareaRef,
                        i = Object(E.a)(e, ["value", "errorMessageProps", "textareaRef"]);
                    return r.createElement(r.Fragment, null, r.createElement(Pe, Object(d.a)({}, i, {
                        innerRef: a,
                        value: t || ""
                    })), r.createElement(ge, n))
                },
                Ne = function(e) {
                    return r.createElement("path", Object(d.a)({
                        d: "M4,0.5 C2.06700338,0.5 0.5,2.06700338 0.5,4 L0.5,12 C0.5,13.9329966 2.06700338,15.5 4,15.5 L12,15.5 C13.9329966,15.5 15.5,13.9329966 15.5,12 L15.5,4 C15.5,2.06700338 13.9329966,0.5 12,0.5 L4,0.5 Z"
                    }, e))
                },
                He = function(e) {
                    return r.createElement("path", Object(d.a)({
                        d: "M4,0 L12,0 C14.209139,-4.4408921e-16 16,1.790861 16,4 L16,12 C16,14.209139 14.209139,16 12,16 L4,16 C1.790861,16 0,14.209139 0,12 L0,4 C-4.4408921e-16,1.790861 1.790861,0 4,0 Z"
                    }, e))
                },
                Le = function(e) {
                    return r.createElement("polyline", Object(d.a)({
                        strokeWidth: "2",
                        strokeDasharray: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        points: "5 7.90626754 7.06606709 10 12 5"
                    }, e))
                },
                qe = function(e) {
                    return Object(i.z)("animation-iteration-count:1;animation-timing-function:", e.transitions.easings.linear, ";animation-fill-mode:forwards;animation-duration:300ms;")
                },
                Ve = Object(i.C)("0%{opacity:0;}33.33%{opacity:1;}100%{opacity:1;}"),
                Ue = Object(i.C)("0%{stroke-dashoffset:10;}33.33%{stroke-dashoffset:10;}77.78%{stroke-dashoffset:0;}100%{stroke-dashoffset:0;}"),
                We = Object(H.b)((function(e) {
                    var t = e.className,
                        n = e.checked,
                        a = e.focused,
                        o = e.theme,
                        c = Object(E.a)(e, ["className", "checked", "focused", "theme"]);
                    return r.createElement("svg", Object(d.a)({
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        fillRule: "evenodd",
                        className: Object(i.A)(Object(i.z)("border-radius:", o.borderRadius.sm, ";background-color:", o.colors.grayscale[n ? 600 : 100], ";"), a && Object(i.z)("box-shadow:", o.boxShadow.outline, ";"), t)
                    }, c), r.createElement(Ne, {
                        stroke: o.colors.grayscale[600],
                        strokeWidth: "2"
                    }), n && r.createElement(r.Fragment, null, r.createElement(He, {
                        fill: o.colors.grayscale[600],
                        className: Object(i.z)(qe(o), " animation-name:", Ve, ";")
                    }), r.createElement(Le, {
                        stroke: o.colors.grayscale[100],
                        className: Object(i.z)(qe(o), " animation-name:", Ue, ";")
                    })))
                })),
                Ye = Object(i.D)("input", {
                    target: "e81sjne0"
                })("opacity:0;margin:0;padding:0;height:100%;width:100%;position:absolute;"),
                Ge = r.forwardRef((function(e, t) {
                    var n = e.className,
                        a = e.defaultChecked,
                        c = void 0 !== a && a,
                        l = e.checked,
                        s = e.id,
                        u = e.onBlur,
                        p = void 0 === u ? m.T : u,
                        f = e.onChange,
                        b = void 0 === f ? m.T : f,
                        h = e.onFocus,
                        g = void 0 === h ? m.T : h,
                        v = Object(E.a)(e, ["className", "defaultChecked", "checked", "id", "onBlur", "onChange", "onFocus"]),
                        j = r.useState(void 0 !== l ? l : c),
                        O = j[0],
                        y = j[1],
                        x = r.useState(!1),
                        w = x[0],
                        k = x[1],
                        C = Object(o.h)();
                    void 0 !== l && O !== l && y(l);
                    return r.createElement("div", {
                        className: Object(i.A)(Object(i.z)("display:inline-block;position:relative;height:16px;width:16px;"), n)
                    }, r.createElement(Ye, Object(d.a)({
                        type: "checkbox",
                        checked: O,
                        id: s,
                        onChange: function(e) {
                            b(e), void 0 === l && y((function(e) {
                                return !e
                            }))
                        },
                        onFocus: function(e) {
                            g(e), "keyboard" === C() && k(!0)
                        },
                        onBlur: function(e) {
                            p(e), k(!1)
                        },
                        innerRef: t
                    }, v)), r.createElement(We, {
                        "aria-hidden": !0,
                        checked: O,
                        focused: w,
                        focusable: "false"
                    }))
                })),
                Ze = Object(H.b)((function(e) {
                    var t = e.theme,
                        n = e.color,
                        a = void 0 === n ? t.colors.border : n,
                        i = Object(E.a)(e, ["theme", "color"]);
                    return r.createElement("circle", Object(d.a)({
                        fillRule: "nonzero",
                        fill: a,
                        cx: "8",
                        cy: "8",
                        r: "3.5"
                    }, i))
                })),
                Ke = Object(H.b)((function(e) {
                    var t = e.theme,
                        n = e.color,
                        a = void 0 === n ? t.colors.grayscale[600] : n,
                        i = Object(E.a)(e, ["theme", "color"]);
                    return r.createElement("circle", Object(d.a)({
                        style: {
                            backgroundColor: "black"
                        },
                        fillRule: "nonzero",
                        cx: "8",
                        cy: "8",
                        r: "7.5",
                        stroke: a,
                        strokeWidth: "2"
                    }, i))
                })),
                Qe = Object(i.C)("0%{transform:scale(0,0);}50%{transform:scale(1.1,1.1);}66.67%{transform:scale(1.1,1.1);}83.33%{transform:scale(0.95,0.95);}100%{transform:scale(1,1);}"),
                Je = function(e) {
                    return Object(i.z)("animation-duration:200ms;animation-iteration-count:1;animation-fill-mode:forwards;animation-timing-function:", e.transitions.easings.linear, ";")
                },
                Xe = Object(H.b)((function(e) {
                    var t = e.className,
                        n = e.checked,
                        a = e.focused,
                        o = e.theme,
                        c = Object(E.a)(e, ["className", "checked", "focused", "theme"]);
                    return r.createElement("svg", Object(d.a)({
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        fillRule: "evenodd",
                        className: Object(i.A)(Object(i.z)("border-radius:", o.borderRadius.round, ";background-color:", o.colors.grayscale[n ? 600 : 100], ";"), a && Object(i.z)("box-shadow:", o.boxShadow.outline, ";"), t)
                    }, c), r.createElement(Ke, null), n && r.createElement(r.Fragment, null, r.createElement(Ze, {
                        color: o.colors.grayscale[100],
                        className: Object(i.z)(Je(o), " animation-name:", Qe, ";transform-origin:50% 50%;")
                    })))
                })),
                $e = Object(i.D)("input", {
                    target: "e12lg4gr0"
                })("opacity:0;margin:0;padding:0;height:100%;width:100%;position:absolute;"),
                et = function(e) {
                    var t = e.className,
                        n = e.defaultChecked,
                        a = void 0 !== n && n,
                        c = e.checked,
                        l = e.id,
                        s = e.onBlur,
                        u = void 0 === s ? m.T : s,
                        p = e.onChange,
                        f = void 0 === p ? m.T : p,
                        b = e.onFocus,
                        h = void 0 === b ? m.T : b,
                        g = Object(E.a)(e, ["className", "defaultChecked", "checked", "id", "onBlur", "onChange", "onFocus"]),
                        v = r.useState(void 0 !== c ? c : a),
                        j = v[0],
                        O = v[1],
                        y = r.useState(!1),
                        x = y[0],
                        w = y[1],
                        k = Object(o.h)();
                    void 0 !== c && j !== c && O(c);
                    return r.createElement("div", {
                        className: Object(i.A)(Object(i.z)("display:inline-block;position:relative;height:16px;width:16px;"), t)
                    }, r.createElement($e, Object(d.a)({
                        type: "radio",
                        checked: j,
                        id: l,
                        onChange: function(e) {
                            f(e), void 0 === c && O((function(e) {
                                return !e
                            }))
                        },
                        onBlur: function(e) {
                            u(e), w(!1)
                        },
                        onFocus: function(e) {
                            h(e), "keyboard" === k() && w(!0)
                        },
                        required: !0
                    }, g)), r.createElement(Xe, {
                        "aria-hidden": !0,
                        checked: j,
                        focused: x,
                        focusable: "false"
                    }))
                },
                tt = n(187);
            var nt = function(e) {
                    var t = e.label,
                        n = e.submitting,
                        a = e.disabled,
                        i = Object(E.a)(e, ["label", "submitting", "disabled"]);
                    return r.createElement(tt.a, Object(d.a)({
                        pending: n,
                        disabled: n || a,
                        type: "submit"
                    }, i), r.createElement("span", null, t))
                },
                rt = n(358),
                at = {},
                it = {
                    submitError: !0
                },
                ot = {
                    submitting: !0
                },
                ct = {
                    values: !0
                },
                lt = Object(pe.a)(),
                st = {
                    format: function(e) {
                        return Object(m.ub)(e || "")
                    },
                    formatOnBlur: !0
                },
                ut = function(e) {
                    var t = e.meta,
                        n = Object(K.h)(),
                        r = null;
                    return t.submitError && !t.dirtySinceLastSubmit ? r = t.submitError : t.touched && t.error && (r = t.error), {
                        validationState: r ? "invalid" : "valid",
                        errorMessageProps: {
                            error: r,
                            id: n
                        }
                    }
                },
                dt = function(e, t) {
                    var n = t.name,
                        r = t.ariaLabel,
                        a = t.ariaLabelledBy,
                        i = t.label,
                        o = t.required,
                        c = t.type,
                        l = t.autoComplete,
                        s = t.inputElementType,
                        u = Object(me.c)(n, st),
                        m = ut(u),
                        p = m.validationState,
                        f = m.errorMessageProps,
                        b = Object(rt.a)(Object(d.a)({
                            id: n,
                            type: c,
                            inputElementType: s,
                            isRequired: o,
                            autoComplete: l,
                            validationState: p,
                            "aria-errormessage": f.id,
                            label: i,
                            "aria-label": r,
                            "aria-labelledby": a
                        }, u.input), e);
                    return {
                        inputProps: b.inputProps,
                        labelProps: b.labelProps,
                        errorMessageProps: f
                    }
                },
                mt = function() {
                    return r.createElement(me.b, {
                        subscription: it
                    }, (function(e) {
                        var t = e.submitError;
                        return r.createElement(ge, {
                            error: t || null
                        })
                    }))
                },
                pt = n(128),
                ft = Object(i.D)("div", {
                    target: "e1n7ru1l0"
                })("text-align:center;"),
                bt = [lt],
                ht = function(e) {
                    var t = e.id,
                        n = e.children,
                        a = e.initialValues,
                        i = e.submitLabel,
                        c = e.validate,
                        l = e.onSubmit,
                        s = e.disabled,
                        u = "form_" + t;
                    return Object(o.n)((function() {
                        Object(pt.c)() && function(e) {
                            var t = Object(pe.b)(e)();
                            if (t.length) {
                                var n = t[0],
                                    r = n.tagName;
                                ("INPUT" === r && !Object(m.C)(n.type, ["checkbox", "radio"]) || "TEXTAREA" === r) && Object(K.c)(n)
                            }
                        }(u)
                    })), r.createElement(me.a, {
                        decorators: bt,
                        initialValues: a,
                        onSubmit: l,
                        subscription: at,
                        validate: c
                    }, (function(e) {
                        var t = e.handleSubmit;
                        return r.createElement(fe, {
                            name: u,
                            onSubmit: t
                        }, n, r.createElement(mt, null), r.createElement(ft, null, r.createElement(me.b, {
                            subscription: ot
                        }, (function(e) {
                            var t = e.submitting;
                            return r.createElement(nt, {
                                submitting: t,
                                label: i,
                                disabled: s
                            })
                        }))))
                    }))
                },
                gt = Object(i.D)("div", {
                    target: "eptvlbh0"
                })("display:flex;flex-direction:column;width:100%;margin-bottom:", (function(e) {
                    return e.theme.spaceBase + "px"
                }), ";"),
                vt = n(186),
                Et = n.n(vt),
                jt = n(185),
                Ot = n(65),
                yt = n(42),
                xt = function(e) {
                    var t = e.children,
                        n = e.showRequiredMark,
                        a = void 0 !== n && n,
                        i = Object(E.a)(e, ["children", "showRequiredMark"]);
                    return r.createElement(Ee, Object(d.a)({
                        isRequired: a
                    }, i), "string" === typeof t ? r.createElement(Et.a, {
                        component: jt.a
                    }, r.createElement(Ot.a, {
                        preserveLists: !0,
                        template: t,
                        root: {
                            component: yt.a
                        }
                    })) : t)
                },
                wt = function(e) {
                    var t = r.useRef(null),
                        n = e.label,
                        a = e.required,
                        i = dt(t, Object(d.a)({}, e, {
                            inputElementType: "textarea"
                        })),
                        o = i.inputProps,
                        c = i.labelProps,
                        l = i.errorMessageProps;
                    return r.createElement(gt, null, n && r.createElement(xt, Object(d.a)({
                        showRequiredMark: a
                    }, c), n), r.createElement(Ae, Object(d.a)({}, o, {
                        errorMessageProps: l,
                        textareaRef: t
                    })))
                },
                kt = n(18),
                Ct = Object(i.D)("div", {
                    target: "e1lbo1s40"
                })("display:flex;justify-content:center;flex-shrink:0;"),
                St = Object(i.D)("div", {
                    displayName: "IconLabel",
                    target: "e1lbo1s41"
                })("display:flex;justify-content:center;align-items:center;", (function(e) {
                    var t = e.size,
                        n = e.theme,
                        r = e.forceLightTheme;
                    return {
                        width: t,
                        height: t,
                        borderRadius: n.borderRadius.round,
                        backgroundColor: !r && Object(kt.f)(n.colors.agentBarBackground) ? n.colors.grayscale[500] : n.colors.surface.lightVariant
                    }
                }), ";"),
                Rt = function(e) {
                    var t = e.size,
                        n = void 0 === t ? "64px" : t,
                        a = e.children,
                        i = Object(E.a)(e, ["size", "children"]);
                    return r.createElement(Ct, null, r.createElement(St, Object(d.a)({
                        size: n
                    }, i), a))
                },
                Dt = n(371),
                zt = n(374),
                Tt = Object(i.D)("div", {
                    displayName: "Tooltip",
                    target: "ezqijrk0"
                })("display:inline-block;background-color:", (function(e) {
                    var t = e.theme;
                    return "dark" === e.appearance ? t.colors.surface.darkVariant : t.colors.surface.light
                }), ";color:", (function(e) {
                    var t = e.theme;
                    return "dark" === e.appearance ? t.colors.text.white : t.colors.text.black
                }), ";padding:1em;position:fixed;border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";z-index:9;font-size:0.8em;font-weight:normal;margin-top:0.5em;margin-bottom:0.5em;box-shadow:", (function(e) {
                    return e.theme.boxShadow.floating
                }), ";transition:", (function(e) {
                    var t = e.theme;
                    return "opacity 200ms " + t.transitions.easings.swift + ", transform 300ms " + t.transitions.easings.swift
                }), ";", (function(e) {
                    var t = e.position;
                    return {
                        left: t.left ? t.left - 10 + "px" : "auto",
                        right: t.right ? t.right - 10 + "px" : "auto",
                        top: t.top ? t.top + "px" : "auto",
                        bottom: t.bottom ? t.bottom : "auto",
                        marginRight: t.right ? 0 : "10px",
                        marginLeft: t.left ? 0 : "10px"
                    }
                }), ";"),
                _t = Object(i.D)("svg", {
                    displayName: "TooltipArrow",
                    target: "ezqijrk1"
                })("position:absolute;fill:", (function(e) {
                    var t = e.theme;
                    return "dark" === e.appearance ? t.colors.surface.darkVariant : t.colors.surface.light
                }), ";margin-top:-1.5em;margin-bottom:-1.5em;", (function(e) {
                    var t = e.position,
                        n = e.horizontalFactor,
                        r = e.placement,
                        a = void 0 === r ? "top" : r,
                        i = e.theme;
                    return Object(d.a)({
                        left: t.left ? n - 10 + ("modern" === i.name ? 3 : -1) + "px" : "auto",
                        right: t.right ? n - 10 + ("modern" === i.name ? 3 : -1) + "px" : "auto"
                    }, "bottom" === a ? {
                        top: 0
                    } : {
                        bottom: 0,
                        transform: "rotate(180deg)"
                    })
                }), ";"),
                It = Object(i.D)("div", {
                    target: "ezqijrk2"
                })("position:relative;"),
                Mt = function(e, t) {
                    var n = e.getBoundingClientRect(),
                        r = n.left,
                        a = n.right,
                        i = n.bottom,
                        o = n.top,
                        c = window,
                        l = c.innerWidth,
                        s = c.innerHeight,
                        u = c.pageXOffset,
                        d = c.pageYOffset;
                    return "top" === t ? {
                        bottom: s - (o + d),
                        right: l - (a + u)
                    } : r + u > l / 2 ? {
                        top: i + d,
                        right: l - (a + u)
                    } : {
                        top: i + d,
                        left: r + u
                    }
                },
                Ft = {
                    position: {
                        top: 0,
                        left: 0
                    },
                    targetWidth: 0
                };
            var Bt = function(e) {
                    var t = e.children,
                        n = e.description,
                        a = e.allowTouch,
                        i = e.controlsRef,
                        c = (e.className, e.animated),
                        s = void 0 !== c && c,
                        u = e.placement,
                        p = void 0 === u ? "bottom" : u,
                        f = e.appearance,
                        b = void 0 === f ? "dark" : f,
                        h = e.trigger,
                        g = void 0 === h ? "hover" : h,
                        v = e.onOpenChange,
                        j = void 0 === v ? m.T : v,
                        O = Object(E.a)(e, ["children", "description", "allowTouch", "controlsRef", "className", "animated", "placement", "appearance", "trigger", "onOpenChange"]),
                        y = r.useRef(null);
                    Object(ee.j)();
                    var x = r.useRef(null),
                        w = r.useRef(!1),
                        k = r.useState(Ft),
                        C = k[0],
                        S = k[1],
                        R = r.useState(!1),
                        D = R[0],
                        z = R[1],
                        T = Object(zt.a)(Object(d.a)({
                            onOpenChange: function(e) {
                                s && requestAnimationFrame((function() {
                                    return z(e)
                                }));
                                var t = function() {
                                    j(e, w.current), w.current = !1
                                };
                                e ? (S({
                                    position: Mt(x.current, p),
                                    targetWidth: x.current.offsetWidth
                                }), requestAnimationFrame(t)) : t()
                            }
                        }, O));
                    (null == i ? void 0 : i.current) && (i.current = {
                        open: function() {
                            w.current = !0, T.open(!0)
                        },
                        close: function() {
                            w.current = !0, T.close(!0)
                        }
                    });
                    var _, I = Object(Dt.b)(O, T, x),
                        M = I.tooltipProps,
                        F = I.triggerProps,
                        B = Object(Dt.a)(M, T).tooltipProps,
                        P = Object(ee.l)({
                            onPress: function() {
                                T.open(!0)
                            }
                        }).pressProps;
                    return Object(o.m)(y, (function() {
                        T.close(!0)
                    })), O.isDisabled && T.isOpen && T.close(), r.createElement(l.b, Object(d.a)({}, "press" === g ? P : a ? Object(K.e)(F, P) : F, {
                        ref: x
                    }), t, T.isOpen && r.createElement($, {
                        portalId: "tooltip_portal_container"
                    }, r.createElement(Tt, Object(d.a)({
                        innerRef: y,
                        appearance: b,
                        position: C.position
                    }, "hover" === g && B, s && {
                        style: {
                            opacity: (_ = D) ? 1 : 0,
                            transform: "translateY(" + (_ ? 0 : 8) + "px)"
                        }
                    }), r.createElement(It, null, r.createElement(_t, {
                        appearance: b,
                        placement: p,
                        horizontalFactor: C.targetWidth / 2,
                        height: "10",
                        position: C.position,
                        width: "16"
                    }, r.createElement("polygon", {
                        points: "0,10 16,10 8,0"
                    })), n))))
                },
                Pt = Object(i.z)("text-align:center;"),
                At = Object(i.z)("font-size:inherit;"),
                Nt = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            open: !1,
                            selectedRate: t.props.chatRate
                        }, t.handleRate = Object(m.P)((function(e) {
                            return function() {
                                var n = t.state.selectedRate === e,
                                    r = n ? null : e;
                                t.rateChat(r), t.setState({
                                    selectedRate: r,
                                    open: !n
                                })
                            }
                        })), t.closeModal = function() {
                            t.setState({
                                open: !1
                            })
                        }, t.validate = function(e) {
                            if (!e.comment) return {
                                comment: t.props.localize("survey_fill_in_required_fields")
                            }
                        }, t.handleSubmit = function(e) {
                            t.props.rateChat({
                                comment: e.comment
                            }), t.closeModal()
                        }, t.getRateButtonProps = function(e) {
                            var n = t.props,
                                r = n.chatRate;
                            return {
                                disabled: n.disabled,
                                active: r === e,
                                onPress: t.handleRate(e),
                                "aria-label": r === e ? "Cancel " + e + " rating" : "Rate as " + e + " and open comment modal"
                            }
                        }, t
                    }
                    Object(Y.a)(t, e);
                    var n = t.prototype;
                    return n.componentDidUpdate = function(e) {
                        e.chatRate !== this.props.chatRate && this.setState({
                            selectedRate: this.props.chatRate
                        })
                    }, n.rateChat = function(e) {
                        var t = this;
                        this.props.rateChat({
                            rate: e
                        }).catch((function() {
                            return t.setState({
                                selectedRate: t.props.chatRate
                            })
                        }))
                    }, n.render = function() {
                        var e = this.state,
                            t = e.open,
                            n = e.selectedRate,
                            a = this.props,
                            o = a.disabled,
                            c = a.chatRate,
                            l = a.mobile,
                            s = a.localize,
                            u = s("good" === c ? "rate_me_cancel_tooltip" : "rate_me_good_tooltip"),
                            d = s("bad" === c ? "rate_me_cancel_tooltip" : "rate_me_bad_tooltip");
                        return r.createElement(r.Fragment, null, r.createElement(Bt, {
                            isDisabled: o,
                            description: u
                        }, r.createElement(B.j, this.getRateButtonProps("good"), r.createElement(B.w, {
                            className: At,
                            "aria-hidden": !0
                        }))), r.createElement(Bt, {
                            isDisabled: o,
                            description: d
                        }, r.createElement(B.j, this.getRateButtonProps("bad"), r.createElement(B.v, {
                            className: At,
                            "aria-hidden": !0
                        }))), r.createElement(de, {
                            shown: t,
                            onClose: this.closeModal
                        }, r.createElement(Rt, {
                            forceLightTheme: !0
                        }, "good" === n ? r.createElement(B.w, {
                            label: s("rate_me_confirmation_good")
                        }) : r.createElement(B.v, {
                            label: s("rate_me_confirmation_bad")
                        })), r.createElement("p", {
                            id: "add_rate_comment_label",
                            className: Pt
                        }, s("rate_me_add_comment")), r.createElement(ht, {
                            id: "rate_comment",
                            mobile: l,
                            onSubmit: this.handleSubmit,
                            submitLabel: s("button_add_feedback"),
                            validate: this.validate,
                            disabled: ""
                        }, r.createElement(i.q, null, r.createElement(wt, {
                            name: "comment",
                            ariaLabelledBy: "add_rate_comment_label",
                            mobile: l,
                            required: !0
                        })))))
                    }, t
                }(r.Component),
                Ht = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t) {
                            var r = t.rate,
                                a = t.comment,
                                i = {};
                            return void 0 !== r && (i.rate = r), void 0 !== a && (i.rateComment = a), e.requestUpdateChat(n, {
                                properties: i
                            })
                        };
                    return function(e) {
                        var t = e.getChat(n),
                            a = t.active,
                            i = t.properties,
                            o = i.ended;
                        return {
                            chatRate: i.rate,
                            disabled: !o && !a,
                            iconTheme: e.getApplicationState("config").theme.iconTheme,
                            mobile: e.getApplicationState("mobile"),
                            rateChat: r,
                            localize: e.localize
                        }
                    }
                }))(Nt),
                Lt = Object(i.z)("margin-right:0;"),
                qt = Object(i.D)("div", {
                    target: "ekqutxs0"
                })("display:flex;align-items:center;position:relative;margin-right:0.5em;"),
                Vt = Object(i.D)("div", {
                    target: "ekqutxs1"
                })("position:absolute;", (function(e) {
                    var t = e.availability,
                        n = e.size,
                        r = e.theme;
                    return {
                        width: "small" === n ? r.spaces.space4 : r.spaces.space5,
                        height: "small" === n ? r.spaces.space4 : r.spaces.space5,
                        background: "online" === t ? r.colors.success : r.colors.grayscale[500],
                        border: "2px solid " + r.colors.surface.light,
                        borderRadius: r.borderRadius.round,
                        top: "-2px",
                        right: "-2px"
                    }
                })),
                Ut = function(e) {
                    var t = e.avatarUrl,
                        n = e.availability,
                        a = e.size,
                        o = void 0 === a ? "normal" : a;
                    return r.createElement(qt, null, r.createElement(i.b, {
                        className: Lt,
                        imgUrl: t,
                        size: "small" === o ? "24px" : void 0
                    }), n && r.createElement(Vt, {
                        availability: n,
                        size: o
                    }))
                },
                Wt = Object(i.z)("justify-content:center;"),
                Yt = Object(i.D)("div", {
                    target: "e10kp68a0"
                })("width:100%;display:flex;"),
                Gt = Object(i.z)(Wt, " flex:1;"),
                Zt = Object(i.z)(Wt, " min-width:auto;"),
                Kt = Object(i.D)("img", {
                    target: "e10kp68a1"
                })("height:auto;max-height:50px;"),
                Qt = Object(m.P)((function(e) {
                    return function(t) {
                        return t.position === e
                    }
                })),
                Jt = function(e) {
                    var t = e.agent,
                        n = e.chatId,
                        a = e.showAvatar,
                        o = e.logoPath;
                    return r.createElement(Yt, null, a && t.avatar && r.createElement(Ut, {
                        avatarUrl: t.avatar,
                        availability: "online"
                    }), r.createElement(i.q, {
                        flexFill: !0
                    }, r.createElement(i.f, {
                        className: Gt,
                        flexFill: !0
                    }, r.createElement(i.w, {
                        ellipsis: !0
                    }, r.createElement(yt.a, null, t.name)), t.properties.jobTitle && r.createElement(i.s, {
                        ellipsis: !0
                    }, r.createElement(yt.a, null, t.properties.jobTitle)), r.createElement(W, {
                        condition: Qt("bottom"),
                        name: "rating"
                    }, r.createElement(i.q, null, r.createElement(Ht, {
                        chatId: n
                    })))), r.createElement(W, {
                        condition: Qt("right"),
                        name: "rating"
                    }, r.createElement(i.f, {
                        className: Wt,
                        noShrink: !0
                    }, r.createElement(i.q, null, r.createElement(Ht, {
                        chatId: n
                    })))), !!o && r.createElement(i.f, {
                        className: Zt
                    }, r.createElement(Kt, {
                        alt: "",
                        src: o
                    }))))
                },
                Xt = function(e) {
                    return void 0 === e && (e = 3), Object(i.z)("-webkit-line-clamp:", e, ";-webkit-box-orient:vertical;-webkit-box-pack:center;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;")
                },
                $t = Object(i.D)(B.j, {
                    target: "eyohww40"
                })("width:24px;height:24px;opacity:1;"),
                en = Object(i.D)(B.d, {
                    target: "eyohww41"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "rotate(180deg)"
                    }
                }), " transition:transform 0.3s ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), ";"),
                tn = Object(i.D)(V, {
                    target: "eyohww42"
                })("display:flex;text-align:left;overflow:hidden;height:auto;width:100%;align-items:", (function(e) {
                    return e.veritcallyCenter ? "center" : "flex-start"
                }), ";transition:height 0.3s ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), ";will-change:height;a{color:inherit;}"),
                nn = Object(i.D)("div", {
                    target: "eyohww43"
                })("height:", 34, "px;display:flex;align-items:center;"),
                rn = Object(i.D)(Rt, {
                    target: "eyohww44"
                })("margin:4px 15px 4px 0;"),
                an = function(e) {
                    var t = e.text,
                        n = e.icon,
                        i = e.isLoadingHistory,
                        o = e.forceExpanded,
                        c = r.useState(!0),
                        l = c[0],
                        s = c[1],
                        u = r.useState(!1),
                        d = u[0],
                        m = u[1],
                        p = r.useState(null),
                        f = p[0],
                        b = p[1],
                        h = r.useState(!1),
                        g = h[0],
                        v = h[1],
                        E = r.useRef(null),
                        j = Object(K.h)(),
                        O = r.useCallback((function() {
                            if (l) {
                                var e = E.current.clientHeight;
                                e !== f && b(e), E.current.style.height = e + "px", E.current.scrollTop
                            }
                            E.current.style.height = (l ? 34 : Number(f)) + "px", s((function(e) {
                                return !e
                            }))
                        }), [l, f]),
                        y = function() {
                            l && (E.current.style.height = "auto")
                        };
                    return r.useEffect((function() {
                        if (E && !o) {
                            var e = E.current.clientHeight > 34;
                            m(e)
                        }
                        E && o && (E.current.style.height = "auto", m(!1))
                    }), [E, o]), r.useEffect((function() {
                        d && (b(E.current.clientHeight), E.current.style.height = "34px", v(!0), s(!1))
                    }), [d]), r.useEffect((function() {
                        i && l && O()
                    }), [i, l, O]), r.createElement(a.a, null, (function(e) {
                        return r.createElement(tn, {
                            innerRef: E,
                            row: !0,
                            veritcallyCenter: !d,
                            onTransitionEnd: y,
                            textWrap: !0
                        }, r.createElement(nn, {
                            "aria-hidden": !0
                        }, r.createElement(rn, {
                            size: "24px"
                        }, n)), r.createElement("div", {
                            className: !l && d ? Xt(2) : "",
                            id: j
                        }, r.createElement(Et.a, {
                            componenet: jt.a
                        }, r.createElement(Ot.a, {
                            template: l ? t : Object(kt.i)(120, t),
                            root: {
                                component: yt.a
                            }
                        }))), d && r.createElement(nn, null, r.createElement($t, {
                            onPress: O,
                            "aria-expanded": l,
                            "aria-controls": j,
                            "aria-label": e(l ? "show_less" : "show_more")
                        }, r.createElement(en, {
                            size: 24,
                            direction: g && l ? "up" : "down",
                            "aria-hidden": !0
                        }))))
                    }))
                },
                on = Object(i.D)(i.a, {
                    target: "eraual0"
                })("position:relative;box-shadow:", (function(e) {
                    return e.theme.boxShadow.sm
                }), ";"),
                cn = Object(i.D)("div", {
                    displayName: "TopBar",
                    target: "eraual1"
                })("position:relative;height:auto;bottom:0;z-index:1;@media (max-height:330px){display:none;}"),
                ln = Object(i.D)("div", {
                    target: "eraual2"
                })("min-height:calc(", 34, "px + 2 * ", (function(e) {
                    return e.theme.AgentBar.css.padding
                }), ");"),
                sn = Object(i.D)(i.a, {
                    target: "eraual3"
                })("position:absolute;top:0;left:0;width:100%;box-shadow:", (function(e) {
                    return e.theme.boxShadow.sm
                }), ";", (function(e) {
                    return e.collapsed && Object(i.z)("position:relative;box-shadow:none;padding:0;")
                })),
                un = Object(i.D)("div", {
                    target: "eraual4"
                })("position:relative;width:100%;z-index:", (function(e) {
                    return e.collapsed ? 2 : 1
                }), ";"),
                dn = {
                    enter: 150,
                    exit: 150
                },
                mn = Object(i.z)("&-enter,&-appear{transform:translateY(-100%);}&-enter-active,&-appear-active,&-enter-done,&-appear-done{transform:translateY(0);transition:transform ", 150, "ms ", "cubic-bezier(0.14, 0, 0, 1)", ";}&-exit{transform:translateY(0);}&-exit-active{transform:translateY(-100%);transition:transform ", 150, "ms ", "cubic-bezier(0.14, 0, 0, 1)", ";}"),
                pn = Object(i.z)("transition:opacity 100ms ease-in-out;position:relative;"),
                fn = Object(a.c)((function(e, t) {
                    var n = t.chatId;
                    return function(e) {
                        var t, r = e.getView("Chat/queue"),
                            a = Object(u.cb)(e),
                            i = Object(u.fb)(e),
                            o = Object(u.gb)(e),
                            c = Object(u.g)("logo", e),
                            l = c.enabled && "modern" === Object(u.u)(e);
                        return {
                            agent: Object(u.c)(n, e),
                            chatActive: e.getChat(n).active,
                            showAvatar: Object(u.g)("agentAvatar", e).enabled,
                            logoPath: l ? (t = c.path, "https://" + Object(L.l)(t)) : null,
                            showAgentBar: a,
                            showOfflineInformation: i,
                            showQueueInformation: o,
                            offlineInformation: e.localize(e.getApplicationState("limitReached") || !Object(u.E)(e) ? "agents_not_available" : "agents_not_available_continuous"),
                            queueTemplate: Object(u.o)(e),
                            numberInQueue: r && r.numberInQueue,
                            waitingTime: r && r.waitingTime,
                            showTopBar: Object(u.V)(e),
                            hasNoVisibleEvents: Object(u.z)(e)
                        }
                    }
                }))(Object(H.b)((function(e) {
                    var t = e.agent,
                        n = e.chatId,
                        a = e.showAvatar,
                        c = e.logoPath,
                        l = e.showAgentBar,
                        s = e.scrollingDeltaSource,
                        u = e.isOnBottomSource,
                        d = e.showOfflineInformation,
                        f = e.offlineInformation,
                        b = e.showQueueInformation,
                        h = e.queueTemplate,
                        g = e.numberInQueue,
                        v = e.waitingTime,
                        E = e.showTopBar,
                        O = e.isLoadingHistory,
                        y = e.children,
                        x = e.hasNoVisibleEvents,
                        w = r.useRef(),
                        k = r.useRef(),
                        C = r.useRef(0),
                        S = r.useState(!0),
                        R = S[0],
                        D = S[1],
                        z = r.useCallback((function() {
                            D(!0), w.current && (w.current.style.bottom = 0, w.current.style.height = "auto"), k.current && (k.current.style.opacity = 1)
                        }), [w]);
                    return Object(o.a)(s, (function(e) {
                        var t = e.y;
                        l && ("auto" === w.current.style.height && (C.current = w.current.offsetHeight), 1 === t && D(!1), !R && t < 1 && D(!0), w.current && (w.current.style.bottom = t * C.current + "px", w.current.style.height = C.current - t * C.current + "px"), k.current && (k.current.style.opacity = 1 - 2 * t))
                    })), r.useEffect((function() {
                        z()
                    }), [E, z]), r.useEffect((function() {
                        if (u) return u.subscribe((function(e) {
                            e && z()
                        }))
                    }), [u, z]), r.useEffect((function() {
                        w.current && Object(m.qb)(w.current.querySelectorAll("button")).forEach((function(e) {
                            e.tabIndex = R ? 0 : -1
                        }))
                    }), [R]), r.createElement(r.Fragment, null, r.createElement(cn, {
                        id: "top-bar",
                        innerRef: w
                    }, r.createElement(p.a, {
                        appear: !0,
                        component: null,
                        exit: R
                    }, l && r.createElement(j.a, {
                        timeout: dn,
                        classNames: mn
                    }, r.createElement("div", null, r.createElement(q, null), r.createElement(on, {
                        noShrink: !0
                    }, r.createElement(i.q, {
                        flexFill: !0,
                        innerRef: k,
                        className: pn
                    }, r.createElement(Jt, {
                        agent: t,
                        chatId: n,
                        showAvatar: a,
                        logoPath: c
                    }))))))), r.createElement(un, {
                        collapsed: !(b || d)
                    }, (b || d) && r.createElement(r.Fragment, null, r.createElement(q, null), r.createElement(ln, null)), r.createElement(p.a, {
                        appear: b || d,
                        component: null
                    }, r.createElement(j.a, {
                        timeout: dn,
                        classNames: mn
                    }, r.createElement(sn, {
                        collapsed: !(b || d)
                    }, b && r.createElement(an, {
                        text: h.replace(/%number%/g, "**" + g + "**").replace(/%minutes%/g, "**" + Math.floor(v / 60) + "**"),
                        icon: r.createElement(B.i, {
                            size: 24
                        }),
                        isLoadingHistory: O,
                        forceExpanded: x
                    }), d && r.createElement(an, {
                        text: f,
                        icon: r.createElement(B.l, null),
                        isLoadingHistory: O,
                        forceExpanded: x
                    }), y)))))
                }))),
                bn = n(347),
                hn = n(190),
                gn = function(e) {
                    var t = e.children;
                    return r.createElement(i.i, {
                        date: "",
                        showMetaOnClick: !1,
                        system: !0
                    }, r.createElement(i.c, null, r.createElement(hn.a, {
                        text: t
                    })))
                },
                vn = n(193),
                En = Object(i.D)(vn.a, {
                    displayName: "SystemCard",
                    target: "e1r9cm3y0"
                })("padding:8px;margin:2px 0;width:100%;max-width:270px;position:relative;"),
                jn = Object(i.D)("div", {
                    target: "e1q4zsg90"
                })("display:flex;flex-direction:row;position:absolute;top:-21px;left:0;right:0;color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";"),
                On = Object(i.D)("div", {
                    target: "e1q4zsg91"
                })("display:flex;justify-content:center;align-items:center;overflow:hidden;margin:0 auto;border-radius:", (function(e) {
                    return e.theme.borderRadius.round
                }), ";width:", 42, "px;height:", 42, "px;background-color:", (function(e) {
                    var t = e.theme;
                    return e.backgroundColor || t.colors.cta
                }), ";"),
                yn = function(e) {
                    var t = e.children,
                        n = e.backgroundColor;
                    return r.createElement(jn, {
                        "aria-hidden": !0
                    }, r.createElement(On, {
                        backgroundColor: n
                    }, t))
                },
                xn = function(e) {
                    return Object(i.z)("margin-left:4px;margin-top:3px;fill:currentColor;transform:", "scaleY(" + ("up" === e ? -1 : 1) + ")", ";")
                },
                wn = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "down" : t,
                        a = Object(E.a)(e, ["direction"]);
                    return r.createElement("svg", Object(d.a)({
                        viewBox: "0 0 7 4",
                        width: "7px",
                        height: "4px",
                        className: xn(n)
                    }, a), r.createElement("path", {
                        d: "M1.1,0.2C0.9,0,0.5,0,0.4,0.2s-0.2,0.5,0,0.7l2.8,2.8c0.2,0.2,0.5,0.2,0.7,0l2.8-2.8c0.2-0.2,0.2-0.5,0-0.7S6.2,0,6,0.2 L3.5,2.7L1.1,0.2z"
                    }))
                },
                kn = n(22),
                Cn = Object(i.D)("button", {
                    target: "eentevd0"
                })("display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;background:none;border:none;margin-top:8px;font-size:12px;text-align:center;cursor:pointer;color:", (function(e) {
                    var t = e.theme;
                    return Object(kt.g)(t.colors.cta) ? Object(kn.e)(.6, t.colors.cta) : t.colors.cta
                }), ";"),
                Sn = Object(i.D)("div", {
                    target: "e1g195pu0"
                })("position:absolute;top:50%;bottom:0;left:0;right:0;pointer-events:none;background:linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.9));"),
                Rn = Object(i.D)("div", {
                    target: "e9s6ynt0"
                })("position:relative;overflow:hidden;height:auto;transition:max-height 300ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";"),
                Dn = Object(i.D)("div", {
                    target: "e1cdxu9o0"
                })("height:auto;padding:8px;"),
                zn = Object(a.c)((function(e, t) {
                    var n = t.icon,
                        r = e.getApplicationState("config").theme;
                    return {
                        showIcon: !!n && "modern" !== r.name,
                        rtl: e.getApplicationState("rtl"),
                        localize: e.localize
                    }
                }))((function(e) {
                    var t, n, a = e.icon,
                        c = e.showIcon,
                        l = e.children,
                        s = e.collapsible,
                        u = void 0 !== s && s,
                        p = e.defaultCollapsed,
                        f = void 0 !== p && p,
                        b = e.collapsedHeight,
                        g = void 0 === b ? 100 : b,
                        v = e.collapseThreshold,
                        E = void 0 === v ? 20 : v,
                        j = e.rtl,
                        O = e.localize,
                        y = e.dataTestId,
                        x = (void 0 === y && h.a, r.useRef(0)),
                        w = r.useRef(!1),
                        k = r.useRef(null),
                        C = r.useRef(null),
                        S = Object(ee.f)(),
                        R = Object(ee.f)(),
                        D = r.useState(!1),
                        z = D[0],
                        T = D[1],
                        _ = r.useState(u),
                        I = _[0],
                        M = _[1],
                        F = Object(o.d)(m.v),
                        B = Object(o.d)((function() {
                            return u && f ? (e = g + "px", Object(i.z)("max-height:", e, ";")) : null;
                            var e
                        })),
                        P = r.useCallback((function(e) {
                            C.current.style.maxHeight = "number" === typeof e ? e + "px" : e
                        }), []),
                        A = r.useCallback((function() {
                            T(!z)
                        }), [z]),
                        N = r.useCallback((function() {
                            z || P("none")
                        }), [z, P]);
                    return r.useEffect((function() {
                        return function() {
                            return cancelAnimationFrame(x.current)
                        }
                    }), []), r.useEffect((function() {
                        var e = k.current.offsetHeight,
                            t = e > g && e - g > E;
                        M(t && u), !w.current && u && T(t && f), w.current = u
                    }), [u, f, g, E]), r.useEffect((function() {
                        I ? (P(k.current.offsetHeight), z && (cancelAnimationFrame(x.current), x.current = requestAnimationFrame((function() {
                            return P(g)
                        })))) : P("none")
                    }), [I, z, g, P]), r.createElement("div", {
                        className: Object(i.A)(c && (n = "21px", Object(i.z)("padding-top:", n, ";"))),
                        role: "row"
                    }, r.createElement(En, Object(d.a)({
                        rtl: j,
                        role: "gridcell"
                    }, S), c ? a : null, r.createElement(Rn, {
                        id: F,
                        "aria-hidden": z,
                        innerRef: C,
                        onTransitionEnd: N,
                        className: Object(i.A)(c && (t = "12px", Object(i.z)("margin-top:", t, ";")), B)
                    }, r.createElement(Dn, {
                        innerRef: k
                    }, l), z && r.createElement(Sn, null)), I && r.createElement(Cn, Object(d.a)({
                        onClick: A,
                        "aria-controls": F,
                        "aria-expanded": !z
                    }, R), r.createElement("span", null, O(z ? "show_more" : "show_less")), r.createElement(wn, {
                        direction: z ? "down" : "up",
                        "aria-hidden": !0
                    }))))
                })),
                Tn = Object(i.D)("label", {
                    target: "e1fikopb0"
                })("display:block;padding-bottom:12px;", (function(e) {
                    return e.theme.typography.basic
                })),
                _n = Object(i.D)(De.m, {
                    target: "e1fikopb1"
                })("margin:0;padding:0;display:flex;width:40px;cursor:pointer;border:1px solid;align-items:center;justify-content:center;"),
                In = Object(i.D)(_n, {
                    target: "e1fikopb2"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.none
                }), ";", (function(e) {
                    var t, n = e.rtl ? "Left" : "Right";
                    return Object(i.z)(((t = {})["borderTop" + n + "Radius"] = 6, t["borderBottom" + n + "Radius"] = 6, t))
                }), " color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.text.white : t.colors.ctaText
                }), ";border:1px solid ", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.text.muted : t.colors.cta
                }), ";background-color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.text.muted : t.colors.cta
                }), ";"),
                Mn = Object(i.D)(_n, {
                    target: "e1fikopb3"
                })("color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";border:none;background-color:transparent;"),
                Fn = Object(i.D)("span", {
                    target: "e1fikopb4"
                })("width:100%;align-items:center;padding:8px;margin:1px;", (function(e) {
                    return e.theme.typography.input
                }), " ", (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t && Object(i.z)("color:", n.colors.cta, ";")
                })),
                Bn = Object(i.D)("form", {
                    target: "e1fikopb5"
                })("display:flex;position:relative;flex-direction:row;"),
                Pn = Object(i.D)("div", {
                    target: "e1fikopb6"
                })("display:flex;justify-content:center;align-items:center;height:100%;position:absolute;padding:0 6px;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";", (function(e) {
                    var t;
                    return (t = {})[e.rtl ? "right" : "left"] = 0, t
                })),
                An = function(e) {
                    var t, n = e ? "Left" : "Right",
                        r = e ? "Right" : "Left";
                    return Object(i.z)(((t = {
                        margin: 0,
                        minWidth: 0
                    })["padding" + r] = 34, t["border" + n] = "none", t["borderTop" + n + "Radius"] = 0, t["borderBottom" + n + "Radius"] = 0, t))
                },
                Nn = Object(a.c)((function(e, t) {
                    var n = t.id,
                        r = t.chatId,
                        a = function(t) {
                            return Object(g.O)(e, {
                                email: t
                            }), new Promise((function(t) {
                                return e.once("customer_updated", t)
                            }))
                        };
                    return function(e) {
                        var t = e.getSessionUser().email,
                            i = e.getApplicationState().rtl,
                            o = e.getEvent(r, n).thread,
                            c = e.getChat(r).properties;
                        return {
                            rtl: i,
                            email: t,
                            updateSessionUserEmail: a,
                            firstTimeMessage: e.localize("email_prompt_first_time"),
                            confirmationMessage: e.localize("email_prompt_confirmation"),
                            active: o === c.lastThread
                        }
                    }
                }))((function(e) {
                    var t = e.rtl,
                        n = e.email,
                        a = e.active,
                        i = e.firstTimeMessage,
                        c = e.confirmationMessage,
                        l = e.updateSessionUserEmail,
                        s = r.useRef(null),
                        u = r.useRef(null),
                        m = r.useState(!n),
                        p = m[0],
                        f = m[1],
                        b = r.useState(n || ""),
                        h = b[0],
                        g = b[1],
                        v = n ? c : i,
                        E = Object(rt.a)({
                            type: "email",
                            autoComplete: "email",
                            placeholder: "Email",
                            value: h,
                            onChange: g,
                            label: v
                        }, u),
                        j = E.inputProps,
                        O = E.labelProps,
                        y = function() {
                            return l(h).then((function() {
                                return f(!1)
                            }))
                        },
                        x = r.useCallback((function() {
                            f(!0), g(n || "")
                        }), [n]),
                        w = r.useCallback((function() {
                            n && f(!1)
                        }), [n]);
                    Object(o.m)(s, w);
                    var k = !n || a && p,
                        C = !h || h === n;
                    return r.createElement(zn, null, r.createElement(Tn, k && O, r.createElement(Et.a, {
                        componenet: jt.a
                    }, r.createElement(Ot.a, {
                        preserveLists: !0,
                        template: v,
                        root: {
                            component: yt.a
                        }
                    }))), r.createElement(Bn, {
                        innerRef: s,
                        onSubmit: function(e) {
                            e.preventDefault(), y()
                        }
                    }, k ? r.createElement(r.Fragment, null, r.createElement(Fe, Object(d.a)({}, j, {
                        className: An(t)
                    })), r.createElement(Pn, {
                        rtl: t
                    }, r.createElement(De.q, {
                        "aria-hidden": !0
                    })), r.createElement(In, {
                        rtl: t,
                        type: "submit",
                        onPress: y,
                        disabled: C,
                        "aria-label": "Submit an email"
                    }, r.createElement(De.a, {
                        "aria-hidden": !0
                    }))) : r.createElement(r.Fragment, null, r.createElement(Fn, {
                        ellipsis: !0,
                        active: a
                    }, n), a && r.createElement(Mn, {
                        onPress: x,
                        "aria-label": "Edit an email"
                    }, r.createElement(De.h, {
                        "aria-hidden": !0
                    })))))
                })),
                Hn = Object(i.D)("div", {
                    target: "efus62t0"
                })("margin-bottom:8px;a{color:inherit;}"),
                Ln = Object(i.D)("div", {
                    target: "efus62t1"
                })("width:100%;margin-bottom:2px;font-size:14px;color:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";"),
                qn = Object(i.D)("div", {
                    target: "efus62t2"
                })("width:100%;font-size:14px;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";"),
                Vn = function(e) {
                    var t = e.fields;
                    return r.createElement("div", null, t.map((function(e, t) {
                        var n = e.label,
                            a = e.answer;
                        return r.createElement(Hn, {
                            key: t
                        }, r.createElement(Ln, {
                            textWrap: !0
                        }, r.createElement(Et.a, {
                            component: jt.a
                        }, r.createElement(Ot.a, {
                            preserveLists: !0,
                            template: n,
                            root: {
                                component: yt.a
                            }
                        }))), r.createElement(qn, {
                            textWrap: !0
                        }, r.createElement(yt.a, null, "string" === typeof a ? a : a.join(", "))))
                    })))
                },
                Un = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(Y.a)(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        var e = this.props,
                            t = e.form,
                            n = e.name,
                            r = t.getFieldState(n);
                        r && r.value && t.change(n, void 0)
                    }, n.render = function() {
                        return this.props.children
                    }, t
                }(r.Component);
            var Wn = function(e) {
                    var t = e.when,
                        n = e.children;
                    return t ? r.createElement(me.b, {
                        subscription: ct
                    }, (function(n) {
                        var a = n.form;
                        return n.values[t] ? r.createElement(Un, Object(d.a)({}, e, {
                            form: a
                        })) : null
                    })) : r.createElement(r.Fragment, null, n)
                },
                Yn = Object(i.D)("p", {
                    target: "ecj3oet0"
                })("margin:0;a{color:inherit;}", (function(e) {
                    return e.theme.typography.basic
                })),
                Gn = function(e) {
                    var t = e.children;
                    return r.createElement(Yn, null, "string" === typeof t ? r.createElement(Et.a, {
                        component: jt.a
                    }, r.createElement(Ot.a, {
                        template: t,
                        root: {
                            component: yt.a
                        }
                    })) : t)
                },
                Zn = n(348),
                Kn = n(375),
                Qn = n(359),
                Jn = function(e) {
                    var t = e.children,
                        n = e.showRequiredMark,
                        a = void 0 !== n && n,
                        i = Object(E.a)(e, ["children", "showRequiredMark"]);
                    return r.createElement(Oe, Object(d.a)({
                        isRequired: a
                    }, i), "string" === typeof t ? r.createElement(Et.a, {
                        component: jt.a
                    }, r.createElement(Ot.a, {
                        preserveLists: !0,
                        template: t,
                        root: {
                            component: yt.a
                        }
                    })) : t)
                },
                Xn = Object(i.D)(i.q, {
                    target: "egdebj40"
                })((function(e) {
                    var t = e.theme,
                        n = t.spaceBase,
                        r = t.typography;
                    return Object(d.a)({}, r.basic, {
                        margin: .5 * n + "px 0"
                    })
                })),
                $n = Object(i.D)(Ee, {
                    target: "egdebj41"
                })((function(e) {
                    return {
                        paddingLeft: e.theme.spaceBase + "px"
                    }
                })),
                er = Object(i.z)("flex-shrink:0;"),
                tr = function(e) {
                    var t = e.inputId,
                        n = e.label,
                        a = e.children;
                    return r.createElement(Xn, null, r.createElement("div", {
                        className: er
                    }, a), r.createElement($n, {
                        htmlFor: t
                    }, r.createElement(yt.a, null, n)))
                },
                nr = Object(i.z)("border:none;margin:0;padding:0;max-height:100%;"),
                rr = function(e) {
                    var t = e.checkboxGroupState,
                        n = e.label,
                        a = e.inputId,
                        i = Object(E.a)(e, ["checkboxGroupState", "label", "inputId"]),
                        o = r.useRef(null),
                        c = Object(Qn.a)(),
                        l = Object(Kn.a)(Object(d.a)({}, i, {
                            id: a,
                            children: []
                        }), c, o).inputProps;
                    return r.createElement(tr, {
                        inputId: a,
                        label: n
                    }, r.createElement(Ge, Object(d.a)({
                        ref: o
                    }, Object(K.e)(l, {
                        onChange: function(e) {
                            t.setSelectedValue(e.target.value, e.target.checked)
                        }
                    }))))
                },
                ar = [],
                ir = function(e) {
                    var t = e.options,
                        n = e.label,
                        a = e.name,
                        i = e.required,
                        o = Object(me.c)(a, {
                            defaultValue: ar
                        }),
                        c = function(e) {
                            var t = e.value,
                                n = e.onChange;
                            return {
                                setSelectedValue: function(e, r) {
                                    var a = r ? t.concat(e) : t.filter((function(t) {
                                        return t !== e
                                    }));
                                    n(a)
                                }
                            }
                        }(o.input),
                        l = ut(o).errorMessageProps,
                        s = Object(ee.g)({
                            onBlurWithin: o.input.onBlur,
                            onFocusWithin: o.input.onFocus
                        }).focusWithinProps;
                    return r.createElement(gt, null, r.createElement("fieldset", Object(d.a)({
                        className: nr
                    }, s), r.createElement(Jn, {
                        showRequiredMark: i
                    }, n), t.map((function(e, t) {
                        return r.createElement(ee.a, {
                            preventFocusOnPress: !0,
                            key: t
                        }, r.createElement(rr, {
                            key: t,
                            inputId: a + "_" + t,
                            label: e.label,
                            value: e.value,
                            checkboxGroupState: c
                        }))
                    })), r.createElement(ge, l)))
                },
                or = function(e) {
                    var t = r.useRef(null),
                        n = e.label,
                        a = e.required,
                        i = dt(t, Object(d.a)({}, e, {
                            autoComplete: "name" === e.name ? e.name : "off"
                        })),
                        o = i.inputProps,
                        c = i.labelProps,
                        l = i.errorMessageProps;
                    return r.createElement(gt, null, r.createElement(xt, Object(d.a)({
                        showRequiredMark: a
                    }, c), n), r.createElement(Be, Object(d.a)({}, o, {
                        errorMessageProps: l,
                        inputRef: t
                    })))
                },
                cr = function(e) {
                    var t = r.useRef(null),
                        n = e.label,
                        a = e.required,
                        i = dt(t, Object(d.a)({}, e, {
                            type: "email",
                            autoComplete: "email"
                        })),
                        o = i.inputProps,
                        c = i.labelProps,
                        l = i.errorMessageProps;
                    return r.createElement(gt, null, n && r.createElement(xt, Object(d.a)({
                        showRequiredMark: a
                    }, c), n), r.createElement(Be, Object(d.a)({}, o, {
                        inputRef: t,
                        errorMessageProps: l
                    })))
                },
                lr = n(360),
                sr = n(361),
                ur = Object(i.z)("border:none;margin:0;padding:0;max-height:100%;"),
                dr = function(e) {
                    var t = e.radioGroupState,
                        n = e.label,
                        a = e.inputId,
                        i = Object(E.a)(e, ["radioGroupState", "label", "inputId"]),
                        o = Object(lr.a)(Object(d.a)({}, i, {
                            id: a,
                            children: []
                        }), t, null).inputProps;
                    return r.createElement(tr, {
                        inputId: a,
                        label: n
                    }, r.createElement(et, o))
                },
                mr = function(e) {
                    var t = e.options,
                        n = e.label,
                        a = e.name,
                        i = e.required,
                        o = Object(me.c)(a),
                        c = Object(sr.a)(o.input),
                        l = ut(o),
                        s = l.validationState,
                        u = l.errorMessageProps,
                        m = Object(lr.b)({
                            name: a,
                            label: n,
                            isRequired: i,
                            validationState: s
                        }, c),
                        p = m.radioGroupProps,
                        f = m.labelProps;
                    return r.createElement(gt, null, r.createElement("fieldset", Object(d.a)({
                        className: ur
                    }, Object(K.e)(p, {
                        onBlur: o.input.onBlur,
                        onFocus: o.input.onFocus
                    })), r.createElement(Jn, Object(d.a)({
                        showRequiredMark: i
                    }, f), n), t.map((function(e, t) {
                        return r.createElement(ee.a, {
                            preventFocusOnPress: !0,
                            key: t
                        }, r.createElement(dr, {
                            key: t,
                            inputId: a + "_" + t,
                            label: e.label,
                            value: e.value,
                            radioGroupState: c
                        }))
                    })), r.createElement(ge, u)))
                },
                pr = Object(i.D)("option", {
                    target: "e1t56ivc0"
                })("color:", (function(e) {
                    return e.primary ? e.theme.colors.success : "inherit"
                }), ";"),
                fr = function(e) {
                    var t = e.meta,
                        n = e.name,
                        a = e.label,
                        i = e.value,
                        o = e.localize,
                        c = void 0 !== t && void 0 !== t.online,
                        l = Boolean(t && t.online),
                        s = " (" + o(l ? "skill_status_online" : "skill_status_offline") + ")";
                    return r.createElement(pr, {
                        name: n,
                        primary: c && l,
                        value: i
                    }, "" + a + (c ? s : ""))
                },
                br = function(e) {
                    var t = e.options,
                        n = e.label,
                        a = e.name,
                        i = e.localize,
                        o = e.required,
                        c = Object(me.c)(a);
                    return r.createElement(gt, null, r.createElement(xt, {
                        showRequiredMark: o,
                        htmlFor: a
                    }, n), r.createElement(Me, Object(d.a)({}, c, {
                        id: a,
                        name: a
                    }), r.createElement("option", {
                        value: ""
                    }, i("forms_choose")), t.map((function(e, t) {
                        return r.createElement(fr, {
                            key: t,
                            meta: e.meta,
                            label: e.label,
                            localize: i,
                            name: a,
                            value: e.value
                        })
                    }))))
                },
                hr = Object(i.D)("fieldset", {
                    target: "eptcq7c0"
                })("border:none;margin:0;padding:0;max-height:100%;"),
                gr = function(e) {
                    var t = e.label,
                        n = e.name,
                        a = e.required,
                        i = void 0 !== a && a,
                        o = Object(me.c)(n),
                        c = Object(sr.a)(o.input),
                        l = Object(lr.b)({
                            name: n,
                            label: t,
                            isRequired: i
                        }, c),
                        s = l.radioGroupProps,
                        u = l.labelProps;
                    return r.createElement(gt, null, r.createElement(hr, Object(K.e)(s, {
                        onBlur: o.input.onBlur,
                        onFocus: o.input.onFocus
                    }), r.createElement(Jn, Object(d.a)({
                        showRequiredMark: i
                    }, u), t), r.createElement(Re, Object(d.a)({}, o, {
                        required: i
                    }))))
                },
                vr = Object(i.D)("div", {
                    target: "e12liu9t0"
                })("margin:0;a{color:inherit;}ul,ol{margin:8px 0;display:inline-block;white-space:normal;width:100%;padding-left:24px;}li{margin:4px 0;}", (function(e) {
                    return e.theme.typography.basic
                })),
                Er = Object(i.D)("h2", {
                    target: "e12liu9t1"
                })("font-size:14px;font-weight:normal;margin:0;a{text-decoration:underline;}"),
                jr = {
                    information: function(e) {
                        var t = e.value;
                        return r.createElement(gt, null, r.createElement(vr, {
                            preserveLines: !0,
                            textWrap: !0
                        }, r.createElement(Er, null, r.createElement(Ot.a, {
                            template: t,
                            root: {
                                component: yt.a
                            }
                        }))))
                    },
                    text: or,
                    textarea: wt,
                    email: cr,
                    rating: gr,
                    radio: mr,
                    checkbox: ir,
                    select: br
                };
            var Or = function(e) {
                    var t = e.type;
                    return jr[t]
                },
                yr = n(17),
                xr = function(e, t) {
                    switch (t) {
                        case "prechat":
                            return e("prechat_submit_label");
                        case "ticket":
                            return e("offline_form_submit_label");
                        default:
                            return e("submit")
                    }
                },
                wr = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = t.eventId,
                        a = t.type,
                        i = function(t) {
                            if ("prechat" === a || "ticket" === a) {
                                var i = t.name,
                                    o = t.email,
                                    c = Object(m.f)({
                                        name: i,
                                        email: o
                                    });
                                Object(m.E)(c) || e.updateUser(e.getSessionUserId(), c)
                            }
                            return e.requestUpdateEvent(n, r, {
                                properties: {
                                    answers: t
                                }
                            })
                        };
                    return function(e) {
                        return {
                            localize: e.localize,
                            mobile: e.getApplicationState("mobile"),
                            sendForm: i,
                            sessionUser: e.getSessionUser()
                        }
                    }
                }))((function(e) {
                    var t = e.id,
                        n = e.type,
                        a = e.fields,
                        c = e.mobile,
                        l = e.localize,
                        s = e.sendForm,
                        u = e.sessionUser,
                        p = Object(o.i)(t + ":" + n),
                        f = Object(o.d)((function() {
                            var e = p.get(),
                                t = function(e, t) {
                                    var n = Object(m.N)((function(e) {
                                            return "string" === typeof e ? Object(m.ub)(e) : e
                                        }), Object(m.ab)(["email", "name"], e)),
                                        r = n.name,
                                        a = n.email;
                                    return r === t("client") ? {
                                        email: a
                                    } : {
                                        email: a,
                                        name: r
                                    }
                                }(u, l);
                            return function(e, t, n) {
                                return e.map((function(e) {
                                    var r = n ? n[e.name] : null,
                                        a = t ? t[e.name] : null,
                                        i = r || a;
                                    return i ? Object(d.a)({}, e, {
                                        defaultValue: i
                                    }) : e
                                })).filter((function(e) {
                                    return "defaultValue" in e
                                })).reduce((function(e, t) {
                                    var n = t.name,
                                        r = t.defaultValue;
                                    return e[n] = r, e
                                }), {})
                            }(a, t, e)
                        })),
                        b = r.useRef({
                            counter: 0,
                            lastValues: null,
                            lastResult: null
                        }),
                        h = r.useCallback((function(e) {
                            b.current.counter++, b.current.lastValues = Object(d.a)({}, e);
                            var t = a.reduce((function(t, n) {
                                var r, a, i, o = n.required,
                                    c = n.name;
                                return o && (a = e[c], !(Object(m.D)(a) ? !Object(m.E)(a) : Boolean(a))) ? Object(d.a)({}, t, ((r = {})[c] = l("survey_fill_in_required_fields"), r)) : "maxLength" in n && "number" === typeof n.maxLength && e[c] && e[c].length > n.maxLength ? Object(d.a)({}, t, ((i = {})[c] = "Cannot be longer than " + n.maxLength + " characters long.", i)) : t
                            }), {});
                            return b.current.lastResult = Object(d.a)({}, t), t
                        }), [a, l]);
                    return r.createElement(ht, {
                        id: t,
                        mobile: c,
                        initialValues: f,
                        validate: h,
                        onSubmit: function(e) {
                            var t = b.current,
                                n = t.counter,
                                r = t.lastValues,
                                a = t.lastResult,
                                i = h(e);
                            return 0 !== Object.keys(i).length && Object(yr.c)("invalid_form_submit_4", null, Object(m.N)((function(e) {
                                return JSON.stringify(e)
                            }), {
                                validationErrors: i,
                                validationCounter: n,
                                lastValidationValues: r,
                                lastValidationResult: a,
                                values: e
                            })), s(e).then((function() {
                                p.destroy()
                            }), (function(e) {
                                var t;
                                return e || ((t = {})[Zn.a] = "Please check your internet connection and then try again.", t)
                            }))
                        },
                        submitLabel: xr(l, n)
                    }, a.map((function(e, t) {
                        var n = Or(e);
                        return r.createElement(i.q, {
                            key: t
                        }, r.createElement(Wn, {
                            name: e.name,
                            when: e.dependOn
                        }, r.createElement(n, Object(d.a)({}, e, {
                            localize: l
                        }))))
                    })), r.createElement(me.b, {
                        onChange: function(e) {
                            var t = e.values;
                            e.dirty && p.set(t)
                        },
                        subscription: {
                            values: !0,
                            dirty: !0
                        }
                    }))
                })),
                kr = function(e) {
                    var t = e.theme;
                    return r.createElement(yn, {
                        backgroundColor: t.colors.cta
                    }, r.createElement(B.r, {
                        color: t.colors.ctaText
                    }))
                },
                Cr = function(e) {
                    var t = e.theme;
                    return r.createElement(yn, {
                        backgroundColor: t.colors.cta
                    }, r.createElement(B.u, {
                        color: t.colors.ctaText
                    }))
                },
                Sr = function(e) {
                    var t = e.answered,
                        n = e.theme;
                    return r.createElement(yn, {
                        backgroundColor: t ? n.colors.success : n.colors.cta
                    }, t ? r.createElement(B.x, {
                        color: n.colors.text.black
                    }) : r.createElement(B.m, {
                        color: n.colors.ctaText
                    }))
                },
                Rr = function(e) {
                    var t = e.localize;
                    return r.createElement(Gn, null, t("offline_message_sent"))
                },
                Dr = Object(H.b)((function(e) {
                    var t = e.theme,
                        n = e.chatId,
                        i = e.id,
                        c = e.setScrollTargetNode,
                        l = e.form,
                        s = Object(E.a)(e, ["theme", "chatId", "id", "setScrollTargetNode", "form"]),
                        m = l.properties,
                        p = m.formId,
                        f = m.formType,
                        b = m.fields,
                        h = m.answered,
                        g = b.filter((function(e) {
                            return e.answer && e.label
                        })),
                        v = u.J(l),
                        j = r.useRef(null);
                    if (Object(o.n)((function() {
                            !h && j.current && c && c(j.current)
                        })), v) return null;
                    var O = function(e) {
                            switch (e) {
                                case "prechat":
                                    return kr;
                                case "postchat":
                                    return Cr;
                                case "ticket":
                                    return Sr;
                                default:
                                    return null
                            }
                        }(f),
                        y = function(e) {
                            return "ticket" === e ? Rr : Vn
                        }(f);
                    return r.createElement("div", Object(d.a)({
                        ref: j
                    }, s), r.createElement(a.a, null, (function(e) {
                        return r.createElement(zn, {
                            defaultCollapsed: !0,
                            collapsible: h,
                            icon: O && r.createElement(O, {
                                theme: t,
                                answered: h
                            })
                        }, h ? r.createElement(y, {
                            fields: g,
                            localize: e
                        }) : r.createElement(wr, {
                            key: f,
                            chatId: n,
                            eventId: i,
                            id: p,
                            type: f,
                            fields: b
                        }))
                    })))
                })),
                zr = Object(i.z)("width:100%;height:100%;"),
                Tr = Object(i.D)("div", {
                    target: "eprpde50"
                })("flex-shrink:0;width:24px;height:24px;border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";overflow:hidden;"),
                _r = function() {
                    return r.createElement(De.o, null, r.createElement(De.v, null))
                },
                Ir = function(e) {
                    var t = e.src;
                    return t ? r.createElement(Tr, null, r.createElement(i.h, {
                        src: t,
                        className: zr
                    }, (function(e) {
                        switch (e.imageStatus) {
                            case "pending":
                                return r.createElement(De.o, null);
                            case "failed":
                                return r.createElement(_r, null);
                            default:
                                return null
                        }
                    }))) : r.createElement(Tr, null, r.createElement(_r, null))
                },
                Mr = Object(i.D)("h2", {
                    target: "e5gms8x0"
                })("flex-grow:1;flex-basis:100%;font-weight:700;font-size:14px;margin:0 8px;"),
                Fr = Object(i.D)(i.q, {
                    target: "e1txcupw0"
                })("border-bottom:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";padding:0 0.8em;height:48px;display:flex;align-items:center;"),
                Br = n(39),
                Pr = Object(i.D)("form", {
                    target: "ewg5kgh0"
                })("display:block;position:relative;"),
                Ar = Object(i.D)(Fe, {
                    target: "ewg5kgh1"
                })("height:50px;padding-right:calc(36px + (2 * 8px));"),
                Nr = Object(i.D)(B.j, {
                    target: "ewg5kgh2"
                })("width:36px;height:36px;position:absolute;right:8px;top:calc(50% - 18px);display:flex;justify-content:center;align-items:center;color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";transition:background-color 100ms ease-in-out;", (function(e) {
                    var t = e.disabled,
                        n = e.theme;
                    return t ? {
                        backgroundColor: n.colors.grayscale[400]
                    } : {
                        backgroundColor: Object(kt.g)(n.colors.cta) ? Object(kn.e)(.6, n.colors.cta) : n.colors.cta
                    }
                })),
                Hr = function(e) {
                    var t = e.label,
                        n = e.titleId,
                        a = e.descriptionId,
                        i = e.onSubmit,
                        o = r.useState(""),
                        c = o[0],
                        l = o[1],
                        s = "" === c,
                        u = function() {
                            s || (i(c), l(""))
                        };
                    return r.createElement(Pr, {
                        onSubmit: function(e) {
                            e.preventDefault(), u()
                        }
                    }, r.createElement(Ar, {
                        type: "text",
                        placeholder: t,
                        value: c,
                        "aria-labelledby": n,
                        "aria-describedby": a,
                        onChange: function(e) {
                            return l(null == e ? void 0 : e.target.value)
                        }
                    }), r.createElement(Nr, {
                        disabled: s,
                        "aria-label": t,
                        onPress: u
                    }, r.createElement(B.s, {
                        size: 32
                    })))
                },
                Lr = Object(i.D)(Fr, {
                    target: "e1j7xo750"
                })("border-bottom:0;"),
                qr = Object(i.D)("div", {
                    displayName: "BoosterContainer",
                    target: "e1j7xo751"
                })("width:100%;display:flex;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";max-width:", (function(e) {
                    return e.single ? "270px" : "240px"
                }), ";"),
                Vr = Object(i.D)("div", {
                    target: "e1j7xo752"
                })("padding:0 0.8em 0.8em 0.8em;"),
                Ur = Object(i.D)(vn.a, {
                    target: "e1j7xo753"
                })("flex-grow:1;max-width:100%;flex-basis:100%;"),
                Wr = Object(i.D)("p", {
                    target: "e1j7xo754"
                })(Xt(), ";margin:0;margin-bottom:1.2em;", (function(e) {
                    return e.theme.typography.basic
                })),
                Yr = function(e) {
                    var t = e.id,
                        n = e.icon,
                        a = e.title,
                        i = e.description,
                        o = e.onUserAction,
                        c = e.action,
                        l = e.single,
                        s = void 0 !== l && l,
                        u = Object(K.h)(),
                        d = Object(K.h)();
                    return r.createElement(qr, {
                        single: s
                    }, r.createElement(Ur, {
                        role: "gridcell"
                    }, r.createElement(Lr, null, r.createElement(Ir, {
                        src: n
                    }), r.createElement(Mr, {
                        id: u,
                        ellipsis: !0,
                        flexFill: !0
                    }, a)), r.createElement(Vr, null, r.createElement(Wr, {
                        id: d
                    }, r.createElement(Et.a, {
                        componenet: jt.a
                    }, r.createElement(Ot.a, {
                        preserveLists: !0,
                        template: i,
                        root: {
                            component: yt.a
                        }
                    }))), "button" === c.type && r.createElement(Br.a, {
                        ellipsis: !0,
                        variant: "default",
                        label: c.label,
                        onClick: function() {
                            return o(t)
                        }
                    }), "search" === c.type && r.createElement(Hr, {
                        titleId: u,
                        label: c.label,
                        descriptionId: d,
                        onSubmit: function(e) {
                            return o(t, e)
                        }
                    }))))
                },
                Gr = Object(i.D)("div", {
                    target: "e1ndqyd80"
                })("padding-top:0.8em;width:100%;display:flex;justify-content:center;flex-grow:1;"),
                Zr = Object(a.c)((function(e) {
                    var t = function(t) {
                        return e.emit("on_chat_booster_launched", t)
                    };
                    return function() {
                        return {
                            emitBoosterLaunched: t
                        }
                    }
                }))((function(e) {
                    var t = e.boosters,
                        n = e.setScrollTargetNode,
                        a = e.showMoment,
                        c = e.emitBoosterLaunched,
                        l = r.useRef(null);
                    Object(o.n)((function() {
                        l.current && n && n(l.current)
                    }));
                    var s = function(e, n) {
                        var r = t.find((function(t) {
                            return t.id === e
                        }));
                        if (r) {
                            var i = r.icon,
                                o = r.title,
                                l = r.action,
                                s = l.url,
                                u = l.type,
                                m = l.webviewHeight,
                                p = void 0 === m ? "full" : m;
                            c({
                                id: e,
                                title: o
                            }), a({
                                icon: i,
                                title: o,
                                height: p,
                                url: Object(L.c)(s, Object(d.a)({}, o && {
                                    "moment-title": o
                                }, "search" === u && n && {
                                    query: String(n)
                                }))
                            })
                        }
                    };
                    return r.createElement(Gr, {
                        innerRef: l,
                        role: "row"
                    }, 1 === t.length ? r.createElement(Yr, Object(d.a)({}, t[0], {
                        single: !0,
                        onUserAction: s
                    })) : r.createElement(i.e, null, t.map((function(e) {
                        return r.createElement(Yr, Object(d.a)({}, e, {
                            key: e.id,
                            onUserAction: s
                        }))
                    }))))
                })),
                Kr = Object(i.D)("div", {
                    target: "e1yucjc70"
                })("width:100%;display:flex;margin-bottom:16px;flex-direction:row;align-items:center;justify-content:center;"),
                Qr = Object(i.D)("div", {
                    target: "e1yucjc71"
                })("padding:4px 12px;", (function(e) {
                    var t = e.theme;
                    return Object(i.z)(t.typography.basic, ";background-color:", Object(kn.f)(.7, t.colors.caution), ";border-radius:", t.borderRadius.sm, ";")
                })),
                Jr = function() {
                    return r.createElement(a.a, null, (function(e) {
                        return r.createElement(Kr, null, r.createElement(Qr, null, e("fill_form_to_send")))
                    }))
                },
                Xr = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            shouldHandleSeen: !t.props.event.own && !t.props.event.seen
                        }, t.handleSeen = function() {
                            t.setState({
                                shouldHandleSeen: !1
                            }), t.props.listItemHandlers.markAsSeen(t.props.id)
                        }, t.getCardDisabledButtons = function() {
                            var e = t.props,
                                n = e.isChatActive,
                                r = e.isPartOfLastThread,
                                a = n && r;
                            return e.event.properties.invitation ? n ? ["cancel"] : [] : a ? [] : ["message", "webview"]
                        }, t.handleMessageRef = function(e) {
                            var n = t.props,
                                r = n.scrollTarget,
                                a = n.setScrollTargetNode;
                            e && "draft" === r && a(e)
                        }, t
                    }
                    return Object(Y.a)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return t.shouldHandleSeen && e.event.seen ? {
                            shouldHandleSeen: !1
                        } : null
                    }, t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.mobile,
                            a = t.author,
                            o = t.event,
                            c = t.chatId,
                            l = t.localize,
                            s = t.radiusType,
                            u = t.showMoment,
                            m = t.scrollTarget,
                            f = t.deliveryStatus,
                            b = t.enforceDeliveryStatusDisplay,
                            h = t.listItemHandlers,
                            g = t.showMetaOnClick,
                            E = t.setScrollTargetNode,
                            j = t.handleGreetingDisplayed,
                            O = t.showFillFormAnnouncement,
                            y = t.rtl,
                            x = "system" === a.type,
                            w = this.state.shouldHandleSeen;
                        if ("system_message" === o.type) {
                            var k = o.properties,
                                C = k.systemMessageType,
                                S = k.textVariables,
                                R = k.defaultText;
                            return r.createElement(gn, null, C ? l(C, S) : R)
                        }
                        return "email_prompt" === o.type ? r.createElement(Nn, {
                            id: o.id,
                            chatId: c
                        }) : "form" === o.type ? r.createElement(r.Fragment, null, O && r.createElement(Jr, null), r.createElement(p.a, {
                            appear: O,
                            component: null
                        }, r.createElement(v.b, {
                            delay: 100
                        }, r.createElement(Dr, {
                            id: o.id,
                            chatId: c,
                            form: o,
                            setScrollTargetNode: "form" === m && E
                        })))) : "boosters" === o.type ? r.createElement(Zr, {
                            boosters: o.properties.boosters,
                            showMoment: u,
                            setScrollTargetNode: "boosters" === m && E
                        }) : r.createElement(i.i, {
                            date: x ? "" : (e = o.timestamp, new Date(e).toTimeString().substr(0, 5)),
                            deliveryStatus: f,
                            enforceDeliveryStatusDisplay: b,
                            failed: o.failed,
                            isOwn: o.own,
                            onSeen: this.handleSeen,
                            seen: !w,
                            sending: !o.delivered && !o.failed,
                            showMetaOnClick: !x && g,
                            system: x,
                            innerRef: this.handleMessageRef,
                            authorName: r.createElement(yt.a, null, o.own && !a.name ? l("client") : a.name)
                        }, r.createElement(bn.a, Object(d.a)({
                            event: o,
                            mobile: n,
                            radiusType: s,
                            disabledButtons: this.getCardDisabledButtons(),
                            onActionButtonClick: h.handleActionButtonClick,
                            rtl: y
                        }, o.properties.invitation && {
                            onShow: function() {
                                return j(o)
                            }
                        })))
                    }, t
                }(r.Component),
                $r = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = t.id,
                        a = t.showMoment,
                        i = function(t) {
                            u.jb(e, t) || g.m(e)
                        };
                    return function(e, t) {
                        var n;
                        return function(r) {
                            var a = e(r);
                            if (void 0 === a) return n;
                            var i = t(r, a);
                            return n = i, i
                        }
                    }((function(e) {
                        return e.getEvent(n, r)
                    }), (function(e, t) {
                        var o = e.getChat(n),
                            c = o.properties.lastThread === t.thread,
                            l = "form" === t.type && !t.properties.answered && u.N(e, n);
                        return {
                            event: t,
                            chatId: n,
                            showMoment: a,
                            handleGreetingDisplayed: i,
                            showFillFormAnnouncement: l,
                            localize: e.localize,
                            isChatActive: o.active,
                            author: e.getUser(t.author),
                            mobile: e.getApplicationState("mobile"),
                            enforceDeliveryStatusDisplay: r === Object(m.K)(Object(m.K)(e.getTimeline(n)).events).id && t.own,
                            isPartOfLastThread: c,
                            deliveryStatus: u.e(e, n, r),
                            rtl: e.getApplicationState("rtl")
                        }
                    }))
                }))(Xr),
                ea = n(113),
                ta = Object(i.D)("label", {
                    target: "e1e9gyrb0"
                })("color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";cursor:", (function(e) {
                    return e.disabled ? "not-allowed" : "pointer"
                }), ";display:flex;align-items:center;"),
                na = Object(i.D)("span", {
                    target: "e1e9gyrb1"
                })("display:flex;align-items:center;justify-content:center;&:focus{outline-style:", (function(e) {
                    return e.focusVisible ? "auto" : "none"
                }), ";}"),
                ra = Object(i.D)("input", {
                    target: "e1e9gyrb2"
                })("display:none;"),
                aa = Object(H.b)((function(e) {
                    var t = e.handleFileChange,
                        n = e.disabled,
                        a = e.theme,
                        i = r.useRef(null),
                        c = Object(o.k)((function() {
                            return i.current.click()
                        })),
                        l = Object(ee.f)();
                    return r.createElement(ta, {
                        flexFit: !0,
                        htmlFor: "fileupload",
                        disabled: n
                    }, r.createElement(na, Object(d.a)({
                        role: "button",
                        "aria-label": "Send a file",
                        tabIndex: "0"
                    }, c, l), r.createElement(B.b, {
                        color: a.colors.grayscale[n ? 300 : 500],
                        "aria-hidden": !0
                    })), r.createElement(ra, {
                        multiple: !0,
                        onChange: t,
                        type: "file",
                        value: "",
                        id: "fileupload",
                        innerRef: i,
                        disabled: n
                    }))
                })),
                ia = n(362),
                oa = Object(i.D)("span", {
                    target: "e1v5q6v40"
                })("margin:", (function(e) {
                    return e.theme.spaces.space1
                }), ";padding-left:", (function(e) {
                    return e.theme.spaces.space1
                }), ";width:1.5em;height:1.5em;text-align:center;vertical-align:middle;font-size:1.5em;line-height:1.5em;"),
                ca = Object(i.D)("div", {
                    target: "e1v5q6v41"
                })("margin:", (function(e) {
                    return e.theme.spaces.space2
                }), ";outline:none;cursor:pointer;", (function(e) {
                    var t = e.highlighted,
                        n = e.theme;
                    if (!t) return Object(i.z)(B.k, "{background-color:", n.colors.surface.light, ";}")
                })),
                la = function(e) {
                    var t = e.onPress,
                        n = e.emoji,
                        a = e.itemList,
                        i = r.useRef(null),
                        o = a.useItem,
                        c = a.clearHighlightedItem,
                        l = o({
                            ref: i,
                            text: n,
                            value: n
                        }),
                        s = l.id,
                        u = l.highlight,
                        d = (0, l.useHighlighted)();
                    return r.createElement(ca, {
                        id: s,
                        innerRef: i,
                        highlighted: d,
                        onClick: t,
                        onMouseOver: u,
                        onMouseOut: c,
                        "aria-label": "insert " + n
                    }, r.createElement(B.k, null, r.createElement(oa, {
                        "aria-hidden": !0
                    }, n)))
                },
                sa = n(43),
                ua = Object(m.d)(["\ud83d\ude42", "\ud83d\ude01", "\ud83d\ude02", "\ud83d\ude0a", "\ud83d\ude0d", "\ud83d\ude10", "\ud83d\ude15", "\ud83d\ude12", "\ud83d\ude22", "\ud83d\ude2d", "\ud83c\udf89", "\u2764\ufe0f", "\ud83d\udc4c", "\ud83d\udc4d", "\ud83d\ude4f"], 5),
                da = Object(i.D)("div", {
                    target: "e1pkkif40"
                })("margin:0;padding:0;outline:none;"),
                ma = Object(i.D)(B.j, {
                    target: "e1pkkif41"
                })("display:flex;justify-content:center;align-items:center;opacity:1;transition:background-color 150ms ease-in-out;background-color:", (function(e) {
                    return e.backgroundColor
                }), ";"),
                pa = Object(i.D)("div", {
                    target: "e1pkkif42"
                })("display:flex;flex-direction:row;align-items:center;justify-content:flex-start;"),
                fa = Object(i.D)("div", {
                    target: "e1pkkif43"
                })("display:flex;align-items:center;justify-content:center;flex-shrink:0;flex-grow:0;"),
                ba = Object(H.b)((function(e) {
                    var t = e.theme,
                        n = e.onEmojiPicked,
                        a = r.useRef(null),
                        i = r.useRef(null),
                        o = r.useRef({
                            open: m.T,
                            close: m.T
                        }),
                        c = r.useState(!1),
                        l = c[0],
                        s = c[1],
                        u = function(e) {
                            n(e), o.current.close(), Math.random() < .001 && Object(yr.d)("Emoji_inserted_from_picker", {
                                emoji: e
                            })
                        },
                        d = Object(ia.a)({
                            onSelect: u
                        }),
                        p = d.useHighlightedItemId();
                    return 0 === ua.length || Object(sa.c)() ? null : r.createElement(Bt, {
                        animated: !0,
                        placement: "top",
                        appearance: "light",
                        trigger: "press",
                        controlsRef: o,
                        onOpenChange: function(e, t) {
                            var n;
                            if (Object(ee.c)() ? d.setHighlightedItem(0) : d.clearHighlightedItem(), e) null == (n = i.current) || n.focus();
                            else if (!t) {
                                var r;
                                null == (r = a.current) || r.focus()
                            }
                            s(e)
                        },
                        description: r.createElement(da, {
                            tabIndex: 0,
                            role: "grid",
                            "aria-label": "emoji picker",
                            innerRef: i,
                            "aria-activedescendant": p,
                            onKeyDown: function(e) {
                                switch (e.key) {
                                    case "ArrowUp":
                                        d.highlightedIndex.current - 5 >= 0 && d.moveHighlightedItem(-5);
                                        break;
                                    case "ArrowDown":
                                        d.highlightedIndex.current + 5 < d.items.current.length && d.moveHighlightedItem(5);
                                        break;
                                    case "ArrowLeft":
                                        d.highlightedIndex.current - 1 >= 0 && d.moveHighlightedItem(-1);
                                        break;
                                    case "ArrowRight":
                                        d.highlightedIndex.current + 1 < d.items.current.length && d.moveHighlightedItem(1);
                                        break;
                                    case "Home":
                                        d.setHighlightedItem(0);
                                        break;
                                    case "End":
                                        d.setHighlightedItem(d.items.current.length - 1);
                                        break;
                                    case " ":
                                    case "Enter":
                                        e.preventDefault(), d.selectHighlightedItem();
                                        break;
                                    case "Tab":
                                        return void e.preventDefault();
                                    default:
                                        return void d.highlightItemByString(e)
                                }
                                e.preventDefault()
                            }
                        }, ua.map((function(e, t) {
                            return r.createElement(pa, {
                                key: t,
                                role: "row"
                            }, e.map((function(e, t) {
                                return r.createElement(fa, {
                                    key: t,
                                    role: "gridcell"
                                }, r.createElement(la, {
                                    emoji: e,
                                    itemList: d,
                                    onPress: function() {
                                        return u(e)
                                    }
                                }))
                            })))
                        })))
                    }, r.createElement(ma, {
                        "aria-label": "open emoji picker",
                        innerRef: a,
                        backgroundColor: l ? t.colors.cta : "transparent",
                        onPress: function() {
                            l && o.current.close()
                        }
                    }, r.createElement(B.g, {
                        color: l ? t.colors.text.white : t.colors.grayscale[500]
                    })))
                })),
                ha = function(e, t) {
                    return Object(i.z)("font-family:inherit;padding:1.25em 7.75em 1.25em 1em;overflow-y:auto;margin-top:0;transition:box-shadow 0.1s ease-in-out;background-color:", e ? Object(kn.f)(.95, t.colors.caution) : Object(kn.e)(.012, t.colors.surface.light), ";:focus{background-color:", t.colors.surface.light, ";}")
                },
                ga = Object(i.z)("padding:0;svg *{transition:fill 100ms ease-in-out;}"),
                va = Object(i.D)("div", {
                    target: "ex4ls1q0"
                })("position:absolute;top:0;height:100%;right:1em;display:flex;align-items:center;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";"),
                Ea = Object(i.D)(i.q, {
                    target: "ex4ls1q1"
                })("position:relative;");
            var ja = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t) {
                            g.e(e, t)
                        },
                        a = function(t) {
                            g.B(e, n, t)
                        },
                        i = function(t) {
                            e.requestUpdateChat(n, {
                                properties: {
                                    messageDraft: t
                                }
                            })
                        };
                    return function(e) {
                        return {
                            sendFile: r,
                            sendMessage: a,
                            setMessageDraft: i,
                            reconnecting: u.hb(e),
                            allowInput: u.Z(e),
                            allowFileUpload: u.Y(e),
                            isFileUploadPossible: u.H(e),
                            mobile: e.getApplicationState("mobile"),
                            applicationFocused: e.getApplicationState("applicationFocused")
                        }
                    }
                }))(Object(H.b)((function(e) {
                    var t = e.allowFileUpload,
                        n = e.isFileUploadPossible,
                        c = e.mobile,
                        l = e.onHeightChange,
                        s = e.onSendMessage,
                        u = e.allowInput,
                        p = e.reconnecting,
                        f = e.sendFile,
                        b = e.sendMessage,
                        h = e.setMessageDraft,
                        g = (e.applicationFocused, e.onFocusChange),
                        v = e.theme,
                        j = Object(E.a)(e, ["allowFileUpload", "isFileUploadPossible", "mobile", "onHeightChange", "onSendMessage", "allowInput", "reconnecting", "sendFile", "sendMessage", "setMessageDraft", "applicationFocused", "onFocusChange", "theme"]),
                        O = r.useRef(null),
                        y = r.useRef([0, 0]),
                        x = Object(o.i)("text-composer"),
                        w = x.get(),
                        k = r.useState(w || ""),
                        C = k[0],
                        S = k[1],
                        R = r.useMemo((function() {
                            return Object(m.tb)(1500, h)
                        }), [h]),
                        D = Object(o.e)(p),
                        z = r.useCallback((function() {
                            g && g(!0)
                        }), [g]),
                        T = r.useCallback((function() {
                            g && g(!1)
                        }), [g]),
                        _ = r.useCallback((function(e) {
                            b(e), h(""), s && s()
                        }), [b, s, h]),
                        I = r.useCallback((function(e) {
                            [].forEach.call(e.target.files, f)
                        }), [f]);
                    r.useEffect((function() {
                        var e = function() {
                            y.current = [O.current.selectionStart, O.current.selectionEnd]
                        };
                        return O.current.addEventListener("blur", e),
                            function() {
                                return O.current.removeEventListener("blur", e)
                            }
                    }), []);
                    var M = function(e) {
                        var t = y.current,
                            n = t[0],
                            r = t[1];
                        J.a.flushSync((function() {
                            S((function(t) {
                                var a = t.slice(0, n) + e + t.slice(r, t.length);
                                return x.set(a), a
                            }))
                        })), J.a.flushSync((function() {
                            O.current.focus();
                            var t = n + e.length;
                            O.current.setSelectionRange(t, t)
                        }))
                    };
                    return r.createElement(a.a, null, (function(e) {
                        return r.createElement(i.t, Object(d.a)({}, j, {
                            value: C,
                            active: u,
                            disabled: p && !D,
                            mobile: c,
                            defaultValue: w,
                            onSend: _,
                            inputRef: function(e) {
                                O.current = e
                            },
                            onValueChange: function(e) {
                                S(e), x.set(e), R(e)
                            }
                        }), r.createElement(Ea, {
                            verticalAlign: "center"
                        }, r.createElement(i.u, {
                            autoFocus: Object(pt.c)(),
                            className: ha(p && !D, v),
                            disabled: p && !D,
                            flexFill: !0,
                            minRows: 1,
                            onBlur: T,
                            onFocus: z,
                            onHeightChange: l,
                            placeholder: e("embedded_textarea_placeholder"),
                            "aria-label": e("embedded_textarea_placeholder"),
                            enterKeyHint: "send"
                        }), r.createElement(va, null, r.createElement(ba, {
                            onEmojiPicked: M
                        }), t && r.createElement(aa, {
                            disabled: !n,
                            handleFileChange: I
                        }), r.createElement(i.r, {
                            flexFit: !0,
                            className: ga,
                            icon: r.createElement(B.t, null),
                            "aria-label": "Send a message"
                        }))))
                    }))
                }))),
                Oa = {
                    enter: 600,
                    exit: 400
                },
                ya = function(e, t) {
                    return Object(i.z)("&-enter,&-appear{transform:translateY(100%);}&-enter-active,&-appear-active,&-enter-done,&-appear-done{transform:translateY(0);transition:transform ", 600 * e, "ms ", t.transitions.easings.swift, ";}&-exit{transform:translateY(0);}&-exit-active{transform:translateY(100%);transition:transform ", 400 * e, "ms ", t.transitions.easings.swift, ";}")
                },
                xa = Object(H.b)((function(e) {
                    var t = e.show,
                        n = e.durationFactor,
                        a = e.onTransitionStart,
                        i = e.onTransitionEnd,
                        o = e.children,
                        c = e.nodeRef,
                        l = e.theme;
                    return r.createElement(p.a, {
                        appear: !0,
                        component: null
                    }, t && r.createElement(j.a, {
                        timeout: Oa,
                        onExited: i,
                        onEntered: i,
                        onExiting: a,
                        onEntering: a,
                        classNames: ya(n, l),
                        nodeRef: c
                    }, o))
                })),
                wa = n(372),
                ka = function(e) {
                    var t = e.heightPercentage,
                        n = e.theme;
                    return Object(i.z)("position:absolute;z-index:1500;display:flex;flex-direction:column;height:", 100 * t, "%;min-height:270px;max-height:100%;width:100%;bottom:0;border-radius:inherit;color:", n.colors.text.black, ";background-color:", n.colors.surface.light, ";")
                },
                Ca = Object(H.b)((function(e) {
                    var t = e.heightPercentage,
                        n = e.theme,
                        a = e.children,
                        i = e.innerRef,
                        c = Object(E.a)(e, ["heightPercentage", "theme", "children", "innerRef"]),
                        l = r.useRef(null),
                        s = Object(o.c)(l, i);
                    return Object(o.g)("touchmove", l), Object(o.b)(l), r.createElement(wa.a, {
                        autoFocus: !1,
                        returnFocus: !0,
                        crossFrame: !1,
                        className: ka({
                            heightPercentage: t,
                            theme: n
                        }),
                        ref: s,
                        lockProps: Object(d.a)({
                            role: "dialog",
                            "aria-modal": !0
                        }, c)
                    }, a)
                })),
                Sa = n(20),
                Ra = n(231),
                Da = {
                    allowtransparency: "true",
                    scrolling: "yes",
                    style: {
                        position: "absolute",
                        minWidth: "100%",
                        minHeight: "100%",
                        height: "1px",
                        width: "1px",
                        margin: "0",
                        padding: "0",
                        background: "none",
                        border: "0"
                    }
                },
                za = function(e) {
                    if (e) {
                        var t = e.scrollTop,
                            n = e.scrollHeight - e.offsetHeight;
                        0 === t ? e.scrollTop = 1 : t === n && (e.scrollTop = n - 1)
                    }
                },
                Ta = function(e) {
                    return {
                        moment_url: Object(L.e)(e) + Object(L.f)(e),
                        moment_origin: Object(L.e)(e) || ""
                    }
                },
                _a = function(e) {
                    var t = e.hidden;
                    return Object(i.z)("flex-grow:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;display:", t ? "none" : "block", ";")
                },
                Ia = function(e, t, n) {
                    var r = document.createElement("iframe");
                    return n && (r.allow = "microphone *; camera *; display-capture *; picture-in-picture *;"), r.src = t, e.appendChild(r), r
                },
                Ma = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(a)) || this).sdk = void 0, t.containerRef = r.createRef(), t.handleIFrameLoad = function() {
                            t.sdk && (t.props.onLoadingChanged(!1), t.sdk.frame.removeEventListener("load", t.handleIFrameLoad))
                        }, t.handleScroll = function(e) {
                            za(e.currentTarget)
                        }, t
                    }
                    Object(Y.a)(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props,
                            t = e.url,
                            n = e.close,
                            r = e.sendMessage,
                            a = e.sendSystemMessage,
                            i = e.setAttributes,
                            o = e.onLoadingChanged,
                            c = e.onMomentDataChanged,
                            l = e.allowVideoConferencing;
                        if (t && this.containerRef.current) {
                            var s = {
                                close: n,
                                sendMessage: r,
                                setAttributes: i,
                                setExternalLink: function(e) {
                                    c({
                                        externalLink: e
                                    })
                                },
                                setIsFragile: function(e) {
                                    c({
                                        isFragile: e
                                    })
                                }
                            };
                            a && (s.sendSystemMessage = a), this.sdk = Object(Ra.b)({
                                frame: Ia(this.containerRef.current, t, l),
                                url: t,
                                onConnected: function(e) {
                                    var t = e.data;
                                    o(!1), c(t)
                                }
                            }, s), Object(Sa.a)(Da, this.sdk.frame), o(!0), this.sdk.frame.addEventListener("load", this.handleIFrameLoad), c({
                                title: this.sdk.title
                            }), Object(yr.d)("moment_opened", Ta(Object(Ra.a)(t)))
                        }
                    }, n.componentWillUnmount = function() {
                        var e = this.props,
                            t = e.onMomentDataChanged,
                            n = e.onLoadingChanged;
                        this.sdk && (this.sdk.destroy(), t(null), n(!1));
                        var r = this.props.url;
                        r && Object(yr.d)("moment_closed", Ta(Object(Ra.a)(r)))
                    }, n.render = function() {
                        return r.createElement("div", {
                            ref: this.containerRef,
                            className: _a(this.props),
                            onScroll: this.handleScroll
                        })
                    }, t
                }(r.Component),
                Fa = Object(i.D)("div", {
                    target: "ej1cp8k0"
                })("z-index:1500;position:absolute;top:42px;left:50%;width:75%;max-width:500px;display:flex;flex-direction:column;background:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.lg
                }), ";padding:", (function(e) {
                    return e.theme.spaces.space6
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";"),
                Ba = Object(i.D)(tt.a, {
                    target: "ej1cp8k1"
                })("display:flex;width:auto;flex-grow:", (function(e) {
                    return e.primary ? 1 : 1.5
                }), ";padding:8px 12px;background-color:", (function(e) {
                    var t = e.theme;
                    return e.primary ? t.colors.grayscale[100] : t.colors.error
                }), ";color:", (function(e) {
                    var t = e.theme;
                    return e.primary ? t.colors.text.black : t.colors.white
                }), ";&:first-child{margin-right:", (function(e) {
                    return e.theme.spaces.space4
                }), ";}"),
                Pa = Object(i.D)("p", {
                    target: "ej1cp8k2"
                })("margin:0;", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                Aa = Object(i.D)("div", {
                    target: "ej1cp8k3"
                })("width:100%;max-width:250px;display:flex;align-self:center;margin-top:", (function(e) {
                    return e.theme.spaces.space4
                }), ";"),
                Na = function(e) {
                    var t = e.shown,
                        n = e.onResponse,
                        a = r.useRef(null),
                        i = Object(Z.c)({
                            isOpen: !0,
                            isDismissable: !0,
                            onClose: function() {
                                return n("canceled")
                            }
                        }, a).overlayProps,
                        o = Object(Z.b)().modalProps,
                        c = Object(G.a)({
                            "aria-labelledby": "confirmation-modal-label-id"
                        }, a).dialogProps;
                    return Object(Z.d)(), r.createElement(r.Fragment, null, r.createElement(ie, {
                        shown: t
                    }), r.createElement(p.a, {
                        component: null
                    }, t && r.createElement(v.c, {
                        nodeRef: a
                    }, r.createElement(l.a, {
                        contain: !0,
                        restoreFocus: !0,
                        autoFocus: !0
                    }, r.createElement(Fa, Object(d.a)({}, Object(K.e)(i, c, o), {
                        innerRef: a
                    }), r.createElement(Pa, {
                        id: "confirmation-modal-label-id"
                    }, "Any data or connection will be lost after you close this window"), r.createElement(Aa, null, r.createElement(Ba, {
                        primary: !0,
                        onClick: function() {
                            return n("canceled")
                        }
                    }, "Cancel"), r.createElement(Ba, {
                        onClick: function() {
                            return n("confirmed")
                        }
                    }, "Close anyway")))))))
                },
                Ha = n(188),
                La = {
                    full: .8,
                    tall: .5,
                    compact: .3
                },
                qa = Object(i.z)("display:flex;"),
                Va = Object(a.c)((function(e, t) {
                    var n, r = t.chatId,
                        a = function() {
                            return g.f(e)
                        },
                        i = function(t) {
                            return g.O(e, {
                                properties: t
                            })
                        },
                        o = function(t) {
                            return g.B(e, r, t)
                        },
                        c = !!e.getApplicationState("config").hasAnyCustomLicenseProperty;
                    return "lc3" === e.getApplicationState().protocol && (n = function(t) {
                            return g.A(e, r, t)
                        }),
                        function(e) {
                            var t = e.getView("Moment"),
                                r = t.show,
                                l = t.data;
                            return {
                                show: r,
                                closeMoment: a,
                                sendMessage: o,
                                sendSystemMessage: n,
                                updateSessionUser: i,
                                momentData: l,
                                allowVideoConferencing: c
                            }
                        }
                }))((function(e) {
                    var t = e.allowVideoConferencing,
                        n = e.show,
                        a = e.updateSessionUser,
                        i = e.sendMessage,
                        c = e.sendSystemMessage,
                        l = e.onSendMessage,
                        s = r.useRef(null),
                        u = r.useRef(null),
                        p = r.useState(!1),
                        f = p[0],
                        b = p[1],
                        h = r.useState(!1),
                        g = h[0],
                        v = h[1],
                        E = r.useState(!1),
                        j = E[0],
                        O = E[1],
                        y = r.useState({}),
                        x = y[0],
                        w = y[1],
                        k = Object(ee.f)(),
                        C = Object(o.f)(f && n, e.closeMoment),
                        S = C[0],
                        R = C[1],
                        D = r.useState(!1),
                        z = D[0],
                        T = D[1],
                        _ = g || j,
                        I = function(e) {
                            var t = e.height;
                            return t && t in La ? La[t] : La.tall
                        }(x);
                    Object(m.E)(x) && !Object(m.E)(e.momentData) && w(Object(d.a)({}, x, e.momentData)), Object(o.v)(r.useCallback((function() {
                        return b(!0)
                    }), []), 300), r.useEffect((function() {
                        S && Object(K.c)(u.current)
                    }), [S]);
                    return r.createElement($, null, r.createElement(ie, {
                        shown: n
                    }), r.createElement(xa, {
                        show: S,
                        nodeRef: s,
                        onTransitionEnd: function() {
                            return v(!1)
                        },
                        onTransitionStart: function() {
                            return v(!0)
                        },
                        durationFactor: I / .8
                    }, r.createElement(Ca, {
                        innerRef: s,
                        heightPercentage: I
                    }, r.createElement(Fr, {
                        noShrink: !0
                    }, r.createElement(Ir, {
                        src: x.icon,
                        "aria-hidden": !0
                    }), r.createElement(Mr, Object(d.a)({
                        ellipsis: !0,
                        flexFill: !0,
                        tabIndex: -1,
                        innerRef: u
                    }, k), x.title), x.externalLink && r.createElement(jt.a, {
                        href: x.externalLink,
                        rel: "nofollow noopener noreferrer",
                        className: qa,
                        "aria-label": "Open in a new tab"
                    }, r.createElement(B.q, {
                        "aria-hidden": !0
                    })), r.createElement(B.j, {
                        onPress: function() {
                            x.isFragile ? T(!0) : R()
                        },
                        className: qa,
                        "aria-label": "Close modal"
                    }, r.createElement(B.e, null))), r.createElement(Na, {
                        shown: z,
                        onResponse: function(e) {
                            T(!1), "confirmed" === e && R()
                        }
                    }), r.createElement(Ma, {
                        hidden: _,
                        close: R,
                        url: x.url,
                        sendMessage: function(e) {
                            var t = e.text;
                            i(t), l && l(t)
                        },
                        sendSystemMessage: c,
                        setAttributes: a,
                        onMomentDataChanged: function(e) {
                            return w((function(t) {
                                return e ? Object(d.a)({}, t, e) : {}
                            }))
                        },
                        onLoadingChanged: O,
                        allowVideoConferencing: t
                    }), _ && r.createElement(Ha.a, {
                        size: "xlarge",
                        style: {
                            margin: "auto"
                        }
                    }))))
                })),
                Ua = n(194),
                Wa = n(77),
                Ya = n(85),
                Ga = Object(i.D)("span", {
                    target: "e1oq7ugp0"
                })((function(e) {
                    var t = e.failed,
                        n = e.theme;
                    return {
                        color: t ? n.typography.errorCaption.color : n.typography.basic.color
                    }
                }), ";"),
                Za = Object(i.D)("div", {
                    target: "e1oq7ugp1"
                })("flex:1;display:flex;flex-direction:column;margin:2px;min-width:calc(50% - 4px);max-width:100%;height:140px;"),
                Ka = Object(i.D)("div", {
                    target: "e1oq7ugp2"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.xl
                }), ";flex:1;width:100%;height:100%;display:flex;overflow:hidden;position:relative;align-items:center;justify-content:center;"),
                Qa = Object(i.D)("div", {
                    target: "e1oq7ugp3"
                })("color:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.lightVariant
                }), ";width:100%;height:100%;display:flex;align-items:center;justify-content:center;"),
                Ja = Object(i.D)("img", {
                    target: "e1oq7ugp4"
                })("width:100%;height:auto;"),
                Xa = Object(i.D)("div", {
                    target: "e1oq7ugp5"
                })("position:absolute;top:6px;right:6px;z-index:1;"),
                $a = Object(i.D)("div", {
                    target: "e1oq7ugp6"
                })("height:24px;width:24px;display:flex;border-radius:50%;align-items:center;justify-content:center;color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";background-color:", (function(e) {
                    var t = e.theme,
                        n = e.success,
                        r = e.error;
                    return n ? t.colors.success : r ? t.colors.error : void 0
                }), ";"),
                ei = Object(i.D)("div", {
                    target: "e1oq7ugp7"
                })("opacity:", (function(e) {
                    return e.visible ? 1 : 0
                }), ";transition:opacity 100ms ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), ";position:absolute;left:6px;right:6px;bottom:6px;display:flex;flex-direction:row-reverse;align-items:center;justify-content:space-between;z-index:1;", De.m, "{width:20px;height:20px;}"),
                ti = Object(i.D)("div", {
                    target: "e1oq7ugp8"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";padding:2px;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.6);"),
                ni = Object(i.D)("span", {
                    target: "e1oq7ugp9"
                })((function(e) {
                    return e.theme.typography.caption
                }), ";color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";cursor:pointer;margin-right:4px;"),
                ri = Object(i.z)("cursor:pointer;"),
                ai = function(e) {
                    var t = e.failReason,
                        n = r.useRef(null),
                        a = Object(l.e)({}, n).focusableProps;
                    return r.createElement($a, Object(d.a)({
                        "aria-label": t,
                        error: !0,
                        innerRef: n
                    }, a, {
                        tabIndex: 0
                    }), r.createElement(De.c, {
                        className: ri,
                        size: 24,
                        "aria-hidden": !0
                    }))
                },
                ii = function(e) {
                    var t = e.name,
                        n = e.failed,
                        o = e.finished,
                        c = e.url,
                        l = e.fileType,
                        s = e.mobile,
                        u = e.alternativeText,
                        d = e.onCancel,
                        m = e.onAlternativeTextEdit,
                        p = e.progress,
                        f = void 0 === p ? 0 : p,
                        b = e.failReason,
                        h = void 0 === b ? "" : b,
                        g = e.insistHover,
                        v = e.onHoverChange,
                        E = Object(ee.h)({
                            onHoverChange: v
                        }),
                        j = E.hoverProps,
                        O = E.isHovered,
                        y = Object(ee.f)().isFocusVisible;
                    return r.createElement(a.a, null, (function(e) {
                        return r.createElement(Za, null, r.createElement(Ka, j, r.createElement(Xa, null, o && r.createElement($a, {
                            success: !0
                        }, r.createElement(De.C, {
                            size: 24,
                            "aria-hidden": !0
                        })), n && r.createElement(Bt, {
                            description: h,
                            allowTouch: !0
                        }, r.createElement(ai, {
                            failReason: h
                        })), !o && !n && r.createElement(Ha.a, {
                            size: "medium",
                            progress: f,
                            "aria-hidden": !0
                        })), (d || m) && r.createElement(ei, {
                            visible: g || O || y || s
                        }, d && r.createElement(ti, null, r.createElement(De.m, {
                            onPress: d,
                            "aria-label": "remove the " + t + " file"
                        }, r.createElement(De.w, {
                            size: 20,
                            "aria-hidden": !0
                        }))), "image" === l && m && r.createElement(ti, null, r.createElement(De.m, {
                            onPress: m,
                            "aria-label": "add alternative text to the " + t + " image"
                        }, r.createElement(De.h, {
                            size: 20,
                            "aria-hidden": !0
                        })), r.createElement(ni, {
                            onClick: m
                        }, e("alt_text")))), "image" === l && r.createElement(Ja, {
                            src: c,
                            alt: u || "",
                            style: {
                                opacity: o ? 1 : .25
                            },
                            className: Object(i.z)("transition:opacity 100ms linear;")
                        }), "other" === l && r.createElement(Qa, null, r.createElement(De.k, {
                            size: 56
                        }))), r.createElement(Ga, {
                            ellipsis: !0,
                            failed: n,
                            finished: o
                        }, t))
                    }))
                },
                oi = Object(i.D)("p", {
                    target: "eprg9im0"
                })("margin-bottom:", (function(e) {
                    var t = e.theme,
                        n = e.mobile;
                    return "modern" !== t.name && n ? 0 : 4
                }), "px;", (function(e) {
                    return e.theme.typography.caption
                }), " ", Xt(), ";margin:0;padding:0 12px;max-width:100%;max-height:50px;"),
                ci = Object(i.D)("div", {
                    target: "eprg9im1"
                })((function(e) {
                    var t = e.theme;
                    return !e.mobile && "modern" === t.name && "max-height: 230px; overflow-y: auto;"
                })),
                li = Object(i.D)("div", {
                    target: "eprg9im2"
                })("height:", (function(e) {
                    var t = e.theme;
                    return e.mobile || "modern" !== t.name ? 145 : 140
                }), "px;overflow:hidden;display:flex;align-items:center;justify-content:center;width:100%;"),
                si = Object(i.D)("div", {
                    target: "eprg9im3"
                })("padding:", (function(e) {
                    var t = e.theme;
                    return t.spaces.space3 + " " + t.spaces.space5
                }), ";display:flex;flex-direction:row;justify-content:center;align-items:center;max-width:100%;"),
                ui = Object(i.D)(Fe, {
                    target: "eprg9im4"
                })("height:34px;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;"),
                di = Object(i.D)(B.j, {
                    target: "eprg9im5"
                })("color:", (function(e) {
                    var t = e.theme;
                    return e.highlighted ? t.colors.ctaText : t.colors.text.white
                }), ";background-color:", (function(e) {
                    var t = e.theme;
                    return e.highlighted ? t.colors.cta : t.colors.grayscale[200]
                }), ";height:34px;width:34px;justify-content:center;align-items:center;display:flex;padding:6px 8px;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:6px;transition:background 100ms linear;"),
                mi = Object(i.z)("width:100%;height:auto;"),
                pi = function(e) {
                    var t = e.url,
                        n = e.alternativeText,
                        i = e.onAlternativeTextChanged,
                        o = e.mobile,
                        c = e.titleId,
                        l = r.useState(n || ""),
                        s = l[0],
                        u = l[1],
                        d = Object(ee.f)().isFocusVisible,
                        m = Object(K.h)();
                    return r.createElement(a.a, null, (function(e) {
                        return r.createElement(ci, {
                            mobile: o
                        }, r.createElement(li, {
                            mobile: o
                        }, r.createElement("img", {
                            src: t,
                            className: mi,
                            alt: n
                        })), r.createElement(si, null, r.createElement(ui, {
                            autoFocus: !0,
                            "aria-labelledby": c,
                            "aria-describedby": m,
                            maxLength: 16384,
                            value: s,
                            placeholder: e("describe_image"),
                            onChange: function(e) {
                                var t = e.target;
                                return u(t.value)
                            }
                        }), r.createElement(di, {
                            "aria-label": "save the image's alternative text",
                            highlighted: s !== n || d,
                            disabled: s === n,
                            onPress: function() {
                                i(s)
                            }
                        }, r.createElement(B.a, {
                            size: 24
                        }))), r.createElement(oi, {
                            id: m,
                            mobile: o
                        }, e("alternative_text_description")))
                    }))
                },
                fi = n(64),
                bi = Object(i.D)("h2", {
                    target: "e1k6tlos0"
                })((function(e) {
                    var t = e.failed,
                        n = e.theme;
                    return t && {
                        color: n.typography.errorCaption.color
                    }
                }), " padding:0 6px;font-size:14px;font-weight:normal;align-self:center;margin:0;"),
                hi = Object(i.D)("div", {
                    target: "e1k6tlos1"
                })("display:flex;cursor:pointer;"),
                gi = Object(i.D)("div", {
                    target: "e1k6tlos2"
                })("transition:max-height ", (function(e) {
                    return e.longAnimation ? 600 : 400
                }), "ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";overflow:hidden;max-height:249px;"),
                vi = Object(i.D)("div", {
                    target: "e1k6tlos3"
                })("height:auto;", (function(e) {
                    return e.edit && {
                        margin: "0 -8px"
                    }
                })),
                Ei = Object(i.D)("div", {
                    target: "e1k6tlos4"
                })("max-height:", (function(e) {
                    var t = e.theme;
                    return e.mobile || "modern" !== t.name ? 200 : 170
                }), "px;overflow:auto;display:flex;flex-direction:row;flex-wrap:wrap;padding:4px 0;"),
                ji = Object(i.D)("hr", {
                    target: "e1k6tlos5"
                })("margin:", 8, "px -", 8, "px 0;border:0;border-bottom:1px solid rgba(0,0,0,0.1);"),
                Oi = Object(i.D)(De.e, {
                    target: "e1k6tlos6"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "scaleY(-1)"
                    }
                })),
                yi = Object(i.z)("padding-left:4px;"),
                xi = Object(i.D)(B.p, {
                    target: "e1k6tlos7"
                })("padding:", (function(e) {
                    var t = e.theme,
                        n = e.isEdit,
                        r = e.expanded;
                    return !e.mobile && "modern" === t.name && n && r ? "8px 8px 0" : "8px"
                }), ";", (function(e) {
                    return e.theme.typography.basic
                }), ";overflow:hidden;"),
                wi = Object(i.z)("margin-top:6px;max-width:100%;"),
                ki = Object(i.z)("transform:scaleX(-1);"),
                Ci = Object(Ya.createSelector)([m.B], (function(e) {
                    return e.map((function(e) {
                        return Object(d.a)({
                            id: e.id
                        }, e.properties)
                    }))
                })),
                Si = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t) {
                            e.emit("cancel_upload", {
                                eventId: t
                            })
                        },
                        a = function(t, r) {
                            e.updateEvent(n, t, {
                                properties: {
                                    alternativeText: r
                                }
                            })
                        },
                        i = function() {
                            e.emit("send_file_events")
                        };
                    return function(e) {
                        var t = e.getApplicationState(),
                            n = t.isSendingFileEvents,
                            o = t.mobile,
                            c = t.protocol,
                            l = t.config,
                            s = t.license,
                            d = t.group,
                            m = t.requestedGroup,
                            p = Ci(Object(u.m)(e));
                        return {
                            mobile: o,
                            protocol: c,
                            persistKey: Object(fi.a)({
                                license: s,
                                group: d,
                                requestedGroup: m
                            }),
                            isSendingFileEvents: n,
                            uploadEntries: p,
                            cancelUpload: r,
                            setAlternativeText: a,
                            sendFiles: i,
                            localize: e.localize,
                            themeName: l.theme.name
                        }
                    }
                }))((function(e) {
                    var t = e.uploadEntries,
                        n = e.uploadEnabled,
                        a = e.cancelUpload,
                        i = e.localize,
                        o = e.mobile,
                        c = e.protocol,
                        l = e.persistKey,
                        s = e.sendFiles,
                        u = e.isSendingFileEvents,
                        p = e.setAlternativeText,
                        f = e.themeName,
                        h = Object(K.h)(),
                        g = Object(K.h)(),
                        v = r.useState(!0),
                        E = v[0],
                        j = v[1],
                        O = r.useState(!1),
                        y = O[0],
                        x = O[1],
                        w = r.useState(!1),
                        k = w[0],
                        C = w[1],
                        S = r.useState(null),
                        R = S[0],
                        D = S[1],
                        z = r.useState(""),
                        T = z[0],
                        _ = z[1],
                        I = r.useRef(null),
                        M = r.useRef(null),
                        F = function(e, t) {
                            var n = e.filter((function(e) {
                                    return e.failed
                                })),
                                r = e.filter((function(e) {
                                    return e.finished
                                })).length,
                                a = n.length,
                                i = e.length,
                                o = t("file_upload_status").replace("%finishedCount%", String(r)).replace("%totalCount%", String(i));
                            switch (!0) {
                                case a > 0:
                                    return {
                                        uploadStatus: "error",
                                        title: a > 1 ? t("files_failed_to_upload").replace("%files%", String(a)) : n[0].failReason
                                    };
                                case r === i:
                                    return {
                                        uploadStatus: "success",
                                        title: o
                                    };
                                default:
                                    return {
                                        uploadStatus: "pending",
                                        title: o
                                    }
                            }
                        }(t, i),
                        B = function() {
                            T && _("")
                        },
                        P = r.useCallback((function() {
                            return o || "modern" !== f ? 249 : 228
                        }), [f, o]),
                        A = r.useCallback((function(e) {
                            return (t.length > 2 || e ? P() : 201) + "px"
                        }), [t, P]),
                        N = r.useCallback((function(e) {
                            L(e) && (I.current.style.maxHeight = e)
                        }), []),
                        H = function(e) {
                            return M.current.style.height = e
                        },
                        L = function(e) {
                            return I.current.style.maxHeight !== e
                        },
                        q = r.useCallback((function() {
                            E ? (x(!0), N("0px")) : j(!0)
                        }), [E, N]),
                        V = function(e) {
                            if (E) {
                                var t = A(!!e);
                                !e && L(t) ? (D(null), C(!0), H(M.current.clientHeight + "px"), N(t)) : (N(P() + "px"), D(e))
                            } else D(e)
                        },
                        U = r.useCallback((function() {
                            y ? (j(!1), x(!1)) : k && (H("auto"), C(!1))
                        }), [y, k]);
                    return r.useEffect((function() {
                        t.length && E && !y && N(A(!!R))
                    }), [t.length, E, y, N, A, R]), r.useEffect((function() {
                        if ("lc3" === c && Object(Wa.b)("session")) {
                            var e = function() {
                                Object(m.E)(t) || function(e, t) {
                                    var n = e.filter((function(e) {
                                        return e.finished
                                    })).map((function(e) {
                                        return Object(d.a)({}, e, {
                                            url: e.serverUrl
                                        })
                                    }));
                                    Object(m.E)(n) || window.sessionStorage.setItem(t, JSON.stringify(n))
                                }(t, l)
                            };
                            return window.addEventListener("beforeunload", e),
                                function() {
                                    return window.removeEventListener("beforeunload", e)
                                }
                        }
                    }), [t, l, c]), r.createElement(xi, {
                        isEdit: R,
                        expanded: !y && E,
                        mobile: o
                    }, r.createElement(b.b, {
                        message: F.title,
                        clearOnUnmount: !0,
                        "aria-live": "error" === F.uploadStatus ? "assertive" : "polite"
                    }), r.createElement(hi, {
                        onClick: function(e) {
                            e.stopPropagation(), q()
                        }
                    }, R ? r.createElement(De.m, {
                        "aria-label": "go back to upload list",
                        onPress: function() {
                            V(null)
                        }
                    }, r.createElement(De.a, {
                        size: 24,
                        className: ki,
                        "aria-hidden": !0
                    })) : r.createElement(r.Fragment, null, "pending" === F.uploadStatus ? r.createElement(Ha.a, {
                        size: "medium",
                        "aria-hidden": !0
                    }) : "success" === F.uploadStatus ? r.createElement($a, {
                        success: !0
                    }, r.createElement(De.C, {
                        size: 24,
                        "aria-label": "Upload success"
                    })) : r.createElement($a, {
                        error: !0
                    }, r.createElement(De.c, {
                        size: 24,
                        "aria-label": "Upload error"
                    }))), r.createElement(bi, Object(d.a)({
                        id: g,
                        flexFill: !0,
                        ellipsis: !0
                    }, "error" === F.uploadStatus && {
                        failed: !0,
                        title: F.title
                    }), R ? i("add_alternative_text") : F.title), r.createElement(De.m, {
                        className: yi,
                        "aria-label": "Toggle upload list",
                        "aria-controls": h,
                        "aria-expanded": E,
                        onPress: q
                    }, r.createElement(De.n, {
                        size: 24,
                        "aria-hidden": !0
                    }, r.createElement(Oi, {
                        direction: E && !y ? "down" : "up",
                        size: 24
                    })))), E && !y && r.createElement(ji, null), r.createElement(gi, {
                        innerRef: I,
                        onTransitionEnd: U,
                        longAnimation: !E || y
                    }, E && r.createElement(vi, {
                        id: h,
                        edit: !!R,
                        innerRef: M
                    }, R ? r.createElement(pi, Object(d.a)({
                        titleId: g
                    }, t.find((function(e) {
                        return e.id === R
                    })), {
                        onAlternativeTextChanged: function(e) {
                            V(null), p(R, e)
                        },
                        mobile: o
                    })) : r.createElement(r.Fragment, null, r.createElement(Ei, {
                        mobile: o
                    }, t.map((function(e) {
                        return r.createElement(ii, Object(d.a)({}, e, {
                            key: e.id,
                            mobile: o,
                            failed: !!e.failed,
                            insistHover: T === e.id,
                            onHoverChange: B,
                            onCancel: "lc3" === c && !u || e.failed ? function() {
                                return function(e) {
                                    if (!o && t.length > 1) {
                                        var n = Object(m.o)((function(t) {
                                                return t.id === e
                                            }), t),
                                            r = n === t.length - 1;
                                        _(t[n + (r ? -1 : 1)].id)
                                    }
                                    a(e)
                                }(e.id)
                            } : null,
                            onAlternativeTextEdit: "lc3" !== c || u ? null : function() {
                                return V(e.id)
                            }
                        }))
                    }))), "lc3" === c && r.createElement(tt.a, {
                        onClick: s,
                        disabled: !n,
                        pending: u || "pending" === F.uploadStatus,
                        className: wi
                    }, i("send_files"))))))
                })),
                Ri = Object(i.D)("div", {
                    target: "ezpiwsd0"
                })("position:absolute;bottom:0;left:0;right:0;z-index:100;"),
                Di = Object(a.c)((function(e, t) {
                    var n = t.markAsSeen,
                        r = function() {
                            u.s(s.c, Date.now(), e).reverse().forEach((function(e) {
                                return n(e.id)
                            }))
                        };
                    return function(e) {
                        var t = !Object(m.E)(u.m(e)),
                            n = e.getApplicationState("mobile"),
                            a = u.i(e, s.c),
                            i = e.getUnseenCount(s.c),
                            o = a && a.properties ? a.properties.text : null;
                        return {
                            isFileUploadAllowed: u.Y(e),
                            isFileUploadPossible: u.H(e),
                            isUploadingFiles: t,
                            previewText: o,
                            unseenCount: i,
                            mobile: n,
                            markAllEventsAsSeen: r,
                            localize: e.localize
                        }
                    }
                }))((function(e) {
                    var t = e.isFileUploadAllowed,
                        n = e.isFileUploadPossible,
                        a = e.isUploadingFiles,
                        i = e.previewText,
                        c = e.unseenCount,
                        l = e.chatId,
                        s = e.mobile,
                        u = e.scrollToBottom,
                        d = e.markAllEventsAsSeen,
                        m = e.isOnBottomSource,
                        f = e.isScrollable,
                        h = e.localize,
                        g = i,
                        E = Object(o.t)(m),
                        j = c > 0 && !E && f,
                        O = r.useState(j),
                        y = O[0],
                        x = O[1];
                    return g || (g = h(c > 1 ? "new_messages" : "new_message")), !j && y && x(!1), r.useEffect((function() {
                        if (j) {
                            var e = setTimeout((function() {
                                return x(!0)
                            }), 300);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [j]), r.createElement(Ri, null, r.createElement(p.a, {
                        appear: !0,
                        component: null
                    }, a && r.createElement(v.b, {
                        key: "upload"
                    }, t && r.createElement(Si, {
                        chatId: l,
                        uploadEnabled: n
                    })), y && r.createElement(v.b, {
                        key: "unseen"
                    }, r.createElement(B.A, {
                        text: g,
                        stickToEdge: s,
                        unseenCount: c,
                        onClick: u,
                        onClose: d
                    }))), y && r.createElement(b.b, {
                        message: g,
                        clearOnUnmount: !0,
                        "aria-live": "assertive"
                    }))
                })),
                zi = Object(H.b)((function(e) {
                    var t = e.theme,
                        n = Object(E.a)(e, ["theme"]),
                        a = t.Maximized.css.background;
                    return r.createElement(Ha.a, Object(d.a)({}, n, {
                        adjustToColor: a,
                        ariaLabel: "Loading previous messages"
                    }))
                })),
                Ti = Object(i.D)("div", {
                    target: "e1fh44if0"
                })("padding:1em;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:0.9em;"),
                _i = function(e) {
                    return r.createElement(Ti, null, r.createElement(tt.a, e))
                },
                Ii = Object(a.c)((function(e) {
                    var t = function() {
                            return g.J(e)
                        },
                        n = function() {
                            return g.K(e, s.c)
                        };
                    return function(e) {
                        var r = "startChatAgain" === u.h(e, s.c),
                            a = e.getChat(s.c).properties,
                            i = a.starting,
                            o = a.startChatAgainPending,
                            c = e.localize(r ? "embedded_start_chat_again" : "embedded_greeting_accept");
                        return {
                            startAction: r ? n : t,
                            buttonLabel: c,
                            isPending: i || o
                        }
                    }
                }))((function(e) {
                    var t = e.isPending,
                        n = e.buttonLabel,
                        a = e.startAction,
                        i = e.onClick,
                        o = void 0 === i ? m.T : i;
                    return r.createElement(_i, {
                        disabled: t,
                        pending: t,
                        onClick: function(e) {
                            a(), o(e)
                        }
                    }, n)
                })),
                Mi = Object(i.D)("div", {
                    target: "e1onopp20"
                })("position:absolute;bottom:0;left:0;right:0;background:", (function(e) {
                    return e.theme.colors.caution
                }), ";z-index:2;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";text-align:center;font-size:0.9em;line-height:2.8em;transform:translateY(100%);"),
                Fi = Object(i.D)("div", {
                    target: "e1onopp21"
                })("flex-grow:1;height:100%;position:relative;min-height:0;z-index:0;-webkit-overflow-scrolling:touch;"),
                Bi = Object(i.z)("background:transparent;overscroll-behavior:contain;position:absolute;top:0;bottom:0;left:0;right:0;"),
                Pi = Object(i.z)("position:absolute;bottom:0;left:50%;z-index:3;transform:translate(-50%,50%);"),
                Ai = function(e) {
                    return e.events[0].id
                },
                Ni = function(e) {
                    return 0 !== e.length ? Ai(e[0]) : null
                },
                Hi = function(e) {
                    var t = Object(m.K)(e);
                    if (!t) return null;
                    var n = Object(m.K)(t.events);
                    return n ? n.id : null
                };
            var Li = Object(f.a)([function(e, t) {
                    return e.getTimeline(t)
                }, m.B], (function(e, t) {
                    var n = u.B(t);
                    return e.map((function(e, r) {
                        var a = 0 === r,
                            i = e.showDate && !a && n;
                        return Object(d.a)({}, e, {
                            isThreadBoundary: i,
                            authorData: t.getUser(e.author)
                        })
                    }))
                }))((function(e, t) {
                    return t
                })),
                qi = Object(a.c)((function(e, t) {
                    var n = t.id,
                        r = function() {
                            g.H(e)
                        },
                        a = e.localize,
                        i = function() {
                            return e.updateChat(n, {
                                properties: {
                                    loadingHistory: !0
                                }
                            })
                        },
                        o = function(t) {
                            return e.requestUpdateEvent(n, t, {
                                seen: !0
                            }).catch(m.T)
                        },
                        c = function(t, r) {
                            g.B(e, n, t, r)
                        },
                        l = function(t) {
                            var r = t.eventId,
                                a = t.buttonId;
                            e.sendEvent(n, {
                                type: "rich_message_postback",
                                properties: {
                                    eventId: r,
                                    postback: {
                                        id: a,
                                        toggled: !0
                                    }
                                }
                            })
                        },
                        s = function(t) {
                            return u.L(e, t)
                        },
                        d = function(t) {
                            return g.F(e, t)
                        },
                        p = function(t) {
                            return g.O(e, {
                                properties: t
                            })
                        },
                        f = function(t) {
                            var n = t.event,
                                r = t.button;
                            return g.o(e, n, r)
                        };
                    return function(e) {
                        var t = e.getChat(n),
                            m = t.active,
                            b = t.properties,
                            h = b.agentIsTyping,
                            g = b.loadingHistory,
                            v = b.queued,
                            E = b.ended,
                            j = u.c(n, e),
                            O = u.w(e, n),
                            y = e.getUnseenCount(n),
                            x = u.B(e) && u.S(e);
                        return {
                            agent: j,
                            active: m,
                            ended: E,
                            loadHistory: i,
                            isThreadStickerEnabled: x,
                            hasMoreHistory: O,
                            markAsSeen: o,
                            sendMessage: c,
                            queued: v,
                            sendPostback: l,
                            showPrechat: r,
                            localize: a,
                            updateSessionUser: p,
                            showMoment: d,
                            unseenCount: y,
                            timeline: Li(e, n, e.getState()),
                            activeQuickReply: u.p(n, e),
                            agentIsTyping: h && !!j,
                            shouldLoadHistory: O && !g,
                            isLoadingHistory: g,
                            showAvatar: u.g("agentAvatar", e).showWithMessage,
                            pageFocused: e.getApplicationState("pageFocused"),
                            inputMode: u.h(e, n),
                            reconnecting: u.hb(e),
                            displayOfflineInformation: u.fb(e),
                            lastSeenEvent: y > 0 && e.getLastSeenAgentEvent(n),
                            isGreeting: s,
                            handleRichGreetingButtonClicked: f,
                            isFillableFormDisplayed: u.I(e)
                        }
                    }
                }))((function(e) {
                    var t = e.displayOfflineInformation,
                        n = e.active,
                        a = e.ended,
                        c = e.activeQuickReply,
                        l = e.agent,
                        u = e.isThreadStickerEnabled,
                        f = e.hasMoreHistory,
                        h = e.pageFocused,
                        g = e.id,
                        E = e.inputMode,
                        j = e.loadHistory,
                        O = e.localize,
                        y = e.queued,
                        x = e.reconnecting,
                        w = e.shouldLoadHistory,
                        k = e.showAvatar,
                        C = e.showPrechat,
                        R = e.timeline,
                        D = e.agentIsTyping,
                        z = e.mobile,
                        T = e.unseenCount,
                        I = e.lastSeenEvent,
                        M = e.scrollingDeltaSource,
                        B = e.sendMessage,
                        P = e.showMoment,
                        A = e.handleRichGreetingButtonClicked,
                        H = e.isOnBottomSource,
                        L = e.isFillableFormDisplayed,
                        q = e.isLoadingHistory,
                        V = r.useRef(),
                        U = Object(o.u)(!1),
                        W = r.useRef(!1),
                        Y = r.useRef(),
                        G = r.useState(T),
                        Z = G[0],
                        K = G[1],
                        Q = r.useState(I)[0],
                        J = Object(o.d)((function() {
                            return function(e, t, n, r) {
                                return e.some((function(e) {
                                    return e.type === s.f
                                })) ? "draft" : t ? "newMessageDivider" : r || n || !e.some((function(e) {
                                    return e.events.some((function(e) {
                                        return "boosters" === e.type
                                    }))
                                })) ? "form" : "boosters"
                            }(R, Z, n, a)
                        })),
                        X = Object(o.e)(x),
                        $ = r.useCallback((function(e) {
                            e && w && j()
                        }), [w, j]),
                        ee = r.useCallback((function() {
                            clearTimeout(Y.current), Y.current = setTimeout((function() {
                                M.next({
                                    deltaX: 0,
                                    deltaY: 40
                                })
                            }), 4e3)
                        }), [M]),
                        te = r.useCallback((function(e) {
                            H.next(e), e && L ? ee() : clearTimeout(Y.current)
                        }), [H, L, ee]);
                    Object(o.o)((function() {
                        clearTimeout(Y.current)
                    }));
                    var ne = Object(o.r)(V, {
                            firstItemKey: Ni(R),
                            lastItemKey: Hi(R),
                            onIsScrolledToTopChanged: $,
                            onIsScrolledToBottomChanged: te,
                            onIsUserScrollingChanged: U.next,
                            onScrollDeltaChanged: M.next
                        }),
                        re = ne.scrollToTop,
                        ae = ne.scrollToBottom,
                        ie = ne.getIsOnBottom,
                        oe = ne.onWheel,
                        ce = ne.onTouchStart,
                        le = ne.getIsScrollable,
                        se = ne.setScrollTargetNode,
                        ue = r.useCallback((function(e) {
                            ie() && ae(e)
                        }), [ie, ae]);
                    r.useEffect((function() {
                        L ? ee() : clearTimeout(Y.current)
                    }), [L, ee]);
                    var de = r.useCallback((function() {
                            ue({
                                duration: 0
                            })
                        }), [ue]),
                        me = function(e) {
                            return void 0 === e && (e = m.T),
                                function() {
                                    ae({
                                        duration: 0
                                    }), e()
                                }
                        },
                        pe = Object(o.p)((function() {
                            ie() ? ae() : ae({
                                duration: 0
                            }), K(0)
                        })),
                        fe = function(e) {
                            var t = r.useRef(e);
                            return r.useEffect((function() {
                                t.current = e
                            })), r.useMemo((function() {
                                return {
                                    handleActionButtonClick: function(e) {
                                        var n = e.button,
                                            r = e.event,
                                            a = t.current,
                                            i = a.active,
                                            o = a.showMoment,
                                            c = a.sendPostback,
                                            l = a.sendMessage,
                                            s = a.handleSendMessage,
                                            u = a.isGreeting,
                                            d = a.handleRichGreetingButtonClicked;
                                        if (u(r)) return d({
                                            event: r,
                                            button: n
                                        }), void("message" === n.type && s());
                                        if (i) switch (n.type) {
                                            case "webview":
                                                return c({
                                                    eventId: r,
                                                    buttonId: n.postbackId
                                                }), void o({
                                                    url: n.value,
                                                    height: n.webviewHeight
                                                });
                                            case "message":
                                                return l(n.text, {
                                                    type: "action_button",
                                                    event: r,
                                                    button: n
                                                }), void s();
                                            default:
                                                return void c({
                                                    eventId: r,
                                                    buttonId: n.postbackId
                                                })
                                        }
                                    },
                                    markAsSeen: function(e) {
                                        return t.current.markAsSeen(e)
                                    }
                                }
                            }), [])
                        }(Object(d.a)({}, e, {
                            handleSendMessage: pe
                        })),
                        be = r.useCallback((function(e) {
                            W.current = e
                        }), []),
                        he = !!(D || y || c || t);
                    return r.useEffect((function() {
                        he && ue()
                    }), [he, ue]), r.useEffect((function() {
                        if (z) {
                            var e = function() {
                                W.current && ae({
                                    duration: 0
                                })
                            };
                            return window.addEventListener("resize", e),
                                function() {
                                    return window.removeEventListener("resize", e)
                                }
                        }
                    }), [z, ae]), Object(o.q)({
                        mainElementRef: V,
                        itemsCount: R.reduce((function(e, t) {
                            return e + t.events.length
                        }), 0),
                        tableEdgeReached: function(e) {
                            "previous" === e && re({
                                duration: 0
                            })
                        }
                    }), r.createElement(S, {
                        beginingOfTime: R.length > 0 ? R[0].timestamp : null,
                        rootRef: V
                    }, r.createElement(i.f, {
                        noShrink: !0
                    }, r.createElement(fn, {
                        chatId: g,
                        scrollingDeltaSource: M,
                        isOnBottomSource: H,
                        isLoadingHistory: q
                    }, u && r.createElement(_, {
                        className: Pi,
                        isUserScrollingSource: U
                    }), x && !X && r.createElement(r.Fragment, null, r.createElement(b.b, {
                        message: O("reconnecting"),
                        clearOnUnmount: !0,
                        "aria-live": "assertive"
                    }), r.createElement(Mi, null, O("reconnecting") + "\u2026")))), r.createElement(p.a, {
                        appear: !0,
                        component: null
                    }, r.createElement(v.d, null, r.createElement(Fi, null, r.createElement(Di, {
                        chatId: g,
                        isScrollable: le(),
                        isOnBottomSource: H,
                        scrollToBottom: ae,
                        markAsSeen: fe.markAsSeen
                    }), r.createElement(i.k, {
                        active: h,
                        className: Bi,
                        onWheel: oe,
                        onTouchStart: ce,
                        innerRef: V
                    }, f && r.createElement(i.q, null, r.createElement(zi, {
                        size: "medium",
                        style: {
                            margin: "auto"
                        }
                    })), R.map((function(e, t) {
                        return r.createElement(r.Fragment, {
                            key: Ai(e)
                        }, e.isThreadBoundary && r.createElement(F, {
                            timestamp: e.timestamp
                        }), Q && Z > 0 && e.events.some((function(e) {
                            return e.id === Q.id
                        })) && r.createElement(N, {
                            unseenCount: Z,
                            setScrollTargetNode: se
                        }), r.createElement(i.j, {
                            isOwn: e.own,
                            onlyFirstWithMeta: !0,
                            avatar: k && "carousel" !== e.type && e.authorData.avatar ? e.authorData.avatar : void 0
                        }, e.events.map((function(t, n) {
                            return r.createElement($r, {
                                chatId: g,
                                id: t.id,
                                key: t.id,
                                showMetaOnClick: 0 !== n,
                                radiusType: e.radiusType,
                                listItemHandlers: fe,
                                scrollTarget: J,
                                setScrollTargetNode: !Z && se,
                                showMoment: P
                            })
                        }))))
                    })), c && r.createElement("div", {
                        role: "row"
                    }, r.createElement("div", {
                        role: "gridcell"
                    }, r.createElement(ea.b, {
                        "aria-labelledby": c.id,
                        onSelect: function(e) {
                            var t = c.properties.quickReplies[e];
                            c.properties.invitation ? A({
                                event: c.id,
                                button: t
                            }) : B(t.text, {
                                type: "quick_reply",
                                event: c.id,
                                button: t
                            }), pe()
                        },
                        replies: c.properties.quickReplies
                    }))), D && r.createElement(r.Fragment, null, r.createElement(b.b, {
                        clearOnUnmount: !0,
                        "aria-live": "polite",
                        message: O("operator_is_typing", {
                            operator: l.name
                        }).replace("...", "")
                    }), r.createElement(p.a, {
                        appear: !0,
                        component: null
                    }, r.createElement(v.b, {
                        exit: !1
                    }, r.createElement(Ua.b, {
                        avatar: k ? l.avatar : null
                    })))))))), "requestPrechat" === E ? r.createElement(_i, {
                        onClick: me(C)
                    }, O("embedded_greeting_accept")) : "startChat" === E || "startChatAgain" === E ? r.createElement(Ii, {
                        onClick: me()
                    }) : "text" === E ? r.createElement(ja, {
                        chatId: g,
                        onSendMessage: pe,
                        onHeightChange: de,
                        onFocusChange: be
                    }) : null, r.createElement(Va, {
                        chatId: g,
                        onSendMessage: pe
                    }))
                })),
                Vi = Object(i.D)("div", {
                    displayName: "View",
                    section: !0,
                    target: "e1u2umur0"
                })("flex-grow:1;display:flex;height:100%;min-height:0;padding-bottom:1em;"),
                Ui = Object(i.D)("div", {
                    displayType: "ViewContent",
                    target: "e1u2umur1"
                })("overflow-y:auto;height:100%;flex-grow:1;padding:", (function(e) {
                    return e.full ? "0 !important" : "1em 1em 0 1em"
                }), ";"),
                Wi = function(e) {
                    return Object(i.z)("&-enter,&-appear{opacity:0;}&-enter&-enter-active,&-appear&-appear-active{opacity:1;transition:opacity ", 200, "ms ", e.transitions.easings.sharp, ";}&-exit{opacity:1;}&-exit&-exit-active{opacity:0;transition:opacity ", 200, "ms ", e.transitions.easings.sharp, ";}")
                },
                Yi = Object(i.z)("width:100%;"),
                Gi = Object(H.b)((function(e) {
                    var t = e.children,
                        n = e.theme,
                        a = e.full,
                        i = void 0 !== a && a;
                    return r.createElement(Vi, null, r.createElement(p.a, {
                        className: Yi
                    }, r.createElement(j.a, {
                        appear: !0,
                        classNames: Wi(n),
                        timeout: 200
                    }, r.createElement(Ui, {
                        full: i
                    }, t))))
                })),
                Zi = function() {
                    return r.createElement(a.a, null, (function(e) {
                        return r.createElement(Gi, null, r.createElement(i.c, null, r.createElement(i.m, null, e("lost_connection"))))
                    }))
                },
                Ki = Object(i.C)("50%{opacity:0.0;}"),
                Qi = Object(i.z)("background:currentColor;opacity:0.3;animation:", Ki, " 1.5s linear 0s infinite;"),
                Ji = Object(i.z)(Qi, ";"),
                Xi = Object(i.D)("div", {
                    target: "e1uut4cd0"
                })("width:", (function(e) {
                    return e.width || "10em"
                }), ";height:1em;margin:0.3em;border-radius:", (function(e) {
                    return e.theme.borderRadius.sm
                }), ";", Qi, ";"),
                $i = Object(i.D)("div", {
                    target: "e1uut4cd1"
                })("width:100%;"),
                eo = Object(i.D)("div", {
                    target: "e1uut4cd2"
                })("padding:1em;"),
                to = Object(i.D)("div", {
                    target: "e1uut4cd3"
                })("width:100%;margin-top:0.5em;"),
                no = Object(i.D)("div", {
                    displayName: "Message",
                    section: !0,
                    target: "e1uut4cd4"
                })(),
                ro = function() {
                    return r.createElement(Gi, {
                        full: !0
                    }, r.createElement($i, null, r.createElement(i.a, null, r.createElement(i.b, {
                        className: Ji,
                        letter: " "
                    })), r.createElement(eo, null, r.createElement(to, null, r.createElement(i.q, null, r.createElement(no, null, r.createElement(i.c, null, r.createElement(i.m, null, r.createElement(Xi, null), r.createElement(Xi, {
                        width: "7em"
                    })))))), r.createElement(to, null, r.createElement(i.q, {
                        reverse: !0
                    }, r.createElement(no, null, r.createElement(i.c, null, r.createElement(i.m, null, r.createElement(Xi, null)))))), r.createElement(to, null, r.createElement(i.q, null, r.createElement(no, null, r.createElement(i.c, null, r.createElement(i.m, null, r.createElement(Xi, null)))))))))
                },
                ao = Object(i.D)("div", {
                    target: "e5cxvfk0"
                })("display:flex;justify-content:center;font-size:0.9em;"),
                io = Object(i.D)("p", {
                    target: "errpamd0"
                })("text-align:center;"),
                oo = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            open: !1,
                            submitting: !1
                        }, t.showModal = function() {
                            t.setState({
                                open: !0
                            })
                        }, t.closeModal = function() {
                            t.setState({
                                open: !1
                            })
                        }, t.handleCloseClick = function() {
                            t.setState({
                                submitting: !0
                            }), t.props.closeChat().then((function() {
                                t.setState({
                                    submitting: !1
                                }), t.closeModal()
                            })).catch((function() {
                                t.setState({
                                    submitting: !1
                                })
                            }))
                        }, t
                    }
                    return Object(Y.a)(t, e), t.prototype.render = function() {
                        var e = this.props.localize,
                            t = this.state.submitting;
                        return r.createElement(r.Fragment, null, r.createElement(Bt, {
                            description: e("close_chat")
                        }, r.createElement(B.j, {
                            onPress: this.showModal,
                            "aria-label": e("close_chat")
                        }, r.createElement(B.e, {
                            "aria-hidden": !0
                        }))), r.createElement(de, {
                            shown: this.state.open,
                            onClose: this.closeModal,
                            "aria-labelledby": "close_chat_confirm_label"
                        }, r.createElement(Rt, {
                            forceLightTheme: !0,
                            "aria-hidden": !0
                        }, r.createElement(B.h, null)), r.createElement(io, {
                            id: "close_chat_confirm_label"
                        }, e("leave_chat_confirm")), r.createElement(ao, null, r.createElement(nt, {
                            destructive: !0,
                            label: e("close_chat"),
                            submitting: t,
                            onClick: this.handleCloseClick
                        }))))
                    }, t
                }(r.Component),
                co = r.createContext({}),
                lo = Object(i.D)("ul", {
                    target: "e1ixnb8m0"
                })("list-style-type:none;position:absolute;z-index:100;background:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.md
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";margin:0;margin-top:2.2em;margin-left:0.8em;padding:0;min-width:180px;overflow:hidden;&:focus{outline:none;}& >:last-child{border-bottom:0;}"),
                so = function(e) {
                    var t = e.highlightedIndex,
                        n = e.items,
                        r = t.current;
                    return !(null === r || r < 0) && "true" !== n.current[r].ref.current.getAttribute("aria-disabled")
                };
            var uo = function(e) {
                    var t = e.children,
                        n = e.onClose,
                        a = e.menuButtonRef,
                        i = e.onSelect,
                        c = Object(E.a)(e, ["children", "onClose", "menuButtonRef", "onSelect"]),
                        l = r.useRef(null),
                        s = Object(ia.a)({
                            onSelect: i
                        }),
                        u = s.useHighlightedItemId(),
                        m = Object(o.h)();
                    return Object(o.n)((function() {
                        "click" === m() && s.clearHighlightedItem(), l.current.focus()
                    })), Object(o.m)(l, (function(e) {
                        a.current.contains(e.target) || n()
                    })), r.createElement($, null, r.createElement(co.Provider, {
                        value: s
                    }, r.createElement(lo, Object(d.a)({
                        onMouseOut: s.clearHighlightedItem,
                        tabIndex: -1,
                        role: "menu",
                        innerRef: l,
                        "aria-activedescendant": u,
                        onKeyDown: function(e) {
                            switch (e.preventDefault(), e.key) {
                                case "ArrowUp":
                                    return void s.moveHighlightedItem(-1);
                                case "ArrowDown":
                                    return void s.moveHighlightedItem(1);
                                case "Home":
                                    return void s.setHighlightedItem(0);
                                case "End":
                                    return void s.setHighlightedItem(s.items.current.length - 1);
                                case " ":
                                    if (!so(s)) return;
                                    return void s.selectHighlightedItem();
                                case "Enter":
                                    if (!so(s)) return;
                                    return s.selectHighlightedItem(), n(), void a.current.focus();
                                case "Tab":
                                    return n(), e.shiftKey ? void a.current.focus() : void Object(Sa.d)(a.current).focus();
                                case "Escape":
                                    return n(), void a.current.focus();
                                default:
                                    return void s.highlightItemByString(e)
                            }
                        }
                    }, c), t)))
                },
                mo = Object(i.D)("h2", {
                    target: "emwx8nd0"
                })("text-align:center;font-size:16px;font-weight:normal;"),
                po = function(e) {
                    var t = e.email,
                        n = e.localize,
                        a = e.sent,
                        c = e.open,
                        l = e.onClose,
                        s = e.onSubmit,
                        u = e.mobile,
                        d = Object(o.i)("email-transcript"),
                        p = r.useState((function() {
                            return {
                                email: t
                            }
                        })),
                        f = p[0],
                        b = p[1];
                    return r.useEffect((function() {
                        if (c) {
                            var e = d.get();
                            b(e || {
                                email: t
                            })
                        }
                    }), [d, t, c]), r.createElement(de, {
                        shown: c,
                        onClose: l,
                        "aria-labelledby": a ? "email-transcript-sent-label" : "email-transcript-not-sent-label"
                    }, c && (a ? r.createElement(r.Fragment, null, r.createElement(Rt, {
                        forceLightTheme: !0,
                        "aria-hidden": !0
                    }, r.createElement(B.m, null)), r.createElement(mo, {
                        id: "email-transcript-sent-label",
                        textWrap: !0
                    }, n("chat_transcript_sent").replace(/%s/g, t || "")), r.createElement(ao, null, r.createElement(tt.a, {
                        capitalize: !0,
                        onClick: l
                    }, n("hide")))) : r.createElement(r.Fragment, null, r.createElement(Rt, {
                        forceLightTheme: !0,
                        "aria-hidden": !0
                    }, r.createElement(B.m, null)), r.createElement(mo, {
                        id: "email-transcript-not-sent-label"
                    }, n("send_transcript_to_email")), r.createElement(ht, {
                        id: "email_transcript",
                        initialValues: f,
                        mobile: u,
                        onSubmit: function(e) {
                            return s(e.email).then((function() {
                                return d.destroy()
                            })).catch((function() {
                                var e;
                                return (e = {})[Zn.a] = n("lost_connection"), e
                            }))
                        },
                        submitLabel: n("send"),
                        validate: function(e) {
                            return e.email ? {} : {
                                email: n("survey_fill_in_required_fields")
                            }
                        }
                    }, r.createElement(i.q, null, r.createElement(me.b, {
                        onChange: function(e) {
                            var t = e.values;
                            e.dirty && d.set(t)
                        }
                    }), r.createElement(cr, {
                        ariaLabel: "Enter your email address",
                        name: "email",
                        required: !0,
                        serverName: "",
                        label: "",
                        type: "email",
                        localize: m.B
                    }))))))
                },
                fo = Object(i.D)("li", {
                    target: "ezmrzej0"
                })("background:transparent;font-family:inherit;font-size:14px;border:0;display:flex;align-items:center;padding:1.3em;width:100%;cursor:pointer;", (function(e) {
                    var t = e.theme,
                        n = e.highlighted;
                    return Object(d.a)({
                        borderBottom: "1px solid " + t.colors.divider
                    }, n && {
                        color: "" + t.colors.ctaText,
                        backgroundColor: "" + t.colors.cta
                    })
                }), " &[aria-disabled='true']{pointer-events:none;", (function(e) {
                    var t = e.theme,
                        n = e.highlighted;
                    return Object(d.a)({
                        color: "" + t.colors.grayscale[400]
                    }, n && {
                        color: "" + t.colors.grayscale[600],
                        backgroundColor: "" + t.colors.grayscale[100]
                    })
                }), "}"),
                bo = function(e) {
                    var t = e.disabled,
                        n = e.text,
                        a = e.value,
                        i = Object(E.a)(e, ["disabled", "text", "value"]),
                        o = r.useRef(null),
                        c = r.useContext(co),
                        l = c.clearHighlightedItem,
                        s = (0, c.useItem)({
                            ref: o,
                            text: n,
                            value: a
                        }),
                        u = s.id,
                        m = s.highlight,
                        p = s.select,
                        f = (0, s.useHighlighted)();
                    return r.createElement(fo, Object(d.a)({
                        role: "menuitem",
                        id: u,
                        innerRef: o,
                        highlighted: f,
                        onMouseOver: m,
                        onMouseOut: l,
                        onClick: function(e) {
                            1 !== e.nativeEvent.which || t || p()
                        }
                    }, t && {
                        "aria-disabled": !0
                    }, i))
                },
                ho = bo,
                go = function(e) {
                    var t = e.checked,
                        n = Object(E.a)(e, ["checked"]);
                    return r.createElement(bo, Object(d.a)({
                        role: "menuitemcheckbox",
                        "aria-checked": t
                    }, n))
                },
                vo = Object(i.z)("margin-right:8px;"),
                Eo = Object(i.z)("&-enter{opacity:0;[role='menuitem'],[role='menuitemcheckbox']{transform:translate3d(0,20%,0);}}&-enter-active{opacity:1;transition:opacity 100ms ease-in-out;[role='menuitem'],[role='menuitemcheckbox']{transform:translate3d(0,0%,0);transition:transform 200ms;}}&-exit{opacity:1;[role='menuitem'],[role='menuitemcheckbox']{transform:translate3d(0,0%,0);}}&-exit-active{opacity:0;transition:opacity 200ms ease-in-out;[role='menuitem'],[role='menuitemcheckbox']{transform:translate3d(0,20%,0);transition:transform 200ms;}}"),
                jo = Object(a.c)((function(e) {
                    var t = s.c,
                        n = function(n) {
                            return e.requestUpdateChat(t, {
                                properties: {
                                    transcriptSentTo: n
                                }
                            })
                        },
                        r = function() {
                            e.setApplicationState({
                                muted: !e.getApplicationState("muted")
                            })
                        };
                    return function(e) {
                        var a = e.getChat(t),
                            i = a.active,
                            o = a.properties,
                            c = o.transcriptSentTo;
                        return {
                            localize: e.localize,
                            muted: e.getApplicationState("muted"),
                            sendTranscript: n,
                            transcriptSentTo: c,
                            enableTranscript: i || o.ended,
                            showTranscript: Object(u.g)("emailTranscript", e).enabled,
                            toggleSounds: r,
                            customerEmail: e.getSessionUser().email
                        }
                    }
                }))((function(e) {
                    var t = e.customerEmail,
                        n = e.enableTranscript,
                        a = e.localize,
                        c = e.muted,
                        l = e.sendTranscript,
                        s = e.showTranscript,
                        u = e.toggleSounds,
                        m = e.transcriptSentTo,
                        f = r.useState(!1),
                        b = f[0],
                        h = f[1],
                        g = r.useState(!1),
                        v = g[0],
                        E = g[1];
                    Object(o.h)();
                    var O = r.useRef(null),
                        y = !!m,
                        x = r.useCallback((function(e) {
                            switch (e) {
                                case "mute":
                                    return void u();
                                case "transcript":
                                    return h(!1), void E(!0)
                            }
                        }), [u]);
                    return r.createElement(r.Fragment, null, r.createElement(Bt, {
                        isDisabled: b,
                        description: a("theme_options")
                    }, r.createElement(B.j, Object(d.a)({
                        className: Object(i.z)("padding:0;"),
                        innerRef: O,
                        onPress: function() {
                            return h((function(e) {
                                return !e
                            }))
                        },
                        "aria-label": b ? "Close menu" : "Open menu",
                        "aria-haspopup": !0
                    }, b && {
                        "aria-expanded": b
                    }), r.createElement(B.f, {
                        "aria-hidden": !0
                    }))), r.createElement(p.a, {
                        component: null
                    }, b && r.createElement(j.a, {
                        classNames: Eo,
                        timeout: 200
                    }, r.createElement(uo, {
                        "aria-label": "Menu",
                        menuButtonRef: O,
                        onClose: function() {
                            return h(!1)
                        },
                        onSelect: x
                    }, s && r.createElement(ho, {
                        disabled: !n,
                        text: a("send_transcript"),
                        value: "transcript"
                    }, r.createElement(B.m, {
                        className: vo,
                        "aria-hidden": !0
                    }), a("send_transcript")), r.createElement(go, {
                        checked: c,
                        text: a(c ? "unmute" : "mute"),
                        value: "mute"
                    }, c ? r.createElement(B.y, {
                        className: vo,
                        "aria-hidden": !0
                    }) : r.createElement(B.o, {
                        className: vo,
                        "aria-hidden": !0
                    }), a(c ? "unmute" : "mute"))))), r.createElement(po, {
                        email: y ? m : t,
                        localize: a,
                        onClose: function() {
                            return E(!1)
                        },
                        onSubmit: l,
                        sent: y,
                        open: v
                    }))
                })),
                Oo = function(e) {
                    return "modern" === e ? 28 : 32
                },
                yo = window.matchMedia("(max-height: 330px)"),
                xo = Object(i.z)("overflow:hidden;flex-grow:0;text-align:left;padding:0 0.8em;font-weight:700;display:flex;align-items:center;transition:0.3s background-color;"),
                wo = Object(i.D)("div", {
                    displayName: "IconPlaceholder",
                    target: "e7bf83j0"
                })("width:25px;flex-shrink:0;"),
                ko = function(e) {
                    return Object(i.z)("height:30px;line-height:30px;font-size:inherit;font-weight:700;margin-top:0;margin-bottom:0;transition:opacity 100ms ", e.transitions.easings.smooth, ";")
                },
                Co = Object(i.D)("h1", {
                    target: "e7bf83j1"
                })((function(e) {
                    var t = e.theme;
                    return ko(t)
                })),
                So = Object(i.D)("button", {
                    target: "e7bf83j2"
                })((function(e) {
                    var t = e.theme;
                    return ko(t)
                }), " width:100%;height:", (function(e) {
                    return "modern" === e.theme.name ? "24px" : "32px"
                }), ";display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;color:inherit;background:none;border:none;cursor:pointer;appearance:none;"),
                Ro = Object(i.D)("span", {
                    target: "e7bf83j3"
                })("min-width:0;"),
                Do = Object(i.D)("div", {
                    target: "e7bf83j4"
                })(),
                zo = function(e) {
                    return Object(m.eb)(e - 1).map((function(e) {
                        return r.createElement(wo, {
                            key: "placeholder_" + e
                        })
                    }))
                },
                To = Object(a.c)((function(e) {
                    var t = function(e, t) {
                            return e && e.name && t ? e.name : ""
                        },
                        n = function() {
                            return e.requestUpdateChat(s.c, {
                                active: !1
                            })
                        },
                        r = e.getApplicationState("embedded");
                    return function(e) {
                        var a = Object(u.c)(s.c, e),
                            i = !(Object(u.gb)(e) || Object(u.fb)(e)),
                            o = Object(u.cb)(e);
                        return {
                            embedded: r,
                            closeChat: n,
                            title: e.localize("welcome_title"),
                            alternateTitle: t(a, o),
                            agent: a,
                            showAlternateTitle: i,
                            showCloseButton: e.getChat(s.c).active,
                            localize: e.localize,
                            showAgentBar: o,
                            showAvatar: Object(u.g)("agentAvatar", e).enabled
                        }
                    }
                }))(Object(H.b)((function(e) {
                    var t = e.showCloseButton,
                        n = e.closeChat,
                        a = e.localize,
                        c = e.showMinimizedButton,
                        l = e.title,
                        s = e.alternateTitle,
                        u = e.onMinimize,
                        m = e.showAgentBar,
                        p = e.showAlternateTitle,
                        f = e.scrollingDeltaSource,
                        b = e.agent,
                        h = e.showAvatar,
                        g = e.isOnBottomSource,
                        v = e.theme,
                        E = r.useRef(),
                        j = r.useRef(),
                        O = r.useRef(),
                        y = r.useRef(yo.matches),
                        x = r.useState(!0),
                        w = x[0],
                        k = x[1],
                        C = Object(ee.f)(),
                        S = v.name,
                        R = r.useCallback((function() {
                            E.current && (E.current.style.opacity = 1), j.current && (j.current.style.opacity = 0), O.current && (O.current.style.transform = "translateY(" + Oo(S) + "px)"), k(!0)
                        }), [S]),
                        D = r.useCallback((function() {
                            if (p && (f.next({
                                    deltaX: 0,
                                    deltaY: -50
                                }), C.focusVisible)) {
                                var e = Object(Sa.b)(document.getElementById("top-bar"))[0];
                                e && e.focus()
                            }
                        }), [C.focusVisible, f, p]);
                    Object(o.n)(R), Object(o.a)(f, (function(e) {
                        var t = e.y;
                        s && !y.current && (E.current && (E.current.style.opacity = 1 - 2 * t), j.current && (j.current.style.opacity = t), O.current && (O.current.style.transform = 0 === t ? "translateY(" + Oo(S) + "px)" : "translateY(" + (Oo(S) - 60 * t + ("modern" === S ? 4 : 0)) + "px)"), 1 === t && w ? k(!1) : 0 !== t || w || k(!0))
                    })), r.useEffect((function() {
                        m && s || R()
                    }), [m, R, s]), r.useEffect((function() {
                        var e = function(e) {
                            var t = e.matches;
                            return y.current = t
                        };
                        return yo.addListener(e),
                            function() {
                                return yo.removeListener(e)
                            }
                    }), []), r.useEffect((function() {
                        if (g) return g.subscribe((function(e) {
                            e && R()
                        }))
                    }), [g, R]);
                    var z = function(e, t) {
                            var n = e.filter(Boolean),
                                r = t.filter(Boolean);
                            return n.length === r.length ? {
                                leftIcons: n,
                                rightIcons: r
                            } : n.length > r.length ? {
                                leftIcons: n,
                                rightIcons: zo(n.length - r.length).concat(r)
                            } : {
                                leftIcons: n.concat(zo(r.length - n.length)),
                                rightIcons: r
                            }
                        }([r.createElement(jo, {
                            key: "menu"
                        })], [c && r.createElement(Bt, {
                            key: "minimize",
                            description: a("embedded_minimize_window")
                        }, r.createElement(B.j, {
                            onPress: u,
                            "aria-label": a("embedded_minimize_window")
                        }, r.createElement(B.n, {
                            "aria-hidden": !0
                        }))), t && r.createElement(oo, {
                            closeChat: n,
                            key: "close",
                            localize: a
                        })]),
                        T = z.leftIcons,
                        _ = z.rightIcons,
                        I = "modern" === S ? "small" : "normal";
                    return r.createElement(i.x, {
                        className: xo,
                        leftIcons: T,
                        noShrink: !0,
                        rightIcons: _,
                        title: r.createElement(Do, {
                            innerRef: O
                        }, r.createElement(Co, {
                            ellipsis: !0,
                            innerRef: E,
                            style: {
                                marginBottom: 30
                            },
                            "aria-expanded": w
                        }, r.createElement(yt.a, null, l)), r.createElement(So, Object(d.a)({
                            innerRef: j,
                            disabled: w,
                            onClick: D,
                            "aria-expanded": w,
                            "aria-controls": "top-bar",
                            "aria-label": s || l
                        }, C), p && r.createElement(r.Fragment, null, b && m && h && r.createElement(Ut, {
                            avatarUrl: b.avatar,
                            size: I,
                            availability: "online"
                        }), b && !h && r.createElement(Ut, {
                            size: I,
                            availability: "online"
                        }), r.createElement(Ro, {
                            ellipsis: !0
                        }, s))))
                    })
                }))),
                _o = ["M181.18 103.421H238.128V89.1388H198.435V17.1462H181.18V103.421Z", "M246.429 103.421H263.195V39.3312H246.429V103.421ZM245.07 22.5837C245.178 25.0948 246.252 27.4671 248.067 29.2056C249.883 30.9442 252.299 31.9147 254.812 31.9147C257.326 31.9147 259.742 30.9442 261.557 29.2056C263.372 27.4671 264.446 25.0948 264.554 22.5837C264.611 21.269 264.401 19.9564 263.937 18.725C263.473 17.4936 262.765 16.3689 261.854 15.4185C260.944 14.4681 259.851 13.7119 258.641 13.1952C257.431 12.6785 256.128 12.4122 254.812 12.4122C253.496 12.4122 252.194 12.6785 250.984 13.1952C249.773 13.7119 248.68 14.4681 247.77 15.4185C246.86 16.3689 246.151 17.4936 245.687 18.725C245.223 19.9564 245.013 21.269 245.07 22.5837Z", "M328.862 39.3312H312.097L298.303 86.2931L284.492 39.3312H267.727L289.477 103.421H306.967L328.862 39.3312Z", "M358.805 104.907C372.979 104.907 384.452 96.4069 386.663 84.6981H372C370.387 89.1387 365.964 92.8363 358.805 92.8363C349.072 92.8363 345.247 86.2931 345.247 78.7712V77.1763H387.152V65.9569C387.152 50.5506 377.546 37.8631 358.569 37.8631C339.592 37.8631 328.989 50.1881 328.989 67.57V76.3062C328.953 94.25 340.68 104.907 358.805 104.907ZM345.211 64.7244C345.211 56.0969 348.836 49.6988 358.533 49.6988C367.596 49.6988 371.71 55.7344 371.71 63.7456V65.3406H345.211V64.7244Z", "M431.667 105.125C453.417 105.125 466.92 90.335 467.79 72.6994H451.768C450.644 82.4325 444.518 90.9512 431.667 90.9512C417.258 90.9512 411.095 81.0912 411.095 67.28V53.2694C411.095 39.4581 417.258 29.5981 431.667 29.5981C444.482 29.5981 450.644 38.0987 451.768 47.85H467.79C466.92 30.2144 453.49 15.4244 431.667 15.4244C405.658 15.4244 393.949 32.0631 393.949 54.1212V66.4462C393.949 88.5225 405.658 105.125 431.667 105.125Z", "M476.889 103.421H493.655V65.4675C493.655 56.84 498.458 52.3994 505.98 52.3994C514.118 52.3994 517.689 57.71 517.689 65.0869V103.421H534.454V62.3862C534.454 47.2337 525.7 37.8631 511.78 37.8631C503.515 37.8631 496.99 41.4881 493.655 46.9256V13.4487H476.889V103.421Z", "M566.445 104.907C573.84 104.907 581.978 101.826 584.932 97.5125V103.421H601.082V62.5131C601.082 47.5963 590.116 37.8631 574.094 37.8631C560.282 37.8631 550.295 44.515 546.598 56.9669H562.131C563.853 53.505 567.424 50.9313 573.224 50.9313C580.129 50.9313 584.316 55.3538 584.316 61.2806V70.035C579.662 66.4073 573.903 64.4878 568.004 64.5975C552.597 64.5975 542.121 71.0138 542.121 84.9338C542.157 97.3856 552.017 104.907 566.445 104.907ZM570.759 93.815C563.726 93.815 558.434 90.3712 558.434 84.4444C558.434 78.5175 563.364 75.3819 571.248 75.3819C578.77 75.3819 584.316 78.7169 584.316 84.4444C584.316 90.1719 578.117 93.815 570.759 93.815Z", "M632.492 103.421H644.074V89.8637H637.205C632.764 89.8637 631.169 88.1419 631.169 83.955V52.8887H644.853V39.3312H631.169V21.8406H614.367V39.3312H605.305V52.8887H614.367V85.1875C614.367 96.5337 620.077 103.421 632.492 103.421Z"],
                Io = Object(i.D)("svg", {
                    target: "e1lie4030"
                })("height:13px;max-width:58px;margin-left:4px;position:relative;top:", (function(e) {
                    return "smooth" === e.theme.name ? "2px" : "1px"
                }), ";"),
                Mo = Object(H.b)((function(e) {
                    var t = e.theme,
                        n = Object(E.a)(e, ["theme"]),
                        a = t.colors.brand,
                        i = a.orange,
                        o = a.black;
                    return r.createElement(Io, Object(d.a)({
                        "aria-labelledby": "livechat-logo-label",
                        viewBox: "0 0 645 145",
                        fill: "none"
                    }, n), r.createElement("title", {
                        id: "livechat-logo-label"
                    }, "livechat"), r.createElement("path", {
                        d: "M144.096 90.1356C143.359 98.7467 139.392 106.76 132.991 112.567C126.589 118.373 118.228 121.542 109.586 121.438H90.5545L54.3045 145V121.438L90.5545 97.875H109.622C112.32 97.9725 114.954 97.0425 116.993 95.2729C119.032 93.5033 120.323 91.026 120.606 88.3413C121.714 70.2301 121.623 52.0654 120.334 33.9663C120.116 31.552 119.036 29.2968 117.292 27.6129C115.548 25.929 113.257 24.9288 110.836 24.795C98.4752 24.0338 85.4614 23.5625 72.4295 23.5625C59.3977 23.5625 46.3839 23.9975 34.0227 24.8675C31.6022 25.0013 29.3107 26.0015 27.5669 27.6854C25.8231 29.3693 24.7434 31.6245 24.5252 34.0387C23.2361 52.1379 23.1452 70.3026 24.2533 88.4137C24.5532 91.0854 25.8518 93.545 27.8887 95.2996C29.9256 97.0542 32.5504 97.9741 35.237 97.875H54.3045V121.438H35.2733C26.641 121.523 18.2952 118.343 11.9087 112.535C5.52217 106.727 1.56695 98.7192 0.835792 90.1175C-0.362946 70.7996 -0.272119 51.4233 1.10767 32.1175C1.79276 24.1116 5.31632 16.6141 11.0427 10.9774C16.7691 5.34078 24.3213 1.93607 32.337 1.3775C45.242 0.453125 58.8358 0 72.4295 0C86.0233 0 99.617 0.453125 112.522 1.3775C120.562 1.92172 128.141 5.32939 133.884 10.9825C139.626 16.6355 143.153 24.1596 143.824 32.19C145.201 51.4777 145.292 70.8358 144.096 90.1356Z",
                        fill: i
                    }), _o.map((function(e, t) {
                        return r.createElement("path", {
                            key: t,
                            d: e,
                            fill: o
                        })
                    })))
                })),
                Fo = Object(i.D)("div", {
                    displayName: "Footer",
                    section: !0,
                    target: "e13tedl70"
                })(),
                Bo = Object(i.D)("a", {
                    displayName: "FooterLink",
                    target: "e13tedl71"
                })("display:flex;direction:ltr;align-items:center;justify-content:center;color:", (function(e) {
                    return e.theme.colors.grayscale[600]
                }), ";"),
                Po = Object(a.c)((function(e) {
                    var t = e.getApplicationState(),
                        n = t.license,
                        r = t.mobile,
                        a = document.referrer ? Object(L.l)(Object(L.e)(document.referrer) || "") : "lc" + n,
                        i = u.P(e);
                    return {
                        url: "https://www.livechat.com/powered-by-livechat/?" + Object(L.a)(Object(d.a)({
                            partner: a,
                            utm_campaign: a,
                            utm_source: "chat_window",
                            utm_medium: "referral"
                        }, i && {
                            utm_term: "nonprofit"
                        })),
                        hidden: u.g("hideTrademark", e).enabled || r
                    }
                }), {
                    shouldHandleStateChanges: !1
                })((function(e) {
                    var t = e.url;
                    return e.hidden ? null : r.createElement(Fo, null, r.createElement(Bo, {
                        href: t,
                        rel: "noreferrer",
                        target: "_blank"
                    }, r.createElement("span", null, "Powered by "), r.createElement(Mo, null)))
                })),
                Ao = Object(i.z)("z-index:101;position:relative;"),
                No = Object(i.z)("z-index:101;border-radius:inherit;");

            function Ho() {
                return r.useEffect((function() {
                    return Object(c.a)("#overlay_portal_container")
                }), []), r.createElement("div", {
                    id: "overlay_portal_container",
                    className: No
                })
            }
            t.default = Object(a.c)((function(e) {
                return {
                    destroyed: e.getApplicationState().destroyed,
                    showLoader: Object(u.db)(e)
                }
            }))((function(e) {
                var t = e.destroyed,
                    n = e.showLoader,
                    a = e.onMinimizeButtonPress,
                    i = e.showMinimizedButton,
                    c = Object(o.u)(!0),
                    u = Object(o.u)({
                        x: 0,
                        y: 0
                    });
                return t ? r.createElement(Zi, null) : n ? r.createElement(ro, null) : r.createElement(r.Fragment, null, r.createElement(Ho, null), r.createElement("div", {
                    id: "tooltip_portal_container",
                    className: Ao
                }), r.createElement(l.a, {
                    autoFocus: Object(pt.b)()
                }, r.createElement(To, {
                    isOnBottomSource: c,
                    onMinimize: a,
                    showMinimizedButton: i,
                    scrollingDeltaSource: u
                }), r.createElement(qi, {
                    id: s.c,
                    scrollingDeltaSource: u,
                    isOnBottomSource: c
                }), r.createElement(Po, null)))
            }))
        }
    }
]);