/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        363: function(t, e, i) {
            "use strict";
            (function(t) {
                i(18);
                var a = i(12),
                    n = i(0),
                    s = (i(151), i(13), i(410)),
                    o = i(411),
                    r = i(412),
                    c = i(413),
                    l = i(414),
                    u = i(296),
                    f = i.n(u);
                e.a = {
                    head: function() {
                        return {
                            title: "About | Patrick Heng - Creative Developer Portfolio"
                        }
                    },
                    fetch: function(t) {
                        t.store, t.params
                    },
                    data: function(t) {
                        return {}
                    },
                    computed: {},
                    created: function() {
                        n.i.aboutX = 0
                    },
                    mounted: function() {
                        n.i.aboutX = 0, n.i.isHome = !1, this._lastX = -100, a.a && a.a.initialized.then((function() {
                            a.a.scenes.change("about")
                        })), this._onResize(), this._bind(), this.$el.querySelectorAll("a").forEach((function(t) {
                            t.setAttribute("tabindex", -1)
                        })), n.a.isMobile && (this.scrollBar = f.a.init(this.$refs.wrapper, {
                            autoRender: !1
                        }), n.i.aboutScrollbar = this.scrollBar)
                    },
                    beforeDestroy: function() {
                        n.i.aboutScrollbar = null, this._unbind()
                    },
                    beforeRouteEnter: function(t, e, i) {
                        !(!e || "index" !== e.name), i()
                    },
                    beforeRouteLeave: function(e, i, n) {
                        "index" === e.name && a.a.initialized.then((function() {
                            a.a.scenes.change("home")
                        })), t.to(this.$el, {
                            opacity: 0,
                            duration: .3,
                            onComplete: function() {
                                n()
                            }
                        })
                    },
                    methods: {
                        _bind: function() {
                            n.h.addResize(this._onResize), n.d.addUp(this._onUp), n.b.on("about:tick", this._tick)
                        },
                        _unbind: function() {
                            n.h.removeResize(this._onResize), n.d.removeUp(this._onUp), n.b.off("about:tick", this._tick)
                        },
                        _onUp: function(t) {
                            27 === t.keyCode && this.$router.push({
                                path: "/"
                            })
                        },
                        _onResize: function() {
                            this.$el.style.height = n.h.height + "px", this.bbox = this.$el.getBoundingClientRect(), this.offsetX = n.i.aboutX, n.i.aboutLimit.max = Math.max(this.bbox.width - n.h.width, 0)
                        },
                        _tick: function(t) {
                            var e = t._camera.position.x;
                            n.i.aboutX = e, Math.abs(this._lastX - e) > .05 && (this.$el.style.transform = "translate3d(".concat(-e, "px, 0, 1px)")), this._lastX = e
                        }
                    },
                    components: {
                        "about-intro": s.a,
                        "about-infos": o.a,
                        "about-contact": r.a,
                        "about-awards": c.a,
                        "about-credits": l.a
                    }
                }
            }).call(this, i(22).gsap)
        },
        364: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var a = i(0);
                i(13);
                e.a = {
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    mounted: function() {
                        var t = this;
                        this._bind(), this._parts = this.$el.querySelectorAll(".about-intro__title-inner"), this._prepareIn(), a.e.hiddenPromise.then((function() {
                            t._tl && t._tl.play(), t._onResize()
                        })), this._onResize()
                    },
                    beforeDestroy: function() {
                        this._unbind(), this._tl && this._tl.pause()
                    },
                    methods: {
                        _bind: function() {
                            a.h.addResize(this._onResize)
                        },
                        _unbind: function() {
                            a.h.removeResize(this._onResize)
                        },
                        _prepareIn: function() {
                            var e = a.e.hiddenPromiseDone ? .1 : .7;
                            this._tl = t.timeline({
                                paused: !0
                            }), t.set(this._parts, {
                                y: "100%",
                                opacity: 0
                            }), this._tl.to(this._parts, {
                                y: "0%",
                                opacity: 1,
                                duration: .7,
                                ease: "cubic.out",
                                stagger: .15
                            }, e)
                        },
                        _onResize: function() {
                            a.a.isMobile && (this.$el.style.height = a.h.height - 100 + "px")
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        365: function(t, e, i) {},
        366: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var a = i(0),
                    n = (i(13), i(389)),
                    s = i.n(n);
                e.a = {
                    data: function() {
                        return {
                            isMobile: a.a.isMobile,
                            mailText: "Copy mail in clipboard ?"
                        }
                    },
                    created: function() {},
                    mounted: function() {
                        var t = this;
                        this._bind(), this.isMobile = a.a.isMobile, this.$refs.mailCta && (this.clipboard = new s.a(this.$refs.mailCta, {
                            text: function(t) {
                                return "hengpatrick.pro@gmail.com"
                            }
                        }), this.clipboard.on("success", (function(e) {
                            t.mailText = "Mail copied!", clearTimeout(t.mTo), t.mTo = setTimeout((function() {
                                t.mailText = "Copy mail in clipboard ?"
                            }), 5e3)
                        }))), this._prepareIn(), a.e.hiddenPromise.then((function() {
                            t._tl && t._tl.play()
                        }))
                    },
                    beforeDestroy: function() {
                        clearTimeout(this.mTo), this._unbind(), this.clipboard && this.clipboard.destroy && this.clipboard.destroy()
                    },
                    methods: {
                        _bind: function() {
                            a.h.addResize(this._onResize)
                        },
                        _unbind: function() {
                            clearTimeout(this._focusTo), this._tl && this._tl.pause(), a.h.removeResize(this._onResize)
                        },
                        _prepareIn: function() {
                            var e = a.e.hiddenPromiseDone ? .6 : .8;
                            if (a.a.isMobile) t.set(this.$el, {
                                opacity: 0,
                                y: 10,
                                skewY: 5,
                                transformOrigin: "top left"
                            }), this._tl = t.timeline({
                                paused: !0
                            }), this._tl.to(this.$el, {
                                opacity: 1,
                                y: 0,
                                skewY: 0,
                                ease: "cubic.out",
                                duration: .9
                            }, e);
                            else {
                                var i = this.$refs.text.querySelectorAll(".about-infos__text-i");
                                t.set(i, {
                                    y: "120%",
                                    opacity: 0
                                }), this._tl = t.timeline({
                                    paused: !0
                                }), this._tl.to(i, {
                                    opacity: 1,
                                    ease: "power3.out",
                                    duration: .1,
                                    stagger: .07
                                }, e).to(i, {
                                    y: "0%",
                                    ease: "power3.out",
                                    duration: .65,
                                    stagger: .07
                                }, e)
                            }
                        },
                        _handleMailClick: function() {
                            var t = this;
                            clearTimeout(this._focusTo), this.$refs.mailCta.classList.add("is-hover"), this._focusTo = setTimeout((function() {
                                t.$refs.mailCta.classList.remove("is-hover")
                            }), 1500), window.ga && ga("send", {
                                hitType: "event",
                                eventCategory: "about_intro_mail"
                            })
                        },
                        _onResize: function() {}
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        367: function(t, e, i) {},
        368: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var a = i(0),
                    n = (i(13), i(389)),
                    s = i.n(n);
                e.a = {
                    data: function() {
                        return {
                            mailCopy: "Mail",
                            mailInfo: "",
                            isMobile: a.a.isMobile,
                            mailText: "Copy mail in clipboard ?"
                        }
                    },
                    created: function() {
                        this._offsetY = 0, this.isMobile = a.a.isMobile
                    },
                    mounted: function() {
                        var e = this;
                        this._bind(), this.$refs.mailCta && (this.clipboard = new s.a(this.$refs.mailCta, {
                            text: function(t) {
                                return "hengpatrick.pro@gmail.com"
                            }
                        }), this.clipboard.on("success", (function(i) {
                            t.to(e.$refs.mailSuffix, {
                                opacity: 0,
                                duration: .2,
                                onComplete: function() {
                                    e.mailInfo = " - Copied!", t.to(e.$refs.mailSuffix, {
                                        opacity: 1,
                                        duration: .2,
                                        onComplete: function() {}
                                    })
                                }
                            }), clearTimeout(e.mTo), e.mTo = setTimeout((function() {
                                t.to(e.$refs.mailSuffix, {
                                    opacity: 0,
                                    duration: .2,
                                    onComplete: function() {
                                        e.mailInfo = "", t.to(e.$refs.mailSuffix, {
                                            opacity: 1,
                                            duration: .2,
                                            onComplete: function() {}
                                        })
                                    }
                                })
                            }), 5e3)
                        }))), this._categories = this.$el.querySelectorAll(".about-contact__category"), this._txts = this.$el.querySelectorAll(".about-contact__text"), this._texts = [this._categories[0], this._txts[0], this._categories[1], this._txts[1], this._categories[2], this._txts[2]], this._onResize(), this._prepareIn(), this._to = setTimeout((function() {
                            e._onResize()
                        }), 1e3)
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._to), clearTimeout(this.mTo), this._unbind(), this.clipboard && this.clipboard.destroy && this.clipboard.destroy()
                    },
                    methods: {
                        _bind: function() {
                            a.h.addResize(this._onResize), a.g.add(this._tick, 45)
                        },
                        _unbind: function() {
                            a.h.removeResize(this._onResize), a.g.remove(this._tick)
                        },
                        _onResize: function() {
                            this._bbox = this.$el.getBoundingClientRect(), this._offsetX = a.i.aboutX, this._offsetY = a.i.aboutScrollbar ? a.i.aboutScrollbar.scrollTop : 0
                        },
                        _prepareIn: function() {
                            t.set(this.$refs.titleInner, {
                                y: "100%"
                            });
                            var e = this.$el.querySelectorAll(".about-contact__i");
                            t.set(e, {
                                opacity: 0,
                                y: "170%"
                            })
                        },
                        _animateIn: function() {
                            this._animated = !0;
                            var e = this.$el.querySelectorAll(".about-contact__i");
                            t.to(this.$refs.titleInner, {
                                y: "0%",
                                duration: .5,
                                delay: .2,
                                ease: "cubic.out"
                            }), t.to(e, {
                                opacity: 1,
                                delay: .3,
                                duration: .5,
                                ease: "cubic.out"
                            }), t.to(e, {
                                y: "0%",
                                delay: .3,
                                duration: .4,
                                stagger: .07,
                                ease: "cubic.out"
                            })
                        },
                        _handleMailClick: function() {
                            var t = this;
                            clearTimeout(this._focusTo), this.$refs.mailCta.classList.add("is-hover"), this._focusTo = setTimeout((function() {
                                t.$refs.mailCta.classList.remove("is-hover")
                            }), 1500), window.ga && ga("send", {
                                hitType: "event",
                                eventCategory: "about_contact_mail"
                            })
                        },
                        _handleMailEnter: function() {
                            var e = this;
                            clearTimeout(this.mTo), t.killTweensOf(this.$refs.mailSuffix), t.to(this.$refs.mailSuffix, {
                                opacity: 0,
                                duration: .2,
                                onComplete: function() {
                                    e.mailInfo = " - Copy to clipboard?", t.to(e.$refs.mailSuffix, {
                                        opacity: 1,
                                        duration: .2,
                                        onComplete: function() {}
                                    })
                                }
                            })
                        },
                        _handleMailLeave: function() {
                            var e = this;
                            t.killTweensOf(this.$refs.mailSuffix), t.to(this.$refs.mailSuffix, {
                                opacity: 0,
                                duration: .2,
                                onComplete: function() {
                                    e.mailInfo = "", t.to(e.$refs.mailSuffix, {
                                        opacity: 1,
                                        duration: .2,
                                        onComplete: function() {}
                                    })
                                }
                            })
                        },
                        _handleTwitterClick: function() {
                            window.ga && ga("send", {
                                hitType: "event",
                                eventCategory: "about_contact_twitter"
                            })
                        },
                        _handleGithubClick: function() {
                            window.ga && ga("send", {
                                hitType: "event",
                                eventCategory: "about_contact_github"
                            })
                        },
                        _tick: function() {
                            this._animated || (a.a.isMobile ? a.i.aboutScrollbar && a.i.aboutScrollbar.scrollTop > this._bbox.top + this._offsetY - a.h.height && (this._animateIn(), a.g.remove(this._tick)) : a.i.aboutX > this._bbox.left + this._offsetX - a.h.width + 50 && (this._animateIn(), a.g.remove(this._tick)))
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        369: function(t, e, i) {},
        370: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var a = i(0),
                    n = (i(13), i(93));
                e.a = {
                    data: function() {
                        return {
                            data: n.a.about
                        }
                    },
                    created: function() {
                        this._offsetY = 0
                    },
                    mounted: function() {
                        var t = this;
                        this._bind(), this._texts = this.$el.querySelectorAll(".about-awards__category, .about-awards__el"), this._onResize(), this._prepareIn(), this._to = setTimeout((function() {
                            t._onResize()
                        }), 1e3)
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._to), this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            a.h.addResize(this._onResize), a.g.add(this._tick, 45)
                        },
                        _unbind: function() {
                            a.h.removeResize(this._onResize), a.g.remove(this._tick)
                        },
                        _onResize: function() {
                            this._bbox = this.$el.getBoundingClientRect(), this._offsetX = a.i.aboutX, this._offsetY = a.i.aboutScrollbar ? a.i.aboutScrollbar.scrollTop : 0
                        },
                        _prepareIn: function() {
                            t.set(this.$refs.titleInner, {
                                y: "100%"
                            });
                            var e = this.$el.querySelectorAll(".about-awards__i");
                            t.set(e, {
                                opacity: 0,
                                y: "100%"
                            })
                        },
                        _animateIn: function() {
                            this._animated = !0, t.to(this.$refs.titleInner, {
                                y: "0%",
                                duration: .6,
                                delay: .2 + .1,
                                ease: "cubic.out"
                            });
                            var e = this.$el.querySelectorAll(".about-awards__i");
                            t.to(e, {
                                opacity: 1,
                                delay: .3,
                                duration: .5,
                                ease: "cubic.out"
                            }), t.to(e, {
                                y: "0%",
                                delay: .3,
                                duration: .4,
                                stagger: .07,
                                ease: "cubic.out"
                            })
                        },
                        _tick: function() {
                            this._animated || (a.a.isMobile ? a.i.aboutScrollbar && a.i.aboutScrollbar.scrollTop > this._bbox.top + this._offsetY - a.h.height && (this._animateIn(), a.g.remove(this._tick)) : a.i.aboutX > this._bbox.left + this._offsetX - a.h.width + 50 && (this._animateIn(), a.g.remove(this._tick)))
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        371: function(t, e, i) {},
        372: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var a = i(0),
                    n = (i(13), i(93));
                e.a = {
                    data: function() {
                        return {
                            data: n.a.about
                        }
                    },
                    created: function() {},
                    mounted: function() {
                        var t = this;
                        this._bind(), this._onResize(), this._prepareIn(), this._to = setTimeout((function() {
                            t._onResize()
                        }), 1e3)
                    },
                    beforeDestroy: function() {
                        this._unbind(), clearTimeout(this._to)
                    },
                    methods: {
                        _bind: function() {
                            a.h.addResize(this._onResize), a.g.add(this._tick, 45)
                        },
                        _unbind: function() {
                            a.h.removeResize(this._onResize), a.g.remove(this._tick)
                        },
                        _onResize: function() {
                            this._bbox = this.$el.getBoundingClientRect(), this._offsetX = a.i.aboutX, this._offsetY = a.i.aboutScrollbar ? a.i.aboutScrollbar.scrollTop : 0
                        },
                        _prepareIn: function() {
                            t.set(this.$refs.text, {
                                y: "100%"
                            })
                        },
                        _animateIn: function() {
                            this._animated = !0, t.to(this.$refs.text, {
                                y: "0%",
                                duration: .6,
                                delay: .4,
                                ease: "cubic.out"
                            })
                        },
                        _handleClick: function() {
                            window.ga && ga("send", {
                                hitType: "event",
                                eventCategory: "nico_link"
                            })
                        },
                        _tick: function() {
                            this._animated || (a.a.isMobile ? a.i.aboutScrollbar && a.i.aboutScrollbar.scrollTop > this._bbox.top + this._offsetY - a.h.height && (this._animateIn(), a.g.remove(this._tick)) : a.i.aboutX > this._bbox.left + this._offsetX - a.h.width + 50 && (this._animateIn(), a.g.remove(this._tick)))
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        373: function(t, e, i) {},
        374: function(t, e, i) {},
        389: function(t, e, i) {
            var a;
            a = function() {
                return function(t) {
                    var e = {};

                    function i(a) {
                        if (e[a]) return e[a].exports;
                        var n = e[a] = {
                            i: a,
                            l: !1,
                            exports: {}
                        };
                        return t[a].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                    }
                    return i.m = t, i.c = e, i.d = function(t, e, a) {
                        i.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: a
                        })
                    }, i.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, i.t = function(t, e) {
                        if (1 & e && (t = i(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var a = Object.create(null);
                        if (i.r(a), Object.defineProperty(a, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var n in t) i.d(a, n, function(e) {
                                return t[e]
                            }.bind(null, n));
                        return a
                    }, i.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return i.d(e, "a", e), e
                    }, i.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, i.p = "", i(i.s = 6)
                }([function(t, e) {
                    t.exports = function(t) {
                        var e;
                        if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                            var i = t.hasAttribute("readonly");
                            i || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), i || t.removeAttribute("readonly"), e = t.value
                        } else {
                            t.hasAttribute("contenteditable") && t.focus();
                            var a = window.getSelection(),
                                n = document.createRange();
                            n.selectNodeContents(t), a.removeAllRanges(), a.addRange(n), e = a.toString()
                        }
                        return e
                    }
                }, function(t, e) {
                    function i() {}
                    i.prototype = {
                        on: function(t, e, i) {
                            var a = this.e || (this.e = {});
                            return (a[t] || (a[t] = [])).push({
                                fn: e,
                                ctx: i
                            }), this
                        },
                        once: function(t, e, i) {
                            var a = this;

                            function n() {
                                a.off(t, n), e.apply(i, arguments)
                            }
                            return n._ = e, this.on(t, n, i)
                        },
                        emit: function(t) {
                            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), a = 0, n = i.length; a < n; a++) i[a].fn.apply(i[a].ctx, e);
                            return this
                        },
                        off: function(t, e) {
                            var i = this.e || (this.e = {}),
                                a = i[t],
                                n = [];
                            if (a && e)
                                for (var s = 0, o = a.length; s < o; s++) a[s].fn !== e && a[s].fn._ !== e && n.push(a[s]);
                            return n.length ? i[t] = n : delete i[t], this
                        }
                    }, t.exports = i, t.exports.TinyEmitter = i
                }, function(t, e, i) {
                    var a = i(3),
                        n = i(4);
                    t.exports = function(t, e, i) {
                        if (!t && !e && !i) throw new Error("Missing required arguments");
                        if (!a.string(e)) throw new TypeError("Second argument must be a String");
                        if (!a.fn(i)) throw new TypeError("Third argument must be a Function");
                        if (a.node(t)) return function(t, e, i) {
                            return t.addEventListener(e, i), {
                                destroy: function() {
                                    t.removeEventListener(e, i)
                                }
                            }
                        }(t, e, i);
                        if (a.nodeList(t)) return function(t, e, i) {
                            return Array.prototype.forEach.call(t, (function(t) {
                                t.addEventListener(e, i)
                            })), {
                                destroy: function() {
                                    Array.prototype.forEach.call(t, (function(t) {
                                        t.removeEventListener(e, i)
                                    }))
                                }
                            }
                        }(t, e, i);
                        if (a.string(t)) return function(t, e, i) {
                            return n(document.body, t, e, i)
                        }(t, e, i);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                    }
                }, function(t, e) {
                    e.node = function(t) {
                        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                    }, e.nodeList = function(t) {
                        var i = Object.prototype.toString.call(t);
                        return void 0 !== t && ("[object NodeList]" === i || "[object HTMLCollection]" === i) && "length" in t && (0 === t.length || e.node(t[0]))
                    }, e.string = function(t) {
                        return "string" == typeof t || t instanceof String
                    }, e.fn = function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    }
                }, function(t, e, i) {
                    var a = i(5);

                    function n(t, e, i, a, n) {
                        var o = s.apply(this, arguments);
                        return t.addEventListener(i, o, n), {
                            destroy: function() {
                                t.removeEventListener(i, o, n)
                            }
                        }
                    }

                    function s(t, e, i, n) {
                        return function(i) {
                            i.delegateTarget = a(i.target, e), i.delegateTarget && n.call(t, i)
                        }
                    }
                    t.exports = function(t, e, i, a, s) {
                        return "function" == typeof t.addEventListener ? n.apply(null, arguments) : "function" == typeof i ? n.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                            return n(t, e, i, a, s)
                        })))
                    }
                }, function(t, e) {
                    var i = 9;
                    if ("undefined" != typeof Element && !Element.prototype.matches) {
                        var a = Element.prototype;
                        a.matches = a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector
                    }
                    t.exports = function(t, e) {
                        for (; t && t.nodeType !== i;) {
                            if ("function" == typeof t.matches && t.matches(e)) return t;
                            t = t.parentNode
                        }
                    }
                }, function(t, e, i) {
                    "use strict";
                    i.r(e);
                    var a = i(0),
                        n = i.n(a),
                        s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        o = function() {
                            function t(t, e) {
                                for (var i = 0; i < e.length; i++) {
                                    var a = e[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                                }
                            }
                            return function(e, i, a) {
                                return i && t(e.prototype, i), a && t(e, a), e
                            }
                        }(),
                        r = function() {
                            function t(e) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.resolveOptions(e), this.initSelection()
                            }
                            return o(t, [{
                                key: "resolveOptions",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                                }
                            }, {
                                key: "initSelection",
                                value: function() {
                                    this.text ? this.selectFake() : this.target && this.selectTarget()
                                }
                            }, {
                                key: "selectFake",
                                value: function() {
                                    var t = this,
                                        e = "rtl" == document.documentElement.getAttribute("dir");
                                    this.removeFake(), this.fakeHandlerCallback = function() {
                                        return t.removeFake()
                                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                    var i = window.pageYOffset || document.documentElement.scrollTop;
                                    this.fakeElem.style.top = i + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = n()(this.fakeElem), this.copyText()
                                }
                            }, {
                                key: "removeFake",
                                value: function() {
                                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                                }
                            }, {
                                key: "selectTarget",
                                value: function() {
                                    this.selectedText = n()(this.target), this.copyText()
                                }
                            }, {
                                key: "copyText",
                                value: function() {
                                    var t = void 0;
                                    try {
                                        t = document.execCommand(this.action)
                                    } catch (e) {
                                        t = !1
                                    }
                                    this.handleResult(t)
                                }
                            }, {
                                key: "handleResult",
                                value: function(t) {
                                    this.emitter.emit(t ? "success" : "error", {
                                        action: this.action,
                                        text: this.selectedText,
                                        trigger: this.trigger,
                                        clearSelection: this.clearSelection.bind(this)
                                    })
                                }
                            }, {
                                key: "clearSelection",
                                value: function() {
                                    this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.removeFake()
                                }
                            }, {
                                key: "action",
                                set: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                    if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                },
                                get: function() {
                                    return this._action
                                }
                            }, {
                                key: "target",
                                set: function(t) {
                                    if (void 0 !== t) {
                                        if (!t || "object" !== (void 0 === t ? "undefined" : s(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = t
                                    }
                                },
                                get: function() {
                                    return this._target
                                }
                            }]), t
                        }(),
                        c = i(1),
                        l = i.n(c),
                        u = i(2),
                        f = i.n(u),
                        _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        h = function() {
                            function t(t, e) {
                                for (var i = 0; i < e.length; i++) {
                                    var a = e[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                                }
                            }
                            return function(e, i, a) {
                                return i && t(e.prototype, i), a && t(e, a), e
                            }
                        }(),
                        d = function(t) {
                            function e(t, i) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var a = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                                return a.resolveOptions(i), a.listenClick(t), a
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t), h(e, [{
                                key: "resolveOptions",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === _(t.container) ? t.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(t) {
                                    var e = this;
                                    this.listener = f()(t, "click", (function(t) {
                                        return e.onClick(t)
                                    }))
                                }
                            }, {
                                key: "onClick",
                                value: function(t) {
                                    var e = t.delegateTarget || t.currentTarget;
                                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new r({
                                        action: this.action(e),
                                        target: this.target(e),
                                        text: this.text(e),
                                        container: this.container,
                                        trigger: e,
                                        emitter: this
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function(t) {
                                    return b("action", t)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function(t) {
                                    var e = b("target", t);
                                    if (e) return document.querySelector(e)
                                }
                            }, {
                                key: "defaultText",
                                value: function(t) {
                                    return b("text", t)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                                }
                            }], [{
                                key: "isSupported",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                        e = "string" == typeof t ? [t] : t,
                                        i = !!document.queryCommandSupported;
                                    return e.forEach((function(t) {
                                        i = i && !!document.queryCommandSupported(t)
                                    })), i
                                }
                            }]), e
                        }(l.a);

                    function b(t, e) {
                        var i = "data-clipboard-" + t;
                        if (e.hasAttribute(i)) return e.getAttribute(i)
                    }
                    e.default = d
                }]).default
            }, t.exports = a()
        },
        391: function(t, e, i) {
            "use strict";
            var a = i(365);
            i.n(a).a
        },
        392: function(t, e, i) {
            "use strict";
            var a = i(367);
            i.n(a).a
        },
        393: function(t, e, i) {
            "use strict";
            var a = i(369);
            i.n(a).a
        },
        394: function(t, e, i) {
            "use strict";
            var a = i(371);
            i.n(a).a
        },
        395: function(t, e, i) {
            "use strict";
            var a = i(373);
            i.n(a).a
        },
        396: function(t, e, i) {
            "use strict";
            var a = i(374);
            i.n(a).a
        },
        410: function(t, e, i) {
            "use strict";
            var a = i(364).a,
                n = (i(391), i(33)),
                s = Object(n.a)(a, (function() {
                    var t = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "about-intro"
                    }, [e("h1", {
                        staticClass: "about-intro__title"
                    }, [e("span", {
                        staticClass: "about-intro__title-part"
                    }, [e("span", {
                        staticClass: "about-intro__title-inner"
                    }, [this._v("Hello")])]), this._v(" "), e("span", {
                        staticClass: "about-intro__title-part"
                    }, [e("span", {
                        staticClass: "about-intro__title-inner"
                    }, [this._v("there!")])])])])
                }], !1, null, null, null);
            e.a = s.exports
        },
        411: function(t, e, i) {
            "use strict";
            var a = i(366).a,
                n = (i(392), i(33)),
                s = Object(n.a)(a, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "about-infos"
                    }, [t.isMobile ? i("p", {
                        ref: "text",
                        staticClass: "about-infos__text"
                    }, [t._v("\n    My name is Patrick Heng but you can call me Patoch.\n    I am a freelance creative developer based in Paris. \n    I have a keen interest in WebGL experiments and UI animations."), i("br"), t._v("\n    I graduated from Gobelins Paris, and I worked"), i("br"), t._v("\n    for "), t._m(0), t._v(" and "), t._m(1), t._v("."), i("br"), i("br"), t._v("\n    Feel free to drop me a line!"), i("br"), t._v("\n    Cheers :)\n  ")]) : t._e(), t._v(" "), t.isMobile ? t._e() : i("p", {
                        ref: "text",
                        staticClass: "about-infos__text"
                    }, [t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), t._m(7), i("br"), t._v(" "), t._m(8), t._v(" "), t._m(9)])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        staticClass: "about-infos__link",
                        attrs: {
                            href: "https://activetheory.com/",
                            target: "_blank"
                        }
                    }, [e("span", {
                        staticClass: "about-infos__link-inner"
                    }, [this._v("Active Theory")]), e("span", {
                        staticClass: "about-infos__link-block"
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        staticClass: "about-infos__link",
                        attrs: {
                            href: "https://merci-michel.com/",
                            target: "_blank"
                        }
                    }, [e("span", {
                        staticClass: "about-infos__link-inner"
                    }, [this._v("Merci-Michel")]), e("span", {
                        staticClass: "about-infos__link-block"
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("My name is Patrick Heng but you can call me")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("Patoch. I am a freelance creative developer")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("based in Paris. I have a keen interest in")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("WebGL experiments and UI animations.")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("I graduated from Gobelins Paris, and I worked")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("\n        for "), e("a", {
                        staticClass: "about-infos__link",
                        attrs: {
                            href: "https://activetheory.com/",
                            target: "_blank"
                        }
                    }, [e("span", {
                        staticClass: "about-infos__link-inner"
                    }, [this._v("Active Theory")]), e("span", {
                        staticClass: "about-infos__link-block"
                    })]), this._v("\n        and "), e("a", {
                        staticClass: "about-infos__link",
                        attrs: {
                            href: "https://merci-michel.com/",
                            target: "_blank"
                        }
                    }, [e("span", {
                        staticClass: "about-infos__link-inner"
                    }, [this._v("Merci-Michel")]), e("span", {
                        staticClass: "about-infos__link-block"
                    })])])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("Feel free to drop me a line!")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "about-infos__text-c"
                    }, [e("span", {
                        staticClass: "about-infos__text-i"
                    }, [this._v("Cheers :)")])])
                }], !1, null, null, null);
            e.a = s.exports
        },
        412: function(t, e, i) {
            "use strict";
            var a = i(368).a,
                n = (i(393), i(33)),
                s = Object(n.a)(a, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "about-contact"
                    }, [i("h2", {
                        ref: "title",
                        staticClass: "about-contact__title"
                    }, [i("span", {
                        ref: "titleInner"
                    }, [t._v("Contact")])]), t._v(" "), i("h3", {
                        ref: "mailTitle",
                        staticClass: "about-contact__category"
                    }, [i("span", {
                        staticClass: "about-contact__i"
                    }, [t._v(t._s(t.mailCopy)), i("span", {
                        ref: "mailSuffix",
                        staticClass: "about-contact__mail-suf"
                    }, [t._v(t._s(t.mailInfo))])])]), t._v(" "), i("span", {
                        staticClass: "about-contact__c"
                    }, [i("span", {
                        staticClass: "about-contact__i"
                    }, [t.isMobile ? t._e() : i("span", {
                        ref: "mailCta",
                        staticClass: "about-contact__text about-contact__text--mail",
                        on: {
                            click: t._handleMailClick,
                            mouseenter: t._handleMailEnter,
                            mouseleave: t._handleMailLeave
                        }
                    }, [t._v("\n        hengpatrick.pro[at]gmail.com\n      ")]), t._v(" "), t.isMobile ? i("a", {
                        staticClass: "about-contact__text",
                        attrs: {
                            href: "mailto:hengpatrick.pro[[-at-]]gmail.com"
                        }
                    }, [t._v("\n        hengpatrick.pro[at]gmail.com\n      ")]) : t._e(), t._v(" "), i("span", {
                        staticClass: "about-contact__mail-info"
                    }, [t._v(t._s(t.mailText))])])]), t._v(" "), t._m(0), t._v(" "), i("span", {
                        staticClass: "about-contact__c"
                    }, [i("span", {
                        staticClass: "about-contact__i"
                    }, [i("a", {
                        staticClass: "about-contact__text",
                        attrs: {
                            href: "https://twitter.com/Pat_Hg",
                            target: "_blank"
                        },
                        on: {
                            click: t._handleTwitterClick
                        }
                    }, [t._v("@Pat_Hg")])])]), t._v(" "), t._m(1), t._v(" "), i("span", {
                        staticClass: "about-contact__c"
                    }, [i("span", {
                        staticClass: "about-contact__i"
                    }, [i("a", {
                        staticClass: "about-contact__text",
                        attrs: {
                            href: "https://github.com/patrickheng",
                            target: "_blank"
                        },
                        on: {
                            click: t._handleGithubClick
                        }
                    }, [t._v("@patrickheng")])])])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "about-contact__category"
                    }, [e("span", {
                        staticClass: "about-contact__i"
                    }, [this._v("Twitter")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "about-contact__category"
                    }, [e("span", {
                        staticClass: "about-contact__i"
                    }, [this._v("Github")])])
                }], !1, null, null, null);
            e.a = s.exports
        },
        413: function(t, e, i) {
            "use strict";
            var a = i(370).a,
                n = (i(394), i(33)),
                s = Object(n.a)(a, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "about-awards"
                    }, [i("h2", {
                        ref: "title",
                        staticClass: "about-awards__title"
                    }, [i("span", {
                        ref: "titleInner"
                    }, [t._v("Recognitions")])]), t._v(" "), t._m(0), t._v(" "), i("ul", {
                        staticClass: "about-awards__list"
                    }, [i("li", {
                        staticClass: "about-awards__el"
                    }, [i("span", {
                        staticClass: "about-awards__i"
                    }, [i("span", {
                        staticClass: "about-awards__el-type"
                    }, [t._v("Site of the year")]), t._v(" "), i("span", {
                        staticClass: "about-awards__el-count"
                    }, [t._v("(" + t._s(t.data.awwwwards.year) + ")")])])]), t._v(" "), i("li", {
                        staticClass: "about-awards__el"
                    }, [i("span", {
                        staticClass: "about-awards__i"
                    }, [i("span", {
                        staticClass: "about-awards__el-type"
                    }, [t._v("Site of the month")]), t._v(" "), i("span", {
                        staticClass: "about-awards__el-count"
                    }, [t._v("(" + t._s(t.data.awwwwards.month) + ")")])])]), t._v(" "), i("li", {
                        staticClass: "about-awards__el"
                    }, [i("span", {
                        staticClass: "about-awards__i"
                    }, [i("span", {
                        staticClass: "about-awards__el-type"
                    }, [t._v("Site of the day")]), t._v(" "), i("span", {
                        staticClass: "about-awards__el-count"
                    }, [t._v("(" + t._s(t.data.awwwwards.day) + ")")])])]), t._v(" "), i("li", {
                        staticClass: "about-awards__el"
                    }, [i("span", {
                        staticClass: "about-awards__i"
                    }, [i("span", {
                        staticClass: "about-awards__el-type"
                    }, [t._v("Developer award")]), t._v(" "), i("span", {
                        staticClass: "about-awards__el-count"
                    }, [t._v("(" + t._s(t.data.awwwwards.dev) + ")")])])])]), t._v(" "), t._m(1), t._v(" "), i("ul", {
                        staticClass: "about-awards__list"
                    }, [i("li", {
                        staticClass: "about-awards__el"
                    }, [i("span", {
                        staticClass: "about-awards__i"
                    }, [i("span", {
                        staticClass: "about-awards__el-type"
                    }, [t._v("FWA of the year")]), t._v(" "), i("span", {
                        staticClass: "about-awards__el-count"
                    }, [t._v("(" + t._s(t.data.fwa.year) + ")")])])]), t._v(" "), i("li", {
                        staticClass: "about-awards__el"
                    }, [i("span", {
                        staticClass: "about-awards__i"
                    }, [i("span", {
                        staticClass: "about-awards__el-type"
                    }, [t._v("FWA of the month")]), t._v(" "), i("span", {
                        staticClass: "about-awards__el-count"
                    }, [t._v("(" + t._s(t.data.fwa.month) + ")")])])]), t._v(" "), i("li", {
                        staticClass: "about-awards__el"
                    }, [i("span", {
                        staticClass: "about-awards__i"
                    }, [i("span", {
                        staticClass: "about-awards__el-type"
                    }, [t._v("FWA of the day")]), t._v(" "), i("span", {
                        staticClass: "about-awards__el-count"
                    }, [t._v("(" + t._s(t.data.fwa.day) + ")")])])])])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "about-awards__category"
                    }, [e("span", {
                        staticClass: "about-awards__i"
                    }, [this._v("Awwwards")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "about-awards__category"
                    }, [e("span", {
                        staticClass: "about-awards__i"
                    }, [this._v("FWA")])])
                }], !1, null, null, null);
            e.a = s.exports
        },
        414: function(t, e, i) {
            "use strict";
            var a = i(372).a,
                n = (i(395), i(33)),
                s = Object(n.a)(a, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "about-credits"
                    }, [e("div", {
                        staticClass: "about-credits__text-c"
                    }, [e("p", {
                        ref: "text",
                        staticClass: "about-credits__text"
                    }, [this._v("Site designed by\n      "), e("a", {
                        ref: "link",
                        staticClass: "about-credits__link",
                        attrs: {
                            href: "https://nicolasloureiro.com/",
                            target: "_blank"
                        },
                        on: {
                            click: this._handleClick
                        }
                    }, [e("span", [this._v("\n          Nicolas Loureiro\n        ")])])])])])
                }), [], !1, null, null, null);
            e.a = s.exports
        },
        420: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(363).a,
                n = (i(396), i(33)),
                s = Object(n.a)(a, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "about"
                    }, [e("div", {
                        ref: "wrapper",
                        staticClass: "about__wrapper"
                    }, [e("about-intro"), this._v(" "), e("about-infos"), this._v(" "), e("about-contact"), this._v(" "), e("about-awards"), this._v(" "), e("about-credits")], 1)])
                }), [], !1, null, null, null);
            e.default = s.exports
        }
    }
]);