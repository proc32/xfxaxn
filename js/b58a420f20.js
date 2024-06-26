window.FontAwesomeKitConfig = { asyncLoading: { enabled: !1 }, autoA11y: { enabled: !0 }, baseUrl: "https://ka-f.fontawesome.com", baseUrlKit: "https://kit.fontawesome.com", detectConflictsUntil: null, iconUploads: {}, id: 14363161, license: "free", method: "css", minify: { enabled: !0 }, token: "b58a420f20", v4FontFaceShim: { enabled: !0 }, v4shim: { enabled: !0 }, v5FontFaceShim: { enabled: !0 }, version: "6.4.2" },
    function(t) { "function" == typeof define && define.amd ? define("kit-loader", t) : t() }((function() {
        "use strict";

        function t(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, o)
            }
            return n
        }

        function e(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? t(Object(r), !0).forEach((function(t) { o(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
            }
            return e
        }

        function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

        function o(t, e, n) { return (e = function(t) { var e = function(t, e) { if ("object" != typeof t || null === t) return t; var n = t[Symbol.toPrimitive]; if (void 0 !== n) { var o = n.call(t, e); if ("object" != typeof o) return o; throw new TypeError("@@toPrimitive must return a primitive value.") } return String(t) }(t, "string"); return "symbol" == typeof e ? e : String(e) }(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

        function r(t, e) {
            return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var o, r, i, a, c = [],
                        u = !0,
                        s = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            u = !1
                        } else
                            for (; !(u = (o = i.call(n)).done) && (c.push(o.value), c.length !== e); u = !0);
                    } catch (t) { s = !0, r = t } finally { try { if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return } finally { if (s) throw r } }
                    return c
                }
            }(t, e) || function(t, e) { if (t) { if ("string" == typeof t) return i(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0 } }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o
        }

        function a(t, e) {
            var n = e && e.addOn || "",
                o = e && e.baseFilename || t.license + n,
                r = e && e.minify ? ".min" : "",
                i = e && e.fileSuffix || t.method,
                a = e && e.subdir || t.method;
            return t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/" + a + "/" + o + r + "." + i
        }

        function c(t, e) {
            var n = e || ["fa"],
                o = "." + Array.prototype.join.call(n, ",."),
                r = t.querySelectorAll(o);
            Array.prototype.forEach.call(r, (function(e) {
                var n = e.getAttribute("title");
                e.setAttribute("aria-hidden", "true");
                var o = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only");
                if (n && o) {
                    var r = t.createElement("span");
                    r.innerHTML = n, r.classList.add("sr-only"), e.parentNode.insertBefore(r, e.nextSibling)
                }
            }))
        }
        var u, s = function() {},
            f = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
            l = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
            d = [];

        function h() {
            for (var t = 0; t < d.length; t++) d[t][0](d[t][1]);
            d = [], u = !1
        }

        function m(t, e) { d.push([t, e]), u || (u = !0, l(h, 0)) }

        function p(t) {
            var e = t.owner,
                n = e._state,
                o = e._data,
                r = t[n],
                i = t.then;
            if ("function" == typeof r) { n = "fulfilled"; try { o = r(o) } catch (t) { g(i, t) } }
            b(i, o) || ("fulfilled" === n && v(i, o), "rejected" === n && g(i, o))
        }

        function b(t, e) { var o; try { if (t === e) throw new TypeError("A promises callback cannot return that same promise."); if (e && ("function" == typeof e || "object" === n(e))) { var r = e.then; if ("function" == typeof r) return r.call(e, (function(n) { o || (o = !0, e === n ? y(t, n) : v(t, n)) }), (function(e) { o || (o = !0, g(t, e)) })), !0 } } catch (e) { return o || g(t, e), !0 } return !1 }

        function v(t, e) { t !== e && b(t, e) || y(t, e) }

        function y(t, e) { "pending" === t._state && (t._state = "settled", t._data = e, m(A, t)) }

        function g(t, e) { "pending" === t._state && (t._state = "settled", t._data = e, m(S, t)) }

        function w(t) { t._then = t._then.forEach(p) }

        function A(t) { t._state = "fulfilled", w(t) }

        function S(t) { t._state = "rejected", w(t), !t._handled && f && global.process.emit("unhandledRejection", t._data, t) }

        function O(t) { global.process.emit("rejectionHandled", t) }

        function j(t) {
            if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
            if (this instanceof j == 0) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._then = [],
                function(t, e) {
                    function n(t) { g(e, t) }
                    try { t((function(t) { v(e, t) }), n) } catch (t) { n(t) }
                }(t, this)
        }
        j.prototype = { constructor: j, _state: "pending", _then: null, _data: void 0, _handled: !1, then: function(t, e) { var n = { owner: this, then: new this.constructor(s), fulfilled: t, rejected: e }; return !e && !t || this._handled || (this._handled = !0, "rejected" === this._state && f && m(O, this)), "fulfilled" === this._state || "rejected" === this._state ? m(p, n) : this._then.push(n), n.then }, catch: function(t) { return this.then(null, t) } }, j.all = function(t) {
            if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.all().");
            return new j((function(e, n) {
                var o = [],
                    r = 0;

                function i(t) {
                    return r++,
                        function(n) { o[t] = n, --r || e(o) }
                }
                for (var a, c = 0; c < t.length; c++)(a = t[c]) && "function" == typeof a.then ? a.then(i(c), n) : o[c] = a;
                r || e(o)
            }))
        }, j.race = function(t) { if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.race()."); return new j((function(e, n) { for (var o, r = 0; r < t.length; r++)(o = t[r]) && "function" == typeof o.then ? o.then(e, n) : e(o) })) }, j.resolve = function(t) { return t && "object" === n(t) && t.constructor === j ? t : new j((function(e) { e(t) })) }, j.reject = function(t) { return new j((function(e, n) { n(t) })) };
        var E = "function" == typeof Promise ? Promise : j;

        function F(t, e) {
            var n = e.fetch,
                o = e.XMLHttpRequest,
                r = e.token,
                i = t;
            return r && ! function(t) { return t.indexOf("kit-upload.css") > -1 }(t) && ("URLSearchParams" in window ? (i = new URL(t)).searchParams.set("token", r) : i = i + "?token=" + encodeURIComponent(r)), i = i.toString(), new E((function(t, e) {
                if ("function" == typeof n) n(i, { mode: "cors", cache: "default" }).then((function(t) { if (t.ok) return t.text(); throw new Error("") })).then((function(e) { t(e) })).catch(e);
                else if ("function" == typeof o) {
                    var r = new o;
                    r.addEventListener("loadend", (function() { this.responseText ? t(this.responseText) : e(new Error("")) })), ["abort", "error", "timeout"].map((function(t) { r.addEventListener(t, (function() { e(new Error("")) })) })), r.open("GET", i), r.send()
                } else e(new Error(""))
            }))
        }

        function P(t, e, n) {
            var o = t;
            return [
                [/(url\("?)\.\.\/\.\.\/\.\./g, function(t, n) { return "".concat(n).concat(e) }],
                [/(url\("?)\.\.\/webfonts/g, function(t, o) { return "".concat(o).concat(e, "/releases/v").concat(n, "/webfonts") }],
                [/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g, function(t, n) { return "".concat(n).concat(e) }]
            ].forEach((function(t) {
                var e = r(t, 2),
                    n = e[0],
                    i = e[1];
                o = o.replace(n, i)
            })), o
        }

        function _(t, n) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                r = n.document || r,
                i = c.bind(c, r, ["fa", "fab", "fas", "far", "fal", "fad", "fak"]);
            t.autoA11y.enabled && o(i);
            var u = t.subsetPath && t.baseUrl + "/" + t.subsetPath,
                s = [{ id: "fa-main", addOn: void 0, url: u }];
            if (t.v4shim && t.v4shim.enabled && s.push({ id: "fa-v4-shims", addOn: "-v4-shims" }), t.v5FontFaceShim && t.v5FontFaceShim.enabled && s.push({ id: "fa-v5-font-face", addOn: "-v5-font-face" }), t.v4FontFaceShim && t.v4FontFaceShim.enabled && s.push({ id: "fa-v4-font-face", addOn: "-v4-font-face" }), !u && t.customIconsCssPath) {
                var f = t.customIconsCssPath.indexOf("kit-upload.css") > -1 ? t.baseUrlKit : t.baseUrl,
                    l = f + "/" + t.customIconsCssPath;
                s.push({ id: "fa-kit-upload", url: l })
            }
            var d = s.map((function(o) {
                return new E((function(r, i) {
                    var c = o.url || a(t, { addOn: o.addOn, minify: t.minify.enabled }),
                        u = { id: o.id },
                        s = t.subset ? u : e(e(e({}, n), u), {}, { baseUrl: t.baseUrl, version: t.version, id: o.id, contentFilter: function(t, e) { return P(t, e.baseUrl, e.version) } });
                    F(c, n).then((function(t) { r(C(t, s)) })).catch(i)
                }))
            }));
            return E.all(d)
        }

        function C(t, e) {
            var n = e.contentFilter || function(t, e) { return t },
                o = document.createElement("style"),
                r = document.createTextNode(n(t, e));
            return o.appendChild(r), o.media = "all", e.id && o.setAttribute("id", e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && o.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), o
        }

        function U(t, n) {
            n.autoA11y = t.autoA11y.enabled, "pro" === t.license && (n.autoFetchSvg = !0, n.fetchSvgFrom = t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/svgs", n.fetchUploadedSvgFrom = t.uploadsUrl);
            var o = [];
            return t.v4shim.enabled && o.push(new E((function(o, r) { F(a(t, { addOn: "-v4-shims", minify: t.minify.enabled }), n).then((function(t) { o(I(t, e(e({}, n), {}, { id: "fa-v4-shims" }))) })).catch(r) }))), o.push(new E((function(o, r) {
                F(t.subsetPath && t.baseUrl + "/" + t.subsetPath || a(t, { minify: t.minify.enabled }), n).then((function(t) {
                    var r = I(t, e(e({}, n), {}, { id: "fa-main" }));
                    o(function(t, e) {
                        var n = e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0,
                            o = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;
                        return void 0 !== o && t.setAttribute("data-auto-a11y", o ? "true" : "false"), n && (t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), t.setAttribute("data-fetch-svg-from", e.fetchSvgFrom), t.setAttribute("data-fetch-uploaded-svg-from", e.fetchUploadedSvgFrom)), t
                    }(r, n))
                })).catch(r)
            }))), E.all(o)
        }

        function I(t, e) {
            var n = document.createElement("SCRIPT"),
                o = document.createTextNode(t);
            return n.appendChild(o), n.referrerPolicy = "strict-origin", e.id && n.setAttribute("id", e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n
        }

        function k(t) {
            var e, n = [],
                o = document,
                r = (o.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
            r || o.addEventListener("DOMContentLoaded", e = function() { for (o.removeEventListener("DOMContentLoaded", e), r = 1; e = n.shift();) e() }), r ? setTimeout(t, 0) : n.push(t)
        }

        function L(t) { "undefined" != typeof MutationObserver && new MutationObserver(t).observe(document, { childList: !0, subtree: !0 }) }
        try {
            if (window.FontAwesomeKitConfig) {
                var T = window.FontAwesomeKitConfig,
                    x = { detectingConflicts: T.detectConflictsUntil && new Date <= new Date(T.detectConflictsUntil), detectionIgnoreAttr: "data-fa-detection-ignore", fetch: window.fetch, token: T.token, XMLHttpRequest: window.XMLHttpRequest, document: document },
                    M = document.currentScript,
                    D = M ? M.parentElement : document.head;
                (function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "js" === t.method ? U(t, e) : "css" === t.method ? _(t, e, (function(t) { k(t), L(t) })) : void 0
                })(T, x).then((function(t) {
                    t.map((function(t) { try { D.insertBefore(t, M ? M.nextSibling : null) } catch (e) { D.appendChild(t) } })), x.detectingConflicts && M && k((function() {
                        M.setAttributeNode(document.createAttribute(x.detectionIgnoreAttr));
                        var t = function(t, e) { var n = document.createElement("script"); return e && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n.src = a(t, { baseFilename: "conflict-detection", fileSuffix: "js", subdir: "js", minify: t.minify.enabled }), n }(T, x);
                        document.body.appendChild(t)
                    }))
                })).catch((function(t) { console.error("".concat("Font Awesome Kit:", " ").concat(t)) }))
            }
        } catch (t) { console.error("".concat("Font Awesome Kit:", " ").concat(t)) }
    }));