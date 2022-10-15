(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        375: function(t, e, i) {
            "use strict";
            (function(t) {
                i(18);
                var s = i(12),
                    o = i(0),
                    n = i(93),
                    r = (i(151), i(13)),
                    a = i(296),
                    l = i.n(a),
                    c = i(415),
                    _ = i(416),
                    h = i(408),
                    d = i(409),
                    u = i(417),
                    p = i(418),
                    f = i(419);
                e.a = {
                    fetch: function(t) {
                        t.store, t.params
                    },
                    data: function(t) {
                        return {
                            isMobile: o.a.isMobile,
                            toggle: !Object(r.b)("sceneDebug") && !Object(r.b)("perf"),
                            work: n.a.projects
                        }
                    },
                    computed: {},
                    created: function() {},
                    mounted: function() {
                        o.i.isHome = !0;
                        var e = Object(r.b)("sceneDebug");
                        e ? s.a.initDebugScene(e) : (s.a && s.a.initialized.then((function() {
                            s.a.scenes.change("home")
                        })), this._bind(), this._onResize(), t.set(this.$el, {
                            opacity: .001
                        }), t.to(this.$el, {
                            opacity: 1,
                            duration: .3
                        }), o.a.isMobile && (this.scrollBar = l.a.init(this.$refs.wrapper, {
                            autoRender: !1
                        }), o.i.homeScrollbar = this.scrollBar), setTimeout((function() {
                            o.b.emit("home:mounted")
                        }), 100))
                    },
                    beforeRouteLeave: function(e, i, o) {
                        "about" === e.name && s.a.initialized.then((function() {
                            s.a.scenes.change("about")
                        })), t.to(this.$el, {
                            opacity: 0,
                            duration: .3,
                            onComplete: function() {
                                o()
                            }
                        })
                    },
                    beforeDestroy: function() {
                        this._unbind(), o.i.homeScrollbar = null, o.i.isHome = !1
                    },
                    methods: {
                        _bind: function() {
                            o.h.addResize(this._onResize), o.b.on("home:tick", this._tick)
                        },
                        _unbind: function() {
                            o.h.removeResize(this._onResize), o.b.off("home:tick", this._tick)
                        },
                        _onResize: function() {
                            this.$el.style.width = o.h.width + "px", o.a.isDesktop && (this.$el.style.height = o.h.height + "px")
                        },
                        _tick: function(t) {}
                    },
                    components: {
                        intro: c.a,
                        "project-intro": _.a,
                        "project-screen": h.a,
                        "project-screen-mobile": d.a,
                        "project-overlay": u.a,
                        "more-projects": p.a,
                        "more-projects-mobile": f.a
                    }
                }
            }).call(this, i(22).gsap)
        },
        376: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var s = i(0);
                i(13);
                e.a = {
                    fetch: function(t) {
                        t.store, t.params
                    },
                    data: function() {
                        return {}
                    },
                    computed: {},
                    created: function() {},
                    mounted: function() {
                        var t = this;
                        this._texts = [this.$refs.titleTop, this.$refs.titleBottom, this.$refs.desc], this._bind(), Loader.hiddenPromise.then(this._onLoad), this._onResize(), this._forced = !0, this._forcedTo = setTimeout((function() {
                            t._forced = !1
                        }), 100)
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._inTo), clearTimeout(this._forcedTo), this._destroyed = !0, this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            s.h.addResize(this._onResize), s.a.isDesktop && s.b.on("home:tick", this._tick)
                        },
                        _unbind: function() {
                            s.h.removeResize(this._onResize), s.a.isDesktop && s.b.off("home:tick", this._tick)
                        },
                        _onResize: function() {
                            this._bottomBbox = this.$refs.titleBottom.getBoundingClientRect(), this.$refs.desc.style.top = this._bottomBbox.y + "px", s.a.isMobile && (this.$el.style.height = s.h.height + "px")
                        },
                        _onLoad: function() {
                            if (!this._destroyed) {
                                var e = Loader.hiddenPromiseDone ? .3 : 0,
                                    i = [this.$refs.spanTop, this.$refs.spanBottom];
                                if (s.a.isMobile)
                                    for (var o = 0, n = this._texts.length; o < n; o++) this._texts[o].style.opacity = 1, this._texts[o].style.visibility = null;
                                var r = this.$refs.desc.querySelectorAll(".intro__description-text");
                                t.set(i, {
                                    autoAlpha: 0,
                                    rotation: 2,
                                    y: "100%",
                                    transformOrigin: "top left"
                                }), t.set(r, {
                                    autoAlpha: 0,
                                    rotation: 5,
                                    y: "100%"
                                }), t.to(i, {
                                    autoAlpha: 1,
                                    rotation: 0,
                                    y: "0%",
                                    duration: 1.1,
                                    stagger: .15,
                                    ease: "expo.out",
                                    delay: e
                                }), t.to(r, {
                                    autoAlpha: 1,
                                    rotation: 0,
                                    x: "0%",
                                    y: "0%",
                                    duration: .8,
                                    stagger: .1,
                                    delay: e + .3,
                                    ease: "power2.out"
                                })
                            }
                        },
                        _tick: function(t) {
                            var e = Math.round(t.camera.position.x),
                                i = t._screens[0].progress;
                            if (i > -1 && i < 1) {
                                if (Math.abs(this._prevX - e) > .05)
                                    for (var s = 0, o = this._texts.length; s < o; s++) this._texts[s].style.transform = "translate3d(".concat(-e, "px, 0, 0)");
                                if (!this._textVisible || this._forced)
                                    for (var n = 0, r = this._texts.length; n < r; n++) this._texts[n].style.opacity = 1;
                                this._textVisible = !0
                            } else {
                                if (this._textVisible || this._forced)
                                    for (var a = 0, l = this._texts.length; a < l; a++) this._texts[a].style.opacity = .001;
                                this._textVisible = !1
                            }
                            this._prevX = e
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        377: function(t, e, i) {},
        378: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var s = i(0);
                i(13);
                e.a = {
                    data: function() {
                        return {}
                    },
                    computed: {},
                    created: function() {
                        this._prevX = 1e4, this._dir = 1
                    },
                    mounted: function() {
                        var t = this;
                        this._bind(), s.a.isDesktop && (this.$el.style.visibility = "hidden"), this._onResize(), this._forced = !0, this._forcedTo = setTimeout((function() {
                            t._forced = !1
                        }), 100), Loader.hiddenPromise.then(this._onLoad)
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._forcedTo), this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            s.h.addResize(this._onResize), s.a.isDesktop && s.b.on("home:tick", this._tick)
                        },
                        _unbind: function() {
                            s.h.removeResize(this._onResize), s.a.isDesktop && s.b.off("home:tick", this._tick)
                        },
                        _onResize: function() {},
                        _onLoad: function() {
                            s.a.isDesktop && (this.$el.style.transform = "translate3d(".concat(s.h.width, "px, 0, 0)")), t.set(this.$refs.title, {
                                opacity: 0
                            }), t.set(this.$refs.date, {
                                opacity: 0
                            }), t.to(this.$refs.title, {
                                opacity: 1,
                                y: 0,
                                duration: 1.4,
                                ease: "cubic.out",
                                delay: .8
                            }), t.to(this.$refs.date, {
                                opacity: 1,
                                y: 0,
                                duration: 1.4,
                                ease: "cubic.out",
                                delay: .9
                            })
                        },
                        _onScrollLoop: function(t) {
                            var e = t.dir;
                            this._dir = e
                        },
                        _tick: function(t, e) {
                            this._screens = e;
                            var i = Math.round(t.camera.position.x - e[1].screenOffset * s.h.width),
                                o = e[1].progress;
                            o > -1 && o < 1 ? (Math.abs(this._prevX - i) > .05 && (this.$el.style.transform = "translate3d(".concat(-i, "px, 0, 1px)")), this._textVisible || (this.$el.style.visibility = "visible"), this._textVisible = !0) : (this._textVisible && (this.$el.style.visibility = "hidden"), this._textVisible = !1), this._prevX = i
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        379: function(t, e, i) {},
        380: function(t, e, i) {},
        381: function(t, e, i) {},
        382: function(t, e, i) {
            "use strict";
            (function(t) {
                i(18), i(403), i(12);
                var s = i(0);
                i(13);
                e.a = {
                    data: function() {
                        return {
                            line1: "",
                            line2: "",
                            desc: "",
                            linkText: "",
                            link: "",
                            isPortrait: s.h.width <= s.h.height,
                            isVisible: !1,
                            isMobile: s.a.isMobile,
                            isDesktop: !s.a.isMobile
                        }
                    },
                    props: {
                        data: {
                            type: Array,
                            required: !0
                        }
                    },
                    computed: {},
                    created: function() {},
                    mounted: function() {
                        this._bind(), this._onResize(), document.body.classList.remove("is-overlay")
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._leaveTo), this._close(!0), document.body.classList.remove("is-overlay"), s.i.isOverlay = !1, this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            s.h.addResize(this._onResize), s.d.addUp(this._onKeyUp), s.b.on("project_overlay:open", this._open)
                        },
                        _unbind: function() {
                            s.h.removeResize(this._onResize), s.d.removeUp(this._onKeyUp), s.b.off("project_overlay:open", this._open), s.b.off("loop_screen:animate_in", this._animateIn), s.b.off("loop_screen:animate_out", this._animateOut), this._textTl && this._textTl.kill(), this.$refs.video && (this.$refs.video.oncanplaythrough = null)
                        },
                        _onResize: function() {
                            this.$el.style.height = s.h.height + "px";
                            var t = this.$refs,
                                e = t.videoWrapper,
                                i = t.videoContainer,
                                o = (t.block, .6 * s.h.width),
                                n = 9 * o / 16;
                            (this.isPortrait = s.h.width <= s.h.height, s.h.width < 1100 && (n = 9 * (o = .45 * s.h.width) / 16), s.h.aspect > 2.7 ? (o = 16 * (n = .7 * s.h.height) / 9, e.style.marginLeft = (.6 * s.h.width - o) / 2 + "px") : e.style.marginLeft = null, s.h.aspect <= 1) ? (e.style.width = null, e.style.height = null, i.style.width = null, i.style.height = null, this.$refs.wrapper.getBoundingClientRect().height + 80 > s.h.height ? this.$el.classList.add("project-overlay--is-overflow") : this.$el.classList.remove("project-overlay--is-overflow")) : (e.style.width = o + 20 + "px", e.style.height = n + 20 + "px", i.style.width = o + "px", i.style.height = n + "px", this.$el.classList.remove("project-overlay--is-overflow"))
                        },
                        _open: function(e) {
                            var i = this,
                                o = e.index,
                                n = e.project;
                            if (this.lastOpen = Date.now(), clearTimeout(this._leaveTo), this.isPortrait = s.h.width <= s.h.height, !s.i.isOverlay) {
                                this.$el.scrollTop = 0, t.set(this.$refs.title, {
                                    opacity: 1e-4
                                }), t.set(this.$refs.bg, {
                                    opacity: 1e-4
                                }), t.set(this.$refs.mBg, {
                                    transformOrigin: "bottom",
                                    scaleY: 0
                                }), s.i.isOverlay = !0, this.isVisible = !0, document.body.classList.remove("is-pointer"), this.index = n ? -1 : o, s.b.emit("project_overlay:opened", {
                                    index: this.index
                                });
                                var r = n || this.data[this.index];
                                this.line1 = r.line1 || "", this.line2 = r.line2 || !1, this.desc = r.desc || "", this.linkText = r.linkText || !1, this.link = r.link || !1, this.$refs.video.currentTime = 0, this.$refs.video.src = r.video ? "/videos/" + r.video : "/videos/playdoh.mp4", 4 === this.$refs.video.readyState ? t.set(this.$refs.video, {
                                    opacity: 1
                                }) : t.set(this.$refs.video, {
                                    opacity: 0
                                }), this.$refs.video.paused && this.$refs.video.play(), this.$refs.video.oncanplaythrough = function() {
                                    i._onResize(), t.to(i.$refs.video, {
                                        opacity: 1,
                                        duration: .3
                                    }), i.$refs.video.paused && i.$refs.video.play()
                                }, document.body.classList.add("is-overlay"), t.set(this.$refs.videoWrapper, {
                                    scale: .95,
                                    x: "-10%",
                                    rotation: 1.5
                                }), s.a.isMobile && t.set(this.$refs.videoWrapper, {
                                    scale: .95,
                                    x: "-10%",
                                    y: 0,
                                    rotation: 1.5
                                }), t.to(this.$refs.videoWrapper, {
                                    opacity: 1,
                                    duration: .5,
                                    ease: "cubic.out",
                                    delay: .4
                                }), t.to(this.$refs.videoWrapper, {
                                    scale: 1,
                                    x: "0%",
                                    y: s.a.isMobile ? 0 : "-50%",
                                    rotation: 0,
                                    duration: 1.2,
                                    ease: "expo.out",
                                    delay: .4
                                }), this._textTl && this._textTl.kill();
                                var a = .4;
                                t.to(this.$refs.title, {
                                    opacity: 1,
                                    duration: .1,
                                    delay: a
                                }), t.to(this.$refs.bg, {
                                    opacity: 1,
                                    duration: .1,
                                    delay: a
                                }), t.to(this.$refs.mBg, {
                                    opacity: 1,
                                    scaleY: 1,
                                    duration: .3,
                                    delay: .2
                                }), t.to(this.$refs.block, {
                                    opacity: 0,
                                    duration: .2,
                                    rotation: 0,
                                    ease: "cubic.out",
                                    onComplete: function() {
                                        t.set(i.$refs.block, {
                                            opacity: 1
                                        }), i._textTl && i._textTl.kill();
                                        var e = i.$refs,
                                            o = e.titleTop,
                                            n = e.titleBottom,
                                            r = e.desc,
                                            l = e.cta;
                                        i._textTl = t.timeline({}), s.a.isMobile ? (o && t.set(o, {
                                            y: 15,
                                            opacity: 0
                                        }), n && t.set(n, {
                                            y: 15,
                                            opacity: 0
                                        }), r && t.set(r, {
                                            opacity: 0,
                                            y: 5
                                        }), l && t.set(l, {
                                            opacity: 0,
                                            x: "-50%",
                                            y: "50%",
                                            scale: .9
                                        })) : (o && t.set(o, {
                                            x: 15,
                                            opacity: 0
                                        }), n && t.set(n, {
                                            x: 15,
                                            opacity: 0
                                        }), r && t.set(r, {
                                            opacity: 0
                                        }), l && t.set(l, {
                                            opacity: 0
                                        })), clearTimeout(i._to), i._to = setTimeout((function() {
                                            s.b.emit("project_overlay:text_in", {
                                                els: [o, n]
                                            })
                                        }), 20), o && i._textTl.to(o, {
                                            x: 0,
                                            y: 0,
                                            opacity: 1,
                                            duration: 1,
                                            ease: "elastic.out(.8, .5)"
                                        }, a), n && i.line2 && (a += .1, i._textTl.to(n, {
                                            x: 0,
                                            y: 0,
                                            opacity: 1,
                                            duration: 1,
                                            ease: "elastic.out(.8, .5)"
                                        }, a)), r && i.desc && (a += s.a.isMobile ? .1 : .2, i._textTl.to(r, {
                                            opacity: 1,
                                            y: 0,
                                            duration: 1,
                                            ease: "cubic.out"
                                        }, a)), l && i.link && (s.a.isMobile ? (a += .15, i._textTl.to(l, {
                                            opacity: 1,
                                            duration: .3,
                                            ease: "cubic.out"
                                        }, a), i._textTl.to(l, {
                                            x: "-50%",
                                            y: "50%",
                                            scale: 1,
                                            duration: .7,
                                            ease: "expo.out"
                                        }, a)) : (a += .2, i._textTl.to(l, {
                                            x: 0,
                                            opacity: 1,
                                            duration: 1,
                                            ease: "cubic.out"
                                        }, a)))
                                    }
                                }), this.$refs.close && (this.$el.scrollTop = 0, t.set(this.$refs.close, {
                                    scale: 0
                                }), t.to(this.$refs.close, {
                                    scale: 1,
                                    duration: .7,
                                    delay: .5,
                                    ease: "expo.out"
                                })), this._onResize(), setTimeout((function() {
                                    i._onResize(), i.$el.scrollTop = 0, s.a.isDesktop && window.scrollTo(0, 0)
                                }), 100), s.a.isDesktop && this._splitted && this._splitted.revert(), window.ga && r && ga("send", {
                                    hitType: "event",
                                    eventCategory: "overlay",
                                    eventAction: r.id || r.name
                                })
                            }
                        },
                        _close: function(e) {
                            var i = this,
                                o = Date.now();
                            if ((e || !(o - this.lastOpen < 800)) && (this._textTl && this._textTl.pause(), s.i.isOverlay)) {
                                s.i.isOverlay = !1, s.b.emit("project_overlay:closed", {
                                    index: this.index
                                }), this.$refs.video.paused || this.$refs.video.pause(), this.$refs.video && (this.$refs.video.oncanplaythrough = null);
                                s.a.isMobile;
                                var n = s.a.isMobile ? .25 : .35;
                                document.body.classList.remove("is-overlay"), this.$refs.block && t.to(this.$refs.block, {
                                    opacity: 0,
                                    duration: n,
                                    ease: "cubic.out"
                                }), t.to(this.$refs.title, {
                                    opacity: 1e-4,
                                    duration: n
                                }), t.to(this.$refs.bg, {
                                    opacity: 1e-4,
                                    duration: n
                                }), t.to(this.$refs.mBg, {
                                    opacity: 1e-4,
                                    scaleY: 0,
                                    duration: n
                                }), clearTimeout(this._leaveTo), this.$refs.videoWrapper && t.to(this.$refs.videoWrapper, {
                                    opacity: 0,
                                    duration: n,
                                    ease: "cubic.out",
                                    onComplete: function() {
                                        i._leaveTo = setTimeout((function() {
                                            i.isVisible = !1, i.$refs.video.paused || i.$refs.video.pause()
                                        }), s.a.isDesktop ? 700 : 0)
                                    }
                                }), this.$refs.close && t.to(this.$refs.close, {
                                    scale: 0,
                                    duration: .3,
                                    ease: "cubic.out"
                                }), this.$refs.video.paused || this.$refs.video.pause()
                            }
                        },
                        _onKeyUp: function(t) {
                            27 === t.keyCode && this._close()
                        },
                        _tick: function(t, e, i) {},
                        handleCloseClick: function() {
                            this._close()
                        },
                        handleCloseEnter: function() {
                            s.b.emit("project_overlay:close_hover", !0)
                        },
                        handleCloseLeave: function() {
                            s.b.emit("project_overlay:close_hover", !1)
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        383: function(t, e, i) {},
        384: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var s = i(0),
                    o = (i(13), i(93)),
                    n = !0;
                e.a = {
                    data: function() {
                        return {
                            projects: o.a.moreProjects
                        }
                    },
                    computed: {},
                    created: function() {
                        this._dir = 1, this._prevX = 1e4
                    },
                    mounted: function() {
                        var t = this;
                        this._bind(), this.$el.style.visibility = "hidden", this._onResize(), this._forced = !0, this._forcedTo = setTimeout((function() {
                            t._forced = !1
                        }), 100), this._lines = this.$el.querySelectorAll(".more-projects__line"), this._names = this.$el.querySelectorAll(".more-projects__name-txt"), this._dates = this.$el.querySelectorAll(".more-projects__date-txt"), n && (n = !1, this._animateOut())
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._forcedTo), this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            s.h.addResize(this._onResize), s.a.isDesktop && s.b.on("home:tick", this._tick), s.a.isDesktop && s.b.on("home:looped", this._onScrollLoop), s.a.isDesktop && window.addEventListener("blur", this._onBlur, !1), s.b.on("loop_screen:animate_in", this._animateIn), s.b.on("loop_screen:animate_out", this._animateOut)
                        },
                        _unbind: function() {
                            clearTimeout(this._rTo), s.h.removeResize(this._onResize), s.a.isDesktop && s.b.off("home:tick", this._tick), s.a.isDesktop && s.b.off("home:looped", this._onScrollLoop), s.a.isDesktop && window.removeEventListener("blur", this._onBlur, !1), s.b.off("loop_screen:animate_in", this._animateIn), s.b.off("loop_screen:animate_out", this._animateOut)
                        },
                        _onResize: function() {
                            this._forced = !0
                        },
                        _onScrollLoop: function(t) {
                            var e = t.dir;
                            this._dir = e
                        },
                        _onBlur: function() {
                            s.b.emit("loop_screen:mouse_leave")
                        },
                        _animateIn: function() {
                            t.killTweensOf([this.$refs.title, this.$refs.date]), t.killTweensOf(this._names), t.killTweensOf(this._dates), t.killTweensOf(this._lines), t.set([this.$refs.title, this.$refs.date], {
                                opacity: 0
                            }), t.set(this._names, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._dates, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._lines, {
                                scaleX: 0,
                                transformOrigin: "0% 50%"
                            }), t.to([this.$refs.title, this.$refs.date], {
                                opacity: 1,
                                duration: 1.2,
                                stagger: .1,
                                ease: "cubic.out"
                            }), t.to(this._lines, {
                                scaleX: 1,
                                stagger: .1,
                                delay: .3,
                                duration: .8,
                                ease: "power3.out"
                            }), t.to(this._names, {
                                opacity: 1,
                                duration: .3,
                                stagger: .1,
                                delay: .4
                            }), t.to(this._names, {
                                y: "0%",
                                duration: 1,
                                stagger: .1,
                                delay: .4,
                                ease: "power3.out"
                            }), t.to(this._dates, {
                                opacity: 1,
                                duration: .3,
                                stagger: .1,
                                delay: .7
                            }), t.to(this._dates, {
                                y: "0%",
                                duration: 1,
                                stagger: .1,
                                delay: .7,
                                ease: "power3.out"
                            })
                        },
                        _animateOut: function() {
                            t.killTweensOf([this.$refs.title, this.$refs.date]), t.killTweensOf(this._names), t.killTweensOf(this._dates), t.killTweensOf(this._lines), t.set([this.$refs.title, this.$refs.date], {
                                opacity: 0
                            }), t.set(this._names, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._dates, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._lines, {
                                scaleX: 0,
                                transformOrigin: "0% 50%"
                            })
                        },
                        _handleMouseEnter: function() {
                            s.b.emit("loop_screen:mouse_enter")
                        },
                        _handleMouseMove: function() {
                            s.b.emit("loop_screen:mouse_move")
                        },
                        _handleMouseLeave: function() {
                            s.b.emit("loop_screen:mouse_leave")
                        },
                        _handleMouseElEnter: function(t) {
                            s.b.emit("loop_screen:el_mouse_enter", {
                                index: t
                            })
                        },
                        _handleClick: function(t) {
                            s.b.emit("loop_screen:click"), clearTimeout(this._to), this._to = setTimeout((function() {
                                s.b.emit("project_overlay:open", {
                                    project: t
                                })
                            }), 100)
                        },
                        _tick: function(t, e) {
                            this._screens = e;
                            var i = e[e.length - 1],
                                o = t.camera.position.x >= 0 ? i.screenOffset : -1,
                                n = Math.round(t.camera.position.x - o * s.h.width),
                                r = i.progress;
                            r >= -1 && r <= 1 || r <= -(s.i.totalWidth - 1) && r >= -s.i.totalWidth || this._forced ? ((Math.abs(this._prevX - n) > .05 || this._forced) && (this.$el.style.transform = "translate3d(".concat(-n, "px, 0, 1px)")), this._textVisible && !this._forced || (this.$el.style.visibility = "visible"), this._textVisible = !0) : (this._textVisible && (this.$el.style.visibility = "hidden"), this._textVisible = !1), this._prevX = n
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        385: function(t, e, i) {},
        386: function(t, e, i) {
            "use strict";
            (function(t) {
                i(12);
                var s = i(0),
                    o = (i(13), i(93));
                e.a = {
                    data: function() {
                        return {
                            projects: o.a.moreProjects
                        }
                    },
                    computed: {},
                    created: function() {
                        this._dir = 1, this._offsetY = 0, this._prevX = 1e4
                    },
                    mounted: function() {
                        var t = this;
                        this._bind(), this._onResize(), this._forced = !0, this._forcedTo = setTimeout((function() {
                            t._forced = !1
                        }), 100), this._lines = this.$el.querySelectorAll(".more-projects-mobile__line"), this._names = this.$el.querySelectorAll(".more-projects-mobile__name-txt"), this._dates = this.$el.querySelectorAll(".more-projects-mobile__date-txt"), this._prepareIn(), this._to = setTimeout((function() {
                            t._onResize()
                        }), 1e3)
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._to), clearTimeout(this._forcedTo), this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            s.h.addResize(this._onResize), s.g.add(this._tick, 45)
                        },
                        _unbind: function() {
                            clearTimeout(this._rTo), s.h.removeResize(this._onResize), s.g.remove(this._tick)
                        },
                        _onResize: function() {
                            this._forced = !0, this._bbox = this.$el.getBoundingClientRect(), this._offsetY = s.i.homeScrollbar ? s.i.homeScrollbar.scrollTop : 0
                        },
                        _prepareIn: function() {
                            t.set([this.$refs.title, this.$refs.date], {
                                opacity: 0
                            }), t.set(this._names, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._dates, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._lines, {
                                scaleX: 0,
                                transformOrigin: "0% 50%"
                            })
                        },
                        _animateIn: function() {
                            this._animated = !0, t.killTweensOf([this.$refs.title, this.$refs.date]), t.killTweensOf(this._names), t.killTweensOf(this._dates), t.killTweensOf(this._lines), t.set([this.$refs.title, this.$refs.date], {
                                opacity: 0
                            }), t.set(this._names, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._dates, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._lines, {
                                scaleX: 0,
                                transformOrigin: "0% 50%"
                            }), t.to([this.$refs.title, this.$refs.date], {
                                opacity: 1,
                                duration: 1.2,
                                stagger: .1,
                                ease: "cubic.out"
                            }), t.to(this._lines, {
                                scaleX: 1,
                                stagger: .1,
                                delay: .3,
                                duration: .8,
                                ease: "power3.out"
                            }), t.to(this._names, {
                                opacity: 1,
                                duration: .3,
                                stagger: .1,
                                delay: .4
                            }), t.to(this._names, {
                                y: "0%",
                                duration: 1,
                                stagger: .1,
                                delay: .4,
                                ease: "power3.out"
                            }), t.to(this._dates, {
                                opacity: 1,
                                duration: .3,
                                stagger: .1,
                                delay: .7
                            }), t.to(this._dates, {
                                y: "0%",
                                duration: 1,
                                stagger: .1,
                                delay: .7,
                                ease: "power3.out"
                            })
                        },
                        _animateOut: function() {
                            t.killTweensOf([this.$refs.title, this.$refs.date]), t.killTweensOf(this._names), t.killTweensOf(this._dates), t.killTweensOf(this._lines), t.set([this.$refs.title, this.$refs.date], {
                                opacity: 0
                            }), t.set(this._names, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._dates, {
                                y: "100%",
                                opacity: 0
                            }), t.set(this._lines, {
                                scaleX: 0,
                                transformOrigin: "0% 50%"
                            })
                        },
                        _handleClick: function(t) {
                            s.b.emit("project_overlay:open", {
                                project: t
                            })
                        },
                        _tick: function() {
                            this._animated || s.i.homeScrollbar && s.i.homeScrollbar.scrollTop > this._bbox.top + this._offsetY - s.h.height && (this._animateIn(), s.g.remove(this._tick))
                        }
                    },
                    components: {}
                }
            }).call(this, i(22).gsap)
        },
        387: function(t, e, i) {},
        388: function(t, e, i) {},
        390: function(t, e, i) {
            "use strict";
            var s = i(27),
                o = i(58),
                n = i(70),
                r = i(297),
                a = i(94),
                l = i(37),
                c = i(71).f,
                _ = i(95).f,
                h = i(38).f,
                d = i(399).trim,
                u = s.Number,
                p = u,
                f = u.prototype,
                m = "Number" == n(i(133)(f)),
                v = "trim" in String.prototype,
                y = function(t) {
                    var e = a(t, !1);
                    if ("string" == typeof e && e.length > 2) {
                        var i, s, o, n = (e = v ? e.trim() : d(e, 3)).charCodeAt(0);
                        if (43 === n || 45 === n) {
                            if (88 === (i = e.charCodeAt(2)) || 120 === i) return NaN
                        } else if (48 === n) {
                            switch (e.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    s = 2, o = 49;
                                    break;
                                case 79:
                                case 111:
                                    s = 8, o = 55;
                                    break;
                                default:
                                    return +e
                            }
                            for (var r, l = e.slice(2), c = 0, _ = l.length; c < _; c++)
                                if ((r = l.charCodeAt(c)) < 48 || r > o) return NaN;
                            return parseInt(l, s)
                        }
                    }
                    return +e
                };
            if (!u(" 0o1") || !u("0b1") || u("+0x1")) {
                u = function(t) {
                    var e = arguments.length < 1 ? 0 : t,
                        i = this;
                    return i instanceof u && (m ? l((function() {
                        f.valueOf.call(i)
                    })) : "Number" != n(i)) ? r(new p(y(e)), i, u) : y(e)
                };
                for (var b, g = i(35) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; g.length > x; x++) o(p, b = g[x]) && !o(u, b) && h(u, b, _(p, b));
                u.prototype = f, f.constructor = u, i(47)(s, "Number", u)
            }
        },
        397: function(t, e, i) {
            "use strict";
            var s = i(377);
            i.n(s).a
        },
        398: function(t, e, i) {
            "use strict";
            var s = i(379);
            i.n(s).a
        },
        399: function(t, e, i) {
            var s = i(34),
                o = i(64),
                n = i(37),
                r = i(400),
                a = "[" + r + "]",
                l = RegExp("^" + a + a + "*"),
                c = RegExp(a + a + "*$"),
                _ = function(t, e, i) {
                    var o = {},
                        a = n((function() {
                            return !!r[t]() || "​" != "​" [t]()
                        })),
                        l = o[t] = a ? e(h) : r[t];
                    i && (o[i] = l), s(s.P + s.F * a, "String", o)
                },
                h = _.trim = function(t, e) {
                    return t = String(o(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(c, "")), t
                };
            t.exports = _
        },
        400: function(t, e) {
            t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
        },
        401: function(t, e, i) {
            "use strict";
            var s = i(380);
            i.n(s).a
        },
        402: function(t, e, i) {
            "use strict";
            var s = i(381);
            i.n(s).a
        },
        403: function(t, e, i) {
            "use strict";
            i(134)("link", (function(t) {
                return function(e) {
                    return t(this, "a", "href", e)
                }
            }))
        },
        404: function(t, e, i) {
            "use strict";
            var s = i(383);
            i.n(s).a
        },
        405: function(t, e, i) {
            "use strict";
            var s = i(385);
            i.n(s).a
        },
        406: function(t, e, i) {
            "use strict";
            var s = i(387);
            i.n(s).a
        },
        407: function(t, e, i) {
            "use strict";
            var s = i(388);
            i.n(s).a
        },
        408: function(t, e, i) {
            "use strict";
            i(161), i(390), i(12);
            var s = i(0),
                o = (i(13), {
                    data: function() {
                        return {}
                    },
                    props: {
                        index: {
                            type: Number,
                            required: !0
                        },
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {},
                    created: function() {
                        this._prevX = 1e5
                    },
                    mounted: function() {
                        var t = this;
                        this._bind(), this.$el.style.visibility = "hidden", this._onResize(), this.$refs.title.style.visibility = "hidden", this._forced = !0, this._forcedTo = setTimeout((function() {
                            t._forced = !1
                        }), 100)
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._forcedTo), this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            s.h.addResize(this._onResize), s.a.isDesktop && s.b.on("home:tick", this._tick)
                        },
                        _unbind: function() {
                            s.h.removeResize(this._onResize), s.a.isDesktop && s.b.off("home:tick", this._tick)
                        },
                        _onResize: function() {},
                        _tick: function(t, e, i) {
                            if (!this._screen && i && i[this.index] && (this._screen = i[this.index]), this._screen) {
                                var o = this._screen.anchor,
                                    n = t.camera.position.x - this._screen.screenOffset * s.h.width - o.x,
                                    r = -o.y,
                                    a = this._screen.progress;
                                a > -1 && a < 1 ? (Math.abs(this._prevX - n) > .05 && (this.$el.style.transform = "translate3d(".concat(-n, "px, ").concat(r, "px, 1px)")), this._textVisible || (this.$el.style.visibility = "visible"), this._textVisible = !0) : (this._textVisible && (this.$el.style.visibility = "hidden"), this._textVisible = !1), this._prevX = n
                            }
                        }
                    },
                    components: {}
                }),
                n = (i(401), i(33)),
                r = Object(n.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "project-screen"
                    }, [i("h3", {
                        ref: "title",
                        staticClass: "project-screen__title"
                    }, [i("span", [t._v(t._s(t.data.line1))]), i("span", [t._v(t._s(t.data.line2))])]), t._v(" "), i("p", {
                        ref: "desc",
                        staticClass: "project-screen__desc"
                    }, [i("span", {
                        domProps: {
                            innerHTML: t._s(t.data.smallDesc)
                        }
                    })]), t._v(" "), i("div", {
                        ref: "deco",
                        staticClass: "project-screen__deco"
                    })])
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        409: function(t, e, i) {
            "use strict";
            i(390), i(12);
            var s = i(0),
                o = (i(13), i(6)),
                n = {
                    data: function() {
                        return {}
                    },
                    props: {
                        index: {
                            type: Number,
                            required: !0
                        },
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {},
                    created: function() {},
                    mounted: function() {
                        this.$refs.img.style.backgroundImage = "url(images/previews/".concat(this.data.preview, ")"), this.$refs.img.style.transform = "translate3d(-50%, 0, 0) rotate(".concat(Object(o.f)(-3, 3), "deg)"), this._bind(), this._onResize()
                    },
                    beforeDestroy: function() {
                        clearTimeout(this._forcedTo), this._unbind()
                    },
                    methods: {
                        _bind: function() {
                            s.h.addResize(this._onResize)
                        },
                        _unbind: function() {
                            s.h.removeResize(this._onResize)
                        },
                        _handleClick: function() {
                            s.b.emit("project_overlay:open", {
                                index: this.index
                            })
                        },
                        _onResize: function() {}
                    },
                    components: {}
                },
                r = (i(402), i(33)),
                a = Object(r.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "project-screen-mobile",
                        on: {
                            click: t._handleClick
                        }
                    }, [i("div", {
                        ref: "img",
                        staticClass: "project-screen-mobile__img"
                    }), t._v(" "), i("h3", {
                        ref: "title",
                        staticClass: "project-screen-mobile__title"
                    }, [i("span", [t._v(t._s(t.data.mLine1))]), i("br"), t._v(" "), i("span", [t._v(t._s(t.data.mLine2))]), t.data.mLine3 ? i("br") : t._e(), t._v(" "), t.data.mLine3 ? i("span", [t._v(t._s(t.data.mLine3))]) : t._e()])])
                }), [], !1, null, null, null);
            e.a = a.exports
        },
        415: function(t, e, i) {
            "use strict";
            var s = i(376).a,
                o = (i(397), i(33)),
                n = Object(o.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("header", {
                        staticClass: "intro"
                    }, [i("h1", {
                        staticClass: "intro__title"
                    }, [i("span", {
                        ref: "titleTop",
                        staticClass: "intro__title-part intro__title-part--top gl-title-top"
                    }, [i("span", {
                        ref: "spanTop"
                    }, [t._v("Patrick")])]), t._v(" "), i("span", {
                        ref: "titleBottom",
                        staticClass: "intro__title-part intro__title-part--bottom gl-title-bottom"
                    }, [i("span", {
                        ref: "spanBottom"
                    }, [t._v("Heng")])])]), t._v(" "), i("p", {
                        ref: "desc",
                        staticClass: "intro__description"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2)])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "intro__description-line"
                    }, [e("span", {
                        staticClass: "intro__description-text"
                    }, [this._v("Creative Developer")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "intro__description-line"
                    }, [e("span", {
                        staticClass: "intro__description-text"
                    }, [this._v("Currently based")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "intro__description-line"
                    }, [e("span", {
                        staticClass: "intro__description-text"
                    }, [this._v("in Paris")])])
                }], !1, null, null, null);
            e.a = n.exports
        },
        416: function(t, e, i) {
            "use strict";
            var s = i(378).a,
                o = (i(398), i(33)),
                n = Object(o.a)(s, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "project-intro"
                    }, [e("h2", {
                        ref: "title",
                        staticClass: "project-intro__title"
                    }, [this._v("Selected projects")]), this._v(" "), e("span", {
                        ref: "date",
                        staticClass: "project-intro__date"
                    }, [this._v("2017 - 2020")])])
                }), [], !1, null, null, null);
            e.a = n.exports
        },
        417: function(t, e, i) {
            "use strict";
            var s = i(382).a,
                o = (i(404), i(33)),
                n = Object(o.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isVisible,
                            expression: "isVisible"
                        }],
                        staticClass: "project-overlay",
                        class: {
                            "project-overlay--has-link": t.link
                        }
                    }, [i("div", {
                        ref: "mBg",
                        staticClass: "project-overlay__bg"
                    }), t._v(" "), i("div", {
                        ref: "wrapper",
                        staticClass: "project-overlay__wrapper"
                    }, [i("div", {
                        ref: "bg",
                        staticClass: "project-overlay__wrapper-bg"
                    }), t._v(" "), t.isPortrait ? i("h2", {
                        ref: "title",
                        staticClass: "project-overlay__title"
                    }, [i("div", {
                        ref: "titleTop",
                        staticClass: "project-overlay__title-part project-overlay__title-part--top gl-title-block-0"
                    }, [t._v(t._s(t.line1))]), t._v(" "), t.line2 ? i("br") : t._e(), t._v(" "), t.line2 ? i("div", {
                        ref: "titleBottom",
                        staticClass: "project-overlay__title-part project-overlay__title-part--bottom gl-title-block-1"
                    }, [t._v(t._s(t.line2))]) : t._e()]) : t._e(), t._v(" "), i("div", {
                        ref: "videoWrapper",
                        staticClass: "project-overlay__video-wrapper"
                    }, [i("div", {
                        ref: "videoContainer",
                        staticClass: "project-overlay__video-container"
                    }, [i("video", {
                        ref: "video",
                        staticClass: "project-overlay__video",
                        attrs: {
                            src: "",
                            crossorigin: "anonymous",
                            muted: "",
                            loop: "",
                            playsinline: ""
                        },
                        domProps: {
                            muted: !0
                        }
                    })])]), t._v(" "), i("div", {
                        ref: "block",
                        staticClass: "project-overlay__block"
                    }, [i("div", {
                        ref: "textContainer",
                        staticClass: "project-overlay__text-container"
                    }, [t.isPortrait ? t._e() : i("h2", {
                        ref: "title",
                        staticClass: "project-overlay__title"
                    }, [i("div", {
                        ref: "titleTop",
                        staticClass: "project-overlay__title-part project-overlay__title-part--top gl-title-block-0"
                    }, [t._v(t._s(t.line1))]), t._v(" "), t.line2 ? i("br") : t._e(), t._v(" "), t.line2 ? i("div", {
                        ref: "titleBottom",
                        staticClass: "project-overlay__title-part project-overlay__title-part--bottom gl-title-block-1"
                    }, [t._v(t._s(t.line2))]) : t._e()]), t._v(" "), i("p", {
                        ref: "desc",
                        staticClass: "project-overlay__desc",
                        domProps: {
                            innerHTML: t._s(t.desc)
                        }
                    }), t._v(" "), t.link ? i("a", {
                        ref: "cta",
                        staticClass: "project-overlay__link",
                        attrs: {
                            href: t.link,
                            target: "blank"
                        }
                    }, [i("span", [t._v(t._s(t.linkText))])]) : t._e()])]), t._v(" "), i("div", {
                        ref: "close",
                        staticClass: "project-overlay__close",
                        on: {
                            click: t.handleCloseClick,
                            mouseenter: t.handleCloseEnter,
                            mouseleave: t.handleCloseLeave
                        }
                    })])])
                }), [], !1, null, null, null);
            e.a = n.exports
        },
        418: function(t, e, i) {
            "use strict";
            var s = i(384).a,
                o = (i(405), i(33)),
                n = Object(o.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "more-projects"
                    }, [i("div", {
                        staticClass: "more-projects__title-container"
                    }, [i("h2", {
                        ref: "title",
                        staticClass: "more-projects__title"
                    }, [t._v("More projects")]), t._v(" "), i("span", {
                        ref: "date",
                        staticClass: "more-projects__date"
                    }, [t._v("2017 - 2020")])]), t._v(" "), i("div", {
                        ref: "container",
                        staticClass: "more-projects__container"
                    }, [i("div", {
                        staticClass: "more-projects__line"
                    }), t._v(" "), i("ul", {
                        staticClass: "more-projects__list",
                        on: {
                            mouseenter: t._handleMouseEnter,
                            mouseleave: t._handleMouseLeave
                        }
                    }, t._l(t.projects, (function(e, s) {
                        return i("li", {
                            key: s,
                            staticClass: "more-projects__el",
                            on: {
                                mouseenter: function(e) {
                                    return t._handleMouseElEnter(s)
                                },
                                click: function(i) {
                                    return t._handleClick(e)
                                }
                            }
                        }, [i("span", {
                            staticClass: "more-projects__name"
                        }, [i("span", {
                            staticClass: "more-projects__name-txt"
                        }, [t._v(t._s(e.name))])]), t._v(" "), i("span", {
                            staticClass: "more-projects__year"
                        }, [i("span", {
                            staticClass: "more-projects__date-txt"
                        }, [t._v(t._s(e.date))])]), t._v(" "), i("div", {
                            staticClass: "more-projects__line"
                        })])
                    })), 0)])])
                }), [], !1, null, null, null);
            e.a = n.exports
        },
        419: function(t, e, i) {
            "use strict";
            var s = i(386).a,
                o = (i(406), i(33)),
                n = Object(o.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "more-projects-mobile"
                    }, [i("div", {
                        staticClass: "more-projects-mobile__title-container"
                    }, [i("h2", {
                        ref: "title",
                        staticClass: "more-projects-mobile__title"
                    }, [t._v("More projects")]), t._v(" "), i("span", {
                        ref: "date",
                        staticClass: "more-projects-mobile__date"
                    }, [t._v("2017 - 2020")])]), t._v(" "), i("div", {
                        ref: "container",
                        staticClass: "more-projects-mobile__container"
                    }, [i("div", {
                        staticClass: "more-projects-mobile__line"
                    }), t._v(" "), i("ul", {
                        staticClass: "more-projects-mobile__list"
                    }, t._l(t.projects, (function(e, s) {
                        return i("li", {
                            key: s,
                            staticClass: "more-projects-mobile__el",
                            on: {
                                click: function(i) {
                                    return t._handleClick(e)
                                }
                            }
                        }, [i("span", {
                            staticClass: "more-projects-mobile__name"
                        }, [i("span", {
                            staticClass: "more-projects-mobile__name-txt"
                        }, [t._v(t._s(e.name))])]), t._v(" "), i("span", {
                            staticClass: "more-projects-mobile__year"
                        }, [i("span", {
                            staticClass: "more-projects-mobile__date-txt"
                        }, [t._v(t._s(e.date))])]), t._v(" "), i("div", {
                            staticClass: "more-projects-mobile__line"
                        })])
                    })), 0)])])
                }), [], !1, null, null, null);
            e.a = n.exports
        },
        421: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i(375).a,
                o = (i(407), i(33)),
                n = Object(o.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.toggle,
                            expression: "toggle"
                        }],
                        staticClass: "home"
                    }, [i("div", {
                        ref: "wrapper",
                        staticClass: "home__wrapper"
                    }, [i("intro"), t._v(" "), i("project-intro"), t._v(" "), i("div", {
                        staticClass: "home__projects"
                    }, [t._l(t.work, (function(e, s) {
                        return t.isMobile ? t._e() : i("project-screen", {
                            key: s,
                            attrs: {
                                data: e,
                                index: s
                            }
                        })
                    })), t._v(" "), t._l(t.work, (function(e, s) {
                        return t.isMobile ? i("project-screen-mobile", {
                            key: s,
                            attrs: {
                                data: e,
                                index: s
                            }
                        }) : t._e()
                    }))], 2), t._v(" "), t.isMobile ? t._e() : i("more-projects"), t._v(" "), t.isMobile ? i("more-projects-mobile") : t._e()], 1), t._v(" "), i("project-overlay", {
                        attrs: {
                            data: t.work
                        }
                    })], 1)
                }), [], !1, null, null, null);
            e.default = n.exports
        }
    }
]);