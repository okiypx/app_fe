(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [9, 3], {
        10: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return E
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "k", (function() {
                return I
            })), n.d(t, "q", (function() {
                return T
            })), n.d(t, "r", (function() {
                return k
            })), n.d(t, "m", (function() {
                return S
            })), n.d(t, "t", (function() {
                return z
            })), n.d(t, "v", (function() {
                return A
            })), n.d(t, "s", (function() {
                return M
            })), n.d(t, "l", (function() {
                return R
            })), n.d(t, "B", (function() {
                return P
            })), n.d(t, "C", (function() {
                return D
            })), n.d(t, "A", (function() {
                return N
            })), n.d(t, "D", (function() {
                return q
            })), n.d(t, "H", (function() {
                return B
            })), n.d(t, "G", (function() {
                return U
            })), n.d(t, "K", (function() {
                return V
            })), n.d(t, "z", (function() {
                return F
            })), n.d(t, "L", (function() {
                return H
            })), n.d(t, "M", (function() {
                return G
            })), n.d(t, "g", (function() {
                return Y
            })), n.d(t, "i", (function() {
                return K
            })), n.d(t, "h", (function() {
                return J
            })), n.d(t, "N", (function() {
                return X
            })), n.d(t, "u", (function() {
                return Z
            })), n.d(t, "n", (function() {
                return Q
            })), n.d(t, "I", (function() {
                return $
            })), n.d(t, "F", (function() {
                return ne
            })), n.d(t, "a", (function() {
                return re
            })), n.d(t, "f", (function() {
                return ie
            })), n.d(t, "O", (function() {
                return oe
            })), n.d(t, "E", (function() {
                return ae
            })), n.d(t, "x", (function() {
                return ue
            })), n.d(t, "w", (function() {
                return se
            })), n.d(t, "y", (function() {
                return de
            })), n.d(t, "j", (function() {
                return le
            })), n.d(t, "p", (function() {
                return fe
            })), n.d(t, "c", (function() {
                return pe
            })), n.d(t, "o", (function() {
                return me
            })), n.d(t, "J", (function() {
                return he
            })), n.d(t, "e", (function() {
                return be
            }));
            var r = n(4),
                i = n(1),
                o = n(231),
                a = n(2),
                c = n(11),
                u = n(178),
                s = n.n(u),
                d = n(179),
                l = n.n(d),
                f = n(3),
                p = n(18),
                m = n(6),
                h = n(147),
                b = function(e) {
                    var t = 0;
                    return e.split("").forEach((function(e) {
                        var n = e.charCodeAt(0);
                        t = (t << 5) - t + n, t &= t
                    })), t
                },
                g = function(e, t) {
                    return b(e) % (1 / t) === 0
                },
                v = n(24),
                y = function(e) {
                    var t = e.customJson || {},
                        n = Object(p.f)(e.titlebarBackgroundColor) ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.05)",
                        r = Object(p.f)(e.agentbarBackgroundColor) ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.05)",
                        o = Object(p.f)(e.agentbarBackgroundColor) ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)",
                        c = Object(p.g)(e.ctaColor) ? v.c.text.black : v.c.text.white;
                    return Object(a.R)({
                        name: e.name,
                        iconTheme: e.name,
                        showMessageAvatar: "modern" !== e.name,
                        colors: {
                            agentBarText: e.agentbarText,
                            agentBarBackground: e.agentbarBackgroundColor,
                            cta: e.ctaColor,
                            ctaText: c,
                            minimizedIcon: e.minimizedColorIcon,
                            minimizedBackground: e.minimizedColorBackground,
                            background: e.backgroundColor,
                            visitorMessageText: e.visitorMessageColorText,
                            visitorMessageBackground: e.visitorMessageBackgroundColor,
                            systemMessage: e.systemMessageColor,
                            agentMessageText: e.agentMessageColorText,
                            minimizedText: e.minimizedColorText,
                            titleBarText: e.titlebarText,
                            titleBarBackgroundColor: e.titlebarBackgroundColor
                        },
                        AgentBar: {
                            css: {
                                background: e.agentbarBackgroundColor,
                                color: e.agentbarText
                            },
                            IconButton: {
                                css: {
                                    background: {
                                        default: r,
                                        active: e.ctaColor
                                    },
                                    color: Object(i.a)({
                                        default: "inherit"
                                    }, "modern" !== e.name && {
                                        active: c
                                    })
                                }
                            }
                        },
                        Form: {
                            IconButton: {
                                css: {
                                    background: {
                                        default: "rgba(0, 0, 0, 0.05)",
                                        active: e.ctaColor
                                    },
                                    color: {
                                        default: "#8f8f8f",
                                        active: c
                                    }
                                }
                            }
                        },
                        ChatSummary: {
                            Icon: {
                                color: e.minimizedColorIcon
                            }
                        },
                        Divider: {
                            css: {
                                borderColor: r
                            }
                        },
                        Maximized: {
                            css: {
                                background: e.backgroundColor
                            }
                        },
                        Message: {
                            own: {
                                Bubble: {
                                    css: {
                                        background: "modern" === e.name ? "transparent" : e.visitorMessageBackgroundColor,
                                        color: e.visitorMessageColorText
                                    }
                                }
                            },
                            system: {
                                Bubble: {
                                    css: {
                                        color: e.systemMessageColor
                                    }
                                }
                            },
                            Bubble: {
                                css: {
                                    background: "modern" === e.name ? "transparent" : e.agentMessageBackgroundColor,
                                    color: e.agentMessageColorText
                                }
                            },
                            css: {
                                color: e.systemMessageColor
                            }
                        },
                        TypingIndicator: {
                            css: {
                                color: e.systemMessageColor
                            }
                        },
                        Minimized: {
                            MinimizedBubble: {
                                css: {
                                    color: e.minimizedColorText,
                                    backgroundColor: {
                                        default: e.minimizedColorBackground,
                                        hasAvatar: "transparent"
                                    }
                                },
                                Icon: {
                                    color: e.minimizedColorIcon
                                }
                            },
                            MinimizedBar: {
                                css: {
                                    color: e.minimizedColorText,
                                    backgroundColor: e.minimizedColorBackground
                                },
                                Icon: {
                                    color: e.minimizedColorIcon
                                }
                            }
                        },
                        TitleBar: {
                            css: {
                                color: e.titlebarText,
                                backgroundColor: e.titlebarBackgroundColor
                            },
                            HourGlassLabel: {
                                css: {
                                    backgroundColor: n
                                }
                            }
                        },
                        DividerLabel: {
                            css: {
                                color: e.systemMessageColor,
                                borderColor: o
                            }
                        },
                        TextComposer: {
                            IconButton: {
                                active: {
                                    Icon: {
                                        color: e.ctaColor
                                    }
                                }
                            }
                        }
                    }, t)
                },
                O = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
                _ = function(e) {
                    return e.replace(/\b(?:\d[ -]*?){8,15}((?:\d[ -]*?){4})\b/g, (function(e, t) {
                        var n = e.replace(/(-|\s)/g, "");
                        return function(e) {
                            if (/[^0-9-\s]+/.test(e)) return !1;
                            for (var t, n = e.replace(/\D/g, ""), r = n.length, i = 1, o = 0; r;) t = parseInt(n.charAt(--r), 10), o += (i ^= 1) ? O[t] : t;
                            return o && o % 10 === 0
                        }(n) ? "" + function(e) {
                            var t = e % 4,
                                n = t ? 4 - t : 0,
                                r = Math.floor(e / 4) + (t ? 1 : 0) - n - 1,
                                i = Object(a.m)(n, "XXX"),
                                o = Object(a.m)(r, "XXXX");
                            return i.concat(o).join("-").concat("-")
                        }(n.length) + t : e
                    }))
                },
                j = n(57),
                w = n(35);
            (new s.a).tlds(l.a);
            var x = function(e, t, n) {
                    var r = Object(a.o)((function(t) {
                        return t.name === e
                    }), n);
                    return -1 !== r ? Object(a.xb)(r, Object(i.a)({}, n[r], {
                        defaultValue: t
                    }), n) : n
                },
                E = function(e, t, n) {
                    e.addEvent(t, Object(i.a)({}, n, {
                        serverId: n.serverId || null
                    }))
                },
                C = function(e, t, n) {
                    var r = n.systemMessageType,
                        i = n.textVariables,
                        o = n.text;
                    E(e, t, {
                        id: Object(a.w)(e.getIndexedEvents(f.c)),
                        serverId: null,
                        type: "system_message",
                        author: "system",
                        seen: !0,
                        properties: Object(a.f)({
                            systemMessageType: r,
                            textVariables: i,
                            defaultText: o
                        })
                    })
                },
                I = function(e) {
                    e.updateChat(f.c, {
                        active: !1,
                        properties: {
                            ended: !0,
                            queued: !1,
                            agentIsTyping: !1
                        }
                    }), e.setApplicationState({
                        greetingsMuted: !1
                    })
                },
                T = function(e) {
                    e.setApplicationState({
                        eyeCatcher: Object(i.a)({}, e.getApplicationState().eyeCatcher, {
                            hidden: !0
                        })
                    })
                },
                k = function(e) {
                    var t = m.d(e);
                    if (t && t.properties.uniqueId && !m.M(e, t)) {
                        var n = e.getApplicationState().invitation;
                        e.setApplicationState({
                            invitation: Object(i.a)({}, n, {
                                hiddenIds: [].concat(n.hiddenIds, [t.properties.uniqueId])
                            })
                        }), "lc3" === e.getApplicationState().protocol && g(e.getSessionUser().serverId, .01) && Object(j.d)({
                            minimizedType: m.l(e),
                            greetingId: t.properties.id,
                            greetingUniqueId: t.properties.uniqueId,
                            greetingType: t.properties.type,
                            greetingSubtype: t.properties.subtype,
                            greetingAddon: t.properties.addon || "none"
                        })
                    }
                },
                S = function(e) {
                    var t = m.d(e);
                    if (t && t.properties.uniqueId && !m.jb(e)) {
                        var n = e.getApplicationState().invitation;
                        e.setApplicationState({
                            invitation: Object(i.a)({}, n, {
                                displayedIds: [].concat(n.displayedIds, [t.properties.uniqueId])
                            })
                        })
                    }
                },
                z = function(e) {
                    m.T(e, "maximized") || e.setApplicationState({
                        visibility: {
                            state: "maximized"
                        }
                    })
                },
                A = function(e, t) {
                    void 0 === t && (t = !1);
                    var n = e.getApplicationState(),
                        r = n.visibility,
                        i = n.destroyed;
                    !t && "hidden" === r.state && r.forced || "minimized" === r.state || (!m.O(e) || m.ab(f.c, e) || i ? e.setApplicationState({
                        visibility: {
                            state: "hidden"
                        }
                    }) : e.setApplicationState({
                        visibility: {
                            state: "minimized"
                        }
                    }))
                },
                M = function(e) {
                    m.T(e, "minimized") && e.setApplicationState({
                        visibility: {
                            state: "hidden"
                        }
                    })
                },
                R = function(e, t) {
                    var n = t.id,
                        r = t.active,
                        i = void 0 === r || r,
                        o = t.thread,
                        c = t.group,
                        u = t.agent,
                        s = t.queued,
                        d = void 0 !== s && s;
                    null === e.getChat(f.c).serverId && e.setChatServerId(f.c, n);
                    var l = {
                        ended: !1,
                        queued: d,
                        fakeAgentMessageId: null
                    };
                    void 0 !== u && (l.currentAgent = u), void 0 !== o && (l.lastThread = o), "number" === typeof c && (l.group = c), T(e), e.updateChat(f.c, {
                        active: i,
                        properties: l
                    }), ue(e);
                    var p = m.c(f.c, e);
                    Object(a.x)("properties.isBot", p) ? setTimeout((function() {
                        return "loader" === e.getDefaultView("Chat") && e.setDefaultView("Chat", "timeline")
                    }), 1500) : e.setDefaultView("Chat", "timeline"), e.setApplicationState({
                        hidden: !1
                    });
                    var h = e.getApplicationState().readyState;
                    e.setCurrentView("Chat"), h === w.a.NOT_READY || m.T(e, "maximized") || z(e)
                },
                L = function(e, t, n) {
                    void 0 === n && (n = {});
                    var r = m.g("creditCardMasking", e).enabled ? _(t) : t;
                    return {
                        type: Object(h.a)(r) ? "emoji" : "message",
                        thread: e.getChat(f.c).active ? e.getChat(f.c).properties.lastThread : null,
                        properties: Object(a.f)(Object(i.a)({
                            text: r
                        }, n))
                    }
                },
                P = function(e, t, n, r) {
                    e.sendEvent(t, L(e, n, {
                        triggeredBy: r
                    }))
                },
                D = function(e, t, n, r) {
                    var o = e.getApplicationState("invitation").current,
                        c = e.getEvent(t, o),
                        u = L(e, n, Object(i.a)({
                            triggeredBy: r
                        }, c && {
                            fromGreeting: Object(i.a)({}, Object(a.ab)(["id", "uniqueId"], c.properties))
                        })),
                        s = e.getChat(t).active,
                        d = m.Q(e),
                        l = m.g("preChatAfterGreeting", e).enabled;
                    if (d && !s && l) {
                        var p = m.I(e, "prechat"),
                            h = m.N(e, t);
                        E(e, t, Object(i.a)({}, u, {
                            seen: !0,
                            type: f.f,
                            author: e.getSessionUserId(),
                            id: Object(a.w)(e.getIndexedEvents(f.c))
                        })), p || h || B(e)
                    } else e.sendEvent(t, u)
                },
                N = function(e, t, n) {
                    var r = n.text,
                        i = n.recipients,
                        o = void 0 === i ? "all" : i;
                    e.sendEvent(t, {
                        type: "custom_system_message",
                        thread: e.getChat(f.c).active ? e.getChat(f.c).properties.lastThread : null,
                        properties: {
                            text: r.trim(),
                            recipients: o
                        }
                    })
                },
                q = function(e, t) {
                    e.updateChat(f.c, {
                        properties: {
                            currentAgent: t
                        }
                    })
                },
                B = function(e) {
                    if (!m.I(e, "prechat")) {
                        var t = e.getView("Chat/prechat");
                        ee(e, t)
                    }
                },
                U = function(e, t) {
                    var n = e.getChat(f.c).properties,
                        o = n.rate,
                        a = n.rateComment,
                        c = t.fields,
                        u = Object(r.a)(t, ["fields"]);
                    o && (c = x("rating", o, c)), a && (c = x("rateComment", a, c)), ee(e, Object(i.a)({}, u, {
                        fields: c
                    }))
                },
                V = function(e) {
                    e.updateChat(f.c, {
                        properties: {
                            startChatAgainPending: !0
                        }
                    })
                },
                F = function(e, t, n) {
                    var r = void 0 === n ? {} : n,
                        i = r.chatId,
                        o = r.forced;
                    e.updateChat(f.c, {
                        properties: {
                            startChatAgainPending: !1
                        }
                    }), ie(e);
                    var a = e.getChat(f.c),
                        c = a.properties.lastThread,
                        u = a.serverId;
                    if (o || !m.B(e) || u && i !== u) e.flushChat(t), i && e.setChatServerId(f.c, i);
                    else {
                        ce(e);
                        var s = m.f(e, f.c);
                        s && e.removeEvent(f.c, s.id), e.hasEvent(f.c, "boosters") && e.removeEvent(f.c, "boosters")
                    }
                    e.updateChat(t, {
                        properties: {
                            agentIsTyping: !1,
                            ended: !1,
                            fakeAgentMessageId: null,
                            lastThread: c,
                            loadingHistory: !1,
                            queued: !1,
                            rate: null,
                            rateComment: null,
                            transcriptSentTo: null
                        }
                    }), e.setApplicationState({
                        greetingsMuted: !1
                    }), re(e)
                },
                H = function(e, t) {
                    var n = t.getApplicationState("config");
                    t.setApplicationState({
                        config: Object(i.a)({}, n, {
                            features: Object(i.a)({}, n.features, {
                                fileSharing: {
                                    enabled: e.__unsafeProperties.license.fileSharingEnabled
                                },
                                agentAvatar: {
                                    enabled: e.__unsafeProperties.group.hasAgentAvatarsEnabled,
                                    showWithMessage: e.__unsafeProperties.group.hasAgentAvatarsEnabled && "modern" !== e.__unsafeProperties.group.theme.name
                                },
                                continuousChat: {
                                    enabled: e.__unsafeProperties.license.continuousChatWidgetEnabled
                                },
                                chatHistory: {
                                    enabled: e.__unsafeProperties.license.continuousChatWidgetEnabled || e.__unsafeProperties.license.customerHistoryEnabled
                                },
                                rating: {
                                    enabled: e.__unsafeProperties.group.ratingEnabled,
                                    position: "modern" === e.__unsafeProperties.group.theme.name ? "bottom" : "right"
                                },
                                emailTranscript: {
                                    enabled: e.__unsafeProperties.group.transcriptButtonEnabled
                                },
                                logo: {
                                    enabled: e.__unsafeProperties.group.logo.enabled,
                                    path: e.__unsafeProperties.group.logo.src
                                },
                                linksPreview: {
                                    enabled: e.__unsafeProperties.group.linksUnfurlingEnabled
                                },
                                ticketForm: {
                                    enabled: "ticketForm" in e,
                                    mode: Object(p.d)(e)
                                },
                                preChatForm: {
                                    enabled: "prechatForm" in e
                                },
                                preChatAfterGreeting: {
                                    enabled: e.__unsafeProperties.group.prechatFormAfterGreetingEnabled
                                },
                                creditCardMasking: {
                                    enabled: e.__unsafeProperties.license.creditCardMaskingEnabled
                                },
                                hideTrademark: {
                                    enabled: e.__unsafeProperties.group.hasHiddenTrademark
                                },
                                disableSounds: {
                                    enabled: !e.__unsafeProperties.group.hasSoundsEnabled
                                },
                                minimized: {
                                    enabled: !e.__unsafeProperties.group.disabledMinimized
                                },
                                mobileMinimized: {
                                    enabled: e.__unsafeProperties.group.hasCustomMobileSettings ? !e.__unsafeProperties.group.disabledMinimizedOnMobile : !e.__unsafeProperties.group.disabledMinimized
                                }
                            }),
                            minimizedType: e.__unsafeProperties.group.minimizedType,
                            mobileMinimizedType: e.__unsafeProperties.group.minimizedTypeOnMobile,
                            theme: Object(a.R)(n.theme, y(e.__unsafeProperties.group.theme)),
                            screenPosition: e.__unsafeProperties.group.screenPosition,
                            mobileScreenPosition: e.__unsafeProperties.group.screenPositionOnMobile,
                            nonProfitLicense: e.__unsafeProperties.license.nonProfit,
                            hasAnyCustomLicenseProperty: !!Object.keys(e.properties.license).length
                        })
                    }), t.getApplicationState("config").features.disableSounds.enabled && t.setApplicationState({
                        muted: !0
                    })
                },
                G = function(e, t) {
                    var n = t.getApplicationState("config"),
                        o = e.features,
                        c = o.helpDesk,
                        u = o.offlineForm,
                        s = Object(r.a)(o, ["helpDesk", "offlineForm"]);
                    t.setApplicationState({
                        config: Object(i.a)({}, n, {
                            features: Object(a.R)(n.features, Object(i.a)({}, s, {
                                ticketForm: {
                                    enabled: u.enabled,
                                    mode: c.enabled && c.licenseId > -1 ? "helpdesk" : "livechat"
                                }
                            })),
                            minimizedType: e.theme.minimized,
                            mobileMinimizedType: e.theme.mobileMinimized,
                            theme: Object(a.R)(n.theme, y(e.newTheme)),
                            screenPosition: e.screenPosition,
                            mobileScreenPosition: e.mobileScreenPosition,
                            nonProfitLicense: e.nonProfitLicense,
                            hasAnyCustomLicenseProperty: e.hasAnyCustomLicenseProperty
                        })
                    }), e.features.disableSounds.enabled && t.setApplicationState({
                        muted: !0
                    })
                },
                W = function(e, t, n) {
                    var r, o = e.getApplicationState("config");
                    e.setApplicationState({
                        config: Object(i.a)({}, o, {
                            features: Object(a.R)(o.features, (r = {}, r[t] = n, r))
                        })
                    })
                },
                Y = function(e, t) {
                    W(e, t, {
                        enabled: !1
                    })
                },
                K = function(e, t, n) {
                    W(e, t, Object(i.a)({
                        enabled: !0
                    }, n))
                },
                J = function(e, t) {
                    try {
                        var n = JSON.parse(t).filter((function(e) {
                            return "moment" === e.template_id
                        }));
                        if (Object(a.E)(n)) return;
                        K(e, "boosters", {
                            items: n.map((function(e) {
                                var t = {
                                    type: e.action.type,
                                    label: e.action.label,
                                    url: e.action.url
                                };
                                return e.action.webview_height && (t.webviewHeight = e.action.webview_height), {
                                    id: e.id,
                                    template: e.template_id,
                                    title: e.title,
                                    description: e.description,
                                    icon: e.icon,
                                    action: t
                                }
                            }))
                        })
                    } catch (r) {}
                },
                X = function(e, t, n) {
                    var r = {
                        answered: !0
                    };
                    n && (r.fields = n.properties.fields, n.id && e.setEventServerId(f.c, t, n.id)), e.updateEvent(f.c, t, {
                        properties: r
                    })
                },
                Z = function(e, t) {
                    "lc3" === e.getApplicationState().protocol && t.properties.receivedFirstTime && g(e.getSessionUser().serverId, .01) && Object(j.e)({
                        minimizedType: m.l(e),
                        greetingId: t.properties.id,
                        greetingUniqueId: t.properties.uniqueId,
                        greetingType: t.properties.type,
                        greetingSubtype: t.properties.subtype,
                        greetingAddon: t.properties.addon || "none"
                    })
                },
                Q = function(e, t) {
                    var n = e.getApplicationState(),
                        r = n.embedded,
                        o = n.actingAsDirectLink,
                        c = n.availability,
                        u = n.greetingsMuted,
                        s = m.I(e, "prechat");
                    q(e, t.author), "bar" !== m.l(e) && T(e), e.setDefaultView("Chat", "timeline"), ue(e), de(e);
                    var d, l, h, b, g, v = m.d(e);
                    v && (Object(j.f)({
                        minimizedType: m.l(e),
                        greetingId: null == (d = v.properties) ? void 0 : d.id,
                        greetingUniqueId: null == (l = v.properties) ? void 0 : l.uniqueId,
                        greetingType: null == (h = v.properties) ? void 0 : h.type,
                        greetingSubtype: null == (b = v.properties) ? void 0 : b.subtype,
                        greetingAddon: (null == (g = v.properties) ? void 0 : g.addon) || "none"
                    }), e.removeEvent(f.c, v.id));
                    Object(a.k)(t.properties.cards || t.properties.card).filter(Boolean).forEach((function(t) {
                        t.title && (t.title = Object(p.h)(e, t.title)), t.subtitle && (t.subtitle = Object(p.h)(e, t.subtitle)), t.buttons && (t.buttons.forEach((function(e) {
                            return e.invitation = !0
                        })), r && !o || t.buttons.filter((function(e) {
                            return "url" === e.type && "target" in e
                        })).forEach((function(e) {
                            return e.target = "new"
                        })))
                    }));
                    var y = Object(a.w)(e.getIndexedEvents(f.c));
                    E(e, f.c, Object(i.a)({}, t, {
                        seen: !u,
                        id: y,
                        properties: Object(i.a)({}, t.properties, t.properties.text && {
                            text: Object(p.h)(e, t.properties.text)
                        })
                    })), e.updateChat(f.c, {
                        properties: {
                            fakeAgentMessageId: y
                        }
                    }), e.setApplicationState({
                        invitation: Object(i.a)({}, e.getApplicationState("invitation"), {
                            current: y
                        })
                    }), m.T(e, "maximized") || (e.setCurrentView("Chat"), m.M(e, t) && t.properties.receivedFirstTime && !u ? z(e) : A(e, !0)), m.E(e) && "offline" === c && s && B(e), u || Z(e, t)
                },
                $ = function(e) {
                    ee(e, e.getView("Chat/ticketForm"))
                },
                ee = function(e, t) {
                    var n = {
                        formType: t.type,
                        formId: t.id,
                        fields: t.fields
                    };
                    if (m.I(e)) {
                        var r = e.getLastEvent(f.c).id;
                        return e.updateEvent(f.c, r, {
                            properties: n
                        })
                    }
                    var i = {
                        id: Object(a.w)(e.getIndexedEvents(f.c)),
                        type: "form",
                        author: "system",
                        properties: n
                    };
                    return E(e, f.c, i)
                },
                te = function(e) {
                    return !!e && function(e) {
                        var t = Object(c.g)(e);
                        return !t || "https:" === t || !1
                    }(Object(o.a)(e))
                },
                ne = function(e, t) {
                    te(t.url) ? e.updateView("Moment", {
                        show: !0,
                        data: t
                    }) : C(e, f.c, {
                        text: "Link attached to the button is invalid."
                    })
                },
                re = function(e) {
                    var t = m.g("boosters", e);
                    t.enabled && (e.hasEvent(f.c, "boosters") || e.addEvent(f.c, {
                        type: "boosters",
                        id: "boosters",
                        author: "system",
                        seen: !0,
                        properties: {
                            boosters: t.items
                        }
                    }))
                },
                ie = function(e) {
                    e.updateView("Moment", {
                        show: !1,
                        data: {}
                    })
                },
                oe = function(e, t) {
                    e.requestUpdateUser(e.getSessionUser().id, t)
                },
                ae = function(e, t) {
                    var n;
                    e.setUserServerId(e.getSessionUser().id, t), e.setApplicationState({
                        testGroup: (n = t, b(n) % 2 ? "A" : "B")
                    })
                },
                ce = function(e, t) {
                    if (void 0 === t && (t = void 0), m.I(e, t)) {
                        var n = e.getLastEvent(f.c).id;
                        e.removeEvent(f.c, n)
                    }
                },
                ue = function(e) {
                    ce(e, "prechat")
                },
                se = function(e) {
                    ce(e, "postchat")
                },
                de = function(e) {
                    ce(e, "ticket")
                },
                le = function(e, t, n) {
                    var r = Object(a.x)("error.details.errors", e);
                    if (r) {
                        var o = r.reduce((function(e, n) {
                            return "requester.email" === n.field ? Object(i.a)({}, e, {
                                email: t("invalid_email")
                            }) : "requester.name" === n.field ? Object(i.a)({}, e, {
                                name: n.message
                            }) : e
                        }), {});
                        Object(a.E)(o) ? n() : n(o)
                    } else n()
                },
                fe = function(e, t, n) {
                    if (e && e.errors) {
                        var r = e.errors[0];
                        if ("incorrect requester structure" === Object.keys(r)[0]) {
                            var o = r["incorrect requester structure"].reduce((function(e, n) {
                                return /name must be at most \d+ characters long/.test(n) ? Object(i.a)({}, e, {
                                    name: n
                                }) : "mail must be a valid e-mail address" === n ? Object(i.a)({}, e, {
                                    email: t("invalid_email")
                                }) : e
                            }), {});
                            Object(a.E)(o) ? n() : n(o)
                        } else n()
                    } else n()
                },
                pe = function(e) {
                    var t = f.a,
                        n = e.getChat(f.c).properties.lastThread;
                    e.hasEvent(f.c, t) && e.removeEvent(f.c, t), e.addEvent(f.c, {
                        id: t,
                        serverId: null,
                        seen: !0,
                        type: f.a,
                        author: "system",
                        thread: n
                    })
                },
                me = function(e, t, n) {
                    switch (Object(a.C)(n.type, ["message", "webview"]) && z(e), n.type) {
                        case "message":
                            D(e, f.c, n.text, {
                                event: t,
                                button: n
                            });
                            break;
                        case "webview":
                            ne(e, {
                                url: n.value,
                                height: n.webviewHeight
                            });
                            break;
                        case "cancel":
                            ge(e, f.c, t)
                    }
                    e.emit("rich_greeting_button_clicked", {
                        button: n,
                        event: e.getEvent(f.c, t)
                    })
                },
                he = function(e) {
                    e.emit("start_thread")
                },
                be = function(e, t) {
                    var n = e.getChat(f.c),
                        r = Object(a.C)("image", t.type);
                    e.sendEvent(f.c, {
                        type: "file",
                        thread: n.properties.lastThread,
                        properties: {
                            name: t.name.substring(0, f.d),
                            progress: 0,
                            finished: !1,
                            failed: !1,
                            failReason: null,
                            fileType: r ? "image" : "other",
                            url: r ? URL.createObjectURL(t) : null
                        }
                    }, {
                        file: t
                    })
                },
                ge = function(e, t, n) {
                    var r = e.getChat(t),
                        i = e.getApplicationState(),
                        o = i.protocol,
                        a = i.mobile,
                        c = e.getEvent(t, n);
                    !r.active && c && ("lc3" === o && g(e.getSessionUser().serverId, .01) && Object(j.c)({
                        mobile: a,
                        greetingId: c.properties.id,
                        greetingUniqueId: c.properties.uniqueId,
                        greetingType: c.properties.type,
                        greetingSubtype: c.properties.subtype,
                        greetingAddon: c.properties.addon || "none",
                        minimizedType: m.l(e)
                    }), e.emit("request_cancel_greeting", c.properties.uniqueId))
                }
        },
        100: function(e, t, n) {
            "use strict";
            var r = n(77);
            t.a = Object(r.b)() ? window.localStorage : r.a
        },
        101: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            }));
            var r = n(2);

            function i(e) {
                return Promise.all(e.map((function(e) {
                    return e.then((function(e) {
                        return {
                            status: "fulfilled",
                            value: e
                        }
                    }), (function(e) {
                        return {
                            status: "rejected",
                            reason: e
                        }
                    }))
                })))
            }
            var o = function(e) {
                var t = Object.keys(e);
                return Promise.all(Object(r.yb)(e)).then((function(e) {
                    return Object(r.u)(Object(r.zb)(t, e))
                }))
            }
        },
        105: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = "system-card"
        },
        11: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "h", (function() {
                return m
            })), n.d(t, "i", (function() {
                return p
            })), n.d(t, "f", (function() {
                return b
            })), n.d(t, "j", (function() {
                return l
            })), n.d(t, "k", (function() {
                return y
            })), n.d(t, "l", (function() {
                return _
            })), n.d(t, "m", (function() {
                return f
            })), n.d(t, "g", (function() {
                return w
            })), n.d(t, "c", (function() {
                return E
            }));
            var r = n(2),
                i = function(e) {
                    return Object(r.sb)(e).map((function(e) {
                        return e.map(encodeURIComponent).join("=")
                    })).join("&")
                },
                o = function(e) {
                    var t = e.split("&").map((function(e) {
                        return e.split("=").map((function(e) {
                            return decodeURIComponent(e.replace("+", "%20"))
                        }))
                    }));
                    return Object(r.u)(t)
                },
                a = /(?:[^:]+:\/\/)?([^/\s]+)/;

            function c(e) {
                var t = e.match(a);
                return t && t[1]
            }
            var u = /[^:]+:\/\/[^(/|?)\s]+/,
                s = function(e) {
                    var t = e.match(u);
                    return t && t[0]
                },
                d = /.*?\?([^#]+)/,
                l = function(e) {
                    var t = e.match(d);
                    return t ? "?" + t[1] : ""
                },
                f = function(e) {
                    return e.replace(/^\?/, "")
                },
                p = function(e) {
                    var t = f(l(e));
                    return o(t || e)
                },
                m = function(e, t) {
                    return p(t)[e]
                },
                h = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/,
                b = function(e) {
                    var t = e.match(h);
                    return "/" + (t && t[1] || "")
                },
                g = function(e) {
                    return e.replace(/\w/g, "$&[\\r\\n\\t]*")
                },
                v = new RegExp("^[\0-\x1f]*(" + g("javascript") + "|" + g("data") + "):", "i"),
                y = function(e) {
                    return v.test(e)
                },
                O = /^((http(s)?:)?\/\/)/,
                _ = function(e) {
                    return e.replace(O, "")
                },
                j = /^((http(s)?:)?\/\/)/,
                w = function(e) {
                    var t = e.match(j);
                    return t ? t[2] : null
                },
                x = n(1),
                E = function(e, t) {
                    if (0 === Object.keys(t).length) return e;
                    var n = s(e),
                        r = b(e),
                        o = l(e) ? p(e) : {};
                    return "" + n + r + "?" + i(Object(x.a)({}, o, t))
                }
        },
        112: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return a
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return u
            }));
            var r = n(2),
                i = n(65),
                o = n(127),
                a = function(e, t) {
                    var n = Object(r.M)((function(e) {
                        return "message" === e ? "textarea" : e
                    }), e);
                    return t.fields.map((function(e) {
                        if ("information" === e.type) return null;
                        var t = {
                            type: e.type,
                            text: o.a ? Object(i.b)(e.label) : e.label,
                            serverType: e.serverType
                        };
                        return (e.name in n || e.type in n) && ("options" in e ? t.value = Object(r.k)(n[e.name]).map((function(t) {
                            return Object(r.n)((function(e) {
                                return e.value === t
                            }), e.options).label
                        })).join(", ") : e.name in n ? t.value = n[e.name] : t.value = n[e.type], t.value = Object(r.ub)(t.value), t.text = t.text + " " + t.value), t
                    })).filter(Boolean)
                },
                c = function(e, t, n) {
                    var i = e.group,
                        o = e.license,
                        c = e.visitorId,
                        u = e.visitorData,
                        s = e.defaultValues,
                        d = a(n, t),
                        l = Object(r.n)((function(e) {
                            return "email" === e.type || "email" === e.serverType
                        }), d);
                    if (!l) throw {
                        type: "missing argument",
                        reason: "Missing email"
                    };
                    if (!Object(r.n)((function(e) {
                            return "textarea" === e.type
                        }), d)) throw {
                        type: "missing argument",
                        reason: "Missing message"
                    };
                    var f = Object(r.n)((function(e) {
                            return "name" === e.type || "name" === e.serverType
                        }), d),
                        p = Object(r.n)((function(e) {
                            return "subject" === e.type || "subject" === e.serverType
                        }), d),
                        m = d.filter((function(e) {
                            var t = e.type,
                                n = e.serverType;
                            return -1 === ["name", "email", "subject"].indexOf(n || t)
                        })).map((function(e) {
                            return e.text
                        })).join("\n"),
                        h = {
                            mail: l.value
                        };
                    f ? h.name = f.value : s && s.name && (h.name = s.name);
                    var b = {
                        group: i,
                        licence_id: o,
                        ticket_message: m,
                        offline_message: d.map((function(e) {
                            return e.text
                        })).join("\n"),
                        requester: h,
                        visitor_id: c
                    };
                    return p && p.value && (b.subject = p.value), u.pageUrl && (b.source = {
                        url: u.pageUrl
                    }), b
                },
                u = function(e, t) {
                    var n = {
                        id: e,
                        text: t.ticket_message,
                        visitor: {
                            name: t.requester.name || null,
                            email: t.requester.mail || null
                        }
                    };
                    return t.subject && (n.subject = t.subject), n
                }
        },
        113: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n(1),
                i = n(4),
                o = n(0),
                a = n(12),
                c = n(5),
                u = n(22),
                s = n(18),
                d = n(42),
                l = Object(c.z)("margin:0 4px;margin-bottom:8px;padding:8px;border-radius:6px !important;"),
                f = Object(c.D)(c.p, {
                    target: "ecz5hmt0"
                })("font-family:'Noto Sans';font-size:0.9em;", (function(e) {
                    var t = e.theme;
                    return Object(c.z)("color:", Object(s.g)(t.colors.cta) ? Object(u.e)(.6, t.colors.cta) : t.colors.cta, ";border-color:", Object(s.g)(t.colors.cta) ? Object(u.e)(.6, t.colors.cta) : t.colors.cta, ";")
                })),
                p = function(e) {
                    return e.stopPropagation()
                };
            t.b = function(e) {
                var t = e.replies,
                    n = e.onSelect,
                    u = Object(i.a)(e, ["replies", "onSelect"]),
                    s = Object(a.f)();
                return o.createElement(c.o, Object(r.a)({
                    onSelect: n
                }, u, s), t.map((function(e, t) {
                    var n = e.text;
                    return o.createElement(f, {
                        key: t,
                        onClick: p,
                        value: t,
                        className: l
                    }, o.createElement(d.a, null, n.length > 20 ? n.slice(0, 20).trim() + "\u2026" : n))
                })))
            }
        },
        122: function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(5),
                o = n(24),
                a = n(13),
                c = Object(i.C)("100%{opacity:0.3;}"),
                u = Object(r.a)({}, a.a, {
                    borderRadius: Object(r.a)({}, a.a.borderRadius, {
                        def: a.a.borderRadius.md
                    }),
                    vars: {
                        "primary-color": a.a.colors.accent,
                        "secondary-color": a.a.colors.text.white,
                        "tertiary-color": a.a.colors.divider
                    },
                    ApplicationWrapper: {
                        css: {
                            padding: {
                                default: "1em 1em 1em 1em",
                                expandToEdge: "0"
                            }
                        }
                    },
                    AgentBar: {
                        Avatar: {
                            size: "40px"
                        },
                        IconButton: {
                            css: {
                                width: "40px",
                                height: "40px",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "6px",
                                fontSize: Object(o.d)(32),
                                opacity: {
                                    default: "1",
                                    disabled: "0.15"
                                },
                                color: {
                                    active: a.a.colors.text.white
                                }
                            }
                        },
                        Title: {
                            css: {
                                fontSize: ".9em",
                                fontWeight: "bold"
                            }
                        },
                        SubTitle: {
                            css: {
                                fontSize: "0.9em",
                                opacity: "1"
                            }
                        },
                        css: {
                            backgroundColor: a.a.colors.surface.light,
                            zIndex: "1",
                            color: a.a.colors.text.black,
                            padding: "1rem"
                        }
                    },
                    Avatar: {
                        size: "20px",
                        css: {
                            border: 0
                        }
                    },
                    Bubble: {
                        sharpBorderRadius: "6px",
                        ovalBorderRadius: "6px",
                        css: {
                            boxShadow: a.a.boxShadow.xs,
                            border: "0"
                        }
                    },
                    ImagePreview: {
                        css: {
                            maxWidth: "200px",
                            maxHeight: "300px",
                            borderRadius: a.a.borderRadius.md
                        }
                    },
                    IconButton: {
                        css: {
                            padding: "0 .5em"
                        }
                    },
                    Footer: {
                        css: {
                            fontSize: "0.65em",
                            padding: "0.3em 0",
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: a.a.colors.surface.lightVariant
                        },
                        FooterLink: {
                            css: {
                                textDecoration: "none",
                                padding: "0.2em",
                                borderRadius: a.a.borderRadius.md
                            }
                        }
                    },
                    MessageButtons: {
                        css: {
                            color: a.a.colors.accent
                        }
                    },
                    MessageText: {
                        css: {
                            fontSize: "14px"
                        }
                    },
                    Message: {
                        css: {
                            animation: {
                                default: "none",
                                sending: c + " 2s 2s forwards"
                            },
                            opacity: {
                                default: "1",
                                failed: "0.7"
                            },
                            color: a.a.colors.text.black,
                            justifyContent: {
                                default: "flex-start",
                                system: "center"
                            }
                        },
                        Bubble: {
                            sharpBorderRadius: "6px",
                            ovalBorderRadius: "6px",
                            css: {
                                boxShadow: a.a.boxShadow.xs,
                                border: "0"
                            }
                        },
                        system: {
                            Bubble: {
                                css: {
                                    background: "transparent",
                                    textAlign: "center",
                                    border: "0",
                                    width: "100%",
                                    boxShadow: "none"
                                }
                            },
                            MessageText: {
                                css: {
                                    padding: "0 1em"
                                }
                            }
                        },
                        fullWidth: {
                            Content: {
                                css: {
                                    width: "100%"
                                }
                            }
                        }
                    },
                    MinimizedBar: {
                        Icon: {
                            color: "var(--primary-color)"
                        },
                        css: {
                            position: "relative"
                        }
                    },
                    MinimizedBubble: {
                        Icon: {
                            color: a.a.colors.text.white
                        },
                        css: {
                            position: "relative",
                            background: {
                                default: "var(--primary-color)",
                                hasAvatar: "transparent"
                            }
                        }
                    },
                    Minimized: {
                        Avatar: {
                            css: {
                                border: "0",
                                backgroundColor: "transparent"
                            }
                        }
                    },
                    Invitation: {
                        IconButton: {
                            css: {
                                visibility: {
                                    mobile: "visible"
                                }
                            }
                        },
                        Bubble: {
                            sharpBorderRadius: "6px",
                            ovalBorderRadius: "6px",
                            css: {
                                border: "0"
                            }
                        }
                    },
                    TitleBar: {
                        css: {
                            backgroundColor: a.a.colors.surface.light,
                            color: a.a.colors.text.black,
                            fontWeight: "700!important",
                            fontSize: "1em",
                            textAlign: "center",
                            height: "56px"
                        },
                        TitleBarTitle: {
                            css: {
                                fontSize: Object(o.d)(14)
                            }
                        },
                        Avatar: {
                            size: "30px",
                            css: {
                                border: "0"
                            }
                        }
                    },
                    TextComposer: {
                        css: {
                            fontSize: {
                                default: "14px",
                                mobile: "16px"
                            },
                            boxShadow: "0 -1em 1em rgba(0, 0, 0, 0.03)",
                            zIndex: "1"
                        },
                        IconButton: {
                            css: {
                                opacity: {
                                    active: 1,
                                    default: .4
                                }
                            }
                        }
                    },
                    View: {
                        css: {
                            color: a.a.colors.text.black
                        },
                        Bubble: {
                            sharpBorderRadius: "6px",
                            ovalBorderRadius: "6px",
                            css: {
                                boxShadow: a.a.boxShadow.xs,
                                border: "0"
                            }
                        }
                    },
                    SystemCard: {
                        css: {
                            border: "0",
                            boxShadow: a.a.boxShadow.xs,
                            left: {
                                default: "50%",
                                rtl: "auto"
                            },
                            right: {
                                default: "auto",
                                rtl: "50%"
                            },
                            transform: {
                                default: "translateX(-50%)",
                                rtl: "translateX(50%)"
                            }
                        }
                    }
                });
            t.a = u
        },
        126: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return c
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return s
            }));
            var r = n(1),
                i = n(112),
                o = n(2),
                a = n(191),
                c = function(e, t) {
                    return Object(a.a)("https://api." + ("labs" === e ? "labs." : "") + "helpdesk.com/v1/externalTickets", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    }).then((function(e) {
                        return {
                            id: e.ID
                        }
                    }))
                },
                u = function(e) {
                    var t = e.license,
                        n = e.group,
                        a = e.pageUrl,
                        c = e.form,
                        u = e.answers,
                        s = Object(i.c)(u, c),
                        d = Object(o.n)((function(e) {
                            return "email" === e.type || "email" === e.serverType
                        }), s),
                        l = Object(o.n)((function(e) {
                            return "name" === e.type || "name" === e.serverType
                        }), s);
                    if (!d) throw new Error("Missing email");
                    if (!Object(o.n)((function(e) {
                            return "textarea" === e.type
                        }), s)) throw new Error("Missing message");
                    var f = Object(o.n)((function(e) {
                            return "subject" === e.type || "subject" === e.serverType
                        }), s),
                        p = s.filter((function(e) {
                            var t = e.type,
                                n = e.serverType;
                            return -1 === ["name", "email", "subject"].indexOf(n || t)
                        })).map((function(e) {
                            return e.text
                        })).join("\n");
                    return Object(r.a)({}, f && f.value && {
                        subject: f.value
                    }, {
                        message: {
                            text: p
                        },
                        requester: Object(r.a)({
                            email: d.value
                        }, l && l.value && {
                            name: l.value
                        }),
                        integration: Object(r.a)({
                            type: "livechat",
                            ID: String(t),
                            teamID: String(n)
                        }, a && {
                            referenceURL: a
                        })
                    })
                },
                s = function(e, t) {
                    var n = t.requester,
                        i = t.message,
                        o = t.subject,
                        a = i.text,
                        c = n.name,
                        u = n.email;
                    return Object(r.a)({
                        id: e,
                        text: a
                    }, o && {
                        subject: o
                    }, {
                        visitor: {
                            name: c || null,
                            email: u || null
                        }
                    })
                }
        },
        127: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = "undefined" !== typeof document
        },
        128: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "a", (function() {
                return s
            }));
            var r = n(12),
                i = n(43),
                o = !1,
                a = "function" === typeof document.hasFocus ? function() {
                    return document.hasFocus()
                } : function() {
                    return !1
                },
                c = function() {
                    return !(!a() && !o) && (o = !1, !0)
                },
                u = function() {
                    return c() && !Object(i.c)()
                },
                s = function(e, t) {
                    e.on("host_focus_shifted", (function() {
                        o = !1
                    })), t.on("set_host_modality", (function(e) {
                        o = !0, Object(r.d)(e)
                    }))
                }
        },
        13: function(e, t, n) {
            "use strict";
            var r = n(24);
            t.a = {
                spaceBase: 8,
                typography: r.g,
                colors: r.c,
                transitions: r.f,
                borderRadius: r.a,
                boxShadow: r.b,
                spaces: r.e
            }
        },
        139: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(9),
                i = function(e, t) {
                    return Object(r.getApplicationState)(e, "visibility").state === t
                }
        },
        140: function(e, t, n) {
            "use strict";
            t.a = null
        },
        141: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "e", (function() {
                return m
            }));
            var r = n(1),
                i = n(4),
                o = n(11),
                a = n(147),
                c = function(e) {
                    var t = e.id,
                        n = e.authorId,
                        r = e.timestamp,
                        i = e.serverId,
                        o = void 0 === i ? t : i,
                        a = e.threadId,
                        c = void 0 === a ? null : a,
                        u = e.seen;
                    return {
                        id: t,
                        serverId: o,
                        thread: c,
                        author: n,
                        timestamp: r,
                        seen: void 0 !== u && u
                    }
                },
                u = function(e) {
                    e.id, e.customId, e.authorId, e.timestamp, e.threadId, e.properties, e.seen, e.serverId, e.type, e.text, e.urlDetails;
                    return Object(i.a)(e, ["id", "customId", "authorId", "timestamp", "threadId", "properties", "seen", "serverId", "type", "text", "urlDetails"])
                },
                s = function(e) {
                    if (e.urlDetails) {
                        var t = e.urlDetails;
                        return Object(r.a)({}, c(e), {
                            type: "url_preview",
                            properties: {
                                serverType: e.type,
                                title: t.title,
                                description: t.description,
                                image: {
                                    url: t.imageUrl,
                                    link: t.url
                                }
                            }
                        })
                    }
                    return Object(a.a)(e.text) ? Object(r.a)({}, c(e), {
                        type: "emoji",
                        properties: Object(r.a)({
                            serverType: e.type,
                            text: e.text
                        }, u(e))
                    }) : Object(r.a)({}, c(e), {
                        type: "message",
                        properties: Object(r.a)({
                            serverType: e.type,
                            text: e.text
                        }, u(e))
                    })
                },
                d = function(e) {
                    switch (e.type) {
                        case "url":
                            return Object(o.k)(e.value) ? null : e;
                        case "webview":
                            if (Object(o.k)(e.value)) return null;
                            var t = Object(o.e)(e.value);
                            if (!t) return e;
                            if (/chatbot\.com$/.test(t)) {
                                var n = Object(o.b)(Object(o.m)(Object(o.j)(e.value)));
                                if (n.p) try {
                                    var i = JSON.parse(atob(n.p));
                                    if (i.url) return Object(r.a)({}, e, {
                                        proxiedValue: i.url
                                    })
                                } catch (a) {
                                    return e
                                }
                            }
                            return e;
                        default:
                            return e
                    }
                },
                l = function(e) {
                    var t = {};
                    return "string" === typeof e.title && (t.title = e.title), "string" === typeof e.subtitle && (t.subtitle = e.subtitle), e.image && (t.image = Object(r.a)({}, e.image, {
                        link: e.image.url
                    })), e.buttons && (t.buttons = e.buttons.map(d).filter(Boolean)), t
                },
                f = function(e) {
                    switch (e.template) {
                        case "quick_replies":
                            var t = e.elements[0];
                            return Object(r.a)({}, c(e), {
                                type: "message",
                                properties: {
                                    serverType: e.type,
                                    text: t.title,
                                    quickReplies: t.buttons.map((function(e) {
                                        return {
                                            type: e.type,
                                            text: e.text,
                                            value: e.value,
                                            postbackId: e.postbackId
                                        }
                                    }))
                                }
                            });
                        case "sticker":
                            var n = e.elements[0].image;
                            return Object(r.a)({}, c(e), {
                                type: "sticker",
                                properties: {
                                    serverType: e.type,
                                    url: n.url,
                                    name: n.name
                                }
                            });
                        default:
                            if (e.elements.length > 1) return Object(r.a)({}, c(e), {
                                type: "carousel",
                                properties: {
                                    serverType: e.type,
                                    cards: e.elements.map(l)
                                }
                            });
                            var i = e.elements[0];
                            if (1 === Object.keys(i).length && i.image) {
                                var o = i.image;
                                return Object(r.a)({}, c(e), {
                                    type: "image_preview",
                                    properties: Object(r.a)({
                                        name: o.name,
                                        serverType: e.type,
                                        url: o.url
                                    }, o.alternativeText && {
                                        alternativeText: o.alternativeText
                                    })
                                })
                            }
                            return Object(r.a)({}, c(e), {
                                type: "rich_message",
                                properties: {
                                    serverType: e.type,
                                    card: l(i)
                                }
                            })
                    }
                },
                p = function(e) {
                    if (e.thumbnails) {
                        var t = e.thumbnails,
                            n = Object(r.a)({}, c(e), {
                                type: "image_preview",
                                properties: Object(r.a)({
                                    name: e.name,
                                    serverType: e.type
                                }, t.default, {
                                    link: e.url
                                })
                            });
                        return t.high && (n.properties.srcSet = t.default.url + " 1x, " + t.high.url + " 2x"), e.alternativeText && (n.properties.alternativeText = e.alternativeText), n
                    }
                    return Object(r.a)({}, c(e), {
                        type: "message",
                        properties: Object(r.a)({
                            serverType: e.type,
                            text: e.name,
                            url: e.url
                        }, e.alternativeText && {
                            alternativeText: e.alternativeText
                        })
                    })
                },
                m = function(e) {
                    var t = Object(r.a)({}, c(e), {
                        type: "system_message",
                        properties: {
                            serverType: e.type,
                            systemMessageType: e.systemMessageType,
                            defaultText: e.text
                        }
                    });
                    return e.textVars && (t.properties.textVariables = e.textVars), t
                }
        },
        146: function(e, t, n) {
            "use strict";
            t.a = function() {
                var e = [],
                    t = function(t) {
                        return function(n) {
                            return function(r) {
                                var i = n(r);
                                return e.forEach((function(e) {
                                    e(r, t)
                                })), i
                            }
                        }
                    };
                return t.add = function(t) {
                    e.push(t)
                }, t
            }
        },
        147: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = /^\s+$/,
                i = /^(?:\s+|[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/;

            function o(e) {
                for (var t = null, n = 0; t = i.exec(e);) {
                    var o = t[0];
                    if (e = e.slice(o.length), r.test(o) || n++, n > 3) return !1
                }
                return !e
            }
        },
        156: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "c", (function() {
                return f
            }));
            var r = n(1),
                i = n(2),
                o = n(65),
                a = n(127),
                c = function(e, t) {
                    return e.order - t.order
                },
                u = {
                    question: {
                        type: "text"
                    },
                    checkbox_for_email: {
                        type: "checkbox",
                        meta: "confirm_subscription"
                    },
                    header: {
                        type: "information"
                    },
                    skill: {
                        type: "group_select"
                    }
                },
                s = function(e) {
                    return e.map((function(e, t) {
                        var n = {};
                        return Object(i.A)("label", e) && (n.label = e.label), Object(i.A)("checked", e) && (n.checked = e.checked), n.value = String(t), Object(i.A)("skill_id", e) && (n.value = String(e.skill_id)), Object(i.A)("embedded_chat_hide_when_offline", e) && (n.ticketFormDisabled = Boolean(e.embedded_chat_hide_when_offline)), Object(i.A)("queue_template", e) && (n.queueTemplate = e.queue_template), n
                    }))
                },
                d = function(e) {
                    var t = !1,
                        n = {
                            fields: e.fields.sort(c).map((function(e, n) {
                                var r = {};
                                if ("facebookConnect" === e.type) return t = !0, !1;
                                e.id ? r.name = e.id : -1 === ["header", "information"].indexOf(e.type) && (r.name = String(n)), Object(i.A)("value", e) && (r.value = e.value), Object(i.A)("label", e) && (r.label = e.label), Object(i.A)("required", e) && (r.required = e.required), "rating" === e.type && (r.commentLabel = e.options[0]), e.skills && e.skills.length > 0 ? r.options = s(e.skills) : e.options && e.options.length > 0 && (e.options_data ? r.options = s(e.options_data) : Object(i.G)(e.options[0]) ? r.options = e.options.map((function(e, t) {
                                    return {
                                        label: e.label,
                                        value: String(t)
                                    }
                                })) : r.options = e.options.map((function(e, t) {
                                    return {
                                        label: e,
                                        value: String(t)
                                    }
                                }))), e.serverType && (r.serverType = e.serverType);
                                var o = function(e) {
                                        return {
                                            type: u[e] && u[e].type || e,
                                            meta: u[e] && u[e].meta || !1
                                        }
                                    }(e.type),
                                    a = o.type,
                                    c = o.meta;
                                return r.type = a, c && (r.meta = c), r
                            })).filter(Boolean)
                        };
                    return e.id && (n.id = e.id), t && (n.facebookConnect = !0), n
                },
                l = function(e) {
                    return Object(r.a)({}, e, {
                        fields: e.fields.map((function(e) {
                            switch (e.type) {
                                case "name":
                                case "subject":
                                    return Object(r.a)({}, e, {
                                        maxLength: 1024
                                    });
                                case "email":
                                case "textarea":
                                    return Object(r.a)({}, e, {
                                        required: !0
                                    });
                                default:
                                    return e
                            }
                        }))
                    })
                },
                f = function(e, t, n) {
                    var r = {
                            survey_id: t.id
                        },
                        c = ["name", "question", "email", "checkbox", "checkbox_for_email", "radio", "skill", "select", "textarea"],
                        s = t.fields.map((function(r, c) {
                            var s, d, l = {
                                id: r.name,
                                order: t.facebookConnect ? c + 1 : c,
                                type: (s = r.type, d = r.meta, void 0 === d && (d = !1), Object(i.p)((function(e) {
                                    var t = e.type,
                                        n = e.meta;
                                    return t === s && (!n || d === n)
                                }), u) || s)
                            };
                            return "checkbox_for_email" === l.type ? l.label = "" : Object(i.A)("label", r) && (l.label = a.a ? Object(o.b)(r.label) : r.label), Object(i.A)("options", r) ? l.answers = r.options.map((function(t, o) {
                                var a = {
                                    index: o
                                };
                                return Object(i.A)("label", t) && (a.label = t.label), "skill" === l.type && (a.group_id = parseInt(t.value, 10)), "group_select" === r.type ? a.chosen = parseInt(n, 10) === o : a.chosen = e[r.name] && (Array.isArray(e[r.name]) && -1 !== e[r.name].indexOf(t.value) || "string" === typeof e[r.name] && e[r.name] === t.value) || !1, a
                            })) : l.answer = e[r.name] || "", l
                        })).filter((function(e) {
                            return -1 !== c.indexOf(e.type)
                        }));
                    return r.fields = s, r
                }
        },
        157: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return m
            })), n.d(t, "a", (function() {
                return d.d
            }));
            var r = n(1),
                i = n(4),
                o = n(0),
                a = n(34),
                c = n(2),
                u = n(5),
                s = n(12);
            var d = n(39),
                l = n(42),
                f = Object(u.z)("padding-top:0.5em;"),
                p = Object(u.z)("padding-bottom:0.5em;"),
                m = function(e) {
                    var t = e.card,
                        n = e.onButtonClick,
                        m = void 0 === n ? c.T : n,
                        h = e.compactButtons,
                        b = void 0 !== h && h,
                        g = e.horizontalLayout,
                        v = void 0 !== g && g,
                        y = e.TitleComponent,
                        O = void 0 === y ? d.l : y,
                        _ = Object(i.a)(e, ["card", "onButtonClick", "compactButtons", "horizontalLayout", "TitleComponent"]),
                        j = Object(s.f)(),
                        w = o.useRef(null),
                        x = function(e) {
                            return e.buttons ? Object(r.a)({}, e, {
                                buttons: e.buttons.map((function(e) {
                                    switch (e.type) {
                                        case "phone":
                                            e.type;
                                            var t = e.value,
                                                n = e.role,
                                                o = Object(i.a)(e, ["type", "value", "role"]);
                                            return Object(r.a)({}, o, {
                                                href: "tel:" + t,
                                                target: "_parent",
                                                variant: n
                                            });
                                        case "url":
                                            e.type;
                                            var a = e.value,
                                                c = e.role,
                                                u = Object(i.a)(e, ["type", "value", "role"]);
                                            return "invitation" in e ? Object(r.a)({}, u, {
                                                variant: c
                                            }) : Object(r.a)({}, u, {
                                                href: a,
                                                target: "_blank",
                                                variant: c
                                            });
                                        default:
                                            if ("value" in e) {
                                                e.type, e.value;
                                                var s = e.role,
                                                    d = Object(i.a)(e, ["type", "value", "role"]);
                                                return Object(r.a)({}, d, {
                                                    variant: s
                                                })
                                            }
                                            e.type;
                                            var l = e.role,
                                                f = Object(i.a)(e, ["type", "role"]);
                                            return Object(r.a)({}, f, {
                                                variant: l
                                            })
                                    }
                                }))
                            }) : e
                        }(t),
                        E = x.title,
                        C = x.subtitle,
                        I = x.image,
                        T = x.buttons,
                        k = void 0 === T ? [] : T,
                        S = E || C,
                        z = b && k.length > 3,
                        A = k.length > 1,
                        M = A ? d.c : d.i,
                        R = A ? d.b : d.h;
                    return o.createElement(d.d, Object(r.a)({
                        innerRef: w,
                        horizontalLayout: v
                    }, _), I && o.createElement(d.f, Object(r.a)({}, I, {
                        horizontalLayout: v
                    })), o.createElement(d.e, {
                        narrow: I && v
                    }, S && o.createElement(d.k, Object(r.a)({
                        className: Object(u.A)(!Object(c.E)(k) && p)
                    }, j), E && o.createElement(O, {
                        textWrap: !0,
                        preserveLines: !0
                    }, o.createElement(l.a, null, E)), C && o.createElement(d.j, {
                        textWrap: !0,
                        preserveLines: !0
                    }, o.createElement(l.a, null, C))), !Object(c.E)(k) && o.createElement(M, {
                        className: Object(u.A)(S && f),
                        compact: b
                    }, (z ? k.slice(0, 3) : k).map((function(e, t) {
                        var n = e.text,
                            a = Object(i.a)(e, ["text"]),
                            c = n.length > 20 ? n.slice(0, 20).trim() + "\u2026" : n;
                        return o.createElement(R, {
                            key: t,
                            compact: b
                        }, o.createElement(d.a, Object(r.a)({
                            label: o.createElement(l.a, null, c),
                            onClick: function(e) {
                                e.stopPropagation(), m(t)
                            }
                        }, a)))
                    }))), z && o.createElement(a.a, null, (function(e) {
                        return o.createElement(d.g, {
                            label: e("show_more")
                        })
                    }))))
                }
        },
        16: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return a
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "i", (function() {
                return u
            })), n.d(t, "a", (function() {
                return s
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "e", (function() {
                return m
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "j", (function() {
                return b
            }));
            var r = n(1),
                i = n(2),
                o = n(62),
                a = function(e, t) {
                    var n = function n() {
                        var r = t.apply(void 0, arguments);
                        return "function" === typeof r ? n : {
                            type: e,
                            payload: r
                        }
                    };
                    return n.getActionName = function() {
                        return e
                    }, n.toString = function() {
                        return e
                    }, n
                },
                c = function(e, t) {
                    var n = function(n) {
                        var r = Object.create(n);
                        r.action = function(t, r) {
                            var i = {
                                type: e,
                                payload: t
                            };
                            r && (i.meta = r), n.dispatch(i)
                        };
                        for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                        return t.apply(void 0, [r].concat(o))
                    };
                    return n.toString = function() {
                        return e
                    }, n
                },
                u = function(e, t) {
                    var n = "REQUEST_" + e,
                        a = c(e, t),
                        u = function(e) {
                            for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), s = 1; s < c; s++) u[s - 1] = arguments[s];
                            var d, l = Object.create(e);
                            if (l.action = function(t) {
                                    var c = Object(o.a)(),
                                        s = c.promise,
                                        l = c.resolve,
                                        f = c.reject;
                                    e.dispatch({
                                        type: n,
                                        payload: Object(r.a)({}, t, {
                                            resolve: l,
                                            reject: f
                                        })
                                    }), (d = s).then((function() {
                                        a.apply(void 0, [e].concat(u))
                                    }), i.T)
                                }, t.apply(void 0, [l].concat(u)), "undefined" === typeof d) throw new Error("You forgot to call `action` handler in " + n + " creator.");
                            return d
                        };
                    return u.toString = function() {
                        return n
                    }, {
                        actionMethod: a,
                        requestActionMethod: u
                    }
                },
                s = function(e, t) {
                    if ("object" !== typeof e || null === e || Array.isArray(e)) throw new Error("bindActionMethods expects a plain object with actionMethods as values.");
                    return Object(i.N)((function(e) {
                        return function(e, t) {
                            return function() {
                                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return e.apply(void 0, [t].concat(r))
                            }
                        }(e, t)
                    }), e)
                },
                d = function(e, t) {
                    return t[void 0] && console.warn(["Reducer contains an 'undefined' action type.", "Have you misspelled a constant?"].join("\n")),
                        function(n, r) {
                            return void 0 === n && (n = e), Object(i.A)(r.type, t) ? t[r.type](n, r.payload) : n
                        }
                };
            var l = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                f = function(e) {
                    var t;
                    return (t = {})["SET_PROPERTY_" + e.toUpperCase()] = function(t, n) {
                        var i;
                        return Object(r.a)({}, t, ((i = {})[e] = n.data, i))
                    }, t["REMOVE_PROPERTY_" + e.toUpperCase()] = function(t) {
                        return Object(r.a)({}, Object(i.V)([e], t))
                    }, t
                },
                p = function(e) {
                    var t;
                    return (t = {})["getProperty" + l(e)] = function(t) {
                        return t[e]
                    }, t
                },
                m = function(e) {
                    var t;
                    return (t = {})["setProperty" + l(e)] = a("SET_PROPERTY_" + e.toUpperCase(), (function(e, t) {
                        return void 0 === t && (t = {}), {
                            data: e,
                            meta: t
                        }
                    })), t["removeProperty" + l(e)] = a("REMOVE_PROPERTY_" + e.toUpperCase(), (function() {
                        return {
                            propName: e
                        }
                    })), t
                },
                h = function(e, t) {
                    if ("object" !== typeof e || null === e || Array.isArray(e)) throw new Error("bindSelectors expects a plain object with selectors as values.");
                    return Object(i.N)((function(e) {
                        return function(e, t) {
                            return function() {
                                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return e.apply(void 0, [t()].concat(r))
                            }
                        }(e, t)
                    }), e)
                },
                b = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e, n) {
                        return t.reduce((function(e, t) {
                            return t(e, n)
                        }), e)
                    }
                }
        },
        17: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r.a
            })), n.d(t, "d", (function() {
                return r.b
            })), n.d(t, "e", (function() {
                return r.c
            })), n.d(t, "b", (function() {
                return i.a
            })), n.d(t, "f", (function() {
                return i.g
            })), n.d(t, "a", (function() {
                return h
            }));
            var r = n(46),
                i = n(57),
                o = n(1),
                a = n(8),
                c = n(2),
                u = n(3),
                s = n(6),
                d = n(18),
                l = n(31),
                f = n(88),
                p = n(139),
                m = function(e) {
                    return s.j(e).some((function(e) {
                        return "form" === e.type && e.properties.fields.some((function(e) {
                            return "group_chooser" === e.type
                        }))
                    }))
                },
                h = function(e) {
                    var t = Object(a.u)(Object(l.c)(e, (function(e) {
                        return Object(p.a)(e, "maximized")
                    })), Object(a.x)(1), Object(a.g)(Boolean));
                    Object(a.u)(t, Object(a.A)(1), Object(a.g)((function() {
                        return !Math.floor(1e3 * Math.random())
                    })), Object(a.h)((function() {
                        return function(e) {
                            Object(i.h)({
                                isMessagingModeEnabled: s.E(e),
                                isCustomerInvited: s.y(e, u.c),
                                groupAvailability: e.getApplicationState().availability,
                                minimizedType: s.l(e)
                            })
                        }(e)
                    }))), Object(a.u)(Object(l.a)(e), Object(a.h)((function() {
                        return function(e) {
                            var t = e.getApplicationState(),
                                n = t.s,
                                r = t.protocol,
                                a = t.embedded,
                                l = t.testGroup,
                                p = t.actingAsDirectLink,
                                h = t.config,
                                b = t.language,
                                g = t.integrationName,
                                v = t.clientChatNumber,
                                y = t.clientVisitNumber,
                                O = h && h.theme && h.theme.name,
                                _ = Object(f.b)() || "none",
                                j = Object(d.e)(),
                                w = s.B(e),
                                x = !!s.w(e, u.c),
                                E = !!e.getSessionUser().email,
                                C = s.y(e, u.c) ? "invitation" : "other",
                                I = s.l(e),
                                T = s.j(e),
                                k = T.find((function(e) {
                                    return !!e.properties.invitation
                                })),
                                S = Object(c.K)(T.filter((function(e) {
                                    return "message" === e.type || "message_draft" === e.type
                                })));
                            Object(i.b)(Object(o.a)({
                                s: n,
                                embedded: a,
                                themeName: O,
                                testGroup: l,
                                uniqueGroups: j,
                                minimizedType: I,
                                language: b || "unknown",
                                lcProtocol: r || "unknown",
                                integrationName: g || "none",
                                mobileBridgeType: _,
                                chatHistoryEnabled: w,
                                hasPreviousChatThreads: x,
                                hasGroupChooser: "lc3" === r ? String(m(e)) : "unknown",
                                hasBeenImmediatelyQueued: "lc3" === r ? String(e.getChat(u.c).properties.queued) : "unknown",
                                isCustomerEmailSet: E,
                                actingAsDirectLink: p,
                                chatWidgetWidth: window.innerWidth,
                                chatWidgetHeight: window.innerHeight,
                                clientChatNumber: v + 1,
                                clientVisitNumber: y,
                                chatSource: C,
                                fromGreeting: !!Object(c.y)(!1, "properties.fromGreeting", S)
                            }, "invitation" === C && k && {
                                greetingId: k.properties.id,
                                greetingUniqueId: k.properties.uniqueId,
                                greetingType: k.properties.type,
                                greetingSubtype: k.properties.subtype,
                                greetingAddon: k.properties.addon || "none"
                            }))
                        }(e)
                    })))
                }
        },
        18: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return c
            })), n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "h", (function() {
                return f
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "f", (function() {
                return m
            })), n.d(t, "i", (function() {
                return h
            })), n.d(t, "d", (function() {
                return b
            }));
            var r = n(11),
                i = n(22),
                o = n(3),
                a = n(6),
                c = function() {
                    var e = Object(r.i)(window.location.search);
                    return parseInt(function() {
                        var e = String(window.location).match(/licen(?:s|c)e\/g?(\d+)/);
                        return e ? e[1] : null
                    }() || e.license, 10)
                },
                u = function(e) {
                    var t = parseInt(e, 10);
                    return t > -1 ? t : null
                },
                s = function(e) {
                    return "group" in e ? u(e.group) : "groups" in e ? u(e.groups) : null
                },
                d = function() {
                    return "1" === Object(r.h)("custom_identity_provider", window.location.search)
                },
                l = function() {
                    return "1" === Object(r.h)("unique_groups", window.location.search) || "1" === Object(r.h)("unique_group", window.location.search)
                },
                f = function(e, t, n) {
                    void 0 === n && (n = {});
                    var r = n,
                        i = r.name,
                        c = void 0 === i ? function(e) {
                            var t = e.getSessionUser().name;
                            return t || e.localize("client")
                        }(e) : i,
                        u = r.agent,
                        s = void 0 === u ? function(e) {
                            return Object(a.c)(o.c, e).name
                        }(e) : u;
                    return t.replace(/%name%/g, c).replace(/%agent%/g, s)
                },
                p = function(e) {
                    return Object(i.b)(e) > .7
                },
                m = function(e) {
                    return Object(i.b)(e) <= .179
                },
                h = function(e, t) {
                    var n = t.split(" "),
                        r = 0,
                        i = !1,
                        o = n.map((function(t) {
                            return !i && t.length + r < e ? (r += t.length + 1, t) : (i = !0, null)
                        })).filter((function(e) {
                            return "string" === typeof e
                        })).join(" ");
                    return i ? o + "..." : o
                },
                b = function(e) {
                    var t, n, r = "feade1d6c3f17748ae4c8d917a1e1068",
                        i = Boolean(null == (t = e.properties.group[r]) ? void 0 : t.forwardTicketFormToHelpdesk),
                        o = e.__unsafeProperties.license.inboundForwardingToHelpdeskEnabled,
                        a = null == (n = e.properties.license[r]) ? void 0 : n.hdLicenseID;
                    return "number" === typeof a && a > -1 && (i || o) ? "helpdesk" : e.__unsafeProperties.group.offlineMessagesEnabled ? "offline_message" : "livechat"
                }
        },
        185: function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(0),
                o = n(5),
                a = n(12),
                c = function(e) {
                    return e.stopPropagation()
                },
                u = Object(o.D)("a", {
                    target: "ecc17ou0"
                })("color:inherit;&:focus{outline-offset:-1px;}");
            t.a = function(e) {
                var t = Object(a.f)();
                return i.createElement(u, Object(r.a)({
                    rel: "nofollow noopener",
                    target: "_blank",
                    textWrap: !0
                }, e, {
                    onClick: c
                }, t))
            }
        },
        187: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            }));
            var r = n(4),
                i = n(1),
                o = n(0),
                a = n(5),
                c = n(25),
                u = n(12),
                s = n(188),
                d = n(22),
                l = function(e) {
                    return Object(a.z)("color:", e.colors.grayscale[500], ";background-color:", e.colors.grayscale[100], ";")
                },
                f = function(e, t, n) {
                    return e ? t.grayscale[100] : n
                },
                p = Object(a.D)("button", {
                    displayType: "Button",
                    target: "esv0owm0"
                })("font-size:inherit;font-weight:bold;border:0;font-family:inherit;width:100%;max-width:320px;flex-shrink:0;cursor:pointer;display:flex;justify-content:center;align-items:center;outline-offset:2px;", (function(e) {
                    var t = e.capitalize,
                        n = e.textColor,
                        r = e.backgroundColor,
                        o = e.disabled,
                        a = e.dark,
                        c = e.theme,
                        u = c.spaceBase,
                        s = c.typography,
                        l = c.borderRadius,
                        p = c.colors;
                    return Object(i.a)({
                        borderRadius: l.def
                    }, s.basicContrast, {
                        padding: 1.5 * u + "px",
                        color: n,
                        backgroundColor: "" + (a ? Object(d.a)(.2, r) : f(o, p, r))
                    }, o ? {
                        ":hover": {
                            cursor: "default"
                        }
                    } : {}, t ? {
                        textTransform: "capitalize"
                    } : {})
                }), " ", (function(e) {
                    var t = e.disabled,
                        n = e.theme;
                    return t && l(n)
                })),
                m = Object(a.D)("div", {
                    target: "esv0owm1"
                })("display:flex;margin-left:0.5em;"),
                h = Object(a.D)("div", {
                    target: "esv0owm2"
                })();
            t.a = Object(c.b)((function(e) {
                var t = e.children,
                    n = e.destructive,
                    a = e.disabled,
                    c = void 0 !== a && a,
                    d = e.pending,
                    l = void 0 !== d && d,
                    f = e.theme,
                    b = Object(r.a)(e, ["children", "destructive", "disabled", "pending", "theme"]),
                    g = n ? f.colors.error : f.colors.cta,
                    v = n ? f.colors.text.white : f.colors.ctaText,
                    y = Object(u.f)();
                return o.createElement(p, Object(i.a)({}, y, b, {
                    disabled: c,
                    dark: l,
                    textColor: v,
                    backgroundColor: g
                }), o.createElement(h, {
                    ellipsis: !0
                }, t), l && o.createElement(m, {
                    "aria-hidden": !0
                }, o.createElement(s.a, {
                    size: "small",
                    adjustToColor: g
                })))
            }))
        },
        188: function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(4),
                o = n(0),
                a = n(5),
                c = n(12),
                u = n(25),
                s = n(18),
                d = n(22),
                l = Object(a.C)("0%{transform:rotate(-90deg);}100%{transform:rotate(270deg);}"),
                f = Object(a.D)("circle", {
                    target: "e5pj4iq0"
                })("animation-duration:1s;transform-origin:center;animation-name:", (function(e) {
                    return t = e.animationFactor, Object(a.C)("0%{stroke-dasharray:", 22 * t, " ", 1e3 * t, ";}50%{stroke-dasharray:", 88 * t, " ", 1e3 * t, ";}100%{stroke-dasharray:", 22 * t, " ", 1e3 * t, ";}");
                    var t
                }), ",", l, ";animation-iteration-count:infinite;animation-timing-function:linear;"),
                p = Object(a.D)("circle", {
                    target: "e5pj4iq1"
                })("stroke-dasharray:130;transform-origin:center;transform:rotate(-90deg);transition:stroke-dashoffset 100ms ", (function(e) {
                    return e.theme.transitions.easings.linear
                }), ";"),
                m = {
                    r: "28",
                    cx: "32",
                    cy: "32",
                    fill: "none",
                    strokeLinecap: "round"
                },
                h = {
                    small: {
                        sideLength: 16,
                        strokeWidth: 2
                    },
                    medium: {
                        sideLength: 24,
                        strokeWidth: 3
                    },
                    large: {
                        sideLength: 32,
                        strokeWidth: 4
                    },
                    xlarge: {
                        sideLength: 56,
                        strokeWidth: 4
                    }
                },
                b = Object(a.D)("svg", {
                    target: "e5pj4iq2"
                })(),
                g = Object(u.b)((function(e) {
                    var t = e.size,
                        n = e.theme,
                        a = e.adjustToColor,
                        u = void 0 === a ? n.colors.surface.light : a,
                        l = e.ariaLabel,
                        g = e.progress,
                        v = Object(i.a)(e, ["size", "theme", "adjustToColor", "ariaLabel", "progress"]),
                        y = Object(s.g)(n.colors.cta) ? Object(d.e)(.6, n.colors.cta) : n.colors.cta,
                        O = Object(s.g)(u) ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
                        _ = Object(s.g)(u) ? y : n.colors.text.white,
                        j = h[t],
                        w = j.sideLength,
                        x = j.strokeWidth,
                        E = l ? {
                            "aria-labelledby": "loader-label"
                        } : {},
                        C = Object(c.f)();
                    return o.createElement(b, Object(r.a)({
                        height: w + "px",
                        width: w + "px",
                        viewBox: "0 0 64 64",
                        role: "img"
                    }, E, v, C), l && o.createElement("title", {
                        id: "loader-label"
                    }, l), o.createElement("circle", Object(r.a)({}, m, {
                        strokeWidth: x,
                        stroke: O,
                        vectorEffect: "non-scaling-stroke"
                    })), void 0 === g ? o.createElement(f, Object(r.a)({}, m, {
                        strokeWidth: x,
                        stroke: _,
                        vectorEffect: "non-scaling-stroke",
                        animationFactor: w / 56
                    })) : o.createElement(p, Object(r.a)({}, m, {
                        strokeWidth: x,
                        stroke: _,
                        vectorEffect: "non-scaling-stroke",
                        style: {
                            strokeDashoffset: 130 - 65 * g
                        }
                    })))
                }));
            t.a = g
        },
        189: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(2),
                i = n(96),
                o = function(e) {
                    var t = {};
                    try {
                        t = JSON.parse(e)
                    } catch (n) {}
                    return t
                },
                a = function(e) {
                    var t, n, a = e.license_properties,
                        c = e.group_properties,
                        u = "1" === c.chat_window.custom_mobile_settings,
                        s = "1" === a.non_profit,
                        d = "3" === a.lc_version,
                        l = d && "1" === a.continuous_chat_widget_enabled,
                        f = Object(r.y)(!1, "properties.group.feade1d6c3f17748ae4c8d917a1e1068.forwardTicketFormToHelpdesk", e),
                        p = "1" === Object(r.y)(!1, "license_properties.helpdesk.inbound_forwarding", e),
                        m = {
                            nonProfitLicense: s,
                            visitorData: Object(r.M)(r.b, e.visitor),
                            features: {
                                helpDesk: {
                                    enabled: f || p,
                                    licenseId: Object(r.y)(null, "properties.license.feade1d6c3f17748ae4c8d917a1e1068.hdLicenseID", e)
                                },
                                fileSharing: {
                                    enabled: e.attachments.enable_for_visitors
                                },
                                agentAvatar: {
                                    enabled: e.chat_window.display_avatar,
                                    showWithMessage: e.chat_window.display_avatar && "modern" !== Object(r.x)("group_properties.chat_window.new_theme.name", e)
                                },
                                continuousChat: {
                                    enabled: l
                                },
                                chatHistory: {
                                    enabled: l || d && "1" === a.customer_history_enabled
                                },
                                rating: {
                                    enabled: e.chat_window.display_rating,
                                    position: "modern" === Object(r.x)("group_properties.chat_window.new_theme.name", e) ? "bottom" : "right"
                                },
                                emailTranscript: {
                                    enabled: e.chat_window.display_transcript_button
                                },
                                logo: {
                                    enabled: e.chat_window.logo.display,
                                    path: Object(i.a)(e.chat_window.logo.path)
                                },
                                facebookButton: {
                                    enabled: Boolean(e.chat_window.social.facebook)
                                },
                                twitterButton: {
                                    enabled: Boolean(e.chat_window.social.twitter)
                                },
                                googlePlusButton: {
                                    enabled: Boolean(e.chat_window.social.plusone)
                                },
                                offlineForm: {
                                    enabled: !e.embedded_chat.hide_when_offline
                                },
                                linksPreview: {
                                    enabled: "1" === c.links_unfurling
                                },
                                preChatForm: {
                                    enabled: e.pre_chat_survey && e.pre_chat_survey.enabled || !1
                                },
                                preChatAfterGreeting: {
                                    enabled: "1" === c.pre_chat_survey_after_greeting
                                },
                                creditCardMasking: {
                                    enabled: e.mask_credit_cards
                                },
                                hideTrademark: {
                                    enabled: "1" === c.chat_window.hide_trademark
                                },
                                hideOnMobile: {
                                    enabled: "1" === c.chat_window.hide_on_mobile
                                },
                                hideOnInit: {
                                    enabled: "1" === c.chat_window.hide_on_init
                                },
                                disableSounds: {
                                    enabled: "1" === c.chat_window.disable_sounds
                                },
                                minimized: {
                                    enabled: "0" === c.chat_window.disable_minimized
                                },
                                mobileMinimized: {
                                    enabled: u ? "0" === c.chat_window.mobile_disable_minimized : "0" === c.chat_window.disable_minimized
                                }
                            },
                            buttons: e.buttons.map((function(e) {
                                return {
                                    id: e.id,
                                    type: e.type,
                                    onlineImage: Object(i.a)(e.online_value),
                                    offlineImage: Object(i.a)(e.offline_value)
                                }
                            })),
                            theme: {
                                color: e.chat_window.theme.color,
                                name: e.chat_window.theme.name,
                                minimized: c.chat_window.theme.minimized,
                                mobileMinimized: u ? c.chat_window.mobile_minimized_theme : c.chat_window.theme.minimized
                            },
                            newTheme: {
                                name: c.chat_window.new_theme.name,
                                iconTheme: "modern" === c.chat_window.new_theme.name ? "modern" : "smooth",
                                agentMessageBackgroundColor: Object(r.y)("#fffff", "group_properties.chat_window.new_theme.agent_message_color_background", e),
                                agentMessageColorText: Object(r.y)("#424d57", "group_properties.chat_window.new_theme.agent_message_color_text", e),
                                backgroundColor: Object(r.y)("#e9eef4", "group_properties.chat_window.new_theme.background_color", e).toLowerCase(),
                                minimizedColorBackground: Object(r.y)("#ffffff", "group_properties.chat_window.new_theme.minimized_color_background", e),
                                minimizedColorIcon: Object(r.y)("#4384F5", "group_properties.chat_window.new_theme.minimized_color_icon", e),
                                minimizedColorText: Object(r.y)("#000000", "group_properties.chat_window.new_theme.minimized_color_text", e),
                                visitorMessageBackgroundColor: Object(r.y)("#4384f5", "group_properties.chat_window.new_theme.visitor_message_color_background", e),
                                visitorMessageColorText: Object(r.y)("#ffffff", "group_properties.chat_window.new_theme.visitor_message_color_text", e),
                                titlebarBackgroundColor: Object(r.y)("#ffffff", "group_properties.chat_window.new_theme.titlebar_background_color", e),
                                titlebarText: Object(r.y)("#424d57", "group_properties.chat_window.new_theme.titlebar_text", e),
                                systemMessageColor: Object(r.y)("#424d57", "group_properties.chat_window.new_theme.system_message_color", e),
                                agentbarBackgroundColor: Object(r.y)("#ffffff", "group_properties.chat_window.new_theme.agentbar_background_color", e),
                                agentbarText: Object(r.y)("#424d57", "group_properties.chat_window.new_theme.agentbar_text", e),
                                ctaColor: Object(r.y)("#427fe1", "group_properties.chat_window.new_theme.cta_color", e),
                                customJson: o(Object(r.x)("group_properties.chat_window.new_theme.custom_json", e))
                            },
                            domainWhitelist: e.domain_whitelist,
                            widgetType: e.embedded_chat.enabled ? "embedded" : "popup",
                            integrations: e.integrations,
                            hasAnyCustomLicenseProperty: Object.keys(e.properties.license).length > 0,
                            language: e.lang,
                            groups: (t = e.skills, n = e.skills_online, Object(r.I)("id", t.map((function(e) {
                                return {
                                    id: e.id,
                                    status: -1 !== n.indexOf(e.id) ? "online" : "offline",
                                    oldButtons: {
                                        onlineImage: Object(i.a)(e.chat_button.online_url),
                                        offlineImage: Object(i.a)(e.chat_button.offline_url)
                                    }
                                }
                            })))),
                            clientLimitExceeded: e.client_limit_exceeded,
                            screenPosition: c.chat_window.screen_position,
                            mobileScreenPosition: u ? c.chat_window.mobile_screen_position : c.chat_window.screen_position
                        };
                    return m.features.facebookButton.enabled && (m.features.facebookButton.path = e.chat_window.social.facebook), m.features.twitterButton.enabled && (m.features.facebookButton.path = e.chat_window.social.twitter), m.features.googlePlusButton.enabled && (m.features.facebookButton.path = e.chat_window.social.plusone), m
                }
        },
        19: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            })), n.d(t, "d", (function() {
                return d
            }));
            var r = n(4),
                i = n(1),
                o = n(2),
                a = n(141);
            n.d(t, "a", (function() {
                return a.a
            })), n.d(t, "c", (function() {
                return a.b
            })), n.d(t, "e", (function() {
                return a.c
            })), n.d(t, "f", (function() {
                return a.d
            })), n.d(t, "g", (function() {
                return a.e
            }));
            var c = {
                    group_select: "select",
                    name: "text",
                    subject: "text"
                },
                u = function(e) {
                    return e.replace(/index[0-9]*_/gi, "")
                },
                s = function(e, t) {
                    var n = Object(o.n)((function(e) {
                        return "groupSelect" === e.meta
                    }), e);
                    return Object.keys(t).reduce((function(r, i) {
                        var a = t[i];
                        if ("rateComment" === i) return r.rateComment = a, r;
                        if ("rating" === i) return r.rate = null === a ? a : u(a), r;
                        var c = Object(o.n)((function(e) {
                                return e.name === i
                            }), e),
                            s = c.serverName;
                        return n && s && s === n.serverName && (r.choosenGroupIndex = t[n.name].match(/index([0-9]*)_/)[1], r.choosenGroup = parseInt(u(a), 10)), c.options ? r.fields[s] = Object(o.D)(a) ? a.map(u) : u(a) : r.fields[s] = a, r
                    }), {
                        fields: {}
                    })
                },
                d = function(e, t) {
                    return Object(i.a)({}, t, {
                        id: "ticket" === e ? "ticket" : t.id,
                        type: e,
                        fields: t.fields.reduce((function(e, t) {
                            var n = t.name,
                                a = Object(r.a)(t, ["name"]),
                                u = Object(i.a)({}, a, {
                                    type: c[a.type] || a.type,
                                    serverType: a.type
                                });
                            if (u.options) {
                                u.options = u.options.map((function(e, t) {
                                    return Object(i.a)({}, e, {
                                        value: "index" + t + "_" + e.value,
                                        originalValue: e.value
                                    })
                                }));
                                var s = u.options.filter((function(e) {
                                    return e.checked
                                }));
                                s.length && (u.defaultValue = s.map((function(e) {
                                    return e.value
                                })))
                            }
                            if ("information" === a.type && (u.value = u.value.replace(/<br(\s)?(\/)?>/gi, "\n")), "group_select" === a.type && (u.meta = "groupSelect", u.options = u.options.map((function(e) {
                                    return Object(i.a)({}, e, {
                                        groupNumber: parseInt(e.originalValue, 10)
                                    })
                                }))), n && (u.serverName = n), "name" === a.type) u.name = "name";
                            else if ("email" === a.type) u.name = "email";
                            else {
                                if ("rating" === a.type) return u.name = "rating", [].concat(e, [u, {
                                    name: "rateComment",
                                    type: "textarea",
                                    label: u.commentLabel,
                                    required: !1,
                                    dependOn: "rating"
                                }]);
                                n && (u.name = Object(o.v)() + "_" + n)
                            }
                            return [].concat(e, [u])
                        }), [])
                    })
                }
        },
        190: function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(4),
                o = n(0),
                a = n(5),
                c = n(186),
                u = n.n(c),
                s = n(42),
                d = function(e) {
                    return e.stopPropagation()
                },
                l = Object(a.z)("color:inherit;"),
                f = function(e) {
                    var t = e.children,
                        n = Object(i.a)(e, ["children"]);
                    return o.createElement("a", Object(r.a)({}, n, {
                        onClick: d,
                        className: l,
                        rel: "nofollow noopener",
                        target: "_blank"
                    }), t)
                };
            t.a = function(e) {
                var t = e.text,
                    n = e.url,
                    r = e.eventId;
                return o.createElement(a.m, r && {
                    id: r
                }, n ? o.createElement(f, {
                    href: n
                }, o.createElement(s.a, null, t)) : o.createElement(u.a, {
                    component: f
                }, o.createElement(s.a, null, t)))
            }
        },
        191: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(60),
                i = function(e, t, n) {
                    void 0 === n && (n = {});
                    var i = n.attempts || 3,
                        o = n.retryDelay || 1e3;
                    return new Promise((function(n, a) {
                        ! function c() {
                            var u;
                            Object(r.a)(e, t).then((function(e) {
                                if (400 !== e.status && 422 !== e.status) {
                                    if (!e.ok) throw new Error({
                                        type: "connection",
                                        reason: "Request failed"
                                    });
                                    n(e)
                                } else e.json().then(a).catch(a)
                            })).catch((function(e) {
                                return i ? (--i, setTimeout((function() {
                                    c()
                                }), o)) : a(e)
                            })), (u = 15e3, new Promise((function(e) {
                                setTimeout(e, u)
                            }))).then((function() {
                                a({
                                    type: "connection",
                                    reason: "Request timeout"
                                })
                            }))
                        }()
                    }))
                }
        },
        192: function(e, t, n) {
            "use strict";
            var r = n(0),
                i = n(5),
                o = Object(i.D)("div", {
                    target: "erkouar0"
                })("max-width:300px;max-height:300px;"),
                a = Object(i.D)("img", {
                    target: "erkouar1"
                })("display:block;width:auto;height:auto;max-width:100%;max-height:100%;");
            t.a = function(e) {
                var t = e.url,
                    n = e.name;
                return r.createElement(o, null, r.createElement(a, {
                    alt: n,
                    src: t
                }))
            }
        },
        193: function(e, t, n) {
            "use strict";
            var r = n(5),
                i = Object(r.D)("div", {
                    target: "e7yhn050"
                })("background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";");
            t.a = i
        },
        194: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return p
            })), n.d(t, "a", (function() {
                return l
            }));
            var r = n(0),
                i = n(5),
                o = n(1),
                a = n(4),
                c = ["0px, 0px", "0px, -8px", "0px, -10px", "0px, -6px", "0px, -2px", "0px, 3px", "0px, 2px", "0px, -1px"],
                u = [
                    ["0%, 66.67%, 100%", "6.67%", "13.33%, 20%", "26.67%", "33.33%", "40%", "46.67%", "53.33%"],
                    ["0%, 6.67%, 73.33%, 100%", "13.33%", "20%, 26.67%", "33.33%", "40%", "46.67%", "53.33%", "60%"],
                    ["0%, 13.33%, 80%, 100%", "20%", "26.67%, 33.33%", "40%", "46.67%", "53.33%", "60%", "66.67%"]
                ].map((function(e) {
                    return Object(i.C)(e.map((function(e, t) {
                        return e + " { transform: translate(" + c[t] + "); }"
                    })))
                })),
                s = Object(i.D)("circle", {
                    target: "epoxe490"
                })("transform-box:fill-box;transform-origin:50% 50%;animation-timing-function:", (function(e) {
                    return e.theme.transitions.easings.linear
                }), ";animation-name:", (function(e) {
                    return e.animationName
                }), ";animation-duration:", (function(e) {
                    return (e.animationDuration || 1.5) + "s"
                }), ";animation-iteration-count:", (function(e) {
                    return e.animationIterationCount || "infinite"
                }), ";"),
                d = n(25),
                l = Object(d.b)((function(e) {
                    var t = e.height,
                        n = e.width,
                        i = e.theme,
                        c = e.animationDuration,
                        d = e.animationIterationCount,
                        l = e.color,
                        f = void 0 === l ? i.colors.text.black : l,
                        p = Object(a.a)(e, ["height", "width", "theme", "animationDuration", "animationIterationCount", "color"]);
                    return r.createElement("svg", Object(o.a)({
                        viewBox: "0 0 60 40",
                        height: t,
                        width: n,
                        fill: f
                    }, p), u.map((function(e, t) {
                        return r.createElement(s, {
                            r: "6",
                            cy: "20",
                            key: t,
                            cx: 9 + 21 * t,
                            animationName: e,
                            animationDuration: c,
                            animationIterationCount: d
                        })
                    })))
                })),
                f = (n(105), Object(i.z)("overflow:hidden;margin-bottom:0;")),
                p = Object(d.b)((function(e) {
                    var t = e.avatar,
                        n = e.theme;
                    return r.createElement(i.j, {
                        avatar: t,
                        className: f
                    }, r.createElement(i.i, null, r.createElement(i.c, null, r.createElement(i.m, null, r.createElement(l, {
                        height: "16px",
                        width: "24px",
                        color: n.colors.agentMessageText
                    })))))
                }))
        },
        196: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n(4),
                i = n(1),
                o = n(0),
                a = n(5),
                c = Object(a.D)(a.h, {
                    target: "e1f2pv4c0"
                })("width:100%;height:100%;display:block;object-fit:", (function(e) {
                    return e.scaleImage ? "cover" : "fill"
                }), ";"),
                u = Object(a.D)("div", {
                    displayName: "ImagePreview",
                    target: "e1f2pv4c1"
                })("display:flex;margin:0 auto;align-items:center;justify-content:center;overflow:hidden;background:", (function(e) {
                    return e.theme.colors.divider
                }), ";color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";", (function(e) {
                    var t = e.dimensions;
                    return Object(i.a)({}, t)
                })),
                s = function(e) {
                    return e.stopPropagation()
                },
                d = function(e) {
                    var t = e.children,
                        n = Object(r.a)(e, ["children"]);
                    return o.createElement("a", Object(i.a)({}, n, {
                        onClick: s,
                        rel: "noopener noreferrer nofollow",
                        target: "_blank"
                    }), t)
                },
                l = function(e) {
                    var t = e.link,
                        n = e.url,
                        a = e.width,
                        s = e.height,
                        l = e.maxWidth,
                        f = e.maxHeight,
                        p = e.srcSet,
                        m = e.alternativeText,
                        h = void 0 === m ? "" : m,
                        b = e.name,
                        g = void 0 === b ? "" : b,
                        v = Object(r.a)(e, ["link", "url", "width", "height", "maxWidth", "maxHeight", "srcSet", "alternativeText", "name"]),
                        y = !!a || !!s,
                        O = function(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.width,
                                r = void 0 === n ? 230 : n,
                                i = t.height,
                                o = void 0 === i ? 150 : i,
                                a = t.maxWidth,
                                c = void 0 === a ? 200 : a,
                                u = t.maxHeight,
                                s = void 0 === u ? 300 : u,
                                d = r / o;
                            return r > c && (o = (r = c) / d), o > s && (r = (o = s) * d), {
                                width: r,
                                height: o
                            }
                        }({
                            width: a,
                            height: s,
                            maxWidth: l,
                            maxHeight: f
                        });
                    return o.createElement(d, {
                        href: t || n
                    }, o.createElement(u, {
                        dimensions: O
                    }, o.createElement(c, Object(i.a)({}, v, {
                        alt: h || g,
                        src: n,
                        srcSet: p,
                        scaleImage: !y
                    }))))
                }
        },
        197: function(e, t, n) {
            "use strict";
            var r = n(0),
                i = n(5),
                o = n(190),
                a = n(25),
                c = n(51),
                u = n(1),
                s = n(12),
                d = Object(i.D)("div", {
                    target: "e1faam640"
                })("display:flex;flex-direction:row;align-items:center;"),
                l = Object(i.D)("span", {
                    target: "e1faam641"
                })((function(e) {
                    return e.theme.typography.caption
                }), ";color:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";"),
                f = Object(i.D)("button", {
                    target: "e1faam642"
                })("background:none;border:none;cursor:pointer;appearance:none;", (function(e) {
                    return e.theme.typography.caption
                }), ";color:", (function(e) {
                    return e.theme.colors.cta
                }), ";"),
                p = function(e) {
                    var t = e.visible,
                        n = e.onToggle,
                        i = Object(s.f)();
                    return r.createElement(d, null, t && r.createElement(l, null, "Text translated"), r.createElement(f, Object(u.a)({}, i, {
                        onClick: function(e) {
                            e.stopPropagation(), n()
                        }
                    }), t ? "Show original" : "Show translation"))
                },
                m = function(e) {
                    return "smooth" === e.name ? Object(i.z)("color:", e.colors.text.black, ";background-color:", e.colors.grayscale[100], ";") : Object(i.z)("color:", e.colors.text.muted, ";")
                },
                h = Object(i.z)("font-style:italic;");
            t.a = Object(a.b)((function(e) {
                var t = e.text,
                    n = e.url,
                    a = e.theme,
                    u = e.translation,
                    s = e.radiusType,
                    d = void 0 === s ? "single" : s,
                    l = e.draft,
                    f = void 0 !== l && l,
                    b = e.own,
                    g = void 0 !== b && b,
                    v = e.eventId,
                    y = void 0 === v ? "" : v,
                    O = Object(c.w)(!g),
                    _ = O[0],
                    j = O[1];
                return r.createElement(r.Fragment, null, r.createElement(i.c, {
                    radiusType: d,
                    className: Object(i.A)(f && m(a), !!u && _ && h)
                }, r.createElement(o.a, {
                    text: u && _ ? u.targetMessage : t,
                    url: n,
                    eventId: y
                })), u && r.createElement(p, {
                    visible: _,
                    onToggle: j
                }))
            }))
        },
        2: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return e + t
            }
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "e", (function() {
                return p
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "f", (function() {
                return h
            })), n.d(t, "g", (function() {
                return b
            })), n.d(t, "h", (function() {
                return g
            })), n.d(t, "i", (function() {
                return y
            })), n.d(t, "j", (function() {
                return O
            })), n.d(t, "k", (function() {
                return _
            })), n.d(t, "l", (function() {
                return j
            })), n.d(t, "n", (function() {
                return w
            })), n.d(t, "o", (function() {
                return x
            })), n.d(t, "p", (function() {
                return E
            })), n.d(t, "q", (function() {
                return C
            })), n.d(t, "r", (function() {
                return T
            })), n.d(t, "m", (function() {
                return k
            })), n.d(t, "s", (function() {
                return u
            })), n.d(t, "t", (function() {
                return z
            })), n.d(t, "u", (function() {
                return A
            })), n.d(t, "v", (function() {
                return M
            })), n.d(t, "w", (function() {
                return R
            })), n.d(t, "x", (function() {
                return L
            })), n.d(t, "y", (function() {
                return P
            })), n.d(t, "z", (function() {
                return D
            })), n.d(t, "A", (function() {
                return o
            })), n.d(t, "B", (function() {
                return S
            })), n.d(t, "C", (function() {
                return N
            })), n.d(t, "D", (function() {
                return d
            })), n.d(t, "E", (function() {
                return q
            })), n.d(t, "F", (function() {
                return v
            })), n.d(t, "G", (function() {
                return l
            })), n.d(t, "H", (function() {
                return B
            })), n.d(t, "I", (function() {
                return U
            })), n.d(t, "J", (function() {
                return V
            })), n.d(t, "K", (function() {
                return F
            })), n.d(t, "M", (function() {
                return H
            })), n.d(t, "N", (function() {
                return f
            })), n.d(t, "O", (function() {
                return G
            })), n.d(t, "R", (function() {
                return W
            })), n.d(t, "S", (function() {
                return Y
            })), n.d(t, "P", (function() {
                return K
            })), n.d(t, "Q", (function() {
                return J
            })), n.d(t, "T", (function() {
                return X
            })), n.d(t, "U", (function() {
                return Q
            })), n.d(t, "V", (function() {
                return ee
            })), n.d(t, "W", (function() {
                return te
            })), n.d(t, "X", (function() {
                return $
            })), n.d(t, "Y", (function() {
                return ne
            })), n.d(t, "Z", (function() {
                return ie
            })), n.d(t, "ab", (function() {
                return oe
            })), n.d(t, "bb", (function() {
                return ae
            })), n.d(t, "cb", (function() {
                return ce
            })), n.d(t, "db", (function() {
                return ue
            })), n.d(t, "eb", (function() {
                return se
            })), n.d(t, "fb", (function() {
                return de
            })), n.d(t, "gb", (function() {
                return le
            })), n.d(t, "hb", (function() {
                return pe
            })), n.d(t, "ib", (function() {
                return he
            })), n.d(t, "jb", (function() {
                return be
            })), n.d(t, "kb", (function() {
                return ge
            })), n.d(t, "mb", (function() {
                return ve
            })), n.d(t, "nb", (function() {
                return Oe
            })), n.d(t, "ob", (function() {
                return ye
            })), n.d(t, "pb", (function() {
                return _e
            })), n.d(t, "qb", (function() {
                return je
            })), n.d(t, "rb", (function() {
                return we
            })), n.d(t, "sb", (function() {
                return xe
            })), n.d(t, "tb", (function() {
                return Ee
            })), n.d(t, "L", (function() {
                return Ce
            })), n.d(t, "lb", (function() {
                return Ie
            })), n.d(t, "vb", (function() {
                return ke
            })), n.d(t, "ub", (function() {
                return ze
            })), n.d(t, "wb", (function() {
                return Ae
            })), n.d(t, "xb", (function() {
                return Me
            })), n.d(t, "yb", (function() {
                return Z
            })), n.d(t, "zb", (function() {
                return Le
            })), n.d(t, "Ab", (function() {
                return Re
            }));
            var i = {}.hasOwnProperty;

            function o(e, t) {
                return i.call(t, e)
            }

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return n.forEach((function(t) {
                        for (var n in t) o(n, t) && (e[n] = t[n])
                    })), e
                }).apply(void 0, arguments)
            }
            var c = function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            };

            function u(e, t) {
                var n;
                return (n = []).concat.apply(n, t.map(e))
            }

            function s(e, t) {
                for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
                return n
            }
            var d = Array.isArray;

            function l(e) {
                return "object" === typeof e && null !== e && !d(e)
            }

            function f(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return n[r] = e(t[r]), n
                }), {})
            }

            function p(e) {
                return d(e) ? e.map(p) : l(e) ? f(p, e) : e
            }

            function m(e) {
                var t = e.trim();
                return 0 === t.length ? "" : 1 === t.length ? t.toLowerCase() : /^[a-z\d]+$/.test(t) ? t : (t !== t.toLowerCase() && (t = function(e) {
                    for (var t = e, n = !1, r = !1, i = !1, o = 0; o < t.length; o++) {
                        var a = t[o];
                        n && /[a-zA-Z]/.test(a) && a.toUpperCase() === a ? (t = t.slice(0, o) + "-" + t.slice(o), n = !1, i = r, r = !0, o++) : r && i && /[a-zA-Z]/.test(a) && a.toLowerCase() === a ? (t = t.slice(0, o - 1) + "-" + t.slice(o - 1), i = r, r = !1, n = !0) : (n = a.toLowerCase() === a, i = r, r = a.toUpperCase() === a)
                    }
                    return t
                }(t)), t = t.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (function(e, t) {
                    return t.toUpperCase()
                })))
            }

            function h(e) {
                return d(e) ? e.filter((function(e) {
                    return null !== e && void 0 !== e
                })) : Object.keys(e).reduce((function(t, n) {
                    var r = e[n];
                    return null !== r && void 0 !== r && (t[n] = r), t
                }), {})
            }

            function b() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }

            function g(e, t) {
                var n;
                return function() {
                    clearTimeout(n);
                    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    n = setTimeout.apply(void 0, [t, e].concat(i))
                }
            }

            function v(e) {
                return null === e || void 0 === e
            }

            function y(e) {
                return function(t) {
                    return v(t) ? e : t
                }
            }

            function O(e, t) {
                return t.slice(0, -e)
            }

            function _(e) {
                return d(e) ? e : [e]
            }

            function j(e) {
                return Object.keys(e).map((function(t) {
                    return [t, e[t]]
                }))
            }

            function w(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (e(r)) return r
                }
            }

            function x(e, t) {
                for (var n = 0; n < t.length; n++)
                    if (e(t[n])) return n;
                return -1
            }

            function E(e, t) {
                return w((function(n) {
                    return e(t[n])
                }), Object.keys(t))
            }

            function C(e, t) {
                for (var n = t.length - 1; n >= 0; n--)
                    if (e(t[n])) return t[n]
            }

            function I(e, t, n) {
                for (var r = t; r >= 0; r--)
                    if (e(n[r])) return r;
                return -1
            }

            function T(e, t) {
                return I(e, t.length - 1, t)
            }

            function k(e, t) {
                for (var n = []; e--;) n.push(t);
                return n
            }

            function S(e) {
                return e
            }

            function z(e, t) {
                return Object.keys(t).forEach((function(n) {
                    e(t[n], n)
                }))
            }
            var A = function(e) {
                return e.reduce((function(e, t) {
                    var n = t[0],
                        r = t[1];
                    return e[n] = r, e
                }), {})
            };

            function M() {
                return Math.random().toString(36).substring(2)
            }

            function R(e) {
                var t = M();
                return o(t, e) ? R(e) : t
            }

            function L(e, t) {
                for (var n = "string" === typeof e ? e.split(".") : e, r = 0, i = t; i && r < n.length;) i = i[n[r++]];
                return i
            }

            function P(e, t, n) {
                var r = L(t, n);
                return void 0 !== r && null !== r ? r : e
            }

            function D(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    var i = e(r);
                    return n[i] = n[i] || {}, n[i][r] = t[r], n
                }), {})
            }

            function N(e, t) {
                return -1 !== t.indexOf(e)
            }

            function q(e) {
                return 0 === (d(e) ? e : Object.keys(e)).length
            }
            var B = function(e) {
                return !!e && "function" === typeof e.then
            };

            function U(e, t) {
                return t.reduce((function(t, n) {
                    return t[n[e]] = n, t
                }), {})
            }

            function V(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }

            function F(e) {
                return e.length > 0 ? e[e.length - 1] : null
            }

            function H(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return n[e(r)] = t[r], n
                }), {})
            }

            function G(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return n[r] = e(t[r], r), n
                }), {})
            }

            function W(e, t) {
                if (q(t)) return e;
                var n = {};
                return z((function(r, i) {
                    if (o(i, t))
                        if (l(e[i]) && l(t[i])) n[i] = W(e[i], t[i]);
                        else if (d(e[i]) && d(t[i])) {
                        var a = Math.max(e[i].length, t[i].length);
                        n[i] = new Array(a);
                        for (var c = 0; c < a; c++) c in t[i] ? n[i][c] = t[i][c] : c in e[i] && (n[i][c] = e[i][c])
                    } else n[i] = t[i];
                    else n[i] = e[i]
                }), e), z((function(e, r) {
                    o(r, n) || (n[r] = t[r])
                }), t), n
            }

            function Y(e) {
                if (0 === e.length) return {};
                var t = e[0];
                return e.slice(1).reduce((function(e, t) {
                    return W(e, t)
                }), t)
            }

            function K(e) {
                return function(e, t) {
                    var n = {};
                    return function() {
                        var r = e.apply(void 0, arguments);
                        if (o(r, n)) return n[r];
                        var i = t.apply(void 0, arguments);
                        return n[r] = i, i
                    }
                }(S, e)
            }

            function J(e) {
                var t, n, r = !1;
                return function() {
                    return r && (arguments.length <= 0 ? void 0 : arguments[0]) === n ? t : (r = !0, n = arguments.length <= 0 ? void 0 : arguments[0], t = e.apply(void 0, arguments))
                }
            }

            function X() {}

            function Z(e) {
                return Object.keys(e).map((function(t) {
                    return e[t]
                }))
            }

            function Q(e, t) {
                var n = "function" === typeof e ? e : function(t) {
                    return L(e, t)
                };
                return (d(t) ? [].concat(t) : Z(t)).sort((function(e, t) {
                    return n(e) - n(t)
                }))
            }

            function $(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return e(t[r], r) || (n[r] = t[r]), n
                }), {})
            }

            function ee(e, t) {
                return $((function(t, n) {
                    return -1 !== e.indexOf(n)
                }), t)
            }

            function te(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return e(t[r]) || (n[r] = t[r]), n
                }), {})
            }

            function ne(e) {
                var t, n = !1;
                return function() {
                    return n ? t : (n = !0, t = e.apply(void 0, arguments))
                }
            }

            function re(e, t) {
                return [e, t]
            }

            function ie(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return n[e(t[r]) ? 0 : 1][r] = t[r], n
                }), [{}, {}])
            }

            function oe(e, t) {
                return e.reduce((function(e, n) {
                    return e[n] = t[n], e
                }), {})
            }

            function ae(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return e(t[r]) && (n[r] = t[r]), n
                }), {})
            }

            function ce(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return e(t[r], r) && (n[r] = t[r]), n
                }), {})
            }

            function ue(e, t) {
                return e.reduce((function(e, n) {
                    return o(n, t) && (e[n] = t[n]), e
                }), {})
            }

            function se(e) {
                for (var t = [], n = 0; n <= e;) t.push(n++);
                return t
            }

            function de(e, t) {
                return t.filter((function(t) {
                    return !e(t)
                }))
            }

            function le(e, t) {
                var n = [].concat(t);
                return n.splice(e, 1), n
            }
            var fe = n(1);

            function pe(e, t, n) {
                var r, i = e.split ? e.split(".") : e,
                    a = i[0],
                    c = t;
                if (i.length > 1) {
                    var u = null != n && o(a, n) ? n[a] : {};
                    c = pe(i.slice(1), t, u)
                }
                return Object(fe.a)({}, n, ((r = {})[a] = c, r))
            }

            function me(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
            }

            function he(e, t) {
                if (me(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (var i = 0; i < n.length; i++)
                    if (!o(n[i], t) || !me(e[n[i]], t[n[i]])) return !1;
                return !0
            }

            function be(e) {
                return "number" !== typeof e || isNaN(e) ? NaN : 0 === e ? 0 : -0 === e ? -0 : e > 0 ? 1 : -1
            }

            function ge(e, t) {
                return [t.slice(0, e), t.slice(e, t.length)]
            }

            function ve(e) {
                return e.reduce(r, 0)
            }

            function ye(e, t, n) {
                var r = I((function(t) {
                    return !e(t)
                }), t, n);
                return r === t ? [] : n.slice(r + 1, t + 1)
            }

            function Oe(e, t) {
                return ye(e, t.length - 1, t)
            }

            function _e(e, t) {
                var n, r = Date.now() - 2 * e,
                    i = function() {
                        r = Date.now(), t.apply(void 0, arguments)
                    };
                return function() {
                    for (var t = Date.now(), o = arguments.length, a = new Array(o), c = 0; c < o; c++) a[c] = arguments[c];
                    t - r >= e ? i.apply(void 0, a) : (clearTimeout(n), n = setTimeout.apply(void 0, [i, r - t + e].concat(a)))
                }
            }

            function je(e) {
                return Array.prototype.slice.call(e)
            }
            var we = function(e, t) {
                    return Number(e.toFixed(t))
                },
                xe = function(e) {
                    return Object.keys(e).map((function(t) {
                        return [t, e[t]]
                    }))
                };

            function Ee(e, t) {
                var n, r = Date.now() - 2 * e,
                    i = function() {
                        return r = Date.now(), t.apply(void 0, arguments)
                    };
                return function() {
                    var t = Date.now();
                    t - r >= e && (r = Date.now()), clearTimeout(n);
                    for (var o = arguments.length, a = new Array(o), c = 0; c < o; c++) a[c] = arguments[c];
                    n = setTimeout.apply(void 0, [i, r - t + e].concat(a))
                }
            }

            function Ce(e, t) {
                var n = 0;
                return function() {
                    var r = Date.now();
                    r - n >= e && (n = Date.now(), t.apply(void 0, arguments))
                }
            }
            var Ie = function(e, t) {
                    return e === t ? 0 : e < t ? -1 : 1
                },
                Te = /^\s+/;

            function ke(e) {
                return e.replace(Te, "")
            }
            var Se = /\s+$/;

            function ze(e) {
                return e.replace(Se, "")
            }

            function Ae(e, t) {
                var n = [];
                return t.filter((function(t) {
                    var r = e(t);
                    return -1 === n.indexOf(r) && (n.push(r), !0)
                }))
            }

            function Me(e, t, n) {
                return [].concat(n.slice(0, e), [t], n.slice(e + 1, n.length))
            }

            function Re(e, t, n) {
                return t.map((function(t, r) {
                    return e(t, n[r])
                }))
            }

            function Le(e, t) {
                return Re(re, e, t)
            }
        },
        20: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "i", (function() {
                return m
            })), n.d(t, "b", (function() {
                return c.a
            }));
            var r = n(2),
                i = function(e, t) {
                    Object(r.t)((function(e, n) {
                        "style" !== n ? t.setAttribute(n, e) : function(e, t) {
                            Object(r.t)((function(e, n) {
                                t.style[n] = e
                            }), e)
                        }(e, t)
                    }), e)
                },
                o = !!document.documentElement.currentStyle,
                a = function(e, t) {
                    var n = window.getComputedStyle(t),
                        i = "border-box" === n.boxSizing,
                        a = Object(r.ab)(e, n);
                    if (o && i && Object(r.A)("width", a) && null !== a.width) {
                        var c = [a.width, n.paddingLeft, n.paddingRight, n.borderLeftWidth, n.borderRightWidth];
                        a.width = Object(r.mb)(c.map(parseFloat)) + "px"
                    }
                    if (o && i && Object(r.A)("height", a) && null !== a.height) {
                        var u = [a.height, n.paddingTop, n.paddingBottom, n.borderTopWidth, n.borderBottomWidth];
                        a.height = Object(r.mb)(u.map(parseFloat)) + "px"
                    }
                    return a
                },
                c = n(66);

            function u(e, t) {
                void 0 === t && (t = document.body);
                var n = Object(c.b)(t),
                    i = Object(r.o)((function(t) {
                        return t === e
                    }), n);
                return n[i === n.length - 1 ? 0 : i + 1]
            }

            function s() {
                return new Promise((function(e) {
                    ! function t() {
                        document.body ? e(document.body) : setTimeout(t, 100)
                    }()
                }))
            }
            var d = null,
                l = function() {
                    if (d) return d;
                    var e = document.createElement("div"),
                        t = e.style;
                    t.width = "50px", t.height = "50px", t.overflow = "scroll", t.direction = "rtl";
                    var n = document.createElement("div"),
                        r = n.style;
                    return r.width = "100px", r.height = "50px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? d = "positive-descending" : (e.scrollLeft = 1, d = 0 === e.scrollLeft ? "negative" : "positive-ascending"), document.body.removeChild(e), d
                };

            function f(e, t) {
                return void 0 === t && (t = 0), Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight) <= t
            }

            function p(e, t) {
                return void 0 === t && (t = 0), e.scrollTop <= t
            }

            function m(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }
        },
        232: function(e, t, n) {
            "use strict";
            t.a = function(e, t, n) {
                var r = void 0 === n ? {} : n,
                    i = r.headers,
                    o = r.method,
                    a = void 0 === o ? "POST" : o,
                    c = r.onProgress,
                    u = r.withCredentials,
                    s = void 0 !== u && u,
                    d = new XMLHttpRequest;
                return {
                    promise: new Promise((function(n, r) {
                        "function" === typeof c && (d.upload.onprogress = function(e) {
                            c(e.loaded / e.total)
                        }), d.onload = function() {
                            var e;
                            try {
                                e = JSON.parse(d.response)
                            } catch (t) {
                                e = d.response
                            }
                            if (d.status >= 200 && d.status < 300) n(e);
                            else {
                                var t = new Error("Upload failed.");
                                t.code = "UPLOAD_FAILED", t.response = e, r(t)
                            }
                        }, d.onerror = function() {
                            var e = new Error("Upload failed.");
                            e.code = "UPLOAD_FAILED", r(e)
                        }, d.onabort = function() {
                            var e = new Error("Upload canceled.");
                            e.code = "UPLOAD_CANCELED", r(e)
                        }, d.open(a, e), d.withCredentials = s, i && Object.keys(i).forEach((function(e) {
                            return d.setRequestHeader(e, i[e])
                        })), d.send(function(e) {
                            var t = new FormData;
                            return Object.keys(e).forEach((function(n) {
                                return t.append(n, e[n])
                            })), t
                        }(t))
                    })),
                    cancel: function() {
                        d.abort()
                    }
                }
            }
        },
        233: function(e, t, n) {
            "use strict";
            var r = n(5),
                i = Object(r.D)("p", {
                    target: "ejp8d810"
                })("margin:1em 0;");
            t.a = i
        },
        24: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "g", (function() {
                return u
            })), n.d(t, "d", (function() {
                return P
            }));
            var r = {};
            n.r(r), n.d(r, "xs", (function() {
                return s
            })), n.d(r, "sm", (function() {
                return d
            })), n.d(r, "md", (function() {
                return l
            })), n.d(r, "lg", (function() {
                return f
            })), n.d(r, "xl", (function() {
                return p
            })), n.d(r, "none", (function() {
                return m
            })), n.d(r, "round", (function() {
                return h
            })), n.d(r, "def", (function() {
                return b
            }));
            var i = {};
            n.r(i), n.d(i, "caution", (function() {
                return g
            })), n.d(i, "divider", (function() {
                return v
            })), n.d(i, "border", (function() {
                return y
            })), n.d(i, "error", (function() {
                return O
            })), n.d(i, "success", (function() {
                return _
            })), n.d(i, "accent", (function() {
                return j
            })), n.d(i, "notification", (function() {
                return w
            })), n.d(i, "webkitOutline", (function() {
                return x
            })), n.d(i, "surface", (function() {
                return E
            })), n.d(i, "text", (function() {
                return C
            })), n.d(i, "grayscale", (function() {
                return I
            })), n.d(i, "brand", (function() {
                return T
            }));
            var o = {};
            n.r(o), n.d(o, "xs", (function() {
                return S
            })), n.d(o, "sm", (function() {
                return z
            })), n.d(o, "md", (function() {
                return A
            })), n.d(o, "lg", (function() {
                return M
            })), n.d(o, "floating", (function() {
                return R
            })), n.d(o, "outline", (function() {
                return L
            }));
            var a = {};
            n.r(a), n.d(a, "space0", (function() {
                return B
            })), n.d(a, "space1", (function() {
                return U
            })), n.d(a, "space2", (function() {
                return V
            })), n.d(a, "space3", (function() {
                return F
            })), n.d(a, "space4", (function() {
                return H
            })), n.d(a, "space5", (function() {
                return G
            })), n.d(a, "space6", (function() {
                return W
            })), n.d(a, "space7", (function() {
                return Y
            }));
            var c = {};
            n.r(c), n.d(c, "easings", (function() {
                return K
            }));
            var u = {};
            n.r(u), n.d(u, "heading", (function() {
                return J
            })), n.d(u, "subheading", (function() {
                return X
            })), n.d(u, "input", (function() {
                return Z
            })), n.d(u, "placeholder", (function() {
                return Q
            })), n.d(u, "caption", (function() {
                return $
            })), n.d(u, "basic", (function() {
                return ee
            })), n.d(u, "basicContrast", (function() {
                return te
            })), n.d(u, "errorCaption", (function() {
                return ne
            }));
            var s = "2px",
                d = "4px",
                l = "6px",
                f = "8px",
                p = "12px",
                m = "0px",
                h = "50%",
                b = l,
                g = "#ffd000",
                v = "#e3e3e3",
                y = "#b3b3b3",
                O = "#d93311",
                _ = "#268750",
                j = "#2000f0",
                w = "#e30d34",
                x = "#3b99fc",
                E = {
                    light: "#ffffff",
                    lightVariant: "#f0f0f0",
                    dark: "#252525",
                    darkVariant: "#2e2e2e "
                },
                C = {
                    white: "#ffffff",
                    black: "#111111",
                    muted: "#6E6E6E"
                },
                I = {
                    50: "#f8f8f8",
                    100: "#e3e3e3",
                    200: "#d5d5d5",
                    300: "#c0c0c0",
                    400: "#b3b3b3",
                    500: "#757575",
                    600: "#575757",
                    700: "#2e2e2e",
                    800: "#252525",
                    900: "#111111"
                },
                T = {
                    black: "#1b1b20",
                    orange: "#ff5100"
                },
                k = n(22),
                S = "0px 1px 2px " + Object(k.d)(.1, "rgba(0, 0, 0, 0)"),
                z = "0px 0px 8px " + Object(k.d)(.2, "rgba(0, 0, 0, 0)"),
                A = "0px 1px 10px " + Object(k.d)(.2, "rgba(0, 0, 0, 0)"),
                M = "0px 0px 24px " + Object(k.d)(.2, "rgba(0, 0, 0, 0)"),
                R = "0 4px 12px " + Object(k.d)(.3, "rgba(0, 0, 0, 0)"),
                L = "0 0 0 1px " + j,
                P = function(e) {
                    return e / 16 + "rem"
                },
                D = P(16),
                N = P(14),
                q = P(12),
                B = "0px",
                U = "2px",
                V = "4px",
                F = "8px",
                H = "10px",
                G = "12px",
                W = "16px",
                Y = "24px",
                K = {
                    linear: "cubic-bezier(0, 0, 1, 1)",
                    sharp: "cubic-bezier(0.33, 0, 0, 1)",
                    smooth: "cubic-bezier(0.33, 0, 0.67, 1)",
                    swift: "cubic-bezier(0.14, 0, 0, 1)",
                    spring: "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
                },
                J = {
                    fontSize: D,
                    fontWeight: "bold",
                    color: C.black
                },
                X = {
                    fontSize: N,
                    fontWeight: "bold",
                    color: C.black
                },
                Z = {
                    fontSize: N,
                    fontWeight: "normal",
                    color: C.black
                },
                Q = {
                    fontSize: N,
                    fontWeight: "normal",
                    color: C.muted
                },
                $ = {
                    fontSize: q,
                    fontWeight: "normal",
                    color: C.black
                },
                ee = {
                    fontSize: N,
                    fontWeight: "normal",
                    color: C.black
                },
                te = {
                    fontSize: N,
                    fontWeight: "normal",
                    color: C.white
                },
                ne = {
                    fontSize: q,
                    fontWeight: "normal",
                    color: O
                }
        },
        241: function(e, t, n) {
            e.exports = n.p + "static/media/new_message.c597c3a2.mp3"
        },
        242: function(e, t, n) {
            e.exports = n.p + "static/media/new_message.a37211a6.ogg"
        },
        28: function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(114).a;
            t.a = function() {
                var e = Object.create(null),
                    t = i(e);
                return Object(r.a)({}, t, {
                    off: function(n, r) {
                        n ? t.off(n, r) : Object.keys(e).forEach((function(t) {
                            delete e[t]
                        }))
                    },
                    once: function(e, n) {
                        t.on(e, (function r(i, o) {
                            t.off(e, r), n(i, o)
                        }))
                    }
                })
            }
        },
        3: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "g", (function() {
                return a
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "b", (function() {
                return s
            }));
            var r = "liveChatChatId",
                i = "email_prompt",
                o = "message_draft",
                a = 100,
                c = 20,
                u = 255,
                s = "Invalid `chat.id`"
        },
        31: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return d
            }));
            var r = n(8),
                i = n(2);

            function o(e, t) {
                return Object(r.u)(Object(r.k)(e), Object(r.y)(e.getState()), Object(r.p)(t), Object(r.d)(i.ib))
            }
            var a = function(e, t) {
                    return Object(r.u)(o(e, (function(e) {
                        return e.application.readyState
                    })), Object(r.g)((function(e) {
                        return e === t
                    })), Object(r.A)(1), r.v)
                },
                c = n(9),
                u = n(35),
                s = n(3),
                d = function(e) {
                    return Object(r.u)(a(e, u.a.READY), Object(r.z)((function() {
                        return Object(r.u)(o(e, (function(e) {
                            return Object(c.getChat)(e, s.c).active
                        })), Object(r.x)(1), Object(r.g)(Boolean))
                    })))
                }
        },
        329: function(e, t) {},
        334: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
                window.performance && "function" === typeof window.performance.mark && window.performance.mark("lc_js_loaded")
            };
            r();
            var i, o, a, c = n(181),
                u = n.n(c),
                s = function() {
                    for (var e; i;) {
                        e = i.fn, i = i.next;
                        try {
                            e()
                        } catch (t) {
                            throw i ? a() : o = void 0, t
                        }
                    }
                    o = void 0
                },
                d = window.MutationObserver || window.WebKitMutationObserver;
            if (d) {
                var l = document.createTextNode(""),
                    f = !0;
                new d(s).observe(l, {
                    characterData: !0
                }), a = function() {
                    l.data = f = !f
                }
            } else a = function() {
                setTimeout(s, 0)
            };
            var p = function(e) {
                var t = {
                    fn: e,
                    next: void 0
                };
                o && (o.next = t), i || (i = t, a()), o = t
            };
            /native code/.test(window.Promise) || (window.Promise = u.a, window.Promise._immediateFn = p), "function" !== typeof window.Promise.prototype.finally && (window.Promise.prototype.finally = u.a.prototype.finally);
            n(261), n(279), n(281), n(286), n(291), n(293);
            var m = n(135),
                h = n.n(m),
                b = n(2);
            Object.assign = h.a, "function" !== typeof Array.from && (Array.from = function(e) {
                return [].slice.call(e)
            }), "function" !== typeof Array.prototype.find && (Array.prototype.find = function(e) {
                return Object(b.n)(e, this)
            }), "function" !== typeof Array.prototype.findIndex && (Array.prototype.findIndex = function(e) {
                return Object(b.o)(e, this)
            }), "function" !== typeof Object.values && (Object.values = b.yb), "function" !== typeof Element.prototype.matches && (Element.prototype.matches = Element.prototype.msMatchesSelector);
            var g = n(1),
                v = n(4),
                y = n(17),
                O = n(18),
                _ = new RegExp("(" + ["BetterJsPop", "LOCAL_STORAGE is null", "Can't find variable: auto", "Can't find variable: ext", "Can't find variable: $", "_avast_submit", "No license found in the URL.", "getNewsReadStatus4Vivo", "is banned!"].join("|") + ")"),
                j = new RegExp("(" + ["chrome-extension://", "https://www.smybeds.com/"].join("|") + ")"),
                w = function(e) {
                    return !!(e.message && _.test(e.message) || e.stack && j.test(e.stack))
                };
            window.addEventListener("error", (function(e) {
                var t = e.error;
                if (t)
                    if (t.message && -1 !== t.message.indexOf("evaluating 'document.getElementById('view-chat').innerHTML'")) {
                        var n = Object(O.c)();
                        if (10095588 === n || 7243681 === n) return;
                        Object(y.c)("custom_mobile_hacks", t)
                    } else w(t) || Object(y.c)("onerror", t)
            })), window.addEventListener("unhandledrejection", (function(e) {
                e && e.reason && (w(e.reason) || Object(y.c)("unhandledrejection", e.reason))
            }));
            var x = n(140),
                E = n(11),
                C = n(154),
                I = n(28),
                T = C.a.Model;
            C.a.Model = function() {
                return function(e) {
                    var t = Object(I.a)(),
                        n = {};
                    return e.resolveRemoteCall = function(e) {
                        var t = e.id,
                            r = e.value,
                            i = n[t];
                        delete n[t], i(r)
                    }, e.emitEvent = function(e) {
                        var n = e.event,
                            r = e.data;
                        t.emit(n, r)
                    }, new T(e).then((function(r) {
                        return r.call = function(e) {
                            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];
                            return new Promise((function(t) {
                                var o = Object(b.w)(n);
                                n[o] = t, r.emit("remote-call", {
                                    id: o,
                                    method: e,
                                    args: i
                                })
                            }))
                        }, e.remoteCall = function(t) {
                            var n = t.id,
                                i = t.method,
                                o = t.args,
                                a = "function" === typeof e[i] ? e[i].apply(r, o) : void 0;
                            a && "function" === typeof a.then ? a.then((function(e) {
                                r.call("resolveRemoteCall", {
                                    id: n,
                                    value: e
                                })
                            })) : r.call("resolveRemoteCall", {
                                id: n,
                                value: a
                            })
                        }, r.on = t.on, r.off = t.off, r
                    }))
                }
            }();
            var k = C.a,
                S = n(34),
                z = n(3);

            function A(e, t) {
                return "object" === typeof e && "object" === typeof t ? M(e, t) : e
            }

            function M(e, t) {
                var n;
                if (Array.isArray(e)) {
                    n = new Array(e.length);
                    for (var r = 0; r < e.length; r++) e[r] !== t[r] && (n[r] = A(e[r], t[r]))
                } else n = {}, Object.keys(e).forEach((function(r) {
                    e[r] !== t[r] && (n[r] = A(e[r], t[r]))
                }));
                return n
            }
            var R = n(100);

            function L(e, t) {
                var n, r = t.schema,
                    i = t.preSave,
                    o = Object(b.N)((function(e) {
                        return e.defaultValue
                    }), r),
                    a = Object.keys(r),
                    c = Object(b.g)((function(e) {
                        return Object(g.a)({}, o, e)
                    }), (function(e) {
                        return Object(b.N)((function(e) {
                            return e.value
                        }), e)
                    }), (function(e) {
                        var t = Date.now();
                        return Object(b.X)((function(e, n) {
                            return e.expires < t || void 0 === r[n]
                        }), e)
                    }), JSON.parse, Object(b.i)("{}"), (function() {
                        return R.a.getItem(e)
                    })),
                    u = Object(b.g)(JSON.stringify, (function(e) {
                        var t = Date.now() + 18e5;
                        return Object(b.N)((function(e) {
                            return {
                                value: e,
                                expires: t
                            }
                        }), e)
                    }));
                return {
                    persist: function(t) {
                        return t.subscribe((function() {
                            var o, s = (o = t.getState(), a.reduce((function(e, t) {
                                    return e[t] = Object(b.x)(r[t].path, o), e
                                }), {})),
                                d = M(s, n);
                            Object(b.E)(d) || (R.a.setItem(e, u(i(Object(b.R)(c(), d)))), n = s)
                        })), t
                    },
                    rehydrate: function() {
                        return n = c(), e = n, a.reduce((function(t, n) {
                            return Object(b.hb)(r[n].path, e[n], t)
                        }), {});
                        var e
                    }
                }
            }
            var P = n(62),
                D = function(e) {
                    var t, n = [],
                        r = Object(P.a)();
                    return e.startStateSync = function(i) {
                        t = e.getState(), i.emit("state", t);
                        var o = function() {
                                n.forEach((function(e) {
                                    var t = e[0],
                                        n = e[1];
                                    i.emit(t, n)
                                })), n.length = 0
                            },
                            a = function(e, t) {
                                1 === n.push([e, t]) && setTimeout(o, 0)
                            };
                        e.subscribe((function() {
                            var n = e.getState();
                            n !== t && (a("state_diff", M(n, t)), t = n)
                        }));
                        var c = /^request_/;
                        e.on("*", (function(e, t) {
                            c.test(e) || a("store_event", [e, t])
                        })), r.resolve()
                    }, e.syncing = function() {
                        return r.promise
                    }, e
                },
                N = n(43),
                q = n(35),
                B = {
                    application: {
                        rtl: !1,
                        s: !1,
                        region: null,
                        actingAsDirectLink: !1,
                        availability: null,
                        isSendingFileEvents: !1,
                        clientLimitExceeded: !1,
                        clientLimitExceededLifted: !1,
                        limitReached: !1,
                        config: {
                            features: {
                                agentAvatar: {
                                    enabled: !0
                                },
                                boosters: {
                                    enabled: !1,
                                    items: []
                                },
                                chatHistory: {
                                    enabled: !1
                                },
                                continuousChat: {
                                    enabled: !1
                                },
                                creditCardMasking: {
                                    enabled: !1
                                },
                                disableSounds: {
                                    enabled: !1
                                },
                                emailTranscript: {
                                    enabled: !0
                                },
                                facebookButton: {
                                    enabled: !1
                                },
                                fileSharing: {
                                    enabled: !0
                                },
                                googlePlusButton: {
                                    enabled: !1
                                },
                                hideOnInit: {
                                    enabled: !1
                                },
                                hideOnMobile: {
                                    enabled: !1
                                },
                                hideTrademark: {
                                    enabled: !1
                                },
                                linksPreview: {
                                    enabled: !0
                                },
                                logo: {
                                    enabled: !0,
                                    path: "https://cdn.livechatinc.com/cloud/?uri=http://livechat.s3.amazonaws.com/default/logo/c4bf6633aa89a76af7461279581d8bdb.png"
                                },
                                ticketForm: {
                                    enabled: !0,
                                    mode: "livechat"
                                },
                                preChatAfterGreeting: {
                                    enabled: !0
                                },
                                preChatForm: {
                                    enabled: !1
                                },
                                rating: {
                                    enabled: !0
                                },
                                twitterButton: {
                                    enabled: !1
                                },
                                mobileMinimized: {
                                    enabled: !0
                                },
                                minimized: {
                                    enabled: !0
                                }
                            },
                            minimizedType: "bar",
                            screenPosition: "right",
                            theme: {}
                        },
                        destroyed: !1,
                        eagerFetchingMode: !1,
                        embedded: !0,
                        requestedGroup: null,
                        mobileWrapper: null,
                        invitation: {
                            current: null,
                            hiddenIds: [],
                            displayedIds: []
                        },
                        isInCustomContainer: !1,
                        hasUnseenEvents: !1,
                        hidden: !1,
                        maximized: !1,
                        pageFocused: !1,
                        applicationFocused: !1,
                        mobile: Object(N.c)(),
                        muted: !1,
                        readyState: q.a.NOT_READY,
                        ready: !1,
                        loadedInitialHistory: !1,
                        integrationName: null,
                        language: null,
                        clientVisitNumber: 0,
                        clientChatNumber: 0,
                        visibility: {
                            state: "minimized"
                        },
                        greetingsMuted: !1
                    }
                },
                U = {
                    boosters: !0,
                    carousel: !0,
                    emoji: !0,
                    form: !0,
                    image_preview: !0,
                    message: !0,
                    rich_message: !0,
                    sticker: !0,
                    system_message: !0,
                    url_preview: !0,
                    email_prompt: !0,
                    message_draft: !0
                },
                V = {
                    boosters: !0,
                    carousel: !0,
                    form: !0
                },
                F = function(e) {
                    return Object(S.e)(e, {
                        shouldAddToTimeline: function(e) {
                            return U[e.type]
                        },
                        shouldCreateNewGroup: function(e) {
                            return V[e.type]
                        }
                    })
                },
                H = function(e, t) {
                    var n = L((void 0 === t ? {} : t).persistKey, {
                            schema: {
                                clientLimitExceededLifted: {
                                    path: ["application", "clientLimitExceededLifted"],
                                    defaultValue: !1
                                },
                                eyeCatcherHidden: {
                                    path: ["application", "eyeCatcher", "hidden"],
                                    defaultValue: !1
                                },
                                invitationHiddenIds: {
                                    path: ["application", "invitation", "hiddenIds"],
                                    defaultValue: []
                                },
                                invitationDisplayedIds: {
                                    path: ["application", "invitation", "displayedIds"],
                                    defaultValue: []
                                },
                                maximized: {
                                    path: ["application", "maximized"],
                                    defaultValue: !1
                                },
                                visibility: {
                                    path: ["application", "visibility"],
                                    defaultValue: {
                                        state: "minimized"
                                    }
                                },
                                muted: {
                                    path: ["application", "muted"],
                                    defaultValue: !1
                                },
                                limitReached: {
                                    path: ["application", "limitReached"],
                                    defaultValue: !1
                                },
                                greetingsMuted: {
                                    path: ["application", "greetingsMuted"],
                                    defaultValue: !1
                                }
                            },
                            preSave: function(e) {
                                return Object(g.a)({}, e, {
                                    visibility: {
                                        state: e.visibility && "hidden" === e.visibility.state ? "minimized" : e.visibility.state
                                    }
                                })
                            }
                        }),
                        r = Object(b.R)(B, Object(b.R)(e, n.rehydrate()));
                    return Object(b.g)(n.persist, D, F)(r)
                },
                G = [{
                    id: "iframekb",
                    template: "moment",
                    title: "Knowledge Base",
                    description: "Save time with Knowledge Base - easy to access know-how right in the LiveChat widget",
                    icon: "https://www.knowledgebase.ai/apple-touch-icon.71342b95.png",
                    action: {
                        type: "button",
                        label: "Search",
                        url: "https://livechat.kb.help/"
                    }
                }],
                W = function(e, t) {
                    var n = !!Object(E.h)("lc_boosters", window.location.search) ? function(e) {
                            return Object(b.R)(e, {
                                application: {
                                    config: {
                                        features: {
                                            boosters: {
                                                enabled: !0,
                                                items: G
                                            }
                                        }
                                    }
                                }
                            })
                        }(e) : e,
                        r = H(n, t);
                    return r.setCurrentView("Chat"), r.addView("Chat/information"), r.addView("loader"), r.addView("Chat/postchat"), r.addView("Chat/prechat"), r.addView("Chat/queue"), r.addView("Chat/timeline"), r.addView("minimized", {
                        text: "Chat"
                    }), r.addView("Chat/ticketForm"), r.addView("Moment", {
                        show: !1,
                        data: {}
                    }), r.addChat({
                        id: z.c,
                        active: !1,
                        properties: {
                            agentIsTyping: !1,
                            ended: !1,
                            fakeAgentMessageId: null,
                            hasMoreHistory: null,
                            lastThread: null,
                            loadingHistory: !1,
                            queued: !1,
                            rate: null,
                            rateComment: null,
                            eventsSeenUpToMap: {}
                        }
                    }), r
                },
                Y = n(10),
                K = n(6);
            var J, X = n(8),
                Z = n(20),
                Q = n(31),
                $ = function() {
                    return new Promise((function(e) {
                        return setTimeout(e, 0)
                    }))
                },
                ee = function(e) {
                    return /px$/.test(e) ? Math.ceil(parseFloat(e)) + "px" : e
                },
                te = function(e, t) {
                    var n = function() {
                        return e.call("resize", function(e) {
                            return Object(g.a)({}, e, {
                                width: ee(e.width),
                                height: ee(e.height)
                            })
                        }(t))
                    };
                    return Object(N.a)() ? new Promise((function(t) {
                        e.call("applyHiddenStyles").then((function() {
                            return requestAnimationFrame(t)
                        }))
                    })).then(n) : n()
                },
                ne = function(e) {
                    var t = e.minimizedRef;
                    return t ? Object(Z.c)(["width", "height"], t) : {
                        width: "0px",
                        height: "0px"
                    }
                },
                re = function(e) {
                    var t = !1,
                        n = null,
                        r = function e() {
                            if (n && !t) {
                                var r = n;
                                return n = null, t = !0, r().then((function() {
                                    return t = !1, e()
                                }))
                            }
                        };
                    return function() {
                        for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                        return n = e.bind.apply(e, [null].concat(i)), r()
                    }
                }((function(e, t) {
                    var n = t.getApplicationState(),
                        r = n.mobile,
                        i = n.invitation,
                        o = Object(K.T)(t, "maximized"),
                        a = J,
                        c = e.model,
                        u = c.fullWidth,
                        s = c.fullHeight,
                        d = Object(K.d)(t),
                        l = r && !!d && !Object(b.C)(d.properties.uniqueId, i.hiddenIds);
                    J = o;
                    var f = new Promise((function(n) {
                        a && o ? n() : !a || o ? a || !o ? e.minimizedRef ? (e.minimizedRef && (e.minimizedRef.style.width = "100%", e.minimizedRef.style.height = "100%"), $().then((function() {
                            te(e, {
                                width: u,
                                height: s,
                                maximized: o,
                                ignoreHorizontalOffset: l
                            }).then((function() {
                                e.minimizedRef && (e.minimizedRef.style.width = "", e.minimizedRef.style.height = ""), $().then((function() {
                                    te(e, Object(g.a)({}, ne(e), {
                                        ignoreHorizontalOffset: l
                                    })).then(n)
                                }))
                            }))
                        }))) : te(e, {
                            width: "0px",
                            height: "0px",
                            maximized: o,
                            ignoreHorizontalOffset: l
                        }).then(n) : te(e, {
                            width: u,
                            height: s,
                            maximized: o,
                            ignoreHorizontalOffset: l
                        }).then(n) : t.once("animation_end", (function() {
                            te(e, Object(g.a)({}, ne(e), {
                                maximized: o,
                                ignoreHorizontalOffset: l
                            })).then(n)
                        }))
                    }));
                    return Object(N.a)() ? f.then((function() {
                        return e.call("show")
                    })) : f
                })),
                ie = function(e, t) {
                    return J = Object(K.T)(t, "maximized"), Object(X.u)(Object(Q.c)(t, (function(e) {
                        return e.application.visibility.state
                    })), Object(X.x)(1), Object(X.h)((function() {
                        return re(e, t)
                    }))), re(e, t)
                },
                oe = n(64),
                ae = n(44),
                ce = n(92),
                ue = n(47),
                se = n(70),
                de = (n(189), n(126)),
                le = (n(112), n(156)),
                fe = n(19);

            function pe(e) {
                var t = function(e, t) {
                    if ("object" !== typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === typeof t ? t : String(t)
            }
            var me = {
                    group_chooser: "select",
                    header: "information",
                    name: "text",
                    question: "text",
                    subject: "text",
                    checkbox_for_email: "checkbox"
                },
                he = function(e, t) {
                    return e.getSessionUser().serverId === t.authorId
                },
                be = function(e, t) {
                    return he(e, t) ? e.getSessionUser().id : t.authorId
                },
                ge = function(e, t) {
                    if ("file" === t.type) return t.id;
                    if (he(e, t)) return "customId" in t && e.hasEvent(z.c, t.customId) ? t.customId : t.id;
                    var n = e.getEventByServerId(z.c, t.id);
                    return n ? n.id : t.id
                },
                ve = function(e) {
                    return e.groupIds ? e.groupIds[0] : null
                },
                ye = function(e, t) {
                    var n = e.getSessionUser().serverId,
                        r = Object(b.K)(t.filter((function(e) {
                            return e.present && e.id !== n
                        })));
                    return r ? r.id : null
                },
                Oe = function(e, t) {
                    var n = t.chat,
                        r = t.chat,
                        i = r.thread,
                        o = r.users;
                    return {
                        id: n.id,
                        active: i.active,
                        agent: ye(e, o),
                        events: i.events.map((function(t) {
                            return Ce(e, Object(g.a)({}, t, {
                                seen: !1
                            }))
                        })).filter(Boolean),
                        group: ve(n.access),
                        thread: i.id,
                        properties: Ae(i)
                    }
                },
                _e = function(e, t) {
                    return Object(g.a)({}, t, {
                        type: e,
                        fields: t.fields.reduce((function(e, t) {
                            var n = t.id,
                                r = Object(v.a)(t, ["id"]),
                                i = Object(g.a)({}, r, {
                                    type: me[r.type] || r.type,
                                    serverName: n,
                                    serverType: r.type
                                });
                            if ("information" === i.type) i.value = i.label.replace(/<br(\s)?(\/)?>/gi, "\n");
                            else if ("checkbox_for_email" === r.type) i.meta = "confirm_subscription", i.label = "", i.options = [{
                                label: r.label,
                                checked: r.checked,
                                value: "index0_0",
                                originalValue: "0"
                            }], r.checked && (i.defaultValue = [i.options[0].value]);
                            else if (r.options) {
                                var o = "group_chooser" === r.type;
                                o && (i.meta = "groupSelect"), i.options = i.options.map((function(e, t) {
                                    var n = o ? e.groupId : e.id;
                                    return Object(g.a)({}, Object(b.V)(["id", "checked"], e), {
                                        value: "index" + t + "_" + n,
                                        originalValue: String(n)
                                    })
                                }))
                            }
                            return i.name = Object(b.C)(r.type, ["name", "email", "rating"]) ? r.type : Object(b.v)() + "_" + n, "rating" === r.type ? [].concat(e, [i, {
                                name: "rateComment",
                                type: "textarea",
                                label: i.commentLabel,
                                required: !1,
                                dependOn: "rating"
                            }]) : [].concat(e, [i])
                        }), [])
                    })
                },
                je = function(e) {
                    return Object(le.a)(_e("ticket", e))
                },
                we = function(e, t) {
                    var n = e.getSessionUser().serverId,
                        r = t[n],
                        i = Object(v.a)(t, [n].map(pe));
                    return {
                        sessionUserSeenUpTo: r,
                        latestOtherUserSeenUpTo: Object(b.K)(Object(b.yb)(i).filter(Boolean).sort())
                    }
                },
                xe = function(e, t) {
                    var n = t.thread,
                        r = t.users,
                        i = t.eventsSeenUpToMap,
                        o = n.id,
                        a = n.active,
                        c = n.events,
                        u = n.access,
                        s = e.getSessionUser().serverId,
                        d = we(e, i),
                        l = d.sessionUserSeenUpTo,
                        f = d.latestOtherUserSeenUpTo;
                    return {
                        thread: n ? {
                            id: o,
                            active: a,
                            agent: a ? ye(e, r) : null,
                            events: c.map((function(t) {
                                var n = t.authorId === s ? f >= t.createdAt : l >= t.createdAt;
                                return Ce(e, Object(g.a)({}, t, {
                                    seen: n
                                }))
                            })).filter(Boolean),
                            group: ve(u),
                            properties: Ae(n)
                        } : null,
                        eventsSeenUpToMap: i
                    }
                },
                Ee = function(e) {
                    var t = e.properties,
                        n = Object(v.a)(e, ["properties"]);
                    if ("lc2" in t) {
                        var r = t.lc2;
                        if ("greeting_unique_id" in r) return function(e, t) {
                            var n = fe.e(Object(g.a)({}, e));
                            return n.properties = Object(g.a)({}, n.properties, {
                                invitation: !0,
                                subtype: e.subtype,
                                id: t.greeting_id,
                                uniqueId: t.greeting_unique_id
                            }), n
                        }(n, r);
                        if (r.welcome_message) return function(e) {
                            return fe.e(Object(g.a)({}, e, {
                                welcomeMessage: !0
                            }))
                        }(n)
                    }
                    return function(e, t) {
                        return fe.e(Object(g.a)({}, e, t.url_details && {
                            urlDetails: t.url_details
                        }, t.translation && {
                            translation: Le(t.translation)
                        }))
                    }(n, t)
                },
                Ce = function(e, t) {
                    var n = Object(g.a)({}, t, {
                        id: ge(e, t),
                        serverId: t.id,
                        authorId: be(e, t),
                        timestamp: new Date(t.createdAt).getTime()
                    });
                    switch (n.type) {
                        case "filled_form":
                            return Te(n);
                        case "message":
                            return Ee(n);
                        case "rich_message":
                            return function(e) {
                                if ("lc2" in e.properties && "greeting_unique_id" in e.properties.lc2) {
                                    var t = fe.f(e);
                                    return t.properties = Object(g.a)({}, t.properties, {
                                        invitation: !0,
                                        subtype: e.subtype,
                                        id: e.properties.lc2.greeting_id,
                                        uniqueId: e.properties.lc2.greeting_unique_id
                                    }), t
                                }
                                return fe.f(e)
                            }(n);
                        case "file":
                            return fe.c(n);
                        case "system_message":
                            return ke(n);
                        case "custom":
                            return Ie(n);
                        default:
                            return null
                    }
                },
                Ie = function(e) {
                    var t = e.properties,
                        n = e.customId;
                    return Object(g.a)({}, fe.a(e), {
                        type: "custom",
                        properties: Object(g.a)({}, t, {
                            customId: n
                        })
                    })
                },
                Te = function(e) {
                    var t;
                    return Object(g.a)({}, fe.a(e), {
                        type: "form",
                        properties: {
                            answered: !0,
                            formId: e.formId,
                            formType: (null == (t = e.properties.lc2) ? void 0 : t.form_type) || null,
                            fields: e.fields.filter((function(e) {
                                return "answer" in e || "answers" in e && 0 !== e.answers.length
                            })).map((function(e) {
                                if ("string" === typeof e.answer) return e;
                                if ("answers" in e) {
                                    var t = e.answers,
                                        n = Object(v.a)(e, ["answers"]);
                                    return Object(g.a)({}, n, {
                                        answer: t.map((function(e) {
                                            return e.label
                                        }))
                                    })
                                }
                                return Object(g.a)({}, e, {
                                    answer: e.answer.label
                                })
                            }))
                        }
                    })
                },
                ke = function(e) {
                    switch (e.systemMessageType) {
                        case "archived_customer_disconnected":
                        case "routing.archived_inactive":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "client_inactive"
                            }));
                        case "manual_archived_agent":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "operator_closed_session",
                                textVars: {
                                    operator: e.textVars.agent
                                }
                            }));
                        case "manual_archived_customer":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "chat_closed_by_customer"
                            }));
                        case "system_archived":
                        case "customer_banned":
                        case "routing.archived_deleted":
                        case "routing.archived_disconnected":
                        case "routing.archived_offline":
                        case "routing.archived_other":
                        case "routing.archived_remotely_signed_out":
                        case "routing.archived_signed_out":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "chat_session_closed"
                            }));
                        case "routing.assigned_other":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "user_transfer",
                                textVars: {
                                    operator: e.textVars.agent
                                }
                            }));
                        case "routing.assigned_deleted":
                        case "routing.assigned_disconnected":
                        case "routing.assigned_inactive":
                        case "routing.assigned_remotely_signed_out":
                        case "routing.assigned_signed_out":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "user_transfer",
                                textVars: {
                                    operator: e.textVars.agent_added
                                }
                            }));
                        case "chat_transferred":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "user_transfer",
                                textVars: {
                                    operator: e.textVars.targets
                                }
                            }));
                        case "agent_joined":
                        case "agent_added":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "operator_joined_conference",
                                textVars: {
                                    operator: e.textVars.agent
                                }
                            }));
                        case "agent_left":
                        case "agent_removed":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "operator_left_conference",
                                textVars: {
                                    operator: e.textVars.agent
                                }
                            }));
                        case "rating.chat_rated":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "rate_me_confirmation_" + e.textVars.score
                            }));
                        case "rating.chat_commented":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "rate_me_comment_added",
                                textVars: {
                                    comment: e.textVars.comment
                                }
                            }));
                        case "rating.chat_rating_canceled":
                            return fe.g(Object(g.a)({}, e, {
                                systemMessageType: "rate_me_cancel"
                            }));
                        case "custom":
                            e.systemMessageType;
                            var t = Object(v.a)(e, ["systemMessageType"]);
                            return fe.g(t);
                        default:
                            return null
                    }
                },
                Se = function(e) {
                    var t = e.score,
                        n = e.comment;
                    return Object(g.a)({}, "number" === typeof t && {
                        rate: 1 === t ? "good" : "bad"
                    }, "string" === typeof n && {
                        rateComment: n
                    })
                },
                ze = function(e) {
                    return {
                        position: e.position,
                        waitingTime: e.waitTime
                    }
                },
                Ae = function(e) {
                    return Object(g.a)({}, "rating" in e.properties && Se(e.properties.rating), e.queue && {
                        queue: ze(e.queue)
                    })
                },
                Me = function(e, t) {
                    var n, r = {
                        event: Ce(e, t.event),
                        author: Object(g.a)({}, t.agent, {
                            type: "agent"
                        })
                    };
                    return r.event.properties = Object(g.a)({}, r.event.properties, {
                        invitation: !0,
                        id: t.id,
                        addon: t.addon,
                        uniqueId: t.uniqueId,
                        accepted: t.accepted,
                        type: (n = r.event, n.properties.quickReplies ? "quick_replies" : "rich_message" === n.type ? "card" : "plain_text"),
                        subtype: t.subtype,
                        receivedFirstTime: t.displayedFirstTime
                    }), r
                },
                Re = function(e, t) {
                    var n = t.type,
                        r = t.id;
                    switch (n) {
                        case "filled_form":
                            var i = t.formId,
                                o = Object(v.a)(t, ["formId"]);
                            return Object(g.a)({
                                customId: o.customId,
                                formId: i
                            }, o);
                        case "emoji":
                        case "message":
                        case "message_draft":
                        case "url_preview":
                            var a = t.properties,
                                c = a.text,
                                u = a.triggeredBy,
                                s = {
                                    type: "message",
                                    customId: r,
                                    text: c
                                };
                            if (u) {
                                var d, l = e.getEvent(z.c, u.event);
                                if (l.thread && l.serverId) s.postback = {
                                    id: u.button.postbackId,
                                    type: "message",
                                    value: u.button.value,
                                    eventId: l.serverId,
                                    threadId: l.thread
                                };
                                else s.properties = ((d = {}).c5e4f61e1a6c3b1521b541bc5c5a2ac5 = {
                                    postback_id: u.button.postbackId
                                }, d)
                            }
                            return s;
                        case "custom_system_message":
                            var f = t.properties,
                                p = f.recipients;
                            return {
                                type: "system_message",
                                customId: r,
                                text: f.text,
                                recipients: p,
                                systemMessageType: "custom"
                            };
                        default:
                            return void 0
                    }
                },
                Le = function(e) {
                    return {
                        sourceLangCode: e.source_lang_code,
                        targetLangCode: e.target_lang_code,
                        targetMessage: e.target_message
                    }
                },
                Pe = (n(60), {});
            var De = function(e, t) {
                    var n = void 0 === t ? {} : t,
                        r = n.query,
                        i = void 0 === r ? {} : r,
                        o = n.jsonpParam,
                        a = void 0 === o ? "jsonp" : o,
                        c = n.callbackName;
                    return new Promise((function(t, n) {
                        Object(Z.f)().then((function(r) {
                            var o, u = document.createElement("script"),
                                s = c || Object(b.w)(Pe);
                            Pe[s] = !0;
                            var d = "__" + s;
                            window[d] = function(e) {
                                delete Pe[s], delete window[d], Object(Z.i)(u), t(e)
                            }, u.src = e + "?" + Object(E.a)(Object(g.a)({}, i, ((o = {})[a] = d, o))), u.addEventListener("error", (function() {
                                setTimeout((function() {
                                    return n(new Error("JSONP request failed."))
                                }), 100)
                            })), r.appendChild(u)
                        }))
                    }))
                },
                Ne = function(e) {
                    var t = Object(E.l)(e);
                    return "https://" + (!Object(b.C)("cdn.livechatinc.com/cloud/?uri", t) && !Object(b.C)(".livechat-static.com/", t) ? "cdn.livechatinc.com/cloud/?" + Object(E.a)({
                        uri: "https://" + t
                    }) : t)
                },
                qe = /\.([a-z]{1,})$/i,
                Be = function(e) {
                    var t = e.__priv,
                        n = {
                            enabled: !0,
                            x: parseInt(t.group["embedded_chat.eye_grabber.x"]) + 15,
                            y: parseInt(t.group["embedded_chat.eye_grabber.y"]),
                            src: Ne(t.group["embedded_chat.eye_grabber.path"])
                        };
                    if (-1 !== n.src.indexOf("/default/eyeCatchers/")) {
                        var r = n.src.match(qe)[1];
                        n.srcset = {
                            "1x": n.src,
                            "2x": n.src.replace(new RegExp("\\." + r, "i"), "-2x." + r)
                        }
                    }
                    return n
                },
                Ue = function(e, t) {
                    return function(e) {
                        var t = e.licenseId,
                            n = e.region;
                        return "https://api" + (n ? "-" + n : "") + function(e) {
                            return 1520 === e ? ".staging" : ""
                        }(t) + ".livechatinc.com"
                    }(t) + "/v3.3/customer/action/" + e
                },
                Ve = function(e) {
                    var t = Ue("get_configuration", e);
                    return De(t, {
                        callbackName: "lc_static_config",
                        query: Object(g.a)({
                            license_id: e.licenseId,
                            version: e.version
                        }, "number" === typeof e.groupId && {
                            group_id: e.groupId
                        })
                    }).then((function(e) {
                        var t = e.buttons,
                            n = e.allowed_domains,
                            r = e.prechat_form,
                            i = e.ticket_form,
                            o = e.__priv,
                            a = Object(v.a)(e, ["buttons", "allowed_domains", "prechat_form", "ticket_form", "__priv"]);
                        return Object(g.a)({}, a, r && {
                            prechatForm: Object(ce.b)(r)
                        }, i && {
                            ticketForm: Object(ce.b)(i)
                        }, {
                            buttons: t.map((function(e) {
                                return "image" === e.type ? {
                                    id: e.id,
                                    type: e.type,
                                    onlineValue: Ne(e.online_value),
                                    offlineValue: Ne(e.offline_value)
                                } : {
                                    id: e.id,
                                    type: e.type,
                                    onlineValue: e.online_value,
                                    offlineValue: e.offline_value
                                }
                            }))
                        }, n && {
                            allowedDomains: n
                        }, {
                            __unsafeProperties: Object(g.a)({}, o.s && {
                                s: !0
                            }, {
                                group: {
                                    chatBoosters: o.group.chat_boosters,
                                    disabledMinimized: "1" === o.group["chat_window.disable_minimized"],
                                    disabledMinimizedOnMobile: "1" === o.group["chat_window.mobile_disable_minimized"],
                                    disabledOnMobile: "1" === o.group["chat_window.hide_on_mobile"],
                                    eyeCatcher: "1" === o.group["embedded_chat.display_eye_catcher"] ? Be(e) : {
                                        enabled: !1
                                    },
                                    hasAgentAvatarsEnabled: "1" === o.group["chat_window.display_avatar"],
                                    hasCustomMobileSettings: "1" === o.group["chat_window.custom_mobile_settings"],
                                    hasHiddenTrademark: "1" === o.group["chat_window.hide_trademark"],
                                    hasSoundsEnabled: "0" === o.group["chat_window.disable_sounds"],
                                    initiallyHidden: "1" === o.group["chat_window.hide_on_init"] || "1" === o.group["chat_window.disable_minimized"],
                                    initiallyHiddenOnMobile: "1" === o.group["chat_window.mobile_hide_on_init"] || "1" === o.group["chat_window.mobile_disable_minimized"],
                                    language: o.group.language,
                                    linksUnfurlingEnabled: "1" === o.group.links_unfurling,
                                    logo: "1" === o.group["chat_window.display_logo"] ? {
                                        enabled: !0,
                                        src: o.group["chat_window.logo_path"]
                                    } : {
                                        enabled: !1
                                    },
                                    minimizedType: o.group["chat_window.theme.minimized"],
                                    minimizedTypeOnMobile: o.group["chat_window.mobile_minimized_theme"],
                                    offlineMessagesEnabled: "0" === o.group.tickets_enabled,
                                    offsetX: parseInt(o.group["chat_window.offset_x"]),
                                    offsetXOnMobile: parseInt(o.group["chat_window.mobile_offset_x"]),
                                    offsetY: parseInt(o.group["chat_window.offset_y"]),
                                    offsetYOnMobile: parseInt(o.group["chat_window.mobile_offset_y"]),
                                    prechatFormAfterGreetingEnabled: "1" === o.group.pre_chat_survey_after_greeting,
                                    ratingEnabled: "1" === o.group["rate_me.enabled"],
                                    screenPosition: o.group["chat_window.screen_position"],
                                    screenPositionOnMobile: o.group["chat_window.mobile_screen_position"],
                                    transcriptButtonEnabled: "1" === o.group["chat_window.display_transcript_button"],
                                    theme: {
                                        name: o.group["chat_window.new_theme.name"],
                                        customJson: o.group["chat_window.new_theme.custom_json"],
                                        agentbarBackgroundColor: o.group["chat_window.new_theme.agentbar_background_color"],
                                        agentbarText: o.group["chat_window.new_theme.agentbar_text"],
                                        agentMessageBackgroundColor: o.group["chat_window.new_theme.agent_message_color_background"],
                                        agentMessageColorText: o.group["chat_window.new_theme.agent_message_color_text"],
                                        backgroundColor: o.group["chat_window.new_theme.background_color"],
                                        ctaColor: o.group["chat_window.new_theme.cta_color"],
                                        minimizedColorBackground: o.group["chat_window.new_theme.minimized_color_background"],
                                        minimizedColorIcon: o.group["chat_window.new_theme.minimized_color_icon"],
                                        minimizedColorText: o.group["chat_window.new_theme.minimized_color_text"],
                                        systemMessageColor: o.group["chat_window.new_theme.system_message_color"],
                                        titlebarBackgroundColor: o.group["chat_window.new_theme.titlebar_background_color"],
                                        titlebarText: o.group["chat_window.new_theme.titlebar_text"],
                                        visitorMessageBackgroundColor: o.group["chat_window.new_theme.visitor_message_color_background"],
                                        visitorMessageColorText: o.group["chat_window.new_theme.visitor_message_color_text"]
                                    }
                                },
                                license: {
                                    continuousChatWidgetEnabled: "1" === o.license.continuous_chat_widget_enabled,
                                    creditCardMaskingEnabled: "1" === o.license.mask_credit_cards,
                                    customerHistoryEnabled: "1" === o.license.customer_history_enabled,
                                    fileSharingEnabled: "1" === o.license["attachments.enable_for_visitors"],
                                    inboundForwardingToHelpdeskEnabled: "1" === o.license["helpdesk.inbound_forwarding"],
                                    nonProfit: "1" === o.license.non_profit,
                                    protocolVersion: o.license.lc_version
                                }
                            })
                        })
                    }))
                },
                Fe = function(e) {
                    var t = Ue("get_localization", e);
                    return De(t, {
                        callbackName: "lc_localization",
                        query: Object(g.a)({
                            license_id: e.licenseId,
                            version: e.version,
                            language: e.language
                        }, "number" === typeof e.groupId && {
                            group_id: e.groupId
                        })
                    }).then((function(e) {
                        return Object(b.M)((function(e) {
                            return e.toLowerCase()
                        }), e)
                    }))
                },
                He = function(e, t) {
                    var n = K.f(e, z.c);
                    return n ? Object(g.a)({}, t, {
                        events: t.events.map((function(e) {
                            return e.properties.welcomeMessage || e.properties.invitation ? Object(g.a)({}, e, {
                                id: n.id
                            }) : e
                        }))
                    }) : t
                },
                Ge = function(e) {
                    return Object(g.a)({}, e, {
                        properties: Object(g.a)({}, e.properties, {
                            accepted: !0
                        })
                    })
                },
                We = function(e, t) {
                    var n = e.sdk,
                        r = t.event.properties,
                        i = r.uniqueId,
                        o = r.id;
                    return n.acceptGreeting({
                        greetingId: o,
                        uniqueId: i
                    }).then((function() {
                        return Ge(t)
                    }), (function(e) {
                        if ("INTERNAL" === e.code) return Ge(t);
                        throw e
                    }))
                },
                Ye = function(e, t) {
                    var n, r = e.sdk,
                        i = e.store,
                        o = void 0 === t ? {} : t,
                        a = o.group,
                        c = o.customerStartingEvent,
                        u = o.agentFakeEvent,
                        s = {
                            chat: {
                                thread: {
                                    properties: {}
                                },
                                properties: {}
                            }
                        };
                    K.E(i) && (s.continuous = !0, s.chat.properties.routing = {
                        email_follow_up: !0
                    }), "number" === typeof a && (s.chat.access = {
                        groupIds: [a]
                    });
                    var d = {};
                    if ("filled_form" === (null == c ? void 0 : c.type)) {
                        var l, f, p = Object(b.bb)(Boolean, {
                            name: null == (l = Object(b.n)((function(e) {
                                return "name" === e.type
                            }), c.fields)) ? void 0 : l.answer,
                            email: null == (f = Object(b.n)((function(e) {
                                return "email" === e.type
                            }), c.fields)) ? void 0 : f.answer
                        });
                        d = Object(g.a)({}, p)
                    }
                    var m = i.getSessionUser();
                    m.name && "Customer" !== m.name || (d.name = i.localize("client"));
                    var h = Object(b.E)(d) ? Promise.resolve() : r.updateCustomer(d).catch((function(e) {
                        return Object(y.c)("update_customer_request_failed", e)
                    }));
                    if ("ticket" === (null == c || null == (n = c.properties.lc2) ? void 0 : n.form_type)) s.active = !1, s.chat.thread.properties.routing = {
                        offline_message: !0
                    }, s.chat.thread.events = [Re(i, c)];
                    else {
                        var v = i.getEvents(z.c).filter((function(e) {
                            return e.type === z.f && null === e.serverId
                        }));
                        if (Object(b.E)(v) || (s.chat.thread.events = v.map((function(e) {
                                return Re(i, e)
                            }))), c) {
                            var O = Re(i, c);
                            Object(b.D)(s.chat.thread.events) ? s.chat.thread.events.push(O) : s.chat.thread.events = [O]
                        }
                        u && (s.chat.thread.properties = function(e) {
                            return {
                                lc2: Object(g.a)({
                                    welcome_author_id: e.author
                                }, e.properties.invitation ? {
                                    greeting_id: e.properties.id,
                                    greeting_unique_id: e.properties.uniqueId
                                } : {
                                    welcome_text: e.properties.originalText
                                })
                            }
                        }(u))
                    }
                    var _ = i.getChat(z.c).serverId;
                    return _ ? h.then((function() {
                        return r.resumeChat(Object(g.a)({}, s, {
                            chat: Object(g.a)({}, s.chat, {
                                id: _
                            })
                        }))
                    })).then((function(e) {
                        return He(i, Oe(i, e))
                    })) : h.then((function() {
                        return r.startChat(s)
                    })).then((function(e) {
                        return He(i, Oe(i, e))
                    }))
                },
                Ke = function(e) {
                    return e.sdk.listChats().then((function(e) {
                        var t = e.chatsSummary,
                            n = Object(b.K)(t);
                        return n ? function(e) {
                            var t = e.id,
                                n = e.active,
                                r = e.access;
                            return {
                                id: t,
                                active: n,
                                lastThreadId: e.lastThreadId,
                                group: ve(r)
                            }
                        }(n) : null
                    }))
                },
                Je = function(e, t) {
                    var n = e.sdk,
                        r = t.groupIds;
                    return n.listGroupStatuses({
                        groupIds: r
                    }).then((function(e) {
                        return r.reduce((function(t, n) {
                            var r = e[n];
                            return t[n] = r ? function(e) {
                                return "offline" === e ? "offline" : "online"
                            }(r) : "not_found", t
                        }), {})
                    }))
                },
                Xe = function(e, t) {
                    var n = e.store;
                    return Fe({
                        licenseId: n.getApplicationState().license,
                        groupId: t.groupId,
                        region: t.region,
                        version: t.localizationVersion,
                        language: t.language
                    })
                },
                Ze = function(e, t, n) {
                    var r = e.sdk;
                    return void 0 === n && (n = _e), r.getForm(t).then((function(e) {
                        return e.enabled ? {
                            enabled: !0,
                            form: n(t.type, e.form)
                        } : e
                    })).catch((function(e) {
                        return Object(y.c)("get_form_request_failed", e), {
                            enabled: !1
                        }
                    }))
                },
                Qe = function(e, t) {
                    return Ze(e, {
                        groupId: t,
                        type: "postchat"
                    })
                },
                $e = function(e, t) {
                    return Ze(e, {
                        groupId: t,
                        type: "ticket"
                    }, (function(e, t) {
                        return je(t)
                    }))
                },
                et = function(e, t) {
                    var n = e.store,
                        r = t.groupId,
                        i = n.getApplicationState(),
                        o = i.license,
                        a = i.region;
                    return Ve({
                        licenseId: o,
                        groupId: r,
                        region: a,
                        version: "tfm"
                    }).then(O.d)
                },
                tt = function(e, t) {
                    var n = e.sdk,
                        r = t.chatId;
                    return n.getChat({
                        chatId: r
                    }).then((function(e) {
                        return {
                            users: e.users,
                            eventsSeenUpToMap: e.eventsSeenUpToMap
                        }
                    }))
                },
                nt = function(e, t) {
                    var n = e.sdk,
                        r = e.store,
                        i = t.chatId,
                        o = t.threadId;
                    return n.getChat({
                        chatId: i,
                        threadId: o
                    }).then((function(e) {
                        return xe(r, e)
                    }))
                },
                rt = function(e, t) {
                    return t.next().then((function(t) {
                        var n = t.value,
                            r = t.done;
                        return n ? {
                            value: n.threads.map((function(t) {
                                return function(e, t) {
                                    var n = t.thread,
                                        r = n.id,
                                        i = n.active,
                                        o = n.events,
                                        a = n.access,
                                        c = e.getChat(z.c).properties.eventsSeenUpToMap,
                                        u = e.getSessionUser().serverId,
                                        s = we(e, c),
                                        d = s.sessionUserSeenUpTo,
                                        l = s.latestOtherUserSeenUpTo;
                                    return {
                                        id: r,
                                        active: i,
                                        events: o.map((function(t) {
                                            var n = t.authorId === u ? l >= t.createdAt : d >= t.createdAt;
                                            return Ce(e, Object(g.a)({}, t, {
                                                seen: n
                                            }))
                                        })).filter(Boolean),
                                        group: ve(a),
                                        properties: Ae(n)
                                    }
                                }(e, {
                                    thread: t
                                })
                            })),
                            done: r
                        } : {
                            value: n,
                            done: r
                        }
                    })).catch((function(e) {
                        if ("NOT_FOUND" === e.code) return {
                            value: [],
                            done: !0
                        };
                        throw e
                    }))
                },
                it = function(e, t) {
                    var n = e.sdk,
                        r = e.store,
                        i = n.getChatHistory({
                            chatId: t
                        });
                    return Promise.all([i.next(), tt({
                        sdk: n,
                        store: r
                    }, {
                        chatId: t
                    })]).then((function(e) {
                        var t = e[0],
                            n = t.value,
                            o = t.done,
                            a = e[1],
                            c = a.users,
                            u = a.eventsSeenUpToMap,
                            s = Object(b.I)("id", c);
                        if (n && n.threads.some((function(e) {
                                return e.events.some((function(e) {
                                    return "system" !== e.authorId && !(e.authorId in s)
                                }))
                            }))) {
                            var d = new Error;
                            throw d.code = "MISSING_USER", d
                        }
                        return {
                            threads: n && n.threads.map((function(e) {
                                return xe(r, {
                                    thread: e,
                                    users: c,
                                    eventsSeenUpToMap: u
                                }).thread
                            })),
                            eventsSeenUpToMap: u,
                            hasMore: !o,
                            iterator: {
                                next: function() {
                                    return rt(r, i)
                                }
                            }
                        }
                    })).catch((function(e) {
                        if ("NOT_FOUND" === e.code) return {
                            threads: [],
                            hasMore: !1
                        };
                        throw e
                    }))
                },
                ot = n(48),
                at = "SET",
                ct = n(101),
                ut = n(65),
                st = n(77),
                dt = n(139),
                lt = function(e) {
                    return e.fields.map((function(e) {
                        switch (e.type) {
                            case "question":
                            case "textarea":
                                var t = e.answer;
                                return t ? e.label + " " + t : e.label;
                            case "radio":
                            case "select":
                                var n, r = null == (n = e.answer) ? void 0 : n.label;
                                return r ? e.label + " " + r : e.label;
                            case "checkbox":
                                var i, o = null == (i = e.answers) ? void 0 : i.map((function(e) {
                                    return e.label
                                })).join(", ");
                                return o ? e.label + " " + o : e.label;
                            default:
                                return ""
                        }
                    })).filter(Boolean).join("\n")
                },
                ft = function(e, t) {
                    return Object(b.c)(function() {
                        switch (t.code) {
                            case "TOO_BIG_FILE":
                                return e.localize("cannot_upload_a_file_over_10mb");
                            case "VALIDATION":
                                return "No active chat thread" === t.message ? e.localize("closed_chat_upload_failed") : e.localize("upload_failed");
                            default:
                                return e.localize("upload_failed")
                        }
                    }())
                },
                pt = function(e) {
                    var t = e.getChat(z.c).properties,
                        n = t.rate,
                        r = t.rateComment,
                        i = t.queued,
                        o = e.getView("Chat/queue");
                    return {
                        rate: n,
                        rateComment: r,
                        queue: i ? {
                            position: o.numberInQueue,
                            waitingTime: o.waitingTime
                        } : null
                    }
                },
                mt = {
                    acceptingGreeting: !1,
                    requestingPredictedWelcomeMessage: !1
                },
                ht = function(e, t, n) {
                    var r = !t.getApplicationState("clientLimitExceeded") || !t.getApplicationState("embedded") || t.getApplicationState("actingAsDirectLink") || t.getApplicationState("isInCustomContainer"),
                        i = function(e, t) {
                            var n = t.license,
                                r = t.requestedGroup,
                                i = t.group,
                                o = t.region,
                                a = t.uniqueGroups,
                                c = t.autoConnect,
                                u = t.mobile,
                                s = t.identityProvider,
                                d = e.getApplicationState("page"),
                                l = {
                                    licenseId: n,
                                    clientId: "c5e4f61e1a6c3b1521b541bc5c5a2ac5",
                                    mobile: u,
                                    region: o,
                                    page: Object(b.ab)(["url", "title"], d),
                                    referrer: d.referrer,
                                    autoConnect: c,
                                    application: {
                                        channelType: Object(K.a)(e)
                                    },
                                    uniqueGroups: a,
                                    identityProvider: s,
                                    customerDataProvider: function() {
                                        var t = e.getSessionUser(),
                                            n = {};
                                        return t.name && (n.name = t.name), t.email && (n.email = t.email), t.properties && !Object(b.E)(t.properties) && (n.sessionFields = Object(b.J)(t.properties).length <= z.e ? t.properties : Object(b.u)(Object(b.l)(t.properties).slice(0, z.e))), n
                                    }
                                };
                            return a ? l.groupId = i : null !== r && (l.groupId = r), Object(ce.a)(l, "production")
                        }(t, Object(g.a)({}, e, {
                            autoConnect: r
                        })),
                        o = {
                            sdk: i,
                            store: t
                        },
                        a = Object(P.a)(),
                        c = null,
                        u = {};
                    !0 === n.s && t.setApplicationState({
                        s: !0
                    }), n.prechatForm && t.updateView("Chat/prechat", _e("prechat", n.prechatForm)), n.ticketForm && t.updateView("Chat/ticketForm", je(n.ticketForm)), n.__unsafeProperties.group.chatBoosters && Object(Y.h)(t, n.__unsafeProperties.group.chatBoosters);
                    var s = function() {
                            (Object(K.ab)(z.c, t) || t.getApplicationState().destroyed) && (Object(Y.s)(t), t.updateView("minimized", {
                                hidden: !0
                            }))
                        },
                        d = function() {
                            i.destroy(), t.setApplicationState({
                                destroyed: !0
                            }), s()
                        },
                        l = function(e, n) {
                            Object(K.B)(t) && !c && (c = n || function(e, t) {
                                var n = e.sdk,
                                    r = e.store,
                                    i = n.getChatHistory({
                                        chatId: t
                                    });
                                return {
                                    next: function() {
                                        return rt(r, i)
                                    }
                                }
                            }(o, {
                                chatId: e
                            }))
                        },
                        f = function(e) {
                            var n = e.id,
                                r = e.active,
                                i = e.group,
                                o = e.thread,
                                a = e.agent,
                                c = e.events,
                                u = e.properties,
                                s = !!u.queue;
                            if (l(n), c.forEach(S), Object(Y.l)(t, {
                                    id: n,
                                    active: r,
                                    thread: o,
                                    group: i,
                                    queued: s,
                                    agent: a
                                }), Object(K.gb)(t)) {
                                var d = u.queue,
                                    f = d.position,
                                    p = d.waitingTime;
                                t.updateView("Chat/queue", {
                                    numberInQueue: f,
                                    waitingTime: p
                                })
                            }
                        },
                        p = function() {
                            return t.getChat(z.c).properties.lastThread
                        },
                        m = function(e) {
                            return "good" === e ? 1 : "bad" === e ? 0 : null
                        },
                        h = function(e) {
                            return i.rateChat({
                                chatId: Object(K.b)(t),
                                rating: Object(b.f)({
                                    comment: e.rateComment,
                                    score: m(e.rating)
                                })
                            }).then((function() {
                                t.updateChat(z.c, {
                                    properties: Object(b.f)({
                                        rate: e.rating,
                                        rateComment: e.rateComment
                                    })
                                })
                            }), b.T)
                        },
                        _ = function(e) {
                            return i.cancelRate({
                                chatId: Object(K.b)(t),
                                properties: e
                            }).then((function() {
                                t.updateChat(z.c, {
                                    properties: e.reduce((function(e, t) {
                                        return "comment" === t ? e.rateComment = null : "score" === t && (e.rate = null), e
                                    }), {})
                                })
                            }), b.T)
                        },
                        j = function(e) {
                            var n = t.getChat(z.c).properties,
                                r = n.rate,
                                i = n.rateComment,
                                o = {
                                    comment: "NOTHING",
                                    score: "NOTHING"
                                };
                            e.rating !== r && (o.score = null === e.rating ? "CANCEL" : at);
                            var a = "string" === typeof e.rateComment && "" !== e.rateComment;
                            return i && !a || "CANCEL" === o.score && i ? o.comment = "CANCEL" : !a || i && e.rateComment === i || (o.comment = at), o
                        },
                        w = function() {
                            return $e(o, t.getApplicationState("group")).then((function(e) {
                                e.enabled ? (t.updateView("Chat/ticketForm", e.form), Object(Y.I)(t), t.setCurrentView("Chat")) : t.setCurrentView("Chat")
                            }))
                        },
                        x = function() {
                            var e = Object(K.U)(t);
                            Object(Y.k)(t), e || Qe(o, I()).then((function(e) {
                                var n = e.enabled,
                                    r = e.form;
                                n && Object(Y.G)(t, r)
                            }), b.T)
                        },
                        C = function(e) {
                            var t = e.getApplicationState().availability,
                                n = e.getChat(z.c).properties.postponedGreeting;
                            "online" === t && n ? Promise.resolve().then((function() {
                                e.updateChat(z.c, {
                                    properties: {
                                        postponedGreeting: void 0
                                    }
                                }), mt.acceptingGreeting = !0, We(o, n).then((function(t) {
                                    mt.acceptingGreeting = !1, M(t), e.setDefaultView("Chat", "timeline")
                                }), (function() {
                                    mt.acceptingGreeting = !1
                                }))
                            })) : e.setDefaultView("Chat", "timeline")
                        },
                        I = function() {
                            var e = t.getChat(z.c).properties.group,
                                n = t.getApplicationState("group");
                            return "number" === typeof e ? e : n
                        },
                        T = function(e) {
                            var n = function(e, t) {
                                if (t.id === e.getSessionUser().serverId || "customer" === t.type) {
                                    var n = {
                                        id: t.id,
                                        type: "customer"
                                    };
                                    return t.name && "Customer" !== t.name && (n.name = t.name), t.email && (n.email = t.email), t.sessionFields && (n.properties = t.sessionFields), n
                                }
                                return {
                                    id: t.id,
                                    type: t.type,
                                    name: t.name,
                                    avatar: "https://" + Object(E.l)(t.avatar),
                                    properties: {
                                        jobTitle: t.jobTitle,
                                        isBot: t.isBot || !1
                                    }
                                }
                            }(t, e);
                            if (t.getSessionUser().serverId !== n.id) return t.getUser(n.id) ? (n.properties || Object(y.c)("no_parsed_user_properties", new Error, {
                                meta: JSON.stringify({
                                    user: e,
                                    parsedUser: n
                                })
                            }), void(n.properties.isBot && t.updateUser(n.id, {
                                properties: {
                                    isBot: !0
                                }
                            }))) : void t.addUser(n);
                            t.updateUser(t.getSessionUserId(), Object(b.db)(["name", "email", "properties"], n))
                        },
                        k = function(e) {
                            var n = pt(t),
                                r = {};
                            if ("rate" in e && n.rate !== e.rate && (r.rate = e.rate), "rateComment" in e && n.rateComment !== e.rateComment && (r.rateComment = e.rateComment), "queue" in e && !Object(b.ib)(n.queue, e.queue)) {
                                var i = e.queue;
                                !t.getChat(z.c).properties.ended && i ? function(e, t) {
                                    var n = t.thread,
                                        r = t.numberInQueue,
                                        i = t.waitingTime,
                                        o = {
                                            active: !0,
                                            properties: {
                                                queued: !0
                                            }
                                        };
                                    n && (o.properties.lastThread = n), e.updateChat(z.c, o), e.updateView("Chat/queue", {
                                        numberInQueue: r,
                                        waitingTime: i
                                    })
                                }(t, {
                                    numberInQueue: i.position,
                                    waitingTime: i.waitingTime
                                }) : r.queued = !1
                            }
                            t.updateChat(z.c, {
                                properties: r
                            })
                        },
                        S = function(e) {
                            Object(Y.d)(t, z.c, e), "message" === e.properties.serverType && t.getApplicationState("readyState") !== q.a.NOT_READY && ot.a(t, e.id)
                        },
                        A = function(e) {
                            var n = Ce(t, e);
                            n && S(n)
                        },
                        M = function(e) {
                            var n = e.author,
                                r = e.event;
                            T(n);
                            var i = t.getChat(z.c),
                                o = i.serverId;
                            i.properties.ended && Object(Y.z)(t, z.c, {
                                chatId: o
                            });
                            var a = Object(K.f)(t, z.c);
                            a && t.removeEvent(z.c, a.id), Object(Y.a)(t), Object(Y.n)(t, r)
                        },
                        R = function(e) {
                            if (!mt.requestingPredictedWelcomeMessage)
                                if (Object(K.I)(t, "postchat")) t.updateChat(z.c, {
                                    properties: {
                                        postponedGreeting: e
                                    }
                                });
                                else if (Object(K.W)(z.c, t)) {
                                if (!e.event.properties.accepted) return t.getApplicationState("greetingsMuted") && !Object(K.T)(t, "maximized") ? (t.updateChat(z.c, {
                                    properties: {
                                        mutedGreeting: e
                                    }
                                }), void M(e)) : (mt.acceptingGreeting = !0, We(o, e).then((function(e) {
                                    mt.acceptingGreeting = !1, M(e)
                                }), (function() {
                                    mt.acceptingGreeting = !1
                                })));
                                M(e)
                            }
                        },
                        L = function(e) {
                            return !!e && -1 !== e.indexOf(t.getApplicationState("group"))
                        },
                        D = function(e) {
                            var n = (void 0 === e ? {} : e).withSystemMessage,
                                r = void 0 !== n && n;
                            if (t.setApplicationState({
                                    limitReached: !0,
                                    clientLimitExceededLifted: !1
                                }), Object(Y.x)(t), r) {
                                var i = Object(K.A)(t) ? "Sorry we couldn't connect you with an agent, but you can still leave us a ticket" : "Sorry, but we couldn't connect you with an agent. Try refreshing the page or come back later.";
                                Object(Y.b)(t, z.c, {
                                    text: i
                                })
                            }
                            Object(K.A)(t) && Object(Y.I)(t)
                        };
                    i.on("thread_properties_deleted", (function(e) {
                            var n = e.threadId,
                                r = e.properties;
                            n === p() && "rating" in r && Object(b.C)("score", r.rating) && k(Object(g.a)({}, pt(t), {
                                rate: null
                            }))
                        })), i.on("thread_properties_updated", (function(e) {
                            var n = e.threadId,
                                r = e.properties;
                            n === p() && "rating" in r && k(Object(g.a)({}, pt(t), Se(r.rating)))
                        })), i.on("queue_position_updated", (function(e) {
                            var n = e.threadId,
                                r = e.queue;
                            n === p() && k(Object(g.a)({}, pt(t), {
                                queue: ze(r)
                            }))
                        })), i.on("chat_transferred", (function(e) {
                            if ("groupIds" in e.transferredTo) {
                                var n = e.transferredTo.groupIds[0];
                                t.updateChat(z.c, {
                                    properties: {
                                        group: n
                                    }
                                }), e.queue && k(Object(g.a)({}, pt(t), {
                                    queue: ze(e.queue)
                                }))
                            }
                        })), i.on("customer_updated", (function(e) {
                            var n = t.getSessionUserId();
                            t.updateUser(n, Object(b.db)(["name", "email"], e)), e.sessionFields && t.setUserProperties(n, e.sessionFields), t.emit("customer_updated")
                        })), i.on("event_properties_updated", (function(e) {
                            var n = e.chatId,
                                r = e.threadId,
                                i = e.eventId,
                                o = e.properties;
                            if (n === Object(K.b)(t) && r === p() && "translation" in o) {
                                var a = t.getEventByServerId(z.c, i);
                                if (!a) return;
                                t.updateEvent(z.c, a.id, {
                                    properties: {
                                        translation: Le(o.translation)
                                    }
                                })
                            }
                        })), i.on("event_updated", (function(e) {
                            var n = e.chatId,
                                r = e.threadId,
                                i = e.event;
                            if (n === Object(K.b)(t) && r === p() && Object(b.x)("properties.lc2.welcome_message", i)) {
                                var o = t.getEventByServerId(z.c, i.id);
                                i.authorId !== o.author && (t.setEventData(z.c, o.id, {
                                    author: i.authorId
                                }), t.recalculateTimeline(z.c)), i.text !== o.properties.text && t.updateEvent(z.c, o.id, {
                                    properties: {
                                        text: i.text
                                    }
                                })
                            }
                        })), t.on("set_application_state", (function(e) {
                            var n = e.pageFocused;
                            Object(K.G)(t) && n && (t.setConnectionState(ue.d), i.connect())
                        })), i.on("disconnected", (function(e) {
                            var n = e.reason;
                            switch (n) {
                                case "product_version_changed":
                                case "wrong_product_version":
                                    return void t.emit("protocol_upgraded", {
                                        version: "2"
                                    });
                                case "access_denied":
                                case "identity_mismatch":
                                case "too_many_connections":
                                    return Object(y.c)(n), void d();
                                case "customer_banned":
                                case "license_not_found":
                                case "unsupported_version":
                                case "inactivity_timeout":
                                    return void(t.getApplicationState("pageFocused") || (t.setConnectionState(ue.b), i.disconnect()));
                                case "users_limit_reached":
                                    return void D({
                                        withSystemMessage: !1
                                    });
                                default:
                                    return "connection_timeout" === n && Math.random() <= .1 ? Object(y.f)("connection_timeout") : Math.random() <= 1e-4 && Object(y.f)("disconnected", {
                                        reason: n
                                    }), void t.setConnectionState(ue.d)
                            }
                        })), i.on("user_added_to_chat", (function(e) {
                            var n = e.chatId,
                                r = e.user;
                            if (e.present && n === Object(K.b)(t) && t.getSessionUser().serverId !== r.id) {
                                var i = Object(K.c)(z.c, t);
                                i && i.id === r.id || (k(Object(g.a)({}, pt(t), {
                                    queue: null
                                })), Object(Y.D)(t, r.id))
                            }
                        })), i.on("user_removed_from_chat", (function(e) {
                            var n = e.chatId,
                                r = e.userId;
                            if (n === Object(K.b)(t) && (t.removeParticipant(z.c, r), t.getSessionUser().serverId !== r)) {
                                var i = Object(K.c)(z.c, t);
                                i && i.id === r && (t.getChat(z.c).properties.ended || Object(Y.D)(t, null))
                            }
                        })), i.on("user_data", T),
                        function(e, t) {
                            e.on("send_snapshot", (function(n) {
                                var r = n.requestId,
                                    i = n.snapshot;
                                t.uploadFile({
                                    file: new Blob([i], {
                                        type: "text/plain;charset=utf-8"
                                    })
                                }).promise.then((function(n) {
                                    t.sendEvent({
                                        chatId: Object(K.b)(e),
                                        event: {
                                            type: "custom",
                                            customId: "cyber-finger-snapshot-" + r,
                                            content: {
                                                url: n.url
                                            }
                                        }
                                    }), Object(y.d)("snapshot_sent", {
                                        chatId: Object(K.b)(e)
                                    })
                                })).catch(b.T)
                            }))
                        }(t, i), i.on("greeting_canceled", (function(e) {
                            var n = e.uniqueId,
                                r = t.getEvents(z.c),
                                i = Object(b.q)((function(e) {
                                    return e.properties.uniqueId === n
                                }), r);
                            i && (Object(K.jb)(t) && Object(K.F)(t) && t.setApplicationState({
                                greetingsMuted: !0
                            }), t.removeEvent(z.c, i.id))
                        }));
                    var N = function() {
                            Object(K.ab)(z.c, t) && Object(Y.s)(t), t.setApplicationState({
                                readyState: q.a.READY,
                                ready: !0
                            })
                        },
                        B = function(e) {
                            var r = e.dynamicConfig,
                                i = e.chatId,
                                a = function(e, t) {
                                    var n = e.monitoring,
                                        r = e.chats,
                                        i = Object.keys(r).find((function(e) {
                                            return Object(b.C)(t, r[e].chat_ids)
                                        }));
                                    if (i !== n.id && r[i].language_config_url) {
                                        var o = r[i].language_config_url.split(".");
                                        return {
                                            groupId: parseInt(o[2]),
                                            language: o[1],
                                            localizationVersion: o[3]
                                        }
                                    }
                                }(r.customer_groups, i);
                            if (a) return {
                                queueTemplate: Xe(o, Object(g.a)({}, a, {
                                    region: n.region
                                })).then((function(e) {
                                    return e.user_in_queue
                                })).catch((function() {
                                    var e;
                                    return Promise.resolve(null == (e = t.getState().localization) ? void 0 : e.user_in_queue)
                                }))
                            }
                        },
                        U = function(e) {
                            var n = e.active,
                                r = e.chatId,
                                i = e.lastThreadId,
                                a = e.becameInactive;
                            if (Object(K.B)(t)) return {
                                fetchedHistory: it(o, r)
                            };
                            if (a) {
                                var c = t.getChat(z.c);
                                return {
                                    fetchedThread: nt(o, {
                                        chatId: r,
                                        threadId: c.properties.lastThread
                                    })
                                }
                            }
                            return n ? {
                                fetchedThread: nt(o, {
                                    chatId: r,
                                    threadId: i
                                })
                            } : void 0
                        },
                        V = function(e) {
                            return e.filter((function(e) {
                                return !(t.hasEvent(z.c, e.id) || "form" === e.type && "ticket" === e.properties.formType)
                            }))
                        },
                        F = function(e) {
                            V(e).forEach(S)
                        },
                        H = function(e, n) {
                            var r = e.eagerFetchingMode,
                                i = n.thread,
                                o = n.eventsSeenUpToMap;
                            if (i) {
                                var a = i.id,
                                    c = i.active,
                                    u = i.agent,
                                    s = i.group,
                                    d = i.events,
                                    l = i.properties,
                                    f = t.getChat(z.c),
                                    p = !c && f.active;
                                t.updateChat(z.c, {
                                    active: c,
                                    properties: Object(g.a)({
                                        ended: f.properties.ended,
                                        lastThread: a,
                                        group: s,
                                        eventsSeenUpToMap: o
                                    }, p && {
                                        ended: !0,
                                        queued: !1,
                                        agentIsTyping: !1
                                    })
                                }), c && Object(Y.D)(t, u), k(Object(g.a)({
                                    rate: null
                                }, l, {
                                    queue: c && "queue" in l ? l.queue : null
                                }, !r && !c && {
                                    rate: null,
                                    rateComment: null
                                })), c && Object(Y.a)(t), F(d)
                            }
                        },
                        G = function(e) {
                            null === Object(K.w)(t, z.c) && t.updateChat(z.c, {
                                properties: {
                                    hasMoreHistory: e
                                }
                            })
                        };
                    i.on("connected", (function(e) {
                        var n = e.__unsafeDynamicConfig,
                            r = e.__unsafeChats,
                            c = e.greeting,
                            d = e.availability,
                            f = e.customer;
                        clearTimeout(W), t.getApplicationState().limitReached && t.setApplicationState({
                            limitReached: !1
                        });
                        var m, h = function(e) {
                            var n = t.getSessionUser(),
                                r = {};
                            return n.name && e.name !== n.name && (r.name = n.name), n.email && e.email !== n.email && (r.email = n.email), Object(b.E)(n.properties) || Object(b.ib)(n.properties, e.sessionFields) || (r.sessionFields = Object(b.E)(e.sessionFields) ? n.properties : Object(b.u)(Object(b.l)(n.properties).reduce((function(t, n) {
                                var r = n[0],
                                    i = n[1];
                                return r in e.sessionFields ? t : [].concat(t, [
                                    [r, i]
                                ])
                            }), []))), Object(b.E)(r) ? null : r
                        }(f);
                        h && function(e) {
                            var t = e.customerData,
                                n = e.usedSessionFieldsNumber,
                                r = function(e) {
                                    i.updateCustomer(e).catch((function(e) {
                                        return Object(y.c)("update_customer_request_failed", e)
                                    }))
                                };
                            t.sessionFields ? Object(b.l)(t.sessionFields).slice(0, z.g - n).reduce((function(e, t) {
                                return Object(b.E)(e) || Object(b.K)(e).length >= z.e ? e.push([t]) : Object(b.K)(e).push(t), e
                            }), []).map(b.u).reduce((function(e, n, i) {
                                return e.then((function() {
                                    return r(Object(g.a)({}, 0 === i && t, {
                                        sessionFields: n
                                    }))
                                }))
                            }), Promise.resolve()) : r(t)
                        }({
                            customerData: h,
                            usedSessionFieldsNumber: Object(b.J)(f.sessionFields || {}).length
                        }), T(f), "boolean" !== typeof t.getApplicationState().isReturning && t.setApplicationState({
                            isReturning: f.statistics.visitsCount > 1
                        }), t.setApplicationState({
                            clientChatNumber: f.statistics.threadsCount || 0,
                            clientVisitNumber: f.statistics.visitsCount || 0,
                            clientLastVisitTimestamp: n.customer_data.last_visit_timestamp,
                            clientPageViewsCount: f.statistics.pageViewsCount || 0
                        }), u = {
                            availability: d,
                            greeting: Object(K.ib)(t) && c && Me(t, c)
                        }, Promise.resolve().then((function() {
                            if (r.length) {
                                var e = r[0],
                                    i = e.id,
                                    a = e.active,
                                    c = e.hasUnreadEvents;
                                Object(K.B)(t) && t.setApplicationState({
                                    hasUnseenEvents: c
                                });
                                var u = !a && t.getChat(z.c).active;
                                m = {
                                    active: a,
                                    chatId: i,
                                    becameInactive: u,
                                    dynamicConfig: n
                                }, null === t.getChat(z.c).serverId && t.setChatServerId(z.c, i);
                                var s = t.getApplicationState().eagerFetchingMode;
                                if (a || Object(K.T)(t, "maximized") || s) return Ke(o)
                            }
                        })).then((function(e) {
                            return e ? (m.group = e.group, m.lastThreadId = e.lastThreadId, m.becameInactive ? ct.b(Object(g.a)({
                                chatSummary: e
                            }, function(e) {
                                var n = e.group;
                                if (!Object(K.U)(t)) {
                                    var r = Object(K.B)(t) ? n : I();
                                    return {
                                        postchatForm: Qe(o, r).catch((function() {
                                            return {
                                                enabled: !1
                                            }
                                        }))
                                    }
                                }
                            }(m), U(m))) : e.active ? ct.b(Object(g.a)({
                                chatSummary: e
                            }, B(m), U(m))) : ct.b(Object(g.a)({
                                chatSummary: e
                            }, U(m)))) : ct.b({})
                        })).then((function(e) {
                            return !!e.chatSummary && e.chatSummary.active ? e : ct.b(Object(g.a)({}, e, {
                                maximizedDecisionActions: Pe() ? Ae({
                                    active: !1,
                                    availability: u.availability,
                                    connected: !0,
                                    hasFakeAgentMessage: Object(K.x)(t, z.c) || !!u.greeting
                                }) : null
                            }))
                        })).then((function(e) {
                            var n = e.queueTemplate,
                                r = e.chatSummary,
                                i = e.postchatForm,
                                o = e.maximizedDecisionActions,
                                a = Object(v.a)(e, ["queueTemplate", "chatSummary", "postchatForm", "maximizedDecisionActions"]),
                                c = u;
                            if (u = {}, n && t.setLocalization({
                                    user_in_queue: n
                                }), t.setApplicationState({
                                    availability: c.availability
                                }), !r) return o && (Object(Y.a)(t), Ve(o)), c.greeting ? R(c.greeting) : void 0;
                            var s = {
                                chatId: r.id,
                                eagerFetchingMode: t.getApplicationState().eagerFetchingMode
                            };
                            t.setApplicationState({
                                eagerFetchingMode: !0
                            });
                            var d = p() && r.lastThreadId !== p();
                            if (Object(K.B)(t)) {
                                var f = a.fetchedHistory;
                                (function(e, t) {
                                    var n = e.getChat(z.c).properties.lastThread;
                                    return n && !t.some((function(e) {
                                        var t = e.id;
                                        return n === t
                                    }))
                                })(t, f.threads) && Object(y.c)("threads_gap", null, {
                                        meta: JSON.stringify({
                                            stateLastThreadId: t.getChat(z.c).properties.lastThread,
                                            fetchedThreads: f.threads.map((function(e) {
                                                return e.id
                                            }))
                                        })
                                    }), d && Object(Y.z)(t, z.c, {
                                        chatId: t.getChat(z.c).serverId
                                    }),
                                    function(e, t) {
                                        l(e.chatId, t.iterator), G(t.hasMore);
                                        var n = Object(b.kb)(-1, t.threads),
                                            r = n[0],
                                            i = n[1][0];
                                        F(Object(b.s)((function(e) {
                                            return e.events
                                        }), r)), H(e, {
                                            thread: i,
                                            eventsSeenUpToMap: t.eventsSeenUpToMap
                                        })
                                    }(s, f)
                            } else a.fetchedThread && (d && r.active && Object(Y.z)(t, z.c, {
                                chatId: t.getChat(z.c).serverId
                            }), H(s, a.fetchedThread));
                            if (o && (Object(Y.a)(t), Ve(o)), !r.active)
                                if (i && i.enabled) Object(Y.G)(t, i.form);
                                else if (c.greeting) return R(c.greeting)
                        })).then((function() {
                            var e = t.getConnectionState() === ue.d;
                            return t.setDefaultView("Chat", "timeline"), t.setConnectionState(ue.a), s(), t.getChat(z.c).active && Object(K.T)(t, "hidden") && Object(Y.v)(t, !0), a.resolve(), e
                        })).then((function(e) {
                            var n = t.getChat(z.c),
                                r = t.getApplicationState().availability;
                            e || !Object(K.E)(t) || !Object(K.Q)(t) || n.active || "offline" !== r && !n.properties.ended || Object(Y.H)(t)
                        })).catch((function(e) {
                            switch (u = {}, e.code) {
                                case "CONNECTION_LOST":
                                    return;
                                case "REQUEST_TIMEOUT":
                                case "MISSING_USER":
                                    return i.disconnect(), void i.connect();
                                case "INTERNAL":
                                    return void Object(y.e)("connection_fetcher_internal_error");
                                default:
                                    return void Object(y.c)("connection_fetcher_error", e)
                            }
                        }))
                    })), Object(Y.L)(n, t), i.once("customer_id", (function(e) {
                        return Object(Y.E)(t, e)
                    }));
                    var W, J = Object(Q.b)(t, q.a.READY),
                        Z = function(e) {
                            return Object(X.u)(J, Object(X.z)(e))
                        },
                        $ = Object(X.u)(Object(Q.c)(t, (function(e) {
                            return Object(dt.a)(e, "maximized")
                        })), Object(X.g)(Boolean), Object(X.p)((function() {
                            return {
                                type: "maximized"
                            }
                        })), X.v),
                        ee = Object(X.u)(Object(Q.c)(t, (function() {
                            return t.getSessionUser().serverId
                        })), Object(X.g)(Boolean), Object(X.A)(1), X.D),
                        te = Object(X.u)(Object(Q.c)(t, (function(e) {
                            return e.localization
                        })), Object(X.g)((function(e) {
                            return Object.keys(e).length > 1
                        })), Object(X.A)(1), X.D);
                    r ? (Math.random() <= .01 && "onLine" in navigator && (W = setTimeout((function() {
                        navigator.onLine && Object(y.f)("unsuccessful_first_connect")
                    }), 3e4)), t.setApplicationState({
                        clientLimitExceededLifted: !0
                    }), te.then(t.setLocalization).then((function() {
                        return a.promise
                    })).then(N)) : Promise.all([te, ee]).then((function(e) {
                        var r, o = e[0];
                        t.setLocalization(o), r = n.onlineGroupIds, t.setApplicationState({
                            availability: L(r) ? "online" : "offline"
                        }), t.setConnectionState(ue.c), s(), N();
                        var a = Object(X.i)(document, ["click", "touchstart"]);
                        Object(X.u)(Object(X.q)(a, $), Object(X.A)(1), Object(X.h)((function() {
                            t.setApplicationState({
                                clientLimitExceededLifted: !0
                            }), i.connect()
                        })))
                    })), "ononline" in window && (i.on("connection_unstable", (function() {
                        t.setConnectionState(ue.d)
                    })), i.on("connection_recovered", (function() {
                        t.setConnectionState(ue.a)
                    }))), i.on("incoming_greeting", (function(e) {
                        if (Object(K.ib)(t)) {
                            var n = Me(t, e);
                            Object(K.D)(t) ? R(n) : u.greeting = n
                        }
                    })), i.on("availability_updated", (function(e) {
                        var n = e.availability;
                        Object(K.D)(t) ? t.setApplicationState({
                            availability: n
                        }) : u.availability = n
                    })), i.on("events_marked_as_seen", (function(e) {
                        var n, r = e.chatId,
                            i = e.userId,
                            o = e.seenUpTo;
                        if (r === Object(K.b)(t)) {
                            t.updateChat(z.c, {
                                properties: {
                                    eventsSeenUpToMap: Object(g.a)({}, t.getChat(z.c).properties.eventsSeenUpToMap, (n = {}, n[i] = o, n))
                                }
                            });
                            var a = new Date(o).getTime();
                            (t.getSessionUser().serverId === i ? K.s : K.n)(z.c, a, t).forEach((function(e) {
                                t.updateEvent(z.c, e.id, {
                                    seen: !0
                                })
                            }))
                        }
                    })), i.on("incoming_event", (function(e) {
                        var n = e.chatId,
                            r = e.event;
                        n === Object(K.b)(t) && ("postchat" === Object(b.x)("properties.lc2.form_type", r) && (Object(Y.w)(t), t.setDefaultView("Chat", "timeline")), Object(K.C)(z.c, t) && Object(y.c)("received_event_during_chat_starting"), A(r))
                    })), i.on("chat_deactivated", (function(e) {
                        e.chatId === Object(K.b)(t) && x()
                    })), i.on("incoming_chat", (function(e) {
                        Object(Y.z)(t, z.c, {
                            chatId: e.chat.id
                        });
                        var n = Oe(t, e);
                        f(n)
                    }));
                    var ne = function(e) {
                            var n = e.chatId,
                                r = e.typingIndicator;
                            if (n !== Object(K.b)(t)) return !1;
                            var i = Object(K.c)(z.c, t);
                            return !!i && i.id === r.authorId
                        },
                        re = Object(X.u)(Object(X.j)(i, "incoming_typing_indicator"), Object(X.g)((function(e) {
                            return e.typingIndicator.isTyping && ne(e)
                        })), Object(X.p)((function() {
                            return !0
                        }))),
                        ie = Object(X.u)(Object(X.j)(i, "incoming_typing_indicator"), Object(X.g)((function(e) {
                            return !e.typingIndicator.isTyping && ne(e)
                        })), Object(X.p)((function() {
                            return !1
                        }))),
                        ae = Object(X.u)(Object(X.j)(i, "incoming_event"), Object(X.g)((function(e) {
                            var n = e.chatId,
                                r = e.event;
                            return n === Object(K.b)(t) && r.authorId !== t.getSessionUser().serverId && "system" !== r.authorId
                        })));
                    Object(X.u)(Object(X.q)(Object(X.u)(re, Object(X.g)((function() {
                        return !t.getChat(z.c).properties.messageDraft
                    }))), ie, Object(X.u)(ae, Object(X.p)((function() {
                        return !1
                    })))), Object(X.z)((function(e) {
                        return e ? Object(X.b)(Object(X.s)(!0), Object(X.u)(Object(X.C)(1e4), Object(X.p)((function() {
                            return !1
                        })))) : Object(X.s)(!1)
                    })), Object(X.d)(), Object(X.h)((function(e) {
                        t.updateChat(z.c, {
                            properties: {
                                agentIsTyping: e
                            }
                        })
                    })));
                    Object(X.u)(Object(Q.c)(t, (function() {
                        return t.getChat(z.c).properties.loadingHistory
                    })), Object(X.g)(Boolean), Object(X.h)((function e() {
                        c.next().then((function(n) {
                            var r = n.value,
                                i = n.done,
                                o = t.getTimeline(z.c).length,
                                a = V(Object(b.s)((function(e) {
                                    return e.events.map((function(e) {
                                        return Object(g.a)({}, e, {
                                            seen: !0
                                        })
                                    }))
                                }), r));
                            a.length > 0 && t.addHistoryEvents(z.c, a), o !== t.getTimeline(z.c).length || i ? t.updateChat(z.c, {
                                properties: {
                                    loadingHistory: !1,
                                    hasMoreHistory: !i
                                }
                            }) : e()
                        }), (function() {
                            t.updateChat(z.c, {
                                properties: {
                                    loadingHistory: !1
                                }
                            })
                        }))
                    }))), t.on("request_update_chat", (function(e) {
                        var n = e.resolve,
                            r = e.reject,
                            o = e.data,
                            a = o.properties,
                            c = void 0 === a ? {} : a,
                            u = Object(v.a)(o, ["properties"]);
                        if (c.rateComment) {
                            var s = c.rateComment;
                            ot.d(t, s), i.rateChat({
                                chatId: Object(K.b)(t),
                                rating: {
                                    comment: s
                                }
                            }).then(n, r)
                        } else if ("undefined" !== typeof c.rate) {
                            ot.e(t, c.rate);
                            var d = t.getApplicationState().testGroup;
                            if (Object(y.b)({
                                    testGroup: d,
                                    chatRating: null === c.rate ? "canceled" : c.rate,
                                    chatRatingSource: "other"
                                }), null === c.rate) return void i.cancelRate({
                                chatId: Object(K.b)(t)
                            }).then((function() {
                                t.updateChat(z.c, {
                                    properties: {
                                        rateComment: null
                                    }
                                }), n()
                            }), r);
                            i.rateChat({
                                chatId: Object(K.b)(t),
                                rating: {
                                    score: m(c.rate)
                                }
                            }).then(n, r)
                        } else c.transcriptSentTo ? i.updateThreadProperties({
                            chatId: Object(K.b)(t),
                            threadId: p(),
                            properties: {
                                routing: {
                                    transcript_email: c.transcriptSentTo
                                }
                            }
                        }).then(n, r) : !1 === u.active ? i.deactivateChat({
                            id: Object(K.b)(t)
                        }).then((function() {
                            x(), n()
                        }), r) : "string" === typeof c.messageDraft && (t.getChat(z.c).active && i.setSneakPeek({
                            chatId: Object(K.b)(t),
                            sneakPeekText: c.messageDraft
                        }), n())
                    }));
                    var pe = function(e) {
                            return "subject" === e.serverType ? "subject" : "name" === e.name ? "name" : "text" === e.type ? "question" : e.type
                        },
                        me = function(e, t) {
                            var n = e.id,
                                r = e.properties,
                                i = r.formType,
                                o = r.formId,
                                a = r.fields,
                                c = fe.b(a, t),
                                u = c.fields,
                                s = {
                                    filledForm: {
                                        customId: n,
                                        type: "filled_form",
                                        formId: o,
                                        fields: a.filter((function(e) {
                                            return void 0 !== e.serverName && "rating" !== e.type && "information" !== e.type
                                        })).map((function(e) {
                                            if ("groupSelect" === e.meta) return {
                                                type: "group_chooser",
                                                id: e.serverName,
                                                label: Object(ut.b)(e.label),
                                                answer: {
                                                    id: String(c.choosenGroupIndex),
                                                    groupId: c.choosenGroup,
                                                    label: e.options[c.choosenGroupIndex].label
                                                }
                                            };
                                            if ("confirm_subscription" === e.meta) {
                                                var t = u[e.serverName];
                                                return {
                                                    type: "checkbox_for_email",
                                                    id: e.serverName,
                                                    label: e.options[0].label,
                                                    answer: !!t && Object(b.C)(e.options[0].originalValue, t)
                                                }
                                            }
                                            if (Object(b.D)(e.options)) {
                                                var n = {
                                                        type: pe(e),
                                                        id: e.serverName,
                                                        label: Object(ut.b)(e.label)
                                                    },
                                                    r = Object(b.A)(e.serverName, u) ? Object(b.k)(u[e.serverName]) : [],
                                                    i = e.options.filter((function(e) {
                                                        return Object(b.C)(e.originalValue, r)
                                                    })).map((function(e) {
                                                        return {
                                                            label: e.label,
                                                            value: e.originalValue
                                                        }
                                                    }));
                                                if ("checkbox" === n.type) n.answers = i.map((function(e) {
                                                    return {
                                                        label: e.label,
                                                        id: e.value
                                                    }
                                                }));
                                                else if (i.length) {
                                                    var o = i[0];
                                                    n.answer = {
                                                        id: o.value,
                                                        label: o.label
                                                    }
                                                }
                                                return n
                                            }
                                            return Object(b.A)(e.serverName, u) ? {
                                                type: pe(e),
                                                id: e.serverName,
                                                label: Object(ut.b)(e.label),
                                                answer: u[e.serverName]
                                            } : {
                                                type: pe(e),
                                                id: e.serverName,
                                                label: Object(ut.b)(e.label)
                                            }
                                        })),
                                        properties: {
                                            lc2: {
                                                form_type: i
                                            }
                                        }
                                    }
                                };
                            return void 0 !== c.choosenGroup && (s.choosenGroup = c.choosenGroup), s
                        },
                        he = 0,
                        be = Object(b.tb)(300, (function(e) {
                            var n = Object(K.b)(t),
                                r = new Date(e).toISOString().replace(/Z$/, "999Z");
                            n && i.markEventsAsSeen({
                                chatId: n,
                                seenUpTo: r
                            }).catch(b.T)
                        }));
                    t.on("request_update_event", (function(e) {
                        var n, r = t.getEvent(z.c, e.id);
                        if (e.data.seen) e.resolve(), he = Math.max(he, t.getEvent(z.c, e.id).timestamp), be(he);
                        else if ("ticket" === r.properties.formType) {
                            var a = e.data.properties.answers,
                                c = r.properties.fields,
                                u = fe.b(c, a).fields,
                                s = t.getApplicationState(),
                                l = null,
                                f = null,
                                p = null;
                            switch (Object(K.g)("ticketForm", t).mode) {
                                case "helpdesk":
                                    var m = Object(de.b)({
                                        license: s.license,
                                        group: s.group,
                                        pageUrl: s.page.url,
                                        form: (n = r.properties, Object(le.a)(Object(le.b)(n))),
                                        answers: u
                                    });
                                    l = Object(de.c)("production", m), f = function(e) {
                                        return Object(de.a)(e.id, m)
                                    }, p = Y.j;
                                    break;
                                case "offline_message":
                                    var v = me(r, a).filledForm;
                                    l = Ee({
                                        customerStartingEvent: v
                                    }), f = function(e) {
                                        var t, n, r = Object(b.n)((function(e) {
                                            return "subject" === e.type
                                        }), v.fields);
                                        return Object(g.a)({
                                            id: e.thread,
                                            text: lt(v),
                                            visitor: {
                                                name: (null == (t = Object(b.n)((function(e) {
                                                    return "name" === e.type
                                                }), v.fields)) ? void 0 : t.answer) || null,
                                                email: (null == (n = Object(b.n)((function(e) {
                                                    return "email" === e.type
                                                }), v.fields)) ? void 0 : n.answer) || null
                                            }
                                        }, (null == r ? void 0 : r.answer) && {
                                            subject: r.answer
                                        })
                                    }, p = function(e, t, n) {
                                        n()
                                    };
                                    break;
                                default:
                                    var O = me(r, a).filledForm,
                                        x = (new Intl.DateTimeFormat).resolvedOptions().timeZone;
                                    l = i.sendTicketForm({
                                        filledForm: O,
                                        groupId: s.group,
                                        timeZone: "string" !== typeof x || /^Etc\//.test(x) || -1 === x.indexOf("/") && "UTC" !== x ? null : x
                                    }), f = function(e) {
                                        var t, n, r = Object(b.n)((function(e) {
                                            return "subject" === e.type
                                        }), O.fields);
                                        return Object(g.a)({
                                            id: e.id,
                                            text: e.text,
                                            visitor: {
                                                name: (null == (t = Object(b.n)((function(e) {
                                                    return "name" === e.type
                                                }), O.fields)) ? void 0 : t.answer) || null,
                                                email: (null == (n = Object(b.n)((function(e) {
                                                    return "email" === e.type
                                                }), O.fields)) ? void 0 : n.answer) || null
                                            }
                                        }, (null == r ? void 0 : r.answer) && {
                                            subject: r.answer
                                        })
                                    }, p = function(e, t, n) {
                                        e && "VALIDATION" === e.code ? /name must be at most \d+ characters long/.test(e.message) ? n({
                                            name: e.message
                                        }) : "mail must be a valid e-mail address" !== e.message ? n() : n({
                                            email: t("invalid_email")
                                        }) : n()
                                    }
                            }
                            l.then((function(n) {
                                var i = r.properties.fields;
                                ot.g(t, i, u, f(n)), e.resolve(), Object(Y.N)(t, e.id), t.setCurrentView("Chat")
                            }), (function(n) {
                                p(n, t.localize, e.reject)
                            }))
                        } else if ("prechat" === r.properties.formType) {
                            var E = e.data.properties.answers,
                                I = r.properties.fields;
                            ot.c(t, I, fe.b(I, E).fields);
                            var T = me(r, E),
                                k = T.filledForm,
                                S = T.choosenGroup,
                                A = function(t) {
                                    switch (t.code) {
                                        case "SERVICE_UNAVAILABLE":
                                            return void D({
                                                withSystemMessage: !0
                                            });
                                        case "GROUPS_OFFLINE":
                                            return void w().then(e.resolve, e.reject);
                                        case "CUSTOMER_BANNED":
                                        case "GROUP_NOT_FOUND":
                                            return void d();
                                        default:
                                            e.reject()
                                    }
                                },
                                M = function() {
                                    return Ee({
                                        customerStartingEvent: k,
                                        agentFakeEvent: Object(K.f)(t, z.c),
                                        group: S
                                    }).then((function(e) {
                                        xe(e), t.setDefaultView("Chat", "timeline")
                                    })).catch((function(e) {
                                        return A(e)
                                    }))
                                };
                            if (void 0 !== S) return void
                            function(e, t) {
                                var n = t.groupId;
                                return Je(e, {
                                    groupIds: [n]
                                }).then((function(e) {
                                    return e[n]
                                }))
                            }(o, {
                                groupId: S
                            }).then((function(e) {
                                if ("not_found" === e) {
                                    var t = new Error('Group "' + S + '" not found (most likely it has been removed).');
                                    throw t.code = "GROUP_NOT_FOUND", t
                                }
                                return e
                            })).then((function(n) {
                                var r = t.getApplicationState().group;
                                if (t.setApplicationState({
                                        group: S
                                    }), !("online" === n)) return Object(K.E)(t) ? void M().then((function() {
                                    t.setApplicationState({
                                        availability: "offline"
                                    })
                                }), A) : void Promise.all([$e(o, S), r !== S && et(o, {
                                    groupId: S
                                })].filter(Boolean)).then((function(e) {
                                    var n = e[0],
                                        r = e[1];
                                    n.enabled ? (Object(Y.i)(t, "ticketForm", r && {
                                        mode: r
                                    }), t.updateView("Chat/ticketForm", n.form)) : Object(Y.g)(t, "ticketForm"), t.setApplicationState({
                                        availability: "offline"
                                    })
                                }), (function(t) {
                                    "CONNECTION_LOST" !== t.code ? d() : e.reject()
                                }));
                                M().catch(A)
                            }), (function(t) {
                                "CONNECTION_LOST" !== t.code ? d() : e.reject()
                            }));
                            M()
                        } else if ("postchat" === r.properties.formType) {
                            var R = e.data.properties.answers,
                                L = r.properties.fields;
                            ot.b(t, L, fe.b(L, R).fields);
                            var P = me(r, R).filledForm;
                            i.sendEvent({
                                chatId: Object(K.b)(t),
                                event: P,
                                attachToLastThread: !0
                            }).then((function(n) {
                                e.resolve(), Object(Y.N)(t, e.id, Ce(t, n)), "rating" in R ? function(e, t) {
                                    var n = j(t),
                                        r = e.getApplicationState().testGroup;
                                    if ("NOTHING" === n.score && "NOTHING" === n.comment) return Promise.resolve(null);
                                    Object(y.b)({
                                        testGroup: r,
                                        chatRating: "CANCEL" === n.score ? "canceled" : t.rating,
                                        chatRatingSource: "postchat"
                                    });
                                    var i = [];
                                    return n.score === at && n.comment === at ? (i.push(h(t)), ot.e(e, t.rating), ot.d(e, t.rateComment)) : "CANCEL" === n.score && "CANCEL" === n.comment ? i.push(_(["comment", "score"])) : ("CANCEL" === n.score ? i.push(_(["score"])) : n.score === at && (i.push(h({
                                        rating: t.rating
                                    })), ot.e(e, t.rating)), "CANCEL" === n.comment ? i.push(_(["comment"])) : n.comment === at && (i.push(h({
                                        rateComment: t.rateComment
                                    })), ot.d(e, t.rateComment))), Promise.all(i.map((function(e) {
                                        return e.catch(b.T)
                                    })))
                                }(t, R).finally((function() {
                                    return C(t)
                                })) : C(t)
                            })).catch((function(e) {
                                if (e.message === z.b) return Object(Y.z)(t, z.c, {
                                    forced: !0
                                }), Ae(Fe()).then((function(e) {
                                    return Ve(e)
                                }));
                                throw e
                            }))
                        }
                    })), t.on("request_update_user", (function(e) {
                        var n = e.resolve,
                            r = e.id,
                            o = e.data,
                            a = o.properties,
                            c = Object(v.a)(o, ["properties"]);
                        if (t.getSessionUserId() === r) {
                            if (Object(K.D)(t)) {
                                var u = Object(b.f)({
                                    name: c.name,
                                    email: c.email,
                                    sessionFields: a
                                });
                                i.updateCustomer(u).catch((function(e) {
                                    return Object(y.c)("update_customer_request_failed", e)
                                }))
                            }
                            n()
                        }
                    })), t.on("request_set_user_properties", (function(e) {
                        var n = e.resolve,
                            r = e.id,
                            o = e.properties;
                        t.getSessionUserId() === r && (Object(K.D)(t) && i.setCustomerSessionFields({
                            sessionFields: o
                        }).catch(b.T), n())
                    }));
                    var ge = function(e, n) {
                            var r = n.id,
                                i = n.timestamp,
                                o = n.threadId;
                            ot.f(t, e, i), t.setEventServerId(z.c, e.id, r), t.updateEvent(z.c, e.id, {
                                delivered: !0,
                                serverTimestamp: i,
                                thread: o
                            })
                        },
                        ve = function(e) {
                            t.updateEvent(z.c, e.id, {
                                failed: !0
                            })
                        };
                    t.on("send_file_events", (function() {
                        t.setApplicationState({
                            isSendingFileEvents: !0
                        });
                        var e = [].concat(Object(K.j)(t));
                        e.filter((function(e) {
                            return e.properties.failed
                        })).forEach((function(e) {
                            return t.updateEvent(z.c, e.id, {
                                properties: {
                                    canceled: !0
                                }
                            })
                        }));
                        var n = e.filter((function(e) {
                            var t = e.type,
                                n = e.delivered,
                                r = e.properties,
                                i = r.canceled,
                                o = r.finished;
                            return "file" === t && !n && !i && o
                        })).map((function(e) {
                            return i.sendEvent({
                                chatId: Object(K.b)(t),
                                event: {
                                    type: "file",
                                    customId: e.id,
                                    url: e.properties.serverUrl,
                                    alternativeText: e.properties.alternativeText
                                }
                            }).then((function(n) {
                                t.updateEvent(z.c, e.id, {
                                    delivered: !0
                                }), A(n), Promise.resolve().then((function() {
                                    "image" === e.properties.fileType && URL.revokeObjectURL(e.properties.url)
                                }))
                            }))
                        }));
                        Promise.all(n).finally((function() {
                            t.setApplicationState({
                                isSendingFileEvents: !1
                            })
                        }))
                    }));
                    var ye = {};
                    t.on("cancel_upload", (function(e) {
                        var n = e.eventId,
                            r = t.getEvent(z.c, n);
                        t.updateEvent(z.c, n, {
                            properties: {
                                canceled: !0
                            }
                        }), ye[n] && ye[n].cancel(), Promise.resolve().then((function() {
                            "image" === r.properties.fileType && URL.revokeObjectURL(r.properties.url)
                        }))
                    }));
                    var we = function(e) {
                            var n = e.event,
                                r = e.meta;
                            if ("file" === n.type) {
                                var o = i.uploadFile({
                                    file: r.file,
                                    onProgress: function(e) {
                                        return t.updateEvent(z.c, n.id, {
                                            properties: {
                                                progress: e
                                            }
                                        })
                                    }
                                });
                                return ye[n.id] = o, o.promise.then((function(e) {
                                    var r = e.url;
                                    t.updateEvent(z.c, n.id, {
                                        properties: {
                                            serverUrl: r,
                                            finished: !0
                                        }
                                    })
                                }), (function(e) {
                                    "UPLOAD_CANCELED" !== e.code && t.updateEvent(z.c, n.id, {
                                        properties: {
                                            failed: !0,
                                            failReason: ft(t, e)
                                        }
                                    })
                                })).finally((function() {
                                    delete ye[n.id]
                                }))
                            }
                            if (Object(b.C)(n.type, ["message", "emoji"])) return i.sendEvent({
                                chatId: Object(K.b)(t),
                                event: Re(t, n)
                            }).then((function(e) {
                                ge(n, e)
                            }), (function() {
                                ve(n)
                            }));
                            if ("custom_system_message" === n.type) return i.sendEvent({
                                chatId: Object(K.b)(t),
                                event: Re(t, n)
                            }).then(A, b.T);
                            if ("rich_message_postback" === n.type) {
                                var a = n.properties,
                                    c = a.eventId,
                                    u = a.postback;
                                return i.sendRichMessagePostback({
                                    chatId: Object(K.b)(t),
                                    threadId: t.getEvent(z.c, c).thread,
                                    eventId: c,
                                    postback: u
                                }).catch(b.T)
                            }
                            if ("url_preview" === n.type) {
                                var s = i.getUrlInfo({
                                    url: n.properties.url
                                }).catch((function() {
                                    return null
                                }));
                                return i.sendEvent({
                                    chatId: Object(K.b)(t),
                                    event: Re(t, n)
                                }).then((function(e) {
                                    ge(n, e), s.then((function(r) {
                                        var o = r.title,
                                            a = r.description,
                                            c = r.url,
                                            u = r.imageUrl;
                                        return t.updateEvent(z.c, n.id, {
                                            properties: {
                                                title: o,
                                                description: a,
                                                image: {
                                                    url: u,
                                                    link: c
                                                }
                                            }
                                        }), i.updateEventProperties({
                                            chatId: Object(K.b)(t),
                                            threadId: e.thread,
                                            eventId: e.id,
                                            properties: {
                                                url_details: {
                                                    title: o,
                                                    description: a,
                                                    url: c,
                                                    image_url: u,
                                                    image_width: r.imageWidth,
                                                    image_height: r.imageHeight
                                                }
                                            }
                                        })
                                    })).catch(b.T)
                                }), (function() {
                                    ve(n)
                                }))
                            }
                        },
                        xe = function(e) {
                            var n = e.events,
                                r = Object(v.a)(e, ["events"]),
                                i = t.getSessionUser().id;
                            n.forEach((function(e) {
                                t.getEvent(z.c, e.id) ? e.author === i ? function(e, t) {
                                    var n = t.timestamp;
                                    "message" === t.properties.serverType && ot.f(e, t, n), e.setEventServerId(z.c, t.id, t.serverId);
                                    var r = {
                                        delivered: !0,
                                        serverTimestamp: n,
                                        thread: t.thread
                                    };
                                    "form" === t.type && (r.properties = {
                                        answered: !0,
                                        fields: t.properties.fields
                                    }), e.updateEvent(z.c, t.id, r)
                                }(t, e) : e.properties.welcomeMessage || e.properties.invitation ? function(e, t) {
                                    var n = Object(K.f)(e, z.c);
                                    e.setEventServerId(z.c, n.id, t.serverId);
                                    var r = n.author !== t.author;
                                    r && e.setEventData(z.c, n.id, {
                                        author: t.author
                                    });
                                    var i = {
                                        delivered: !0,
                                        thread: t.thread,
                                        serverTimestamp: t.timestamp,
                                        properties: {}
                                    };
                                    n.properties.text !== t.properties.text && (i.properties.text = t.properties.text), e.updateEvent(z.c, n.id, i), r && (Object(Y.D)(e, t.author), e.recalculateTimeline(z.c))
                                }(t, e) : S(e) : S(e)
                            })), f(Object(g.a)({}, r, {
                                events: []
                            }))
                        },
                        Ee = function e(n) {
                            return t.updateChat(z.c, {
                                properties: {
                                    starting: !0
                                }
                            }), Ye(o, n).then((function(e) {
                                return t.updateChat(z.c, {
                                    properties: {
                                        starting: !1
                                    }
                                }), e
                            }), (function(r) {
                                if (r.message === z.b) return Object(Y.z)(t, z.c, {
                                    forced: !0
                                }), e(n);
                                throw t.updateChat(z.c, {
                                    properties: {
                                        starting: !1
                                    }
                                }), r
                            }))
                        },
                        Ie = [],
                        Te = function(e) {
                            if (Object(K.C)(z.c, t)) Ie.push(e);
                            else {
                                var n = function() {
                                    Object(K.X)(t) && Object(Y.c)(t)
                                };
                                t.getChat(z.c).active ? e && we(e).then(n) : Ee(Object(g.a)({}, e && {
                                    customerStartingEvent: e.event
                                }, {
                                    agentFakeEvent: Object(K.f)(t, z.c)
                                })).then((function(e) {
                                    xe(e);
                                    var t = Ie;
                                    Ie = [], t.forEach(we), n()
                                }), (function(n) {
                                    t.updateEvent(z.c, e.event.id, {
                                        failed: !0
                                    });
                                    var r = Ie;
                                    switch (Ie = [], r.forEach((function(e) {
                                        t.updateEvent(z.c, e.id, {
                                            failed: !0
                                        })
                                    })), n.code) {
                                        case "SERVICE_UNAVAILABLE":
                                            return void D({
                                                withSystemMessage: !0
                                            });
                                        case "CUSTOMER_BANNED":
                                            return void d();
                                        case "GROUPS_OFFLINE":
                                            return void w();
                                        default:
                                            return
                                    }
                                }))
                            }
                        };
                    t.on("start_thread", Te), t.on("send_event", Te), t.on("request_cancel_greeting", (function(e) {
                        Object(K.T)(t, "maximized") && Object(Y.v)(t), i.cancelGreeting({
                            uniqueId: e
                        })
                    }));
                    var ke = function(e) {
                            return Ee({
                                agentFakeEvent: e
                            }).then((function(e) {
                                return [{
                                    type: "hide_ticket_form"
                                }, {
                                    type: "chat_activated",
                                    payload: e
                                }]
                            }), (function(e) {
                                switch (e.code) {
                                    case "WIDGET_DESTROYED":
                                    case "CHAT_ALREADY_ACTIVE":
                                    case "CHAT_LIMIT_REACHED":
                                        return {
                                            type: "nothing"
                                        };
                                    case "GROUPS_OFFLINE":
                                        return $e(o, t.getApplicationState("group")).then((function(e) {
                                            return e.enabled ? {
                                                type: "nothing"
                                            } : {
                                                type: "show_ticket_form",
                                                payload: e.form
                                            }
                                        }));
                                    case "CUSTOMER_BANNED":
                                    default:
                                        return {
                                            type: "panic"
                                        }
                                }
                            }))
                        },
                        Ae = function(e) {
                            var n = e.active,
                                r = e.availability,
                                i = e.connected,
                                a = e.hasFakeAgentMessage,
                                c = e.startChatAgainPending,
                                u = e.limitReached,
                                s = e.hasMutedGreeting;
                            return Object(se.a)((function() {
                                return u || n ? {
                                    type: "nothing"
                                } : "offline" === r ? Object(K.E)(t) ? c && Object(K.Q)(t) ? {
                                    type: "show_prechat"
                                } : {
                                    type: "nothing"
                                } : Object(K.R)(t) ? Object(K.v)(t) ? {
                                    type: "nothing"
                                } : {
                                    type: "show_ticket_form"
                                } : {
                                    type: "hide_prechat_form"
                                } : s ? {
                                    type: "accept_muted_greeting"
                                } : a ? {
                                    type: "hide_ticket_form"
                                } : Object(K.T)(t, "maximized") ? Object(K.Q)(t) ? {
                                    type: "show_prechat"
                                } : !i || mt.acceptingGreeting ? {
                                    type: "nothing"
                                } : (mt.requestingPredictedWelcomeMessage = !0, te.then((function() {
                                    return function(e) {
                                        var t = e.sdk,
                                            n = e.store;
                                        return t.getPredictedAgent().then((function(e) {
                                            var t, r = e.agent,
                                                i = e.queue,
                                                o = n.localize("welcome_to_chat");
                                            return {
                                                agent: r,
                                                groupHasQueue: i,
                                                message: fe.e((t = {
                                                    id: Object(b.w)(n.getIndexedEvents(z.c)),
                                                    type: "message",
                                                    authorId: r.id,
                                                    text: Object(O.h)(n, o, {
                                                        agent: r.name
                                                    }),
                                                    originalText: o,
                                                    welcomeMessage: !0
                                                }, Object(g.a)({}, t, {
                                                    serverId: null,
                                                    timestamp: Date.now(),
                                                    seen: !0,
                                                    properties: t.properties || {}
                                                })))
                                            }
                                        }))
                                    }(o)
                                })).then((function(e) {
                                    var t = e.agent,
                                        n = e.message,
                                        r = e.groupHasQueue;
                                    return mt.requestingPredictedWelcomeMessage = !1, t.isBot ? ke(n) : [{
                                        type: "hide_ticket_form"
                                    }, {
                                        type: "predicted_welcome_message",
                                        payload: {
                                            agent: t,
                                            message: n,
                                            groupHasQueue: r
                                        }
                                    }]
                                }), (function(e) {
                                    if (mt.requestingPredictedWelcomeMessage = !1, "offline" === t.getApplicationState("availability")) return {
                                        type: "nothing"
                                    };
                                    switch (e.code) {
                                        case "GROUP_UNAVAILABLE":
                                            return ke();
                                        case "GROUP_OFFLINE":
                                            return {
                                                type: "nothing"
                                            };
                                        default:
                                            return {
                                                type: "panic"
                                            }
                                    }
                                }))) : {
                                    type: "nothing"
                                }
                            })).then(b.k)
                        },
                        Pe = function() {
                            var e = t.getChat(z.c);
                            return (!e.active || e.properties.queued) && !e.properties.starting && !e.properties.ended
                        },
                        De = function() {
                            t.updateView("minimized", {
                                hidden: !1
                            })
                        };
                    Object(X.u)($, Object(X.h)(De));
                    var Ne = Object(X.u)(Object(Q.c)(t, (function(e) {
                        return e.application.destroyed
                    })), Object(X.g)(Boolean), Object(X.A)(1), X.v);
                    Object(X.u)(J, Object(X.A)(1), Object(X.p)((function() {
                        var e = Object(oe.a)(Object(b.ab)(["license", "group", "requestedGroup"], t.getApplicationState()));
                        return [Object(st.b)("session") && window.sessionStorage.getItem(e), e]
                    })), Object(X.g)((function(e) {
                        var t = e[0];
                        return Boolean(t)
                    })), Object(X.h)((function(e) {
                        var n = e[0],
                            r = e[1];
                        ! function(e) {
                            var n, r = p();
                            try {
                                n = JSON.parse(e)
                            } catch (i) {
                                return
                            }
                            n && r && n.forEach((function(e) {
                                t.getEvent(z.c, e.id) || Object(Y.d)(t, z.c, {
                                    thread: r,
                                    id: e.id,
                                    type: "file",
                                    own: !0,
                                    author: t.getSessionUser().id,
                                    delivered: !1,
                                    failed: !1,
                                    properties: e
                                })
                            }))
                        }(n), window.sessionStorage.removeItem(r)
                    })));
                    var qe = Object(X.u)(Object(Q.c)(t, (function(e) {
                            return e.application.availability
                        })), Object(X.x)(1), X.w, Object(X.p)((function(e) {
                            return {
                                type: e
                            }
                        })), Object(X.t)((function(e) {
                            return "online" === e.type
                        }))),
                        Be = qe[0],
                        Ue = qe[1];
                    Object(X.u)(Z((function() {
                        return Ue
                    })), Object(X.g)(Pe), Object(X.h)((function() {
                        !Object(K.I)(t, "prechat") && Object(K.E)(t) && Object(K.Q)(t) && "offline" === t.getApplicationState().availability && !t.getChat(z.c).active && Object(Y.H)(t), Object(K.I)(t, "prechat") && (Object(Y.x)(t), Object(K.E)(t) && Object(Y.H)(t)), s()
                    }))), Object(X.u)(Be, Object(X.g)(Pe), Object(X.h)((function() {
                        t.getView("minimized").hidden && De(), !Object(K.R)(t) && Object(K.O)(t) && Object(K.T)(t, "hidden") && Object(Y.v)(t)
                    }))), Object(X.u)(Z((function() {
                        if (!Object(K.Q)(t)) return X.r;
                        var e = Object(Q.c)(t, (function() {
                            return Object(K.I)(t, "prechat")
                        }));
                        return Object(X.u)(Object(X.q)($, e), Object(X.g)((function() {
                            return Object(K.I)(t, "prechat")
                        })), Object(X.z)((function() {
                            var e = t.getLastEvent(z.c);
                            return Object(X.u)(Object(X.m)(function(e, t) {
                                var n = Object(b.o)((function(e) {
                                    return "groupSelect" === e.meta
                                }), t);
                                if (-1 === n) return Promise.resolve(null);
                                var r = t[n],
                                    i = r.options.map((function(e) {
                                        return e.groupId
                                    }));
                                return i.length > 20 ? Promise.resolve(null) : Je(e, {
                                    groupIds: i
                                }).then((function(e) {
                                    return Object(b.xb)(n, Object(g.a)({}, r, {
                                        options: r.options.map((function(t) {
                                            return Object(g.a)({}, t, {
                                                meta: {
                                                    online: "online" === e[t.groupId]
                                                }
                                            })
                                        }))
                                    }), t)
                                }))
                            }(o, e.properties.fields)), X.o)
                        })))
                    })), Object(X.g)((function(e) {
                        return e && Object(K.I)(t, "prechat")
                    })), Object(X.h)((function(e) {
                        var n = t.getLastEvent(z.c).id;
                        return t.updateEvent(z.c, n, {
                            properties: {
                                fields: e
                            }
                        })
                    })));
                    var Ve = function(e) {
                            return e.forEach((function(e) {
                                switch (e.type) {
                                    case "panic":
                                        return void d();
                                    case "chat_activated":
                                        return void xe(e.payload);
                                    case "predicted_welcome_message":
                                        var n = e.payload,
                                            r = n.agent,
                                            i = n.message,
                                            a = n.groupHasQueue;
                                        return T(r), Object(Y.D)(t, r.id), S(i), void t.updateChat(z.c, {
                                            properties: {
                                                fakeAgentMessageId: i.id,
                                                groupHasProbableQueue: a
                                            }
                                        });
                                    case "show_ticket_form":
                                        return e.payload && t.updateView("Chat/ticketForm", e.payload), void Object(Y.I)(t);
                                    case "hide_prechat_form":
                                        return void Object(Y.x)(t);
                                    case "hide_ticket_form":
                                        return void(Object(K.I)(t, "ticket") && (Object(Y.y)(t), t.setDefaultView("Chat", "timeline")));
                                    case "show_prechat":
                                        return void Object(Y.H)(t);
                                    case "accept_muted_greeting":
                                        return void
                                        function() {
                                            var e = t.getLastEvent(z.c),
                                                n = t.getChat(z.c).properties.mutedGreeting;
                                            t.updateEvent(z.c, e.id, {
                                                seen: !0
                                            }), mt.acceptingGreeting = !0, We(o, n).then((function(e) {
                                                var n = e.event;
                                                t.updateChat(z.c, {
                                                    properties: {
                                                        mutedGreeting: void 0
                                                    }
                                                }), Object(Y.u)(t, n)
                                            }), b.T).finally((function() {
                                                mt.acceptingGreeting = !1
                                            }))
                                        }();
                                    default:
                                        return
                                }
                            }))
                        },
                        Fe = function() {
                            var e = t.getChat(z.c);
                            return {
                                active: e.active,
                                availability: t.getApplicationState("availability"),
                                connected: Object(K.D)(t),
                                hasFakeAgentMessage: Object(K.x)(t, z.c),
                                startChatAgainPending: e.properties.startChatAgainPending,
                                limitReached: t.getApplicationState("limitReached"),
                                hasMutedGreeting: !!e.properties.mutedGreeting
                            }
                        };
                    Object(X.u)(Z((function() {
                        return Object(X.u)(Object(Q.c)(t, (function() {
                            return t.getChat(z.c).properties.startChatAgainPending
                        })), Object(X.g)(Boolean))
                    })), Object(X.z)((function() {
                        return Object(X.m)(Ae(Fe()))
                    })), Object(X.h)((function(e) {
                        Object(Y.z)(t, z.c, {
                            chatId: t.getChat(z.c).serverId
                        }), Ve(e)
                    }))), Object(X.u)(Object(X.q)($, Be, Ue), Object(X.e)(J), Object(X.g)((function() {
                        return Pe() && t.getApplicationState().eagerFetchingMode
                    })), Object(X.f)((function() {
                        return Object(X.m)(Ae(Fe()))
                    })), Object(X.B)(Ne), Object(X.h)(Ve)), Object(X.u)(Z((function() {
                        return Object(X.u)($, Object(X.g)((function() {
                            return !t.getApplicationState().eagerFetchingMode
                        })))
                    })), Object(X.z)((function() {
                        var e = t.getChat(z.c).serverId;
                        return Object(X.m)(Promise.all([Ae(Fe()), Object(K.B)(t) && e && it(o, e)].filter(Boolean)))
                    })), Object(X.B)(Ne), Object(X.h)((function(e) {
                        var n = e[0],
                            r = e[1];
                        if (Object(Y.a)(t), r) {
                            l(t.getChat(z.c).serverId, r.iterator), G(r.hasMore);
                            var i = Object(b.s)((function(e) {
                                return e.events
                            }), r.threads).filter((function(e) {
                                return !t.hasEvent(z.c, e.id)
                            }));
                            i.length > 0 && t.addHistoryEvents(z.c, i), t.updateChat(z.c, {
                                properties: {
                                    lastThread: r.threads.length ? Object(b.K)(r.threads).id : null,
                                    eventsSeenUpToMap: r.eventsSeenUpToMap
                                }
                            })
                        }
                        t.setApplicationState({
                            eagerFetchingMode: !0
                        }), Ve(n)
                    }))), Object(X.u)(Object(Q.c)(t, (function(e) {
                        return e.application.page
                    })), Object(X.x)(1), Object(X.B)(Ne), Object(X.h)((function(e) {
                        var t = e.url,
                            n = e.title;
                        i.updateCustomerPage({
                            url: t,
                            title: n
                        })
                    })))
                },
                bt = function(e) {
                    return e.some(b.B)
                },
                gt = (n(9), /\.(\w+)$/i),
                vt = new Audio,
                yt = {
                    mp3: "audio/mpeg",
                    ogg: "audio/ogg"
                },
                Ot = function(e) {
                    var t = function(e) {
                        var t = e.match(gt);
                        return t ? t[1].toLowerCase() : ""
                    }(e);
                    if (t in yt) {
                        if ("" !== vt.canPlayType(yt[t])) return !0
                    } else 0;
                    return !1
                },
                _t = function() {
                    return "function" === typeof window.webkitAudioContext
                },
                jt = function(e) {
                    return new Promise((function(t, n) {
                        var r = new Audio(e);
                        r.onloadeddata = function() {
                            t(r)
                        }, r.onerror = n
                    }))
                },
                wt = function(e) {
                    var t = e.play();
                    return Object(b.H)(t) ? t : Promise.resolve()
                },
                xt = function(e) {
                    return "function" === typeof e.start && "function" === typeof e.stop
                },
                Et = function(e) {
                    xt(e) ? e.start(0) : e.noteOn(0)
                },
                Ct = function() {
                    var e = new(window.AudioContext || window.webkitAudioContext),
                        t = !0,
                        n = [],
                        r = function(t) {
                            return new Promise((function(n, r) {
                                e.decodeAudioData(t, n, r)
                            }))
                        },
                        i = function(t) {
                            return {
                                play: function() {
                                    var n = e.createBufferSource();
                                    return n.connect(e.destination), n.buffer = t, {
                                        playback: new Promise((function(t, r) {
                                            if (n.onended = function() {
                                                    return t()
                                                }, Et(n), "running" !== e.state) {
                                                var i = new Error("Playback failed, AudioContext is in incorrect state '" + e.state + "'");
                                                i.name = "PlaybackError", r(i)
                                            }
                                        })),
                                        stop: function() {
                                            ! function(e) {
                                                xt(e) ? e.stop(0) : e.noteOff(0)
                                            }(n)
                                        }
                                    }
                                }
                            }
                        };
                    return {
                        preload: function(e) {
                            return function(e) {
                                return new Promise((function(t, n) {
                                    var r = new XMLHttpRequest;
                                    r.onload = function() {
                                        t(r.response)
                                    }, r.onerror = n, r.open("GET", e), r.responseType = "arraybuffer", r.send()
                                }))
                            }(e).then(r).then(i)
                        },
                        playSound: function(e) {
                            var r = e.play();
                            return t && n.push(r), r.playback
                        },
                        unlock: function() {
                            return new Promise((function(r) {
                                document.addEventListener("click", (function i() {
                                    document.removeEventListener("click", i, !0), t && (n.forEach((function(e) {
                                            e.stop()
                                        })), n = [], t = !1), e.resume(),
                                        function() {
                                            var t = e.createBuffer(1, 1, 22050),
                                                n = e.createBufferSource();
                                            n.buffer = t, n.connect(e.destination), Et(n)
                                        }(), r()
                                }), !0)
                            }))
                        }
                    }
                },
                It = function() {
                    return _t() ? function() {
                        var e = Ct(),
                            t = Object(b.P)((function(t) {
                                var n = e.preload(t);
                                return n.catch(b.T), n
                            }));
                        return {
                            play: function(n) {
                                var r = t(n).then(e.playSound);
                                return r.catch(b.T), r
                            },
                            preload: t,
                            unlock: function() {
                                return e.unlock()
                            }
                        }
                    }() : function() {
                        var e = Object(b.P)(jt);
                        return {
                            play: function(t) {
                                return e(t).then(wt)
                            },
                            preload: e,
                            unlock: function() {
                                return Promise.resolve()
                            }
                        }
                    }()
                },
                Tt = function(e) {
                    var t = It(),
                        n = function(e) {
                            return Object.keys(e).reduce((function(t, n) {
                                var r = Object(b.n)((function(e) {
                                    return Ot(e)
                                }), Object(b.k)(e[n]));
                                return t[n] = r, t
                            }), {})
                        }(e);
                    return {
                        play: function(e) {
                            var r = n[e];
                            t.play(r).then(b.T, b.T)
                        },
                        preload: function(e) {
                            var r = n[e];
                            t.preload(r).then(b.T, b.T)
                        },
                        unlock: function() {
                            return t.unlock()
                        }
                    }
                },
                kt = n(241),
                St = n.n(kt),
                zt = n(242),
                At = n.n(zt),
                Mt = function() {
                    var e, t = Tt(((e = {}).new_message = [At.a, St.a], e));
                    return t.unlock().then((function() {
                        return Object(b.L)(2e3, (function(e) {
                            t.play(e)
                        }))
                    }))
                },
                Rt = function(e, t) {
                    return "system" !== e.author && !e.properties.welcomeMessage && e.author !== t && "custom" !== e.type
                },
                Lt = n(88),
                Pt = n(50),
                Dt = n(15),
                Nt = n(0),
                qt = n(5),
                Bt = n(195),
                Ut = n(129),
                Vt = n(336),
                Ft = n(335),
                Ht = n(125),
                Gt = n(25),
                Wt = (n(105), n(12)),
                Yt = n(14),
                Kt = n(194),
                Jt = n(58),
                Xt = function(e) {
                    return Object(qt.z)("display:flex;width:", e ? "24px" : "32px", ";height:", e ? "24px" : "32px", ";align-items:center;justify-content:center;")
                },
                Zt = Object(qt.D)("div", {
                    target: "e1dmt1bi0"
                })("position:relative;transition:transform 200ms ", (function(e) {
                    return e.theme.transitions.easings.spring
                }), " 50ms;", (function(e) {
                    var t = e.compact;
                    return Xt(t)
                }), " ", (function(e) {
                    return {
                        transform: "scale(" + (e.isScaled ? 1.25 : 1) + ")"
                    }
                })),
                Qt = Object(qt.D)("div", {
                    target: "e1dmt1bi1"
                })("position:absolute;z-index:1;left:0;right:0;bottom:1px;transition:opacity 150ms ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), " 50ms;", (function(e) {
                    var t = e.compact;
                    return Xt(t)
                }), " ", (function(e) {
                    return {
                        opacity: e.isVisible ? 1 : 0
                    }
                })),
                $t = Object(Gt.b)((function(e) {
                    var t = e.on,
                        n = e.theme,
                        r = e.compact,
                        i = void 0 !== r && r,
                        o = Object(v.a)(e, ["on", "theme", "compact"]),
                        a = Nt.useState(t),
                        c = a[0],
                        u = a[1];
                    return Nt.useEffect((function() {
                        if (!t) {
                            var e = setTimeout((function() {
                                return u(!1)
                            }), 200);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                        u(!0)
                    }), [t]), Nt.createElement(Zt, Object(g.a)({
                        isScaled: t,
                        compact: i
                    }, o), Nt.createElement(Jt.c, {
                        filled: t,
                        size: i ? 24 : 32,
                        color: n.colors.minimizedIcon,
                        backgroundColor: n.colors.minimizedBackground
                    }), Nt.createElement(Qt, {
                        isVisible: t,
                        compact: i
                    }, c && Nt.createElement(Kt.a, {
                        width: i ? "14px" : "18px",
                        animationDuration: 1,
                        animationIterationCount: 1,
                        color: n.colors.minimizedBackground
                    })))
                })),
                en = Object(qt.D)("div", {
                    target: "e3vrje60"
                })("width:5px;height:5px;border-radius:", (function(e) {
                    return e.theme.borderRadius.round
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";"),
                tn = function(e, t) {
                    return Object(qt.z)("z-index:1;position:absolute;border:3px solid white;right:", e || t ? -7 : -3, "px;top:", e || t ? -7 : -3, "px;")
                },
                nn = function(e) {
                    var t = e.mobile,
                        n = void 0 !== t && t,
                        r = e.unseenEventsCount,
                        i = void 0 === r ? 0 : r,
                        o = e.bar;
                    return Nt.createElement(Jt.z, {
                        className: tn(n, o),
                        minScale: i > 1 ? 1 : 0,
                        maxScale: i > 1 ? 1.75 : 1.3,
                        "aria-label": "new message indicator",
                        tabIndex: 0,
                        role: "img"
                    }, Nt.createElement(en, null))
                },
                rn = n(233),
                on = n(42),
                an = Object(qt.D)("div", {
                    displayName: "MinimizedBar",
                    section: !0,
                    target: "e16i86ec0"
                })("position:relative;width:255px;height:50px;box-shadow:", (function(e) {
                    return e.theme.boxShadow.floating
                }), ";background:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";border-radius:", (function(e) {
                    var t = e.theme;
                    return [t.borderRadius.lg, t.borderRadius.lg, t.borderRadius.none, t.borderRadius.none].join(" ")
                }), ";display:flex;padding:0 0.9em;align-items:center;&:hover{cursor:pointer;}"),
                cn = Object(qt.D)(rn.a, {
                    target: "e16i86ec1"
                })("flex-grow:1;font-weight:700;font-size:0.9em;margin-right:", (function(e) {
                    return e.theme.spaces.space2
                }), ";"),
                un = function(e) {
                    var t = e.text,
                        n = e.hasUnseenEvents,
                        r = e.unseenEventsCount,
                        i = e.onClick,
                        o = Object(Wt.h)({}),
                        a = o.isHovered,
                        c = o.hoverProps,
                        u = Object(Wt.f)();
                    return Nt.createElement(an, Object(Yt.e)({
                        onClick: i
                    }, c, u), n ? Nt.createElement(nn, {
                        bar: !0,
                        key: r,
                        unseenEventsCount: r
                    }) : null, Nt.createElement(cn, {
                        ellipsis: !0
                    }, Nt.createElement(on.a, null, t)), Nt.createElement(Jt.j, {
                        onPress: i,
                        "aria-label": "Open LiveChat chat widget"
                    }, Nt.createElement($t, {
                        compact: !0,
                        on: a
                    })))
                },
                sn = Object(qt.D)("div", {
                    displayName: "MinimizedBubble",
                    section: !0,
                    target: "e1ybl9g10"
                })("display:flex;width:", (function(e) {
                    return e.mobile ? "40px" : "60px"
                }), ";height:", (function(e) {
                    return e.mobile ? "40px" : "60px"
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.floating
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.round
                }), ";background:", (function(e) {
                    return e.theme.colors.surface.lightVariant
                }), ";justify-content:center;", (function(e) {
                    var t = e.mobile,
                        n = e.screenPosition;
                    return t ? Object(qt.z)("margin-bottom:24px;margin-", "left" === n ? "right" : "left", ":8px;") : Object(qt.z)("margin-", "left" === n ? "right" : "left", ":auto;")
                }), " &:hover{cursor:pointer;}"),
                dn = Object(qt.z)("padding:0;width:100%;display:flex;justify-content:center;align-items:center;"),
                ln = function(e) {
                    var t = e.mobile,
                        n = e.avatar,
                        r = e.hasUnseenEvents,
                        i = e.unseenEventsCount,
                        o = e.screenPosition,
                        a = e.onClick,
                        c = Object(Wt.h)({}),
                        u = c.isHovered,
                        s = c.hoverProps;
                    return Nt.createElement(sn, Object(g.a)({
                        mobile: t,
                        hasAvatar: Boolean(n),
                        screenPosition: o
                    }, Object(Yt.e)({
                        onClick: a
                    }, s)), r ? Nt.createElement(nn, {
                        mobile: t,
                        key: i,
                        unseenEventsCount: i
                    }) : null, Nt.createElement(Jt.j, {
                        onPress: a,
                        className: dn,
                        "aria-label": "Open LiveChat chat widget"
                    }, n ? Nt.createElement(qt.b, {
                        "aria-hidden": !0,
                        imgUrl: n,
                        size: t ? "40px" : "60px"
                    }) : Nt.createElement($t, {
                        "aria-hidden": !0,
                        compact: t,
                        on: u
                    })))
                },
                fn = n(90);

            function pn(e, t) {
                var n = (void 0 === t ? {} : t).retriesCount,
                    r = void 0 === n ? 1 / 0 : n,
                    i = Object(fn.a)({
                        min: 100,
                        max: 1e4
                    });
                return new Promise((function(t, n) {
                    var o = 0;
                    ! function a() {
                        return e().then(t, (function() {
                            r === 1 / 0 || o++ < r ? setTimeout(a, i.duration()) : n(new Error("Maximum retries count (" + r + ") reached"))
                        }))
                    }()
                }))
            }
            var mn = Nt.lazy((function() {
                    return pn((function() {
                        return n.e(8).then(n.bind(null, 380))
                    }))
                })),
                hn = Object(qt.D)("div", {
                    displayName: "Minimized",
                    section: !0,
                    target: "eqd5v0k0"
                })("max-width:100%;position:absolute;bottom:0;z-index:2;display:flex;align-items:flex-end;will-change:width,height,transform,opacity;backface-visibility:hidden;", (function(e) {
                    var t;
                    return (t = {
                        padding: "circle" === e.minimizedType ? "0.5em 0.5em 1em 1em" : "0.8em 0.8em 0 0.8em"
                    })[e.position] = 0, t.justifyContent = "right" === e.position && "flex-end", t
                })),
                bn = Object(S.c)((function(e) {
                    var t, n = e.getApplicationState(),
                        r = n.availability,
                        i = n.eagerFetchingMode,
                        o = n.hasUnseenEvents,
                        a = n.mobile,
                        c = "online" === r,
                        u = e.getChat(z.c).active,
                        s = K.d(e),
                        d = !s || K.M(e, s) ? null : s.id,
                        l = K.g("agentAvatar", e).enabled && (c || u) ? K.c(z.c, e) : null,
                        f = e.getLastEvent(z.c),
                        p = f && (null == (t = f.properties) ? void 0 : t.invitation) && !f.seen;
                    return {
                        mobile: a,
                        visibleGreetingId: d,
                        avatar: Object(b.y)(!1, "avatar", l),
                        minimizedType: K.l(e),
                        screenPosition: K.q(e),
                        minimizedText: K.k(z.c, e),
                        hasUnseenEvents: i ? e.getUnseenCount(z.c) > 0 : p || o,
                        unseenEventsCount: i ? e.getUnseenCount(z.c) : p || o ? 1 : 0,
                        newMessageAlert: e.localize("new_message")
                    }
                }))((function(e) {
                    var t, r, i = e.dir,
                        o = e.mobile,
                        a = e.avatar,
                        c = e.onMaximize,
                        u = e.minimizedText,
                        s = e.minimizedType,
                        d = e.newMessageAlert,
                        l = e.screenPosition,
                        f = e.hasUnseenEvents,
                        p = e.unseenEventsCount,
                        m = e.visibleGreetingId,
                        h = e.innerRef,
                        g = void 0 === h ? b.T : h,
                        v = e.onResize,
                        y = void 0 === v ? b.T : v,
                        O = null,
                        _ = null;
                    if (m && (O = Nt.createElement(Nt.Suspense, {
                            fallback: null
                        }, Nt.createElement(mn, {
                            key: m,
                            id: m,
                            onPress: c,
                            onResize: y
                        }))), "circle" === s) {
                        var j = m && o;
                        _ = Nt.createElement(ln, {
                            avatar: a,
                            onClick: c,
                            hasUnseenEvents: f,
                            unseenEventsCount: p,
                            mobile: j,
                            screenPosition: l
                        })
                    }
                    return "bar" === s && (_ = Nt.createElement(un, {
                        text: u,
                        hasUnseenEvents: f,
                        unseenEventsCount: p,
                        onClick: c
                    })), Nt.createElement(hn, {
                        dir: i,
                        role: "main",
                        innerRef: g,
                        minimizedType: s,
                        position: l,
                        onMouseOver: function() {
                            return Promise.all([n.e(2), n.e(0)]).then(n.bind(null, 378)).catch(b.T)
                        }
                    }, Nt.createElement(Nt.Fragment, null, f && Nt.createElement(Ut.b, {
                        key: p,
                        message: d,
                        "aria-live": "polite",
                        clearOnUnmount: !0
                    }), o && "circle" === s ? (t = "left" === l, r = [Nt.createElement(qt.f, {
                        key: "greeting-column"
                    }, Nt.createElement(qt.q, null, O)), Nt.createElement(qt.f, {
                        key: "bubble-column",
                        noShrink: !0
                    }, Nt.createElement(qt.q, null, _))], t ? r.reverse() : r) : Nt.createElement(qt.f, null, Nt.createElement(qt.q, null, O), Nt.createElement(qt.q, null, _))))
                })),
                gn = n(128),
                vn = n(51),
                yn = Nt.lazy((function() {
                    return pn((function() {
                        return Promise.all([n.e(2), n.e(0)]).then(n.bind(null, 378))
                    }))
                })),
                On = Object(qt.D)("div", {
                    displayName: "ApplicationWrapper",
                    target: "edvz03i0"
                })("position:absolute;top:0;left:auto;right:0;bottom:0;width:100%;height:100%;will-change:tranform,opacity;backface-visibility:hidden;"),
                _n = Object(qt.D)("div", {
                    displayName: "Maximized",
                    target: "edvz03i1"
                })("position:relative;display:flex;flex-direction:column;min-width:0;height:100%;box-shadow:", (function(e) {
                    return e.theme.boxShadow.floating
                }), ";overflow:hidden;background:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";", (function(e) {
                    var t = e.expandToEdge,
                        n = e.theme;
                    return {
                        borderRadius: t ? n.borderRadius.none + " !important" : n.borderRadius.lg
                    }
                }), ";"),
                jn = Object(qt.z)("flex-grow:1;display:flex;align-items:center;justify-content:center;"),
                wn = Object(Gt.b)((function(e) {
                    var t = e.theme,
                        n = Nt.useState(!1),
                        r = n[0],
                        i = n[1];
                    return Object(vn.v)((function() {
                        return i(!0)
                    }), 500), Nt.createElement("div", {
                        className: jn
                    }, r && Nt.createElement(Jt.c, {
                        size: 64,
                        className: qt.y,
                        color: t.colors.border,
                        backgroundColor: t.colors.surface.lightVariant
                    }))
                })),
                xn = function(e) {
                    var t = e.dir,
                        n = e.showMinimizedButton,
                        r = e.isMainViewVisible,
                        i = e.expandToEdge,
                        o = e.innerRef,
                        a = e.onMinimizeButtonPress;
                    return Nt.createElement(On, {
                        dir: t,
                        expandToEdge: i,
                        innerRef: o
                    }, Nt.createElement(_n, {
                        expandToEdge: i,
                        role: "main"
                    }, r ? Nt.createElement(Nt.Suspense, {
                        fallback: Nt.createElement(wn, null)
                    }, Nt.createElement(yn, {
                        showMinimizedButton: n,
                        onMinimizeButtonPress: a
                    })) : Nt.createElement(wn, null)))
                },
                En = Object(qt.z)("&-enter{opacity:0;transform:translate3d(0,100%,0);}&-enter&-enter-active{opacity:1;transform:translate3d(0,0%,0);transition:opacity 140ms ease 200ms,transform 140ms ease 200ms;}&-exit{opacity:1;transform:translate3d(0,0%,0);}&-exit&-exit-active{opacity:0;transform:translate3d(0,100%,0);transition:opacity 140ms ease,transform 140ms ease;}"),
                Cn = function(e, t) {
                    return Object(qt.z)("&-enter{transform:translate3d(", "right" === e ? "" : "-", "40%,40%,0) scale(0.1);[role='main'] > *{opacity:0;transform:translate3d(0,20%,0);}}&-enter&-enter-active{transform:translate3d(0%,0%,0) scale(1);transition:transform ", 430, "ms ", t.transitions.easings.sharp, ";[role='main'] > *{opacity:1;transform:translate3d(0,0%,0);transition:opacity 160ms ", t.transitions.easings.sharp, " 270ms,transform 160ms ", t.transitions.easings.sharp, " 270ms;}}&-exit{transform:translate3d(0%,0%,0) scale(1);opacity:1;[role='main'] > *{opacity:1;transform:translate3d(0,0%,0);}}&-exit&-exit-active{opacity:0;transform:translate3d(", "right" === e ? "" : "-", "40%,40%,0) scale(0.1);transition:transform ", 430, "ms ", t.transitions.easings.sharp, ",opacity 300ms ease;[role='main'] > *{opacity:0;transform:translate3d(0,10%,0);transition:opacity 160ms ", t.transitions.easings.sharp, ",transform 160ms ", t.transitions.easings.sharp, ";}}")
                };
            var In = Object(S.c)((function(e) {
                    var t = function(t) {
                        t ? Object(Y.t)(e) : Object(Y.v)(e)
                    };
                    return function(e) {
                        var n = e.getApplicationState(),
                            r = n.mobile,
                            i = n.embedded,
                            o = n.actingAsDirectLink,
                            a = n.isInCustomContainer,
                            c = n.rtl;
                        return {
                            embedded: i,
                            mobile: r,
                            expandToEdge: r || !i || a,
                            setMaximizedState: t,
                            visibilityState: e.getApplicationState("visibility").state,
                            showMinimized: !o && K.O(e),
                            screenPosition: K.q(e),
                            dir: c ? "rtl" : "ltr",
                            showMinimizedButton: K.eb(e)
                        }
                    }
                }))(Object(Gt.b)((function(e) {
                    var t = e.embedded,
                        n = e.expandToEdge,
                        r = e.setMaximizedState,
                        i = e.screenPosition,
                        o = e.showMinimizedButton,
                        a = e.showMinimized,
                        c = e.onAnimationEnd,
                        u = void 0 === c ? b.T : c,
                        s = e.onMinimizeButtonPress,
                        d = void 0 === s ? b.T : s,
                        l = e.onMinimizedRef,
                        f = void 0 === l ? b.T : l,
                        p = e.onMinimizedResize,
                        m = e.theme,
                        h = e.dir,
                        g = e.visibilityState,
                        v = Nt.useRef(),
                        y = Nt.useRef(),
                        O = Nt.useState("maximized" === g),
                        _ = O[0],
                        j = O[1];
                    return Nt.createElement(Vt.a, {
                        appear: !0,
                        component: null
                    }, "maximized" === g && Nt.createElement(Ft.a, {
                        classNames: Cn(i, m),
                        nodeRef: y,
                        onExited: u,
                        onEntered: function() {
                            return j(!0)
                        },
                        onExit: function() {
                            return j(!1)
                        },
                        timeout: 430
                    }, Nt.createElement(xn, {
                        dir: h,
                        innerRef: y,
                        isMainViewVisible: _,
                        showMinimizedButton: o,
                        expandToEdge: n,
                        onMinimizeButtonPress: function() {
                            t && r(!1), d()
                        }
                    })), Object(b.C)(g, ["minimized", "hidden"]) && a && Nt.createElement(Ft.a, {
                        classNames: En,
                        nodeRef: v,
                        onExited: u,
                        timeout: 430
                    }, Nt.createElement(Ht.a, {
                        autoFocus: Object(gn.b)()
                    }, Nt.createElement(bn, {
                        dir: h,
                        onMaximize: function() {
                            return r(!0)
                        },
                        innerRef: function(e) {
                            v.current = e, f(e)
                        },
                        onResize: p
                    }))))
                }))),
                Tn = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            crashed: !1
                        }, t
                    }
                    Object(Dt.a)(t, e);
                    var n = t.prototype;
                    return n.componentDidCatch = function(e, t) {
                        this.setState({
                            crashed: !0
                        }), this.props.onError(e, t)
                    }, n.render = function() {
                        return this.state.crashed ? null : this.props.children
                    }, t
                }(Nt.Component);
            Tn.defaultProps = {
                onError: b.T
            };
            var kn = n(122),
                Sn = n(24),
                zn = n(13),
                An = Object(g.a)({}, zn.a, {
                    borderRadius: Object(g.a)({}, zn.a.borderRadius, {
                        def: zn.a.borderRadius.sm
                    }),
                    TitleBar: {
                        css: {
                            fontWeight: "700!important",
                            fontSize: "1.1em",
                            textAlign: "center!important",
                            height: "42px",
                            justifyContent: "flex-start"
                        },
                        TitleBarTitle: {
                            css: {
                                fontSize: Object(Sn.d)(14)
                            }
                        },
                        Avatar: {
                            css: {
                                border: "0"
                            }
                        }
                    },
                    IconButton: {
                        css: {
                            padding: "0 .5em"
                        }
                    },
                    MessageList: {
                        css: {
                            backgroundColor: zn.a.colors.surface.light
                        }
                    },
                    Maximized: {
                        css: {
                            borderRadius: [zn.a.borderRadius.sm, zn.a.borderRadius.sm, zn.a.borderRadius.none, zn.a.borderRadius.none].join(" ")
                        }
                    },
                    Footer: {
                        css: {
                            position: "relative",
                            right: 0,
                            bottom: 0,
                            fontSize: "0.6em",
                            backgroundColor: zn.a.colors.surface.lightVariant,
                            textAlign: "center",
                            padding: "1em"
                        },
                        FooterLink: {
                            css: {
                                textDecoration: "none",
                                fontWeight: "bold"
                            }
                        }
                    },
                    ApplicationWrapper: {
                        css: {
                            padding: {
                                default: "1em 1em 0 1em",
                                expandToEdge: "0"
                            }
                        }
                    },
                    AgentBar: {
                        css: {
                            padding: "0.6em"
                        },
                        Avatar: {
                            size: "60px",
                            css: {
                                borderRadius: zn.a.borderRadius.none
                            }
                        },
                        SubTitle: {
                            css: {
                                fontSize: ".8em"
                            }
                        },
                        Title: {
                            css: {
                                fontSize: "1em",
                                fontWeight: "bold"
                            }
                        },
                        IconButton: {
                            css: {
                                fontSize: Object(Sn.d)(24),
                                backgroundColor: "transparent !important",
                                color: {
                                    default: "inherit"
                                },
                                opacity: {
                                    default: "0.3",
                                    disabled: "0.15",
                                    active: "0.6"
                                }
                            }
                        }
                    },
                    Button: {
                        css: {
                            boxShadow: "none"
                        }
                    },
                    Message: {
                        horizontalAlign: "left",
                        own: {
                            horizontalAlign: "left",
                            Content: {
                                css: {
                                    alignItems: "flex-start"
                                }
                            }
                        },
                        system: {
                            MessageText: {
                                css: {
                                    fontSize: ".9em"
                                }
                            }
                        },
                        css: {
                            flexDirection: "row"
                        },
                        Bubble: {
                            sharpBorderRadius: "0px",
                            ovalBorderRadius: "0px",
                            css: {
                                border: "0",
                                padding: "0",
                                background: "transparent",
                                boxShadow: "none"
                            }
                        },
                        ImagePreview: {
                            css: {
                                maxWidth: "150px",
                                maxHeight: "250px",
                                borderRadius: zn.a.borderRadius.none
                            }
                        },
                        Button: {
                            css: {
                                borderTop: "0!important"
                            }
                        }
                    },
                    MessageText: {
                        css: {
                            padding: "0",
                            fontSize: "14px"
                        }
                    },
                    MessageGroup: {
                        css: {
                            marginBottom: ".5em"
                        }
                    },
                    MinimizedBar: {
                        css: {
                            borderRadius: [zn.a.borderRadius.sm, zn.a.borderRadius.sm, zn.a.borderRadius.none, zn.a.borderRadius.none].join(" "),
                            height: "40px"
                        },
                        Icon: {
                            css: {
                                transform: "scale(0.8)"
                            }
                        }
                    },
                    MinimizedBubble: {
                        css: {
                            position: "relative"
                        }
                    },
                    View: {
                        Bubble: {
                            css: {
                                border: "0",
                                padding: "0",
                                background: "transparent",
                                boxShadow: "none"
                            }
                        },
                        ViewContent: {
                            css: {
                                paddingTop: ".5em"
                            }
                        },
                        css: {
                            paddingBottom: "0"
                        }
                    },
                    TextInput: {
                        css: {
                            lineHeight: "1.1em"
                        }
                    },
                    Form: {
                        css: {
                            fontSize: "0.9em"
                        },
                        IconButton: {
                            css: {
                                color: {
                                    default: zn.a.colors.text.muted,
                                    active: zn.a.colors.text.white
                                }
                            }
                        }
                    },
                    Tooltip: {
                        css: {
                            padding: "0.5em 0.8em",
                            fontSize: ".7em"
                        }
                    },
                    TooltipArrow: {
                        css: {
                            marginTop: "-1em"
                        }
                    },
                    Invitation: {
                        Bubble: {
                            sharpBorderRadius: "6px",
                            ovalBorderRadius: "6px",
                            css: {
                                padding: ".5em"
                            }
                        }
                    },
                    InformationField: {
                        css: {
                            fontSize: "1.1em"
                        }
                    },
                    SystemCard: {
                        css: {
                            maxWidth: "368px",
                            width: "calc(100% - 0.6em)",
                            margin: "0.3em",
                            boxShadow: "none",
                            border: "1px solid " + zn.a.colors.divider
                        }
                    },
                    TextComposer: {
                        IconButton: {
                            css: {
                                opacity: {
                                    active: 1,
                                    default: .4
                                }
                            }
                        }
                    },
                    NewMessageHorizontalDivider: {
                        css: {
                            margin: "8px -0.5em"
                        }
                    },
                    BoosterContainer: {
                        css: {
                            border: "1px solid " + zn.a.colors.divider,
                            maxWidth: "368px",
                            width: "calc(100% - 0.6em)",
                            margin: "0.3em",
                            boxShadow: "none",
                            borderRadius: zn.a.borderRadius.md
                        }
                    },
                    BoosterButton: {
                        css: {
                            boxShadow: "none"
                        }
                    }
                }),
                Mn = function(e) {
                    function t(t) {
                        var n;
                        (n = e.call(this, t) || this).id = "widget-global-" + Object(b.v)(), Object(qt.B)("#", n.id, " *{font-family:'Noto Sans',sans-serif;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;}");
                        var r = "https://fonts.googleapis.com/css?family=Noto+Sans:400,700&subset=latin-ext&display=swap",
                            i = document.querySelector("head"),
                            o = i.querySelectorAll("link");
                        if (Object(b.n)((function(e) {
                                return e.href === r
                            }), o)) return Object(Pt.a)(n);
                        var a = document.createElement("link");
                        return a.setAttribute("href", r), a.setAttribute("rel", "stylesheet"), i.appendChild(a), n
                    }
                    return Object(Dt.a)(t, e), t.prototype.render = function() {
                        return Nt.createElement("div", {
                            id: this.id
                        }, this.props.children)
                    }, t
                }(Nt.Component),
                Rn = Object(S.c)((function(e) {
                    return {
                        mobile: e.getApplicationState("mobile"),
                        theme: e.getApplicationState("config").theme
                    }
                }), {
                    shouldHandleStateChanges: Boolean("")
                })((function(e) {
                    var t = e.mobile,
                        n = e.theme,
                        r = e.children,
                        i = Object(b.R)("modern" === n.name ? An : kn.a, n);
                    return Nt.createElement(qt.v, {
                        theme: t ? Object(b.R)(i, {
                            typography: {
                                input: {
                                    fontSize: "16px"
                                },
                                placeholder: {
                                    fontSize: "16px"
                                }
                            }
                        }) : i
                    }, r)
                }));

            function Ln(e, t, r, i) {
                var o = t.adapterOptions,
                    a = t.props,
                    c = a.onError,
                    u = void 0 === c ? b.T : c,
                    s = Object(v.a)(a, ["onError"]),
                    d = t.onBootstrap,
                    l = void 0 === d ? b.T : d,
                    f = "3" === r.__unsafeProperties.license.protocolVersion;
                e.setApplicationState({
                    protocol: f ? "lc3" : "lc2"
                }), Promise.all([f ? Promise.resolve({
                    default: ht
                }) : Promise.all([n.e(14), n.e(15)]).then(n.bind(null, 379)), x.a ? Promise.all([n.e(4), n.e(5)]).then(n.bind(null, 381)) : null]).then((function(t) {
                    var n = t[0].default,
                        a = t[1];
                    n(o, e, r);
                    e.on("set_application_state", (function t(n) {
                        if (n.readyState !== q.a.NOT_READY) {
                            window.performance && "function" === typeof window.performance.mark && window.performance.mark("lc_sdk_ready"), e.off("set_application_state", t), e.getApplicationState("embedded") || function(e) {
                                    Object(X.u)(Object(Q.c)(e, (function() {
                                        return e.localize("welcome_title")
                                    })), Object(X.h)((function(e) {
                                        document.title = e
                                    })))
                                }(e), e.getApplicationState("embedded") && !_t() || function(e) {
                                    var t = !1;
                                    e.on("bridge_sound_unlocked", (function() {
                                        return t = !0
                                    })), Mt().then((function(n) {
                                        t || (e.emit("iframe_sound_unlocked"), e.on("add_event", (function(t) {
                                            var r = t.event;
                                            if (!e.getApplicationState().muted) {
                                                var i = e.getSessionUserId();
                                                Rt(r, i) && n("new_message")
                                            }
                                        })))
                                    }))
                                }(e), Object(Lt.a)(e), Object(y.a)(e),
                                function(e, t) {
                                    var n = Object(X.u)(Object(X.n)(), X.v);
                                    if (t) {
                                        var r = Object(X.l)(t);
                                        Object(X.u)(n, Object(X.h)((function(n) {
                                            e.setApplicationState({
                                                applicationFocused: n
                                            }), t.emit("focus", n)
                                        }))), Object(X.u)(Object(X.a)(n, r), Object(X.c)(50), Object(X.p)(bt), Object(X.d)(), Object(X.h)((function(t) {
                                            e.setApplicationState({
                                                pageFocused: t
                                            })
                                        })))
                                    } else Object(X.u)(n, Object(X.h)((function(t) {
                                        e.setApplicationState({
                                            pageFocused: t,
                                            applicationFocused: t
                                        })
                                    })))
                                }(e, i), a && a.connect(e);
                            var r = document.getElementById("root");
                            ! function(e, t) {
                                var n = t.store,
                                    r = t.onError,
                                    i = t.amplitude,
                                    o = Object(v.a)(t, ["store", "onError", "amplitude"]),
                                    a = (null == i ? void 0 : i.AmplitudeProvider) || function(e) {
                                        return e.children
                                    };
                                ae.render(Nt.createElement(Tn, {
                                    onError: r
                                }, Nt.createElement(S.b, {
                                    store: n
                                }, Nt.createElement(a, null, Nt.createElement(Ut.a, null, Nt.createElement(Mn, null, Nt.createElement(Rn, null, Nt.createElement(Bt.a, null, Nt.createElement(In, o)))))))), e)
                            }(r, Object(g.a)({}, s, {
                                onError: function(e, t) {
                                    var n = t.componentStack;
                                    Object(y.c)("react_error", e, {
                                        componentStack: n
                                    }), ae.render(null, r), u()
                                },
                                store: e,
                                amplitude: a
                            })), window.performance && "function" === typeof window.performance.mark && window.performance.mark("lc_bootstrap_end"), l(e)
                        }
                    }))
                }))
            }
            var Pn = function(e, t, n, r) {
                var i = e.getApplicationState("visibility");
                return r && "maximized" !== i.state ? {
                    state: "hidden",
                    forced: !0
                } : n ? {
                    state: "maximized"
                } : t ? {
                    state: "minimized"
                } : i
            };

            function Dn(e, t) {
                var n = e.license,
                    r = e.group,
                    i = e.uniqueGroups,
                    o = e.isIdentityProviderEnabled,
                    a = W({
                        application: {
                            license: n,
                            group: r
                        }
                    }, {
                        persistKey: Object(oe.a)(e)
                    }),
                    c = function(e) {
                        return {
                            hide: function() {
                                Object(K.T)(e, "hidden") || e.setApplicationState({
                                    visibility: {
                                        state: "hidden",
                                        forced: !0
                                    }
                                })
                            },
                            hideGreeting: function() {
                                Object(Y.r)(e)
                            },
                            hideEyeCatcher: function() {
                                Object(Y.q)(e)
                            },
                            isFocused: function() {
                                return !!document.hasFocus && document.hasFocus()
                            },
                            maximize: function(t) {
                                var n = (void 0 === t ? {} : t).modality;
                                n && e.emit("set_host_modality", n), e.setApplicationState({
                                    visibility: {
                                        state: "maximized"
                                    }
                                })
                            },
                            minimize: function() {
                                e.setApplicationState({
                                    visibility: {
                                        state: Object(K.O)(e) ? "minimized" : "hidden"
                                    }
                                })
                            },
                            startStateSync: function() {
                                e.startStateSync(this)
                            },
                            storeMethod: function(t) {
                                var n = t[0],
                                    r = t.slice(1);
                                e[n].apply(e, r)
                            },
                            logInfo: function() {
                                y.d.apply(void 0, arguments)
                            },
                            logError: function() {
                                y.c.apply(void 0, arguments)
                            },
                            logNotice: function() {
                                y.e.apply(void 0, arguments)
                            }
                        }
                    }(a);
                new k.Model(c).then((function(e) {
                    return Promise.all([e, a.syncing()])
                })).then((function(e) {
                    var c = e[0];
                    window.performance && "function" === typeof window.performance.mark && window.performance.mark("lc_postmate_ready");
                    var u = c.model,
                        s = u.clientLimitExceeded,
                        d = u.customer,
                        l = u.requestedGroup,
                        f = u.hidden,
                        p = u.integrationName,
                        m = u.isInCustomContainer,
                        h = u.page,
                        b = u.region,
                        v = u.serverConfig,
                        y = u.ogServerConfig,
                        O = u.actingAsDirectLink,
                        _ = a.getApplicationState("mobile"),
                        j = O || m,
                        w = v.__unsafeProperties.group.language;
                    Object(oe.c)(w), a.updateUser(a.getSessionUserId(), d), a.setApplicationState({
                        clientLimitExceeded: !a.getApplicationState("clientLimitExceededLifted") && s,
                        actingAsDirectLink: O,
                        embedded: !0,
                        region: b,
                        isInCustomContainer: m,
                        mobileWrapper: null,
                        page: h,
                        rtl: Object(oe.b)(w),
                        language: w,
                        integrationName: p,
                        requestedGroup: l,
                        visibility: Pn(a, _, j, f)
                    });
                    var x = {
                        onAnimationEnd: function() {
                            return a.emit("animation_end")
                        },
                        onError: function() {
                            c.call("kill")
                        },
                        onMinimizedRef: function(e) {
                            c.minimizedRef = e
                        },
                        onMinimizedResize: function() {
                            return re(c, a)
                        }
                    };
                    Ln(a, {
                        adapterOptions: Object(g.a)({
                            license: n,
                            group: r,
                            requestedGroup: l,
                            region: b,
                            uniqueGroups: i,
                            mobile: Object(N.d)(),
                            ogServerConfig: y
                        }, o && {
                            identityProvider: {
                                getToken: function() {
                                    return c.call("callIdentityProvider", "getToken")
                                },
                                getFreshToken: function() {
                                    return c.call("callIdentityProvider", "getFreshToken")
                                },
                                hasToken: function() {
                                    return c.call("callIdentityProvider", "hasToken")
                                },
                                invalidate: function() {
                                    return c.call("callIdentityProvider", "invalidate")
                                }
                            }
                        }),
                        props: x,
                        onBootstrap: function() {
                            if (gn.a(c, a), j) return c.call("show"), void t(a);
                            ie(c, a).then((function() {
                                "hidden" !== a.getApplicationState("visibility").state && c.call("show"), t(a)
                            }))
                        }
                    }, v, c)
                }))
            }
            var Nn = function(e) {
                    return e.sort((function(e, t) {
                        return e.order - t.order
                    })).map((function(e) {
                        switch (e.type) {
                            case "header":
                                return Object(g.a)({}, e, {
                                    label: e.value
                                });
                            case "checkbox":
                            case "radio":
                            case "select":
                                return Object(g.a)({}, e, {
                                    options: e.options_data ? e.options_data.map((function(e, t) {
                                        return Object(g.a)({}, e, {
                                            id: String(t)
                                        })
                                    })) : e.options.map((function(e, t) {
                                        return {
                                            label: e,
                                            id: String(t),
                                            checked: !1
                                        }
                                    }))
                                });
                            case "skill":
                                return Object(g.a)({}, e, {
                                    type: "group_chooser",
                                    options: e.skills.map((function(e, t) {
                                        return {
                                            label: e.label,
                                            groupId: e.skill_id,
                                            id: String(t)
                                        }
                                    }))
                                });
                            case "checkbox_for_email":
                                return Object(g.a)({}, e, e.options_data[0]);
                            case "facebookConnect":
                                return null;
                            default:
                                return e
                        }
                    })).filter(Boolean)
                },
                qn = function(e) {
                    var t = e.map((function(e, t) {
                        return Object(g.a)({}, e, {
                            id: String(t)
                        })
                    }));
                    return Nn(t)
                },
                Bn = function(e, t) {
                    return {
                        id: t.id,
                        fields: "ticket" === e ? qn(t.fields) : Nn(t.fields)
                    }
                },
                Un = function(e, t) {
                    if (1520 === e) return "https://secure-lc.livechatinc.com";
                    return t ? function(e, t) {
                        var n = e.match(/secure(-(labs|lc))/i);
                        return "https://secure-" + t + (null !== n && n.length > 0 ? n[1] : "") + ".livechatinc.com"
                    }("https://secure.livechatinc.com", t) : "https://secure.livechatinc.com"
                },
                Vn = function e(t, n) {
                    var r = n.licenseId,
                        i = n.uniqueGroups,
                        o = n.groupId,
                        a = n.region,
                        c = n.query,
                        u = n.callbackName,
                        s = Un(r, a);
                    return De(s + "/" + function(e) {
                        var t = e.uniqueGroups,
                            n = e.license,
                            r = e.group;
                        return "licence/" + (t ? "g" + n + "_" + (r || 0) : n)
                    }({
                        uniqueGroups: i,
                        license: r,
                        group: o
                    }) + "/v2/" + t + ".js", {
                        query: c,
                        callbackName: u
                    }).then((function(n) {
                        if (n.error && "incorrect region" === n.error) return e(t, {
                            licenseId: r,
                            uniqueGroups: i,
                            groupId: o,
                            region: n.region,
                            query: c,
                            callbackName: u
                        });
                        if (n.error) throw new Error(n.error);
                        return Object(g.a)({}, n, {
                            region: a
                        })
                    }))
                },
                Fn = function(e) {
                    var t = e.licenseId,
                        n = e.url,
                        r = e.groupId,
                        i = e.uniqueGroups,
                        o = void 0 !== i && i,
                        a = e.skipCodeInstallationTracking,
                        c = void 0 !== a && a,
                        u = e.channelType,
                        s = Object(g.a)({
                            t: Date.now(),
                            url: n,
                            referrer: document.referrer
                        }, "number" === typeof r && {
                            groups: r
                        }, u && {
                            channel_type: u
                        }, c && {
                            test: 1
                        });
                    return Vn("get_dynamic_config", {
                        licenseId: t,
                        groupId: r,
                        uniqueGroups: o,
                        query: s
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
                Hn = function(e) {
                    var t = e.licenseId,
                        n = e.groupId,
                        r = e.uniqueGroups,
                        i = void 0 !== r && r,
                        o = e.region,
                        a = e.version;
                    return Vn("get_static_config." + n + "." + a, {
                        licenseId: t,
                        groupId: n,
                        uniqueGroups: i,
                        region: o,
                        callbackName: "lc_static_config"
                    }).then((function(e) {
                        var t;
                        return [e, Object(g.a)({
                            localizationVersion: e.localization_url.split(".")[3]
                        }, (null == (t = e.domain_whitelist) ? void 0 : t.length) && {
                            allowedDomains: e.domain_whitelist
                        }, e.pre_chat_survey && {
                            prechatForm: Bn("prechat", e.pre_chat_survey)
                        }, !e.embedded_chat.hide_when_offline && {
                            ticketForm: Bn("ticket", e.offline_form)
                        }, {
                            buttons: e.buttons.map((function(e) {
                                return "image" === e.type ? {
                                    id: e.id,
                                    type: e.type,
                                    onlineValue: Ne(e.online_value),
                                    offlineValue: Ne(e.offline_value)
                                } : {
                                    id: e.id,
                                    type: e.type,
                                    onlineValue: e.online_value,
                                    offlineValue: e.offline_value
                                }
                            })),
                            integrations: Object(g.a)({}, e.integrations.analytics && {
                                analytics: e.integrations.analytics
                            }, e.integrations.kissmetrics && {
                                kissmetrics: e.integrations.kissmetrics
                            }, e.integrations.mixpanel && {
                                mixpanel: e.integrations.mixpanel
                            }),
                            properties: e.properties,
                            __unsafeProperties: Object(g.a)({}, e.s && {
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
                                        var t = e.group_properties.embedded_chat.eye_grabber.path,
                                            n = {
                                                enabled: !0,
                                                x: parseInt(e.group_properties.embedded_chat.eye_grabber.x) + 15,
                                                y: parseInt(e.group_properties.embedded_chat.eye_grabber.y),
                                                src: Ne(t)
                                            };
                                        if (-1 !== n.src.indexOf("/default/eyeCatchers/")) {
                                            var r = /\.([a-z]{1,})$/i,
                                                i = n.src.match(r)[1];
                                            n.srcset = {
                                                "1x": n.src,
                                                "2x": n.src.replace(new RegExp("\\." + i, "i"), "-2x." + i)
                                            }
                                        }
                                        return n
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
                    }))
                },
                Gn = function(e, t) {
                    var n = e.license,
                        r = e.group,
                        i = e.requestedGroup,
                        o = t.__unsafeProperties.group.language.language,
                        a = W({
                            application: {
                                license: n,
                                group: r,
                                requestedGroup: i,
                                region: t.region,
                                rtl: Object(oe.b)(o),
                                language: o,
                                embedded: !1,
                                mobileWrapper: Object(Lt.b)(),
                                page: {
                                    title: document.title,
                                    url: String(document.location),
                                    referrer: document.referrer
                                }
                            }
                        }, {
                            persistKey: Object(oe.a)(e)
                        }),
                        c = !a.getApplicationState().clientLimitExceededLifted && t.clientLimitExceeded;
                    return a.setApplicationState({
                        visibility: {
                            state: "maximized"
                        },
                        clientLimitExceeded: c
                    }), a.on("protocol_upgraded", (function() {
                        window.location.reload()
                    })), a.updateUser(a.getSessionUserId(), function() {
                        var e = Object(E.i)(window.location.search),
                            t = Object(b.db)(["name", "email"], e);
                        return e.params && (t.properties = Object(b.N)((function(e) {
                            return String(e)
                        }), Object(E.b)(e.params))), t
                    }()), a
                },
                Wn = function(e) {
                    return function e(t) {
                        var n = Ue("get_dynamic_configuration", t);
                        return De(n, {
                            query: Object(g.a)({
                                license_id: t.licenseId,
                                url: t.url
                            }, "number" === typeof t.groupId && {
                                group_id: t.groupId
                            }, t.channelType && {
                                channel_type: t.channelType
                            }, t.skipCodeInstallationTracking && {
                                test: 1
                            })
                        }).then((function(n) {
                            if (n.error) switch (n.error.type) {
                                case "misdirected_request":
                                    return e(Object(g.a)({}, t, {
                                        region: n.error.data.region
                                    }));
                                default:
                                    var r = new Error(n.error.message);
                                    throw r.code = n.error.type.toUpperCase(), r
                            }
                            if (!n.domain_allowed) {
                                var i = new Error("Current domain is not added to the allowlist.");
                                throw i.code = "DOMAIN_NOT_ALLOWED", i
                            }
                            return {
                                groupId: n.group_id,
                                clientLimitExceeded: n.client_limit_exceeded,
                                configVersion: n.config_version,
                                localizationVersion: n.localization_version,
                                onlineGroupIds: n.online_group_ids || [],
                                region: t.region || null
                            }
                        }))
                    }(e).then((function(t) {
                        var n = t.groupId;
                        return Promise.all([t, Ve({
                            licenseId: e.licenseId,
                            groupId: n,
                            region: t.region,
                            version: t.configVersion
                        })]).then((function(e) {
                            var t = e[0],
                                n = e[1];
                            return {
                                serverConfig: Object(g.a)({}, t, n)
                            }
                        }))
                    }))
                },
                Yn = function(e) {
                    return Wn(e).catch((function(t) {
                        if ("WRONG_PRODUCT_VERSION" === (null == t ? void 0 : t.code)) return function(e) {
                            return Fn(e).then((function(t) {
                                var n = t[1],
                                    r = n.groupId,
                                    i = e.uniqueGroups;
                                return Promise.all([i && e.groupId !== r ? Fn(Object(g.a)({}, e, {
                                    groupId: r
                                })) : t, Hn({
                                    licenseId: e.licenseId,
                                    groupId: r,
                                    uniqueGroups: i,
                                    region: n.region,
                                    version: n.configVersion
                                })]).then((function(e) {
                                    var t = e[0],
                                        n = t[0],
                                        r = t[1],
                                        i = e[1],
                                        o = i[0],
                                        a = i[1];
                                    return {
                                        serverConfig: Object(g.a)({}, r, a),
                                        ogServerConfig: Object(g.a)({}, n, o)
                                    }
                                }))
                            }))
                        }(e);
                        throw t
                    }))
                };
            var Kn = function(e) {
                    return new Promise((function(t) {
                        var n = performance.getEntriesByName(e);
                        if (Object(b.E)(n))
                            if ("undefined" !== typeof PerformanceObserver) {
                                var r = setTimeout((function() {
                                        i.disconnect(), t(null)
                                    }), 6e4),
                                    i = new PerformanceObserver((function(n) {
                                        var o = Object(b.n)((function(t) {
                                            return t.name === e
                                        }), n.getEntries());
                                        o && (i.disconnect(), clearTimeout(r), t(o))
                                    }));
                                i.observe({
                                    entryTypes: ["paint"]
                                })
                            } else t(null);
                        else t(n[0])
                    }))
                },
                Jn = function() {
                    var e = "lc_get_time_" + Object(b.v)();
                    window.performance && "function" === typeof window.performance.mark && window.performance.mark(e);
                    var t = performance.getEntriesByName(e)[0].startTime;
                    return performance.clearMarks(e), t
                },
                Xn = function() {
                    if ("undefined" === typeof PerformanceObserver) return null;
                    var e = Jn(),
                        t = [],
                        n = new PerformanceObserver((function(e) {
                            t.push.apply(t, e.getEntries())
                        }));
                    n.observe({
                        entryTypes: ["longtask"]
                    });
                    var r = function() {
                        var n, r = Object(b.K)(t);
                        return r ? (n = r, Jn() - n.startTime + n.duration) : Jn() - e
                    };
                    return {
                        disconnect: function() {
                            return n.disconnect()
                        },
                        getLongTasks: function() {
                            return [].concat(t)
                        },
                        waitForIdle: function(e) {
                            return new Promise((function(i) {
                                ! function o() {
                                    t.push.apply(t, n.takeRecords());
                                    var a = r();
                                    a >= e ? i() : setTimeout(o, Math.ceil(e - a))
                                }()
                            }))
                        }
                    }
                },
                Zn = function(e) {
                    void 0 === e && (e = "first-contentful-paint");
                    var t = Xn();
                    return t ? Kn(e).then((function(e) {
                        return e ? t.waitForIdle(5e3).then((function() {
                            return t.disconnect(), t.getLongTasks()
                        })) : null
                    })) : Promise.resolve(null)
                },
                Qn = function(e, t) {
                    if (!e || !t) return null;
                    var n = Object(b.K)(e);
                    return n ? Math.max(n.startTime + n.duration, t.startTime) : t.startTime
                },
                $n = function() {
                    if (!Math.floor(1e3 * Math.random())) {
                        var e = Zn("first-paint");
                        return {
                            getLogs: function() {
                                return Promise.all([e, Kn("first-paint")]).then((function(e) {
                                    var t = e[0],
                                        n = e[1];
                                    return Object(b.N)((function(e) {
                                        return e && Object(b.rb)(e, 2)
                                    }), {
                                        totalBlockingTime: t && Object(b.mb)(t.map((function(e) {
                                            return e.duration
                                        }))),
                                        firstContentfulPaint: null == n ? void 0 : n.startTime,
                                        timeToInteractive: Qn(t, n)
                                    })
                                }))
                            }
                        }
                    }
                },
                er = Object(E.i)(window.location.search),
                tr = Object(O.c)(),
                nr = Object(O.a)(er),
                rr = Object(O.e)(),
                ir = Object(O.b)();
            if (!tr) throw new Error("No license found in the URL.");
            x.a && Promise.all([n.e(4), n.e(5)]).then(n.bind(null, 381)).catch(b.T),
                function() {
                    var e = {
                            license: tr,
                            group: nr,
                            uniqueGroups: rr,
                            isIdentityProviderEnabled: ir
                        },
                        t = $n(),
                        n = function(e) {
                            e.setApplicationState({
                                readyState: q.a.BOOTSTRAPPED
                            }), t && t.getLogs().then((function(e) {
                                Object(y.d)("iframe_vitals", Object(b.f)(Object(g.a)({}, e, {
                                    isEmbedded: !!er.embedded
                                })))
                            }))
                        };
                    er.embedded ? Dn(e, n) : function(e, t) {
                        window.performance && "function" === typeof window.performance.mark && window.performance.mark("lc_config_request");
                        var n, r = e.license,
                            i = e.group,
                            o = e.uniqueGroups;
                        Yn({
                            licenseId: r,
                            groupId: i,
                            url: (n = String(document.location), n.replace(/\?+$/, "")),
                            channelType: "direct_link",
                            uniqueGroups: o
                        }).then((function(n) {
                            var o = n.serverConfig,
                                a = n.ogServerConfig;
                            window.performance && "function" === typeof window.performance.mark && window.performance.mark("lc_server_config");
                            var c = o.groupId,
                                u = o.region;
                            Object(oe.c)(o.__unsafeProperties.group.language);
                            var s = Gn(Object(g.a)({}, e, {
                                group: c,
                                requestedGroup: i
                            }), o);
                            "3" === o.__unsafeProperties.license.protocolVersion && Fe({
                                licenseId: r,
                                region: u,
                                groupId: c,
                                version: o.localizationVersion,
                                language: o.__unsafeProperties.group.language
                            }).then(s.setLocalization);
                            var d = {
                                adapterOptions: Object(g.a)({}, e, {
                                    group: c,
                                    requestedGroup: i,
                                    region: u,
                                    mobile: Object(N.d)(),
                                    ogServerConfig: a
                                }),
                                props: {},
                                onBootstrap: t
                            };
                            Object(Lt.c)() && (d.props.onMinimizeButtonPress = function() {
                                return s.emit("mobile_wrapper_minimize_intent")
                            }), Ln(s, d, o)
                        }))
                    }(e, n)
                }()
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return ke
            })), n.d(t, "c", (function() {
                return Me
            })), n.d(t, "b", (function() {
                return Ue
            })), n.d(t, "a", (function() {
                return Be
            })), n.d(t, "d", (function() {
                return r
            }));
            var r = {};
            n.r(r), n.d(r, "CONNECTED", (function() {
                return o
            })), n.d(r, "DISCONNECTED", (function() {
                return a
            })), n.d(r, "NOT_INITIALIZED", (function() {
                return c
            })), n.d(r, "RECONNECTING", (function() {
                return u
            }));
            var i = {};
            n.r(i), n.d(i, "addView", (function() {
                return j
            })), n.d(i, "setCurrentView", (function() {
                return w
            })), n.d(i, "updateView", (function() {
                return x
            })), n.d(i, "setDefaultView", (function() {
                return E
            })), n.d(i, "addChat", (function() {
                return C
            })), n.d(i, "addEvent", (function() {
                return I
            })), n.d(i, "removeEvent", (function() {
                return T
            })), n.d(i, "addHistoryEvents", (function() {
                return k
            })), n.d(i, "addParticipant", (function() {
                return S
            })), n.d(i, "addUser", (function() {
                return z
            })), n.d(i, "flushChat", (function() {
                return A
            })), n.d(i, "recalculateTimeline", (function() {
                return M
            })), n.d(i, "removeParticipant", (function() {
                return R
            })), n.d(i, "sendEvent", (function() {
                return L
            })), n.d(i, "setApplicationState", (function() {
                return P
            })), n.d(i, "updateFeature", (function() {
                return D
            })), n.d(i, "setConnectionState", (function() {
                return N
            })), n.d(i, "setChatServerId", (function() {
                return q
            })), n.d(i, "setEventData", (function() {
                return B
            })), n.d(i, "setEventServerId", (function() {
                return U
            })), n.d(i, "setLocalization", (function() {
                return V
            })), n.d(i, "setUserServerId", (function() {
                return F
            })), n.d(i, "setUserProperties", (function() {
                return G
            })), n.d(i, "requestSetUserProperties", (function() {
                return W
            })), n.d(i, "updateChat", (function() {
                return K
            })), n.d(i, "requestUpdateChat", (function() {
                return J
            })), n.d(i, "updateEvent", (function() {
                return Z
            })), n.d(i, "requestUpdateEvent", (function() {
                return Q
            })), n.d(i, "updateUser", (function() {
                return ee
            })), n.d(i, "requestUpdateUser", (function() {
                return te
            }));
            var o = "connected",
                a = "disconnected",
                c = "not_initialized",
                u = "reconnecting",
                s = n(1),
                d = n(63),
                l = n(28),
                f = n(16),
                p = n(2),
                m = n(146),
                h = n(4),
                b = function(e) {
                    var t = e.id,
                        n = e.serverId,
                        r = void 0 === n ? null : n,
                        i = e.active,
                        o = void 0 === i || i,
                        a = e.participants,
                        c = void 0 === a ? [] : a,
                        u = e.properties,
                        s = void 0 === u ? {} : u;
                    if ("string" !== typeof t) throw new Error("Chat ID has to be a string.");
                    if (null !== r && t !== r) throw new Error('If serverId is given ("' + r + '") it should match id ("' + t + '").');
                    return {
                        id: t,
                        serverId: r,
                        active: o,
                        participants: c,
                        properties: s
                    }
                },
                g = function(e) {
                    var t = e.id,
                        n = e.type,
                        r = e.author,
                        i = e.timestamp,
                        o = e.own,
                        a = e.serverId,
                        c = void 0 === a ? null : a,
                        u = e.thread,
                        s = void 0 === u ? null : u,
                        d = e.serverTimestamp,
                        l = void 0 === d ? null : d,
                        f = e.delivered,
                        p = void 0 === f || f,
                        m = e.seen,
                        h = void 0 !== m && m,
                        b = e.failed,
                        g = void 0 !== b && b,
                        v = e.properties,
                        y = void 0 === v ? {} : v;
                    if ("string" !== typeof t) throw new Error("Event ID has to be a string.");
                    if ("string" !== typeof n) throw new Error("Event has to have string `type` property.");
                    if (null !== c && t !== c) throw new Error('If serverId is given ("' + c + '") it should match id ("' + t + '").');
                    return {
                        id: t,
                        serverId: c,
                        type: n,
                        thread: s,
                        author: r,
                        own: o,
                        timestamp: i,
                        serverTimestamp: l,
                        delivered: p,
                        seen: h,
                        failed: g,
                        properties: y
                    }
                },
                v = function(e) {
                    var t = e.id,
                        n = e.serverId,
                        r = void 0 === n ? t : n,
                        i = e.type,
                        o = void 0 === i ? null : i,
                        a = e.name,
                        c = void 0 === a ? null : a,
                        u = e.email,
                        s = void 0 === u ? null : u,
                        d = e.avatar,
                        l = void 0 === d ? null : d,
                        f = e.properties,
                        p = void 0 === f ? {} : f;
                    if ("string" !== typeof t) throw new Error("User ID has to be a string.");
                    return {
                        id: t,
                        serverId: r,
                        type: o,
                        name: c,
                        email: s,
                        avatar: l,
                        properties: p
                    }
                },
                y = n(9),
                O = ["delivered", "failed", "properties", "seen", "serverTimestamp", "thread"],
                _ = function(e, t) {
                    return e.forEach((function(e) {
                        if (Object(p.A)(e, t)) throw new Error("Updating `" + e + "` property is not possible.")
                    }))
                },
                j = Object(f.d)("ADD_VIEW", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (void 0 === n && (n = {}), y.getView(i(), t)) throw new Error('There is already the "' + t + '" view. It has to be unique.');
                    return r({
                        name: t,
                        data: n
                    }), y.getView(i(), t)
                })),
                w = Object(f.d)("SET_CURRENT_VIEW", (function(e, t) {
                    var n = e.action,
                        r = e.getState;
                    if (!y.getView(r(), t)) throw new Error('Given view "' + t + "\" doesn't exist.");
                    return n({
                        name: t
                    }), y.getCurrentView(r())
                })),
                x = Object(f.d)("UPDATE_VIEW", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.getView(i(), t)) throw new Error('There is no "' + t + '" view. You should add it first.');
                    return r({
                        name: t,
                        data: n
                    }), y.getView(i(), t)
                })),
                E = Object(f.d)("SET_DEFAULT_VIEW", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    return r({
                        name: n,
                        path: t
                    }), y.getView(i(), t + "/" + n)
                })),
                C = Object(f.d)("ADD_CHAT", (function(e, t) {
                    var n = e.action,
                        r = e.getState,
                        i = void 0 === t ? {} : t,
                        o = i.events,
                        a = void 0 === o ? [] : o,
                        c = Object(h.a)(i, ["events"]);
                    if (y.hasChat(r(), c.id)) throw new Error('There is already a chat with "' + c.id + '" ID. It has to be unique.');
                    var u = Object(p.n)((function(e) {
                        return !y.hasUser(r(), e)
                    }), a.map((function(e) {
                        return e.author
                    })).concat(c.participants || []));
                    if (u) throw new Error('Given user ("' + u + "\") doesn't exist. You should add it first.");
                    var d = c.id || Object(p.w)(y.getChats(r()));
                    return n({
                        id: d,
                        chat: b(Object(s.a)({}, c, {
                            id: d
                        })),
                        events: a.map(g)
                    }), y.getChat(r(), d)
                })),
                I = Object(f.d)("ADD_EVENT", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState,
                        o = n.id,
                        a = n.serverId,
                        c = i();
                    if (o && a && o !== a) throw new Error('Specified ID ("' + o + '") differs from specified serverId ("' + a + '"). You either should use only ID or both should be the same.');
                    if (!y.hasChat(c, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (y.hasEvent(c, t, o)) throw new Error('There is already an event with "' + o + '" ID in this chat ("' + t + '"). It has to be unique.');
                    if (!y.hasUser(c, n.author)) throw new Error('Specified author ("' + n.author + "\") doesn't exist. You should add it first.");
                    return r({
                        id: o,
                        chat: t,
                        event: g(Object(s.a)({
                            timestamp: Date.now()
                        }, n, {
                            own: n.author === y.getSessionUserId(c)
                        }))
                    }), y.getEvent(i(), t, o)
                })),
                T = Object(f.d)("REMOVE_EVENT", (function(e, t, n) {
                    var r = e.action,
                        i = (0, e.getState)();
                    if (!y.hasChat(i, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (!y.hasEvent(i, t, n)) throw new Error('There is no event with "' + n + '" ID in this chat ("' + t + '").');
                    r({
                        id: n,
                        chat: t
                    })
                })),
                k = Object(f.d)("ADD_HISTORY_EVENTS", (function(e, t, n) {
                    var r = e.action,
                        i = (0, e.getState)();
                    if (!y.hasChat(i, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    n.forEach((function(e) {
                        if (y.hasEvent(i, t, e.id)) throw new Error('There is already an event with "' + e.id + '" ID in this chat ("' + t + '"). It has to be unique.');
                        if (!y.hasUser(i, e.author)) throw new Error('Specified author ("' + e.author + "\") doesn't exist. You should add it first.")
                    }));
                    var o = y.getSessionUserId(i);
                    r({
                        chat: t,
                        events: n.map((function(e) {
                            return g(Object(s.a)({}, e, {
                                serverId: e.id,
                                own: e.author === o
                            }))
                        }))
                    })
                })),
                S = Object(f.d)("ADD_PARTICIPANT", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.hasChat(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (!y.hasUser(i(), n)) throw new Error('Given user ("' + n + "\") doesn't exist. You should add it first.");
                    return r({
                        chat: t,
                        user: n
                    }), y.getParticipants(i(), t)
                })),
                z = Object(f.d)("ADD_USER", (function(e, t) {
                    var n = e.action,
                        r = e.getState,
                        i = t.id;
                    if (y.hasUser(r(), i)) throw new Error('There is already a user with "' + i + '" ID. It has to be unique.');
                    return n({
                        id: i,
                        user: v(t)
                    }), y.getUser(r(), i)
                })),
                A = Object(f.d)("FLUSH_CHAT", (function(e, t) {
                    var n = e.action,
                        r = e.getState;
                    if (!y.hasChat(r(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    return n({
                        id: t
                    }), y.getChat(r(), t)
                })),
                M = Object(f.d)("RECALCULATE_TIMELINE", (function(e, t) {
                    var n = e.action,
                        r = e.getState;
                    if (!y.hasChat(r(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    return n({
                        id: t
                    }), y.getTimeline(r(), t)
                })),
                R = Object(f.d)("REMOVE_PARTICIPANT", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.hasChat(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (!y.hasUser(i(), n)) throw new Error('Given user ("' + n + "\") doesn't exist. You should add it first.");
                    return r({
                        chat: t,
                        user: n
                    }), y.getParticipants(i(), t)
                })),
                L = Object(f.d)("SEND_EVENT", (function(e, t, n, r) {
                    var i = e.action,
                        o = e.getState;
                    if (!y.hasChat(o(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (y.hasEvent(o(), t, n.id)) throw new Error('There is already an event with "' + n.id + '" ID in this chat ("' + t + '"). It has to be unique.');
                    var a = n.id || Object(p.w)(y.getIndexedEvents(o(), t));
                    return i({
                        id: a,
                        chat: t,
                        event: g(Object(s.a)({}, n, {
                            author: y.getSessionUser(o()).id,
                            own: !0,
                            id: a,
                            timestamp: Date.now(),
                            delivered: !1
                        }))
                    }, r), y.getEvent(o(), t, a)
                })),
                P = Object(f.d)("SET_APPLICATION_STATE", (function(e, t) {
                    var n = e.action,
                        r = e.getApplicationState;
                    if (!t || Object(p.E)(t)) throw new Error("Given data object is empty.");
                    return n(t), r()
                })),
                D = Object(f.d)("UPDATE_FEATURE", (function(e, t, n) {
                    var r = e.action,
                        i = e.getApplicationState;
                    if (!n || !t || Object(p.E)(n)) throw new Error("Given data object is empty.");
                    return r({
                        feature: t,
                        data: n
                    }), i()
                })),
                N = Object(f.d)("SET_CONNECTION_STATE", (function(e, t) {
                    var n = e.action,
                        r = e.getState;
                    return n({
                        connectionState: t
                    }), y.getConnectionState(r())
                })),
                q = Object(f.d)("SET_CHAT_SERVER_ID", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.hasChat(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (null !== y.getChat(i(), t).serverId) throw new Error('Chat with "' + t + '" ID has already serverId.');
                    return r({
                        id: t,
                        serverId: n
                    }), y.getChat(i(), t)
                })),
                B = Object(f.d)("SET_EVENT_DATA", (function(e, t, n, r) {
                    var i = e.action,
                        o = e.getState;
                    if (!y.hasChat(o(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (!y.hasEvent(o(), t, n)) throw new Error('There is no "' + n + '" event in "' + t + '" chat. You should add it first.');
                    return _(["id", "type", "own"], r), i({
                        chat: t,
                        id: n,
                        data: Object(s.a)({}, Object(p.db)(O.concat("author", "serverId", "timestamp"), r), {
                            own: r.author === y.getSessionUserId(o())
                        })
                    }), y.getEvent(o(), t, n)
                })),
                U = Object(f.d)("SET_EVENT_SERVER_ID", (function(e, t, n, r) {
                    var i = e.action,
                        o = e.getState;
                    if (!y.hasChat(o(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (!y.hasEvent(o(), t, n)) throw new Error('There is no "' + n + '" event in "' + t + '" chat. You should add it first.');
                    if (null !== y.getEvent(o(), t, n).serverId) throw new Error('Event with "' + n + '" ID has already serverId.');
                    return i({
                        chat: t,
                        id: n,
                        serverId: r
                    }), y.getEvent(o(), t, n)
                })),
                V = Object(f.d)("SET_LOCALIZATION", (function(e, t) {
                    (0, e.action)(t)
                })),
                F = Object(f.d)("SET_USER_SERVER_ID", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.hasUser(i(), t)) throw new Error('There is no "' + t + '" user. You should add it first.');
                    if (null !== y.getUser(i(), t).serverId) throw new Error('User with "' + t + '" ID has already serverId.');
                    return r({
                        id: t,
                        serverId: n
                    }), y.getUser(i(), t)
                })),
                H = Object(f.i)("SET_USER_PROPERTIES", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.hasUser(i(), t)) throw new Error('There is no user with "' + t + '" ID. You should add it first.');
                    return r({
                        id: t,
                        properties: n
                    }), y.getUser(i(), t)
                })),
                G = H.actionMethod,
                W = H.requestActionMethod,
                Y = Object(f.i)("UPDATE_CHAT", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.hasChat(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    return _(["id", "participants", "events"], n), r({
                        id: t,
                        data: Object(p.db)(["active", "properties"], n)
                    }), y.getChat(i(), t)
                })),
                K = Y.actionMethod,
                J = Y.requestActionMethod,
                X = Object(f.i)("UPDATE_EVENT", (function(e, t, n, r) {
                    var i = e.action,
                        o = e.getState;
                    if (!y.hasChat(o(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
                    if (!y.hasEvent(o(), t, n)) throw new Error('There is no "' + n + '" event in "' + t + '" chat. You should add it first.');
                    return _(["id", "type", "author", "own", "timestamp"], r), i({
                        chat: t,
                        id: n,
                        data: Object(p.db)(O, r)
                    }), y.getEvent(o(), t, n)
                })),
                Z = X.actionMethod,
                Q = X.requestActionMethod,
                $ = Object(f.i)("UPDATE_USER", (function(e, t, n) {
                    var r = e.action,
                        i = e.getState;
                    if (!y.hasUser(i(), t)) throw new Error('There is no user with "' + t + '" ID. You should add it first.');
                    return _(["id", "type"], n), r({
                        id: t,
                        data: Object(p.db)(["name", "email", "avatar", "properties"], n)
                    }), y.getUser(i(), t)
                })),
                ee = $.actionMethod,
                te = $.requestActionMethod,
                ne = function(e) {
                    var t;
                    return void 0 === e && (e = {}), Object(f.h)(e, ((t = {})[D] = function(e, t) {
                        var n, r = t.feature,
                            i = t.data;
                        return Object(s.a)({}, e, {
                            config: Object(s.a)({}, e.config, {
                                features: Object(s.a)({}, e.config.features, (n = {}, n[r] = Object(s.a)({}, e.config.features[r], i), n))
                            })
                        })
                    }, t[P] = function(e, t) {
                        return Object(s.a)({}, e, t)
                    }, t))
                },
                re = function(e) {
                    return Object(p.yb)(e).reduce((function(e, t) {
                        var n = t.serverId,
                            r = t.id;
                        return null === n || (e[n] = r), e
                    }), {})
                },
                ie = function(e, t) {
                    var n;
                    return null !== t.serverId ? Object(s.a)({}, e, ((n = {})[t.serverId] = t.id, n)) : e
                },
                oe = function(e, t) {
                    var n, r, i = t.id,
                        o = t.chat,
                        a = t.event;
                    return Object(s.a)({}, e, {
                        chats: Object(s.a)({}, e.chats, {
                            byIds: Object(s.a)({}, e.chats.byIds, (r = {}, r[o] = Object(s.a)({}, e.chats.byIds[o], {
                                events: {
                                    byIds: Object(s.a)({}, e.chats.byIds[o].events.byIds, (n = {}, n[i] = a, n)),
                                    orderedIds: e.chats.byIds[o].events.orderedIds.concat(i),
                                    serverIdsMapping: ie(e.chats.byIds[o].events.serverIdsMapping, a)
                                }
                            }), r))
                        })
                    })
                },
                ae = function(e, t) {
                    var n, r = t.id,
                        i = t.chat;
                    return Object(s.a)({}, e, {
                        chats: Object(s.a)({}, e.chats, {
                            byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[i] = Object(s.a)({}, e.chats.byIds[i], {
                                events: {
                                    byIds: Object(p.V)([r], e.chats.byIds[i].events.byIds),
                                    orderedIds: e.chats.byIds[i].events.orderedIds.filter((function(e) {
                                        return e !== r
                                    })),
                                    serverIdsMapping: Object(p.W)((function(e) {
                                        return e === r
                                    }), e.chats.byIds[i].events.serverIdsMapping)
                                }
                            }), n))
                        })
                    })
                },
                ce = function(e, t) {
                    var n, r = t.chat,
                        i = t.events;
                    return Object(s.a)({}, e, {
                        chats: Object(s.a)({}, e.chats, {
                            byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[r] = Object(s.a)({}, e.chats.byIds[r], {
                                events: {
                                    byIds: Object(s.a)({}, e.chats.byIds[r].events.byIds, Object(p.I)("id", i)),
                                    orderedIds: i.map((function(e) {
                                        return e.id
                                    })).concat(e.chats.byIds[r].events.orderedIds),
                                    serverIdsMapping: Object(s.a)({}, e.chats.byIds[r].events.serverIdsMapping, Object(p.N)((function(e) {
                                        return e.id
                                    }), Object(p.I)("serverId", i)))
                                }
                            }), n))
                        })
                    })
                },
                ue = function(e, t) {
                    var n, r = t.id,
                        i = t.user;
                    return Object(s.a)({}, e, {
                        users: Object(s.a)({}, e.users, {
                            byIds: Object(s.a)({}, e.users.byIds, (n = {}, n[r] = i, n)),
                            serverIdsMapping: ie(e.users.serverIdsMapping, i)
                        })
                    })
                },
                se = function(e, t, n) {
                    var r, i = n.properties,
                        o = Object(h.a)(n, ["properties"]),
                        a = e.byIds[t];
                    return Object(s.a)({}, e, {
                        byIds: Object(s.a)({}, e.byIds, (r = {}, r[t] = Object(s.a)({}, a, o, {
                            properties: i ? Object(s.a)({}, a.properties, i) : a.properties
                        }), r))
                    })
                },
                de = function(e, t, n) {
                    var r, i, o = e.byIds[t],
                        a = {
                            byIds: Object(s.a)({}, e.byIds, (r = {}, r[t] = Object(s.a)({}, o, n), r))
                        };
                    n.serverId && Object(p.A)("serverIdsMapping", e) && (a.serverIdsMapping = Object(s.a)({}, e.serverIdsMapping, ((i = {})[n.serverId] = t, i)));
                    return Object(s.a)({}, e, a)
                },
                le = function(e) {
                    var t, n = (void 0 === e ? {} : e).users,
                        r = void 0 === n ? [] : n,
                        i = Object(p.I)("id", r.map(v));
                    return Object(f.h)({
                        users: {
                            byIds: Object(s.a)({}, i, {
                                system: {
                                    id: "system",
                                    type: "system"
                                }
                            }),
                            serverIdsMapping: re(i)
                        },
                        chats: {
                            byIds: {},
                            serverIdsMapping: {}
                        }
                    }, ((t = {})[C] = function(e, t) {
                        var n, r = t.id,
                            i = t.chat,
                            o = t.events;
                        return Object(s.a)({}, e, {
                            chats: Object(s.a)({}, e.chats, {
                                byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[r] = Object(s.a)({}, i, {
                                    events: {
                                        byIds: Object(p.I)("id", o),
                                        orderedIds: o.map((function(e) {
                                            return e.id
                                        })),
                                        serverIdsMapping: re(o)
                                    }
                                }), n)),
                                serverIdsMapping: ie(e.chats.serverIdsMapping, i)
                            })
                        })
                    }, t[I] = oe, t[T] = ae, t[k] = ce, t[S] = function(e, t) {
                        var n, r = t.chat,
                            i = t.user,
                            o = e.chats.byIds[r].participants;
                        return Object(p.o)((function(e) {
                            return i === e
                        }), o) > -1 ? e : Object(s.a)({}, e, {
                            chats: Object(s.a)({}, e.chats, {
                                byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[r] = Object(s.a)({}, e.chats.byIds[r], {
                                    participants: [].concat(o, [i])
                                }), n))
                            })
                        })
                    }, t[z] = ue, t[A] = function(e, t) {
                        var n, r = t.id;
                        return Object(s.a)({}, e, {
                            chats: Object(s.a)({}, e.chats, {
                                byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[r] = Object(s.a)({}, e.chats.byIds[r], {
                                    serverId: null,
                                    events: {
                                        byIds: {},
                                        orderedIds: [],
                                        serverIdsMapping: {}
                                    },
                                    properties: {}
                                }), n))
                            })
                        })
                    }, t[R] = function(e, t) {
                        var n, r = t.chat,
                            i = t.user,
                            o = e.chats.byIds[r].participants,
                            a = Object(p.o)((function(e) {
                                return i === e
                            }), o);
                        return -1 === a ? e : Object(s.a)({}, e, {
                            chats: Object(s.a)({}, e.chats, {
                                byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[r] = Object(s.a)({}, e.chats.byIds[r], {
                                    participants: Object(p.gb)(a, o)
                                }), n))
                            })
                        })
                    }, t[L] = oe, t[q] = function(e, t) {
                        var n, r = t.id,
                            i = t.serverId;
                        return Object(s.a)({}, e, {
                            chats: Object(s.a)({}, se(e.chats, r, {
                                serverId: i
                            }), {
                                serverIdsMapping: Object(s.a)({}, e.chats.serverIdsMapping, (n = {}, n[i] = r, n))
                            })
                        })
                    }, t[U] = function(e, t) {
                        var n, r, i = t.id,
                            o = t.chat,
                            a = t.serverId;
                        return Object(s.a)({}, e, {
                            chats: Object(s.a)({}, e.chats, {
                                byIds: Object(s.a)({}, e.chats.byIds, (r = {}, r[o] = Object(s.a)({}, e.chats.byIds[o], {
                                    events: Object(s.a)({}, se(e.chats.byIds[o].events, i, {
                                        serverId: a
                                    }), {
                                        serverIdsMapping: Object(s.a)({}, e.chats.byIds[o].events.serverIdsMapping, (n = {}, n[a] = i, n))
                                    })
                                }), r))
                            })
                        })
                    }, t[B] = function(e, t) {
                        var n, r = t.id,
                            i = t.chat,
                            o = t.data;
                        return Object(s.a)({}, e, {
                            chats: Object(s.a)({}, e.chats, {
                                byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[i] = Object(s.a)({}, e.chats.byIds[i], {
                                    events: de(e.chats.byIds[i].events, r, o)
                                }), n))
                            })
                        })
                    }, t[G] = function(e, t) {
                        var n = t.id,
                            r = t.properties;
                        return Object(s.a)({}, e, {
                            users: de(e.users, n, {
                                properties: r
                            })
                        })
                    }, t[F] = function(e, t) {
                        var n, r = t.id,
                            i = t.serverId;
                        return Object(s.a)({}, e, {
                            users: Object(s.a)({}, se(e.users, r, {
                                serverId: i
                            }), {
                                serverIdsMapping: Object(s.a)({}, e.users.serverIdsMapping, (n = {}, n[i] = r, n))
                            })
                        })
                    }, t[K] = function(e, t) {
                        var n = t.id,
                            r = t.data;
                        return Object(s.a)({}, e, {
                            chats: se(e.chats, n, r)
                        })
                    }, t[Z] = function(e, t) {
                        var n, r = t.id,
                            i = t.chat,
                            o = t.data;
                        return Object(s.a)({}, e, {
                            chats: Object(s.a)({}, e.chats, {
                                byIds: Object(s.a)({}, e.chats.byIds, (n = {}, n[i] = Object(s.a)({}, e.chats.byIds[i], {
                                    events: se(e.chats.byIds[i].events, r, o)
                                }), n))
                            })
                        })
                    }, t[ee] = function(e, t) {
                        var n = t.id,
                            r = t.data;
                        return Object(s.a)({}, e, {
                            users: se(e.users, n, r)
                        })
                    }, t))
                },
                fe = function(e) {
                    return void 0 === e && (e = {}),
                        function(t, n) {
                            return void 0 === t && (t = e), n.type !== String(V) ? t : Object(s.a)({}, t, n.payload)
                        }
                },
                pe = function(e) {
                    var t;
                    return Object(f.h)(function(e) {
                        var t = e.id,
                            n = e.connectionState;
                        return {
                            id: t,
                            connectionState: void 0 === n ? c : n
                        }
                    }(e), ((t = {})[N] = function(e, t) {
                        var n = t.connectionState;
                        return Object(s.a)({}, e, {
                            connectionState: n
                        })
                    }, t))
                },
                me = function(e) {
                    return +new Date(e).setHours(0, 0, 0, 0)
                },
                he = function(e, t) {
                    return me(e) === me(t)
                },
                be = function(e) {
                    var t = e.sessionUserId,
                        n = e.event,
                        r = e.showDate,
                        i = void 0 !== r && r;
                    return {
                        own: n.author === t,
                        author: n.author,
                        events: [{
                            id: n.id,
                            type: n.type
                        }],
                        type: n.type,
                        showDate: i,
                        timestamp: n.timestamp
                    }
                },
                ge = function(e, t) {
                    return be({
                        sessionUserId: y.getSessionUser(e).id,
                        event: t,
                        showDate: !0
                    })
                },
                ve = function(e) {
                    return Object(p.U)((function(e) {
                        return -1 * Object(p.y)(0, "timestamp", Object(p.K)(e.events))
                    }), e).map((function(e) {
                        return {
                            id: e.id
                        }
                    }))
                },
                ye = function(e, t) {
                    var n, r = t.id;
                    return Object(s.a)({}, e, {
                        Chat: Object(s.a)({}, e.Chat, (n = {}, n[r] = Object(s.a)({}, e.Chat[r], {
                            timeline: []
                        }), n))
                    })
                },
                Oe = function() {
                    return !1
                },
                _e = function() {
                    return !0
                },
                je = function() {
                    return function(e) {
                        return void 0 === e && (e = {}), e
                    }
                },
                we = function(e, t) {
                    return Object(f.j)(Object(d.c)(Object(p.O)((function(t, n) {
                        return t(e[n])
                    }), {
                        application: ne,
                        entities: le,
                        localization: fe,
                        session: pe,
                        views: je
                    })), function(e) {
                        var t = e.shouldAddToTimeline,
                            n = void 0 === t ? _e : t,
                            r = e.shouldCreateNewGroup,
                            i = void 0 === r ? Oe : r,
                            o = function(e, t) {
                                var n = y.getSessionUser(e).id;
                                return function(r, o) {
                                    var a = Object(p.K)(r),
                                        c = y.getEvent(e, t, Object(p.K)(a.events).id);
                                    if ("message_draft" === o.type && "form" === a.type) {
                                        var u = Object(p.q)((function(e) {
                                            return "message_draft" === e.type
                                        }), r);
                                        return u ? [].concat(Object(p.j)(2, r), [Object(s.a)({}, u, {
                                            events: [].concat(u.events, [{
                                                id: o.id,
                                                type: o.type
                                            }])
                                        }), a]) : [].concat(Object(p.j)(1, r), [be({
                                            sessionUserId: n,
                                            event: o
                                        }), a])
                                    }
                                    return he(c.timestamp, o.timestamp) ? o.timestamp >= a.timestamp + 3e5 || a.author !== o.author || i(o) ? [].concat(r, [be({
                                        sessionUserId: n,
                                        event: o
                                    })]) : [].concat(Object(p.j)(1, r), [Object(s.a)({}, a, {
                                        events: [].concat(a.events, [{
                                            id: o.id,
                                            type: o.type
                                        }])
                                    })]) : [].concat(r, [be({
                                        sessionUserId: n,
                                        event: o,
                                        showDate: !0
                                    })])
                                }
                            },
                            a = function(e, t, r) {
                                var i = r.filter(n);
                                if (0 === i.length) return [];
                                var a = i[0],
                                    c = i.slice(1),
                                    u = ge(e, a);
                                return c.reduce(o(e, t), [u])
                            },
                            c = function(e, t, n) {
                                var r = y.getChats(n);
                                return {
                                    Chat: Object(p.N)((function(e) {
                                        var t;
                                        return (t = {})[e.id] = {
                                            timeline: a(n, e.id, e.events)
                                        }, t
                                    }), r),
                                    ChatList: ve(r),
                                    current: null
                                }
                            },
                            u = function(e, t, n) {
                                var r, i = t.id;
                                return Object(s.a)({}, e, {
                                    Chat: Object(s.a)({}, e.Chat, (r = {}, r[i] = {
                                        timeline: a(n, i, y.getChat(n, i).events)
                                    }, r)),
                                    ChatList: ve(y.getChats(n))
                                })
                            },
                            d = function(e, t, r) {
                                var i, a = t.chat,
                                    c = t.id,
                                    u = e.Chat[a].timeline,
                                    d = y.getEvent(r, a, c);
                                return n(d) ? Object(s.a)({}, e, {
                                    Chat: Object(s.a)({}, e.Chat, (i = {}, i[a] = Object(s.a)({}, e.Chat[a], {
                                        timeline: u.length > 0 ? o(r, a)(u, d) : [ge(r, d)]
                                    }), i)),
                                    ChatList: ve(y.getChats(r))
                                }) : e
                            },
                            l = function(e, t) {
                                var n, r, i = t.chat,
                                    o = t.id,
                                    a = e.Chat[i].timeline,
                                    c = Object(p.o)((function(e) {
                                        return e.events.some((function(e) {
                                            return e.id === o
                                        }))
                                    }), a),
                                    u = a[c],
                                    d = u.events.filter((function(e) {
                                        return e.id !== o
                                    }));
                                return d.length > 0 ? r = Object(p.xb)(c, Object(s.a)({}, u, {
                                    events: d
                                }), a) : (r = c + 1 < a.length ? Object(p.xb)(c + 1, Object(s.a)({}, a[c + 1], {
                                    showDate: a[c + 1].showDate || u.showDate
                                }), a) : a, r = Object(p.gb)(c, r)), Object(s.a)({}, e, {
                                    Chat: Object(s.a)({}, e.Chat, (n = {}, n[i] = Object(s.a)({}, e.Chat[i], {
                                        timeline: r
                                    }), n))
                                })
                            },
                            f = function(e, t, n) {
                                var r, i = t.chat,
                                    o = t.events,
                                    c = e.Chat[i].timeline,
                                    u = c[0],
                                    d = c.slice(1),
                                    l = Object(p.K)(o);
                                u && he(l.timestamp, u.timestamp) && (u = Object(s.a)({}, u, {
                                    showDate: he(Date.now(), u.timestamp)
                                }));
                                var f = a(n, i, o),
                                    m = u ? [].concat(f, [u], d) : f,
                                    h = o[0],
                                    b = !he(h.timestamp, Date.now());
                                return Object(s.a)({}, e, {
                                    Chat: Object(s.a)({}, e.Chat, (r = {}, r[i] = Object(s.a)({}, e.Chat[i], {
                                        hasDividers: b,
                                        timeline: m
                                    }), r))
                                })
                            },
                            m = function(e, t, n) {
                                var r, i = t.id;
                                return Object(s.a)({}, e, {
                                    Chat: Object(s.a)({}, e.Chat, (r = {}, r[i] = {
                                        timeline: a(n, i, y.getChat(n, i).events)
                                    }, r))
                                })
                            };
                        return function(e, t) {
                            var n = t.type,
                                r = t.payload;
                            if (Object(p.E)(e.views)) return Object(s.a)({}, e, {
                                views: c(e.views, 0, e)
                            });
                            switch (n) {
                                case String(C):
                                    return Object(s.a)({}, e, {
                                        views: u(e.views, r, e)
                                    });
                                case String(I):
                                case String(L):
                                    return Object(s.a)({}, e, {
                                        views: d(e.views, r, e)
                                    });
                                case String(T):
                                    return Object(s.a)({}, e, {
                                        views: l(e.views, r)
                                    });
                                case String(k):
                                    return Object(s.a)({}, e, {
                                        views: f(e.views, r, e)
                                    });
                                case String(j):
                                    var i = r.name.replace(/\//gi, ".");
                                    return Object(s.a)({}, e, {
                                        views: Object(p.hb)(i, r.data, e.views)
                                    });
                                case String(A):
                                    return Object(s.a)({}, e, {
                                        views: ye(e.views, r)
                                    });
                                case String(E):
                                    var o = r.path.replace(/\//gi, ".") + "._default";
                                    return Object(s.a)({}, e, {
                                        views: Object(p.hb)(o, r.name, e.views)
                                    });
                                case String(M):
                                    return Object(s.a)({}, e, {
                                        views: m(e.views, r, e)
                                    });
                                case String(w):
                                    return Object(s.a)({}, e, {
                                        views: Object(s.a)({}, e.views, {
                                            current: r.name
                                        })
                                    });
                                case String(x):
                                    var a = r.name.replace(/\//gi, "."),
                                        h = Object(p.x)(a, e.views);
                                    return Object(s.a)({}, e, {
                                        views: Object(p.hb)(a, Object(s.a)({}, h, r.data), e.views)
                                    });
                                default:
                                    return e
                            }
                        }
                    }(t))
                },
                xe = function(e, t) {
                    var n = e.id,
                        r = t.getState;
                    return y.getChat(r(), n)
                },
                Ee = function(e, t) {
                    var n = e.id,
                        r = e.chat,
                        i = t.getState;
                    return {
                        chat: r,
                        event: y.getEvent(i(), r, n)
                    }
                },
                Ce = function(e, t) {
                    var n = e.id,
                        r = t.getState;
                    return y.getUser(r(), n)
                },
                Ie = function(e) {
                    var t = y.getCurrentView(e);
                    return {
                        view: t,
                        default: y.getDefaultView(e, t)
                    }
                },
                Te = function(e) {
                    var t;
                    return function(e, t) {
                        return function(n, r) {
                            if (Object(p.A)(n.type, e)) {
                                var i = e[n.type](n.payload, r);
                                n.meta && (i.meta = n.meta), t(n.type.toLowerCase(), i)
                            }
                        }
                    }(((t = {})[C] = xe, t[I] = Ee, t[z] = Ce, t[A] = xe, t[J] = p.B, t[Q] = p.B, t[L] = Ee, t[P] = function(e, t) {
                        var n = t.getState;
                        return y.getApplicationState(n())
                    }, t[N] = function(e, t) {
                        var n = t.getState;
                        return y.getConnectionState(n())
                    }, t[w] = function(e, t) {
                        var n = e.name,
                            r = t.getState;
                        return {
                            name: n,
                            data: y.getView(r(), n),
                            viewInfo: Ie(r())
                        }
                    }, t[E] = function(e, t) {
                        var n = e.name,
                            r = e.path,
                            i = t.getState;
                        return {
                            name: n,
                            path: r,
                            data: y.getView(i(), r + "/" + n),
                            viewInfo: Ie(i())
                        }
                    }, t[K] = xe, t[Z] = Ee, t[ee] = Ce, t[G] = Ce, t[te] = p.B, t[W] = p.B, t[q] = p.B, t), e)
                };

            function ke(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                var n = Object(l.a)(),
                    r = p.B,
                    o = Object(m.a)(),
                    a = Object(d.d)(we(function(e) {
                        var t = e.entities,
                            n = void 0 === t ? {} : t,
                            r = e.session,
                            i = void 0 === r ? {} : r,
                            o = i.id,
                            a = void 0 === o ? "session_" + Object(p.v)() : o,
                            c = n.users,
                            u = void 0 === c ? [] : c,
                            d = Object(p.n)((function(e) {
                                return e.id === a
                            }), u);
                        return Object(s.a)({}, e, {
                            entities: Object(s.a)({}, n, {
                                users: d ? u : [].concat(u, [{
                                    id: a,
                                    serverId: null
                                }])
                            }),
                            session: Object(s.a)({}, i, {
                                id: a
                            })
                        })
                    }(e), t), void 0, r(Object(d.a)(o)));
                o.add(Te(n.emit));
                var c = a.getState(),
                    u = c,
                    h = c;
                return a.subscribe((function() {
                    var e = a.getState();
                    if (h !== e) {
                        var t = [h, e];
                        u = t[0], h = t[1]
                    }
                })), Object(p.a)(a, Object(f.a)(i, a), Object(f.b)(y, a.getState), {
                    getPreviousState: function() {
                        return u
                    },
                    emit: n.emit,
                    on: n.on,
                    once: n.once,
                    off: function(e, t) {
                        if (!e || !t) throw new Error(".off needs to be called with both type and handler arguments.");
                        if ("*" === e) throw new Error(".off('*', ...) is not supported.");
                        n.off(e, t)
                    }
                }), a
            }
            var Se = n(152),
                ze = {},
                Ae = function() {
                    return ze
                };

            function Me(e, t) {
                return void 0 === t && (t = {}), Object(Se.b)(e, Ae, void 0, Object(s.a)({
                    areStatesEqual: function(e) {
                        return e.getState() === e.getPreviousState()
                    }
                }, t))
            }
            var Re = n(0),
                Le = n(15),
                Pe = Re.createContext(),
                De = Pe.Provider,
                Ne = Pe.Consumer,
                qe = Me((function(e) {
                    return {
                        localization: e.getState().localization,
                        localize: e.localize
                    }
                }))(function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return Object(Le.a)(t, e), t.prototype.render = function() {
                        var e = this;
                        return Re.createElement(De, {
                            value: function(t, n) {
                                return e.props.localize(t, n)
                            }
                        }, this.props.children)
                    }, t
                }(Re.Component)),
                Be = function(e) {
                    if ("string" === typeof e.children) {
                        var t = e.children,
                            n = Object(h.a)(e, ["children"]);
                        return Re.createElement(Ne, null, (function(e) {
                            return e(t, n)
                        }))
                    }
                    return Re.createElement(Ne, e)
                };

            function Ue(e) {
                var t = e.store,
                    n = e.children,
                    r = Object.create(t);
                return r.getState = function() {
                    return t
                }, Re.createElement(Se.a, {
                    store: r
                }, Re.createElement(qe, null, n))
            }
        },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = {};
            n.r(r), n.d(r, "NOT_READY", (function() {
                return i
            })), n.d(r, "READY", (function() {
                return o
            })), n.d(r, "BOOTSTRAPPED", (function() {
                return a
            }));
            var i = "not_ready",
                o = "ready",
                a = "bootstrapped"
        },
        39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "g", (function() {
                return u
            })), n.d(t, "c", (function() {
                return d
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "i", (function() {
                return f
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "d", (function() {
                return h
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "k", (function() {
                return g
            })), n.d(t, "l", (function() {
                return v
            })), n.d(t, "j", (function() {
                return y
            })), n.d(t, "f", (function() {
                return x
            }));
            var r = n(5),
                i = n(22),
                o = n(187),
                a = function(e) {
                    var t = e.color,
                        n = e.backgroundColor,
                        i = e.hoverBackgroundColor;
                    return Object(r.z)("color:", t, ";background-color:", n, ";&:hover{color:", t, ";background-color:", i, ";}")
                },
                c = Object(r.D)(r.d, {
                    target: "e1osmd0p0"
                })("padding:", (function(e) {
                    return e.theme.spaces.space3
                }), ";overflow:hidden;font-weight:400;white-space:nowrap;text-overflow:ellipsis;border:none !important;width:100%;display:block;outline-offset:2px;", (function(e) {
                    var t = e.theme,
                        n = e.variant,
                        c = e.disabled;
                    return Object(r.z)(t.typography.input, " border-radius:", "modern" === t.name ? 4 : 6, "px !important;", (!n || "default" === n) && a({
                        color: Object(i.e)(.6, t.colors.cta),
                        backgroundColor: Object(i.f)(.95, t.colors.cta),
                        hoverBackgroundColor: Object(i.f)(.85, t.colors.cta)
                    }), " ", "primary" === n && a({
                        color: t.colors.ctaText,
                        backgroundColor: t.colors.cta,
                        hoverBackgroundColor: Object(i.e)(.25, t.colors.cta)
                    }), " ", "danger" === n && a({
                        color: t.colors.text.white,
                        backgroundColor: t.colors.error,
                        hoverBackgroundColor: Object(i.e)(.25, t.colors.error)
                    }), " ", c && Object(o.b)(t))
                })),
                u = Object(r.D)(r.d, {
                    target: "e1osmd0p1"
                })("padding:6px 4px;width:100%;height:32px;overflow:hidden;font-weight:400;white-space:nowrap;text-overflow:ellipsis;border:none;", (function(e) {
                    var t = e.theme;
                    return a({
                        color: Object(i.e)(.6, t.colors.cta),
                        backgroundColor: Object(i.c)(.02, t.colors.surface.lightVariant),
                        hoverBackgroundColor: Object(i.c)(.01, t.colors.surface.lightVariant)
                    })
                })),
                s = n(113),
                d = Object(r.D)("ul", {
                    target: "e52g9ij0"
                })("list-style:none;display:flex;flex-direction:column;margin:0;padding:1em;", (function(e) {
                    var t = e.compact,
                        n = e.theme;
                    return t && Object(r.z)("padding:", n.spaces.space3, ";flex-wrap:wrap;flex-direction:row;")
                })),
                l = Object(r.D)("li", {
                    target: "e52g9ij1"
                })("margin-bottom:", (function(e) {
                    return e.theme.spaces.space3
                }), ";", (function(e) {
                    return e.compact && Object(r.z)(s.a, " padding:0;flex-grow:1;")
                })),
                f = Object(r.D)("div", {
                    target: "e52g9ij2"
                })("margin:0;padding:1em;", (function(e) {
                    var t = e.compact,
                        n = e.theme;
                    return t && Object(r.z)("padding:", n.spaces.space3, ";")
                })),
                p = Object(r.D)("div", {
                    target: "e52g9ij3"
                })("margin-bottom:", (function(e) {
                    return e.theme.spaces.space3
                }), ";", (function(e) {
                    return e.compact && Object(r.z)(s.a, " padding:0;")
                })),
                m = n(193),
                h = Object(r.D)(m.a, {
                    target: "ezxewqd0"
                })("display:flex;overflow:hidden;flex-direction:", (function(e) {
                    return e.horizontalLayout ? "row" : "column"
                }), ";width:", (function(e) {
                    return e.horizontalLayout ? "100%" : "230px"
                }), ";max-width:100%;margin-bottom:0.1em;", (function(e) {
                    var t = e.theme;
                    return "smooth" === t.name ? Object(r.z)("box-shadow:", t.boxShadow.xs, ";") : Object(r.z)("border:1px solid ", t.colors.divider, ";")
                }), ";"),
                b = Object(r.D)("div", {
                    target: "ezxewqd1"
                })("display:flex;flex-direction:column;width:230px;min-width:0%;max-width:100%;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";", (function(e) {
                    return e.narrow && {
                        flex: 2
                    }
                })),
                g = Object(r.D)("div", {
                    target: "eztkvdh0"
                })("padding:1em;&:active{outline:none;}"),
                v = Object(r.D)("h2", {
                    target: "eztkvdh1"
                })("margin:0;margin-bottom:4px;font-size:1em;font-weight:400;"),
                y = Object(r.D)("p", {
                    target: "eztkvdh2"
                })("margin:0;color:", (function(e) {
                    return e.theme.colors.grayscale[600]
                }), ";"),
                O = n(0),
                _ = n(185),
                j = Object(r.z)("object-fit:cover;width:100%;height:100%;"),
                w = Object(r.D)("div", {
                    target: "ex5d4ma0"
                })("overflow:hidden;", (function(e) {
                    var t = e.horizontalLayout,
                        n = e.theme;
                    return t ? Object(r.z)("flex:1;height:100%;border-top-left-radius:", n.borderRadius.md, ";border-bottom-left-radius:", n.borderRadius.md, ";") : Object(r.z)("width:100%;height:150px;border-top-left-radius:", n.borderRadius.md, ";border-top-right-radius:", n.borderRadius.md, ";")
                })),
                x = function(e) {
                    var t = e.url,
                        n = e.link,
                        i = e.horizontalLayout,
                        o = e.alternativeText,
                        a = void 0 === o ? "" : o,
                        c = O.createElement(w, {
                            horizontalLayout: i
                        }, O.createElement(r.h, {
                            alt: a,
                            src: t,
                            className: j
                        }));
                    return n ? O.createElement(_.a, {
                        href: n
                    }, c) : c
                }
        },
        42: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            }));
            var r = n(0),
                i = n(251),
                o = n.n(i),
                a = function() {
                    return new RegExp("(" + o()().source + ")")
                },
                c = n(252),
                u = n.n(c),
                s = "msCrypto" in window,
                d = function(e) {
                    return !s && u()(e)
                },
                l = n(5),
                f = n(253),
                p = n.n(f),
                m = /\s/g,
                h = function() {
                    return null
                },
                b = Object(l.z)("width:1.75em;height:1.75em;margin:-1px;vertical-align:middle !important;display:inline !important;"),
                g = function(e) {
                    var t = e.emoji,
                        n = "https://cdn.livechat-static.com/api/file/lc/img/emoji-fallback/" + p()(t).toUpperCase().replace(m, "-") + ".svg";
                    return r.createElement(l.h, {
                        alt: t,
                        className: b,
                        src: n
                    }, h)
                },
                v = r.memo(g),
                y = a(),
                O = function(e) {
                    return e.split(y).map((function(e, t) {
                        return !(t % 2 === 1) || d(e) ? e : r.createElement(v, {
                            key: t,
                            emoji: e
                        })
                    }))
                },
                _ = function(e) {
                    var t = e.children;
                    return "string" === typeof t ? O(t) : function e(t) {
                        return r.Children.map(t, (function(t) {
                            var n;
                            return "string" === typeof t ? O(t) : r.Children.count(null == t || null == (n = t.props) ? void 0 : n.children) ? r.cloneElement(t, void 0, e(t.props.children)) : t
                        }))
                    }(t)
                },
                j = r.memo(_)
        },
        43: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "a", (function() {
                return c
            }));
            var r = n(2),
                i = function() {
                    var e;
                    return !(e = window.matchMedia) || !/native code/.test(String(e)) || !window.matchMedia("(hover: none)").matches
                },
                o = function() {
                    return /mobile/gi.test(navigator.userAgent) && !("MacIntel" === navigator.platform && Object(r.C)("iPad", navigator.userAgent))
                },
                a = function() {
                    return o() || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 0
                },
                c = function() {
                    return Object(r.C)("Chrome-Lighthouse", navigator.userAgent)
                }
        },
        46: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            })), n.d(t, "b", (function() {
                return g
            })), n.d(t, "c", (function() {
                return v
            }));
            var r, i = n(1),
                o = n(4),
                a = n(60),
                c = n(2),
                u = n(11);
            ! function(e) {
                e[e.Emergency = 0] = "Emergency", e[e.Alert = 1] = "Alert", e[e.Critical = 2] = "Critical", e[e.Error = 3] = "Error", e[e.Warning = 4] = "Warning", e[e.Notice = 5] = "Notice", e[e.Informational = 6] = "Informational", e[e.Debug = 7] = "Debug"
            }(r || (r = {}));
            var s = function(e) {
                    var t = e.type,
                        n = e.license,
                        r = Object(o.a)(e, ["type", "license"]),
                        i = {
                            licence_id: n.toString(),
                            event_id: t,
                            message: JSON.stringify(r)
                        },
                        s = "https://queue.livechatinc.com/logs";
                    return Object(a.a)(s, {
                        method: "POST",
                        headers: {
                            Accept: "*/*",
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: Object(u.a)(i)
                    }).then(c.T, c.T)
                },
                d = n(18),
                l = n(100),
                f = n(43),
                p = [/sendURLToGuardwareProxy/i, /safari-extension:\/\//],
                m = !("true" === l.a.getItem("_livechat_has_visited"));
            l.a.setItem("_livechat_has_visited", "true");
            var h = function(e, t, n) {
                    var r = (new Intl.DateTimeFormat).resolvedOptions().timeZone,
                        o = Object(i.a)({
                            type: "chat_widget_" + t,
                            license: Object(d.c)(),
                            userAgent: navigator.userAgent,
                            mobile: Object(f.c)(),
                            timeZone: String(r),
                            logVersion: "2021-03-03",
                            firstTimeVisitor: m,
                            severity: e,
                            lc_env: "production"
                        }, n);
                    if (r) {
                        var a = r.split("/")[0];
                        a !== r && (o.timeZoneArea = String(a))
                    }
                    return s(o)
                },
                b = function(e, t, n) {
                    var r, o = {};
                    if (t instanceof Error ? (o.errorMessage = t.message, o.stack = t.stack, o.code = t.code) : o.errorMessage = JSON.stringify({
                            error: t
                        }), r = o, !p.some((function(e) {
                            return e.test(r.errorMessage + " " + r.stack)
                        }))) return Object(c.G)(n) || (n = {
                        meta: JSON.stringify({
                            info: n
                        })
                    }), h("Error", e, Object(i.a)({}, n, o))
                },
                g = function(e, t) {
                    return h("Informational", e, t)
                },
                v = function(e) {
                    return h("Notice", e)
                }
        },
        47: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "d", (function() {
                return c
            }));
            var r = n(34),
                i = r.d.CONNECTED,
                o = r.d.DISCONNECTED,
                a = "fakely_connected",
                c = (r.d.NOT_INITIALIZED, r.d.RECONNECTING)
        },
        48: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "g", (function() {
                return p
            }));
            var r = n(2),
                i = n(3),
                o = function(e, t) {
                    return e.filter((function(e) {
                        return e.serverName in t
                    })).map((function(e) {
                        return {
                            type: e.type,
                            label: e.label,
                            value: e.options ? Object(r.k)(t[e.serverName]).map((function(t) {
                                return Object(r.n)((function(e) {
                                    return e.originalValue === t
                                }), e.options).label
                            })).join(", ") : t[e.serverName]
                        }
                    }))
                },
                a = function(e, t) {
                    var n = e.getEvent(i.c, t),
                        r = n.author,
                        o = n.timestamp,
                        a = n.properties.text,
                        c = e.getUser(r),
                        u = c.type,
                        s = {
                            text: a,
                            timestamp: Math.floor(o / 1e3),
                            user_type: "agent" === u ? u : "visitor"
                        };
                    "agent" === u ? (s.agent_name = c.name, s.agent_login = c.id) : s.visitor_name = c.name, e.emit("on_message", s)
                },
                c = function(e, t, n, r) {
                    e.emit("on_" + t + "_survey_submitted", {
                        form_data: o(n, r)
                    })
                },
                u = function(e, t, n) {
                    c(e, "prechat", t, n)
                },
                s = function(e, t, n) {
                    c(e, "postchat", t, n)
                },
                d = function(e, t) {
                    e.emit("on_rating_comment_submitted", t)
                },
                l = function(e, t) {
                    e.emit("on_rating_submitted", null === t ? "none" : t)
                },
                f = function(e, t, n) {
                    e.emit("on_message", {
                        text: t.properties.text,
                        timestamp: n / 1e3,
                        user_type: "visitor",
                        visitor_name: e.getSessionUser().name
                    })
                },
                p = function(e, t, n, r) {
                    var i = r.id,
                        a = r.text,
                        c = r.visitor,
                        u = c.email,
                        s = c.name,
                        d = r.subject,
                        l = {
                            form_data: o(t, n),
                            ticket_id: i,
                            text: a,
                            visitor_name: s,
                            visitor_email: u
                        };
                    d && (l.ticket_subject = d), e.emit("on_ticket_created", l)
                }
        },
        5: function(e, t, n) {
            "use strict";
            n.d(t, "z", (function() {
                return s
            })), n.d(t, "A", (function() {
                return d
            })), n.d(t, "B", (function() {
                return l
            })), n.d(t, "C", (function() {
                return f
            })), n.d(t, "D", (function() {
                return M
            })), n.d(t, "a", (function() {
                return Z
            })), n.d(t, "b", (function() {
                return Ie
            })), n.d(t, "c", (function() {
                return Se
            })), n.d(t, "f", (function() {
                return ze
            })), n.d(t, "g", (function() {
                return Be
            })), n.d(t, "h", (function() {
                return we
            })), n.d(t, "i", (function() {
                return Nt
            })), n.d(t, "n", (function() {
                return bt
            })), n.d(t, "m", (function() {
                return gt
            })), n.d(t, "j", (function() {
                return Dt
            })), n.d(t, "k", (function() {
                return Ze
            })), n.d(t, "l", (function() {
                return Ke
            })), n.d(t, "q", (function() {
                return W
            })), n.d(t, "v", (function() {
                return Bt
            })), n.d(t, "o", (function() {
                return Ht
            })), n.d(t, "p", (function() {
                return Vt
            })), n.d(t, "s", (function() {
                return dt
            })), n.d(t, "w", (function() {
                return ft
            })), n.d(t, "x", (function() {
                return Kt
            })), n.d(t, "r", (function() {
                return cn
            })), n.d(t, "t", (function() {
                return rn
            })), n.d(t, "u", (function() {
                return ln
            })), n.d(t, "d", (function() {
                return Et
            })), n.d(t, "e", (function() {
                return Rn
            })), n.d(t, "y", (function() {
                return le
            }));
            var r = {};
            n.r(r), n.d(r, "Root", (function() {
                return G
            })), n.d(r, "Maximized", (function() {
                return q
            })), n.d(r, "Minimized", (function() {
                return V
            }));
            var i = n(256),
                o = n(244),
                a = n.n(o),
                c = Object(i.a)({}, {
                    key: "lc",
                    stylisPlugins: [a.a]
                }),
                u = c,
                s = c.css,
                d = c.cx,
                l = c.injectGlobal,
                f = c.keyframes,
                p = n(1),
                m = n(0),
                h = n(245),
                b = n(2),
                g = function(e) {
                    var t = {};
                    if (e.flexFill && (t.flexGrow = 1, t.maxWidth = "100%"), e.flexFit && (t.flexGrow = 0), e.noShrink && (t.flexShrink = 0), e.ellipsis && (t.whiteSpace = "nowrap", t.overflow = "hidden", t.textOverflow = "ellipsis"), e.nowrap && (t.whiteSpace = "nowrap"), "isFocusVisible" in e && (t[":focus"] = {
                            outlineStyle: e.isFocusVisible ? "auto" : "none"
                        }), e.preserveLines && (t.whiteSpace = "pre-line"), e.textWrap) {
                        t.wordWrap = "break-word", t.overflowWrap = "break-word", t.wordBreak = "break-word"
                    }
                    return t
                },
                v = n(15),
                y = n(25),
                O = m.createContext(),
                _ = function(e) {
                    var t = e.value,
                        n = e.children;
                    return m.createElement(y.a, {
                        theme: t
                    }, m.createElement(O.Provider, {
                        value: t
                    }, n))
                },
                j = n(4),
                w = function(e) {
                    return e.charAt(0) !== e.charAt(0).toLowerCase()
                },
                x = function(e, t) {
                    return w(t)
                },
                E = (b.X.bind(null, x), b.cb.bind(null, x)),
                C = {},
                I = function(e) {
                    if (!e) return C;
                    var t = e.css,
                        n = e.vars,
                        r = Object(j.a)(e, ["css", "vars"]);
                    return Object(p.a)({
                        css: t,
                        vars: n
                    }, function(e) {
                        return Object(b.z)((function(t) {
                            return w(t) ? "components" : Object(b.G)(e[t]) ? "propsDescriptions" : "themeProps"
                        }), e)
                    }(r))
                },
                T = function(e) {
                    return function(t) {
                        return function(n) {
                            var r = n[e];
                            if (!r) return n;
                            var i = I(r),
                                o = i.propsDescriptions,
                                a = i.components;
                            if (!o && !a) return n;
                            var c = function(e, t, n) {
                                void 0 === n && (n = {});
                                var r = Object(b.cb)((function(e, n) {
                                    return t[n]
                                }), n);
                                return Object.keys(r).map((function(t) {
                                    var n, i = r[t],
                                        o = I(i),
                                        a = o.themeProps,
                                        c = o.components;
                                    if (!a) return c;
                                    var u = ((n = {})[e] = a, n);
                                    return c ? Object(p.a)({}, u, c) : u
                                }))
                            }(e, t, o);
                            return Object(b.S)([n, a].concat(c).filter(Boolean))
                        }
                    }
                },
                k = function(e) {
                    var t, n, r = e.__ui_kit_name,
                        i = T(r);
                    return n = t = function(t) {
                        function n() {
                            return t.apply(this, arguments) || this
                        }
                        return Object(v.a)(n, t), n.prototype.render = function() {
                            var t = this.props;
                            return m.createElement(_, {
                                value: i(t)
                            }, m.createElement(e, t))
                        }, n
                    }(m.Component), t.displayName = "WithSubtheme(" + r + ")", n
                },
                S = Object(h.a)(u, m),
                z = function e(t, n) {
                    var r = Object(b.bb)(b.G, n);
                    return 0 === Object.keys(r) ? n : Object(b.f)(Object(b.O)((function(n, r) {
                        return Object(b.G)(n) ? ":" === r[0] ? e(t, n) : n[Object(b.n)((function(e) {
                            return t[e]
                        }), Object.keys(n))] || n.default : n
                    }), n))
                },
                A = function(e, t, n) {
                    var r = e.theme,
                        i = e.style,
                        o = I(r[t]),
                        a = o.css,
                        c = o.vars,
                        u = o.themeProps;
                    return [c ? Object(p.a)({}, r.vars, c) : r.vars, "function" === typeof n && void 0 !== u && n(u), a && z(e, a), g(e), "function" === typeof n && n(Object(p.a)({}, u, e)), i]
                },
                M = function(e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                        r = n.displayName,
                        i = n.displayType,
                        o = n.mapPropsToStyles;
                    var a = S(e, t);
                    return function() {
                        for (var e = r || i || null, n = arguments.length, c = new Array(n), u = 0; u < n; u++) c[u] = arguments[u];
                        var s = a.apply(void 0, c.concat([function(t) {
                            return A(t, e, o)
                        }]));
                        return s.__ui_kit_name = e, t.section ? Object.defineProperty(k(s), "toString", {
                            value: s.toString
                        }) : s
                    }
                },
                R = n(149),
                L = n(7),
                P = n(257),
                D = M("div", {
                    displayName: "FixedWrapperMaximized",
                    mapPropsToStyles: function(e) {
                        var t = {};
                        return e.theme && (t.right = "right" === e.theme.FixedWrapperRoot.position ? "0" : "auto", t.left = "left" === e.theme.FixedWrapperRoot.position ? "0" : "auto"), e.animationDuration && (t.transition = "all " + e.animationDuration + "ms ease-out"), e.state && (t.transform = "entered" === e.state ? "none" : "scale(0.8) translate(10%, 30%)", t.opacity = "entered" === e.state ? "1" : "0"), e.height && (t.height = e.height), e.width && (t.width = e.width), t
                    },
                    target: "ep7mz240"
                })("display:flex;flex-direction:column;max-height:100vh;position:absolute;bottom:0;@media (max-width:490px){width:100%;height:100%;position:fixed;}"),
                N = function(e) {
                    return m.createElement(P.a, { in: e.active,
                        mountOnEnter: !0,
                        timeout: e.theme.FixedWrapperMaximized.animationDuration,
                        unmountOnExit: !0
                    }, (function(t) {
                        return m.createElement(D, Object(p.a)({}, e, {
                            state: t
                        }), m.Children.map(e.children, (function(t) {
                            return m.cloneElement(t, {
                                minimize: e.minimize
                            })
                        })))
                    }))
                };
            N.propTypes = {
                active: L.bool,
                children: L.node.isRequired,
                minimize: L.func,
                style: L.shape()
            };
            var q = Object(y.b)(N),
                B = M("div", {
                    displayName: "FixedWrapperMinimized",
                    mapPropsToStyles: function(e) {
                        var t = e.state,
                            n = e.theme,
                            r = {};
                        return n && (r.transition = "all " + n.FixedWrapperMaximized.animationDuration + "ms ease-out", r.right = "right" === n.FixedWrapperRoot.position ? "0" : "auto", r.left = "left" === n.FixedWrapperRoot.position ? "0" : "auto"), t && (r.transform = "entered" === t ? "none" : "scale(0.8) translate(10%, 30%)", r.opacity = "entered" === t ? "1" : "0"), r
                    },
                    target: "eq1nrcm0"
                })("width:60px;height:60px;position:absolute;bottom:1em;"),
                U = function(e) {
                    return m.createElement(P.a, { in: e.active,
                        mountOnEnter: !0,
                        timeout: e.theme.FixedWrapperMinimized.animationDuration,
                        unmountOnExit: !0
                    }, (function(t) {
                        return m.createElement(B, Object(p.a)({}, e, {
                            state: t
                        }), m.Children.map(e.children, (function(t) {
                            return m.cloneElement(t, {
                                maximize: e.maximize
                            })
                        })))
                    }))
                };
            U.propTypes = {
                active: L.bool,
                children: L.node.isRequired,
                maximize: L.func,
                style: L.shape()
            };
            var V = Object(y.b)(U),
                F = M("div", {
                    displayName: "FixedWrapperRoot",
                    mapPropsToStyles: function(e) {
                        var t = {};
                        return "right" === e.position ? (t.right = "1em", t.left = "auto") : "left" === e.position && (t.right = "auto", t.left = "1em"), t
                    },
                    target: "e7t7c040"
                })("position:fixed;bottom:0;z-index:99;font-size:16px;"),
                H = function(e) {
                    return m.createElement(F, e, m.createElement(R.a, {
                        defaultOn: e.maximizedOnInit
                    }, (function(t) {
                        var n = t.on,
                            r = t.setOff,
                            i = t.setOn;
                        return m.createElement("div", null, m.Children.map(e.children, (function(e) {
                            return e.type === q ? m.cloneElement(e, {
                                minimize: r,
                                active: n
                            }) : e.type === V ? m.cloneElement(e, {
                                maximize: i,
                                active: !n
                            }) : e
                        })))
                    })))
                };
            H.defaultProps = {
                maximizedOnInit: !1
            }, H.propTypes = {
                children: L.node.isRequired,
                maximizedOnInit: L.bool,
                style: L.shape()
            };
            var G = H,
                W = M("div", {
                    mapPropsToStyles: function(e) {
                        var t = {};
                        return e.verticalAlign && ("top" === e.verticalAlign ? t.alignItems = "flex-start" : "bottom" === e.verticalAlign ? t.alignItems = "flex-end" : t.alignItems = e.verticalAlign), e.justify && (!0 === e.justify ? t.justifyContent = "space-between" : "left" === e.justify ? t.justifyContent = "flex-start" : "right" === e.justify ? t.justifyContent = "flex-end" : t.justifyContent = e.justify), e.reverse && (t.flexDirection = "row-reverse"), t
                    },
                    target: "e108e6fy0"
                })("display:flex;min-width:0;"),
                Y = M(W, {
                    displayName: "ChatListItem",
                    mapPropsToStyles: function(e) {
                        return {
                            background: e.active ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)"
                        }
                    },
                    section: !0,
                    target: "edumshe0"
                })("padding:0.5em;transition:background 0.2s;border-bottom:1px solid rgba(0,0,0,0.1);&:hover{cursor:pointer;}"),
                K = function(e) {
                    return m.createElement(Y, e)
                };
            K.propTypes = {
                active: L.bool,
                children: L.node.isRequired
            };
            var J = M(W, {
                    displayName: "AgentBar",
                    section: !0,
                    target: "e1j58gbc0"
                })("padding:1em;"),
                X = function(e) {
                    return m.createElement(J, Object(p.a)({
                        verticalAlign: "center"
                    }, e))
                };
            X.propTypes = {
                children: L.node
            };
            var Z = X,
                Q = n(97),
                $ = function(e) {
                    var t = e.color;
                    return t ? {
                        fill: t,
                        "& *": {
                            fill: t
                        }
                    } : null
                },
                ee = Object(b.P)((function(e) {
                    return M(e, {
                        displayType: "Icon",
                        mapPropsToStyles: $,
                        shouldForwardProp: Q.a,
                        target: "e5ibypu0"
                    })("&{display:block;}&,& *{fill:currentColor;}")
                })),
                te = function(e) {
                    var t = e.children,
                        n = Object(j.a)(e, ["children"]),
                        r = ee(t.type);
                    return m.createElement(r, n)
                };
            te.propTypes = {
                children: L.node.isRequired
            };
            var ne = te,
                re = function(e) {
                    e.styles;
                    var t = Object(j.a)(e, ["styles"]);
                    return m.createElement("svg", Object(p.a)({
                        width: "8px",
                        height: "13px",
                        viewBox: "0 0 8 13"
                    }, t), m.createElement("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, m.createElement("g", {
                        transform: "translate(-840.000000, -560.000000)",
                        fill: "#424D57",
                        fillRule: "nonzero"
                    }, m.createElement("g", {
                        transform: "translate(845.000000, 567.000000) scale(-1, 1) translate(-845.000000, -567.000000) translate(831.000000, 553.000000)"
                    }, m.createElement("g", {
                        transform: "translate(3.000000, 1.000000)"
                    }, m.createElement("polygon", {
                        points: "8.59 17.34 13.17 12.75 8.59 8.16 10 6.75 16 12.75 10 18.75"
                    }))))))
                },
                ie = function(e) {
                    return m.createElement(ne, e, m.createElement(re, null))
                },
                oe = function(e) {
                    e.styles;
                    var t = Object(j.a)(e, ["styles"]);
                    return m.createElement("svg", Object(p.a)({
                        width: "8px",
                        height: "13px",
                        viewBox: "0 0 8 13"
                    }, t), m.createElement("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, m.createElement("g", {
                        transform: "translate(-1104.000000, -560.000000)",
                        fill: "#424D57",
                        fillRule: "nonzero"
                    }, m.createElement("g", {
                        transform: "translate(1094.000000, 553.000000)"
                    }, m.createElement("g", {
                        transform: "translate(2.000000, 1.000000)"
                    }, m.createElement("polygon", {
                        points: "8.59 17.34 13.17 12.75 8.59 8.16 10 6.75 16 12.75 10 18.75"
                    }))))))
                },
                ae = function(e) {
                    return m.createElement(ne, e, m.createElement(oe, null))
                },
                ce = function(e) {
                    e.styles;
                    var t = Object(j.a)(e, ["styles"]);
                    return m.createElement("svg", Object(p.a)({
                        viewBox: "0 0 58 58",
                        style: {
                            enableBackground: "new 0 0 58 58"
                        }
                    }, t), m.createElement("rect", {
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#F2F2F2"
                        },
                        width: "58",
                        height: "58"
                    }), m.createElement("path", {
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#424D57"
                        },
                        d: "M40,38c7.3,3.8,11,8.4,11,13.9v6c0,0.2-0.1,0.3-0.2,0.4C47.9,62,6.1,62,6.1,58l0-0.1l0-0.1 v-6c0-5.5,3.7-10.1,11-13.9c1.2-0.7,2-0.2,2-0.2c2.5,2.3,5.8,3.7,9.5,3.7l-0.1,0l0.3,0c3.5-0.1,6.7-1.5,9.1-3.7 C38,37.8,38.8,37.3,40,38z M28.5,17C34.3,17,39,21.7,39,27.5S34.3,38,28.5,38S18,33.3,18,27.5S22.7,17,28.5,17z"
                    }))
                },
                ue = function(e) {
                    return m.createElement(ne, e, m.createElement(ce, null))
                },
                se = function(e) {
                    e.styles;
                    var t = Object(j.a)(e, ["styles"]);
                    return m.createElement("svg", Object(p.a)({
                        height: "18px",
                        viewBox: "0 0 21 18",
                        width: "21px"
                    }, t), m.createElement("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "none",
                        strokeWidth: "1"
                    }, m.createElement("g", {
                        fill: "#000000"
                    }, m.createElement("polygon", {
                        points: "0.01 18 21 9 0.01 0 0 7 15 9 0 11"
                    }))))
                },
                de = function(e) {
                    return m.createElement(ne, e, m.createElement(se, null))
                },
                le = s("animation:1.5s ease-in-out 0s infinite;animation-name:", f("0%{opacity:1.0;}50%{opacity:0.4;}100%{opacity:1.0;}"), ";"),
                fe = M("div", {
                    target: "e11eolwx0"
                })("width:100vw;max-width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e5e5e5;"),
                pe = s("width:32px;height:32px;fill:currentColor;"),
                me = function(e) {
                    return m.createElement(fe, e, m.createElement("svg", {
                        viewBox: "0 0 32 32",
                        className: d(pe, le)
                    }, m.createElement("path", {
                        d: "M6.1,22.1l5.3-4.8c0.4-0.3,1-0.3,1.3,0l3.2,2.8l6.5-5.8c0.4-0.3,1-0.3,1.3,0l2.3,2.1V9c0-0.6-0.4-1-1-1h-18 c-0.6,0-1,0.4-1,1L6.1,22.1C6.1,22,6.1,22,6.1,22.1z M8,23h8.1l-4.1-3.7L8,23z M19.1,23h5.9c0.6,0,1-0.4,1-1v-3l-3-2.7l-5.7,5.1 L19.1,23z M7.1,6h18c1.7,0,3,1.3,3,3v13c0,1.7-1.3,3-3,3h-18c-1.7,0-3-1.3-3-3V9C4.1,7.3,5.4,6,7.1,6z M15.1,16c-1.7,0-3-1.3-3-3 s1.3-3,3-3s3,1.3,3,3S16.8,16,15.1,16z M15.1,14c0.6,0,1-0.4,1-1s-0.4-1-1-1c-0.6,0-1,0.4-1,1S14.5,14,15.1,14z"
                    })))
                },
                he = function(e) {
                    return m.createElement(fe, e, m.createElement("svg", {
                        viewBox: "0 0 32 32",
                        className: pe
                    }, m.createElement("path", {
                        d: "M3.6,5.1L3.6,5.1l24.1,21.1c0.4,0.4,0.5,1,0.1,1.4c-0.3,0.4-0.9,0.4-1.3,0.2l-0.1-0.1l-8.1-7.1l-2,1.8  l1.7,1.5h4l2.3,2l-0.1,0L24,26H6c-1.6,0-2.9-1.2-3-2.8L3,23L3,7.3L2.3,6.7c-0.4-0.4-0.5-1-0.1-1.4C2.6,4.9,3.1,4.9,3.6,5.1z   M11,20.3L6.9,24h8.1L11,20.3z M26,5c1.6,0,2.9,1.2,3,2.8L29,8v15.4l0,0l-2-1.7l0-3.7l-3-2.7l-2.2,2L20.3,16l3.1-2.8  c0.3-0.3,0.9-0.3,1.2-0.1l0.1,0.1l2.3,2.1V8c0-0.5-0.4-0.9-0.9-1L26,7H10L7.7,5l0.1,0L8,5H26z M5,9.1l0,14l5.3-4.8  c0.3-0.3,0.9-0.3,1.2-0.1l0.1,0.1l3.2,2.8l1.9-1.7L5,9.1z M20,8c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S18.3,8,20,8z M20,10  c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,10,20,10z"
                    })))
                },
                be = n(335),
                ge = s("&-enter{opacity:0;height:0;}&-enter&-enter-active{opacity:1;height:1.2em;transition:height 200ms ease-in-out,opacity 100ms ease-in-out 100ms;}&-exit{opacity:1;height:1.2em;}&-exit&-exit-active{opacity:0;height:0;transition:height 100ms ease-in-out 100ms,opacity 200ms ease-in-out;}"),
                ve = function(e) {
                    return m.createElement(be.a, Object(p.a)({}, e, {
                        classNames: ge,
                        timeout: 200
                    }))
                };
            ve.propTypes = {
                children: L.node
            };
            var ye = ve,
                Oe = s("&-enter{opacity:0;transform:scale(1.2);}&-enter-active{opacity:1;transform:scale(1);transition:opacity ", 200, "ms ", "cubic-bezier(0.14, 0, 0, 1)", ",transform ", 200, "ms ", "cubic-bezier(0.14, 0, 0, 1)", ";}&-enter-done{opacity:1;transform:scale(1);}"),
                _e = function(e) {
                    return m.createElement(be.a, Object(p.a)({}, e, {
                        classNames: Oe,
                        timeout: 500
                    }))
                },
                je = function(e) {
                    var t = e.children,
                        n = e.src,
                        r = e.srcSet,
                        i = (e.scaleImage, e.className),
                        o = e.alt,
                        a = void 0 === o ? "" : o,
                        c = Object(j.a)(e, ["children", "src", "srcSet", "scaleImage", "className", "alt"]),
                        u = m.useState("pending"),
                        s = u[0],
                        d = u[1],
                        l = m.useState(!1),
                        f = l[0],
                        h = l[1],
                        b = m.useRef(0),
                        g = "loaded" === s,
                        v = null;
                    if (t) v = t({
                        imageStatus: s,
                        shouldAnimate: f
                    });
                    else switch (s) {
                        case "pending":
                            v = m.createElement(me, c);
                            break;
                        case "failed":
                            v = m.createElement(he, c);
                            break;
                        default:
                            v = null
                    }
                    return m.useEffect((function() {
                        return d("pending"), h(!1), b.current = setTimeout((function() {
                                return h(!0)
                            }), 300),
                            function() {
                                return clearTimeout(b.current)
                            }
                    }), [n, r]), m.createElement(m.Fragment, null, m.createElement(_e, { in: f && g
                    }, m.createElement("img", Object(p.a)({
                        alt: a
                    }, c, {
                        src: n,
                        srcSet: r,
                        className: i,
                        onLoad: function() {
                            d("loaded"), clearTimeout(b.current)
                        },
                        onError: function() {
                            return d("failed")
                        },
                        style: Object(p.a)({}, !g && {
                            display: "none"
                        })
                    }))), v)
                };
            je.propTypes = {
                children: L.func
            };
            var we = je,
                xe = s("display:block;border-radius:inherit;width:100%;height:100%;object-fit:cover;"),
                Ee = M("div", {
                    displayName: "Avatar",
                    mapPropsToStyles: function(e) {
                        var t = {},
                            n = {},
                            r = e.size,
                            i = e.radius,
                            o = e.fontSize;
                        return r && (t.width = r, t.height = r, t.lineHeight = r), i && (t.borderRadius = i, n.borderRadius = i), o && (t.fontSize = o), Object(p.a)({}, t, {
                            "& img": n
                        })
                    },
                    target: "e11ezd0e0"
                })("border:1px solid #fff;border-radius:50%;text-align:center;background-color:#fff;text-transform:uppercase;overflow:hidden;"),
                Ce = function(e) {
                    var t = e.imgUrl,
                        n = e.letter,
                        r = null;
                    return t || n ? t ? r = m.createElement(we, {
                        src: t,
                        className: xe,
                        alt: "avatar"
                    }, (function(e) {
                        var t = e.imageStatus,
                            n = e.shouldAnimate;
                        switch (t) {
                            case "pending":
                                return m.createElement(ue, {
                                    className: d(xe, n && le)
                                });
                            case "failed":
                                return m.createElement(ue, {
                                    className: xe
                                });
                            default:
                                return null
                        }
                    })) : n && (r = m.createElement("span", null, n)) : r = m.createElement("div", {
                        className: xe
                    }, m.createElement(ue, {
                        className: xe
                    })), m.createElement(Ee, e, r)
                };
            Ce.propTypes = {
                imgUrl: L.string,
                letter: L.string,
                size: L.string,
                style: L.shape()
            };
            var Ie = Ce,
                Te = s("& >:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:0;border-bottom-left-radius:0;}& >:last-child{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}& >:first-child:last-child{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}"),
                ke = M("div", {
                    displayName: "Bubble",
                    mapPropsToStyles: function(e) {
                        var t = e.isOwn,
                            n = e.ovalBorderRadius,
                            r = e.sharpBorderRadius,
                            i = e.radiusType,
                            o = {
                                borderTopLeftRadius: "single" === i || "first" === i ? n : r,
                                borderTopRightRadius: n,
                                borderBottomRightRadius: n,
                                borderBottomLeftRadius: "single" === i || "last" === i ? n : r
                            };
                        return t ? function(e) {
                            var t = e.borderTopLeftRadius,
                                n = e.borderTopRightRadius,
                                r = e.borderBottomRightRadius;
                            return {
                                borderTopLeftRadius: n,
                                borderTopRightRadius: t,
                                borderBottomRightRadius: e.borderBottomLeftRadius,
                                borderBottomLeftRadius: r
                            }
                        }(o) : o
                    },
                    target: "emwkn670"
                })(Te, ";border:1px solid rgba(0,0,0,0.05);display:inline-block;max-width:100%;margin-bottom:0.1em;& img{max-width:100%;display:block;}");
            ke.propTypes = {
                children: L.node,
                isOwn: L.bool,
                radiusType: L.oneOf(["single", "first", "last"])
            };
            var Se = ke,
                ze = M("div", {
                    target: "ek650k30"
                })("display:flex;flex-direction:column;min-width:0;"),
                Ae = M("div", {
                    mapPropsToStyles: function(e) {
                        return {
                            flexShrink: e.shrink ? 1 : 0
                        }
                    },
                    target: "e1jdwequ0"
                })(),
                Me = function(e) {
                    return m.createElement(Ae, Object(p.a)({
                        flexFill: !0
                    }, e))
                };
            Me.defaultProps = {
                shrink: !0
            }, Me.propTypes = {
                shrink: L.bool
            };
            var Re = Me,
                Le = M("div", {
                    mapPropsToStyles: function(e) {
                        return {
                            flexShrink: e.shrink ? 1 : 0
                        }
                    },
                    target: "e1yi1p4d0"
                })(),
                Pe = function(e) {
                    return m.createElement(Le, Object(p.a)({
                        flexFit: !0
                    }, e))
                };
            Pe.defaultProps = {
                shrink: !0
            }, Pe.propTypes = {
                shrink: L.bool
            };
            var De = n(12),
                Ne = M("button", {
                    displayName: "IconButton",
                    section: !0,
                    target: "e1m5b1js0"
                })("appearance:none;background:transparent;border:0;display:inline-block;margin:0;padding:0.5em;color:inherit;&:hover{cursor:", (function(e) {
                    return e.disabled ? "default" : "pointer"
                }), ";}"),
                qe = function(e) {
                    var t = Object(De.f)();
                    return m.createElement(Ne, Object(p.a)({}, t, e))
                };
            qe.propTypes = {
                active: L.bool,
                disabled: L.bool,
                children: L.node.isRequired,
                color: L.string,
                onClick: L.func
            };
            var Be = qe,
                Ue = n(336),
                Ve = n(51),
                Fe = n(20),
                He = function(e) {
                    return e.getBoundingClientRect().top + window.pageYOffset
                },
                Ge = n(142),
                We = m.createContext({
                    registerUnseenListItem: b.T,
                    isScrollOnBottom: b.T,
                    scrollToBottom: b.T
                }),
                Ye = We.Provider,
                Ke = We.Consumer,
                Je = function(e) {
                    void 0 === e && (e = 0);
                    var t = e;
                    return function() {
                        return t++
                    }
                }(),
                Xe = M("div", {
                    displayName: "MessageList",
                    target: "e1i3n9g60"
                })("padding:0.5em;overflow-y:auto;height:100%;outline-offset:-5px;"),
                Ze = function(e) {
                    var t = e.active,
                        n = void 0 === t || t,
                        r = e.innerRef,
                        i = e.onScroll,
                        o = Object(j.a)(e, ["active", "innerRef", "onScroll"]),
                        a = m.useRef(),
                        c = Object(Ge.a)(a, r),
                        u = function() {
                            var e = m.useRef([]);
                            return {
                                getAll: function() {
                                    return e.current
                                },
                                registerItem: m.useCallback((function(t) {
                                    var n = Je(),
                                        r = e.current;
                                    return r.push(Object(p.a)({}, t, {
                                            id: n
                                        })),
                                        function() {
                                            var e = Object(b.o)((function(e) {
                                                return e.id === n
                                            }), r); - 1 !== e && r.splice(e, 1)
                                        }
                                }), [])
                            }
                        }(),
                        s = u.getAll,
                        d = u.registerItem,
                        l = Object(Ve.l)(n),
                        f = Object(Ve.l)(i),
                        h = Object(De.f)(),
                        g = m.useCallback((function() {
                            s().forEach((function(e) {
                                var t, n;
                                (t = a.current, n = e.ref, He(n) - He(t) + n.clientHeight <= t.clientHeight) && e.onSeen()
                            }))
                        }), [s]),
                        v = m.useMemo((function() {
                            return Object(b.pb)(300, (function() {
                                l.current && g()
                            }))
                        }), [l, g]),
                        y = m.useCallback((function(e) {
                            v(), f.current && f.current(e)
                        }), [f, v]);
                    m.useEffect((function() {
                        n && g()
                    }), [n, g]);
                    var O = m.useMemo((function() {
                        return {
                            registerUnseenListItem: d,
                            isScrollOnBottom: function() {
                                return e = a.current, void 0 === (t = 20) && (t = 0), e.scrollTop + e.clientHeight - e.scrollHeight >= -t;
                                var e, t
                            },
                            scrollToBottom: function() {
                                var e;
                                (e = a.current).scrollTop = e.scrollHeight
                            }
                        }
                    }), [d]);
                    return m.createElement(Ye, {
                        value: O
                    }, m.createElement(Xe, Object(p.a)({}, h, o, {
                        innerRef: c,
                        onScroll: y,
                        role: "grid",
                        "aria-live": "polite",
                        "aria-relevant": "additions"
                    })))
                },
                Qe = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this)._unregisterFromMessageList = b.T, t._registerInMessageList = Object(b.Q)((function(e) {
                            return function(n) {
                                t._unregisterFromMessageList(), n && (t._unregisterFromMessageList = e({
                                    ref: n,
                                    onSeen: t.props.onSeen
                                }))
                            }
                        })), t
                    }
                    Object(v.a)(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        this._unregisterFromMessageList()
                    }, n.render = function() {
                        var e = this;
                        return m.createElement(Ke, null, (function(t) {
                            var n = t.registerUnseenListItem;
                            return m.createElement("div", {
                                ref: e.props.seen ? null : e._registerInMessageList(n),
                                role: "row"
                            }, m.Children.only(e.props.children))
                        }))
                    }, t
                }(m.Component);
            Qe.propTypes = {
                children: L.node.isRequired,
                onSeen: L.func
            }, Qe.defaultProps = {
                onSeen: b.T
            };
            var $e = Qe,
                et = M("div", {
                    displayName: "Message",
                    mapPropsToStyles: function(e) {
                        var t = e.horizontalAlign;
                        return t ? {
                            flexDirection: "left" === t ? "row" : "row-reverse"
                        } : null
                    },
                    section: !0,
                    target: "e10ccb470"
                })("display:flex;align-items:flex-start;font-size:0.9em;margin:0.3em;max-width:100%;"),
                tt = M("span", {
                    displayName: "AuthorName",
                    target: "e10ccb471"
                })("font-size:0.8em;"),
                nt = M("div", {
                    displayName: "MessageMeta",
                    target: "e10ccb472"
                })("text-align:left;"),
                rt = M("div", {
                    displayName: "Content",
                    target: "e10ccb473"
                })("display:flex;flex-direction:column;overflow:hidden;align-items:flex-start;"),
                it = M("span", {
                    displayName: "Time",
                    target: "e10ccb474"
                })("font-size:0.8em;"),
                ot = M("div", {
                    displayName: "Status",
                    target: "e10ccb475"
                })("text-align:right;font-size:0.8em;"),
                at = s("user-select:none;"),
                ct = function(e) {
                    var t = e.children,
                        n = e.authorName,
                        r = e.deliveryStatus,
                        i = void 0 === r ? "" : r,
                        o = e.isOwn,
                        a = e.date,
                        c = e.showMetaOnClick,
                        u = e.onSeen,
                        s = (e.radiusType, e.seen),
                        d = e.enforceDeliveryStatusDisplay,
                        l = Object(j.a)(e, ["children", "authorName", "deliveryStatus", "isOwn", "date", "showMetaOnClick", "onSeen", "radiusType", "seen", "enforceDeliveryStatusDisplay"]),
                        f = Object(De.f)(),
                        h = m.createElement(R.a, null, (function(e) {
                            var r = e.on,
                                u = e.getElementTogglerProps;
                            return m.createElement(et, Object(p.a)({}, u(l), {
                                own: o,
                                tabIndex: null
                            }), m.createElement(rt, Object(p.a)({
                                role: "gridcell"
                            }, f), m.createElement(Ue.a, null, (!c || r) && m.createElement(ye, null, m.createElement(nt, null, n && m.createElement(tt, null, n, " "), a && m.createElement(it, null, a)))), t, i ? m.createElement(ot, null, i) : d ? m.createElement(ot, {
                                className: at
                            }, "\xa0") : null))
                        }));
                    return m.createElement($e, {
                        onSeen: u,
                        seen: s
                    }, h)
                };
            ct.propTypes = {
                authorName: L.oneOfType([L.string, L.node]),
                authorOpen: L.bool,
                children: L.node,
                date: L.string,
                deliveryStatus: L.string,
                enforceDeliveryStatusDisplay: L.bool,
                isOwn: L.bool,
                onClick: L.func,
                onSeen: L.func,
                showMetaOnClick: L.bool,
                style: L.shape(),
                toggleAuthor: L.func,
                radiusType: L.oneOf(["single", "first", "last"]),
                seen: L.bool
            }, ct.defaultProps = {
                onClick: function() {},
                seen: !1
            };
            var ut = ct,
                st = M("div", {
                    displayName: "SubTitle",
                    target: "e1fut3qs0"
                })("font-weight:300;opacity:0.7;");
            st.defaultProps = {
                textWrap: !0
            };
            var dt = st,
                lt = M("div", {
                    displayName: "Title",
                    target: "e9xf8br0"
                })("font-weight:400;");
            lt.defaultProps = {
                textWrap: !0
            };
            var ft = lt,
                pt = (Object(b.Y)(console.warn.bind(console)), M("div", {
                    displayName: "MessageTitle",
                    target: "e1ykjxgu0"
                })("font-weight:600;padding:1em;")),
                mt = s("margin-bottom:4px;"),
                ht = function(e) {
                    var t = e.children,
                        n = e.title,
                        r = e.subtitle,
                        i = Object(j.a)(e, ["children", "title", "subtitle"]);
                    var o = t || [n && m.createElement(ft, {
                        key: "title",
                        preserveLines: !0,
                        className: mt
                    }, n), r && m.createElement(dt, {
                        key: "subtitle",
                        preserveLines: !0
                    }, r)];
                    return m.createElement(pt, i, o)
                };
            ht.propTypes = {
                children: L.oneOfType([L.arrayOf(L.node), L.node]),
                subtitle: L.string,
                title: L.string
            };
            var bt = ht,
                gt = M("div", {
                    displayName: "MessageText",
                    target: "eovu8nx0"
                })("white-space:pre-line;word-wrap:break-word;overflow-wrap:break-word;max-width:100%;padding:1em;"),
                vt = M("div", {
                    displayName: "MessageMedia",
                    mapPropsToStyles: function(e) {
                        var t = e.style || {};
                        return {
                            img: {
                                borderTopLeftRadius: t.borderTopLeftRadius,
                                borderTopRightRadius: t.borderTopRightRadius,
                                borderBottomRightRadius: t.borderBottomRightRadius,
                                borderBottomLeftRadius: t.borderBottomLeftRadius
                            }
                        }
                    },
                    target: "evmhqt80"
                })("overflow:hidden;"),
                yt = "1px solid rgba(0, 0, 0, 0.1)",
                Ot = M("div", {
                    displayName: "MessageButtons",
                    target: "edowbh60"
                })(Te, ";& >:first-child{border-top:", yt, ";}&:first-child >:first-child{border-top:0;}& >:last-child{border-bottom:", yt, ";}&:last-child >:last-child{border-bottom:0;}> *{border-color:", "rgba(0, 0, 0, 0.1)", " !important;}"),
                _t = n(22),
                jt = Object(_t.a)(.2),
                wt = M((function(e) {
                    var t = e.href,
                        n = Object(j.a)(e, ["href"]);
                    return t ? m.createElement("a", Object(p.a)({
                        href: t,
                        rel: "nofollow noopener"
                    }, n)) : m.createElement("button", n)
                }), {
                    displayName: "Button",
                    mapPropsToStyles: function(e) {
                        var t = e.primary ? e.theme.vars["--primary-color"] : "black",
                            n = jt(t);
                        return {
                            borderColor: t,
                            color: t,
                            ":hover": {
                                color: n,
                                borderColor: n
                            }
                        }
                    },
                    shouldForwardProp: Q.a,
                    target: "e1972fzd0"
                })("border-width:1px;border-style:solid;background-color:#fff;font-size:1em;font-family:inherit;line-height:1.4em;text-align:center;text-decoration:none;appearance:none;padding:0.8em;transition:box-shadow 0.1s,color 0.1s,border-color 0.2s;&:hover{cursor:pointer;}&:active{box-shadow:none;outline:none;}&[disabled]{pointer-events:none;}"),
                xt = function(e) {
                    var t = e.label,
                        n = Object(j.a)(e, ["label"]),
                        r = Object(De.f)();
                    return m.createElement(wt, Object(p.a)({}, r, n), t)
                };
            xt.propTypes = {
                label: L.oneOfType([L.string, L.node])
            };
            var Et = xt,
                Ct = M(Et, {
                    target: "e121y1dq0"
                })("display:inline-block;width:100%;border-left:0;border-right:0;border-top:0;border-bottom-color:rgba(0,0,0,0.1);box-shadow:none;transition:background-color 0.1s;background:transparent;color:", (function(e) {
                    return e.disabled ? "#8D9BA9" : "inherit"
                }), ";margin:0;&:hover{border-bottom-color:rgba(0,0,0,0.15);background:rgba(0,0,0,0.02);color:inherit;}&:active{background:rgba(0,0,0,0.04);color:inherit;}"),
                It = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).handleClick = function(e) {
                            e.stopPropagation(), t.props.onClick(e)
                        }, t
                    }
                    return Object(v.a)(t, e), t.prototype.render = function() {
                        return m.createElement(Ct, Object(p.a)({}, this.props, {
                            onClick: this.handleClick
                        }))
                    }, t
                }(m.Component);
            It.propTypes = {
                className: L.string,
                label: L.string,
                onClick: L.func,
                primary: L.bool,
                value: L.oneOfType([L.string, L.number])
            }, It.defaultProps = {
                onClick: b.T
            };
            var Tt = function(e) {
                    return m.Children.toArray(e).filter(Boolean)
                },
                kt = {
                    radiusType: "single"
                },
                St = {
                    radiusType: "first"
                },
                zt = {
                    radiusType: "last"
                },
                At = {
                    authorName: null,
                    date: null
                },
                Mt = M("div", {
                    displayName: "MessageGroup",
                    mapPropsToStyles: function(e) {
                        return e.isOwn ? {
                            flexDirection: "row-reverse"
                        } : null
                    },
                    target: "eslhdd60"
                })("display:flex;margin-bottom:1em;"),
                Rt = M("div", {
                    target: "eslhdd61"
                })("display:flex;flex-direction:column;align-items:center;text-align:center;font-size:0.7em;line-height:1.6em;", (function(e) {
                    return {
                        minWidth: e.theme.Avatar.size,
                        margin: e.isOwn ? "0 0 0 .3em" : "0 .3em 0 0"
                    }
                }), ";"),
                Lt = s("overflow:hidden;"),
                Pt = function(e) {
                    var t = e.avatar,
                        n = e.avatarLetter,
                        r = e.children,
                        i = e.onlyFirstWithMeta,
                        o = Object(j.a)(e, ["avatar", "avatarLetter", "children", "onlyFirstWithMeta"]),
                        a = Tt(r),
                        c = m.Children.count(a);
                    return m.createElement(Mt, o, (t || n) && m.createElement(Rt, {
                        flexFit: !0,
                        isOwn: o.isOwn
                    }, m.createElement(Ie, {
                        imgUrl: t,
                        letter: n
                    })), m.createElement(Re, {
                        className: Lt
                    }, m.Children.map(a, (function(e, t) {
                        if (1 === c) return Object(m.cloneElement)(e, kt);
                        if (0 === t) return Object(m.cloneElement)(e, St);
                        var n = i && t > 0;
                        return t === c - 1 ? Object(m.cloneElement)(e, n ? Object(p.a)({}, zt, At) : zt) : n ? Object(m.cloneElement)(e, At) : e
                    }))))
                };
            Pt.propTypes = {
                avatar: L.string,
                avatarLetter: L.string,
                children: L.node,
                isOwn: L.bool,
                onlyFirstWithMeta: L.bool
            };
            var Dt = Pt,
                Nt = ut,
                qt = {
                    vars: {
                        "primary-color": "#427fe1",
                        "secondary-color": "#fbfbfb",
                        "tertiary-color": "#fff"
                    },
                    AgentBar: {
                        Avatar: {
                            size: "42px",
                            css: {
                                marginRight: ".6em"
                            }
                        },
                        css: {
                            backgroundColor: "var(--secondary-color)"
                        }
                    },
                    Avatar: {
                        size: "30px"
                    },
                    Bubble: {
                        sharpBorderRadius: "0.3em",
                        ovalBorderRadius: "1.4em",
                        css: {
                            backgroundColor: {
                                default: "var(--secondary-color)",
                                bot: "green"
                            }
                        }
                    },
                    Button: {},
                    ChatListItem: {
                        Avatar: {
                            css: {
                                marginRight: ".5em"
                            }
                        }
                    },
                    FixedWrapperMaximized: {
                        animationDuration: 100,
                        width: "400px",
                        height: "500px"
                    },
                    FixedWrapperMinimized: {
                        animationDuration: 100
                    },
                    FixedWrapperRoot: {
                        position: "right",
                        css: {}
                    },
                    Message: {
                        secondaryTextColor: "#000",
                        horizontalAlign: "left",
                        own: {
                            horizontalAlign: "right",
                            Bubble: {
                                css: {
                                    backgroundColor: "var(--primary-color)",
                                    color: "#fff"
                                }
                            },
                            Content: {
                                css: {
                                    alignItems: "flex-end"
                                }
                            },
                            MessageMeta: {
                                css: {
                                    textAlign: "right"
                                }
                            },
                            Time: {
                                css: {
                                    textAlign: "right"
                                }
                            }
                        },
                        bot: {
                            Bubble: {
                                css: {
                                    backgroundColor: "green"
                                }
                            }
                        }
                    },
                    MessageButtons: {},
                    MessageGroup: {},
                    MessageList: {
                        css: {
                            backgroundColor: "var(--tertiary-color)"
                        }
                    },
                    MessageMedia: {},
                    MessageText: {},
                    MessageTitle: {},
                    QuickReply: {
                        css: {
                            borderColor: "var(--primary-color)",
                            backgroundColor: "#fff",
                            color: "var(--primary-color)"
                        }
                    },
                    TextComposer: {
                        inputColor: "#000",
                        Icon: {
                            color: "#aaa"
                        },
                        IconButton: {
                            active: {
                                Icon: {
                                    color: "var(--primary-color)"
                                }
                            }
                        }
                    },
                    TitleBar: {
                        iconsColor: "#fff",
                        behaviour: "default",
                        css: {
                            backgroundColor: "var(--primary-color)"
                        }
                    }
                },
                Bt = function(e) {
                    var t = e.theme,
                        n = void 0 === t ? {} : t,
                        r = e.children,
                        i = function e(t) {
                            var n = E(t);
                            return 0 === Object.keys(n).length ? Object(p.a)({}, t, {
                                vars: Object(b.M)((function(e) {
                                    return "--" + e
                                }), t.vars || {})
                            }) : Object(p.a)({}, t, Object(b.N)((function(t) {
                                return Object(p.a)({}, e(t), {
                                    css: t.css || {}
                                })
                            }), n), {
                                vars: Object(b.M)((function(e) {
                                    return "--" + e
                                }), t.vars || {})
                            })
                        }(Object(b.R)(qt, n));
                    return m.createElement(_, {
                        value: i
                    }, r)
                },
                Ut = M("button", {
                    displayName: "QuickReply",
                    target: "e1gt5po80"
                })("border-width:1px;border-style:solid;font-size:1em;line-height:1em;appearance:none;transition:box-shadow 0.1s,color 0.1s,border-color 0.2s;margin:0.25em;background-color:#fff;border-radius:1.4em;box-shadow:0 0.1em 0.1em 0 rgba(32,34,40,0.05);font-weight:400;overflow:hidden;padding:0.375em 1em 0.5em;word-break:break-word;&:hover{cursor:pointer;}&:active{outline:none;}"),
                Vt = function(e) {
                    var t = e.value,
                        n = e.onSelect,
                        r = void 0 === n ? b.T : n,
                        i = e.onClick,
                        o = void 0 === i ? b.T : i,
                        a = Object(j.a)(e, ["value", "onSelect", "onClick"]),
                        c = Object(De.f)(),
                        u = m.useCallback((function(e) {
                            r(t), o(e)
                        }), [o, r, t]);
                    return m.createElement(Ut, Object(p.a)({
                        value: t
                    }, a, c, {
                        onClick: u
                    }))
                },
                Ft = (Object(b.Y)(console.warn.bind(console)), M("div", {
                    displayName: "QuickReplies",
                    target: "e1dnb9qc0"
                })("display:flex;flex-wrap:wrap;text-align:center;justify-content:center;width:100%;")),
                Ht = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this)._handleSelect = function(e) {
                            return t.props.onSelect(e)
                        }, t
                    }
                    return Object(v.a)(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.replies,
                            i = (t.onSelect, Object(j.a)(t, ["children", "replies", "onSelect"]));
                        var o = n ? Tt(n) : r.map((function(e, t) {
                            return m.createElement(Vt, {
                                key: t,
                                value: e
                            }, e)
                        }));
                        return m.createElement(Ft, Object(p.a)({}, i, {
                            role: "group"
                        }), m.Children.map(o, (function(t) {
                            return Object(m.cloneElement)(t, {
                                onSelect: e._handleSelect
                            })
                        })))
                    }, t
                }(m.Component);
            Ht.defaultProps = {
                onSelect: b.T
            }, Ht.propTypes = {
                children: L.node,
                onSelect: L.func,
                replies: L.arrayOf(L.string)
            };
            var Gt = M("div", {
                    displayName: "TitleBar",
                    section: !0,
                    target: "e1ohfhv0"
                })("display:flex;justify-content:center;align-items:center;width:100%;border:#000;color:#fff;position:relative;z-index:2;text-align:center;padding:0.4em;"),
                Wt = M("div", {
                    displayName: "TitleBarTitle",
                    target: "e1ohfhv1"
                })("width:100%;margin:0;margin-bottom:4px;padding:0 2px;text-align:center;font-size:0.9em;flex-grow:1;"),
                Yt = function(e) {
                    var t = e.leftIcons,
                        n = e.rightIcons,
                        r = e.title,
                        i = Object(j.a)(e, ["leftIcons", "rightIcons", "title"]);
                    return m.createElement(Gt, i, t, m.createElement(Wt, {
                        ellipsis: !0
                    }, r), n)
                };
            Yt.propTypes = {
                leftIcons: L.arrayOf(L.node),
                rightIcons: L.arrayOf(L.node),
                theme: L.shape(),
                title: L.node
            };
            var Kt = Yt,
                Jt = n(144),
                Xt = function(e) {
                    return 13 === e.which
                },
                Zt = function(e) {
                    return Xt(e) && (e.altKey || e.shiftKey)
                },
                Qt = function(e) {
                    return Xt(e) && !e.altKey && !e.shiftKey
                },
                $t = m.createContext(),
                en = $t.Provider,
                tn = $t.Consumer,
                nn = M("div", {
                    displayName: "TextComposer",
                    section: !0,
                    target: "eyij3xx0"
                })("padding:0;background:#fff;border-top:1px solid rgba(0,0,0,0.1);"),
                rn = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            value: t._getValue({
                                value: t.props.defaultValue
                            })
                        }, t._handleButtonClick = function(e) {
                            t.maybeSend() && t.props.onButtonClick(e)
                        }, t._handleChange = function(e) {
                            var n = e.target.value;
                            t._isControlled() || t.setState({
                                value: n
                            }), t.props.onValueChange(n), t.props.onChange(e)
                        }, t._handleInputRef = function(e) {
                            t._inputRef = e, t.props.inputRef(e)
                        }, t._handleKeyDown = function(e) {
                            var n = t.props.onKeyDown;
                            Qt(e) && e.preventDefault(), Xt(e) && !Zt(e) ? (t.maybeSend(), n(e)) : n(e)
                        }, t.maybeSend = function() {
                            return !!t._canSend() && (t._isControlled() || t.setState({
                                value: ""
                            }), t.props.onValueChange(""), t.props.onSend(Object(b.ub)(t._getValue())), !0)
                        }, t
                    }
                    Object(v.a)(t, e);
                    var n = t.prototype;
                    return n._getValue = function(e, t) {
                        return void 0 === e && (e = this.state), void 0 === t && (t = this.props), this._isControlled() ? t.value : e.value
                    }, n._canSend = function() {
                        return this.props.active && "" !== this._getValue().trim()
                    }, n._isControlled = function() {
                        return "string" === typeof this.props.value
                    }, n._setCursorAtTheEnd = function() {
                        var e = this._inputRef.value.length;
                        this._inputRef.setSelectionRange(e, e)
                    }, n.componentDidMount = function() {
                        this.props.defaultValue && this._inputRef && document.activeElement === this._inputRef && this._setCursorAtTheEnd()
                    }, n.componentDidUpdate = function(e, t) {
                        var n = this._getValue();
                        n !== this._getValue(t, e) && "" === n && this._inputRef.focus()
                    }, n.render = function() {
                        var e = this.props,
                            t = (e.active, e.children),
                            n = (e.defaultValue, e.onButtonClick, e.onChange, e.onKeyDown, e.onSend, e.onValueChange, e.value, Object(j.a)(e, ["active", "children", "defaultValue", "onButtonClick", "onChange", "onKeyDown", "onSend", "onValueChange", "value"])),
                            r = {
                                active: this._canSend(),
                                inputRef: this._handleInputRef,
                                value: this._getValue(),
                                maybeSend: this.maybeSend,
                                onButtonClick: this._handleButtonClick,
                                onChange: this._handleChange,
                                onKeyDown: this._handleKeyDown
                            };
                        return m.createElement(en, {
                            value: r
                        }, m.createElement(nn, n, t))
                    }, t
                }(m.Component);
            rn.propTypes = {
                active: L.bool,
                children: L.node,
                defaultValue: L.string,
                inputRef: L.func,
                onButtonClick: L.func,
                onChange: L.func,
                onKeyDown: L.func,
                onSend: L.func,
                value: L.string
            }, rn.defaultProps = {
                active: !0,
                defaultValue: "",
                inputRef: b.T,
                onButtonClick: b.T,
                onChange: b.T,
                onKeyDown: b.T,
                onSend: b.T,
                onValueChange: b.T
            };
            var on = function(e) {
                    return void 0 === e && (e = b.B),
                        function(t) {
                            var n, r;
                            return r = n = function(n) {
                                function r() {
                                    return n.apply(this, arguments) || this
                                }
                                return Object(v.a)(r, n), r.prototype.render = function() {
                                    var n = this;
                                    return m.createElement(tn, null, (function(r) {
                                        return m.createElement(t, Object(p.a)({}, n.props, e(r, n.props)))
                                    }))
                                }, r
                            }(m.Component), n.displayName = "withComposer(" + Object(Jt.a)(t) + ")", r
                        }
                },
                an = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return Object(v.a)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.icon,
                            n = e.active,
                            r = Object(j.a)(e, ["icon", "active"]);
                        return m.createElement(Be, Object(p.a)({}, r, {
                            active: n,
                            disabled: !n
                        }), t ? m.createElement(ne, {
                            "aria-hidden": !0
                        }, t) : m.createElement(de, null))
                    }, t
                }(m.Component);
            an.propTypes = {
                active: L.bool,
                onClick: L.func
            };
            Object(b.Y)(console.warn.bind(console));
            var cn = on((function(e, t) {
                    var n = e.active,
                        r = e.onButtonClick;
                    return n ? {
                        active: n,
                        onClick: r
                    } : {
                        active: n
                    }
                }))(an),
                un = n(248),
                sn = M((function(e) {
                    e.flexFill;
                    var t = Object(j.a)(e, ["flexFill"]);
                    return m.createElement(un.a, t)
                }), {
                    displayName: "TextInput",
                    target: "e1m92qam0"
                })("appearance:none;border:0;resize:none;background-color:#fff;height:1.5em;line-height:1.5em;min-width 0;width:100%;font-size:1em;&:focus,&:active{outline:none;}"),
                dn = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this)._getRef = function(e) {
                            t.props.inputRef(e), t.props.innerRef(e)
                        }, t
                    }
                    return Object(v.a)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = (e.innerRef, e.inputRef, Object(j.a)(e, ["innerRef", "inputRef"]));
                        return m.createElement(sn, Object(p.a)({}, t, {
                            inputRef: this._getRef
                        }))
                    }, t
                }(m.Component);
            dn.defaultProps = {
                innerRef: b.T,
                inputRef: b.T,
                maxRows: 3,
                onChange: b.T,
                onKeyDown: b.T,
                placeholder: "Write a message..."
            }, dn.propTypes = {
                defaultValue: L.string,
                innerRef: L.func,
                inputRef: L.func,
                maxRows: L.number,
                minRows: L.number,
                onChange: L.func,
                onHeightChange: L.func,
                onKeyDown: L.func,
                placeholder: L.string,
                value: L.string
            };
            Object(b.Y)(console.warn.bind(console));
            var ln = on((function(e, t) {
                    return {
                        inputRef: e.inputRef,
                        onChange: e.onChange,
                        onKeyDown: e.onKeyDown,
                        value: e.value
                    }
                }))(dn),
                fn = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).handleButtonClick = function(e) {
                            return function(n) {
                                t.props.onButtonClick(n, e)
                            }
                        }, t
                    }
                    return Object(v.a)(t, e), t.prototype.render = function() {
                        var e = this,
                            t = null,
                            n = Object(b.o)((function(e) {
                                return e.showMore
                            }), this.props.buttons);
                        if (-1 !== n) {
                            var r = this.props.buttons[n],
                                i = r.text,
                                o = Object(j.a)(r, ["text"]);
                            t = m.createElement(It, Object(p.a)({}, o, {
                                label: i,
                                "data-variant": "show-more",
                                onClick: this.handleButtonClick(n)
                            }))
                        }
                        return m.createElement(m.Fragment, null, m.createElement(Ot, null, this.props.buttons.map((function(t, r) {
                            var i = t.text,
                                o = t.key,
                                a = (t.showMore, Object(j.a)(t, ["text", "key", "showMore"])),
                                c = void 0 !== o ? o : r;
                            return r !== n ? m.createElement(It, Object(p.a)({
                                key: c,
                                label: i.length > 20 ? i.slice(0, 20).trim() + "\u2026" : i,
                                onClick: e.handleButtonClick(c)
                            }, a)) : null
                        }))), t)
                    }, t
                }(m.Component);
            fn.defaultProps = {
                onButtonClick: b.T
            };
            var pn = fn,
                mn = function(e) {
                    return e.stopPropagation()
                },
                hn = function(e) {
                    return m.createElement("a", Object(p.a)({}, e, {
                        onClick: mn,
                        rel: "nofollow noopener",
                        target: "_blank"
                    }))
                },
                bn = function(e) {
                    return s("display:block;width:100%;height:", e ? "100%" : "150px", ";object-fit:cover;")
                },
                gn = M("div", {
                    target: "e9ztsyy0"
                })("display:flex;margin:0 auto;overflow:hidden;width:100%;min-width:110px;height:", (function(e) {
                    return e.horizontalLayout ? "100%" : "150px"
                }), ";align-items:center;justify-content:center;background:#fff;"),
                vn = function(e) {
                    var t = e.link,
                        n = e.url,
                        r = e.srcset,
                        i = e.horizontalLayout,
                        o = Object(j.a)(e, ["link", "url", "srcset", "horizontalLayout"]),
                        a = m.createElement(vt, o, m.createElement(gn, {
                            horizontalLayout: i
                        }, m.createElement(we, Object(p.a)({
                            alt: "",
                            className: bn(i)
                        }, function(e, t) {
                            var n = {
                                src: e
                            };
                            return void 0 !== t && (n.srcSet = t), n
                        }(n, r)))));
                    return t ? m.createElement(hn, {
                        href: t,
                        style: o.style
                    }, a) : a
                };
            vn.propTypes = {
                link: L.string,
                url: L.string.isRequired,
                srcSet: L.string
            };
            var yn = vn,
                On = s("width:230px;"),
                _n = s("display:flex;flex-direction:row;"),
                jn = s("max-width:110px;"),
                wn = M("div", {
                    target: "es7wtci0"
                })("width:230px;min-width:0px;max-width:", (function(e) {
                    return e.horizontalLayout ? "66%" : "100%"
                }), ";"),
                xn = {
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0
                },
                En = {
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: "inherit"
                },
                Cn = (m.Component, n(249)),
                In = M("div", {
                    target: "epptpc30"
                })("position:relative;width:100%;display:flex;"),
                Tn = s("scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}"),
                kn = M("div", {
                    target: "epptpc31"
                })("display:flex;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;align-items:flex-start;", Tn, " ", (function(e) {
                    var t, n = e.padding,
                        r = e.dir;
                    return Object(p.a)({}, "undefined" !== typeof n && {
                        padding: n
                    }, {
                        "> :not(:last-child)": (t = {}, t["rtl" === r ? "marginLeft" : "marginRight"] = 8, t)
                    })
                })),
                Sn = M("div", {
                    target: "epptpc32"
                })("flex-grow:0;flex-shrink:0;"),
                zn = M("button", {
                    target: "epptpc33"
                })("position:absolute;width:30px;height:30px;border-radius:50%;background:#fff;border:0;box-shadow:0 4px 12px rgba(0,0,0,0.3);text-align:center;top:32%;display:flex;align-items:center;justify-content:center;padding:0;z-index:1;outline:0;-webkit-transform:translate3d(0,0,0);&:hover{cursor:pointer;}svg{display:inline;}", (function(e) {
                    var t;
                    return (t = {})[e.variant] = ".5em", t
                }), ";"),
                An = function(e) {
                    var t = e.itemCount;
                    return t * e.itemWidth + (t - 1) * e.spacing
                },
                Mn = function(e) {
                    var t = e.clientWidth,
                        n = e.scrollableElement,
                        r = e.currentX,
                        i = e.nextX,
                        o = e.scrollDirection,
                        a = e.isRtl,
                        c = n.firstElementChild.getBoundingClientRect().width,
                        u = function(e, t) {
                            if (e.length < 2) return 0;
                            var n = e[0],
                                r = e[1],
                                i = n.getBoundingClientRect(),
                                o = r.getBoundingClientRect();
                            return t ? i.left - o.right : o.left - i.right
                        }(n.children, a),
                        s = (a ? n.lastElementChild : n.firstElementChild).getBoundingClientRect().left - n.getBoundingClientRect().left + r,
                        d = function(e) {
                            var t = e.x,
                                n = e.scrollDirection,
                                r = (t - e.leftElementXOffset) / (e.itemWidth + e.spacing);
                            return 1 === n ? Math.floor(r) : Math.ceil(r)
                        }({
                            x: i,
                            scrollDirection: o,
                            leftElementXOffset: s,
                            itemWidth: c,
                            spacing: u
                        });
                    if (c > t) return s + (1 === o ? d + 1 : d - 1) * (c + u);
                    var l = s + d * (c + u),
                        f = Math.floor(t / (c + u)),
                        p = An({
                            itemCount: f,
                            itemWidth: c,
                            spacing: u
                        });
                    return l + (p + c <= t ? An({
                        itemCount: f + 1,
                        itemWidth: c,
                        spacing: u
                    }) : p) / 2 - t / 2
                },
                Rn = function(e) {
                    var t = e.children,
                        n = e.scrollableElementPadding,
                        r = e.dir,
                        i = m.useRef(0),
                        o = m.useRef(null),
                        a = Object(De.f)().isFocusVisible,
                        c = m.useState(!0),
                        u = c[0],
                        s = c[1],
                        d = m.useState(!0),
                        l = d[0],
                        f = d[1],
                        h = Object(Ve.j)(),
                        g = h[0],
                        v = h[1],
                        y = Object(Ve.s)("x", o),
                        O = !(g && a),
                        _ = m.useCallback((function() {
                            var e = o.current;
                            e && (s(! function(e) {
                                if ("ltr" === getComputedStyle(e).direction) return e.scrollLeft <= 1;
                                var t = e.scrollWidth - e.clientWidth;
                                switch (Object(Fe.e)()) {
                                    case "negative":
                                        return e.scrollLeft <= 1 - t;
                                    case "positive-ascending":
                                        return e.scrollLeft >= t - 1;
                                    case "positive-descending":
                                        return e.scrollLeft <= 1
                                }
                            }(e)), f(! function(e) {
                                var t = getComputedStyle(e).direction,
                                    n = e.scrollWidth - e.clientWidth;
                                if ("ltr" === t) return e.scrollLeft >= n - 1;
                                switch (Object(Fe.e)()) {
                                    case "negative":
                                        return e.scrollLeft >= -1;
                                    case "positive-ascending":
                                        return e.scrollLeft <= 1;
                                    case "positive-descending":
                                        return e.scrollLeft >= n - 1
                                }
                            }(e)))
                        }), []),
                        j = m.useMemo((function() {
                            return Object(b.pb)(200, _)
                        }), [_]);
                    Object(Ve.n)((function() {
                        var e = requestAnimationFrame(_),
                            t = new Cn.a(Object(b.h)(200, _));
                        return t.observe(o.current),
                            function() {
                                cancelAnimationFrame(e), t.disconnect()
                            }
                    }));
                    var w = function(e) {
                        i.current += e, i.current < 0 ? i.current = 0 : i.current >= t.length && (i.current = t.length - 1);
                        var n = o.current,
                            a = n.clientWidth,
                            c = n.scrollWidth,
                            u = "rtl" === r,
                            s = function(e, t) {
                                var n = e.scrollWidth - e.clientWidth;
                                if (t) switch (Object(Fe.e)()) {
                                    case "negative":
                                        return n + e.scrollLeft;
                                    case "positive-ascending":
                                        return n - e.scrollLeft;
                                    case "positive-descending":
                                        return e.scrollLeft
                                }
                                return e.scrollLeft
                            }(n, u),
                            d = s + e * a,
                            l = 1 === e ? Math.min(d, c - a) : Math.max(d, 0),
                            f = d === l ? Mn({
                                clientWidth: a,
                                scrollableElement: n,
                                currentX: s,
                                nextX: d,
                                scrollDirection: e,
                                isRtl: u
                            }) : l;
                        if (u) switch (Object(Fe.e)()) {
                            case "negative":
                                return void y(-c + a + f);
                            case "positive-ascending":
                                return void y(c - a - f);
                            case "positive-descending":
                                return void y(f)
                        } else y(f)
                    };
                    return m.createElement(In, null, O && u && m.createElement(zn, {
                        variant: "left",
                        "aria-label": "Previous item",
                        onClick: function(e) {
                            e.stopPropagation(), w(-1)
                        }
                    }, m.createElement(ie, {
                        "aria-hidden": !0
                    })), m.createElement(kn, Object(p.a)({
                        dir: r,
                        tabIndex: -1,
                        innerRef: o,
                        onScroll: j,
                        padding: n
                    }, v), m.Children.map(t, (function(e, t) {
                        return m.createElement(Sn, {
                            onFocus: function() {
                                return w(Object(b.jb)(t - i.current))
                            }
                        }, e)
                    }))), O && l && m.createElement(zn, {
                        variant: "right",
                        "aria-label": "Next item",
                        onClick: function(e) {
                            e.stopPropagation(), w(1)
                        }
                    }, m.createElement(ae, {
                        "aria-hidden": !0
                    })))
                }
        },
        51: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return r.a
            })), n.d(t, "c", (function() {
                return i.a
            })), n.d(t, "l", (function() {
                return o.a
            })), n.d(t, "m", (function() {
                return a.a
            })), n.d(t, "s", (function() {
                return u.a
            })), n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "g", (function() {
                return g
            })), n.d(t, "h", (function() {
                return j
            })), n.d(t, "k", (function() {
                return w
            })), n.d(t, "n", (function() {
                return l
            })), n.d(t, "o", (function() {
                return x
            })), n.d(t, "p", (function() {
                return E
            })), n.d(t, "r", (function() {
                return A
            })), n.d(t, "t", (function() {
                return M
            })), n.d(t, "u", (function() {
                return R
            })), n.d(t, "v", (function() {
                return L
            })), n.d(t, "w", (function() {
                return P
            })), n.d(t, "i", (function() {
                return q
            })), n.d(t, "q", (function() {
                return V
            })), n.d(t, "e", (function() {
                return F
            })), n.d(t, "f", (function() {
                return H
            })), n.d(t, "j", (function() {
                return W
            }));
            var r = n(95),
                i = n(142),
                o = n(61),
                a = n(238),
                c = n(116),
                u = n(145),
                s = n(143),
                d = n(0);
            var l = function(e) {
                d.useEffect(e, [])
            };

            function f(e) {
                return e < 0 ? -1 : 1
            }

            function p(e, t) {
                var n, r, i;
                return n = 0, r = 1, i = t + e / 100, Math.min(Math.max(i, n), r)
            }
            var m = function(e, t) {
                    var n = Object(o.a)(t);
                    l((function() {
                        var t = 0,
                            r = 0,
                            i = 1,
                            o = 1,
                            a = 0,
                            c = 0,
                            u = 0,
                            s = function(e, i) {
                                t = p(e, t), r = p(i, r), n.current({
                                    x: t,
                                    y: r
                                })
                            },
                            d = function e(n) {
                                var a = ("x" === n || "xy" === n) && t > 0 && t < 1,
                                    c = ("y" === n || "xy" === n) && r > 0 && r < 1;
                                (a || c) && (s(a ? 5 * i : 0, c ? 5 * o : 0), u = requestAnimationFrame((function() {
                                    return e(n)
                                })))
                            },
                            l = e.subscribe((function(e) {
                                var t = e.deltaX,
                                    n = e.deltaY;
                                Math.abs(t) > 8 && (s(t, 0), i = f(t), clearTimeout(a), a = window.setTimeout((function() {
                                    return d("x")
                                }), 50)), Math.abs(n) > 8 && (s(0, n), o = f(n), clearTimeout(c), c = window.setTimeout((function() {
                                    return d("y")
                                }), 50))
                            }));
                        return function() {
                            l(), clearTimeout(a), clearTimeout(c), cancelAnimationFrame(u)
                        }
                    }))
                },
                h = function(e) {
                    d.useEffect((function() {
                        var t = e.current,
                            n = t.ownerDocument || document,
                            r = function(e, t) {
                                for (var n = new Set, r = e; r = r.parentElement;) {
                                    if (t.body === r) return n;
                                    n.add(r)
                                }
                                return n
                            }(t, n),
                            i = new Map;
                        return function e(t, n) {
                                t.forEach((function(t) {
                                    if (t !== n.modalElement) {
                                        if (!n.ancestors.has(t)) {
                                            var r = t.getAttribute("aria-hidden");
                                            return n.originalValues.set(t, r), void t.setAttribute("aria-hidden", "true")
                                        }
                                        t.children && e([].slice.call(t.children), n)
                                    }
                                }))
                            }([].slice.call(n.body.children), {
                                ancestors: r,
                                originalValues: i,
                                modalElement: t
                            }),
                            function() {
                                i.forEach((function(e, t) {
                                    null !== e ? t.setAttribute("aria-hidden", e) : t.removeAttribute("aria-hidden")
                                }))
                            }
                    }), [e])
                };

            function b(e, t, n) {
                d.useEffect((function() {
                    return document.addEventListener(e, t, n),
                        function() {
                            return document.removeEventListener(e, t, n)
                        }
                }), [e, t, n])
            }
            var g = function(e, t) {
                    d.useEffect((function() {
                        var n = t.current;
                        if (n) {
                            var r = function(e) {
                                e.preventDefault()
                            };
                            return n.addEventListener(e, r, {
                                    passive: !1
                                }),
                                function() {
                                    return n.removeEventListener("touchmove", r)
                                }
                        }
                    }), [e, t])
                },
                v = 0,
                y = null,
                O = function() {
                    y = "keyboard"
                },
                _ = function() {
                    y = "click"
                },
                j = function() {
                    return d.useEffect((function() {
                        return 0 === v && (document.addEventListener("keydown", O, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("touchstart", _, !0)), v++,
                            function() {
                                --v > 0 || (y = null, document.removeEventListener("keydown", O, !0), document.removeEventListener("mousedown", _, !0), document.removeEventListener("touchstart", _, !0))
                            }
                    }), []), d.useCallback((function() {
                        return y
                    }), [])
                };
            var w = function(e) {
                return {
                    onKeyPress: d.useCallback((function(t) {
                        var n = t.key;
                        "Enter" !== n && " " !== n || e()
                    }), [e])
                }
            };
            var x = function(e) {
                    var t = Object(o.a)(e);
                    d.useEffect((function() {
                        return function() {
                            return t.current()
                        }
                    }), [t])
                },
                E = function(e) {
                    var t = d.useRef(!1),
                        n = Object(o.a)(e);
                    return d.useEffect((function() {
                        t.current && (t.current = !1, n.current())
                    })), d.useCallback((function() {
                        t.current = !0
                    }), [])
                },
                C = n(2),
                I = n(20),
                T = n(151),
                k = {
                    duration: 0
                },
                S = Object(T.a)(),
                z = ["End", "Home", "Space", "PageUp", "PageDown", "ArrowUp", "ArrowDown"];
            var A = function(e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                        r = n.firstItemKey,
                        i = n.lastItemKey,
                        o = n.topThreshold,
                        a = void 0 === o ? 20 : o,
                        s = n.bottomThreshold,
                        l = void 0 === s ? 20 : s,
                        f = n.initialScrollTop,
                        p = n.onIsUserScrollingChanged,
                        m = n.onIsScrolledToTopChanged,
                        h = n.onIsScrolledToBottomChanged,
                        g = n.onScrollDeltaChanged,
                        v = n.isScrollingChangedTimeout,
                        y = void 0 === v ? 300 : v,
                        O = d.useRef(0),
                        _ = d.useRef(0),
                        j = d.useRef(!1),
                        w = d.useRef(!1),
                        x = d.useRef(!1),
                        E = d.useRef(!1),
                        T = d.useRef(null),
                        A = d.useRef({
                            timeout: 0,
                            value: !1
                        }),
                        M = d.useRef("none"),
                        R = Object(u.a)("y", e),
                        L = d.useCallback((function() {
                            E.current = !0, R.apply(void 0, arguments)
                        }), [R]),
                        P = Object(c.a)(r),
                        D = Object(c.a)(i),
                        N = d.useCallback((function() {
                            E.current = !1
                        }), []),
                        q = d.useCallback((function() {
                            return w.current
                        }), []),
                        B = d.useCallback((function() {
                            return x.current
                        }), []),
                        U = d.useCallback((function(e) {
                            return L(0, e)
                        }), [R]),
                        V = d.useCallback((function(t) {
                            if (e.current) {
                                var n = e.current,
                                    r = n.scrollHeight,
                                    i = n.clientHeight;
                                L(r - i, t), M.current = t && 0 === t.duration ? "instant" : "animated"
                            }
                        }), [e, L]),
                        F = d.useCallback((function(e) {
                            return T.current = e
                        }), []),
                        H = d.useCallback((function() {
                            return !!e.current && e.current.scrollHeight > e.current.clientHeight
                        }), [e]),
                        G = d.useCallback((function() {
                            A.current.value || (A.current.value = !0, p && p(A.current.value)), clearTimeout(A.current.timeout), A.current.timeout = window.setTimeout((function() {
                                A.current.value && (A.current.value = !1, p && p(A.current.value))
                            }), y)
                        }), [y]),
                        W = d.useCallback((function() {
                            var t = e.current,
                                n = t.scrollTop,
                                r = t.scrollHeight,
                                i = O.current > n,
                                o = O.current < n,
                                c = O.current === n,
                                u = r < _.current,
                                s = r > _.current,
                                d = O.current - n,
                                f = r > 1.5 * window.innerHeight;
                            if (O.current = n, _.current = r, H() && !E.current && G(), !c || !j.current) {
                                ("instant" === M.current || "animated" === M.current && x.current) && requestAnimationFrame((function() {
                                    V({
                                        duration: 0
                                    }), M.current = "none"
                                }));
                                var p = w.current && i,
                                    b = x.current && (o || u || s),
                                    v = p || Object(I.h)(t, a),
                                    y = b || Object(I.g)(t, l);
                                m && (!w.current && v ? m(!0) : w.current && !v && m(!1)), h && (!x.current && y ? h(!0) : x.current && !y && h(!1)), w.current = v, x.current = y, !s && !w.current && g && !x.current && j.current && A.current && S && !E.current && f && g({
                                    deltaX: 0,
                                    deltaY: d / 2
                                })
                            }
                        }), [m, h, G]),
                        Y = d.useCallback((function(e) {
                            Object(C.C)(e.key, z) && N()
                        }), [N]),
                        K = function() {
                            L(T.current.offsetTop, k), T.current = null
                        },
                        J = function() {
                            T.current ? K() : (P !== r && function() {
                                var t = e.current.scrollHeight,
                                    n = _.current - O.current;
                                L(t - n, k)
                            }(), D !== i && x.current && V())
                        };
                    return b("keydown", Y), d.useEffect((function() {
                        !1 === j.current ? (T.current ? K() : L("number" === typeof f ? f : e.current.scrollHeight, k), W(), j.current = !0) : J()
                    })), d.useEffect((function() {
                        if (e.current) {
                            var t = e.current;
                            return t.addEventListener("scroll", W, S ? {
                                    passive: !0
                                } : void 0),
                                function() {
                                    return t.removeEventListener("scroll", W)
                                }
                        }
                    }), [e, W]), {
                        scrollTo: L,
                        scrollToTop: U,
                        scrollToBottom: V,
                        getIsOnTop: q,
                        getIsOnBottom: B,
                        getIsScrollable: H,
                        setScrollTargetNode: F,
                        onWheel: N,
                        onTouchStart: N
                    }
                },
                M = function(e) {
                    return Object(s.useSubscription)({
                        getCurrentValue: e.get,
                        subscribe: e.subscribe
                    })
                },
                R = function(e) {
                    return Object(r.a)((function() {
                        var t = e,
                            n = [];
                        return {
                            subscribe: function(e) {
                                return n.push(e),
                                    function() {
                                        n.splice(n.indexOf(e), 1)
                                    }
                            },
                            next: function(e) {
                                t = e, n.forEach((function(t) {
                                    return t(e)
                                }))
                            },
                            get: function() {
                                return t
                            }
                        }
                    }))
                },
                L = function(e, t) {
                    d.useEffect((function() {
                        var n = setTimeout(e, t);
                        return function() {
                            return clearTimeout(n)
                        }
                    }), [e, t])
                };

            function P(e) {
                var t = d.useState(e),
                    n = t[0],
                    r = t[1];
                return [n, d.useCallback((function() {
                    r((function(e) {
                        return !e
                    }))
                }), [])]
            }
            var D = new Map,
                N = d.createContext(D);
            N.Provider;

            function q(e) {
                var t = d.useContext(N);
                if (t.has(e)) return t.get(e);
                var n = {},
                    r = {
                        get: function() {
                            return n.value
                        },
                        set: function(e) {
                            return n.value = e
                        },
                        clear: function() {
                            return delete n.value
                        },
                        destroy: function() {
                            return t.delete(e)
                        }
                    };
                return t.set(e, r), r
            }
            var B = function(e) {
                    var t, n;
                    if (e.target && Object(C.C)(e.key, ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"])) {
                        var r = e.target;
                        switch (!0) {
                            case "TEXTAREA" === r.tagName:
                            case "INPUT" === r.tagName && "text" === (null == (t = r.attributes.type) ? void 0 : t.value):
                            case "INPUT" === r.tagName && "email" === (null == (n = r.attributes.type) ? void 0 : n.value):
                                e.stopPropagation()
                        }
                    }
                },
                U = window.MutationObserver || window.WebKitMutationObserver;

            function V(e) {
                var t = e.mainElementRef,
                    n = e.itemsCount,
                    r = e.tableEdgeReached,
                    i = void 0 === r ? C.T : r,
                    o = d.useState(n),
                    a = o[0],
                    c = o[1],
                    u = d.useRef(!1),
                    s = d.useRef(!1),
                    l = d.useRef(null),
                    f = d.useRef(null),
                    p = d.useRef(null);
                b("keydown", (function(e) {
                    "Tab" === e.key && (u.current = !0)
                })), b("keyup", (function(e) {
                    "Tab" === e.key && (u.current = !1)
                }));
                var m = function(e) {
                        return e ? Object(C.qb)(e.querySelectorAll("a, button, input, textarea, select")) : []
                    },
                    h = d.useCallback((function() {
                        var e = new U((function() {
                                if (s.current || p.current.contains(document.activeElement)) {
                                    d(p.current);
                                    var e = m(p.current);
                                    e.forEach((function(e) {
                                        e.tabIndex = 0, e.addEventListener("blur", n), e.addEventListener("keydown", B)
                                    })), c(p.current, !1), e.length && !p.current.contains(document.activeElement) && e[0].focus()
                                }
                            })),
                            n = function(e) {
                                var t = e.target === p.current,
                                    n = e.relatedTarget === p.current,
                                    i = p.current.contains(e.target),
                                    o = p.current.contains(e.relatedTarget);
                                if (u.current && e.relatedTarget && !t && (!o || n)) return e.preventDefault(), void requestAnimationFrame((function() {
                                    return e.target.focus()
                                }));
                                i && !o && r()
                            },
                            r = function() {
                                m(p.current).forEach((function(e) {
                                    e.tabIndex = -1, e.removeEventListener("blur", n), e.removeEventListener("keydown", B)
                                }))
                            },
                            o = function(e) {
                                " " === e.key && e.target === p.current && e.preventDefault()
                            },
                            a = function(e) {
                                switch (e.key) {
                                    case " ":
                                    case "Enter":
                                        return void(e.target === p.current && (e.preventDefault(), function() {
                                            var e = m(p.current).filter((function(e) {
                                                return !e.disabled
                                            }));
                                            e.forEach((function(e) {
                                                e.tabIndex = 0, e.addEventListener("blur", n), e.addEventListener("keydown", B)
                                            })), e.length && e[0].focus(), s.current = !0
                                        }()));
                                    case "Escape":
                                        return e.preventDefault(), r(), void requestAnimationFrame((function() {
                                            return p.current.focus()
                                        }))
                                }
                            },
                            c = function(t, r) {
                                void 0 === r && (r = !0), t.tabIndex = 0, r && t.focus(), t.addEventListener("keyup", a), t.addEventListener("keydown", o), t.addEventListener("blur", n), e.observe(t, {
                                    childList: !0,
                                    subtree: !0
                                })
                            },
                            d = function(t) {
                                t.tabIndex = -1, t.removeEventListener("keyup", a), t.removeEventListener("keydown", o), t.removeEventListener("blur", n), e.disconnect()
                            },
                            h = function(e) {
                                var t = e + "ElementSibling";
                                if (f.current && l.current && (f.current[t] || l.current[t])) {
                                    for (var n = null, r = f.current, o = l.current; !n;)
                                        if (r && r[t]) n = (r = r[t]).querySelector('[role="gridcell"]');
                                        else {
                                            if (!o || !o[t]) return void i(e);
                                            if ((o = o[t]).attributes.role && "row" === o.attributes.role.value) r = o;
                                            else {
                                                var a = o.querySelectorAll('[role="row"]');
                                                r = "previous" === e ? Object(C.K)(a) : a[0]
                                            }
                                            n = r ? r.querySelector('[role="gridcell"]') : null
                                        }
                                    o !== l.current && (l.current = o), r !== f.current && (f.current = r), n !== p.current && (d(p.current), c(n), p.current = n)
                                } else i(e)
                            },
                            b = function(e) {
                                switch (e.key) {
                                    case "ArrowUp":
                                    case "ArrowLeft":
                                        return e.preventDefault(), void h("previous");
                                    case "ArrowDown":
                                    case "ArrowRight":
                                        return e.preventDefault(), void h("next");
                                    default:
                                        return
                                }
                            };
                        p.current && c(p.current, !1);
                        var g = t.current;
                        return g.addEventListener("keydown", b),
                            function() {
                                e.disconnect(), g.removeEventListener("keydown", b)
                            }
                    }), [p, t, f, l, i]);
                d.useEffect((function() {
                    var e = setTimeout((function() {
                        return c(n)
                    }), 100);
                    return function() {
                        return clearTimeout(e)
                    }
                }), [n]), d.useEffect((function() {
                    if (t.current && t.current.children.length) {
                        t.current.tabIndex = -1;
                        var e = t.current.contains(document.activeElement),
                            n = m(t.current);
                        n.forEach((function(e) {
                            e.tabIndex = -1, e.addEventListener("keydown", B)
                        })), Object(C.qb)(t.current.querySelectorAll('[role="gridcell"]')).forEach((function(t) {
                            e && t === p.current || (t.tabIndex = -1)
                        }));
                        var r = Object(C.K)(Object(C.qb)(t.current.children)),
                            i = r ? r.querySelector('[role="gridcell"]') : null,
                            o = m(i),
                            a = i && i !== document.activeElement && i.contains(document.activeElement),
                            c = function() {
                                return o.forEach((function(e) {
                                    e.tabIndex = 0, e.addEventListener("keydown", B)
                                }))
                            };
                        if (a ? c() : o.forEach((function(e) {
                                e.addEventListener("focus", c)
                            })), !e || a) {
                            if (l.current = Object(C.K)(Object(C.qb)(t.current.children)), !l.current) return;
                            var u = l.current.attributes.role;
                            if (f.current = u && "row" === u.value ? l.current : Object(C.K)(Object(C.qb)(l.current.querySelectorAll('[role="row"]'))), l.current.attributes.role && "row" === l.current.attributes.role.value ? f.current = l.current : f.current = Object(C.K)(Object(C.qb)(l.current.querySelectorAll('[role="row"]'))), !f.current) return;
                            if (p.current = f.current.querySelector('[role="gridcell"]'), !p.current) return
                        }
                        var s = h();
                        return function() {
                            s(), o.forEach((function(e) {
                                e.removeEventListener("keydown", B), e.removeEventListener("focus", c)
                            })), n.filter(Boolean).forEach((function(e) {
                                e.removeEventListener("keydown", B)
                            }))
                        }
                    }
                }), [p, f, l, t, h, a])
            }
            var F = function(e, t) {
                void 0 === e && (e = !1), void 0 === t && (t = 1e3);
                var n = d.useState(!1),
                    r = n[0],
                    i = n[1];
                return d.useEffect((function() {
                    var n, r = function() {
                        e || (i(!0), n = window.setTimeout((function() {
                            i(!1)
                        }), t))
                    };
                    return window.addEventListener("beforeunload", r),
                        function() {
                            window.removeEventListener("beforeunload", r), n && window.clearTimeout(n)
                        }
                }), [e, t]), r
            };
            var H = function(e, t) {
                    var n = d.useState(e),
                        r = n[0],
                        i = n[1],
                        o = d.useRef(null);
                    return d.useEffect((function() {
                        o.current = e ? document.activeElement : null, i(e)
                    }), [e, o]), [r, function() {
                        t(), o.current instanceof HTMLElement && o.current.focus()
                    }]
                },
                G = n(12),
                W = function(e) {
                    void 0 === e && (e = !1);
                    var t = d.useState(e),
                        n = t[0],
                        r = t[1];
                    return [n, Object(G.g)({
                        onFocusWithin: function() {
                            r(!0)
                        },
                        onBlurWithin: function() {
                            r(!1)
                        }
                    }).focusWithinProps]
                }
        },
        57: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "h", (function() {
                return a
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "g", (function() {
                return l
            }));
            var r = n(46),
                i = function(e) {
                    return Object(r.b)("chat_started", e)
                },
                o = function(e) {
                    return Object(r.b)("chat_rated", e)
                },
                a = function(e) {
                    return Object(r.b)("widget_opened", e)
                },
                c = function(e) {
                    return Object(r.b)("greeting_displayed", e)
                },
                u = function(e) {
                    return Object(r.b)("greeting_dismissed", e)
                },
                s = function(e) {
                    return Object(r.b)("greeting_canceled", e)
                },
                d = function(e) {
                    return Object(r.b)("greeting_not_canceled", e)
                },
                l = function(e, t) {
                    return Object(r.b)("potential_connection_problem_" + e, t)
                }
        },
        58: function(e, t, n) {
            "use strict";
            n.d(t, "p", (function() {
                return l
            })), n.d(t, "z", (function() {
                return p
            })), n.d(t, "A", (function() {
                return _
            })), n.d(t, "a", (function() {
                return u.a
            })), n.d(t, "b", (function() {
                return u.b
            })), n.d(t, "c", (function() {
                return u.d
            })), n.d(t, "d", (function() {
                return u.e
            })), n.d(t, "e", (function() {
                return u.f
            })), n.d(t, "f", (function() {
                return u.g
            })), n.d(t, "g", (function() {
                return u.i
            })), n.d(t, "h", (function() {
                return u.j
            })), n.d(t, "i", (function() {
                return u.l
            })), n.d(t, "j", (function() {
                return u.m
            })), n.d(t, "k", (function() {
                return u.o
            })), n.d(t, "l", (function() {
                return u.p
            })), n.d(t, "m", (function() {
                return u.q
            })), n.d(t, "n", (function() {
                return u.r
            })), n.d(t, "o", (function() {
                return u.s
            })), n.d(t, "q", (function() {
                return u.t
            })), n.d(t, "r", (function() {
                return u.u
            })), n.d(t, "s", (function() {
                return u.x
            })), n.d(t, "t", (function() {
                return u.y
            })), n.d(t, "u", (function() {
                return u.z
            })), n.d(t, "v", (function() {
                return u.A
            })), n.d(t, "w", (function() {
                return u.B
            })), n.d(t, "x", (function() {
                return u.C
            })), n.d(t, "y", (function() {
                return u.D
            }));
            var r = n(24),
                i = n(1),
                o = n(4),
                a = n(0),
                c = n(5),
                u = n(71),
                s = Object(c.D)(c.g, {
                    target: "eed86ay0"
                })("padding:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;", (function(e) {
                    var t = e.size;
                    return {
                        width: t,
                        height: t
                    }
                })),
                d = function(e) {
                    var t = e.buttonSize,
                        n = void 0 === t ? 32 : t,
                        r = e.iconSize,
                        c = void 0 === r ? 24 : r,
                        d = Object(o.a)(e, ["buttonSize", "iconSize"]);
                    return a.createElement(s, Object(i.a)({
                        size: n
                    }, d), a.createElement(u.n, {
                        size: c
                    }, a.createElement(u.f, {
                        size: c
                    })))
                },
                l = Object(c.D)("div", {
                    target: "e1viqdiv0"
                })("margin:8px 16px;background:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.sm
                }), ";", (function(e) {
                    var t = e.stickToEdge,
                        n = void 0 !== t && t,
                        r = e.theme;
                    return {
                        marginBottom: n ? "0" : "8px",
                        borderRadius: n ? r.borderRadius.md + " " + r.borderRadius.md + " " + r.borderRadius.none + " " + r.borderRadius.none : r.borderRadius.md,
                        "@media (orientation: landscape)": {
                            maxWidth: "50%",
                            margin: n ? "0 auto" : "0 auto 8px"
                        }
                    }
                })),
                f = (n(92), n(2), n(141), n(192), n(197), n(157), n(196), n(113), n(122)),
                p = (Object(i.a)({}, f.a, {
                    colors: Object(i.a)({}, f.a.colors, {
                        cta: "#427fe1"
                    })
                }), (new Date).toISOString(), Object(c.D)("div", {
                    target: "eyqxlol0"
                })("display:flex;align-items:center;justify-content:center;width:auto;min-width:1.5em;border-radius:", (function(e) {
                    return e.theme.borderRadius.xl
                }), ";padding:0 4px;flex-shrink:0;background-color:", (function(e) {
                    return e.theme.colors.notification
                }), ";color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";height:1.5em;line-height:1.5em;text-align:center;font-size:0.8em;box-shadow:", (function(e) {
                    return e.theme.boxShadow.xs
                }), ";font-weight:bold;animation-name:", (function(e) {
                    return function(e, t) {
                        return void 0 === e && (e = 0), void 0 === t && (t = 1.3), Object(c.C)("0%{transform:scale(", e, ");}25%{transform:scale(", e, ");}50%{transform:scale(", t, ");}100%{transform:scale(1.0);}")
                    }(e.minScale, e.maxScale)
                }), ";animation-duration:0.625s;animation-timing-function:", (function(e) {
                    return e.theme.transitions.easings.spring
                }), ";")),
                m = Object(c.D)(c.g, {
                    target: "e1l1ek6a0"
                })("padding:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;", (function(e) {
                    var t = e.size;
                    return {
                        width: t,
                        height: t
                    }
                })),
                h = Object(c.D)(u.a, {
                    target: "e1l1ek6a1"
                })("transform:rotate(90deg);"),
                b = function(e) {
                    var t = e.buttonSize,
                        n = void 0 === t ? 32 : t,
                        r = e.iconSize,
                        c = void 0 === r ? 24 : r,
                        s = Object(o.a)(e, ["buttonSize", "iconSize"]);
                    return a.createElement(m, Object(i.a)({
                        size: n
                    }, s), a.createElement(u.n, {
                        size: c
                    }, a.createElement(h, {
                        size: c
                    })))
                },
                g = n(42),
                v = Object(c.D)("span", {
                    target: "e1tnd1n30"
                })("flex-grow:1;flex-shrink:1;"),
                y = Object(c.D)("div", {
                    target: "e1tnd1n31"
                })("display:flex;cursor:pointer;justify-content:flex-start;align-items:center;", (function(e) {
                    return e.theme.typography.basic
                })),
                O = Object(c.D)(p, {
                    target: "e1tnd1n32"
                })("margin:0 6px;flex-shrink:0;box-shadow:none;"),
                _ = function(e) {
                    var t = e.unseenCount,
                        n = e.text,
                        r = e.stickToEdge,
                        c = e.onClose,
                        u = e.onClick,
                        s = Object(o.a)(e, ["unseenCount", "text", "stickToEdge", "onClose", "onClick"]);
                    return a.createElement(l, Object(i.a)({
                        stickToEdge: r
                    }, s), a.createElement(y, {
                        "aria-label": "new messages notification",
                        onClick: u
                    }, a.createElement(O, null, t < 100 ? t : "99+"), a.createElement(v, {
                        ellipsis: !0
                    }, a.createElement(g.a, null, n)), a.createElement(b, {
                        onClick: u,
                        "aria-label": "scroll to latest " + (t > 1 ? t + " messages" : "message")
                    }), a.createElement(d, {
                        "aria-label": "close notification",
                        onClick: function(e) {
                            e.stopPropagation(), c()
                        }
                    })))
                };
            r.g, r.c, r.f, r.a, r.b, r.e
        },
        6: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "E", (function() {
                return l
            })), n.d(t, "B", (function() {
                return f
            })), n.d(t, "S", (function() {
                return p
            })), n.d(t, "A", (function() {
                return m
            })), n.d(t, "r", (function() {
                return b
            })), n.d(t, "n", (function() {
                return g
            })), n.d(t, "s", (function() {
                return v
            })), n.d(t, "e", (function() {
                return y
            })), n.d(t, "l", (function() {
                return O
            })), n.d(t, "q", (function() {
                return _
            })), n.d(t, "w", (function() {
                return j
            })), n.d(t, "f", (function() {
                return w
            })), n.d(t, "x", (function() {
                return x
            })), n.d(t, "ib", (function() {
                return E
            })), n.d(t, "W", (function() {
                return C
            })), n.d(t, "ab", (function() {
                return I
            })), n.d(t, "D", (function() {
                return T
            })), n.d(t, "G", (function() {
                return k
            })), n.d(t, "hb", (function() {
                return S
            })), n.d(t, "p", (function() {
                return z
            })), n.d(t, "k", (function() {
                return A
            })), n.d(t, "h", (function() {
                return M
            })), n.d(t, "C", (function() {
                return R
            })), n.d(t, "t", (function() {
                return L
            })), n.d(t, "bb", (function() {
                return P
            })), n.d(t, "o", (function() {
                return D
            })), n.d(t, "u", (function() {
                return N
            })), n.d(t, "i", (function() {
                return q
            })), n.d(t, "Q", (function() {
                return B
            })), n.d(t, "R", (function() {
                return U
            })), n.d(t, "I", (function() {
                return V
            })), n.d(t, "K", (function() {
                return F
            })), n.d(t, "fb", (function() {
                return G
            })), n.d(t, "cb", (function() {
                return W
            })), n.d(t, "db", (function() {
                return Y
            })), n.d(t, "v", (function() {
                return K
            })), n.d(t, "P", (function() {
                return J
            })), n.d(t, "eb", (function() {
                return X
            })), n.d(t, "y", (function() {
                return Z
            })), n.d(t, "X", (function() {
                return Q
            })), n.d(t, "gb", (function() {
                return $
            })), n.d(t, "Y", (function() {
                return ee
            })), n.d(t, "H", (function() {
                return te
            })), n.d(t, "Z", (function() {
                return ne
            })), n.d(t, "j", (function() {
                return ie
            })), n.d(t, "L", (function() {
                return oe
            })), n.d(t, "F", (function() {
                return ae
            })), n.d(t, "d", (function() {
                return ce
            })), n.d(t, "M", (function() {
                return ue
            })), n.d(t, "jb", (function() {
                return se
            })), n.d(t, "U", (function() {
                return de
            })), n.d(t, "J", (function() {
                return le
            })), n.d(t, "z", (function() {
                return fe
            })), n.d(t, "V", (function() {
                return pe
            })), n.d(t, "N", (function() {
                return me
            })), n.d(t, "a", (function() {
                return he
            })), n.d(t, "m", (function() {
                return ge
            })), n.d(t, "b", (function() {
                return ve
            })), n.d(t, "O", (function() {
                return ye
            })), n.d(t, "T", (function() {
                return Oe
            }));
            var r = n(2),
                i = n(3),
                o = n(47),
                a = n(85),
                c = n(9),
                u = n(35),
                s = function(e, t) {
                    var n = t.getChat(e).properties.currentAgent;
                    return n ? t.getUser(n) : null
                },
                d = function(e, t) {
                    return t.getApplicationState("config").features[e]
                },
                l = function(e) {
                    return d("continuousChat", e).enabled
                },
                f = function(e) {
                    return d("chatHistory", e).enabled
                },
                p = function(e) {
                    return !!e.getView("Chat")[i.c].hasDividers
                },
                m = function(e) {
                    return U(e) && !l(e)
                },
                h = function(e, t, n) {
                    var i = t.authorPredicate,
                        o = t.lastSeenPredicate,
                        a = n.getEvents(e),
                        c = Object(r.r)(o, a),
                        u = Object(r.ob)((function(e) {
                            return i(e) || !e.seen
                        }), c, a);
                    return Object(r.fb)(i, u)
                },
                b = function(e, t, n) {
                    var r = n.getSessionUserId();
                    return h(e, {
                        authorPredicate: function(e) {
                            return e.author === r
                        },
                        lastSeenPredicate: function(e) {
                            return e.serverId === t
                        }
                    }, n)
                },
                g = function(e, t, n) {
                    var r = n.getSessionUserId();
                    return h(e, {
                        authorPredicate: function(e) {
                            return e.author !== r
                        },
                        lastSeenPredicate: function(e) {
                            return (e.serverTimestamp || e.timestamp) <= t
                        }
                    }, n)
                },
                v = function(e, t, n) {
                    var r = n.getSessionUserId();
                    return h(e, {
                        authorPredicate: function(e) {
                            return e.author === r
                        },
                        lastSeenPredicate: function(e) {
                            return e.timestamp <= t
                        }
                    }, n)
                },
                y = function(e, t, n) {
                    var o = e.getEvent(t, n);
                    if (o.type === i.f && null === o.serverId) {
                        var a = Object(r.q)((function(e) {
                            return e.type === i.f
                        }), e.getEvents(t));
                        return o.id === a.id ? e.localize("not_sent_yet") : null
                    }
                    if (!o.own) return null;
                    if (o.failed) return "Message not sent";
                    if (o.seen) {
                        var c = e.getLastSeenEvent(t);
                        return c && n === c.id ? e.localize("message_read") : null
                    }
                    var u = e.getLastDeliveredEvent(t);
                    return u && n === u.id ? e.localize("message_delivered") : null
                },
                O = function(e) {
                    var t = e.getApplicationState("config");
                    return !0 === e.getApplicationState("mobile") ? t.mobileMinimizedType : t.minimizedType
                },
                _ = function(e) {
                    var t = e.getApplicationState("config");
                    return !0 === e.getApplicationState("mobile") ? t.mobileScreenPosition : t.screenPosition
                },
                j = function(e, t) {
                    return f(e) && e.getChat(t).properties.hasMoreHistory
                },
                w = function(e, t) {
                    var n = e.getChat(t).properties.fakeAgentMessageId;
                    return n ? e.getEvent(t, n) : null
                },
                x = function(e, t) {
                    return !!w(e, t)
                },
                E = function(e) {
                    var t = e.getApplicationState(),
                        n = t.embedded,
                        r = t.actingAsDirectLink,
                        i = t.isInCustomContainer;
                    return !!n && !r && !i
                },
                C = function(e, t) {
                    var n = t.getChat(i.c),
                        o = n.active,
                        a = n.properties.queued;
                    if (o || a) return !1;
                    var c = t.getApplicationState(),
                        s = c.availability,
                        d = c.readyState;
                    return "online" === s && (d === u.a.NOT_READY || (!Oe(t, "maximized") || Object(r.E)(t.getEvents(e))))
                },
                I = function(e, t) {
                    if (f(t)) return !1;
                    var n = t.getApplicationState(),
                        r = n.availability,
                        i = n.embedded,
                        o = n.actingAsDirectLink,
                        a = n.isInCustomContainer,
                        c = t.getChat(e);
                    return i && !o && !a && !c.active && !c.properties.ended && "offline" === r && !U(t)
                },
                T = function(e) {
                    return e.getConnectionState() === o.a
                },
                k = function(e) {
                    return e.getConnectionState() === o.b
                },
                S = function(e) {
                    return e.getConnectionState() === o.d || k(e)
                },
                z = function(e, t) {
                    var n = t.getEvents(e),
                        r = function e(t, n) {
                            if (n < 0) return null;
                            var r = t[n];
                            return r.own && "message" === r.type ? null : "system_message" === r.type || "rich_message_postback" === r.type ? e(t, n - 1) : r.properties.quickReplies ? r : null
                        }(n, n.length - 1);
                    return r && (r.properties.invitation || t.getChat(e).active) ? r : null
                },
                A = function(e, t) {
                    var n = t.getApplicationState().availability,
                        r = t.getChat(e),
                        i = r.active,
                        o = r.properties,
                        a = o.queued,
                        c = o.ended;
                    if (a) return t.localize("embedded_waiting_for_operator");
                    var u = s(e, t);
                    return i && u ? t.localize("embedded_chat_with", {
                        operator: u.name
                    }) : c ? t.localize("embedded_chat_ended") : "online" === n ? t.localize("embedded_chat_now") : U(t) ? t.localize("embedded_leave_message") : t.localize("agents_not_available")
                },
                M = function(e, t) {
                    var n = e.getChat(t),
                        r = l(e);
                    return e.getApplicationState().limitReached || $(e) ? null : n.active ? "text" : me(e, t) || V(e) ? null : !n.properties.ended || r && !B(e) ? r || "offline" !== e.getApplicationState().availability ? x(e, i.c) ? B(e) && d("preChatAfterGreeting", e).enabled ? r && "offline" === e.getApplicationState().availability ? null : "requestPrechat" : s(t, e).properties.isBot || H(e) ? "startChat" : "text" : r ? B(e) ? "offline" === e.getApplicationState().availability ? null : "requestPrechat" : "text" : r && n.properties.ended ? "text" : null : null : "startChatAgain"
                },
                R = function(e, t) {
                    return !!t.getChat(e).properties.starting
                },
                L = function(e) {
                    return e.getApplicationState("testGroup")
                },
                P = function(e) {
                    return 1520 === e.getApplicationState("license")
                },
                D = function(e) {
                    var t = e.localize("user_in_queue"),
                        n = e.getView("Chat/prechat").fields;
                    if (!n || Object(r.E)(n)) return t;
                    var i = n.find((function(e) {
                        var t = e.meta;
                        return t && "groupSelect" === t
                    }));
                    if (!i || !i.options || Object(r.E)(i.options)) return t;
                    var o = i.options.find((function(t) {
                        return t.groupNumber === e.getApplicationState("group")
                    }));
                    return o && o.queueTemplate ? o.queueTemplate : t
                },
                N = function(e) {
                    return e.getApplicationState("config").theme.name
                },
                q = function(e, t) {
                    return Object(r.q)((function(e) {
                        return !e.own && Object(r.C)(e.type, ["message", "rich_message", "url_preview", "emoji"])
                    }), e.getEvents(t))
                },
                B = function(e) {
                    return e.getApplicationState().config.features.preChatForm.enabled
                },
                U = function(e) {
                    return e.getApplicationState().config.features.ticketForm.enabled
                },
                V = function(e, t) {
                    void 0 === t && (t = void 0);
                    var n = e.getLastEvent(i.c);
                    if (!n) return !1;
                    var r = n.type,
                        o = n.properties;
                    return "form" === r && !o.answered && ("string" !== typeof t || o.formType === t)
                },
                F = function(e, t) {
                    var n = e.getView("Chat/" + t);
                    return n && n.fields
                },
                H = function(e) {
                    return !!e.getChat(i.c).properties.groupHasProbableQueue
                },
                G = function(e) {
                    var t = e.getChat(i.c),
                        n = t.active,
                        r = t.properties,
                        o = r.queued,
                        a = r.ended,
                        c = r.startChatAgainPending,
                        u = r.currentAgent,
                        s = e.getApplicationState(),
                        d = s.availability,
                        f = s.limitReached,
                        p = l(e),
                        m = U(e);
                    return !(!f || m && !p) || "offline" === d && (!(a && !c) && (p ? !u && !o : !n && !o && !m))
                },
                W = function(e) {
                    return s(i.c, e) && !V(e) && ! function(e, t) {
                        return !!t.getChat(e).properties.queued
                    }(i.c, e) && !G(e)
                },
                Y = function(e) {
                    return !(!$(e) || e.getView("Chat/queue")) || ("loader" === e.getDefaultView("Chat") || !pe(e) && fe(e))
                },
                K = function(e) {
                    var t = e.getLastEvent(i.c);
                    return !!t && ("form" === t.type && "ticket" === t.properties.formType && t.properties.answered)
                },
                J = function(e) {
                    return e.getApplicationState("config").nonProfitLicense
                },
                X = function(e) {
                    var t = e.getApplicationState(),
                        n = t.actingAsDirectLink,
                        r = t.isInCustomContainer,
                        i = t.mobileWrapper,
                        o = t.embedded;
                    return !n && !r && (i || o)
                },
                Z = function(e) {
                    return Boolean(e.getApplicationState("invitation").current)
                },
                Q = function(e) {
                    var t = e.getChat(i.c).properties,
                        n = t.lastThread,
                        o = t.currentAgent,
                        a = t.queued;
                    return !(!l(e) || o || a) && !!!Object(r.q)((function(e) {
                        var t = e.type,
                            r = e.thread;
                        return "email_prompt" === t && r === n
                    }), e.getEvents(i.c))
                },
                $ = function(e) {
                    return e.getChat(i.c).properties.queued
                },
                ee = function(e) {
                    return d("fileSharing", e).enabled
                },
                te = function(e) {
                    return e.getChat(i.c).active && !S(e)
                },
                ne = function(e) {
                    var t = e.getChat(i.c).properties.queued;
                    return !S(e) && (!t || l(e))
                },
                re = Object(a.createSelector)([function(e) {
                    return Object(c.getEvents)(e, i.c)
                }, function(e) {
                    return Object(c.getChat)(e, i.c).properties.lastThread
                }], (function(e, t) {
                    return Object(r.nb)((function(e) {
                        return e.thread === t
                    }), e)
                })),
                ie = function(e) {
                    return re(e.getState())
                },
                oe = function(e, t) {
                    return !!e.hasEvent(i.c, t) && e.getEvent(i.c, t).properties.invitation
                },
                ae = function(e) {
                    return !e.getApplicationState().mobile && "bar" === O(e)
                },
                ce = function(e) {
                    var t = w(e, i.c);
                    return t && t.properties.invitation ? t : null
                },
                ue = function(e, t) {
                    void 0 === t && (t = ce(e));
                    var n = e.getApplicationState(),
                        i = n.availability,
                        o = n.invitation;
                    return !("offline" !== i && !ae(e)) || Boolean(t && Object(r.C)(t.properties.uniqueId, o.hiddenIds))
                },
                se = function(e, t) {
                    void 0 === t && (t = ce(e));
                    var n = e.getApplicationState().invitation;
                    return Boolean(t && Object(r.C)(t.properties.uniqueId, n.displayedIds))
                },
                de = function(e) {
                    return !ie(e).some((function(e) {
                        var t = e.author;
                        return !e.own && "system" !== t
                    }))
                },
                le = function(e) {
                    var t = e.properties,
                        n = t.formType,
                        i = t.fields,
                        o = t.answered,
                        a = i.filter((function(e) {
                            return e.answer && e.label
                        }));
                    return "ticket" !== n && o && Object(r.E)(a)
                },
                fe = function(e) {
                    var t = e.getEvents(i.c);
                    return Object(r.E)(t) || t.every((function(e) {
                        return "form" === e.type && le(e)
                    }))
                },
                pe = function(e) {
                    return W(e) || G(e) || $(e)
                },
                me = function(e, t) {
                    return e.getEvents(t).some((function(e) {
                        return e.type === i.f && null === e.serverId
                    }))
                },
                he = function(e) {
                    var t = e.getApplicationState(),
                        n = t.embedded,
                        r = t.actingAsDirectLink;
                    return !n || r ? "direct_link" : "code"
                },
                be = Object(a.createSelector)([function(e) {
                    return re(e)
                }], (function(e) {
                    return e.filter((function(e) {
                        return "file" === e.type && !e.delivered && !e.properties.canceled
                    }))
                })),
                ge = function(e) {
                    return be(e.getState())
                },
                ve = function(e) {
                    return e.getChat(i.c).serverId
                },
                ye = function(e) {
                    var t = e.getApplicationState().mobile;
                    return d(t ? "mobileMinimized" : "minimized", e).enabled
                },
                Oe = function(e, t) {
                    return e.getApplicationState("visibility").state === t
                }
        },
        62: function(e, t, n) {
            "use strict";

            function r() {
                var e = {};
                return e.promise = new Promise((function(t, n) {
                    e.resolve = t, e.reject = n
                })), e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        64: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return a
            }));
            var r = n(2),
                i = function(e) {
                    var t = e.license,
                        n = e.group;
                    return t + (e.uniqueGroups ? ":" + n : "") + ":state"
                },
                o = function(e) {
                    return Object(r.C)(e, ["ar", "he", "fa"])
                },
                a = function(e) {
                    document.documentElement.lang = e
                }
        },
        65: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return b
            }));
            var r = n(1),
                i = n(15),
                o = n(0),
                a = n(155),
                c = n.n(a),
                u = n(2),
                s = n(11),
                d = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(i.a)(t, e);
                    var n = t.prototype;
                    return n.listitem = function(e) {
                        return "" + m + e
                    }, n.list = function(e, t, n) {
                        var r = n;
                        return e.replace(m, (function() {
                            return t ? r++ + ". " : "- "
                        }))
                    }, t
                }(a.Renderer),
                l = Array.prototype.map,
                f = ["A", "UL", "OL", "LI", "STRONG", "EM", "BR"],
                p = new d,
                m = "%list-item%",
                h = function(e) {
                    return e.replace(/\n+$/, "")
                };

            function b(e) {
                var t = c()(e, {
                        renderer: p
                    }),
                    n = (new DOMParser).parseFromString(t, "text/html").body;
                return n ? h(n.textContent || "") : ""
            }
            t.a = function(e) {
                var t, n, i = e.template,
                    a = e.root,
                    d = e.preserveLists,
                    m = null != (t = null == a ? void 0 : a.props) ? t : {},
                    b = null != (n = null == a ? void 0 : a.component) ? n : o.Fragment,
                    g = o.useMemo((function() {
                        var e = new DOMParser,
                            t = h(c()(i, d ? {
                                renderer: p
                            } : {})),
                            n = e.parseFromString(t, "text/html").body;
                        return n ? function e(t) {
                            return l.call(t, (function(t, n) {
                                if ("#text" === t.nodeName) return t.textContent;
                                if (!Object(u.C)(t.nodeName, f)) return t.hasChildNodes() ? e(t.childNodes) : null;
                                var i = Object(r.a)({
                                    key: n
                                }, t.hasChildNodes() && {
                                    children: e(t.childNodes)
                                });
                                if ("A" === t.nodeName) {
                                    var a = t.getAttribute("href");
                                    if (!a || Object(s.k)(a)) return e(t.childNodes);
                                    /\S+@\S+\.\S+/.test(a) || Object(s.g)(a) || (a = "https://" + a);
                                    var c = Object(r.a)({}, i, {
                                        href: a,
                                        target: "_blank",
                                        rel: "nofollow noopener"
                                    });
                                    return o.createElement("a", c)
                                }
                                return o.createElement(t.nodeName.toLowerCase(), i)
                            }))
                        }(n.childNodes) : ""
                    }), [i, d]);
                return o.createElement(b, m, g)
            }
        },
        70: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                return new Promise((function(t) {
                    t(e())
                }))
            }
        },
        71: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "d", (function() {
                return v
            })), n.d(t, "e", (function() {
                return y
            })), n.d(t, "f", (function() {
                return O
            })), n.d(t, "g", (function() {
                return _
            })), n.d(t, "h", (function() {
                return j
            })), n.d(t, "i", (function() {
                return w
            })), n.d(t, "j", (function() {
                return x
            })), n.d(t, "k", (function() {
                return E
            })), n.d(t, "l", (function() {
                return C
            })), n.d(t, "m", (function() {
                return T
            })), n.d(t, "n", (function() {
                return k
            })), n.d(t, "o", (function() {
                return S
            })), n.d(t, "p", (function() {
                return z
            })), n.d(t, "q", (function() {
                return A
            })), n.d(t, "r", (function() {
                return M
            })), n.d(t, "s", (function() {
                return R
            })), n.d(t, "t", (function() {
                return L
            })), n.d(t, "u", (function() {
                return P
            })), n.d(t, "v", (function() {
                return N
            })), n.d(t, "w", (function() {
                return q
            })), n.d(t, "x", (function() {
                return B
            })), n.d(t, "y", (function() {
                return U
            })), n.d(t, "z", (function() {
                return V
            })), n.d(t, "A", (function() {
                return F
            })), n.d(t, "B", (function() {
                return H
            })), n.d(t, "C", (function() {
                return G
            })), n.d(t, "D", (function() {
                return W
            }));
            var r = n(0),
                i = n(5),
                o = n(1),
                a = n(4),
                c = n(24),
                u = n(14),
                s = function(e) {
                    return Object(i.z)("display:inline-block;flex-shrink:0;width:1em;height:1em;font-size:", e ? Object(c.d)(e) : "inherit", ";user-select:none;fill:currentColor;")
                },
                d = function(e) {
                    var t = e.className,
                        n = e.size,
                        c = e.label,
                        d = e.color,
                        l = void 0 === d ? "inherit" : d,
                        f = e.children,
                        p = Object(a.a)(e, ["className", "size", "label", "color", "children"]),
                        m = Object(u.h)(),
                        h = c ? {
                            "aria-labelledby": m
                        } : {};
                    return r.createElement("svg", Object(o.a)({
                        color: l,
                        className: Object(i.A)(s(n), t)
                    }, p, h), c && r.createElement("title", {
                        id: m
                    }, c), f)
                },
                l = function(e, t) {
                    return r.memo((function(n) {
                        return r.createElement(d, Object(o.a)({}, t, n), e)
                    }))
                },
                f = Object(i.C)("to{stroke-dashoffset:0;}"),
                p = Object(i.z)("fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;animation-fill-mode:forwards;animation-name:", f, ";animation-duration:0.5s;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,1,1);stroke-dasharray:9.7;stroke-dashoffset:9.7;"),
                m = (l(r.createElement("polyline", {
                    className: p,
                    points: "4.3,8.1 5.3,9.1 6.8,10.5 9,8.2 11.1,6.1 "
                }), {
                    size: 16,
                    viewBox: "0 0 16 16"
                }), l(r.createElement("path", {
                    d: "M23.7,16.7l-6,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-0.9-0.1-1.3l0.1-0.1l4.3-4.3H10c-0.5,0-0.9-0.4-1-0.9L9,16 c0-0.5,0.4-0.9,0.9-1l0.1,0h10.6l-4.3-4.3c-0.4-0.4-0.4-0.9-0.1-1.3l0.1-0.1c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l6,6 C24.1,15.7,24.1,16.2,23.7,16.7L23.7,16.7z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                })),
                h = l(r.createElement("path", {
                    d: "M22,12.3c0.4,0.4,0.4,1,0,1.4l-6.4,6.4c-1.1,1.1-3,1.3-4,0.2l-0.4-0.4c-1.1-1.1-0.9-2.9,0.2-4l7.8-7.8 c1.6-1.6,4.3-1.4,6,0.4l0.7,0.7c1.7,1.7,1.9,4.4,0.4,6l-8.5,8.5c-2.7,2.7-7.2,2.7-9.9,0s-2.7-7.2,0-9.9l5.7-5.7c0.4-0.4,1-0.4,1.4,0 c0.4,0.4,0.4,1,0,1.4l-5.7,5.7c-2,2-2,5.1,0,7.1s5.1,2,7.1,0l8.5-8.5c0.8-0.8,0.6-2.2-0.4-3.2l-0.7-0.7c-1-1-2.4-1.1-3.2-0.4 l-7.8,7.8c-0.4,0.4-0.5,1-0.2,1.2l0.4,0.4c0.3,0.3,0.8,0.2,1.2-0.2l6.4-6.4c0.2-0.2,0.5-0.3,0.7-0.3C21.6,12,21.8,12.1,22,12.3z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                b = l(r.createElement("path", {
                    d: "M12,18c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1C13,17.6,12.6,18,12,18z M10.5,7.1 C10.5,6.5,11.2,6,12,6s1.5,0.5,1.5,1.1c0.1,5.2-0.4,7.9-1.5,7.9S10.4,12.4,10.5,7.1z"
                }), {
                    size: 32,
                    viewBox: "0 0 24 24"
                }),
                g = Object(i.D)("path", {
                    target: "e1nep2br0"
                })((function(e) {
                    var t = e.collapsed;
                    return {
                        opacity: t ? 0 : 1,
                        transform: "scale(" + (t ? 0 : 1) + ")"
                    }
                }), " transform-origin:50% 50%;transition:200ms ", (function(e) {
                    return e.theme.transitions.easings.spring
                }), " 50ms;"),
                v = function(e) {
                    var t = e.backgroundColor,
                        n = e.color,
                        i = e.filled,
                        c = void 0 !== i && i,
                        u = Object(a.a)(e, ["backgroundColor", "color", "filled"]);
                    return r.createElement(d, Object(o.a)({
                        viewBox: "0 0 32 32"
                    }, u), r.createElement("path", {
                        fill: n,
                        d: "M12.63,26.46H8.83a6.61,6.61,0,0,1-6.65-6.07,89.05,89.05,0,0,1,0-11.2A6.5,6.5,0,0,1,8.23,3.25a121.62,121.62,0,0,1,15.51,0A6.51,6.51,0,0,1,29.8,9.19a77.53,77.53,0,0,1,0,11.2,6.61,6.61,0,0,1-6.66,6.07H19.48L12.63,31V26.46"
                    }), r.createElement(g, {
                        collapsed: c,
                        fill: t,
                        d: "M19.57,21.68h3.67a2.08,2.08,0,0,0,2.11-1.81,89.86,89.86,0,0,0,0-10.38,1.9,1.9,0,0,0-1.84-1.74,113.15,113.15,0,0,0-15,0A1.9,1.9,0,0,0,6.71,9.49a74.92,74.92,0,0,0-.06,10.38,2,2,0,0,0,2.1,1.81h3.81V26.5Z"
                    }))
                },
                y = l(r.createElement("path", {
                    d: "M21.3331175,12.2868932 C21.7144399,11.9043689 22.3326857,11.9043689 22.7140082,12.2868932 C23.0953306,12.6694174 23.0953306,13.2896117 22.7140082,13.6721359 L17.1904454,19.2131068 C16.8091229,19.5956311 16.1908771,19.5956311 15.8095546,19.2131068 L10.2859918,13.6721359 C9.90466939,13.2896117 9.90466939,12.6694174 10.2859918,12.2868932 C10.6673143,11.9043689 11.2855601,11.9043689 11.6668825,12.2868932 L16.5,17.1352427 L21.3331175,12.2868932 Z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32",
                    fill: "none",
                    stroke: "none",
                    strokeWidth: 1,
                    fillRule: "evenodd"
                }),
                O = l(r.createElement("path", {
                    d: "M17.4,16l5.3,5.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0L16,17.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0\tc-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0\tc0.4,0.4,0.4,1,0,1.4L17.4,16z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                _ = l(r.createElement("path", {
                    d: "M8,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,18,8,18z M16,18c-1.1,0-2-0.9-2-2s0.9-2,2-2\ns2,0.9,2,2S17.1,18,16,18z M24,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S25.1,18,24,18z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                j = l(r.createElement("path", {
                    d: "M6,18h12c0.6,0,1,0.4,1,1c0,0.5-0.4,0.9-0.9,1L18,20H6c-0.6,0-1-0.4-1-1c0-0.5,0.4-0.9,0.9-1L6,18h12H6z M11.4,6\nL15,9.6l-6.1,6.1C8.7,15.9,8.5,16,8.3,16l-0.1,0H6.1c-0.5,0-1-0.4-1-0.9l0-0.1v-2.1c0-0.2,0.1-0.5,0.2-0.6l0.1-0.1L11.4,6z M15.4,3.2l0.1,0.1l2.2,2.2c0.4,0.4,0.4,1,0.1,1.4L17.7,7l-2,2L12,5.3l2-2C14.3,2.9,15,2.9,15.4,3.2z"
                }), {
                    size: 24,
                    viewBox: "0 0 24 24"
                }),
                w = l(r.createElement("path", {
                    d: "M16,6l0.3,0c5.4,0.1,9.7,4.6,9.7,10c0,5.5-4.5,10-10,10S6,21.5,6,16S10.5,6,16,6z M16,8l-0.2,0 C11.4,8.1,8,11.7,8,16s3.4,7.9,7.8,8l0.2,0l0.2,0c4.3-0.1,7.8-3.7,7.8-8C24,11.6,20.4,8,16,8z M13,17.7c0.4,1.3,1.6,2.3,3,2.3 c1.4,0,2.7-0.9,3-2.2c0.1-0.5,0.7-0.8,1.2-0.7s0.8,0.7,0.7,1.2c-0.6,2.2-2.6,3.7-5,3.7c-2.3,0-4.4-1.5-5-3.7 c-0.1-0.5,0.2-1.1,0.7-1.2C12.3,16.9,12.8,17.2,13,17.7z M12.5,12c0.8,0,1.5,0.7,1.5,1.5S13.3,15,12.5,15S11,14.3,11,13.5 S11.7,12,12.5,12z M19.5,12c0.8,0,1.5,0.7,1.5,1.5S20.3,15,19.5,15S18,14.3,18,13.5S18.7,12,19.5,12z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                x = l(r.createElement("path", {
                    d: "M17.6,17H7c-0.6,0-1-0.4-1-1s0.4-1,1-1h10.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4 c0.4,0.4,0.4,1,0,1.4l-4,4c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4L17.6,17L17.6,17z M8,12c0,0.6-0.4,1-1,1s-1-0.4-1-1V8.1 C6,7,7,6,8.1,6h15.8C25,6,26,7,26,8.1v15.8c0,1.2-1,2.1-2.1,2.1H8.1C7,26,6,25,6,23.9V20c0-0.6,0.4-1,1-1s1,0.4,1,1v3.9 C8,23.9,8.1,24,8.1,24h15.8c0.1,0,0.1-0.1,0.1-0.1V8.1C24,8.1,23.9,8,23.9,8H8.1C8.1,8,8,8.1,8,8.1V12z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                E = l(r.createElement("path", {
                    d: "M16,4c0.6,0,1.3,0.4,1.7,0.8l7.8,7.8c0.3,0.3,0.5,0.7,0.5,1.4v12c0,1.6-1.2,2.9-2.8,3L23,29H8 c-1.6,0-2.9-1.2-3-2.8L5,26V7c0-1.6,1.2-2.9,2.8-3L8,4H16z M16,6H8C7.5,6,7.1,6.4,7,6.9L7,7v19c0,0.5,0.4,0.9,0.9,1L8,27h15 c0.5,0,0.9-0.4,1-0.9l0-0.1V14h-7c-0.5,0-0.9-0.4-1-0.9l0-0.1V6z M22,12l-4-4v4H22z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                C = l(r.createElement(r.Fragment, null, r.createElement("g", {
                    className: Object(i.z)("fill:none;transform:translate(16px,16px) rotate(0deg) translate(-16px,-16px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0,0,1,1);animation-name:", Object(i.C)("75%{transform:translate(16px,16px) rotate(0deg) translate(-16px,-16px);}91.67%{transform:translate(16px,16px) rotate(180deg) translate(-16px,-16px);}0%{transform:translate(16px,16px) rotate(0deg) translate(-16px,-16px);}100%{transform:translate(16px,16px) rotate(180deg) translate(-16px,-16px);}"), ";")
                }, r.createElement("path", {
                    d: "M22,22 L22,26 L10,26 L10,22 L16,16 L22,22 Z M22,10 L16,16 L10,10 L10,6 L22,6 L22,10 Z",
                    strokeLinejoin: "round",
                    className: Object(i.z)("stroke:currentColor;stroke-width:2;")
                })), r.createElement("g", {
                    className: Object(i.z)("transform:translate(16px,15px) scale(1,1) translate(-16px,-15px);animation-fill-mode:backwards;animation-name:", Object(i.C)("0%{transform:translate(16px,15px) scale(1,1) translate(-16px,-15px);}61.67%{transform:translate(16px,15px) scale(0,0) translate(-16px,-15px);}63.33%{transform:translate(16px,15px) scale(1,1) translate(-16px,-15px);}100%{transform:translate(16px,15px) scale(1,1) translate(-16px,-15px);}"), ";animation-timing-function:cubic-bezier(0.42,0,1,1);")
                }, r.createElement("polygon", {
                    points: "12 11 20 11 16 15",
                    className: Object(i.z)("fill:currentColor;opacity:1;animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0,0,1,1);animation-name:", Object(i.C)("58.33%{opacity:1;}60%{opacity:0;}91.67%{opacity:0;}96.67%{opacity:1;}0%{opacity:1;}100%{opacity:1;}"), ";")
                })), r.createElement("path", {
                    d: "M16,17 L16,23",
                    className: Object(i.z)("stroke:currentColor;stroke-width:2;stroke-dashoffset:12;stroke-dasharray:6,0,6,6;animation-fill-mode:backwards,backwards;animation-timing-function:cubic-bezier(0.42,0,1,1),cubic-bezier(0,0,1,1);animation-name:", Object(i.C)("0%{stroke-dashoffset:12;}68.33%{stroke-dashoffset:-6;}100%{stroke-dashoffset:-6;}"), ",", Object(i.C)("0%{stroke-dasharray:6,0,6,6;}100%{stroke-dasharray:6,0,6,6;}"), ";")
                }), r.createElement("g", {
                    className: Object(i.z)("transform:translate(16px,24px) translate(-16px,-24px) translate(0px,2px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0,0,1,1);animation-name:", Object(i.C)("0%{transform:translate(16px,24px) translate(-16px,-24px) translate(0px,2px);}40%{transform:translate(16px,24px) translate(-16px,-24px) translate(0px,0px);}75%{transform:translate(16px,24px) translate(-16px,-24px) translate(0px,0px);}76.67%{transform:translate(16px,24px) translate(-16px,-24px) translate(-2px,0px);}78.33%{transform:translate(16px,24px) translate(-16px,-24px) translate(-4px,-1px);}81.67%{transform:translate(16px,24px) translate(-16px,-24px) translate(-8px,-6px);}83.33%{transform:translate(16px,24px) translate(-16px,-24px) translate(-8px,-8px);}85%{transform:translate(16px,24px) translate(-16px,-24px) translate(-8px,-11px);}88.33%{transform:translate(16px,24px) translate(-16px,-24px) translate(-4px,-13px);}91.67%{transform:translate(16px,24px) translate(-16px,-24px) translate(0px,-13px);}96.67%{transform:translate(16px,24px) translate(-16px,-24px) translate(0px,-11px);}100%{transform:translate(16px,24px) translate(-16px,-24px) translate(0px,-11px);}"), ";")
                }, r.createElement("g", {
                    className: Object(i.z)("transform:translate(16px,24px) rotate(0deg) translate(-16px,-24px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0,0,1,1);animation-name:", Object(i.C)("75%{transform:translate(16px,24px) rotate(0deg) translate(-16px,-24px);}78.33%{transform:translate(16px,24px) rotate(36deg) translate(-16px,-24px);}83.33%{transform:translate(16px,24px) rotate(90deg) translate(-16px,-24px);}91.67%{transform:translate(16px,24px) rotate(180deg) translate(-16px,-24px);}0%{transform:translate(16px,24px) rotate(0deg) translate(-16px,-24px);}100%{transform:translate(16px,24px) rotate(180deg) translate(-16px,-24px);}"), ";")
                }, r.createElement("g", {
                    className: Object(i.z)("transform:translate(16px,24px) scale(1,1) translate(-16px,-24px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0,0,1,1);animation-name:", Object(i.C)("0%{transform:translate(16px,24px) scale(1,1) translate(-16px,-24px);}40%{transform:translate(16px,24px) scale(1,1.4) translate(-16px,-24px);}68.33%{transform:translate(16px,24px) scale(1,1.6) translate(-16px,-24px);}86.67%{transform:translate(16px,24px) scale(1,1.6) translate(-16px,-24px);}88.33%{transform:translate(16px,24px) scale(1,1.4) translate(-16px,-24px);}91.67%{transform:translate(16px,24px) scale(0.8,1.3) translate(-16px,-24px);}96.67%{transform:translate(16px,24px) scale(0.45,1.6) translate(-16px,-24px);}100%{transform:translate(16px,24px) scale(0.45,1.6) translate(-16px,-24px);}"), ";")
                }, r.createElement("rect", {
                    x: "10",
                    y: "23",
                    width: "12",
                    height: "2",
                    className: Object(i.z)("fill:currentColor;opacity:1;animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0,0,1,1);animation-name:", Object(i.C)("75%{opacity:1;}0%{opacity:1;}100%{opacity:1;}"), ";")
                }))))), {
                    size: 32,
                    viewBox: "0 0 32 32",
                    className: Object(i.z)("*{animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(0,0,1,1);}")
                }),
                I = n(250),
                T = Object(i.D)(r.forwardRef((function(e, t) {
                    var n = e.onPress,
                        c = e.disabled,
                        u = Object(a.a)(e, ["onPress", "disabled"]);
                    t = t || r.useRef(null);
                    var s = Object(I.a)(Object(o.a)({
                            onPress: n,
                            isDisabled: c
                        }, u), t).buttonProps,
                        d = (s.ref, Object(a.a)(s, ["ref"]));
                    return r.createElement(i.g, Object(o.a)({
                        innerRef: t
                    }, u, d))
                })), {
                    target: "e1mwfyk10"
                })("padding:0;border-radius:", (function(e) {
                    return e.theme.borderRadius.def
                }), ";"),
                k = Object(i.D)("div", {
                    target: "e1ykiqc40"
                })("display:inline-block;", (function(e) {
                    var t = e.size;
                    return {
                        width: t,
                        height: t
                    }
                }), " &:hover{background-color:", (function(e) {
                    return e.theme.colors.surface.lightVariant
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.sm
                }), ";}"),
                S = Object(i.D)("div", {
                    target: "eg7dzwm0"
                })("width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:", (function(e) {
                    return e.theme.borderRadius.sm
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.lightVariant
                }), ";"),
                z = (l(r.createElement("path", {
                    d: "M6.1,22.1l5.3-4.8c0.4-0.3,1-0.3,1.3,0l3.2,2.8l6.5-5.8c0.4-0.3,1-0.3,1.3,0l2.3,2.1V9c0-0.6-0.4-1-1-1h-18 c-0.6,0-1,0.4-1,1L6.1,22.1C6.1,22,6.1,22,6.1,22.1z M8,23h8.1l-4.1-3.7L8,23z M19.1,23h5.9c0.6,0,1-0.4,1-1v-3l-3-2.7l-5.7,5.1 L19.1,23z M7.1,6h18c1.7,0,3,1.3,3,3v13c0,1.7-1.3,3-3,3h-18c-1.7,0-3-1.3-3-3V9C4.1,7.3,5.4,6,7.1,6z M15.1,16c-1.7,0-3-1.3-3-3 s1.3-3,3-3s3,1.3,3,3S16.8,16,15.1,16z M15.1,14c0.6,0,1-0.4,1-1s-0.4-1-1-1c-0.6,0-1,0.4-1,1S14.5,14,15.1,14z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }), l(r.createElement("path", {
                    d: "M17,13c0.5,0,1,0.5,1,1c0,4.7,0,7.3,0,8s0.3,1,1,1v0c0.6,0,1,0.5,1,1c0,0.5-0.4,0.9-0.9,1L19,25l-2,0l0,0h-3 c-0.6,0-1-0.4-1-1c0-0.5,0.4-0.9,0.9-1l0.1,0c0.7,0,1-0.3,1-1c0-1,0-4.9,0-5.9S14,15,14,15c-0.6,0-1-0.5-1-1c0-0.5,0.4-1,1-1H17z M16,7c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,7,16,7z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                })),
                A = l(r.createElement("path", {
                    d: "M5.5,6l6.5,5.7L18.5,6H5.5z M20,7.3l-7.3,6.4c-0.4,0.3-0.9,0.3-1.3,0L4,7.3V17c0,0.6,0.4,1,1,1h14 c0.6,0,1-0.4,1-1V7.3z M5,4h14c1.7,0,3,1.3,3,3v10c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V7C2,5.3,3.3,4,5,4z"
                }), {
                    size: 24,
                    viewBox: "0 0 24 24"
                }),
                M = l(r.createElement("path", {
                    d: "M11,22c-0.6,0-1-0.4-1-1s0.4-1,1-1h15c0.6,0,1,0.4,1,1s-0.4,1-1,1H11z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                R = l(r.createElement("path", {
                    d: "M18,10.6l1.3-1.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L19.4,12l1.3,1.3c0.4,0.4,0.4,1,0,1.4 c-0.4,0.4-1,0.4-1.4,0L18,13.4l-1.3,1.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l1.3-1.3l-1.3-1.3c-0.4-0.4-0.4-1,0-1.4 c0.4-0.4,1-0.4,1.4,0L18,10.6L18,10.6z M7,8l4.3-3.7C11.9,3.7,13,4.1,13,5v14c0,0.9-1.1,1.3-1.7,0.7L7.2,16H4c-0.6,0-1-0.4-1-1V9 c0-0.6,0.4-1,1-1H7z M11,7.4L8.3,9.7C8.1,9.9,7.9,10,7.6,10H5v4h2.6c0.3,0,0.5,0.1,0.7,0.3l2.7,2.3V7.4z"
                }), {
                    size: 24,
                    viewBox: "0 0 24 24"
                }),
                L = l(r.createElement("path", {
                    d: "M9.1,8H12c0.6,0,1,0.4,1,1c0,0.5-0.4,0.9-0.9,1L12,10H9.1C9.1,10,9,10,9,10.1l0,0v12.8 C9,22.9,9,23,9.1,23l0,0h12.8c0.1,0,0.1,0,0.1-0.1l0,0V20c0-0.6,0.4-1,1-1c0.5,0,0.9,0.4,1,0.9l0,0.1v2.9c0,1.1-0.9,2-2,2.1l-0.2,0 H9.1c-1.1,0-2-0.9-2.1-2l0-0.2V10.1C7,9,7.9,8.1,9,8L9.1,8H12H9.1z M23,8L23,8C23,8,23.1,8,23,8L23,8c0.1,0,0.1,0,0.1,0 c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1 c0,0,0.1,0.1,0.1,0.1l-0.1-0.1c0.1,0,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0,0,0,0,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1 c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0v6c0,0.6-0.4,1-1,1s-1-0.4-1-1 l0-3.6l-5.3,5.3c-0.4,0.4-0.9,0.4-1.3,0.1l-0.1-0.1c-0.4-0.4-0.4-1,0-1.4l5.3-5.3H17c-0.6,0-1-0.4-1-1s0.4-1,1-1H23z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                P = l(r.createElement("path", {
                    d: "M18.8,16.3C17.9,16.8,17,17,16,17c-1,0-1.9-0.2-2.8-0.7c-3.2,0.8-5.2,2.8-5.2,5c0,0.8,0,0.9,0,2c0,0,0,0,0.1,0\tc0.4,0.1,1,0.3,1.9,0.4c1.6,0.2,3.8,0.3,6.1,0.3s4.5-0.1,6.1-0.3c0.8-0.1,1.4-0.2,1.9-0.4c0,0,0.1,0,0.1,0v-2\tC24,19.2,21.9,17.1,18.8,16.3z M20.6,14.8c3.2,1.2,5.4,3.7,5.4,6.5v2.4c0,1.8-3.7,2.2-10,2.2S6,25.5,6,23.8c0-1.5,0-1.5,0-2.4\tc0-2.9,2.2-5.3,5.4-6.5c-0.9-1-1.4-2.4-1.4-3.8c0-3.3,2.7-6,6-6s6,2.7,6,6C22,12.5,21.5,13.8,20.6,14.8z M16,15c2.2,0,4-1.8,4-4\ts-1.8-4-4-4s-4,1.8-4,4S13.8,15,16,15z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                D = Object(i.D)("path", {
                    target: "e7kg0vt0"
                })("fill-rule:nonzero;fill:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";"),
                N = l(r.createElement(D, {
                    d: "M7,10.75 L7,8.5 C7,7.675 7.675,7 8.5,7 L10.75,7 C11.1642136,7 11.5,6.66421356 11.5,6.25 L11.5,5.5 C11.5,4.67157288 12.1715729,4 13,4 C13.8284271,4 14.5,4.67157288 14.5,5.5 L14.5,6.25 C14.5,6.66421356 14.8357864,7 15.25,7 L17.5,7 C18.3284271,7 19,7.67157288 19,8.5 L19,10.75 C19,11.1642136 18.6642136,11.5 18.25,11.5 L17.5,11.5 C16.6715729,11.5 16,12.1715729 16,13 C16,13.8284271 16.6715729,14.5 17.5,14.5 L18.25,14.5 C18.6642136,14.5 19,14.8357864 19,15.25 L19,17.5 C19,18.3284271 18.3284271,19 17.5,19 L15.25,19 C14.8357864,19 14.5,18.6642136 14.5,18.25 L14.5,17.5 C14.5,16.6715729 13.8284271,16 13,16 C12.1715729,16 11.5,16.6715729 11.5,17.5 L11.5,18.25 C11.5,18.6642136 11.1642136,19 10.75,19 L8.5,19 C7.67157288,19 7,18.3284271 7,17.5 L7,15.25 C7,14.8357864 6.66421356,14.5 6.25,14.5 L5.5,14.5 C4.67157288,14.5 4,13.8284271 4,13 C4,12.1715729 4.67157288,11.5 5.5,11.5 L6.25,11.5 C6.66421356,11.5 7,11.1642136 7,10.75 Z M19,15.25 L19,17.5 C19,18.3284271 18.3284271,19 17.5,19 L15.25,19 C14.8357864,19 14.5,18.6642136 14.5,18.25 L14.5,17.5 C14.5,16.6715729 13.8284271,16 13,16 C12.1715729,16 11.5,16.6715729 11.5,17.5 L11.5,18.25 C11.5,18.6642136 11.1642136,19 10.75,19 L8.5,19 C7.67157288,19 7,18.3284271 7,17.5 L7,15.25 C7,14.8357864 6.66421356,14.5 6.25,14.5 L5.5,14.5 C4.67157288,14.5 4,13.8284271 4,13 C4,12.1715729 4.67157288,11.5 5.5,11.5 L6.25,11.5 C6.66421356,11.5 7,11.1642136 7,10.75 L7,10.3 C7.405,10.12 7.885,10 8.4775,10 C11.4775,10 11.4775,13 14.4925,13 C15.1225,13 15.6175,12.865 16.0375,12.6625 C15.9346018,13.1080984 16.0406047,13.576297 16.3254017,13.934119 C16.6101988,14.291941 17.0426753,14.5002933 17.5,14.5 L18.25,14.5 C18.6642136,14.5 19,14.8357864 19,15.25 Z"
                }), {
                    size: 24,
                    viewBox: "0 0 24 24"
                }),
                q = l(r.createElement("path", {
                    d: "M16.9,9c0.6,0,1,0.4,1,1l0,0.1l-0.8,9c0,0.5-0.5,0.9-1,0.9H7.9c-0.5,0-1-0.4-1-0.9l-0.8-9 C6,9.5,6.5,9,7,9l0,0L16.9,9z M14,3c0.6,0,0.9,0.5,1,1l0,1h3c0.5,0,0.9,0.4,1,0.9L19,6c0,0.5-0.4,0.9-0.9,1L18,7H6C5.4,7,5,6.6,5,6 c0-0.5,0.4-0.9,0.9-1L6,5h3l0-1c0-0.6,0.2-0.9,0.8-1l0.1,0L14,3z"
                }), {
                    size: 24,
                    viewBox: "0 0 24 24"
                }),
                B = l(r.createElement("path", {
                    d: "M19,18.5c1.2-1.3,2-3.1,2-5.1c0-4.1-3.3-7.5-7.5-7.5S6,9.3,6,13.5s3.3,7.5,7.5,7.5c1.4,0,2.8-0.4,3.9-1.1 l5.9,5.9c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4L19,18.5L19,18.5z M13.5,18.9c-3,0-5.5-2.5-5.5-5.5S10.4,8,13.5,8s5.5,2.5,5.5,5.5 S16.5,18.9,13.5,18.9z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                U = l(r.createElement("path", {
                    d: "M6.4,5.6l21,9.5c0.5,0.2,0.7,0.8,0.5,1.3c-0.1,0.2-0.3,0.4-0.5,0.5l-21,9.5\tc-0.5,0.2-1.1,0-1.3-0.5c-0.1-0.3-0.1-0.6,0-0.8L8.6,18L20.5,16L8.6,14.1L5.1,6.9c-0.2-0.5,0-1.1,0.5-1.3C5.8,5.5,6.1,5.5,6.4,5.6z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                V = l(r.createElement("path", {
                    d: "M16.5,21.1l-6.3,3.8C9,25.5,7.6,24.3,8.1,23l2.2-5.7l-3.8-3.7c-1-0.9-0.4-2.6,1-2.6h5.3l2.3-5.1 c0.5-1.2,2.2-1.2,2.8,0l2.3,5.1h5.4c1.4,0,2,1.7,1,2.6l-3.9,3.7l2.2,5.7c0.5,1.3-0.9,2.5-2.2,1.8L16.5,21.1z M10.5,22.3l5.3-3.1l0,0 c0.4-0.2,1-0.2,1.5,0l5.3,3.1l-1.8-4.7c-0.2-0.6,0-1.2,0.4-1.6l3.2-3h-4.4c-0.6,0-1.1-0.4-1.4-0.9l-2-4.4l-2,4.4 c-0.2,0.6-0.8,0.9-1.4,0.9H8.8l3.1,3c0.4,0.4,0.6,1,0.4,1.6L10.5,22.3z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                F = l(r.createElement("path", {
                    d: "M20,19H18.56c-.35.5-.91,1.35-1.64,2.53a3.75,3.75,0,0,0-.24.44,6.74,6.74,0,0,0-.52,2.42C16,26.18,15.49,27,14,27c-1.66,0-2.74-1.2-3-3V19H8c-3,0-3.64-2.26-2.4-6.65S7.58,7,11,7h6a1.11,1.11,0,0,1,.75.3L19.48,9H20V9a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H21a1,1,0,0,1-1-1Zm0-2V11h-.94a1,1,0,0,1-.71-.3L16.65,9H11c-2.38,0-2.45.15-3.51,3.9C6.58,16.21,6.75,17,8,17h4a1,1,0,0,1,1,1v5.92c.12.81.46,1.07,1,1.08a4.54,4.54,0,0,0,.12-.81,8.39,8.39,0,0,1,.69-3.06q.17-.33.36-.66a34.1,34.1,0,0,1,2.07-3.11,1,1,0,0,1,.76-.36Zm4,1V10H22v8Z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                H = l(r.createElement("path", {
                    d: "M11,14h1.47c.35-.5.9-1.35,1.64-2.53a3.68,3.68,0,0,0,.23-.44,6.34,6.34,0,0,0,.52-2.42C15.05,6.82,15.51,6,17,6c1.66,0,2.65,1.06,2.92,2.86V14h3c3,0,3.76,2.26,2.51,6.65S23.35,26,19.93,26H14a1,1,0,0,1-.71-.3L11.55,24H11v0a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm0,2v6h1a1,1,0,0,1,.7.3L14.37,24H20c2.37,0,2.44-.15,3.51-3.9.94-3.31.68-4.1-.6-4.1h-4A1,1,0,0,1,18,15V9.08C17.87,8.27,17.54,8,17,8a5.27,5.27,0,0,0-.13.81,8.19,8.19,0,0,1-.69,3.06,5.37,5.37,0,0,1-.36.66,34.81,34.81,0,0,1-2.06,3.11A1,1,0,0,1,13,16ZM7,15v8H9V15Z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                G = l(r.createElement("path", {
                    d: "M8.7,15.2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l5.7,5.7c0.4,0.4,1,0.4,1.4,0l9.9-9.9 c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-9.2,9.2L8.7,15.2z"
                }), {
                    size: 32,
                    viewBox: "0 0 32 32"
                }),
                W = l(r.createElement("path", {
                    d: "M15,19v-2c2.8,0,5-2.2,5-5s-2.2-5-5-5V5c3.9,0,7,3.1,7,7S18.9,19,15,19z M15,16v-2c1.1,0,2-0.9,2-2s-0.9-2-2-2 V8c2.2,0,4,1.8,4,4S17.2,16,15,16z M7,8l4.3-3.7C11.9,3.7,13,4.1,13,5v14c0,0.9-1.1,1.3-1.7,0.7L7.2,16H4c-0.6,0-1-0.4-1-1V9 c0-0.6,0.4-1,1-1H7z M11,7.4L8.3,9.7C8.1,9.9,7.9,10,7.6,10H5v4h2.6c0.3,0,0.5,0.1,0.7,0.3l2.7,2.3V7.4z"
                }), {
                    size: 24,
                    viewBox: "0 0 24 24"
                })
        },
        8: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i.a
            })), n.d(t, "b", (function() {
                return o.a
            })), n.d(t, "c", (function() {
                return u.a
            })), n.d(t, "d", (function() {
                return d.a
            })), n.d(t, "e", (function() {
                return l.a
            })), n.d(t, "f", (function() {
                return p.a
            })), n.d(t, "g", (function() {
                return h.a
            })), n.d(t, "h", (function() {
                return v.a
            })), n.d(t, "i", (function() {
                return j
            })), n.d(t, "j", (function() {
                return w
            })), n.d(t, "k", (function() {
                return E.a
            })), n.d(t, "l", (function() {
                return R
            })), n.d(t, "m", (function() {
                return C.a
            })), n.d(t, "n", (function() {
                return P
            })), n.d(t, "o", (function() {
                return N
            })), n.d(t, "p", (function() {
                return A.a
            })), n.d(t, "q", (function() {
                return _.a
            })), n.d(t, "r", (function() {
                return q.a
            })), n.d(t, "s", (function() {
                return B.a
            })), n.d(t, "t", (function() {
                return U.a
            })), n.d(t, "u", (function() {
                return T.a
            })), n.d(t, "v", (function() {
                return V.a
            })), n.d(t, "w", (function() {
                return F.a
            })), n.d(t, "x", (function() {
                return G.a
            })), n.d(t, "y", (function() {
                return S.a
            })), n.d(t, "z", (function() {
                return M
            })), n.d(t, "A", (function() {
                return Y.a
            })), n.d(t, "B", (function() {
                return K.a
            })), n.d(t, "C", (function() {
                return J.a
            })), n.d(t, "D", (function() {
                return X.a
            }));
            n(213);
            var r = n(214),
                i = n.n(r),
                o = n(215),
                a = (n(216), n(67)),
                c = n.n(a),
                u = n(82),
                s = n(56),
                d = n(217),
                l = n(218),
                f = n(136),
                p = n(219),
                m = n(21),
                h = n.n(m),
                b = n(36),
                g = n(37),
                v = n.n(g),
                y = n(26),
                O = n(54),
                _ = n.n(O);

            function j(e, t) {
                return _.a.apply(void 0, t.map((function(t) {
                    return Object(y.a)(e, t)
                })))
            }

            function w(e, t) {
                return c()((function(n) {
                    return e.on(t, n),
                        function() {
                            e.off(t, n)
                        }
                }))
            }
            var x = n(220),
                E = n.n(x),
                C = n(137),
                I = n(115),
                T = n.n(I),
                k = n(138),
                S = n.n(k),
                z = n(86),
                A = n.n(z);

            function M(e) {
                return function(t) {
                    return Object(b.a)(A()(e)(t))
                }
            }

            function R(e) {
                return T()(Object(s.a)((function() {
                    return Object(C.a)(Promise.race([e.call("isFocused"), new Promise((function(t) {
                        return r = "focus", i = t, void(n = e).on(r, (function e(t) {
                            n.off(r, e), i(t)
                        }));
                        var n, r, i
                    }))]))
                })), M((function(t) {
                    return T()(w(e, "focus"), S()(t))
                })))
            }
            var L = n(32);

            function P() {
                var e = Object(L.a)((function() {
                        return !!document.hasFocus && document.hasFocus()
                    })),
                    t = A()((function() {
                        return !0
                    }))(Object(y.a)(window, "focus")),
                    n = A()((function() {
                        return !1
                    }))(Object(y.a)(window, "blur"));
                return _()(e, t, n)
            }
            n(221);
            var D, N = (D = function() {
                    return f.a
                }, function(e) {
                    return function(t, n) {
                        if (0 === t) {
                            var r, i = !1,
                                o = function(e, t) {
                                    r(e, t)
                                };
                            e(t, (function e(t, a) {
                                if (0 === t) return r = a, i ? void o(1) : void n(t, o);
                                if (2 === t && a && !i) {
                                    i = !0;
                                    try {
                                        D(a)(0, e)
                                    } catch (c) {
                                        n(2, c)
                                    }
                                } else n(t, a)
                            }))
                        }
                    }
                }),
                q = (n(83), n(222)),
                B = n(223),
                U = (n(224), n(225)),
                V = n(226),
                F = n(33),
                H = n(227),
                G = n.n(H),
                W = (n(68), n(84), n(29)),
                Y = n.n(W),
                K = n(45),
                J = (n(228), n(229), n(55), n(230)),
                X = n(30)
        },
        87: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return F
            })), n.d(t, "b", (function() {
                return Y
            })), n.d(t, "c", (function() {
                return X
            }));
            var r = n(23),
                i = n.n(r),
                o = n(30),
                a = n(2),
                c = n(28),
                u = n(21),
                s = n.n(u),
                d = n(37),
                l = n.n(d),
                f = n(32),
                p = n(69),
                m = n(33),
                h = n(29),
                b = n.n(h),
                g = n(45),
                v = n(55),
                y = n(1),
                O = n(56),
                _ = n(89),
                j = n(36),
                w = n(26),
                x = n(54),
                E = n.n(x),
                C = function(e) {
                    return !!e.data && e.data["@@livechat/postmessenger"]
                },
                I = Object(a.Y)((function() {
                    return Object(m.a)(i()((function(e) {
                        return e.data.origin = e.origin, e.data
                    }))(s()(C)(Object(w.a)(window, "message"))))
                }));

            function T(e) {
                return function(t) {
                    return Object(j.a)(i()(e)(t))
                }
            }
            var k = 0,
                S = function(e, t, n, r) {
                    return void 0 === r && (r = k++), Object(O.a)((function() {
                        return n.request = r, t(n), b()(1)(T((function(e) {
                            if (!e.data.error) return Object(f.a)((function() {
                                return e.data.result
                            }));
                            var t = e.data.result,
                                n = t.real,
                                r = t.error;
                            if (!n) return Object(_.a)(r);
                            var i = new Error(r.message);
                            return Object(a.A)("code", r) && (i.code = r.code), Object(_.a)(i)
                        }))(s()((function(e) {
                            return "response" === e.type && e.request === r
                        }))(e)))
                    }))
                },
                z = function(e, t, n, r, i) {
                    return void 0 === i && (i = null), Object(y.a)({}, e, {
                        call: function(e) {
                            for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++) a[c - 1] = arguments[c];
                            return Object(o.a)(S(t, r, n("call", {
                                method: e,
                                args: a
                            })))
                        },
                        emit: function(e, t) {
                            r(n("emit", {
                                event: e,
                                arg: t
                            }))
                        },
                        data: i
                    })
                },
                A = n(68),
                M = n.n(A);

            function R() {
                var e = M()();
                return [e, function() {
                    var t = new Error("Destroyed.");
                    t.code = "DESTROYED", e(2, t)
                }]
            }
            var L = function(e, t, n, r) {
                    var i;
                    return (i = {})["@@livechat/postmessenger"] = !0, i.owner = e, i.instance = t, i.type = n, i.data = r, i
                },
                P = n(70),
                D = function(e, t, n, r) {
                    return function(i) {
                        switch (i.type) {
                            case "call":
                                return void Object(P.a)((function() {
                                    var t = i.data,
                                        n = t.method,
                                        o = t.args;
                                    return r[n].apply(e, o)
                                })).then((function(e) {
                                    i.type = "response", i.data = {
                                        error: !1,
                                        result: e
                                    }, n(i)
                                }), (function(e) {
                                    var t;
                                    i.type = "response", e instanceof Error ? (t = {
                                        real: !0,
                                        error: {
                                            message: e.message
                                        }
                                    }, Object(a.A)("code", e) && (t.error.code = e.code)) : t = {
                                        real: !1,
                                        error: e
                                    }, i.data = {
                                        error: !0,
                                        result: t
                                    }, n(i)
                                }));
                            case "emit":
                                var o = i.data,
                                    c = o.event,
                                    u = o.arg;
                                return void t(c, u);
                            default:
                                return
                        }
                    }
                },
                N = function(e) {
                    return Object(a.Z)((function(e) {
                        return "function" === typeof e
                    }), e)
                },
                q = Object(a.v)(),
                B = 0;

            function U(e, t) {
                var n = e.frame,
                    r = e.targetOrigin,
                    o = void 0 === r ? function(e) {
                        var t = document.createElement("a");
                        return t.href = e, t.origin ? "null" === t.origin ? "*" : t.origin : (t.protocol.length > 4 ? t.protocol : window.location.protocol) + "//" + (t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host)
                    }(n.src) : r,
                    a = e.handshakeRetry,
                    u = void 0 === a ? {} : a;
                void 0 === t && (t = {});
                var d = N(t),
                    h = d[0],
                    y = d[1],
                    O = R(),
                    _ = O[0],
                    j = O[1],
                    w = B++,
                    x = n.contentWindow,
                    E = Object(c.a)(),
                    C = function(e, t) {
                        return L(q, w, e, t)
                    },
                    k = function(e) {
                        x.postMessage(e, o)
                    },
                    A = Object(m.a)(Object(g.a)(_)(s()((function(e) {
                        return e.owner === q && e.instance === w
                    }))(I()))),
                    M = z(E, A, C, k),
                    P = Object(m.a)(Object(g.a)(_)(T((function(e) {
                        return "@@livechat/4way" in e ? i()((function() {
                            return e.data
                        }))(S(A, k, C("handshake_echo"))) : Object(f.a)((function() {
                            return e
                        }))
                    }))(b()(1)(Object(p.a)(u.count || 5)(Object(v.a)(u.interval || 500)(S(A, k, C("handshake", y), null))))))),
                    U = D(M, E.emit, k, h);
                return l()(U)(T((function() {
                    return A
                }))(P)), {
                    api: M,
                    destroy: j,
                    handshake$: P
                }
            }
            var V = n(82);

            function F(e, t) {
                void 0 === e && (e = {});
                var n = (void 0 === t ? {} : t).handshakeTimeout,
                    r = void 0 === n ? 3e3 : n;
                var u, d = (u = function(t) {
                    var n, r = window.parent,
                        o = t.origin,
                        a = function(e) {
                            r.postMessage(e, o)
                        };
                    return a(Object(y.a)({}, t, {
                        type: "response",
                        data: {
                            error: !1,
                            result: (n = {}, n["@@livechat/4way"] = !0, n.data = N(e)[1], n)
                        }
                    })), b()(1)(i()((function(e) {
                        return e.type = "response", e.data = {
                            error: !1,
                            result: null
                        }, a(e), t
                    }))(s()((function(e) {
                        return e.owner === t.owner && e.instance === t.instance && "handshake_echo" === e.type
                    }))(I())))
                }, function(e) {
                    return function(e) {
                        return function(t, n) {
                            if (0 === t) {
                                var r, i = !1,
                                    o = [],
                                    a = function() {
                                        o.forEach((function(e) {
                                            e(2)
                                        }))
                                    };
                                e(0, (function(e, t) {
                                    if (0 === e) r = t, n(0, c);
                                    else if (1 === e) {
                                        var u = t,
                                            s = o.length;
                                        u(0, (function(e, t) {
                                            if (0 !== e)
                                                if (i) n(e, t);
                                                else {
                                                    var r = o.splice(s, 1);
                                                    i = !0, c(2), o = r, n(e, t)
                                                }
                                            else o.push(t)
                                        }))
                                    } else 2 === e && t ? (r = null, a(), n(2, t)) : 2 === e && (r = null, o.length || n(2))
                                }))
                            }

                            function c(e) {
                                2 === e && (a(), r && r(2))
                            }
                        }
                    }(i()(u)(e))
                })(T((function() {
                    return Object(v.a)(r)(Object(V.a)(50)(s()((function(e) {
                        return "handshake" === e.type
                    }))(I())))
                }))(b()(1)(Object(m.a)(s()((function() {
                    return "complete" === document.readyState
                }))(E()(Object(f.a)(a.T), Object(w.a)(document, "readystatechange")))))));
                return {
                    promise: Object(o.a)(i()((function(t) {
                        var n = t.instance,
                            r = t.owner,
                            i = t.origin,
                            o = N(e)[0],
                            a = window.parent,
                            u = Object(c.a)(),
                            d = function(e) {
                                a.postMessage(e, i)
                            },
                            f = s()((function(e) {
                                return e.owner === r
                            }))(I()),
                            p = z(u, f, (function(e, t) {
                                return L(r, n, e, t)
                            }), d, t.data),
                            m = D(p, u.emit, d, o);
                        return l()(m)(f), p
                    }))(d))
                }
            }
            var H = n(4),
                G = n(20),
                W = function(e, t) {
                    var n = document.createElement("iframe");
                    return e.appendChild(n), n.src = t, n
                };

            function Y(e, t) {
                var n, r = e.container,
                    a = e.url,
                    c = Object(H.a)(e, ["container", "url"]),
                    u = W(r, a),
                    s = function() {
                        Object(G.i)(u), n && n.destroy()
                    };
                return {
                    destroy: s,
                    frame: u,
                    promise: Object(o.a)(b()(1)(i()((function(e) {
                        var t = n.api;
                        return t.data = e, t.destroy = s, t.frame = u, t
                    }))(T((function() {
                        return (n = U(Object(y.a)({}, c, {
                            frame: u
                        }), t)).handshake$
                    }))(Object(w.a)(u, "load")))))
                }
            }
            var K = n(67),
                J = n.n(K);

            function X(e, t) {
                var n, r = e.onConnected,
                    a = Object(H.a)(e, ["onConnected"]),
                    c = !a.frame,
                    u = function(e) {
                        if (e.frame) return e.frame;
                        var t = e.container,
                            n = e.url;
                        return W(t, n)
                    }(a),
                    s = R(),
                    d = s[0],
                    f = s[1],
                    m = function() {
                        c && Object(G.i)(u), n ? n.destroy() : f()
                    };
                return l()((function(e) {
                    e.destroy = m, e.frame = u, r(e)
                }))(Object(g.a)(d)(Object(p.a)()(T((function() {
                    return J()((function(e, r) {
                        var c = function(e, t) {
                            var n = U(e, t),
                                r = n.api,
                                a = n.destroy,
                                c = n.handshake$;
                            return {
                                destroy: a,
                                promise: Object(o.a)(i()((function(e) {
                                    return r.data = e, r.destroy = a, r
                                }))(c))
                            }
                        }(Object(y.a)({}, a, {
                            frame: u
                        }), t);
                        return c.promise.then(e, r), n = c, c.destroy
                    }))
                }))(Object(w.a)(u, "load"))))), {
                    destroy: m,
                    frame: u
                }
            }
        },
        88: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return u
            }));
            var r = n(2),
                i = function() {
                    return Object(r.x)("webkit.messageHandlers.iosMobileWidget.postMessage", window) ? "ios" : !!Object(r.x)("androidMobileWidget.postMessage", window) && "android"
                },
                o = function(e) {
                    return window.androidMobileWidget.postMessage(JSON.stringify(e))
                },
                a = function(e) {
                    return window.webkit.messageHandlers.iosMobileWidget.postMessage(e)
                },
                c = function() {
                    var e = i();
                    return "android" === e ? o : "ios" === e ? a : null
                }(),
                u = function() {
                    return Boolean(i())
                };
            t.a = function(e) {
                c && (c({
                    messageType: "uiReady"
                }), e.on("add_event", (function(t) {
                    var n = t.event;
                    if ("message" === n.type) {
                        var r = e.getUser(n.author).name;
                        c({
                            messageType: "newMessage",
                            text: n.properties.text,
                            id: n.id,
                            timestamp: n.timestamp,
                            author: {
                                name: r
                            }
                        })
                    }
                })), e.on("mobile_wrapper_minimize_intent", (function() {
                    c({
                        messageType: "hideChatWindow"
                    })
                })))
            }
        },
        9: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getView", (function() {
                return u
            })), n.d(t, "getDefaultView", (function() {
                return s
            })), n.d(t, "getCurrentView", (function() {
                return d
            })), n.d(t, "getConnectionState", (function() {
                return l
            })), n.d(t, "getEvent", (function() {
                return m
            })), n.d(t, "getEventByServerId", (function() {
                return h
            })), n.d(t, "hasEvent", (function() {
                return b
            })), n.d(t, "hasEventByServerId", (function() {
                return g
            })), n.d(t, "getIndexedEvents", (function() {
                return v
            })), n.d(t, "getEvents", (function() {
                return y
            })), n.d(t, "getChat", (function() {
                return O
            })), n.d(t, "getChatByServerId", (function() {
                return _
            })), n.d(t, "hasChat", (function() {
                return j
            })), n.d(t, "getChats", (function() {
                return w
            })), n.d(t, "getUsers", (function() {
                return x
            })), n.d(t, "getSessionUser", (function() {
                return E
            })), n.d(t, "getUser", (function() {
                return C
            })), n.d(t, "getUserByServerId", (function() {
                return I
            })), n.d(t, "hasUser", (function() {
                return T
            })), n.d(t, "getTimeline", (function() {
                return k
            })), n.d(t, "getChatList", (function() {
                return S
            })), n.d(t, "getSessionUserId", (function() {
                return z
            })), n.d(t, "getLastDeliveredEvent", (function() {
                return A
            })), n.d(t, "getLastSeenEvent", (function() {
                return M
            })), n.d(t, "getLastEvent", (function() {
                return R
            })), n.d(t, "getUnseenCount", (function() {
                return N
            })), n.d(t, "getLastSeenAgentEvent", (function() {
                return q
            })), n.d(t, "getParticipants", (function() {
                return B
            })), n.d(t, "localize", (function() {
                return U
            })), n.d(t, "getApplicationState", (function() {
                return V
            }));
            var r = n(1),
                i = n(99),
                o = n(2),
                a = n(85),
                c = function(e, t) {
                    return t
                },
                u = function(e, t) {
                    var n = t.replace(/\//gi, ".");
                    return Object(o.x)(n, e.views)
                },
                s = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return Object(o.x)(n + "._default", e.views)
                },
                d = function(e) {
                    return e.views.current
                },
                l = function(e) {
                    return e.session.connectionState
                },
                f = function(e) {
                    return e.entities.chats.byIds
                },
                p = function(e, t) {
                    return f(e)[t]
                },
                m = function(e, t, n) {
                    return p(e, t).events.byIds[n]
                },
                h = function(e, t, n) {
                    return m(e, t, p(e, t).events.serverIdsMapping[n])
                },
                b = function(e, t, n) {
                    return !!m(e, t, n)
                },
                g = function(e, t, n) {
                    return !!h(e, t, n)
                },
                v = function(e, t) {
                    return p(e, t).events.byIds
                },
                y = Object(i.a)([function(e, t) {
                    return p(e, t).events.orderedIds
                }, v], (function(e, t) {
                    return e.map((function(e) {
                        return t[e]
                    }))
                }))(c),
                O = Object(i.a)([p, y], (function(e, t) {
                    return Object(r.a)({}, e, {
                        events: t
                    })
                }))(c),
                _ = function(e, t) {
                    return O(e, e.entities.chats.serverIdsMapping[t])
                },
                j = function(e, t) {
                    return !!p(e, t)
                },
                w = function(e) {
                    return Object(o.N)((function(t) {
                        var n = t.id;
                        return O(e, n)
                    }), f(e))
                },
                x = function(e) {
                    return e.entities.users.byIds
                },
                E = function(e) {
                    return x(e)[function(e) {
                        return e.session.id
                    }(e)]
                },
                C = function(e, t) {
                    return x(e)[t]
                },
                I = function(e, t) {
                    return C(e, e.entities.users.serverIdsMapping[t])
                },
                T = function(e, t) {
                    return !!C(e, t)
                },
                k = function(e, t) {
                    return e.views.Chat[t].timeline
                },
                S = function(e) {
                    return e.views.ChatList
                },
                z = function(e) {
                    return E(e).id
                },
                A = Object(i.a)([y, z], (function(e, t) {
                    return Object(o.q)((function(e) {
                        var n = e.delivered,
                            r = e.author;
                        return n && r === t
                    }), e)
                }))(c),
                M = Object(i.a)([y, z], (function(e, t) {
                    return Object(o.q)((function(e) {
                        var n = e.seen,
                            r = e.author;
                        return n && r === t
                    }), e)
                }))(c),
                R = function(e, t) {
                    return Object(o.K)(y(e, t))
                },
                L = {
                    boosters: !0,
                    form: !0,
                    system_message: !0
                },
                P = Object(a.createSelector)([y, function(e) {
                    return E(e).id
                }], (function(e, t) {
                    return Object(o.r)((function(e) {
                        var n = e.author === t && "message" === e.type,
                            r = !!e.properties && "file" === e.properties.serverType,
                            i = !0 === e.seen && !L[e.type] && e.serverId;
                        return n && !r || i
                    }), e)
                })),
                D = function(e, t) {
                    return e.author !== t && !e.seen && !L[e.type]
                },
                N = function(e, t) {
                    var n = P(e, t),
                        r = E(e).id;
                    return y(e, t).slice(n + 1).filter((function(e) {
                        return D(e, r)
                    })).length
                },
                q = function(e, t) {
                    var n = P(e, t);
                    if (-1 === n) return null;
                    var r = E(e).id,
                        i = y(e, t).slice(n + 1);
                    return Object(o.n)((function(e) {
                        return D(e, r)
                    }), i)
                },
                B = Object(i.a)([function(e, t) {
                    return p(e, t).participants
                }, x], (function(e, t) {
                    return e.map((function(e) {
                        return t[e]
                    }))
                }))(c),
                U = function(e, t, n) {
                    var r = e.localization[t];
                    return n ? Object.keys(n).reduce((function(e, t) {
                        return e.replace(new RegExp("%" + t + "%", "g"), n[t])
                    }), r) : r
                },
                V = function(e, t) {
                    return void 0 === t ? e.application : e.application[t]
                }
        },
        90: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                var t = e.min,
                    n = void 0 === t ? 1e3 : t,
                    r = e.max,
                    i = void 0 === r ? 5e3 : r,
                    o = e.jitter,
                    a = void 0 === o ? .5 : o,
                    c = 0;
                return {
                    duration: function() {
                        var e = n * Math.pow(2, c++);
                        if (a) {
                            var t = Math.random(),
                                r = Math.floor(t * a * e);
                            e = 0 === (1 & Math.floor(10 * t)) ? e - r : e + r
                        }
                        return 0 | Math.min(e, i)
                    },
                    reset: function() {
                        c = 0
                    }
                }
            }
        },
        92: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return Pe
            })), n.d(t, "b", (function() {
                return At
            })), n.d(t, "a", (function() {
                return Xt
            }));
            var r = {};
            n.r(r), n.d(r, "CHAT_DEACTIVATED", (function() {
                return L
            })), n.d(r, "CHAT_PROPERTIES_DELETED", (function() {
                return P
            })), n.d(r, "CHAT_PROPERTIES_UPDATED", (function() {
                return D
            })), n.d(r, "CHAT_TRANSFERRED", (function() {
                return N
            })), n.d(r, "CUSTOMER_DISCONNECTED", (function() {
                return q
            })), n.d(r, "CUSTOMER_PAGE_UPDATED", (function() {
                return B
            })), n.d(r, "CUSTOMER_SIDE_STORAGE_UPDATED", (function() {
                return U
            })), n.d(r, "CUSTOMER_UPDATED", (function() {
                return V
            })), n.d(r, "EVENT_PROPERTIES_DELETED", (function() {
                return F
            })), n.d(r, "EVENT_PROPERTIES_UPDATED", (function() {
                return H
            })), n.d(r, "EVENT_UPDATED", (function() {
                return G
            })), n.d(r, "EVENTS_MARKED_AS_SEEN", (function() {
                return W
            })), n.d(r, "GREETING_ACCEPTED", (function() {
                return Y
            })), n.d(r, "GREETING_CANCELED", (function() {
                return K
            })), n.d(r, "INCOMING_CHAT", (function() {
                return J
            })), n.d(r, "INCOMING_EVENT", (function() {
                return X
            })), n.d(r, "INCOMING_GREETING", (function() {
                return Z
            })), n.d(r, "INCOMING_MULTICAST", (function() {
                return Q
            })), n.d(r, "INCOMING_RICH_MESSAGE_POSTBACK", (function() {
                return $
            })), n.d(r, "INCOMING_TYPING_INDICATOR", (function() {
                return ee
            })), n.d(r, "QUEUE_POSITION_UPDATED", (function() {
                return te
            })), n.d(r, "THREAD_PROPERTIES_DELETED", (function() {
                return ne
            })), n.d(r, "THREAD_PROPERTIES_UPDATED", (function() {
                return re
            })), n.d(r, "USER_ADDED_TO_CHAT", (function() {
                return ie
            })), n.d(r, "USER_REMOVED_FROM_CHAT", (function() {
                return oe
            }));
            var i = {};
            n.r(i), n.d(i, "CONNECTING", (function() {
                return rt
            })), n.d(i, "OPEN", (function() {
                return it
            })), n.d(i, "CLOSED", (function() {
                return ot
            }));
            var o = n(1),
                a = n(4),
                c = n(77),
                u = Object(c.b)() ? window.localStorage : c.a,
                s = {
                    setItem: function(e, t) {
                        return new Promise((function(n) {
                            return n(u.setItem(e, t))
                        }))
                    },
                    getItem: function(e) {
                        return new Promise((function(t) {
                            return t(u.getItem(e))
                        }))
                    },
                    removeItem: function(e) {
                        return new Promise((function(t) {
                            return t(u.removeItem(e))
                        }))
                    }
                },
                d = n(20),
                l = n(11),
                f = function(e, t, n) {
                    return "" + ("production" === n ? "https://accounts.livechatinc.com" : "https://accounts.livechatinc.com".replace("accounts.", "accounts." + n + ".")) + function(e) {
                        var t = e.uniqueGroups,
                            n = e.licenseId,
                            r = e.groupId;
                        return (t ? "/licence/g" + n + "_" + r : "") + "/customer"
                    }(e) + "?" + Object(l.a)(function(e, t) {
                        var n = e.clientId,
                            r = e.licenseId;
                        return {
                            license_id: String(r),
                            flow: "button",
                            response_type: "token",
                            client_id: n,
                            redirect_uri: t,
                            post_message_uri: t,
                            state: "@livechat/customer-auth"
                        }
                    }(e, t))
                },
                p = function(e) {
                    var t = e.code,
                        n = e.message,
                        r = new Error(n);
                    return r.code = t, r
                },
                m = function(e, t) {
                    if ("identity_exception" in e) throw p({
                        code: "SSO_IDENTITY_EXCEPTION",
                        message: e.identity_exception
                    });
                    if ("oauth_exception" in e) throw p({
                        code: "SSO_OAUTH_EXCEPTION",
                        message: e.oauth_exception
                    });
                    return {
                        accessToken: e.access_token,
                        entityId: e.entity_id,
                        expiresIn: 1e3 * e.expires_in,
                        tokenType: e.token_type,
                        creationDate: Date.now(),
                        licenseId: t
                    }
                },
                h = function(e, t) {
                    var n = e.licenseId,
                        r = function(e) {
                            return "production" === e ? "https://accounts.livechatinc.com" : "https://accounts.livechatinc.com".replace("accounts.", "accounts." + e + ".")
                        }(t);
                    return new Promise((function(i, o) {
                        var a = function(e, t) {
                                var n = document.createElement("iframe");
                                return n.style.display = "none", n.setAttribute("src", f(e, Object(l.e)(String(window.location)) + window.location.pathname, t)), n
                            }(e, t),
                            c = function() {
                                Object(d.i)(a), window.removeEventListener("message", s, !1)
                            },
                            u = setTimeout((function() {
                                c(), o(p({
                                    message: "Request timed out.",
                                    code: "REQUEST_TIMEOUT"
                                }))
                            }), 15e3),
                            s = function(e) {
                                var t = e.origin,
                                    a = e.data;
                                if (t === r && function(e) {
                                        return e && "@livechat/customer-auth" === e.state
                                    }(a)) {
                                    clearTimeout(u), c();
                                    try {
                                        i(m(a, n))
                                    } catch (s) {
                                        o(s)
                                    }
                                }
                            };
                        window.addEventListener("message", s, !1), Object(d.f)().then((function(e) {
                            e.appendChild(a)
                        }))
                    }))
                },
                b = function(e) {
                    var t = e.licenseId,
                        n = e.clientId;
                    if ("number" !== typeof t || "string" !== typeof n) throw new Error("You need to pass valid configuration object: { licenseId, clientId }.")
                },
                g = function(e, t) {
                    b(e);
                    var n = "@@lc_auth_token:" + e.licenseId + (e.uniqueGroups ? ":" + e.groupId : ""),
                        r = null,
                        i = null,
                        o = s.getItem(n).then((function(e) {
                            null !== o && (o = null, e && (i = JSON.parse(e)))
                        })),
                        a = function() {
                            return r = h(e, t).then((function(e) {
                                return r = null, s.setItem(n, JSON.stringify(e)), i = e, e
                            }), (function(e) {
                                throw r = null, e
                            }))
                        };
                    return {
                        getFreshToken: a,
                        getToken: function e() {
                            return r || (i && ! function(e) {
                                var t = e.creationDate,
                                    n = e.expiresIn;
                                return Date.now() >= t + n
                            }(i) ? Promise.resolve(i) : o ? o.then(e) : a())
                        },
                        hasToken: function e() {
                            return o ? o.then(e) : Promise.resolve(!!i)
                        },
                        invalidate: function() {
                            return i = null, o = null, s.removeItem(n)
                        }
                    }
                },
                v = n(28),
                y = n(2),
                O = n(63),
                _ = n(146),
                j = n(16);

            function w(e) {
                var t = function(e, t) {
                    if ("object" !== typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === typeof t ? t : String(t)
            }
            var x = function(e) {
                    return e.connection.status
                },
                E = function(e, t) {
                    return e.requests[t]
                },
                C = function(e) {
                    return e.users.self.id
                },
                I = function(e, t) {
                    var n = e.chats[t];
                    return !!n && n.active
                },
                T = function(e) {
                    return "connected" === x(e)
                },
                k = function(e) {
                    var t = e.region;
                    return "https://api" + (t ? "-" + t : "") + function(e) {
                        var t = e.licenseId,
                            n = e.env;
                        return 1520 === t ? ".staging" : "production" === n ? "" : "." + n
                    }(e) + ".livechatinc.com"
                },
                S = function(e) {
                    return k(e) + "/v3.3/customer"
                },
                z = function(e, t) {
                    var n = t.id,
                        r = e.requests,
                        i = (r[n], Object(a.a)(r, [n].map(w)));
                    return Object(o.a)({}, e, {
                        requests: i
                    })
                },
                A = function(e, t) {
                    return Object(o.a)({}, t, {
                        connection: Object(o.a)({}, t.connection, {
                            status: e
                        })
                    })
                };

            function M(e) {
                var t = y.B,
                    n = Object(_.a)(),
                    r = Object(O.d)(function(e) {
                        var t;
                        return Object(j.h)(e, ((t = {}).change_region = function(e, t) {
                            var n = t.region;
                            return Object(o.a)({}, e, {
                                region: n
                            })
                        }, t.destroy = function(e) {
                            return A("destroyed", e)
                        }, t.login_success = function(e) {
                            return A("connected", e)
                        }, t.pause_connection = function(e) {
                            return A("paused", e)
                        }, t.request_failed = z, t.response_received = z, t.push_response_received = z, t.send_request = function(e, t) {
                            var n, r = t.promise,
                                i = t.resolve,
                                a = t.reject,
                                c = t.id,
                                u = t.request;
                            return Object(o.a)({}, e, {
                                requests: Object(o.a)({}, e.requests, (n = {}, n[c] = {
                                    id: c,
                                    promise: r,
                                    resolve: i,
                                    reject: a,
                                    request: u
                                }, n))
                            })
                        }, t.set_chat_active = function(e, t) {
                            var n, r = t.id,
                                i = t.active;
                            return Object(o.a)({}, e, {
                                chats: Object(o.a)({}, e.chats, (n = {}, n[r] = Object(o.a)({}, e.chats[r], {
                                    active: i
                                }), n))
                            })
                        }, t.set_self_id = function(e, t) {
                            return Object(o.a)({}, e, {
                                users: Object(o.a)({}, e.users, {
                                    self: Object(o.a)({}, e.users.self, {
                                        id: t.id
                                    })
                                })
                            })
                        }, t.socket_disconnected = function(e) {
                            var t = x(e);
                            var n = A("disconnected" === t ? "disconnected" : "reconnecting", e);
                            return Object(o.a)({}, n, {
                                requests: {}
                            })
                        }, t.update_customer_page = function(e, t) {
                            return Object(o.a)({}, e, {
                                page: Object(o.a)({}, e.page, t)
                            })
                        }, t))
                    }(function(e) {
                        var t = e.application,
                            n = void 0 === t ? {} : t,
                            r = e.licenseId,
                            i = e.groupId,
                            a = void 0 === i ? null : i,
                            c = e.env,
                            u = e.page,
                            s = void 0 === u ? null : u,
                            d = e.region,
                            l = void 0 === d ? null : d,
                            f = e.referrer,
                            p = void 0 === f ? null : f,
                            m = e.uniqueGroups,
                            h = void 0 !== m && m,
                            b = e.mobile,
                            g = void 0 !== b && b;
                        return {
                            application: Object(o.a)({}, n, {
                                name: "chat_widget",
                                version: "0eb000a235cac2f8a2620e1c176c569a0f4c725d"
                            }),
                            licenseId: r,
                            env: c,
                            groupId: a,
                            chats: {},
                            connection: {
                                status: "disconnected"
                            },
                            page: s,
                            region: l,
                            referrer: p,
                            requests: {},
                            users: {
                                self: {
                                    id: null,
                                    type: "customer"
                                },
                                others: {}
                            },
                            uniqueGroups: h,
                            mobile: g
                        }
                    }(e)), t(Object(O.a)(n)));
                return r.addSideEffectsHandler = n.add, r
            }

            function R(e) {
                var t = e.message,
                    n = e.code,
                    r = new Error(t);
                return r.code = n, r
            }
            var L = "chat_deactivated",
                P = "chat_properties_deleted",
                D = "chat_properties_updated",
                N = "chat_transferred",
                q = "customer_disconnected",
                B = "customer_page_updated",
                U = "customer_side_storage_updated",
                V = "customer_updated",
                F = "event_properties_deleted",
                H = "event_properties_updated",
                G = "event_updated",
                W = "events_marked_as_seen",
                Y = "greeting_accepted",
                K = "greeting_canceled",
                J = "incoming_chat",
                X = "incoming_event",
                Z = "incoming_greeting",
                Q = "incoming_multicast",
                $ = "incoming_rich_message_postback",
                ee = "incoming_typing_indicator",
                te = "queue_position_updated",
                ne = "thread_properties_deleted",
                re = "thread_properties_updated",
                ie = "user_added_to_chat",
                oe = "user_removed_from_chat",
                ae = function(e) {
                    var t = {};
                    return "string" === typeof e.customId && (t.custom_id = e.customId), Object(y.G)(e.properties) && (t.properties = e.properties), t
                },
                ce = function(e) {
                    switch (e.type) {
                        case "message":
                            var t = Object(o.a)({}, ae(e), {
                                type: e.type,
                                text: e.text
                            });
                            return e.postback && (t.postback = {
                                id: e.postback.id,
                                thread_id: e.postback.threadId,
                                event_id: e.postback.eventId,
                                type: e.postback.type,
                                value: e.postback.value
                            }), t;
                        case "file":
                            return Object(o.a)({}, ae(e), {
                                type: e.type,
                                url: e.url,
                                alternative_text: e.alternativeText
                            });
                        case "filled_form":
                            return Object(o.a)({}, ae(e), {
                                type: e.type,
                                form_id: e.formId,
                                fields: e.fields.map((function(e) {
                                    switch (e.type) {
                                        case "group_chooser":
                                            if (!e.answer) return e;
                                            var t = e.answer,
                                                n = t.groupId,
                                                r = Object(a.a)(t, ["groupId"]);
                                            return Object(o.a)({}, e, {
                                                answer: Object(o.a)({}, r, {
                                                    group_id: n
                                                })
                                            });
                                        default:
                                            return e
                                    }
                                }))
                            });
                        case "system_message":
                            var n = Object(o.a)({}, ae(e), {
                                type: e.type,
                                text: e.text,
                                system_message_type: e.systemMessageType
                            });
                            return e.recipients && (n.recipients = e.recipients), n;
                        case "custom":
                            var r = Object(o.a)({}, ae(e), {
                                type: e.type
                            });
                            return e.content && (r.content = e.content), r
                    }
                },
                ue = function(e) {
                    var t = e.active,
                        n = void 0 === t || t,
                        r = e.chat,
                        i = e.continuous,
                        o = {
                            active: n,
                            chat: {}
                        };
                    if ("boolean" === typeof i && (o.continuous = i), !r) return o;
                    var a = r.access,
                        c = r.thread,
                        u = r.properties;
                    return a && a.groupIds && (o.chat.access = {
                        group_ids: a.groupIds
                    }), u && (o.chat.properties = u), c && (o.chat.thread = function(e) {
                        var t = {},
                            n = e.events,
                            r = e.properties;
                        return n && (t.events = n.map(ce)), r && (t.properties = r), t
                    }(c)), o
                },
                se = function(e) {
                    return Object(y.sb)(e).map((function(e) {
                        var t, n = e[0],
                            r = e[1];
                        return (t = {})[n] = r, t
                    }))
                },
                de = function(e) {
                    var t = Object(y.db)(["avatar", "name", "email"], e);
                    return e.sessionFields && (t.session_fields = se(e.sessionFields)), t
                },
                le = function(e) {
                    return {
                        type: "destroy",
                        payload: {
                            reason: e
                        }
                    }
                },
                fe = function(e) {
                    return {
                        type: "pause_connection",
                        payload: {
                            reason: e
                        }
                    }
                },
                pe = function(e) {
                    return void 0 === e && (e = !1), {
                        type: "prefetch_token",
                        payload: {
                            fresh: e
                        }
                    }
                },
                me = function(e) {
                    return {
                        type: "reconnect",
                        payload: {
                            delay: e
                        }
                    }
                },
                he = function(e, t, n) {
                    return {
                        type: "send_request",
                        payload: Object(o.a)({
                            request: {
                                action: e,
                                payload: t
                            }
                        }, n && {
                            source: n
                        })
                    }
                },
                be = function(e, t) {
                    return {
                        type: "set_chat_active",
                        payload: {
                            id: e,
                            active: t
                        }
                    }
                },
                ge = function(e) {
                    return {
                        type: "set_self_id",
                        payload: {
                            id: e
                        }
                    }
                },
                ve = n(62),
                ye = function(e, t) {
                    t.payload.id = Object(y.w)(e.getState().requests);
                    var n = Object(ve.a)(),
                        r = n.resolve,
                        i = n.reject,
                        o = n.promise;
                    return t.payload.promise = o, t.payload.resolve = r, t.payload.reject = i, e.dispatch(t), o
                },
                Oe = n(70),
                _e = n(90),
                je = function(e) {
                    var t = e.getState(),
                        n = t.licenseId,
                        r = t.groupId;
                    return "side_storage_" + n + (t.uniqueGroups ? ":" + r : "")
                },
                we = function(e) {
                    return s.getItem(je(e)).catch(y.T).then((function(e) {
                        return JSON.parse(e || "{}")
                    })).catch((function() {
                        return {}
                    }))
                },
                xe = function(e, t, n) {
                    return ye(e, he(t, n, "login"))
                };

            function Ee(e, t) {
                var n, r, i = null,
                    a = {
                        min: 300,
                        max: 6e4,
                        jitter: .3
                    },
                    c = Object(_e.a)(a),
                    u = Object(_e.a)(Object(o.a)({}, a, {
                        min: 1e3
                    })),
                    s = c,
                    d = function(e) {
                        return n.dispatch(le(e))
                    },
                    l = function() {
                        return n.dispatch(me(s.duration()))
                    },
                    f = function() {
                        return Promise.all([e.getToken(), we(n)])
                    },
                    p = function(e) {
                        var t = e[0],
                            r = e[1],
                            i = C(n.getState());
                        if (null === i) n.dispatch(ge(t.entityId));
                        else if (i !== t.entityId) {
                            var o = new Error("Identity has changed.");
                            throw o.code = "IDENTITY_MISMATCH", o
                        }
                        return [t, r]
                    },
                    m = function(e) {
                        var r, o = e[0],
                            a = e[1],
                            c = n.getState(),
                            u = c.application,
                            s = c.groupId,
                            d = c.page,
                            l = c.referrer,
                            f = c.mobile,
                            p = {
                                token: o.tokenType + " " + o.accessToken,
                                customer: "function" === typeof t ? de(t()) : {},
                                customer_side_storage: a,
                                is_mobile: f,
                                application: Object(y.ab)(["name", "version"], u)
                            };
                        return "number" === typeof s && (p.group_id = s), u.channelType && (p.application.channel_type = u.channelType), null !== d && (i = d, p.customer_page = d), null !== l && (p.referrer = l), Promise.race([xe(n, "login", p), (r = 15e3, new Promise((function(e) {
                            setTimeout(e, r)
                        }))).then((function() {
                            return Promise.reject(R({
                                message: "Request timed out.",
                                code: "REQUEST_TIMEOUT"
                            }))
                        }))])
                    };
                return {
                    sendLogin: function(t) {
                        var o;
                        n = t, null == (o = r) || o.cancel(), r = function(e, t, n) {
                            var r = e.slice(0),
                                i = !1;
                            return function e(o) {
                                var a = r.shift();
                                Object(Oe.a)((function() {
                                    return a(o)
                                })).then((function(n) {
                                    i || (r.length ? e(n) : t(n))
                                }), (function(e) {
                                    i || n(e)
                                }))
                            }(), {
                                cancel: function() {
                                    i = !0
                                }
                            }
                        }([f, p, m], (function(e) {
                            r = null, c.reset(), u.reset(), s = c,
                                function() {
                                    var e = n.getState().page;
                                    i !== e && xe(n, "update_customer_page", e).catch(y.T), i = null
                                }(), n.dispatch({
                                    type: "login_success",
                                    payload: e
                                })
                        }), (function(t) {
                            switch (r = null, t.code) {
                                case "AUTHENTICATION":
                                    return e.getFreshToken(), void l();
                                case "CONNECTION_LOST":
                                case "MISDIRECTED_CONNECTION":
                                case "SDK_DESTROYED":
                                    return;
                                case "SSO_IDENTITY_EXCEPTION":
                                case "SSO_OAUTH_EXCEPTION":
                                    return "server_error" === t.message || "temporarily_unavailable" === t.message ? void l() : void d(t.message);
                                case "USERS_LIMIT_REACHED":
                                    return void n.dispatch(fe(t.code.toLowerCase()));
                                case "IDENTITY_MISMATCH":
                                case "CUSTOMER_BANNED":
                                case "WRONG_PRODUCT_VERSION":
                                    return void d(t.code.toLowerCase());
                                case "SERVICE_TEMPORARILY_UNAVAILABLE":
                                    return s = u, void l();
                                default:
                                    return void l()
                            }
                        }))
                    },
                    cancel: function() {
                        var e;
                        null == (e = r) || e.cancel()
                    }
                }
            }
            var Ce, Ie = n(60),
                Te = function(e, t, n) {
                    return t.getToken().then((function(t) {
                        var r = e.getState();
                        null === C(r) && e.dispatch(ge(t.entityId));
                        var i = r.page;
                        if (i && i.url) {
                            var o = Object(l.a)({
                                    license_id: r.licenseId
                                }),
                                a = {
                                    session_fields: se(n || {}),
                                    group_id: r.groupId || 0,
                                    page_url: i.url
                                };
                            return Object(Ie.a)(S(r) + "/action/check_goals?" + o, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: t.tokenType + " " + t.accessToken
                                },
                                body: JSON.stringify(a)
                            }).then((function() {}))
                        }
                    }))
                },
                ke = function(e, t) {
                    var n = e.getState,
                        r = e.dispatch,
                        i = function(e) {
                            return e.requests
                        }(n());
                    r({
                        type: "fail_all_requests",
                        payload: {
                            rejects: Object.keys(i).map((function(e) {
                                return i[e].reject
                            })),
                            reason: t
                        }
                    })
                },
                Se = function(e, t, n) {
                    var r = e.getState,
                        i = e.dispatch,
                        o = t.payload.id;
                    i({
                        type: "request_failed",
                        payload: {
                            id: o,
                            reject: r().requests[o].reject,
                            error: n
                        }
                    })
                },
                ze = Object.freeze({
                    success: !0
                }),
                Ae = function(e, t) {
                    var n = {
                        id: t.id,
                        authorId: t.author_id,
                        createdAt: t.created_at,
                        threadId: e,
                        properties: t.properties || {}
                    };
                    return void 0 !== t.custom_id && (n.customId = t.custom_id), n
                },
                Me = function(e, t) {
                    var n, r, i, o, a;
                    t.height > t.width ? (r = "height", i = "width", o = t.height, a = t.width) : (r = "width", i = "height", o = t.width, a = t.height);
                    var c = e / o;
                    return (n = {})[r] = Math.ceil(Math.min(o, e)), n[i] = Math.ceil(Math.min(c * a, a)), n
                },
                Re = function(e, t) {
                    return void 0 !== t.width && void 0 !== t.height ? function(e, t) {
                        return Object(o.a)({}, Ae(e, t), {
                            type: "file",
                            contentType: t.content_type,
                            url: t.url,
                            name: t.name,
                            width: t.width,
                            height: t.height,
                            thumbnails: {
                                default: Object(o.a)({
                                    url: t.thumbnail_url
                                }, Me(300, t)),
                                high: Object(o.a)({
                                    url: t.thumbnail2x_url
                                }, Me(600, t))
                            }
                        }, t.alternative_text && {
                            alternativeText: t.alternative_text
                        })
                    }(e, t) : Object(o.a)({}, Ae(e, t), {
                        type: "file",
                        contentType: t.content_type,
                        url: t.url,
                        name: t.name
                    })
                },
                Le = function(e) {
                    var t = {};
                    if ("string" === typeof e.title && (t.title = e.title), "string" === typeof e.subtitle && (t.subtitle = e.subtitle), e.image) {
                        var n = e.image;
                        t.image = Object(o.a)({
                            url: n.url,
                            name: n.name
                        }, n.alternative_text && {
                            alternativeText: n.alternative_text
                        })
                    }
                    return e.buttons && (t.buttons = e.buttons.map((function(e) {
                        switch (e.type) {
                            case "message":
                            case "phone":
                                return {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    value: e.value,
                                    role: e.role || "default"
                                };
                            case "cancel":
                                return {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    role: e.role || "default"
                                };
                            case "url":
                                var t = {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    value: e.value,
                                    role: e.role || "default"
                                };
                                return e.target && (t.target = e.target), t;
                            case "webview":
                                var n = {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    value: e.value,
                                    role: e.role || "default"
                                };
                                return "string" === typeof e.webview_height && (n.webviewHeight = e.webview_height), n;
                            default:
                                return {
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    role: e.role || "default"
                                }
                        }
                    }))), t
                },
                Pe = function(e, t) {
                    switch (t.template_id) {
                        case "cards":
                        case "quick_replies":
                        case "sticker":
                            return Object(o.a)({}, Ae(e, t), {
                                type: "rich_message",
                                template: t.template_id,
                                elements: t.elements.map(Le)
                            });
                        default:
                            return null
                    }
                },
                De = function(e, t) {
                    switch (t.type) {
                        case "file":
                            return Re(e, t);
                        case "filled_form":
                            return function(e, t) {
                                return Object(o.a)({}, Ae(e, t), {
                                    type: "filled_form",
                                    formId: t.form_id,
                                    fields: t.fields.map((function(e) {
                                        switch (e.type) {
                                            case "group_chooser":
                                                if (!e.answer) return e;
                                                var t = e.answer,
                                                    n = t.group_id,
                                                    r = Object(a.a)(t, ["group_id"]);
                                                return Object(o.a)({}, e, {
                                                    answer: Object(o.a)({}, r, {
                                                        groupId: n
                                                    })
                                                });
                                            default:
                                                return e
                                        }
                                    }))
                                })
                            }(e, t);
                        case "message":
                            return function(e, t) {
                                return Object(o.a)({}, Ae(e, t), {
                                    type: "message",
                                    text: t.text
                                })
                            }(e, t);
                        case "rich_message":
                            return Pe(e, t);
                        case "system_message":
                            return function(e, t) {
                                var n = Object(o.a)({}, Ae(e, Object(o.a)({}, t, {
                                    author_id: "system"
                                })), {
                                    type: "system_message",
                                    text: t.text,
                                    systemMessageType: t.system_message_type
                                });
                                return t.text_vars && (n.textVars = t.text_vars), n
                            }(e, t);
                        case "custom":
                            return function(e, t) {
                                return Object(o.a)({}, Ae(e, t), {
                                    type: "custom"
                                }, t.content && {
                                    content: t.content
                                })
                            }(e, t);
                        default:
                            return null
                    }
                },
                Ne = function(e) {
                    return {
                        id: e.id,
                        addon: e.addon || null,
                        uniqueId: e.unique_id,
                        displayedFirstTime: e.displayed_first_time,
                        accepted: e.accepted || !1,
                        subtype: e.subtype || "greeting",
                        event: De(null, e.event),
                        agent: {
                            id: e.agent.id,
                            name: e.agent.name,
                            avatar: e.agent.avatar,
                            jobTitle: e.agent.job_title,
                            isBot: e.agent.is_bot || !1
                        }
                    }
                },
                qe = function(e) {
                    return void 0 === e && (e = {}), e.group_ids ? {
                        groupIds: e.group_ids
                    } : {}
                },
                Be = function(e) {
                    return Object(y.N)((function(e) {
                        return e.events_seen_up_to ? e.events_seen_up_to : null
                    }), Object(y.I)("id", e))
                },
                Ue = function(e, t) {
                    var n = t.properties || {};
                    return {
                        id: t.id,
                        chatId: e,
                        active: t.active,
                        access: qe(t.access),
                        createdAt: t.created_at,
                        userIds: t.user_ids,
                        events: t.events.map((function(e) {
                            return De(t.id, e)
                        })).filter(Boolean),
                        properties: n,
                        previousThreadId: t.previous_thread_id || null,
                        nextThreadId: t.next_thread_id || null,
                        queue: t.queue ? Ke(t.queue) : null
                    }
                },
                Ve = function(e) {
                    return {
                        id: e.id,
                        access: qe(e.access),
                        users: e.users.map(Je),
                        properties: e.properties || {},
                        eventsSeenUpToMap: Be(e.users)
                    }
                },
                Fe = function(e) {
                    var t = Object(y.db)(["avatar", "email", "name"], e);
                    return e.session_fields && (t.sessionFields = e.session_fields.reduce((function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = t[n], e
                    }), {})), t
                },
                He = function(e) {
                    var t = Fe(e);
                    return Object(o.a)({
                        id: e.id,
                        type: "customer"
                    }, t, {
                        sessionFields: t.sessionFields || {}
                    })
                },
                Ge = function(e) {
                    var t = e.statistics;
                    return Object(o.a)({}, He(e), {
                        statistics: {
                            chatsCount: t.chats_count,
                            threadsCount: t.threads_count,
                            visitsCount: t.visits_count,
                            pageViewsCount: t.page_views_count,
                            greetingsShownCount: t.greetings_shown_count,
                            greetingsAcceptedCount: t.greetings_accepted_count
                        }
                    })
                },
                We = function(e) {
                    var t = e.agent,
                        n = e.queue;
                    return {
                        agent: {
                            id: t.id,
                            type: "agent",
                            name: t.name,
                            avatar: t.avatar,
                            jobTitle: t.job_title,
                            isBot: t.is_bot
                        },
                        queue: n
                    }
                },
                Ye = function(e) {
                    return {
                        position: e.position,
                        waitTime: e.wait_time
                    }
                },
                Ke = function(e) {
                    return Object(o.a)({}, Ye(e), {
                        queuedAt: e.queued_at
                    })
                },
                Je = function(e) {
                    return "customer" === e.type ? (n = e, Object(o.a)({}, He(n), {
                        present: n.present
                    })) : {
                        id: (t = e).id,
                        type: "agent",
                        name: t.name,
                        avatar: t.avatar,
                        jobTitle: t.job_title,
                        present: t.present
                    };
                    var t, n
                },
                Xe = ((Ce = {}).CONNECTION_LOST = "Connection lost.", Ce.MISDIRECTED_CONNECTION = "Connected to wrong region.", Ce),
                Ze = function(e, t) {
                    var n = e.getState();
                    switch (t.type) {
                        case "push_response_received":
                        case "push_received":
                            switch (t.payload.action) {
                                case L:
                                    return void e.dispatch(be(t.payload.payload.chatId, !1));
                                case J:
                                    return void e.dispatch(be(t.payload.payload.chat.id, !0));
                                default:
                                    return
                            }
                        case "response_received":
                            switch (t.payload.action) {
                                case "list_chats":
                                    return void t.payload.payload.chatsSummary.filter((function(e) {
                                        var t = e.id,
                                            r = e.active;
                                        return I(n, t) !== r
                                    })).forEach((function(t) {
                                        var n = t.id,
                                            r = t.active;
                                        e.dispatch(be(n, r))
                                    }));
                                default:
                                    return
                            }
                    }
                },
                Qe = function(e, t) {
                    t.forEach((function(t) {
                        if ("present" in t) {
                            t.present;
                            var n = Object(a.a)(t, ["present"]);
                            e("user_data", n)
                        } else if ("customer" !== t.type) e("user_data", t);
                        else {
                            t.statistics;
                            var r = Object(a.a)(t, ["statistics"]);
                            e("user_data", r)
                        }
                    }))
                },
                $e = function(e, t) {
                    var n = e.emit,
                        r = e.store,
                        i = t.payload;
                    switch (i.action) {
                        case re:
                            return i.payload.properties.lc2 && "queue_pos" in i.payload.properties.lc2 && n(te, {
                                chatId: i.payload.chatId,
                                threadId: i.payload.threadId,
                                queue: {
                                    position: i.payload.properties.lc2.queue_pos,
                                    waitTime: i.payload.properties.lc2.queue_waiting_time
                                }
                            }), void n("thread_properties_updated", i.payload);
                        case U:
                            return void
                            function(e, t) {
                                s.setItem(je(e), JSON.stringify(t)).catch(y.T)
                            }(r, i.payload.customer_side_storage);
                        case q:
                            switch (i.payload.reason) {
                                case "access_token_expired":
                                    r.dispatch(pe(!0)), r.dispatch(me(100)), n("disconnected", i.payload);
                                    break;
                                case "customer_banned":
                                case "customer_temporarily_blocked":
                                case "license_not_found":
                                case "product_version_changed":
                                case "too_many_connections":
                                case "unsupported_version":
                                    r.dispatch(le(i.payload.reason));
                                    break;
                                case "misdirected_connection":
                                    ke(r, "MISDIRECTED_CONNECTION"), r.dispatch({
                                        type: "change_region",
                                        payload: i.payload.data
                                    });
                                    break;
                                case "service_temporarily_unavailable":
                                case "too_many_unauthorized_connections":
                                    ke(r, i.payload.reason.toUpperCase());
                                    break;
                                default:
                                    r.dispatch(me(100)), n("disconnected", i.payload)
                            }
                            return;
                        case J:
                            return Qe(n, i.payload.chat.users), void n(i.action, i.payload);
                        case X:
                            if (null === i.payload.event) return;
                            return void n(i.action, i.payload);
                        case ee:
                            return void n(i.action, i.payload);
                        case Q:
                            return function(e, t) {
                                var n = t.type,
                                    r = t.content;
                                if ("lc2" === n && ("groups_update" === r.name && "groups" in r && !Object(y.E)(r.groups))) {
                                    var i = r.groups[0];
                                    e("availability_updated", {
                                        availability: "offline" === i.status ? "offline" : "online"
                                    })
                                }
                            }(n, i.payload), void n(i.action, i.payload);
                        case ie:
                            return Qe(n, [i.payload.user]), void n(i.action, i.payload);
                        default:
                            return void n(i.action, i.payload)
                    }
                },
                et = function(e, t) {
                    var n = e.emit,
                        r = t.payload;
                    switch (r.action) {
                        case L:
                            return void r.resolve(ze);
                        case "get_chat":
                            return Qe(n, r.payload.users), void r.resolve(r.payload);
                        case J:
                            return Qe(n, r.payload.chat.users), void r.resolve(r.payload);
                        case X:
                            return void r.resolve(r.payload.event);
                        case "list_chats":
                            return Qe(n, r.payload.users), void r.resolve(r.payload);
                        default:
                            return void r.resolve(r.payload)
                    }
                },
                tt = function(e) {
                    var t = e.auth,
                        n = e.customerDataProvider,
                        i = e.emitter,
                        a = e.socket,
                        c = i.emit,
                        u = Ee(t, n);
                    return function(e, n) {
                        switch (e.type) {
                            case "change_region":
                                return void a.reinitialize();
                            case "check_goals":
                                return void Te(n, t, e.payload.sessionFields).catch(y.T);
                            case "destroy":
                                var s = e.payload;
                                switch (u.cancel(), a.destroy(), s.reason) {
                                    case "manual":
                                        ke(n, "SDK_DESTROYED");
                                        break;
                                    case "customer_banned":
                                    case "license_expired":
                                    case "product_version_changed":
                                        ke(n, "CONNECTION_LOST"), c("disconnected", s);
                                        break;
                                    default:
                                        c("disconnected", s)
                                }
                                return void i.off();
                            case "fail_all_requests":
                                var d = e.payload,
                                    l = d.reason,
                                    f = d.rejects,
                                    p = {
                                        message: Xe[l],
                                        code: l
                                    };
                                return void f.forEach((function(e) {
                                    e(R(p))
                                }));
                            case "login_success":
                                var m = e.payload,
                                    h = m.dynamicConfig,
                                    b = m.customer,
                                    g = m.chats,
                                    v = m.greeting,
                                    O = m.availability,
                                    _ = Object(o.a)({
                                        customer: b,
                                        availability: O
                                    }, v && {
                                        greeting: v
                                    });
                                return Object.defineProperty(_, "__unsafeDynamicConfig", {
                                    value: h
                                }), Object.defineProperty(_, "__unsafeChats", {
                                    value: g
                                }), void c("connected", _);
                            case "pause_connection":
                                var j = e.payload;
                                return a.disconnect(), void("manual" !== j.reason && c("disconnected", j));
                            case "prefetch_token":
                                return e.payload.fresh ? void t.getFreshToken().catch(y.T) : void t.hasToken().then((function(e) {
                                    return e ? t.getToken().then((function(e) {
                                        if (!(e.creationDate + e.expiresIn - Date.now() > 36e5)) return t.invalidate().then(t.getFreshToken)
                                    })) : t.getToken()
                                })).catch(y.T);
                            case "push_received":
                                return e.payload.action === q || Ze(n, e), void $e({
                                    emit: c,
                                    store: n
                                }, e);
                            case "push_response_received":
                                return Ze(n, e), void et({
                                    emit: c
                                }, e);
                            case "reconnect":
                                return ke(n, "CONNECTION_LOST"), void a.reconnect(e.payload.delay);
                            case "request_failed":
                                var w = e.payload;
                                return void(0, w.reject)(R(w.error));
                            case "response_received":
                                return Ze(n, e), void et({
                                    emit: c
                                }, e);
                            case "send_request":
                                var E = n.getState();
                                return function(e) {
                                    return "destroyed" === x(e)
                                }(E) ? void Se(n, e, {
                                    code: "SDK_DESTROYED",
                                    message: "SDK destroyed."
                                }) : T(E) || "login" === e.payload.source ? void
                                function(e, t) {
                                    var n = t.payload,
                                        i = n.id,
                                        a = n.request,
                                        c = Object(o.a)({
                                            request_id: i
                                        }, a);
                                    switch (c.action) {
                                        case "login":
                                            var u = [];
                                            return void e.emit(Object(o.a)({}, c, {
                                                version: "3.3",
                                                payload: Object(o.a)({}, c.payload, {
                                                    pushes: {
                                                        3.3: Object(y.yb)(r).filter((function(e) {
                                                            return e !== q && !Object(y.C)(e, u)
                                                        }))
                                                    }
                                                })
                                            }));
                                        default:
                                            e.emit(c)
                                    }
                                }(a, e): void Se(n, e, {
                                    code: "NO_CONNECTION",
                                    message: "No connection."
                                });
                            case "set_self_id":
                                return void c("customer_id", e.payload.id);
                            case "socket_disconnected":
                                return void c("disconnected", {
                                    reason: "connection_lost"
                                });
                            case "socket_connected":
                                return void u.sendLogin(n);
                            case "socket_recovered":
                                if (!T(n.getState())) return;
                                return void c("connection_recovered");
                            case "socket_unstable":
                                if (!T(n.getState())) return;
                                return void c("connection_unstable");
                            case "start_connection":
                                return a.connect(), void n.dispatch(pe());
                            case "update_customer_page":
                                if (!T(n.getState())) return;
                                return void ye(n, he("update_customer_page", e.payload)).catch(y.T);
                            default:
                                return
                        }
                    }
                },
                nt = function(e, t) {
                    var n = {
                            status: "idle",
                            queuedTasks: [],
                            nextPageId: null
                        },
                        r = function r(i, o) {
                            switch (n.status) {
                                case "idle":
                                    return n.status = "fetching", void e.listThreads(n.nextPageId ? {
                                        chatId: t,
                                        pageId: n.nextPageId
                                    } : {
                                        chatId: t,
                                        minEventsCount: 25
                                    }).then((function(e) {
                                        var t = e.threads,
                                            o = e.nextPageId;
                                        n.nextPageId = o, n.nextPageId ? (n.status = "idle", i({
                                            value: {
                                                threads: [].concat(t).reverse()
                                            },
                                            done: !1
                                        })) : (n.status = "done", i({
                                            value: {
                                                threads: [].concat(t).reverse()
                                            },
                                            done: !0
                                        }));
                                        var a = n.queuedTasks.shift();
                                        a && r(a.resolve, a.reject)
                                    }), (function(e) {
                                        var t = n.queuedTasks;
                                        n.status = "idle", n.queuedTasks = [], o(e), t.forEach((function(t) {
                                            return t.reject(e)
                                        }))
                                    }));
                                case "fetching":
                                    return void n.queuedTasks.push({
                                        resolve: i,
                                        reject: o
                                    });
                                case "done":
                                    return void i({
                                        value: void 0,
                                        done: !0
                                    })
                            }
                        };
                    return {
                        next: function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }((function() {
                            return new Promise(r)
                        }))
                    }
                },
                rt = 0,
                it = 1,
                ot = 3,
                at = function(e, t) {
                    var n, r = (void 0 === t ? {} : t).query,
                        i = void 0 === r ? {} : r,
                        o = Object(l.a)(i),
                        a = o ? e + "?" + o : e,
                        c = Object(v.a)(),
                        u = Object(_e.a)({
                            min: 1e3,
                            max: 5e3,
                            jitter: .5
                        }),
                        s = ot,
                        d = null,
                        f = function() {
                            s = it, u.reset(), c.emit("connect")
                        },
                        p = function() {
                            h(), g(), c.emit("disconnect")
                        },
                        m = function(e) {
                            var t = e.data;
                            c.emit("message", t)
                        },
                        h = function() {
                            var e;
                            (clearTimeout(n), s = ot, d) && ((e = d).removeEventListener("open", f), e.removeEventListener("close", p), e.removeEventListener("message", m), d.close(), d = null)
                        },
                        b = function() {
                            var e;
                            s = rt, d = new WebSocket(a), (e = d).addEventListener("open", f), e.addEventListener("close", p), e.addEventListener("message", m)
                        },
                        g = function(e) {
                            void 0 === e && (e = u.duration()), h(), 0 !== e ? n = setTimeout(b, e) : b()
                        };
                    return {
                        connect: function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }((function() {
                            if (s !== ot) throw new Error("Socket is already open or connecting.");
                            clearTimeout(n), b()
                        })),
                        destroy: function() {
                            c.off(), h()
                        },
                        disconnect: h,
                        reconnect: g,
                        emit: function(e) {
                            if (s !== it) throw new Error("Socket is not connected.");
                            d.send(e)
                        },
                        getReadyState: function() {
                            return s
                        },
                        on: c.on,
                        off: c.off
                    }
                },
                ct = function() {
                    var e, t = y.T;
                    return {
                        cancel: function() {
                            clearTimeout(e), t = y.T
                        },
                        check: function() {
                            var n = Object(ve.a)();
                            return t = n.resolve, e = setTimeout((function() {
                                var e = new Error("Timeout.");
                                e.code = "TIMEOUT", n.reject(e)
                            }), 2e3), n.promise
                        },
                        resolve: function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }((function() {
                            clearTimeout(e), t()
                        }))
                    }
                },
                ut = function(e, t) {
                    var n, r, a, c = void 0 === t ? {} : t,
                        u = c.query,
                        s = void 0 === u ? {} : u,
                        d = c.rescheduleTimeout,
                        l = void 0 === d ? 3e4 : d,
                        f = c.emitter,
                        p = void 0 === f ? Object(v.a)() : f,
                        m = at(e, {
                            query: s
                        }),
                        h = ct(),
                        b = function() {
                            return m.getReadyState() === i.OPEN
                        },
                        g = function(e) {
                            m.emit(JSON.stringify(e)), O()
                        },
                        y = function() {
                            g({
                                action: "ping"
                            })
                        },
                        O = function() {
                            clearTimeout(n), n = setTimeout(y, l)
                        },
                        _ = function() {
                            h.cancel(), clearTimeout(n)
                        };
                    return r = m, a = p, ["connect", "disconnect"].forEach((function(e) {
                        r.on(e, (function(t) {
                            a.emit(e, t)
                        }))
                    })), m.on("connect", O), m.on("disconnect", _), m.on("message", (function(e) {
                        h.resolve();
                        var t = JSON.parse(e);
                        "ping" !== t.action && p.emit("message", t)
                    })), "undefined" !== typeof window && "undefined" !== typeof window.addEventListener && (window.addEventListener("online", (function() {
                        b() && (h.check().then((function() {
                            h.cancel(), p.emit("connection_recovered")
                        }), (function(e) {
                            if (h.cancel(), "TIMEOUT" !== e.code) throw e;
                            m.reconnect()
                        })), y())
                    })), window.addEventListener("offline", (function() {
                        h.cancel(), b() && p.emit("connection_unstable")
                    }))), Object(o.a)({}, m, {
                        destroy: function() {
                            _(), m.destroy()
                        },
                        disconnect: function() {
                            _(), m.disconnect()
                        },
                        reconnect: function(e) {
                            _(), m.reconnect(e)
                        },
                        emit: g,
                        on: p.on,
                        off: p.off
                    })
                },
                st = function(e, t) {
                    var n = e.getState(),
                        r = (S(n) + "/rtm/ws").replace(/^https/, "wss");
                    return ut(r, {
                        query: {
                            license_id: n.licenseId
                        },
                        emitter: t
                    })
                },
                dt = function(e) {
                    var t = Object(v.a)(),
                        n = st(e, t);
                    return Object(o.a)({}, Object.keys(n).reduce((function(e, t) {
                        return e[t] = function() {
                            var e;
                            return (e = n)[t].apply(e, arguments)
                        }, e
                    }), {}), {
                        reinitialize: function() {
                            n.disconnect(), (n = st(e, t)).connect()
                        }
                    })
                },
                lt = function(e) {
                    return {
                        chatId: e.chat_id,
                        properties: e.properties
                    }
                },
                ft = function(e) {
                    var t = {
                        chatId: e.chat_id,
                        threadId: e.thread_id,
                        transferredTo: Object(o.a)({}, e.transferred_to.agent_ids && {
                            agentIds: e.transferred_to.agent_ids
                        }, e.transferred_to.group_ids && {
                            groupIds: e.transferred_to.group_ids
                        }),
                        queue: e.queue ? Ke(e.queue) : null
                    };
                    return "manual" === e.reason ? Object(o.a)({}, t, {
                        reason: e.reason,
                        requesterId: e.requester_id
                    }) : Object(o.a)({}, t, {
                        reason: e.reason
                    })
                },
                pt = function(e) {
                    return {
                        url: e.url,
                        title: e.title,
                        openedAt: e.opened_at
                    }
                },
                mt = function(e) {
                    return Object(o.a)({
                        id: e.id
                    }, Fe(e))
                },
                ht = function(e) {
                    return {
                        chatId: e.chat_id,
                        threadId: e.thread_id,
                        eventId: e.event_id,
                        properties: e.properties
                    }
                },
                bt = function(e) {
                    return {
                        chatId: e.chat_id,
                        threadId: e.thread_id,
                        eventId: e.event_id,
                        properties: e.properties
                    }
                },
                gt = function(e) {
                    var t = e.thread_id;
                    return {
                        chatId: e.chat_id,
                        threadId: t,
                        event: De(t, e.event)
                    }
                },
                vt = function(e) {
                    return {
                        chatId: e.chat_id,
                        userId: e.user_id,
                        seenUpTo: e.seen_up_to
                    }
                },
                yt = function(e) {
                    return {
                        uniqueId: e.unique_id
                    }
                },
                Ot = function(e) {
                    var t = e.chat;
                    return {
                        chat: Object(o.a)({}, Ve(t), {
                            thread: Ue(t.id, t.thread)
                        })
                    }
                },
                _t = function(e) {
                    return {
                        chatId: e.chat_id,
                        event: De(e.thread_id, e.event)
                    }
                },
                jt = function(e) {
                    return Ne(e)
                },
                wt = function(e) {
                    return {
                        userId: e.user_id,
                        chatId: e.chat_id,
                        threadId: e.thread_id,
                        eventId: e.event_id,
                        postback: e.postback
                    }
                },
                xt = function(e) {
                    var t = e.chat_id,
                        n = e.typing_indicator;
                    return {
                        chatId: t,
                        typingIndicator: {
                            authorId: n.author_id,
                            isTyping: n.is_typing
                        }
                    }
                },
                Et = function(e) {
                    return {
                        chatId: e.chat_id,
                        threadId: e.thread_id,
                        queue: Ye(e.queue)
                    }
                },
                Ct = function(e) {
                    return {
                        chatId: e.chat_id,
                        threadId: e.thread_id,
                        properties: e.properties
                    }
                },
                It = function(e) {
                    return {
                        chatId: e.chat_id,
                        threadId: e.thread_id,
                        properties: e.properties
                    }
                },
                Tt = function(e) {
                    return {
                        chatId: e.chat_id,
                        user: Je(e.user),
                        present: e.user.present
                    }
                },
                kt = function(e) {
                    return {
                        chatId: e.chat_id,
                        userId: e.user_id
                    }
                },
                St = function(e) {
                    return e.map((function(e) {
                        switch (e.type) {
                            case "group_chooser":
                                return Object(o.a)({}, e, {
                                    options: e.options.map((function(e) {
                                        var t = e.group_id,
                                            n = Object(a.a)(e, ["group_id"]);
                                        return Object(o.a)({}, n, {
                                            groupId: t
                                        })
                                    }))
                                });
                            case "rating":
                                var t = e.comment_label,
                                    n = Object(a.a)(e, ["comment_label"]);
                                return Object(o.a)({}, n, {
                                    commentLabel: t
                                });
                            default:
                                return e
                        }
                    }))
                },
                zt = function(e) {
                    var t = e.map((function(e, t) {
                        return Object(o.a)({}, e, {
                            id: String(t)
                        })
                    }));
                    return St(t)
                },
                At = function(e) {
                    var t = !("id" in e.fields[0]);
                    return {
                        id: e.id,
                        fields: t ? zt(e.fields) : St(e.fields)
                    }
                },
                Mt = function(e) {
                    return e.enabled ? Object(o.a)({}, e, {
                        form: At(e.form)
                    }) : e
                },
                Rt = function(e) {
                    var t = {
                        url: e.url
                    };
                    return e.title && (t.title = e.title), e.description && (t.description = e.description), e.image_url && (t.imageUrl = "https://" + e.image_url, e.image_width && e.image_height && (t.imageWidth = e.image_width, t.imageHeight = e.image_height)), t
                },
                Lt = function(e) {
                    var t = e.online_groups_ids,
                        n = e.customer_groups;
                    if (!t) return "offline";
                    var r = n.monitoring.id;
                    return Object(y.C)(r, t) ? "online" : "offline"
                },
                Pt = function(e) {
                    var t = e.chats_summary.map((function(e) {
                        var t = e.id,
                            n = e.active,
                            r = e.access,
                            i = e.last_thread_created_at,
                            o = e.last_thread_id,
                            a = e.last_event_per_type,
                            c = e.properties,
                            u = void 0 === c ? {} : c,
                            s = e.users,
                            d = {
                                id: t,
                                active: n,
                                access: qe(r),
                                properties: u,
                                users: s.map(Je),
                                lastThreadId: o || null,
                                lastThreadCreatedAt: i || null,
                                eventsSeenUpToMap: Be(s)
                            };
                        if (!a) return d;
                        d.lastEventsPerType = Object(y.N)((function(e) {
                            return De(e.thread_id, e.event)
                        }), a);
                        var l = a,
                            f = Object.keys(l).map((function(e) {
                                return l[e]
                            })),
                            p = Object(y.K)(f.sort((function(e, t) {
                                return e.thread_id === t.thread_id ? Object(y.lb)(e.event.created_at, t.event.created_at) : Object(y.lb)(e.thread_created_at, t.thread_created_at)
                            })));
                        return p && (d.lastEvent = d.lastEventsPerType[p.event.type]), d
                    }));
                    return {
                        chatsSummary: Object(y.U)((function(e) {
                            var t = e.lastEvent,
                                n = e.order;
                            return -1 * (void 0 !== t ? t.timestamp : n)
                        }), t),
                        totalChats: e.total_chats,
                        users: Object(y.wb)((function(e) {
                            return e.id
                        }), Object(y.s)((function(e) {
                            return e.users
                        }), t)),
                        previousPageId: e.previous_page_id || null,
                        nextPageId: e.next_page_id || null
                    }
                },
                Dt = function(e) {
                    return e.groups_status
                },
                Nt = function(e, t) {
                    return {
                        threads: t.threads.map((function(t) {
                            return Ue(e.payload.chat_id, t)
                        })),
                        previousPageId: t.previous_page_id || null,
                        nextPageId: t.next_page_id || null
                    }
                },
                qt = function(e) {
                    var t = e.__priv_dynamic_config,
                        n = e.chats,
                        r = e.greeting;
                    return Object(o.a)({
                        dynamicConfig: t,
                        customer: Ge(e.customer),
                        availability: Lt(t),
                        chats: n.map((function(t) {
                            return {
                                id: t.chat_id,
                                active: "has_active_thread" in t ? t.has_active_thread : e.has_active_thread,
                                hasUnreadEvents: t.has_unread_events
                            }
                        }))
                    }, r && {
                        greeting: Ne(r)
                    })
                },
                Bt = function(e) {
                    switch (e.action) {
                        case L:
                            return {
                                action: e.action,
                                payload: {
                                    chatId: e.payload.chat_id
                                }
                            };
                        case P:
                            return {
                                action: e.action,
                                payload: (t = e.payload, {
                                    chatId: t.chat_id,
                                    properties: t.properties
                                })
                            };
                        case D:
                            return {
                                action: e.action,
                                payload: lt(e.payload)
                            };
                        case N:
                            return {
                                action: e.action,
                                payload: ft(e.payload)
                            };
                        case U:
                        case q:
                            return {
                                action: e.action,
                                payload: e.payload
                            };
                        case B:
                            return {
                                action: e.action,
                                payload: pt(e.payload)
                            };
                        case V:
                            return {
                                action: e.action,
                                payload: mt(e.payload)
                            };
                        case F:
                            return {
                                action: e.action,
                                payload: ht(e.payload)
                            };
                        case H:
                            return {
                                action: e.action,
                                payload: bt(e.payload)
                            };
                        case G:
                            return {
                                action: e.action,
                                payload: gt(e.payload)
                            };
                        case W:
                            return {
                                action: e.action,
                                payload: vt(e.payload)
                            };
                        case Y:
                        case K:
                            return {
                                action: e.action,
                                payload: yt(e.payload)
                            };
                        case J:
                            return {
                                action: e.action,
                                payload: Ot(e.payload)
                            };
                        case X:
                            return {
                                action: e.action,
                                payload: _t(e.payload)
                            };
                        case Z:
                            return {
                                action: e.action,
                                payload: jt(e.payload)
                            };
                        case Q:
                            return {
                                action: e.action,
                                payload: e.payload
                            };
                        case $:
                            return {
                                action: e.action,
                                payload: wt(e.payload)
                            };
                        case ee:
                            return {
                                action: e.action,
                                payload: xt(e.payload)
                            };
                        case te:
                            return {
                                action: e.action,
                                payload: Et(e.payload)
                            };
                        case ne:
                            return {
                                action: e.action,
                                payload: Ct(e.payload)
                            };
                        case re:
                            return {
                                action: e.action,
                                payload: It(e.payload)
                            };
                        case ie:
                            return {
                                action: e.action,
                                payload: Tt(e.payload)
                            };
                        case oe:
                            return {
                                action: e.action,
                                payload: kt(e.payload)
                            }
                    }
                    var t
                },
                Ut = function(e, t) {
                    var n = e.dispatch,
                        r = e.getState,
                        i = t.request_id,
                        a = E(r(), i),
                        c = a.promise,
                        u = a.resolve,
                        s = function(e) {
                            var t, n = e.request,
                                r = e.response;
                            switch (r.action) {
                                case "accept_greeting":
                                case "cancel_greeting":
                                case "delete_chat_properties":
                                case "delete_event_properties":
                                case "delete_thread_properties":
                                    return {
                                        action: r.action,
                                        payload: ze
                                    };
                                case "get_chat":
                                    return {
                                        action: r.action,
                                        payload: (t = r.payload, Object(o.a)({}, Ve(t), {
                                            thread: t.thread ? Ue(t.id, t.thread) : null
                                        }))
                                    };
                                case "get_customer":
                                    return {
                                        action: r.action,
                                        payload: Ge(r.payload)
                                    };
                                case "get_form":
                                    return {
                                        action: r.action,
                                        payload: Mt(r.payload)
                                    };
                                case "get_predicted_agent":
                                    return {
                                        action: r.action,
                                        payload: We(r.payload)
                                    };
                                case "get_url_info":
                                    return {
                                        action: r.action,
                                        payload: Rt(r.payload)
                                    };
                                case "list_chats":
                                    return {
                                        action: r.action,
                                        payload: Pt(r.payload)
                                    };
                                case "list_group_statuses":
                                    return {
                                        action: r.action,
                                        payload: Dt(r.payload)
                                    };
                                case "list_threads":
                                    return {
                                        action: r.action,
                                        payload: Nt(n, r.payload)
                                    };
                                case "login":
                                    return {
                                        action: r.action,
                                        payload: qt(r.payload)
                                    };
                                case "mark_events_as_seen":
                                case "send_sneak_peek":
                                case "set_customer_session_fields":
                                case "send_rich_message_postback":
                                case "update_chat_properties":
                                case "update_customer":
                                case "update_customer_page":
                                case "update_event_properties":
                                case "update_thread_properties":
                                    return {
                                        action: r.action,
                                        payload: ze
                                    }
                            }
                        }({
                            request: a.request,
                            response: t
                        });
                    n({
                        type: "response_received",
                        payload: Object(o.a)({
                            id: i,
                            promise: c,
                            resolve: u
                        }, s)
                    })
                },
                Vt = function(e, t) {
                    var n = e.dispatch;
                    return t.on("connect", (function() {
                        n({
                            type: "socket_connected"
                        })
                    })), t.on("message", (function(t) {
                        if ("response" === t.type) {
                            if (!t.success) return void
                            function(e, t) {
                                var n, r = e.dispatch,
                                    i = e.getState,
                                    o = t.request_id,
                                    a = t.payload;
                                r({
                                    type: "request_failed",
                                    payload: {
                                        id: o,
                                        reject: E(i(), o).reject,
                                        error: (n = a.error, {
                                            code: n.type.toUpperCase(),
                                            message: n.message
                                        })
                                    }
                                })
                            }(e, t);
                            switch (t.action) {
                                case "deactivate_chat":
                                case "resume_chat":
                                case "send_event":
                                case "start_chat":
                                    return;
                                default:
                                    return void Ut(e, t)
                            }
                        }
                        if ("request_id" in t) switch (t.action) {
                            case L:
                            case J:
                            case X:
                                return void
                                function(e, t) {
                                    var n = e.dispatch,
                                        r = e.getState,
                                        i = t.request_id,
                                        a = E(r(), i),
                                        c = a.promise,
                                        u = a.resolve,
                                        s = Bt(t);
                                    n({
                                        type: "push_response_received",
                                        payload: Object(o.a)({
                                            id: i,
                                            promise: c,
                                            resolve: u
                                        }, s)
                                    })
                                }(e, t)
                        }! function(e, t) {
                            var n = Bt(t);
                            n && e.dispatch({
                                type: "push_received",
                                payload: n
                            })
                        }(e, t)
                    })), t.on("disconnect", (function() {
                        ke(e, "CONNECTION_LOST"), "connected" === x(e.getState()) && e.dispatch({
                            type: "socket_disconnected"
                        })
                    })), t.on("connection_unstable", (function() {
                        n({
                            type: "socket_unstable"
                        })
                    })), t.on("connection_recovered", (function() {
                        n({
                            type: "socket_recovered"
                        })
                    })), t.off
                },
                Ft = function(e, t) {
                    return e.length ? e + "\n" + t : t
                },
                Ht = function(e, t, n) {
                    var r = n.filledForm,
                        i = n.groupId,
                        a = n.timeZone;
                    return t.getToken().then((function(t) {
                        var n = e.getState();
                        null === C(n) && e.dispatch(ge(t.entityId));
                        var c = k(n) + "/v2/tickets/new",
                            u = function(e, t) {
                                var n = t.fields,
                                    r = t.customerId,
                                    i = t.groupId,
                                    a = void 0 === i ? e.groupId : i,
                                    c = t.timeZone,
                                    u = Object(o.a)({
                                        licence_id: e.licenseId,
                                        ticket_message: "",
                                        offline_message: "",
                                        visitor_id: r,
                                        requester: {}
                                    }, "number" === typeof a && {
                                        group: a
                                    }, e.page && {
                                        source: {
                                            url: e.page.url
                                        }
                                    }, c && {
                                        timezone: c
                                    });
                                return n.reduce((function(e, t) {
                                    switch (t.type) {
                                        case "subject":
                                            var n = t.answer,
                                                r = n ? t.label + " " + n : t.label;
                                            return n && (e.subject = n), e.offline_message = Ft(e.offline_message, r), e;
                                        case "name":
                                            var i = t.answer,
                                                o = i ? t.label + " " + i : t.label;
                                            return i && (e.requester.name = i), e.offline_message = Ft(e.offline_message, o), e;
                                        case "email":
                                            var a = t.answer,
                                                c = a ? t.label + " " + a : t.label;
                                            return e.requester.mail = a, e.offline_message = Ft(e.offline_message, c), e;
                                        case "question":
                                        case "textarea":
                                            var u = t.answer,
                                                s = u ? t.label + " " + u : t.label;
                                            return e.offline_message = Ft(e.offline_message, s), e.ticket_message = Ft(e.ticket_message, s), e;
                                        case "radio":
                                        case "select":
                                            var d = t.answer && t.answer.label,
                                                l = d ? t.label + " " + d : t.label;
                                            return e.offline_message = Ft(e.offline_message, l), e.ticket_message = Ft(e.ticket_message, l), e;
                                        case "checkbox":
                                            var f = t.answers && t.answers.map((function(e) {
                                                    return e.label
                                                })).join(", "),
                                                p = f ? t.label + " " + f : t.label;
                                            return e.offline_message = Ft(e.offline_message, p), e.ticket_message = Ft(e.ticket_message, p), e;
                                        default:
                                            return e
                                    }
                                }), u)
                            }(n, {
                                fields: r.fields,
                                customerId: t.entityId,
                                groupId: i,
                                timeZone: a
                            });
                        return Object(Ie.a)(c, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(u)
                        }).then((function(e) {
                            if (e.ok) return e.json().then((function(e) {
                                return Object(o.a)({}, e, {
                                    text: u.ticket_message
                                })
                            }));
                            if (400 === e.status || 422 === e.status) {
                                var t = function(e) {
                                    if (!e || !e.errors) throw new Error;
                                    var t = e.errors[0];
                                    if ("incorrect requester structure" === Object.keys(t)[0]) throw R({
                                        message: t["incorrect requester structure"][0],
                                        code: "VALIDATION"
                                    });
                                    throw new Error
                                };
                                return e.json().then(t, t)
                            }
                            throw new Error
                        }))
                    }))
                },
                Gt = n(232),
                Wt = function(e, t) {
                    if (void 0 === t && (t = 2), e < 1024) return e + " b";
                    var n = e / 1024;
                    if (e < 1048576) return n.toFixed(t) + " kb";
                    var r = n / 1024;
                    return e < 1073741824 ? r.toFixed(t) + " MB" : (r / 1024).toFixed(t) + " GB"
                },
                Yt = function(e) {
                    if (e.size > 10485760) throw R({
                        message: "The file is too big (max size is " + Wt(10485760) + ").",
                        code: "TOO_BIG_FILE"
                    })
                },
                Kt = function(e, t) {
                    var n, r = e.auth,
                        i = e.store,
                        o = t.file,
                        a = t.onProgress,
                        c = !1;
                    return {
                        promise: new Promise((function(e, t) {
                            Yt(o);
                            var u = i.getState(),
                                s = Object(l.a)({
                                    license_id: u.licenseId
                                }),
                                d = S(u) + "/action/upload_file?" + s,
                                f = {
                                    file: o
                                };
                            r.getToken().then((function(r) {
                                c ? t(new Error("Upload cancelled.")) : (n = Object(Gt.a)(d, f, {
                                    headers: {
                                        Authorization: r.tokenType + " " + r.accessToken
                                    },
                                    onProgress: a
                                })).promise.then(e, (function(e) {
                                    if (e.response) {
                                        var n = e.response.error,
                                            r = n.type,
                                            i = n.message;
                                        t(R({
                                            message: i,
                                            code: r.toUpperCase()
                                        }))
                                    } else t(e)
                                }))
                            }))
                        })),
                        cancel: function() {
                            c || (c = !0, n && n.cancel())
                        }
                    }
                },
                Jt = function(e) {
                    e.env, e.licenseId, e.eventName;
                    return Promise.resolve()
                },
                Xt = function(e, t) {
                    void 0 === t && (t = "production"), b(e);
                    var n = e.autoConnect,
                        r = void 0 === n || n,
                        i = e.customerDataProvider,
                        c = e.identityProvider,
                        u = Object(a.a)(e, ["autoConnect", "customerDataProvider", "identityProvider"]),
                        s = M(Object(o.a)({}, u, {
                            env: t
                        })),
                        d = Object(v.a)(),
                        l = dt(s),
                        f = c || g(u, t);
                    s.addSideEffectsHandler(tt({
                        emitter: d,
                        socket: l,
                        auth: f,
                        customerDataProvider: i
                    })), Vt(s, l);
                    var p = ye.bind(null, s),
                        m = function() {
                            s.dispatch({
                                type: "start_connection"
                            })
                        },
                        h = Object.freeze({
                            acceptGreeting: function(e) {
                                var t = e.greetingId,
                                    n = e.uniqueId;
                                return p(he("accept_greeting", {
                                    greeting_id: t,
                                    unique_id: n
                                }))
                            },
                            auth: f,
                            cancelGreeting: function(e) {
                                var t = e.uniqueId;
                                return p(he("cancel_greeting", {
                                    unique_id: t
                                }))
                            },
                            cancelRate: function(e) {
                                var t = e.chatId,
                                    n = e.properties,
                                    r = void 0 === n ? ["score"] : n;
                                return h.listThreads({
                                    chatId: t
                                }).then((function(e) {
                                    var n = e.threads;
                                    if (!n.length) throw R({
                                        message: 'There is no thread in "' + t + '".',
                                        code: "MISSING_CHAT_THREAD"
                                    });
                                    return h.deleteThreadProperties({
                                        chatId: t,
                                        threadId: n[0].id,
                                        properties: {
                                            rating: r
                                        }
                                    })
                                }))
                            },
                            connect: m,
                            deactivateChat: function(e) {
                                var t = e.id;
                                return p(he("deactivate_chat", {
                                    id: t
                                }))
                            },
                            deleteChatProperties: function(e) {
                                var t = e.id,
                                    n = e.properties;
                                return p(he("delete_chat_properties", {
                                    id: t,
                                    properties: n
                                }))
                            },
                            deleteEventProperties: function(e) {
                                var t = e.chatId,
                                    n = e.threadId,
                                    r = e.eventId,
                                    i = e.properties;
                                return p(he("delete_event_properties", {
                                    chat_id: t,
                                    thread_id: n,
                                    event_id: r,
                                    properties: i
                                }))
                            },
                            deleteThreadProperties: function(e) {
                                var t = e.chatId,
                                    n = e.threadId,
                                    r = e.properties;
                                return p(he("delete_thread_properties", {
                                    chat_id: t,
                                    thread_id: n,
                                    properties: r
                                }))
                            },
                            destroy: function() {
                                s.dispatch(le("manual"))
                            },
                            disconnect: function() {
                                s.dispatch(fe("manual"))
                            },
                            getChat: function(e) {
                                var t = e.chatId,
                                    n = e.threadId;
                                return p(he("get_chat", {
                                    chat_id: t,
                                    thread_id: n
                                }))
                            },
                            getChatHistory: function(e) {
                                var t = e.chatId;
                                return nt(h, t)
                            },
                            getCustomer: function() {
                                return p(he("get_customer", {}))
                            },
                            getForm: function(e) {
                                var t = e.groupId,
                                    n = e.type;
                                return p(he("get_form", {
                                    group_id: t,
                                    type: n
                                }))
                            },
                            getPredictedAgent: function(e) {
                                void 0 === e && (e = {});
                                var t = e.groupId;
                                return p(he("get_predicted_agent", "number" === typeof t ? {
                                    group_id: t
                                } : {}))
                            },
                            getUrlInfo: function(e) {
                                var t = e.url;
                                return p(he("get_url_info", {
                                    url: t
                                }))
                            },
                            listChats: function(e) {
                                return void 0 === e && (e = {}), "limit" in e && "number" === typeof e.limit && e.limit > 25 ? Promise.reject(new Error("Specified limit is too high (max 25).")) : p(he("list_chats", void 0 === e.pageId ? {
                                    limit: e.limit || 10
                                } : {
                                    page_id: e.pageId
                                }))
                            },
                            listGroupStatuses: function(e) {
                                var t = (void 0 === e ? {} : e).groupIds;
                                return p(he("list_group_statuses", t ? {
                                    group_ids: t
                                } : {
                                    all: !0
                                }))
                            },
                            listThreads: function(e) {
                                return p(he("list_threads", void 0 === e.pageId ? {
                                    chat_id: e.chatId,
                                    sort_order: e.sortOrder,
                                    limit: e.limit,
                                    min_events_count: e.minEventsCount
                                } : {
                                    chat_id: e.chatId,
                                    page_id: e.pageId
                                }))
                            },
                            markEventsAsSeen: function(e) {
                                var t = e.chatId,
                                    n = e.seenUpTo;
                                return p(he("mark_events_as_seen", {
                                    chat_id: t,
                                    seen_up_to: n
                                }))
                            },
                            on: d.on,
                            once: d.once,
                            off: d.off,
                            rateChat: function(e) {
                                var t = e.chatId,
                                    n = e.rating;
                                return h.listThreads({
                                    chatId: t
                                }).then((function(e) {
                                    var r = e.threads;
                                    if (!r.length) throw R({
                                        message: 'There is no thread in "' + t + '".',
                                        code: "MISSING_CHAT_THREAD"
                                    });
                                    return h.updateThreadProperties({
                                        chatId: t,
                                        threadId: r[0].id,
                                        properties: {
                                            rating: n
                                        }
                                    })
                                }))
                            },
                            resumeChat: function(n) {
                                return Jt({
                                    env: t,
                                    licenseId: e.licenseId,
                                    eventName: "chat_started"
                                }), p(he("resume_chat", function(e) {
                                    var t = ue(e);
                                    return Object(o.a)({}, t, {
                                        chat: Object(o.a)({}, t.chat, {
                                            id: e.chat.id
                                        })
                                    })
                                }(n)))
                            },
                            sendEvent: function(e) {
                                function t(t) {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                }, t
                            }((function(e) {
                                return p(function(e) {
                                    var t = e.chatId,
                                        n = e.event,
                                        r = e.attachToLastThread,
                                        i = {
                                            chat_id: t,
                                            event: ce(n)
                                        };
                                    return r && (i.attach_to_last_thread = !0), he("send_event", i)
                                }(e))
                            })),
                            sendTicketForm: function(e) {
                                return Ht(s, f, e)
                            },
                            sendRichMessagePostback: function(e) {
                                var t = e.chatId,
                                    n = e.threadId,
                                    r = e.eventId,
                                    i = e.postback;
                                return p(he("send_rich_message_postback", {
                                    chat_id: t,
                                    event_id: r,
                                    thread_id: n,
                                    postback: i
                                }))
                            },
                            setCustomerSessionFields: function(e) {
                                var t = e.sessionFields;
                                return p(he("set_customer_session_fields", {
                                    session_fields: se(t)
                                }))
                            },
                            setSneakPeek: function(e) {
                                var t = e.chatId,
                                    n = e.sneakPeekText,
                                    r = s.getState();
                                I(r, t) && T(r) && p(he("send_sneak_peek", {
                                    chat_id: t,
                                    sneak_peek_text: n
                                })).catch(y.T)
                            },
                            startChat: function(n) {
                                return void 0 === n && (n = {}), Jt({
                                    env: t,
                                    licenseId: e.licenseId,
                                    eventName: "chat_started"
                                }), p(he("start_chat", ue(n)))
                            },
                            updateChatProperties: function(e) {
                                var t = e.id,
                                    n = e.properties;
                                return p(he("update_chat_properties", {
                                    id: t,
                                    properties: n
                                }))
                            },
                            updateCustomer: function(e) {
                                return p(he("update_customer", de(e)))
                            },
                            updateCustomerPage: function(e) {
                                s.dispatch({
                                    type: "update_customer_page",
                                    payload: Object(y.db)(["title", "url"], e)
                                })
                            },
                            updateEventProperties: function(e) {
                                var t = e.chatId,
                                    n = e.threadId,
                                    r = e.eventId,
                                    i = e.properties;
                                return p(he("update_event_properties", {
                                    chat_id: t,
                                    event_id: r,
                                    thread_id: n,
                                    properties: i
                                }))
                            },
                            updateThreadProperties: function(e) {
                                var t = e.chatId,
                                    n = e.threadId,
                                    r = e.properties;
                                return p(he("update_thread_properties", {
                                    chat_id: t,
                                    thread_id: n,
                                    properties: r
                                }))
                            },
                            uploadFile: function(e) {
                                return Kt({
                                    auth: f,
                                    store: s
                                }, e)
                            }
                        });
                    return r ? m() : s.dispatch({
                        type: "check_goals",
                        payload: {
                            sessionFields: "function" === typeof i ? i().sessionFields : {}
                        }
                    }), h
                }
        },
        96: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(11);

            function i(e) {
                return -1 !== e.indexOf("cdn.livechatinc.com/cloud/?uri") ? "https://" + Object(r.l)(e) : "https://cdn.livechatinc.com/cloud/?uri=http://" + encodeURI(Object(r.l)(e))
            }
        }
    },
    [
        [334, 12, 1, 13]
    ]
]);