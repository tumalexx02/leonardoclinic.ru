/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8
 */
!function(e, t) {
    if (true) module.exports = t(); else { var n, i; }
}("undefined" != typeof self ? self : this, (function() {
    return function() {
        "use strict";
        var e = {
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(2839), a = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ n.keys.Backspace, n.keys.Tab, n.keys.Pause, n.keys.Escape, n.keys.PageUp, n.keys.PageDown, n.keys.End, n.keys.Home, n.keys.ArrowLeft, n.keys.ArrowUp, n.keys.ArrowRight, n.keys.ArrowDown, n.keys.Insert, n.keys.Delete, n.keys.ContextMenu, n.keys.F1, n.keys.F2, n.keys.F3, n.keys.F4, n.keys.F5, n.keys.F6, n.keys.F7, n.keys.F8, n.keys.F9, n.keys.F10, n.keys.F11, n.keys.F12, n.keys.Process, n.keys.Unidentified, n.keys.Shift, n.keys.Control, n.keys.Alt, n.keys.Tab, n.keys.AltGraph, n.keys.CapsLock ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
                t.default = a;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = i;
                };
            },
            3776: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var i, n;
                    f(this[0]) && e && (i = this[0].eventRegistry, n = this[0], e.split(" ").forEach((function(e) {
                        var a = l(e.split("."), 2);
                        (function(e, n) {
                            var a, r, o = [];
                            if (e.length > 0) if (void 0 === t) for (a = 0, r = i[e][n].length; a < r; a++) o.push({
                                ev: e,
                                namespace: n && n.length > 0 ? n : "global",
                                handler: i[e][n][a]
                            }); else o.push({
                                ev: e,
                                namespace: n && n.length > 0 ? n : "global",
                                handler: t
                            }); else if (n.length > 0) for (var s in i) for (var l in i[s]) if (l === n) if (void 0 === t) for (a = 0, 
                            r = i[s][l].length; a < r; a++) o.push({
                                ev: s,
                                namespace: l,
                                handler: i[s][l][a]
                            }); else o.push({
                                ev: s,
                                namespace: l,
                                handler: t
                            });
                            return o;
                        })(a[0], a[1]).forEach((function(e) {
                            var t = e.ev, a = e.handler;
                            !function(e, t, a) {
                                if (e in i == 1) if (n.removeEventListener ? n.removeEventListener(e, a, !1) : n.detachEvent && n.detachEvent("on".concat(e), a), 
                                "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(a), 1); else i[e][t].splice(i[e][t].indexOf(a), 1);
                            }(t, e.namespace, a);
                        }));
                    })));
                    return this;
                }, t.on = function(e, t) {
                    if (f(this[0])) {
                        var i = this[0].eventRegistry, n = this[0];
                        e.split(" ").forEach((function(e) {
                            var a = l(e.split("."), 2), r = a[0], o = a[1];
                            !function(e, a) {
                                n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on".concat(e), t), 
                                i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                            }(r, void 0 === o ? "global" : o);
                        }));
                    }
                    return this;
                }, t.trigger = function(e) {
                    var t = arguments;
                    if (f(this[0])) for (var i = this[0].eventRegistry, n = this[0], r = "string" == typeof e ? e.split(" ") : [ e.type ], s = 0; s < r.length; s++) {
                        var l = r[s].split("."), c = l[0], u = l[1] || "global";
                        if (void 0 !== document && "global" === u) {
                            var d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    if ("input" === c) p.inputType = "insertText", d = new InputEvent(c, p); else d = new CustomEvent(c, p);
                                } catch (e) {
                                    (d = document.createEvent("CustomEvent")).initCustomEvent(c, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, a.default)(d, e), n.dispatchEvent(d);
                            } else (d = document.createEventObject()).eventType = c, d.detail = arguments[1], 
                            e.type && (0, a.default)(d, e), n.fireEvent("on" + d.eventType, d);
                        } else if (void 0 !== i[c]) {
                            arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                            arguments[0].detail = arguments.slice(1);
                            var h = i[c];
                            ("global" === u ? Object.values(h).flat() : h[u]).forEach((function(e) {
                                return e.apply(n, t);
                            }));
                        }
                    }
                    return this;
                };
                var n, a = u(i(600)), r = u(i(9380)), o = u(i(4963)), s = u(i(8741));
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function f(e) {
                    return e instanceof Element;
                }
                t.Event = n, "function" == typeof r.default.CustomEvent ? t.Event = n = r.default.CustomEvent : s.default && (t.Event = n = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !0,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }, n.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, n, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                    "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
                    "object" !== i(l) && "function" != typeof l && (l = {});
                    for (;c < u; c++) if (null != (t = arguments[c])) for (n in t) a = l[n], l !== (r = t[n]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                    l[n] = e(f, s, r)) : void 0 !== r && (l[n] = r));
                    return l;
                };
            },
            4963: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = s(i(600)), a = s(i(9380)), r = s(i(253)), o = i(3776);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = a.default.document;
                function c(e) {
                    return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                }
                c.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, c.extend = n.default, c.data = r.default, c.Event = o.Event;
                var u = c;
                t.default = u;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mobile = t.iphone = t.ie = void 0;
                var n, a = (n = i(9380)) && n.__esModule ? n : {
                    default: n
                };
                var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
                t.iphone = l, t.mobile = s, t.ie = o;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var n = i(8711), a = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
                function c(e, t) {
                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!i) {
                        if (Array.isArray(e) || (i = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return u(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === i && e.constructor && (i = e.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(e);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            i && (e = i);
                            var n = 0, a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: a
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, s = !1;
                    return {
                        s: function() {
                            i = i.call(e);
                        },
                        n: function() {
                            var e = i.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            s = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (s) throw r;
                            }
                        }
                    };
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                var f = {
                    keyEvent: function(e, t, i, c, u) {
                        var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e.key, k = n.caret.call(d, m), b = p.onKeyDown.call(this, e, n.getBuffer.call(d), k, p);
                        if (void 0 !== b) return b;
                        if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e.ctrlKey && y === a.keys.x && !("oncut" in m)) e.preventDefault(), 
                        o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n.getBuffer.call(d, !0), v.p, e, m.inputmask._valueGet() !== n.getBuffer.call(d).join("")); else if (y === a.keys.End || y === a.keys.PageDown) {
                            e.preventDefault();
                            var x = n.seekNext.call(d, n.getLastValidPosition.call(d));
                            n.caret.call(d, m, e.shiftKey ? k.begin : x, x, !0);
                        } else y === a.keys.Home && !e.shiftKey || y === a.keys.PageUp ? (e.preventDefault(), 
                        n.caret.call(d, m, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && y === a.keys.Escape && !0 !== e.altKey ? ((0, 
                        s.checkVal)(m, !0, !1, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== d.userOptions.insertMode ? !0 === p.tabThrough && y === a.keys.Tab ? !0 === e.shiftKey ? (k.end = n.seekPrevious.call(d, k.end, !0), 
                        !0 === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n.seekPrevious.call(d, k.end, !0), 
                        k.begin >= 0 && k.end > 0 && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : (k.begin = n.seekNext.call(d, k.begin, !0), 
                        k.end = n.seekNext.call(d, k.begin, !0), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e.preventDefault(), 
                        n.caret.call(d, m, k.begin, k.end))) : e.shiftKey || p.insertModeVisual && !1 === p.insertMode && (y === a.keys.ArrowRight ? setTimeout((function() {
                            var e = n.caret.call(d, m);
                            n.caret.call(d, m, e.begin);
                        }), 0) : y === a.keys.ArrowLeft && setTimeout((function() {
                            var e = n.translatePosition.call(d, m.inputmask.caretPos.begin);
                            n.translatePosition.call(d, m.inputmask.caretPos.end);
                            d.isRTL ? n.caret.call(d, m, e + (e === v.maskLength ? 0 : 1)) : n.caret.call(d, m, e - (0 === e ? 0 : 1));
                        }), 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                        n.caret.call(d, m, k.begin, k.begin));
                        return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), 
                        f.keypressEvent.call(this, e, t, i, c, u);
                    },
                    keypressEvent: function(e, t, i, r, l) {
                        var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, d = c.maskset, p = c.el, h = f(p), v = e.key;
                        if (!0 === t || e.ctrlKey && e.altKey || !(e.ctrlKey || e.metaKey || c.ignorable)) {
                            if (v) {
                                var m, g = t ? {
                                    begin: l,
                                    end: l
                                } : n.caret.call(c, p);
                                v = u.substitutes[v] || v, d.writeOutBuffer = !0;
                                var y = o.isValid.call(c, g, v, r, void 0, void 0, void 0, t);
                                if (!1 !== y && (n.resetMaskSet.call(c, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), 
                                d.p = m), m = u.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, m) : m, 
                                !1 !== i && (setTimeout((function() {
                                    u.onKeyValidation.call(p, v, y);
                                }), 0), d.writeOutBuffer && !1 !== y)) {
                                    var k = n.getBuffer.call(c);
                                    (0, s.writeBuffer)(p, k, m, e, !0 !== t);
                                }
                                if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                            }
                        } else v === a.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0));
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                        var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                        u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = l + e.clipboardData.getData("text/plain") + u;
                        }
                        var f = r;
                        if (i.isRTL) {
                            f = f.split("");
                            var d, p = c(n.getBufferTemplate.call(i));
                            try {
                                for (p.s(); !(d = p.n()).done; ) {
                                    var h = d.value;
                                    f[0] === h && f.shift();
                                }
                            } catch (e) {
                                p.e(e);
                            } finally {
                                p.f();
                            }
                            f = f.join("");
                        }
                        if ("function" == typeof a.onBeforePaste) {
                            if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                            f || (f = r);
                        }
                        (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, o = t.dependencyLib;
                        var c, u = this, d = u.inputmask._valueGet(!0), p = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), h = n.caret.call(t, u, void 0, void 0, !0);
                        if (p !== d) {
                            if (c = function(e, a, r) {
                                for (var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = u.length >= d.length ? u.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], y = "~"; u.length < h; ) u.push(y);
                                for (;d.length < h; ) d.push(y);
                                for (;f.length < v; ) f.unshift(y);
                                for (;p.length < v; ) p.unshift(y);
                                var k = u.concat(f), b = d.concat(p);
                                for (s = 0, o = k.length; s < o; s++) switch (c = l.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                                m) {
                                  case "insertText":
                                    b[s - 1] === k[s] && r.begin == k.length - 1 && g.push(k[s]), s = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    k[s] === y ? r.end++ : s = o;
                                    break;

                                  default:
                                    k[s] !== b[s] && (k[s + 1] !== y && k[s + 1] !== c && void 0 !== k[s + 1] || (b[s] !== c || b[s + 1] !== y) && b[s] !== y ? b[s + 1] === y && b[s] === k[s + 1] ? (m = "insertText", 
                                    g.push(k[s]), r.begin--, r.end--) : k[s] !== c && k[s] !== y && (k[s + 1] === y || b[s] !== k[s] && b[s + 1] === k[s + 1]) ? (m = "insertReplacementText", 
                                    g.push(k[s]), r.begin--) : k[s] === y ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                    g.push(k[s]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(d, p, h), (u.inputmask.shadowRoot || u.ownerDocument).activeElement !== u && u.focus(), 
                            (0, s.writeBuffer)(u, n.getBuffer.call(t)), n.caret.call(t, u, h.begin, h.end, !0), 
                            !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === c.action && t.isComposing) return !1;
                            switch ("insertCompositionText" === e.inputType && "insertText" === c.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                            c.action) {
                              case "insertText":
                              case "insertReplacementText":
                                c.data.forEach((function(e, i) {
                                    var n = new o.Event("keypress");
                                    n.key = e, t.ignorable = !1, f.keypressEvent.call(u, n);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var v = new o.Event("keydown");
                                v.key = a.keys.Backspace, f.keyEvent.call(u, v);
                                break;

                              default:
                                (0, s.applyInputValue)(u, d), n.caret.call(t, u, h.begin, h.end, !0);
                            }
                            e.preventDefault();
                        }
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = null == t ? void 0 : t._valueGet();
                        i.showMaskOnFocus && a !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(this, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                        !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || f.clickEvent.apply(this, [ e, !0 ]), 
                        t.undoValue = null == t ? void 0 : t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                        s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask;
                        i.clicked++;
                        var a = this;
                        if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                            var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                            void 0 !== r && n.caret.call(i, a, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, r = this, l = n.caret.call(t, r), c = t.isRTL ? n.getBuffer.call(t).slice(l.end, l.begin) : n.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                        window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), 
                        o.handleRemove.call(t, r, a.keys.Delete, l), (0, s.writeBuffer)(r, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                        t.clicked = 0;
                        var r = a(this), l = this;
                        if (l.inputmask) {
                            (0, s.HandleNativePlaceholder)(l, t.originalPlaceholder);
                            var c = l.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== c && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && c === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                            !1 === o.isComplete.call(t, u) && (setTimeout((function() {
                                r.trigger("incomplete");
                            }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                            (0, s.writeBuffer)(l, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            r.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts.showMaskOnHover, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            t && (0, s.HandleNativePlaceholder)(i, a);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, s.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
                t.EventHandlers = f;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(2839), o = i(8711), s = i(7760);
                var l = {
                    on: function(e, t, i) {
                        var n = e.inputmask.dependencyLib, l = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                            if (void 0 === u && "FORM" !== this.nodeName) {
                                var d = n.data(c, "_inputmask_opts");
                                n(c).off(), d && new a.default(d).mask(c);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                        break;

                                      case "click":
                                      case "focus":
                                        return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (l = arguments, void setTimeout((function() {
                                            e.inputmask && i.apply(c, l);
                                        }), 0));
                                    }
                                    var p = i.apply(c, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && n(e.form).on(t, l)) : n(e).on(t, l), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, n = e.inputmask.events;
                            for (var a in t && ((n = [])[t] = e.inputmask.events[t]), n) {
                                for (var r = n[a]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(a) ? null !== e.form && i(e.form).off(a, o) : i(e).off(a, o);
                                }
                                delete e.inputmask.events[a];
                            }
                        }
                    }
                };
                t.EventRuler = l;
            },
            219: function(e, t, i) {
                var n = d(i(2394)), a = i(2839), r = d(i(7184)), o = i(8711), s = i(4713);
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, u(e);
                }
                function f(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(e, (a = n.key, r = void 0, r = function(e, t) {
                            if ("object" !== u(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var n = i.call(e, t || "default");
                                if ("object" !== u(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(a, "string"), "symbol" === u(r) ? r : String(r)), n);
                    }
                    var a, r;
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var p = n.default.dependencyLib, h = function() {
                    function e(t, i, n) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = n, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts);
                    }
                    var t, i, n;
                    return t = e, (i = [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t) {
                            var i;
                            for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                var n = new RegExp("\\d+$").exec(i[0]), a = n ? i[0][0] + "x" : i[0], r = void 0;
                                if (void 0 !== e) {
                                    if (n) {
                                        var o = P(t).lastIndex, s = E(i.index, t);
                                        P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                    } else r = e.slice(0, g[a] && g[a][4] || a.length);
                                    e = e.slice(r.length);
                                }
                                Object.prototype.hasOwnProperty.call(g, a) && this.setValue(this, r, a, g[a][2], g[a][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, i, n, a) {
                            if (void 0 !== t && (e[n] = "ampm" === n ? t : t.replace(/[^0-9]/g, "0"), e["raw" + n] = t.replace(/\s/g, "_")), 
                            void 0 !== a) {
                                var r = e[n];
                                ("day" === n && 29 === parseInt(r) || "month" === n && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === n && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === n && (m = !0), 
                                "year" === n && (m = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || a.call(e._date, r), 
                                "ampm" === n && a.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]) && f(t.prototype, i), n && f(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = !1, g = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return M(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return M(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return M(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return M(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return M(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 3);
                    }, 3 ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 2);
                    }, 2 ],
                    t: [ "[ap]", k, "ampm", b, 1 ],
                    tt: [ "[ap]m", k, "ampm", b, 2 ],
                    T: [ "[AP]", k, "ampm", b, 1 ],
                    TT: [ "[AP]M", k, "ampm", b, 2 ],
                    Z: [ ".*", void 0, "Z", function() {
                        var e = this.toString().match(/\((.+)\)/)[1];
                        e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                            return l(e, 1)[0];
                        })).join(""));
                        return e;
                    } ],
                    o: [ "" ],
                    S: [ "" ]
                }, y = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function k(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function b() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function x(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = g[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (g[e[0]]) return g[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for (var n in g) if (/\.*x$/.test(n)) {
                            var a = n[0] + "\\d+";
                            -1 === i.indexOf(a) && i.push(a);
                        } else -1 === t.indexOf(n[0]) && t.push(n[0]);
                        e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function w(e, t, i) {
                    if (!m) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var n = E(t.pos, i);
                        if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function S(e, t, i, n) {
                    var a, o, s = "";
                    for (P(i).lastIndex = 0; a = P(i).exec(e); ) {
                        if (void 0 === t) if (o = x(a)) s += "(" + o[0] + ")"; else switch (a[0]) {
                          case "[":
                            s += "(";
                            break;

                          case "]":
                            s += ")?";
                            break;

                          default:
                            s += (0, r.default)(a[0]);
                        } else if (o = x(a)) if (!0 !== n && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += a[0]; else s += a[0];
                    }
                    return s;
                }
                function M(e, t, i) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                    return e;
                }
                function _(e, t, i) {
                    return "string" == typeof e ? new h(e, t, i) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function O(e, t) {
                    return S(t.inputFormat, {
                        date: e
                    }, t);
                }
                function E(e, t) {
                    var i, n, a = 0, r = 0;
                    for (P(t).lastIndex = 0; n = P(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(n[0]);
                        if ((a += r = o ? parseInt(o[0]) : n[0].length) >= e + 1) {
                            i = n, n = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: a - r,
                        nextMatch: n,
                        targetMatch: i
                    };
                }
                n.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (s) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var l = E(t, a);
                                if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                    var c = g[l.targetMatch[0]][0];
                                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, n, a, r, o, l) {
                            var c, u;
                            if (o) return !0;
                            if (!1 === n && (((c = E(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), 
                            void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, 
                            e[t + 1] = "0", n = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, n = {
                                pos: t + 2
                            })), !1 === n)) return n;
                            if (n.fuzzy && (e = n.buffer, t = n.pos), (c = E(t, a)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                var f = g[c.targetMatch[0]];
                                u = f[0];
                                var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                "year" == f[2]) for (var p = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                delete r.validPositions[h];
                            }
                            var m = n, y = _(e.join(""), a.inputFormat, a);
                            return m && !isNaN(y.date.getTime()) && (a.prefillYear && (m = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var n = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = n.slice(0, a.length), o = n.slice(a.length);
                                    if (2 === a.length && a === r) {
                                        var s = new Date(v, e.month - 1, e.day);
                                        e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(v), 
                                        e.year = n, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(y, m, a)), m = function(e, t, i, n, a) {
                                if (!t) return t;
                                if (t && i.min && !isNaN(i.min.date.getTime())) {
                                    var r;
                                    for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                        var o;
                                        if ((o = x(r)) && o[3]) {
                                            for (var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], d = !1, p = 0; p < c.length; p++) void 0 !== n.validPositions[p + r.index] || d ? (f[p] = l[p], 
                                            d = d || l[p] > c[p]) : (f[p] = c[p], "year" === o[2] && l.length - 1 == p && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[p] = u[p]));
                                            s.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), 
                                t;
                            }(y, m = w.call(this, y, m, a), a, r)), void 0 !== t && m && n.pos !== t ? {
                                buffer: S(a.inputFormat, y, a).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: n.pos
                                },
                                pos: n.caret || n.pos
                            } : m;
                        },
                        onKeyDown: function(e, t, i, n) {
                            e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(new Date, n)), 
                            p(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, n) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                        },
                        insertMode: !1,
                        insertModeVisual: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(8711), o = i(4713);
                a.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function l(e, t, i, n, a) {
                    return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                    s.test(e);
                }
                a.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: l
                            },
                            j: {
                                validator: l
                            },
                            k: {
                                validator: l
                            },
                            l: {
                                validator: l
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = e.separator, i = e.quantifier, n = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = n;
                            if (t) for (var r = 0; r < i; r++) a += "[".concat(t).concat(n, "]");
                            return a;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, n, a, s, l) {
                            var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var n = s(i(2394)), a = s(i(7184)), r = i(8711), o = i(2839);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = n.default.dependencyLib;
                function c(e, t) {
                    for (var i = "", a = 0; a < e.length; a++) n.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
                    return i;
                }
                function u(e, t, i, n) {
                    if (e.length > 0 && t > 0 && (!i.digitsOptional || n)) {
                        var a = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(i.radixPoint), 
                        a = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    for (var n in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), 
                    t.tests) if ((n = parseInt(n)) >= i) for (var a = 0, o = t.tests[n].length; a < o; a++) if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][a].match.def === e) return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
                    return i;
                }
                function d(e, t) {
                    for (var i = -1, n = 0, a = t.validPositions.length; n < a; n++) {
                        var r = t.validPositions[n];
                        if (r && r.match.def === e) {
                            i = n;
                            break;
                        }
                    }
                    return i;
                }
                function p(e, t, i, n, a) {
                    var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || n && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                    return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: a.radixPoint
                        },
                        pos: i
                    } : o;
                }
                n.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                            e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var n, r = "[+]";
                            if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (n = r + i + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return r += c(e.suffix, e), r += "[-]", n && (r = [ n + c(e.suffix, e) + "[-]", r ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                            r;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        substituteRadixPoint: !0,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && e === a.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (!1 !== a.__financeInput && i === a.radixPoint) return !1;
                            var l = e.indexOf(a.radixPoint), c = t;
                            if (t = function(e, t, i, n, a) {
                                return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= i && (i > 0 || t == a.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, i, l, r, a), "-" === i || i === a.negationSymbol.front) {
                                if (!0 !== a.allowMinus) return !1;
                                var u = !1, p = d("+", r), h = d("-", r);
                                return -1 !== p && (u = [ p, h ]), !1 !== u ? {
                                    remove: u,
                                    caret: c - a.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: a.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: a.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: c + a.negationSymbol.back.length
                                };
                            }
                            if (i === a.groupSeparator) return {
                                caret: c
                            };
                            if (s) return !0;
                            if (-1 !== l && !0 === a._radixDance && !1 === n && i === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && l !== t) return {
                                caret: a._radixDance && t === l - 1 ? l + 1 : l
                            };
                            if (!1 === a.__financeInput) if (n) {
                                if (a.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!a.digitsOptional) {
                                    if (o.begin > l && o.end <= l) return i === a.radixPoint ? {
                                        insert: {
                                            pos: l + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: l
                                    } : {
                                        rewritePosition: l + 1
                                    };
                                    if (o.begin < l) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: l
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, n, a, r, o) {
                            if (!1 === n) return n;
                            if (o) return !0;
                            if (null !== a.min || null !== a.max) {
                                var s = a.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, a, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== a.min && s < a.min && (s.toString().length > a.min.toString().length || s < 0)) return !1;
                                if (null !== a.max && s > a.max) return !!a.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                };
                            }
                            return n;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var n = e.replace(i.prefix, "");
                            return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), 
                            "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                            i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(a.default.call(this, i.radixPoint), ".")), 
                            n = (n = n.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            a.default)(i.negationSymbol.back) + "$"), ""), Number(n)) : n;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                            a.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", l = r.length > 1;
                            e = o + ("" !== s ? i + s : s);
                            var c = 0;
                            if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                            "" !== s || !t.digitsOptional)) {
                                var f = Math.pow(10, c || 1);
                                e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), 
                                e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(i, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return n && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                        },
                        onBeforeWrite: function(e, t, i, n) {
                            function r(e, t) {
                                if (!1 !== n.__financeInput || t) {
                                    var i = e.indexOf(n.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== n.groupSeparator) for (;-1 !== (i = e.indexOf(n.groupSeparator)); ) e.splice(i, 1);
                                return e;
                            }
                            var o, s;
                            if (n.stripLeadingZeroes && (s = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), n = i ? i[2] : "", r = !1;
                                return n && (n = n.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)), 
                                !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < n.length)) && r;
                            }(t, n))) for (var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[c + d], 
                            delete t[c + d];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== n.min) {
                                    var p = n.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, n, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== n.min && p < n.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: u(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                    };
                                }
                                if (t[t.length - 1] === n.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != n.negationSymbol.front ? (0, a.default)(n.negationSymbol.front) + "?" : "") + (0, 
                                    a.default)(n.prefix) + ")(.*)(" + (0, a.default)(n.suffix) + ("" != n.negationSymbol.back ? (0, 
                                    a.default)(n.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else if ("" !== n.radixPoint) {
                                    t.indexOf(n.radixPoint) === n.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + n.suffix.length) : (t.splice(0, 1 + n.suffix.length), 
                                    o = {
                                        refreshFromBuffer: !0,
                                        buffer: r(t)
                                    }));
                                }
                                if (n.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = u(v, n.digits, n, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, n) {
                            var a, r = l(this);
                            if (3 != e.location) {
                                var s, c = e.key;
                                if ((s = n.shortcuts && n.shortcuts[c]) && s.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (e.ctrlKey) switch (e.key) {
                              case o.keys.ArrowUp:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), 
                                r.trigger("setvalue"), !1;

                              case o.keys.ArrowDown:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === n.negationSymbol.front) return a = t.slice().reverse(), 
                                "" !== n.negationSymbol.front && a.shift(), "" !== n.negationSymbol.back && a.pop(), 
                                r.trigger("setvalue", [ a.join(""), i.begin ]), !1;
                                if (!0 === n._radixDance) {
                                    var f = t.indexOf(n.radixPoint);
                                    if (n.digitsOptional) {
                                        if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [ a.join(""), i.begin >= a.length ? a.length : i.begin ]), 
                                        !1;
                                    } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                        var d = void 0;
                                        return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (d = l.extend({}, i), 
                                        i.begin--, i.end--)), (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), 
                                        a = u(a, n.digits, n).join(""), d && (i = d), r.trigger("setvalue", [ a, i.begin >= a.length ? f + 1 : i.begin ]), 
                                        !1;
                                    }
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = ((n = i(8741)) && n.__esModule ? n : {
                    default: n
                }).default ? window : {};
                t.default = a;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (s.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var n = r.getBuffer.call(i).slice(), a = e.inputmask._valueGet();
                            if (a !== t) {
                                var o = r.getLastValidPosition.call(i);
                                -1 === o && a === r.getBufferTemplate.call(i).join("") ? n = [] : -1 !== o && u.call(i, n), 
                                d(e, n);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, n = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    for (var a = [], o = n.validPositions, s = 0, l = o.length; s < l; s++) o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(n.metadata) && !0 !== o[s].generatedInput) && a.push(o[s].input);
                    var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                    if ("function" == typeof i.onUnMask) {
                        var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                        u = i.onUnMask.call(t, f, u, i);
                    }
                    return u;
                }, t.writeBuffer = d;
                var n = i(2839), a = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, n = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t), 
                    f(e, !0, !1, t = (t || "").toString().split("")), i.undoValue = i._valueGet(!0), 
                    (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function u(e) {
                    e.length = 0;
                    for (var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function f(e, t, i, n, s) {
                    var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, p = c.dependencyLib, h = n.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                        begin: m
                    };
                    var k = [], b = c.caretPos;
                    if (h.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var n = new p.Event("_checkval");
                            n.key = e, v += e;
                            var o = r.getLastValidPosition.call(c, void 0, !0);
                            !function(e, t) {
                                for (var i = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); n > 0 && " " === i[n - 1]; ) n--;
                                var o = 0 === n && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!o && n > 0 && !r.isMask.call(c, e, !1, !0)) {
                                    var s = r.seekNext.call(c, e);
                                    c.caretPos.begin < s && (c.caretPos = {
                                        begin: s
                                    });
                                }
                                return o;
                            }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, c.caretPos.begin)) && (m = c.caretPos.begin + 1, 
                            v = "") : g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos), 
                            c.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, n, !1), 
                            c.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                        }
                    })), k.length > 0) {
                        var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                        if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for (var S = w; void 0 !== (x = k.shift()); ) {
                            var M = new p.Event("_checkval");
                            if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos); else if (!g) break;
                            S++;
                        }
                    }
                    t && d.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new p.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), 
                    f.skipOptionalPartCharacter = y;
                }
                function d(e, t, i, a, s) {
                    var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                    if (a && "function" == typeof c.onBeforeWrite) {
                        var f = c.onBeforeWrite.call(l, a, t, i, c);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                o.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === n.keys.Delete || a.key === n.keys.Backspace)), 
                    !0 === s)) {
                        var p = u(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                            h === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(157), a = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                function v(e) {
                    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, v(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, y = "_inputmask_opts";
                function k(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof k)) return new k(e, t, i);
                        this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                        !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                        this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                        this.isComposing = !1, this.hasAlternator = !1;
                    }
                }
                function b(e, t, i) {
                    var n = k.prototype.aliases[e];
                    return n ? (n.alias && b(n.alias, void 0, i), a.default.extend(!0, i, n), a.default.extend(!0, i, t), 
                    !0) : (null === i.mask && (i.mask = e), !1);
                }
                k.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, i) {
                            var s = a.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, n) {
                                function o(t, a) {
                                    var o = "" === n ? t : n + "-" + t;
                                    null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                    i[t] = a);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var s, l, c, u, f = e.getAttribute(n);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                    l) for (u in c = void 0, l) if ("alias" === u.toLowerCase()) {
                                        c = l[u];
                                        break;
                                    }
                                    for (s in o("alias", c), i.alias && b(i.alias, i, t), t) {
                                        if (l) for (u in c = void 0, l) if (u.toLowerCase() === s.toLowerCase()) {
                                            c = l[u];
                                            break;
                                        }
                                        o(s, c);
                                    }
                                }
                                a.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(i).length;
                            }(e, s, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new k(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = l, a.default.data(e, y, t.userOptions), 
                                n.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (a.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                        }
                        return u.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            a.default.data(this.el, y, null);
                            var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        c.isComplete.call(this, l.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        for (var i = l.getBuffer.call(this), n = l.determineLastRequiredPosition.call(this), a = i.length - 1; a > n && !l.isMask.call(this, a); a--) ;
                        return i.splice(n, a + 1 - n), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        u.checkVal.call(this, void 0, !0, !1, i);
                        var n = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        return t ? {
                            value: n,
                            metadata: this.getmetadata()
                        } : n;
                    },
                    setValue: function(e) {
                        this.el && (0, a.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, k.extendDefaults = function(e) {
                    a.default.extend(!0, k.prototype.defaults, e);
                }, k.extendDefinitions = function(e) {
                    a.default.extend(!0, k.prototype.definitions, e);
                }, k.extendAliases = function(e) {
                    a.default.extend(!0, k.prototype.aliases, e);
                }, k.format = function(e, t, i) {
                    return k(t).format(e, i);
                }, k.unmask = function(e, t) {
                    return k(t).unmaskedvalue(e);
                }, k.isValid = function(e, t) {
                    return k(t).isValid(e);
                }, k.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, k.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, k.dependencyLib = a.default, r.default.Inputmask = k;
                var x = k;
                t.default = x;
            },
            5296: function(e, t, i) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                var a = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                function s(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var a = i.call(e, t || "default");
                                if ("object" !== n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(r, "string"), "symbol" === n(o) ? o : String(o)), a);
                    }
                    var r, o;
                }
                function l(e) {
                    var t = f();
                    return function() {
                        var i, a = p(e);
                        if (t) {
                            var r = p(this).constructor;
                            i = Reflect.construct(a, arguments, r);
                        } else i = a.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === n(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }(e);
                        }(this, i);
                    };
                }
                function c(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return c = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return u(e, arguments, p(this).constructor);
                        }
                        return n.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), d(n, e);
                    }, c(e);
                }
                function u(e, t, i) {
                    return u = f() ? Reflect.construct.bind() : function(e, t, i) {
                        var n = [ null ];
                        n.push.apply(n, t);
                        var a = new (Function.bind.apply(e, n));
                        return i && d(a, i.prototype), a;
                    }, u.apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function d(e, t) {
                    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e;
                    }, d(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var v = a.default.document;
                if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                    var m = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && d(e, t);
                        }(o, e);
                        var t, i, n, a = l(o);
                        function o() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, o);
                            var t = (e = a.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), n = v.createElement("input");
                            for (var s in n.type = "text", i.appendChild(n), t) Object.prototype.hasOwnProperty.call(t, s) && n.setAttribute(t[s], e.getAttribute(t[s]));
                            var l = new r.default;
                            return l.dataAttribute = "", l.mask(n), n.inputmask.shadowRoot = i, e;
                        }
                        return t = o, i && s(t.prototype, i), n && s(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t;
                    }(c(HTMLElement));
                    a.default.customElements.define("input-mask", m);
                }
            },
            2839: function(e, t) {
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return n(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                    return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                }, t.toKeyCode = function(e) {
                    return a[e];
                };
                var a = {
                    AltGraph: 18,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                    ArrowRight: 39,
                    ArrowUp: 38,
                    Backspace: 8,
                    BACKSPACE_SAFARI: 127,
                    CapsLock: 20,
                    Delete: 46,
                    End: 35,
                    Enter: 13,
                    Escape: 27,
                    Home: 36,
                    Insert: 45,
                    PageDown: 34,
                    PageUp: 33,
                    Space: 32,
                    Tab: 9,
                    c: 67,
                    x: 88,
                    z: 90,
                    Shift: 16,
                    Control: 17,
                    Alt: 18,
                    Pause: 19,
                    Meta_LEFT: 91,
                    Meta_RIGHT: 92,
                    ContextMenu: 93,
                    Process: 229,
                    Unidentified: 229,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123
                };
                t.keyCode = a;
                var r = Object.entries(a).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0], r = n[1];
                    return e[r] = void 0 === e[r] ? a : e[r], e;
                }), {}), o = Object.entries(a).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0];
                    n[1];
                    return e[a] = "Space" === a ? " " : a, e;
                }), {});
                t.keys = o;
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, i) {
                    var n, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new a.default, v = [], m = [], g = !1;
                    function y(e, n, a) {
                        a = void 0 !== a ? a : e.matches.length;
                        var o = e.matches[a - 1];
                        if (t) {
                            if (0 === n.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n) || "." === n) {
                                var s = i.casing ? "i" : "";
                                /^\\p\{.*}$/i.test(n) && (s += "u"), e.matches.splice(a++, 0, {
                                    fn: new RegExp(n, s),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== n,
                                    casing: null,
                                    def: n,
                                    placeholder: void 0,
                                    nativeDef: n
                                });
                            } else p && (n = n[n.length - 1]), n.split("").forEach((function(t, n) {
                                o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                    fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                    casing: null,
                                    def: i.staticDefinitionSymbol || t,
                                    placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                    nativeDef: (p ? "'" : "") + t
                                });
                            }));
                            p = !1;
                        } else {
                            var l = i.definitions && i.definitions[n] || i.usePrototypeDefinitions && r.default.prototype.definitions[n];
                            l && !p ? e.matches.splice(a++, 0, {
                                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                    this.test = l.validator;
                                } : new RegExp("."),
                                static: l.static || !1,
                                optionality: l.optional || !1,
                                defOptionality: l.optional || !1,
                                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || n),
                                casing: l.casing,
                                def: l.definitionSymbol || n,
                                placeholder: l.placeholder,
                                nativeDef: n,
                                generated: l.generated
                            }) : (e.matches.splice(a++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || n) ? new RegExp("[" + (i.staticDefinitionSymbol || n) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== n && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || n,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                                nativeDef: (p ? "'" : "") + n
                            }), p = !1);
                        }
                    }
                    function k() {
                        if (v.length > 0) {
                            if (y(l = v[v.length - 1], o), l.isAlternator) {
                                c = v.pop();
                                for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else y(h, o);
                    }
                    function b(e) {
                        var t = new a.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((s = v.pop()).openGroup = !1, void 0 !== s) if (v.length > 0) {
                            if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                                for (var e = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, 
                                c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else h.matches.push(s); else k();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                    }
                    t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                    for (;n = t ? d.exec(e) : f.exec(e); ) {
                        if (o = n[0], t) {
                            switch (o.charAt(0)) {
                              case "?":
                                o = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                o = "{" + o + "}";
                                break;

                              case "|":
                                if (0 === v.length) {
                                    var w = b(h.matches);
                                    w.openGroup = !0, v.push(w), h.matches = [], g = !0;
                                }
                            }
                            switch (o) {
                              case "\\d":
                                o = "[0-9]";
                                break;

                              case "\\p":
                                o += d.exec(e)[0], o += d.exec(e)[0];
                            }
                        }
                        if (p) k(); else switch (o.charAt(0)) {
                          case "$":
                          case "^":
                            t || k();
                            break;

                          case i.escapeChar:
                            p = !0, t && k();
                            break;

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x();
                            break;

                          case i.optionalmarker[0]:
                            v.push(new a.default(!1, !0));
                            break;

                          case i.groupmarker[0]:
                            v.push(new a.default(!0));
                            break;

                          case i.quantifiermarker[0]:
                            var S = new a.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                            "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                                min: O,
                                max: E,
                                jit: T
                            };
                            var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                            (n = j.pop()).isGroup || (n = b([ n ])), j.push(n), j.push(S);
                            break;

                          case i.alternatormarker:
                            if (v.length > 0) {
                                var A = (l = v[v.length - 1]).matches[l.matches.length - 1];
                                u = l.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? v.pop() : P(l.matches);
                            } else u = P(h.matches);
                            if (u.isAlternator) v.push(u); else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = !1) : c = new a.default(!1, !1, !1, !0), 
                            c.matches.push(u), v.push(c), u.openGroup) {
                                u.openGroup = !1;
                                var D = new a.default(!0);
                                D.alternatorGroup = !0, v.push(D);
                            }
                            break;

                          default:
                            k();
                        }
                    }
                    g && x();
                    for (;v.length > 0; ) s = v.pop(), h.matches.push(s);
                    h.matches.length > 0 && (!function e(n) {
                        n && n.matches && n.matches.forEach((function(a, r) {
                            var o = n.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                            t || (y(a, i.groupmarker[0], 0), !0 !== a.openGroup && y(a, i.groupmarker[1]))), 
                            e(a);
                        }));
                    }(h), m.push(h));
                    (i.numericInput || i.isRTL) && function e(t) {
                        for (var n in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                            var a = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                var r = t.matches[n];
                                t.matches.splice(n, 1), t.matches.splice(a + 1, 0, r);
                            }
                            void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((o = t.matches[n]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(m[0]);
                    return m;
                }, t.generateMaskSet = function(e, t) {
                    var i;
                    function a(e, t) {
                        var i = t.repeat, n = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                        if (i > 0 || "*" === i || "+" === i) {
                            var l = "*" === i ? 0 : "+" === i ? 1 : i;
                            e = n[0] + e + n[1] + a[0] + l + "," + i + a[1];
                        }
                        if (!0 === r) {
                            var c = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                            c && c.forEach((function(t, i) {
                                var n = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(e) || function(e, t) {
                                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != i) {
                                            var n, a, r, o, s = [], l = !0, c = !1;
                                            try {
                                                if (r = (i = i.call(e)).next, 0 === t) {
                                                    if (Object(i) !== i) return;
                                                    l = !1;
                                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                            } catch (e) {
                                                c = !0, a = e;
                                            } finally {
                                                try {
                                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                                } finally {
                                                    if (c) throw a;
                                                }
                                            }
                                            return s;
                                        }
                                    }(e, t) || function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return s(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }();
                                }(t.split("["), 2), a = n[0], r = n[1];
                                r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0, 
                                o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                            }));
                        }
                        return e;
                    }
                    function l(e, i, o) {
                        var s, l, c = !1;
                        return null !== e && "" !== e || ((c = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, 
                        e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), 
                        e = a(e, o), l = c ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e, 
                        null !== o.keepStatic && (l = "ks_" + o.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, c, o),
                            validPositions: [],
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                        s;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var c = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                c.length > 1 && (c += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? c += t.mask : c += t;
                            })), l(c += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? l(e.mask.mask, e.mask, e) : l(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return i;
                };
                var n = l(i(4963)), a = l(i(9695)), r = l(i(2394)), o = l(i(7184));
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                    o.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.keys.Enter);
                        var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!l) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", s), l = "text" === c.type, c = null;
                        } else l = "partial";
                        return !1 !== l ? function(t) {
                            var n, s;
                            function l() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, s = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                    s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, s = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                        var n = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        u.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var r = n(t);
                                                    return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var i = o(e, t);
                                                return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(e) {
                                    o.EventRuler.on(e, "mouseenter", (function() {
                                        var e = this, t = e.inputmask._valueGet(!0);
                                        t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0, 
                                        r.applyInputValue)(e, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, l;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                        i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                        s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                        o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                        o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                        o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                        o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), 
                        o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && o.EventRuler.on(i, "keydown", c.EventHandlers.keyEvent), 
                        (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent)), 
                        o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), 
                        e.undoValue = e._valueGet(!0);
                        var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                            (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var p = a.getBuffer.call(e).slice();
                            !1 === l.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                            r.writeBuffer)(i, p), d === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                        }
                    }
                };
                var n = i(2839), a = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, n) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), n = i.length >>> 0;
                        if (0 === n) return !1;
                        for (var a = 0 | t, r = Math.max(a >= 0 ? a : n - Math.abs(a), 0); r < n; ) {
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            9302: function() {
                var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys;
                Object.entries || (Object.entries = function(a) {
                    return e(n(a), (function(e, n) {
                        return i(e, "string" == typeof n && t(a, n) ? [ [ n, a[n] ] ] : []);
                    }), []);
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            4013: function() {
                String.prototype.includes || (String.prototype.includes = function(e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, n, a) {
                    var r, o = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), 
                    {
                        begin: n ? t : c.call(o, t),
                        end: n ? i : c.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = n ? t : c.call(o, t), i = "number" == typeof (i = n ? i : c.call(o, i)) ? i : t;
                        var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, s.insertModeVisual && !1 === s.insertMode && t === i && (a || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var u = document.createTextNode("");
                                e.appendChild(u);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, s = r.maskset, l = r.dependencyLib, c = n.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for (t = f + 1; t < c.length; t++) h = (i = n.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), 
                    d[t] = l.extend(!0, {}, i);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for (t = u - 1; t > f && (((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && a.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n.getTests.call(r, t)[0].def)) && c[t] === n.getPlaceholder.call(r, t, i.match)); t--) u--;
                    return e ? {
                        l: u,
                        def: d[u] ? d[u].match : void 0
                    } : u;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var a = this, c = a.maskset, u = a.opts;
                    t && (a.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (i = i || u.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(a).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = l.call(a, o.call(a));
                            break;

                          case "radixFocus":
                            if (a.clicked > 1 && 0 == c.validPositions.length) break;
                            if (function(e) {
                                if ("" !== u.radixPoint && 0 !== u.digits) {
                                    var t = c.validPositions;
                                    if (void 0 === t[e] || t[e].input === n.getPlaceholder.call(a, e)) {
                                        if (e < l.call(a, -1)) return !0;
                                        var i = r.call(a).indexOf(u.radixPoint);
                                        if (-1 !== i) {
                                            for (var o = 0, s = t.length; o < s; o++) if (t[o] && i < o && t[o].input !== n.getPlaceholder.call(a, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(a).join("").indexOf(u.radixPoint);
                                e.end = e.begin = u.numericInput ? l.call(a, f) : f;
                                break;
                            }

                          default:
                            var d = e.begin, p = o.call(a, d, !0), h = l.call(a, -1 !== p || s.call(a, 0) ? p : -1);
                            if (d <= h) e.end = e.begin = s.call(a, d, !1, !0) ? d : l.call(a, d); else {
                                var v = c.validPositions[p], m = n.getTestTemplate.call(a, h, v ? v.match.locator : void 0, v), g = n.getPlaceholder.call(a, h, m.match);
                                if ("" !== g && r.call(a)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(a, h, u.keepStatic, !0) && m.match.def === g) {
                                    var y = l.call(a, h);
                                    (d >= y || d === h) && (h = y);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = n.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                }, t.seekNext = l, t.seekPrevious = function(e, t) {
                    var i = this, a = e - 1;
                    if (e <= 0) return 0;
                    for (;a > 0 && (!0 === t && (!0 !== n.getTest.call(i, a).match.newBlockMarker || !s.call(i, a, void 0, !0)) || !0 !== t && !s.call(i, a, void 0, !0)); ) a--;
                    return a;
                }, t.translatePosition = c;
                var n = i(4713), a = i(7215);
                function r(e) {
                    var t = this, i = t.maskset;
                    return void 0 !== i.buffer && !0 !== e || (i.buffer = n.getMaskTemplate.call(t, !0, o.call(t), !0), 
                    void 0 === i._buffer && (i._buffer = i.buffer.slice())), i.buffer;
                }
                function o(e, t, i) {
                    var n = this.maskset, a = -1, r = -1, o = i || n.validPositions;
                    void 0 === e && (e = -1);
                    for (var s = 0, l = o.length; s < l; s++) o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (a = s), 
                    s >= e && (r = s));
                    return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
                }
                function s(e, t, i) {
                    var a = this, r = this.maskset, o = n.getTestTemplate.call(a, e).match;
                    if ("" === o.def && (o = n.getTest.call(a, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (i) {
                            var s = n.getTests.call(a, e);
                            return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                        }
                        var l = n.determineTestTemplate.call(a, e, n.getTests.call(a, e)), c = n.getPlaceholder.call(a, e, l.match);
                        return l.match.def !== c;
                    }
                    return !1;
                }
                function l(e, t, i) {
                    var a = this;
                    void 0 === i && (i = !0);
                    for (var r = e + 1; "" !== n.getTest.call(a, r).match.def && (!0 === t && (!0 !== n.getTest.call(a, r).match.newBlockMarker || !s.call(a, r, void 0, !0)) || !0 !== t && !s.call(a, r, void 0, i)); ) r++;
                    return r;
                }
                function c(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), 
                    e;
                }
            },
            4713: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, n, a) {
                    var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                    a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, h, v, m, g = [], y = 0;
                    do {
                        if (!0 === e && u.validPositions[y]) h = (v = a && u.validPositions[y].match.optionality && void 0 === u.validPositions[y + 1] && (!0 === u.validPositions[y].generatedInput || u.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? c.call(r, y, d.call(r, y, p, y - 1)) : u.validPositions[y]).match, 
                        p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : s.call(r, y, h)); else {
                            h = (v = l.call(r, y, p, y - 1)).match, p = v.locator.slice();
                            var k = !0 !== n && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[y - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[y]) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : m = !1;
                        }
                        y++;
                    } while (!0 !== h.static || "" !== h.def || t > y);
                    "" === g[g.length - 1] && g.pop();
                    !1 === i && void 0 !== u.maskLength || (u.maskLength = y - 1);
                    return o.greedy = f, g;
                }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = d, t.isSubsetOf = f;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                };
                function r(e, t) {
                    var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function o(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function s(e, t, i) {
                    var n = this.opts, a = this.maskset;
                    if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === a.validPositions[e]) {
                            var r, o = d.call(this, e), s = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, a, e, !0, n)) && (s.push(o[l]), 
                            !0 === o[l].match.static && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length);
                        }
                        return t.def;
                    }
                    return n.placeholder.charAt(e % n.placeholder.length);
                }
                function l(e, t, i) {
                    return this.maskset.validPositions[e] || c.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                }
                function c(e, t) {
                    var i = this.opts, n = 0, a = function(e, t) {
                        var i = 0, n = !1;
                        t.forEach((function(e) {
                            e.match.optionality && (0 !== i && i !== e.match.optionality && (n = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                        })), i && (0 == e || 1 == t.length ? i = 0 : n || (i = 0));
                        return i;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var o, s, l, c = r(u.call(this, e));
                    i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (n = 1);
                    for (var f = 0; f < t.length - n; f++) {
                        var d = t[f];
                        o = r(d, c.length);
                        var p = Math.abs(o - c);
                        (void 0 === s || "" !== o && p < s || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!d.match.optionality || d.match.optionality - a < 1 || !d.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !d.match.optionalQuantifier) && (s = p, 
                        l = d);
                    }
                    return l;
                }
                function u(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                }
                function f(e, t, i) {
                    function n(e) {
                        for (var t, i = [], n = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++n < t; ) i.push(String.fromCharCode(n)); else n = e.charCodeAt(a), 
                        i.push(e.charAt(a));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function d(e, t, i) {
                    var n, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, d = this.el, p = l.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "";
                    function k(t, i, r, s) {
                        function c(r, s, p) {
                            function v(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every((function(n, a) {
                                    return !0 === n.isQuantifier ? i = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(n, "matches") && (i = v(e, n)), 
                                    !i;
                                })), i;
                            }
                            function x(e, t, i) {
                                var n, a;
                                if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [ l.validPositions[e] ]).every((function(e, r) {
                                    if (e.mloc[t]) return n = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === a || s < a) && -1 !== s && (n = e, a = s), !0;
                                })), n) {
                                    var r = n.locator[n.alternation];
                                    return (n.mloc[t] || n.mloc[r] || n.locator).slice((void 0 !== i ? i : n.alternation) + 1);
                                }
                                return void 0 !== i ? x(e, t) : void 0;
                            }
                            function P(e, t) {
                                var i = e.alternation, n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!n && i > t.alternation) for (var a = t.alternation; a < i; a++) if (e.locator[a] !== t.locator[a]) {
                                    i = a, n = !0;
                                    break;
                                }
                                if (n) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function w(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: s.reverse(),
                                    cd: y,
                                    mloc: {}
                                }), !r.optionality || void 0 !== p || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && p !== r) return function() {
                                    if (r = c(t.matches[t.matches.indexOf(r) + 1], s, p)) return !0;
                                }();
                                if (r.isOptional) return function() {
                                    var t = r, a = m.length;
                                    if (r = k(r, i, s, p), m.length > 0) {
                                        if (m.forEach((function(e, t) {
                                            t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        })), n = m[m.length - 1].match, void 0 !== p || !v(n, t)) return r;
                                        g = !0, h = e;
                                    }
                                }();
                                if (r.isAlternator) return function() {
                                    o.hasAlternator = !0;
                                    var n, a, v, y = r, k = [], b = m.slice(), S = s.length, M = !1, _ = i.length > 0 ? i.shift() : -1;
                                    if (-1 === _ || "string" == typeof _) {
                                        var O, E = h, T = i.slice(), j = [];
                                        if ("string" == typeof _) j = _.split(","); else for (O = 0; O < y.matches.length; O++) j.push(O.toString());
                                        if (void 0 !== l.excludes[e]) {
                                            for (var A = j.slice(), D = 0, B = l.excludes[e].length; D < B; D++) {
                                                var C = l.excludes[e][D].toString().split(":");
                                                s.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                                            }
                                            0 === j.length && (delete l.excludes[e], j = A);
                                        }
                                        (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && E >= u.keepStatic) && (j = j.slice(0, 1));
                                        for (var R = 0; R < j.length; R++) {
                                            O = parseInt(j[R]), m = [], i = "string" == typeof _ && x(h, O, S) || T.slice();
                                            var L = y.matches[O];
                                            if (L && c(L, [ O ].concat(s), p)) r = !0; else if (0 === R && (M = !0), L && L.matches && L.matches.length > y.matches[0].matches.length) break;
                                            n = m.slice(), h = E, m = [];
                                            for (var F = 0; F < n.length; F++) {
                                                var I = n[F], N = !1;
                                                I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P(I);
                                                for (var V = 0; V < k.length; V++) {
                                                    var G = k[V];
                                                    if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                                        if (I.match.nativeDef === G.match.nativeDef) {
                                                            N = !0, P(G, I);
                                                            break;
                                                        }
                                                        if (f(I, G, u)) {
                                                            P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I));
                                                            break;
                                                        }
                                                        if (f(G, I, u)) {
                                                            P(G, I);
                                                            break;
                                                        }
                                                        if (v = G, !0 === (a = I).match.static && !0 !== v.match.static && v.match.fn.test(a.match.def, l, e, !1, u, !1)) {
                                                            w(I, G) || void 0 !== d.inputmask.userOptions.keepStatic ? P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I)) : u.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                N || k.push(I);
                                            }
                                        }
                                        m = b.concat(k), h = e, g = m.length > 0, r = k.length > 0, i = T.slice();
                                    } else r = c(y.matches[_] || t.matches[_], [ _ ].concat(s), p);
                                    if (r) return !0;
                                }();
                                if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                    for (var a = r, o = !1, f = i.length > 0 ? i.shift() : 0; f < (isNaN(a.quantifier.max) ? f + 1 : a.quantifier.max) && h <= e; f++) {
                                        var d = t.matches[t.matches.indexOf(a) - 1];
                                        if (r = c(d, [ f ].concat(s), d)) {
                                            if (m.forEach((function(t, i) {
                                                (n = b(d, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = f >= a.quantifier.min, 
                                                n.jit = (f + 1) * (d.matches.indexOf(n) + 1) > a.quantifier.jit, n.optionalQuantifier && v(n, d) && (g = !0, 
                                                h = e, u.greedy && null == l.validPositions[e - 1] && f > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                y = void 0), o = !0, r = !1), !o && n.jit && (l.jitOffset[e] = d.matches.length - d.matches.indexOf(n));
                                            })), o) break;
                                            return !0;
                                        }
                                    }
                                }();
                                if (r = k(r, i, s, p)) return !0;
                            } else h++;
                        }
                        for (var p = i.length > 0 ? i.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                            var v = c(t.matches[p], [ p ].concat(r), s);
                            if (v && h === e) return v;
                            if (h > e) break;
                        }
                    }
                    function b(e, t) {
                        var i = -1 != e.matches.indexOf(t);
                        return i || e.matches.forEach((function(e, n) {
                            void 0 === e.matches || i || (i = b(e, t));
                        })), i;
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var x, P = e - 1; void 0 === (x = l.validPositions[P] || l.tests[P]) && P > -1; ) P--;
                            void 0 !== x && P > -1 && (v = function(e, t) {
                                var i, n = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (n = c.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === n.length ? (i = e.alternation, n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]));
                                }))), n;
                            }(P, x), y = v.join(""), h = P);
                        }
                        if (l.tests[e] && l.tests[e][0].cd === y) return l.tests[e];
                        for (var w = v.shift(); w < p.length; w++) {
                            if (k(p[w], v, [ w ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: y
                    }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], m) : (l.tests[e] = s.extend(!0, [], m), 
                    r = l.tests[e]), m.forEach((function(e) {
                        e.match.optionality = e.match.defOptionality || !1;
                    })), r;
                }
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                    for (var n, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (n = e.indexOf(o[s])) && e.splice(n, 1);
                    for (var l = 0; l < e.length; l++) if (a.includes(e[l])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, i, o, l) {
                    var c = this, u = this.maskset, f = this.opts;
                    if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                    c.isRTL)) {
                        var d = i.end;
                        i.end = i.begin, i.begin = d;
                    }
                    var p, h = r.getLastValidPosition.call(c, void 0, !0);
                    i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1);
                    t === a.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1);
                    if (!1 !== (p = v.call(c, i))) {
                        if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                            var m = s.call(c, !0);
                            if (m) {
                                var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                (t !== a.keys.Delete || i.begin > g) && i.begin;
                            }
                        }
                        !0 !== o && (u.p = t === a.keys.Delete ? i.begin + p : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                            begin: u.p,
                            end: u.p
                        }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                    }
                }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = p, 
                t.revalidateMask = v;
                var n = i(4713), a = i(2839), r = i(8711), o = i(6030);
                function s(e, t, i, a, o, l) {
                    var c, u, d, p, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                    if (l && (k = l.begin, b = l.end, l.begin > l.end && (k = l.end, b = l.begin)), 
                    -1 === T && void 0 === o) c = 0, u = (p = n.getTest.call(x, c)).alternation; else for (;T >= 0; T--) if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                        if (T <= (e || 0) && p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                        c = T, u = S.validPositions[c].alternation, p = d;
                    }
                    if (void 0 !== u) {
                        m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                        n.getDecisionTaker)(p) + ":" + p.alternation);
                        var j = [], A = -1;
                        for (h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (j.push(t), 
                        A = j.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < k || h >= b) && j.push(v.input), 
                        delete S.validPositions[h];
                        for (-1 === A && void 0 !== t && (j.push(t), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                            for (S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, 
                            y = j[h], O = f.call(x, g, y, !1, a, !0)); h++) h === A && (E = O), 1 == e && O && (E = {
                                caretPos: h
                            });
                            if (O) break;
                            if (r.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, [], M), 
                            S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                        }
                    }
                    return E && !1 === w.keepStatic || delete S.excludes[m], E;
                }
                function l(e, t, i) {
                    var n = this.opts, r = this.maskset;
                    switch (n.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = r.validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof n.casing) {
                            var s = Array.prototype.slice.call(arguments);
                            s.push(r.validPositions), e = n.casing.apply(this, s);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, a = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                        if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                            o = !0;
                            for (var c = 0; c <= l; c++) {
                                var u = n.getTestTemplate.call(t, c).match;
                                if (!0 !== u.static && void 0 === a.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== n.getPlaceholder.call(t, c, u)) {
                                    o = !1;
                                    break;
                                }
                            }
                        }
                        return o;
                    }
                }
                function u(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function f(e, t, i, a, o, d, m) {
                    var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                            })).forEach((function(e) {
                                v.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                p.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function w(t, i, o) {
                        var s = !1;
                        return n.getTests.call(g, t).every((function(c, f) {
                            var d = c.match;
                            if (r.getBuffer.call(g, !0), !1 !== (s = (!d.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, o, k, u.call(g, e)) : (i === d.def || i === k.skipOptionalPartCharacter) && "" !== d.def && {
                                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                pos: t
                            }))) {
                                var p = void 0 !== s.c ? s.c : i, h = t;
                                return p = p === k.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                    input: l.call(g, p, d, h)
                                }), a, h) && (s = !1), !1);
                            }
                            return !0;
                        })), s;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, M = y.extend(!0, {}, b.validPositions);
                    if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                    delete b.tests[_]);
                    if ("function" == typeof k.preValidation && !0 !== a && !0 !== d && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, i || o))), 
                    !0 === S) {
                        if (S = w(x, t, i), (!i || !0 === a) && !1 === S && !0 !== d) {
                            var O = b.validPositions[x];
                            if (!O || !0 !== O.match.static || O.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                    var E = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), 
                                    E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var T = x + 1, j = r.seekNext.call(g, x, !1, 0 !== x); T <= j; T++) if (!1 !== (S = w(T, t, i))) {
                                        S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: r.seekNext.call(g, x)
                            };
                        }
                        g.hasAlternator && !0 !== o && !i && (!1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t, i, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = s.call(g, !0))), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== a && !0 !== d) {
                        var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, i, m);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === d ? (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                    var D = P(S);
                    void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], M), D = !1));
                    return D;
                }
                function d(e, t, i) {
                    for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                        if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input, a, e, !1, i))) {
                            r = !0;
                            break;
                        }
                        if (o[s].match && o[s].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), 
                    r;
                }
                function p(e, t, i) {
                    var n, a, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, d = s.isRTL ? i.slice().reverse() : i;
                    if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(s), l.tests = {}, 
                    e = 0, t = i.length, a = r.determineNewCaretPosition.call(s, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (n = e; n < t; n++) delete l.validPositions[n];
                        a = e;
                    }
                    var p = new u.Event("keypress");
                    for (n = e; n < t; n++) {
                        p.key = d[n].toString(), s.ignorable = !1;
                        var h = o.EventHandlers.keypressEvent.call(s, p, !0, !1, !1, a);
                        !1 !== h && void 0 !== h && (a = h.forwardPosition);
                    }
                    c.skipOptionalPartCharacter = f;
                }
                function h(e, t, i) {
                    var a = this, o = this.maskset, s = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !o.validPositions[e]; e--) ;
                    for (var l = e; l < t; l++) {
                        if (void 0 === o.validPositions[l] && !r.isMask.call(a, l, !1)) if (0 == l ? n.getTest.call(a, l) : o.validPositions[l - 1]) {
                            var c = n.getTests.call(a, l).slice();
                            "" === c[c.length - 1].match.def && c.pop();
                            var u, d = n.determineTestTemplate.call(a, l, c);
                            if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                            })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                                var p = o.validPositions[t].input;
                                return o.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                            }
                        }
                    }
                }
                function v(e, t, i, a) {
                    var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                    function u(e, t, i) {
                        var n = t[e];
                        if (void 0 !== n && !0 === n.match.static && !0 !== n.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var a = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return a && r;
                        }
                        return !1;
                    }
                    var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, void 0 === i && (h !== v || l.insertMode && void 0 !== s.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                        var g, y = c.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(o, void 0, !0);
                        for (s.p = h, g = k; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                        var b, x, P = a, w = P;
                        for (t && (s.validPositions[a] = c.extend(!0, {}, t), w++, P++), g = t ? v : v - 1; g <= k; g++) {
                            if (void 0 !== (b = y[g]) && !0 !== b.generatedInput && (g >= v || g >= h && u(g, y, {
                                begin: h,
                                end: v
                            }))) {
                                for (;"" !== n.getTest.call(o, w).match.def; ) {
                                    if (!1 !== (x = d.call(o, w, b, l)) || "+" === b.match.def) {
                                        "+" === b.match.def && r.getBuffer.call(o, !0);
                                        var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== S, P = (S.pos || w) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && p++;
                                        break;
                                    }
                                    if (!m && r.getBuffer.call(o), w > s.maskLength) break;
                                    w++;
                                }
                                "" == n.getTest.call(o, w).match.def && (m = !1), w = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return s.validPositions = c.extend(!0, [], y), r.resetMaskSet.call(o, !0), 
                        !1;
                    } else t && n.getTest.call(o, a).match.cd === t.match.cd && (s.validPositions[a] = c.extend(!0, {}, t));
                    return r.resetMaskSet.call(o, !0), p;
                }
            }
        }, t = {};
        function i(n) {
            var a = t[n];
            if (void 0 !== a) return a.exports;
            var r = t[n] = {
                exports: {}
            };
            return e[n](r, r.exports, i), r.exports;
        }
        var n = {};
        return function() {
            var e, t = n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), 
            i(5296);
            var a = ((e = i(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = a;
        }(), n;
    }();
}));

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_OPTIONS: function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   Notyf: function() { return /* binding */ Notyf; },
/* harmony export */   NotyfArray: function() { return /* binding */ NotyfArray; },
/* harmony export */   NotyfArrayEvent: function() { return /* binding */ NotyfArrayEvent; },
/* harmony export */   NotyfEvent: function() { return /* binding */ NotyfEvent; },
/* harmony export */   NotyfNotification: function() { return /* binding */ NotyfNotification; },
/* harmony export */   NotyfView: function() { return /* binding */ NotyfView; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var NotyfNotification = /** @class */ (function () {
    function NotyfNotification(options) {
        this.options = options;
        this.listeners = {};
    }
    NotyfNotification.prototype.on = function (eventType, cb) {
        var callbacks = this.listeners[eventType] || [];
        this.listeners[eventType] = callbacks.concat([cb]);
    };
    NotyfNotification.prototype.triggerEvent = function (eventType, event) {
        var _this = this;
        var callbacks = this.listeners[eventType] || [];
        callbacks.forEach(function (cb) { return cb({ target: _this, event: event }); });
    };
    return NotyfNotification;
}());
var NotyfArrayEvent;
(function (NotyfArrayEvent) {
    NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
    NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
})(NotyfArrayEvent || (NotyfArrayEvent = {}));
var NotyfArray = /** @class */ (function () {
    function NotyfArray() {
        this.notifications = [];
    }
    NotyfArray.prototype.push = function (elem) {
        this.notifications.push(elem);
        this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
    };
    NotyfArray.prototype.splice = function (index, num) {
        var elem = this.notifications.splice(index, num)[0];
        this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
        return elem;
    };
    NotyfArray.prototype.indexOf = function (elem) {
        return this.notifications.indexOf(elem);
    };
    NotyfArray.prototype.onUpdate = function (fn) {
        this.updateFn = fn;
    };
    return NotyfArray;
}());

var NotyfEvent;
(function (NotyfEvent) {
    NotyfEvent["Dismiss"] = "dismiss";
    NotyfEvent["Click"] = "click";
})(NotyfEvent || (NotyfEvent = {}));
var DEFAULT_OPTIONS = {
    types: [
        {
            type: 'success',
            className: 'notyf__toast--success',
            backgroundColor: '#3dc763',
            icon: {
                className: 'notyf__icon--success',
                tagName: 'i',
            },
        },
        {
            type: 'error',
            className: 'notyf__toast--error',
            backgroundColor: '#ed3d3d',
            icon: {
                className: 'notyf__icon--error',
                tagName: 'i',
            },
        },
    ],
    duration: 2000,
    ripple: true,
    position: {
        x: 'right',
        y: 'bottom',
    },
    dismissible: false,
};

var NotyfView = /** @class */ (function () {
    function NotyfView() {
        this.notifications = [];
        this.events = {};
        this.X_POSITION_FLEX_MAP = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end',
        };
        this.Y_POSITION_FLEX_MAP = {
            top: 'flex-start',
            center: 'center',
            bottom: 'flex-end',
        };
        // Creates the main notifications container
        var docFrag = document.createDocumentFragment();
        var notyfContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf' });
        docFrag.appendChild(notyfContainer);
        document.body.appendChild(docFrag);
        this.container = notyfContainer;
        // Identifies the main animation end event
        this.animationEndEventName = this._getAnimationEndEventName();
        this._createA11yContainer();
    }
    NotyfView.prototype.on = function (event, cb) {
        var _a;
        this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));
    };
    NotyfView.prototype.update = function (notification, type) {
        if (type === NotyfArrayEvent.Add) {
            this.addNotification(notification);
        }
        else if (type === NotyfArrayEvent.Remove) {
            this.removeNotification(notification);
        }
    };
    NotyfView.prototype.removeNotification = function (notification) {
        var _this = this;
        var renderedNotification = this._popRenderedNotification(notification);
        var node;
        if (!renderedNotification) {
            return;
        }
        node = renderedNotification.node;
        node.classList.add('notyf__toast--disappear');
        var handleEvent;
        node.addEventListener(this.animationEndEventName, (handleEvent = function (event) {
            if (event.target === node) {
                node.removeEventListener(_this.animationEndEventName, handleEvent);
                _this.container.removeChild(node);
            }
        }));
    };
    NotyfView.prototype.addNotification = function (notification) {
        var node = this._renderNotification(notification);
        this.notifications.push({ notification: notification, node: node });
        // For a11y purposes, we still want to announce that there's a notification in the screen
        // even if it comes with no message.
        this._announce(notification.options.message || 'Notification');
    };
    NotyfView.prototype._renderNotification = function (notification) {
        var _a;
        var card = this._buildNotificationCard(notification);
        var className = notification.options.className;
        if (className) {
            (_a = card.classList).add.apply(_a, className.split(' '));
        }
        this.container.appendChild(card);
        return card;
    };
    NotyfView.prototype._popRenderedNotification = function (notification) {
        var idx = -1;
        for (var i = 0; i < this.notifications.length && idx < 0; i++) {
            if (this.notifications[i].notification === notification) {
                idx = i;
            }
        }
        if (idx !== -1) {
            return this.notifications.splice(idx, 1)[0];
        }
        return;
    };
    NotyfView.prototype.getXPosition = function (options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || 'right';
    };
    NotyfView.prototype.getYPosition = function (options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || 'bottom';
    };
    NotyfView.prototype.adjustContainerAlignment = function (options) {
        var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
        var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
        var style = this.container.style;
        style.setProperty('justify-content', justify);
        style.setProperty('align-items', align);
    };
    NotyfView.prototype._buildNotificationCard = function (notification) {
        var _this = this;
        var options = notification.options;
        var iconOpts = options.icon;
        // Adjust container according to position (e.g. top-left, bottom-center, etc)
        this.adjustContainerAlignment(options);
        // Create elements
        var notificationElem = this._createHTMLElement({ tagName: 'div', className: 'notyf__toast' });
        var ripple = this._createHTMLElement({ tagName: 'div', className: 'notyf__ripple' });
        var wrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__wrapper' });
        var message = this._createHTMLElement({ tagName: 'div', className: 'notyf__message' });
        message.innerHTML = options.message || '';
        var mainColor = options.background || options.backgroundColor;
        // Build the icon and append it to the card
        if (iconOpts) {
            var iconContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf__icon' });
            if (typeof iconOpts === 'string' || iconOpts instanceof String)
                iconContainer.innerHTML = new String(iconOpts).valueOf();
            if (typeof iconOpts === 'object') {
                var _a = iconOpts.tagName, tagName = _a === void 0 ? 'i' : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;
                var iconElement = this._createHTMLElement({ tagName: tagName, className: className_1, text: text });
                if (color)
                    iconElement.style.color = color;
                iconContainer.appendChild(iconElement);
            }
            wrapper.appendChild(iconContainer);
        }
        wrapper.appendChild(message);
        notificationElem.appendChild(wrapper);
        // Add ripple if applicable, else just paint the full toast
        if (mainColor) {
            if (options.ripple) {
                ripple.style.background = mainColor;
                notificationElem.appendChild(ripple);
            }
            else {
                notificationElem.style.background = mainColor;
            }
        }
        // Add dismiss button
        if (options.dismissible) {
            var dismissWrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__dismiss' });
            var dismissButton = this._createHTMLElement({
                tagName: 'button',
                className: 'notyf__dismiss-btn',
            });
            dismissWrapper.appendChild(dismissButton);
            wrapper.appendChild(dismissWrapper);
            notificationElem.classList.add("notyf__toast--dismissible");
            dismissButton.addEventListener('click', function (event) {
                var _a, _b;
                (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event });
                event.stopPropagation();
            });
        }
        notificationElem.addEventListener('click', function (event) { var _a, _b; return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event }); });
        // Adjust margins depending on whether its an upper or lower notification
        var className = this.getYPosition(options) === 'top' ? 'upper' : 'lower';
        notificationElem.classList.add("notyf__toast--" + className);
        return notificationElem;
    };
    NotyfView.prototype._createHTMLElement = function (_a) {
        var tagName = _a.tagName, className = _a.className, text = _a.text;
        var elem = document.createElement(tagName);
        if (className) {
            elem.className = className;
        }
        elem.textContent = text || null;
        return elem;
    };
    /**
     * Creates an invisible container which will announce the notyfs to
     * screen readers
     */
    NotyfView.prototype._createA11yContainer = function () {
        var a11yContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf-announcer' });
        a11yContainer.setAttribute('aria-atomic', 'true');
        a11yContainer.setAttribute('aria-live', 'polite');
        // Set the a11y container to be visible hidden. Can't use display: none as
        // screen readers won't read it.
        a11yContainer.style.border = '0';
        a11yContainer.style.clip = 'rect(0 0 0 0)';
        a11yContainer.style.height = '1px';
        a11yContainer.style.margin = '-1px';
        a11yContainer.style.overflow = 'hidden';
        a11yContainer.style.padding = '0';
        a11yContainer.style.position = 'absolute';
        a11yContainer.style.width = '1px';
        a11yContainer.style.outline = '0';
        document.body.appendChild(a11yContainer);
        this.a11yContainer = a11yContainer;
    };
    /**
     * Announces a message to screenreaders.
     */
    NotyfView.prototype._announce = function (message) {
        var _this = this;
        this.a11yContainer.textContent = '';
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts
        setTimeout(function () {
            _this.a11yContainer.textContent = message;
        }, 100);
    };
    /**
     * Determine which animationend event is supported
     */
    NotyfView.prototype._getAnimationEndEventName = function () {
        var el = document.createElement('_fake');
        var transitions = {
            MozTransition: 'animationend',
            OTransition: 'oAnimationEnd',
            WebkitTransition: 'webkitAnimationEnd',
            transition: 'animationend',
        };
        var t;
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
        // No supported animation end event. Using "animationend" as a fallback
        return 'animationend';
    };
    return NotyfView;
}());

/**
 * Main controller class. Defines the main Notyf API.
 */
var Notyf = /** @class */ (function () {
    function Notyf(opts) {
        var _this = this;
        this.dismiss = this._removeNotification;
        this.notifications = new NotyfArray();
        this.view = new NotyfView();
        var types = this.registerTypes(opts);
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
        this.options.types = types;
        this.notifications.onUpdate(function (elem, type) { return _this.view.update(elem, type); });
        this.view.on(NotyfEvent.Dismiss, function (_a) {
            var target = _a.target, event = _a.event;
            _this._removeNotification(target);
            // tslint:disable-next-line: no-string-literal
            target['triggerEvent'](NotyfEvent.Dismiss, event);
        });
        // tslint:disable-next-line: no-string-literal
        this.view.on(NotyfEvent.Click, function (_a) {
            var target = _a.target, event = _a.event;
            return target['triggerEvent'](NotyfEvent.Click, event);
        });
    }
    Notyf.prototype.error = function (payload) {
        var options = this.normalizeOptions('error', payload);
        return this.open(options);
    };
    Notyf.prototype.success = function (payload) {
        var options = this.normalizeOptions('success', payload);
        return this.open(options);
    };
    Notyf.prototype.open = function (options) {
        var defaultOpts = this.options.types.find(function (_a) {
            var type = _a.type;
            return type === options.type;
        }) || {};
        var config = __assign(__assign({}, defaultOpts), options);
        this.assignProps(['ripple', 'position', 'dismissible'], config);
        var notification = new NotyfNotification(config);
        this._pushNotification(notification);
        return notification;
    };
    Notyf.prototype.dismissAll = function () {
        while (this.notifications.splice(0, 1))
            ;
    };
    /**
     * Assigns properties to a config object based on two rules:
     * 1. If the config object already sets that prop, leave it as so
     * 2. Otherwise, use the default prop from the global options
     *
     * It's intended to build the final config object to open a notification. e.g. if
     * 'dismissible' is not set, then use the value from the global config.
     *
     * @param props - properties to be assigned to the config object
     * @param config - object whose properties need to be set
     */
    Notyf.prototype.assignProps = function (props, config) {
        var _this = this;
        props.forEach(function (prop) {
            // intentional double equality to check for both null and undefined
            config[prop] = config[prop] == null ? _this.options[prop] : config[prop];
        });
    };
    Notyf.prototype._pushNotification = function (notification) {
        var _this = this;
        this.notifications.push(notification);
        var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;
        if (duration) {
            setTimeout(function () { return _this._removeNotification(notification); }, duration);
        }
    };
    Notyf.prototype._removeNotification = function (notification) {
        var index = this.notifications.indexOf(notification);
        if (index !== -1) {
            this.notifications.splice(index, 1);
        }
    };
    Notyf.prototype.normalizeOptions = function (type, payload) {
        var options = { type: type };
        if (typeof payload === 'string') {
            options.message = payload;
        }
        else if (typeof payload === 'object') {
            options = __assign(__assign({}, options), payload);
        }
        return options;
    };
    Notyf.prototype.registerTypes = function (opts) {
        var incomingTypes = ((opts && opts.types) || []).slice();
        var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {
            // find if there's a default type within the user input's types, if so, it means the user
            // wants to change some of the default settings
            var userTypeIdx = -1;
            incomingTypes.forEach(function (t, idx) {
                if (t.type === defaultType.type)
                    userTypeIdx = idx;
            });
            var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
            return __assign(__assign({}, defaultType), userType);
        });
        return finalDefaultTypes.concat(incomingTypes);
    };
    return Notyf;
}());




/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 4 */
/***/ (function(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 5 */
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 6 */
/***/ (function(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 7 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 8 */
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 9 */
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_Applications_Prepros_app_Contents_Resources_app_asar_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:\"\";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 11 */
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 12 */
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

(typeof navigator !== "undefined") && (function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  var svgNS = 'http://www.w3.org/2000/svg';
  var locationHref = '';
  var _useWebWorker = false;
  var initialDefaultFrame = -999999;

  var setWebWorker = function setWebWorker(flag) {
    _useWebWorker = !!flag;
  };

  var getWebWorker = function getWebWorker() {
    return _useWebWorker;
  };

  var setLocationHref = function setLocationHref(value) {
    locationHref = value;
  };

  var getLocationHref = function getLocationHref() {
    return locationHref;
  };

  function createTag(type) {
    // return {appendChild:function(){},setAttribute:function(){},style:{}}
    return document.createElement(type);
  }

  function extendPrototype(sources, destination) {
    var i;
    var len = sources.length;
    var sourcePrototype;

    for (i = 0; i < len; i += 1) {
      sourcePrototype = sources[i].prototype;

      for (var attr in sourcePrototype) {
        if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
      }
    }
  }

  function getDescriptor(object, prop) {
    return Object.getOwnPropertyDescriptor(object, prop);
  }

  function createProxyFunction(prototype) {
    function ProxyFunction() {}

    ProxyFunction.prototype = prototype;
    return ProxyFunction;
  }

  // import Howl from '../../3rd_party/howler';
  var audioControllerFactory = function () {
    function AudioController(audioFactory) {
      this.audios = [];
      this.audioFactory = audioFactory;
      this._volume = 1;
      this._isMuted = false;
    }

    AudioController.prototype = {
      addAudio: function addAudio(audio) {
        this.audios.push(audio);
      },
      pause: function pause() {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].pause();
        }
      },
      resume: function resume() {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].resume();
        }
      },
      setRate: function setRate(rateValue) {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].setRate(rateValue);
        }
      },
      createAudio: function createAudio(assetPath) {
        if (this.audioFactory) {
          return this.audioFactory(assetPath);
        }

        if (window.Howl) {
          return new window.Howl({
            src: [assetPath]
          });
        }

        return {
          isPlaying: false,
          play: function play() {
            this.isPlaying = true;
          },
          seek: function seek() {
            this.isPlaying = false;
          },
          playing: function playing() {},
          rate: function rate() {},
          setVolume: function setVolume() {}
        };
      },
      setAudioFactory: function setAudioFactory(audioFactory) {
        this.audioFactory = audioFactory;
      },
      setVolume: function setVolume(value) {
        this._volume = value;

        this._updateVolume();
      },
      mute: function mute() {
        this._isMuted = true;

        this._updateVolume();
      },
      unmute: function unmute() {
        this._isMuted = false;

        this._updateVolume();
      },
      getVolume: function getVolume() {
        return this._volume;
      },
      _updateVolume: function _updateVolume() {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }
    };
    return function () {
      return new AudioController();
    };
  }();

  var createTypedArray = function () {
    function createRegularArray(type, len) {
      var i = 0;
      var arr = [];
      var value;

      switch (type) {
        case 'int16':
        case 'uint8c':
          value = 1;
          break;

        default:
          value = 1.1;
          break;
      }

      for (i = 0; i < len; i += 1) {
        arr.push(value);
      }

      return arr;
    }

    function createTypedArrayFactory(type, len) {
      if (type === 'float32') {
        return new Float32Array(len);
      }

      if (type === 'int16') {
        return new Int16Array(len);
      }

      if (type === 'uint8c') {
        return new Uint8ClampedArray(len);
      }

      return createRegularArray(type, len);
    }

    if (typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
      return createTypedArrayFactory;
    }

    return createRegularArray;
  }();

  function createSizedArray(len) {
    return Array.apply(null, {
      length: len
    });
  }

  function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }
  var subframeEnabled = true;
  var expressionsPlugin = null;
  var expressionsInterfaces = null;
  var idPrefix$1 = '';
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var _shouldRoundValues = false;
  var bmPow = Math.pow;
  var bmSqrt = Math.sqrt;
  var bmFloor = Math.floor;
  var bmMax = Math.max;
  var bmMin = Math.min;
  var BMMath = {};

  (function () {
    var propertyNames = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'];
    var i;
    var len = propertyNames.length;

    for (i = 0; i < len; i += 1) {
      BMMath[propertyNames[i]] = Math[propertyNames[i]];
    }
  })();

  function ProjectInterface$1() {
    return {};
  }

  BMMath.random = Math.random;

  BMMath.abs = function (val) {
    var tOfVal = _typeof$6(val);

    if (tOfVal === 'object' && val.length) {
      var absArr = createSizedArray(val.length);
      var i;
      var len = val.length;

      for (i = 0; i < len; i += 1) {
        absArr[i] = Math.abs(val[i]);
      }

      return absArr;
    }

    return Math.abs(val);
  };

  var defaultCurveSegments = 150;
  var degToRads = Math.PI / 180;
  var roundCorner = 0.5519;

  function roundValues(flag) {
    _shouldRoundValues = !!flag;
  }

  function bmRnd(value) {
    if (_shouldRoundValues) {
      return Math.round(value);
    }

    return value;
  }

  function styleDiv(element) {
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = 0;
    element.style.display = 'block';
    element.style.transformOrigin = '0 0';
    element.style.webkitTransformOrigin = '0 0';
    element.style.backfaceVisibility = 'visible';
    element.style.webkitBackfaceVisibility = 'visible';
    element.style.transformStyle = 'preserve-3d';
    element.style.webkitTransformStyle = 'preserve-3d';
    element.style.mozTransformStyle = 'preserve-3d';
  }

  function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
    this.type = type;
    this.currentTime = currentTime;
    this.totalTime = totalTime;
    this.direction = frameMultiplier < 0 ? -1 : 1;
  }

  function BMCompleteEvent(type, frameMultiplier) {
    this.type = type;
    this.direction = frameMultiplier < 0 ? -1 : 1;
  }

  function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
    this.type = type;
    this.currentLoop = currentLoop;
    this.totalLoops = totalLoops;
    this.direction = frameMultiplier < 0 ? -1 : 1;
  }

  function BMSegmentStartEvent(type, firstFrame, totalFrames) {
    this.type = type;
    this.firstFrame = firstFrame;
    this.totalFrames = totalFrames;
  }

  function BMDestroyEvent(type, target) {
    this.type = type;
    this.target = target;
  }

  function BMRenderFrameErrorEvent(nativeError, currentTime) {
    this.type = 'renderFrameError';
    this.nativeError = nativeError;
    this.currentTime = currentTime;
  }

  function BMConfigErrorEvent(nativeError) {
    this.type = 'configError';
    this.nativeError = nativeError;
  }

  function BMAnimationConfigErrorEvent(type, nativeError) {
    this.type = type;
    this.nativeError = nativeError;
  }

  var createElementID = function () {
    var _count = 0;
    return function createID() {
      _count += 1;
      return idPrefix$1 + '__lottie_element_' + _count;
    };
  }();

  function HSVtoRGB(h, s, v) {
    var r;
    var g;
    var b;
    var i;
    var f;
    var p;
    var q;
    var t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;

      case 1:
        r = q;
        g = v;
        b = p;
        break;

      case 2:
        r = p;
        g = v;
        b = t;
        break;

      case 3:
        r = p;
        g = q;
        b = v;
        break;

      case 4:
        r = t;
        g = p;
        b = v;
        break;

      case 5:
        r = v;
        g = p;
        b = q;
        break;

      default:
        break;
    }

    return [r, g, b];
  }

  function RGBtoHSV(r, g, b) {
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var d = max - min;
    var h;
    var s = max === 0 ? 0 : d / max;
    var v = max / 255;

    switch (max) {
      case min:
        h = 0;
        break;

      case r:
        h = g - b + d * (g < b ? 6 : 0);
        h /= 6 * d;
        break;

      case g:
        h = b - r + d * 2;
        h /= 6 * d;
        break;

      case b:
        h = r - g + d * 4;
        h /= 6 * d;
        break;

      default:
        break;
    }

    return [h, s, v];
  }

  function addSaturationToRGB(color, offset) {
    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
    hsv[1] += offset;

    if (hsv[1] > 1) {
      hsv[1] = 1;
    } else if (hsv[1] <= 0) {
      hsv[1] = 0;
    }

    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
  }

  function addBrightnessToRGB(color, offset) {
    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
    hsv[2] += offset;

    if (hsv[2] > 1) {
      hsv[2] = 1;
    } else if (hsv[2] < 0) {
      hsv[2] = 0;
    }

    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
  }

  function addHueToRGB(color, offset) {
    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
    hsv[0] += offset / 360;

    if (hsv[0] > 1) {
      hsv[0] -= 1;
    } else if (hsv[0] < 0) {
      hsv[0] += 1;
    }

    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
  }

  var rgbToHex = function () {
    var colorMap = [];
    var i;
    var hex;

    for (i = 0; i < 256; i += 1) {
      hex = i.toString(16);
      colorMap[i] = hex.length === 1 ? '0' + hex : hex;
    }

    return function (r, g, b) {
      if (r < 0) {
        r = 0;
      }

      if (g < 0) {
        g = 0;
      }

      if (b < 0) {
        b = 0;
      }

      return '#' + colorMap[r] + colorMap[g] + colorMap[b];
    };
  }();

  var setSubframeEnabled = function setSubframeEnabled(flag) {
    subframeEnabled = !!flag;
  };

  var getSubframeEnabled = function getSubframeEnabled() {
    return subframeEnabled;
  };

  var setExpressionsPlugin = function setExpressionsPlugin(value) {
    expressionsPlugin = value;
  };

  var getExpressionsPlugin = function getExpressionsPlugin() {
    return expressionsPlugin;
  };

  var setExpressionInterfaces = function setExpressionInterfaces(value) {
    expressionsInterfaces = value;
  };

  var getExpressionInterfaces = function getExpressionInterfaces() {
    return expressionsInterfaces;
  };

  var setDefaultCurveSegments = function setDefaultCurveSegments(value) {
    defaultCurveSegments = value;
  };

  var getDefaultCurveSegments = function getDefaultCurveSegments() {
    return defaultCurveSegments;
  };

  var setIdPrefix = function setIdPrefix(value) {
    idPrefix$1 = value;
  };

  var getIdPrefix = function getIdPrefix() {
    return idPrefix$1;
  };

  function createNS(type) {
    // return {appendChild:function(){},setAttribute:function(){},style:{}}
    return document.createElementNS(svgNS, type);
  }

  function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

  var dataManager = function () {
    var _counterId = 1;
    var processes = [];
    var workerFn;
    var workerInstance;
    var workerProxy = {
      onmessage: function onmessage() {},
      postMessage: function postMessage(path) {
        workerFn({
          data: path
        });
      }
    };
    var _workerSelf = {
      postMessage: function postMessage(data) {
        workerProxy.onmessage({
          data: data
        });
      }
    };

    function createWorker(fn) {
      if (window.Worker && window.Blob && getWebWorker()) {
        var blob = new Blob(['var _workerSelf = self; self.onmessage = ', fn.toString()], {
          type: 'text/javascript'
        }); // var blob = new Blob(['self.onmessage = ', fn.toString()], { type: 'text/javascript' });

        var url = URL.createObjectURL(blob);
        return new Worker(url);
      }

      workerFn = fn;
      return workerProxy;
    }

    function setupWorker() {
      if (!workerInstance) {
        workerInstance = createWorker(function workerStart(e) {
          function dataFunctionManager() {
            function completeLayers(layers, comps) {
              var layerData;
              var i;
              var len = layers.length;
              var j;
              var jLen;
              var k;
              var kLen;

              for (i = 0; i < len; i += 1) {
                layerData = layers[i];

                if ('ks' in layerData && !layerData.completed) {
                  layerData.completed = true;

                  if (layerData.hasMask) {
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;

                    for (j = 0; j < jLen; j += 1) {
                      if (maskProps[j].pt.k.i) {
                        convertPathsToAbsoluteValues(maskProps[j].pt.k);
                      } else {
                        kLen = maskProps[j].pt.k.length;

                        for (k = 0; k < kLen; k += 1) {
                          if (maskProps[j].pt.k[k].s) {
                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                          }

                          if (maskProps[j].pt.k[k].e) {
                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                          }
                        }
                      }
                    }
                  }

                  if (layerData.ty === 0) {
                    layerData.layers = findCompLayers(layerData.refId, comps);
                    completeLayers(layerData.layers, comps);
                  } else if (layerData.ty === 4) {
                    completeShapes(layerData.shapes);
                  } else if (layerData.ty === 5) {
                    completeText(layerData);
                  }
                }
              }
            }

            function completeChars(chars, assets) {
              if (chars) {
                var i = 0;
                var len = chars.length;

                for (i = 0; i < len; i += 1) {
                  if (chars[i].t === 1) {
                    // var compData = findComp(chars[i].data.refId, assets);
                    chars[i].data.layers = findCompLayers(chars[i].data.refId, assets); // chars[i].data.ip = 0;
                    // chars[i].data.op = 99999;
                    // chars[i].data.st = 0;
                    // chars[i].data.sr = 1;
                    // chars[i].w = compData.w;
                    // chars[i].data.ks = {
                    //   a: { k: [0, 0, 0], a: 0 },
                    //   p: { k: [0, -compData.h, 0], a: 0 },
                    //   r: { k: 0, a: 0 },
                    //   s: { k: [100, 100], a: 0 },
                    //   o: { k: 100, a: 0 },
                    // };

                    completeLayers(chars[i].data.layers, assets);
                  }
                }
              }
            }

            function findComp(id, comps) {
              var i = 0;
              var len = comps.length;

              while (i < len) {
                if (comps[i].id === id) {
                  return comps[i];
                }

                i += 1;
              }

              return null;
            }

            function findCompLayers(id, comps) {
              var comp = findComp(id, comps);

              if (comp) {
                if (!comp.layers.__used) {
                  comp.layers.__used = true;
                  return comp.layers;
                }

                return JSON.parse(JSON.stringify(comp.layers));
              }

              return null;
            }

            function completeShapes(arr) {
              var i;
              var len = arr.length;
              var j;
              var jLen;

              for (i = len - 1; i >= 0; i -= 1) {
                if (arr[i].ty === 'sh') {
                  if (arr[i].ks.k.i) {
                    convertPathsToAbsoluteValues(arr[i].ks.k);
                  } else {
                    jLen = arr[i].ks.k.length;

                    for (j = 0; j < jLen; j += 1) {
                      if (arr[i].ks.k[j].s) {
                        convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                      }

                      if (arr[i].ks.k[j].e) {
                        convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                      }
                    }
                  }
                } else if (arr[i].ty === 'gr') {
                  completeShapes(arr[i].it);
                }
              }
            }

            function convertPathsToAbsoluteValues(path) {
              var i;
              var len = path.i.length;

              for (i = 0; i < len; i += 1) {
                path.i[i][0] += path.v[i][0];
                path.i[i][1] += path.v[i][1];
                path.o[i][0] += path.v[i][0];
                path.o[i][1] += path.v[i][1];
              }
            }

            function checkVersion(minimum, animVersionString) {
              var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];

              if (minimum[0] > animVersion[0]) {
                return true;
              }

              if (animVersion[0] > minimum[0]) {
                return false;
              }

              if (minimum[1] > animVersion[1]) {
                return true;
              }

              if (animVersion[1] > minimum[1]) {
                return false;
              }

              if (minimum[2] > animVersion[2]) {
                return true;
              }

              if (animVersion[2] > minimum[2]) {
                return false;
              }

              return null;
            }

            var checkText = function () {
              var minimumVersion = [4, 4, 14];

              function updateTextLayer(textLayer) {
                var documentData = textLayer.t.d;
                textLayer.t.d = {
                  k: [{
                    s: documentData,
                    t: 0
                  }]
                };
              }

              function iterateLayers(layers) {
                var i;
                var len = layers.length;

                for (i = 0; i < len; i += 1) {
                  if (layers[i].ty === 5) {
                    updateTextLayer(layers[i]);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            var checkChars = function () {
              var minimumVersion = [4, 7, 99];
              return function (animationData) {
                if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
                  var i;
                  var len = animationData.chars.length;

                  for (i = 0; i < len; i += 1) {
                    var charData = animationData.chars[i];

                    if (charData.data && charData.data.shapes) {
                      completeShapes(charData.data.shapes);
                      charData.data.ip = 0;
                      charData.data.op = 99999;
                      charData.data.st = 0;
                      charData.data.sr = 1;
                      charData.data.ks = {
                        p: {
                          k: [0, 0],
                          a: 0
                        },
                        s: {
                          k: [100, 100],
                          a: 0
                        },
                        a: {
                          k: [0, 0],
                          a: 0
                        },
                        r: {
                          k: 0,
                          a: 0
                        },
                        o: {
                          k: 100,
                          a: 0
                        }
                      };

                      if (!animationData.chars[i].t) {
                        charData.data.shapes.push({
                          ty: 'no'
                        });
                        charData.data.shapes[0].it.push({
                          p: {
                            k: [0, 0],
                            a: 0
                          },
                          s: {
                            k: [100, 100],
                            a: 0
                          },
                          a: {
                            k: [0, 0],
                            a: 0
                          },
                          r: {
                            k: 0,
                            a: 0
                          },
                          o: {
                            k: 100,
                            a: 0
                          },
                          sk: {
                            k: 0,
                            a: 0
                          },
                          sa: {
                            k: 0,
                            a: 0
                          },
                          ty: 'tr'
                        });
                      }
                    }
                  }
                }
              };
            }();

            var checkPathProperties = function () {
              var minimumVersion = [5, 7, 15];

              function updateTextLayer(textLayer) {
                var pathData = textLayer.t.p;

                if (typeof pathData.a === 'number') {
                  pathData.a = {
                    a: 0,
                    k: pathData.a
                  };
                }

                if (typeof pathData.p === 'number') {
                  pathData.p = {
                    a: 0,
                    k: pathData.p
                  };
                }

                if (typeof pathData.r === 'number') {
                  pathData.r = {
                    a: 0,
                    k: pathData.r
                  };
                }
              }

              function iterateLayers(layers) {
                var i;
                var len = layers.length;

                for (i = 0; i < len; i += 1) {
                  if (layers[i].ty === 5) {
                    updateTextLayer(layers[i]);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            var checkColors = function () {
              var minimumVersion = [4, 1, 9];

              function iterateShapes(shapes) {
                var i;
                var len = shapes.length;
                var j;
                var jLen;

                for (i = 0; i < len; i += 1) {
                  if (shapes[i].ty === 'gr') {
                    iterateShapes(shapes[i].it);
                  } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
                    if (shapes[i].c.k && shapes[i].c.k[0].i) {
                      jLen = shapes[i].c.k.length;

                      for (j = 0; j < jLen; j += 1) {
                        if (shapes[i].c.k[j].s) {
                          shapes[i].c.k[j].s[0] /= 255;
                          shapes[i].c.k[j].s[1] /= 255;
                          shapes[i].c.k[j].s[2] /= 255;
                          shapes[i].c.k[j].s[3] /= 255;
                        }

                        if (shapes[i].c.k[j].e) {
                          shapes[i].c.k[j].e[0] /= 255;
                          shapes[i].c.k[j].e[1] /= 255;
                          shapes[i].c.k[j].e[2] /= 255;
                          shapes[i].c.k[j].e[3] /= 255;
                        }
                      }
                    } else {
                      shapes[i].c.k[0] /= 255;
                      shapes[i].c.k[1] /= 255;
                      shapes[i].c.k[2] /= 255;
                      shapes[i].c.k[3] /= 255;
                    }
                  }
                }
              }

              function iterateLayers(layers) {
                var i;
                var len = layers.length;

                for (i = 0; i < len; i += 1) {
                  if (layers[i].ty === 4) {
                    iterateShapes(layers[i].shapes);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            var checkShapes = function () {
              var minimumVersion = [4, 4, 18];

              function completeClosingShapes(arr) {
                var i;
                var len = arr.length;
                var j;
                var jLen;

                for (i = len - 1; i >= 0; i -= 1) {
                  if (arr[i].ty === 'sh') {
                    if (arr[i].ks.k.i) {
                      arr[i].ks.k.c = arr[i].closed;
                    } else {
                      jLen = arr[i].ks.k.length;

                      for (j = 0; j < jLen; j += 1) {
                        if (arr[i].ks.k[j].s) {
                          arr[i].ks.k[j].s[0].c = arr[i].closed;
                        }

                        if (arr[i].ks.k[j].e) {
                          arr[i].ks.k[j].e[0].c = arr[i].closed;
                        }
                      }
                    }
                  } else if (arr[i].ty === 'gr') {
                    completeClosingShapes(arr[i].it);
                  }
                }
              }

              function iterateLayers(layers) {
                var layerData;
                var i;
                var len = layers.length;
                var j;
                var jLen;
                var k;
                var kLen;

                for (i = 0; i < len; i += 1) {
                  layerData = layers[i];

                  if (layerData.hasMask) {
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;

                    for (j = 0; j < jLen; j += 1) {
                      if (maskProps[j].pt.k.i) {
                        maskProps[j].pt.k.c = maskProps[j].cl;
                      } else {
                        kLen = maskProps[j].pt.k.length;

                        for (k = 0; k < kLen; k += 1) {
                          if (maskProps[j].pt.k[k].s) {
                            maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                          }

                          if (maskProps[j].pt.k[k].e) {
                            maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                          }
                        }
                      }
                    }
                  }

                  if (layerData.ty === 4) {
                    completeClosingShapes(layerData.shapes);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            function completeData(animationData) {
              if (animationData.__complete) {
                return;
              }

              checkColors(animationData);
              checkText(animationData);
              checkChars(animationData);
              checkPathProperties(animationData);
              checkShapes(animationData);
              completeLayers(animationData.layers, animationData.assets);
              completeChars(animationData.chars, animationData.assets);
              animationData.__complete = true;
            }

            function completeText(data) {
              if (data.t.a.length === 0 && !('m' in data.t.p)) {// data.singleShape = true;
              }
            }

            var moduleOb = {};
            moduleOb.completeData = completeData;
            moduleOb.checkColors = checkColors;
            moduleOb.checkChars = checkChars;
            moduleOb.checkPathProperties = checkPathProperties;
            moduleOb.checkShapes = checkShapes;
            moduleOb.completeLayers = completeLayers;
            return moduleOb;
          }

          if (!_workerSelf.dataManager) {
            _workerSelf.dataManager = dataFunctionManager();
          }

          if (!_workerSelf.assetLoader) {
            _workerSelf.assetLoader = function () {
              function formatResponse(xhr) {
                // using typeof doubles the time of execution of this method,
                // so if available, it's better to use the header to validate the type
                var contentTypeHeader = xhr.getResponseHeader('content-type');

                if (contentTypeHeader && xhr.responseType === 'json' && contentTypeHeader.indexOf('json') !== -1) {
                  return xhr.response;
                }

                if (xhr.response && _typeof$5(xhr.response) === 'object') {
                  return xhr.response;
                }

                if (xhr.response && typeof xhr.response === 'string') {
                  return JSON.parse(xhr.response);
                }

                if (xhr.responseText) {
                  return JSON.parse(xhr.responseText);
                }

                return null;
              }

              function loadAsset(path, fullPath, callback, errorCallback) {
                var response;
                var xhr = new XMLHttpRequest(); // set responseType after calling open or IE will break.

                try {
                  // This crashes on Android WebView prior to KitKat
                  xhr.responseType = 'json';
                } catch (err) {} // eslint-disable-line no-empty


                xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                      response = formatResponse(xhr);
                      callback(response);
                    } else {
                      try {
                        response = formatResponse(xhr);
                        callback(response);
                      } catch (err) {
                        if (errorCallback) {
                          errorCallback(err);
                        }
                      }
                    }
                  }
                };

                try {
                  // Hack to workaround banner validation
                  xhr.open(['G', 'E', 'T'].join(''), path, true);
                } catch (error) {
                  // Hack to workaround banner validation
                  xhr.open(['G', 'E', 'T'].join(''), fullPath + '/' + path, true);
                }

                xhr.send();
              }

              return {
                load: loadAsset
              };
            }();
          }

          if (e.data.type === 'loadAnimation') {
            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
              _workerSelf.dataManager.completeData(data);

              _workerSelf.postMessage({
                id: e.data.id,
                payload: data,
                status: 'success'
              });
            }, function () {
              _workerSelf.postMessage({
                id: e.data.id,
                status: 'error'
              });
            });
          } else if (e.data.type === 'complete') {
            var animation = e.data.animation;

            _workerSelf.dataManager.completeData(animation);

            _workerSelf.postMessage({
              id: e.data.id,
              payload: animation,
              status: 'success'
            });
          } else if (e.data.type === 'loadData') {
            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
              _workerSelf.postMessage({
                id: e.data.id,
                payload: data,
                status: 'success'
              });
            }, function () {
              _workerSelf.postMessage({
                id: e.data.id,
                status: 'error'
              });
            });
          }
        });

        workerInstance.onmessage = function (event) {
          var data = event.data;
          var id = data.id;
          var process = processes[id];
          processes[id] = null;

          if (data.status === 'success') {
            process.onComplete(data.payload);
          } else if (process.onError) {
            process.onError();
          }
        };
      }
    }

    function createProcess(onComplete, onError) {
      _counterId += 1;
      var id = 'processId_' + _counterId;
      processes[id] = {
        onComplete: onComplete,
        onError: onError
      };
      return id;
    }

    function loadAnimation(path, onComplete, onError) {
      setupWorker();
      var processId = createProcess(onComplete, onError);
      workerInstance.postMessage({
        type: 'loadAnimation',
        path: path,
        fullPath: window.location.origin + window.location.pathname,
        id: processId
      });
    }

    function loadData(path, onComplete, onError) {
      setupWorker();
      var processId = createProcess(onComplete, onError);
      workerInstance.postMessage({
        type: 'loadData',
        path: path,
        fullPath: window.location.origin + window.location.pathname,
        id: processId
      });
    }

    function completeAnimation(anim, onComplete, onError) {
      setupWorker();
      var processId = createProcess(onComplete, onError);
      workerInstance.postMessage({
        type: 'complete',
        animation: anim,
        id: processId
      });
    }

    return {
      loadAnimation: loadAnimation,
      loadData: loadData,
      completeAnimation: completeAnimation
    };
  }();

  var ImagePreloader = function () {
    var proxyImage = function () {
      var canvas = createTag('canvas');
      canvas.width = 1;
      canvas.height = 1;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, 1, 1);
      return canvas;
    }();

    function imageLoaded() {
      this.loadedAssets += 1;

      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
        if (this.imagesLoadedCb) {
          this.imagesLoadedCb(null);
        }
      }
    }

    function footageLoaded() {
      this.loadedFootagesCount += 1;

      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
        if (this.imagesLoadedCb) {
          this.imagesLoadedCb(null);
        }
      }
    }

    function getAssetsPath(assetData, assetsPath, originalPath) {
      var path = '';

      if (assetData.e) {
        path = assetData.p;
      } else if (assetsPath) {
        var imagePath = assetData.p;

        if (imagePath.indexOf('images/') !== -1) {
          imagePath = imagePath.split('/')[1];
        }

        path = assetsPath + imagePath;
      } else {
        path = originalPath;
        path += assetData.u ? assetData.u : '';
        path += assetData.p;
      }

      return path;
    }

    function testImageLoaded(img) {
      var _count = 0;
      var intervalId = setInterval(function () {
        var box = img.getBBox();

        if (box.width || _count > 500) {
          this._imageLoaded();

          clearInterval(intervalId);
        }

        _count += 1;
      }.bind(this), 50);
    }

    function createImageData(assetData) {
      var path = getAssetsPath(assetData, this.assetsPath, this.path);
      var img = createNS('image');

      if (isSafari) {
        this.testImageLoaded(img);
      } else {
        img.addEventListener('load', this._imageLoaded, false);
      }

      img.addEventListener('error', function () {
        ob.img = proxyImage;

        this._imageLoaded();
      }.bind(this), false);
      img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);

      if (this._elementHelper.append) {
        this._elementHelper.append(img);
      } else {
        this._elementHelper.appendChild(img);
      }

      var ob = {
        img: img,
        assetData: assetData
      };
      return ob;
    }

    function createImgData(assetData) {
      var path = getAssetsPath(assetData, this.assetsPath, this.path);
      var img = createTag('img');
      img.crossOrigin = 'anonymous';
      img.addEventListener('load', this._imageLoaded, false);
      img.addEventListener('error', function () {
        ob.img = proxyImage;

        this._imageLoaded();
      }.bind(this), false);
      img.src = path;
      var ob = {
        img: img,
        assetData: assetData
      };
      return ob;
    }

    function createFootageData(data) {
      var ob = {
        assetData: data
      };
      var path = getAssetsPath(data, this.assetsPath, this.path);
      dataManager.loadData(path, function (footageData) {
        ob.img = footageData;

        this._footageLoaded();
      }.bind(this), function () {
        ob.img = {};

        this._footageLoaded();
      }.bind(this));
      return ob;
    }

    function loadAssets(assets, cb) {
      this.imagesLoadedCb = cb;
      var i;
      var len = assets.length;

      for (i = 0; i < len; i += 1) {
        if (!assets[i].layers) {
          if (!assets[i].t || assets[i].t === 'seq') {
            this.totalImages += 1;
            this.images.push(this._createImageData(assets[i]));
          } else if (assets[i].t === 3) {
            this.totalFootages += 1;
            this.images.push(this.createFootageData(assets[i]));
          }
        }
      }
    }

    function setPath(path) {
      this.path = path || '';
    }

    function setAssetsPath(path) {
      this.assetsPath = path || '';
    }

    function getAsset(assetData) {
      var i = 0;
      var len = this.images.length;

      while (i < len) {
        if (this.images[i].assetData === assetData) {
          return this.images[i].img;
        }

        i += 1;
      }

      return null;
    }

    function destroy() {
      this.imagesLoadedCb = null;
      this.images.length = 0;
    }

    function loadedImages() {
      return this.totalImages === this.loadedAssets;
    }

    function loadedFootages() {
      return this.totalFootages === this.loadedFootagesCount;
    }

    function setCacheType(type, elementHelper) {
      if (type === 'svg') {
        this._elementHelper = elementHelper;
        this._createImageData = this.createImageData.bind(this);
      } else {
        this._createImageData = this.createImgData.bind(this);
      }
    }

    function ImagePreloaderFactory() {
      this._imageLoaded = imageLoaded.bind(this);
      this._footageLoaded = footageLoaded.bind(this);
      this.testImageLoaded = testImageLoaded.bind(this);
      this.createFootageData = createFootageData.bind(this);
      this.assetsPath = '';
      this.path = '';
      this.totalImages = 0;
      this.totalFootages = 0;
      this.loadedAssets = 0;
      this.loadedFootagesCount = 0;
      this.imagesLoadedCb = null;
      this.images = [];
    }

    ImagePreloaderFactory.prototype = {
      loadAssets: loadAssets,
      setAssetsPath: setAssetsPath,
      setPath: setPath,
      loadedImages: loadedImages,
      loadedFootages: loadedFootages,
      destroy: destroy,
      getAsset: getAsset,
      createImgData: createImgData,
      createImageData: createImageData,
      imageLoaded: imageLoaded,
      footageLoaded: footageLoaded,
      setCacheType: setCacheType
    };
    return ImagePreloaderFactory;
  }();

  function BaseEvent() {}

  BaseEvent.prototype = {
    triggerEvent: function triggerEvent(eventName, args) {
      if (this._cbs[eventName]) {
        var callbacks = this._cbs[eventName];

        for (var i = 0; i < callbacks.length; i += 1) {
          callbacks[i](args);
        }
      }
    },
    addEventListener: function addEventListener(eventName, callback) {
      if (!this._cbs[eventName]) {
        this._cbs[eventName] = [];
      }

      this._cbs[eventName].push(callback);

      return function () {
        this.removeEventListener(eventName, callback);
      }.bind(this);
    },
    removeEventListener: function removeEventListener(eventName, callback) {
      if (!callback) {
        this._cbs[eventName] = null;
      } else if (this._cbs[eventName]) {
        var i = 0;
        var len = this._cbs[eventName].length;

        while (i < len) {
          if (this._cbs[eventName][i] === callback) {
            this._cbs[eventName].splice(i, 1);

            i -= 1;
            len -= 1;
          }

          i += 1;
        }

        if (!this._cbs[eventName].length) {
          this._cbs[eventName] = null;
        }
      }
    }
  };

  var markerParser = function () {
    function parsePayloadLines(payload) {
      var lines = payload.split('\r\n');
      var keys = {};
      var line;
      var keysCount = 0;

      for (var i = 0; i < lines.length; i += 1) {
        line = lines[i].split(':');

        if (line.length === 2) {
          keys[line[0]] = line[1].trim();
          keysCount += 1;
        }
      }

      if (keysCount === 0) {
        throw new Error();
      }

      return keys;
    }

    return function (_markers) {
      var markers = [];

      for (var i = 0; i < _markers.length; i += 1) {
        var _marker = _markers[i];
        var markerData = {
          time: _marker.tm,
          duration: _marker.dr
        };

        try {
          markerData.payload = JSON.parse(_markers[i].cm);
        } catch (_) {
          try {
            markerData.payload = parsePayloadLines(_markers[i].cm);
          } catch (__) {
            markerData.payload = {
              name: _markers[i].cm
            };
          }
        }

        markers.push(markerData);
      }

      return markers;
    };
  }();

  var ProjectInterface = function () {
    function registerComposition(comp) {
      this.compositions.push(comp);
    }

    return function () {
      function _thisProjectFunction(name) {
        var i = 0;
        var len = this.compositions.length;

        while (i < len) {
          if (this.compositions[i].data && this.compositions[i].data.nm === name) {
            if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
              this.compositions[i].prepareFrame(this.currentFrame);
            }

            return this.compositions[i].compInterface;
          }

          i += 1;
        }

        return null;
      }

      _thisProjectFunction.compositions = [];
      _thisProjectFunction.currentFrame = 0;
      _thisProjectFunction.registerComposition = registerComposition;
      return _thisProjectFunction;
    };
  }();

  var renderers = {};

  var registerRenderer = function registerRenderer(key, value) {
    renderers[key] = value;
  };

  function getRenderer(key) {
    return renderers[key];
  }

  function getRegisteredRenderer() {
    // Returns canvas by default for compatibility
    if (renderers.canvas) {
      return 'canvas';
    } // Returns any renderer that is registered


    for (var key in renderers) {
      if (renderers[key]) {
        return key;
      }
    }

    return '';
  }

  function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

  var AnimationItem = function AnimationItem() {
    this._cbs = [];
    this.name = '';
    this.path = '';
    this.isLoaded = false;
    this.currentFrame = 0;
    this.currentRawFrame = 0;
    this.firstFrame = 0;
    this.totalFrames = 0;
    this.frameRate = 0;
    this.frameMult = 0;
    this.playSpeed = 1;
    this.playDirection = 1;
    this.playCount = 0;
    this.animationData = {};
    this.assets = [];
    this.isPaused = true;
    this.autoplay = false;
    this.loop = true;
    this.renderer = null;
    this.animationID = createElementID();
    this.assetsPath = '';
    this.timeCompleted = 0;
    this.segmentPos = 0;
    this.isSubframeEnabled = getSubframeEnabled();
    this.segments = [];
    this._idle = true;
    this._completedLoop = false;
    this.projectInterface = ProjectInterface();
    this.imagePreloader = new ImagePreloader();
    this.audioController = audioControllerFactory();
    this.markers = [];
    this.configAnimation = this.configAnimation.bind(this);
    this.onSetupError = this.onSetupError.bind(this);
    this.onSegmentComplete = this.onSegmentComplete.bind(this);
    this.drawnFrameEvent = new BMEnterFrameEvent('drawnFrame', 0, 0, 0);
    this.expressionsPlugin = getExpressionsPlugin();
  };

  extendPrototype([BaseEvent], AnimationItem);

  AnimationItem.prototype.setParams = function (params) {
    if (params.wrapper || params.container) {
      this.wrapper = params.wrapper || params.container;
    }

    var animType = 'svg';

    if (params.animType) {
      animType = params.animType;
    } else if (params.renderer) {
      animType = params.renderer;
    }

    var RendererClass = getRenderer(animType);
    this.renderer = new RendererClass(this, params.rendererSettings);
    this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
    this.renderer.setProjectInterface(this.projectInterface);
    this.animType = animType;

    if (params.loop === '' || params.loop === null || params.loop === undefined || params.loop === true) {
      this.loop = true;
    } else if (params.loop === false) {
      this.loop = false;
    } else {
      this.loop = parseInt(params.loop, 10);
    }

    this.autoplay = 'autoplay' in params ? params.autoplay : true;
    this.name = params.name ? params.name : '';
    this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, 'autoloadSegments') ? params.autoloadSegments : true;
    this.assetsPath = params.assetsPath;
    this.initialSegment = params.initialSegment;

    if (params.audioFactory) {
      this.audioController.setAudioFactory(params.audioFactory);
    }

    if (params.animationData) {
      this.setupAnimation(params.animationData);
    } else if (params.path) {
      if (params.path.lastIndexOf('\\') !== -1) {
        this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1);
      } else {
        this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1);
      }

      this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
      this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));
      dataManager.loadAnimation(params.path, this.configAnimation, this.onSetupError);
    }
  };

  AnimationItem.prototype.onSetupError = function () {
    this.trigger('data_failed');
  };

  AnimationItem.prototype.setupAnimation = function (data) {
    dataManager.completeAnimation(data, this.configAnimation);
  };

  AnimationItem.prototype.setData = function (wrapper, animationData) {
    if (animationData) {
      if (_typeof$4(animationData) !== 'object') {
        animationData = JSON.parse(animationData);
      }
    }

    var params = {
      wrapper: wrapper,
      animationData: animationData
    };
    var wrapperAttributes = wrapper.attributes;
    params.path = wrapperAttributes.getNamedItem('data-animation-path') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-path').value : wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
    params.animType = wrapperAttributes.getNamedItem('data-anim-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('bm-type').value : wrapperAttributes.getNamedItem('data-bm-renderer') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas';
    var loop = wrapperAttributes.getNamedItem('data-anim-loop') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-loop').value : wrapperAttributes.getNamedItem('data-bm-loop') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-loop').value : wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';

    if (loop === 'false') {
      params.loop = false;
    } else if (loop === 'true') {
      params.loop = true;
    } else if (loop !== '') {
      params.loop = parseInt(loop, 10);
    }

    var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-autoplay').value : wrapperAttributes.getNamedItem('data-bm-autoplay') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-autoplay').value : wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : true;
    params.autoplay = autoplay !== 'false';
    params.name = wrapperAttributes.getNamedItem('data-name') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-name').value : wrapperAttributes.getNamedItem('data-bm-name') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value : '';
    var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-prerender').value : wrapperAttributes.getNamedItem('data-bm-prerender') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-prerender').value : wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';

    if (prerender === 'false') {
      params.prerender = false;
    }

    if (!params.path) {
      this.trigger('destroy');
    } else {
      this.setParams(params);
    }
  };

  AnimationItem.prototype.includeLayers = function (data) {
    if (data.op > this.animationData.op) {
      this.animationData.op = data.op;
      this.totalFrames = Math.floor(data.op - this.animationData.ip);
    }

    var layers = this.animationData.layers;
    var i;
    var len = layers.length;
    var newLayers = data.layers;
    var j;
    var jLen = newLayers.length;

    for (j = 0; j < jLen; j += 1) {
      i = 0;

      while (i < len) {
        if (layers[i].id === newLayers[j].id) {
          layers[i] = newLayers[j];
          break;
        }

        i += 1;
      }
    }

    if (data.chars || data.fonts) {
      this.renderer.globalData.fontManager.addChars(data.chars);
      this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
    }

    if (data.assets) {
      len = data.assets.length;

      for (i = 0; i < len; i += 1) {
        this.animationData.assets.push(data.assets[i]);
      }
    }

    this.animationData.__complete = false;
    dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
  };

  AnimationItem.prototype.onSegmentComplete = function (data) {
    this.animationData = data;
    var expressionsPlugin = getExpressionsPlugin();

    if (expressionsPlugin) {
      expressionsPlugin.initExpressions(this);
    }

    this.loadNextSegment();
  };

  AnimationItem.prototype.loadNextSegment = function () {
    var segments = this.animationData.segments;

    if (!segments || segments.length === 0 || !this.autoloadSegments) {
      this.trigger('data_ready');
      this.timeCompleted = this.totalFrames;
      return;
    }

    var segment = segments.shift();
    this.timeCompleted = segment.time * this.frameRate;
    var segmentPath = this.path + this.fileName + '_' + this.segmentPos + '.json';
    this.segmentPos += 1;
    dataManager.loadData(segmentPath, this.includeLayers.bind(this), function () {
      this.trigger('data_failed');
    }.bind(this));
  };

  AnimationItem.prototype.loadSegments = function () {
    var segments = this.animationData.segments;

    if (!segments) {
      this.timeCompleted = this.totalFrames;
    }

    this.loadNextSegment();
  };

  AnimationItem.prototype.imagesLoaded = function () {
    this.trigger('loaded_images');
    this.checkLoaded();
  };

  AnimationItem.prototype.preloadImages = function () {
    this.imagePreloader.setAssetsPath(this.assetsPath);
    this.imagePreloader.setPath(this.path);
    this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
  };

  AnimationItem.prototype.configAnimation = function (animData) {
    if (!this.renderer) {
      return;
    }

    try {
      this.animationData = animData;

      if (this.initialSegment) {
        this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
        this.firstFrame = Math.round(this.initialSegment[0]);
      } else {
        this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
        this.firstFrame = Math.round(this.animationData.ip);
      }

      this.renderer.configAnimation(animData);

      if (!animData.assets) {
        animData.assets = [];
      }

      this.assets = this.animationData.assets;
      this.frameRate = this.animationData.fr;
      this.frameMult = this.animationData.fr / 1000;
      this.renderer.searchExtraCompositions(animData.assets);
      this.markers = markerParser(animData.markers || []);
      this.trigger('config_ready');
      this.preloadImages();
      this.loadSegments();
      this.updaFrameModifier();
      this.waitForFontsLoaded();

      if (this.isPaused) {
        this.audioController.pause();
      }
    } catch (error) {
      this.triggerConfigError(error);
    }
  };

  AnimationItem.prototype.waitForFontsLoaded = function () {
    if (!this.renderer) {
      return;
    }

    if (this.renderer.globalData.fontManager.isLoaded) {
      this.checkLoaded();
    } else {
      setTimeout(this.waitForFontsLoaded.bind(this), 20);
    }
  };

  AnimationItem.prototype.checkLoaded = function () {
    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== 'canvas') && this.imagePreloader.loadedFootages()) {
      this.isLoaded = true;
      var expressionsPlugin = getExpressionsPlugin();

      if (expressionsPlugin) {
        expressionsPlugin.initExpressions(this);
      }

      this.renderer.initItems();
      setTimeout(function () {
        this.trigger('DOMLoaded');
      }.bind(this), 0);
      this.gotoFrame();

      if (this.autoplay) {
        this.play();
      }
    }
  };

  AnimationItem.prototype.resize = function (width, height) {
    // Adding this validation for backwards compatibility in case an event object was being passed down
    var _width = typeof width === 'number' ? width : undefined;

    var _height = typeof height === 'number' ? height : undefined;

    this.renderer.updateContainerSize(_width, _height);
  };

  AnimationItem.prototype.setSubframe = function (flag) {
    this.isSubframeEnabled = !!flag;
  };

  AnimationItem.prototype.gotoFrame = function () {
    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise

    if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
      this.currentFrame = this.timeCompleted;
    }

    this.trigger('enterFrame');
    this.renderFrame();
    this.trigger('drawnFrame');
  };

  AnimationItem.prototype.renderFrame = function () {
    if (this.isLoaded === false || !this.renderer) {
      return;
    }

    try {
      if (this.expressionsPlugin) {
        this.expressionsPlugin.resetFrame();
      }

      this.renderer.renderFrame(this.currentFrame + this.firstFrame);
    } catch (error) {
      this.triggerRenderFrameError(error);
    }
  };

  AnimationItem.prototype.play = function (name) {
    if (name && this.name !== name) {
      return;
    }

    if (this.isPaused === true) {
      this.isPaused = false;
      this.trigger('_play');
      this.audioController.resume();

      if (this._idle) {
        this._idle = false;
        this.trigger('_active');
      }
    }
  };

  AnimationItem.prototype.pause = function (name) {
    if (name && this.name !== name) {
      return;
    }

    if (this.isPaused === false) {
      this.isPaused = true;
      this.trigger('_pause');
      this._idle = true;
      this.trigger('_idle');
      this.audioController.pause();
    }
  };

  AnimationItem.prototype.togglePause = function (name) {
    if (name && this.name !== name) {
      return;
    }

    if (this.isPaused === true) {
      this.play();
    } else {
      this.pause();
    }
  };

  AnimationItem.prototype.stop = function (name) {
    if (name && this.name !== name) {
      return;
    }

    this.pause();
    this.playCount = 0;
    this._completedLoop = false;
    this.setCurrentRawFrameValue(0);
  };

  AnimationItem.prototype.getMarkerData = function (markerName) {
    var marker;

    for (var i = 0; i < this.markers.length; i += 1) {
      marker = this.markers[i];

      if (marker.payload && marker.payload.name === markerName) {
        return marker;
      }
    }

    return null;
  };

  AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
    if (name && this.name !== name) {
      return;
    }

    var numValue = Number(value);

    if (isNaN(numValue)) {
      var marker = this.getMarkerData(value);

      if (marker) {
        this.goToAndStop(marker.time, true);
      }
    } else if (isFrame) {
      this.setCurrentRawFrameValue(value);
    } else {
      this.setCurrentRawFrameValue(value * this.frameModifier);
    }

    this.pause();
  };

  AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
    if (name && this.name !== name) {
      return;
    }

    var numValue = Number(value);

    if (isNaN(numValue)) {
      var marker = this.getMarkerData(value);

      if (marker) {
        if (!marker.duration) {
          this.goToAndStop(marker.time, true);
        } else {
          this.playSegments([marker.time, marker.time + marker.duration], true);
        }
      }
    } else {
      this.goToAndStop(numValue, isFrame, name);
    }

    this.play();
  };

  AnimationItem.prototype.advanceTime = function (value) {
    if (this.isPaused === true || this.isLoaded === false) {
      return;
    }

    var nextValue = this.currentRawFrame + value * this.frameModifier;
    var _isComplete = false; // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
    // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.

    if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
      if (!this.loop || this.playCount === this.loop) {
        if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
          _isComplete = true;
          nextValue = this.totalFrames - 1;
        }
      } else if (nextValue >= this.totalFrames) {
        this.playCount += 1;

        if (!this.checkSegments(nextValue % this.totalFrames)) {
          this.setCurrentRawFrameValue(nextValue % this.totalFrames);
          this._completedLoop = true;
          this.trigger('loopComplete');
        }
      } else {
        this.setCurrentRawFrameValue(nextValue);
      }
    } else if (nextValue < 0) {
      if (!this.checkSegments(nextValue % this.totalFrames)) {
        if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
          // eslint-disable-line no-plusplus
          this.setCurrentRawFrameValue(this.totalFrames + nextValue % this.totalFrames);

          if (!this._completedLoop) {
            this._completedLoop = true;
          } else {
            this.trigger('loopComplete');
          }
        } else {
          _isComplete = true;
          nextValue = 0;
        }
      }
    } else {
      this.setCurrentRawFrameValue(nextValue);
    }

    if (_isComplete) {
      this.setCurrentRawFrameValue(nextValue);
      this.pause();
      this.trigger('complete');
    }
  };

  AnimationItem.prototype.adjustSegment = function (arr, offset) {
    this.playCount = 0;

    if (arr[1] < arr[0]) {
      if (this.frameModifier > 0) {
        if (this.playSpeed < 0) {
          this.setSpeed(-this.playSpeed);
        } else {
          this.setDirection(-1);
        }
      }

      this.totalFrames = arr[0] - arr[1];
      this.timeCompleted = this.totalFrames;
      this.firstFrame = arr[1];
      this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
    } else if (arr[1] > arr[0]) {
      if (this.frameModifier < 0) {
        if (this.playSpeed < 0) {
          this.setSpeed(-this.playSpeed);
        } else {
          this.setDirection(1);
        }
      }

      this.totalFrames = arr[1] - arr[0];
      this.timeCompleted = this.totalFrames;
      this.firstFrame = arr[0];
      this.setCurrentRawFrameValue(0.001 + offset);
    }

    this.trigger('segmentStart');
  };

  AnimationItem.prototype.setSegment = function (init, end) {
    var pendingFrame = -1;

    if (this.isPaused) {
      if (this.currentRawFrame + this.firstFrame < init) {
        pendingFrame = init;
      } else if (this.currentRawFrame + this.firstFrame > end) {
        pendingFrame = end - init;
      }
    }

    this.firstFrame = init;
    this.totalFrames = end - init;
    this.timeCompleted = this.totalFrames;

    if (pendingFrame !== -1) {
      this.goToAndStop(pendingFrame, true);
    }
  };

  AnimationItem.prototype.playSegments = function (arr, forceFlag) {
    if (forceFlag) {
      this.segments.length = 0;
    }

    if (_typeof$4(arr[0]) === 'object') {
      var i;
      var len = arr.length;

      for (i = 0; i < len; i += 1) {
        this.segments.push(arr[i]);
      }
    } else {
      this.segments.push(arr);
    }

    if (this.segments.length && forceFlag) {
      this.adjustSegment(this.segments.shift(), 0);
    }

    if (this.isPaused) {
      this.play();
    }
  };

  AnimationItem.prototype.resetSegments = function (forceFlag) {
    this.segments.length = 0;
    this.segments.push([this.animationData.ip, this.animationData.op]);

    if (forceFlag) {
      this.checkSegments(0);
    }
  };

  AnimationItem.prototype.checkSegments = function (offset) {
    if (this.segments.length) {
      this.adjustSegment(this.segments.shift(), offset);
      return true;
    }

    return false;
  };

  AnimationItem.prototype.destroy = function (name) {
    if (name && this.name !== name || !this.renderer) {
      return;
    }

    this.renderer.destroy();
    this.imagePreloader.destroy();
    this.trigger('destroy');
    this._cbs = null;
    this.onEnterFrame = null;
    this.onLoopComplete = null;
    this.onComplete = null;
    this.onSegmentStart = null;
    this.onDestroy = null;
    this.renderer = null;
    this.expressionsPlugin = null;
    this.imagePreloader = null;
    this.projectInterface = null;
  };

  AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
    this.currentRawFrame = value;
    this.gotoFrame();
  };

  AnimationItem.prototype.setSpeed = function (val) {
    this.playSpeed = val;
    this.updaFrameModifier();
  };

  AnimationItem.prototype.setDirection = function (val) {
    this.playDirection = val < 0 ? -1 : 1;
    this.updaFrameModifier();
  };

  AnimationItem.prototype.setLoop = function (isLooping) {
    this.loop = isLooping;
  };

  AnimationItem.prototype.setVolume = function (val, name) {
    if (name && this.name !== name) {
      return;
    }

    this.audioController.setVolume(val);
  };

  AnimationItem.prototype.getVolume = function () {
    return this.audioController.getVolume();
  };

  AnimationItem.prototype.mute = function (name) {
    if (name && this.name !== name) {
      return;
    }

    this.audioController.mute();
  };

  AnimationItem.prototype.unmute = function (name) {
    if (name && this.name !== name) {
      return;
    }

    this.audioController.unmute();
  };

  AnimationItem.prototype.updaFrameModifier = function () {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
    this.audioController.setRate(this.playSpeed * this.playDirection);
  };

  AnimationItem.prototype.getPath = function () {
    return this.path;
  };

  AnimationItem.prototype.getAssetsPath = function (assetData) {
    var path = '';

    if (assetData.e) {
      path = assetData.p;
    } else if (this.assetsPath) {
      var imagePath = assetData.p;

      if (imagePath.indexOf('images/') !== -1) {
        imagePath = imagePath.split('/')[1];
      }

      path = this.assetsPath + imagePath;
    } else {
      path = this.path;
      path += assetData.u ? assetData.u : '';
      path += assetData.p;
    }

    return path;
  };

  AnimationItem.prototype.getAssetData = function (id) {
    var i = 0;
    var len = this.assets.length;

    while (i < len) {
      if (id === this.assets[i].id) {
        return this.assets[i];
      }

      i += 1;
    }

    return null;
  };

  AnimationItem.prototype.hide = function () {
    this.renderer.hide();
  };

  AnimationItem.prototype.show = function () {
    this.renderer.show();
  };

  AnimationItem.prototype.getDuration = function (isFrame) {
    return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
  };

  AnimationItem.prototype.updateDocumentData = function (path, documentData, index) {
    try {
      var element = this.renderer.getElementByPath(path);
      element.updateDocumentData(documentData, index);
    } catch (error) {// TODO: decide how to handle catch case
    }
  };

  AnimationItem.prototype.trigger = function (name) {
    if (this._cbs && this._cbs[name]) {
      switch (name) {
        case 'enterFrame':
          this.triggerEvent(name, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameModifier));
          break;

        case 'drawnFrame':
          this.drawnFrameEvent.currentTime = this.currentFrame;
          this.drawnFrameEvent.totalTime = this.totalFrames;
          this.drawnFrameEvent.direction = this.frameModifier;
          this.triggerEvent(name, this.drawnFrameEvent);
          break;

        case 'loopComplete':
          this.triggerEvent(name, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
          break;

        case 'complete':
          this.triggerEvent(name, new BMCompleteEvent(name, this.frameMult));
          break;

        case 'segmentStart':
          this.triggerEvent(name, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
          break;

        case 'destroy':
          this.triggerEvent(name, new BMDestroyEvent(name, this));
          break;

        default:
          this.triggerEvent(name);
      }
    }

    if (name === 'enterFrame' && this.onEnterFrame) {
      this.onEnterFrame.call(this, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameMult));
    }

    if (name === 'loopComplete' && this.onLoopComplete) {
      this.onLoopComplete.call(this, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
    }

    if (name === 'complete' && this.onComplete) {
      this.onComplete.call(this, new BMCompleteEvent(name, this.frameMult));
    }

    if (name === 'segmentStart' && this.onSegmentStart) {
      this.onSegmentStart.call(this, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
    }

    if (name === 'destroy' && this.onDestroy) {
      this.onDestroy.call(this, new BMDestroyEvent(name, this));
    }
  };

  AnimationItem.prototype.triggerRenderFrameError = function (nativeError) {
    var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
    this.triggerEvent('error', error);

    if (this.onError) {
      this.onError.call(this, error);
    }
  };

  AnimationItem.prototype.triggerConfigError = function (nativeError) {
    var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
    this.triggerEvent('error', error);

    if (this.onError) {
      this.onError.call(this, error);
    }
  };

  var animationManager = function () {
    var moduleOb = {};
    var registeredAnimations = [];
    var initTime = 0;
    var len = 0;
    var playingAnimationsNum = 0;
    var _stopped = true;
    var _isFrozen = false;

    function removeElement(ev) {
      var i = 0;
      var animItem = ev.target;

      while (i < len) {
        if (registeredAnimations[i].animation === animItem) {
          registeredAnimations.splice(i, 1);
          i -= 1;
          len -= 1;

          if (!animItem.isPaused) {
            subtractPlayingCount();
          }
        }

        i += 1;
      }
    }

    function registerAnimation(element, animationData) {
      if (!element) {
        return null;
      }

      var i = 0;

      while (i < len) {
        if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
          return registeredAnimations[i].animation;
        }

        i += 1;
      }

      var animItem = new AnimationItem();
      setupAnimation(animItem, element);
      animItem.setData(element, animationData);
      return animItem;
    }

    function getRegisteredAnimations() {
      var i;
      var lenAnims = registeredAnimations.length;
      var animations = [];

      for (i = 0; i < lenAnims; i += 1) {
        animations.push(registeredAnimations[i].animation);
      }

      return animations;
    }

    function addPlayingCount() {
      playingAnimationsNum += 1;
      activate();
    }

    function subtractPlayingCount() {
      playingAnimationsNum -= 1;
    }

    function setupAnimation(animItem, element) {
      animItem.addEventListener('destroy', removeElement);
      animItem.addEventListener('_active', addPlayingCount);
      animItem.addEventListener('_idle', subtractPlayingCount);
      registeredAnimations.push({
        elem: element,
        animation: animItem
      });
      len += 1;
    }

    function loadAnimation(params) {
      var animItem = new AnimationItem();
      setupAnimation(animItem, null);
      animItem.setParams(params);
      return animItem;
    }

    function setSpeed(val, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.setSpeed(val, animation);
      }
    }

    function setDirection(val, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.setDirection(val, animation);
      }
    }

    function play(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.play(animation);
      }
    }

    function resume(nowTime) {
      var elapsedTime = nowTime - initTime;
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.advanceTime(elapsedTime);
      }

      initTime = nowTime;

      if (playingAnimationsNum && !_isFrozen) {
        window.requestAnimationFrame(resume);
      } else {
        _stopped = true;
      }
    }

    function first(nowTime) {
      initTime = nowTime;
      window.requestAnimationFrame(resume);
    }

    function pause(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.pause(animation);
      }
    }

    function goToAndStop(value, isFrame, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.goToAndStop(value, isFrame, animation);
      }
    }

    function stop(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.stop(animation);
      }
    }

    function togglePause(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.togglePause(animation);
      }
    }

    function destroy(animation) {
      var i;

      for (i = len - 1; i >= 0; i -= 1) {
        registeredAnimations[i].animation.destroy(animation);
      }
    }

    function searchAnimations(animationData, standalone, renderer) {
      var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin')));
      var i;
      var lenAnims = animElements.length;

      for (i = 0; i < lenAnims; i += 1) {
        if (renderer) {
          animElements[i].setAttribute('data-bm-type', renderer);
        }

        registerAnimation(animElements[i], animationData);
      }

      if (standalone && lenAnims === 0) {
        if (!renderer) {
          renderer = 'svg';
        }

        var body = document.getElementsByTagName('body')[0];
        body.innerText = '';
        var div = createTag('div');
        div.style.width = '100%';
        div.style.height = '100%';
        div.setAttribute('data-bm-type', renderer);
        body.appendChild(div);
        registerAnimation(div, animationData);
      }
    }

    function resize() {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.resize();
      }
    }

    function activate() {
      if (!_isFrozen && playingAnimationsNum) {
        if (_stopped) {
          window.requestAnimationFrame(first);
          _stopped = false;
        }
      }
    }

    function freeze() {
      _isFrozen = true;
    }

    function unfreeze() {
      _isFrozen = false;
      activate();
    }

    function setVolume(val, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.setVolume(val, animation);
      }
    }

    function mute(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.mute(animation);
      }
    }

    function unmute(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.unmute(animation);
      }
    }

    moduleOb.registerAnimation = registerAnimation;
    moduleOb.loadAnimation = loadAnimation;
    moduleOb.setSpeed = setSpeed;
    moduleOb.setDirection = setDirection;
    moduleOb.play = play;
    moduleOb.pause = pause;
    moduleOb.stop = stop;
    moduleOb.togglePause = togglePause;
    moduleOb.searchAnimations = searchAnimations;
    moduleOb.resize = resize; // moduleOb.start = start;

    moduleOb.goToAndStop = goToAndStop;
    moduleOb.destroy = destroy;
    moduleOb.freeze = freeze;
    moduleOb.unfreeze = unfreeze;
    moduleOb.setVolume = setVolume;
    moduleOb.mute = mute;
    moduleOb.unmute = unmute;
    moduleOb.getRegisteredAnimations = getRegisteredAnimations;
    return moduleOb;
  }();

  /* eslint-disable */
  var BezierFactory = function () {
    /**
       * BezierEasing - use bezier curve for transition easing function
       * by Gaëtan Renaudeau 2014 - 2015 – MIT License
       *
       * Credits: is based on Firefox's nsSMILKeySpline.cpp
       * Usage:
       * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
       * spline.get(x) => returns the easing value | x must be in [0, 1] range
       *
       */
    var ob = {};
    ob.getBezierEasing = getBezierEasing;
    var beziers = {};

    function getBezierEasing(a, b, c, d, nm) {
      var str = nm || ('bez_' + a + '_' + b + '_' + c + '_' + d).replace(/\./g, 'p');

      if (beziers[str]) {
        return beziers[str];
      }

      var bezEasing = new BezierEasing([a, b, c, d]);
      beziers[str] = bezEasing;
      return bezEasing;
    } // These values are established by empiricism with tests (tradeoff: performance VS precision)


    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    var float32ArraySupported = typeof Float32Array === 'function';

    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }

    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    }

    function C(aA1) {
      return 3.0 * aA1;
    } // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    } // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


    function getSlope(aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX,
          currentT,
          i = 0;

      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;

        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

      return currentT;
    }

    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }

      return aGuessT;
    }
    /**
       * points is an array of [ mX1, mY1, mX2, mY2 ]
       */


    function BezierEasing(points) {
      this._p = points;
      this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      this._precomputed = false;
      this.get = this.get.bind(this);
    }

    BezierEasing.prototype = {
      get: function get(x) {
        var mX1 = this._p[0],
            mY1 = this._p[1],
            mX2 = this._p[2],
            mY2 = this._p[3];
        if (!this._precomputed) this._precompute();
        if (mX1 === mY1 && mX2 === mY2) return x; // linear
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.

        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(this._getTForX(x), mY1, mY2);
      },
      // Private part
      _precompute: function _precompute() {
        var mX1 = this._p[0],
            mY1 = this._p[1],
            mX2 = this._p[2],
            mY2 = this._p[3];
        this._precomputed = true;

        if (mX1 !== mY1 || mX2 !== mY2) {
          this._calcSampleValues();
        }
      },
      _calcSampleValues: function _calcSampleValues() {
        var mX1 = this._p[0],
            mX2 = this._p[2];

        for (var i = 0; i < kSplineTableSize; ++i) {
          this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      },

      /**
           * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
           */
      _getTForX: function _getTForX(aX) {
        var mX1 = this._p[0],
            mX2 = this._p[2],
            mSampleValues = this._mSampleValues;
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample; // Interpolate to provide an initial guess for t

        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }

        if (initialSlope === 0.0) {
          return guessForT;
        }

        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    };
    return ob;
  }();

  var pooling = function () {
    function _double(arr) {
      return arr.concat(createSizedArray(arr.length));
    }

    return {
      "double": _double
    };
  }();

  var poolFactory = function () {
    return function (initialLength, _create, _release) {
      var _length = 0;
      var _maxLength = initialLength;
      var pool = createSizedArray(_maxLength);
      var ob = {
        newElement: newElement,
        release: release
      };

      function newElement() {
        var element;

        if (_length) {
          _length -= 1;
          element = pool[_length];
        } else {
          element = _create();
        }

        return element;
      }

      function release(element) {
        if (_length === _maxLength) {
          pool = pooling["double"](pool);
          _maxLength *= 2;
        }

        if (_release) {
          _release(element);
        }

        pool[_length] = element;
        _length += 1;
      }

      return ob;
    };
  }();

  var bezierLengthPool = function () {
    function create() {
      return {
        addedLength: 0,
        percents: createTypedArray('float32', getDefaultCurveSegments()),
        lengths: createTypedArray('float32', getDefaultCurveSegments())
      };
    }

    return poolFactory(8, create);
  }();

  var segmentsLengthPool = function () {
    function create() {
      return {
        lengths: [],
        totalLength: 0
      };
    }

    function release(element) {
      var i;
      var len = element.lengths.length;

      for (i = 0; i < len; i += 1) {
        bezierLengthPool.release(element.lengths[i]);
      }

      element.lengths.length = 0;
    }

    return poolFactory(8, create, release);
  }();

  function bezFunction() {
    var math = Math;

    function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
      var det1 = x1 * y2 + y1 * x3 + x2 * y3 - x3 * y2 - y3 * x1 - x2 * y1;
      return det1 > -0.001 && det1 < 0.001;
    }

    function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
      if (z1 === 0 && z2 === 0 && z3 === 0) {
        return pointOnLine2D(x1, y1, x2, y2, x3, y3);
      }

      var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
      var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
      var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
      var diffDist;

      if (dist1 > dist2) {
        if (dist1 > dist3) {
          diffDist = dist1 - dist2 - dist3;
        } else {
          diffDist = dist3 - dist2 - dist1;
        }
      } else if (dist3 > dist2) {
        diffDist = dist3 - dist2 - dist1;
      } else {
        diffDist = dist2 - dist1 - dist3;
      }

      return diffDist > -0.0001 && diffDist < 0.0001;
    }

    var getBezierLength = function () {
      return function (pt1, pt2, pt3, pt4) {
        var curveSegments = getDefaultCurveSegments();
        var k;
        var i;
        var len;
        var ptCoord;
        var perc;
        var addedLength = 0;
        var ptDistance;
        var point = [];
        var lastPoint = [];
        var lengthData = bezierLengthPool.newElement();
        len = pt3.length;

        for (k = 0; k < curveSegments; k += 1) {
          perc = k / (curveSegments - 1);
          ptDistance = 0;

          for (i = 0; i < len; i += 1) {
            ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
            point[i] = ptCoord;

            if (lastPoint[i] !== null) {
              ptDistance += bmPow(point[i] - lastPoint[i], 2);
            }

            lastPoint[i] = point[i];
          }

          if (ptDistance) {
            ptDistance = bmSqrt(ptDistance);
            addedLength += ptDistance;
          }

          lengthData.percents[k] = perc;
          lengthData.lengths[k] = addedLength;
        }

        lengthData.addedLength = addedLength;
        return lengthData;
      };
    }();

    function getSegmentsLength(shapeData) {
      var segmentsLength = segmentsLengthPool.newElement();
      var closed = shapeData.c;
      var pathV = shapeData.v;
      var pathO = shapeData.o;
      var pathI = shapeData.i;
      var i;
      var len = shapeData._length;
      var lengths = segmentsLength.lengths;
      var totalLength = 0;

      for (i = 0; i < len - 1; i += 1) {
        lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
        totalLength += lengths[i].addedLength;
      }

      if (closed && len) {
        lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
        totalLength += lengths[i].addedLength;
      }

      segmentsLength.totalLength = totalLength;
      return segmentsLength;
    }

    function BezierData(length) {
      this.segmentLength = 0;
      this.points = new Array(length);
    }

    function PointData(partial, point) {
      this.partialLength = partial;
      this.point = point;
    }

    var buildBezierData = function () {
      var storedData = {};
      return function (pt1, pt2, pt3, pt4) {
        var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');

        if (!storedData[bezierName]) {
          var curveSegments = getDefaultCurveSegments();
          var k;
          var i;
          var len;
          var ptCoord;
          var perc;
          var addedLength = 0;
          var ptDistance;
          var point;
          var lastPoint = null;

          if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
            curveSegments = 2;
          }

          var bezierData = new BezierData(curveSegments);
          len = pt3.length;

          for (k = 0; k < curveSegments; k += 1) {
            point = createSizedArray(len);
            perc = k / (curveSegments - 1);
            ptDistance = 0;

            for (i = 0; i < len; i += 1) {
              ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
              point[i] = ptCoord;

              if (lastPoint !== null) {
                ptDistance += bmPow(point[i] - lastPoint[i], 2);
              }
            }

            ptDistance = bmSqrt(ptDistance);
            addedLength += ptDistance;
            bezierData.points[k] = new PointData(ptDistance, point);
            lastPoint = point;
          }

          bezierData.segmentLength = addedLength;
          storedData[bezierName] = bezierData;
        }

        return storedData[bezierName];
      };
    }();

    function getDistancePerc(perc, bezierData) {
      var percents = bezierData.percents;
      var lengths = bezierData.lengths;
      var len = percents.length;
      var initPos = bmFloor((len - 1) * perc);
      var lengthPos = perc * bezierData.addedLength;
      var lPerc = 0;

      if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
        return percents[initPos];
      }

      var dir = lengths[initPos] > lengthPos ? -1 : 1;
      var flag = true;

      while (flag) {
        if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
          lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
          flag = false;
        } else {
          initPos += dir;
        }

        if (initPos < 0 || initPos >= len - 1) {
          // FIX for TypedArrays that don't store floating point values with enough accuracy
          if (initPos === len - 1) {
            return percents[initPos];
          }

          flag = false;
        }
      }

      return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
    }

    function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
      var t1 = getDistancePerc(percent, bezierData);
      var u1 = 1 - t1;
      var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1000) / 1000;
      var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1000) / 1000;
      return [ptX, ptY];
    }

    var bezierSegmentPoints = createTypedArray('float32', 8);

    function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
      if (startPerc < 0) {
        startPerc = 0;
      } else if (startPerc > 1) {
        startPerc = 1;
      }

      var t0 = getDistancePerc(startPerc, bezierData);
      endPerc = endPerc > 1 ? 1 : endPerc;
      var t1 = getDistancePerc(endPerc, bezierData);
      var i;
      var len = pt1.length;
      var u0 = 1 - t0;
      var u1 = 1 - t1;
      var u0u0u0 = u0 * u0 * u0;
      var t0u0u0_3 = t0 * u0 * u0 * 3; // eslint-disable-line camelcase

      var t0t0u0_3 = t0 * t0 * u0 * 3; // eslint-disable-line camelcase

      var t0t0t0 = t0 * t0 * t0; //

      var u0u0u1 = u0 * u0 * u1;
      var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1; // eslint-disable-line camelcase

      var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1; // eslint-disable-line camelcase

      var t0t0t1 = t0 * t0 * t1; //

      var u0u1u1 = u0 * u1 * u1;
      var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1; // eslint-disable-line camelcase

      var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1; // eslint-disable-line camelcase

      var t0t1t1 = t0 * t1 * t1; //

      var u1u1u1 = u1 * u1 * u1;
      var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1; // eslint-disable-line camelcase

      var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1; // eslint-disable-line camelcase

      var t1t1t1 = t1 * t1 * t1;

      for (i = 0; i < len; i += 1) {
        bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

        bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

        bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

        bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      }

      return bezierSegmentPoints;
    }

    return {
      getSegmentsLength: getSegmentsLength,
      getNewSegment: getNewSegment,
      getPointInSegment: getPointInSegment,
      buildBezierData: buildBezierData,
      pointOnLine2D: pointOnLine2D,
      pointOnLine3D: pointOnLine3D
    };
  }

  var bez = bezFunction();

  var initFrame = initialDefaultFrame;
  var mathAbs = Math.abs;

  function interpolateValue(frameNum, caching) {
    var offsetTime = this.offsetTime;
    var newValue;

    if (this.propType === 'multidimensional') {
      newValue = createTypedArray('float32', this.pv.length);
    }

    var iterationIndex = caching.lastIndex;
    var i = iterationIndex;
    var len = this.keyframes.length - 1;
    var flag = true;
    var keyData;
    var nextKeyData;
    var keyframeMetadata;

    while (flag) {
      keyData = this.keyframes[i];
      nextKeyData = this.keyframes[i + 1];

      if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
        if (keyData.h) {
          keyData = nextKeyData;
        }

        iterationIndex = 0;
        break;
      }

      if (nextKeyData.t - offsetTime > frameNum) {
        iterationIndex = i;
        break;
      }

      if (i < len - 1) {
        i += 1;
      } else {
        iterationIndex = 0;
        flag = false;
      }
    }

    keyframeMetadata = this.keyframesMetadata[i] || {};
    var k;
    var kLen;
    var perc;
    var jLen;
    var j;
    var fnc;
    var nextKeyTime = nextKeyData.t - offsetTime;
    var keyTime = keyData.t - offsetTime;
    var endValue;

    if (keyData.to) {
      if (!keyframeMetadata.bezierData) {
        keyframeMetadata.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
      }

      var bezierData = keyframeMetadata.bezierData;

      if (frameNum >= nextKeyTime || frameNum < keyTime) {
        var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
        kLen = bezierData.points[ind].point.length;

        for (k = 0; k < kLen; k += 1) {
          newValue[k] = bezierData.points[ind].point[k];
        } // caching._lastKeyframeIndex = -1;

      } else {
        if (keyframeMetadata.__fnct) {
          fnc = keyframeMetadata.__fnct;
        } else {
          fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
          keyframeMetadata.__fnct = fnc;
        }

        perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
        var distanceInLine = bezierData.segmentLength * perc;
        var segmentPerc;
        var addedLength = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastAddedLength : 0;
        j = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastPoint : 0;
        flag = true;
        jLen = bezierData.points.length;

        while (flag) {
          addedLength += bezierData.points[j].partialLength;

          if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
            kLen = bezierData.points[j].point.length;

            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k];
            }

            break;
          } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
            kLen = bezierData.points[j].point.length;

            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
            }

            break;
          }

          if (j < jLen - 1) {
            j += 1;
          } else {
            flag = false;
          }
        }

        caching._lastPoint = j;
        caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
        caching._lastKeyframeIndex = i;
      }
    } else {
      var outX;
      var outY;
      var inX;
      var inY;
      var keyValue;
      len = keyData.s.length;
      endValue = nextKeyData.s || keyData.e;

      if (this.sh && keyData.h !== 1) {
        if (frameNum >= nextKeyTime) {
          newValue[0] = endValue[0];
          newValue[1] = endValue[1];
          newValue[2] = endValue[2];
        } else if (frameNum <= keyTime) {
          newValue[0] = keyData.s[0];
          newValue[1] = keyData.s[1];
          newValue[2] = keyData.s[2];
        } else {
          var quatStart = createQuaternion(keyData.s);
          var quatEnd = createQuaternion(endValue);
          var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
          quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
        }
      } else {
        for (i = 0; i < len; i += 1) {
          if (keyData.h !== 1) {
            if (frameNum >= nextKeyTime) {
              perc = 1;
            } else if (frameNum < keyTime) {
              perc = 0;
            } else {
              if (keyData.o.x.constructor === Array) {
                if (!keyframeMetadata.__fnct) {
                  keyframeMetadata.__fnct = [];
                }

                if (!keyframeMetadata.__fnct[i]) {
                  outX = keyData.o.x[i] === undefined ? keyData.o.x[0] : keyData.o.x[i];
                  outY = keyData.o.y[i] === undefined ? keyData.o.y[0] : keyData.o.y[i];
                  inX = keyData.i.x[i] === undefined ? keyData.i.x[0] : keyData.i.x[i];
                  inY = keyData.i.y[i] === undefined ? keyData.i.y[0] : keyData.i.y[i];
                  fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                  keyframeMetadata.__fnct[i] = fnc;
                } else {
                  fnc = keyframeMetadata.__fnct[i];
                }
              } else if (!keyframeMetadata.__fnct) {
                outX = keyData.o.x;
                outY = keyData.o.y;
                inX = keyData.i.x;
                inY = keyData.i.y;
                fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                keyData.keyframeMetadata = fnc;
              } else {
                fnc = keyframeMetadata.__fnct;
              }

              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
            }
          }

          endValue = nextKeyData.s || keyData.e;
          keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;

          if (this.propType === 'multidimensional') {
            newValue[i] = keyValue;
          } else {
            newValue = keyValue;
          }
        }
      }
    }

    caching.lastIndex = iterationIndex;
    return newValue;
  } // based on @Toji's https://github.com/toji/gl-matrix/


  function slerp(a, b, t) {
    var out = [];
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];
    var bw = b[3];
    var omega;
    var cosom;
    var sinom;
    var scale0;
    var scale1;
    cosom = ax * bx + ay * by + az * bz + aw * bw;

    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }

    if (1.0 - cosom > 0.000001) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1.0 - t;
      scale1 = t;
    }

    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }

  function quaternionToEuler(out, quat) {
    var qx = quat[0];
    var qy = quat[1];
    var qz = quat[2];
    var qw = quat[3];
    var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
    var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
    var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
    out[0] = heading / degToRads;
    out[1] = attitude / degToRads;
    out[2] = bank / degToRads;
  }

  function createQuaternion(values) {
    var heading = values[0] * degToRads;
    var attitude = values[1] * degToRads;
    var bank = values[2] * degToRads;
    var c1 = Math.cos(heading / 2);
    var c2 = Math.cos(attitude / 2);
    var c3 = Math.cos(bank / 2);
    var s1 = Math.sin(heading / 2);
    var s2 = Math.sin(attitude / 2);
    var s3 = Math.sin(bank / 2);
    var w = c1 * c2 * c3 - s1 * s2 * s3;
    var x = s1 * s2 * c3 + c1 * c2 * s3;
    var y = s1 * c2 * c3 + c1 * s2 * s3;
    var z = c1 * s2 * c3 - s1 * c2 * s3;
    return [x, y, z, w];
  }

  function getValueAtCurrentTime() {
    var frameNum = this.comp.renderedFrame - this.offsetTime;
    var initTime = this.keyframes[0].t - this.offsetTime;
    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;

    if (!(frameNum === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= endTime && frameNum >= endTime || this._caching.lastFrame < initTime && frameNum < initTime))) {
      if (this._caching.lastFrame >= frameNum) {
        this._caching._lastKeyframeIndex = -1;
        this._caching.lastIndex = 0;
      }

      var renderResult = this.interpolateValue(frameNum, this._caching);
      this.pv = renderResult;
    }

    this._caching.lastFrame = frameNum;
    return this.pv;
  }

  function setVValue(val) {
    var multipliedValue;

    if (this.propType === 'unidimensional') {
      multipliedValue = val * this.mult;

      if (mathAbs(this.v - multipliedValue) > 0.00001) {
        this.v = multipliedValue;
        this._mdf = true;
      }
    } else {
      var i = 0;
      var len = this.v.length;

      while (i < len) {
        multipliedValue = val[i] * this.mult;

        if (mathAbs(this.v[i] - multipliedValue) > 0.00001) {
          this.v[i] = multipliedValue;
          this._mdf = true;
        }

        i += 1;
      }
    }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
      return;
    }

    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }

    this.lock = true;
    this._mdf = this._isFirstFrame;
    var i;
    var len = this.effectsSequence.length;
    var finalValue = this.kf ? this.pv : this.data.k;

    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }

    this.setVValue(finalValue);
    this._isFirstFrame = false;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  }

  function addEffect(effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.container.addDynamicProperty(this);
  }

  function ValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.mult = mult || 1;
    this.data = data;
    this.v = mult ? data.k * mult : data.k;
    this.pv = data.k;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.vel = 0;
    this.effectsSequence = [];
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function MultiDimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    this.mult = mult || 1;
    this.data = data;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.frameId = -1;
    var i;
    var len = data.k.length;
    this.v = createTypedArray('float32', len);
    this.pv = createTypedArray('float32', len);
    this.vel = createTypedArray('float32', len);

    for (i = 0; i < len; i += 1) {
      this.v[i] = data.k[i] * this.mult;
      this.pv[i] = data.k[i];
    }

    this._isFirstFrame = true;
    this.effectsSequence = [];
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function KeyframedValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.keyframes = data.k;
    this.keyframesMetadata = [];
    this.offsetTime = elem.data.st;
    this.frameId = -1;
    this._caching = {
      lastFrame: initFrame,
      lastIndex: 0,
      value: 0,
      _lastKeyframeIndex: -1
    };
    this.k = true;
    this.kf = true;
    this.data = data;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.v = initFrame;
    this.pv = initFrame;
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.addEffect = addEffect;
  }

  function KeyframedMultidimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    var i;
    var len = data.k.length;
    var s;
    var e;
    var to;
    var ti;

    for (i = 0; i < len - 1; i += 1) {
      if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
        s = data.k[i].s;
        e = data.k[i + 1].s;
        to = data.k[i].to;
        ti = data.k[i].ti;

        if (s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1]) || s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2])) {
          data.k[i].to = null;
          data.k[i].ti = null;
        }

        if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
          if (s.length === 2 || s[2] === e[2] && to[2] === 0 && ti[2] === 0) {
            data.k[i].to = null;
            data.k[i].ti = null;
          }
        }
      }
    }

    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.data = data;
    this.keyframes = data.k;
    this.keyframesMetadata = [];
    this.offsetTime = elem.data.st;
    this.k = true;
    this.kf = true;
    this._isFirstFrame = true;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.frameId = -1;
    var arrLen = data.k[0].s.length;
    this.v = createTypedArray('float32', arrLen);
    this.pv = createTypedArray('float32', arrLen);

    for (i = 0; i < arrLen; i += 1) {
      this.v[i] = initFrame;
      this.pv[i] = initFrame;
    }

    this._caching = {
      lastFrame: initFrame,
      lastIndex: 0,
      value: createTypedArray('float32', arrLen)
    };
    this.addEffect = addEffect;
  }

  var PropertyFactory = function () {
    function getProp(elem, data, type, mult, container) {
      if (data.sid) {
        data = elem.globalData.slotManager.getProp(data);
      }

      var p;

      if (!data.k.length) {
        p = new ValueProperty(elem, data, mult, container);
      } else if (typeof data.k[0] === 'number') {
        p = new MultiDimensionalProperty(elem, data, mult, container);
      } else {
        switch (type) {
          case 0:
            p = new KeyframedValueProperty(elem, data, mult, container);
            break;

          case 1:
            p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
            break;

          default:
            break;
        }
      }

      if (p.effectsSequence.length) {
        container.addDynamicProperty(p);
      }

      return p;
    }

    var ob = {
      getProp: getProp
    };
    return ob;
  }();

  function DynamicPropertyContainer() {}

  DynamicPropertyContainer.prototype = {
    addDynamicProperty: function addDynamicProperty(prop) {
      if (this.dynamicProperties.indexOf(prop) === -1) {
        this.dynamicProperties.push(prop);
        this.container.addDynamicProperty(this);
        this._isAnimated = true;
      }
    },
    iterateDynamicProperties: function iterateDynamicProperties() {
      this._mdf = false;
      var i;
      var len = this.dynamicProperties.length;

      for (i = 0; i < len; i += 1) {
        this.dynamicProperties[i].getValue();

        if (this.dynamicProperties[i]._mdf) {
          this._mdf = true;
        }
      }
    },
    initDynamicPropertyContainer: function initDynamicPropertyContainer(container) {
      this.container = container;
      this.dynamicProperties = [];
      this._mdf = false;
      this._isAnimated = false;
    }
  };

  var pointPool = function () {
    function create() {
      return createTypedArray('float32', 2);
    }

    return poolFactory(8, create);
  }();

  function ShapePath() {
    this.c = false;
    this._length = 0;
    this._maxLength = 8;
    this.v = createSizedArray(this._maxLength);
    this.o = createSizedArray(this._maxLength);
    this.i = createSizedArray(this._maxLength);
  }

  ShapePath.prototype.setPathData = function (closed, len) {
    this.c = closed;
    this.setLength(len);
    var i = 0;

    while (i < len) {
      this.v[i] = pointPool.newElement();
      this.o[i] = pointPool.newElement();
      this.i[i] = pointPool.newElement();
      i += 1;
    }
  };

  ShapePath.prototype.setLength = function (len) {
    while (this._maxLength < len) {
      this.doubleArrayLength();
    }

    this._length = len;
  };

  ShapePath.prototype.doubleArrayLength = function () {
    this.v = this.v.concat(createSizedArray(this._maxLength));
    this.i = this.i.concat(createSizedArray(this._maxLength));
    this.o = this.o.concat(createSizedArray(this._maxLength));
    this._maxLength *= 2;
  };

  ShapePath.prototype.setXYAt = function (x, y, type, pos, replace) {
    var arr;
    this._length = Math.max(this._length, pos + 1);

    if (this._length >= this._maxLength) {
      this.doubleArrayLength();
    }

    switch (type) {
      case 'v':
        arr = this.v;
        break;

      case 'i':
        arr = this.i;
        break;

      case 'o':
        arr = this.o;
        break;

      default:
        arr = [];
        break;
    }

    if (!arr[pos] || arr[pos] && !replace) {
      arr[pos] = pointPool.newElement();
    }

    arr[pos][0] = x;
    arr[pos][1] = y;
  };

  ShapePath.prototype.setTripleAt = function (vX, vY, oX, oY, iX, iY, pos, replace) {
    this.setXYAt(vX, vY, 'v', pos, replace);
    this.setXYAt(oX, oY, 'o', pos, replace);
    this.setXYAt(iX, iY, 'i', pos, replace);
  };

  ShapePath.prototype.reverse = function () {
    var newPath = new ShapePath();
    newPath.setPathData(this.c, this._length);
    var vertices = this.v;
    var outPoints = this.o;
    var inPoints = this.i;
    var init = 0;

    if (this.c) {
      newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
      init = 1;
    }

    var cnt = this._length - 1;
    var len = this._length;
    var i;

    for (i = init; i < len; i += 1) {
      newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
      cnt -= 1;
    }

    return newPath;
  };

  ShapePath.prototype.length = function () {
    return this._length;
  };

  var shapePool = function () {
    function create() {
      return new ShapePath();
    }

    function release(shapePath) {
      var len = shapePath._length;
      var i;

      for (i = 0; i < len; i += 1) {
        pointPool.release(shapePath.v[i]);
        pointPool.release(shapePath.i[i]);
        pointPool.release(shapePath.o[i]);
        shapePath.v[i] = null;
        shapePath.i[i] = null;
        shapePath.o[i] = null;
      }

      shapePath._length = 0;
      shapePath.c = false;
    }

    function clone(shape) {
      var cloned = factory.newElement();
      var i;
      var len = shape._length === undefined ? shape.v.length : shape._length;
      cloned.setLength(len);
      cloned.c = shape.c;

      for (i = 0; i < len; i += 1) {
        cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
      }

      return cloned;
    }

    var factory = poolFactory(4, create, release);
    factory.clone = clone;
    return factory;
  }();

  function ShapeCollection() {
    this._length = 0;
    this._maxLength = 4;
    this.shapes = createSizedArray(this._maxLength);
  }

  ShapeCollection.prototype.addShape = function (shapeData) {
    if (this._length === this._maxLength) {
      this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
      this._maxLength *= 2;
    }

    this.shapes[this._length] = shapeData;
    this._length += 1;
  };

  ShapeCollection.prototype.releaseShapes = function () {
    var i;

    for (i = 0; i < this._length; i += 1) {
      shapePool.release(this.shapes[i]);
    }

    this._length = 0;
  };

  var shapeCollectionPool = function () {
    var ob = {
      newShapeCollection: newShapeCollection,
      release: release
    };
    var _length = 0;
    var _maxLength = 4;
    var pool = createSizedArray(_maxLength);

    function newShapeCollection() {
      var shapeCollection;

      if (_length) {
        _length -= 1;
        shapeCollection = pool[_length];
      } else {
        shapeCollection = new ShapeCollection();
      }

      return shapeCollection;
    }

    function release(shapeCollection) {
      var i;
      var len = shapeCollection._length;

      for (i = 0; i < len; i += 1) {
        shapePool.release(shapeCollection.shapes[i]);
      }

      shapeCollection._length = 0;

      if (_length === _maxLength) {
        pool = pooling["double"](pool);
        _maxLength *= 2;
      }

      pool[_length] = shapeCollection;
      _length += 1;
    }

    return ob;
  }();

  var ShapePropertyFactory = function () {
    var initFrame = -999999;

    function interpolateShape(frameNum, previousValue, caching) {
      var iterationIndex = caching.lastIndex;
      var keyPropS;
      var keyPropE;
      var isHold;
      var j;
      var k;
      var jLen;
      var kLen;
      var perc;
      var vertexValue;
      var kf = this.keyframes;

      if (frameNum < kf[0].t - this.offsetTime) {
        keyPropS = kf[0].s[0];
        isHold = true;
        iterationIndex = 0;
      } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
        keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
        /* if(kf[kf.length - 1].s){
                  keyPropS = kf[kf.length - 1].s[0];
              }else{
                  keyPropS = kf[kf.length - 2].e[0];
              } */

        isHold = true;
      } else {
        var i = iterationIndex;
        var len = kf.length - 1;
        var flag = true;
        var keyData;
        var nextKeyData;
        var keyframeMetadata;

        while (flag) {
          keyData = kf[i];
          nextKeyData = kf[i + 1];

          if (nextKeyData.t - this.offsetTime > frameNum) {
            break;
          }

          if (i < len - 1) {
            i += 1;
          } else {
            flag = false;
          }
        }

        keyframeMetadata = this.keyframesMetadata[i] || {};
        isHold = keyData.h === 1;
        iterationIndex = i;

        if (!isHold) {
          if (frameNum >= nextKeyData.t - this.offsetTime) {
            perc = 1;
          } else if (frameNum < keyData.t - this.offsetTime) {
            perc = 0;
          } else {
            var fnc;

            if (keyframeMetadata.__fnct) {
              fnc = keyframeMetadata.__fnct;
            } else {
              fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
              keyframeMetadata.__fnct = fnc;
            }

            perc = fnc((frameNum - (keyData.t - this.offsetTime)) / (nextKeyData.t - this.offsetTime - (keyData.t - this.offsetTime)));
          }

          keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
        }

        keyPropS = keyData.s[0];
      }

      jLen = previousValue._length;
      kLen = keyPropS.i[0].length;
      caching.lastIndex = iterationIndex;

      for (j = 0; j < jLen; j += 1) {
        for (k = 0; k < kLen; k += 1) {
          vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
          previousValue.i[j][k] = vertexValue;
          vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
          previousValue.o[j][k] = vertexValue;
          vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
          previousValue.v[j][k] = vertexValue;
        }
      }
    }

    function interpolateShapeCurrentTime() {
      var frameNum = this.comp.renderedFrame - this.offsetTime;
      var initTime = this.keyframes[0].t - this.offsetTime;
      var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      var lastFrame = this._caching.lastFrame;

      if (!(lastFrame !== initFrame && (lastFrame < initTime && frameNum < initTime || lastFrame > endTime && frameNum > endTime))) {
        /// /
        this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
        this.interpolateShape(frameNum, this.pv, this._caching); /// /
      }

      this._caching.lastFrame = frameNum;
      return this.pv;
    }

    function resetShape() {
      this.paths = this.localShapeCollection;
    }

    function shapesEqual(shape1, shape2) {
      if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
        return false;
      }

      var i;
      var len = shape1._length;

      for (i = 0; i < len; i += 1) {
        if (shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]) {
          return false;
        }
      }

      return true;
    }

    function setVValue(newPath) {
      if (!shapesEqual(this.v, newPath)) {
        this.v = shapePool.clone(newPath);
        this.localShapeCollection.releaseShapes();
        this.localShapeCollection.addShape(this.v);
        this._mdf = true;
        this.paths = this.localShapeCollection;
      }
    }

    function processEffectsSequence() {
      if (this.elem.globalData.frameId === this.frameId) {
        return;
      }

      if (!this.effectsSequence.length) {
        this._mdf = false;
        return;
      }

      if (this.lock) {
        this.setVValue(this.pv);
        return;
      }

      this.lock = true;
      this._mdf = false;
      var finalValue;

      if (this.kf) {
        finalValue = this.pv;
      } else if (this.data.ks) {
        finalValue = this.data.ks.k;
      } else {
        finalValue = this.data.pt.k;
      }

      var i;
      var len = this.effectsSequence.length;

      for (i = 0; i < len; i += 1) {
        finalValue = this.effectsSequence[i](finalValue);
      }

      this.setVValue(finalValue);
      this.lock = false;
      this.frameId = this.elem.globalData.frameId;
    }

    function ShapeProperty(elem, data, type) {
      this.propType = 'shape';
      this.comp = elem.comp;
      this.container = elem;
      this.elem = elem;
      this.data = data;
      this.k = false;
      this.kf = false;
      this._mdf = false;
      var pathData = type === 3 ? data.pt.k : data.ks.k;
      this.v = shapePool.clone(pathData);
      this.pv = shapePool.clone(this.v);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.paths = this.localShapeCollection;
      this.paths.addShape(this.v);
      this.reset = resetShape;
      this.effectsSequence = [];
    }

    function addEffect(effectFunction) {
      this.effectsSequence.push(effectFunction);
      this.container.addDynamicProperty(this);
    }

    ShapeProperty.prototype.interpolateShape = interpolateShape;
    ShapeProperty.prototype.getValue = processEffectsSequence;
    ShapeProperty.prototype.setVValue = setVValue;
    ShapeProperty.prototype.addEffect = addEffect;

    function KeyframedShapeProperty(elem, data, type) {
      this.propType = 'shape';
      this.comp = elem.comp;
      this.elem = elem;
      this.container = elem;
      this.offsetTime = elem.data.st;
      this.keyframes = type === 3 ? data.pt.k : data.ks.k;
      this.keyframesMetadata = [];
      this.k = true;
      this.kf = true;
      var len = this.keyframes[0].s[0].i.length;
      this.v = shapePool.newElement();
      this.v.setPathData(this.keyframes[0].s[0].c, len);
      this.pv = shapePool.clone(this.v);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.paths = this.localShapeCollection;
      this.paths.addShape(this.v);
      this.lastFrame = initFrame;
      this.reset = resetShape;
      this._caching = {
        lastFrame: initFrame,
        lastIndex: 0
      };
      this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
    }

    KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
    KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
    KeyframedShapeProperty.prototype.setVValue = setVValue;
    KeyframedShapeProperty.prototype.addEffect = addEffect;

    var EllShapeProperty = function () {
      var cPoint = roundCorner;

      function EllShapePropertyFactory(elem, data) {
        this.v = shapePool.newElement();
        this.v.setPathData(true, 4);
        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.localShapeCollection.addShape(this.v);
        this.d = data.d;
        this.elem = elem;
        this.comp = elem.comp;
        this.frameId = -1;
        this.initDynamicPropertyContainer(elem);
        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);

        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.k = false;
          this.convertEllToPath();
        }
      }

      EllShapePropertyFactory.prototype = {
        reset: resetShape,
        getValue: function getValue() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }

          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();

          if (this._mdf) {
            this.convertEllToPath();
          }
        },
        convertEllToPath: function convertEllToPath() {
          var p0 = this.p.v[0];
          var p1 = this.p.v[1];
          var s0 = this.s.v[0] / 2;
          var s1 = this.s.v[1] / 2;

          var _cw = this.d !== 3;

          var _v = this.v;
          _v.v[0][0] = p0;
          _v.v[0][1] = p1 - s1;
          _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
          _v.v[1][1] = p1;
          _v.v[2][0] = p0;
          _v.v[2][1] = p1 + s1;
          _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
          _v.v[3][1] = p1;
          _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
          _v.i[0][1] = p1 - s1;
          _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
          _v.i[1][1] = p1 - s1 * cPoint;
          _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
          _v.i[2][1] = p1 + s1;
          _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
          _v.i[3][1] = p1 + s1 * cPoint;
          _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
          _v.o[0][1] = p1 - s1;
          _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
          _v.o[1][1] = p1 + s1 * cPoint;
          _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
          _v.o[2][1] = p1 + s1;
          _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
          _v.o[3][1] = p1 - s1 * cPoint;
        }
      };
      extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);
      return EllShapePropertyFactory;
    }();

    var StarShapeProperty = function () {
      function StarShapePropertyFactory(elem, data) {
        this.v = shapePool.newElement();
        this.v.setPathData(true, 0);
        this.elem = elem;
        this.comp = elem.comp;
        this.data = data;
        this.frameId = -1;
        this.d = data.d;
        this.initDynamicPropertyContainer(elem);

        if (data.sy === 1) {
          this.ir = PropertyFactory.getProp(elem, data.ir, 0, 0, this);
          this.is = PropertyFactory.getProp(elem, data.is, 0, 0.01, this);
          this.convertToPath = this.convertStarToPath;
        } else {
          this.convertToPath = this.convertPolygonToPath;
        }

        this.pt = PropertyFactory.getProp(elem, data.pt, 0, 0, this);
        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
        this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this);
        this.or = PropertyFactory.getProp(elem, data.or, 0, 0, this);
        this.os = PropertyFactory.getProp(elem, data.os, 0, 0.01, this);
        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
        this.localShapeCollection.addShape(this.v);
        this.paths = this.localShapeCollection;

        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.k = false;
          this.convertToPath();
        }
      }

      StarShapePropertyFactory.prototype = {
        reset: resetShape,
        getValue: function getValue() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }

          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();

          if (this._mdf) {
            this.convertToPath();
          }
        },
        convertStarToPath: function convertStarToPath() {
          var numPts = Math.floor(this.pt.v) * 2;
          var angle = Math.PI * 2 / numPts;
          /* this.v.v.length = numPts;
                  this.v.i.length = numPts;
                  this.v.o.length = numPts; */

          var longFlag = true;
          var longRad = this.or.v;
          var shortRad = this.ir.v;
          var longRound = this.os.v;
          var shortRound = this.is.v;
          var longPerimSegment = 2 * Math.PI * longRad / (numPts * 2);
          var shortPerimSegment = 2 * Math.PI * shortRad / (numPts * 2);
          var i;
          var rad;
          var roundness;
          var perimSegment;
          var currentAng = -Math.PI / 2;
          currentAng += this.r.v;
          var dir = this.data.d === 3 ? -1 : 1;
          this.v._length = 0;

          for (i = 0; i < numPts; i += 1) {
            rad = longFlag ? longRad : shortRad;
            roundness = longFlag ? longRound : shortRound;
            perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
            var x = rad * Math.cos(currentAng);
            var y = rad * Math.sin(currentAng);
            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
            x += +this.p.v[0];
            y += +this.p.v[1];
            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
            /* this.v.v[i] = [x,y];
                      this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                      this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                      this.v._length = numPts; */

            longFlag = !longFlag;
            currentAng += angle * dir;
          }
        },
        convertPolygonToPath: function convertPolygonToPath() {
          var numPts = Math.floor(this.pt.v);
          var angle = Math.PI * 2 / numPts;
          var rad = this.or.v;
          var roundness = this.os.v;
          var perimSegment = 2 * Math.PI * rad / (numPts * 4);
          var i;
          var currentAng = -Math.PI * 0.5;
          var dir = this.data.d === 3 ? -1 : 1;
          currentAng += this.r.v;
          this.v._length = 0;

          for (i = 0; i < numPts; i += 1) {
            var x = rad * Math.cos(currentAng);
            var y = rad * Math.sin(currentAng);
            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
            x += +this.p.v[0];
            y += +this.p.v[1];
            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
            currentAng += angle * dir;
          }

          this.paths.length = 0;
          this.paths[0] = this.v;
        }
      };
      extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);
      return StarShapePropertyFactory;
    }();

    var RectShapeProperty = function () {
      function RectShapePropertyFactory(elem, data) {
        this.v = shapePool.newElement();
        this.v.c = true;
        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
        this.localShapeCollection.addShape(this.v);
        this.paths = this.localShapeCollection;
        this.elem = elem;
        this.comp = elem.comp;
        this.frameId = -1;
        this.d = data.d;
        this.initDynamicPropertyContainer(elem);
        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
        this.r = PropertyFactory.getProp(elem, data.r, 0, 0, this);

        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.k = false;
          this.convertRectToPath();
        }
      }

      RectShapePropertyFactory.prototype = {
        convertRectToPath: function convertRectToPath() {
          var p0 = this.p.v[0];
          var p1 = this.p.v[1];
          var v0 = this.s.v[0] / 2;
          var v1 = this.s.v[1] / 2;
          var round = bmMin(v0, v1, this.r.v);
          var cPoint = round * (1 - roundCorner);
          this.v._length = 0;

          if (this.d === 2 || this.d === 1) {
            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);

            if (round !== 0) {
              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
            } else {
              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
            }
          } else {
            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);

            if (round !== 0) {
              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
              this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
            } else {
              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
              this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
            }
          }
        },
        getValue: function getValue() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }

          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();

          if (this._mdf) {
            this.convertRectToPath();
          }
        },
        reset: resetShape
      };
      extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);
      return RectShapePropertyFactory;
    }();

    function getShapeProp(elem, data, type) {
      var prop;

      if (type === 3 || type === 4) {
        var dataProp = type === 3 ? data.pt : data.ks;
        var keys = dataProp.k;

        if (keys.length) {
          prop = new KeyframedShapeProperty(elem, data, type);
        } else {
          prop = new ShapeProperty(elem, data, type);
        }
      } else if (type === 5) {
        prop = new RectShapeProperty(elem, data);
      } else if (type === 6) {
        prop = new EllShapeProperty(elem, data);
      } else if (type === 7) {
        prop = new StarShapeProperty(elem, data);
      }

      if (prop.k) {
        elem.addDynamicProperty(prop);
      }

      return prop;
    }

    function getConstructorFunction() {
      return ShapeProperty;
    }

    function getKeyframedConstructorFunction() {
      return KeyframedShapeProperty;
    }

    var ob = {};
    ob.getShapeProp = getShapeProp;
    ob.getConstructorFunction = getConstructorFunction;
    ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
    return ob;
  }();

  /*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   */

  /**
   * 2D transformation matrix object initialized with identity matrix.
   *
   * The matrix can synchronize a canvas context by supplying the context
   * as an argument, or later apply current absolute transform to an
   * existing context.
   *
   * All values are handled as floating point values.
   *
   * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
   * @prop {number} a - scale x
   * @prop {number} b - shear y
   * @prop {number} c - shear x
   * @prop {number} d - scale y
   * @prop {number} e - translate x
   * @prop {number} f - translate y
   * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
   * @constructor
   */

  var Matrix = function () {
    var _cos = Math.cos;
    var _sin = Math.sin;
    var _tan = Math.tan;
    var _rnd = Math.round;

    function reset() {
      this.props[0] = 1;
      this.props[1] = 0;
      this.props[2] = 0;
      this.props[3] = 0;
      this.props[4] = 0;
      this.props[5] = 1;
      this.props[6] = 0;
      this.props[7] = 0;
      this.props[8] = 0;
      this.props[9] = 0;
      this.props[10] = 1;
      this.props[11] = 0;
      this.props[12] = 0;
      this.props[13] = 0;
      this.props[14] = 0;
      this.props[15] = 1;
      return this;
    }

    function rotate(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function rotateX(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
    }

    function rotateY(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
    }

    function rotateZ(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function shear(sx, sy) {
      return this._t(1, sy, sx, 1, 0, 0);
    }

    function skew(ax, ay) {
      return this.shear(_tan(ax), _tan(ay));
    }

    function skewFromAxis(ax, angle) {
      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); // return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
    }

    function scale(sx, sy, sz) {
      if (!sz && sz !== 0) {
        sz = 1;
      }

      if (sx === 1 && sy === 1 && sz === 1) {
        return this;
      }

      return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
    }

    function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
      this.props[0] = a;
      this.props[1] = b;
      this.props[2] = c;
      this.props[3] = d;
      this.props[4] = e;
      this.props[5] = f;
      this.props[6] = g;
      this.props[7] = h;
      this.props[8] = i;
      this.props[9] = j;
      this.props[10] = k;
      this.props[11] = l;
      this.props[12] = m;
      this.props[13] = n;
      this.props[14] = o;
      this.props[15] = p;
      return this;
    }

    function translate(tx, ty, tz) {
      tz = tz || 0;

      if (tx !== 0 || ty !== 0 || tz !== 0) {
        return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
      }

      return this;
    }

    function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
      var _p = this.props;

      if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
        // NOTE: commenting this condition because TurboFan deoptimizes code when present
        // if(m2 !== 0 || n2 !== 0 || o2 !== 0){
        _p[12] = _p[12] * a2 + _p[15] * m2;
        _p[13] = _p[13] * f2 + _p[15] * n2;
        _p[14] = _p[14] * k2 + _p[15] * o2;
        _p[15] *= p2; // }

        this._identityCalculated = false;
        return this;
      }

      var a1 = _p[0];
      var b1 = _p[1];
      var c1 = _p[2];
      var d1 = _p[3];
      var e1 = _p[4];
      var f1 = _p[5];
      var g1 = _p[6];
      var h1 = _p[7];
      var i1 = _p[8];
      var j1 = _p[9];
      var k1 = _p[10];
      var l1 = _p[11];
      var m1 = _p[12];
      var n1 = _p[13];
      var o1 = _p[14];
      var p1 = _p[15];
      /* matrix order (canvas compatible):
           * ace
           * bdf
           * 001
           */

      _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
      _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
      _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
      _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;
      _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
      _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
      _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
      _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;
      _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
      _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
      _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
      _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;
      _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
      _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
      _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
      _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;
      this._identityCalculated = false;
      return this;
    }

    function multiply(matrix) {
      var matrixProps = matrix.props;
      return this.transform(matrixProps[0], matrixProps[1], matrixProps[2], matrixProps[3], matrixProps[4], matrixProps[5], matrixProps[6], matrixProps[7], matrixProps[8], matrixProps[9], matrixProps[10], matrixProps[11], matrixProps[12], matrixProps[13], matrixProps[14], matrixProps[15]);
    }

    function isIdentity() {
      if (!this._identityCalculated) {
        this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
        this._identityCalculated = true;
      }

      return this._identity;
    }

    function equals(matr) {
      var i = 0;

      while (i < 16) {
        if (matr.props[i] !== this.props[i]) {
          return false;
        }

        i += 1;
      }

      return true;
    }

    function clone(matr) {
      var i;

      for (i = 0; i < 16; i += 1) {
        matr.props[i] = this.props[i];
      }

      return matr;
    }

    function cloneFromProps(props) {
      var i;

      for (i = 0; i < 16; i += 1) {
        this.props[i] = props[i];
      }
    }

    function applyToPoint(x, y, z) {
      return {
        x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
        y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
        z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
      };
      /* return {
           x: x * me.a + y * me.c + me.e,
           y: x * me.b + y * me.d + me.f
           }; */
    }

    function applyToX(x, y, z) {
      return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
    }

    function applyToY(x, y, z) {
      return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
    }

    function applyToZ(x, y, z) {
      return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
    }

    function getInverseMatrix() {
      var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
      var a = this.props[5] / determinant;
      var b = -this.props[1] / determinant;
      var c = -this.props[4] / determinant;
      var d = this.props[0] / determinant;
      var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
      var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
      var inverseMatrix = new Matrix();
      inverseMatrix.props[0] = a;
      inverseMatrix.props[1] = b;
      inverseMatrix.props[4] = c;
      inverseMatrix.props[5] = d;
      inverseMatrix.props[12] = e;
      inverseMatrix.props[13] = f;
      return inverseMatrix;
    }

    function inversePoint(pt) {
      var inverseMatrix = this.getInverseMatrix();
      return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
    }

    function inversePoints(pts) {
      var i;
      var len = pts.length;
      var retPts = [];

      for (i = 0; i < len; i += 1) {
        retPts[i] = inversePoint(pts[i]);
      }

      return retPts;
    }

    function applyToTriplePoints(pt1, pt2, pt3) {
      var arr = createTypedArray('float32', 6);

      if (this.isIdentity()) {
        arr[0] = pt1[0];
        arr[1] = pt1[1];
        arr[2] = pt2[0];
        arr[3] = pt2[1];
        arr[4] = pt3[0];
        arr[5] = pt3[1];
      } else {
        var p0 = this.props[0];
        var p1 = this.props[1];
        var p4 = this.props[4];
        var p5 = this.props[5];
        var p12 = this.props[12];
        var p13 = this.props[13];
        arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
        arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
        arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
        arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
        arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
        arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
      }

      return arr;
    }

    function applyToPointArray(x, y, z) {
      var arr;

      if (this.isIdentity()) {
        arr = [x, y, z];
      } else {
        arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
      }

      return arr;
    }

    function applyToPointStringified(x, y) {
      if (this.isIdentity()) {
        return x + ',' + y;
      }

      var _p = this.props;
      return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + ',' + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
    }

    function toCSS() {
      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.

      /* if(this.isIdentity()) {
              return '';
          } */
      var i = 0;
      var props = this.props;
      var cssValue = 'matrix3d(';
      var v = 10000;

      while (i < 16) {
        cssValue += _rnd(props[i] * v) / v;
        cssValue += i === 15 ? ')' : ',';
        i += 1;
      }

      return cssValue;
    }

    function roundMatrixProperty(val) {
      var v = 10000;

      if (val < 0.000001 && val > 0 || val > -0.000001 && val < 0) {
        return _rnd(val * v) / v;
      }

      return val;
    }

    function to2dCSS() {
      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.

      /* if(this.isIdentity()) {
              return '';
          } */
      var props = this.props;

      var _a = roundMatrixProperty(props[0]);

      var _b = roundMatrixProperty(props[1]);

      var _c = roundMatrixProperty(props[4]);

      var _d = roundMatrixProperty(props[5]);

      var _e = roundMatrixProperty(props[12]);

      var _f = roundMatrixProperty(props[13]);

      return 'matrix(' + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ')';
    }

    return function () {
      this.reset = reset;
      this.rotate = rotate;
      this.rotateX = rotateX;
      this.rotateY = rotateY;
      this.rotateZ = rotateZ;
      this.skew = skew;
      this.skewFromAxis = skewFromAxis;
      this.shear = shear;
      this.scale = scale;
      this.setTransform = setTransform;
      this.translate = translate;
      this.transform = transform;
      this.multiply = multiply;
      this.applyToPoint = applyToPoint;
      this.applyToX = applyToX;
      this.applyToY = applyToY;
      this.applyToZ = applyToZ;
      this.applyToPointArray = applyToPointArray;
      this.applyToTriplePoints = applyToTriplePoints;
      this.applyToPointStringified = applyToPointStringified;
      this.toCSS = toCSS;
      this.to2dCSS = to2dCSS;
      this.clone = clone;
      this.cloneFromProps = cloneFromProps;
      this.equals = equals;
      this.inversePoints = inversePoints;
      this.inversePoint = inversePoint;
      this.getInverseMatrix = getInverseMatrix;
      this._t = this.transform;
      this.isIdentity = isIdentity;
      this._identity = true;
      this._identityCalculated = false;
      this.props = createTypedArray('float32', 16);
      this.reset();
    };
  }();

  function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }
  var lottie = {};
  var standalone = '__[STANDALONE]__';
  var animationData = '__[ANIMATIONDATA]__';
  var renderer = '';

  function setLocation(href) {
    setLocationHref(href);
  }

  function searchAnimations() {
    if (standalone === true) {
      animationManager.searchAnimations(animationData, standalone, renderer);
    } else {
      animationManager.searchAnimations();
    }
  }

  function setSubframeRendering(flag) {
    setSubframeEnabled(flag);
  }

  function setPrefix(prefix) {
    setIdPrefix(prefix);
  }

  function loadAnimation(params) {
    if (standalone === true) {
      params.animationData = JSON.parse(animationData);
    }

    return animationManager.loadAnimation(params);
  }

  function setQuality(value) {
    if (typeof value === 'string') {
      switch (value) {
        case 'high':
          setDefaultCurveSegments(200);
          break;

        default:
        case 'medium':
          setDefaultCurveSegments(50);
          break;

        case 'low':
          setDefaultCurveSegments(10);
          break;
      }
    } else if (!isNaN(value) && value > 1) {
      setDefaultCurveSegments(value);
    }

    if (getDefaultCurveSegments() >= 50) {
      roundValues(false);
    } else {
      roundValues(true);
    }
  }

  function inBrowser() {
    return typeof navigator !== 'undefined';
  }

  function installPlugin(type, plugin) {
    if (type === 'expressions') {
      setExpressionsPlugin(plugin);
    }
  }

  function getFactory(name) {
    switch (name) {
      case 'propertyFactory':
        return PropertyFactory;

      case 'shapePropertyFactory':
        return ShapePropertyFactory;

      case 'matrix':
        return Matrix;

      default:
        return null;
    }
  }

  lottie.play = animationManager.play;
  lottie.pause = animationManager.pause;
  lottie.setLocationHref = setLocation;
  lottie.togglePause = animationManager.togglePause;
  lottie.setSpeed = animationManager.setSpeed;
  lottie.setDirection = animationManager.setDirection;
  lottie.stop = animationManager.stop;
  lottie.searchAnimations = searchAnimations;
  lottie.registerAnimation = animationManager.registerAnimation;
  lottie.loadAnimation = loadAnimation;
  lottie.setSubframeRendering = setSubframeRendering;
  lottie.resize = animationManager.resize; // lottie.start = start;

  lottie.goToAndStop = animationManager.goToAndStop;
  lottie.destroy = animationManager.destroy;
  lottie.setQuality = setQuality;
  lottie.inBrowser = inBrowser;
  lottie.installPlugin = installPlugin;
  lottie.freeze = animationManager.freeze;
  lottie.unfreeze = animationManager.unfreeze;
  lottie.setVolume = animationManager.setVolume;
  lottie.mute = animationManager.mute;
  lottie.unmute = animationManager.unmute;
  lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
  lottie.useWebWorker = setWebWorker;
  lottie.setIDPrefix = setPrefix;
  lottie.__getFactory = getFactory;
  lottie.version = '5.12.2';

  function checkReady() {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      searchAnimations();
    }
  }

  function getQueryVariable(variable) {
    var vars = queryString.split('&');

    for (var i = 0; i < vars.length; i += 1) {
      var pair = vars[i].split('=');

      if (decodeURIComponent(pair[0]) == variable) {
        // eslint-disable-line eqeqeq
        return decodeURIComponent(pair[1]);
      }
    }

    return null;
  }

  var queryString = '';

  if (standalone) {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index] || {
      src: ''
    };
    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, '') : ''; // eslint-disable-line no-useless-escape

    renderer = getQueryVariable('renderer');
  }

  var readyStateCheckInterval = setInterval(checkReady, 100); // this adds bodymovin to the window object for backwards compatibility

  try {
    if (!(( false ? 0 : _typeof$3(exports)) === 'object' && "object" !== 'undefined') && !( true && __webpack_require__.amdO) // eslint-disable-line no-undef
    ) {}
  } catch (err) {//
  }

  var ShapeModifiers = function () {
    var ob = {};
    var modifiers = {};
    ob.registerModifier = registerModifier;
    ob.getModifier = getModifier;

    function registerModifier(nm, factory) {
      if (!modifiers[nm]) {
        modifiers[nm] = factory;
      }
    }

    function getModifier(nm, elem, data) {
      return new modifiers[nm](elem, data);
    }

    return ob;
  }();

  function ShapeModifier() {}

  ShapeModifier.prototype.initModifierProperties = function () {};

  ShapeModifier.prototype.addShapeToModifier = function () {};

  ShapeModifier.prototype.addShape = function (data) {
    if (!this.closed) {
      // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
      data.sh.container.addDynamicProperty(data.sh);
      var shapeData = {
        shape: data.sh,
        data: data,
        localShapeCollection: shapeCollectionPool.newShapeCollection()
      };
      this.shapes.push(shapeData);
      this.addShapeToModifier(shapeData);

      if (this._isAnimated) {
        data.setAsAnimated();
      }
    }
  };

  ShapeModifier.prototype.init = function (elem, data) {
    this.shapes = [];
    this.elem = elem;
    this.initDynamicPropertyContainer(elem);
    this.initModifierProperties(elem, data);
    this.frameId = initialDefaultFrame;
    this.closed = false;
    this.k = false;

    if (this.dynamicProperties.length) {
      this.k = true;
    } else {
      this.getValue(true);
    }
  };

  ShapeModifier.prototype.processKeys = function () {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    }

    this.frameId = this.elem.globalData.frameId;
    this.iterateDynamicProperties();
  };

  extendPrototype([DynamicPropertyContainer], ShapeModifier);

  function TrimModifier() {}

  extendPrototype([ShapeModifier], TrimModifier);

  TrimModifier.prototype.initModifierProperties = function (elem, data) {
    this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
    this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
    this.sValue = 0;
    this.eValue = 0;
    this.getValue = this.processKeys;
    this.m = data.m;
    this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
  };

  TrimModifier.prototype.addShapeToModifier = function (shapeData) {
    shapeData.pathsData = [];
  };

  TrimModifier.prototype.calculateShapeEdges = function (s, e, shapeLength, addedLength, totalModifierLength) {
    var segments = [];

    if (e <= 1) {
      segments.push({
        s: s,
        e: e
      });
    } else if (s >= 1) {
      segments.push({
        s: s - 1,
        e: e - 1
      });
    } else {
      segments.push({
        s: s,
        e: 1
      });
      segments.push({
        s: 0,
        e: e - 1
      });
    }

    var shapeSegments = [];
    var i;
    var len = segments.length;
    var segmentOb;

    for (i = 0; i < len; i += 1) {
      segmentOb = segments[i];

      if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
        var shapeS;
        var shapeE;

        if (segmentOb.s * totalModifierLength <= addedLength) {
          shapeS = 0;
        } else {
          shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
        }

        if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
          shapeE = 1;
        } else {
          shapeE = (segmentOb.e * totalModifierLength - addedLength) / shapeLength;
        }

        shapeSegments.push([shapeS, shapeE]);
      }
    }

    if (!shapeSegments.length) {
      shapeSegments.push([0, 0]);
    }

    return shapeSegments;
  };

  TrimModifier.prototype.releasePathsData = function (pathsData) {
    var i;
    var len = pathsData.length;

    for (i = 0; i < len; i += 1) {
      segmentsLengthPool.release(pathsData[i]);
    }

    pathsData.length = 0;
    return pathsData;
  };

  TrimModifier.prototype.processShapes = function (_isFirstFrame) {
    var s;
    var e;

    if (this._mdf || _isFirstFrame) {
      var o = this.o.v % 360 / 360;

      if (o < 0) {
        o += 1;
      }

      if (this.s.v > 1) {
        s = 1 + o;
      } else if (this.s.v < 0) {
        s = 0 + o;
      } else {
        s = this.s.v + o;
      }

      if (this.e.v > 1) {
        e = 1 + o;
      } else if (this.e.v < 0) {
        e = 0 + o;
      } else {
        e = this.e.v + o;
      }

      if (s > e) {
        var _s = s;
        s = e;
        e = _s;
      }

      s = Math.round(s * 10000) * 0.0001;
      e = Math.round(e * 10000) * 0.0001;
      this.sValue = s;
      this.eValue = e;
    } else {
      s = this.sValue;
      e = this.eValue;
    }

    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var pathsData;
    var pathData;
    var totalShapeLength;
    var totalModifierLength = 0;

    if (e === s) {
      for (i = 0; i < len; i += 1) {
        this.shapes[i].localShapeCollection.releaseShapes();
        this.shapes[i].shape._mdf = true;
        this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;

        if (this._mdf) {
          this.shapes[i].pathsData.length = 0;
        }
      }
    } else if (!(e === 1 && s === 0 || e === 0 && s === 1)) {
      var segments = [];
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i]; // if shape hasn't changed and trim properties haven't changed, cached previous path can be used

        if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
          shapeData.shape.paths = shapeData.localShapeCollection;
        } else {
          shapePaths = shapeData.shape.paths;
          jLen = shapePaths._length;
          totalShapeLength = 0;

          if (!shapeData.shape._mdf && shapeData.pathsData.length) {
            totalShapeLength = shapeData.totalShapeLength;
          } else {
            pathsData = this.releasePathsData(shapeData.pathsData);

            for (j = 0; j < jLen; j += 1) {
              pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
              pathsData.push(pathData);
              totalShapeLength += pathData.totalLength;
            }

            shapeData.totalShapeLength = totalShapeLength;
            shapeData.pathsData = pathsData;
          }

          totalModifierLength += totalShapeLength;
          shapeData.shape._mdf = true;
        }
      }

      var shapeS = s;
      var shapeE = e;
      var addedLength = 0;
      var edges;

      for (i = len - 1; i >= 0; i -= 1) {
        shapeData = this.shapes[i];

        if (shapeData.shape._mdf) {
          localShapeCollection = shapeData.localShapeCollection;
          localShapeCollection.releaseShapes(); // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group

          if (this.m === 2 && len > 1) {
            edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
            addedLength += shapeData.totalShapeLength;
          } else {
            edges = [[shapeS, shapeE]];
          }

          jLen = edges.length;

          for (j = 0; j < jLen; j += 1) {
            shapeS = edges[j][0];
            shapeE = edges[j][1];
            segments.length = 0;

            if (shapeE <= 1) {
              segments.push({
                s: shapeData.totalShapeLength * shapeS,
                e: shapeData.totalShapeLength * shapeE
              });
            } else if (shapeS >= 1) {
              segments.push({
                s: shapeData.totalShapeLength * (shapeS - 1),
                e: shapeData.totalShapeLength * (shapeE - 1)
              });
            } else {
              segments.push({
                s: shapeData.totalShapeLength * shapeS,
                e: shapeData.totalShapeLength
              });
              segments.push({
                s: 0,
                e: shapeData.totalShapeLength * (shapeE - 1)
              });
            }

            var newShapesData = this.addShapes(shapeData, segments[0]);

            if (segments[0].s !== segments[0].e) {
              if (segments.length > 1) {
                var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];

                if (lastShapeInCollection.c) {
                  var lastShape = newShapesData.pop();
                  this.addPaths(newShapesData, localShapeCollection);
                  newShapesData = this.addShapes(shapeData, segments[1], lastShape);
                } else {
                  this.addPaths(newShapesData, localShapeCollection);
                  newShapesData = this.addShapes(shapeData, segments[1]);
                }
              }

              this.addPaths(newShapesData, localShapeCollection);
            }
          }

          shapeData.shape.paths = localShapeCollection;
        }
      }
    } else if (this._mdf) {
      for (i = 0; i < len; i += 1) {
        // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
        // Don't remove this even if it's losing cached info.
        this.shapes[i].pathsData.length = 0;
        this.shapes[i].shape._mdf = true;
      }
    }
  };

  TrimModifier.prototype.addPaths = function (newPaths, localShapeCollection) {
    var i;
    var len = newPaths.length;

    for (i = 0; i < len; i += 1) {
      localShapeCollection.addShape(newPaths[i]);
    }
  };

  TrimModifier.prototype.addSegment = function (pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
    shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
    shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);

    if (newShape) {
      shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
    }

    shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
  };

  TrimModifier.prototype.addSegmentFromArray = function (points, shapePath, pos, newShape) {
    shapePath.setXYAt(points[1], points[5], 'o', pos);
    shapePath.setXYAt(points[2], points[6], 'i', pos + 1);

    if (newShape) {
      shapePath.setXYAt(points[0], points[4], 'v', pos);
    }

    shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
  };

  TrimModifier.prototype.addShapes = function (shapeData, shapeSegment, shapePath) {
    var pathsData = shapeData.pathsData;
    var shapePaths = shapeData.shape.paths.shapes;
    var i;
    var len = shapeData.shape.paths._length;
    var j;
    var jLen;
    var addedLength = 0;
    var currentLengthData;
    var segmentCount;
    var lengths;
    var segment;
    var shapes = [];
    var initPos;
    var newShape = true;

    if (!shapePath) {
      shapePath = shapePool.newElement();
      segmentCount = 0;
      initPos = 0;
    } else {
      segmentCount = shapePath._length;
      initPos = shapePath._length;
    }

    shapes.push(shapePath);

    for (i = 0; i < len; i += 1) {
      lengths = pathsData[i].lengths;
      shapePath.c = shapePaths[i].c;
      jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;

      for (j = 1; j < jLen; j += 1) {
        currentLengthData = lengths[j - 1];

        if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
          addedLength += currentLengthData.addedLength;
          shapePath.c = false;
        } else if (addedLength > shapeSegment.e) {
          shapePath.c = false;
          break;
        } else {
          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
            newShape = false;
          } else {
            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);

            newShape = false;
            shapePath.c = false;
          }

          addedLength += currentLengthData.addedLength;
          segmentCount += 1;
        }
      }

      if (shapePaths[i].c && lengths.length) {
        currentLengthData = lengths[j - 1];

        if (addedLength <= shapeSegment.e) {
          var segmentLength = lengths[j - 1].addedLength;

          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
            newShape = false;
          } else {
            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);

            newShape = false;
            shapePath.c = false;
          }
        } else {
          shapePath.c = false;
        }

        addedLength += currentLengthData.addedLength;
        segmentCount += 1;
      }

      if (shapePath._length) {
        shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
        shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1);
      }

      if (addedLength > shapeSegment.e) {
        break;
      }

      if (i < len - 1) {
        shapePath = shapePool.newElement();
        newShape = true;
        shapes.push(shapePath);
        segmentCount = 0;
      }
    }

    return shapes;
  };

  function PuckerAndBloatModifier() {}

  extendPrototype([ShapeModifier], PuckerAndBloatModifier);

  PuckerAndBloatModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
    this._isAnimated = !!this.amount.effectsSequence.length;
  };

  PuckerAndBloatModifier.prototype.processPath = function (path, amount) {
    var percent = amount / 100;
    var centerPoint = [0, 0];
    var pathLength = path._length;
    var i = 0;

    for (i = 0; i < pathLength; i += 1) {
      centerPoint[0] += path.v[i][0];
      centerPoint[1] += path.v[i][1];
    }

    centerPoint[0] /= pathLength;
    centerPoint[1] /= pathLength;
    var clonedPath = shapePool.newElement();
    clonedPath.c = path.c;
    var vX;
    var vY;
    var oX;
    var oY;
    var iX;
    var iY;

    for (i = 0; i < pathLength; i += 1) {
      vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
      vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
      oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
      oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
      iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
      iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
      clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
    }

    return clonedPath;
  };

  PuckerAndBloatModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var amount = this.amount.v;

    if (amount !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  var TransformPropertyFactory = function () {
    var defaultVector = [0, 0];

    function applyToMatrix(mat) {
      var _mdf = this._mdf;
      this.iterateDynamicProperties();
      this._mdf = this._mdf || _mdf;

      if (this.a) {
        mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      }

      if (this.s) {
        mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      }

      if (this.sk) {
        mat.skewFromAxis(-this.sk.v, this.sa.v);
      }

      if (this.r) {
        mat.rotate(-this.r.v);
      } else {
        mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
      }

      if (this.data.p.s) {
        if (this.data.p.z) {
          mat.translate(this.px.v, this.py.v, -this.pz.v);
        } else {
          mat.translate(this.px.v, this.py.v, 0);
        }
      } else {
        mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
    }

    function processKeys(forceRender) {
      if (this.elem.globalData.frameId === this.frameId) {
        return;
      }

      if (this._isDirty) {
        this.precalculateMatrix();
        this._isDirty = false;
      }

      this.iterateDynamicProperties();

      if (this._mdf || forceRender) {
        var frameRate;
        this.v.cloneFromProps(this.pre.props);

        if (this.appliedTransformations < 1) {
          this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
        }

        if (this.appliedTransformations < 2) {
          this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
        }

        if (this.sk && this.appliedTransformations < 3) {
          this.v.skewFromAxis(-this.sk.v, this.sa.v);
        }

        if (this.r && this.appliedTransformations < 4) {
          this.v.rotate(-this.r.v);
        } else if (!this.r && this.appliedTransformations < 4) {
          this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
        }

        if (this.autoOriented) {
          var v1;
          var v2;
          frameRate = this.elem.globalData.frameRate;

          if (this.p && this.p.keyframes && this.p.getValueAtTime) {
            if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
              v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
              v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
            } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
              v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / frameRate, 0);
              v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
            } else {
              v1 = this.p.pv;
              v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
            }
          } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
            v1 = [];
            v2 = [];
            var px = this.px;
            var py = this.py;

            if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
              v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
              v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
              v2[0] = px.getValueAtTime(px.keyframes[0].t / frameRate, 0);
              v2[1] = py.getValueAtTime(py.keyframes[0].t / frameRate, 0);
            } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
              v1[0] = px.getValueAtTime(px.keyframes[px.keyframes.length - 1].t / frameRate, 0);
              v1[1] = py.getValueAtTime(py.keyframes[py.keyframes.length - 1].t / frameRate, 0);
              v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
              v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
            } else {
              v1 = [px.pv, py.pv];
              v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
              v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
            }
          } else {
            v2 = defaultVector;
            v1 = v2;
          }

          this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
        }

        if (this.data.p && this.data.p.s) {
          if (this.data.p.z) {
            this.v.translate(this.px.v, this.py.v, -this.pz.v);
          } else {
            this.v.translate(this.px.v, this.py.v, 0);
          }
        } else {
          this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
        }
      }

      this.frameId = this.elem.globalData.frameId;
    }

    function precalculateMatrix() {
      this.appliedTransformations = 0;
      this.pre.reset();

      if (!this.a.effectsSequence.length) {
        this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
        this.appliedTransformations = 1;
      } else {
        return;
      }

      if (!this.s.effectsSequence.length) {
        this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
        this.appliedTransformations = 2;
      } else {
        return;
      }

      if (this.sk) {
        if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
          this.pre.skewFromAxis(-this.sk.v, this.sa.v);
          this.appliedTransformations = 3;
        } else {
          return;
        }
      }

      if (this.r) {
        if (!this.r.effectsSequence.length) {
          this.pre.rotate(-this.r.v);
          this.appliedTransformations = 4;
        }
      } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
        this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
        this.appliedTransformations = 4;
      }
    }

    function autoOrient() {//
      // var prevP = this.getValueAtTime();
    }

    function addDynamicProperty(prop) {
      this._addDynamicProperty(prop);

      this.elem.addDynamicProperty(prop);
      this._isDirty = true;
    }

    function TransformProperty(elem, data, container) {
      this.elem = elem;
      this.frameId = -1;
      this.propType = 'transform';
      this.data = data;
      this.v = new Matrix(); // Precalculated matrix with non animated properties

      this.pre = new Matrix();
      this.appliedTransformations = 0;
      this.initDynamicPropertyContainer(container || elem);

      if (data.p && data.p.s) {
        this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
        this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);

        if (data.p.z) {
          this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this);
        }
      } else {
        this.p = PropertyFactory.getProp(elem, data.p || {
          k: [0, 0, 0]
        }, 1, 0, this);
      }

      if (data.rx) {
        this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
        this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
        this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);

        if (data.or.k[0].ti) {
          var i;
          var len = data.or.k.length;

          for (i = 0; i < len; i += 1) {
            data.or.k[i].to = null;
            data.or.k[i].ti = null;
          }
        }

        this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this); // sh Indicates it needs to be capped between -180 and 180

        this.or.sh = true;
      } else {
        this.r = PropertyFactory.getProp(elem, data.r || {
          k: 0
        }, 0, degToRads, this);
      }

      if (data.sk) {
        this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
        this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
      }

      this.a = PropertyFactory.getProp(elem, data.a || {
        k: [0, 0, 0]
      }, 1, 0, this);
      this.s = PropertyFactory.getProp(elem, data.s || {
        k: [100, 100, 100]
      }, 1, 0.01, this); // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.

      if (data.o) {
        this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem);
      } else {
        this.o = {
          _mdf: false,
          v: 1
        };
      }

      this._isDirty = true;

      if (!this.dynamicProperties.length) {
        this.getValue(true);
      }
    }

    TransformProperty.prototype = {
      applyToMatrix: applyToMatrix,
      getValue: processKeys,
      precalculateMatrix: precalculateMatrix,
      autoOrient: autoOrient
    };
    extendPrototype([DynamicPropertyContainer], TransformProperty);
    TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
    TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

    function getTransformProperty(elem, data, container) {
      return new TransformProperty(elem, data, container);
    }

    return {
      getTransformProperty: getTransformProperty
    };
  }();

  function RepeaterModifier() {}

  extendPrototype([ShapeModifier], RepeaterModifier);

  RepeaterModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.c = PropertyFactory.getProp(elem, data.c, 0, null, this);
    this.o = PropertyFactory.getProp(elem, data.o, 0, null, this);
    this.tr = TransformPropertyFactory.getTransformProperty(elem, data.tr, this);
    this.so = PropertyFactory.getProp(elem, data.tr.so, 0, 0.01, this);
    this.eo = PropertyFactory.getProp(elem, data.tr.eo, 0, 0.01, this);
    this.data = data;

    if (!this.dynamicProperties.length) {
      this.getValue(true);
    }

    this._isAnimated = !!this.dynamicProperties.length;
    this.pMatrix = new Matrix();
    this.rMatrix = new Matrix();
    this.sMatrix = new Matrix();
    this.tMatrix = new Matrix();
    this.matrix = new Matrix();
  };

  RepeaterModifier.prototype.applyTransforms = function (pMatrix, rMatrix, sMatrix, transform, perc, inv) {
    var dir = inv ? -1 : 1;
    var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
    var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
    pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
    rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    rMatrix.rotate(-transform.r.v * dir * perc);
    rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
    sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
    sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
  };

  RepeaterModifier.prototype.init = function (elem, arr, pos, elemsData) {
    this.elem = elem;
    this.arr = arr;
    this.pos = pos;
    this.elemsData = elemsData;
    this._currentCopies = 0;
    this._elements = [];
    this._groups = [];
    this.frameId = -1;
    this.initDynamicPropertyContainer(elem);
    this.initModifierProperties(elem, arr[pos]);

    while (pos > 0) {
      pos -= 1; // this._elements.unshift(arr.splice(pos,1)[0]);

      this._elements.unshift(arr[pos]);
    }

    if (this.dynamicProperties.length) {
      this.k = true;
    } else {
      this.getValue(true);
    }
  };

  RepeaterModifier.prototype.resetElements = function (elements) {
    var i;
    var len = elements.length;

    for (i = 0; i < len; i += 1) {
      elements[i]._processed = false;

      if (elements[i].ty === 'gr') {
        this.resetElements(elements[i].it);
      }
    }
  };

  RepeaterModifier.prototype.cloneElements = function (elements) {
    var newElements = JSON.parse(JSON.stringify(elements));
    this.resetElements(newElements);
    return newElements;
  };

  RepeaterModifier.prototype.changeGroupRender = function (elements, renderFlag) {
    var i;
    var len = elements.length;

    for (i = 0; i < len; i += 1) {
      elements[i]._render = renderFlag;

      if (elements[i].ty === 'gr') {
        this.changeGroupRender(elements[i].it, renderFlag);
      }
    }
  };

  RepeaterModifier.prototype.processShapes = function (_isFirstFrame) {
    var items;
    var itemsTransform;
    var i;
    var dir;
    var cont;
    var hasReloaded = false;

    if (this._mdf || _isFirstFrame) {
      var copies = Math.ceil(this.c.v);

      if (this._groups.length < copies) {
        while (this._groups.length < copies) {
          var group = {
            it: this.cloneElements(this._elements),
            ty: 'gr'
          };
          group.it.push({
            a: {
              a: 0,
              ix: 1,
              k: [0, 0]
            },
            nm: 'Transform',
            o: {
              a: 0,
              ix: 7,
              k: 100
            },
            p: {
              a: 0,
              ix: 2,
              k: [0, 0]
            },
            r: {
              a: 1,
              ix: 6,
              k: [{
                s: 0,
                e: 0,
                t: 0
              }, {
                s: 0,
                e: 0,
                t: 1
              }]
            },
            s: {
              a: 0,
              ix: 3,
              k: [100, 100]
            },
            sa: {
              a: 0,
              ix: 5,
              k: 0
            },
            sk: {
              a: 0,
              ix: 4,
              k: 0
            },
            ty: 'tr'
          });
          this.arr.splice(0, 0, group);

          this._groups.splice(0, 0, group);

          this._currentCopies += 1;
        }

        this.elem.reloadShapes();
        hasReloaded = true;
      }

      cont = 0;
      var renderFlag;

      for (i = 0; i <= this._groups.length - 1; i += 1) {
        renderFlag = cont < copies;
        this._groups[i]._render = renderFlag;
        this.changeGroupRender(this._groups[i].it, renderFlag);

        if (!renderFlag) {
          var elems = this.elemsData[i].it;
          var transformData = elems[elems.length - 1];

          if (transformData.transform.op.v !== 0) {
            transformData.transform.op._mdf = true;
            transformData.transform.op.v = 0;
          } else {
            transformData.transform.op._mdf = false;
          }
        }

        cont += 1;
      }

      this._currentCopies = copies; /// /

      var offset = this.o.v;
      var offsetModulo = offset % 1;
      var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
      var pProps = this.pMatrix.props;
      var rProps = this.rMatrix.props;
      var sProps = this.sMatrix.props;
      this.pMatrix.reset();
      this.rMatrix.reset();
      this.sMatrix.reset();
      this.tMatrix.reset();
      this.matrix.reset();
      var iteration = 0;

      if (offset > 0) {
        while (iteration < roundOffset) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
          iteration += 1;
        }

        if (offsetModulo) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
          iteration += offsetModulo;
        }
      } else if (offset < 0) {
        while (iteration > roundOffset) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
          iteration -= 1;
        }

        if (offsetModulo) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
          iteration -= offsetModulo;
        }
      }

      i = this.data.m === 1 ? 0 : this._currentCopies - 1;
      dir = this.data.m === 1 ? 1 : -1;
      cont = this._currentCopies;
      var j;
      var jLen;

      while (cont) {
        items = this.elemsData[i].it;
        itemsTransform = items[items.length - 1].transform.mProps.v.props;
        jLen = itemsTransform.length;
        items[items.length - 1].transform.mProps._mdf = true;
        items[items.length - 1].transform.op._mdf = true;
        items[items.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));

        if (iteration !== 0) {
          if (i !== 0 && dir === 1 || i !== this._currentCopies - 1 && dir === -1) {
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
          }

          this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
          this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
          this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);

          for (j = 0; j < jLen; j += 1) {
            itemsTransform[j] = this.matrix.props[j];
          }

          this.matrix.reset();
        } else {
          this.matrix.reset();

          for (j = 0; j < jLen; j += 1) {
            itemsTransform[j] = this.matrix.props[j];
          }
        }

        iteration += 1;
        cont -= 1;
        i += dir;
      }
    } else {
      cont = this._currentCopies;
      i = 0;
      dir = 1;

      while (cont) {
        items = this.elemsData[i].it;
        itemsTransform = items[items.length - 1].transform.mProps.v.props;
        items[items.length - 1].transform.mProps._mdf = false;
        items[items.length - 1].transform.op._mdf = false;
        cont -= 1;
        i += dir;
      }
    }

    return hasReloaded;
  };

  RepeaterModifier.prototype.addShape = function () {};

  function RoundCornersModifier() {}

  extendPrototype([ShapeModifier], RoundCornersModifier);

  RoundCornersModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
    this._isAnimated = !!this.rd.effectsSequence.length;
  };

  RoundCornersModifier.prototype.processPath = function (path, round) {
    var clonedPath = shapePool.newElement();
    clonedPath.c = path.c;
    var i;
    var len = path._length;
    var currentV;
    var currentI;
    var currentO;
    var closerV;
    var distance;
    var newPosPerc;
    var index = 0;
    var vX;
    var vY;
    var oX;
    var oY;
    var iX;
    var iY;

    for (i = 0; i < len; i += 1) {
      currentV = path.v[i];
      currentO = path.o[i];
      currentI = path.i[i];

      if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
        if ((i === 0 || i === len - 1) && !path.c) {
          clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index);
          /* clonedPath.v[index] = currentV;
                  clonedPath.o[index] = currentO;
                  clonedPath.i[index] = currentI; */

          index += 1;
        } else {
          if (i === 0) {
            closerV = path.v[len - 1];
          } else {
            closerV = path.v[i - 1];
          }

          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
          iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
          vX = iX;
          iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
          vY = iY;
          oX = vX - (vX - currentV[0]) * roundCorner;
          oY = vY - (vY - currentV[1]) * roundCorner;
          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
          index += 1;

          if (i === len - 1) {
            closerV = path.v[0];
          } else {
            closerV = path.v[i + 1];
          }

          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
          oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
          vX = oX;
          oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
          vY = oY;
          iX = vX - (vX - currentV[0]) * roundCorner;
          iY = vY - (vY - currentV[1]) * roundCorner;
          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
          index += 1;
        }
      } else {
        clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index);
        index += 1;
      }
    }

    return clonedPath;
  };

  RoundCornersModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var rd = this.rd.v;

    if (rd !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  function floatEqual(a, b) {
    return Math.abs(a - b) * 100000 <= Math.min(Math.abs(a), Math.abs(b));
  }

  function floatZero(f) {
    return Math.abs(f) <= 0.00001;
  }

  function lerp(p0, p1, amount) {
    return p0 * (1 - amount) + p1 * amount;
  }

  function lerpPoint(p0, p1, amount) {
    return [lerp(p0[0], p1[0], amount), lerp(p0[1], p1[1], amount)];
  }

  function quadRoots(a, b, c) {
    // no root
    if (a === 0) return [];
    var s = b * b - 4 * a * c; // Complex roots

    if (s < 0) return [];
    var singleRoot = -b / (2 * a); // 1 root

    if (s === 0) return [singleRoot];
    var delta = Math.sqrt(s) / (2 * a); // 2 roots

    return [singleRoot - delta, singleRoot + delta];
  }

  function polynomialCoefficients(p0, p1, p2, p3) {
    return [-p0 + 3 * p1 - 3 * p2 + p3, 3 * p0 - 6 * p1 + 3 * p2, -3 * p0 + 3 * p1, p0];
  }

  function singlePoint(p) {
    return new PolynomialBezier(p, p, p, p, false);
  }

  function PolynomialBezier(p0, p1, p2, p3, linearize) {
    if (linearize && pointEqual(p0, p1)) {
      p1 = lerpPoint(p0, p3, 1 / 3);
    }

    if (linearize && pointEqual(p2, p3)) {
      p2 = lerpPoint(p0, p3, 2 / 3);
    }

    var coeffx = polynomialCoefficients(p0[0], p1[0], p2[0], p3[0]);
    var coeffy = polynomialCoefficients(p0[1], p1[1], p2[1], p3[1]);
    this.a = [coeffx[0], coeffy[0]];
    this.b = [coeffx[1], coeffy[1]];
    this.c = [coeffx[2], coeffy[2]];
    this.d = [coeffx[3], coeffy[3]];
    this.points = [p0, p1, p2, p3];
  }

  PolynomialBezier.prototype.point = function (t) {
    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
  };

  PolynomialBezier.prototype.derivative = function (t) {
    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
  };

  PolynomialBezier.prototype.tangentAngle = function (t) {
    var p = this.derivative(t);
    return Math.atan2(p[1], p[0]);
  };

  PolynomialBezier.prototype.normalAngle = function (t) {
    var p = this.derivative(t);
    return Math.atan2(p[0], p[1]);
  };

  PolynomialBezier.prototype.inflectionPoints = function () {
    var denom = this.a[1] * this.b[0] - this.a[0] * this.b[1];
    if (floatZero(denom)) return [];
    var tcusp = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / denom;
    var square = tcusp * tcusp - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / denom;
    if (square < 0) return [];
    var root = Math.sqrt(square);

    if (floatZero(root)) {
      if (root > 0 && root < 1) return [tcusp];
      return [];
    }

    return [tcusp - root, tcusp + root].filter(function (r) {
      return r > 0 && r < 1;
    });
  };

  PolynomialBezier.prototype.split = function (t) {
    if (t <= 0) return [singlePoint(this.points[0]), this];
    if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
    var p10 = lerpPoint(this.points[0], this.points[1], t);
    var p11 = lerpPoint(this.points[1], this.points[2], t);
    var p12 = lerpPoint(this.points[2], this.points[3], t);
    var p20 = lerpPoint(p10, p11, t);
    var p21 = lerpPoint(p11, p12, t);
    var p3 = lerpPoint(p20, p21, t);
    return [new PolynomialBezier(this.points[0], p10, p20, p3, true), new PolynomialBezier(p3, p21, p12, this.points[3], true)];
  };

  function extrema(bez, comp) {
    var min = bez.points[0][comp];
    var max = bez.points[bez.points.length - 1][comp];

    if (min > max) {
      var e = max;
      max = min;
      min = e;
    } // Derivative roots to find min/max


    var f = quadRoots(3 * bez.a[comp], 2 * bez.b[comp], bez.c[comp]);

    for (var i = 0; i < f.length; i += 1) {
      if (f[i] > 0 && f[i] < 1) {
        var val = bez.point(f[i])[comp];
        if (val < min) min = val;else if (val > max) max = val;
      }
    }

    return {
      min: min,
      max: max
    };
  }

  PolynomialBezier.prototype.bounds = function () {
    return {
      x: extrema(this, 0),
      y: extrema(this, 1)
    };
  };

  PolynomialBezier.prototype.boundingBox = function () {
    var bounds = this.bounds();
    return {
      left: bounds.x.min,
      right: bounds.x.max,
      top: bounds.y.min,
      bottom: bounds.y.max,
      width: bounds.x.max - bounds.x.min,
      height: bounds.y.max - bounds.y.min,
      cx: (bounds.x.max + bounds.x.min) / 2,
      cy: (bounds.y.max + bounds.y.min) / 2
    };
  };

  function intersectData(bez, t1, t2) {
    var box = bez.boundingBox();
    return {
      cx: box.cx,
      cy: box.cy,
      width: box.width,
      height: box.height,
      bez: bez,
      t: (t1 + t2) / 2,
      t1: t1,
      t2: t2
    };
  }

  function splitData(data) {
    var split = data.bez.split(0.5);
    return [intersectData(split[0], data.t1, data.t), intersectData(split[1], data.t, data.t2)];
  }

  function boxIntersect(b1, b2) {
    return Math.abs(b1.cx - b2.cx) * 2 < b1.width + b2.width && Math.abs(b1.cy - b2.cy) * 2 < b1.height + b2.height;
  }

  function intersectsImpl(d1, d2, depth, tolerance, intersections, maxRecursion) {
    if (!boxIntersect(d1, d2)) return;

    if (depth >= maxRecursion || d1.width <= tolerance && d1.height <= tolerance && d2.width <= tolerance && d2.height <= tolerance) {
      intersections.push([d1.t, d2.t]);
      return;
    }

    var d1s = splitData(d1);
    var d2s = splitData(d2);
    intersectsImpl(d1s[0], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
    intersectsImpl(d1s[0], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
    intersectsImpl(d1s[1], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
    intersectsImpl(d1s[1], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
  }

  PolynomialBezier.prototype.intersections = function (other, tolerance, maxRecursion) {
    if (tolerance === undefined) tolerance = 2;
    if (maxRecursion === undefined) maxRecursion = 7;
    var intersections = [];
    intersectsImpl(intersectData(this, 0, 1), intersectData(other, 0, 1), 0, tolerance, intersections, maxRecursion);
    return intersections;
  };

  PolynomialBezier.shapeSegment = function (shapePath, index) {
    var nextIndex = (index + 1) % shapePath.length();
    return new PolynomialBezier(shapePath.v[index], shapePath.o[index], shapePath.i[nextIndex], shapePath.v[nextIndex], true);
  };

  PolynomialBezier.shapeSegmentInverted = function (shapePath, index) {
    var nextIndex = (index + 1) % shapePath.length();
    return new PolynomialBezier(shapePath.v[nextIndex], shapePath.i[nextIndex], shapePath.o[index], shapePath.v[index], true);
  };

  function crossProduct(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  function lineIntersection(start1, end1, start2, end2) {
    var v1 = [start1[0], start1[1], 1];
    var v2 = [end1[0], end1[1], 1];
    var v3 = [start2[0], start2[1], 1];
    var v4 = [end2[0], end2[1], 1];
    var r = crossProduct(crossProduct(v1, v2), crossProduct(v3, v4));
    if (floatZero(r[2])) return null;
    return [r[0] / r[2], r[1] / r[2]];
  }

  function polarOffset(p, angle, length) {
    return [p[0] + Math.cos(angle) * length, p[1] - Math.sin(angle) * length];
  }

  function pointDistance(p1, p2) {
    return Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
  }

  function pointEqual(p1, p2) {
    return floatEqual(p1[0], p2[0]) && floatEqual(p1[1], p2[1]);
  }

  function ZigZagModifier() {}

  extendPrototype([ShapeModifier], ZigZagModifier);

  ZigZagModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.amplitude = PropertyFactory.getProp(elem, data.s, 0, null, this);
    this.frequency = PropertyFactory.getProp(elem, data.r, 0, null, this);
    this.pointsType = PropertyFactory.getProp(elem, data.pt, 0, null, this);
    this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
  };

  function setPoint(outputBezier, point, angle, direction, amplitude, outAmplitude, inAmplitude) {
    var angO = angle - Math.PI / 2;
    var angI = angle + Math.PI / 2;
    var px = point[0] + Math.cos(angle) * direction * amplitude;
    var py = point[1] - Math.sin(angle) * direction * amplitude;
    outputBezier.setTripleAt(px, py, px + Math.cos(angO) * outAmplitude, py - Math.sin(angO) * outAmplitude, px + Math.cos(angI) * inAmplitude, py - Math.sin(angI) * inAmplitude, outputBezier.length());
  }

  function getPerpendicularVector(pt1, pt2) {
    var vector = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
    var rot = -Math.PI * 0.5;
    var rotatedVector = [Math.cos(rot) * vector[0] - Math.sin(rot) * vector[1], Math.sin(rot) * vector[0] + Math.cos(rot) * vector[1]];
    return rotatedVector;
  }

  function getProjectingAngle(path, cur) {
    var prevIndex = cur === 0 ? path.length() - 1 : cur - 1;
    var nextIndex = (cur + 1) % path.length();
    var prevPoint = path.v[prevIndex];
    var nextPoint = path.v[nextIndex];
    var pVector = getPerpendicularVector(prevPoint, nextPoint);
    return Math.atan2(0, 1) - Math.atan2(pVector[1], pVector[0]);
  }

  function zigZagCorner(outputBezier, path, cur, amplitude, frequency, pointType, direction) {
    var angle = getProjectingAngle(path, cur);
    var point = path.v[cur % path._length];
    var prevPoint = path.v[cur === 0 ? path._length - 1 : cur - 1];
    var nextPoint = path.v[(cur + 1) % path._length];
    var prevDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - prevPoint[0], 2) + Math.pow(point[1] - prevPoint[1], 2)) : 0;
    var nextDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - nextPoint[0], 2) + Math.pow(point[1] - nextPoint[1], 2)) : 0;
    setPoint(outputBezier, path.v[cur % path._length], angle, direction, amplitude, nextDist / ((frequency + 1) * 2), prevDist / ((frequency + 1) * 2), pointType);
  }

  function zigZagSegment(outputBezier, segment, amplitude, frequency, pointType, direction) {
    for (var i = 0; i < frequency; i += 1) {
      var t = (i + 1) / (frequency + 1);
      var dist = pointType === 2 ? Math.sqrt(Math.pow(segment.points[3][0] - segment.points[0][0], 2) + Math.pow(segment.points[3][1] - segment.points[0][1], 2)) : 0;
      var angle = segment.normalAngle(t);
      var point = segment.point(t);
      setPoint(outputBezier, point, angle, direction, amplitude, dist / ((frequency + 1) * 2), dist / ((frequency + 1) * 2), pointType);
      direction = -direction;
    }

    return direction;
  }

  ZigZagModifier.prototype.processPath = function (path, amplitude, frequency, pointType) {
    var count = path._length;
    var clonedPath = shapePool.newElement();
    clonedPath.c = path.c;

    if (!path.c) {
      count -= 1;
    }

    if (count === 0) return clonedPath;
    var direction = -1;
    var segment = PolynomialBezier.shapeSegment(path, 0);
    zigZagCorner(clonedPath, path, 0, amplitude, frequency, pointType, direction);

    for (var i = 0; i < count; i += 1) {
      direction = zigZagSegment(clonedPath, segment, amplitude, frequency, pointType, -direction);

      if (i === count - 1 && !path.c) {
        segment = null;
      } else {
        segment = PolynomialBezier.shapeSegment(path, (i + 1) % count);
      }

      zigZagCorner(clonedPath, path, i + 1, amplitude, frequency, pointType, direction);
    }

    return clonedPath;
  };

  ZigZagModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var amplitude = this.amplitude.v;
    var frequency = Math.max(0, Math.round(this.frequency.v));
    var pointType = this.pointsType.v;

    if (amplitude !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], amplitude, frequency, pointType));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  function linearOffset(p1, p2, amount) {
    var angle = Math.atan2(p2[0] - p1[0], p2[1] - p1[1]);
    return [polarOffset(p1, angle, amount), polarOffset(p2, angle, amount)];
  }

  function offsetSegment(segment, amount) {
    var p0;
    var p1a;
    var p1b;
    var p2b;
    var p2a;
    var p3;
    var e;
    e = linearOffset(segment.points[0], segment.points[1], amount);
    p0 = e[0];
    p1a = e[1];
    e = linearOffset(segment.points[1], segment.points[2], amount);
    p1b = e[0];
    p2b = e[1];
    e = linearOffset(segment.points[2], segment.points[3], amount);
    p2a = e[0];
    p3 = e[1];
    var p1 = lineIntersection(p0, p1a, p1b, p2b);
    if (p1 === null) p1 = p1a;
    var p2 = lineIntersection(p2a, p3, p1b, p2b);
    if (p2 === null) p2 = p2a;
    return new PolynomialBezier(p0, p1, p2, p3);
  }

  function joinLines(outputBezier, seg1, seg2, lineJoin, miterLimit) {
    var p0 = seg1.points[3];
    var p1 = seg2.points[0]; // Bevel

    if (lineJoin === 3) return p0; // Connected, they don't need a joint

    if (pointEqual(p0, p1)) return p0; // Round

    if (lineJoin === 2) {
      var angleOut = -seg1.tangentAngle(1);
      var angleIn = -seg2.tangentAngle(0) + Math.PI;
      var center = lineIntersection(p0, polarOffset(p0, angleOut + Math.PI / 2, 100), p1, polarOffset(p1, angleOut + Math.PI / 2, 100));
      var radius = center ? pointDistance(center, p0) : pointDistance(p0, p1) / 2;
      var tan = polarOffset(p0, angleOut, 2 * radius * roundCorner);
      outputBezier.setXYAt(tan[0], tan[1], 'o', outputBezier.length() - 1);
      tan = polarOffset(p1, angleIn, 2 * radius * roundCorner);
      outputBezier.setTripleAt(p1[0], p1[1], p1[0], p1[1], tan[0], tan[1], outputBezier.length());
      return p1;
    } // Miter


    var t0 = pointEqual(p0, seg1.points[2]) ? seg1.points[0] : seg1.points[2];
    var t1 = pointEqual(p1, seg2.points[1]) ? seg2.points[3] : seg2.points[1];
    var intersection = lineIntersection(t0, p0, p1, t1);

    if (intersection && pointDistance(intersection, p0) < miterLimit) {
      outputBezier.setTripleAt(intersection[0], intersection[1], intersection[0], intersection[1], intersection[0], intersection[1], outputBezier.length());
      return intersection;
    }

    return p0;
  }

  function getIntersection(a, b) {
    var intersect = a.intersections(b);
    if (intersect.length && floatEqual(intersect[0][0], 1)) intersect.shift();
    if (intersect.length) return intersect[0];
    return null;
  }

  function pruneSegmentIntersection(a, b) {
    var outa = a.slice();
    var outb = b.slice();
    var intersect = getIntersection(a[a.length - 1], b[0]);

    if (intersect) {
      outa[a.length - 1] = a[a.length - 1].split(intersect[0])[0];
      outb[0] = b[0].split(intersect[1])[1];
    }

    if (a.length > 1 && b.length > 1) {
      intersect = getIntersection(a[0], b[b.length - 1]);

      if (intersect) {
        return [[a[0].split(intersect[0])[0]], [b[b.length - 1].split(intersect[1])[1]]];
      }
    }

    return [outa, outb];
  }

  function pruneIntersections(segments) {
    var e;

    for (var i = 1; i < segments.length; i += 1) {
      e = pruneSegmentIntersection(segments[i - 1], segments[i]);
      segments[i - 1] = e[0];
      segments[i] = e[1];
    }

    if (segments.length > 1) {
      e = pruneSegmentIntersection(segments[segments.length - 1], segments[0]);
      segments[segments.length - 1] = e[0];
      segments[0] = e[1];
    }

    return segments;
  }

  function offsetSegmentSplit(segment, amount) {
    /*
      We split each bezier segment into smaller pieces based
      on inflection points, this ensures the control point
      polygon is convex.
        (A cubic bezier can have none, one, or two inflection points)
    */
    var flex = segment.inflectionPoints();
    var left;
    var right;
    var split;
    var mid;

    if (flex.length === 0) {
      return [offsetSegment(segment, amount)];
    }

    if (flex.length === 1 || floatEqual(flex[1], 1)) {
      split = segment.split(flex[0]);
      left = split[0];
      right = split[1];
      return [offsetSegment(left, amount), offsetSegment(right, amount)];
    }

    split = segment.split(flex[0]);
    left = split[0];
    var t = (flex[1] - flex[0]) / (1 - flex[0]);
    split = split[1].split(t);
    mid = split[0];
    right = split[1];
    return [offsetSegment(left, amount), offsetSegment(mid, amount), offsetSegment(right, amount)];
  }

  function OffsetPathModifier() {}

  extendPrototype([ShapeModifier], OffsetPathModifier);

  OffsetPathModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
    this.miterLimit = PropertyFactory.getProp(elem, data.ml, 0, null, this);
    this.lineJoin = data.lj;
    this._isAnimated = this.amount.effectsSequence.length !== 0;
  };

  OffsetPathModifier.prototype.processPath = function (inputBezier, amount, lineJoin, miterLimit) {
    var outputBezier = shapePool.newElement();
    outputBezier.c = inputBezier.c;
    var count = inputBezier.length();

    if (!inputBezier.c) {
      count -= 1;
    }

    var i;
    var j;
    var segment;
    var multiSegments = [];

    for (i = 0; i < count; i += 1) {
      segment = PolynomialBezier.shapeSegment(inputBezier, i);
      multiSegments.push(offsetSegmentSplit(segment, amount));
    }

    if (!inputBezier.c) {
      for (i = count - 1; i >= 0; i -= 1) {
        segment = PolynomialBezier.shapeSegmentInverted(inputBezier, i);
        multiSegments.push(offsetSegmentSplit(segment, amount));
      }
    }

    multiSegments = pruneIntersections(multiSegments); // Add bezier segments to the output and apply line joints

    var lastPoint = null;
    var lastSeg = null;

    for (i = 0; i < multiSegments.length; i += 1) {
      var multiSegment = multiSegments[i];
      if (lastSeg) lastPoint = joinLines(outputBezier, lastSeg, multiSegment[0], lineJoin, miterLimit);
      lastSeg = multiSegment[multiSegment.length - 1];

      for (j = 0; j < multiSegment.length; j += 1) {
        segment = multiSegment[j];

        if (lastPoint && pointEqual(segment.points[0], lastPoint)) {
          outputBezier.setXYAt(segment.points[1][0], segment.points[1][1], 'o', outputBezier.length() - 1);
        } else {
          outputBezier.setTripleAt(segment.points[0][0], segment.points[0][1], segment.points[1][0], segment.points[1][1], segment.points[0][0], segment.points[0][1], outputBezier.length());
        }

        outputBezier.setTripleAt(segment.points[3][0], segment.points[3][1], segment.points[3][0], segment.points[3][1], segment.points[2][0], segment.points[2][1], outputBezier.length());
        lastPoint = segment.points[3];
      }
    }

    if (multiSegments.length) joinLines(outputBezier, lastSeg, multiSegments[0][0], lineJoin, miterLimit);
    return outputBezier;
  };

  OffsetPathModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var amount = this.amount.v;
    var miterLimit = this.miterLimit.v;
    var lineJoin = this.lineJoin;

    if (amount !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], amount, lineJoin, miterLimit));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  function getFontProperties(fontData) {
    var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];
    var fWeight = 'normal';
    var fStyle = 'normal';
    var len = styles.length;
    var styleName;

    for (var i = 0; i < len; i += 1) {
      styleName = styles[i].toLowerCase();

      switch (styleName) {
        case 'italic':
          fStyle = 'italic';
          break;

        case 'bold':
          fWeight = '700';
          break;

        case 'black':
          fWeight = '900';
          break;

        case 'medium':
          fWeight = '500';
          break;

        case 'regular':
        case 'normal':
          fWeight = '400';
          break;

        case 'light':
        case 'thin':
          fWeight = '200';
          break;

        default:
          break;
      }
    }

    return {
      style: fStyle,
      weight: fontData.fWeight || fWeight
    };
  }

  var FontManager = function () {
    var maxWaitingTime = 5000;
    var emptyChar = {
      w: 0,
      size: 0,
      shapes: [],
      data: {
        shapes: []
      }
    };
    var combinedCharacters = []; // Hindi characters

    combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
    var BLACK_FLAG_CODE_POINT = 127988;
    var CANCEL_TAG_CODE_POINT = 917631;
    var A_TAG_CODE_POINT = 917601;
    var Z_TAG_CODE_POINT = 917626;
    var VARIATION_SELECTOR_16_CODE_POINT = 65039;
    var ZERO_WIDTH_JOINER_CODE_POINT = 8205;
    var REGIONAL_CHARACTER_A_CODE_POINT = 127462;
    var REGIONAL_CHARACTER_Z_CODE_POINT = 127487;
    var surrogateModifiers = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'];

    function trimFontOptions(font) {
      var familyArray = font.split(',');
      var i;
      var len = familyArray.length;
      var enabledFamilies = [];

      for (i = 0; i < len; i += 1) {
        if (familyArray[i] !== 'sans-serif' && familyArray[i] !== 'monospace') {
          enabledFamilies.push(familyArray[i]);
        }
      }

      return enabledFamilies.join(',');
    }

    function setUpNode(font, family) {
      var parentNode = createTag('span'); // Node is invisible to screen readers.

      parentNode.setAttribute('aria-hidden', true);
      parentNode.style.fontFamily = family;
      var node = createTag('span'); // Characters that vary significantly among different fonts

      node.innerText = 'giItT1WQy@!-/#'; // Visible - so we can measure it - but not on the screen

      parentNode.style.position = 'absolute';
      parentNode.style.left = '-10000px';
      parentNode.style.top = '-10000px'; // Large font size makes even subtle changes obvious

      parentNode.style.fontSize = '300px'; // Reset any font properties

      parentNode.style.fontVariant = 'normal';
      parentNode.style.fontStyle = 'normal';
      parentNode.style.fontWeight = 'normal';
      parentNode.style.letterSpacing = '0';
      parentNode.appendChild(node);
      document.body.appendChild(parentNode); // Remember width with no applied web font

      var width = node.offsetWidth;
      node.style.fontFamily = trimFontOptions(font) + ', ' + family;
      return {
        node: node,
        w: width,
        parent: parentNode
      };
    }

    function checkLoadedFonts() {
      var i;
      var len = this.fonts.length;
      var node;
      var w;
      var loadedCount = len;

      for (i = 0; i < len; i += 1) {
        if (this.fonts[i].loaded) {
          loadedCount -= 1;
        } else if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) {
          this.fonts[i].loaded = true;
        } else {
          node = this.fonts[i].monoCase.node;
          w = this.fonts[i].monoCase.w;

          if (node.offsetWidth !== w) {
            loadedCount -= 1;
            this.fonts[i].loaded = true;
          } else {
            node = this.fonts[i].sansCase.node;
            w = this.fonts[i].sansCase.w;

            if (node.offsetWidth !== w) {
              loadedCount -= 1;
              this.fonts[i].loaded = true;
            }
          }

          if (this.fonts[i].loaded) {
            this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
            this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
          }
        }
      }

      if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
        setTimeout(this.checkLoadedFontsBinded, 20);
      } else {
        setTimeout(this.setIsLoadedBinded, 10);
      }
    }

    function createHelper(fontData, def) {
      var engine = document.body && def ? 'svg' : 'canvas';
      var helper;
      var fontProps = getFontProperties(fontData);

      if (engine === 'svg') {
        var tHelper = createNS('text');
        tHelper.style.fontSize = '100px'; // tHelper.style.fontFamily = fontData.fFamily;

        tHelper.setAttribute('font-family', fontData.fFamily);
        tHelper.setAttribute('font-style', fontProps.style);
        tHelper.setAttribute('font-weight', fontProps.weight);
        tHelper.textContent = '1';

        if (fontData.fClass) {
          tHelper.style.fontFamily = 'inherit';
          tHelper.setAttribute('class', fontData.fClass);
        } else {
          tHelper.style.fontFamily = fontData.fFamily;
        }

        def.appendChild(tHelper);
        helper = tHelper;
      } else {
        var tCanvasHelper = new OffscreenCanvas(500, 500).getContext('2d');
        tCanvasHelper.font = fontProps.style + ' ' + fontProps.weight + ' 100px ' + fontData.fFamily;
        helper = tCanvasHelper;
      }

      function measure(text) {
        if (engine === 'svg') {
          helper.textContent = text;
          return helper.getComputedTextLength();
        }

        return helper.measureText(text).width;
      }

      return {
        measureText: measure
      };
    }

    function addFonts(fontData, defs) {
      if (!fontData) {
        this.isLoaded = true;
        return;
      }

      if (this.chars) {
        this.isLoaded = true;
        this.fonts = fontData.list;
        return;
      }

      if (!document.body) {
        this.isLoaded = true;
        fontData.list.forEach(function (data) {
          data.helper = createHelper(data);
          data.cache = {};
        });
        this.fonts = fontData.list;
        return;
      }

      var fontArr = fontData.list;
      var i;
      var len = fontArr.length;
      var _pendingFonts = len;

      for (i = 0; i < len; i += 1) {
        var shouldLoadFont = true;
        var loadedSelector;
        var j;
        fontArr[i].loaded = false;
        fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
        fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');

        if (!fontArr[i].fPath) {
          fontArr[i].loaded = true;
          _pendingFonts -= 1;
        } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
          loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');

          if (loadedSelector.length > 0) {
            shouldLoadFont = false;
          }

          if (shouldLoadFont) {
            var s = createTag('style');
            s.setAttribute('f-forigin', fontArr[i].fOrigin);
            s.setAttribute('f-origin', fontArr[i].origin);
            s.setAttribute('f-family', fontArr[i].fFamily);
            s.type = 'text/css';
            s.innerText = '@font-face {font-family: ' + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
            defs.appendChild(s);
          }
        } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
          loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');

          for (j = 0; j < loadedSelector.length; j += 1) {
            if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
              // Font is already loaded
              shouldLoadFont = false;
            }
          }

          if (shouldLoadFont) {
            var l = createTag('link');
            l.setAttribute('f-forigin', fontArr[i].fOrigin);
            l.setAttribute('f-origin', fontArr[i].origin);
            l.type = 'text/css';
            l.rel = 'stylesheet';
            l.href = fontArr[i].fPath;
            document.body.appendChild(l);
          }
        } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
          loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');

          for (j = 0; j < loadedSelector.length; j += 1) {
            if (fontArr[i].fPath === loadedSelector[j].src) {
              // Font is already loaded
              shouldLoadFont = false;
            }
          }

          if (shouldLoadFont) {
            var sc = createTag('link');
            sc.setAttribute('f-forigin', fontArr[i].fOrigin);
            sc.setAttribute('f-origin', fontArr[i].origin);
            sc.setAttribute('rel', 'stylesheet');
            sc.setAttribute('href', fontArr[i].fPath);
            defs.appendChild(sc);
          }
        }

        fontArr[i].helper = createHelper(fontArr[i], defs);
        fontArr[i].cache = {};
        this.fonts.push(fontArr[i]);
      }

      if (_pendingFonts === 0) {
        this.isLoaded = true;
      } else {
        // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
        // Adding this timeout seems to fix it
        setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
    }

    function addChars(chars) {
      if (!chars) {
        return;
      }

      if (!this.chars) {
        this.chars = [];
      }

      var i;
      var len = chars.length;
      var j;
      var jLen = this.chars.length;
      var found;

      for (i = 0; i < len; i += 1) {
        j = 0;
        found = false;

        while (j < jLen) {
          if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
            found = true;
          }

          j += 1;
        }

        if (!found) {
          this.chars.push(chars[i]);
          jLen += 1;
        }
      }
    }

    function getCharData(_char, style, font) {
      var i = 0;
      var len = this.chars.length;

      while (i < len) {
        if (this.chars[i].ch === _char && this.chars[i].style === style && this.chars[i].fFamily === font) {
          return this.chars[i];
        }

        i += 1;
      }

      if ((typeof _char === 'string' && _char.charCodeAt(0) !== 13 || !_char) && console && console.warn // eslint-disable-line no-console
      && !this._warned) {
        this._warned = true;
        console.warn('Missing character from exported characters list: ', _char, style, font); // eslint-disable-line no-console
      }

      return emptyChar;
    }

    function measureText(_char2, fontName, size) {
      var fontData = this.getFontByName(fontName); // Using the char instead of char.charCodeAt(0)
      // to avoid collisions between equal chars

      var index = _char2;

      if (!fontData.cache[index]) {
        var tHelper = fontData.helper;

        if (_char2 === ' ') {
          var doubleSize = tHelper.measureText('|' + _char2 + '|');
          var singleSize = tHelper.measureText('||');
          fontData.cache[index] = (doubleSize - singleSize) / 100;
        } else {
          fontData.cache[index] = tHelper.measureText(_char2) / 100;
        }
      }

      return fontData.cache[index] * size;
    }

    function getFontByName(name) {
      var i = 0;
      var len = this.fonts.length;

      while (i < len) {
        if (this.fonts[i].fName === name) {
          return this.fonts[i];
        }

        i += 1;
      }

      return this.fonts[0];
    }

    function getCodePoint(string) {
      var codePoint = 0;
      var first = string.charCodeAt(0);

      if (first >= 0xD800 && first <= 0xDBFF) {
        var second = string.charCodeAt(1);

        if (second >= 0xDC00 && second <= 0xDFFF) {
          codePoint = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }

      return codePoint;
    } // Skin tone modifiers


    function isModifier(firstCharCode, secondCharCode) {
      var sum = firstCharCode.toString(16) + secondCharCode.toString(16);
      return surrogateModifiers.indexOf(sum) !== -1;
    }

    function isZeroWidthJoiner(charCode) {
      return charCode === ZERO_WIDTH_JOINER_CODE_POINT;
    } // This codepoint may change the appearance of the preceding character.
    // If that is a symbol, dingbat or emoji, U+FE0F forces it to be rendered
    // as a colorful image as compared to a monochrome text variant.


    function isVariationSelector(charCode) {
      return charCode === VARIATION_SELECTOR_16_CODE_POINT;
    } // The regional indicator symbols are a set of 26 alphabetic Unicode
    /// characters (A–Z) intended to be used to encode ISO 3166-1 alpha-2
    // two-letter country codes in a way that allows optional special treatment.


    function isRegionalCode(string) {
      var codePoint = getCodePoint(string);

      if (codePoint >= REGIONAL_CHARACTER_A_CODE_POINT && codePoint <= REGIONAL_CHARACTER_Z_CODE_POINT) {
        return true;
      }

      return false;
    } // Some Emoji implementations represent combinations of
    // two “regional indicator” letters as a single flag symbol.


    function isFlagEmoji(string) {
      return isRegionalCode(string.substr(0, 2)) && isRegionalCode(string.substr(2, 2));
    }

    function isCombinedCharacter(_char3) {
      return combinedCharacters.indexOf(_char3) !== -1;
    } // Regional flags start with a BLACK_FLAG_CODE_POINT
    // folowed by 5 chars in the TAG range
    // and end with a CANCEL_TAG_CODE_POINT


    function isRegionalFlag(text, index) {
      var codePoint = getCodePoint(text.substr(index, 2));

      if (codePoint !== BLACK_FLAG_CODE_POINT) {
        return false;
      }

      var count = 0;
      index += 2;

      while (count < 5) {
        codePoint = getCodePoint(text.substr(index, 2));

        if (codePoint < A_TAG_CODE_POINT || codePoint > Z_TAG_CODE_POINT) {
          return false;
        }

        count += 1;
        index += 2;
      }

      return getCodePoint(text.substr(index, 2)) === CANCEL_TAG_CODE_POINT;
    }

    function setIsLoaded() {
      this.isLoaded = true;
    }

    var Font = function Font() {
      this.fonts = [];
      this.chars = null;
      this.typekitLoaded = 0;
      this.isLoaded = false;
      this._warned = false;
      this.initTime = Date.now();
      this.setIsLoadedBinded = this.setIsLoaded.bind(this);
      this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
    };

    Font.isModifier = isModifier;
    Font.isZeroWidthJoiner = isZeroWidthJoiner;
    Font.isFlagEmoji = isFlagEmoji;
    Font.isRegionalCode = isRegionalCode;
    Font.isCombinedCharacter = isCombinedCharacter;
    Font.isRegionalFlag = isRegionalFlag;
    Font.isVariationSelector = isVariationSelector;
    Font.BLACK_FLAG_CODE_POINT = BLACK_FLAG_CODE_POINT;
    var fontPrototype = {
      addChars: addChars,
      addFonts: addFonts,
      getCharData: getCharData,
      getFontByName: getFontByName,
      measureText: measureText,
      checkLoadedFonts: checkLoadedFonts,
      setIsLoaded: setIsLoaded
    };
    Font.prototype = fontPrototype;
    return Font;
  }();

  function SlotManager(animationData) {
    this.animationData = animationData;
  }

  SlotManager.prototype.getProp = function (data) {
    if (this.animationData.slots && this.animationData.slots[data.sid]) {
      return Object.assign(data, this.animationData.slots[data.sid].p);
    }

    return data;
  };

  function slotFactory(animationData) {
    return new SlotManager(animationData);
  }

  function RenderableElement() {}

  RenderableElement.prototype = {
    initRenderable: function initRenderable() {
      // layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
      this.isInRange = false; // layer's display state

      this.hidden = false; // If layer's transparency equals 0, it can be hidden

      this.isTransparent = false; // list of animated components

      this.renderableComponents = [];
    },
    addRenderableComponent: function addRenderableComponent(component) {
      if (this.renderableComponents.indexOf(component) === -1) {
        this.renderableComponents.push(component);
      }
    },
    removeRenderableComponent: function removeRenderableComponent(component) {
      if (this.renderableComponents.indexOf(component) !== -1) {
        this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
      }
    },
    prepareRenderableFrame: function prepareRenderableFrame(num) {
      this.checkLayerLimits(num);
    },
    checkTransparency: function checkTransparency() {
      if (this.finalTransform.mProp.o.v <= 0) {
        if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
          this.isTransparent = true;
          this.hide();
        }
      } else if (this.isTransparent) {
        this.isTransparent = false;
        this.show();
      }
    },

    /**
       * @function
       * Initializes frame related properties.
       *
       * @param {number} num
       * current frame number in Layer's time
       *
       */
    checkLayerLimits: function checkLayerLimits(num) {
      if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
        if (this.isInRange !== true) {
          this.globalData._mdf = true;
          this._mdf = true;
          this.isInRange = true;
          this.show();
        }
      } else if (this.isInRange !== false) {
        this.globalData._mdf = true;
        this.isInRange = false;
        this.hide();
      }
    },
    renderRenderable: function renderRenderable() {
      var i;
      var len = this.renderableComponents.length;

      for (i = 0; i < len; i += 1) {
        this.renderableComponents[i].renderFrame(this._isFirstFrame);
      }
      /* this.maskManager.renderFrame(this.finalTransform.mat);
          this.renderableEffectsManager.renderFrame(this._isFirstFrame); */

    },
    sourceRectAtTime: function sourceRectAtTime() {
      return {
        top: 0,
        left: 0,
        width: 100,
        height: 100
      };
    },
    getLayerSize: function getLayerSize() {
      if (this.data.ty === 5) {
        return {
          w: this.data.textData.width,
          h: this.data.textData.height
        };
      }

      return {
        w: this.data.width,
        h: this.data.height
      };
    }
  };

  var getBlendMode = function () {
    var blendModeEnums = {
      0: 'source-over',
      1: 'multiply',
      2: 'screen',
      3: 'overlay',
      4: 'darken',
      5: 'lighten',
      6: 'color-dodge',
      7: 'color-burn',
      8: 'hard-light',
      9: 'soft-light',
      10: 'difference',
      11: 'exclusion',
      12: 'hue',
      13: 'saturation',
      14: 'color',
      15: 'luminosity'
    };
    return function (mode) {
      return blendModeEnums[mode] || '';
    };
  }();

  function SliderEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function AngleEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function ColorEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
  }

  function PointEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
  }

  function LayerIndexEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function MaskIndexEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function CheckboxEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function NoValueEffect() {
    this.p = {};
  }

  function EffectsManager(data, element) {
    var effects = data.ef || [];
    this.effectElements = [];
    var i;
    var len = effects.length;
    var effectItem;

    for (i = 0; i < len; i += 1) {
      effectItem = new GroupEffect(effects[i], element);
      this.effectElements.push(effectItem);
    }
  }

  function GroupEffect(data, element) {
    this.init(data, element);
  }

  extendPrototype([DynamicPropertyContainer], GroupEffect);
  GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;

  GroupEffect.prototype.init = function (data, element) {
    this.data = data;
    this.effectElements = [];
    this.initDynamicPropertyContainer(element);
    var i;
    var len = this.data.ef.length;
    var eff;
    var effects = this.data.ef;

    for (i = 0; i < len; i += 1) {
      eff = null;

      switch (effects[i].ty) {
        case 0:
          eff = new SliderEffect(effects[i], element, this);
          break;

        case 1:
          eff = new AngleEffect(effects[i], element, this);
          break;

        case 2:
          eff = new ColorEffect(effects[i], element, this);
          break;

        case 3:
          eff = new PointEffect(effects[i], element, this);
          break;

        case 4:
        case 7:
          eff = new CheckboxEffect(effects[i], element, this);
          break;

        case 10:
          eff = new LayerIndexEffect(effects[i], element, this);
          break;

        case 11:
          eff = new MaskIndexEffect(effects[i], element, this);
          break;

        case 5:
          eff = new EffectsManager(effects[i], element, this);
          break;
        // case 6:

        default:
          eff = new NoValueEffect(effects[i], element, this);
          break;
      }

      if (eff) {
        this.effectElements.push(eff);
      }
    }
  };

  function BaseElement() {}

  BaseElement.prototype = {
    checkMasks: function checkMasks() {
      if (!this.data.hasMask) {
        return false;
      }

      var i = 0;
      var len = this.data.masksProperties.length;

      while (i < len) {
        if (this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false) {
          return true;
        }

        i += 1;
      }

      return false;
    },
    initExpressions: function initExpressions() {
      var expressionsInterfaces = getExpressionInterfaces();

      if (!expressionsInterfaces) {
        return;
      }

      var LayerExpressionInterface = expressionsInterfaces('layer');
      var EffectsExpressionInterface = expressionsInterfaces('effects');
      var ShapeExpressionInterface = expressionsInterfaces('shape');
      var TextExpressionInterface = expressionsInterfaces('text');
      var CompExpressionInterface = expressionsInterfaces('comp');
      this.layerInterface = LayerExpressionInterface(this);

      if (this.data.hasMask && this.maskManager) {
        this.layerInterface.registerMaskInterface(this.maskManager);
      }

      var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
      this.layerInterface.registerEffectsInterface(effectsInterface);

      if (this.data.ty === 0 || this.data.xt) {
        this.compInterface = CompExpressionInterface(this);
      } else if (this.data.ty === 4) {
        this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface);
        this.layerInterface.content = this.layerInterface.shapeInterface;
      } else if (this.data.ty === 5) {
        this.layerInterface.textInterface = TextExpressionInterface(this);
        this.layerInterface.text = this.layerInterface.textInterface;
      }
    },
    setBlendMode: function setBlendMode() {
      var blendModeValue = getBlendMode(this.data.bm);
      var elem = this.baseElement || this.layerElement;
      elem.style['mix-blend-mode'] = blendModeValue;
    },
    initBaseData: function initBaseData(data, globalData, comp) {
      this.globalData = globalData;
      this.comp = comp;
      this.data = data;
      this.layerId = createElementID(); // Stretch factor for old animations missing this property.

      if (!this.data.sr) {
        this.data.sr = 1;
      } // effects manager


      this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    },
    getType: function getType() {
      return this.type;
    },
    sourceRectAtTime: function sourceRectAtTime() {}
  };

  /**
   * @file
   * Handles element's layer frame update.
   * Checks layer in point and out point
   *
   */
  function FrameElement() {}

  FrameElement.prototype = {
    /**
       * @function
       * Initializes frame related properties.
       *
       */
    initFrame: function initFrame() {
      // set to true when inpoint is rendered
      this._isFirstFrame = false; // list of animated properties

      this.dynamicProperties = []; // If layer has been modified in current tick this will be true

      this._mdf = false;
    },

    /**
       * @function
       * Calculates all dynamic values
       *
       * @param {number} num
       * current frame number in Layer's time
       * @param {boolean} isVisible
       * if layers is currently in range
       *
       */
    prepareProperties: function prepareProperties(num, isVisible) {
      var i;
      var len = this.dynamicProperties.length;

      for (i = 0; i < len; i += 1) {
        if (isVisible || this._isParent && this.dynamicProperties[i].propType === 'transform') {
          this.dynamicProperties[i].getValue();

          if (this.dynamicProperties[i]._mdf) {
            this.globalData._mdf = true;
            this._mdf = true;
          }
        }
      }
    },
    addDynamicProperty: function addDynamicProperty(prop) {
      if (this.dynamicProperties.indexOf(prop) === -1) {
        this.dynamicProperties.push(prop);
      }
    }
  };

  function FootageElement(data, globalData, comp) {
    this.initFrame();
    this.initRenderable();
    this.assetData = globalData.getAssetData(data.refId);
    this.footageData = globalData.imageLoader.getAsset(this.assetData);
    this.initBaseData(data, globalData, comp);
  }

  FootageElement.prototype.prepareFrame = function () {};

  extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);

  FootageElement.prototype.getBaseElement = function () {
    return null;
  };

  FootageElement.prototype.renderFrame = function () {};

  FootageElement.prototype.destroy = function () {};

  FootageElement.prototype.initExpressions = function () {
    var expressionsInterfaces = getExpressionInterfaces();

    if (!expressionsInterfaces) {
      return;
    }

    var FootageInterface = expressionsInterfaces('footage');
    this.layerInterface = FootageInterface(this);
  };

  FootageElement.prototype.getFootageData = function () {
    return this.footageData;
  };

  function AudioElement(data, globalData, comp) {
    this.initFrame();
    this.initRenderable();
    this.assetData = globalData.getAssetData(data.refId);
    this.initBaseData(data, globalData, comp);
    this._isPlaying = false;
    this._canPlay = false;
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    this.audio = this.globalData.audioController.createAudio(assetPath);
    this._currentTime = 0;
    this.globalData.audioController.addAudio(this);
    this._volumeMultiplier = 1;
    this._volume = 1;
    this._previousVolume = null;
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
    this.lv = PropertyFactory.getProp(this, data.au && data.au.lv ? data.au.lv : {
      k: [100]
    }, 1, 0.01, this);
  }

  AudioElement.prototype.prepareFrame = function (num) {
    this.prepareRenderableFrame(num, true);
    this.prepareProperties(num, true);

    if (!this.tm._placeholder) {
      var timeRemapped = this.tm.v;
      this._currentTime = timeRemapped;
    } else {
      this._currentTime = num / this.data.sr;
    }

    this._volume = this.lv.v[0];
    var totalVolume = this._volume * this._volumeMultiplier;

    if (this._previousVolume !== totalVolume) {
      this._previousVolume = totalVolume;
      this.audio.volume(totalVolume);
    }
  };

  extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);

  AudioElement.prototype.renderFrame = function () {
    if (this.isInRange && this._canPlay) {
      if (!this._isPlaying) {
        this.audio.play();
        this.audio.seek(this._currentTime / this.globalData.frameRate);
        this._isPlaying = true;
      } else if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
        this.audio.seek(this._currentTime / this.globalData.frameRate);
      }
    }
  };

  AudioElement.prototype.show = function () {// this.audio.play()
  };

  AudioElement.prototype.hide = function () {
    this.audio.pause();
    this._isPlaying = false;
  };

  AudioElement.prototype.pause = function () {
    this.audio.pause();
    this._isPlaying = false;
    this._canPlay = false;
  };

  AudioElement.prototype.resume = function () {
    this._canPlay = true;
  };

  AudioElement.prototype.setRate = function (rateValue) {
    this.audio.rate(rateValue);
  };

  AudioElement.prototype.volume = function (volumeValue) {
    this._volumeMultiplier = volumeValue;
    this._previousVolume = volumeValue * this._volume;
    this.audio.volume(this._previousVolume);
  };

  AudioElement.prototype.getBaseElement = function () {
    return null;
  };

  AudioElement.prototype.destroy = function () {};

  AudioElement.prototype.sourceRectAtTime = function () {};

  AudioElement.prototype.initExpressions = function () {};

  function BaseRenderer() {}

  BaseRenderer.prototype.checkLayers = function (num) {
    var i;
    var len = this.layers.length;
    var data;
    this.completeLayers = true;

    for (i = len - 1; i >= 0; i -= 1) {
      if (!this.elements[i]) {
        data = this.layers[i];

        if (data.ip - data.st <= num - this.layers[i].st && data.op - data.st > num - this.layers[i].st) {
          this.buildItem(i);
        }
      }

      this.completeLayers = this.elements[i] ? this.completeLayers : false;
    }

    this.checkPendingElements();
  };

  BaseRenderer.prototype.createItem = function (layer) {
    switch (layer.ty) {
      case 2:
        return this.createImage(layer);

      case 0:
        return this.createComp(layer);

      case 1:
        return this.createSolid(layer);

      case 3:
        return this.createNull(layer);

      case 4:
        return this.createShape(layer);

      case 5:
        return this.createText(layer);

      case 6:
        return this.createAudio(layer);

      case 13:
        return this.createCamera(layer);

      case 15:
        return this.createFootage(layer);

      default:
        return this.createNull(layer);
    }
  };

  BaseRenderer.prototype.createCamera = function () {
    throw new Error('You\'re using a 3d camera. Try the html renderer.');
  };

  BaseRenderer.prototype.createAudio = function (data) {
    return new AudioElement(data, this.globalData, this);
  };

  BaseRenderer.prototype.createFootage = function (data) {
    return new FootageElement(data, this.globalData, this);
  };

  BaseRenderer.prototype.buildAllItems = function () {
    var i;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      this.buildItem(i);
    }

    this.checkPendingElements();
  };

  BaseRenderer.prototype.includeLayers = function (newLayers) {
    this.completeLayers = false;
    var i;
    var len = newLayers.length;
    var j;
    var jLen = this.layers.length;

    for (i = 0; i < len; i += 1) {
      j = 0;

      while (j < jLen) {
        if (this.layers[j].id === newLayers[i].id) {
          this.layers[j] = newLayers[i];
          break;
        }

        j += 1;
      }
    }
  };

  BaseRenderer.prototype.setProjectInterface = function (pInterface) {
    this.globalData.projectInterface = pInterface;
  };

  BaseRenderer.prototype.initItems = function () {
    if (!this.globalData.progressiveLoad) {
      this.buildAllItems();
    }
  };

  BaseRenderer.prototype.buildElementParenting = function (element, parentName, hierarchy) {
    var elements = this.elements;
    var layers = this.layers;
    var i = 0;
    var len = layers.length;

    while (i < len) {
      if (layers[i].ind == parentName) {
        // eslint-disable-line eqeqeq
        if (!elements[i] || elements[i] === true) {
          this.buildItem(i);
          this.addPendingElement(element);
        } else {
          hierarchy.push(elements[i]);
          elements[i].setAsParent();

          if (layers[i].parent !== undefined) {
            this.buildElementParenting(element, layers[i].parent, hierarchy);
          } else {
            element.setHierarchy(hierarchy);
          }
        }
      }

      i += 1;
    }
  };

  BaseRenderer.prototype.addPendingElement = function (element) {
    this.pendingElements.push(element);
  };

  BaseRenderer.prototype.searchExtraCompositions = function (assets) {
    var i;
    var len = assets.length;

    for (i = 0; i < len; i += 1) {
      if (assets[i].xt) {
        var comp = this.createComp(assets[i]);
        comp.initExpressions();
        this.globalData.projectInterface.registerComposition(comp);
      }
    }
  };

  BaseRenderer.prototype.getElementById = function (ind) {
    var i;
    var len = this.elements.length;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i].data.ind === ind) {
        return this.elements[i];
      }
    }

    return null;
  };

  BaseRenderer.prototype.getElementByPath = function (path) {
    var pathValue = path.shift();
    var element;

    if (typeof pathValue === 'number') {
      element = this.elements[pathValue];
    } else {
      var i;
      var len = this.elements.length;

      for (i = 0; i < len; i += 1) {
        if (this.elements[i].data.nm === pathValue) {
          element = this.elements[i];
          break;
        }
      }
    }

    if (path.length === 0) {
      return element;
    }

    return element.getElementByPath(path);
  };

  BaseRenderer.prototype.setupGlobalData = function (animData, fontsContainer) {
    this.globalData.fontManager = new FontManager();
    this.globalData.slotManager = slotFactory(animData);
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.imageLoader = this.animationItem.imagePreloader;
    this.globalData.audioController = this.animationItem.audioController;
    this.globalData.frameId = 0;
    this.globalData.frameRate = animData.fr;
    this.globalData.nm = animData.nm;
    this.globalData.compSize = {
      w: animData.w,
      h: animData.h
    };
  };

  var effectTypes = {
    TRANSFORM_EFFECT: 'transformEFfect'
  };

  function TransformElement() {}

  TransformElement.prototype = {
    initTransform: function initTransform() {
      var mat = new Matrix();
      this.finalTransform = {
        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
          o: 0
        },
        _matMdf: false,
        _localMatMdf: false,
        _opMdf: false,
        mat: mat,
        localMat: mat,
        localOpacity: 1
      };

      if (this.data.ao) {
        this.finalTransform.mProp.autoOriented = true;
      } // TODO: check TYPE 11: Guided elements


      if (this.data.ty !== 11) {// this.createElements();
      }
    },
    renderTransform: function renderTransform() {
      this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
      this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

      if (this.hierarchy) {
        var mat;
        var finalMat = this.finalTransform.mat;
        var i = 0;
        var len = this.hierarchy.length; // Checking if any of the transformation matrices in the hierarchy chain has changed.

        if (!this.finalTransform._matMdf) {
          while (i < len) {
            if (this.hierarchy[i].finalTransform.mProp._mdf) {
              this.finalTransform._matMdf = true;
              break;
            }

            i += 1;
          }
        }

        if (this.finalTransform._matMdf) {
          mat = this.finalTransform.mProp.v.props;
          finalMat.cloneFromProps(mat);

          for (i = 0; i < len; i += 1) {
            finalMat.multiply(this.hierarchy[i].finalTransform.mProp.v);
          }
        }
      }

      if (this.finalTransform._matMdf) {
        this.finalTransform._localMatMdf = this.finalTransform._matMdf;
      }

      if (this.finalTransform._opMdf) {
        this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
      }
    },
    renderLocalTransform: function renderLocalTransform() {
      if (this.localTransforms) {
        var i = 0;
        var len = this.localTransforms.length;
        this.finalTransform._localMatMdf = this.finalTransform._matMdf;

        if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
          while (i < len) {
            if (this.localTransforms[i]._mdf) {
              this.finalTransform._localMatMdf = true;
            }

            if (this.localTransforms[i]._opMdf && !this.finalTransform._opMdf) {
              this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
              this.finalTransform._opMdf = true;
            }

            i += 1;
          }
        }

        if (this.finalTransform._localMatMdf) {
          var localMat = this.finalTransform.localMat;
          this.localTransforms[0].matrix.clone(localMat);

          for (i = 1; i < len; i += 1) {
            var lmat = this.localTransforms[i].matrix;
            localMat.multiply(lmat);
          }

          localMat.multiply(this.finalTransform.mat);
        }

        if (this.finalTransform._opMdf) {
          var localOp = this.finalTransform.localOpacity;

          for (i = 0; i < len; i += 1) {
            localOp *= this.localTransforms[i].opacity * 0.01;
          }

          this.finalTransform.localOpacity = localOp;
        }
      }
    },
    searchEffectTransforms: function searchEffectTransforms() {
      if (this.renderableEffectsManager) {
        var transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);

        if (transformEffects.length) {
          this.localTransforms = [];
          this.finalTransform.localMat = new Matrix();
          var i = 0;
          var len = transformEffects.length;

          for (i = 0; i < len; i += 1) {
            this.localTransforms.push(transformEffects[i]);
          }
        }
      }
    },
    globalToLocal: function globalToLocal(pt) {
      var transforms = [];
      transforms.push(this.finalTransform);
      var flag = true;
      var comp = this.comp;

      while (flag) {
        if (comp.finalTransform) {
          if (comp.data.hasMask) {
            transforms.splice(0, 0, comp.finalTransform);
          }

          comp = comp.comp;
        } else {
          flag = false;
        }
      }

      var i;
      var len = transforms.length;
      var ptNew;

      for (i = 0; i < len; i += 1) {
        ptNew = transforms[i].mat.applyToPointArray(0, 0, 0); // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);

        pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
      }

      return pt;
    },
    mHelper: new Matrix()
  };

  function MaskElement(data, element, globalData) {
    this.data = data;
    this.element = element;
    this.globalData = globalData;
    this.storedData = [];
    this.masksProperties = this.data.masksProperties || [];
    this.maskElement = null;
    var defs = this.globalData.defs;
    var i;
    var len = this.masksProperties ? this.masksProperties.length : 0;
    this.viewData = createSizedArray(len);
    this.solidPath = '';
    var path;
    var properties = this.masksProperties;
    var count = 0;
    var currentMasks = [];
    var j;
    var jLen;
    var layerId = createElementID();
    var rect;
    var expansor;
    var feMorph;
    var x;
    var maskType = 'clipPath';
    var maskRef = 'clip-path';

    for (i = 0; i < len; i += 1) {
      if (properties[i].mode !== 'a' && properties[i].mode !== 'n' || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
        maskType = 'mask';
        maskRef = 'mask';
      }

      if ((properties[i].mode === 's' || properties[i].mode === 'i') && count === 0) {
        rect = createNS('rect');
        rect.setAttribute('fill', '#ffffff');
        rect.setAttribute('width', this.element.comp.data.w || 0);
        rect.setAttribute('height', this.element.comp.data.h || 0);
        currentMasks.push(rect);
      } else {
        rect = null;
      }

      path = createNS('path');

      if (properties[i].mode === 'n') {
        // TODO move this to a factory or to a constructor
        this.viewData[i] = {
          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
          elem: path,
          lastPath: ''
        };
        defs.appendChild(path);
      } else {
        count += 1;
        path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
        path.setAttribute('clip-rule', 'nonzero');
        var filterID;

        if (properties[i].x.k !== 0) {
          maskType = 'mask';
          maskRef = 'mask';
          x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
          filterID = createElementID();
          expansor = createNS('filter');
          expansor.setAttribute('id', filterID);
          feMorph = createNS('feMorphology');
          feMorph.setAttribute('operator', 'erode');
          feMorph.setAttribute('in', 'SourceGraphic');
          feMorph.setAttribute('radius', '0');
          expansor.appendChild(feMorph);
          defs.appendChild(expansor);
          path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff');
        } else {
          feMorph = null;
          x = null;
        } // TODO move this to a factory or to a constructor


        this.storedData[i] = {
          elem: path,
          x: x,
          expan: feMorph,
          lastPath: '',
          lastOperator: '',
          filterId: filterID,
          lastRadius: 0
        };

        if (properties[i].mode === 'i') {
          jLen = currentMasks.length;
          var g = createNS('g');

          for (j = 0; j < jLen; j += 1) {
            g.appendChild(currentMasks[j]);
          }

          var mask = createNS('mask');
          mask.setAttribute('mask-type', 'alpha');
          mask.setAttribute('id', layerId + '_' + count);
          mask.appendChild(path);
          defs.appendChild(mask);
          g.setAttribute('mask', 'url(' + getLocationHref() + '#' + layerId + '_' + count + ')');
          currentMasks.length = 0;
          currentMasks.push(g);
        } else {
          currentMasks.push(path);
        }

        if (properties[i].inv && !this.solidPath) {
          this.solidPath = this.createLayerSolidPath();
        } // TODO move this to a factory or to a constructor


        this.viewData[i] = {
          elem: path,
          lastPath: '',
          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
          invRect: rect
        };

        if (!this.viewData[i].prop.k) {
          this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
        }
      }
    }

    this.maskElement = createNS(maskType);
    len = currentMasks.length;

    for (i = 0; i < len; i += 1) {
      this.maskElement.appendChild(currentMasks[i]);
    }

    if (count > 0) {
      this.maskElement.setAttribute('id', layerId);
      this.element.maskedElement.setAttribute(maskRef, 'url(' + getLocationHref() + '#' + layerId + ')');
      defs.appendChild(this.maskElement);
    }

    if (this.viewData.length) {
      this.element.addRenderableComponent(this);
    }
  }

  MaskElement.prototype.getMaskProperty = function (pos) {
    return this.viewData[pos].prop;
  };

  MaskElement.prototype.renderFrame = function (isFirstFrame) {
    var finalMat = this.element.finalTransform.mat;
    var i;
    var len = this.masksProperties.length;

    for (i = 0; i < len; i += 1) {
      if (this.viewData[i].prop._mdf || isFirstFrame) {
        this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
      }

      if (this.viewData[i].op._mdf || isFirstFrame) {
        this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v);
      }

      if (this.masksProperties[i].mode !== 'n') {
        if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
          this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS());
        }

        if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
          var feMorph = this.storedData[i].expan;

          if (this.storedData[i].x.v < 0) {
            if (this.storedData[i].lastOperator !== 'erode') {
              this.storedData[i].lastOperator = 'erode';
              this.storedData[i].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[i].filterId + ')');
            }

            feMorph.setAttribute('radius', -this.storedData[i].x.v);
          } else {
            if (this.storedData[i].lastOperator !== 'dilate') {
              this.storedData[i].lastOperator = 'dilate';
              this.storedData[i].elem.setAttribute('filter', null);
            }

            this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2);
          }
        }
      }
    }
  };

  MaskElement.prototype.getMaskelement = function () {
    return this.maskElement;
  };

  MaskElement.prototype.createLayerSolidPath = function () {
    var path = 'M0,0 ';
    path += ' h' + this.globalData.compSize.w;
    path += ' v' + this.globalData.compSize.h;
    path += ' h-' + this.globalData.compSize.w;
    path += ' v-' + this.globalData.compSize.h + ' ';
    return path;
  };

  MaskElement.prototype.drawPath = function (pathData, pathNodes, viewData) {
    var pathString = ' M' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
    var i;
    var len;
    len = pathNodes._length;

    for (i = 1; i < len; i += 1) {
      // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[i][0] + ',' + pathNodes.i[i][1] + ' ' + pathNodes.v[i][0] + ',' + pathNodes.v[i][1];
    } // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];


    if (pathNodes.c && len > 1) {
      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[0][0] + ',' + pathNodes.i[0][1] + ' ' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
    } // pathNodes.__renderedString = pathString;


    if (viewData.lastPath !== pathString) {
      var pathShapeValue = '';

      if (viewData.elem) {
        if (pathNodes.c) {
          pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
        }

        viewData.elem.setAttribute('d', pathShapeValue);
      }

      viewData.lastPath = pathString;
    }
  };

  MaskElement.prototype.destroy = function () {
    this.element = null;
    this.globalData = null;
    this.maskElement = null;
    this.data = null;
    this.masksProperties = null;
  };

  var filtersFactory = function () {
    var ob = {};
    ob.createFilter = createFilter;
    ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

    function createFilter(filId, skipCoordinates) {
      var fil = createNS('filter');
      fil.setAttribute('id', filId);

      if (skipCoordinates !== true) {
        fil.setAttribute('filterUnits', 'objectBoundingBox');
        fil.setAttribute('x', '0%');
        fil.setAttribute('y', '0%');
        fil.setAttribute('width', '100%');
        fil.setAttribute('height', '100%');
      }

      return fil;
    }

    function createAlphaToLuminanceFilter() {
      var feColorMatrix = createNS('feColorMatrix');
      feColorMatrix.setAttribute('type', 'matrix');
      feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
      feColorMatrix.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
      return feColorMatrix;
    }

    return ob;
  }();

  var featureSupport = function () {
    var ob = {
      maskType: true,
      svgLumaHidden: true,
      offscreenCanvas: typeof OffscreenCanvas !== 'undefined'
    };

    if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
      ob.maskType = false;
    }

    if (/firefox/i.test(navigator.userAgent)) {
      ob.svgLumaHidden = false;
    }

    return ob;
  }();

  var registeredEffects$1 = {};
  var idPrefix = 'filter_result_';

  function SVGEffects(elem) {
    var i;
    var source = 'SourceGraphic';
    var len = elem.data.ef ? elem.data.ef.length : 0;
    var filId = createElementID();
    var fil = filtersFactory.createFilter(filId, true);
    var count = 0;
    this.filters = [];
    var filterManager;

    for (i = 0; i < len; i += 1) {
      filterManager = null;
      var type = elem.data.ef[i].ty;

      if (registeredEffects$1[type]) {
        var Effect = registeredEffects$1[type].effect;
        filterManager = new Effect(fil, elem.effectsManager.effectElements[i], elem, idPrefix + count, source);
        source = idPrefix + count;

        if (registeredEffects$1[type].countsAsEffect) {
          count += 1;
        }
      }

      if (filterManager) {
        this.filters.push(filterManager);
      }
    }

    if (count) {
      elem.globalData.defs.appendChild(fil);
      elem.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
    }

    if (this.filters.length) {
      elem.addRenderableComponent(this);
    }
  }

  SVGEffects.prototype.renderFrame = function (_isFirstFrame) {
    var i;
    var len = this.filters.length;

    for (i = 0; i < len; i += 1) {
      this.filters[i].renderFrame(_isFirstFrame);
    }
  };

  SVGEffects.prototype.getEffects = function (type) {
    var i;
    var len = this.filters.length;
    var effects = [];

    for (i = 0; i < len; i += 1) {
      if (this.filters[i].type === type) {
        effects.push(this.filters[i]);
      }
    }

    return effects;
  };

  function registerEffect$1(id, effect, countsAsEffect) {
    registeredEffects$1[id] = {
      effect: effect,
      countsAsEffect: countsAsEffect
    };
  }

  function SVGBaseElement() {}

  SVGBaseElement.prototype = {
    initRendererElement: function initRendererElement() {
      this.layerElement = createNS('g');
    },
    createContainerElements: function createContainerElements() {
      this.matteElement = createNS('g');
      this.transformedElement = this.layerElement;
      this.maskedElement = this.layerElement;
      this._sizeChanged = false;
      var layerElementParent = null; // If this layer acts as a mask for the following layer

      if (this.data.td) {
        this.matteMasks = {};
        var gg = createNS('g');
        gg.setAttribute('id', this.layerId);
        gg.appendChild(this.layerElement);
        layerElementParent = gg;
        this.globalData.defs.appendChild(gg);
      } else if (this.data.tt) {
        this.matteElement.appendChild(this.layerElement);
        layerElementParent = this.matteElement;
        this.baseElement = this.matteElement;
      } else {
        this.baseElement = this.layerElement;
      }

      if (this.data.ln) {
        this.layerElement.setAttribute('id', this.data.ln);
      }

      if (this.data.cl) {
        this.layerElement.setAttribute('class', this.data.cl);
      } // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped


      if (this.data.ty === 0 && !this.data.hd) {
        var cp = createNS('clipPath');
        var pt = createNS('path');
        pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
        var clipId = createElementID();
        cp.setAttribute('id', clipId);
        cp.appendChild(pt);
        this.globalData.defs.appendChild(cp);

        if (this.checkMasks()) {
          var cpGroup = createNS('g');
          cpGroup.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
          cpGroup.appendChild(this.layerElement);
          this.transformedElement = cpGroup;

          if (layerElementParent) {
            layerElementParent.appendChild(this.transformedElement);
          } else {
            this.baseElement = this.transformedElement;
          }
        } else {
          this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
        }
      }

      if (this.data.bm !== 0) {
        this.setBlendMode();
      }
    },
    renderElement: function renderElement() {
      if (this.finalTransform._localMatMdf) {
        this.transformedElement.setAttribute('transform', this.finalTransform.localMat.to2dCSS());
      }

      if (this.finalTransform._opMdf) {
        this.transformedElement.setAttribute('opacity', this.finalTransform.localOpacity);
      }
    },
    destroyBaseElement: function destroyBaseElement() {
      this.layerElement = null;
      this.matteElement = null;
      this.maskManager.destroy();
    },
    getBaseElement: function getBaseElement() {
      if (this.data.hd) {
        return null;
      }

      return this.baseElement;
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
      this.renderableEffectsManager = new SVGEffects(this);
      this.searchEffectTransforms();
    },
    getMatte: function getMatte(matteType) {
      // This should not be a common case. But for backward compatibility, we'll create the matte object.
      // It solves animations that have two consecutive layers marked as matte masks.
      // Which is an undefined behavior in AE.
      if (!this.matteMasks) {
        this.matteMasks = {};
      }

      if (!this.matteMasks[matteType]) {
        var id = this.layerId + '_' + matteType;
        var filId;
        var fil;
        var useElement;
        var gg;

        if (matteType === 1 || matteType === 3) {
          var masker = createNS('mask');
          masker.setAttribute('id', id);
          masker.setAttribute('mask-type', matteType === 3 ? 'luminance' : 'alpha');
          useElement = createNS('use');
          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
          masker.appendChild(useElement);
          this.globalData.defs.appendChild(masker);

          if (!featureSupport.maskType && matteType === 1) {
            masker.setAttribute('mask-type', 'luminance');
            filId = createElementID();
            fil = filtersFactory.createFilter(filId);
            this.globalData.defs.appendChild(fil);
            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
            gg = createNS('g');
            gg.appendChild(useElement);
            masker.appendChild(gg);
            gg.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
          }
        } else if (matteType === 2) {
          var maskGroup = createNS('mask');
          maskGroup.setAttribute('id', id);
          maskGroup.setAttribute('mask-type', 'alpha');
          var maskGrouper = createNS('g');
          maskGroup.appendChild(maskGrouper);
          filId = createElementID();
          fil = filtersFactory.createFilter(filId); /// /

          var feCTr = createNS('feComponentTransfer');
          feCTr.setAttribute('in', 'SourceGraphic');
          fil.appendChild(feCTr);
          var feFunc = createNS('feFuncA');
          feFunc.setAttribute('type', 'table');
          feFunc.setAttribute('tableValues', '1.0 0.0');
          feCTr.appendChild(feFunc); /// /

          this.globalData.defs.appendChild(fil);
          var alphaRect = createNS('rect');
          alphaRect.setAttribute('width', this.comp.data.w);
          alphaRect.setAttribute('height', this.comp.data.h);
          alphaRect.setAttribute('x', '0');
          alphaRect.setAttribute('y', '0');
          alphaRect.setAttribute('fill', '#ffffff');
          alphaRect.setAttribute('opacity', '0');
          maskGrouper.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
          maskGrouper.appendChild(alphaRect);
          useElement = createNS('use');
          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
          maskGrouper.appendChild(useElement);

          if (!featureSupport.maskType) {
            maskGroup.setAttribute('mask-type', 'luminance');
            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
            gg = createNS('g');
            maskGrouper.appendChild(alphaRect);
            gg.appendChild(this.layerElement);
            maskGrouper.appendChild(gg);
          }

          this.globalData.defs.appendChild(maskGroup);
        }

        this.matteMasks[matteType] = id;
      }

      return this.matteMasks[matteType];
    },
    setMatte: function setMatte(id) {
      if (!this.matteElement) {
        return;
      }

      this.matteElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + id + ')');
    }
  };

  /**
   * @file
   * Handles AE's layer parenting property.
   *
   */
  function HierarchyElement() {}

  HierarchyElement.prototype = {
    /**
       * @function
       * Initializes hierarchy properties
       *
       */
    initHierarchy: function initHierarchy() {
      // element's parent list
      this.hierarchy = []; // if element is parent of another layer _isParent will be true

      this._isParent = false;
      this.checkParenting();
    },

    /**
       * @function
       * Sets layer's hierarchy.
       * @param {array} hierarch
       * layer's parent list
       *
       */
    setHierarchy: function setHierarchy(hierarchy) {
      this.hierarchy = hierarchy;
    },

    /**
       * @function
       * Sets layer as parent.
       *
       */
    setAsParent: function setAsParent() {
      this._isParent = true;
    },

    /**
       * @function
       * Searches layer's parenting chain
       *
       */
    checkParenting: function checkParenting() {
      if (this.data.parent !== undefined) {
        this.comp.buildElementParenting(this, this.data.parent, []);
      }
    }
  };

  function RenderableDOMElement() {}

  (function () {
    var _prototype = {
      initElement: function initElement(data, globalData, comp) {
        this.initFrame();
        this.initBaseData(data, globalData, comp);
        this.initTransform(data, globalData, comp);
        this.initHierarchy();
        this.initRenderable();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        this.createContent();
        this.hide();
      },
      hide: function hide() {
        // console.log('HIDE', this);
        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
          var elem = this.baseElement || this.layerElement;
          elem.style.display = 'none';
          this.hidden = true;
        }
      },
      show: function show() {
        // console.log('SHOW', this);
        if (this.isInRange && !this.isTransparent) {
          if (!this.data.hd) {
            var elem = this.baseElement || this.layerElement;
            elem.style.display = 'block';
          }

          this.hidden = false;
          this._isFirstFrame = true;
        }
      },
      renderFrame: function renderFrame() {
        // If it is exported as hidden (data.hd === true) no need to render
        // If it is not visible no need to render
        if (this.data.hd || this.hidden) {
          return;
        }

        this.renderTransform();
        this.renderRenderable();
        this.renderLocalTransform();
        this.renderElement();
        this.renderInnerContent();

        if (this._isFirstFrame) {
          this._isFirstFrame = false;
        }
      },
      renderInnerContent: function renderInnerContent() {},
      prepareFrame: function prepareFrame(num) {
        this._mdf = false;
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
        this.checkTransparency();
      },
      destroy: function destroy() {
        this.innerElem = null;
        this.destroyBaseElement();
      }
    };
    extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
  })();

  function IImageElement(data, globalData, comp) {
    this.assetData = globalData.getAssetData(data.refId);

    if (this.assetData && this.assetData.sid) {
      this.assetData = globalData.slotManager.getProp(this.assetData);
    }

    this.initElement(data, globalData, comp);
    this.sourceRect = {
      top: 0,
      left: 0,
      width: this.assetData.w,
      height: this.assetData.h
    };
  }

  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);

  IImageElement.prototype.createContent = function () {
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    this.innerElem = createNS('image');
    this.innerElem.setAttribute('width', this.assetData.w + 'px');
    this.innerElem.setAttribute('height', this.assetData.h + 'px');
    this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
    this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
    this.layerElement.appendChild(this.innerElem);
  };

  IImageElement.prototype.sourceRectAtTime = function () {
    return this.sourceRect;
  };

  function ProcessedElement(element, position) {
    this.elem = element;
    this.pos = position;
  }

  function IShapeElement() {}

  IShapeElement.prototype = {
    addShapeToModifiers: function addShapeToModifiers(data) {
      var i;
      var len = this.shapeModifiers.length;

      for (i = 0; i < len; i += 1) {
        this.shapeModifiers[i].addShape(data);
      }
    },
    isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(data) {
      var i = 0;
      var len = this.shapeModifiers.length;

      while (i < len) {
        if (this.shapeModifiers[i].isAnimatedWithShape(data)) {
          return true;
        }
      }

      return false;
    },
    renderModifiers: function renderModifiers() {
      if (!this.shapeModifiers.length) {
        return;
      }

      var i;
      var len = this.shapes.length;

      for (i = 0; i < len; i += 1) {
        this.shapes[i].sh.reset();
      }

      len = this.shapeModifiers.length;
      var shouldBreakProcess;

      for (i = len - 1; i >= 0; i -= 1) {
        shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame); // workaround to fix cases where a repeater resets the shape so the following processes get called twice
        // TODO: find a better solution for this

        if (shouldBreakProcess) {
          break;
        }
      }
    },
    searchProcessedElement: function searchProcessedElement(elem) {
      var elements = this.processedElements;
      var i = 0;
      var len = elements.length;

      while (i < len) {
        if (elements[i].elem === elem) {
          return elements[i].pos;
        }

        i += 1;
      }

      return 0;
    },
    addProcessedElement: function addProcessedElement(elem, pos) {
      var elements = this.processedElements;
      var i = elements.length;

      while (i) {
        i -= 1;

        if (elements[i].elem === elem) {
          elements[i].pos = pos;
          return;
        }
      }

      elements.push(new ProcessedElement(elem, pos));
    },
    prepareFrame: function prepareFrame(num) {
      this.prepareRenderableFrame(num);
      this.prepareProperties(num, this.isInRange);
    }
  };

  var lineCapEnum = {
    1: 'butt',
    2: 'round',
    3: 'square'
  };
  var lineJoinEnum = {
    1: 'miter',
    2: 'round',
    3: 'bevel'
  };

  function SVGShapeData(transformers, level, shape) {
    this.caches = [];
    this.styles = [];
    this.transformers = transformers;
    this.lStr = '';
    this.sh = shape;
    this.lvl = level; // TODO find if there are some cases where _isAnimated can be false.
    // For now, since shapes add up with other shapes. They have to be calculated every time.
    // One way of finding out is checking if all styles associated to this shape depend only of this shape

    this._isAnimated = !!shape.k; // TODO: commenting this for now since all shapes are animated

    var i = 0;
    var len = transformers.length;

    while (i < len) {
      if (transformers[i].mProps.dynamicProperties.length) {
        this._isAnimated = true;
        break;
      }

      i += 1;
    }
  }

  SVGShapeData.prototype.setAsAnimated = function () {
    this._isAnimated = true;
  };

  function SVGStyleData(data, level) {
    this.data = data;
    this.type = data.ty;
    this.d = '';
    this.lvl = level;
    this._mdf = false;
    this.closed = data.hd === true;
    this.pElem = createNS('path');
    this.msElem = null;
  }

  SVGStyleData.prototype.reset = function () {
    this.d = '';
    this._mdf = false;
  };

  function DashProperty(elem, data, renderer, container) {
    this.elem = elem;
    this.frameId = -1;
    this.dataProps = createSizedArray(data.length);
    this.renderer = renderer;
    this.k = false;
    this.dashStr = '';
    this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
    this.dashoffset = createTypedArray('float32', 1);
    this.initDynamicPropertyContainer(container);
    var i;
    var len = data.length || 0;
    var prop;

    for (i = 0; i < len; i += 1) {
      prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
      this.k = prop.k || this.k;
      this.dataProps[i] = {
        n: data[i].n,
        p: prop
      };
    }

    if (!this.k) {
      this.getValue(true);
    }

    this._isAnimated = this.k;
  }

  DashProperty.prototype.getValue = function (forceRender) {
    if (this.elem.globalData.frameId === this.frameId && !forceRender) {
      return;
    }

    this.frameId = this.elem.globalData.frameId;
    this.iterateDynamicProperties();
    this._mdf = this._mdf || forceRender;

    if (this._mdf) {
      var i = 0;
      var len = this.dataProps.length;

      if (this.renderer === 'svg') {
        this.dashStr = '';
      }

      for (i = 0; i < len; i += 1) {
        if (this.dataProps[i].n !== 'o') {
          if (this.renderer === 'svg') {
            this.dashStr += ' ' + this.dataProps[i].p.v;
          } else {
            this.dashArray[i] = this.dataProps[i].p.v;
          }
        } else {
          this.dashoffset[0] = this.dataProps[i].p.v;
        }
      }
    }
  };

  extendPrototype([DynamicPropertyContainer], DashProperty);

  function SVGStrokeStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
    this.style = styleOb;
    this._isAnimated = !!this._isAnimated;
  }

  extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

  function SVGFillStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
    this.style = styleOb;
  }

  extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

  function SVGNoStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.style = styleOb;
  }

  extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

  function GradientProperty(elem, data, container) {
    this.data = data;
    this.c = createTypedArray('uint8c', data.p * 4);
    var cLength = data.k.k[0].s ? data.k.k[0].s.length - data.p * 4 : data.k.k.length - data.p * 4;
    this.o = createTypedArray('float32', cLength);
    this._cmdf = false;
    this._omdf = false;
    this._collapsable = this.checkCollapsable();
    this._hasOpacity = cLength;
    this.initDynamicPropertyContainer(container);
    this.prop = PropertyFactory.getProp(elem, data.k, 1, null, this);
    this.k = this.prop.k;
    this.getValue(true);
  }

  GradientProperty.prototype.comparePoints = function (values, points) {
    var i = 0;
    var len = this.o.length / 2;
    var diff;

    while (i < len) {
      diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);

      if (diff > 0.01) {
        return false;
      }

      i += 1;
    }

    return true;
  };

  GradientProperty.prototype.checkCollapsable = function () {
    if (this.o.length / 2 !== this.c.length / 4) {
      return false;
    }

    if (this.data.k.k[0].s) {
      var i = 0;
      var len = this.data.k.k.length;

      while (i < len) {
        if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
          return false;
        }

        i += 1;
      }
    } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
      return false;
    }

    return true;
  };

  GradientProperty.prototype.getValue = function (forceRender) {
    this.prop.getValue();
    this._mdf = false;
    this._cmdf = false;
    this._omdf = false;

    if (this.prop._mdf || forceRender) {
      var i;
      var len = this.data.p * 4;
      var mult;
      var val;

      for (i = 0; i < len; i += 1) {
        mult = i % 4 === 0 ? 100 : 255;
        val = Math.round(this.prop.v[i] * mult);

        if (this.c[i] !== val) {
          this.c[i] = val;
          this._cmdf = !forceRender;
        }
      }

      if (this.o.length) {
        len = this.prop.v.length;

        for (i = this.data.p * 4; i < len; i += 1) {
          mult = i % 2 === 0 ? 100 : 1;
          val = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];

          if (this.o[i - this.data.p * 4] !== val) {
            this.o[i - this.data.p * 4] = val;
            this._omdf = !forceRender;
          }
        }
      }

      this._mdf = !forceRender;
    }
  };

  extendPrototype([DynamicPropertyContainer], GradientProperty);

  function SVGGradientFillStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.initGradientData(elem, data, styleOb);
  }

  SVGGradientFillStyleData.prototype.initGradientData = function (elem, data, styleOb) {
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
    this.s = PropertyFactory.getProp(elem, data.s, 1, null, this);
    this.e = PropertyFactory.getProp(elem, data.e, 1, null, this);
    this.h = PropertyFactory.getProp(elem, data.h || {
      k: 0
    }, 0, 0.01, this);
    this.a = PropertyFactory.getProp(elem, data.a || {
      k: 0
    }, 0, degToRads, this);
    this.g = new GradientProperty(elem, data.g, this);
    this.style = styleOb;
    this.stops = [];
    this.setGradientData(styleOb.pElem, data);
    this.setGradientOpacity(data, styleOb);
    this._isAnimated = !!this._isAnimated;
  };

  SVGGradientFillStyleData.prototype.setGradientData = function (pathElement, data) {
    var gradientId = createElementID();
    var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
    gfill.setAttribute('id', gradientId);
    gfill.setAttribute('spreadMethod', 'pad');
    gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
    var stops = [];
    var stop;
    var j;
    var jLen;
    jLen = data.g.p * 4;

    for (j = 0; j < jLen; j += 4) {
      stop = createNS('stop');
      gfill.appendChild(stop);
      stops.push(stop);
    }

    pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + gradientId + ')');
    this.gf = gfill;
    this.cst = stops;
  };

  SVGGradientFillStyleData.prototype.setGradientOpacity = function (data, styleOb) {
    if (this.g._hasOpacity && !this.g._collapsable) {
      var stop;
      var j;
      var jLen;
      var mask = createNS('mask');
      var maskElement = createNS('path');
      mask.appendChild(maskElement);
      var opacityId = createElementID();
      var maskId = createElementID();
      mask.setAttribute('id', maskId);
      var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
      opFill.setAttribute('id', opacityId);
      opFill.setAttribute('spreadMethod', 'pad');
      opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
      jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
      var stops = this.stops;

      for (j = data.g.p * 4; j < jLen; j += 2) {
        stop = createNS('stop');
        stop.setAttribute('stop-color', 'rgb(255,255,255)');
        opFill.appendChild(stop);
        stops.push(stop);
      }

      maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + opacityId + ')');

      if (data.ty === 'gs') {
        maskElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
        maskElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);

        if (data.lj === 1) {
          maskElement.setAttribute('stroke-miterlimit', data.ml);
        }
      }

      this.of = opFill;
      this.ms = mask;
      this.ost = stops;
      this.maskId = maskId;
      styleOb.msElem = maskElement;
    }
  };

  extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

  function SVGGradientStrokeStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
    this.initGradientData(elem, data, styleOb);
    this._isAnimated = !!this._isAnimated;
  }

  extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

  function ShapeGroupData() {
    this.it = [];
    this.prevViewData = [];
    this.gr = createNS('g');
  }

  function SVGTransformData(mProps, op, container) {
    this.transform = {
      mProps: mProps,
      op: op,
      container: container
    };
    this.elements = [];
    this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
  }

  var buildShapeString = function buildShapeString(pathNodes, length, closed, mat) {
    if (length === 0) {
      return '';
    }

    var _o = pathNodes.o;
    var _i = pathNodes.i;
    var _v = pathNodes.v;
    var i;
    var shapeString = ' M' + mat.applyToPointStringified(_v[0][0], _v[0][1]);

    for (i = 1; i < length; i += 1) {
      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[i][0], _i[i][1]) + ' ' + mat.applyToPointStringified(_v[i][0], _v[i][1]);
    }

    if (closed && length) {
      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[0][0], _i[0][1]) + ' ' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
      shapeString += 'z';
    }

    return shapeString;
  };

  var SVGElementsRenderer = function () {
    var _identityMatrix = new Matrix();

    var _matrixHelper = new Matrix();

    var ob = {
      createRenderFunction: createRenderFunction
    };

    function createRenderFunction(data) {
      switch (data.ty) {
        case 'fl':
          return renderFill;

        case 'gf':
          return renderGradient;

        case 'gs':
          return renderGradientStroke;

        case 'st':
          return renderStroke;

        case 'sh':
        case 'el':
        case 'rc':
        case 'sr':
          return renderPath;

        case 'tr':
          return renderContentTransform;

        case 'no':
          return renderNoop;

        default:
          return null;
      }
    }

    function renderContentTransform(styleData, itemData, isFirstFrame) {
      if (isFirstFrame || itemData.transform.op._mdf) {
        itemData.transform.container.setAttribute('opacity', itemData.transform.op.v);
      }

      if (isFirstFrame || itemData.transform.mProps._mdf) {
        itemData.transform.container.setAttribute('transform', itemData.transform.mProps.v.to2dCSS());
      }
    }

    function renderNoop() {}

    function renderPath(styleData, itemData, isFirstFrame) {
      var j;
      var jLen;
      var pathStringTransformed;
      var redraw;
      var pathNodes;
      var l;
      var lLen = itemData.styles.length;
      var lvl = itemData.lvl;
      var paths;
      var mat;
      var iterations;
      var k;

      for (l = 0; l < lLen; l += 1) {
        redraw = itemData.sh._mdf || isFirstFrame;

        if (itemData.styles[l].lvl < lvl) {
          mat = _matrixHelper.reset();
          iterations = lvl - itemData.styles[l].lvl;
          k = itemData.transformers.length - 1;

          while (!redraw && iterations > 0) {
            redraw = itemData.transformers[k].mProps._mdf || redraw;
            iterations -= 1;
            k -= 1;
          }

          if (redraw) {
            iterations = lvl - itemData.styles[l].lvl;
            k = itemData.transformers.length - 1;

            while (iterations > 0) {
              mat.multiply(itemData.transformers[k].mProps.v);
              iterations -= 1;
              k -= 1;
            }
          }
        } else {
          mat = _identityMatrix;
        }

        paths = itemData.sh.paths;
        jLen = paths._length;

        if (redraw) {
          pathStringTransformed = '';

          for (j = 0; j < jLen; j += 1) {
            pathNodes = paths.shapes[j];

            if (pathNodes && pathNodes._length) {
              pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
            }
          }

          itemData.caches[l] = pathStringTransformed;
        } else {
          pathStringTransformed = itemData.caches[l];
        }

        itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
        itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
      }
    }

    function renderFill(styleData, itemData, isFirstFrame) {
      var styleElem = itemData.style;

      if (itemData.c._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('fill', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
      }

      if (itemData.o._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('fill-opacity', itemData.o.v);
      }
    }

    function renderGradientStroke(styleData, itemData, isFirstFrame) {
      renderGradient(styleData, itemData, isFirstFrame);
      renderStroke(styleData, itemData, isFirstFrame);
    }

    function renderGradient(styleData, itemData, isFirstFrame) {
      var gfill = itemData.gf;
      var hasOpacity = itemData.g._hasOpacity;
      var pt1 = itemData.s.v;
      var pt2 = itemData.e.v;

      if (itemData.o._mdf || isFirstFrame) {
        var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
        itemData.style.pElem.setAttribute(attr, itemData.o.v);
      }

      if (itemData.s._mdf || isFirstFrame) {
        var attr1 = styleData.t === 1 ? 'x1' : 'cx';
        var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
        gfill.setAttribute(attr1, pt1[0]);
        gfill.setAttribute(attr2, pt1[1]);

        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute(attr1, pt1[0]);
          itemData.of.setAttribute(attr2, pt1[1]);
        }
      }

      var stops;
      var i;
      var len;
      var stop;

      if (itemData.g._cmdf || isFirstFrame) {
        stops = itemData.cst;
        var cValues = itemData.g.c;
        len = stops.length;

        for (i = 0; i < len; i += 1) {
          stop = stops[i];
          stop.setAttribute('offset', cValues[i * 4] + '%');
          stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')');
        }
      }

      if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
        var oValues = itemData.g.o;

        if (itemData.g._collapsable) {
          stops = itemData.cst;
        } else {
          stops = itemData.ost;
        }

        len = stops.length;

        for (i = 0; i < len; i += 1) {
          stop = stops[i];

          if (!itemData.g._collapsable) {
            stop.setAttribute('offset', oValues[i * 2] + '%');
          }

          stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
        }
      }

      if (styleData.t === 1) {
        if (itemData.e._mdf || isFirstFrame) {
          gfill.setAttribute('x2', pt2[0]);
          gfill.setAttribute('y2', pt2[1]);

          if (hasOpacity && !itemData.g._collapsable) {
            itemData.of.setAttribute('x2', pt2[0]);
            itemData.of.setAttribute('y2', pt2[1]);
          }
        }
      } else {
        var rad;

        if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
          rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
          gfill.setAttribute('r', rad);

          if (hasOpacity && !itemData.g._collapsable) {
            itemData.of.setAttribute('r', rad);
          }
        }

        if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
          if (!rad) {
            rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
          }

          var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
          var percent = itemData.h.v;

          if (percent >= 1) {
            percent = 0.99;
          } else if (percent <= -1) {
            percent = -0.99;
          }

          var dist = rad * percent;
          var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
          var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
          gfill.setAttribute('fx', x);
          gfill.setAttribute('fy', y);

          if (hasOpacity && !itemData.g._collapsable) {
            itemData.of.setAttribute('fx', x);
            itemData.of.setAttribute('fy', y);
          }
        } // gfill.setAttribute('fy','200');

      }
    }

    function renderStroke(styleData, itemData, isFirstFrame) {
      var styleElem = itemData.style;
      var d = itemData.d;

      if (d && (d._mdf || isFirstFrame) && d.dashStr) {
        styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
        styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
      }

      if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
        styleElem.pElem.setAttribute('stroke', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
      }

      if (itemData.o._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
      }

      if (itemData.w._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('stroke-width', itemData.w.v);

        if (styleElem.msElem) {
          styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
        }
      }
    }

    return ob;
  }();

  function SVGShapeElement(data, globalData, comp) {
    // List of drawable elements
    this.shapes = []; // Full shape data

    this.shapesData = data.shapes; // List of styles that will be applied to shapes

    this.stylesList = []; // List of modifiers that will be applied to shapes

    this.shapeModifiers = []; // List of items in shape tree

    this.itemsData = []; // List of items in previous shape tree

    this.processedElements = []; // List of animated components

    this.animatedContents = [];
    this.initElement(data, globalData, comp); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created

    this.prevViewData = []; // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
  }

  extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);

  SVGShapeElement.prototype.initSecondaryElement = function () {};

  SVGShapeElement.prototype.identityMatrix = new Matrix();

  SVGShapeElement.prototype.buildExpressionInterface = function () {};

  SVGShapeElement.prototype.createContent = function () {
    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
    this.filterUniqueShapes();
  };
  /*
  This method searches for multiple shapes that affect a single element and one of them is animated
  */


  SVGShapeElement.prototype.filterUniqueShapes = function () {
    var i;
    var len = this.shapes.length;
    var shape;
    var j;
    var jLen = this.stylesList.length;
    var style;
    var tempShapes = [];
    var areAnimated = false;

    for (j = 0; j < jLen; j += 1) {
      style = this.stylesList[j];
      areAnimated = false;
      tempShapes.length = 0;

      for (i = 0; i < len; i += 1) {
        shape = this.shapes[i];

        if (shape.styles.indexOf(style) !== -1) {
          tempShapes.push(shape);
          areAnimated = shape._isAnimated || areAnimated;
        }
      }

      if (tempShapes.length > 1 && areAnimated) {
        this.setShapesAsAnimated(tempShapes);
      }
    }
  };

  SVGShapeElement.prototype.setShapesAsAnimated = function (shapes) {
    var i;
    var len = shapes.length;

    for (i = 0; i < len; i += 1) {
      shapes[i].setAsAnimated();
    }
  };

  SVGShapeElement.prototype.createStyleElement = function (data, level) {
    // TODO: prevent drawing of hidden styles
    var elementData;
    var styleOb = new SVGStyleData(data, level);
    var pathElement = styleOb.pElem;

    if (data.ty === 'st') {
      elementData = new SVGStrokeStyleData(this, data, styleOb);
    } else if (data.ty === 'fl') {
      elementData = new SVGFillStyleData(this, data, styleOb);
    } else if (data.ty === 'gf' || data.ty === 'gs') {
      var GradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
      elementData = new GradientConstructor(this, data, styleOb);
      this.globalData.defs.appendChild(elementData.gf);

      if (elementData.maskId) {
        this.globalData.defs.appendChild(elementData.ms);
        this.globalData.defs.appendChild(elementData.of);
        pathElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + elementData.maskId + ')');
      }
    } else if (data.ty === 'no') {
      elementData = new SVGNoStyleData(this, data, styleOb);
    }

    if (data.ty === 'st' || data.ty === 'gs') {
      pathElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
      pathElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
      pathElement.setAttribute('fill-opacity', '0');

      if (data.lj === 1) {
        pathElement.setAttribute('stroke-miterlimit', data.ml);
      }
    }

    if (data.r === 2) {
      pathElement.setAttribute('fill-rule', 'evenodd');
    }

    if (data.ln) {
      pathElement.setAttribute('id', data.ln);
    }

    if (data.cl) {
      pathElement.setAttribute('class', data.cl);
    }

    if (data.bm) {
      pathElement.style['mix-blend-mode'] = getBlendMode(data.bm);
    }

    this.stylesList.push(styleOb);
    this.addToAnimatedContents(data, elementData);
    return elementData;
  };

  SVGShapeElement.prototype.createGroupElement = function (data) {
    var elementData = new ShapeGroupData();

    if (data.ln) {
      elementData.gr.setAttribute('id', data.ln);
    }

    if (data.cl) {
      elementData.gr.setAttribute('class', data.cl);
    }

    if (data.bm) {
      elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm);
    }

    return elementData;
  };

  SVGShapeElement.prototype.createTransformElement = function (data, container) {
    var transformProperty = TransformPropertyFactory.getTransformProperty(this, data, this);
    var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
    this.addToAnimatedContents(data, elementData);
    return elementData;
  };

  SVGShapeElement.prototype.createShapeElement = function (data, ownTransformers, level) {
    var ty = 4;

    if (data.ty === 'rc') {
      ty = 5;
    } else if (data.ty === 'el') {
      ty = 6;
    } else if (data.ty === 'sr') {
      ty = 7;
    }

    var shapeProperty = ShapePropertyFactory.getShapeProp(this, data, ty, this);
    var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
    this.shapes.push(elementData);
    this.addShapeToModifiers(elementData);
    this.addToAnimatedContents(data, elementData);
    return elementData;
  };

  SVGShapeElement.prototype.addToAnimatedContents = function (data, element) {
    var i = 0;
    var len = this.animatedContents.length;

    while (i < len) {
      if (this.animatedContents[i].element === element) {
        return;
      }

      i += 1;
    }

    this.animatedContents.push({
      fn: SVGElementsRenderer.createRenderFunction(data),
      element: element,
      data: data
    });
  };

  SVGShapeElement.prototype.setElementStyles = function (elementData) {
    var arr = elementData.styles;
    var j;
    var jLen = this.stylesList.length;

    for (j = 0; j < jLen; j += 1) {
      if (!this.stylesList[j].closed) {
        arr.push(this.stylesList[j]);
      }
    }
  };

  SVGShapeElement.prototype.reloadShapes = function () {
    this._isFirstFrame = true;
    var i;
    var len = this.itemsData.length;

    for (i = 0; i < len; i += 1) {
      this.prevViewData[i] = this.itemsData[i];
    }

    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
    this.filterUniqueShapes();
    len = this.dynamicProperties.length;

    for (i = 0; i < len; i += 1) {
      this.dynamicProperties[i].getValue();
    }

    this.renderModifiers();
  };

  SVGShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, container, level, transformers, render) {
    var ownTransformers = [].concat(transformers);
    var i;
    var len = arr.length - 1;
    var j;
    var jLen;
    var ownStyles = [];
    var ownModifiers = [];
    var currentTransform;
    var modifier;
    var processedPos;

    for (i = len; i >= 0; i -= 1) {
      processedPos = this.searchProcessedElement(arr[i]);

      if (!processedPos) {
        arr[i]._render = render;
      } else {
        itemsData[i] = prevViewData[processedPos - 1];
      }

      if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs' || arr[i].ty === 'no') {
        if (!processedPos) {
          itemsData[i] = this.createStyleElement(arr[i], level);
        } else {
          itemsData[i].style.closed = false;
        }

        if (arr[i]._render) {
          if (itemsData[i].style.pElem.parentNode !== container) {
            container.appendChild(itemsData[i].style.pElem);
          }
        }

        ownStyles.push(itemsData[i].style);
      } else if (arr[i].ty === 'gr') {
        if (!processedPos) {
          itemsData[i] = this.createGroupElement(arr[i]);
        } else {
          jLen = itemsData[i].it.length;

          for (j = 0; j < jLen; j += 1) {
            itemsData[i].prevViewData[j] = itemsData[i].it[j];
          }
        }

        this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);

        if (arr[i]._render) {
          if (itemsData[i].gr.parentNode !== container) {
            container.appendChild(itemsData[i].gr);
          }
        }
      } else if (arr[i].ty === 'tr') {
        if (!processedPos) {
          itemsData[i] = this.createTransformElement(arr[i], container);
        }

        currentTransform = itemsData[i].transform;
        ownTransformers.push(currentTransform);
      } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
        if (!processedPos) {
          itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
        }

        this.setElementStyles(itemsData[i]);
      } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'ms' || arr[i].ty === 'pb' || arr[i].ty === 'zz' || arr[i].ty === 'op') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          modifier.init(this, arr[i]);
          itemsData[i] = modifier;
          this.shapeModifiers.push(modifier);
        } else {
          modifier = itemsData[i];
          modifier.closed = false;
        }

        ownModifiers.push(modifier);
      } else if (arr[i].ty === 'rp') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          itemsData[i] = modifier;
          modifier.init(this, arr, i, itemsData);
          this.shapeModifiers.push(modifier);
          render = false;
        } else {
          modifier = itemsData[i];
          modifier.closed = true;
        }

        ownModifiers.push(modifier);
      }

      this.addProcessedElement(arr[i], i + 1);
    }

    len = ownStyles.length;

    for (i = 0; i < len; i += 1) {
      ownStyles[i].closed = true;
    }

    len = ownModifiers.length;

    for (i = 0; i < len; i += 1) {
      ownModifiers[i].closed = true;
    }
  };

  SVGShapeElement.prototype.renderInnerContent = function () {
    this.renderModifiers();
    var i;
    var len = this.stylesList.length;

    for (i = 0; i < len; i += 1) {
      this.stylesList[i].reset();
    }

    this.renderShape();

    for (i = 0; i < len; i += 1) {
      if (this.stylesList[i]._mdf || this._isFirstFrame) {
        if (this.stylesList[i].msElem) {
          this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d); // Adding M0 0 fixes same mask bug on all browsers

          this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
        }

        this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
      }
    }
  };

  SVGShapeElement.prototype.renderShape = function () {
    var i;
    var len = this.animatedContents.length;
    var animatedContent;

    for (i = 0; i < len; i += 1) {
      animatedContent = this.animatedContents[i];

      if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
        animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
      }
    }
  };

  SVGShapeElement.prototype.destroy = function () {
    this.destroyBaseElement();
    this.shapesData = null;
    this.itemsData = null;
  };

  function LetterProps(o, sw, sc, fc, m, p) {
    this.o = o;
    this.sw = sw;
    this.sc = sc;
    this.fc = fc;
    this.m = m;
    this.p = p;
    this._mdf = {
      o: true,
      sw: !!sw,
      sc: !!sc,
      fc: !!fc,
      m: true,
      p: true
    };
  }

  LetterProps.prototype.update = function (o, sw, sc, fc, m, p) {
    this._mdf.o = false;
    this._mdf.sw = false;
    this._mdf.sc = false;
    this._mdf.fc = false;
    this._mdf.m = false;
    this._mdf.p = false;
    var updated = false;

    if (this.o !== o) {
      this.o = o;
      this._mdf.o = true;
      updated = true;
    }

    if (this.sw !== sw) {
      this.sw = sw;
      this._mdf.sw = true;
      updated = true;
    }

    if (this.sc !== sc) {
      this.sc = sc;
      this._mdf.sc = true;
      updated = true;
    }

    if (this.fc !== fc) {
      this.fc = fc;
      this._mdf.fc = true;
      updated = true;
    }

    if (this.m !== m) {
      this.m = m;
      this._mdf.m = true;
      updated = true;
    }

    if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
      this.p = p;
      this._mdf.p = true;
      updated = true;
    }

    return updated;
  };

  function TextProperty(elem, data) {
    this._frameId = initialDefaultFrame;
    this.pv = '';
    this.v = '';
    this.kf = false;
    this._isFirstFrame = true;
    this._mdf = false;

    if (data.d && data.d.sid) {
      data.d = elem.globalData.slotManager.getProp(data.d);
    }

    this.data = data;
    this.elem = elem;
    this.comp = this.elem.comp;
    this.keysIndex = 0;
    this.canResize = false;
    this.minimumFontSize = 1;
    this.effectsSequence = [];
    this.currentData = {
      ascent: 0,
      boxWidth: this.defaultBoxWidth,
      f: '',
      fStyle: '',
      fWeight: '',
      fc: '',
      j: '',
      justifyOffset: '',
      l: [],
      lh: 0,
      lineWidths: [],
      ls: '',
      of: '',
      s: '',
      sc: '',
      sw: 0,
      t: 0,
      tr: 0,
      sz: 0,
      ps: null,
      fillColorAnim: false,
      strokeColorAnim: false,
      strokeWidthAnim: false,
      yOffset: 0,
      finalSize: 0,
      finalText: [],
      finalLineHeight: 0,
      __complete: false
    };
    this.copyData(this.currentData, this.data.d.k[0].s);

    if (!this.searchProperty()) {
      this.completeTextData(this.currentData);
    }
  }

  TextProperty.prototype.defaultBoxWidth = [0, 0];

  TextProperty.prototype.copyData = function (obj, data) {
    for (var s in data) {
      if (Object.prototype.hasOwnProperty.call(data, s)) {
        obj[s] = data[s];
      }
    }

    return obj;
  };

  TextProperty.prototype.setCurrentData = function (data) {
    if (!data.__complete) {
      this.completeTextData(data);
    }

    this.currentData = data;
    this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
    this._mdf = true;
  };

  TextProperty.prototype.searchProperty = function () {
    return this.searchKeyframes();
  };

  TextProperty.prototype.searchKeyframes = function () {
    this.kf = this.data.d.k.length > 1;

    if (this.kf) {
      this.addEffect(this.getKeyframeValue.bind(this));
    }

    return this.kf;
  };

  TextProperty.prototype.addEffect = function (effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.elem.addDynamicProperty(this);
  };

  TextProperty.prototype.getValue = function (_finalValue) {
    if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
      return;
    }

    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
    var currentValue = this.currentData;
    var currentIndex = this.keysIndex;

    if (this.lock) {
      this.setCurrentData(this.currentData);
      return;
    }

    this.lock = true;
    this._mdf = false;
    var i;
    var len = this.effectsSequence.length;
    var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;

    for (i = 0; i < len; i += 1) {
      // Checking if index changed to prevent creating a new object every time the expression updates.
      if (currentIndex !== this.keysIndex) {
        finalValue = this.effectsSequence[i](finalValue, finalValue.t);
      } else {
        finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
      }
    }

    if (currentValue !== finalValue) {
      this.setCurrentData(finalValue);
    }

    this.v = this.currentData;
    this.pv = this.v;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  };

  TextProperty.prototype.getKeyframeValue = function () {
    var textKeys = this.data.d.k;
    var frameNum = this.elem.comp.renderedFrame;
    var i = 0;
    var len = textKeys.length;

    while (i <= len - 1) {
      if (i === len - 1 || textKeys[i + 1].t > frameNum) {
        break;
      }

      i += 1;
    }

    if (this.keysIndex !== i) {
      this.keysIndex = i;
    }

    return this.data.d.k[this.keysIndex].s;
  };

  TextProperty.prototype.buildFinalText = function (text) {
    var charactersArray = [];
    var i = 0;
    var len = text.length;
    var charCode;
    var secondCharCode;
    var shouldCombine = false;
    var shouldCombineNext = false;
    var currentChars = '';

    while (i < len) {
      shouldCombine = shouldCombineNext;
      shouldCombineNext = false;
      charCode = text.charCodeAt(i);
      currentChars = text.charAt(i);

      if (FontManager.isCombinedCharacter(charCode)) {
        shouldCombine = true; // It's a potential surrogate pair (this is the High surrogate)
      } else if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        if (FontManager.isRegionalFlag(text, i)) {
          currentChars = text.substr(i, 14);
        } else {
          secondCharCode = text.charCodeAt(i + 1); // It's a surrogate pair (this is the Low surrogate)

          if (secondCharCode >= 0xDC00 && secondCharCode <= 0xDFFF) {
            if (FontManager.isModifier(charCode, secondCharCode)) {
              currentChars = text.substr(i, 2);
              shouldCombine = true;
            } else if (FontManager.isFlagEmoji(text.substr(i, 4))) {
              currentChars = text.substr(i, 4);
            } else {
              currentChars = text.substr(i, 2);
            }
          }
        }
      } else if (charCode > 0xDBFF) {
        secondCharCode = text.charCodeAt(i + 1);

        if (FontManager.isVariationSelector(charCode)) {
          shouldCombine = true;
        }
      } else if (FontManager.isZeroWidthJoiner(charCode)) {
        shouldCombine = true;
        shouldCombineNext = true;
      }

      if (shouldCombine) {
        charactersArray[charactersArray.length - 1] += currentChars;
        shouldCombine = false;
      } else {
        charactersArray.push(currentChars);
      }

      i += currentChars.length;
    }

    return charactersArray;
  };

  TextProperty.prototype.completeTextData = function (documentData) {
    documentData.__complete = true;
    var fontManager = this.elem.globalData.fontManager;
    var data = this.data;
    var letters = [];
    var i;
    var len;
    var newLineFlag;
    var index = 0;
    var val;
    var anchorGrouping = data.m.g;
    var currentSize = 0;
    var currentPos = 0;
    var currentLine = 0;
    var lineWidths = [];
    var lineWidth = 0;
    var maxLineWidth = 0;
    var j;
    var jLen;
    var fontData = fontManager.getFontByName(documentData.f);
    var charData;
    var cLength = 0;
    var fontProps = getFontProperties(fontData);
    documentData.fWeight = fontProps.weight;
    documentData.fStyle = fontProps.style;
    documentData.finalSize = documentData.s;
    documentData.finalText = this.buildFinalText(documentData.t);
    len = documentData.finalText.length;
    documentData.finalLineHeight = documentData.lh;
    var trackingOffset = documentData.tr / 1000 * documentData.finalSize;
    var charCode;

    if (documentData.sz) {
      var flag = true;
      var boxWidth = documentData.sz[0];
      var boxHeight = documentData.sz[1];
      var currentHeight;
      var finalText;

      while (flag) {
        finalText = this.buildFinalText(documentData.t);
        currentHeight = 0;
        lineWidth = 0;
        len = finalText.length;
        trackingOffset = documentData.tr / 1000 * documentData.finalSize;
        var lastSpaceIndex = -1;

        for (i = 0; i < len; i += 1) {
          charCode = finalText[i].charCodeAt(0);
          newLineFlag = false;

          if (finalText[i] === ' ') {
            lastSpaceIndex = i;
          } else if (charCode === 13 || charCode === 3) {
            lineWidth = 0;
            newLineFlag = true;
            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
          }

          if (fontManager.chars) {
            charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
            cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
          } else {
            // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
            cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
          }

          if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
            if (lastSpaceIndex === -1) {
              len += 1;
            } else {
              i = lastSpaceIndex;
            }

            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
            finalText.splice(i, lastSpaceIndex === i ? 1 : 0, '\r'); // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);

            lastSpaceIndex = -1;
            lineWidth = 0;
          } else {
            lineWidth += cLength;
            lineWidth += trackingOffset;
          }
        }

        currentHeight += fontData.ascent * documentData.finalSize / 100;

        if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
          documentData.finalSize -= 1;
          documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
        } else {
          documentData.finalText = finalText;
          len = documentData.finalText.length;
          flag = false;
        }
      }
    }

    lineWidth = -trackingOffset;
    cLength = 0;
    var uncollapsedSpaces = 0;
    var currentChar;

    for (i = 0; i < len; i += 1) {
      newLineFlag = false;
      currentChar = documentData.finalText[i];
      charCode = currentChar.charCodeAt(0);

      if (charCode === 13 || charCode === 3) {
        uncollapsedSpaces = 0;
        lineWidths.push(lineWidth);
        maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
        lineWidth = -2 * trackingOffset;
        val = '';
        newLineFlag = true;
        currentLine += 1;
      } else {
        val = currentChar;
      }

      if (fontManager.chars) {
        charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
        cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
      } else {
        // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
        // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
        cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
      } //


      if (currentChar === ' ') {
        uncollapsedSpaces += cLength + trackingOffset;
      } else {
        lineWidth += cLength + trackingOffset + uncollapsedSpaces;
        uncollapsedSpaces = 0;
      }

      letters.push({
        l: cLength,
        an: cLength,
        add: currentSize,
        n: newLineFlag,
        anIndexes: [],
        val: val,
        line: currentLine,
        animatorJustifyOffset: 0
      });

      if (anchorGrouping == 2) {
        // eslint-disable-line eqeqeq
        currentSize += cLength;

        if (val === '' || val === ' ' || i === len - 1) {
          if (val === '' || val === ' ') {
            currentSize -= cLength;
          }

          while (currentPos <= i) {
            letters[currentPos].an = currentSize;
            letters[currentPos].ind = index;
            letters[currentPos].extra = cLength;
            currentPos += 1;
          }

          index += 1;
          currentSize = 0;
        }
      } else if (anchorGrouping == 3) {
        // eslint-disable-line eqeqeq
        currentSize += cLength;

        if (val === '' || i === len - 1) {
          if (val === '') {
            currentSize -= cLength;
          }

          while (currentPos <= i) {
            letters[currentPos].an = currentSize;
            letters[currentPos].ind = index;
            letters[currentPos].extra = cLength;
            currentPos += 1;
          }

          currentSize = 0;
          index += 1;
        }
      } else {
        letters[index].ind = index;
        letters[index].extra = 0;
        index += 1;
      }
    }

    documentData.l = letters;
    maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
    lineWidths.push(lineWidth);

    if (documentData.sz) {
      documentData.boxWidth = documentData.sz[0];
      documentData.justifyOffset = 0;
    } else {
      documentData.boxWidth = maxLineWidth;

      switch (documentData.j) {
        case 1:
          documentData.justifyOffset = -documentData.boxWidth;
          break;

        case 2:
          documentData.justifyOffset = -documentData.boxWidth / 2;
          break;

        default:
          documentData.justifyOffset = 0;
      }
    }

    documentData.lineWidths = lineWidths;
    var animators = data.a;
    var animatorData;
    var letterData;
    jLen = animators.length;
    var based;
    var ind;
    var indexes = [];

    for (j = 0; j < jLen; j += 1) {
      animatorData = animators[j];

      if (animatorData.a.sc) {
        documentData.strokeColorAnim = true;
      }

      if (animatorData.a.sw) {
        documentData.strokeWidthAnim = true;
      }

      if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
        documentData.fillColorAnim = true;
      }

      ind = 0;
      based = animatorData.s.b;

      for (i = 0; i < len; i += 1) {
        letterData = letters[i];
        letterData.anIndexes[j] = ind;

        if (based == 1 && letterData.val !== '' || based == 2 && letterData.val !== '' && letterData.val !== ' ' || based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1) || based == 4 && (letterData.n || i == len - 1)) {
          // eslint-disable-line eqeqeq
          if (animatorData.s.rn === 1) {
            indexes.push(ind);
          }

          ind += 1;
        }
      }

      data.a[j].s.totalChars = ind;
      var currentInd = -1;
      var newInd;

      if (animatorData.s.rn === 1) {
        for (i = 0; i < len; i += 1) {
          letterData = letters[i];

          if (currentInd != letterData.anIndexes[j]) {
            // eslint-disable-line eqeqeq
            currentInd = letterData.anIndexes[j];
            newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
          }

          letterData.anIndexes[j] = newInd;
        }
      }
    }

    documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
    documentData.ls = documentData.ls || 0;
    documentData.ascent = fontData.ascent * documentData.finalSize / 100;
  };

  TextProperty.prototype.updateDocumentData = function (newData, index) {
    index = index === undefined ? this.keysIndex : index;
    var dData = this.copyData({}, this.data.d.k[index].s);
    dData = this.copyData(dData, newData);
    this.data.d.k[index].s = dData;
    this.recalculate(index);
    this.setCurrentData(dData);
    this.elem.addDynamicProperty(this);
  };

  TextProperty.prototype.recalculate = function (index) {
    var dData = this.data.d.k[index].s;
    dData.__complete = false;
    this.keysIndex = 0;
    this._isFirstFrame = true;
    this.getValue(dData);
  };

  TextProperty.prototype.canResizeFont = function (_canResize) {
    this.canResize = _canResize;
    this.recalculate(this.keysIndex);
    this.elem.addDynamicProperty(this);
  };

  TextProperty.prototype.setMinimumFontSize = function (_fontValue) {
    this.minimumFontSize = Math.floor(_fontValue) || 1;
    this.recalculate(this.keysIndex);
    this.elem.addDynamicProperty(this);
  };

  var TextSelectorProp = function () {
    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;

    function TextSelectorPropFactory(elem, data) {
      this._currentTextLength = -1;
      this.k = false;
      this.data = data;
      this.elem = elem;
      this.comp = elem.comp;
      this.finalS = 0;
      this.finalE = 0;
      this.initDynamicPropertyContainer(elem);
      this.s = PropertyFactory.getProp(elem, data.s || {
        k: 0
      }, 0, 0, this);

      if ('e' in data) {
        this.e = PropertyFactory.getProp(elem, data.e, 0, 0, this);
      } else {
        this.e = {
          v: 100
        };
      }

      this.o = PropertyFactory.getProp(elem, data.o || {
        k: 0
      }, 0, 0, this);
      this.xe = PropertyFactory.getProp(elem, data.xe || {
        k: 0
      }, 0, 0, this);
      this.ne = PropertyFactory.getProp(elem, data.ne || {
        k: 0
      }, 0, 0, this);
      this.sm = PropertyFactory.getProp(elem, data.sm || {
        k: 100
      }, 0, 0, this);
      this.a = PropertyFactory.getProp(elem, data.a, 0, 0.01, this);

      if (!this.dynamicProperties.length) {
        this.getValue();
      }
    }

    TextSelectorPropFactory.prototype = {
      getMult: function getMult(ind) {
        if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
          this.getValue();
        }

        var x1 = 0;
        var y1 = 0;
        var x2 = 1;
        var y2 = 1;

        if (this.ne.v > 0) {
          x1 = this.ne.v / 100.0;
        } else {
          y1 = -this.ne.v / 100.0;
        }

        if (this.xe.v > 0) {
          x2 = 1.0 - this.xe.v / 100.0;
        } else {
          y2 = 1.0 + this.xe.v / 100.0;
        }

        var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;
        var mult = 0;
        var s = this.finalS;
        var e = this.finalE;
        var type = this.data.sh;

        if (type === 2) {
          if (e === s) {
            mult = ind >= e ? 1 : 0;
          } else {
            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
          }

          mult = easer(mult);
        } else if (type === 3) {
          if (e === s) {
            mult = ind >= e ? 0 : 1;
          } else {
            mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
          }

          mult = easer(mult);
        } else if (type === 4) {
          if (e === s) {
            mult = 0;
          } else {
            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));

            if (mult < 0.5) {
              mult *= 2;
            } else {
              mult = 1 - 2 * (mult - 0.5);
            }
          }

          mult = easer(mult);
        } else if (type === 5) {
          if (e === s) {
            mult = 0;
          } else {
            var tot = e - s;
            /* ind += 0.5;
                      mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */

            ind = min(max(0, ind + 0.5 - s), e - s);
            var x = -tot / 2 + ind;
            var a = tot / 2;
            mult = Math.sqrt(1 - x * x / (a * a));
          }

          mult = easer(mult);
        } else if (type === 6) {
          if (e === s) {
            mult = 0;
          } else {
            ind = min(max(0, ind + 0.5 - s), e - s);
            mult = (1 + Math.cos(Math.PI + Math.PI * 2 * ind / (e - s))) / 2; // eslint-disable-line
          }

          mult = easer(mult);
        } else {
          if (ind >= floor(s)) {
            if (ind - s < 0) {
              mult = max(0, min(min(e, 1) - (s - ind), 1));
            } else {
              mult = max(0, min(e - ind, 1));
            }
          }

          mult = easer(mult);
        } // Smoothness implementation.
        // The smoothness represents a reduced range of the original [0; 1] range.
        // if smoothness is 25%, the new range will be [0.375; 0.625]
        // Steps are:
        // - find the lower value of the new range (threshold)
        // - if multiplier is smaller than that value, floor it to 0
        // - if it is larger,
        //     - subtract the threshold
        //     - divide it by the smoothness (this will return the range to [0; 1])
        // Note: If it doesn't work on some scenarios, consider applying it before the easer.


        if (this.sm.v !== 100) {
          var smoothness = this.sm.v * 0.01;

          if (smoothness === 0) {
            smoothness = 0.00000001;
          }

          var threshold = 0.5 - smoothness * 0.5;

          if (mult < threshold) {
            mult = 0;
          } else {
            mult = (mult - threshold) / smoothness;

            if (mult > 1) {
              mult = 1;
            }
          }
        }

        return mult * this.a.v;
      },
      getValue: function getValue(newCharsFlag) {
        this.iterateDynamicProperties();
        this._mdf = newCharsFlag || this._mdf;
        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;

        if (newCharsFlag && this.data.r === 2) {
          this.e.v = this._currentTextLength;
        }

        var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
        var o = this.o.v / divisor;
        var s = this.s.v / divisor + o;
        var e = this.e.v / divisor + o;

        if (s > e) {
          var _s = s;
          s = e;
          e = _s;
        }

        this.finalS = s;
        this.finalE = e;
      }
    };
    extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);

    function getTextSelectorProp(elem, data, arr) {
      return new TextSelectorPropFactory(elem, data, arr);
    }

    return {
      getTextSelectorProp: getTextSelectorProp
    };
  }();

  function TextAnimatorDataProperty(elem, animatorProps, container) {
    var defaultData = {
      propType: false
    };
    var getProp = PropertyFactory.getProp;
    var textAnimatorAnimatables = animatorProps.a;
    this.a = {
      r: textAnimatorAnimatables.r ? getProp(elem, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
      rx: textAnimatorAnimatables.rx ? getProp(elem, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
      ry: textAnimatorAnimatables.ry ? getProp(elem, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
      sk: textAnimatorAnimatables.sk ? getProp(elem, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
      sa: textAnimatorAnimatables.sa ? getProp(elem, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
      s: textAnimatorAnimatables.s ? getProp(elem, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
      a: textAnimatorAnimatables.a ? getProp(elem, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
      o: textAnimatorAnimatables.o ? getProp(elem, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
      p: textAnimatorAnimatables.p ? getProp(elem, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
      sw: textAnimatorAnimatables.sw ? getProp(elem, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
      sc: textAnimatorAnimatables.sc ? getProp(elem, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
      fc: textAnimatorAnimatables.fc ? getProp(elem, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
      fh: textAnimatorAnimatables.fh ? getProp(elem, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
      fs: textAnimatorAnimatables.fs ? getProp(elem, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
      fb: textAnimatorAnimatables.fb ? getProp(elem, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
      t: textAnimatorAnimatables.t ? getProp(elem, textAnimatorAnimatables.t, 0, 0, container) : defaultData
    };
    this.s = TextSelectorProp.getTextSelectorProp(elem, animatorProps.s, container);
    this.s.t = animatorProps.s.t;
  }

  function TextAnimatorProperty(textData, renderType, elem) {
    this._isFirstFrame = true;
    this._hasMaskedPath = false;
    this._frameId = -1;
    this._textData = textData;
    this._renderType = renderType;
    this._elem = elem;
    this._animatorsData = createSizedArray(this._textData.a.length);
    this._pathData = {};
    this._moreOptions = {
      alignment: {}
    };
    this.renderedLetters = [];
    this.lettersChangedFlag = false;
    this.initDynamicPropertyContainer(elem);
  }

  TextAnimatorProperty.prototype.searchProperties = function () {
    var i;
    var len = this._textData.a.length;
    var animatorProps;
    var getProp = PropertyFactory.getProp;

    for (i = 0; i < len; i += 1) {
      animatorProps = this._textData.a[i];
      this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
    }

    if (this._textData.p && 'm' in this._textData.p) {
      this._pathData = {
        a: getProp(this._elem, this._textData.p.a, 0, 0, this),
        f: getProp(this._elem, this._textData.p.f, 0, 0, this),
        l: getProp(this._elem, this._textData.p.l, 0, 0, this),
        r: getProp(this._elem, this._textData.p.r, 0, 0, this),
        p: getProp(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      };
      this._hasMaskedPath = true;
    } else {
      this._hasMaskedPath = false;
    }

    this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
  };

  TextAnimatorProperty.prototype.getMeasures = function (documentData, lettersChangedFlag) {
    this.lettersChangedFlag = lettersChangedFlag;

    if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
      return;
    }

    this._isFirstFrame = false;
    var alignment = this._moreOptions.alignment.v;
    var animators = this._animatorsData;
    var textData = this._textData;
    var matrixHelper = this.mHelper;
    var renderType = this._renderType;
    var renderedLettersCount = this.renderedLetters.length;
    var xPos;
    var yPos;
    var i;
    var len;
    var letters = documentData.l;
    var pathInfo;
    var currentLength;
    var currentPoint;
    var segmentLength;
    var flag;
    var pointInd;
    var segmentInd;
    var prevPoint;
    var points;
    var segments;
    var partialLength;
    var totalLength;
    var perc;
    var tanAngle;
    var mask;

    if (this._hasMaskedPath) {
      mask = this._pathData.m;

      if (!this._pathData.n || this._pathData._mdf) {
        var paths = mask.v;

        if (this._pathData.r.v) {
          paths = paths.reverse();
        } // TODO: release bezier data cached from previous pathInfo: this._pathData.pi


        pathInfo = {
          tLength: 0,
          segments: []
        };
        len = paths._length - 1;
        var bezierData;
        totalLength = 0;

        for (i = 0; i < len; i += 1) {
          bezierData = bez.buildBezierData(paths.v[i], paths.v[i + 1], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
          pathInfo.tLength += bezierData.segmentLength;
          pathInfo.segments.push(bezierData);
          totalLength += bezierData.segmentLength;
        }

        i = len;

        if (mask.v.c) {
          bezierData = bez.buildBezierData(paths.v[i], paths.v[0], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
          pathInfo.tLength += bezierData.segmentLength;
          pathInfo.segments.push(bezierData);
          totalLength += bezierData.segmentLength;
        }

        this._pathData.pi = pathInfo;
      }

      pathInfo = this._pathData.pi;
      currentLength = this._pathData.f.v;
      segmentInd = 0;
      pointInd = 1;
      segmentLength = 0;
      flag = true;
      segments = pathInfo.segments;

      if (currentLength < 0 && mask.v.c) {
        if (pathInfo.tLength < Math.abs(currentLength)) {
          currentLength = -Math.abs(currentLength) % pathInfo.tLength;
        }

        segmentInd = segments.length - 1;
        points = segments[segmentInd].points;
        pointInd = points.length - 1;

        while (currentLength < 0) {
          currentLength += points[pointInd].partialLength;
          pointInd -= 1;

          if (pointInd < 0) {
            segmentInd -= 1;
            points = segments[segmentInd].points;
            pointInd = points.length - 1;
          }
        }
      }

      points = segments[segmentInd].points;
      prevPoint = points[pointInd - 1];
      currentPoint = points[pointInd];
      partialLength = currentPoint.partialLength;
    }

    len = letters.length;
    xPos = 0;
    yPos = 0;
    var yOff = documentData.finalSize * 1.2 * 0.714;
    var firstLine = true;
    var animatorProps;
    var animatorSelector;
    var j;
    var jLen;
    var letterValue;
    jLen = animators.length;
    var mult;
    var ind = -1;
    var offf;
    var xPathPos;
    var yPathPos;
    var initPathPos = currentLength;
    var initSegmentInd = segmentInd;
    var initPointInd = pointInd;
    var currentLine = -1;
    var elemOpacity;
    var sc;
    var sw;
    var fc;
    var k;
    var letterSw;
    var letterSc;
    var letterFc;
    var letterM = '';
    var letterP = this.defaultPropsArray;
    var letterO; //

    if (documentData.j === 2 || documentData.j === 1) {
      var animatorJustifyOffset = 0;
      var animatorFirstCharOffset = 0;
      var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
      var lastIndex = 0;
      var isNewLine = true;

      for (i = 0; i < len; i += 1) {
        if (letters[i].n) {
          if (animatorJustifyOffset) {
            animatorJustifyOffset += animatorFirstCharOffset;
          }

          while (lastIndex < i) {
            letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
            lastIndex += 1;
          }

          animatorJustifyOffset = 0;
          isNewLine = true;
        } else {
          for (j = 0; j < jLen; j += 1) {
            animatorProps = animators[j].a;

            if (animatorProps.t.propType) {
              if (isNewLine && documentData.j === 2) {
                animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
              }

              animatorSelector = animators[j].s;
              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

              if (mult.length) {
                animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
              } else {
                animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
              }
            }
          }

          isNewLine = false;
        }
      }

      if (animatorJustifyOffset) {
        animatorJustifyOffset += animatorFirstCharOffset;
      }

      while (lastIndex < i) {
        letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
        lastIndex += 1;
      }
    } //


    for (i = 0; i < len; i += 1) {
      matrixHelper.reset();
      elemOpacity = 1;

      if (letters[i].n) {
        xPos = 0;
        yPos += documentData.yOffset;
        yPos += firstLine ? 1 : 0;
        currentLength = initPathPos;
        firstLine = false;

        if (this._hasMaskedPath) {
          segmentInd = initSegmentInd;
          pointInd = initPointInd;
          points = segments[segmentInd].points;
          prevPoint = points[pointInd - 1];
          currentPoint = points[pointInd];
          partialLength = currentPoint.partialLength;
          segmentLength = 0;
        }

        letterM = '';
        letterFc = '';
        letterSw = '';
        letterO = '';
        letterP = this.defaultPropsArray;
      } else {
        if (this._hasMaskedPath) {
          if (currentLine !== letters[i].line) {
            switch (documentData.j) {
              case 1:
                currentLength += totalLength - documentData.lineWidths[letters[i].line];
                break;

              case 2:
                currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
                break;

              default:
                break;
            }

            currentLine = letters[i].line;
          }

          if (ind !== letters[i].ind) {
            if (letters[ind]) {
              currentLength += letters[ind].extra;
            }

            currentLength += letters[i].an / 2;
            ind = letters[i].ind;
          }

          currentLength += alignment[0] * letters[i].an * 0.005;
          var animatorOffset = 0;

          for (j = 0; j < jLen; j += 1) {
            animatorProps = animators[j].a;

            if (animatorProps.p.propType) {
              animatorSelector = animators[j].s;
              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

              if (mult.length) {
                animatorOffset += animatorProps.p.v[0] * mult[0];
              } else {
                animatorOffset += animatorProps.p.v[0] * mult;
              }
            }

            if (animatorProps.a.propType) {
              animatorSelector = animators[j].s;
              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

              if (mult.length) {
                animatorOffset += animatorProps.a.v[0] * mult[0];
              } else {
                animatorOffset += animatorProps.a.v[0] * mult;
              }
            }
          }

          flag = true; // Force alignment only works with a single line for now

          if (this._pathData.a.v) {
            currentLength = letters[0].an * 0.5 + (totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind / (len - 1);
            currentLength += this._pathData.f.v;
          }

          while (flag) {
            if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
              perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
              xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
              yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
              matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -(alignment[1] * yOff) * 0.01);
              flag = false;
            } else if (points) {
              segmentLength += currentPoint.partialLength;
              pointInd += 1;

              if (pointInd >= points.length) {
                pointInd = 0;
                segmentInd += 1;

                if (!segments[segmentInd]) {
                  if (mask.v.c) {
                    pointInd = 0;
                    segmentInd = 0;
                    points = segments[segmentInd].points;
                  } else {
                    segmentLength -= currentPoint.partialLength;
                    points = null;
                  }
                } else {
                  points = segments[segmentInd].points;
                }
              }

              if (points) {
                prevPoint = currentPoint;
                currentPoint = points[pointInd];
                partialLength = currentPoint.partialLength;
              }
            }
          }

          offf = letters[i].an / 2 - letters[i].add;
          matrixHelper.translate(-offf, 0, 0);
        } else {
          offf = letters[i].an / 2 - letters[i].add;
          matrixHelper.translate(-offf, 0, 0); // Grouping alignment

          matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -alignment[1] * yOff * 0.01, 0);
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.t.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars); // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"

            if (xPos !== 0 || documentData.j !== 0) {
              if (this._hasMaskedPath) {
                if (mult.length) {
                  currentLength += animatorProps.t.v * mult[0];
                } else {
                  currentLength += animatorProps.t.v * mult;
                }
              } else if (mult.length) {
                xPos += animatorProps.t.v * mult[0];
              } else {
                xPos += animatorProps.t.v * mult;
              }
            }
          }
        }

        if (documentData.strokeWidthAnim) {
          sw = documentData.sw || 0;
        }

        if (documentData.strokeColorAnim) {
          if (documentData.sc) {
            sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
          } else {
            sc = [0, 0, 0];
          }
        }

        if (documentData.fillColorAnim && documentData.fc) {
          fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.a.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

            if (mult.length) {
              matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
            } else {
              matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
            }
          }
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.s.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

            if (mult.length) {
              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult[0], 1 + (animatorProps.s.v[1] - 1) * mult[1], 1);
            } else {
              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult, 1 + (animatorProps.s.v[1] - 1) * mult, 1);
            }
          }
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

          if (animatorProps.sk.propType) {
            if (mult.length) {
              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
            } else {
              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
            }
          }

          if (animatorProps.r.propType) {
            if (mult.length) {
              matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
            } else {
              matrixHelper.rotateZ(-animatorProps.r.v * mult);
            }
          }

          if (animatorProps.ry.propType) {
            if (mult.length) {
              matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
            } else {
              matrixHelper.rotateY(animatorProps.ry.v * mult);
            }
          }

          if (animatorProps.rx.propType) {
            if (mult.length) {
              matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
            } else {
              matrixHelper.rotateX(animatorProps.rx.v * mult);
            }
          }

          if (animatorProps.o.propType) {
            if (mult.length) {
              elemOpacity += (animatorProps.o.v * mult[0] - elemOpacity) * mult[0];
            } else {
              elemOpacity += (animatorProps.o.v * mult - elemOpacity) * mult;
            }
          }

          if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
            if (mult.length) {
              sw += animatorProps.sw.v * mult[0];
            } else {
              sw += animatorProps.sw.v * mult;
            }
          }

          if (documentData.strokeColorAnim && animatorProps.sc.propType) {
            for (k = 0; k < 3; k += 1) {
              if (mult.length) {
                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
              } else {
                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
              }
            }
          }

          if (documentData.fillColorAnim && documentData.fc) {
            if (animatorProps.fc.propType) {
              for (k = 0; k < 3; k += 1) {
                if (mult.length) {
                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
                } else {
                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
                }
              }
            }

            if (animatorProps.fh.propType) {
              if (mult.length) {
                fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
              } else {
                fc = addHueToRGB(fc, animatorProps.fh.v * mult);
              }
            }

            if (animatorProps.fs.propType) {
              if (mult.length) {
                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
              } else {
                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
              }
            }

            if (animatorProps.fb.propType) {
              if (mult.length) {
                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
              } else {
                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
              }
            }
          }
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.p.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

            if (this._hasMaskedPath) {
              if (mult.length) {
                matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
              } else {
                matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
              }
            } else if (mult.length) {
              matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
            } else {
              matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
            }
          }
        }

        if (documentData.strokeWidthAnim) {
          letterSw = sw < 0 ? 0 : sw;
        }

        if (documentData.strokeColorAnim) {
          letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')';
        }

        if (documentData.fillColorAnim && documentData.fc) {
          letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')';
        }

        if (this._hasMaskedPath) {
          matrixHelper.translate(0, -documentData.ls);
          matrixHelper.translate(0, alignment[1] * yOff * 0.01 + yPos, 0);

          if (this._pathData.p.v) {
            tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
            var rot = Math.atan(tanAngle) * 180 / Math.PI;

            if (currentPoint.point[0] < prevPoint.point[0]) {
              rot += 180;
            }

            matrixHelper.rotate(-rot * Math.PI / 180);
          }

          matrixHelper.translate(xPathPos, yPathPos, 0);
          currentLength -= alignment[0] * letters[i].an * 0.005;

          if (letters[i + 1] && ind !== letters[i + 1].ind) {
            currentLength += letters[i].an / 2;
            currentLength += documentData.tr * 0.001 * documentData.finalSize;
          }
        } else {
          matrixHelper.translate(xPos, yPos, 0);

          if (documentData.ps) {
            // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
            matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
          }

          switch (documentData.j) {
            case 1:
              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
              break;

            case 2:
              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
              break;

            default:
              break;
          }

          matrixHelper.translate(0, -documentData.ls);
          matrixHelper.translate(offf, 0, 0);
          matrixHelper.translate(alignment[0] * letters[i].an * 0.005, alignment[1] * yOff * 0.01, 0);
          xPos += letters[i].l + documentData.tr * 0.001 * documentData.finalSize;
        }

        if (renderType === 'html') {
          letterM = matrixHelper.toCSS();
        } else if (renderType === 'svg') {
          letterM = matrixHelper.to2dCSS();
        } else {
          letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
        }

        letterO = elemOpacity;
      }

      if (renderedLettersCount <= i) {
        letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
        this.renderedLetters.push(letterValue);
        renderedLettersCount += 1;
        this.lettersChangedFlag = true;
      } else {
        letterValue = this.renderedLetters[i];
        this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
      }
    }
  };

  TextAnimatorProperty.prototype.getValue = function () {
    if (this._elem.globalData.frameId === this._frameId) {
      return;
    }

    this._frameId = this._elem.globalData.frameId;
    this.iterateDynamicProperties();
  };

  TextAnimatorProperty.prototype.mHelper = new Matrix();
  TextAnimatorProperty.prototype.defaultPropsArray = [];
  extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

  function ITextElement() {}

  ITextElement.prototype.initElement = function (data, globalData, comp) {
    this.lettersChangedFlag = true;
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
    this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
    this.initRenderable();
    this.initRendererElement();
    this.createContainerElements();
    this.createRenderableComponents();
    this.createContent();
    this.hide();
    this.textAnimator.searchProperties(this.dynamicProperties);
  };

  ITextElement.prototype.prepareFrame = function (num) {
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);
  };

  ITextElement.prototype.createPathShape = function (matrixHelper, shapes) {
    var j;
    var jLen = shapes.length;
    var pathNodes;
    var shapeStr = '';

    for (j = 0; j < jLen; j += 1) {
      if (shapes[j].ty === 'sh') {
        pathNodes = shapes[j].ks.k;
        shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
      }
    }

    return shapeStr;
  };

  ITextElement.prototype.updateDocumentData = function (newData, index) {
    this.textProperty.updateDocumentData(newData, index);
  };

  ITextElement.prototype.canResizeFont = function (_canResize) {
    this.textProperty.canResizeFont(_canResize);
  };

  ITextElement.prototype.setMinimumFontSize = function (_fontSize) {
    this.textProperty.setMinimumFontSize(_fontSize);
  };

  ITextElement.prototype.applyTextPropertiesToMatrix = function (documentData, matrixHelper, lineNumber, xPos, yPos) {
    if (documentData.ps) {
      matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
    }

    matrixHelper.translate(0, -documentData.ls, 0);

    switch (documentData.j) {
      case 1:
        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
        break;

      case 2:
        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
        break;

      default:
        break;
    }

    matrixHelper.translate(xPos, yPos, 0);
  };

  ITextElement.prototype.buildColor = function (colorData) {
    return 'rgb(' + Math.round(colorData[0] * 255) + ',' + Math.round(colorData[1] * 255) + ',' + Math.round(colorData[2] * 255) + ')';
  };

  ITextElement.prototype.emptyProp = new LetterProps();

  ITextElement.prototype.destroy = function () {};

  ITextElement.prototype.validateText = function () {
    if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
      this.buildNewText();
      this.textProperty._isFirstFrame = false;
      this.textProperty._mdf = false;
    }
  };

  var emptyShapeData = {
    shapes: []
  };

  function SVGTextLottieElement(data, globalData, comp) {
    this.textSpans = [];
    this.renderType = 'svg';
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);

  SVGTextLottieElement.prototype.createContent = function () {
    if (this.data.singleShape && !this.globalData.fontManager.chars) {
      this.textContainer = createNS('text');
    }
  };

  SVGTextLottieElement.prototype.buildTextContents = function (textArray) {
    var i = 0;
    var len = textArray.length;
    var textContents = [];
    var currentTextContent = '';

    while (i < len) {
      if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
        textContents.push(currentTextContent);
        currentTextContent = '';
      } else {
        currentTextContent += textArray[i];
      }

      i += 1;
    }

    textContents.push(currentTextContent);
    return textContents;
  };

  SVGTextLottieElement.prototype.buildShapeData = function (data, scale) {
    // data should probably be cloned to apply scale separately to each instance of a text on different layers
    // but since text internal content gets only rendered once and then it's never rerendered,
    // it's probably safe not to clone data and reuse always the same instance even if the object is mutated.
    // Avoiding cloning is preferred since cloning each character shape data is expensive
    if (data.shapes && data.shapes.length) {
      var shape = data.shapes[0];

      if (shape.it) {
        var shapeItem = shape.it[shape.it.length - 1];

        if (shapeItem.s) {
          shapeItem.s.k[0] = scale;
          shapeItem.s.k[1] = scale;
        }
      }
    }

    return data;
  };

  SVGTextLottieElement.prototype.buildNewText = function () {
    this.addDynamicProperty(this);
    var i;
    var len;
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);

    if (documentData.fc) {
      this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
    } else {
      this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
    }

    if (documentData.sc) {
      this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
      this.layerElement.setAttribute('stroke-width', documentData.sw);
    }

    this.layerElement.setAttribute('font-size', documentData.finalSize);
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);

    if (fontData.fClass) {
      this.layerElement.setAttribute('class', fontData.fClass);
    } else {
      this.layerElement.setAttribute('font-family', fontData.fFamily);
      var fWeight = documentData.fWeight;
      var fStyle = documentData.fStyle;
      this.layerElement.setAttribute('font-style', fStyle);
      this.layerElement.setAttribute('font-weight', fWeight);
    }

    this.layerElement.setAttribute('aria-label', documentData.t);
    var letters = documentData.l || [];
    var usesGlyphs = !!this.globalData.fontManager.chars;
    len = letters.length;
    var tSpan;
    var matrixHelper = this.mHelper;
    var shapeStr = '';
    var singleShape = this.data.singleShape;
    var xPos = 0;
    var yPos = 0;
    var firstLine = true;
    var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;

    if (singleShape && !usesGlyphs && !documentData.sz) {
      var tElement = this.textContainer;
      var justify = 'start';

      switch (documentData.j) {
        case 1:
          justify = 'end';
          break;

        case 2:
          justify = 'middle';
          break;

        default:
          justify = 'start';
          break;
      }

      tElement.setAttribute('text-anchor', justify);
      tElement.setAttribute('letter-spacing', trackingOffset);
      var textContent = this.buildTextContents(documentData.finalText);
      len = textContent.length;
      yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;

      for (i = 0; i < len; i += 1) {
        tSpan = this.textSpans[i].span || createNS('tspan');
        tSpan.textContent = textContent[i];
        tSpan.setAttribute('x', 0);
        tSpan.setAttribute('y', yPos);
        tSpan.style.display = 'inherit';
        tElement.appendChild(tSpan);

        if (!this.textSpans[i]) {
          this.textSpans[i] = {
            span: null,
            glyph: null
          };
        }

        this.textSpans[i].span = tSpan;
        yPos += documentData.finalLineHeight;
      }

      this.layerElement.appendChild(tElement);
    } else {
      var cachedSpansLength = this.textSpans.length;
      var charData;

      for (i = 0; i < len; i += 1) {
        if (!this.textSpans[i]) {
          this.textSpans[i] = {
            span: null,
            childSpan: null,
            glyph: null
          };
        }

        if (!usesGlyphs || !singleShape || i === 0) {
          tSpan = cachedSpansLength > i ? this.textSpans[i].span : createNS(usesGlyphs ? 'g' : 'text');

          if (cachedSpansLength <= i) {
            tSpan.setAttribute('stroke-linecap', 'butt');
            tSpan.setAttribute('stroke-linejoin', 'round');
            tSpan.setAttribute('stroke-miterlimit', '4');
            this.textSpans[i].span = tSpan;

            if (usesGlyphs) {
              var childSpan = createNS('g');
              tSpan.appendChild(childSpan);
              this.textSpans[i].childSpan = childSpan;
            }

            this.textSpans[i].span = tSpan;
            this.layerElement.appendChild(tSpan);
          }

          tSpan.style.display = 'inherit';
        }

        matrixHelper.reset();

        if (singleShape) {
          if (letters[i].n) {
            xPos = -trackingOffset;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            firstLine = false;
          }

          this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
          xPos += letters[i].l || 0; // xPos += letters[i].val === ' ' ? 0 : trackingOffset;

          xPos += trackingOffset;
        }

        if (usesGlyphs) {
          charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
          var glyphElement; // t === 1 means the character has been replaced with an animated shaped

          if (charData.t === 1) {
            glyphElement = new SVGCompElement(charData.data, this.globalData, this);
          } else {
            var data = emptyShapeData;

            if (charData.data && charData.data.shapes) {
              data = this.buildShapeData(charData.data, documentData.finalSize);
            }

            glyphElement = new SVGShapeElement(data, this.globalData, this);
          }

          if (this.textSpans[i].glyph) {
            var glyph = this.textSpans[i].glyph;
            this.textSpans[i].childSpan.removeChild(glyph.layerElement);
            glyph.destroy();
          }

          this.textSpans[i].glyph = glyphElement;
          glyphElement._debug = true;
          glyphElement.prepareFrame(0);
          glyphElement.renderFrame();
          this.textSpans[i].childSpan.appendChild(glyphElement.layerElement); // when using animated shapes, the layer will be scaled instead of replacing the internal scale
          // this might have issues with strokes and might need a different solution

          if (charData.t === 1) {
            this.textSpans[i].childSpan.setAttribute('transform', 'scale(' + documentData.finalSize / 100 + ',' + documentData.finalSize / 100 + ')');
          }
        } else {
          if (singleShape) {
            tSpan.setAttribute('transform', 'translate(' + matrixHelper.props[12] + ',' + matrixHelper.props[13] + ')');
          }

          tSpan.textContent = letters[i].val;
          tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
        } //

      }

      if (singleShape && tSpan) {
        tSpan.setAttribute('d', shapeStr);
      }
    }

    while (i < this.textSpans.length) {
      this.textSpans[i].span.style.display = 'none';
      i += 1;
    }

    this._sizeChanged = true;
  };

  SVGTextLottieElement.prototype.sourceRectAtTime = function () {
    this.prepareFrame(this.comp.renderedFrame - this.data.st);
    this.renderInnerContent();

    if (this._sizeChanged) {
      this._sizeChanged = false;
      var textBox = this.layerElement.getBBox();
      this.bbox = {
        top: textBox.y,
        left: textBox.x,
        width: textBox.width,
        height: textBox.height
      };
    }

    return this.bbox;
  };

  SVGTextLottieElement.prototype.getValue = function () {
    var i;
    var len = this.textSpans.length;
    var glyphElement;
    this.renderedFrame = this.comp.renderedFrame;

    for (i = 0; i < len; i += 1) {
      glyphElement = this.textSpans[i].glyph;

      if (glyphElement) {
        glyphElement.prepareFrame(this.comp.renderedFrame - this.data.st);

        if (glyphElement._mdf) {
          this._mdf = true;
        }
      }
    }
  };

  SVGTextLottieElement.prototype.renderInnerContent = function () {
    this.validateText();

    if (!this.data.singleShape || this._mdf) {
      this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);

      if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        this._sizeChanged = true;
        var i;
        var len;
        var renderedLetters = this.textAnimator.renderedLetters;
        var letters = this.textProperty.currentData.l;
        len = letters.length;
        var renderedLetter;
        var textSpan;
        var glyphElement;

        for (i = 0; i < len; i += 1) {
          if (!letters[i].n) {
            renderedLetter = renderedLetters[i];
            textSpan = this.textSpans[i].span;
            glyphElement = this.textSpans[i].glyph;

            if (glyphElement) {
              glyphElement.renderFrame();
            }

            if (renderedLetter._mdf.m) {
              textSpan.setAttribute('transform', renderedLetter.m);
            }

            if (renderedLetter._mdf.o) {
              textSpan.setAttribute('opacity', renderedLetter.o);
            }

            if (renderedLetter._mdf.sw) {
              textSpan.setAttribute('stroke-width', renderedLetter.sw);
            }

            if (renderedLetter._mdf.sc) {
              textSpan.setAttribute('stroke', renderedLetter.sc);
            }

            if (renderedLetter._mdf.fc) {
              textSpan.setAttribute('fill', renderedLetter.fc);
            }
          }
        }
      }
    }
  };

  function ISolidElement(data, globalData, comp) {
    this.initElement(data, globalData, comp);
  }

  extendPrototype([IImageElement], ISolidElement);

  ISolidElement.prototype.createContent = function () {
    var rect = createNS('rect'); /// /rect.style.width = this.data.sw;
    /// /rect.style.height = this.data.sh;
    /// /rect.style.fill = this.data.sc;

    rect.setAttribute('width', this.data.sw);
    rect.setAttribute('height', this.data.sh);
    rect.setAttribute('fill', this.data.sc);
    this.layerElement.appendChild(rect);
  };

  function NullElement(data, globalData, comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initFrame();
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
  }

  NullElement.prototype.prepareFrame = function (num) {
    this.prepareProperties(num, true);
  };

  NullElement.prototype.renderFrame = function () {};

  NullElement.prototype.getBaseElement = function () {
    return null;
  };

  NullElement.prototype.destroy = function () {};

  NullElement.prototype.sourceRectAtTime = function () {};

  NullElement.prototype.hide = function () {};

  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

  function SVGRendererBase() {}

  extendPrototype([BaseRenderer], SVGRendererBase);

  SVGRendererBase.prototype.createNull = function (data) {
    return new NullElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createShape = function (data) {
    return new SVGShapeElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createText = function (data) {
    return new SVGTextLottieElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createImage = function (data) {
    return new IImageElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createSolid = function (data) {
    return new ISolidElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.configAnimation = function (animData) {
    this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

    if (this.renderConfig.viewBoxSize) {
      this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize);
    } else {
      this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h);
    }

    if (!this.renderConfig.viewBoxOnly) {
      this.svgElement.setAttribute('width', animData.w);
      this.svgElement.setAttribute('height', animData.h);
      this.svgElement.style.width = '100%';
      this.svgElement.style.height = '100%';
      this.svgElement.style.transform = 'translate3d(0,0,0)';
      this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
    }

    if (this.renderConfig.width) {
      this.svgElement.setAttribute('width', this.renderConfig.width);
    }

    if (this.renderConfig.height) {
      this.svgElement.setAttribute('height', this.renderConfig.height);
    }

    if (this.renderConfig.className) {
      this.svgElement.setAttribute('class', this.renderConfig.className);
    }

    if (this.renderConfig.id) {
      this.svgElement.setAttribute('id', this.renderConfig.id);
    }

    if (this.renderConfig.focusable !== undefined) {
      this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
    }

    this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio); // this.layerElement.style.transform = 'translate3d(0,0,0)';
    // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";

    this.animationItem.wrapper.appendChild(this.svgElement); // Mask animation

    var defs = this.globalData.defs;
    this.setupGlobalData(animData, defs);
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.data = animData;
    var maskElement = createNS('clipPath');
    var rect = createNS('rect');
    rect.setAttribute('width', animData.w);
    rect.setAttribute('height', animData.h);
    rect.setAttribute('x', 0);
    rect.setAttribute('y', 0);
    var maskId = createElementID();
    maskElement.setAttribute('id', maskId);
    maskElement.appendChild(rect);
    this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + maskId + ')');
    defs.appendChild(maskElement);
    this.layers = animData.layers;
    this.elements = createSizedArray(animData.layers.length);
  };

  SVGRendererBase.prototype.destroy = function () {
    if (this.animationItem.wrapper) {
      this.animationItem.wrapper.innerText = '';
    }

    this.layerElement = null;
    this.globalData.defs = null;
    var i;
    var len = this.layers ? this.layers.length : 0;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i] && this.elements[i].destroy) {
        this.elements[i].destroy();
      }
    }

    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
  };

  SVGRendererBase.prototype.updateContainerSize = function () {};

  SVGRendererBase.prototype.findIndexByInd = function (ind) {
    var i = 0;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      if (this.layers[i].ind === ind) {
        return i;
      }
    }

    return -1;
  };

  SVGRendererBase.prototype.buildItem = function (pos) {
    var elements = this.elements;

    if (elements[pos] || this.layers[pos].ty === 99) {
      return;
    }

    elements[pos] = true;
    var element = this.createItem(this.layers[pos]);
    elements[pos] = element;

    if (getExpressionsPlugin()) {
      if (this.layers[pos].ty === 0) {
        this.globalData.projectInterface.registerComposition(element);
      }

      element.initExpressions();
    }

    this.appendElementInPos(element, pos);

    if (this.layers[pos].tt) {
      var elementIndex = 'tp' in this.layers[pos] ? this.findIndexByInd(this.layers[pos].tp) : pos - 1;

      if (elementIndex === -1) {
        return;
      }

      if (!this.elements[elementIndex] || this.elements[elementIndex] === true) {
        this.buildItem(elementIndex);
        this.addPendingElement(element);
      } else {
        var matteElement = elements[elementIndex];
        var matteMask = matteElement.getMatte(this.layers[pos].tt);
        element.setMatte(matteMask);
      }
    }
  };

  SVGRendererBase.prototype.checkPendingElements = function () {
    while (this.pendingElements.length) {
      var element = this.pendingElements.pop();
      element.checkParenting();

      if (element.data.tt) {
        var i = 0;
        var len = this.elements.length;

        while (i < len) {
          if (this.elements[i] === element) {
            var elementIndex = 'tp' in element.data ? this.findIndexByInd(element.data.tp) : i - 1;
            var matteElement = this.elements[elementIndex];
            var matteMask = matteElement.getMatte(this.layers[i].tt);
            element.setMatte(matteMask);
            break;
          }

          i += 1;
        }
      }
    }
  };

  SVGRendererBase.prototype.renderFrame = function (num) {
    if (this.renderedFrame === num || this.destroyed) {
      return;
    }

    if (num === null) {
      num = this.renderedFrame;
    } else {
      this.renderedFrame = num;
    } // console.log('-------');
    // console.log('FRAME ',num);


    this.globalData.frameNum = num;
    this.globalData.frameId += 1;
    this.globalData.projectInterface.currentFrame = num;
    this.globalData._mdf = false;
    var i;
    var len = this.layers.length;

    if (!this.completeLayers) {
      this.checkLayers(num);
    }

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].prepareFrame(num - this.layers[i].st);
      }
    }

    if (this.globalData._mdf) {
      for (i = 0; i < len; i += 1) {
        if (this.completeLayers || this.elements[i]) {
          this.elements[i].renderFrame();
        }
      }
    }
  };

  SVGRendererBase.prototype.appendElementInPos = function (element, pos) {
    var newElement = element.getBaseElement();

    if (!newElement) {
      return;
    }

    var i = 0;
    var nextElement;

    while (i < pos) {
      if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
        nextElement = this.elements[i].getBaseElement();
      }

      i += 1;
    }

    if (nextElement) {
      this.layerElement.insertBefore(newElement, nextElement);
    } else {
      this.layerElement.appendChild(newElement);
    }
  };

  SVGRendererBase.prototype.hide = function () {
    this.layerElement.style.display = 'none';
  };

  SVGRendererBase.prototype.show = function () {
    this.layerElement.style.display = 'block';
  };

  function ICompElement() {}

  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

  ICompElement.prototype.initElement = function (data, globalData, comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initTransform(data, globalData, comp);
    this.initRenderable();
    this.initHierarchy();
    this.initRendererElement();
    this.createContainerElements();
    this.createRenderableComponents();

    if (this.data.xt || !globalData.progressiveLoad) {
      this.buildAllItems();
    }

    this.hide();
  };
  /* ICompElement.prototype.hide = function(){
      if(!this.hidden){
          this.hideElement();
          var i,len = this.elements.length;
          for( i = 0; i < len; i+=1 ){
              if(this.elements[i]){
                  this.elements[i].hide();
              }
          }
      }
  }; */


  ICompElement.prototype.prepareFrame = function (num) {
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);

    if (!this.isInRange && !this.data.xt) {
      return;
    }

    if (!this.tm._placeholder) {
      var timeRemapped = this.tm.v;

      if (timeRemapped === this.data.op) {
        timeRemapped = this.data.op - 1;
      }

      this.renderedFrame = timeRemapped;
    } else {
      this.renderedFrame = num / this.data.sr;
    }

    var i;
    var len = this.elements.length;

    if (!this.completeLayers) {
      this.checkLayers(this.renderedFrame);
    } // This iteration needs to be backwards because of how expressions connect between each other


    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);

        if (this.elements[i]._mdf) {
          this._mdf = true;
        }
      }
    }
  };

  ICompElement.prototype.renderInnerContent = function () {
    var i;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
  };

  ICompElement.prototype.setElements = function (elems) {
    this.elements = elems;
  };

  ICompElement.prototype.getElements = function () {
    return this.elements;
  };

  ICompElement.prototype.destroyElements = function () {
    var i;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i]) {
        this.elements[i].destroy();
      }
    }
  };

  ICompElement.prototype.destroy = function () {
    this.destroyElements();
    this.destroyBaseElement();
  };

  function SVGCompElement(data, globalData, comp) {
    this.layers = data.layers;
    this.supports3d = true;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
  }

  extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement);

  SVGCompElement.prototype.createComp = function (data) {
    return new SVGCompElement(data, this.globalData, this);
  };

  function SVGRenderer(animationItem, config) {
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.svgElement = createNS('svg');
    var ariaLabel = '';

    if (config && config.title) {
      var titleElement = createNS('title');
      var titleId = createElementID();
      titleElement.setAttribute('id', titleId);
      titleElement.textContent = config.title;
      this.svgElement.appendChild(titleElement);
      ariaLabel += titleId;
    }

    if (config && config.description) {
      var descElement = createNS('desc');
      var descId = createElementID();
      descElement.setAttribute('id', descId);
      descElement.textContent = config.description;
      this.svgElement.appendChild(descElement);
      ariaLabel += ' ' + descId;
    }

    if (ariaLabel) {
      this.svgElement.setAttribute('aria-labelledby', ariaLabel);
    }

    var defs = createNS('defs');
    this.svgElement.appendChild(defs);
    var maskElement = createNS('g');
    this.svgElement.appendChild(maskElement);
    this.layerElement = maskElement;
    this.renderConfig = {
      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      contentVisibility: config && config.contentVisibility || 'visible',
      progressiveLoad: config && config.progressiveLoad || false,
      hideOnTransparent: !(config && config.hideOnTransparent === false),
      viewBoxOnly: config && config.viewBoxOnly || false,
      viewBoxSize: config && config.viewBoxSize || false,
      className: config && config.className || '',
      id: config && config.id || '',
      focusable: config && config.focusable,
      filterSize: {
        width: config && config.filterSize && config.filterSize.width || '100%',
        height: config && config.filterSize && config.filterSize.height || '100%',
        x: config && config.filterSize && config.filterSize.x || '0%',
        y: config && config.filterSize && config.filterSize.y || '0%'
      },
      width: config && config.width,
      height: config && config.height,
      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
    };
    this.globalData = {
      _mdf: false,
      frameNum: -1,
      defs: defs,
      renderConfig: this.renderConfig
    };
    this.elements = [];
    this.pendingElements = [];
    this.destroyed = false;
    this.rendererType = 'svg';
  }

  extendPrototype([SVGRendererBase], SVGRenderer);

  SVGRenderer.prototype.createComp = function (data) {
    return new SVGCompElement(data, this.globalData, this);
  };

  function ShapeTransformManager() {
    this.sequences = {};
    this.sequenceList = [];
    this.transform_key_count = 0;
  }

  ShapeTransformManager.prototype = {
    addTransformSequence: function addTransformSequence(transforms) {
      var i;
      var len = transforms.length;
      var key = '_';

      for (i = 0; i < len; i += 1) {
        key += transforms[i].transform.key + '_';
      }

      var sequence = this.sequences[key];

      if (!sequence) {
        sequence = {
          transforms: [].concat(transforms),
          finalTransform: new Matrix(),
          _mdf: false
        };
        this.sequences[key] = sequence;
        this.sequenceList.push(sequence);
      }

      return sequence;
    },
    processSequence: function processSequence(sequence, isFirstFrame) {
      var i = 0;
      var len = sequence.transforms.length;
      var _mdf = isFirstFrame;

      while (i < len && !isFirstFrame) {
        if (sequence.transforms[i].transform.mProps._mdf) {
          _mdf = true;
          break;
        }

        i += 1;
      }

      if (_mdf) {
        sequence.finalTransform.reset();

        for (i = len - 1; i >= 0; i -= 1) {
          sequence.finalTransform.multiply(sequence.transforms[i].transform.mProps.v);
        }
      }

      sequence._mdf = _mdf;
    },
    processSequences: function processSequences(isFirstFrame) {
      var i;
      var len = this.sequenceList.length;

      for (i = 0; i < len; i += 1) {
        this.processSequence(this.sequenceList[i], isFirstFrame);
      }
    },
    getNewKey: function getNewKey() {
      this.transform_key_count += 1;
      return '_' + this.transform_key_count;
    }
  };

  var lumaLoader = function lumaLoader() {
    var id = '__lottie_element_luma_buffer';
    var lumaBuffer = null;
    var lumaBufferCtx = null;
    var svg = null; // This alternate solution has a slight delay before the filter is applied, resulting in a flicker on the first frame.
    // Keeping this here for reference, and in the future, if offscreen canvas supports url filters, this can be used.
    // For now, neither of them work for offscreen canvas, so canvas workers can't support the luma track matte mask.
    // Naming it solution 2 to mark the extra comment lines.

    /*
    var svgString = [
      '<svg xmlns="http://www.w3.org/2000/svg">',
      '<filter id="' + id + '">',
      '<feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0',
      '"/>',
      '</filter>',
      '</svg>',
    ].join('');
    var blob = new Blob([svgString], { type: 'image/svg+xml' });
    var url = URL.createObjectURL(blob);
    */

    function createLumaSvgFilter() {
      var _svg = createNS('svg');

      var fil = createNS('filter');
      var matrix = createNS('feColorMatrix');
      fil.setAttribute('id', id);
      matrix.setAttribute('type', 'matrix');
      matrix.setAttribute('color-interpolation-filters', 'sRGB');
      matrix.setAttribute('values', '0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0');
      fil.appendChild(matrix);

      _svg.appendChild(fil);

      _svg.setAttribute('id', id + '_svg');

      if (featureSupport.svgLumaHidden) {
        _svg.style.display = 'none';
      }

      return _svg;
    }

    function loadLuma() {
      if (!lumaBuffer) {
        svg = createLumaSvgFilter();
        document.body.appendChild(svg);
        lumaBuffer = createTag('canvas');
        lumaBufferCtx = lumaBuffer.getContext('2d'); // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2

        lumaBufferCtx.filter = 'url(#' + id + ')';
        lumaBufferCtx.fillStyle = 'rgba(0,0,0,0)';
        lumaBufferCtx.fillRect(0, 0, 1, 1);
      }
    }

    function getLuma(canvas) {
      if (!lumaBuffer) {
        loadLuma();
      }

      lumaBuffer.width = canvas.width;
      lumaBuffer.height = canvas.height; // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2

      lumaBufferCtx.filter = 'url(#' + id + ')';
      return lumaBuffer;
    }

    return {
      load: loadLuma,
      get: getLuma
    };
  };

  function createCanvas(width, height) {
    if (featureSupport.offscreenCanvas) {
      return new OffscreenCanvas(width, height);
    }

    var canvas = createTag('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  var assetLoader = function () {
    return {
      loadLumaCanvas: lumaLoader.load,
      getLumaCanvas: lumaLoader.get,
      createCanvas: createCanvas
    };
  }();

  var registeredEffects = {};

  function CVEffects(elem) {
    var i;
    var len = elem.data.ef ? elem.data.ef.length : 0;
    this.filters = [];
    var filterManager;

    for (i = 0; i < len; i += 1) {
      filterManager = null;
      var type = elem.data.ef[i].ty;

      if (registeredEffects[type]) {
        var Effect = registeredEffects[type].effect;
        filterManager = new Effect(elem.effectsManager.effectElements[i], elem);
      }

      if (filterManager) {
        this.filters.push(filterManager);
      }
    }

    if (this.filters.length) {
      elem.addRenderableComponent(this);
    }
  }

  CVEffects.prototype.renderFrame = function (_isFirstFrame) {
    var i;
    var len = this.filters.length;

    for (i = 0; i < len; i += 1) {
      this.filters[i].renderFrame(_isFirstFrame);
    }
  };

  CVEffects.prototype.getEffects = function (type) {
    var i;
    var len = this.filters.length;
    var effects = [];

    for (i = 0; i < len; i += 1) {
      if (this.filters[i].type === type) {
        effects.push(this.filters[i]);
      }
    }

    return effects;
  };

  function registerEffect(id, effect) {
    registeredEffects[id] = {
      effect: effect
    };
  }

  function CVMaskElement(data, element) {
    this.data = data;
    this.element = element;
    this.masksProperties = this.data.masksProperties || [];
    this.viewData = createSizedArray(this.masksProperties.length);
    var i;
    var len = this.masksProperties.length;
    var hasMasks = false;

    for (i = 0; i < len; i += 1) {
      if (this.masksProperties[i].mode !== 'n') {
        hasMasks = true;
      }

      this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
    }

    this.hasMasks = hasMasks;

    if (hasMasks) {
      this.element.addRenderableComponent(this);
    }
  }

  CVMaskElement.prototype.renderFrame = function () {
    if (!this.hasMasks) {
      return;
    }

    var transform = this.element.finalTransform.mat;
    var ctx = this.element.canvasContext;
    var i;
    var len = this.masksProperties.length;
    var pt;
    var pts;
    var data;
    ctx.beginPath();

    for (i = 0; i < len; i += 1) {
      if (this.masksProperties[i].mode !== 'n') {
        if (this.masksProperties[i].inv) {
          ctx.moveTo(0, 0);
          ctx.lineTo(this.element.globalData.compSize.w, 0);
          ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
          ctx.lineTo(0, this.element.globalData.compSize.h);
          ctx.lineTo(0, 0);
        }

        data = this.viewData[i].v;
        pt = transform.applyToPointArray(data.v[0][0], data.v[0][1], 0);
        ctx.moveTo(pt[0], pt[1]);
        var j;
        var jLen = data._length;

        for (j = 1; j < jLen; j += 1) {
          pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
          ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
        }

        pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
        ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
      }
    }

    this.element.globalData.renderer.save(true);
    ctx.clip();
  };

  CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

  CVMaskElement.prototype.destroy = function () {
    this.element = null;
  };

  function CVBaseElement() {}

  var operationsMap = {
    1: 'source-in',
    2: 'source-out',
    3: 'source-in',
    4: 'source-out'
  };
  CVBaseElement.prototype = {
    createElements: function createElements() {},
    initRendererElement: function initRendererElement() {},
    createContainerElements: function createContainerElements() {
      // If the layer is masked we will use two buffers to store each different states of the drawing
      // This solution is not ideal for several reason. But unfortunately, because of the recursive
      // nature of the render tree, it's the only simple way to make sure one inner mask doesn't override an outer mask.
      // TODO: try to reduce the size of these buffers to the size of the composition contaning the layer
      // It might be challenging because the layer most likely is transformed in some way
      if (this.data.tt >= 1) {
        this.buffers = [];
        var canvasContext = this.globalData.canvasContext;
        var bufferCanvas = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
        this.buffers.push(bufferCanvas);
        var bufferCanvas2 = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
        this.buffers.push(bufferCanvas2);

        if (this.data.tt >= 3 && !document._isProxy) {
          assetLoader.loadLumaCanvas();
        }
      }

      this.canvasContext = this.globalData.canvasContext;
      this.transformCanvas = this.globalData.transformCanvas;
      this.renderableEffectsManager = new CVEffects(this);
      this.searchEffectTransforms();
    },
    createContent: function createContent() {},
    setBlendMode: function setBlendMode() {
      var globalData = this.globalData;

      if (globalData.blendMode !== this.data.bm) {
        globalData.blendMode = this.data.bm;
        var blendModeValue = getBlendMode(this.data.bm);
        globalData.canvasContext.globalCompositeOperation = blendModeValue;
      }
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new CVMaskElement(this.data, this);
      this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
    },
    hideElement: function hideElement() {
      if (!this.hidden && (!this.isInRange || this.isTransparent)) {
        this.hidden = true;
      }
    },
    showElement: function showElement() {
      if (this.isInRange && !this.isTransparent) {
        this.hidden = false;
        this._isFirstFrame = true;
        this.maskManager._isFirstFrame = true;
      }
    },
    clearCanvas: function clearCanvas(canvasContext) {
      canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    },
    prepareLayer: function prepareLayer() {
      if (this.data.tt >= 1) {
        var buffer = this.buffers[0];
        var bufferCtx = buffer.getContext('2d');
        this.clearCanvas(bufferCtx); // on the first buffer we store the current state of the global drawing

        bufferCtx.drawImage(this.canvasContext.canvas, 0, 0); // The next four lines are to clear the canvas
        // TODO: Check if there is a way to clear the canvas without resetting the transform

        this.currentTransform = this.canvasContext.getTransform();
        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
        this.clearCanvas(this.canvasContext);
        this.canvasContext.setTransform(this.currentTransform);
      }
    },
    exitLayer: function exitLayer() {
      if (this.data.tt >= 1) {
        var buffer = this.buffers[1]; // On the second buffer we store the current state of the global drawing
        // that only contains the content of this layer
        // (if it is a composition, it also includes the nested layers)

        var bufferCtx = buffer.getContext('2d');
        this.clearCanvas(bufferCtx);
        bufferCtx.drawImage(this.canvasContext.canvas, 0, 0); // We clear the canvas again

        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
        this.clearCanvas(this.canvasContext);
        this.canvasContext.setTransform(this.currentTransform); // We draw the mask

        var mask = this.comp.getElementById('tp' in this.data ? this.data.tp : this.data.ind - 1);
        mask.renderFrame(true); // We draw the second buffer (that contains the content of this layer)

        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0); // If the mask is a Luma matte, we need to do two extra painting operations
        // the _isProxy check is to avoid drawing a fake canvas in workers that will throw an error

        if (this.data.tt >= 3 && !document._isProxy) {
          // We copy the painted mask to a buffer that has a color matrix filter applied to it
          // that applies the rgb values to the alpha channel
          var lumaBuffer = assetLoader.getLumaCanvas(this.canvasContext.canvas);
          var lumaBufferCtx = lumaBuffer.getContext('2d');
          lumaBufferCtx.drawImage(this.canvasContext.canvas, 0, 0);
          this.clearCanvas(this.canvasContext); // we repaint the context with the mask applied to it

          this.canvasContext.drawImage(lumaBuffer, 0, 0);
        }

        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt];
        this.canvasContext.drawImage(buffer, 0, 0); // We finally draw the first buffer (that contains the content of the global drawing)
        // We use destination-over to draw the global drawing below the current layer

        this.canvasContext.globalCompositeOperation = 'destination-over';
        this.canvasContext.drawImage(this.buffers[0], 0, 0);
        this.canvasContext.setTransform(this.currentTransform); // We reset the globalCompositeOperation to source-over, the standard type of operation

        this.canvasContext.globalCompositeOperation = 'source-over';
      }
    },
    renderFrame: function renderFrame(forceRender) {
      if (this.hidden || this.data.hd) {
        return;
      }

      if (this.data.td === 1 && !forceRender) {
        return;
      }

      this.renderTransform();
      this.renderRenderable();
      this.renderLocalTransform();
      this.setBlendMode();
      var forceRealStack = this.data.ty === 0;
      this.prepareLayer();
      this.globalData.renderer.save(forceRealStack);
      this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props);
      this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity);
      this.renderInnerContent();
      this.globalData.renderer.restore(forceRealStack);
      this.exitLayer();

      if (this.maskManager.hasMasks) {
        this.globalData.renderer.restore(true);
      }

      if (this._isFirstFrame) {
        this._isFirstFrame = false;
      }
    },
    destroy: function destroy() {
      this.canvasContext = null;
      this.data = null;
      this.globalData = null;
      this.maskManager.destroy();
    },
    mHelper: new Matrix()
  };
  CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
  CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

  function CVShapeData(element, data, styles, transformsManager) {
    this.styledShapes = [];
    this.tr = [0, 0, 0, 0, 0, 0];
    var ty = 4;

    if (data.ty === 'rc') {
      ty = 5;
    } else if (data.ty === 'el') {
      ty = 6;
    } else if (data.ty === 'sr') {
      ty = 7;
    }

    this.sh = ShapePropertyFactory.getShapeProp(element, data, ty, element);
    var i;
    var len = styles.length;
    var styledShape;

    for (i = 0; i < len; i += 1) {
      if (!styles[i].closed) {
        styledShape = {
          transforms: transformsManager.addTransformSequence(styles[i].transforms),
          trNodes: []
        };
        this.styledShapes.push(styledShape);
        styles[i].elements.push(styledShape);
      }
    }
  }

  CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

  function CVShapeElement(data, globalData, comp) {
    this.shapes = [];
    this.shapesData = data.shapes;
    this.stylesList = [];
    this.itemsData = [];
    this.prevViewData = [];
    this.shapeModifiers = [];
    this.processedElements = [];
    this.transformsManager = new ShapeTransformManager();
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);
  CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;
  CVShapeElement.prototype.transformHelper = {
    opacity: 1,
    _opMdf: false
  };
  CVShapeElement.prototype.dashResetter = [];

  CVShapeElement.prototype.createContent = function () {
    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
  };

  CVShapeElement.prototype.createStyleElement = function (data, transforms) {
    var styleElem = {
      data: data,
      type: data.ty,
      preTransforms: this.transformsManager.addTransformSequence(transforms),
      transforms: [],
      elements: [],
      closed: data.hd === true
    };
    var elementData = {};

    if (data.ty === 'fl' || data.ty === 'st') {
      elementData.c = PropertyFactory.getProp(this, data.c, 1, 255, this);

      if (!elementData.c.k) {
        styleElem.co = 'rgb(' + bmFloor(elementData.c.v[0]) + ',' + bmFloor(elementData.c.v[1]) + ',' + bmFloor(elementData.c.v[2]) + ')';
      }
    } else if (data.ty === 'gf' || data.ty === 'gs') {
      elementData.s = PropertyFactory.getProp(this, data.s, 1, null, this);
      elementData.e = PropertyFactory.getProp(this, data.e, 1, null, this);
      elementData.h = PropertyFactory.getProp(this, data.h || {
        k: 0
      }, 0, 0.01, this);
      elementData.a = PropertyFactory.getProp(this, data.a || {
        k: 0
      }, 0, degToRads, this);
      elementData.g = new GradientProperty(this, data.g, this);
    }

    elementData.o = PropertyFactory.getProp(this, data.o, 0, 0.01, this);

    if (data.ty === 'st' || data.ty === 'gs') {
      styleElem.lc = lineCapEnum[data.lc || 2];
      styleElem.lj = lineJoinEnum[data.lj || 2];

      if (data.lj == 1) {
        // eslint-disable-line eqeqeq
        styleElem.ml = data.ml;
      }

      elementData.w = PropertyFactory.getProp(this, data.w, 0, null, this);

      if (!elementData.w.k) {
        styleElem.wi = elementData.w.v;
      }

      if (data.d) {
        var d = new DashProperty(this, data.d, 'canvas', this);
        elementData.d = d;

        if (!elementData.d.k) {
          styleElem.da = elementData.d.dashArray;
          styleElem["do"] = elementData.d.dashoffset[0];
        }
      }
    } else {
      styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
    }

    this.stylesList.push(styleElem);
    elementData.style = styleElem;
    return elementData;
  };

  CVShapeElement.prototype.createGroupElement = function () {
    var elementData = {
      it: [],
      prevViewData: []
    };
    return elementData;
  };

  CVShapeElement.prototype.createTransformElement = function (data) {
    var elementData = {
      transform: {
        opacity: 1,
        _opMdf: false,
        key: this.transformsManager.getNewKey(),
        op: PropertyFactory.getProp(this, data.o, 0, 0.01, this),
        mProps: TransformPropertyFactory.getTransformProperty(this, data, this)
      }
    };
    return elementData;
  };

  CVShapeElement.prototype.createShapeElement = function (data) {
    var elementData = new CVShapeData(this, data, this.stylesList, this.transformsManager);
    this.shapes.push(elementData);
    this.addShapeToModifiers(elementData);
    return elementData;
  };

  CVShapeElement.prototype.reloadShapes = function () {
    this._isFirstFrame = true;
    var i;
    var len = this.itemsData.length;

    for (i = 0; i < len; i += 1) {
      this.prevViewData[i] = this.itemsData[i];
    }

    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
    len = this.dynamicProperties.length;

    for (i = 0; i < len; i += 1) {
      this.dynamicProperties[i].getValue();
    }

    this.renderModifiers();
    this.transformsManager.processSequences(this._isFirstFrame);
  };

  CVShapeElement.prototype.addTransformToStyleList = function (transform) {
    var i;
    var len = this.stylesList.length;

    for (i = 0; i < len; i += 1) {
      if (!this.stylesList[i].closed) {
        this.stylesList[i].transforms.push(transform);
      }
    }
  };

  CVShapeElement.prototype.removeTransformFromStyleList = function () {
    var i;
    var len = this.stylesList.length;

    for (i = 0; i < len; i += 1) {
      if (!this.stylesList[i].closed) {
        this.stylesList[i].transforms.pop();
      }
    }
  };

  CVShapeElement.prototype.closeStyles = function (styles) {
    var i;
    var len = styles.length;

    for (i = 0; i < len; i += 1) {
      styles[i].closed = true;
    }
  };

  CVShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, shouldRender, transforms) {
    var i;
    var len = arr.length - 1;
    var j;
    var jLen;
    var ownStyles = [];
    var ownModifiers = [];
    var processedPos;
    var modifier;
    var currentTransform;
    var ownTransforms = [].concat(transforms);

    for (i = len; i >= 0; i -= 1) {
      processedPos = this.searchProcessedElement(arr[i]);

      if (!processedPos) {
        arr[i]._shouldRender = shouldRender;
      } else {
        itemsData[i] = prevViewData[processedPos - 1];
      }

      if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
        if (!processedPos) {
          itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
        } else {
          itemsData[i].style.closed = false;
        }

        ownStyles.push(itemsData[i].style);
      } else if (arr[i].ty === 'gr') {
        if (!processedPos) {
          itemsData[i] = this.createGroupElement(arr[i]);
        } else {
          jLen = itemsData[i].it.length;

          for (j = 0; j < jLen; j += 1) {
            itemsData[i].prevViewData[j] = itemsData[i].it[j];
          }
        }

        this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
      } else if (arr[i].ty === 'tr') {
        if (!processedPos) {
          currentTransform = this.createTransformElement(arr[i]);
          itemsData[i] = currentTransform;
        }

        ownTransforms.push(itemsData[i]);
        this.addTransformToStyleList(itemsData[i]);
      } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
        if (!processedPos) {
          itemsData[i] = this.createShapeElement(arr[i]);
        }
      } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'pb' || arr[i].ty === 'zz' || arr[i].ty === 'op') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          modifier.init(this, arr[i]);
          itemsData[i] = modifier;
          this.shapeModifiers.push(modifier);
        } else {
          modifier = itemsData[i];
          modifier.closed = false;
        }

        ownModifiers.push(modifier);
      } else if (arr[i].ty === 'rp') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          itemsData[i] = modifier;
          modifier.init(this, arr, i, itemsData);
          this.shapeModifiers.push(modifier);
          shouldRender = false;
        } else {
          modifier = itemsData[i];
          modifier.closed = true;
        }

        ownModifiers.push(modifier);
      }

      this.addProcessedElement(arr[i], i + 1);
    }

    this.removeTransformFromStyleList();
    this.closeStyles(ownStyles);
    len = ownModifiers.length;

    for (i = 0; i < len; i += 1) {
      ownModifiers[i].closed = true;
    }
  };

  CVShapeElement.prototype.renderInnerContent = function () {
    this.transformHelper.opacity = 1;
    this.transformHelper._opMdf = false;
    this.renderModifiers();
    this.transformsManager.processSequences(this._isFirstFrame);
    this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
  };

  CVShapeElement.prototype.renderShapeTransform = function (parentTransform, groupTransform) {
    if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
      groupTransform.opacity = parentTransform.opacity;
      groupTransform.opacity *= groupTransform.op.v;
      groupTransform._opMdf = true;
    }
  };

  CVShapeElement.prototype.drawLayer = function () {
    var i;
    var len = this.stylesList.length;
    var j;
    var jLen;
    var k;
    var kLen;
    var elems;
    var nodes;
    var renderer = this.globalData.renderer;
    var ctx = this.globalData.canvasContext;
    var type;
    var currentStyle;

    for (i = 0; i < len; i += 1) {
      currentStyle = this.stylesList[i];
      type = currentStyle.type; // Skipping style when
      // Stroke width equals 0
      // style should not be rendered (extra unused repeaters)
      // current opacity equals 0
      // global opacity equals 0

      if (!((type === 'st' || type === 'gs') && currentStyle.wi === 0 || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
        renderer.save();
        elems = currentStyle.elements;

        if (type === 'st' || type === 'gs') {
          renderer.ctxStrokeStyle(type === 'st' ? currentStyle.co : currentStyle.grd); // ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;

          renderer.ctxLineWidth(currentStyle.wi); // ctx.lineWidth = currentStyle.wi;

          renderer.ctxLineCap(currentStyle.lc); // ctx.lineCap = currentStyle.lc;

          renderer.ctxLineJoin(currentStyle.lj); // ctx.lineJoin = currentStyle.lj;

          renderer.ctxMiterLimit(currentStyle.ml || 0); // ctx.miterLimit = currentStyle.ml || 0;
        } else {
          renderer.ctxFillStyle(type === 'fl' ? currentStyle.co : currentStyle.grd); // ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
        }

        renderer.ctxOpacity(currentStyle.coOp);

        if (type !== 'st' && type !== 'gs') {
          ctx.beginPath();
        }

        renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);
        jLen = elems.length;

        for (j = 0; j < jLen; j += 1) {
          if (type === 'st' || type === 'gs') {
            ctx.beginPath();

            if (currentStyle.da) {
              ctx.setLineDash(currentStyle.da);
              ctx.lineDashOffset = currentStyle["do"];
            }
          }

          nodes = elems[j].trNodes;
          kLen = nodes.length;

          for (k = 0; k < kLen; k += 1) {
            if (nodes[k].t === 'm') {
              ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
            } else if (nodes[k].t === 'c') {
              ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
            } else {
              ctx.closePath();
            }
          }

          if (type === 'st' || type === 'gs') {
            // ctx.stroke();
            renderer.ctxStroke();

            if (currentStyle.da) {
              ctx.setLineDash(this.dashResetter);
            }
          }
        }

        if (type !== 'st' && type !== 'gs') {
          // ctx.fill(currentStyle.r);
          this.globalData.renderer.ctxFill(currentStyle.r);
        }

        renderer.restore();
      }
    }
  };

  CVShapeElement.prototype.renderShape = function (parentTransform, items, data, isMain) {
    var i;
    var len = items.length - 1;
    var groupTransform;
    groupTransform = parentTransform;

    for (i = len; i >= 0; i -= 1) {
      if (items[i].ty === 'tr') {
        groupTransform = data[i].transform;
        this.renderShapeTransform(parentTransform, groupTransform);
      } else if (items[i].ty === 'sh' || items[i].ty === 'el' || items[i].ty === 'rc' || items[i].ty === 'sr') {
        this.renderPath(items[i], data[i]);
      } else if (items[i].ty === 'fl') {
        this.renderFill(items[i], data[i], groupTransform);
      } else if (items[i].ty === 'st') {
        this.renderStroke(items[i], data[i], groupTransform);
      } else if (items[i].ty === 'gf' || items[i].ty === 'gs') {
        this.renderGradientFill(items[i], data[i], groupTransform);
      } else if (items[i].ty === 'gr') {
        this.renderShape(groupTransform, items[i].it, data[i].it);
      } else if (items[i].ty === 'tm') {//
      }
    }

    if (isMain) {
      this.drawLayer();
    }
  };

  CVShapeElement.prototype.renderStyledShape = function (styledShape, shape) {
    if (this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
      var shapeNodes = styledShape.trNodes;
      var paths = shape.paths;
      var i;
      var len;
      var j;
      var jLen = paths._length;
      shapeNodes.length = 0;
      var groupTransformMat = styledShape.transforms.finalTransform;

      for (j = 0; j < jLen; j += 1) {
        var pathNodes = paths.shapes[j];

        if (pathNodes && pathNodes.v) {
          len = pathNodes._length;

          for (i = 1; i < len; i += 1) {
            if (i === 1) {
              shapeNodes.push({
                t: 'm',
                p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
              });
            }

            shapeNodes.push({
              t: 'c',
              pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i])
            });
          }

          if (len === 1) {
            shapeNodes.push({
              t: 'm',
              p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
            });
          }

          if (pathNodes.c && len) {
            shapeNodes.push({
              t: 'c',
              pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0])
            });
            shapeNodes.push({
              t: 'z'
            });
          }
        }
      }

      styledShape.trNodes = shapeNodes;
    }
  };

  CVShapeElement.prototype.renderPath = function (pathData, itemData) {
    if (pathData.hd !== true && pathData._shouldRender) {
      var i;
      var len = itemData.styledShapes.length;

      for (i = 0; i < len; i += 1) {
        this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
      }
    }
  };

  CVShapeElement.prototype.renderFill = function (styleData, itemData, groupTransform) {
    var styleElem = itemData.style;

    if (itemData.c._mdf || this._isFirstFrame) {
      styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
    }

    if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
      styleElem.coOp = itemData.o.v * groupTransform.opacity;
    }
  };

  CVShapeElement.prototype.renderGradientFill = function (styleData, itemData, groupTransform) {
    var styleElem = itemData.style;
    var grd;

    if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf)) {
      var ctx = this.globalData.canvasContext;
      var pt1 = itemData.s.v;
      var pt2 = itemData.e.v;

      if (styleData.t === 1) {
        grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
      } else {
        var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
        var percent = itemData.h.v;

        if (percent >= 1) {
          percent = 0.99;
        } else if (percent <= -1) {
          percent = -0.99;
        }

        var dist = rad * percent;
        var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
        var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
        grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
      }

      var i;
      var len = styleData.g.p;
      var cValues = itemData.g.c;
      var opacity = 1;

      for (i = 0; i < len; i += 1) {
        if (itemData.g._hasOpacity && itemData.g._collapsable) {
          opacity = itemData.g.o[i * 2 + 1];
        }

        grd.addColorStop(cValues[i * 4] / 100, 'rgba(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ',' + opacity + ')');
      }

      styleElem.grd = grd;
    }

    styleElem.coOp = itemData.o.v * groupTransform.opacity;
  };

  CVShapeElement.prototype.renderStroke = function (styleData, itemData, groupTransform) {
    var styleElem = itemData.style;
    var d = itemData.d;

    if (d && (d._mdf || this._isFirstFrame)) {
      styleElem.da = d.dashArray;
      styleElem["do"] = d.dashoffset[0];
    }

    if (itemData.c._mdf || this._isFirstFrame) {
      styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
    }

    if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
      styleElem.coOp = itemData.o.v * groupTransform.opacity;
    }

    if (itemData.w._mdf || this._isFirstFrame) {
      styleElem.wi = itemData.w.v;
    }
  };

  CVShapeElement.prototype.destroy = function () {
    this.shapesData = null;
    this.globalData = null;
    this.canvasContext = null;
    this.stylesList.length = 0;
    this.itemsData.length = 0;
  };

  function CVTextElement(data, globalData, comp) {
    this.textSpans = [];
    this.yOffset = 0;
    this.fillColorAnim = false;
    this.strokeColorAnim = false;
    this.strokeWidthAnim = false;
    this.stroke = false;
    this.fill = false;
    this.justifyOffset = 0;
    this.currentRender = null;
    this.renderType = 'canvas';
    this.values = {
      fill: 'rgba(0,0,0,0)',
      stroke: 'rgba(0,0,0,0)',
      sWidth: 0,
      fValue: ''
    };
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);
  CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

  CVTextElement.prototype.buildNewText = function () {
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
    var hasFill = false;

    if (documentData.fc) {
      hasFill = true;
      this.values.fill = this.buildColor(documentData.fc);
    } else {
      this.values.fill = 'rgba(0,0,0,0)';
    }

    this.fill = hasFill;
    var hasStroke = false;

    if (documentData.sc) {
      hasStroke = true;
      this.values.stroke = this.buildColor(documentData.sc);
      this.values.sWidth = documentData.sw;
    }

    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    var i;
    var len;
    var letters = documentData.l;
    var matrixHelper = this.mHelper;
    this.stroke = hasStroke;
    this.values.fValue = documentData.finalSize + 'px ' + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
    len = documentData.finalText.length; // this.tHelper.font = this.values.fValue;

    var charData;
    var shapeData;
    var k;
    var kLen;
    var shapes;
    var j;
    var jLen;
    var pathNodes;
    var commands;
    var pathArr;
    var singleShape = this.data.singleShape;
    var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
    var xPos = 0;
    var yPos = 0;
    var firstLine = true;
    var cnt = 0;

    for (i = 0; i < len; i += 1) {
      charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
      shapeData = charData && charData.data || {};
      matrixHelper.reset();

      if (singleShape && letters[i].n) {
        xPos = -trackingOffset;
        yPos += documentData.yOffset;
        yPos += firstLine ? 1 : 0;
        firstLine = false;
      }

      shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
      jLen = shapes.length;
      matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);

      if (singleShape) {
        this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
      }

      commands = createSizedArray(jLen - 1);
      var commandsCounter = 0;

      for (j = 0; j < jLen; j += 1) {
        if (shapes[j].ty === 'sh') {
          kLen = shapes[j].ks.k.i.length;
          pathNodes = shapes[j].ks.k;
          pathArr = [];

          for (k = 1; k < kLen; k += 1) {
            if (k === 1) {
              pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
            }

            pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
          }

          pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
          commands[commandsCounter] = pathArr;
          commandsCounter += 1;
        }
      }

      if (singleShape) {
        xPos += letters[i].l;
        xPos += trackingOffset;
      }

      if (this.textSpans[cnt]) {
        this.textSpans[cnt].elem = commands;
      } else {
        this.textSpans[cnt] = {
          elem: commands
        };
      }

      cnt += 1;
    }
  };

  CVTextElement.prototype.renderInnerContent = function () {
    this.validateText();
    var ctx = this.canvasContext;
    ctx.font = this.values.fValue;
    this.globalData.renderer.ctxLineCap('butt'); // ctx.lineCap = 'butt';

    this.globalData.renderer.ctxLineJoin('miter'); // ctx.lineJoin = 'miter';

    this.globalData.renderer.ctxMiterLimit(4); // ctx.miterLimit = 4;

    if (!this.data.singleShape) {
      this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    }

    var i;
    var len;
    var j;
    var jLen;
    var k;
    var kLen;
    var renderedLetters = this.textAnimator.renderedLetters;
    var letters = this.textProperty.currentData.l;
    len = letters.length;
    var renderedLetter;
    var lastFill = null;
    var lastStroke = null;
    var lastStrokeW = null;
    var commands;
    var pathArr;
    var renderer = this.globalData.renderer;

    for (i = 0; i < len; i += 1) {
      if (!letters[i].n) {
        renderedLetter = renderedLetters[i];

        if (renderedLetter) {
          renderer.save();
          renderer.ctxTransform(renderedLetter.p);
          renderer.ctxOpacity(renderedLetter.o);
        }

        if (this.fill) {
          if (renderedLetter && renderedLetter.fc) {
            if (lastFill !== renderedLetter.fc) {
              renderer.ctxFillStyle(renderedLetter.fc);
              lastFill = renderedLetter.fc; // ctx.fillStyle = renderedLetter.fc;
            }
          } else if (lastFill !== this.values.fill) {
            lastFill = this.values.fill;
            renderer.ctxFillStyle(this.values.fill); // ctx.fillStyle = this.values.fill;
          }

          commands = this.textSpans[i].elem;
          jLen = commands.length;
          this.globalData.canvasContext.beginPath();

          for (j = 0; j < jLen; j += 1) {
            pathArr = commands[j];
            kLen = pathArr.length;
            this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);

            for (k = 2; k < kLen; k += 6) {
              this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
            }
          }

          this.globalData.canvasContext.closePath();
          renderer.ctxFill(); // this.globalData.canvasContext.fill();
          /// ctx.fillText(this.textSpans[i].val,0,0);
        }

        if (this.stroke) {
          if (renderedLetter && renderedLetter.sw) {
            if (lastStrokeW !== renderedLetter.sw) {
              lastStrokeW = renderedLetter.sw;
              renderer.ctxLineWidth(renderedLetter.sw); // ctx.lineWidth = renderedLetter.sw;
            }
          } else if (lastStrokeW !== this.values.sWidth) {
            lastStrokeW = this.values.sWidth;
            renderer.ctxLineWidth(this.values.sWidth); // ctx.lineWidth = this.values.sWidth;
          }

          if (renderedLetter && renderedLetter.sc) {
            if (lastStroke !== renderedLetter.sc) {
              lastStroke = renderedLetter.sc;
              renderer.ctxStrokeStyle(renderedLetter.sc); // ctx.strokeStyle = renderedLetter.sc;
            }
          } else if (lastStroke !== this.values.stroke) {
            lastStroke = this.values.stroke;
            renderer.ctxStrokeStyle(this.values.stroke); // ctx.strokeStyle = this.values.stroke;
          }

          commands = this.textSpans[i].elem;
          jLen = commands.length;
          this.globalData.canvasContext.beginPath();

          for (j = 0; j < jLen; j += 1) {
            pathArr = commands[j];
            kLen = pathArr.length;
            this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);

            for (k = 2; k < kLen; k += 6) {
              this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
            }
          }

          this.globalData.canvasContext.closePath();
          renderer.ctxStroke(); // this.globalData.canvasContext.stroke();
          /// ctx.strokeText(letters[i].val,0,0);
        }

        if (renderedLetter) {
          this.globalData.renderer.restore();
        }
      }
    }
  };

  function CVImageElement(data, globalData, comp) {
    this.assetData = globalData.getAssetData(data.refId);
    this.img = globalData.imageLoader.getAsset(this.assetData);
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);
  CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
  CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

  CVImageElement.prototype.createContent = function () {
    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
      var canvas = createTag('canvas');
      canvas.width = this.assetData.w;
      canvas.height = this.assetData.h;
      var ctx = canvas.getContext('2d');
      var imgW = this.img.width;
      var imgH = this.img.height;
      var imgRel = imgW / imgH;
      var canvasRel = this.assetData.w / this.assetData.h;
      var widthCrop;
      var heightCrop;
      var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;

      if (imgRel > canvasRel && par === 'xMidYMid slice' || imgRel < canvasRel && par !== 'xMidYMid slice') {
        heightCrop = imgH;
        widthCrop = heightCrop * canvasRel;
      } else {
        widthCrop = imgW;
        heightCrop = widthCrop / canvasRel;
      }

      ctx.drawImage(this.img, (imgW - widthCrop) / 2, (imgH - heightCrop) / 2, widthCrop, heightCrop, 0, 0, this.assetData.w, this.assetData.h);
      this.img = canvas;
    }
  };

  CVImageElement.prototype.renderInnerContent = function () {
    this.canvasContext.drawImage(this.img, 0, 0);
  };

  CVImageElement.prototype.destroy = function () {
    this.img = null;
  };

  function CVSolidElement(data, globalData, comp) {
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);
  CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
  CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

  CVSolidElement.prototype.renderInnerContent = function () {
    // var ctx = this.canvasContext;
    this.globalData.renderer.ctxFillStyle(this.data.sc); // ctx.fillStyle = this.data.sc;

    this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh); // ctx.fillRect(0, 0, this.data.sw, this.data.sh);
    //
  };

  function CanvasRendererBase() {}

  extendPrototype([BaseRenderer], CanvasRendererBase);

  CanvasRendererBase.prototype.createShape = function (data) {
    return new CVShapeElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createText = function (data) {
    return new CVTextElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createImage = function (data) {
    return new CVImageElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createSolid = function (data) {
    return new CVSolidElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;

  CanvasRendererBase.prototype.ctxTransform = function (props) {
    if (props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0) {
      return;
    }

    this.canvasContext.transform(props[0], props[1], props[4], props[5], props[12], props[13]);
  };

  CanvasRendererBase.prototype.ctxOpacity = function (op) {
    this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
  };

  CanvasRendererBase.prototype.ctxFillStyle = function (value) {
    this.canvasContext.fillStyle = value;
  };

  CanvasRendererBase.prototype.ctxStrokeStyle = function (value) {
    this.canvasContext.strokeStyle = value;
  };

  CanvasRendererBase.prototype.ctxLineWidth = function (value) {
    this.canvasContext.lineWidth = value;
  };

  CanvasRendererBase.prototype.ctxLineCap = function (value) {
    this.canvasContext.lineCap = value;
  };

  CanvasRendererBase.prototype.ctxLineJoin = function (value) {
    this.canvasContext.lineJoin = value;
  };

  CanvasRendererBase.prototype.ctxMiterLimit = function (value) {
    this.canvasContext.miterLimit = value;
  };

  CanvasRendererBase.prototype.ctxFill = function (rule) {
    this.canvasContext.fill(rule);
  };

  CanvasRendererBase.prototype.ctxFillRect = function (x, y, w, h) {
    this.canvasContext.fillRect(x, y, w, h);
  };

  CanvasRendererBase.prototype.ctxStroke = function () {
    this.canvasContext.stroke();
  };

  CanvasRendererBase.prototype.reset = function () {
    if (!this.renderConfig.clearCanvas) {
      this.canvasContext.restore();
      return;
    }

    this.contextData.reset();
  };

  CanvasRendererBase.prototype.save = function () {
    this.canvasContext.save();
  };

  CanvasRendererBase.prototype.restore = function (actionFlag) {
    if (!this.renderConfig.clearCanvas) {
      this.canvasContext.restore();
      return;
    }

    if (actionFlag) {
      this.globalData.blendMode = 'source-over';
    }

    this.contextData.restore(actionFlag);
  };

  CanvasRendererBase.prototype.configAnimation = function (animData) {
    if (this.animationItem.wrapper) {
      this.animationItem.container = createTag('canvas');
      var containerStyle = this.animationItem.container.style;
      containerStyle.width = '100%';
      containerStyle.height = '100%';
      var origin = '0px 0px 0px';
      containerStyle.transformOrigin = origin;
      containerStyle.mozTransformOrigin = origin;
      containerStyle.webkitTransformOrigin = origin;
      containerStyle['-webkit-transform'] = origin;
      containerStyle.contentVisibility = this.renderConfig.contentVisibility;
      this.animationItem.wrapper.appendChild(this.animationItem.container);
      this.canvasContext = this.animationItem.container.getContext('2d');

      if (this.renderConfig.className) {
        this.animationItem.container.setAttribute('class', this.renderConfig.className);
      }

      if (this.renderConfig.id) {
        this.animationItem.container.setAttribute('id', this.renderConfig.id);
      }
    } else {
      this.canvasContext = this.renderConfig.context;
    }

    this.contextData.setContext(this.canvasContext);
    this.data = animData;
    this.layers = animData.layers;
    this.transformCanvas = {
      w: animData.w,
      h: animData.h,
      sx: 0,
      sy: 0,
      tx: 0,
      ty: 0
    };
    this.setupGlobalData(animData, document.body);
    this.globalData.canvasContext = this.canvasContext;
    this.globalData.renderer = this;
    this.globalData.isDashed = false;
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.globalData.transformCanvas = this.transformCanvas;
    this.elements = createSizedArray(animData.layers.length);
    this.updateContainerSize();
  };

  CanvasRendererBase.prototype.updateContainerSize = function (width, height) {
    this.reset();
    var elementWidth;
    var elementHeight;

    if (width) {
      elementWidth = width;
      elementHeight = height;
      this.canvasContext.canvas.width = elementWidth;
      this.canvasContext.canvas.height = elementHeight;
    } else {
      if (this.animationItem.wrapper && this.animationItem.container) {
        elementWidth = this.animationItem.wrapper.offsetWidth;
        elementHeight = this.animationItem.wrapper.offsetHeight;
      } else {
        elementWidth = this.canvasContext.canvas.width;
        elementHeight = this.canvasContext.canvas.height;
      }

      this.canvasContext.canvas.width = elementWidth * this.renderConfig.dpr;
      this.canvasContext.canvas.height = elementHeight * this.renderConfig.dpr;
    }

    var elementRel;
    var animationRel;

    if (this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1) {
      var par = this.renderConfig.preserveAspectRatio.split(' ');
      var fillType = par[1] || 'meet';
      var pos = par[0] || 'xMidYMid';
      var xPos = pos.substr(0, 4);
      var yPos = pos.substr(4);
      elementRel = elementWidth / elementHeight;
      animationRel = this.transformCanvas.w / this.transformCanvas.h;

      if (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice') {
        this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
        this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
      } else {
        this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
        this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
      }

      if (xPos === 'xMid' && (animationRel < elementRel && fillType === 'meet' || animationRel > elementRel && fillType === 'slice')) {
        this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2 * this.renderConfig.dpr;
      } else if (xPos === 'xMax' && (animationRel < elementRel && fillType === 'meet' || animationRel > elementRel && fillType === 'slice')) {
        this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
      } else {
        this.transformCanvas.tx = 0;
      }

      if (yPos === 'YMid' && (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice')) {
        this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2 * this.renderConfig.dpr;
      } else if (yPos === 'YMax' && (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice')) {
        this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) * this.renderConfig.dpr;
      } else {
        this.transformCanvas.ty = 0;
      }
    } else if (this.renderConfig.preserveAspectRatio === 'none') {
      this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
      this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
      this.transformCanvas.tx = 0;
      this.transformCanvas.ty = 0;
    } else {
      this.transformCanvas.sx = this.renderConfig.dpr;
      this.transformCanvas.sy = this.renderConfig.dpr;
      this.transformCanvas.tx = 0;
      this.transformCanvas.ty = 0;
    }

    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
    /* var i, len = this.elements.length;
      for(i=0;i<len;i+=1){
          if(this.elements[i] && this.elements[i].data.ty === 0){
              this.elements[i].resize(this.globalData.transformCanvas);
          }
      } */

    this.ctxTransform(this.transformCanvas.props);
    this.canvasContext.beginPath();
    this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
    this.canvasContext.closePath();
    this.canvasContext.clip();
    this.renderFrame(this.renderedFrame, true);
  };

  CanvasRendererBase.prototype.destroy = function () {
    if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
      this.animationItem.wrapper.innerText = '';
    }

    var i;
    var len = this.layers ? this.layers.length : 0;

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.elements[i] && this.elements[i].destroy) {
        this.elements[i].destroy();
      }
    }

    this.elements.length = 0;
    this.globalData.canvasContext = null;
    this.animationItem.container = null;
    this.destroyed = true;
  };

  CanvasRendererBase.prototype.renderFrame = function (num, forceRender) {
    if (this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender || this.destroyed || num === -1) {
      return;
    }

    this.renderedFrame = num;
    this.globalData.frameNum = num - this.animationItem._isFirstFrame;
    this.globalData.frameId += 1;
    this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
    this.globalData.projectInterface.currentFrame = num; // console.log('--------');
    // console.log('NEW: ',num);

    var i;
    var len = this.layers.length;

    if (!this.completeLayers) {
      this.checkLayers(num);
    }

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].prepareFrame(num - this.layers[i].st);
      }
    }

    if (this.globalData._mdf) {
      if (this.renderConfig.clearCanvas === true) {
        this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
      } else {
        this.save();
      }

      for (i = len - 1; i >= 0; i -= 1) {
        if (this.completeLayers || this.elements[i]) {
          this.elements[i].renderFrame();
        }
      }

      if (this.renderConfig.clearCanvas !== true) {
        this.restore();
      }
    }
  };

  CanvasRendererBase.prototype.buildItem = function (pos) {
    var elements = this.elements;

    if (elements[pos] || this.layers[pos].ty === 99) {
      return;
    }

    var element = this.createItem(this.layers[pos], this, this.globalData);
    elements[pos] = element;
    element.initExpressions();
    /* if(this.layers[pos].ty === 0){
          element.resize(this.globalData.transformCanvas);
      } */
  };

  CanvasRendererBase.prototype.checkPendingElements = function () {
    while (this.pendingElements.length) {
      var element = this.pendingElements.pop();
      element.checkParenting();
    }
  };

  CanvasRendererBase.prototype.hide = function () {
    this.animationItem.container.style.display = 'none';
  };

  CanvasRendererBase.prototype.show = function () {
    this.animationItem.container.style.display = 'block';
  };

  function CanvasContext() {
    this.opacity = -1;
    this.transform = createTypedArray('float32', 16);
    this.fillStyle = '';
    this.strokeStyle = '';
    this.lineWidth = '';
    this.lineCap = '';
    this.lineJoin = '';
    this.miterLimit = '';
    this.id = Math.random();
  }

  function CVContextData() {
    this.stack = [];
    this.cArrPos = 0;
    this.cTr = new Matrix();
    var i;
    var len = 15;

    for (i = 0; i < len; i += 1) {
      var canvasContext = new CanvasContext();
      this.stack[i] = canvasContext;
    }

    this._length = len;
    this.nativeContext = null;
    this.transformMat = new Matrix();
    this.currentOpacity = 1; //

    this.currentFillStyle = '';
    this.appliedFillStyle = ''; //

    this.currentStrokeStyle = '';
    this.appliedStrokeStyle = ''; //

    this.currentLineWidth = '';
    this.appliedLineWidth = ''; //

    this.currentLineCap = '';
    this.appliedLineCap = ''; //

    this.currentLineJoin = '';
    this.appliedLineJoin = ''; //

    this.appliedMiterLimit = '';
    this.currentMiterLimit = '';
  }

  CVContextData.prototype.duplicate = function () {
    var newLength = this._length * 2;
    var i = 0;

    for (i = this._length; i < newLength; i += 1) {
      this.stack[i] = new CanvasContext();
    }

    this._length = newLength;
  };

  CVContextData.prototype.reset = function () {
    this.cArrPos = 0;
    this.cTr.reset();
    this.stack[this.cArrPos].opacity = 1;
  };

  CVContextData.prototype.restore = function (forceRestore) {
    this.cArrPos -= 1;
    var currentContext = this.stack[this.cArrPos];
    var transform = currentContext.transform;
    var i;
    var arr = this.cTr.props;

    for (i = 0; i < 16; i += 1) {
      arr[i] = transform[i];
    }

    if (forceRestore) {
      this.nativeContext.restore();
      var prevStack = this.stack[this.cArrPos + 1];
      this.appliedFillStyle = prevStack.fillStyle;
      this.appliedStrokeStyle = prevStack.strokeStyle;
      this.appliedLineWidth = prevStack.lineWidth;
      this.appliedLineCap = prevStack.lineCap;
      this.appliedLineJoin = prevStack.lineJoin;
      this.appliedMiterLimit = prevStack.miterLimit;
    }

    this.nativeContext.setTransform(transform[0], transform[1], transform[4], transform[5], transform[12], transform[13]);

    if (forceRestore || currentContext.opacity !== -1 && this.currentOpacity !== currentContext.opacity) {
      this.nativeContext.globalAlpha = currentContext.opacity;
      this.currentOpacity = currentContext.opacity;
    }

    this.currentFillStyle = currentContext.fillStyle;
    this.currentStrokeStyle = currentContext.strokeStyle;
    this.currentLineWidth = currentContext.lineWidth;
    this.currentLineCap = currentContext.lineCap;
    this.currentLineJoin = currentContext.lineJoin;
    this.currentMiterLimit = currentContext.miterLimit;
  };

  CVContextData.prototype.save = function (saveOnNativeFlag) {
    if (saveOnNativeFlag) {
      this.nativeContext.save();
    }

    var props = this.cTr.props;

    if (this._length <= this.cArrPos) {
      this.duplicate();
    }

    var currentStack = this.stack[this.cArrPos];
    var i;

    for (i = 0; i < 16; i += 1) {
      currentStack.transform[i] = props[i];
    }

    this.cArrPos += 1;
    var newStack = this.stack[this.cArrPos];
    newStack.opacity = currentStack.opacity;
    newStack.fillStyle = currentStack.fillStyle;
    newStack.strokeStyle = currentStack.strokeStyle;
    newStack.lineWidth = currentStack.lineWidth;
    newStack.lineCap = currentStack.lineCap;
    newStack.lineJoin = currentStack.lineJoin;
    newStack.miterLimit = currentStack.miterLimit;
  };

  CVContextData.prototype.setOpacity = function (value) {
    this.stack[this.cArrPos].opacity = value;
  };

  CVContextData.prototype.setContext = function (value) {
    this.nativeContext = value;
  };

  CVContextData.prototype.fillStyle = function (value) {
    if (this.stack[this.cArrPos].fillStyle !== value) {
      this.currentFillStyle = value;
      this.stack[this.cArrPos].fillStyle = value;
    }
  };

  CVContextData.prototype.strokeStyle = function (value) {
    if (this.stack[this.cArrPos].strokeStyle !== value) {
      this.currentStrokeStyle = value;
      this.stack[this.cArrPos].strokeStyle = value;
    }
  };

  CVContextData.prototype.lineWidth = function (value) {
    if (this.stack[this.cArrPos].lineWidth !== value) {
      this.currentLineWidth = value;
      this.stack[this.cArrPos].lineWidth = value;
    }
  };

  CVContextData.prototype.lineCap = function (value) {
    if (this.stack[this.cArrPos].lineCap !== value) {
      this.currentLineCap = value;
      this.stack[this.cArrPos].lineCap = value;
    }
  };

  CVContextData.prototype.lineJoin = function (value) {
    if (this.stack[this.cArrPos].lineJoin !== value) {
      this.currentLineJoin = value;
      this.stack[this.cArrPos].lineJoin = value;
    }
  };

  CVContextData.prototype.miterLimit = function (value) {
    if (this.stack[this.cArrPos].miterLimit !== value) {
      this.currentMiterLimit = value;
      this.stack[this.cArrPos].miterLimit = value;
    }
  };

  CVContextData.prototype.transform = function (props) {
    this.transformMat.cloneFromProps(props); // Taking the last transform value from the stored stack of transforms

    var currentTransform = this.cTr; // Applying the last transform value after the new transform to respect the order of transformations

    this.transformMat.multiply(currentTransform); // Storing the new transformed value in the stored transform

    currentTransform.cloneFromProps(this.transformMat.props);
    var trProps = currentTransform.props; // Applying the new transform to the canvas

    this.nativeContext.setTransform(trProps[0], trProps[1], trProps[4], trProps[5], trProps[12], trProps[13]);
  };

  CVContextData.prototype.opacity = function (op) {
    var currentOpacity = this.stack[this.cArrPos].opacity;
    currentOpacity *= op < 0 ? 0 : op;

    if (this.stack[this.cArrPos].opacity !== currentOpacity) {
      if (this.currentOpacity !== op) {
        this.nativeContext.globalAlpha = op;
        this.currentOpacity = op;
      }

      this.stack[this.cArrPos].opacity = currentOpacity;
    }
  };

  CVContextData.prototype.fill = function (rule) {
    if (this.appliedFillStyle !== this.currentFillStyle) {
      this.appliedFillStyle = this.currentFillStyle;
      this.nativeContext.fillStyle = this.appliedFillStyle;
    }

    this.nativeContext.fill(rule);
  };

  CVContextData.prototype.fillRect = function (x, y, w, h) {
    if (this.appliedFillStyle !== this.currentFillStyle) {
      this.appliedFillStyle = this.currentFillStyle;
      this.nativeContext.fillStyle = this.appliedFillStyle;
    }

    this.nativeContext.fillRect(x, y, w, h);
  };

  CVContextData.prototype.stroke = function () {
    if (this.appliedStrokeStyle !== this.currentStrokeStyle) {
      this.appliedStrokeStyle = this.currentStrokeStyle;
      this.nativeContext.strokeStyle = this.appliedStrokeStyle;
    }

    if (this.appliedLineWidth !== this.currentLineWidth) {
      this.appliedLineWidth = this.currentLineWidth;
      this.nativeContext.lineWidth = this.appliedLineWidth;
    }

    if (this.appliedLineCap !== this.currentLineCap) {
      this.appliedLineCap = this.currentLineCap;
      this.nativeContext.lineCap = this.appliedLineCap;
    }

    if (this.appliedLineJoin !== this.currentLineJoin) {
      this.appliedLineJoin = this.currentLineJoin;
      this.nativeContext.lineJoin = this.appliedLineJoin;
    }

    if (this.appliedMiterLimit !== this.currentMiterLimit) {
      this.appliedMiterLimit = this.currentMiterLimit;
      this.nativeContext.miterLimit = this.appliedMiterLimit;
    }

    this.nativeContext.stroke();
  };

  function CVCompElement(data, globalData, comp) {
    this.completeLayers = false;
    this.layers = data.layers;
    this.pendingElements = [];
    this.elements = createSizedArray(this.layers.length);
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
  }

  extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement);

  CVCompElement.prototype.renderInnerContent = function () {
    var ctx = this.canvasContext;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.data.w, 0);
    ctx.lineTo(this.data.w, this.data.h);
    ctx.lineTo(0, this.data.h);
    ctx.lineTo(0, 0);
    ctx.clip();
    var i;
    var len = this.layers.length;

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
  };

  CVCompElement.prototype.destroy = function () {
    var i;
    var len = this.layers.length;

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.elements[i]) {
        this.elements[i].destroy();
      }
    }

    this.layers = null;
    this.elements = null;
  };

  CVCompElement.prototype.createComp = function (data) {
    return new CVCompElement(data, this.globalData, this);
  };

  function CanvasRenderer(animationItem, config) {
    this.animationItem = animationItem;
    this.renderConfig = {
      clearCanvas: config && config.clearCanvas !== undefined ? config.clearCanvas : true,
      context: config && config.context || null,
      progressiveLoad: config && config.progressiveLoad || false,
      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      contentVisibility: config && config.contentVisibility || 'visible',
      className: config && config.className || '',
      id: config && config.id || '',
      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
    };
    this.renderConfig.dpr = config && config.dpr || 1;

    if (this.animationItem.wrapper) {
      this.renderConfig.dpr = config && config.dpr || window.devicePixelRatio || 1;
    }

    this.renderedFrame = -1;
    this.globalData = {
      frameNum: -1,
      _mdf: false,
      renderConfig: this.renderConfig,
      currentGlobalAlpha: -1
    };
    this.contextData = new CVContextData();
    this.elements = [];
    this.pendingElements = [];
    this.transformMat = new Matrix();
    this.completeLayers = false;
    this.rendererType = 'canvas';

    if (this.renderConfig.clearCanvas) {
      this.ctxTransform = this.contextData.transform.bind(this.contextData);
      this.ctxOpacity = this.contextData.opacity.bind(this.contextData);
      this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData);
      this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData);
      this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData);
      this.ctxLineCap = this.contextData.lineCap.bind(this.contextData);
      this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData);
      this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData);
      this.ctxFill = this.contextData.fill.bind(this.contextData);
      this.ctxFillRect = this.contextData.fillRect.bind(this.contextData);
      this.ctxStroke = this.contextData.stroke.bind(this.contextData);
      this.save = this.contextData.save.bind(this.contextData);
    }
  }

  extendPrototype([CanvasRendererBase], CanvasRenderer);

  CanvasRenderer.prototype.createComp = function (data) {
    return new CVCompElement(data, this.globalData, this);
  };

  function HBaseElement() {}

  HBaseElement.prototype = {
    checkBlendMode: function checkBlendMode() {},
    initRendererElement: function initRendererElement() {
      this.baseElement = createTag(this.data.tg || 'div');

      if (this.data.hasMask) {
        this.svgElement = createNS('svg');
        this.layerElement = createNS('g');
        this.maskedElement = this.layerElement;
        this.svgElement.appendChild(this.layerElement);
        this.baseElement.appendChild(this.svgElement);
      } else {
        this.layerElement = this.baseElement;
      }

      styleDiv(this.baseElement);
    },
    createContainerElements: function createContainerElements() {
      this.renderableEffectsManager = new CVEffects(this);
      this.transformedElement = this.baseElement;
      this.maskedElement = this.layerElement;

      if (this.data.ln) {
        this.layerElement.setAttribute('id', this.data.ln);
      }

      if (this.data.cl) {
        this.layerElement.setAttribute('class', this.data.cl);
      }

      if (this.data.bm !== 0) {
        this.setBlendMode();
      }
    },
    renderElement: function renderElement() {
      var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};

      if (this.finalTransform._matMdf) {
        var matrixValue = this.finalTransform.mat.toCSS();
        transformedElementStyle.transform = matrixValue;
        transformedElementStyle.webkitTransform = matrixValue;
      }

      if (this.finalTransform._opMdf) {
        transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
      }
    },
    renderFrame: function renderFrame() {
      // If it is exported as hidden (data.hd === true) no need to render
      // If it is not visible no need to render
      if (this.data.hd || this.hidden) {
        return;
      }

      this.renderTransform();
      this.renderRenderable();
      this.renderElement();
      this.renderInnerContent();

      if (this._isFirstFrame) {
        this._isFirstFrame = false;
      }
    },
    destroy: function destroy() {
      this.layerElement = null;
      this.transformedElement = null;

      if (this.matteElement) {
        this.matteElement = null;
      }

      if (this.maskManager) {
        this.maskManager.destroy();
        this.maskManager = null;
      }
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    },
    addEffects: function addEffects() {},
    setMatte: function setMatte() {}
  };
  HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
  HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
  HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

  function HSolidElement(data, globalData, comp) {
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);

  HSolidElement.prototype.createContent = function () {
    var rect;

    if (this.data.hasMask) {
      rect = createNS('rect');
      rect.setAttribute('width', this.data.sw);
      rect.setAttribute('height', this.data.sh);
      rect.setAttribute('fill', this.data.sc);
      this.svgElement.setAttribute('width', this.data.sw);
      this.svgElement.setAttribute('height', this.data.sh);
    } else {
      rect = createTag('div');
      rect.style.width = this.data.sw + 'px';
      rect.style.height = this.data.sh + 'px';
      rect.style.backgroundColor = this.data.sc;
    }

    this.layerElement.appendChild(rect);
  };

  function HShapeElement(data, globalData, comp) {
    // List of drawable elements
    this.shapes = []; // Full shape data

    this.shapesData = data.shapes; // List of styles that will be applied to shapes

    this.stylesList = []; // List of modifiers that will be applied to shapes

    this.shapeModifiers = []; // List of items in shape tree

    this.itemsData = []; // List of items in previous shape tree

    this.processedElements = []; // List of animated components

    this.animatedContents = [];
    this.shapesContainer = createNS('g');
    this.initElement(data, globalData, comp); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created

    this.prevViewData = [];
    this.currentBBox = {
      x: 999999,
      y: -999999,
      h: 0,
      w: 0
    };
  }

  extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
  HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

  HShapeElement.prototype.createContent = function () {
    var cont;
    this.baseElement.style.fontSize = 0;

    if (this.data.hasMask) {
      this.layerElement.appendChild(this.shapesContainer);
      cont = this.svgElement;
    } else {
      cont = createNS('svg');
      var size = this.comp.data ? this.comp.data : this.globalData.compSize;
      cont.setAttribute('width', size.w);
      cont.setAttribute('height', size.h);
      cont.appendChild(this.shapesContainer);
      this.layerElement.appendChild(cont);
    }

    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
    this.filterUniqueShapes();
    this.shapeCont = cont;
  };

  HShapeElement.prototype.getTransformedPoint = function (transformers, point) {
    var i;
    var len = transformers.length;

    for (i = 0; i < len; i += 1) {
      point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
    }

    return point;
  };

  HShapeElement.prototype.calculateShapeBoundingBox = function (item, boundingBox) {
    var shape = item.sh.v;
    var transformers = item.transformers;
    var i;
    var len = shape._length;
    var vPoint;
    var oPoint;
    var nextIPoint;
    var nextVPoint;

    if (len <= 1) {
      return;
    }

    for (i = 0; i < len - 1; i += 1) {
      vPoint = this.getTransformedPoint(transformers, shape.v[i]);
      oPoint = this.getTransformedPoint(transformers, shape.o[i]);
      nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
      nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
      this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
    }

    if (shape.c) {
      vPoint = this.getTransformedPoint(transformers, shape.v[i]);
      oPoint = this.getTransformedPoint(transformers, shape.o[i]);
      nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
      nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
      this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
    }
  };

  HShapeElement.prototype.checkBounds = function (vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
    this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
    var bounds = this.shapeBoundingBox;
    boundingBox.x = bmMin(bounds.left, boundingBox.x);
    boundingBox.xMax = bmMax(bounds.right, boundingBox.xMax);
    boundingBox.y = bmMin(bounds.top, boundingBox.y);
    boundingBox.yMax = bmMax(bounds.bottom, boundingBox.yMax);
  };

  HShapeElement.prototype.shapeBoundingBox = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  HShapeElement.prototype.tempBoundingBox = {
    x: 0,
    xMax: 0,
    y: 0,
    yMax: 0,
    width: 0,
    height: 0
  };

  HShapeElement.prototype.getBoundsOfCurve = function (p0, p1, p2, p3) {
    var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];

    for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) {
      // eslint-disable-line no-plusplus
      b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
      a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
      c = 3 * p1[i] - 3 * p0[i];
      b |= 0; // eslint-disable-line no-bitwise

      a |= 0; // eslint-disable-line no-bitwise

      c |= 0; // eslint-disable-line no-bitwise

      if (a === 0 && b === 0) {//
      } else if (a === 0) {
        t = -c / b;

        if (t > 0 && t < 1) {
          bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
        }
      } else {
        b2ac = b * b - 4 * c * a;

        if (b2ac >= 0) {
          t1 = (-b + bmSqrt(b2ac)) / (2 * a);
          if (t1 > 0 && t1 < 1) bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
          t2 = (-b - bmSqrt(b2ac)) / (2 * a);
          if (t2 > 0 && t2 < 1) bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
        }
      }
    }

    this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
    this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
    this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
    this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
  };

  HShapeElement.prototype.calculateF = function (t, p0, p1, p2, p3, i) {
    return bmPow(1 - t, 3) * p0[i] + 3 * bmPow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * bmPow(t, 2) * p2[i] + bmPow(t, 3) * p3[i];
  };

  HShapeElement.prototype.calculateBoundingBox = function (itemsData, boundingBox) {
    var i;
    var len = itemsData.length;

    for (i = 0; i < len; i += 1) {
      if (itemsData[i] && itemsData[i].sh) {
        this.calculateShapeBoundingBox(itemsData[i], boundingBox);
      } else if (itemsData[i] && itemsData[i].it) {
        this.calculateBoundingBox(itemsData[i].it, boundingBox);
      } else if (itemsData[i] && itemsData[i].style && itemsData[i].w) {
        this.expandStrokeBoundingBox(itemsData[i].w, boundingBox);
      }
    }
  };

  HShapeElement.prototype.expandStrokeBoundingBox = function (widthProperty, boundingBox) {
    var width = 0;

    if (widthProperty.keyframes) {
      for (var i = 0; i < widthProperty.keyframes.length; i += 1) {
        var kfw = widthProperty.keyframes[i].s;

        if (kfw > width) {
          width = kfw;
        }
      }

      width *= widthProperty.mult;
    } else {
      width = widthProperty.v * widthProperty.mult;
    }

    boundingBox.x -= width;
    boundingBox.xMax += width;
    boundingBox.y -= width;
    boundingBox.yMax += width;
  };

  HShapeElement.prototype.currentBoxContains = function (box) {
    return this.currentBBox.x <= box.x && this.currentBBox.y <= box.y && this.currentBBox.width + this.currentBBox.x >= box.x + box.width && this.currentBBox.height + this.currentBBox.y >= box.y + box.height;
  };

  HShapeElement.prototype.renderInnerContent = function () {
    this._renderShapeFrame();

    if (!this.hidden && (this._isFirstFrame || this._mdf)) {
      var tempBoundingBox = this.tempBoundingBox;
      var max = 999999;
      tempBoundingBox.x = max;
      tempBoundingBox.xMax = -max;
      tempBoundingBox.y = max;
      tempBoundingBox.yMax = -max;
      this.calculateBoundingBox(this.itemsData, tempBoundingBox);
      tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
      tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y; // var tempBoundingBox = this.shapeCont.getBBox();

      if (this.currentBoxContains(tempBoundingBox)) {
        return;
      }

      var changed = false;

      if (this.currentBBox.w !== tempBoundingBox.width) {
        this.currentBBox.w = tempBoundingBox.width;
        this.shapeCont.setAttribute('width', tempBoundingBox.width);
        changed = true;
      }

      if (this.currentBBox.h !== tempBoundingBox.height) {
        this.currentBBox.h = tempBoundingBox.height;
        this.shapeCont.setAttribute('height', tempBoundingBox.height);
        changed = true;
      }

      if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
        this.currentBBox.w = tempBoundingBox.width;
        this.currentBBox.h = tempBoundingBox.height;
        this.currentBBox.x = tempBoundingBox.x;
        this.currentBBox.y = tempBoundingBox.y;
        this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
        var shapeStyle = this.shapeCont.style;
        var shapeTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        shapeStyle.transform = shapeTransform;
        shapeStyle.webkitTransform = shapeTransform;
      }
    }
  };

  function HTextElement(data, globalData, comp) {
    this.textSpans = [];
    this.textPaths = [];
    this.currentBBox = {
      x: 999999,
      y: -999999,
      h: 0,
      w: 0
    };
    this.renderType = 'svg';
    this.isMasked = false;
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);

  HTextElement.prototype.createContent = function () {
    this.isMasked = this.checkMasks();

    if (this.isMasked) {
      this.renderType = 'svg';
      this.compW = this.comp.data.w;
      this.compH = this.comp.data.h;
      this.svgElement.setAttribute('width', this.compW);
      this.svgElement.setAttribute('height', this.compH);
      var g = createNS('g');
      this.maskedElement.appendChild(g);
      this.innerElem = g;
    } else {
      this.renderType = 'html';
      this.innerElem = this.layerElement;
    }

    this.checkParenting();
  };

  HTextElement.prototype.buildNewText = function () {
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
    var innerElemStyle = this.innerElem.style;
    var textColor = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
    innerElemStyle.fill = textColor;
    innerElemStyle.color = textColor;

    if (documentData.sc) {
      innerElemStyle.stroke = this.buildColor(documentData.sc);
      innerElemStyle.strokeWidth = documentData.sw + 'px';
    }

    var fontData = this.globalData.fontManager.getFontByName(documentData.f);

    if (!this.globalData.fontManager.chars) {
      innerElemStyle.fontSize = documentData.finalSize + 'px';
      innerElemStyle.lineHeight = documentData.finalSize + 'px';

      if (fontData.fClass) {
        this.innerElem.className = fontData.fClass;
      } else {
        innerElemStyle.fontFamily = fontData.fFamily;
        var fWeight = documentData.fWeight;
        var fStyle = documentData.fStyle;
        innerElemStyle.fontStyle = fStyle;
        innerElemStyle.fontWeight = fWeight;
      }
    }

    var i;
    var len;
    var letters = documentData.l;
    len = letters.length;
    var tSpan;
    var tParent;
    var tCont;
    var matrixHelper = this.mHelper;
    var shapes;
    var shapeStr = '';
    var cnt = 0;

    for (i = 0; i < len; i += 1) {
      if (this.globalData.fontManager.chars) {
        if (!this.textPaths[cnt]) {
          tSpan = createNS('path');
          tSpan.setAttribute('stroke-linecap', lineCapEnum[1]);
          tSpan.setAttribute('stroke-linejoin', lineJoinEnum[2]);
          tSpan.setAttribute('stroke-miterlimit', '4');
        } else {
          tSpan = this.textPaths[cnt];
        }

        if (!this.isMasked) {
          if (this.textSpans[cnt]) {
            tParent = this.textSpans[cnt];
            tCont = tParent.children[0];
          } else {
            tParent = createTag('div');
            tParent.style.lineHeight = 0;
            tCont = createNS('svg');
            tCont.appendChild(tSpan);
            styleDiv(tParent);
          }
        }
      } else if (!this.isMasked) {
        if (this.textSpans[cnt]) {
          tParent = this.textSpans[cnt];
          tSpan = this.textPaths[cnt];
        } else {
          tParent = createTag('span');
          styleDiv(tParent);
          tSpan = createTag('span');
          styleDiv(tSpan);
          tParent.appendChild(tSpan);
        }
      } else {
        tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
      } // tSpan.setAttribute('visibility', 'hidden');


      if (this.globalData.fontManager.chars) {
        var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        var shapeData;

        if (charData) {
          shapeData = charData.data;
        } else {
          shapeData = null;
        }

        matrixHelper.reset();

        if (shapeData && shapeData.shapes && shapeData.shapes.length) {
          shapes = shapeData.shapes[0].it;
          matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
          shapeStr = this.createPathShape(matrixHelper, shapes);
          tSpan.setAttribute('d', shapeStr);
        }

        if (!this.isMasked) {
          this.innerElem.appendChild(tParent);

          if (shapeData && shapeData.shapes) {
            // document.body.appendChild is needed to get exact measure of shape
            document.body.appendChild(tCont);
            var boundingBox = tCont.getBBox();
            tCont.setAttribute('width', boundingBox.width + 2);
            tCont.setAttribute('height', boundingBox.height + 2);
            tCont.setAttribute('viewBox', boundingBox.x - 1 + ' ' + (boundingBox.y - 1) + ' ' + (boundingBox.width + 2) + ' ' + (boundingBox.height + 2));
            var tContStyle = tCont.style;
            var tContTranslation = 'translate(' + (boundingBox.x - 1) + 'px,' + (boundingBox.y - 1) + 'px)';
            tContStyle.transform = tContTranslation;
            tContStyle.webkitTransform = tContTranslation;
            letters[i].yOffset = boundingBox.y - 1;
          } else {
            tCont.setAttribute('width', 1);
            tCont.setAttribute('height', 1);
          }

          tParent.appendChild(tCont);
        } else {
          this.innerElem.appendChild(tSpan);
        }
      } else {
        tSpan.textContent = letters[i].val;
        tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');

        if (!this.isMasked) {
          this.innerElem.appendChild(tParent); //

          var tStyle = tSpan.style;
          var tSpanTranslation = 'translate3d(0,' + -documentData.finalSize / 1.2 + 'px,0)';
          tStyle.transform = tSpanTranslation;
          tStyle.webkitTransform = tSpanTranslation;
        } else {
          this.innerElem.appendChild(tSpan);
        }
      } //


      if (!this.isMasked) {
        this.textSpans[cnt] = tParent;
      } else {
        this.textSpans[cnt] = tSpan;
      }

      this.textSpans[cnt].style.display = 'block';
      this.textPaths[cnt] = tSpan;
      cnt += 1;
    }

    while (cnt < this.textSpans.length) {
      this.textSpans[cnt].style.display = 'none';
      cnt += 1;
    }
  };

  HTextElement.prototype.renderInnerContent = function () {
    this.validateText();
    var svgStyle;

    if (this.data.singleShape) {
      if (!this._isFirstFrame && !this.lettersChangedFlag) {
        return;
      }

      if (this.isMasked && this.finalTransform._matMdf) {
        // Todo Benchmark if using this is better than getBBox
        this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH);
        svgStyle = this.svgElement.style;
        var translation = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
        svgStyle.transform = translation;
        svgStyle.webkitTransform = translation;
      }
    }

    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);

    if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
      return;
    }

    var i;
    var len;
    var count = 0;
    var renderedLetters = this.textAnimator.renderedLetters;
    var letters = this.textProperty.currentData.l;
    len = letters.length;
    var renderedLetter;
    var textSpan;
    var textPath;

    for (i = 0; i < len; i += 1) {
      if (letters[i].n) {
        count += 1;
      } else {
        textSpan = this.textSpans[i];
        textPath = this.textPaths[i];
        renderedLetter = renderedLetters[count];
        count += 1;

        if (renderedLetter._mdf.m) {
          if (!this.isMasked) {
            textSpan.style.webkitTransform = renderedLetter.m;
            textSpan.style.transform = renderedLetter.m;
          } else {
            textSpan.setAttribute('transform', renderedLetter.m);
          }
        } /// /textSpan.setAttribute('opacity',renderedLetter.o);


        textSpan.style.opacity = renderedLetter.o;

        if (renderedLetter.sw && renderedLetter._mdf.sw) {
          textPath.setAttribute('stroke-width', renderedLetter.sw);
        }

        if (renderedLetter.sc && renderedLetter._mdf.sc) {
          textPath.setAttribute('stroke', renderedLetter.sc);
        }

        if (renderedLetter.fc && renderedLetter._mdf.fc) {
          textPath.setAttribute('fill', renderedLetter.fc);
          textPath.style.color = renderedLetter.fc;
        }
      }
    }

    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
      var boundingBox = this.innerElem.getBBox();

      if (this.currentBBox.w !== boundingBox.width) {
        this.currentBBox.w = boundingBox.width;
        this.svgElement.setAttribute('width', boundingBox.width);
      }

      if (this.currentBBox.h !== boundingBox.height) {
        this.currentBBox.h = boundingBox.height;
        this.svgElement.setAttribute('height', boundingBox.height);
      }

      var margin = 1;

      if (this.currentBBox.w !== boundingBox.width + margin * 2 || this.currentBBox.h !== boundingBox.height + margin * 2 || this.currentBBox.x !== boundingBox.x - margin || this.currentBBox.y !== boundingBox.y - margin) {
        this.currentBBox.w = boundingBox.width + margin * 2;
        this.currentBBox.h = boundingBox.height + margin * 2;
        this.currentBBox.x = boundingBox.x - margin;
        this.currentBBox.y = boundingBox.y - margin;
        this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
        svgStyle = this.svgElement.style;
        var svgTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        svgStyle.transform = svgTransform;
        svgStyle.webkitTransform = svgTransform;
      }
    }
  };

  function HCameraElement(data, globalData, comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initHierarchy();
    var getProp = PropertyFactory.getProp;
    this.pe = getProp(this, data.pe, 0, 0, this);

    if (data.ks.p.s) {
      this.px = getProp(this, data.ks.p.x, 1, 0, this);
      this.py = getProp(this, data.ks.p.y, 1, 0, this);
      this.pz = getProp(this, data.ks.p.z, 1, 0, this);
    } else {
      this.p = getProp(this, data.ks.p, 1, 0, this);
    }

    if (data.ks.a) {
      this.a = getProp(this, data.ks.a, 1, 0, this);
    }

    if (data.ks.or.k.length && data.ks.or.k[0].to) {
      var i;
      var len = data.ks.or.k.length;

      for (i = 0; i < len; i += 1) {
        data.ks.or.k[i].to = null;
        data.ks.or.k[i].ti = null;
      }
    }

    this.or = getProp(this, data.ks.or, 1, degToRads, this);
    this.or.sh = true;
    this.rx = getProp(this, data.ks.rx, 0, degToRads, this);
    this.ry = getProp(this, data.ks.ry, 0, degToRads, this);
    this.rz = getProp(this, data.ks.rz, 0, degToRads, this);
    this.mat = new Matrix();
    this._prevMat = new Matrix();
    this._isFirstFrame = true; // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.

    this.finalTransform = {
      mProp: this
    };
  }

  extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);

  HCameraElement.prototype.setup = function () {
    var i;
    var len = this.comp.threeDElements.length;
    var comp;
    var perspectiveStyle;
    var containerStyle;

    for (i = 0; i < len; i += 1) {
      // [perspectiveElem,container]
      comp = this.comp.threeDElements[i];

      if (comp.type === '3d') {
        perspectiveStyle = comp.perspectiveElem.style;
        containerStyle = comp.container.style;
        var perspective = this.pe.v + 'px';
        var origin = '0px 0px 0px';
        var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
        perspectiveStyle.perspective = perspective;
        perspectiveStyle.webkitPerspective = perspective;
        containerStyle.transformOrigin = origin;
        containerStyle.mozTransformOrigin = origin;
        containerStyle.webkitTransformOrigin = origin;
        perspectiveStyle.transform = matrix;
        perspectiveStyle.webkitTransform = matrix;
      }
    }
  };

  HCameraElement.prototype.createElements = function () {};

  HCameraElement.prototype.hide = function () {};

  HCameraElement.prototype.renderFrame = function () {
    var _mdf = this._isFirstFrame;
    var i;
    var len;

    if (this.hierarchy) {
      len = this.hierarchy.length;

      for (i = 0; i < len; i += 1) {
        _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
      }
    }

    if (_mdf || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
      this.mat.reset();

      if (this.hierarchy) {
        len = this.hierarchy.length - 1;

        for (i = len; i >= 0; i -= 1) {
          var mTransf = this.hierarchy[i].finalTransform.mProp;
          this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
          this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
          this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
          this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
          this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
        }
      }

      if (this.p) {
        this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
      } else {
        this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
      }

      if (this.a) {
        var diffVector;

        if (this.p) {
          diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
        } else {
          diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
        }

        var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2)); // var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));

        var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
        var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
        var mRotationX = Math.atan2(lookDir[1], lookLengthOnXZ);
        var mRotationY = Math.atan2(lookDir[0], -lookDir[2]);
        this.mat.rotateY(mRotationY).rotateX(-mRotationX);
      }

      this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
      this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
      this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
      this.mat.translate(0, 0, this.pe.v);
      var hasMatrixChanged = !this._prevMat.equals(this.mat);

      if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
        len = this.comp.threeDElements.length;
        var comp;
        var perspectiveStyle;
        var containerStyle;

        for (i = 0; i < len; i += 1) {
          comp = this.comp.threeDElements[i];

          if (comp.type === '3d') {
            if (hasMatrixChanged) {
              var matValue = this.mat.toCSS();
              containerStyle = comp.container.style;
              containerStyle.transform = matValue;
              containerStyle.webkitTransform = matValue;
            }

            if (this.pe._mdf) {
              perspectiveStyle = comp.perspectiveElem.style;
              perspectiveStyle.perspective = this.pe.v + 'px';
              perspectiveStyle.webkitPerspective = this.pe.v + 'px';
            }
          }
        }

        this.mat.clone(this._prevMat);
      }
    }

    this._isFirstFrame = false;
  };

  HCameraElement.prototype.prepareFrame = function (num) {
    this.prepareProperties(num, true);
  };

  HCameraElement.prototype.destroy = function () {};

  HCameraElement.prototype.getBaseElement = function () {
    return null;
  };

  function HImageElement(data, globalData, comp) {
    this.assetData = globalData.getAssetData(data.refId);
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);

  HImageElement.prototype.createContent = function () {
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    var img = new Image();

    if (this.data.hasMask) {
      this.imageElem = createNS('image');
      this.imageElem.setAttribute('width', this.assetData.w + 'px');
      this.imageElem.setAttribute('height', this.assetData.h + 'px');
      this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
      this.layerElement.appendChild(this.imageElem);
      this.baseElement.setAttribute('width', this.assetData.w);
      this.baseElement.setAttribute('height', this.assetData.h);
    } else {
      this.layerElement.appendChild(img);
    }

    img.crossOrigin = 'anonymous';
    img.src = assetPath;

    if (this.data.ln) {
      this.baseElement.setAttribute('id', this.data.ln);
    }
  };

  function HybridRendererBase(animationItem, config) {
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.renderConfig = {
      className: config && config.className || '',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      hideOnTransparent: !(config && config.hideOnTransparent === false),
      filterSize: {
        width: config && config.filterSize && config.filterSize.width || '400%',
        height: config && config.filterSize && config.filterSize.height || '400%',
        x: config && config.filterSize && config.filterSize.x || '-100%',
        y: config && config.filterSize && config.filterSize.y || '-100%'
      }
    };
    this.globalData = {
      _mdf: false,
      frameNum: -1,
      renderConfig: this.renderConfig
    };
    this.pendingElements = [];
    this.elements = [];
    this.threeDElements = [];
    this.destroyed = false;
    this.camera = null;
    this.supports3d = true;
    this.rendererType = 'html';
  }

  extendPrototype([BaseRenderer], HybridRendererBase);
  HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem;

  HybridRendererBase.prototype.checkPendingElements = function () {
    while (this.pendingElements.length) {
      var element = this.pendingElements.pop();
      element.checkParenting();
    }
  };

  HybridRendererBase.prototype.appendElementInPos = function (element, pos) {
    var newDOMElement = element.getBaseElement();

    if (!newDOMElement) {
      return;
    }

    var layer = this.layers[pos];

    if (!layer.ddd || !this.supports3d) {
      if (this.threeDElements) {
        this.addTo3dContainer(newDOMElement, pos);
      } else {
        var i = 0;
        var nextDOMElement;
        var nextLayer;
        var tmpDOMElement;

        while (i < pos) {
          if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
            nextLayer = this.elements[i];
            tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
            nextDOMElement = tmpDOMElement || nextDOMElement;
          }

          i += 1;
        }

        if (nextDOMElement) {
          if (!layer.ddd || !this.supports3d) {
            this.layerElement.insertBefore(newDOMElement, nextDOMElement);
          }
        } else if (!layer.ddd || !this.supports3d) {
          this.layerElement.appendChild(newDOMElement);
        }
      }
    } else {
      this.addTo3dContainer(newDOMElement, pos);
    }
  };

  HybridRendererBase.prototype.createShape = function (data) {
    if (!this.supports3d) {
      return new SVGShapeElement(data, this.globalData, this);
    }

    return new HShapeElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createText = function (data) {
    if (!this.supports3d) {
      return new SVGTextLottieElement(data, this.globalData, this);
    }

    return new HTextElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createCamera = function (data) {
    this.camera = new HCameraElement(data, this.globalData, this);
    return this.camera;
  };

  HybridRendererBase.prototype.createImage = function (data) {
    if (!this.supports3d) {
      return new IImageElement(data, this.globalData, this);
    }

    return new HImageElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createSolid = function (data) {
    if (!this.supports3d) {
      return new ISolidElement(data, this.globalData, this);
    }

    return new HSolidElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;

  HybridRendererBase.prototype.getThreeDContainerByPos = function (pos) {
    var i = 0;
    var len = this.threeDElements.length;

    while (i < len) {
      if (this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
        return this.threeDElements[i].perspectiveElem;
      }

      i += 1;
    }

    return null;
  };

  HybridRendererBase.prototype.createThreeDContainer = function (pos, type) {
    var perspectiveElem = createTag('div');
    var style;
    var containerStyle;
    styleDiv(perspectiveElem);
    var container = createTag('div');
    styleDiv(container);

    if (type === '3d') {
      style = perspectiveElem.style;
      style.width = this.globalData.compSize.w + 'px';
      style.height = this.globalData.compSize.h + 'px';
      var center = '50% 50%';
      style.webkitTransformOrigin = center;
      style.mozTransformOrigin = center;
      style.transformOrigin = center;
      containerStyle = container.style;
      var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
      containerStyle.transform = matrix;
      containerStyle.webkitTransform = matrix;
    }

    perspectiveElem.appendChild(container); // this.resizerElem.appendChild(perspectiveElem);

    var threeDContainerData = {
      container: container,
      perspectiveElem: perspectiveElem,
      startPos: pos,
      endPos: pos,
      type: type
    };
    this.threeDElements.push(threeDContainerData);
    return threeDContainerData;
  };

  HybridRendererBase.prototype.build3dContainers = function () {
    var i;
    var len = this.layers.length;
    var lastThreeDContainerData;
    var currentContainer = '';

    for (i = 0; i < len; i += 1) {
      if (this.layers[i].ddd && this.layers[i].ty !== 3) {
        if (currentContainer !== '3d') {
          currentContainer = '3d';
          lastThreeDContainerData = this.createThreeDContainer(i, '3d');
        }

        lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
      } else {
        if (currentContainer !== '2d') {
          currentContainer = '2d';
          lastThreeDContainerData = this.createThreeDContainer(i, '2d');
        }

        lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
      }
    }

    len = this.threeDElements.length;

    for (i = len - 1; i >= 0; i -= 1) {
      this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
    }
  };

  HybridRendererBase.prototype.addTo3dContainer = function (elem, pos) {
    var i = 0;
    var len = this.threeDElements.length;

    while (i < len) {
      if (pos <= this.threeDElements[i].endPos) {
        var j = this.threeDElements[i].startPos;
        var nextElement;

        while (j < pos) {
          if (this.elements[j] && this.elements[j].getBaseElement) {
            nextElement = this.elements[j].getBaseElement();
          }

          j += 1;
        }

        if (nextElement) {
          this.threeDElements[i].container.insertBefore(elem, nextElement);
        } else {
          this.threeDElements[i].container.appendChild(elem);
        }

        break;
      }

      i += 1;
    }
  };

  HybridRendererBase.prototype.configAnimation = function (animData) {
    var resizerElem = createTag('div');
    var wrapper = this.animationItem.wrapper;
    var style = resizerElem.style;
    style.width = animData.w + 'px';
    style.height = animData.h + 'px';
    this.resizerElem = resizerElem;
    styleDiv(resizerElem);
    style.transformStyle = 'flat';
    style.mozTransformStyle = 'flat';
    style.webkitTransformStyle = 'flat';

    if (this.renderConfig.className) {
      resizerElem.setAttribute('class', this.renderConfig.className);
    }

    wrapper.appendChild(resizerElem);
    style.overflow = 'hidden';
    var svg = createNS('svg');
    svg.setAttribute('width', '1');
    svg.setAttribute('height', '1');
    styleDiv(svg);
    this.resizerElem.appendChild(svg);
    var defs = createNS('defs');
    svg.appendChild(defs);
    this.data = animData; // Mask animation

    this.setupGlobalData(animData, svg);
    this.globalData.defs = defs;
    this.layers = animData.layers;
    this.layerElement = this.resizerElem;
    this.build3dContainers();
    this.updateContainerSize();
  };

  HybridRendererBase.prototype.destroy = function () {
    if (this.animationItem.wrapper) {
      this.animationItem.wrapper.innerText = '';
    }

    this.animationItem.container = null;
    this.globalData.defs = null;
    var i;
    var len = this.layers ? this.layers.length : 0;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i] && this.elements[i].destroy) {
        this.elements[i].destroy();
      }
    }

    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
  };

  HybridRendererBase.prototype.updateContainerSize = function () {
    var elementWidth = this.animationItem.wrapper.offsetWidth;
    var elementHeight = this.animationItem.wrapper.offsetHeight;
    var elementRel = elementWidth / elementHeight;
    var animationRel = this.globalData.compSize.w / this.globalData.compSize.h;
    var sx;
    var sy;
    var tx;
    var ty;

    if (animationRel > elementRel) {
      sx = elementWidth / this.globalData.compSize.w;
      sy = elementWidth / this.globalData.compSize.w;
      tx = 0;
      ty = (elementHeight - this.globalData.compSize.h * (elementWidth / this.globalData.compSize.w)) / 2;
    } else {
      sx = elementHeight / this.globalData.compSize.h;
      sy = elementHeight / this.globalData.compSize.h;
      tx = (elementWidth - this.globalData.compSize.w * (elementHeight / this.globalData.compSize.h)) / 2;
      ty = 0;
    }

    var style = this.resizerElem.style;
    style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,' + sy + ',0,0,0,0,1,0,' + tx + ',' + ty + ',0,1)';
    style.transform = style.webkitTransform;
  };

  HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

  HybridRendererBase.prototype.hide = function () {
    this.resizerElem.style.display = 'none';
  };

  HybridRendererBase.prototype.show = function () {
    this.resizerElem.style.display = 'block';
  };

  HybridRendererBase.prototype.initItems = function () {
    this.buildAllItems();

    if (this.camera) {
      this.camera.setup();
    } else {
      var cWidth = this.globalData.compSize.w;
      var cHeight = this.globalData.compSize.h;
      var i;
      var len = this.threeDElements.length;

      for (i = 0; i < len; i += 1) {
        var style = this.threeDElements[i].perspectiveElem.style;
        style.webkitPerspective = Math.sqrt(Math.pow(cWidth, 2) + Math.pow(cHeight, 2)) + 'px';
        style.perspective = style.webkitPerspective;
      }
    }
  };

  HybridRendererBase.prototype.searchExtraCompositions = function (assets) {
    var i;
    var len = assets.length;
    var floatingContainer = createTag('div');

    for (i = 0; i < len; i += 1) {
      if (assets[i].xt) {
        var comp = this.createComp(assets[i], floatingContainer, this.globalData.comp, null);
        comp.initExpressions();
        this.globalData.projectInterface.registerComposition(comp);
      }
    }
  };

  function HCompElement(data, globalData, comp) {
    this.layers = data.layers;
    this.supports3d = !data.hasMask;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
  }

  extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement);
  HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

  HCompElement.prototype.createContainerElements = function () {
    this._createBaseContainerElements(); // divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';


    if (this.data.hasMask) {
      this.svgElement.setAttribute('width', this.data.w);
      this.svgElement.setAttribute('height', this.data.h);
      this.transformedElement = this.baseElement;
    } else {
      this.transformedElement = this.layerElement;
    }
  };

  HCompElement.prototype.addTo3dContainer = function (elem, pos) {
    var j = 0;
    var nextElement;

    while (j < pos) {
      if (this.elements[j] && this.elements[j].getBaseElement) {
        nextElement = this.elements[j].getBaseElement();
      }

      j += 1;
    }

    if (nextElement) {
      this.layerElement.insertBefore(elem, nextElement);
    } else {
      this.layerElement.appendChild(elem);
    }
  };

  HCompElement.prototype.createComp = function (data) {
    if (!this.supports3d) {
      return new SVGCompElement(data, this.globalData, this);
    }

    return new HCompElement(data, this.globalData, this);
  };

  function HybridRenderer(animationItem, config) {
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.renderConfig = {
      className: config && config.className || '',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      hideOnTransparent: !(config && config.hideOnTransparent === false),
      filterSize: {
        width: config && config.filterSize && config.filterSize.width || '400%',
        height: config && config.filterSize && config.filterSize.height || '400%',
        x: config && config.filterSize && config.filterSize.x || '-100%',
        y: config && config.filterSize && config.filterSize.y || '-100%'
      },
      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
    };
    this.globalData = {
      _mdf: false,
      frameNum: -1,
      renderConfig: this.renderConfig
    };
    this.pendingElements = [];
    this.elements = [];
    this.threeDElements = [];
    this.destroyed = false;
    this.camera = null;
    this.supports3d = true;
    this.rendererType = 'html';
  }

  extendPrototype([HybridRendererBase], HybridRenderer);

  HybridRenderer.prototype.createComp = function (data) {
    if (!this.supports3d) {
      return new SVGCompElement(data, this.globalData, this);
    }

    return new HCompElement(data, this.globalData, this);
  };

  var CompExpressionInterface = function () {
    return function (comp) {
      function _thisLayerFunction(name) {
        var i = 0;
        var len = comp.layers.length;

        while (i < len) {
          if (comp.layers[i].nm === name || comp.layers[i].ind === name) {
            return comp.elements[i].layerInterface;
          }

          i += 1;
        }

        return null; // return {active:false};
      }

      Object.defineProperty(_thisLayerFunction, '_name', {
        value: comp.data.nm
      });
      _thisLayerFunction.layer = _thisLayerFunction;
      _thisLayerFunction.pixelAspect = 1;
      _thisLayerFunction.height = comp.data.h || comp.globalData.compSize.h;
      _thisLayerFunction.width = comp.data.w || comp.globalData.compSize.w;
      _thisLayerFunction.pixelAspect = 1;
      _thisLayerFunction.frameDuration = 1 / comp.globalData.frameRate;
      _thisLayerFunction.displayStartTime = 0;
      _thisLayerFunction.numLayers = comp.layers.length;
      return _thisLayerFunction;
    };
  }();

  function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

  /* eslint-disable */

  /*
   Copyright 2014 David Bau.

   Permission is hereby granted, free of charge, to any person obtaining
   a copy of this software and associated documentation files (the
   "Software"), to deal in the Software without restriction, including
   without limitation the rights to use, copy, modify, merge, publish,
   distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to
   the following conditions:

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

   */
  function seedRandom(pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var global = this,
        width = 256,
        // each RC4 output is 0 <= x < 256
    chunks = 6,
        // at least six RC4 outputs for each double
    digits = 52,
        // there are 52 significant digits in a double
    rngname = 'random',
        // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto; // node.js crypto module, initialized at the bottom.
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //

    function seedrandom(seed, options, callback) {
      var key = [];
      options = options === true ? {
        entropy: true
      } : options || {}; // Flatten the seed string or build one from local entropy if needed.

      var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed === null ? autoseed() : seed, 3), key); // Use the seed to initialize an ARC4 generator.

      var arc4 = new ARC4(key); // This function returns a random double in [0, 1) that contains
      // randomness in every bit of the mantissa of the IEEE 754 value.

      var prng = function prng() {
        var n = arc4.g(chunks),
            // Start with a numerator n < 2 ^ 48
        d = startdenom,
            //   and denominator d = 2 ^ 48.
        x = 0; //   and no 'extra last byte'.

        while (n < significance) {
          // Fill up all significant digits by
          n = (n + x) * width; //   shifting numerator and

          d *= width; //   denominator and generating a

          x = arc4.g(1); //   new least-significant-byte.
        }

        while (n >= overflow) {
          // To avoid rounding up, before adding
          n /= 2; //   last byte, shift everything

          d /= 2; //   right using integer math until

          x >>>= 1; //   we have exactly the desired bits.
        }

        return (n + x) / d; // Form the number within [0, 1).
      };

      prng.int32 = function () {
        return arc4.g(4) | 0;
      };

      prng.quick = function () {
        return arc4.g(4) / 0x100000000;
      };

      prng["double"] = prng; // Mix the randomness into accumulated entropy.

      mixkey(tostring(arc4.S), pool); // Calling convention: what to return as a function of prng, seed, is_math.

      return (options.pass || callback || function (prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) {
            copy(state, arc4);
          } // Only provide the .state method if requested via options.state.


          prng.state = function () {
            return copy(arc4, {});
          };
        } // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.


        if (is_math_call) {
          math[rngname] = prng;
          return seed;
        } // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
    }

    math['seed' + rngname] = seedrandom; //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //

    function ARC4(key) {
      var t,
          keylen = key.length,
          me = this,
          i = 0,
          j = me.i = me.j = 0,
          s = me.S = []; // The empty key [] is treated as [0].

      if (!keylen) {
        key = [keylen++];
      } // Set up S using the standard key scheduling algorithm.


      while (i < width) {
        s[i] = i++;
      }

      for (i = 0; i < width; i++) {
        s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
        s[j] = t;
      } // The "g" method returns the next (count) outputs as one number.


      me.g = function (count) {
        // Using instance members instead of closure state nearly doubles speed.
        var t,
            r = 0,
            i = me.i,
            j = me.j,
            s = me.S;

        while (count--) {
          t = s[i = mask & i + 1];
          r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
        }

        me.i = i;
        me.j = j;
        return r; // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
      };
    } //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //


    function copy(f, t) {
      t.i = f.i;
      t.j = f.j;
      t.S = f.S.slice();
      return t;
    } //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //


    function flatten(obj, depth) {
      var result = [],
          typ = _typeof$2(obj),
          prop;

      if (depth && typ == 'object') {
        for (prop in obj) {
          try {
            result.push(flatten(obj[prop], depth - 1));
          } catch (e) {}
        }
      }

      return result.length ? result : typ == 'string' ? obj : obj + '\0';
    } //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //


    function mixkey(seed, key) {
      var stringseed = seed + '',
          smear,
          j = 0;

      while (j < stringseed.length) {
        key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
      }

      return tostring(key);
    } //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //


    function autoseed() {
      try {
        if (nodecrypto) {
          return tostring(nodecrypto.randomBytes(width));
        }

        var out = new Uint8Array(width);
        (global.crypto || global.msCrypto).getRandomValues(out);
        return tostring(out);
      } catch (e) {
        var browser = global.navigator,
            plugins = browser && browser.plugins;
        return [+new Date(), global, plugins, global.screen, tostring(pool)];
      }
    } //
    // tostring()
    // Converts an array of charcodes to a string
    //


    function tostring(a) {
      return String.fromCharCode.apply(0, a);
    } //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //


    mixkey(math.random(), pool); //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    // End anonymous scope, and pass initial values.
  }

  ;

  function initialize$2(BMMath) {
    seedRandom([], BMMath);
  }

  var propTypes = {
    SHAPE: 'shape'
  };

  function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

  var ExpressionManager = function () {
    'use strict';

    var ob = {};
    var Math = BMMath;
    var window = null;
    var document = null;
    var XMLHttpRequest = null;
    var fetch = null;
    var frames = null;
    var _lottieGlobal = {};
    initialize$2(BMMath);

    function resetFrame() {
      _lottieGlobal = {};
    }

    function $bm_isInstanceOfArray(arr) {
      return arr.constructor === Array || arr.constructor === Float32Array;
    }

    function isNumerable(tOfV, v) {
      return tOfV === 'number' || v instanceof Number || tOfV === 'boolean' || tOfV === 'string';
    }

    function $bm_neg(a) {
      var tOfA = _typeof$1(a);

      if (tOfA === 'number' || a instanceof Number || tOfA === 'boolean') {
        return -a;
      }

      if ($bm_isInstanceOfArray(a)) {
        var i;
        var lenA = a.length;
        var retArr = [];

        for (i = 0; i < lenA; i += 1) {
          retArr[i] = -a[i];
        }

        return retArr;
      }

      if (a.propType) {
        return a.v;
      }

      return -a;
    }

    var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get;
    var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get;
    var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;

    function sum(a, b) {
      var tOfA = _typeof$1(a);

      var tOfB = _typeof$1(b);

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b) || tOfA === 'string' || tOfB === 'string') {
        return a + b;
      }

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        a = a.slice(0);
        a[0] += b;
        return a;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        b = b.slice(0);
        b[0] = a + b[0];
        return b;
      }

      if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
        var i = 0;
        var lenA = a.length;
        var lenB = b.length;
        var retArr = [];

        while (i < lenA || i < lenB) {
          if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
            retArr[i] = a[i] + b[i];
          } else {
            retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
          }

          i += 1;
        }

        return retArr;
      }

      return 0;
    }

    var add = sum;

    function sub(a, b) {
      var tOfA = _typeof$1(a);

      var tOfB = _typeof$1(b);

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
        if (tOfA === 'string') {
          a = parseInt(a, 10);
        }

        if (tOfB === 'string') {
          b = parseInt(b, 10);
        }

        return a - b;
      }

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        a = a.slice(0);
        a[0] -= b;
        return a;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        b = b.slice(0);
        b[0] = a - b[0];
        return b;
      }

      if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
        var i = 0;
        var lenA = a.length;
        var lenB = b.length;
        var retArr = [];

        while (i < lenA || i < lenB) {
          if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
            retArr[i] = a[i] - b[i];
          } else {
            retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
          }

          i += 1;
        }

        return retArr;
      }

      return 0;
    }

    function mul(a, b) {
      var tOfA = _typeof$1(a);

      var tOfB = _typeof$1(b);

      var arr;

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
        return a * b;
      }

      var i;
      var len;

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        len = a.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a[i] * b;
        }

        return arr;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        len = b.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a * b[i];
        }

        return arr;
      }

      return 0;
    }

    function div(a, b) {
      var tOfA = _typeof$1(a);

      var tOfB = _typeof$1(b);

      var arr;

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
        return a / b;
      }

      var i;
      var len;

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        len = a.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a[i] / b;
        }

        return arr;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        len = b.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a / b[i];
        }

        return arr;
      }

      return 0;
    }

    function mod(a, b) {
      if (typeof a === 'string') {
        a = parseInt(a, 10);
      }

      if (typeof b === 'string') {
        b = parseInt(b, 10);
      }

      return a % b;
    }

    var $bm_sum = sum;
    var $bm_sub = sub;
    var $bm_mul = mul;
    var $bm_div = div;
    var $bm_mod = mod;

    function clamp(num, min, max) {
      if (min > max) {
        var mm = max;
        max = min;
        min = mm;
      }

      return Math.min(Math.max(num, min), max);
    }

    function radiansToDegrees(val) {
      return val / degToRads;
    }

    var radians_to_degrees = radiansToDegrees;

    function degreesToRadians(val) {
      return val * degToRads;
    }

    var degrees_to_radians = radiansToDegrees;
    var helperLengthArray = [0, 0, 0, 0, 0, 0];

    function length(arr1, arr2) {
      if (typeof arr1 === 'number' || arr1 instanceof Number) {
        arr2 = arr2 || 0;
        return Math.abs(arr1 - arr2);
      }

      if (!arr2) {
        arr2 = helperLengthArray;
      }

      var i;
      var len = Math.min(arr1.length, arr2.length);
      var addedLength = 0;

      for (i = 0; i < len; i += 1) {
        addedLength += Math.pow(arr2[i] - arr1[i], 2);
      }

      return Math.sqrt(addedLength);
    }

    function normalize(vec) {
      return div(vec, length(vec));
    }

    function rgbToHsl(val) {
      var r = val[0];
      var g = val[1];
      var b = val[2];
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h;
      var s;
      var l = (max + min) / 2;

      if (max === min) {
        h = 0; // achromatic

        s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;

          default:
            break;
        }

        h /= 6;
      }

      return [h, s, l, val[3]];
    }

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    function hslToRgb(val) {
      var h = val[0];
      var s = val[1];
      var l = val[2];
      var r;
      var g;
      var b;

      if (s === 0) {
        r = l; // achromatic

        b = l; // achromatic

        g = l; // achromatic
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return [r, g, b, val[3]];
    }

    function linear(t, tMin, tMax, value1, value2) {
      if (value1 === undefined || value2 === undefined) {
        value1 = tMin;
        value2 = tMax;
        tMin = 0;
        tMax = 1;
      }

      if (tMax < tMin) {
        var _tMin = tMax;
        tMax = tMin;
        tMin = _tMin;
      }

      if (t <= tMin) {
        return value1;
      }

      if (t >= tMax) {
        return value2;
      }

      var perc = tMax === tMin ? 0 : (t - tMin) / (tMax - tMin);

      if (!value1.length) {
        return value1 + (value2 - value1) * perc;
      }

      var i;
      var len = value1.length;
      var arr = createTypedArray('float32', len);

      for (i = 0; i < len; i += 1) {
        arr[i] = value1[i] + (value2[i] - value1[i]) * perc;
      }

      return arr;
    }

    function random(min, max) {
      if (max === undefined) {
        if (min === undefined) {
          min = 0;
          max = 1;
        } else {
          max = min;
          min = undefined;
        }
      }

      if (max.length) {
        var i;
        var len = max.length;

        if (!min) {
          min = createTypedArray('float32', len);
        }

        var arr = createTypedArray('float32', len);
        var rnd = BMMath.random();

        for (i = 0; i < len; i += 1) {
          arr[i] = min[i] + rnd * (max[i] - min[i]);
        }

        return arr;
      }

      if (min === undefined) {
        min = 0;
      }

      var rndm = BMMath.random();
      return min + rndm * (max - min);
    }

    function createPath(points, inTangents, outTangents, closed) {
      var i;
      var len = points.length;
      var path = shapePool.newElement();
      path.setPathData(!!closed, len);
      var arrPlaceholder = [0, 0];
      var inVertexPoint;
      var outVertexPoint;

      for (i = 0; i < len; i += 1) {
        inVertexPoint = inTangents && inTangents[i] ? inTangents[i] : arrPlaceholder;
        outVertexPoint = outTangents && outTangents[i] ? outTangents[i] : arrPlaceholder;
        path.setTripleAt(points[i][0], points[i][1], outVertexPoint[0] + points[i][0], outVertexPoint[1] + points[i][1], inVertexPoint[0] + points[i][0], inVertexPoint[1] + points[i][1], i, true);
      }

      return path;
    }

    function initiateExpression(elem, data, property) {
      // Bail out if we don't want expressions
      function noOp(_value) {
        return _value;
      }

      if (!elem.globalData.renderConfig.runExpressions) {
        return noOp;
      }

      var val = data.x;
      var needsVelocity = /velocity(?![\w\d])/.test(val);

      var _needsRandom = val.indexOf('random') !== -1;

      var elemType = elem.data.ty;
      var transform;
      var $bm_transform;
      var content;
      var effect;
      var thisProperty = property;
      thisProperty.valueAtTime = thisProperty.getValueAtTime;
      Object.defineProperty(thisProperty, 'value', {
        get: function get() {
          return thisProperty.v;
        }
      });
      elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
      elem.comp.displayStartTime = 0;
      var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
      var outPoint = elem.data.op / elem.comp.globalData.frameRate;
      var width = elem.data.sw ? elem.data.sw : 0;
      var height = elem.data.sh ? elem.data.sh : 0;
      var name = elem.data.nm;
      var loopIn;
      var loop_in;
      var loopOut;
      var loop_out;
      var smooth;
      var toWorld;
      var fromWorld;
      var fromComp;
      var toComp;
      var fromCompToSurface;
      var position;
      var rotation;
      var anchorPoint;
      var scale;
      var thisLayer;
      var thisComp;
      var mask;
      var valueAtTime;
      var velocityAtTime;
      var scoped_bm_rt; // val = val.replace(/(\\?"|')((http)(s)?(:\/))?\/.*?(\\?"|')/g, "\"\""); // deter potential network calls

      var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]; // eslint-disable-line no-eval

      var numKeys = property.kf ? data.k.length : 0;
      var active = !this.data || this.data.hd !== true;

      var wiggle = function wiggle(freq, amp) {
        var iWiggle;
        var j;
        var lenWiggle = this.pv.length ? this.pv.length : 1;
        var addedAmps = createTypedArray('float32', lenWiggle);
        freq = 5;
        var iterations = Math.floor(time * freq);
        iWiggle = 0;
        j = 0;

        while (iWiggle < iterations) {
          // var rnd = BMMath.random();
          for (j = 0; j < lenWiggle; j += 1) {
            addedAmps[j] += -amp + amp * 2 * BMMath.random(); // addedAmps[j] += -amp + amp*2*rnd;
          }

          iWiggle += 1;
        } // var rnd2 = BMMath.random();


        var periods = time * freq;
        var perc = periods - Math.floor(periods);
        var arr = createTypedArray('float32', lenWiggle);

        if (lenWiggle > 1) {
          for (j = 0; j < lenWiggle; j += 1) {
            arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp * 2 * BMMath.random()) * perc; // arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
            // arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
          }

          return arr;
        }

        return this.pv + addedAmps[0] + (-amp + amp * 2 * BMMath.random()) * perc;
      }.bind(this);

      if (thisProperty.loopIn) {
        loopIn = thisProperty.loopIn.bind(thisProperty);
        loop_in = loopIn;
      }

      if (thisProperty.loopOut) {
        loopOut = thisProperty.loopOut.bind(thisProperty);
        loop_out = loopOut;
      }

      if (thisProperty.smooth) {
        smooth = thisProperty.smooth.bind(thisProperty);
      }

      function loopInDuration(type, duration) {
        return loopIn(type, duration, true);
      }

      function loopOutDuration(type, duration) {
        return loopOut(type, duration, true);
      }

      if (this.getValueAtTime) {
        valueAtTime = this.getValueAtTime.bind(this);
      }

      if (this.getVelocityAtTime) {
        velocityAtTime = this.getVelocityAtTime.bind(this);
      }

      var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

      function lookAt(elem1, elem2) {
        var fVec = [elem2[0] - elem1[0], elem2[1] - elem1[1], elem2[2] - elem1[2]];
        var pitch = Math.atan2(fVec[0], Math.sqrt(fVec[1] * fVec[1] + fVec[2] * fVec[2])) / degToRads;
        var yaw = -Math.atan2(fVec[1], fVec[2]) / degToRads;
        return [yaw, pitch, 0];
      }

      function easeOut(t, tMin, tMax, val1, val2) {
        return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
      }

      function easeIn(t, tMin, tMax, val1, val2) {
        return applyEase(easeInBez, t, tMin, tMax, val1, val2);
      }

      function ease(t, tMin, tMax, val1, val2) {
        return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
      }

      function applyEase(fn, t, tMin, tMax, val1, val2) {
        if (val1 === undefined) {
          val1 = tMin;
          val2 = tMax;
        } else {
          t = (t - tMin) / (tMax - tMin);
        }

        if (t > 1) {
          t = 1;
        } else if (t < 0) {
          t = 0;
        }

        var mult = fn(t);

        if ($bm_isInstanceOfArray(val1)) {
          var iKey;
          var lenKey = val1.length;
          var arr = createTypedArray('float32', lenKey);

          for (iKey = 0; iKey < lenKey; iKey += 1) {
            arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
          }

          return arr;
        }

        return (val2 - val1) * mult + val1;
      }

      function nearestKey(time) {
        var iKey;
        var lenKey = data.k.length;
        var index;
        var keyTime;

        if (!data.k.length || typeof data.k[0] === 'number') {
          index = 0;
          keyTime = 0;
        } else {
          index = -1;
          time *= elem.comp.globalData.frameRate;

          if (time < data.k[0].t) {
            index = 1;
            keyTime = data.k[0].t;
          } else {
            for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
              if (time === data.k[iKey].t) {
                index = iKey + 1;
                keyTime = data.k[iKey].t;
                break;
              } else if (time > data.k[iKey].t && time < data.k[iKey + 1].t) {
                if (time - data.k[iKey].t > data.k[iKey + 1].t - time) {
                  index = iKey + 2;
                  keyTime = data.k[iKey + 1].t;
                } else {
                  index = iKey + 1;
                  keyTime = data.k[iKey].t;
                }

                break;
              }
            }

            if (index === -1) {
              index = iKey + 1;
              keyTime = data.k[iKey].t;
            }
          }
        }

        var obKey = {};
        obKey.index = index;
        obKey.time = keyTime / elem.comp.globalData.frameRate;
        return obKey;
      }

      function key(ind) {
        var obKey;
        var iKey;
        var lenKey;

        if (!data.k.length || typeof data.k[0] === 'number') {
          throw new Error('The property has no keyframe at index ' + ind);
        }

        ind -= 1;
        obKey = {
          time: data.k[ind].t / elem.comp.globalData.frameRate,
          value: []
        };
        var arr = Object.prototype.hasOwnProperty.call(data.k[ind], 's') ? data.k[ind].s : data.k[ind - 1].e;
        lenKey = arr.length;

        for (iKey = 0; iKey < lenKey; iKey += 1) {
          obKey[iKey] = arr[iKey];
          obKey.value[iKey] = arr[iKey];
        }

        return obKey;
      }

      function framesToTime(fr, fps) {
        if (!fps) {
          fps = elem.comp.globalData.frameRate;
        }

        return fr / fps;
      }

      function timeToFrames(t, fps) {
        if (!t && t !== 0) {
          t = time;
        }

        if (!fps) {
          fps = elem.comp.globalData.frameRate;
        }

        return t * fps;
      }

      function seedRandom(seed) {
        BMMath.seedrandom(randSeed + seed);
      }

      function sourceRectAtTime() {
        return elem.sourceRectAtTime();
      }

      function substring(init, end) {
        if (typeof value === 'string') {
          if (end === undefined) {
            return value.substring(init);
          }

          return value.substring(init, end);
        }

        return '';
      }

      function substr(init, end) {
        if (typeof value === 'string') {
          if (end === undefined) {
            return value.substr(init);
          }

          return value.substr(init, end);
        }

        return '';
      }

      function posterizeTime(framesPerSecond) {
        time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond;
        value = valueAtTime(time);
      }

      var time;
      var velocity;
      var value;
      var text;
      var textIndex;
      var textTotal;
      var selectorValue;
      var index = elem.data.ind;
      var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
      var parent;
      var randSeed = Math.floor(Math.random() * 1000000);
      var globalData = elem.globalData;

      function executeExpression(_value) {
        // globalData.pushExpression();
        value = _value;

        if (this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector') {
          return value;
        }

        if (this.propType === 'textSelector') {
          textIndex = this.textIndex;
          textTotal = this.textTotal;
          selectorValue = this.selectorValue;
        }

        if (!thisLayer) {
          text = elem.layerInterface.text;
          thisLayer = elem.layerInterface;
          thisComp = elem.comp.compInterface;
          toWorld = thisLayer.toWorld.bind(thisLayer);
          fromWorld = thisLayer.fromWorld.bind(thisLayer);
          fromComp = thisLayer.fromComp.bind(thisLayer);
          toComp = thisLayer.toComp.bind(thisLayer);
          mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
          fromCompToSurface = fromComp;
        }

        if (!transform) {
          transform = elem.layerInterface('ADBE Transform Group');
          $bm_transform = transform;

          if (transform) {
            anchorPoint = transform.anchorPoint;
            /* position = transform.position;
                      rotation = transform.rotation;
                      scale = transform.scale; */
          }
        }

        if (elemType === 4 && !content) {
          content = thisLayer('ADBE Root Vectors Group');
        }

        if (!effect) {
          effect = thisLayer(4);
        }

        hasParent = !!(elem.hierarchy && elem.hierarchy.length);

        if (hasParent && !parent) {
          parent = elem.hierarchy[0].layerInterface;
        }

        time = this.comp.renderedFrame / this.comp.globalData.frameRate;

        if (_needsRandom) {
          seedRandom(randSeed + time);
        }

        if (needsVelocity) {
          velocity = velocityAtTime(time);
        }

        expression_function();
        this.frameExpressionId = elem.globalData.frameId; // TODO: Check if it's possible to return on ShapeInterface the .v value
        // Changed this to a ternary operation because Rollup failed compiling it correctly

        scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt;
        return scoped_bm_rt;
      } // Bundlers will see these as dead code and unless we reference them


      executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData];
      return executeExpression;
    }

    ob.initiateExpression = initiateExpression;
    ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal];
    ob.resetFrame = resetFrame;
    return ob;
  }();

  var Expressions = function () {
    var ob = {};
    ob.initExpressions = initExpressions;
    ob.resetFrame = ExpressionManager.resetFrame;

    function initExpressions(animation) {
      var stackCount = 0;
      var registers = [];

      function pushExpression() {
        stackCount += 1;
      }

      function popExpression() {
        stackCount -= 1;

        if (stackCount === 0) {
          releaseInstances();
        }
      }

      function registerExpressionProperty(expression) {
        if (registers.indexOf(expression) === -1) {
          registers.push(expression);
        }
      }

      function releaseInstances() {
        var i;
        var len = registers.length;

        for (i = 0; i < len; i += 1) {
          registers[i].release();
        }

        registers.length = 0;
      }

      animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
      animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
      animation.renderer.globalData.pushExpression = pushExpression;
      animation.renderer.globalData.popExpression = popExpression;
      animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
    }

    return ob;
  }();

  var MaskManagerInterface = function () {
    function MaskInterface(mask, data) {
      this._mask = mask;
      this._data = data;
    }

    Object.defineProperty(MaskInterface.prototype, 'maskPath', {
      get: function get() {
        if (this._mask.prop.k) {
          this._mask.prop.getValue();
        }

        return this._mask.prop;
      }
    });
    Object.defineProperty(MaskInterface.prototype, 'maskOpacity', {
      get: function get() {
        if (this._mask.op.k) {
          this._mask.op.getValue();
        }

        return this._mask.op.v * 100;
      }
    });

    var MaskManager = function MaskManager(maskManager) {
      var _masksInterfaces = createSizedArray(maskManager.viewData.length);

      var i;
      var len = maskManager.viewData.length;

      for (i = 0; i < len; i += 1) {
        _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
      }

      var maskFunction = function maskFunction(name) {
        i = 0;

        while (i < len) {
          if (maskManager.masksProperties[i].nm === name) {
            return _masksInterfaces[i];
          }

          i += 1;
        }

        return null;
      };

      return maskFunction;
    };

    return MaskManager;
  }();

  var ExpressionPropertyInterface = function () {
    var defaultUnidimensionalValue = {
      pv: 0,
      v: 0,
      mult: 1
    };
    var defaultMultidimensionalValue = {
      pv: [0, 0, 0],
      v: [0, 0, 0],
      mult: 1
    };

    function completeProperty(expressionValue, property, type) {
      Object.defineProperty(expressionValue, 'velocity', {
        get: function get() {
          return property.getVelocityAtTime(property.comp.currentFrame);
        }
      });
      expressionValue.numKeys = property.keyframes ? property.keyframes.length : 0;

      expressionValue.key = function (pos) {
        if (!expressionValue.numKeys) {
          return 0;
        }

        var value = '';

        if ('s' in property.keyframes[pos - 1]) {
          value = property.keyframes[pos - 1].s;
        } else if ('e' in property.keyframes[pos - 2]) {
          value = property.keyframes[pos - 2].e;
        } else {
          value = property.keyframes[pos - 2].s;
        }

        var valueProp = type === 'unidimensional' ? new Number(value) : Object.assign({}, value); // eslint-disable-line no-new-wrappers

        valueProp.time = property.keyframes[pos - 1].t / property.elem.comp.globalData.frameRate;
        valueProp.value = type === 'unidimensional' ? value[0] : value;
        return valueProp;
      };

      expressionValue.valueAtTime = property.getValueAtTime;
      expressionValue.speedAtTime = property.getSpeedAtTime;
      expressionValue.velocityAtTime = property.getVelocityAtTime;
      expressionValue.propertyGroup = property.propertyGroup;
    }

    function UnidimensionalPropertyInterface(property) {
      if (!property || !('pv' in property)) {
        property = defaultUnidimensionalValue;
      }

      var mult = 1 / property.mult;
      var val = property.pv * mult;
      var expressionValue = new Number(val); // eslint-disable-line no-new-wrappers

      expressionValue.value = val;
      completeProperty(expressionValue, property, 'unidimensional');
      return function () {
        if (property.k) {
          property.getValue();
        }

        val = property.v * mult;

        if (expressionValue.value !== val) {
          expressionValue = new Number(val); // eslint-disable-line no-new-wrappers

          expressionValue.value = val;
          completeProperty(expressionValue, property, 'unidimensional');
        }

        return expressionValue;
      };
    }

    function MultidimensionalPropertyInterface(property) {
      if (!property || !('pv' in property)) {
        property = defaultMultidimensionalValue;
      }

      var mult = 1 / property.mult;
      var len = property.data && property.data.l || property.pv.length;
      var expressionValue = createTypedArray('float32', len);
      var arrValue = createTypedArray('float32', len);
      expressionValue.value = arrValue;
      completeProperty(expressionValue, property, 'multidimensional');
      return function () {
        if (property.k) {
          property.getValue();
        }

        for (var i = 0; i < len; i += 1) {
          arrValue[i] = property.v[i] * mult;
          expressionValue[i] = arrValue[i];
        }

        return expressionValue;
      };
    } // TODO: try to avoid using this getter


    function defaultGetter() {
      return defaultUnidimensionalValue;
    }

    return function (property) {
      if (!property) {
        return defaultGetter;
      }

      if (property.propType === 'unidimensional') {
        return UnidimensionalPropertyInterface(property);
      }

      return MultidimensionalPropertyInterface(property);
    };
  }();

  var TransformExpressionInterface = function () {
    return function (transform) {
      function _thisFunction(name) {
        switch (name) {
          case 'scale':
          case 'Scale':
          case 'ADBE Scale':
          case 6:
            return _thisFunction.scale;

          case 'rotation':
          case 'Rotation':
          case 'ADBE Rotation':
          case 'ADBE Rotate Z':
          case 10:
            return _thisFunction.rotation;

          case 'ADBE Rotate X':
            return _thisFunction.xRotation;

          case 'ADBE Rotate Y':
            return _thisFunction.yRotation;

          case 'position':
          case 'Position':
          case 'ADBE Position':
          case 2:
            return _thisFunction.position;

          case 'ADBE Position_0':
            return _thisFunction.xPosition;

          case 'ADBE Position_1':
            return _thisFunction.yPosition;

          case 'ADBE Position_2':
            return _thisFunction.zPosition;

          case 'anchorPoint':
          case 'AnchorPoint':
          case 'Anchor Point':
          case 'ADBE AnchorPoint':
          case 1:
            return _thisFunction.anchorPoint;

          case 'opacity':
          case 'Opacity':
          case 11:
            return _thisFunction.opacity;

          default:
            return null;
        }
      }

      Object.defineProperty(_thisFunction, 'rotation', {
        get: ExpressionPropertyInterface(transform.r || transform.rz)
      });
      Object.defineProperty(_thisFunction, 'zRotation', {
        get: ExpressionPropertyInterface(transform.rz || transform.r)
      });
      Object.defineProperty(_thisFunction, 'xRotation', {
        get: ExpressionPropertyInterface(transform.rx)
      });
      Object.defineProperty(_thisFunction, 'yRotation', {
        get: ExpressionPropertyInterface(transform.ry)
      });
      Object.defineProperty(_thisFunction, 'scale', {
        get: ExpressionPropertyInterface(transform.s)
      });

      var _px;

      var _py;

      var _pz;

      var _transformFactory;

      if (transform.p) {
        _transformFactory = ExpressionPropertyInterface(transform.p);
      } else {
        _px = ExpressionPropertyInterface(transform.px);
        _py = ExpressionPropertyInterface(transform.py);

        if (transform.pz) {
          _pz = ExpressionPropertyInterface(transform.pz);
        }
      }

      Object.defineProperty(_thisFunction, 'position', {
        get: function get() {
          if (transform.p) {
            return _transformFactory();
          }

          return [_px(), _py(), _pz ? _pz() : 0];
        }
      });
      Object.defineProperty(_thisFunction, 'xPosition', {
        get: ExpressionPropertyInterface(transform.px)
      });
      Object.defineProperty(_thisFunction, 'yPosition', {
        get: ExpressionPropertyInterface(transform.py)
      });
      Object.defineProperty(_thisFunction, 'zPosition', {
        get: ExpressionPropertyInterface(transform.pz)
      });
      Object.defineProperty(_thisFunction, 'anchorPoint', {
        get: ExpressionPropertyInterface(transform.a)
      });
      Object.defineProperty(_thisFunction, 'opacity', {
        get: ExpressionPropertyInterface(transform.o)
      });
      Object.defineProperty(_thisFunction, 'skew', {
        get: ExpressionPropertyInterface(transform.sk)
      });
      Object.defineProperty(_thisFunction, 'skewAxis', {
        get: ExpressionPropertyInterface(transform.sa)
      });
      Object.defineProperty(_thisFunction, 'orientation', {
        get: ExpressionPropertyInterface(transform.or)
      });
      return _thisFunction;
    };
  }();

  var LayerExpressionInterface = function () {
    function getMatrix(time) {
      var toWorldMat = new Matrix();

      if (time !== undefined) {
        var propMatrix = this._elem.finalTransform.mProp.getValueAtTime(time);

        propMatrix.clone(toWorldMat);
      } else {
        var transformMat = this._elem.finalTransform.mProp;
        transformMat.applyToMatrix(toWorldMat);
      }

      return toWorldMat;
    }

    function toWorldVec(arr, time) {
      var toWorldMat = this.getMatrix(time);
      toWorldMat.props[12] = 0;
      toWorldMat.props[13] = 0;
      toWorldMat.props[14] = 0;
      return this.applyPoint(toWorldMat, arr);
    }

    function toWorld(arr, time) {
      var toWorldMat = this.getMatrix(time);
      return this.applyPoint(toWorldMat, arr);
    }

    function fromWorldVec(arr, time) {
      var toWorldMat = this.getMatrix(time);
      toWorldMat.props[12] = 0;
      toWorldMat.props[13] = 0;
      toWorldMat.props[14] = 0;
      return this.invertPoint(toWorldMat, arr);
    }

    function fromWorld(arr, time) {
      var toWorldMat = this.getMatrix(time);
      return this.invertPoint(toWorldMat, arr);
    }

    function applyPoint(matrix, arr) {
      if (this._elem.hierarchy && this._elem.hierarchy.length) {
        var i;
        var len = this._elem.hierarchy.length;

        for (i = 0; i < len; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
        }
      }

      return matrix.applyToPointArray(arr[0], arr[1], arr[2] || 0);
    }

    function invertPoint(matrix, arr) {
      if (this._elem.hierarchy && this._elem.hierarchy.length) {
        var i;
        var len = this._elem.hierarchy.length;

        for (i = 0; i < len; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
        }
      }

      return matrix.inversePoint(arr);
    }

    function fromComp(arr) {
      var toWorldMat = new Matrix();
      toWorldMat.reset();

      this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);

      if (this._elem.hierarchy && this._elem.hierarchy.length) {
        var i;
        var len = this._elem.hierarchy.length;

        for (i = 0; i < len; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
        }

        return toWorldMat.inversePoint(arr);
      }

      return toWorldMat.inversePoint(arr);
    }

    function sampleImage() {
      return [1, 1, 1, 1];
    }

    return function (elem) {
      var transformInterface;

      function _registerMaskInterface(maskManager) {
        _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem);
      }

      function _registerEffectsInterface(effects) {
        _thisLayerFunction.effect = effects;
      }

      function _thisLayerFunction(name) {
        switch (name) {
          case 'ADBE Root Vectors Group':
          case 'Contents':
          case 2:
            return _thisLayerFunction.shapeInterface;

          case 1:
          case 6:
          case 'Transform':
          case 'transform':
          case 'ADBE Transform Group':
            return transformInterface;

          case 4:
          case 'ADBE Effect Parade':
          case 'effects':
          case 'Effects':
            return _thisLayerFunction.effect;

          case 'ADBE Text Properties':
            return _thisLayerFunction.textInterface;

          default:
            return null;
        }
      }

      _thisLayerFunction.getMatrix = getMatrix;
      _thisLayerFunction.invertPoint = invertPoint;
      _thisLayerFunction.applyPoint = applyPoint;
      _thisLayerFunction.toWorld = toWorld;
      _thisLayerFunction.toWorldVec = toWorldVec;
      _thisLayerFunction.fromWorld = fromWorld;
      _thisLayerFunction.fromWorldVec = fromWorldVec;
      _thisLayerFunction.toComp = toWorld;
      _thisLayerFunction.fromComp = fromComp;
      _thisLayerFunction.sampleImage = sampleImage;
      _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
      _thisLayerFunction._elem = elem;
      transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
      var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
      Object.defineProperties(_thisLayerFunction, {
        hasParent: {
          get: function get() {
            return elem.hierarchy.length;
          }
        },
        parent: {
          get: function get() {
            return elem.hierarchy[0].layerInterface;
          }
        },
        rotation: getDescriptor(transformInterface, 'rotation'),
        scale: getDescriptor(transformInterface, 'scale'),
        position: getDescriptor(transformInterface, 'position'),
        opacity: getDescriptor(transformInterface, 'opacity'),
        anchorPoint: anchorPointDescriptor,
        anchor_point: anchorPointDescriptor,
        transform: {
          get: function get() {
            return transformInterface;
          }
        },
        active: {
          get: function get() {
            return elem.isInRange;
          }
        }
      });
      _thisLayerFunction.startTime = elem.data.st;
      _thisLayerFunction.index = elem.data.ind;
      _thisLayerFunction.source = elem.data.refId;
      _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
      _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;
      _thisLayerFunction.inPoint = elem.data.ip / elem.comp.globalData.frameRate;
      _thisLayerFunction.outPoint = elem.data.op / elem.comp.globalData.frameRate;
      _thisLayerFunction._name = elem.data.nm;
      _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
      _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
      return _thisLayerFunction;
    };
  }();

  var propertyGroupFactory = function () {
    return function (interfaceFunction, parentPropertyGroup) {
      return function (val) {
        val = val === undefined ? 1 : val;

        if (val <= 0) {
          return interfaceFunction;
        }

        return parentPropertyGroup(val - 1);
      };
    };
  }();

  var PropertyInterface = function () {
    return function (propertyName, propertyGroup) {
      var interfaceFunction = {
        _name: propertyName
      };

      function _propertyGroup(val) {
        val = val === undefined ? 1 : val;

        if (val <= 0) {
          return interfaceFunction;
        }

        return propertyGroup(val - 1);
      }

      return _propertyGroup;
    };
  }();

  var EffectsExpressionInterface = function () {
    var ob = {
      createEffectsInterface: createEffectsInterface
    };

    function createEffectsInterface(elem, propertyGroup) {
      if (elem.effectsManager) {
        var effectElements = [];
        var effectsData = elem.data.ef;
        var i;
        var len = elem.effectsManager.effectElements.length;

        for (i = 0; i < len; i += 1) {
          effectElements.push(createGroupInterface(effectsData[i], elem.effectsManager.effectElements[i], propertyGroup, elem));
        }

        var effects = elem.data.ef || [];

        var groupInterface = function groupInterface(name) {
          i = 0;
          len = effects.length;

          while (i < len) {
            if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
              return effectElements[i];
            }

            i += 1;
          }

          return null;
        };

        Object.defineProperty(groupInterface, 'numProperties', {
          get: function get() {
            return effects.length;
          }
        });
        return groupInterface;
      }

      return null;
    }

    function createGroupInterface(data, elements, propertyGroup, elem) {
      function groupInterface(name) {
        var effects = data.ef;
        var i = 0;
        var len = effects.length;

        while (i < len) {
          if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
            if (effects[i].ty === 5) {
              return effectElements[i];
            }

            return effectElements[i]();
          }

          i += 1;
        }

        throw new Error();
      }

      var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);

      var effectElements = [];
      var i;
      var len = data.ef.length;

      for (i = 0; i < len; i += 1) {
        if (data.ef[i].ty === 5) {
          effectElements.push(createGroupInterface(data.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem));
        } else {
          effectElements.push(createValueInterface(elements.effectElements[i], data.ef[i].ty, elem, _propertyGroup));
        }
      }

      if (data.mn === 'ADBE Color Control') {
        Object.defineProperty(groupInterface, 'color', {
          get: function get() {
            return effectElements[0]();
          }
        });
      }

      Object.defineProperties(groupInterface, {
        numProperties: {
          get: function get() {
            return data.np;
          }
        },
        _name: {
          value: data.nm
        },
        propertyGroup: {
          value: _propertyGroup
        }
      });
      groupInterface.enabled = data.en !== 0;
      groupInterface.active = groupInterface.enabled;
      return groupInterface;
    }

    function createValueInterface(element, type, elem, propertyGroup) {
      var expressionProperty = ExpressionPropertyInterface(element.p);

      function interfaceFunction() {
        if (type === 10) {
          return elem.comp.compInterface(element.p.v);
        }

        return expressionProperty();
      }

      if (element.p.setGroupProperty) {
        element.p.setGroupProperty(PropertyInterface('', propertyGroup));
      }

      return interfaceFunction;
    }

    return ob;
  }();

  var ShapePathInterface = function () {
    return function pathInterfaceFactory(shape, view, propertyGroup) {
      var prop = view.sh;

      function interfaceFunction(val) {
        if (val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 'ADBE Vector Shape' || val === 2) {
          return interfaceFunction.path;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      prop.setGroupProperty(PropertyInterface('Path', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        path: {
          get: function get() {
            if (prop.k) {
              prop.getValue();
            }

            return prop;
          }
        },
        shape: {
          get: function get() {
            if (prop.k) {
              prop.getValue();
            }

            return prop;
          }
        },
        _name: {
          value: shape.nm
        },
        ix: {
          value: shape.ix
        },
        propertyIndex: {
          value: shape.ix
        },
        mn: {
          value: shape.mn
        },
        propertyGroup: {
          value: propertyGroup
        }
      });
      return interfaceFunction;
    };
  }();

  var ShapeExpressionInterface = function () {
    function iterateElements(shapes, view, propertyGroup) {
      var arr = [];
      var i;
      var len = shapes ? shapes.length : 0;

      for (i = 0; i < len; i += 1) {
        if (shapes[i].ty === 'gr') {
          arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'fl') {
          arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'st') {
          arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'tm') {
          arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'tr') {// arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
        } else if (shapes[i].ty === 'el') {
          arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'sr') {
          arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'sh') {
          arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'rc') {
          arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'rd') {
          arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'rp') {
          arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'gf') {
          arr.push(gradientFillInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else {
          arr.push(defaultInterfaceFactory(shapes[i], view[i], propertyGroup));
        }
      }

      return arr;
    }

    function contentsInterfaceFactory(shape, view, propertyGroup) {
      var interfaces;

      var interfaceFunction = function _interfaceFunction(value) {
        var i = 0;
        var len = interfaces.length;

        while (i < len) {
          if (interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value) {
            return interfaces[i];
          }

          i += 1;
        }

        if (typeof value === 'number') {
          return interfaces[value - 1];
        }

        return null;
      };

      interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
      interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
      interfaceFunction.numProperties = interfaces.length;
      var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
      interfaceFunction.transform = transformInterface;
      interfaceFunction.propertyIndex = shape.cix;
      interfaceFunction._name = shape.nm;
      return interfaceFunction;
    }

    function groupInterfaceFactory(shape, view, propertyGroup) {
      var interfaceFunction = function _interfaceFunction(value) {
        switch (value) {
          case 'ADBE Vectors Group':
          case 'Contents':
          case 2:
            return interfaceFunction.content;
          // Not necessary for now. Keeping them here in case a new case appears
          // case 'ADBE Vector Transform Group':
          // case 3:

          default:
            return interfaceFunction.transform;
        }
      };

      interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
      var content = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
      var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
      interfaceFunction.content = content;
      interfaceFunction.transform = transformInterface;
      Object.defineProperty(interfaceFunction, '_name', {
        get: function get() {
          return shape.nm;
        }
      }); // interfaceFunction.content = interfaceFunction;

      interfaceFunction.numProperties = shape.np;
      interfaceFunction.propertyIndex = shape.ix;
      interfaceFunction.nm = shape.nm;
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function fillInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(val) {
        if (val === 'Color' || val === 'color') {
          return interfaceFunction.color;
        }

        if (val === 'Opacity' || val === 'opacity') {
          return interfaceFunction.opacity;
        }

        return null;
      }

      Object.defineProperties(interfaceFunction, {
        color: {
          get: ExpressionPropertyInterface(view.c)
        },
        opacity: {
          get: ExpressionPropertyInterface(view.o)
        },
        _name: {
          value: shape.nm
        },
        mn: {
          value: shape.mn
        }
      });
      view.c.setGroupProperty(PropertyInterface('Color', propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
      return interfaceFunction;
    }

    function gradientFillInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(val) {
        if (val === 'Start Point' || val === 'start point') {
          return interfaceFunction.startPoint;
        }

        if (val === 'End Point' || val === 'end point') {
          return interfaceFunction.endPoint;
        }

        if (val === 'Opacity' || val === 'opacity') {
          return interfaceFunction.opacity;
        }

        return null;
      }

      Object.defineProperties(interfaceFunction, {
        startPoint: {
          get: ExpressionPropertyInterface(view.s)
        },
        endPoint: {
          get: ExpressionPropertyInterface(view.e)
        },
        opacity: {
          get: ExpressionPropertyInterface(view.o)
        },
        type: {
          get: function get() {
            return 'a';
          }
        },
        _name: {
          value: shape.nm
        },
        mn: {
          value: shape.mn
        }
      });
      view.s.setGroupProperty(PropertyInterface('Start Point', propertyGroup));
      view.e.setGroupProperty(PropertyInterface('End Point', propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
      return interfaceFunction;
    }

    function defaultInterfaceFactory() {
      function interfaceFunction() {
        return null;
      }

      return interfaceFunction;
    }

    function strokeInterfaceFactory(shape, view, propertyGroup) {
      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGroup);

      function addPropertyToDashOb(i) {
        Object.defineProperty(dashOb, shape.d[i].nm, {
          get: ExpressionPropertyInterface(view.d.dataProps[i].p)
        });
      }

      var i;
      var len = shape.d ? shape.d.length : 0;
      var dashOb = {};

      for (i = 0; i < len; i += 1) {
        addPropertyToDashOb(i);
        view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
      }

      function interfaceFunction(val) {
        if (val === 'Color' || val === 'color') {
          return interfaceFunction.color;
        }

        if (val === 'Opacity' || val === 'opacity') {
          return interfaceFunction.opacity;
        }

        if (val === 'Stroke Width' || val === 'stroke width') {
          return interfaceFunction.strokeWidth;
        }

        return null;
      }

      Object.defineProperties(interfaceFunction, {
        color: {
          get: ExpressionPropertyInterface(view.c)
        },
        opacity: {
          get: ExpressionPropertyInterface(view.o)
        },
        strokeWidth: {
          get: ExpressionPropertyInterface(view.w)
        },
        dash: {
          get: function get() {
            return dashOb;
          }
        },
        _name: {
          value: shape.nm
        },
        mn: {
          value: shape.mn
        }
      });
      view.c.setGroupProperty(PropertyInterface('Color', _propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
      view.w.setGroupProperty(PropertyInterface('Stroke Width', _propertyGroup));
      return interfaceFunction;
    }

    function trimInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(val) {
        if (val === shape.e.ix || val === 'End' || val === 'end') {
          return interfaceFunction.end;
        }

        if (val === shape.s.ix) {
          return interfaceFunction.start;
        }

        if (val === shape.o.ix) {
          return interfaceFunction.offset;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      interfaceFunction.propertyIndex = shape.ix;
      view.s.setGroupProperty(PropertyInterface('Start', _propertyGroup));
      view.e.setGroupProperty(PropertyInterface('End', _propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
      interfaceFunction.propertyIndex = shape.ix;
      interfaceFunction.propertyGroup = propertyGroup;
      Object.defineProperties(interfaceFunction, {
        start: {
          get: ExpressionPropertyInterface(view.s)
        },
        end: {
          get: ExpressionPropertyInterface(view.e)
        },
        offset: {
          get: ExpressionPropertyInterface(view.o)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function transformInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.a.ix === value || value === 'Anchor Point') {
          return interfaceFunction.anchorPoint;
        }

        if (shape.o.ix === value || value === 'Opacity') {
          return interfaceFunction.opacity;
        }

        if (shape.p.ix === value || value === 'Position') {
          return interfaceFunction.position;
        }

        if (shape.r.ix === value || value === 'Rotation' || value === 'ADBE Vector Rotation') {
          return interfaceFunction.rotation;
        }

        if (shape.s.ix === value || value === 'Scale') {
          return interfaceFunction.scale;
        }

        if (shape.sk && shape.sk.ix === value || value === 'Skew') {
          return interfaceFunction.skew;
        }

        if (shape.sa && shape.sa.ix === value || value === 'Skew Axis') {
          return interfaceFunction.skewAxis;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      view.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
      view.transform.mProps.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      view.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', _propertyGroup));
      view.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', _propertyGroup));
      view.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

      if (view.transform.mProps.sk) {
        view.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', _propertyGroup));
        view.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', _propertyGroup));
      }

      view.transform.op.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        opacity: {
          get: ExpressionPropertyInterface(view.transform.mProps.o)
        },
        position: {
          get: ExpressionPropertyInterface(view.transform.mProps.p)
        },
        anchorPoint: {
          get: ExpressionPropertyInterface(view.transform.mProps.a)
        },
        scale: {
          get: ExpressionPropertyInterface(view.transform.mProps.s)
        },
        rotation: {
          get: ExpressionPropertyInterface(view.transform.mProps.r)
        },
        skew: {
          get: ExpressionPropertyInterface(view.transform.mProps.sk)
        },
        skewAxis: {
          get: ExpressionPropertyInterface(view.transform.mProps.sa)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.ty = 'tr';
      interfaceFunction.mn = shape.mn;
      interfaceFunction.propertyGroup = propertyGroup;
      return interfaceFunction;
    }

    function ellipseInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.p.ix === value) {
          return interfaceFunction.position;
        }

        if (shape.s.ix === value) {
          return interfaceFunction.size;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      interfaceFunction.propertyIndex = shape.ix;
      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
      prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        size: {
          get: ExpressionPropertyInterface(prop.s)
        },
        position: {
          get: ExpressionPropertyInterface(prop.p)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function starInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.p.ix === value) {
          return interfaceFunction.position;
        }

        if (shape.r.ix === value) {
          return interfaceFunction.rotation;
        }

        if (shape.pt.ix === value) {
          return interfaceFunction.points;
        }

        if (shape.or.ix === value || value === 'ADBE Vector Star Outer Radius') {
          return interfaceFunction.outerRadius;
        }

        if (shape.os.ix === value) {
          return interfaceFunction.outerRoundness;
        }

        if (shape.ir && (shape.ir.ix === value || value === 'ADBE Vector Star Inner Radius')) {
          return interfaceFunction.innerRadius;
        }

        if (shape.is && shape.is.ix === value) {
          return interfaceFunction.innerRoundness;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
      interfaceFunction.propertyIndex = shape.ix;
      prop.or.setGroupProperty(PropertyInterface('Outer Radius', _propertyGroup));
      prop.os.setGroupProperty(PropertyInterface('Outer Roundness', _propertyGroup));
      prop.pt.setGroupProperty(PropertyInterface('Points', _propertyGroup));
      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

      if (shape.ir) {
        prop.ir.setGroupProperty(PropertyInterface('Inner Radius', _propertyGroup));
        prop.is.setGroupProperty(PropertyInterface('Inner Roundness', _propertyGroup));
      }

      Object.defineProperties(interfaceFunction, {
        position: {
          get: ExpressionPropertyInterface(prop.p)
        },
        rotation: {
          get: ExpressionPropertyInterface(prop.r)
        },
        points: {
          get: ExpressionPropertyInterface(prop.pt)
        },
        outerRadius: {
          get: ExpressionPropertyInterface(prop.or)
        },
        outerRoundness: {
          get: ExpressionPropertyInterface(prop.os)
        },
        innerRadius: {
          get: ExpressionPropertyInterface(prop.ir)
        },
        innerRoundness: {
          get: ExpressionPropertyInterface(prop.is)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function rectInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.p.ix === value) {
          return interfaceFunction.position;
        }

        if (shape.r.ix === value) {
          return interfaceFunction.roundness;
        }

        if (shape.s.ix === value || value === 'Size' || value === 'ADBE Vector Rect Size') {
          return interfaceFunction.size;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
      interfaceFunction.propertyIndex = shape.ix;
      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
      prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        position: {
          get: ExpressionPropertyInterface(prop.p)
        },
        roundness: {
          get: ExpressionPropertyInterface(prop.r)
        },
        size: {
          get: ExpressionPropertyInterface(prop.s)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function roundedInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.r.ix === value || value === 'Round Corners 1') {
          return interfaceFunction.radius;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view;
      interfaceFunction.propertyIndex = shape.ix;
      prop.rd.setGroupProperty(PropertyInterface('Radius', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        radius: {
          get: ExpressionPropertyInterface(prop.rd)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function repeaterInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.c.ix === value || value === 'Copies') {
          return interfaceFunction.copies;
        }

        if (shape.o.ix === value || value === 'Offset') {
          return interfaceFunction.offset;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view;
      interfaceFunction.propertyIndex = shape.ix;
      prop.c.setGroupProperty(PropertyInterface('Copies', _propertyGroup));
      prop.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        copies: {
          get: ExpressionPropertyInterface(prop.c)
        },
        offset: {
          get: ExpressionPropertyInterface(prop.o)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    return function (shapes, view, propertyGroup) {
      var interfaces;

      function _interfaceFunction(value) {
        if (typeof value === 'number') {
          value = value === undefined ? 1 : value;

          if (value === 0) {
            return propertyGroup;
          }

          return interfaces[value - 1];
        }

        var i = 0;
        var len = interfaces.length;

        while (i < len) {
          if (interfaces[i]._name === value) {
            return interfaces[i];
          }

          i += 1;
        }

        return null;
      }

      function parentGroupWrapper() {
        return propertyGroup;
      }

      _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper);
      interfaces = iterateElements(shapes, view, _interfaceFunction.propertyGroup);
      _interfaceFunction.numProperties = interfaces.length;
      _interfaceFunction._name = 'Contents';
      return _interfaceFunction;
    };
  }();

  var TextExpressionInterface = function () {
    return function (elem) {
      var _sourceText;

      function _thisLayerFunction(name) {
        switch (name) {
          case 'ADBE Text Document':
            return _thisLayerFunction.sourceText;

          default:
            return null;
        }
      }

      Object.defineProperty(_thisLayerFunction, 'sourceText', {
        get: function get() {
          elem.textProperty.getValue();
          var stringValue = elem.textProperty.currentData.t;

          if (!_sourceText || stringValue !== _sourceText.value) {
            _sourceText = new String(stringValue); // eslint-disable-line no-new-wrappers
            // If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive

            _sourceText.value = stringValue || new String(stringValue); // eslint-disable-line no-new-wrappers

            Object.defineProperty(_sourceText, 'style', {
              get: function get() {
                return {
                  fillColor: elem.textProperty.currentData.fc
                };
              }
            });
          }

          return _sourceText;
        }
      });
      return _thisLayerFunction;
    };
  }();

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var FootageInterface = function () {
    var outlineInterfaceFactory = function outlineInterfaceFactory(elem) {
      var currentPropertyName = '';
      var currentProperty = elem.getFootageData();

      function init() {
        currentPropertyName = '';
        currentProperty = elem.getFootageData();
        return searchProperty;
      }

      function searchProperty(value) {
        if (currentProperty[value]) {
          currentPropertyName = value;
          currentProperty = currentProperty[value];

          if (_typeof(currentProperty) === 'object') {
            return searchProperty;
          }

          return currentProperty;
        }

        var propertyNameIndex = value.indexOf(currentPropertyName);

        if (propertyNameIndex !== -1) {
          var index = parseInt(value.substr(propertyNameIndex + currentPropertyName.length), 10);
          currentProperty = currentProperty[index];

          if (_typeof(currentProperty) === 'object') {
            return searchProperty;
          }

          return currentProperty;
        }

        return '';
      }

      return init;
    };

    var dataInterfaceFactory = function dataInterfaceFactory(elem) {
      function interfaceFunction(value) {
        if (value === 'Outline') {
          return interfaceFunction.outlineInterface();
        }

        return null;
      }

      interfaceFunction._name = 'Outline';
      interfaceFunction.outlineInterface = outlineInterfaceFactory(elem);
      return interfaceFunction;
    };

    return function (elem) {
      function _interfaceFunction(value) {
        if (value === 'Data') {
          return _interfaceFunction.dataInterface;
        }

        return null;
      }

      _interfaceFunction._name = 'Data';
      _interfaceFunction.dataInterface = dataInterfaceFactory(elem);
      return _interfaceFunction;
    };
  }();

  var interfaces = {
    layer: LayerExpressionInterface,
    effects: EffectsExpressionInterface,
    comp: CompExpressionInterface,
    shape: ShapeExpressionInterface,
    text: TextExpressionInterface,
    footage: FootageInterface
  };

  function getInterface(type) {
    return interfaces[type] || null;
  }

  var expressionHelpers = function () {
    function searchExpressions(elem, data, prop) {
      if (data.x) {
        prop.k = true;
        prop.x = true;
        prop.initiateExpression = ExpressionManager.initiateExpression;
        prop.effectsSequence.push(prop.initiateExpression(elem, data, prop).bind(prop));
      }
    }

    function getValueAtTime(frameNum) {
      frameNum *= this.elem.globalData.frameRate;
      frameNum -= this.offsetTime;

      if (frameNum !== this._cachingAtTime.lastFrame) {
        this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
        this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
        this._cachingAtTime.lastFrame = frameNum;
      }

      return this._cachingAtTime.value;
    }

    function getSpeedAtTime(frameNum) {
      var delta = -0.01;
      var v1 = this.getValueAtTime(frameNum);
      var v2 = this.getValueAtTime(frameNum + delta);
      var speed = 0;

      if (v1.length) {
        var i;

        for (i = 0; i < v1.length; i += 1) {
          speed += Math.pow(v2[i] - v1[i], 2);
        }

        speed = Math.sqrt(speed) * 100;
      } else {
        speed = 0;
      }

      return speed;
    }

    function getVelocityAtTime(frameNum) {
      if (this.vel !== undefined) {
        return this.vel;
      }

      var delta = -0.001; // frameNum += this.elem.data.st;

      var v1 = this.getValueAtTime(frameNum);
      var v2 = this.getValueAtTime(frameNum + delta);
      var velocity;

      if (v1.length) {
        velocity = createTypedArray('float32', v1.length);
        var i;

        for (i = 0; i < v1.length; i += 1) {
          // removing frameRate
          // if needed, don't add it here
          // velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
          velocity[i] = (v2[i] - v1[i]) / delta;
        }
      } else {
        velocity = (v2 - v1) / delta;
      }

      return velocity;
    }

    function getStaticValueAtTime() {
      return this.pv;
    }

    function setGroupProperty(propertyGroup) {
      this.propertyGroup = propertyGroup;
    }

    return {
      searchExpressions: searchExpressions,
      getSpeedAtTime: getSpeedAtTime,
      getVelocityAtTime: getVelocityAtTime,
      getValueAtTime: getValueAtTime,
      getStaticValueAtTime: getStaticValueAtTime,
      setGroupProperty: setGroupProperty
    };
  }();

  function addPropertyDecorator() {
    function loopOut(type, duration, durationFlag) {
      if (!this.k || !this.keyframes) {
        return this.pv;
      }

      type = type ? type.toLowerCase() : '';
      var currentFrame = this.comp.renderedFrame;
      var keyframes = this.keyframes;
      var lastKeyFrame = keyframes[keyframes.length - 1].t;

      if (currentFrame <= lastKeyFrame) {
        return this.pv;
      }

      var cycleDuration;
      var firstKeyFrame;

      if (!durationFlag) {
        if (!duration || duration > keyframes.length - 1) {
          duration = keyframes.length - 1;
        }

        firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
        cycleDuration = lastKeyFrame - firstKeyFrame;
      } else {
        if (!duration) {
          cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
        } else {
          cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
        }

        firstKeyFrame = lastKeyFrame - cycleDuration;
      }

      var i;
      var len;
      var ret;

      if (type === 'pingpong') {
        var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);

        if (iterations % 2 !== 0) {
          return this.getValueAtTime((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
        }
      } else if (type === 'offset') {
        var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
        var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line

        var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);

        if (this.pv.length) {
          ret = new Array(initV.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = (endV[i] - initV[i]) * repeats + current[i];
          }

          return ret;
        }

        return (endV - initV) * repeats + current;
      } else if (type === 'continue') {
        var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);

        if (this.pv.length) {
          ret = new Array(lastValue.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 0.0005; // eslint-disable-line
          }

          return ret;
        }

        return lastValue + (lastValue - nextLastValue) * ((currentFrame - lastKeyFrame) / 0.001);
      }

      return this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
    }

    function loopIn(type, duration, durationFlag) {
      if (!this.k) {
        return this.pv;
      }

      type = type ? type.toLowerCase() : '';
      var currentFrame = this.comp.renderedFrame;
      var keyframes = this.keyframes;
      var firstKeyFrame = keyframes[0].t;

      if (currentFrame >= firstKeyFrame) {
        return this.pv;
      }

      var cycleDuration;
      var lastKeyFrame;

      if (!durationFlag) {
        if (!duration || duration > keyframes.length - 1) {
          duration = keyframes.length - 1;
        }

        lastKeyFrame = keyframes[duration].t;
        cycleDuration = lastKeyFrame - firstKeyFrame;
      } else {
        if (!duration) {
          cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
        } else {
          cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
        }

        lastKeyFrame = firstKeyFrame + cycleDuration;
      }

      var i;
      var len;
      var ret;

      if (type === 'pingpong') {
        var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);

        if (iterations % 2 === 0) {
          return this.getValueAtTime(((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
        }
      } else if (type === 'offset') {
        var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
        var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
        var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;

        if (this.pv.length) {
          ret = new Array(initV.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
          }

          return ret;
        }

        return current - (endV - initV) * repeats;
      } else if (type === 'continue') {
        var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
        var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);

        if (this.pv.length) {
          ret = new Array(firstValue.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = firstValue[i] + (firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame) / 0.001;
          }

          return ret;
        }

        return firstValue + (firstValue - nextFirstValue) * (firstKeyFrame - currentFrame) / 0.001;
      }

      return this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
    }

    function smooth(width, samples) {
      if (!this.k) {
        return this.pv;
      }

      width = (width || 0.4) * 0.5;
      samples = Math.floor(samples || 5);

      if (samples <= 1) {
        return this.pv;
      }

      var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
      var initFrame = currentTime - width;
      var endFrame = currentTime + width;
      var sampleFrequency = samples > 1 ? (endFrame - initFrame) / (samples - 1) : 1;
      var i = 0;
      var j = 0;
      var value;

      if (this.pv.length) {
        value = createTypedArray('float32', this.pv.length);
      } else {
        value = 0;
      }

      var sampleValue;

      while (i < samples) {
        sampleValue = this.getValueAtTime(initFrame + i * sampleFrequency);

        if (this.pv.length) {
          for (j = 0; j < this.pv.length; j += 1) {
            value[j] += sampleValue[j];
          }
        } else {
          value += sampleValue;
        }

        i += 1;
      }

      if (this.pv.length) {
        for (j = 0; j < this.pv.length; j += 1) {
          value[j] /= samples;
        }
      } else {
        value /= samples;
      }

      return value;
    }

    function getTransformValueAtTime(time) {
      if (!this._transformCachingAtTime) {
        this._transformCachingAtTime = {
          v: new Matrix()
        };
      } /// /


      var matrix = this._transformCachingAtTime.v;
      matrix.cloneFromProps(this.pre.props);

      if (this.appliedTransformations < 1) {
        var anchor = this.a.getValueAtTime(time);
        matrix.translate(-anchor[0] * this.a.mult, -anchor[1] * this.a.mult, anchor[2] * this.a.mult);
      }

      if (this.appliedTransformations < 2) {
        var scale = this.s.getValueAtTime(time);
        matrix.scale(scale[0] * this.s.mult, scale[1] * this.s.mult, scale[2] * this.s.mult);
      }

      if (this.sk && this.appliedTransformations < 3) {
        var skew = this.sk.getValueAtTime(time);
        var skewAxis = this.sa.getValueAtTime(time);
        matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
      }

      if (this.r && this.appliedTransformations < 4) {
        var rotation = this.r.getValueAtTime(time);
        matrix.rotate(-rotation * this.r.mult);
      } else if (!this.r && this.appliedTransformations < 4) {
        var rotationZ = this.rz.getValueAtTime(time);
        var rotationY = this.ry.getValueAtTime(time);
        var rotationX = this.rx.getValueAtTime(time);
        var orientation = this.or.getValueAtTime(time);
        matrix.rotateZ(-rotationZ * this.rz.mult).rotateY(rotationY * this.ry.mult).rotateX(rotationX * this.rx.mult).rotateZ(-orientation[2] * this.or.mult).rotateY(orientation[1] * this.or.mult).rotateX(orientation[0] * this.or.mult);
      }

      if (this.data.p && this.data.p.s) {
        var positionX = this.px.getValueAtTime(time);
        var positionY = this.py.getValueAtTime(time);

        if (this.data.p.z) {
          var positionZ = this.pz.getValueAtTime(time);
          matrix.translate(positionX * this.px.mult, positionY * this.py.mult, -positionZ * this.pz.mult);
        } else {
          matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
        }
      } else {
        var position = this.p.getValueAtTime(time);
        matrix.translate(position[0] * this.p.mult, position[1] * this.p.mult, -position[2] * this.p.mult);
      }

      return matrix; /// /
    }

    function getTransformStaticValueAtTime() {
      return this.v.clone(new Matrix());
    }

    var getTransformProperty = TransformPropertyFactory.getTransformProperty;

    TransformPropertyFactory.getTransformProperty = function (elem, data, container) {
      var prop = getTransformProperty(elem, data, container);

      if (prop.dynamicProperties.length) {
        prop.getValueAtTime = getTransformValueAtTime.bind(prop);
      } else {
        prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
      }

      prop.setGroupProperty = expressionHelpers.setGroupProperty;
      return prop;
    };

    var propertyGetProp = PropertyFactory.getProp;

    PropertyFactory.getProp = function (elem, data, type, mult, container) {
      var prop = propertyGetProp(elem, data, type, mult, container); // prop.getVelocityAtTime = getVelocityAtTime;
      // prop.loopOut = loopOut;
      // prop.loopIn = loopIn;

      if (prop.kf) {
        prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
      } else {
        prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
      }

      prop.setGroupProperty = expressionHelpers.setGroupProperty;
      prop.loopOut = loopOut;
      prop.loopIn = loopIn;
      prop.smooth = smooth;
      prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
      prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
      prop.numKeys = data.a === 1 ? data.k.length : 0;
      prop.propertyIndex = data.ix;
      var value = 0;

      if (type !== 0) {
        value = createTypedArray('float32', data.a === 1 ? data.k[0].s.length : data.k.length);
      }

      prop._cachingAtTime = {
        lastFrame: initialDefaultFrame,
        lastIndex: 0,
        value: value
      };
      expressionHelpers.searchExpressions(elem, data, prop);

      if (prop.k) {
        container.addDynamicProperty(prop);
      }

      return prop;
    };

    function getShapeValueAtTime(frameNum) {
      // For now this caching object is created only when needed instead of creating it when the shape is initialized.
      if (!this._cachingAtTime) {
        this._cachingAtTime = {
          shapeValue: shapePool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        };
      }

      frameNum *= this.elem.globalData.frameRate;
      frameNum -= this.offsetTime;

      if (frameNum !== this._cachingAtTime.lastTime) {
        this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
        this._cachingAtTime.lastTime = frameNum;
        this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
      }

      return this._cachingAtTime.shapeValue;
    }

    var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
    var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

    function ShapeExpressions() {}

    ShapeExpressions.prototype = {
      vertices: function vertices(prop, time) {
        if (this.k) {
          this.getValue();
        }

        var shapePath = this.v;

        if (time !== undefined) {
          shapePath = this.getValueAtTime(time, 0);
        }

        var i;
        var len = shapePath._length;
        var vertices = shapePath[prop];
        var points = shapePath.v;
        var arr = createSizedArray(len);

        for (i = 0; i < len; i += 1) {
          if (prop === 'i' || prop === 'o') {
            arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
          } else {
            arr[i] = [vertices[i][0], vertices[i][1]];
          }
        }

        return arr;
      },
      points: function points(time) {
        return this.vertices('v', time);
      },
      inTangents: function inTangents(time) {
        return this.vertices('i', time);
      },
      outTangents: function outTangents(time) {
        return this.vertices('o', time);
      },
      isClosed: function isClosed() {
        return this.v.c;
      },
      pointOnPath: function pointOnPath(perc, time) {
        var shapePath = this.v;

        if (time !== undefined) {
          shapePath = this.getValueAtTime(time, 0);
        }

        if (!this._segmentsLength) {
          this._segmentsLength = bez.getSegmentsLength(shapePath);
        }

        var segmentsLength = this._segmentsLength;
        var lengths = segmentsLength.lengths;
        var lengthPos = segmentsLength.totalLength * perc;
        var i = 0;
        var len = lengths.length;
        var accumulatedLength = 0;
        var pt;

        while (i < len) {
          if (accumulatedLength + lengths[i].addedLength > lengthPos) {
            var initIndex = i;
            var endIndex = shapePath.c && i === len - 1 ? 0 : i + 1;
            var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
            pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
            break;
          } else {
            accumulatedLength += lengths[i].addedLength;
          }

          i += 1;
        }

        if (!pt) {
          pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
        }

        return pt;
      },
      vectorOnPath: function vectorOnPath(perc, time, vectorType) {
        // perc doesn't use triple equality because it can be a Number object as well as a primitive.
        if (perc == 1) {
          // eslint-disable-line eqeqeq
          perc = this.v.c;
        } else if (perc == 0) {
          // eslint-disable-line eqeqeq
          perc = 0.999;
        }

        var pt1 = this.pointOnPath(perc, time);
        var pt2 = this.pointOnPath(perc + 0.001, time);
        var xLength = pt2[0] - pt1[0];
        var yLength = pt2[1] - pt1[1];
        var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));

        if (magnitude === 0) {
          return [0, 0];
        }

        var unitVector = vectorType === 'tangent' ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
        return unitVector;
      },
      tangentOnPath: function tangentOnPath(perc, time) {
        return this.vectorOnPath(perc, time, 'tangent');
      },
      normalOnPath: function normalOnPath(perc, time) {
        return this.vectorOnPath(perc, time, 'normal');
      },
      setGroupProperty: expressionHelpers.setGroupProperty,
      getValueAtTime: expressionHelpers.getStaticValueAtTime
    };
    extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
    extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
    KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
    KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;
    var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;

    ShapePropertyFactory.getShapeProp = function (elem, data, type, arr, trims) {
      var prop = propertyGetShapeProp(elem, data, type, arr, trims);
      prop.propertyIndex = data.ix;
      prop.lock = false;

      if (type === 3) {
        expressionHelpers.searchExpressions(elem, data.pt, prop);
      } else if (type === 4) {
        expressionHelpers.searchExpressions(elem, data.ks, prop);
      }

      if (prop.k) {
        elem.addDynamicProperty(prop);
      }

      return prop;
    };
  }

  function initialize$1() {
    addPropertyDecorator();
  }

  function addDecorator() {
    function searchExpressions() {
      if (this.data.d.x) {
        this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
        this.addEffect(this.getExpressionValue.bind(this));
        return true;
      }

      return null;
    }

    TextProperty.prototype.getExpressionValue = function (currentValue, text) {
      var newValue = this.calculateExpression(text);

      if (currentValue.t !== newValue) {
        var newData = {};
        this.copyData(newData, currentValue);
        newData.t = newValue.toString();
        newData.__complete = false;
        return newData;
      }

      return currentValue;
    };

    TextProperty.prototype.searchProperty = function () {
      var isKeyframed = this.searchKeyframes();
      var hasExpressions = this.searchExpressions();
      this.kf = isKeyframed || hasExpressions;
      return this.kf;
    };

    TextProperty.prototype.searchExpressions = searchExpressions;
  }

  function initialize() {
    addDecorator();
  }

  function SVGComposableEffect() {}

  SVGComposableEffect.prototype = {
    createMergeNode: function createMergeNode(resultId, ins) {
      var feMerge = createNS('feMerge');
      feMerge.setAttribute('result', resultId);
      var feMergeNode;
      var i;

      for (i = 0; i < ins.length; i += 1) {
        feMergeNode = createNS('feMergeNode');
        feMergeNode.setAttribute('in', ins[i]);
        feMerge.appendChild(feMergeNode);
        feMerge.appendChild(feMergeNode);
      }

      return feMerge;
    }
  };

  var linearFilterValue = '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0';

  function SVGTintFilter(filter, filterManager, elem, id, source) {
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
    feColorMatrix.setAttribute('values', linearFilterValue + ' 1 0');
    this.linearFilter = feColorMatrix;
    feColorMatrix.setAttribute('result', id + '_tint_1');
    filter.appendChild(feColorMatrix);
    feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
    feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result', id + '_tint_2');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
    var feMerge = this.createMergeNode(id, [source, id + '_tint_1', id + '_tint_2']);
    filter.appendChild(feMerge);
  }

  extendPrototype([SVGComposableEffect], SVGTintFilter);

  SVGTintFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var colorBlack = this.filterManager.effectElements[0].p.v;
      var colorWhite = this.filterManager.effectElements[1].p.v;
      var opacity = this.filterManager.effectElements[2].p.v / 100;
      this.linearFilter.setAttribute('values', linearFilterValue + ' ' + opacity + ' 0');
      this.matrixFilter.setAttribute('values', colorWhite[0] - colorBlack[0] + ' 0 0 0 ' + colorBlack[0] + ' ' + (colorWhite[1] - colorBlack[1]) + ' 0 0 0 ' + colorBlack[1] + ' ' + (colorWhite[2] - colorBlack[2]) + ' 0 0 0 ' + colorBlack[2] + ' 0 0 0 1 0');
    }
  };

  function SVGFillFilter(filter, filterManager, elem, id) {
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
    feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result', id);
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
  }

  SVGFillFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var color = this.filterManager.effectElements[2].p.v;
      var opacity = this.filterManager.effectElements[6].p.v;
      this.matrixFilter.setAttribute('values', '0 0 0 0 ' + color[0] + ' 0 0 0 0 ' + color[1] + ' 0 0 0 0 ' + color[2] + ' 0 0 0 ' + opacity + ' 0');
    }
  };

  function SVGStrokeEffect(fil, filterManager, elem) {
    this.initialized = false;
    this.filterManager = filterManager;
    this.elem = elem;
    this.paths = [];
  }

  SVGStrokeEffect.prototype.initialize = function () {
    var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
    var path;
    var groupPath;
    var i;
    var len;

    if (this.filterManager.effectElements[1].p.v === 1) {
      len = this.elem.maskManager.masksProperties.length;
      i = 0;
    } else {
      i = this.filterManager.effectElements[0].p.v - 1;
      len = i + 1;
    }

    groupPath = createNS('g');
    groupPath.setAttribute('fill', 'none');
    groupPath.setAttribute('stroke-linecap', 'round');
    groupPath.setAttribute('stroke-dashoffset', 1);

    for (i; i < len; i += 1) {
      path = createNS('path');
      groupPath.appendChild(path);
      this.paths.push({
        p: path,
        m: i
      });
    }

    if (this.filterManager.effectElements[10].p.v === 3) {
      var mask = createNS('mask');
      var id = createElementID();
      mask.setAttribute('id', id);
      mask.setAttribute('mask-type', 'alpha');
      mask.appendChild(groupPath);
      this.elem.globalData.defs.appendChild(mask);
      var g = createNS('g');
      g.setAttribute('mask', 'url(' + getLocationHref() + '#' + id + ')');

      while (elemChildren[0]) {
        g.appendChild(elemChildren[0]);
      }

      this.elem.layerElement.appendChild(g);
      this.masker = mask;
      groupPath.setAttribute('stroke', '#fff');
    } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
      if (this.filterManager.effectElements[10].p.v === 2) {
        elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;

        while (elemChildren.length) {
          this.elem.layerElement.removeChild(elemChildren[0]);
        }
      }

      this.elem.layerElement.appendChild(groupPath);
      this.elem.layerElement.removeAttribute('mask');
      groupPath.setAttribute('stroke', '#fff');
    }

    this.initialized = true;
    this.pathMasker = groupPath;
  };

  SVGStrokeEffect.prototype.renderFrame = function (forceRender) {
    if (!this.initialized) {
      this.initialize();
    }

    var i;
    var len = this.paths.length;
    var mask;
    var path;

    for (i = 0; i < len; i += 1) {
      if (this.paths[i].m !== -1) {
        mask = this.elem.maskManager.viewData[this.paths[i].m];
        path = this.paths[i].p;

        if (forceRender || this.filterManager._mdf || mask.prop._mdf) {
          path.setAttribute('d', mask.lastPath);
        }

        if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf) {
          var dasharrayValue;

          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
            var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
            var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
            var l = path.getTotalLength();
            dasharrayValue = '0 0 0 ' + l * s + ' ';
            var lineLength = l * (e - s);
            var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
            var units = Math.floor(lineLength / segment);
            var j;

            for (j = 0; j < units; j += 1) {
              dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
            }

            dasharrayValue += '0 ' + l * 10 + ' 0 0';
          } else {
            dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
          }

          path.setAttribute('stroke-dasharray', dasharrayValue);
        }
      }
    }

    if (forceRender || this.filterManager.effectElements[4].p._mdf) {
      this.pathMasker.setAttribute('stroke-width', this.filterManager.effectElements[4].p.v * 2);
    }

    if (forceRender || this.filterManager.effectElements[6].p._mdf) {
      this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v);
    }

    if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
      if (forceRender || this.filterManager.effectElements[3].p._mdf) {
        var color = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(color[0] * 255) + ',' + bmFloor(color[1] * 255) + ',' + bmFloor(color[2] * 255) + ')');
      }
    }
  };

  function SVGTritoneFilter(filter, filterManager, elem, id) {
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
    feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    filter.appendChild(feColorMatrix);
    var feComponentTransfer = createNS('feComponentTransfer');
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    feComponentTransfer.setAttribute('result', id);
    this.matrixFilter = feComponentTransfer;
    var feFuncR = createNS('feFuncR');
    feFuncR.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFuncR);
    this.feFuncR = feFuncR;
    var feFuncG = createNS('feFuncG');
    feFuncG.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFuncG);
    this.feFuncG = feFuncG;
    var feFuncB = createNS('feFuncB');
    feFuncB.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFuncB);
    this.feFuncB = feFuncB;
    filter.appendChild(feComponentTransfer);
  }

  SVGTritoneFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var color1 = this.filterManager.effectElements[0].p.v;
      var color2 = this.filterManager.effectElements[1].p.v;
      var color3 = this.filterManager.effectElements[2].p.v;
      var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
      var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
      var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
      this.feFuncR.setAttribute('tableValues', tableR);
      this.feFuncG.setAttribute('tableValues', tableG);
      this.feFuncB.setAttribute('tableValues', tableB);
    }
  };

  function SVGProLevelsFilter(filter, filterManager, elem, id) {
    this.filterManager = filterManager;
    var effectElements = this.filterManager.effectElements;
    var feComponentTransfer = createNS('feComponentTransfer'); // Red

    if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
      this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
    } // Green


    if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
      this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
    } // Blue


    if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
      this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
    } // Alpha


    if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
      this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
    } // RGB


    if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
      feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
      filter.appendChild(feComponentTransfer);
    }

    if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
      feComponentTransfer = createNS('feComponentTransfer');
      feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
      feComponentTransfer.setAttribute('result', id);
      filter.appendChild(feComponentTransfer);
      this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
      this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
      this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
    }
  }

  SVGProLevelsFilter.prototype.createFeFunc = function (type, feComponentTransfer) {
    var feFunc = createNS(type);
    feFunc.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFunc);
    return feFunc;
  };

  SVGProLevelsFilter.prototype.getTableValue = function (inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
    var cnt = 0;
    var segments = 256;
    var perc;
    var min = Math.min(inputBlack, inputWhite);
    var max = Math.max(inputBlack, inputWhite);
    var table = Array.call(null, {
      length: segments
    });
    var colorValue;
    var pos = 0;
    var outputDelta = outputWhite - outputBlack;
    var inputDelta = inputWhite - inputBlack;

    while (cnt <= 256) {
      perc = cnt / 256;

      if (perc <= min) {
        colorValue = inputDelta < 0 ? outputWhite : outputBlack;
      } else if (perc >= max) {
        colorValue = inputDelta < 0 ? outputBlack : outputWhite;
      } else {
        colorValue = outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma);
      }

      table[pos] = colorValue;
      pos += 1;
      cnt += 256 / (segments - 1);
    }

    return table.join(' ');
  };

  SVGProLevelsFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var val;
      var effectElements = this.filterManager.effectElements;

      if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
        val = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
        this.feFuncRComposed.setAttribute('tableValues', val);
        this.feFuncGComposed.setAttribute('tableValues', val);
        this.feFuncBComposed.setAttribute('tableValues', val);
      }

      if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
        val = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
        this.feFuncR.setAttribute('tableValues', val);
      }

      if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
        val = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
        this.feFuncG.setAttribute('tableValues', val);
      }

      if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
        val = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
        this.feFuncB.setAttribute('tableValues', val);
      }

      if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
        val = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
        this.feFuncA.setAttribute('tableValues', val);
      }
    }
  };

  function SVGDropShadowEffect(filter, filterManager, elem, id, source) {
    var globalFilterSize = filterManager.container.globalData.renderConfig.filterSize;
    var filterSize = filterManager.data.fs || globalFilterSize;
    filter.setAttribute('x', filterSize.x || globalFilterSize.x);
    filter.setAttribute('y', filterSize.y || globalFilterSize.y);
    filter.setAttribute('width', filterSize.width || globalFilterSize.width);
    filter.setAttribute('height', filterSize.height || globalFilterSize.height);
    this.filterManager = filterManager;
    var feGaussianBlur = createNS('feGaussianBlur');
    feGaussianBlur.setAttribute('in', 'SourceAlpha');
    feGaussianBlur.setAttribute('result', id + '_drop_shadow_1');
    feGaussianBlur.setAttribute('stdDeviation', '0');
    this.feGaussianBlur = feGaussianBlur;
    filter.appendChild(feGaussianBlur);
    var feOffset = createNS('feOffset');
    feOffset.setAttribute('dx', '25');
    feOffset.setAttribute('dy', '0');
    feOffset.setAttribute('in', id + '_drop_shadow_1');
    feOffset.setAttribute('result', id + '_drop_shadow_2');
    this.feOffset = feOffset;
    filter.appendChild(feOffset);
    var feFlood = createNS('feFlood');
    feFlood.setAttribute('flood-color', '#00ff00');
    feFlood.setAttribute('flood-opacity', '1');
    feFlood.setAttribute('result', id + '_drop_shadow_3');
    this.feFlood = feFlood;
    filter.appendChild(feFlood);
    var feComposite = createNS('feComposite');
    feComposite.setAttribute('in', id + '_drop_shadow_3');
    feComposite.setAttribute('in2', id + '_drop_shadow_2');
    feComposite.setAttribute('operator', 'in');
    feComposite.setAttribute('result', id + '_drop_shadow_4');
    filter.appendChild(feComposite);
    var feMerge = this.createMergeNode(id, [id + '_drop_shadow_4', source]);
    filter.appendChild(feMerge); //
  }

  extendPrototype([SVGComposableEffect], SVGDropShadowEffect);

  SVGDropShadowEffect.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      if (forceRender || this.filterManager.effectElements[4].p._mdf) {
        this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
      }

      if (forceRender || this.filterManager.effectElements[0].p._mdf) {
        var col = this.filterManager.effectElements[0].p.v;
        this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)));
      }

      if (forceRender || this.filterManager.effectElements[1].p._mdf) {
        this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255);
      }

      if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
        var distance = this.filterManager.effectElements[3].p.v;
        var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
        var x = distance * Math.cos(angle);
        var y = distance * Math.sin(angle);
        this.feOffset.setAttribute('dx', x);
        this.feOffset.setAttribute('dy', y);
      }
    }
  };

  var _svgMatteSymbols = [];

  function SVGMatte3Effect(filterElem, filterManager, elem) {
    this.initialized = false;
    this.filterManager = filterManager;
    this.filterElem = filterElem;
    this.elem = elem;
    elem.matteElement = createNS('g');
    elem.matteElement.appendChild(elem.layerElement);
    elem.matteElement.appendChild(elem.transformedElement);
    elem.baseElement = elem.matteElement;
  }

  SVGMatte3Effect.prototype.findSymbol = function (mask) {
    var i = 0;
    var len = _svgMatteSymbols.length;

    while (i < len) {
      if (_svgMatteSymbols[i] === mask) {
        return _svgMatteSymbols[i];
      }

      i += 1;
    }

    return null;
  };

  SVGMatte3Effect.prototype.replaceInParent = function (mask, symbolId) {
    var parentNode = mask.layerElement.parentNode;

    if (!parentNode) {
      return;
    }

    var children = parentNode.children;
    var i = 0;
    var len = children.length;

    while (i < len) {
      if (children[i] === mask.layerElement) {
        break;
      }

      i += 1;
    }

    var nextChild;

    if (i <= len - 2) {
      nextChild = children[i + 1];
    }

    var useElem = createNS('use');
    useElem.setAttribute('href', '#' + symbolId);

    if (nextChild) {
      parentNode.insertBefore(useElem, nextChild);
    } else {
      parentNode.appendChild(useElem);
    }
  };

  SVGMatte3Effect.prototype.setElementAsMask = function (elem, mask) {
    if (!this.findSymbol(mask)) {
      var symbolId = createElementID();
      var masker = createNS('mask');
      masker.setAttribute('id', mask.layerId);
      masker.setAttribute('mask-type', 'alpha');

      _svgMatteSymbols.push(mask);

      var defs = elem.globalData.defs;
      defs.appendChild(masker);
      var symbol = createNS('symbol');
      symbol.setAttribute('id', symbolId);
      this.replaceInParent(mask, symbolId);
      symbol.appendChild(mask.layerElement);
      defs.appendChild(symbol);
      var useElem = createNS('use');
      useElem.setAttribute('href', '#' + symbolId);
      masker.appendChild(useElem);
      mask.data.hd = false;
      mask.show();
    }

    elem.setMatte(mask.layerId);
  };

  SVGMatte3Effect.prototype.initialize = function () {
    var ind = this.filterManager.effectElements[0].p.v;
    var elements = this.elem.comp.elements;
    var i = 0;
    var len = elements.length;

    while (i < len) {
      if (elements[i] && elements[i].data.ind === ind) {
        this.setElementAsMask(this.elem, elements[i]);
      }

      i += 1;
    }

    this.initialized = true;
  };

  SVGMatte3Effect.prototype.renderFrame = function () {
    if (!this.initialized) {
      this.initialize();
    }
  };

  function SVGGaussianBlurEffect(filter, filterManager, elem, id) {
    // Outset the filter region by 100% on all sides to accommodate blur expansion.
    filter.setAttribute('x', '-100%');
    filter.setAttribute('y', '-100%');
    filter.setAttribute('width', '300%');
    filter.setAttribute('height', '300%');
    this.filterManager = filterManager;
    var feGaussianBlur = createNS('feGaussianBlur');
    feGaussianBlur.setAttribute('result', id);
    filter.appendChild(feGaussianBlur);
    this.feGaussianBlur = feGaussianBlur;
  }

  SVGGaussianBlurEffect.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      // Empirical value, matching AE's blur appearance.
      var kBlurrinessToSigma = 0.3;
      var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma; // Dimensions mapping:
      //
      //   1 -> horizontal & vertical
      //   2 -> horizontal only
      //   3 -> vertical only
      //

      var dimensions = this.filterManager.effectElements[1].p.v;
      var sigmaX = dimensions == 3 ? 0 : sigma; // eslint-disable-line eqeqeq

      var sigmaY = dimensions == 2 ? 0 : sigma; // eslint-disable-line eqeqeq

      this.feGaussianBlur.setAttribute('stdDeviation', sigmaX + ' ' + sigmaY); // Repeat edges mapping:
      //
      //   0 -> off -> duplicate
      //   1 -> on  -> wrap

      var edgeMode = this.filterManager.effectElements[2].p.v == 1 ? 'wrap' : 'duplicate'; // eslint-disable-line eqeqeq

      this.feGaussianBlur.setAttribute('edgeMode', edgeMode);
    }
  };

  function TransformEffect() {}

  TransformEffect.prototype.init = function (effectsManager) {
    this.effectsManager = effectsManager;
    this.type = effectTypes.TRANSFORM_EFFECT;
    this.matrix = new Matrix();
    this.opacity = -1;
    this._mdf = false;
    this._opMdf = false;
  };

  TransformEffect.prototype.renderFrame = function (forceFrame) {
    this._opMdf = false;
    this._mdf = false;

    if (forceFrame || this.effectsManager._mdf) {
      var effectElements = this.effectsManager.effectElements;
      var anchor = effectElements[0].p.v;
      var position = effectElements[1].p.v;
      var isUniformScale = effectElements[2].p.v === 1;
      var scaleHeight = effectElements[3].p.v;
      var scaleWidth = isUniformScale ? scaleHeight : effectElements[4].p.v;
      var skew = effectElements[5].p.v;
      var skewAxis = effectElements[6].p.v;
      var rotation = effectElements[7].p.v;
      this.matrix.reset();
      this.matrix.translate(-anchor[0], -anchor[1], anchor[2]);
      this.matrix.scale(scaleWidth * 0.01, scaleHeight * 0.01, 1);
      this.matrix.rotate(-rotation * degToRads);
      this.matrix.skewFromAxis(-skew * degToRads, (skewAxis + 90) * degToRads);
      this.matrix.translate(position[0], position[1], 0);
      this._mdf = true;

      if (this.opacity !== effectElements[8].p.v) {
        this.opacity = effectElements[8].p.v;
        this._opMdf = true;
      }
    }
  };

  function SVGTransformEffect(_, filterManager) {
    this.init(filterManager);
  }

  extendPrototype([TransformEffect], SVGTransformEffect);

  function CVTransformEffect(effectsManager) {
    this.init(effectsManager);
  }

  extendPrototype([TransformEffect], CVTransformEffect);

  registerRenderer('canvas', CanvasRenderer);
  registerRenderer('html', HybridRenderer);
  registerRenderer('svg', SVGRenderer); // Registering shape modifiers

  ShapeModifiers.registerModifier('tm', TrimModifier);
  ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);
  ShapeModifiers.registerModifier('rp', RepeaterModifier);
  ShapeModifiers.registerModifier('rd', RoundCornersModifier);
  ShapeModifiers.registerModifier('zz', ZigZagModifier);
  ShapeModifiers.registerModifier('op', OffsetPathModifier); // Registering expression plugin

  setExpressionsPlugin(Expressions);
  setExpressionInterfaces(getInterface);
  initialize$1();
  initialize(); // Registering svg effects

  registerEffect$1(20, SVGTintFilter, true);
  registerEffect$1(21, SVGFillFilter, true);
  registerEffect$1(22, SVGStrokeEffect, false);
  registerEffect$1(23, SVGTritoneFilter, true);
  registerEffect$1(24, SVGProLevelsFilter, true);
  registerEffect$1(25, SVGDropShadowEffect, true);
  registerEffect$1(28, SVGMatte3Effect, false);
  registerEffect$1(29, SVGGaussianBlurEffect, true);
  registerEffect$1(35, SVGTransformEffect, false);
  registerEffect(35, CVTransformEffect);

  return lottie;

}));


/***/ }),
/* 14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// Axios v1.4.0 Copyright (c) 2023 Matt Zabriskie and contributors


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : __webpack_require__.g)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

var utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


var platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

var cookies = platform.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var isURLSameOrigin = platform.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const VERSION = "1.4.0";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

module.exports = axios;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notyf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var notyf_notyf_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var axios = __webpack_require__(14);
var notyf = new notyf__WEBPACK_IMPORTED_MODULE_1__.Notyf({
  duration: 5000,
  dismissible: true,
  position: {
    x: 'right',
    y: 'top'
  }
});
try {
  var anim = lottie_web__WEBPACK_IMPORTED_MODULE_3___default().loadAnimation({
    container: document.getElementById('preloader'),
    // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/netcat_template/template/main/assets/js/data.json'
  });
  /*anim.addEventListener('complete', function () {
    console.log('complete');
    document.getElementById('preloader').classList.add('hide');
    setTimeout(function () {
      document.getElementById('preloader').remove();
      anim.destroy();
    }, "1000");
  });*/
  
    setTimeout(function () {
      document.getElementById('preloader').classList.add('hide');
      document.getElementById('preloader').remove();
      anim.destroy();
    }, 3500);
  anim.addEventListener('loopComplete', function () {
    console.log('loopComplete');
  });
  anim.addEventListener('data_ready ', function () {
    console.log('data_ready');
  });
  anim.addEventListener('data_failed', function () {
    console.log('data_failed');
  });
} catch (error) {
  console.log('error loading anim');
}
$(document).ready(function () {
  // $('').each(function () { // the containers for all your galleries
  // console.log(this);
  $('.team-slider').magnificPopup({
    delegate: 'a',
    // the selector for gallery item
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  // });

  $('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: true
  });
  inputmask__WEBPACK_IMPORTED_MODULE_0___default()({
    mask: "+9 (999) 999-99-99",
    placeholder: "+_ (___) ___-__-__",
    showMaskOnHover: true,
    showMaskOnFocus: true,
    removeMaskOnSubmit: false,
    clearMaskOnLostFocus: true,
    clearIncomplete: true
  }).mask(document.querySelectorAll('input[type=tel]'));

  // $('.pbmit-btn-lg').click(function (e) {
  //     e.preventDefault();

  //     notyf.success('uspex');
  // });

  $('.nc-form').submit( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var form, formData, RECAPTCHA_PUBLIC_KEY;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            form = event.target;
            formData = new FormData(form);
            RECAPTCHA_PUBLIC_KEY = document.querySelector('html').dataset.recaptchapublickey;
            grecaptcha.ready(function () {
              grecaptcha.execute(RECAPTCHA_PUBLIC_KEY, {
                action: 'homepage'
              }).then(function (token) {
                formData.append('token', token);
                axios.post(form.action, formData).then(function (val) {
                  form.reset();
                  notyf.success(val.data.message);
                  $.magnificPopup.close();
                });
              });
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
  if (ymaps) {
    var init = function init() {
      // Создание карты.
      var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [$('#map').attr('data-lat'), $('#map').attr('data-lon')],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          // тип геометрии - точка
          coordinates: [$('#map').attr('data-lat'), $('#map').attr('data-lon')] // координаты точки
        }
      });

      myMap.geoObjects.add(myGeoObject);
    };
    ymaps.ready(init);
  }
});
}();
/******/ })()
;