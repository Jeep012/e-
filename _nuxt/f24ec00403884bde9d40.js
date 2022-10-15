(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [function(e, t, i) {
        "use strict";
        var n = i(75),
            s = i(15),
            o = i(52),
            a = i(45),
            r = i(56),
            c = i(29),
            h = i(183),
            l = i(2),
            u = i(3),
            d = i(13),
            p = new(function() {
                function e() {
                    Object(l.a)(this, e)
                }
                return Object(u.a)(e, [{
                    key: "DPR",
                    get: function() {
                        var e = Object(d.b)("dpr");
                        return e ? (e = parseFloat(e, 10), Math.min(window.devicePixelRatio, e)) : Math.min(window.devicePixelRatio || 1, 1.4)
                    }
                }, {
                    key: "useRetinaScene",
                    get: function() {
                        return !1
                    }
                }]), e
            }()),
            f = i(42),
            v = (i(142), i(204)),
            m = (i(152), i(28)),
            _ = Object(m.c)("DetectGPU", "#46466E", !0),
            y = (new function e() {
                Object(l.a)(this, e);
                var t = Object(v.getGPUTier)({});
                this.rawTier = t.tier, this.type = t.type, _("tier: ".concat(t.tier, " | type: ").concat(t.type)), this.tier = parseInt(t.tier.match(/\d+/), 10), document.body.classList.add("is-gpu-" + this.tier)
            }, i(205)),
            b = new(function() {
                function e() {
                    Object(l.a)(this, e), this.scroll = new y.a, this.direction = 1, this.totalWidth = 100, this.lastX = 0, this.deltaX = 0, this.lastY = 0, this.deltaY = 0, this.scrollbar = null, this.introScreenProgress = 0, this.aboutX = 0, this.aboutCamera = null, this.aboutLimit = {
                        min: 0,
                        max: 0
                    }, this.isHome = !1, this.isOverlay = !1, window.store = this
                }
                return Object(u.a)(e, [{
                    key: "scrollTop",
                    get: function() {
                        return this.scroll.scrollTop
                    }
                }, {
                    key: "scrollLeft",
                    get: function() {
                        return this.scroll.scrollLeft
                    }
                }]), e
            }());
        i.d(t, "g", (function() {
            return n.a
        })), i.d(t, "b", (function() {
            return s.a
        })), i.d(t, "a", (function() {
            return o.a
        })), i.d(t, "h", (function() {
            return a.a
        })), i.d(t, "d", (function() {
            return r.a
        })), i.d(t, "e", (function() {
            return c.a
        })), i.d(t, "f", (function() {
            return h.a
        })), i.d(t, "j", (function() {
            return p
        })), i.d(t, "c", (function() {
            return f.a
        })), i.d(t, "i", (function() {
            return b
        }))
    }, , , , , , function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return n
        })), i.d(t, "b", (function() {
            return s
        })), i.d(t, "c", (function() {
            return o
        })), i.d(t, "d", (function() {
            return a
        })), i.d(t, "f", (function() {
            return r
        })), i.d(t, "g", (function() {
            return c
        })), i.d(t, "e", (function() {
            return h
        }));
        i(107), i(108), i(19);

        function n(e, t, i) {
            return Math.min(i, Math.max(t, e))
        }

        function s(e, t, i, n) {
            var s = e - i,
                o = t - n;
            return Math.sqrt(s * s + o * o)
        }

        function o(e, t, i) {
            return e + (t - e) * i
        }

        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                a = (e - t) * (o - s) / (i - t) + s;
            return (arguments.length > 5 ? arguments[5] : void 0) ? n(a, Math.min(s, o), Math.max(s, o)) : a
        }

        function r(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            return parseFloat(Math.min(e + Math.random() * (t - e), t).toFixed(i))
        }

        function c(e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e)
        }

        function h(e, t) {
            return e < 0 && (e = t + e % t), e >= t ? e % t : e
        }
    }, , , , function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(39), i(31), i(25), i(19), i(32);
            var s = i(21),
                o = (i(18), i(2)),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(5),
                l = i(12),
                u = i(29),
                d = i(123),
                p = i(61),
                f = i(42),
                v = i(69);

            function m(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(i), !0).forEach((function(t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var y = e.Body,
                b = function(t) {
                    function i(e) {
                        var t;
                        return Object(o.a)(this, i), (t = Object(r.a)(this, Object(c.a)(i).call(this, e))).scene = e, t._world = l.a, t._loader = u.a, t.xOffset = 0, t._engine = e.engine, t._engine && (t._pWorld = t._engine.world), t._uTime = l.a.uniforms.uTime, t._gui = f.a, t._tls = [], t._mats = [], t._maps = [], t._entities = [], t._retinas = [], t._timeouts = [], t._renderer = t._world.renderer, t._textures = d.a, t.bodiesAdded = !0, t._isBinded = !1, t
                    }
                    return Object(h.a)(i, t), Object(a.a)(i, [{
                        key: "destroy",
                        value: function() {
                            this._destroyed = !0, this._timeouts.forEach((function(e) {
                                return clearTimeout(e)
                            })), this._unbind(), this._destroyTls(), this.traverse((function(e) {
                                e.material && "function" == typeof e.material.dispose && e.material.dispose(), e.geometry && "function" == typeof e.geometry.dispose && e.geometry.dispose(), e._maps && e._maps.length && e._maps.forEach((function(e) {
                                    e.destroyCb ? e.destroyCb() : "function" === e.dispose && e.dispose()
                                }))
                            }));
                            for (var e = 0, t = this._mats.length; e < t; e++) this._mats[e] && "function" == typeof this._mats[e].dispose && this._mats[e].dispose();
                            for (var i = 0, n = this._maps.length; i < n; i++) {
                                var s = this._maps[i];
                                s.destroyCb ? s.destroyCb() : "function" === s.dispose && s.dispose()
                            }
                            this.remove();
                            for (var o = 0, a = this._entities.length; o < a; o++) this._entities[o].destroy && !this._entities[o].destroyed && this._entities[o].destroy()
                        }
                    }, {
                        key: "setSize",
                        value: function() {}
                    }, {
                        key: "delayedCall",
                        value: function(e, t) {
                            var i = setTimeout(e, t);
                            return this._timeouts.push(i), i
                        }
                    }, {
                        key: "onSwap",
                        value: function(e) {
                            for (var t = 0, i = this._entities.length; t < i; t++) this._entities[t].onSwap && this._entities[t].onSwap(e)
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function(e) {
                            for (var t = 0, i = this._entities.length; t < i; t++) this._entities[t].onSwapLeave && this._entities[t].onSwapLeave(e)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {}
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "_unbind",
                        value: function() {}
                    }, {
                        key: "_createMaterial",
                        value: function(e) {
                            return new p.a(e)
                        }
                    }, {
                        key: "_loadTexture",
                        value: function(e, t, i, n) {
                            return l.a.textureLoader.load(e, t, i, n)
                        }
                    }, {
                        key: "_addBody",
                        value: function(t, i) {
                            this.bodies || (this.bodies = []), this.bodies.push(t), t.sleepThreshold = 1e12, i && i.id && e.Composite.add(i, t)
                        }
                    }, {
                        key: "_removeBody",
                        value: function(t, i, n) {
                            this.bodies = [], this.bodies.push(t), i && i.id && e.Composite.remove(i, t)
                        }
                    }, {
                        key: "_addEntity",
                        value: function(e) {
                            this._entities.push(e), e._parent = this, e._composite || (e._composite = this.composite), this.add(e)
                        }
                    }, {
                        key: "_addRetinaEntity",
                        value: function(e, t) {
                            this._addEntity(e), this._retinas.push(e), l.a.retinaScene.addEntity(e, t), e.baseGroup = this
                        }
                    }, {
                        key: "_addConstraint",
                        value: function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.constraints || (this.constraints = []), this.constraints.push(t), i && i.id ? e.Composite.add(i, t) : i && e.World.add(this._engine.world, t)
                        }
                    }, {
                        key: "_resetConstraints",
                        value: function() {
                            var t = this;
                            this.constraints && (this.constraints.forEach((function(i) {
                                return e.World.remove(t._engine.world, i)
                            })), this.constraints.forEach((function(i) {
                                return e.World.add(t._engine.world, i)
                            })))
                        }
                    }, {
                        key: "_removeConstraints",
                        value: function(t) {
                            var i = this;
                            this.constraints && (t ? this.constraints.forEach((function(i) {
                                return e.Composite.remove(t, i)
                            })) : this.constraints.forEach((function(t) {
                                return e.World.remove(i._engine.world, t)
                            })), this.constraints = [])
                        }
                    }, {
                        key: "_scaleBody",
                        value: function(e, t, i) {
                            e._scale ? y.scale(e, 1 / e._scale.x, 1 / e._scale.y) : e._scale = {}, e._scale.x = t, e._scale.y = i, y.scale(e, t, i)
                        }
                    }, {
                        key: "_sync",
                        value: function(e, t) {
                            var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            e.position.x = t.position.x, e.position.y = -t.position.y, i && (e.rotation.z = -t.angle % (2 * Math.PI))
                        }
                    }, {
                        key: "_parseMesh",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                            if (this.scene.pane) {
                                this.folder || (this.folder = this.scene.pane.addFolder({
                                    title: "👻 ".concat(Object(v.a)(this.name), " entity")
                                }), this.folder.expanded = !1);
                                var o, a = t.label;
                                this.folder.addSeparator(), "boolean" == typeof e.visible && (this.folder.addInput(e, "visible", {
                                    label: a + " visible"
                                }), this.folder.addSeparator()), i && (o = a + " pos", t.position || (t.position = {
                                    min: -10,
                                    max: 10,
                                    step: .05
                                }), t.position.label = o, this._gui.addVec(this.folder, e.position, t.position), this.folder.addSeparator()), n && (o = a + " rot", t.rotation || (t.rotation = {
                                    min: -Math.PI,
                                    max: Math.PI,
                                    step: .01
                                }), t.rotation.label = o, this._gui.addVec(this.folder, e.rotation, t.rotation), this.folder.addSeparator()), s && (o = a + " scale", t.scale || (t.scale = {
                                    min: .001,
                                    max: 10,
                                    step: .1
                                }), t.scale.label = o, this._gui.addVec(this.folder, e.scale, t.scale), this.folder.addSeparator())
                            }
                        }
                    }, {
                        key: "_parseMaterial",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            if (this.scene.pane) {
                                this.matFolder || (this.matFolder = this.scene.pane.addFolder({
                                    title: "🎨 ".concat(Object(v.a)(e.name || this.name), " material")
                                }), this.matFolder.expanded = !1);
                                for (var n = 0, s = t.length; n < s; n++) {
                                    var o = t[n],
                                        a = e.uniforms[o];
                                    if (a)
                                        if (void 0 !== a.value.x) this._gui.addVec(this.matFolder, a.value, {
                                            label: o
                                        });
                                        else {
                                            var r = {
                                                label: o
                                            };
                                            "uAlpha" !== o && "uProgress" !== o || (r = _({}, r, {
                                                min: 0,
                                                max: 1,
                                                step: .01
                                            })), this.matFolder.addInput(a, "value", r)
                                        }
                                }
                                for (var c = 0, h = i.length; c < h; c++) {
                                    var l = i[c],
                                        u = e[l];
                                    void 0 !== u && (void 0 !== u.x ? this._gui.addVec(this.matFolder, u, {
                                        label: l
                                    }) : this.matFolder.addInput(e, l, {
                                        label: l
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane
                        }
                    }, {
                        key: "onVisible",
                        value: function() {}
                    }, {
                        key: "onInvisible",
                        value: function() {}
                    }, {
                        key: "onAnimateIn",
                        value: function() {}
                    }, {
                        key: "onAnimateOut",
                        value: function() {}
                    }, {
                        key: "_destroyTls",
                        value: function() {
                            for (var e = 0, t = this._tls.length; e < t; e++) {
                                var i = this._tls[e];
                                i.kill(), i.clear()
                            }
                        }
                    }]), i
                }(n.Object3D);
            t.a = b
        }).call(this, i(23), i(11))
    }, , function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(19);
            var o, a = i(2),
                r = i(3),
                c = i(7),
                h = i(201),
                l = i(206),
                u = i(86),
                d = i(0),
                p = i(28),
                f = i(122),
                v = i(291),
                m = i(292),
                _ = i(289),
                y = Object(p.c)("World", "#40bfc1", !1),
                b = Object(p.c)("World", p.a, !1),
                g = (o = function() {
                    function t() {
                        if (Object(a.a)(this, t), !d.a.isMobile) {
                            this.initialized = Promise.create(), this.raycaster = new e.Raycaster, this.scene = null, this.loading = !0, this.textureLoader = new e.TextureLoader, this.pGroups = [], this.pGs = [];
                            for (var i = 0; i < 20; i++) this.pGroups.push(n.Body.nextCategory()), this.pGs.push(n.Body.nextGroup());
                            this.uniforms = {
                                uTime: {
                                    value: 0
                                }
                            }, this.GEOMS = {
                                quad: Object(f.a)(),
                                plane: new e.PlaneBufferGeometry(1, 1, 1, 1),
                                sphere: new e.SphereBufferGeometry(1, 32, 32),
                                box: new e.BoxBufferGeometry(1, 1, 1)
                            }, this.EMPYT_MAP = new e.Texture, this._pauseNow = 0, this._pauseDuration = 0, this._paused = !1
                        }
                    }
                    return Object(r.a)(t, [{
                        key: "_createGUI",
                        value: function() {}
                    }, {
                        key: "init",
                        value: function(t) {
                            y("Initialized"), this.renderer = new h.a, this.retinaScene = new _.a(this), this.MATS = {
                                UV: new v.a,
                                normal: new e.MeshNormalMaterial
                            }, this.scenes = new l.a(this, u.a), t && t.appendChild(this.renderer.domElement), d.g.remove(this._pauseUpdate), d.g.add(this._update), this.initialized.resolve()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this._paused || (this._pauseNow = Date.now(), this._paused = !0, d.g.remove(this._update), d.g.add(this._pauseUpdate))
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            this._paused && (this._paused = !1, this._pauseDuration += Date.now() - this._pauseNow, d.g.remove(this._pauseUpdate), d.g.add(this._update))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            y("Destroyed"), d.g.remove(this._update), this.renderer.destroy()
                        }
                    }, {
                        key: "initDebugScene",
                        value: function(e) {
                            this.sceneDebug = new m.a(e), this.sceneDebug.data ? y("Scene debug created for", e) : b("Scene/Entity: '".concat(e, "' does not exist in manifest"))
                        }
                    }, {
                        key: "_update",
                        value: function(e, t) {
                            t -= this._pauseDuration, this.uniforms.uTime.value = .01 * t, this.scenes.update(e, t)
                        }
                    }, {
                        key: "_pauseUpdate",
                        value: function(e, t) {
                            t -= this._pauseDuration, this.uniforms.uTime.value = t, this.scenes.pauseUpdate(e, t)
                        }
                    }, {
                        key: "canvas",
                        get: function() {
                            return this.renderer.domElement
                        }
                    }]), t
                }(), Object(c.a)(o.prototype, "_update", [s], Object.getOwnPropertyDescriptor(o.prototype, "_update"), o.prototype), Object(c.a)(o.prototype, "_pauseUpdate", [s], Object.getOwnPropertyDescriptor(o.prototype, "_pauseUpdate"), o.prototype), o);
            t.a = new g
        }).call(this, i(11), i(23), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "c", (function() {
                return n
            })), i.d(t, "d", (function() {
                return s
            })), i.d(t, "e", (function() {
                return o
            })), i.d(t, "b", (function() {
                return a
            })), i.d(t, "a", (function() {
                return r
            }));
            i(150), i(85), i(107), i(108), i(19);

            function n(e) {
                return !(!e || e.constructor !== Array)
            }

            function s(e) {
                return e === Object(e) && !n(e)
            }

            function o(e) {
                return e[Math.floor(Math.random() * e.length)]
            }

            function a(e, t) {
                t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                if (!i) return !1;
                if (!i[2]) return !0;
                var n = decodeURIComponent(i[2].replace(/\+/g, " "));
                return "" === n || "true" === n ? n = !0 : null !== n && "false" !== n || (n = !1), n
            }

            function r(e, t, i, n, s) {
                var o = n / s,
                    a = t / i,
                    r = 0,
                    c = 0;
                return (e ? o > a : o < a) ? c = (r = t) / o : r = (c = i) * o, {
                    width: r,
                    height: c,
                    x: (t - r) / 2,
                    y: (i - c) / 2
                }
            }
        }).call(this, i(109))
    }, , function(e, t, i) {
        "use strict";
        var n = i(200),
            s = i.n(n);
        t.a = new s.a
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\n#define SHADER_NAME Basic-raw\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  \n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
    }, function(e, t, i) {
        "use strict";
        i.d(t, "i", (function() {
            return l
        })), i.d(t, "j", (function() {
            return u
        })), i.d(t, "a", (function() {
            return d
        })), i.d(t, "o", (function() {
            return p
        })), i.d(t, "e", (function() {
            return f
        })), i.d(t, "f", (function() {
            return v
        })), i.d(t, "c", (function() {
            return m
        })), i.d(t, "n", (function() {
            return _
        })), i.d(t, "h", (function() {
            return y
        })), i.d(t, "p", (function() {
            return g
        })), i.d(t, "k", (function() {
            return x
        })), i.d(t, "m", (function() {
            return O
        })), i.d(t, "d", (function() {
            return k
        })), i.d(t, "b", (function() {
            return j
        })), i.d(t, "g", (function() {
            return S
        })), i.d(t, "l", (function() {
            return C
        }));
        i(39), i(31);
        var n = i(88),
            s = (i(106), i(321), i(182), i(62)),
            o = (i(107), i(108), i(150), i(325), i(85), i(101), i(36)),
            a = (i(135), i(25), i(19), i(32), i(18), i(21)),
            r = i(14);

        function c(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(i), !0).forEach((function(t) {
                    Object(a.a)(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }

        function l(e) {
            r.a.config.errorHandler && r.a.config.errorHandler(e)
        }

        function u(e) {
            return e.then((function(e) {
                return e.default || e
            }))
        }

        function d(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var i = e.options._originDataFn || e.options.data || function() {
                    return {}
                };
                e.options._originDataFn = i, e.options.data = function() {
                    var n = i.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), h({}, n, {}, t)
                }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }

        function p(e) {
            return e.options && e._Ctor === e ? e : (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = r.a.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file), e)
        }

        function f(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                return Object.keys(e[i]).map((function(s) {
                    return t && t.push(n), e[i][s]
                }))
            })))
        }

        function v(e) {
            return f(e, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
        }

        function m(e, t) {
            return Array.prototype.concat.apply([], e.matched.map((function(e, i) {
                return Object.keys(e.components).reduce((function(n, s) {
                    return e.components[s] ? n.push(t(e.components[s], e.instances[s], e, s, i)) : delete e.components[s], n
                }), [])
            })))
        }

        function _(e, t) {
            return Promise.all(m(e, function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(i, n, s, o) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof i || i.options) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 3, i();
                            case 3:
                                i = e.sent;
                            case 4:
                                return s.components[o] = i = p(i), e.abrupt("return", "function" == typeof t ? t(i, n, s, o) : i);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, i, n, s) {
                    return e.apply(this, arguments)
                }
            }()))
        }

        function y(e) {
            return b.apply(this, arguments)
        }

        function b() {
            return (b = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, _(t);
                        case 4:
                            return e.abrupt("return", h({}, t, {
                                meta: f(t).map((function(e, i) {
                                    return h({}, e.options.meta, {}, (t.matched[i] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function g(e, t) {
            return w.apply(this, arguments)
        }

        function w() {
            return (w = Object(o.a)(regeneratorRuntime.mark((function e(t, i) {
                var o, a, r, c;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: i.payload,
                                error: i.error,
                                base: "/",
                                env: {}
                            }, i.req && (t.context.req = i.req), i.res && (t.context.res = i.res), i.ssrContext && (t.context.ssrContext = i.ssrContext), t.context.redirect = function(e, i, n) {
                                if (e) {
                                    t.context._redirected = !0;
                                    var o = Object(s.a)(i);
                                    if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = i || {}, i = e, o = Object(s.a)(i), e = 302), "object" === o && (i = t.router.resolve(i).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(i)) throw i = L(i, n), window.location.replace(i), new Error("ERR_REDIRECT");
                                    t.context.next({
                                        path: i,
                                        query: n,
                                        status: e
                                    })
                                }
                            }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([y(i.route), y(i.from)]);
                        case 3:
                            o = e.sent, a = Object(n.a)(o, 2), r = a[0], c = a[1], i.route && (t.context.route = r), i.from && (t.context.from = c), t.context.next = i.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function x(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : O(e[0], t).then((function() {
                return x(e.slice(1), t)
            }))
        }

        function O(e, t) {
            var i;
            return (i = 2 === e.length ? new Promise((function(i) {
                e(t, (function(e, n) {
                    e && t.error(e), i(n = n || {})
                }))
            })) : e(t)) && i instanceof Promise && "function" == typeof i.then ? i : Promise.resolve(i)
        }

        function k(e, t) {
            var i = decodeURI(window.location.pathname);
            return "hash" === t ? window.location.hash.replace(/^#\//, "") : (e && 0 === i.indexOf(e) && (i = i.slice(e.length)), (i || "/") + window.location.search + window.location.hash)
        }

        function j(e, t) {
            return function(e, t) {
                for (var i = new Array(e.length), n = 0; n < e.length; n++) "object" === Object(s.a)(e[n]) && (i[n] = new RegExp("^(?:" + e[n].pattern + ")$", T(t)));
                return function(t, n) {
                    for (var s = "", o = t || {}, a = (n || {}).pretty ? M : encodeURIComponent, r = 0; r < e.length; r++) {
                        var c = e[r];
                        if ("string" != typeof c) {
                            var h = o[c.name || "pathMatch"],
                                l = void 0;
                            if (null == h) {
                                if (c.optional) {
                                    c.partial && (s += c.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + c.name + '" to be defined')
                            }
                            if (Array.isArray(h)) {
                                if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(h) + "`");
                                if (0 === h.length) {
                                    if (c.optional) continue;
                                    throw new TypeError('Expected "' + c.name + '" to not be empty')
                                }
                                for (var u = 0; u < h.length; u++) {
                                    if (l = a(h[u]), !i[r].test(l)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(l) + "`");
                                    s += (0 === u ? c.prefix : c.delimiter) + l
                                }
                            } else {
                                if (l = c.asterisk ? M(h, !0) : a(h), !i[r].test(l)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + l + '"');
                                s += c.prefix + l
                            }
                        } else s += c
                    }
                    return s
                }
            }(function(e, t) {
                var i, n = [],
                    s = 0,
                    o = 0,
                    a = "",
                    r = t && t.delimiter || "/";
                for (; null != (i = P.exec(e));) {
                    var c = i[0],
                        h = i[1],
                        l = i.index;
                    if (a += e.slice(o, l), o = l + c.length, h) a += h[1];
                    else {
                        var u = e[o],
                            d = i[2],
                            p = i[3],
                            f = i[4],
                            v = i[5],
                            m = i[6],
                            _ = i[7];
                        a && (n.push(a), a = "");
                        var y = null != d && null != u && u !== d,
                            b = "+" === m || "*" === m,
                            g = "?" === m || "*" === m,
                            w = i[2] || r,
                            x = f || v;
                        n.push({
                            name: p || s++,
                            prefix: d || "",
                            delimiter: w,
                            optional: g,
                            repeat: b,
                            partial: y,
                            asterisk: Boolean(_),
                            pattern: x ? D(x) : _ ? ".*" : "[^" + E(w) + "]+?"
                        })
                    }
                }
                o < e.length && (a += e.substr(o));
                a && n.push(a);
                return n
            }(e, t), t)
        }

        function S(e, t) {
            var i = {},
                n = h({}, e, {}, t);
            for (var s in n) String(e[s]) !== String(t[s]) && (i[s] = !0);
            return i
        }

        function C(e) {
            var t;
            if (e.message || "string" == typeof e) t = e.message || e;
            else try {
                t = JSON.stringify(e, null, 2)
            } catch (i) {
                t = "[".concat(e.constructor.name, "]")
            }
            return h({}, e, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
            window.onNuxtReadyCbs.push(e)
        };
        var P = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function M(e, t) {
            var i = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(i, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function E(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function D(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function T(e) {
            return e && e.sensitive ? "" : "i"
        }

        function L(e, t) {
            var i, s = e.indexOf("://"); - 1 !== s ? (i = e.substring(0, s), e = e.substring(s + 3)) : e.startsWith("//") && (e = e.substring(2));
            var o, a = e.split("/"),
                r = (i ? i + "://" : "//") + a.shift(),
                c = a.filter(Boolean).join("/");
            if (2 === (a = c.split("#")).length) {
                var h = a,
                    l = Object(n.a)(h, 2);
                c = l[0], o = l[1]
            }
            return r += c ? "/" + c : "", t && "{}" !== JSON.stringify(t) && (r += (2 === e.split("?").length ? "&" : "?") + function(e) {
                return Object.keys(e).sort().map((function(t) {
                    var i = e[t];
                    return null == i ? "" : Array.isArray(i) ? i.slice().map((function(e) {
                        return [t, "=", e].join("")
                    })).join("&") : t + "=" + i
                })).filter(Boolean).join("&")
            }(t)), r += o ? "#" + o : ""
        }
    }, , , , , , , , , function(e, t, i) {
        "use strict";
        (function(e) {
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(8),
                c = i(5),
                h = i(10),
                l = i(0),
                u = i(16),
                d = i(240),
                p = function(t) {
                    function i(t) {
                        var s, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(n.a)(this, i), (s = Object(o.a)(this, Object(a.a)(i).call(this, t, r))).xOffset = 0, s.yOffset = 0, s.options = r, s.margin = r.margin || 0, s.coef = r.coef || null, s.posOffsetX = 0, s.basePos = new e.Vector3, s._isFirst = r.isFirst, s._createEntities(), s._bind(), s
                    }
                    return Object(c.a)(i, t), Object(s.a)(i, [{
                        key: "_bind",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "_bind", this).call(this)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "_unbind", this).call(this)
                        }
                    }, {
                        key: "_createEntities",
                        value: function() {
                            this.geometry = this._world.GEOMS.plane, this.material = this._createMaterial({
                                depthTest: !1,
                                vertexShader: u.a,
                                fragmentShader: d.a,
                                uniforms: {
                                    uColor: {
                                        value: new e.Color(this.options.color)
                                    }
                                }
                            }), this.mesh = new e.Mesh(this.geometry, this.material), this.mesh.position.x = .5, this.mesh.position.y = -.5, this.add(this.mesh)
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            var i = this.xOffset,
                                n = this.yOffset,
                                s = this._parent && this._parent.screenWidth ? this._parent.screenWidth : 1;
                            this.options.width && (s = this.options.width);
                            var o = s * l.h.width,
                                a = this.coef || 1;
                            this.scale.set(o * a, this.height || t, 1), this.position.x = this.coef ? i : i - (this.coef - 1) / 2, this.position.y = n, this._isFirst && (this.position.x -= 2, this.scale.x += 2), this.basePos.copy(this.position)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {}
                    }]), i
                }(h.a);
            t.a = p
        }).call(this, i(11))
    }, , function(e, t, i) {
        "use strict";
        i.d(t, "c", (function() {
            return h
        })), i.d(t, "b", (function() {
            return u
        })), i.d(t, "a", (function() {
            return d
        }));
        var n = i(13),
            s = !1,
            o = [],
            a = function(e) {
                return "background: ".concat(e, "; color: #FFFFFF; padding: 3px 10px; font-weight: bold; border-radius: 10px; font-familly: 'monospace';")
            },
            r = "background: #cc00c5; color: #FFFFFF; padding: 3px 10px; font-weight: bold; border-radius: 10px; font-familly: 'monospace';",
            c = Object(n.b)("log");

        function h(e, t) {
            for (var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], n = 0, h = o.length; n < h; n++) {
                var u = o[n];
                if (u.key === e && u.color === t) return u.log
            }
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Global",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                    i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                c && (i = !0);
                var n = {
                    enabled: !!i,
                    key: e,
                    color: t,
                    log: function() {
                        var i = [];
                        s ? (i.push("%cWorker%c %c".concat(e)), i.push(r, " ")) : i.push("%c".concat(e)), i.push(a(t)), i.push.apply(i, arguments)
                    }
                };
                return o.push(n), n.log
            }(e, t, i)
        }
        var l = "#000000",
            u = "#ffc107",
            d = "#dc3545"
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            var n, s = i(132),
                o = (i(19), i(2)),
                a = i(3),
                r = i(7),
                c = i(199),
                h = i(15),
                l = i(6),
                u = i(28),
                d = i(13),
                p = i(156),
                f = Object(u.c)("Loader", "#5f6769", !1),
                v = Object(u.c)("Loader", u.a, !1),
                m = Object(d.b)("loaderDebug") || Object(d.b)("verbose"),
                _ = (n = function() {
                    function e() {
                        Object(o.a)(this, e), this.PROGRESSED = "Loader_progressed", this.LOADED = "Loader_loaded", this.COMPLETED = "Loader_completed", this.HIDDEN = "Loader_hidden", this.loader = new c.a, this.loaded = Promise.create(), this.hiddenPromise = Promise.create(), window.Loader = this
                    }
                    return Object(a.a)(e, [{
                        key: "load",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            var i = p.a[e] || [],
                                n = [].concat(Object(s.a)(p.a.common), Object(s.a)(i), Object(s.a)(t));
                            f("Load".concat(e ? " - " + e : "").concat(t.length ? " + dynamic" : ""), n), this.fileToLoadsNb = 0;
                            for (var o = 0, a = n.length; o < a; o++) {
                                var r = n[o],
                                    c = r.id || r.url;
                                this.loader.resources[c] || (this.fileToLoadsNb++, this.loader.add(c, r.url, {
                                    crossOrigin: "anonymous"
                                }))
                            }
                            this.remainingFiles = this.fileToLoadsNb, this.remainingFiles || this.onComplete(), this._binded || (this.loader.onProgress.add(this.onProgress), this.loader.onError.add(this.onError), this.loader.onLoad.add(this.onLoad), this.loader.onComplete.add(this.onComplete), this._binded = !0), this.loader.load()
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return this.loader.resources[e] ? this.loader.resources[e].data : (v("get: ".concat(e, " resource does not exist")), null)
                        }
                    }, {
                        key: "onError",
                        value: function(e) {
                            v("OnError", e)
                        }
                    }, {
                        key: "onProgress",
                        value: function(e, t) {
                            this.remainingFiles--;
                            var i = Object(l.d)(this.remainingFiles, this.fileToLoadsNb, 0, 0, 100, !0);
                            e.computedProgress = Math.min(i, e.progress), h.a.emit(this.PROGRESSED, e, t), m && f("OnProgress", e, t)
                        }
                    }, {
                        key: "onLoad",
                        value: function(e, t) {
                            h.a.emit(this.LOADED, e, t), m && f("OnLoad", e, t)
                        }
                    }, {
                        key: "onComplete",
                        value: function(e) {
                            h.a.emit(this.COMPLETED, this.loader.resources), this.loaded.resolve(), m ? f("Complete", e) : f("Complete")
                        }
                    }, {
                        key: "resources",
                        get: function() {
                            return this.loader.resources
                        }
                    }]), e
                }(), Object(r.a)(n.prototype, "onError", [e], Object.getOwnPropertyDescriptor(n.prototype, "onError"), n.prototype), Object(r.a)(n.prototype, "onProgress", [e], Object.getOwnPropertyDescriptor(n.prototype, "onProgress"), n.prototype), Object(r.a)(n.prototype, "onLoad", [e], Object.getOwnPropertyDescriptor(n.prototype, "onLoad"), n.prototype), Object(r.a)(n.prototype, "onComplete", [e], Object.getOwnPropertyDescriptor(n.prototype, "onComplete"), n.prototype), n);
            t.a = new _
        }).call(this, i(20).bind)
    }, , , , , , , , , , , , , function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(39), i(31), i(25), i(19), i(32);
            var s, o = i(21),
                a = (i(18), i(2)),
                r = i(3),
                c = i(7),
                h = i(56),
                l = i(203),
                u = i.n(l),
                d = i(13);

            function p(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(i), !0).forEach((function(t) {
                        Object(o.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var v = new(s = function() {
                function t() {
                    Object(a.a)(this, t), this._autoOpen = Object(d.b)("debug"), this.container = document.createElement("div"), this.container.classList.add("debug-tools"), document.body.appendChild(this.container), this._autoOpen && this.container.classList.add("is-visible"), this._bind()
                }
                return Object(r.a)(t, [{
                    key: "create",
                    value: function(e) {
                        if (window.pane && this.destroy(), this.name = e, Object(d.b)("pane") || Object(d.b)("debug")) return window.pane = new u.a({
                            container: this.container,
                            title: "---- ".concat(e, " ----")
                        }), window.pane
                    }
                }, {
                    key: "destroy",
                    value: function(e) {
                        e && e !== this.name || this.pane && (window.pane.dispose(), window.pane = null)
                    }
                }, {
                    key: "export",
                    value: function() {
                        if (window.pane) {
                            var e = window.pane.exportPreset();
                            return this.exportPanel || (this.exportPanel = document.createElement("textarea"), this.container.appendChild(this.exportPanel), this.exportPanel.style.position = "fixed", this.exportPanel.style.width = "200px", this.exportPanel.style.height = "100px", this.exportPanel.style.right = "5px", this.exportPanel.style.bottom = "5px", this.exportPanel.style.background = "#444", this.exportPanel.style.color = "#fff", this.exportPanel.style.border = "5px solid #40bfc1"), this.exportPanel.value = JSON.stringify(e), e
                        }
                    }
                }, {
                    key: "addVec",
                    value: function(t, i, n) {
                        if (i instanceof e.Vector2) {
                            var s = {
                                vec: i
                            };
                            t.addInput(s, "vec", f({}, n, {
                                label: n.label
                            }))
                        } else ["x", "y", "z", "w"].forEach((function(e) {
                            void 0 !== i[e] && t.addInput(i, e, f({}, n, {
                                label: "".concat(n.label, " ").concat(e)
                            }))
                        }))
                    }
                }, {
                    key: "parseMaterial",
                    value: function(e, t, i, n) {}
                }, {
                    key: "_bind",
                    value: function() {
                        h.a.addUp(this._onKeyUp)
                    }
                }, {
                    key: "_unbind",
                    value: function() {
                        h.a.removeUp(this._onKeyUp)
                    }
                }, {
                    key: "_toggle",
                    value: function() {
                        this.container && this.container.classList.toggle("is-visible")
                    }
                }, {
                    key: "_onKeyUp",
                    value: function(e, t) {
                        h.a.isDown("shift") && "g" === t && this._toggle()
                    }
                }, {
                    key: "pane",
                    get: function() {
                        return window.pane
                    }
                }]), t
            }(), Object(c.a)(s.prototype, "_onKeyUp", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onKeyUp"), s.prototype), s);
            window.pane = null, window.gui = v, t.a = v
        }).call(this, i(11), i(20).bind)
    }, , , function(e, t, i) {
        "use strict";
        (function(e) {
            var n, s, o, a = i(2),
                r = i(3),
                c = i(7),
                h = i(202),
                l = i.n(h),
                u = i(15),
                d = 50,
                p = (o = s = function() {
                    function e() {
                        Object(a.a)(this, e), this._binded = !1, this.width = window.innerWidth, this.height = window.innerHeight, this.pixelRatio = window.devicePixelRatio, this.prWidth = this.width * this.pixelRatio, this.prHeight = this.height * this.pixelRatio, this.aspect = this.width / this.height, this.isFocused = !0, this.bind()
                    }
                    return Object(r.a)(e, [{
                        key: "bind",
                        value: function() {
                            this._binded || (this._handleDebounceResize = l()(this._handleResize, d), window.addEventListener("resize", this._handleDebounceResize, !1), window.addEventListener("blur", this._handleBlur, !1), window.addEventListener("focus", this._handleFocus, !1), this._binded = !0)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            this._binded && (window.removeEventListener("resize", this._handleDebounceResize, !1), window.removeEventListener("blur", this._handleBlur, !1), window.removeEventListener("focus", this._handleFocus, !1), this._binded = !1)
                        }
                    }, {
                        key: "addResize",
                        value: function(t) {
                            u.a.on(e.RESIZED, t)
                        }
                    }, {
                        key: "removeResize",
                        value: function(t) {
                            u.a.off(e.RESIZED, t)
                        }
                    }, {
                        key: "_handleResize",
                        value: function(t) {
                            var i = this;
                            this.pixelRatio = window.devicePixelRatio;
                            var n = function() {
                                i.width = window.innerWidth, i.height = window.innerHeight, i.prWidth = i.width * i.pixelRatio, i.prHeight = i.height * i.pixelRatio, i.aspect = i.width / i.height, u.a.emit(e.RESIZED, i.width, i.height, i.aspect)
                            };
                            n(), window.isMobile && (clearTimeout(this._rto), this._rto = setTimeout((function() {
                                n()
                            }), 300))
                        }
                    }, {
                        key: "_handleBlur",
                        value: function(t) {
                            this.isFocused = !1, u.a.emit(e.BLURRED, t)
                        }
                    }, {
                        key: "_handleFocus",
                        value: function(t) {
                            this.isFocused = !0, u.a.emit(e.FOCUSED, t)
                        }
                    }]), e
                }(), s.RESIZED = "stage_resized", s.BLURRED = "stage_blured", s.FOCUSED = "stage_focused", n = o, Object(c.a)(n.prototype, "_handleResize", [e], Object.getOwnPropertyDescriptor(n.prototype, "_handleResize"), n.prototype), Object(c.a)(n.prototype, "_handleBlur", [e], Object.getOwnPropertyDescriptor(n.prototype, "_handleBlur"), n.prototype), Object(c.a)(n.prototype, "_handleFocus", [e], Object.getOwnPropertyDescriptor(n.prototype, "_handleFocus"), n.prototype), n);
            t.a = new p
        }).call(this, i(20).bind)
    }, , , , function(e, t, i) {
        "use strict";
        (function(e) {
            i(25), i(19), i(32), i(18);
            var n = i(2),
                s = i(3),
                o = i(122),
                a = Object(o.a)(),
                r = function() {
                    function t() {
                        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new e.Scene,
                            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new e.OrthographicCamera(-1, 1, 1, -1, 0, 1),
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new e.Mesh(a, null);
                        Object(n.a)(this, t), this.name = "Pass", this.scene = i, this.camera = s, this.quad = o, null !== this.quad && (this.quad.frustumCulled = !1, null !== this.scene && this.scene.add(this.quad)), this.needsSwap = !1, this.enabled = !0, this.renderToScreen = !1
                    }
                    return Object(s.a)(t, [{
                        key: "setUniform",
                        value: function(e, t) {
                            this.material.uniforms[e] && (this.material.uniforms[e].value = t)
                        }
                    }, {
                        key: "render",
                        value: function(e, t, i, n, s, o) {
                            throw new Error("Render method not implemented!")
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {}
                    }, {
                        key: "init",
                        value: function(e, t) {}
                    }, {
                        key: "destroy",
                        value: function() {
                            for (var e, t = 0, i = Object.keys(this); t < i.length; t++) this[e = i[t]] && "function" == typeof this[e].dispose && this[e].dispose()
                        }
                    }, {
                        key: "material",
                        get: function() {
                            return null !== this.quad ? this.quad.material : null
                        },
                        set: function(e) {
                            null !== this.quad && (this.quad.material = e)
                        }
                    }]), t
                }();
            t.a = r
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(5),
                c = i(10),
                h = i(0),
                l = i(6),
                u = function(t) {
                    function i(t) {
                        var s, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return Object(n.a)(this, i), (s = Object(o.a)(this, Object(a.a)(i).call(this, t, r = {}))).options = r, s.isVisible = !1, s.isAnimated = !1, s.composite = e.Composite.create(), s._compositeAdded = !1, s.screenOffset = r.screenOffset || 0, s._visibleMargin = 1, s._animateMargin = 1, s.progress = -1, s._checkVisible(!0), s
                    }
                    return Object(r.a)(i, t), Object(s.a)(i, [{
                        key: "_checkVisible",
                        value: function(e) {
                            var t = this.scene._camera.position.x,
                                i = this.screenOffset * h.h.width - h.h.width * this._visibleMargin,
                                n = this.screenOffset * h.h.width + h.h.width * this._visibleMargin,
                                s = this.isVisible;
                            this.visible = t > i && t < n, this.isVisible = this.visible, this.isVisible && !s ? this._onVisible() : !this.isVisible && s && this._onInvisible();
                            var o = this.screenOffset * h.h.width - h.h.width * this._animateMargin,
                                a = this.screenOffset * h.h.width + h.h.width * this._animateMargin;
                            this.isAnimated;
                            this.isAnimated = t > o && t < a, this.isVisible && !s ? this._onAnimateIn() : !this.isVisible && s && this._onAnimateOut(), this.progress = Object(l.d)(t, i, n, -1, 1)
                        }
                    }, {
                        key: "_onVisible",
                        value: function() {
                            for (var t = 0, i = this._entities.length; t < i; t++) this._entities[t].onVisible();
                            this._compositeAdded || e.World.add(this._engine.world, this.composite), this._compositeAdded = !0
                        }
                    }, {
                        key: "_onAnimateIn",
                        value: function() {
                            for (var e = 0, t = this._entities.length; e < t; e++) this._entities[e].onAnimateIn()
                        }
                    }, {
                        key: "_onAnimateOut",
                        value: function() {
                            for (var e = 0, t = this._entities.length; e < t; e++) this._entities[e].onAnimateOut()
                        }
                    }, {
                        key: "_onInvisible",
                        value: function() {
                            for (var t = 0, i = this._entities.length; t < i; t++) this._entities[t].onInvisible();
                            this._compositeAdded && e.World.remove(this._engine.world, this.composite), this._compositeAdded = !1
                        }
                    }, {
                        key: "_onUpdate",
                        value: function(e, t) {}
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this._checkVisible(), this._onUpdate(e, t)
                        }
                    }, {
                        key: "screenWidth",
                        get: function() {
                            return 1
                        }
                    }]), i
                }(c.a);
            t.a = u
        }).call(this, i(23))
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(80),
                l = i(0),
                u = (i(13), i(6)),
                d = i(81),
                p = i(242),
                f = e,
                v = (f.Bodies, f.Body, f.Constraint, {
                    length: 0,
                    stiffness: .037,
                    damping: 0,
                    force: 3,
                    dist: {
                        value: .1
                    },
                    distGlobal: {
                        value: .09
                    },
                    coef: {
                        value: -.4
                    },
                    springCoef: {
                        value: .65
                    },
                    springLerp: {
                        value: .14
                    }
                }),
                m = function(e) {
                    function t(e, i) {
                        var n;
                        return Object(s.a)(this, t), (n = Object(a.a)(this, Object(r.a)(t).call(this, e, i, v))).name = "circle-shape", n._defs = Math.ceil(Object(u.d)(i.data.size, .05, .5, 2, 30)), l.a.isMobile && (v.dist.value = .5), n._initMesh(), n._initBody(), n._createGUI(), n.setSize(), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "_initMesh",
                        value: function() {
                            this._prepareGeom(), this._material = this._createMaterial({
                                depthTest: !1,
                                depthWrite: !1,
                                transparent: !0,
                                vertexShader: d.a,
                                fragmentShader: p.a,
                                uniforms: {
                                    uColor: {
                                        value: new n.Color(this._color)
                                    },
                                    uTranslate: {
                                        value: this._translate
                                    },
                                    uScaleOffset: {
                                        value: this._scaleOffset
                                    },
                                    uNoiseScale: {
                                        value: new n.Vector2(Object(u.f)(2, .3), Object(u.f)(6, 7))
                                    },
                                    uSeed: {
                                        value: new n.Vector2(Object(u.f)(-10, 10), Object(u.f)(-10, 10))
                                    },
                                    uSpeed: {
                                        value: new n.Vector2(Object(u.f)(.15, .2), Object(u.f)(.15, .2))
                                    },
                                    uDist: {
                                        value: Object(u.f)(.5, .6)
                                    },
                                    uStrength: {
                                        value: 0
                                    },
                                    uNoiseStrength: {
                                        value: .6
                                    },
                                    uProgress: {
                                        value: 0
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this.mesh = new n.Mesh(this._geometry, this._material), this.mesh.baseScale = this.mesh.scale.clone(), this.add(this.mesh), this.mesh.renderOrder = -1
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {}
                    }]), t
                }(h.a);
            t.a = m
        }).call(this, i(23), i(11))
    }, function(e, t, i) {
        "use strict";
        i(18);
        var n = i(2),
            s = i(3),
            o = i(152),
            a = i.n(o),
            r = function() {
                function e() {
                    Object(n.a)(this, e), this._webglContext = this._getWebglContext()
                }
                return Object(s.a)(e, [{
                    key: "_getWebglContext",
                    value: function() {
                        return document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl")
                    }
                }, {
                    key: "_webglSupported",
                    value: function() {
                        return !!this._webglContext
                    }
                }, {
                    key: "_getWebglExtension",
                    value: function(e, t) {
                        var i = ["", "WEBKIT_", "MOZ_"],
                            n = null;
                        for (var s in i)
                            if (n = e.getExtension(i[s] + t)) break;
                        return n
                    }
                }, {
                    key: "_webglExtensions",
                    value: function() {
                        var e = this._webglContext;
                        return e ? {
                            dxt: this._getWebglExtension(e, "WEBGL_compressed_texture_s3tc")
                        } : null
                    }
                }, {
                    key: "_webglTextureFormat",
                    value: function() {
                        var e = this._webglExtensions(),
                            t = "uncompressed";
                        return e && e.dxt && e.dxt.COMPRESSED_RGB_S3TC_DXT1_EXT && (t = "dxt"), {
                            format: t,
                            compressed: "uncompressed" !== t
                        }
                    }
                }, {
                    key: "gamepad",
                    get: function() {
                        return void 0 !== window.navigator.getGamepads
                    }
                }, {
                    key: "canvas",
                    get: function() {
                        var e = document.createElement("canvas");
                        return !(!e.getContext || !e.getContext("2d"))
                    }
                }, {
                    key: "webgl",
                    get: function() {
                        return {
                            supported: this._webglSupported(),
                            extensions: this._webglExtensions(),
                            textureFormat: this._webglTextureFormat()
                        }
                    }
                }, {
                    key: "blob",
                    get: function() {
                        return !!window.Blob
                    }
                }, {
                    key: "worker",
                    get: function() {
                        return "undefined" != typeof Worker
                    }
                }, {
                    key: "webglContext",
                    get: function() {
                        return this._webglContext
                    }
                }]), e
            }(),
            c = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(s.a)(e, [{
                    key: "init",
                    value: function(e) {
                        this.sniffer = a()(e), this.os = this.sniffer.os, this.browser = this.sniffer.browser, this.feature = this.sniffer.feature, this.browserName = this.sniffer.browser.name, this.isMobile = this.sniffer.features.mobile, this.isDesktop = !this.sniffer.features.mobile, window.isMobile = this.isMobile, window.isDesktop = this.isDesktop, this.addClasses(), this.supports = new r
                    }
                }, {
                    key: "addClasses",
                    value: function() {
                        var e = document.querySelector("html");
                        e.classList.add("os-".concat(this.os.name)), e.classList.add("browser-".concat(this.browserName)), this.isMobile && e.classList.add("is-mobile"), this.isDesktop && e.classList.add("is-desktop")
                    }
                }]), e
            }();
        t.a = new c
    }, , , , function(e, t, i) {
        "use strict";
        (function(e) {
            var n, s, o, a = i(2),
                r = i(3),
                c = i(7),
                h = i(45),
                l = i(15),
                u = i(90),
                d = i.n(u),
                p = i(13),
                f = {
                    layouts: {
                        qwerty: {
                            up: [38, 87],
                            down: [40, 83],
                            left: [37, 65],
                            right: [39, 68]
                        },
                        azerty: {
                            up: [38, 90],
                            down: [40, 83],
                            left: [37, 81],
                            right: [39, 68]
                        }
                    }
                },
                v = (o = s = function() {
                    function e() {
                        Object(a.a)(this, e), this._binded = !1, this._isQwerty = !0, this.pressedKeys = {}, this.bind()
                    }
                    return Object(r.a)(e, [{
                        key: "bind",
                        value: function() {
                            this._binded || (window.addEventListener("keydown", this._handleKeyDown, !1), window.addEventListener("keyup", this._handleKeyUp, !1), l.a.on(h.a.BLURRED, this._onWindowBlur), this._binded = !0)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            this._binded && (window.removeEventListener("keydown", this._handleKeyDown, !1), window.removeEventListener("keyup", this._handleKeyUp, !1), l.a.off(h.a.BLURRED, this._onWindowBlur), this._binded = !1)
                        }
                    }, {
                        key: "isDown",
                        value: function(e) {
                            for (var t = !1, i = this._getKeyLayout(e), n = 0, s = i.length; n < s; n++) {
                                var o = i[n];
                                if (this.pressedKeys[o]) {
                                    t = !0;
                                    break
                                }
                            }
                            return t
                        }
                    }, {
                        key: "addDown",
                        value: function(t) {
                            l.a.on(e.DOWNED, t)
                        }
                    }, {
                        key: "removeDown",
                        value: function(t) {
                            l.a.off(e.DOWNED, t)
                        }
                    }, {
                        key: "addUp",
                        value: function(t) {
                            l.a.on(e.UPPED, t)
                        }
                    }, {
                        key: "removeUp",
                        value: function(t) {
                            l.a.off(e.UPPED, t)
                        }
                    }, {
                        key: "_resetInputs",
                        value: function() {
                            this.pressedKeys = {}
                        }
                    }, {
                        key: "_getKeyLayout",
                        value: function(e) {
                            return "number" == typeof e ? this._keyCodeToKeyName(e) : "string" == typeof e ? this._keyNameToKeyCodes(e) : Object(p.d)(e) && void 0 !== e.keyCode ? this._keyCodeToKeyName(e.keyCode) : void 0
                        }
                    }, {
                        key: "_keyCodeToKeyName",
                        value: function(e) {
                            var t = d()(e),
                                i = this._isQwerty ? "qwerty" : "azerty",
                                n = f.layouts[i];
                            for (var s in n) {
                                if (-1 !== n[s].indexOf(e)) {
                                    t = s;
                                    break
                                }
                            }
                            return t
                        }
                    }, {
                        key: "_keyNameToKeyCodes",
                        value: function(e) {
                            var t = d()(e),
                                i = this._isQwerty ? "qwerty" : "azerty",
                                n = f.layouts[i][e];
                            return n && (t = n), Object(p.c)(t) ? t : [t]
                        }
                    }, {
                        key: "_handleKeyDown",
                        value: function(t) {
                            this.downNow = (new Date).getTime(), this.pressedKeys[t.keyCode] = !0;
                            var i = this._getKeyLayout(t),
                                n = d()(t);
                            l.a.emit(e.DOWNED, t, i, n)
                        }
                    }, {
                        key: "_handleKeyUp",
                        value: function(t) {
                            var i = (new Date).getTime();
                            this.pressDuration = i - this.downNow, delete this.pressedKeys[t.keyCode];
                            var n = this._getKeyLayout(t),
                                s = d()(t);
                            l.a.emit(e.UPPED, t, n, s)
                        }
                    }, {
                        key: "_onWindowBlur",
                        value: function() {
                            this._resetInputs()
                        }
                    }, {
                        key: "_onVisibilityChange",
                        value: function(e) {
                            !1 === e && this._resetInputs()
                        }
                    }]), e
                }(), s.UPPED = "keyboard_upped", s.DOWNED = "keyboard_downed", n = o, Object(c.a)(n.prototype, "_handleKeyDown", [e], Object.getOwnPropertyDescriptor(n.prototype, "_handleKeyDown"), n.prototype), Object(c.a)(n.prototype, "_handleKeyUp", [e], Object.getOwnPropertyDescriptor(n.prototype, "_handleKeyUp"), n.prototype), Object(c.a)(n.prototype, "_onWindowBlur", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onWindowBlur"), n.prototype), Object(c.a)(n.prototype, "_onVisibilityChange", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onVisibilityChange"), n.prototype), n);
            t.a = new v
        }).call(this, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        i(101), i(39), i(31), i(25), i(19), i(32);
        var n = i(36),
            s = i(21),
            o = (i(18), i(14)),
            a = i(197),
            r = i(154),
            c = i.n(r),
            h = i(82),
            l = i.n(h),
            u = i(89),
            d = i(17);
        "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual", window.addEventListener("beforeunload", (function() {
            window.history.scrollRestoration = "auto"
        })), window.addEventListener("load", (function() {
            window.history.scrollRestoration = "manual"
        })));
        var p = function() {},
            f = u.a.prototype.push;
        u.a.prototype.push = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
                i = arguments.length > 2 ? arguments[2] : void 0;
            return f.call(this, e, t, i)
        }, o.a.use(u.a);
        var v = {
            mode: "history",
            base: decodeURI("/"),
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(e, t, i) {
                var n = !1,
                    s = Object(d.e)(e);
                s.length < 2 && s.every((function(e) {
                    return !1 !== e.options.scrollToTop
                })) ? n = {
                    x: 0,
                    y: 0
                } : s.some((function(e) {
                    return e.options.scrollToTop
                })) && (n = {
                    x: 0,
                    y: 0
                }), i && (n = i);
                var o = window.$nuxt;
                return e.path === t.path && e.hash !== t.hash && o.$nextTick((function() {
                    return o.$emit("triggerScroll")
                })), new Promise((function(t) {
                    o.$once("triggerScroll", (function() {
                        if (e.hash) {
                            var i = e.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (i = "#" + window.CSS.escape(i.substr(1)));
                            try {
                                document.querySelector(i) && (n = {
                                    selector: i
                                })
                            } catch (e) {}
                        }
                        t(n)
                    }))
                }))
            },
            routes: [{
                path: "/about",
                component: function() {
                    return Object(d.j)(i.e(2).then(i.bind(null, 420)))
                },
                name: "about"
            }, {
                path: "/",
                component: function() {
                    return Object(d.j)(i.e(3).then(i.bind(null, 421)))
                },
                name: "index"
            }],
            fallback: !1
        };
        var m = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(e, t) {
                    var i = t.parent,
                        n = t.data,
                        s = t.props;
                    n.nuxtChild = !0;
                    for (var o = i, a = i.$nuxt.nuxt.transitions, r = i.$nuxt.nuxt.defaultTransition, c = 0; i;) i.$vnode && i.$vnode.data.nuxtChild && c++, i = i.$parent;
                    n.nuxtChildDepth = c;
                    var h = a[c] || r,
                        l = {};
                    _.forEach((function(e) {
                        void 0 !== h[e] && (l[e] = h[e])
                    }));
                    var u = {};
                    y.forEach((function(e) {
                        "function" == typeof h[e] && (u[e] = h[e].bind(o))
                    }));
                    var d = u.beforeEnter;
                    if (u.beforeEnter = function(e) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), d) return d.call(o, e)
                        }, !1 === h.css) {
                        var p = u.leave;
                        (!p || p.length < 2) && (u.leave = function(e, t) {
                            p && p.call(o, e), o.$nextTick(t)
                        })
                    }
                    var f = e("routerView", n);
                    return s.keepAlive && (f = e("keep-alive", {
                        props: s.keepAliveProps
                    }, [f])), e("transition", {
                        props: l,
                        on: u
                    }, [f])
                }
            },
            _ = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            y = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            b = {
                name: "NuxtError",
                props: {
                    error: {
                        type: Object,
                        default: null
                    }
                },
                computed: {
                    statusCode: function() {
                        return this.error && this.error.statusCode || 500
                    },
                    message: function() {
                        return this.error.message || "Error"
                    }
                },
                head: function() {
                    return {
                        title: this.message,
                        meta: [{
                            name: "viewport",
                            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                        }]
                    }
                }
            },
            g = (i(329), i(33)),
            w = Object(g.a)(b, (function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "__nuxt-error-page"
                }, [i("div", {
                    staticClass: "error"
                }, [i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "90",
                        height: "90",
                        fill: "#DBE1EC",
                        viewBox: "0 0 48 48"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "title"
                }, [e._v(e._s(e.message))]), e._v(" "), 404 === e.statusCode ? i("p", {
                    staticClass: "description"
                }, [i("NuxtLink", {
                    staticClass: "error-link",
                    attrs: {
                        to: "/"
                    }
                }, [e._v("Back to the home page")])], 1) : e._e(), e._v(" "), e._m(0)])])
            }), [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "logo"
                }, [t("a", {
                    attrs: {
                        href: "https://nuxtjs.org",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [this._v("Nuxt.js")])])
            }], !1, null, null, null).exports,
            x = (i(107), i(108), i(85), i(88)),
            O = {
                name: "Nuxt",
                components: {
                    NuxtChild: m,
                    NuxtError: w
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(e) {
                    this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(d.b)(this.$route.matched[0].path)(this.$route.params);
                        var e = Object(x.a)(this.$route.matched, 1)[0];
                        if (!e) return this.$route.path;
                        var t = e.components.default;
                        if (t && t.options) {
                            var i = t.options;
                            if (i.key) return "function" == typeof i.key ? i.key(this.$route) : i.key
                        }
                        return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    o.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(e) {
                    var t = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return t.errorFromNuxtError = !1
                    })), e("div", {}, [e("h2", "An error occured while showing the error page"), e("p", "Unfortunately an error occured and while showing the error page another error occured"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return t.displayingNuxtError = !1
                    })), e(w, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : e("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            },
            k = (i(135), {
                name: "NuxtLoading",
                data: function() {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                },
                computed: {
                    left: function() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy: function() {
                    this.clear()
                },
                methods: {
                    clear: function() {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    },
                    start: function() {
                        var e = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                            return e.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    },
                    set: function(e) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                    },
                    get: function() {
                        return this.percent
                    },
                    increase: function(e) {
                        return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                    },
                    decrease: function(e) {
                        return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                    },
                    pause: function() {
                        return clearInterval(this._timer), this
                    },
                    resume: function() {
                        return this.startTimer(), this
                    },
                    finish: function() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide: function() {
                        var e = this;
                        return this.clear(), setTimeout((function() {
                            e.show = !1, e.$nextTick((function() {
                                e.percent = 0, e.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail: function() {
                        return this.canSucceed = !1, this
                    },
                    startTimer: function() {
                        var e = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                            e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut), e.continuous && (e.percent >= 100 ? (e.skipTimerCount = 1, e.reversed = !e.reversed) : e.percent <= 0 && (e.skipTimerCount = 1, e.reversed = !e.reversed)))
                        }), 100)
                    }
                },
                render: function(e) {
                    var t = e(!1);
                    return this.show && (t = e("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), t
                }
            }),
            j = (i(330), Object(g.a)(k, void 0, void 0, !1, null, null, null).exports);
        Promise.create = function() {
            var e = this,
                t = new Promise((function(t, i) {
                    e.temp_resolve = t, e.temp_reject = i
                }));
            return t.resolve = this.temp_resolve, t.reject = this.temp_reject, delete this.temp_resolve, delete this.temp_reject, t
        };
        i(296);
        var S, C = i(52),
            P = i(113).a,
            M = (i(333), Object(g.a)(P, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.toggle,
                        expression: "toggle"
                    }],
                    staticClass: "preloader"
                })
            }), [], !1, null, null, null).exports),
            E = i(12),
            D = {
                mounted: function() {
                    this._start()
                },
                methods: {
                    _start: function() {
                        E.a.$store = this.$store, E.a.init(), this.$el.appendChild(E.a.canvas), E.a.initialized.then((function() {
                            E.a.scenes.change("loader")
                        })), this._bind()
                    },
                    _bind: function() {}
                }
            },
            T = (i(343), Object(g.a)(D, (function() {
                var e = this.$createElement;
                this._self._c;
                return this._m(0)
            }), [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "webgl"
                }, [t("div", {
                    staticClass: "webgl__physics gl-physics"
                })])
            }], !1, null, null, null).exports),
            L = i(116).a,
            A = (i(344), Object(g.a)(L, (function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("nav", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.toggle,
                        expression: "toggle"
                    }],
                    staticClass: "menu",
                    class: {
                        "menu--is-black": e.isBlack
                    }
                }, [i("div", {
                    ref: "title",
                    staticClass: "menu__title",
                    class: {
                        "menu__title--is-visible": e.isTitleVisible
                    }
                }, [i("span", {
                    ref: "titleInner"
                }, [e._v("Patrick Heng")])]), e._v(" "), i("div", {
                    staticClass: "menu-links"
                }, [i("nuxt-link", {
                    ref: "work",
                    attrs: {
                        to: "/"
                    }
                }, [e._v("Work")]), e._v(" "), i("span", {
                    ref: "comma"
                }, [e._v(",")]), e._v(" "), i("nuxt-link", {
                    ref: "about",
                    attrs: {
                        to: "/about"
                    }
                }, [e._v("About")])], 1)])
            }), [], !1, null, null, null).exports),
            B = i(0),
            z = i(13),
            U = {
                data: function() {
                    return {
                        isVisible: !1
                    }
                },
                created: function() {},
                mounted: function() {
                    this._bind(), this._onResize()
                },
                beforeDestroy: function() {
                    this._unbind()
                },
                methods: {
                    _bind: function() {
                        B.h.addResize(this._onResize)
                    },
                    _unbind: function() {
                        B.h.removeResize(this._onResize)
                    },
                    _onResize: function() {
                        var e = this,
                            t = function() {
                                var t = window.innerWidth,
                                    i = window.innerHeight;
                                e.isVisible = t > i, e.$el.style.width = t + "px", e.$el.style.height = i + "px"
                            };
                        t(), clearTimeout(this._rTo), this._rTo = setTimeout((function() {
                            t()
                        }), 700)
                    },
                    _prepareIn: function() {},
                    _tick: function() {}
                },
                components: {}
            },
            I = (i(345), {
                data: function() {
                    return {
                        isMobile: C.a.isMobile,
                        mainClass: "main",
                        pageClass: "",
                        toggle: !Object(z.b)("sceneDebug") && !Object(z.b)("perf")
                    }
                },
                created: function() {
                    var e = navigator.userAgent;
                    C.a.init(e), this.isMobile = C.a.isMobile, B.i.direction = this.isMobile ? "y" : "x", C.a.isMobile || B.i.scroll.bind(), window.IS_CLIENT = !0
                },
                mounted: function() {
                    this.$router.afterEach(this._onAfterEach), this._checkRoute(), document.body.classList.add("is-designed-by-nicolas-loureiro")
                },
                methods: {
                    _onAfterEach: function(e, t) {
                        this._checkRoute()
                    },
                    _checkRoute: function() {
                        var e = "index" === this.$route.name ? "home" : this.$route.name;
                        this.pageClass = "is-".concat(e, "-page")
                    }
                },
                components: {
                    preloader: M,
                    webgl: T,
                    "menu-comp": A,
                    "orientation-check": Object(g.a)(U, (function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: this.isVisible,
                                expression: "isVisible"
                            }],
                            staticClass: "orientation-check"
                        }, [t("div", {
                            staticClass: "orientation-check__text"
                        }, [this._v("PLEASE ROTATE YOUR PHONE")])])
                    }), [], !1, null, null, null).exports
                }
            }),
            R = {
                _default: Object(g.a)(I, (function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", {
                        class: [e.mainClass, e.pageClass]
                    }, [i("preloader"), e._v(" "), i("webgl"), e._v(" "), i("menu-comp"), e._v(" "), i("div", {
                        ref: "appWrapper",
                        staticClass: "app-wrapper"
                    }, [i("div", {
                        ref: "scrollWrapper",
                        staticClass: "scroll-wrapper"
                    }, [i("nuxt")], 1)]), e._v(" "), e.isMobile ? i("orientation-check") : e._e()], 1)
                }), [], !1, null, null, null).exports
            },
            F = {
                head: {
                    title: "Patrick Heng - Creative Developer Portfolio",
                    meta: [{
                        charset: "utf-8"
                    }, {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, {
                        hid: "description",
                        name: "description",
                        content: "French freelance creative developer with a keen interest in WebGL experiments and UI animations."
                    }, {
                        property: "og:title",
                        content: "Patrick Heng - Creative Developer Portfolio"
                    }, {
                        property: "og:description",
                        content: "French freelance creative developer with a keen interest in WebGL experiments and UI animations."
                    }, {
                        property: "og:image",
                        content: "https://patrickheng.com/share-fb.jpg"
                    }, {
                        property: "og:url",
                        content: "https://patrickheng.com"
                    }, {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, {
                        name: "twitter:creator",
                        content: "@pat_hg"
                    }, {
                        name: "twitter:image:src",
                        content: "https://patrickheng.com/share-tw.jpg"
                    }],
                    link: [{
                        rel: "icon",
                        type: "image/x-icon",
                        href: "/favicon.ico"
                    }],
                    style: [],
                    script: []
                },
                render: function(e, t) {
                    var i = e("NuxtLoading", {
                            ref: "loading"
                        }),
                        n = e(this.layout || "nuxt"),
                        s = e("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [n]),
                        o = e("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(e) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [s]);
                    return e("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [i, o])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: ""
                    }
                },
                beforeCreate: function() {
                    o.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    o.a.prototype.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    this.$loading = this.$refs.loading
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: (S = Object(n.a)(regeneratorRuntime.mark((function e() {
                        var t, i, n = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((t = Object(d.f)(this.$route)).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return this.$loading.start(), i = t.map((function(e) {
                                        var t = [];
                                        return e.$options.fetch && t.push(Object(d.m)(e.$options.fetch, n.context)), e.$options.asyncData && t.push(Object(d.m)(e.$options.asyncData, n.context).then((function(t) {
                                            for (var i in t) o.a.set(e.$data, i, t[i])
                                        }))), Promise.all(t)
                                    })), e.prev = 5, e.next = 8, Promise.all(i);
                                case 8:
                                    e.next = 15;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(5), this.$loading.fail(), Object(d.i)(e.t0), this.error(e.t0);
                                case 15:
                                    this.$loading.finish();
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [5, 10]
                        ])
                    }))), function() {
                        return S.apply(this, arguments)
                    }),
                    errorChanged: function() {
                        this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(), this.$loading.finish && this.$loading.finish())
                    },
                    setLayout: function(e) {
                        return e && R["_" + e] || (e = "default"), this.layoutName = e, this.layout = R["_" + e], this.layout
                    },
                    loadLayout: function(e) {
                        return e && R["_" + e] || (e = "default"), Promise.resolve(R["_" + e])
                    }
                },
                components: {
                    NuxtLoading: j
                }
            },
            G = i(151);
        o.a.use(G.a);
        var V = {};
        (V = function(e, t) {
            if ((e = e.default || e).commit) throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
            return "function" != typeof e && (e = Object.assign({}, e)),
                function(e, t) {
                    if (e.state && "function" != typeof e.state) {
                        var i = Object.assign({}, e.state);
                        e = Object.assign({}, e, {
                            state: function() {
                                return i
                            }
                        })
                    }
                    return e
                }(e)
        }(i(346), "store/index.js")).modules = V.modules || {};
        var $ = V instanceof Function ? V : function() {
            return new G.a.Store(Object.assign({
                strict: !1
            }, V))
        };
        i(141);
        for (var N = i(91), H = i.n(N), W = i(290), Y = i.n(W), q = {
                setBaseURL: function(e) {
                    this.defaults.baseURL = e
                },
                setHeader: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var a, r = (Array.isArray(i) ? i : [i])[Symbol.iterator](); !(n = (a = r.next()).done); n = !0) {
                            var c = a.value;
                            if (!t) return void delete this.defaults.headers[c][e];
                            this.defaults.headers[c][e] = t
                        }
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            n || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                },
                setToken: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = e ? (t ? t + " " : "") + e : null;
                    this.setHeader("Authorization", n, i)
                },
                onRequest: function(e) {
                    this.interceptors.request.use((function(t) {
                        return e(t) || t
                    }))
                },
                onResponse: function(e) {
                    this.interceptors.response.use((function(t) {
                        return e(t) || t
                    }))
                },
                onRequestError: function(e) {
                    this.interceptors.request.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onResponseError: function(e) {
                    this.interceptors.response.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onError: function(e) {
                    this.onRequestError(e), this.onResponseError(e)
                },
                create: function(e) {
                    return Z(Y()(e, this.defaults))
                }
            }, K = function() {
                var e = Q[X];
                q["$" + e] = function() {
                    return this[e].apply(this, arguments).then((function(e) {
                        return e && e.data
                    }))
                }
            }, X = 0, Q = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; X < Q.length; X++) K();
        var Z = function(e) {
                var t = H.a.create(e);
                return t.CancelToken = H.a.CancelToken, t.isCancel = H.a.isCancel,
                    function(e) {
                        for (var t in q) e[t] = q[t].bind(e)
                    }(t), J(t), t
            },
            J = function(e) {
                var t = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    i = function() {
                        return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : t
                    },
                    n = 0;
                e.onRequest((function(e) {
                    e && !1 === e.progress || n++
                })), e.onResponse((function(e) {
                    e && e.config && !1 === e.config.progress || --n <= 0 && (n = 0, i().finish())
                })), e.onError((function(e) {
                    e && e.config && !1 === e.config.progress || (n--, H.a.isCancel(e) || (i().fail(), i().finish()))
                }));
                var s = function(e) {
                    if (n) {
                        var t = 100 * e.loaded / (e.total * n);
                        i().set(Math.min(100, t))
                    }
                };
                e.defaults.onUploadProgress = s, e.defaults.onDownloadProgress = s
            },
            ee = function(e, t) {
                var i = {
                    baseURL: "http://localhost:3000/",
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                };
                i.headers.common = e.req && e.req.headers ? Object.assign({}, e.req.headers) : {}, delete i.headers.common.accept, delete i.headers.common.host, delete i.headers.common["cf-ray"], delete i.headers.common["cf-connecting-ip"], delete i.headers.common["content-length"], delete i.headers.common["content-md5"], delete i.headers.common["content-type"];
                var n = Z(i);
                e.$axios = n, t("axios", n)
            },
            te = i(75),
            ie = i(15);
        o.a.mixin({
            created: function() {
                var e = this;
                this._eventsSub = [], this._rafs = [], this.$emit = function() {
                    ie.a.emit.apply(ie.a, arguments)
                }, this.$sub = function(t, i, n) {
                    e._eventsSub.push({
                        eventId: t,
                        callback: i,
                        context: n
                    }), ie.a.on(t, i, n)
                }, this.$unsub = function(t, i) {
                    ie.a.off(t, i);
                    for (var n = 0, s = e._eventsSub.length; n < s; n++) {
                        var o = e._eventsSub[n];
                        o.id === t && o.callback === i && (e._eventsSub.splice(n, 1), n--)
                    }
                }, this.$startRaf = function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    te.a.add(t, i, n), e._rafs.push(t)
                }, this.$stopRaf = function(t) {
                    te.a.remove(t);
                    for (var i = 0, n = e._rafs.length; i < n; i++) {
                        e._rafs[i].callback === t && (e._rafs.splice(i, 1), i--)
                    }
                }
            },
            beforeDestroy: function() {
                this._eventsSub.forEach((function(e) {
                    var t = e.eventId,
                        i = e.callback;
                    ie.a.off(t, i)
                })), this._rafs.forEach((function(e) {
                    var t = e.callback;
                    te.a.remove(t)
                }))
            }
        }), o.a.prototype.$events = ie.a, o.a.prototype.$emitter = ie.a;
        var ne = function(e) {
            var t, i, n, s, o, a, r = e.app;
            t = window, i = document, n = "script", s = "ga", t.GoogleAnalyticsObject = s, t.ga = t.ga || function() {
                (t.ga.q = t.ga.q || []).push(arguments)
            }, t.ga.l = 1 * new Date, o = i.createElement(n), a = i.getElementsByTagName(n)[0], o.async = 1, o.src = "https://www.google-analytics.com/analytics.js", a.parentNode.insertBefore(o, a), ga && ga("create", "UA-171590108-1", "auto"), r.router.afterEach((function(e, t) {
                ga && ga("set", "page", e.fullPath), ga && ga("send", "pageview")
            }))
        };

        function se(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function oe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? se(Object(i), !0).forEach((function(t) {
                    Object(s.a)(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : se(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        i.d(t, "b", (function() {
            return re
        })), i.d(t, "a", (function() {
            return w
        })), o.a.component(c.a.name, c.a), o.a.component(l.a.name, oe({}, l.a, {
            render: function(e, t) {
                return l.a._warned || (l.a._warned = !0), l.a.render(e, t)
            }
        })), o.a.component(m.name, m), o.a.component("NChild", m), o.a.component(O.name, O), o.a.use(a.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var ae = {
            name: "page",
            mode: "out-in",
            appear: !0,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };

        function re(e) {
            return ce.apply(this, arguments)
        }

        function ce() {
            return (ce = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                var i, n, s, a, r, c, h;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, new u.a(v);
                        case 2:
                            return i = e.sent, (n = $(t)).$router = i, s = oe({
                                store: n,
                                router: i,
                                nuxt: {
                                    defaultTransition: ae,
                                    transitions: [ae],
                                    setTransitions: function(e) {
                                        return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, ae, {
                                                name: e
                                            }) : Object.assign({}, ae, e) : ae
                                        })), this.$options.nuxt.transitions = e, e
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(e) {
                                        e = e || null, s.context._errored = Boolean(e), e = e ? Object(d.l)(e) : null;
                                        var i = this.nuxt || this.$options.nuxt;
                                        return i.dateErr = Date.now(), i.err = e, t && (t.nuxt.error = e), e
                                    }
                                }
                            }, F), n.app = s, a = t ? t.next : function(e) {
                                return s.router.push(e)
                            }, t ? r = i.resolve(t.url).route : (c = Object(d.d)(i.options.base, i.options.mode), r = i.resolve(c).route), e.next = 11, Object(d.p)(s, {
                                store: n,
                                route: r,
                                next: a,
                                error: s.nuxt.error.bind(s),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 11:
                            if (h = function(e, t) {
                                    if (!e) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === t) throw new Error("inject(key, value) has no value provided");
                                    s[e = "$" + e] = t, n[e] = s[e];
                                    var i = "__nuxt_" + e + "_installed__";
                                    o.a[i] || (o.a[i] = !0, o.a.use((function() {
                                        Object.prototype.hasOwnProperty.call(o.a, e) || Object.defineProperty(o.a.prototype, e, {
                                            get: function() {
                                                return this.$root.$options[e]
                                            }
                                        })
                                    })))
                                }, window.__NUXT__ && window.__NUXT__.state && n.replaceState(window.__NUXT__.state), "function" != typeof ee) {
                                e.next = 16;
                                break
                            }
                            return e.next = 16, ee(s.context, h);
                        case 16:
                            e.next = 19;
                            break;
                        case 19:
                            if ("function" != typeof ne) {
                                e.next = 22;
                                break
                            }
                            return e.next = 22, ne(s.context, h);
                        case 22:
                            e.next = 25;
                            break;
                        case 25:
                            return e.abrupt("return", {
                                store: n,
                                app: s,
                                router: i
                            });
                        case 26:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, , , , function(e, t, i) {
        "use strict";
        (function(e) {
            i(39), i(31), i(25), i(19), i(32);
            var n = i(21),
                s = i(293),
                o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(5),
                l = i(12),
                u = i(92),
                d = i(42),
                p = i(208),
                f = i(209);

            function v(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(i), !0).forEach((function(t) {
                        Object(n.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var _ = function(e) {
                function t(e) {
                    var i, n = e.precision,
                        a = e.vertexShader,
                        h = e.fragmentShader,
                        u = e.alpha,
                        v = void 0 === u ? 1 : u,
                        _ = (e.fog, e.defines),
                        y = void 0 === _ ? {} : _,
                        b = e.data,
                        g = void 0 === b ? {} : b,
                        w = Object(s.a)(e, ["precision", "vertexShader", "fragmentShader", "alpha", "fog", "defines", "data"]);
                    return Object(o.a)(this, t), (i = Object(r.a)(this, Object(c.a)(t).call(this, w)))._world = l.a, i._precision = n, i._gui = d.a, i._vertexShader = null, i._fragmentShader = null, i.data = g, i.vertexShader = a || p.a, i.fragmentShader = h || f.a, i.uniforms = m({}, i.uniforms, {
                        uAlpha: {
                            value: v
                        },
                        uTime: l.a.uniforms.uTime
                    }), i.defines = m({}, y), i
                }
                return Object(h.a)(t, e), Object(a.a)(t, [{
                    key: "update",
                    value: function(e, t) {}
                }, {
                    key: "vertexShader",
                    get: function() {
                        return this._vertexShader
                    },
                    set: function(e) {
                        this._vertexShader = u.a.parse(e, u.a.VERTEX_SHADER, this.data, this.extensions, this._precision)
                    }
                }, {
                    key: "fragmentShader",
                    set: function(e) {
                        this._fragmentShader = u.a.parse(e, u.a.FRAGMENT_SHADER, this.data, this.extensions, this._precision)
                    },
                    get: function() {
                        return this._fragmentShader
                    }
                }, {
                    key: "alpha",
                    get: function() {
                        return this.uniforms.uAlpha.value
                    },
                    set: function(e) {
                        this.uniforms && (this.uniforms.uAlpha.value = e)
                    }
                }, {
                    key: "fog",
                    get: function() {
                        return this.defines.USE_FOG
                    },
                    set: function(e) {
                        var t = e.color,
                            i = e.distance,
                            n = e.height;
                        t && this.uniforms.uFogColor.value.set(t), i && (this.uniforms.uFogDistanceDensity.value = i.density), n && (this.uniforms.uFogHeightDensity.value = n.density, this.uniforms.uFogHeightPropagation.value = n.propagation, this.uniforms.uFogHeightOffset.value = n.offset, n.noise && (this.uniforms.uFogHeightNoise.value.x = n.noise.speed, this.uniforms.uFogHeightNoise.value.y = n.noise.frequency, this.uniforms.uFogHeightNoise.value.z = n.noise.amplitude, this.uniforms.uFogHeightNoise.value.w = n.noise.offset))
                    }
                }]), t
            }(e.RawShaderMaterial);
            t.a = _
        }).call(this, i(11))
    }, , function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s, o, a, r = i(2),
                c = i(3),
                h = i(7),
                l = i(6),
                u = i(0),
                d = (i(216), i(218), i(28)),
                p = i(13),
                f = Object(d.c)("CameraCtrl", "#f67280", !0),
                v = (a = o = function() {
                    function t(i) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        Object(r.a)(this, t), this._scene = i, this._cameras = [], this._currentCameraId = null, this._helpers = new e.Object3D, this._isPaused = !0, this._guiIsCreated = !1, this._useDebugCamera = n, n && this._createDebugCameras()
                    }
                    return Object(c.a)(t, [{
                        key: "createGUI",
                        value: function(e) {
                            this._pane = e
                        }
                    }, {
                        key: "initDebugUI",
                        value: function() {}
                    }, {
                        key: "addCamera",
                        value: function(e) {
                            this._cameras.push(e), this._checkDefaultCamera(e), this._createHelper(e)
                        }
                    }, {
                        key: "removeCamera",
                        value: function(e) {
                            this._cameras.splice(this._cameras.indexOf(e), 1), e.destroy()
                        }
                    }, {
                        key: "nextCamera",
                        value: function() {
                            var e = Object(l.e)(this._currentCameraId + 1, this._cameras.length);
                            this.changeCamera(e)
                        }
                    }, {
                        key: "previousCamera",
                        value: function() {
                            var e = Object(l.e)(this._currentCameraId - 1, this._cameras.length);
                            this.changeCamera(e)
                        }
                    }, {
                        key: "changeCamera",
                        value: function(e) {
                            var i = this._getCamera(this._currentCameraId);
                            i && (i.helper && (i.helper.visible = !0), i.controls && (i.controls.enabled = !1), i.stop()), this._currentCameraId = e;
                            var n = this._getCamera(e);
                            n.controls && (n.controls.enabled = !0), n.helper && (n.helper.visible = !1), n.start(), this._isPaused || (f("Camera changed from '".concat(i.name, "' to '").concat(n.name, "'")), u.b.emit(t.CHANGED, {
                                scene: this._scene,
                                camera: n
                            }))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._unbind();
                            for (var e = 0, t = this._cameras.length; e < t; e++) this._cameras[e].destroy();
                            this._cameras = null, this._currentCameraId = null
                        }
                    }, {
                        key: "start",
                        value: function() {
                            if (this._isPaused = !1, this._bind(), this._pane)
                                for (var e = 0, t = this._cameras.length; e < t; e++) this._cameras[e].createGUI(this._pane)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this._isPaused = !0, this._unbind()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            for (var i = 0, n = this._cameras.length; i < n; i++) this._cameras[i].update(e, t)
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            for (var i = 0, n = this._cameras.length; i < n; i++) this._cameras[i].setSize(e, t)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            this._useDebugCamera && u.d.addUp(this._onKeyUp)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            u.d.removeUp(this._onKeyUp)
                        }
                    }, {
                        key: "_checkDefaultCamera",
                        value: function(e) {
                            if (e.isDefault) {
                                var t = this._cameras.length - 1;
                                t !== this._currentCameraId && (this.changeCamera(t), e.helper && (e.helper.visible = !1))
                            }
                        }
                    }, {
                        key: "_createHelper",
                        value: function(e) {
                            e.helper && this._helpers.add(e.helper)
                        }
                    }, {
                        key: "_getCamera",
                        value: function(e) {
                            return this._cameras[e]
                        }
                    }, {
                        key: "_createDebugCameras",
                        value: function() {}
                    }, {
                        key: "_onKeyUp",
                        value: function(e, t) {
                            u.d.isDown("shift") && Object(p.b)("debug") && "c" === t && this.nextCamera()
                        }
                    }, {
                        key: "helpers",
                        get: function() {
                            return this._helpers
                        }
                    }, {
                        key: "camera",
                        get: function() {
                            return this._cameras[this._currentCameraId], this._cameras[this._currentCameraId]
                        }
                    }, {
                        key: "cameras",
                        get: function() {
                            return this._cameras
                        }
                    }, {
                        key: "currentCameraId",
                        get: function() {
                            return this._currentCameraId
                        }
                    }]), t
                }(), o.CHANGED = "CameraCtrl_changed", s = a, Object(h.a)(s.prototype, "_onKeyUp", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onKeyUp"), s.prototype), s);
            t.a = v
        }).call(this, i(11), i(20).bind)
    }, , , , , , function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return n
        }));
        i(106);

        function n(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
    }, , , , , , function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(3),
            o = i(130),
            a = i.n(o),
            r = function() {
                function e() {
                    Object(n.a)(this, e), this._listeners = [], this._binded = !1, this._raf = null
                }
                return Object(s.a)(e, [{
                    key: "bind",
                    value: function() {
                        !0 !== this._binded && (this._binded = !0, this._update = this._update.bind(this), this._baseTime = Date.now(), this._raf = a()(this._update))
                    }
                }, {
                    key: "unbind",
                    value: function() {
                        this._binded = !1, null !== this._raf && (a.a.cancel(this._raf), this._raf = null), this._listeners = []
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if ("function" == typeof e) {
                            var s = new Date,
                                o = {
                                    id: this._listeners.length,
                                    callback: e,
                                    fps: t,
                                    delay: i,
                                    once: n,
                                    deltaTargeted: 1e3 / t,
                                    lastTime: s.getTime()
                                };
                            return this._listeners.push(o), this._binded || this.bind(), o
                        }
                    }
                }, {
                    key: "addOnce",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.add(e, t, i, !0)
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        if ("function" == typeof e)
                            for (var t = 0, i = this._listeners.length; t < i; t++)
                                if (this._listeners[t].callback === e) {
                                    this._listeners.splice(t, 1);
                                    break
                                }
                    }
                }, {
                    key: "_update",
                    value: function() {
                        for (var e = Date.now(), t = e - this._baseTime, i = 0; i < this._listeners.length; i++) {
                            var n = this._listeners[i],
                                s = e - n.lastTime;
                            s < n.deltaTargeted && n.fps < 60 || (60 === n.fps && s < n.deltaTargeted - 4 || (n.lastTime = e, n.delay > 0 && t < n.delay || (n.callback(s, t, e), n.once && this.remove(n.callback))))
                        }
                        this._binded && a()(this._update)
                    }
                }]), e
            }();
        t.a = new r
    }, function(e, t, i) {
        "use strict";
        i(39), i(31), i(25), i(19), i(32);
        var n = i(21),
            s = i(2),
            o = i(3),
            a = i(4),
            r = i(1),
            c = i(5),
            h = i(12),
            l = i(61),
            u = i(16),
            d = i(120);

        function p(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }
        var f = function(e) {
            function t(e, i) {
                var o;
                Object(s.a)(this, t);
                var c = i.vertexShader || u.a,
                    l = i.fragmentShader || d.a;
                return (o = Object(a.a)(this, Object(r.a)(t).call(this, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(i), !0).forEach((function(t) {
                            Object(n.a)(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }({
                    vertexShader: c,
                    fragmentShader: l
                }, i)))).uniforms = {
                    tDiffuse1: e.tDiffuse1,
                    tDiffuse2: e.tDiffuse2,
                    uProgress: e.progress,
                    tRetina: {
                        value: null
                    },
                    uTime: h.a.uniforms.uTime
                }, o
            }
            return Object(c.a)(t, e), Object(o.a)(t, [{
                key: "update",
                value: function(e, t) {}
            }]), t
        }(l.a);
        t.a = f
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\n#define SHADER_NAME Quad\nattribute vec3 position;\nattribute vec2 uv;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 1.0);\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18), i(19);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(12),
                l = i(214),
                u = i(295),
                d = i(29),
                p = i(0),
                f = i(69),
                v = i(13),
                m = i(215),
                _ = i(123),
                y = i(225),
                b = i(63),
                g = i(42),
                w = function(t) {
                    function i(t, o) {
                        var c;
                        return Object(s.a)(this, i), (c = Object(a.a)(this, Object(r.a)(i).call(this))).physicsEnabled = o.physics, c.postProcessingEnabled = o.postProcessing, c.noBatcher = o.noBatcher, c.isRtScene = o.rtScene, c.ready = Promise.create(), c._name = t, c._world = h.a, c._loader = d.a, c._textures = _.a, c._useDebugCamera = void 0 === o.debugCamera || o.debugCamera, c.isRtScene && (c._useDebugCamera = !1), c._size = new e.Vector2, c._gui = g.a, c.folders = {}, c._tls = [], c._entities = [], c._lights = [], c._events = {}, c._running = !1, c._paused = !1, c._renderer = h.a.renderer, c.physicsEnabled && (c._physicRenderVisible = !1, c.engine = n.Engine.create({
                            enableSleeping: !1
                        }), c.pWorld = c.engine.world, c.engine.constraintIterations = 2, c.engine.positionIterations = 6, c.engine.velocityIterations = 4, c._pContainerEl = document.body.querySelector(".gl-physics"), c._pRenderCanvas = document.createElement("canvas"), c._pRenderCanvas.width = window.innerWidth, c._pRenderCanvas.height = window.innerHeight, Object(v.b)("debug") && (c._pContainerEl.appendChild(c._pRenderCanvas), c.pRender = n.Render.create({
                            element: c._pContainerEl,
                            engine: c.engine,
                            canvas: c._pRenderCanvas,
                            options: {
                                width: window.innerWidth,
                                height: window.innerHeight,
                                pixelRatio: 1,
                                background: "#fafafa",
                                wireframeBackground: "#222",
                                hasBounds: !0,
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showBroadphase: !1,
                                showBounds: !0,
                                showVelocity: !1,
                                showCollisions: !1,
                                showSeparations: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showShadows: !1,
                                showVertexNumbers: !1,
                                showConvexHulls: !1,
                                showInternalEdges: !1,
                                showMousePosition: !1
                            }
                        }), c.pRender.options.hasBounds = !0), n.Events.on(c.engine, "beforeUpdate", c._onBeforePhysics), n.Events.on(c.engine, "afterUpdate", c._onAfterPhysics)), c._initGUI(), c._createStack(), c._bind(), c._init(), c
                    }
                    return Object(c.a)(i, t), Object(o.a)(i, [{
                        key: "create",
                        value: function() {
                            var e = this._stack.getAll();
                            if (this.noBatcher) {
                                for (var t = 0, i = e.length; t < i; t++) e[t]();
                                return Promise.resolve()
                            }
                            return this._batcher = new l.a(e), this._batcher.execute()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this;
                            return this._running = !1, this._unbind(), this._destroyTls(), this._destroyGUI(), this._destroyAudios(), this._cameraCtrl.destroy(), setTimeout((function() {
                                e._postProcessing.destroy();
                                for (var t = function(t, i) {
                                        e._entities[t].destroy && setTimeout((function() {
                                            e._entities[t].destroy()
                                        }), 30 * t)
                                    }, i = 0, n = e._entities.length; i < n; i++) t(i)
                            }), 2e3), Promise.resolve()
                        }
                    }, {
                        key: "start",
                        value: function() {
                            return this._running = !0, this._cameraCtrl.start(), Promise.resolve()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            return this._cameraCtrl.pause(), Promise.resolve()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this._running && (this._cameraCtrl.update(e, t), this._onUpdate(e, t), this._postProcessing.update(e, t))
                        }
                    }, {
                        key: "addEntity",
                        value: function(e, t) {
                            this._entities.push(e), this.add(t || e), e.composite || (e.bodies ? this.addBody(e.bodies) : e.body && this.addBody(e.body), e.constraints && (e.createConstraints ? e.createConstraints() : this.addConstraint(e.constraints)), this.addPhysicsDeep(e))
                        }
                    }, {
                        key: "addPhysicsDeep",
                        value: function(e) {
                            var t = this;
                            e._entities && e._entities.forEach((function(e) {
                                if (e.bodies) {
                                    t.addBody(e.bodies);
                                    for (var i = 0, n = e.bodies.length; i < n; i++) e.bodies[i].sleepThreshold = 1e12
                                } else e.body && (t.addBody(e.body), e.body.sleepThreshold = 1e12);
                                e.constraints && t.addConstraint(e.constraints), e._entities && t.addPhysicsDeep(e)
                            }))
                        }
                    }, {
                        key: "addConstraint",
                        value: function(e) {
                            var t = this;
                            e.length ? e.forEach((function(e) {
                                n.World.add(t.engine.world, e)
                            })) : n.World.add(this.engine.world, e)
                        }
                    }, {
                        key: "addCamera",
                        value: function(e) {
                            this._cameraCtrl.addCamera(e)
                        }
                    }, {
                        key: "addLight",
                        value: function(e, t) {
                            t && (e.name = t), this._lights.push(e), this.add(e)
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            this._size.set(e, t), this._cameraCtrl && this._cameraCtrl.setSize(e, t), this._postProcessing && this._postProcessing.setSize(e, t)
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function(e) {
                            for (var t = 0, i = this._entities.length; t < i; t++) {
                                var n = this._entities[t];
                                n && n.onSwapLeave && n.onSwapLeave(e)
                            }
                        }
                    }, {
                        key: "onSwap",
                        value: function(e) {
                            for (var t = 0, i = this._entities.length; t < i; t++) {
                                var n = this._entities[t];
                                n && n.onSwap && n.onSwap(e)
                            }
                        }
                    }, {
                        key: "_init",
                        value: function() {}
                    }, {
                        key: "_initGUI",
                        value: function() {
                            if (!this.isRtScene) {
                                this.paneName = Object(f.a)(this.name) + " Scene";
                                var e = g.a.create(this.paneName);
                                if (e) {
                                    this.pane = e;
                                    var t = e.addFolder({
                                        title: "🛠 Debug",
                                        expanded: !1
                                    });
                                    t.addButton({
                                        title: "Export scene config (copy paste me)"
                                    }).on("click", (function() {
                                        g.a.export()
                                    }));
                                    this.folders = {
                                        debug: t
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "_unbind",
                        value: function() {}
                    }, {
                        key: "_onUpdate",
                        value: function(e, t) {}
                    }, {
                        key: "_createStack",
                        value: function() {
                            var e = this;
                            this._stack = new u.a;
                            ["ctrls", "cameras", "postProcessing", "audios", "entities", "lights", "GUI"].forEach((function(t) {
                                e._stack.add(t, (function() {
                                    return e["_create".concat(Object(f.a)(t))]()
                                }))
                            })), this._stack.add("afterCreate", (function() {
                                e._afterCreate(), e.ready.resolve()
                            }))
                        }
                    }, {
                        key: "_createCtrls",
                        value: function() {
                            this._cameraCtrl = new b.a(this, this._useDebugCamera), this.add(this._cameraCtrl.helpers)
                        }
                    }, {
                        key: "_createCameras",
                        value: function() {}
                    }, {
                        key: "_createPostProcessing",
                        value: function() {
                            this._postProcessing = new m.a(this, this.camera, this.postProcessingEnabled), this.postProcessingEnabled && (this._renderPass = new y.a(this, this.camera), this._postProcessing.addPass(this._renderPass), this._renderPass.renderToScreen = !1)
                        }
                    }, {
                        key: "_createEnvironment",
                        value: function() {}
                    }, {
                        key: "_createAudios",
                        value: function() {}
                    }, {
                        key: "_createEntities",
                        value: function() {}
                    }, {
                        key: "_createLights",
                        value: function() {}
                    }, {
                        key: "_createGUI",
                        value: function() {
                            var e = this;
                            this.pane && (this._cameraCtrl.createGUI(this.pane), this._lights.length && Object(v.b)("lights") ? this._createLightsGUI() : this._lights.length && this.folders.debug.addButton({
                                title: "Add lights debug"
                            }).on("click", (function() {
                                e._createLightsGUI()
                            })))
                        }
                    }, {
                        key: "_createLightsGUI",
                        value: function() {
                            if (!this._lightsGUICreated) {
                                this._lightsGUICreated = !0;
                                for (var t = 0, i = this._lights.length; t < i; t++) {
                                    var n = this._lights[t],
                                        s = this.pane.addFolder({
                                            title: "💡 ".concat(Object(f.a)(n.name), " light")
                                        });
                                    s.expanded = !1, s.addInput(n, "intensity", {
                                        min: 0,
                                        max: 1,
                                        step: .01
                                    }), s.addInput(n, "color"), n instanceof e.DirectionalLight && (n.helper = new e.DirectionalLightHelper(n, 5), this.add(n.helper), s.addSeparator(), this._gui.addVec(s, n.position, {
                                        label: "position",
                                        min: -100,
                                        max: 100,
                                        step: .1
                                    }), s.addSeparator(), this._gui.addVec(s, n.rotation, {
                                        label: "rotation",
                                        min: -Math.PI,
                                        max: Math.PI,
                                        step: .01
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "_afterCreate",
                        value: function() {}
                    }, {
                        key: "_destroyGUI",
                        value: function() {
                            g.a.destroy(this.paneName || this.name)
                        }
                    }, {
                        key: "_destroyAudios",
                        value: function() {}
                    }, {
                        key: "_destroyTls",
                        value: function() {
                            for (var e = 0, t = this._tls.length; e < t; e++) this._tls[e] && (this._tls[e].kill(), this._tls[e].clear())
                        }
                    }, {
                        key: "addBody",
                        value: function(e) {
                            n.World.add(this.engine.world, e)
                        }
                    }, {
                        key: "_updatePhysics",
                        value: function(e, t) {
                            var i = this.camera.position.x,
                                s = -this.camera.position.y;
                            this.engine && n.Engine.update(this.engine, 1e3 / 60), this.pRender && n.Render.lookAt(this.pRender, {
                                bounds: {
                                    min: {
                                        x: i,
                                        y: s
                                    },
                                    max: {
                                        x: i + p.h.width,
                                        y: s + p.h.height
                                    }
                                },
                                min: {
                                    x: i,
                                    y: s
                                },
                                max: {
                                    x: i + p.h.width,
                                    y: s + p.h.height
                                }
                            })
                        }
                    }, {
                        key: "_togglePhysicRender",
                        value: function() {
                            this.pRender && (this._physicRenderVisible = !this._physicRenderVisible, this._physicRenderVisible ? n.Render.run(this.pRender) : n.Render.stop(this.pRender), this._pContainerEl.classList.toggle("is-active", this._physicRenderVisible))
                        }
                    }, {
                        key: "_onBeforePhysics",
                        value: function() {}
                    }, {
                        key: "_onAfterPhysics",
                        value: function() {}
                    }, {
                        key: "name",
                        get: function() {
                            return this._name
                        },
                        set: function(e) {
                            this._name = e
                        }
                    }, {
                        key: "running",
                        get: function() {
                            return this._running
                        },
                        set: function(e) {
                            this._running = e
                        }
                    }, {
                        key: "paused",
                        get: function() {
                            return this._paused
                        },
                        set: function(e) {
                            this._paused = e
                        }
                    }, {
                        key: "camera",
                        get: function() {
                            return this._cameraCtrl.camera
                        }
                    }, {
                        key: "postProcessing",
                        get: function() {
                            return this._postProcessing
                        }
                    }, {
                        key: "rtt",
                        get: function() {
                            return this._postProcessing.rtt
                        }
                    }]), i
                }(e.Scene);
            t.a = w
        }).call(this, i(11), i(23))
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s, o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(8),
                l = i(5),
                u = i(7),
                d = i(0),
                p = (s = function(t) {
                    function i(e) {
                        var t, n = e.left,
                            s = void 0 === n ? 0 : n,
                            a = e.right,
                            h = void 0 === a ? d.h.width : a,
                            l = e.top,
                            u = void 0 === l ? 0 : l,
                            p = e.bottom,
                            f = void 0 === p ? d.h.height : p,
                            v = e.near,
                            m = void 0 === v ? 0 : v,
                            _ = e.far,
                            y = void 0 === _ ? 1e3 : _,
                            b = e.name,
                            g = void 0 === b ? "UICamera" : b,
                            w = e.isDefault,
                            x = void 0 !== w && w;
                        return Object(o.a)(this, i), (t = Object(r.a)(this, Object(c.a)(i).call(this, s, h, u, f, m, y))).name = g, t.isDefault = x, t._gui = d.c, t._guiIsCreated = !1, t._helper = null, t._bind(), t._createHelper(), t
                    }
                    return Object(l.a)(i, t), Object(a.a)(i, [{
                        key: "createGUI",
                        value: function(e) {
                            var t = this,
                                i = e.addFolder({
                                    title: "".concat(this.isDefault ? "📸" : "📷", " ").concat(this.name)
                                });
                            return i.expanded = !1, i.addInput(this, "near", {
                                min: 1,
                                max: 5e3,
                                step: 1
                            }).on("change", (function(e) {
                                t.updateProjectionMatrix()
                            })), i.addInput(this, "far", {
                                min: 1,
                                max: 8e3,
                                step: 1
                            }).on("change", (function(e) {
                                t.updateProjectionMatrix()
                            })), i.addSeparator(), this._gui.addVec(i, this.position, {
                                label: "position",
                                step: .1,
                                min: -100,
                                max: 100
                            }), i.addSeparator(), this._gui.addVec(i, this.rotation, {
                                label: "rotation",
                                tep: .01,
                                min: 2 * -Math.PI,
                                max: 2 * Math.PI
                            }), i
                        }
                    }, {
                        key: "start",
                        value: function() {}
                    }, {
                        key: "stop",
                        value: function() {}
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this._helper && this._helper.visible && (this.updateMatrixWorld(), this._helper.update())
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            Object(h.a)(Object(c.a)(i.prototype), "remove", this).call(this), this._unbind(), this._destroyHelper()
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            this.left = 0, this.right = e, this.top = 0, this.bottom = -t, this.updateProjectionMatrix()
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            d.d.addDown(this._onKeyDown)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            d.d.removeDown(this._onKeyDown)
                        }
                    }, {
                        key: "_onResize",
                        value: function(e, t) {
                            this.setSize(e, t)
                        }
                    }, {
                        key: "_onKeyDown",
                        value: function(e, t) {}
                    }, {
                        key: "_createHelper",
                        value: function() {
                            this._helper = new e.CameraHelper(this), this._helper.name = "CameraHelper", this._helper.material.fog = !1
                        }
                    }, {
                        key: "_destroyHelper",
                        value: function() {
                            this._helper && this._helper.remove()
                        }
                    }, {
                        key: "helper",
                        get: function() {
                            return this._helper
                        }
                    }]), i
                }(e.OrthographicCamera), Object(u.a)(s.prototype, "_onResize", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onResize"), s.prototype), Object(u.a)(s.prototype, "_onKeyDown", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onKeyDown"), s.prototype), s);
            t.a = p
        }).call(this, i(11), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(55), i(110);
            var o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(5),
                l = i(10),
                u = i(0),
                d = i(6),
                p = e,
                f = p.Bodies,
                v = p.Body,
                m = p.Constraint,
                _ = new n.Vector2,
                y = new n.Vector2,
                b = function(e) {
                    function t(e, i, s) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(r.a)(this, Object(c.a)(t).call(this, e))).progress = 0, a.options = i, a.mobile = i.mobile, a._isSmall = i.small || i.data.isSmall, a._parent = i.parent, a._composite = i.composite, a._parentShape = i.parentShape, a._attrUpdate = !1, a._config = s, a._distCoef = i.data && i.data.distCoef ? i.data.distCoef : 1, a._align = i.data && i.data.align ? i.data.align : "center", a._isStatic = !(!i.data || !i.data.static), a._coef = i.data && i.data.coef ? i.data.coef : 1, a._fixedPos = i.data.fixedPos, a._power = 0, a._angle = i.data.angle || 0, a._baseAngle = a._angle, a._angleSpeed = Object(d.f)(.01, .3), a._defs = 20, a._mouse = i.mouse || a._world.mouse, a._prevMouse = new n.Vector2, a._mousePos = new n.Vector2, a._index = i.index || 0, a._total = i.total || 1, a._data = i.data || {}, a._speed = a._data.speed || Object(d.f)(0, .1), a._canAnimate = !0, a._size = a._data.size || 100, a._fixedSize = a._data.fixedSize, a.isRight = a._data.right, a._pos = a._data.position || {
                            x: 0,
                            y: 0
                        }, a
                    }
                    return Object(h.a)(t, e), Object(a.a)(t, [{
                        key: "_prepareGeom",
                        value: function() {
                            this._color = this._data.color || "#053D62", this._geometry = new n.PlaneBufferGeometry(1, 1, this._defs, this._defs);
                            var e = new Float32Array(2 * this._geometry.attributes.position.count);
                            this._geometry.setAttribute("offset", new n.BufferAttribute(e, 2)), this._geom2 = this._geometry.clone(), this._nb = this._geometry.attributes.position.count, this._geometry.springs = [];
                            for (var t = 0, i = this._nb; t < i; t++) this._geometry.springs.push(new n.Vector2)
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {}
                    }, {
                        key: "_initBody",
                        value: function() {
                            this._isStatic ? this.body = f.circle(0, 0, 1, {
                                isStatic: !0
                            }) : this.body = f.circle(0, 0, 1), this.body.collisionFilter.mask = this._world.pGroups[4], this._addBody(this.body, this._composite)
                        }
                    }, {
                        key: "createConstraints",
                        value: function() {
                            if (!this.mobile) {
                                this._removeConstraints(this._composite), this.constraints = [];
                                var e, t = Object(d.d)(this.progress, -1, 1, -this._parralaxOffset, this._parralaxOffset, !0);
                                e = u.a.isMobile ? m.create({
                                    bodyA: this.body,
                                    pointB: {
                                        x: this.body.position.x,
                                        y: this.body.position.y + t
                                    },
                                    length: this._config.length,
                                    stiffness: this._config.stiffness,
                                    damping: this._config.damping
                                }) : m.create({
                                    bodyA: this.body,
                                    pointB: {
                                        x: this.body.position.x + t,
                                        y: this.body.position.y
                                    },
                                    length: this._config.length,
                                    stiffness: this._config.stiffness,
                                    damping: this._config.damping
                                }), this.body.constraint = e, this._addConstraint(e, this._composite);
                                var i = m.create({
                                    bodyA: this.body,
                                    bodyB: this.body,
                                    angleAStiffness: .045,
                                    angleAMin: -0,
                                    angleAMax: 0
                                });
                                this._addConstraint(i, this._composite)
                            }
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.h.width,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.h.height;
                            this.body && !this.body.basePos && (this.body.basePos = new n.Vector2), this.mesh.basePos || (this.mesh.basePos = new n.Vector3), e || (e = this._width, t = this._height), this.mesh.baseScale.setScalar(this._fixedSize || e * this._size), this.isAnimating || this.mesh.scale.copy(this.mesh.baseScale), this.body && this._scaleBody(this.body, this.mesh.baseScale.x / 2, this.mesh.baseScale.y / 2), this._width = e, this._height = t, this.body ? (this._parentShape ? (this.body.basePos.x = this._parentShape.body.basePos.x + this._pos.x * this._parentShape.mesh.baseScale.x, this.body.basePos.y = this._parentShape.body.basePos.y + this._pos.y * this._parentShape.mesh.baseScale.y) : this._fixedPos ? (this.body.basePos.x = this._fixedPos.x + this.xOffset, this.body.basePos.y = this._fixedPos.y) : (this.body.basePos.x = this._pos.x * e + this.xOffset, this.body.basePos.y = this.fixedY || this._pos.y * t), "top" === this._align && (this.body.basePos.y += this.mesh.baseScale.y / 2), v.setPosition(this.body, {
                                x: this.body.basePos.x,
                                y: this.body.basePos.y
                            })) : (this.mesh.position.x = this.mesh.basePos.x, this.mesh.position.y = this.mesh.basePos.y), this.syncSprings(), this._parralaxOffset = e * this._speed / 2, this.createConstraints()
                        }
                    }, {
                        key: "syncSprings",
                        value: function() {
                            this.body && (this._config.distGlobal.value = this._config.dist.value * u.h.width, this._angle && u.a.isDesktop && v.setAngle(this.body, this._angle), this.body && this._sync(this.mesh, this.body), this._geom2.attributes.position.copyArray(this._geometry.attributes.position.array), this.mesh.updateMatrix(), this._geom2.applyMatrix(this.mesh.matrix))
                        }
                    }, {
                        key: "animateIn",
                        value: function() {
                            if (this._canAnimate) {
                                this._isVisible = !0;
                                var e = this.mesh.baseScale,
                                    t = e.x,
                                    i = e.y,
                                    n = e.z;
                                s.set(this.mesh.scale, {
                                    x: .1,
                                    y: .1,
                                    z: .1
                                });
                                var o = u.i.scroll.dir >= 0 ? .3 * this._index + .2 : .3 * (this._total - 1) - .3 * this._index + .2;
                                o += this._isSmall ? .2 : 0, s.to(this.mesh.scale, {
                                    x: t,
                                    y: i,
                                    z: n,
                                    ease: "expo.out",
                                    duration: 1.6,
                                    delay: o
                                }), s.to(this, {
                                    _power: 1,
                                    delay: o + .2,
                                    duration: .8
                                }), this._canAnimate = !1
                            }
                        }
                    }, {
                        key: "animateOut",
                        value: function() {
                            var e = this;
                            clearTimeout(this._animateTO), this._isVisible = !1, s.to(this, {
                                _power: 0,
                                duration: .3
                            }), this._animateTO = this.delayedCall((function() {
                                e._canAnimate = !0
                            }), 3e3)
                        }
                    }, {
                        key: "update",
                        value: function(e, t, i) {
                            if (!this._parent || this._parent.isVisible || this.mobile) {
                                this.progress = i, this.body && u.a.isDesktop && this._angle && (this._angle = Object(d.d)(this.progress, -1, 1, this._baseAngle - 2 * this._angleSpeed, this._baseAngle + 2 * this._angleSpeed, !0), v.setAngle(this.body, this._angle));
                                var n = 0;
                                this.body && !this.mobile ? (this._sync(this.mesh, this.body), u.a.isDesktop ? (n = Object(d.d)(this.progress, 1, -1, -this._parralaxOffset, this._parralaxOffset, !0), this.body.constraint.pointB.x = this.body.basePos.x + n, this._isStatic && v.setPosition(this.body, {
                                    x: this.body.basePos.x + n,
                                    y: this.body.basePos.y
                                })) : (n = Object(d.d)(this.progress, 1, -1, -this._parralaxOffset, this._parralaxOffset, !0), this.body.constraint.pointB.y = this.body.basePos.y + n)) : (n = Object(d.d)(this.progress, 1, -1, -this._parralaxOffset, this._parralaxOffset, !0), this.body.position.y = this.body.basePos.y + n, this._angle && v.setAngle(this.body, Object(d.d)(this.progress, 1, -1, this._angle - 1 * this._speed, this._angle + 1 * this._speed, !0)), this._sync(this.mesh, this.body)), this.updateSpring(e, t, n)
                            }
                        }
                    }, {
                        key: "updateSpring",
                        value: function(e, t, i) {
                            var n = this,
                                s = this._config;
                            this._prevMouse.copy(this._mousePos), this._mousePos.x = this._mouse.mesh.position.x, this._mousePos.y = this._mouse.mesh.position.y;
                            for (var o = s.springCoef.value, a = s.springLerp.value, r = !1, c = this._geom2.attributes, h = c.position.array, l = this._geometry.attributes.offset, p = u.a.isMobile ? 0 : i, f = u.a.isMobile ? i : 0, v = 0, m = c.position.count; v < m; v++) {
                                var b = h[3 * v] + p,
                                    g = h[3 * v + 1] + f,
                                    w = this._geometry.springs[v];
                                _.set(b, g), y.set(this._mousePos.x, this._mousePos.y);
                                var x = _.distanceTo(y),
                                    O = _.set(b - this._mousePos.x, g - this._mousePos.y),
                                    k = Object(d.d)(x, 0, s.distGlobal.value * this._distCoef, 1, 0, !0),
                                    j = l.array[2 * v + 0],
                                    S = l.array[2 * v + 1],
                                    C = 0,
                                    P = 0;
                                if (x < s.distGlobal.value * this._distCoef) {
                                    var M = Object(d.d)(this.mesh.scale.x, 0, this.mesh.baseScale.x, .5, 1, !0);
                                    C = O.x * s.coef.value * k * this._coef * M, P = O.y * s.coef.value * k * this._coef * M, r = !0
                                }
                                w.x = Object(d.c)(w.x, (C - j) * o, a), w.y = Object(d.c)(w.y, (P - S) * o, a), l.array[2 * v + 0] += w.x, l.array[2 * v + 1] += w.y
                            }
                            r && (this._attrUpdate = !0, clearTimeout(this._attrTo), this._attrTo = setTimeout((function() {
                                n._attrUpdate = !1
                            }), 1e3)), l.needsUpdate = this._attrUpdate
                        }
                    }]), t
                }(l.a);
            t.a = b
        }).call(this, i(23), i(11), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec2 offset;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);\n\n  mvPos.x += offset.x;\n  mvPos.y += offset.y;\n  gl_Position = projectionMatrix * mvPos;\n}\n"
    }, , , , , function(e, t, i) {
        "use strict";
        var n = i(119),
            s = i(213),
            o = i(275),
            a = i(286);
        t.a = {
            home: s.a,
            about: o.a,
            loader: a.a,
            render: n.a
        }
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(18);
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(5),
                c = i(10),
                h = i(0),
                l = e,
                u = l.Bodies,
                d = l.Body,
                p = function(e) {
                    function t(e, i) {
                        var s;
                        return Object(n.a)(this, t), (s = Object(o.a)(this, Object(a.a)(t).call(this, e))).size = i.size || 1, s.name = "groud", s._isCeiling = i.ceiling, s._isHome = i.isHome, s._initMesh(), s._initBody(), s
                    }
                    return Object(r.a)(t, e), Object(s.a)(t, [{
                        key: "_initBody",
                        value: function() {
                            this.body = u.rectangle(h.h.width / 2, h.h.height, 1, 1, {
                                isStatic: !0
                            }), this.body.scale = {
                                x: 1,
                                y: 1
                            }, this.body.restitution = .9, this.body.collisionFilter.category = this._world.pGroups[0], this.body.collisionFilter.mask = this._world.pGroups[0]
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            d.scale(this.body, 1 / this.body.scale.x, 1 / this.body.scale.y), this.body.scale.x = this.fixedSize || h.h.width * this.size;
                            var i = this.fixedSize ? 0 : 2 * h.h.width;
                            this.body.scale.y = 500;
                            var n = !1;
                            this._isHome && h.a.isMobile && (n = !0, this.body.scale.y = 100), d.scale(this.body, this.body.scale.x, this.body.scale.y);
                            var s = this._isCeiling ? -220 : 220 + h.h.height;
                            this._isHome && (s = 250 + h.h.height), n && (s = h.h.height + 50), d.setPosition(this.body, {
                                x: .5 * this.body.scale.x - i,
                                y: s
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {}
                    }]), t
                }(c.a);
            t.a = p
        }).call(this, i(23))
    }, , , , , function(e, t, i) {
        "use strict";
        i(25), i(19), i(32), i(85), i(18);
        var n = i(2),
            s = i(3),
            o = i(12),
            a = {
                common: "#define GLSLIFY 1\n#define PI 3.14159265359\n#define RECIPROCAL_PI 0.31830988618\n#define LOG2 1.442695\n",
                map: "#define GLSLIFY 1\nfloat map(float oldVal, float oldMin, float oldMax, float newMin, float newMax) {\n  float old = oldMax - oldMin;\n  float new = newMax - newMin;\n  return (((oldVal - oldMin) * new) / old) + newMin;\n}",
                cmap: "#define GLSLIFY 1\n// import map chunk\n\nfloat map(float oldVal, float oldMin, float oldMax, float newMin, float newMax) {\n  float old = oldMax - oldMin;\n  float new = newMax - newMin;\n  return (((oldVal - oldMin) * new) / old) + newMin;\n}\n\nfloat cmap(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {\n  return clamp(map(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));\n}\n\n",
                aastep: "#define GLSLIFY 1\n// import aastep\nfloat aastep(float threshold, float value) {\n  #ifdef GL_OES_standard_derivatives\n    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;\n    return smoothstep(threshold-afwidth, threshold+afwidth, value);\n  #else\n    return step(threshold, value);\n  #endif  \n}",
                circle: "#define GLSLIFY 1\n// import circle\nfloat circle(vec2 st, float radius) {\n    return aastep(radius, length(st - vec2(0.5)));\n}\n",
                rectangle: "#define GLSLIFY 1\n// import rectangle\nfloat rectangle(vec2 st, vec2 size) {\n    size = vec2(0.5) - size * 0.5;\n    vec2 uv = vec2(aastep(size.x, st.x), aastep(size.y, st.y));\n    uv *= vec2(aastep(size.x, 1.0 - st.x), aastep(size.y, 1.0 - st.y));\n\n    return uv.x * uv.y;\n}",
                polygon: "#define GLSLIFY 1\n// import polygon\nfloat polygon(vec2 st, float radius, float sides) {\n    st = st * 2.0 - 1.0;\n    float angle = atan(st.x,st.y) + 3.1415926535897932384626433832795;\n    float slice = 3.1415926535897932384626433832795 * 2. / sides;\n\n    return aastep(radius, cos(floor(0.5 + angle / slice ) * slice - angle) * length(st));\n}",
                luma: "#define GLSLIFY 1\n// import luma chunk\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}",
                rotateUV: "#define GLSLIFY 1\n// Import rotate chunk\nvec2 rotateUV(vec2 uv, float rot, vec2 origin) {\n    vec3 u = vec3(uv, 1.0);\n\n    mat3 mo1 = mat3(\n        1, 0, -origin.x,\n        0, 1, -origin.y,\n        0, 0, 1);\n\n    mat3 mo2 = mat3(\n        1, 0, origin.x,\n        0, 1, origin.y,\n        0, 0, 1);\n\n    mat3 mr = mat3(\n        cos(rot), sin(rot), 0,\n        -sin(rot), cos(rot), 0,\n        0, 0, 1);\n\n    u = u * mo1;\n    u = u * mr;\n    u = u * mo2;\n\n    return u.xy;\n}\n\nvec2 rotateUV(vec2 uv, float rot) {\n    return rotateUV(uv, rot, vec2(0.5));\n}\n",
                scaleUV: "#define GLSLIFY 1\n// Import scale chunk\nvec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {\n    vec3 u = vec3(uv, 1.0);\n\n    mat3 mo1 = mat3(\n        1, 0, -origin.x,\n        0, 1, -origin.y,\n        0, 0, 1);\n\n    mat3 mo2 = mat3(\n        1, 0, origin.x,\n        0, 1, origin.y,\n        0, 0, 1);\n\n    mat3 ms = mat3(\n        1.0 / scale.x, 0, 0,\n        0, 1.0 / scale.y, 0,\n        0, 0, 1);\n\n    u = u * mo1;\n    u = u * ms;\n    u = u * mo2;\n    return u.xy;\n}\n\nvec2 scaleUV(vec2 uv, vec2 scale) {\n    return scaleUV(uv, scale, vec2(0.5));\n}",
                translateUV: "#define GLSLIFY 1\n// import translateUV\nvec2 translateUV(vec2 uv, vec2 translate) {\n    vec3 u = vec3(uv, 1.0);\n    mat3 mt = mat3(\n        1, 0, -translate.x,\n        0, 1, -translate.y,\n        0, 0, 1);\n\n    u = u * mt;\n    return u.xy;\n}",
                random: "#define GLSLIFY 1\nfloat random(vec2 n, float offset) {\n  return 0.5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233))) * 43758.5453);\n}"
            },
            r = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(s.a)(e, [{
                    key: "parse",
                    value: function(e, t) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                        s = s || o.a.renderer.capabilities.precision;
                        var a = this._getExtensions(n, t),
                            r = this._parseChunks(e, i);
                        return "\n      ".concat(a.join(" "), "\n      ").concat(this._getPrecison(s), "\n      ").concat(r, "\n    ")
                    }
                }, {
                    key: "_getExtensions",
                    value: function(e, t) {
                        var i = [];
                        for (var n in e) {
                            if (e[n]) {
                                var s = c[n];
                                if (s.type === t) {
                                    var o = "#extension ".concat(s.name, " : require");
                                    i.push(o)
                                }
                            }
                        }
                        return i
                    }
                }, {
                    key: "_getPrecison",
                    value: function(e) {
                        return "\n      precision ".concat(e, " float;\n      precision ").concat(e, " int;\n    ")
                    }
                }, {
                    key: "_parseChunks",
                    value: function(t) {
                        for (var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.CHUNK_REGEX, s = this._parseTemplate(t, i), o = null; null !== (o = n.exec(s));)
                            if (o.index === n.lastIndex && n.lastIndex++, "/" !== o.input[o.index - 2]) {
                                var r = o[0],
                                    c = o[1],
                                    h = this._parseChunks(a[c], i);
                                if (void 0 === h) throw new Error("[ShaderParser] Shader chunk '".concat(c, "' not found!"));
                                s = this._parseTemplate(s.replace(r, h))
                            }
                        return s
                    }
                }, {
                    key: "_parseTemplate",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = e;
                        return Object.keys(t).length, i
                    }
                }]), e
            }();
        r.VERTEX_SHADER = 0, r.FRAGMENT_SHADER = 1, r.CHUNK_REGEX = /@import\s(.*[a-z])/gi;
        var c = {
            drawBuffers: {
                name: "GL_EXT_draw_buffers",
                type: r.FRAGMENT_SHADER
            },
            derivatives: {
                name: "GL_OES_standard_derivatives",
                type: r.FRAGMENT_SHADER
            }
        };
        t.a = new r
    }, function(e, t, i) {
        "use strict";
        var n = {
            about: {
                awwwwards: {
                    year: 1,
                    month: 5,
                    day: 20,
                    dev: 14
                },
                fwa: {
                    year: 1,
                    month: 6,
                    day: 23
                }
            },
            projects: [{
                id: "complexland",
                name: "Complexland",
                line1: "Complexland 2.0",
                line2: "Online Event",
                mLine1: "Complexland 2.0",
                mLine2: "Online Event",
                preview: "complexland.jpg",
                video: "complexland.mp4",
                smallDesc: "Part of the development of a <br>multiplayer WebGL video game<br>for Complexland 2021",
                desc: 'ComplexLand is a 3D e-commerce-enabled video game where users can shop from over 60 brands.<br><br>I work on the development of the webgl part of the site with <a class="link" href="https://mystaticself.com/" target="blank">John Iacoviello</a> for <a class="link" href="https://jam3.com/" target="blank">Jam3</a>.',
                link: "https://thefwa.com/cases/complexland-20",
                date: 2021,
                linkText: "See the fwa case"
            }, {
                id: "chile20",
                name: "Adidas Chile20",
                line1: "Adidas",
                line2: "CHILE20",
                mLine1: "Adidas",
                mLine2: "Chile20",
                preview: "chile20.jpg",
                video: "chile20.mp4",
                smallDesc: "Part of the development<br>of Adidas CHILE20<br> with Active Theory",
                desc: 'I worked on part of the front-end development on Adidas Chile20 website with <a class="link" href="https://activetheory.com/" target="blank">Active Theory</a>.<br><br>The site showcase realistic 3D products for the new CHILE20 collection.'
            }, {
                id: "victoire-2021",
                name: "Victoire 2021",
                line1: "Victoire Douy",
                line2: "Portfolio",
                mLine1: "Victoire Douy",
                mLine2: "Portfolio",
                preview: "victoire-2021.jpg",
                video: "victoire-2021.mp4",
                smallDesc: "Portfolio of Victoire Douy,<br>UI designer and Illustrator<br>based in Amsterdam",
                desc: "Portfolio of Victoire Douy, interactive designer and illustrator from France — Currently based in Amsterdam.",
                link: "https://victoiredouy.com/",
                linkText: "Visit website",
                date: 2021
            }, {
                id: "wrapper-2019",
                name: "2019 Spotify Wrapped",
                line1: "2019 Spotify",
                line2: "Wrapped",
                mLine1: "2019 Spotify",
                mLine2: "Wrapped",
                preview: "2019-wrapped.jpg",
                video: "wrapped-2019.mp4",
                smallDesc: "Part of the development<br>of the 2019 Spotify wrapped <br> at Active Theory",
                desc: 'I worked on part of the front-end development on the 2019 Spotify Wrapped website at <a class="link" href="https://activetheory.com/" target="blank">Active Theory</a>.<br><br>The site offers users to scroll through personal data stories about how you listened over the years.'
            }, {
                id: "play-doh",
                name: "Play Doh",
                line1: "Emerging Species",
                line2: "Play-Doh",
                mLine1: "Emerging Species",
                mLine2: "Play-Doh",
                preview: "play-doh.jpg",
                video: "playdoh.mp4",
                smallDesc: "Part of the development of<br> a WebGL museum for Play-Doh<br>at Merci-Michel",
                desc: 'Part of the development of a WebGL museum of Emerging Species for Play-Doh made with <a class="link" href="https://merci-michel.com/" target="blank">Merci-Michel</a>.',
                link: "http://playdoh-lagaleriedesespeces.com/en/",
                linkText: "Visit website"
            }, {
                id: "bon-iver",
                name: "Bon Iver",
                line1: "Bon Iver Visualizer",
                line2: "Spotify",
                mLine1: "Bon Iver",
                mLine2: "Visualizer",
                mLine3: "Spotify",
                preview: "bon-iver.jpg",
                video: "bon-iver.mp4",
                smallDesc: "Part of the development of<br>Bon Iver's i;i album website<br>at Active Theory",
                desc: 'I worked on part of the front-end and WebGL on this website at <a class="link" href="https://activetheory.com/" target="blank">Active Theory</a>.<br><br>The site was made to promote the new i,i album of Bon Iver.',
                link: "https://boniver.withspotify.com/",
                linkText: "Visit website"
            }, {
                id: "our-planet",
                name: "Our Planet",
                line1: "Netflix: Our Planet",
                line2: "Installation",
                mLine1: "Netflix",
                mLine2: "Our Planet",
                preview: "our-planet.jpg",
                video: "our-planet.mp4",
                smallDesc: "Part of the development of<br>an installation for the show<br>Our Planet at Active Theory",
                desc: 'I worked on part of development of this installation at <a class="link" href="https://activetheory.com/" target="blank">Active Theory</a>. I mainly worked on the navigation and transitions between scenes.<br><br>This installation was made for a Netflix event in Los Angeles. An interactive experience was projected on a fabric screen, users can navigate through the experience by touching it.',
                link: "https://medium.com/active-theory/netflix-our-planet-b61948b34486",
                linkText: "Read Active Theory's case study"
            }, {
                id: "plume",
                name: "Plume",
                line1: "Plume",
                line2: "Video Game",
                mLine1: "Plume",
                mLine2: "Video Game",
                preview: "plume.jpg",
                video: "plume.mp4",
                smallDesc: "WebGL video game made<br>for the 2018 Christmas<br>Experiements",
                desc: 'Plume is an adventure video game made in WebGL for Christmas Experiments 2018 opening. Help Plume to bring her letter to Santa Claus.<br><br><a class="link" href="https://fabienmotte.com/" target="blank">Fabien Motte</a>, <a class="link" href="https://www.instagram.com/3dpointless/" target="blank">Nicolas Mathis</a><br><a class="link" href="https://alexandredelalleau.fr/" target="blank">Alexandre Dellaleau</a> & <a class="link" href="https://soundcloud.com/mohave-2" target="blank">Mohave</a>.',
                link: "https://plumegame.com/",
                linkText: "Visit website"
            }, {
                id: "ouigo",
                name: "Ouigo Pinball",
                line1: "Ouigo Pinball",
                line2: "Let's play",
                mLine1: "Ouigo Pinball",
                mLine2: "Let's play",
                preview: "ouigo.jpg",
                video: "ouigo.mp4",
                smallDesc: "Part of the development of<br>the WebGL Pinball for Ouigo<br>at Merci-Michel",
                desc: 'Part of the development of the WebGL Pinball for Ouigo with <a class="link" href="https://merci-michel.com/" target="blank">Merci-Michel</a>.<br><br>OUIGO Let\'s Play, a pinball game to promote the french low cost and high-speed train branch of the SNCF.',
                link: "http://letsplay.ouigo.com/",
                linkText: "Visit website"
            }],
            moreProjects: [{
                id: "wldlght",
                name: "Wldlght Projections",
                line1: "Wldlght",
                line2: "Projections",
                video: "wldlght.mp4",
                desc: 'Have a look to some projections I did during my trip in Japan with friends <3<br><br><a class="link" href="https://twitter.com/florianzumbrunn" target="blank">Florian Zumbrunn</a>,<br><a class="link" href="https://twitter.com/MathisBiabiany" target="blank">Mathis Biabiany</a>,<br><a class="link" href="https://twitter.com/Hexya_Asahi" target="blank">Loïc Belaïd-Remesal</a><br>and <a class="link" href="https://twitter.com/onetoldstories" target="blank">Onetoldstories</a>.',
                link: "https://twitter.com/Pat_Hg/status/1253587449231671296",
                date: "2020",
                linkText: "See twitter thread"
            }, {
                id: "sweetpunk",
                name: "Sweet Punk Portfolio",
                line1: "Sweet Punk",
                line2: "Portfolio",
                video: "sweetpunk.mp4",
                desc: 'I worked on the front end development and WebGL for the home page and \'Don\'t Be Boring\' page of the portfolio of <a class="link" href="https://sweetpunk.com/" target="blank">SweetPunk</a>, a french creative agency.',
                link: "https://sweetpunk.com/",
                date: "2020",
                linkText: "Visit website"
            }, {
                id: "porter-robinson",
                name: "Something Comforting",
                line1: "Something",
                line2: "Comforting",
                preview: "porter.jpg",
                video: "porter.mp4",
                date: 2020,
                smallDesc: "Part of the development of a WebGL<br>experience for Porter Robinson<br>at Active Theory",
                desc: 'I worked on part of the development of a WebGL experience for Porter Robinson with  <a class="link" href="https://activetheory.com/" target="blank">Active Theory</a>.<br><br>The site offers an immersive universe where you can be connected to another player and visit different worlds and listen to music from the artist together.',
                link: "https://porterrobinson.com/",
                linkText: "Visit website"
            }, {
                id: "rick-and-morty",
                name: "Rick and Morty",
                line1: "Rick And Morty",
                line2: "Adult Swim",
                mLine1: "Rick And Morty",
                mLine2: "Adult Swim",
                preview: "rick-and-morty.jpg",
                video: "rick-and-morty.mp4",
                smallDesc: "Part of the development of<br>Rick And Morty website<br>with Active Theory",
                desc: 'I worked on part of development of the official Rick and Morty website at <a class="link" href="https://activetheory.com/" target="blank">Active Theory</a>.',
                link: "https://www.rickandmorty.com/",
                linkText: "Visit website",
                date: "2019"
            }, {
                id: "robin-mastromarino",
                name: "Robin Mastromarino",
                line1: "R. Mastromarino",
                line2: "Portfolio",
                mLine1: "Robin",
                mLine2: "Mastromarino",
                mLine3: "Portfolio",
                preview: "mastro.jpg",
                video: "mastromarino.mp4",
                smallDesc: "Portfolio of Robin Mastromarino,<br>UI/UX designer based in Paris",
                desc: "Portfolio of Robin Mastromarino, a UX/UI designer based in Paris, currently working for Merci-Michel.<br><br>I did all the developpement, and work hand to hand with the designer to find animations and interactions together.",
                link: "http://robinmastromarino.com/",
                linkText: "Visit website",
                date: 2018
            }, {
                id: "heraclos",
                name: "Heraclos Video Game",
                line1: "Heraclos",
                line2: "Video Game",
                mLine1: "Heraclos",
                mLine2: "Video Game",
                preview: "heraclos.jpg",
                video: "heraclos.mp4",
                smallDesc: "WebGL video game made<br>for my final study project<br>at Gobelins Paris",
                desc: 'Heraclos is an adventure video game made in WebGL, it\'s a final study project at Gobelins school of Image.<br><br>Made with <a class="link" href="https://fabienmotte.com/" target="blank">Fabien Motte</a>, <a class="link" href="https://alexandredelalleau.fr/" target="blank">Alexandre Dellaleau</a>, <a class="link" href="https://lovis.io/" target="blank">Lovis Odin</a>, <a class="link" href="http://www.maudbutin.com/" target="blank">Maud Butin</a> & <a class="link" href="https://soundcloud.com/mohave-2" target="blank">Mohave</a>.',
                link: "http://heraclosgame.com/",
                date: 2018,
                linkText: "Visit website"
            }, {
                id: "rte-2017",
                name: "RTE 2017 Annual Report",
                line1: "RTE 2017",
                line2: "Annual Report",
                video: "rte-2017.mp4",
                desc: 'Part of the development of RTE 2017 Annual Report with <a class="link" href="https://merci-michel.com/" target="blank">Merci-Michel</a>.<br><br>The users can explore animated 3D maps and discover the great projects and challenges of the group.',
                link: "https://voyage-electrique.rte-france.com/",
                date: "2017",
                linkText: "Visit website"
            }],
            screens: {},
            projectDico: {}
        };
        n.projects.forEach((function(e, t) {
            e.index = t, n.projectDico[e.id] = e
        })), t.a = n
    }, , , , , , , , , , , , , , , , , , function(e, t, i) {}, function(e, t, i) {}, function(e, t, i) {
        "use strict";
        (function(e) {
            i(25), i(19);
            var n = i(29),
                s = i(13);
            t.a = {
                data: function() {
                    return {
                        toggle: !0,
                        percent: 0
                    }
                },
                created: function() {
                    this.values = {
                        percent: 0
                    }
                },
                mounted: function() {
                    this._bind();
                    var e = Object(s.b)("load") || null;
                    n.a.load(e)
                },
                methods: {
                    _bind: function() {
                        this.$sub(n.a.PROGRESSED, this._onProgress), this.$sub(n.a.COMPLETED, this._onComplete)
                    },
                    _onProgress: function(t) {
                        var i = this,
                            n = t.progress;
                        this.tween && this.tween.kill(), this.tween = e.to(this.values, {
                            percent: n,
                            duration: 1,
                            ease: "cubic.out",
                            onUpdate: function() {
                                i.percent = Math.ceil(i.values.percent)
                            }
                        })
                    },
                    _onComplete: function(t) {
                        var i = this;
                        this.tween && this.tween.kill(), this.tween = e.to(this.values, {
                            percent: 100,
                            duration: 1,
                            ease: "cubic.out",
                            onUpdate: function() {
                                i.percent = Math.ceil(i.values.percent)
                            },
                            onComplete: function() {
                                e.to(i.$el, {
                                    autoAlpha: 0,
                                    duration: .5,
                                    ease: "cubic.out",
                                    onComplete: function() {
                                        i.toggle = !1
                                    }
                                })
                            }
                        })
                    }
                }
            }
        }).call(this, i(22).gsap)
    }, function(e, t, i) {}, function(e, t, i) {}, function(e, t, i) {
        "use strict";
        (function(e) {
            i(18);
            var n = i(29),
                s = i(0);
            i(13);
            t.a = {
                data: function() {
                    return {
                        toggle: !0,
                        isBlack: !0,
                        isTitleVisible: !0
                    }
                },
                created: function() {
                    this._checkColor(), this._checkTitle(!0)
                },
                mounted: function() {
                    this._bind(), this._checkColor(), this._checkTitle(!0)
                },
                beforeDestroy: function() {
                    this._unbind()
                },
                methods: {
                    _bind: function() {
                        s.g.add(this._tick, 20), s.b.on(n.a.HIDDEN, this._onLoad)
                    },
                    _unbind: function() {
                        s.g.remove(this._tick), s.b.off(n.a.HIDDEN, this._onLoad)
                    },
                    _tick: function(e, t) {
                        this._checkColor(), this._checkTitle()
                    },
                    _checkColor: function() {
                        var e = "index" === this.$route.name;
                        if (e) {
                            var t = 250 / s.h.width,
                                i = s.i.introScreenProgress < 1 - t && s.i.introScreenProgress > -.2 + t;
                            s.a.isMobile && e && s.i.homeScrollbar && (i = s.i.homeScrollbar.scrollTop < s.h.height - 50), i && this.isBlack ? this.isBlack = !1 : i || this.isBlack || (this.isBlack = !0)
                        } else {
                            var n = s.i.aboutX < .9 * s.h.width - 250 && s.i.aboutX > -.2 * s.h.width + 250;
                            s.a.isMobile && s.i.aboutScrollbar && (n = s.i.aboutScrollbar.scrollTop < s.h.height - 50), n && this.isBlack ? this.isBlack = !1 : n || this.isBlack || (this.isBlack = !0)
                        }
                    },
                    _showTitle: function(t) {
                        this.isTitleVisible && !t || (this.isTitleVisible = !0, e.to(this.$refs.title, {
                            autoAlpha: 1,
                            duration: .2,
                            ease: "cubic.out",
                            delay: .3
                        }), e.to(this.$refs.titleInner, {
                            y: "0%",
                            rotation: "0deg",
                            duration: .6,
                            ease: "power3.out",
                            delay: .3
                        }))
                    },
                    _hideTitle: function(t) {
                        (this.isTitleVisible || t) && (this.isTitleVisible = !1, e.killTweensOf(this.$refs.title), t ? this.$refs.title && (e.to(this.$refs.title, {
                            autoAlpha: 0
                        }), e.to(this.$refs.titleInner, {
                            y: "100%",
                            rotation: "4deg"
                        })) : (e.to(this.$refs.titleInner, {
                            y: "100%",
                            rotation: "4deg",
                            duration: .4,
                            ease: "power2.out"
                        }), e.to(this.$refs.title, {
                            autoAlpha: 0,
                            duration: .3,
                            ease: "cubic.out",
                            onComplete: function() {}
                        })))
                    },
                    _onLoad: function() {
                        var t = this.$refs,
                            i = t.work,
                            n = t.about,
                            s = t.comma;
                        e.set([this.$el, i.$el, n.$el, s], {
                            autoAlpha: 0
                        }), e.to(this.$el, {
                            autoAlpha: 1,
                            duration: 1
                        }), e.set([i.$el, n.$el, s], {
                            autoAlpha: 0,
                            x: 10
                        }), e.to([i.$el, n.$el, s], {
                            autoAlpha: 1,
                            x: 0,
                            duration: 1,
                            delay: .5,
                            stagger: .1,
                            ease: "cubic.out"
                        })
                    },
                    _checkTitle: function(e) {
                        if (!s.a.isMobile)
                            if ("index" === this.$route.name) {
                                var t = s.h.width < 1200 ? .2 : 250 / s.h.width * .9,
                                    i = s.i.introScreenProgress < 1 - t && s.i.introScreenProgress > -.2 + t;
                                i ? this._hideTitle(e) : i || this._showTitle(e)
                            } else this.isTitleVisible || this._showTitle(e)
                    }
                }
            }
        }).call(this, i(22).gsap)
    }, function(e, t, i) {}, function(e, t, i) {}, function(e, t, i) {
        "use strict";
        (function(e, n) {
            var s, o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(5),
                l = i(7),
                u = i(12),
                d = i(0),
                p = i(207),
                f = (s = function(t) {
                    function i() {
                        var t;
                        Object(o.a)(this, i), (t = Object(r.a)(this, Object(c.a)(i).call(this)))._retinaScene = u.a.retinaScene, t._entities = [], t._renderer = u.a.renderer;
                        var n = d.h.width,
                            s = d.h.height;
                        return t._camera = new e.OrthographicCamera(n / -2, n / 2, s / 2, s / -2, -100, 100), t._bind(), t._init(), t._setSize(), t
                    }
                    return Object(h.a)(i, t), Object(a.a)(i, [{
                        key: "update",
                        value: function(e, t) {
                            for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t);
                            this._retinaScene.active && this._retinaScene.update(e, t), this._renderer.setRenderTarget(null), this._renderer.render(this, this._camera)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            d.h.addResize(this._onResize)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            d.h.removeResize(this._onResize)
                        }
                    }, {
                        key: "_setSize",
                        value: function() {
                            var e = d.h.width,
                                t = d.h.height;
                            this._camera.left = e / -2, this._camera.right = e / 2, this._camera.top = t / 2, this._camera.bottom = t / -2, this._camera.updateProjectionMatrix();
                            for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].setSize(e, t);
                            this._retinaScene.setSize(e, t)
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            this.transitionQuad = new p.a(this._retinaScene, this.loaderScene), this.material = this.transitionQuad.material, this.add(this.transitionQuad), this._entities.push(this.transitionQuad)
                        }
                    }, {
                        key: "setTransition",
                        value: function(e) {
                            this.transitionQuad.setTransition(e)
                        }
                    }, {
                        key: "_onResize",
                        value: function() {
                            this._setSize()
                        }
                    }, {
                        key: "rtt1",
                        get: function() {
                            return this.transitionQuad.rtt1
                        },
                        set: function(e) {
                            this.transitionQuad.rtt1 = e
                        }
                    }, {
                        key: "rtt2",
                        get: function() {
                            return this.transitionQuad.rtt2
                        },
                        set: function(e) {
                            this.transitionQuad.rtt2 = e
                        }
                    }, {
                        key: "progress",
                        get: function() {
                            return this.transitionQuad.progress.value
                        },
                        set: function(e) {
                            this.transitionQuad.progress.value = e
                        }
                    }]), i
                }(e.Scene), Object(l.a)(s.prototype, "_onResize", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onResize"), s.prototype), s);
            t.a = f
        }).call(this, i(11), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\n#define SHADER_NAME BasicTransition\n\nuniform sampler2D tDiffuse1;\nuniform sampler2D tDiffuse2;\nuniform float uTime;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\nvec4 getFromColor(vec2 uv) {\n  return texture2D(tDiffuse1, uv);\n}\n\nvec4 getToColor(vec2 uv) {\n  return texture2D(tDiffuse2, uv);\n}\n\nvoid main() {\n  gl_FragColor = mix(getFromColor(vUv), getToColor(vUv), uProgress);\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s, o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(8),
                l = i(5),
                u = i(7),
                d = i(0),
                p = (new e.Vector2, s = function(t) {
                    function i(e) {
                        var t, n = e.fov,
                            s = void 0 === n ? 75 : n,
                            a = e.aspect,
                            h = void 0 === a ? d.h.aspect : a,
                            l = e.near,
                            u = void 0 === l ? 1 : l,
                            p = e.far,
                            f = void 0 === p ? 1e3 : p,
                            v = e.name,
                            m = void 0 === v ? "Camera" : v,
                            _ = e.isDefault,
                            y = void 0 !== _ && _;
                        return Object(o.a)(this, i), (t = Object(r.a)(this, Object(c.a)(i).call(this, s, h, u, f))).name = m, t.isDefault = y, t._gui = d.c, t._guiIsCreated = !1, t._helper = null, t._bind(), t._createHelper(), t
                    }
                    return Object(l.a)(i, t), Object(a.a)(i, [{
                        key: "createGUI",
                        value: function(e) {
                            var t = this,
                                i = e.addFolder({
                                    title: "".concat(this.isDefault ? "📸" : "📷", " ").concat(this.name)
                                });
                            return i.expanded = !1, i.addInput(this, "near", {
                                min: 1,
                                max: 5e3,
                                step: 1
                            }).on("change", (function(e) {
                                t.updateProjectionMatrix()
                            })), i.addInput(this, "far", {
                                min: 1,
                                max: 8e3,
                                step: 1
                            }).on("change", (function(e) {
                                t.updateProjectionMatrix()
                            })), i.addInput(this, "fov", {
                                min: 1,
                                max: 180,
                                step: 1
                            }).on("change", (function(e) {
                                t.updateProjectionMatrix()
                            })), i.addSeparator(), this._gui.addVec(i, this.position, {
                                label: "position",
                                step: .1,
                                min: -100,
                                max: 100
                            }), i.addSeparator(), this._gui.addVec(i, this.rotation, {
                                label: "rotation",
                                tep: .01,
                                min: 2 * -Math.PI,
                                max: 2 * Math.PI
                            }), i
                        }
                    }, {
                        key: "start",
                        value: function() {}
                    }, {
                        key: "stop",
                        value: function() {}
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this._helper && this._helper.visible && (this.updateMatrixWorld(), this._helper.update())
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            Object(h.a)(Object(c.a)(i.prototype), "remove", this).call(this), this._unbind(), this._destroyHelper()
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            this.aspect = e / t, this.updateProjectionMatrix()
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            d.d.addDown(this._onKeyDown)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            d.d.removeDown(this._onKeyDown)
                        }
                    }, {
                        key: "_onResize",
                        value: function(e, t) {
                            this.setSize(e, t)
                        }
                    }, {
                        key: "_onKeyDown",
                        value: function(e, t) {}
                    }, {
                        key: "_createHelper",
                        value: function() {
                            this._helper = new e.CameraHelper(this), this._helper.name = "CameraHelper", this._helper.material.fog = !1
                        }
                    }, {
                        key: "_destroyHelper",
                        value: function() {
                            this._helper && this._helper.remove()
                        }
                    }, {
                        key: "helper",
                        get: function() {
                            return this._helper
                        }
                    }, {
                        key: "cameraAngle",
                        get: function() {
                            return this._cameraAngle
                        }
                    }]), i
                }(e.PerspectiveCamera), Object(u.a)(s.prototype, "_onResize", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onResize"), s.prototype), Object(u.a)(s.prototype, "_onKeyDown", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onKeyDown"), s.prototype), s);
            t.a = p
        }).call(this, i(11), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return n
            }));
            i(55);

            function n() {
                var t = new e.BufferGeometry;
                return t.setAttribute("uv", new e.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2)), t.setAttribute("position", new e.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)), t
            }
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(18), i(182);
            var n = i(2),
                s = i(3),
                o = i(29),
                a = i(12),
                r = i(52),
                c = i(28),
                h = Object(c.c)("Textures", "#73505F", !1),
                l = {
                    forceUncompressed: !0
                },
                u = function() {
                    function t() {
                        Object(n.a)(this, t), this._loader = o.a, this.textures = {}, this.compressed = !l.forceUncompressed && r.a.supports.webgl.textureFormat.compressed, this.format = l.forceUncompressed ? "uncompressed" : r.a.supports.webgl.textureFormat.format, this._log()
                    }
                    return Object(s.a)(t, [{
                        key: "get",
                        value: function(e, t) {
                            return this.textures[e] ? this.textures[e] : this._createTexture(e, t)
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            return !!this.textures[e] && ("function" == typeof this.textures[e].dispose && this.textures[e].dispose(), this.textures[e] = null, !0)
                        }
                    }, {
                        key: "_createTexture",
                        value: function(t) {
                            var i, n = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = s.filtering,
                                r = s.wrapping,
                                c = s.repeat,
                                h = s.noCompression,
                                l = s.mipmaps,
                                u = void 0 === l || l,
                                d = s.dynamicUrl,
                                p = t.indexOf(".png") > -1 || t.indexOf(".jpg");
                            if (!this.compressed || h || p) {
                                var f = 0 === t.indexOf("http"),
                                    v = d && f ? null : this._loader.get(t);
                                if (!v) {
                                    if (!f) return null;
                                    var m = document.createElement("img");
                                    (i = new e.Texture(m)).setFromUrl = !0, m.crossOrigin = "anonymous", m.onload = function() {
                                        i.needsUpdate = !0
                                    }, m.src = t
                                }
                                i || (i = new e.Texture(v)), i.flipY = !0, i.generateMipmaps = u
                            } else {
                                i = new e.CompressedTexture;
                                var _ = this._loader.get(t);
                                if (!_) return null;
                                i.image.width = _.width, i.image.height = _.height, i.mipmaps = _.mipmaps, i.format = _.format
                            }
                            return i.name = t, i.minFilter = i.magFilter = o || e.LinearFilter, i.wrapS = i.wrapT = r || e.ClampToEdgeWrapping, i.anisotropy = a.a.renderer.capabilities.getMaxAnisotropy(), i.destroyCb = function() {
                                return n.destroy(i.name)
                            }, c && i.repeat.copy(c), i.setFromUrl || (i.needsUpdate = !0), this.textures[t] = i, i
                        }
                    }, {
                        key: "_log",
                        value: function() {
                            var e = this;
                            setTimeout((function() {
                                var t = e.compressed ? "Compressed" : "Uncompressed",
                                    i = e.compressed ? "| ".concat(e.format.toUpperCase()) : "";
                                h("".concat(t, " ").concat(i))
                            }), 0)
                        }
                    }]), t
                }();
            t.a = new u
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(12),
                l = i(10),
                u = i(0),
                d = i(16),
                p = i(125),
                f = e,
                v = f.Bodies,
                m = f.Body,
                _ = {
                    slop: .1,
                    restitution: 1
                },
                y = function(e) {
                    function t(e) {
                        var i;
                        return Object(s.a)(this, t), (i = Object(a.a)(this, Object(r.a)(t).call(this, e))).name = "mouse", i._radius = 30, i._initMesh(), i._initBody(), i._createGUI(), i
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "_initBody",
                        value: function() {
                            this.body = v.circle(0, 0, this._radius, {
                                isStatic: !0
                            }), this.body.restitution = _.restitution, this.body.slop = _.slop, this.body.collisionFilter.category = this._world.pGroups[0] | this._world.pGroups[1] | this._world.pGroups[2]
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {
                            this._material = this._createMaterial({
                                transparent: !0,
                                vertexShader: d.a,
                                fragmentShader: p.a,
                                uniforms: {
                                    uColor: {
                                        value: new n.Color("#F7DE5D")
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this.mesh = new n.Mesh(h.a.GEOMS.plane, this._material), this.mesh.scale.set(1.5 * this._radius, 1.5 * this._radius, 1), this.mesh.position.z += .1, this._material.visible = !1, this.add(this.mesh)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && (this.folder = this.scene.pane.addFolder({
                                title: "Mouse"
                            }), this.folder.expanded = !1, this.folder.addInput(_, "slop", {
                                min: 0,
                                max: 20,
                                step: .01
                            }), this.folder.addInput(_, "restitution", {
                                min: 0,
                                max: 3,
                                step: .01
                            }))
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {}
                    }, {
                        key: "update",
                        value: function(e, t) {
                            m.setPosition(this.body, {
                                x: u.f.client.x + this.scene._camera.position.x,
                                y: u.f.client.y - this.scene._camera.position.y
                            }), this._sync(this.mesh, this.body)
                        }
                    }]), t
                }(l.a);
            t.a = y
        }).call(this, i(23), i(11))
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\nfloat circle(in vec2 _st, in float _radius){\n  vec2 dist = _st-vec2(0.5);\n  return 1.-smoothstep(_radius-(_radius*.02),\n                         _radius+(_radius*.02),\n                         dot(dist,dist)*4.0);\n}\n\nvoid main() {\n  float mask = max(circle(vUv, 1.) - circle(vUv, .7), 0.);\n  gl_FragColor = vec4(uColor, 1.);\n  gl_FragColor.a *= uAlpha * mask;\n}"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec2 offset;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);\n\n  mvPos.x += offset.x;\n  mvPos.y += offset.y;\n\n  gl_Position = projectionMatrix * mvPos;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(80),
                l = i(0),
                u = i(6),
                d = i(81),
                p = i(243),
                f = e,
                v = f.Bodies,
                m = f.Constraint,
                _ = {
                    length: 0,
                    stiffness: .037,
                    damping: 0,
                    force: 1.5,
                    dist: {
                        value: .09
                    },
                    distGlobal: {
                        value: .1
                    },
                    coef: {
                        value: .23
                    },
                    springCoef: {
                        value: 1.03
                    },
                    springLerp: {
                        value: .14
                    }
                },
                y = function(e) {
                    function t(e, i) {
                        var n;
                        return Object(s.a)(this, t), n = Object(a.a)(this, Object(r.a)(t).call(this, e, i, _)), l.a.isMobile && (_.dist.value = .5), n.name = "triangle-shape", n._defs = Math.ceil(Object(u.d)(i.data.size, .1, .5, 5, 14)), n._initMesh(), n._initBody(), n._createGUI(), n.setSize(), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "_initMesh",
                        value: function() {
                            this._color = this._data.color || "#053D62", this._prepareGeom(), this._material = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: d.a,
                                fragmentShader: p.a,
                                uniforms: {
                                    uColor: {
                                        value: new n.Color(this._color)
                                    },
                                    uMaskScale: {
                                        value: new n.Vector2(1, 1)
                                    },
                                    uMaskAngle: {
                                        value: 0
                                    },
                                    uProgress: {
                                        value: 0
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._isSmall && (this._material.uniforms.uMaskScale.value.x = 1, this._material.uniforms.uMaskScale.value.y = .8), this.mesh = new n.Mesh(this._geometry, this._material), this.mesh.baseScale = this.mesh.scale.clone(), this.add(this.mesh), this.mesh.renderOrder = -1
                        }
                    }, {
                        key: "_initBody",
                        value: function() {
                            this.body = v.circle(0, 0, 1), this.body.collisionFilter.mask = this._world.pGroups[4], this._addBody(this.body, this._composite)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            var e = this;
                            this.scene.pane && !window.triangleShape && (window.triangleShape = !0, this.folder = this.scene.pane.addFolder({
                                title: "TriangleShape"
                            }), this.folder.expanded = !1, this.folder.addInput(_, "length", {
                                min: 0,
                                max: 2,
                                step: .01
                            }).on("change", (function(t) {
                                e.setSize()
                            })), this.folder.addInput(_, "stiffness", {
                                min: 0,
                                max: .2,
                                step: .001
                            }).on("change", (function(t) {
                                e.setSize()
                            })), this.folder.addInput(_, "damping", {
                                min: 0,
                                max: 1,
                                step: .001
                            }).on("change", (function(t) {
                                e.setSize()
                            })), this.folder.addInput(_, "force", {
                                min: 0,
                                max: 10,
                                step: .001
                            }), this.folder.addInput(_.dist, "value", {
                                label: "dist",
                                min: 0,
                                max: 1,
                                step: .01
                            }).on("change", (function(e) {
                                _.distGlobal.value = _.dist.value * l.h.width
                            })), this.folder.addInput(_.coef, "value", {
                                label: "coef",
                                min: -1.2,
                                max: 1.2,
                                step: .01
                            }), this.folder.addInput(_.springCoef, "value", {
                                label: "spring coef",
                                min: 0,
                                max: 5,
                                step: .01
                            }), this.folder.addInput(_.springLerp, "value", {
                                label: "spring lerp",
                                min: 0,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "createConstraints",
                        value: function() {
                            this._removeConstraints(this._composite), this.constraints = [];
                            var e = Object(u.d)(this.progress, -1, 1, -this._parralaxOffset, this._parralaxOffset, !0),
                                t = m.create({
                                    bodyA: this.body,
                                    pointB: {
                                        x: this.body.position.x + e,
                                        y: this.body.position.y
                                    },
                                    length: _.length,
                                    stiffness: _.stiffness,
                                    damping: _.damping
                                });
                            this.body.constraint = t, this._addConstraint(t, this._composite);
                            var i = m.create({
                                bodyA: this.body,
                                bodyB: this.body,
                                angleAStiffness: .045,
                                angleAMin: -0,
                                angleAMax: 0
                            });
                            this._addConstraint(i, this._composite)
                        }
                    }]), t
                }(h.a);
            t.a = y
        }).call(this, i(23), i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(8),
                h = i(5),
                l = i(80),
                u = i(0),
                d = i(6),
                p = i(81),
                f = i(244),
                v = e,
                m = v.Bodies,
                _ = (v.Body, v.Constraint),
                y = {
                    length: 0,
                    stiffness: .037,
                    damping: 0,
                    force: 1.5,
                    dist: {
                        value: .09
                    },
                    distGlobal: {
                        value: .1
                    },
                    coef: {
                        value: -.21
                    },
                    springCoef: {
                        value: .65
                    },
                    springLerp: {
                        value: .13
                    }
                },
                b = function(e) {
                    function t(e, i) {
                        var n;
                        return Object(s.a)(this, t), n = Object(a.a)(this, Object(r.a)(t).call(this, e, i, y)), u.a.isMobile && (y.dist.value = .5), n.name = "square-shape", n._defs = Math.ceil(Object(d.d)(i.data.size, .1, .5, 4, 7)), n._initMesh(), n._initBody(), n._createGUI(), n.setSize(), n
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "_initMesh",
                        value: function() {
                            this._color = this._data.color || "#053D62", this._prepareGeom(), this._material = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: p.a,
                                fragmentShader: f.a,
                                uniforms: {
                                    uColor: {
                                        value: new n.Color(this._color)
                                    },
                                    uMaskScale: {
                                        value: new n.Vector2(1, 1)
                                    },
                                    uMaskAngle: {
                                        value: this._data.angle || 0
                                    },
                                    uProgress: {
                                        value: 0
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._data.maskScale && (this._material.uniforms.uMaskScale.value.x = this._data.maskScale[0], this._material.uniforms.uMaskScale.value.y = this._data.maskScale[1]), this.mesh = new n.Mesh(this._geometry, this._material), this.mesh.baseScale = this.mesh.scale.clone(), this.add(this.mesh), this.mesh.renderOrder = -1
                        }
                    }, {
                        key: "_initBody",
                        value: function() {
                            this.body = m.rectangle(0, 0, 2, 2), this.body.collisionFilter.mask = this._world.pGroups[4], this._addBody(this.body, this._composite)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            var e = this;
                            this.scene.pane && !window.squareShape && (window.squareShape = !0, this.folder = this.scene.pane.addFolder({
                                title: "SquareShape"
                            }), this.folder.expanded = !1, this.folder.addInput(y, "length", {
                                min: 0,
                                max: 2,
                                step: .01
                            }).on("change", (function(t) {
                                e.setSize()
                            })), this.folder.addInput(y, "stiffness", {
                                min: 0,
                                max: .2,
                                step: .001
                            }).on("change", (function(t) {
                                e.setSize()
                            })), this.folder.addInput(y, "damping", {
                                min: 0,
                                max: 1,
                                step: .001
                            }).on("change", (function(t) {
                                e.setSize()
                            })), this.folder.addInput(y, "force", {
                                min: 0,
                                max: 10,
                                step: .001
                            }), this.folder.addInput(y.dist, "value", {
                                label: "dist",
                                min: 0,
                                max: 1,
                                step: .01
                            }).on("change", (function(e) {
                                y.distGlobal.value = y.dist.value * u.h.width
                            })), this.folder.addInput(y.coef, "value", {
                                label: "coef",
                                min: -1.2,
                                max: 1.2,
                                step: .01
                            }), this.folder.addInput(y.springCoef, "value", {
                                label: "spring coef",
                                min: 0,
                                max: 5,
                                step: .01
                            }), this.folder.addInput(y.springLerp, "value", {
                                label: "spring lerp",
                                min: 0,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "createConstraints",
                        value: function() {
                            if (this.body) {
                                this._removeConstraints(this._composite), this.constraints = [];
                                var e = Object(d.d)(this.progress, -1, 1, -this._parralaxOffset, this._parralaxOffset, !0),
                                    t = _.create({
                                        bodyA: this.body,
                                        pointB: {
                                            x: this.body.position.x + e,
                                            y: this.body.position.y
                                        },
                                        length: y.length,
                                        stiffness: y.stiffness,
                                        damping: y.damping
                                    });
                                this.body.constraint = t, this._addConstraint(t, this._composite);
                                var i = _.create({
                                    bodyA: this.body,
                                    bodyB: this.body,
                                    angleAStiffness: .045,
                                    angleAMin: -0,
                                    angleAMax: 0
                                });
                                this._addConstraint(i, this._composite)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, i, n) {
                            Object(c.a)(Object(r.a)(t.prototype), "update", this).call(this, e, i, n)
                        }
                    }]), t
                }(l.a);
            t.a = b
        }).call(this, i(23), i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return n
            }));
            i(342), i(55), i(85);

            function n(t) {
                var i, n, s, o, a = t.font,
                    r = t.text,
                    c = t.width,
                    h = void 0 === c ? 1 / 0 : c,
                    l = t.align,
                    u = void 0 === l ? "left" : l,
                    d = t.size,
                    p = void 0 === d ? 1 : d,
                    f = t.letterSpacing,
                    v = void 0 === f ? 0 : f,
                    m = t.lineHeight,
                    _ = void 0 === m ? 1.4 : m,
                    y = t.wordSpacing,
                    b = void 0 === y ? 0 : y,
                    g = t.wordBreak,
                    w = void 0 !== g && g,
                    x = t.getPositions,
                    O = void 0 !== x && x,
                    k = t.getSizes,
                    j = void 0 !== k && k,
                    S = t.getVertices,
                    C = void 0 !== S && S,
                    P = t.getOffsets,
                    M = void 0 !== P && P,
                    E = this,
                    D = /\n/,
                    T = /\s/;

                function L() {
                    a.common.lineHeight, s = a.common.base, o = p / s;
                    var e = r.replace(/[ \n]/g, "").length;
                    n = {
                        position: new Float32Array(4 * e * 3),
                        uv: new Float32Array(4 * e * 2),
                        id: new Float32Array(4 * e),
                        index: new Uint16Array(6 * e)
                    }, E.getOffsets && (n.offset = new Float32Array(4 * e * 3)), E.getSizes && (n.size = new Float32Array(4 * e * 2));
                    for (var t = 0; t < e; t++) n.index.set([4 * t, 4 * t + 2, 4 * t + 1, 4 * t + 1, 4 * t + 2, 4 * t + 3], 6 * t);
                    A()
                }

                function A() {
                    o = p / s;
                    var e = [],
                        t = 0,
                        c = 0,
                        l = 0,
                        d = f();

                    function f() {
                        var i = {
                            width: 0,
                            glyphs: []
                        };
                        return e.push(i), c = t, l = 0, i
                    }
                    for (var m = 0; t < r.length && m < 100;) {
                        m++;
                        var y = r[t];
                        if (d.width || !T.test(y))
                            if (D.test(y)) t++, d = f();
                            else {
                                var g = i[y];
                                if (d.glyphs.length) {
                                    var x = d.glyphs[d.glyphs.length - 1][0],
                                        O = U(g.id, x.id) * o;
                                    d.width += O, l += O
                                }
                                d.glyphs.push([g, d.width]);
                                var k = 0;
                                if (T.test(y) ? (c = t, l = 0, k += b * p) : k += v * p, k += g.xadvance * o, d.width += k, l += k, E.width = d.width, d.width > h) {
                                    if (w && d.glyphs.length > 1) {
                                        d.width -= k, d.glyphs.pop(), d = f();
                                        continue
                                    }
                                    if (!w && l !== d.width) {
                                        var j = t - c + 1;
                                        d.glyphs.splice(-j, j), t = c, d.width -= l, d = f();
                                        continue
                                    }
                                }
                                t++
                            }
                        else t++, c = t, l = 0
                    }
                    d.width || e.pop(),
                        function(e) {
                            for (var t = a.common.scaleW, i = a.common.scaleH, s = .07 * p, r = 0, c = 0; c < e.length; c++) {
                                for (var h = e[c], l = 0; l < h.glyphs.length; l++) {
                                    var d = h.glyphs[l][0],
                                        f = h.glyphs[l][1];
                                    if ("center" === u ? f -= .5 * h.width : "right" === u && (f -= h.width), !T.test(d.char)) {
                                        f += d.xoffset * o, s -= d.yoffset * o;
                                        var v = d.width * o,
                                            m = d.height * o;
                                        E.getOffsets ? (n.offset.set([f, s, 0, f, s, 0, f, s, 0, f, s, 0], 4 * r * 3), n.position.set([0, 0 - m, 0, 0, 0, 0, 0 + v, 0 - m, 0, 0 + v, 0, 0], 4 * r * 3)) : n.position.set([f, s - m, 0, f, s, 0, f + v, s - m, 0, f + v, s, 0], 4 * r * 3), E.getVertices && (z(E.vertices, r + 0, f, s - m, 0), z(E.vertices, f, s, 0), z(E.vertices, f + v, s - m, 0), z(E.vertices, f + v, s, 0));
                                        var y = d.x / t,
                                            b = d.width / t,
                                            g = 1 - d.y / i,
                                            w = d.height / i;
                                        n.uv.set([y, g - w, y, g, y + b, g - w, y + b, g], 4 * r * 2), s += d.yoffset * o, E.getSizes && (B(E.sizes, r, v, m), n.size.set([v, m, v, m, v, m, v, m], 4 * r * 2)), E.getPositions && z(E.positions, r, f, s, 0), E.getOffsets && z(E.offsets, r, d.xoffset * o, -d.yoffset * o, 0), n.id.set([r, r, r, r], 4 * r), E.glyphs[r] = d, r++
                                    }
                                }
                                s -= p * _
                            }
                            E.buffers = n, E.numLines = e.length, E.height = E.numLines * p * _, E.scale = o, E.count = r
                        }(e)
                }

                function B(t, i, n, s) {
                    t[i] ? t[i].set(n, s) : t[i] = new e.Vector2(n, s)
                }

                function z(t, i, n, s, o) {
                    t[i] ? t[i].set(n, s, o) : t[i] = new e.Vector3(n, s, o)
                }

                function U(e, t) {
                    for (var i = 0; i < a.kernings.length; i++) {
                        var n = a.kernings[i];
                        if (!(n.first < e) && !(n.second < t)) return n.first > e ? 0 : n.first === e && n.second > t ? 0 : n.amount
                    }
                    return 0
                }
                E.width = 0, E.getPositions = O, E.getSizes = j, E.getVertices = C, E.getOffsets = M, E.glyphs = [], O && (E.positions = []), M && (E.offsets = []), C && (E.vertices = []), j && (E.sizes = []), i = {}, a.chars.forEach((function(e) {
                    return i[e.char] = e
                })), L(), this.resize = function(e) {
                    h = e.width, p = e.size, A()
                }, this.update = function(e) {
                    r = e.text, L()
                }
            }
        }).call(this, i(11))
    }, , function(e, t, i) {
        "use strict";
        i(19), i(141), i(31), i(25), i(171), i(173);
        var n = i(14),
            s = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }), 1)
            },
            o = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            },
            a = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    var t = e.intersectionRatio,
                        i = e.target;
                    t <= 0 || i.__prefetch()
                }))
            }));
        t.a = {
            name: "NuxtLink",
            extends: n.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = s(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                o(this.handleId), this.__observed && (a.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    a && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), a.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                        return e.components.default
                    })).filter((function(e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        a.unobserve(this.$el);
                        var e = this.getPrefetchComponents(),
                            t = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(t = (s = o.next()).done); t = !0) {
                                var r = s.value,
                                    c = r();
                                c instanceof Promise && c.catch((function() {})), r.__prefetched = !0
                            }
                        } catch (e) {
                            i = !0, n = e
                        } finally {
                            try {
                                t || null == o.return || o.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
        "use strict";
        t.a = {}
    }, , , function(e, t, i) {
        "use strict";
        t.a = {
            common: [{
                id: "msdf-map",
                url: "msdf/mr.png"
            }, {
                id: "msdf-data",
                url: "msdf/mr.json"
            }, {
                id: "itc-map",
                url: "msdf/ITCFranklinGothicStd-Med-msdf.png"
            }, {
                id: "itc-data",
                url: "msdf/ITCFranklinGothicStd-Med-msdf.json"
            }, {
                id: "l-0",
                url: "images/l-0.png"
            }, {
                id: "l-1",
                url: "images/l-1.png"
            }, {
                id: "l-2",
                url: "images/l-2.png"
            }, {
                id: "l-3",
                url: "images/l-3.png"
            }, {
                id: "l-4",
                url: "images/l-4.png"
            }, {
                id: "e-0",
                url: "images/e-0.png"
            }, {
                id: "e-1",
                url: "images/e-1.png"
            }, {
                id: "e-2",
                url: "images/e-2.png"
            }, {
                id: "e-3",
                url: "images/e-3.png"
            }, {
                id: "e-4",
                url: "images/e-4.png"
            }, {
                id: "colors",
                url: "images/colors.jpg"
            }, {
                id: "cross",
                url: "images/cross.jpg"
            }, {
                id: "splash",
                url: "images/splash.jpg"
            }, {
                id: "arrow",
                url: "images/arrow.jpg"
            }, {
                id: "elipse",
                url: "images/elipse.jpg"
            }, {
                id: "play",
                url: "images/play.png"
            }, {
                id: "circle-edge",
                url: "images/circle-edge.jpg"
            }],
            home: []
        }
    }, , function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nuniform float uProgress;\nuniform float uReverse;\nuniform float uTime;\n// uniform float uSpeed;\n// uniform float uAmp;\n// uniform float uFreq;\n// uniform float uAngle;\nvarying vec2 vUv;\n\n@import aastep\n@import map\n\nvoid main() {\n  float mask = aastep(1. - (1.-vUv.y) * (1.-vUv.x), uProgress);\n  float reverseMask = 1. - aastep(vUv.y * vUv.x, 1.-uProgress);\n  mask = mix(mask, reverseMask, uReverse);\n  gl_FragColor.rgb = uColor + vec3((1. - uProgress) * .08);\n  gl_FragColor.a = uAlpha * mask;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(41),
                l = i(1),
                u = i(8),
                d = i(5),
                p = i(7),
                f = i(50),
                v = i(26),
                m = i(0),
                _ = i(6),
                y = i(16),
                b = i(245),
                g = i(246),
                w = i(247),
                x = (o = function(t) {
                    function i(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(a.a)(this, i), (t = Object(c.a)(this, Object(l.a)(i).call(this, e, n))).options = n, t._hover = 0, t._sFeedback = 0, t._rotationTarget = 0, t._rotation = 0, t._sCoef = 1, t._shapes = ["circle", "triangle", "square"], t._scaleCoefs = [1, 1.1, .9], t._colors = ["#F83D0C", "#FCAC14", "#8B3BDB", "#AAC3CD", "#E097C2"], n.first ? (t.screenOffset = -1, t._isFirst = !0, m.i.firstLoop = Object(h.a)(t)) : (t.screenOffset = n.screenOffset || 0, t._isFirst = !1, m.i.lastLoop = Object(h.a)(t)), t.xOffset = t.screenOffset * m.h.width, t._data = n.data, t._shapes = [], m.i.isLoopCanAnimate = !0, t._velocity = 0, t._createEntities(), t._bind(), t.setSize(), t
                    }
                    return Object(d.a)(i, t), Object(r.a)(i, [{
                        key: "_bind",
                        value: function() {
                            Object(u.a)(Object(l.a)(i.prototype), "_bind", this).call(this), m.b.on("loop_screen:animate_in", this._animateIn), m.b.on("loop_screen:animate_out", this._animateOut), m.b.on("loop_screen:click", this._onClick), m.a.isDesktop && (m.b.on("loop_screen:mouse_enter", this._onMouseEnter), m.b.on("loop_screen:mouse_move", this._onMouseMove), m.b.on("loop_screen:mouse_leave", this._onMouseLeave), m.b.on("loop_screen:el_mouse_enter", this._onElMouseEnter))
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            Object(u.a)(Object(l.a)(i.prototype), "_unbind", this).call(this), m.b.off("loop_screen:animate_in", this._animateIn), m.b.off("loop_screen:animate_out", this._animateOut), m.b.off("loop_screen:click", this._onClick), m.b.off("loop_screen:mouse_enter", this._onMouseEnter), m.b.off("loop_screen:mouse_move", this._onMouseMove), m.b.off("loop_screen:mouse_leave", this._onMouseLeave), m.b.off("loop_screen:el_mouse_enter", this._onElMouseEnter)
                        }
                    }, {
                        key: "_createEntities",
                        value: function() {
                            this._bg = new v.a(this.scene, {
                                color: "#FFFFFF"
                            }), this._addEntity(this._bg), this._color = new e.Color(this._colors[0]), this._hoverMats = [], this._circleMat = this._createMaterial({
                                vertexShader: y.a,
                                fragmentShader: b.a,
                                uniforms: {
                                    uColor: {
                                        value: this._color
                                    }
                                },
                                transparent: !0,
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._triangleMat = this._createMaterial({
                                vertexShader: y.a,
                                fragmentShader: g.a,
                                uniforms: {
                                    uColor: {
                                        value: this._color
                                    }
                                },
                                transparent: !0,
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._squareMat = this._createMaterial({
                                vertexShader: y.a,
                                fragmentShader: w.a,
                                uniforms: {
                                    uColor: {
                                        value: this._color
                                    }
                                },
                                transparent: !0,
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._hoverMats.push(this._circleMat, this._triangleMat, this._squareMat), this._hoverMesh = new e.Mesh(this._world.GEOMS.plane, this._hoverMats[0]), this._hoverMesh.baseScale = this._hoverMesh.scale.clone(), this.add(this._hoverMesh)
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.h.width,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.h.height;
                            if (this._hoverMesh) {
                                this._hoverMesh.baseScale.set(.13 * e, .13 * e, 1);
                                var i = this.screenOffset * e;
                                this.xOffset = i;
                                for (var n = 0, s = this._entities.length; n < s; n++) this._entities[n].xOffset = i, this._entities[n].setSize(e, t)
                            }
                        }
                    }, {
                        key: "_onVisible",
                        value: function() {
                            Object(u.a)(Object(l.a)(i.prototype), "_onVisible", this).call(this), this.isVisible = !0, m.b.emit("loop_screen:mouse_leave"), clearTimeout(m.i.loopAnimateInTimeout), clearTimeout(m.i.loopAnimateTimeout), m.i.loopAnimateInTimeout = setTimeout((function() {
                                clearTimeout(m.i.loopAnimateTimeout), m.i.isLoopCanAnimate && (m.b.emit("loop_screen:animate_in"), m.i.isLoopCanAnimate = !1)
                            }), 100), this.setSize()
                        }
                    }, {
                        key: "_onInvisible",
                        value: function() {
                            this.isVisible = !1, Object(u.a)(Object(l.a)(i.prototype), "_onInvisible", this).call(this), clearTimeout(m.i.loopAnimateInTimeout), clearTimeout(m.i.loopAnimateTimeout), m.i.isLoopCanAnimate || (m.i.loopAnimateTimeout = setTimeout((function() {
                                m.i.firstLoop.isVisible || m.i.lastLoop.isVisible || (m.b.emit("loop_screen:animate_out"), m.i.isLoopCanAnimate = !0)
                            }), 2e3))
                        }
                    }, {
                        key: "_animateIn",
                        value: function() {
                            this.visible = !0
                        }
                    }, {
                        key: "_animateOut",
                        value: function() {
                            this.visible = !1
                        }
                    }, {
                        key: "_onClick",
                        value: function() {
                            this._in = !1, n.to(this, {
                                _hover: 0,
                                duration: .1,
                                ease: "cubic.out"
                            }), n.to(this, {
                                _sFeedback: 0,
                                duration: .1,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "_onMouseEnter",
                        value: function() {
                            this._in = !0, n.to(this, {
                                _hover: 1,
                                duration: .3,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "_onElMouseEnter",
                        value: function(e) {
                            var t = e.index,
                                i = t % this._colors.length,
                                s = t % this._hoverMats.length;
                            this._color.set(this._colors[i]), this._hoverMesh.material = this._hoverMats[s], this._sCoef = this._scaleCoefs[s], this._rotationTarget -= Object(_.f)(.05, .5), n.killTweensOf(this, {
                                _sFeedback: !0
                            }), n.set(this, {
                                _sFeedback: 0
                            }), n.to(this, {
                                _sFeedback: .13,
                                ease: "elastic.out(3, .5)",
                                duration: 1
                            })
                        }
                    }, {
                        key: "_onMouseLeave",
                        value: function() {
                            this._in = !1, n.to(this, {
                                _hover: 0,
                                duration: .2,
                                ease: "cubic.out"
                            }), n.killTweensOf(this, {
                                _sFeedback: !0
                            }), n.to(this, {
                                _sFeedback: 0,
                                duration: .2,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "_onUpdate",
                        value: function(e, t) {
                            for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t, this.progress);
                            var s = this._world.mousePos.x,
                                o = this._world.mousePos.y,
                                a = s - this._hoverMesh.pastX;
                            this._hoverMesh.pastX && Math.abs(a) > 4 * m.h.width && (this._hoverMesh.position.x += a), this._hoverMesh.position.x += .1 * (s - this._hoverMesh.position.x), this._hoverMesh.position.y += .1 * (o - this._hoverMesh.position.y), this._hoverMesh.pastX = s;
                            var r = 3 * m.f.velocity.length();
                            this._velocity += .1 * (r - this._velocity);
                            var c = this._hoverMesh.baseScale.x * this._sCoef;
                            this._hoverMesh.scale.x = Math.max(c * this._hover, 1e-4) + this._sFeedback * c, this._hoverMesh.scale.y = Math.max(c * this._hover, 1e-4) + this._sFeedback * c, this._rotation += .1 * (this._rotationTarget - this._rotation), this._hoverMesh.rotation.z = this._rotation;
                            var h = this.screenOffset * m.h.width,
                                l = m.h.width < 1100 ? s > h + 240 : s > h + .5 * m.h.width - 60,
                                u = s < h + 1 * m.h.width;
                            !this._in || m.i.firstLoop.isVisible || m.i.lastLoop.isVisible || m.b.emit("loop_screen:mouse_leave"), this.visible && (!this._in || l && u || m.b.emit("loop_screen:mouse_leave"))
                        }
                    }, {
                        key: "screenWidth",
                        get: function() {
                            return 1
                        }
                    }]), i
                }(f.a), Object(p.a)(o.prototype, "_onVisible", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onVisible"), o.prototype), Object(p.a)(o.prototype, "_onInvisible", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onInvisible"), o.prototype), Object(p.a)(o.prototype, "_animateIn", [s], Object.getOwnPropertyDescriptor(o.prototype, "_animateIn"), o.prototype), Object(p.a)(o.prototype, "_animateOut", [s], Object.getOwnPropertyDescriptor(o.prototype, "_animateOut"), o.prototype), Object(p.a)(o.prototype, "_onClick", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onClick"), o.prototype), Object(p.a)(o.prototype, "_onMouseEnter", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onMouseEnter"), o.prototype), Object(p.a)(o.prototype, "_onElMouseEnter", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onElMouseEnter"), o.prototype), Object(p.a)(o.prototype, "_onMouseLeave", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onMouseLeave"), o.prototype), o);
            t.a = x
        }).call(this, i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        i(39), i(31), i(25), i(19), i(32);
        var n = i(21),
            s = i(2),
            o = i(4),
            a = i(1),
            r = i(5),
            c = i(12),
            h = i(76),
            l = i(77),
            u = "#define GLSLIFY 1\nuniform sampler2D tDiffuse2;\nuniform sampler2D tRetina;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 retina = texture2D(tRetina, vUv);\n  gl_FragColor.rgb = mix(texture2D(tDiffuse2, vUv).rgb, retina.rgb, retina.a);\n  gl_FragColor.a = 1.;\n}\n",
            d = "#define GLSLIFY 1\nuniform sampler2D tDiffuse2;\nvarying vec2 vUv;\n\nvoid main() {\n  gl_FragColor.rgb = texture2D(tDiffuse2, vUv).rgb;\n  gl_FragColor.a = 1.;\n}\n";

        function p(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }
        var f = function(e) {
            function t(e) {
                var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(s.a)(this, t);
                var f = r.vertexShader || l.a,
                    v = r.retina ? u : d;
                return i = Object(o.a)(this, Object(a.a)(t).call(this, e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(i), !0).forEach((function(t) {
                            Object(n.a)(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }({}, r, {
                    vertexShader: f,
                    fragmentShader: v
                }))), h.retina && (i.uniforms.tRetina.value = {
                    value: c.a.retinaScene.rtt.texture
                }), i
            }
            return Object(r.a)(t, e), t
        }(h.a);
        t.a = f
    }, , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
        "use strict";
        (function(e, n) {
            var s, o, a, r = i(2),
                c = i(3),
                h = i(7),
                l = i(45),
                u = i(15),
                d = (i(12), a = o = function() {
                    function t() {
                        Object(r.a)(this, t), this._binded = !1, this._isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints, window.mouseDebug = this, this.client = new p, this.delta = new p, this.movement = new p, this.velocity = new e.Vector2, this.mouseDownPos = new p, this.mouseUpPos = new p, this.lastPos = new p, this.isDown = !1, this.downNow = 0, this.pressDuration = 0, this.lastModifier = null, this.downNow = 0, this._domEl = document.body, this._cursors = ["grab", "grabbing", "pointer", "move", "not-allowed"], this.bind()
                    }
                    return Object(c.a)(t, [{
                        key: "bind",
                        value: function() {
                            this._binded || (this._domEl.addEventListener("touchstart", this._handleMouseDown, !1), this._domEl.addEventListener("touchstart", this._onTouchStart, !1), this._domEl.addEventListener("touchend", this._handleMouseUp, !1), this._domEl.addEventListener("touchmove", this._handleMouseMove, !1), this._domEl.addEventListener("mousedown", this._handleMouseDown, !1), this._domEl.addEventListener("mouseup", this._handleMouseUp, !1), this._domEl.addEventListener("mousemove", this._handleMouseMove, !1), this._domEl.addEventListener("mouseenter", this._handleMouseEnter, !1), this._domEl.addEventListener("mouseleave", this._handleMouseLeave, !1), this._binded = !0)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            this._binded && (this._domEl.removeEventListener("touchstart", this._handleMouseDown, !1), this._domEl.removeEventListener("touchend", this._handleMouseUp, !1), this._domEl.removeEventListener("touchmove", this._handleMouseMove, !1), this._domEl.removeEventListener("mousedown", this._handleMouseDown, !1), this._domEl.removeEventListener("mouseup", this._handleMouseUp, !1), this._domEl.removeEventListener("mousemove", this._handleMouseMove, !1), this._domEl.removeEventListener("mouseenter", this._handleMouseEnter, !1), this._domEl.removeEventListener("mouseleave", this._handleMouseLeave, !1), this._binded = !1)
                        }
                    }, {
                        key: "addCursor",
                        value: function(e) {
                            if (e !== this.lastModifier) {
                                for (var t = 0, i = this._cursors.length; t < i; t++) {
                                    var n = this._cursors[t];
                                    this._domEl.classList.toggle("cursor-".concat(n), n === e)
                                }
                                this.lastModifier = e
                            }
                        }
                    }, {
                        key: "removeCursor",
                        value: function(e) {
                            this.lastModifier = null, this._domEl.classList.remove("cursor-".concat(e))
                        }
                    }, {
                        key: "addUp",
                        value: function(e) {
                            u.a.on(t.UPPED, e)
                        }
                    }, {
                        key: "removeUp",
                        value: function(e) {
                            u.a.off(t.UPPED, e)
                        }
                    }, {
                        key: "addDown",
                        value: function(e) {
                            u.a.on(t.DOWNED, e)
                        }
                    }, {
                        key: "removeDown",
                        value: function(e) {
                            u.a.off(t.DOWNED, e)
                        }
                    }, {
                        key: "addMove",
                        value: function(e) {
                            u.a.on(t.MOVED, e)
                        }
                    }, {
                        key: "removeMove",
                        value: function(e) {
                            u.a.off(t.MOVED, e)
                        }
                    }, {
                        key: "addLeave",
                        value: function(e) {
                            u.a.on(t.LEFT, e)
                        }
                    }, {
                        key: "removeLeave",
                        value: function(e) {
                            u.a.off(t.LEFT, e)
                        }
                    }, {
                        key: "_onTouchStart",
                        value: function() {}
                    }, {
                        key: "_setPointerMovement",
                        value: function(e, t) {
                            this.movement.x = e - this.mouseDownPos.x, this.movement.y = t - this.mouseDownPos.y
                        }
                    }, {
                        key: "_setPointerDelta",
                        value: function(e, t) {
                            this.delta.x = e - this.lastPos.x, this.delta.y = t - this.lastPos.y, this.velocity.x = this.delta.x, this.velocity.y = this.delta.y
                        }
                    }, {
                        key: "_getClientValues",
                        value: function(e) {
                            var t, i;
                            return this._isTouchDevice ? e.touches && e.touches[0] ? (t = e.touches[0].clientX, i = e.touches[0].clientY) : e.changedTouches && e.changedTouches[0] ? (t = e.changedTouches[0].clientX, i = e.changedTouches[0].clientY) : (t = e.clientX, i = e.clientY) : (t = e.clientX, i = e.clientY), {
                                clientX: t,
                                clientY: i
                            }
                        }
                    }, {
                        key: "_handleMouseDown",
                        value: function(e) {
                            var i = this._getClientValues(e),
                                n = i.clientX,
                                s = i.clientY;
                            this.client.set(n, s), this.lastPos.set(n, s), this.mouseDownPos.set(n, s), this.downNow = (new Date).getTime(), this.isDown = !0, u.a.emit(t.DOWNED, e)
                        }
                    }, {
                        key: "_handleMouseUp",
                        value: function(e) {
                            var i = this._getClientValues(e),
                                n = i.clientX,
                                s = i.clientY;
                            e.touches && (s = -2e3), this.client.set(n, s), this.lastPos.set(n, s), this.mouseUpPos.set(n, s), this._setPointerMovement(n, s), this._setPointerDelta(n, s);
                            var o = (new Date).getTime();
                            this.pressDuration = o - this.downNow, this.isDown = !1, u.a.emit(t.UPPED, e)
                        }
                    }, {
                        key: "_handleMouseMove",
                        value: function(e) {
                            var i = this._getClientValues(e),
                                n = i.clientX,
                                s = i.clientY;
                            this.client.set(n, s), this._setPointerDelta(n, s), u.a.emit(t.MOVED, e), this.lastPos.set(n, s)
                        }
                    }, {
                        key: "_handleMouseLeave",
                        value: function(e) {
                            this.velocity.set(0, 0);
                            var i = this._getClientValues(e),
                                n = i.clientX,
                                s = i.clientY;
                            this.lastPos.set(n, s), u.a.emit(t.LEFT, e), this.isDown = !1
                        }
                    }, {
                        key: "_handleMouseEnter",
                        value: function(e) {
                            var t = this._getClientValues(e),
                                i = t.clientX,
                                n = t.clientY;
                            this.lastPos.set(i, n), this.velocity.set(0, 0)
                        }
                    }, {
                        key: "domEl",
                        get: function() {
                            return this._domEl
                        }
                    }]), t
                }(), o.UPPED = "Mouse_upped", o.DOWNED = "Mouse_downed", o.MOVED = "Mouse_moved", o.LEFT = "Mouse_left", s = a, Object(h.a)(s.prototype, "_handleMouseDown", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handleMouseDown"), s.prototype), Object(h.a)(s.prototype, "_handleMouseUp", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handleMouseUp"), s.prototype), Object(h.a)(s.prototype, "_handleMouseMove", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handleMouseMove"), s.prototype), Object(h.a)(s.prototype, "_handleMouseLeave", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handleMouseLeave"), s.prototype), Object(h.a)(s.prototype, "_handleMouseEnter", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handleMouseEnter"), s.prototype), s),
                p = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        Object(r.a)(this, e), this.norm = {
                            x: t / l.a.width,
                            y: i / l.a.height
                        }, this.tilt = {
                            x: t / l.a.width * 2 - 1,
                            y: i / l.a.height * 2 - 1
                        }, this.x = t, this.y = i
                    }
                    return Object(c.a)(e, [{
                        key: "set",
                        value: function(e, t) {
                            this.x = e, this.y = t
                        }
                    }, {
                        key: "x",
                        set: function(e) {
                            this._x = e, this.norm.x = e / l.a.width, this.tilt.x = 2 * this.norm.x - 1
                        },
                        get: function() {
                            return this._x
                        }
                    }, {
                        key: "y",
                        set: function(e) {
                            this._y = e, this.norm.y = e / l.a.height, this.tilt.y = 2 * this.norm.y - 1
                        },
                        get: function() {
                            return this._y
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return (Math.abs(this._x) + Math.abs(this._y)) / 2
                        }
                    }]), e
                }();
            t.a = new d
        }).call(this, i(11), i(20).bind)
    }, , , , , , , , , , , , , , , , , , function(e, t, i) {
        "use strict";
        (function(e, n) {
            var s, o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(5),
                l = i(7),
                u = i(0),
                d = i(13),
                p = new e.Vector2,
                f = (s = function(e) {
                    function t() {
                        var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            antialias: Object(d.b)("antialias"),
                            alpha: !0,
                            autoClear: !0,
                            powerPreference: "high-performance",
                            dpr: 1
                        };
                        return Object(o.a)(this, t), (e = Object(r.a)(this, Object(c.a)(t).call(this, i)))._postProcessing = null, e._dpr = u.j.DPR, e.setPixelRatio(e._dpr), e.setClearColor(16777215, 0), e._bind(), e._setSize(), e
                    }
                    return Object(h.a)(t, e), Object(a.a)(t, [{
                        key: "update",
                        value: function(e, t) {}
                    }, {
                        key: "destroy",
                        value: function() {
                            this._unbind(), this.dispose()
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            u.h.addResize(this._onWindowResize)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            u.h.removeResize(this._onWindowResize)
                        }
                    }, {
                        key: "_setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.h.width,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.h.height;
                            this._dpr = u.j.DPR, this.setPixelRatio(this._dpr), this.setSize(e, t)
                        }
                    }, {
                        key: "_onWindowResize",
                        value: function(e, t) {
                            this._setSize(e, t)
                        }
                    }, {
                        key: "dpr",
                        set: function(e) {
                            this._dpr = e, this.setPixelRatio(e), this.getSize(p), this._postProcessing.setSize(p.x, p.y)
                        }
                    }]), t
                }(e.WebGLRenderer), Object(l.a)(s.prototype, "_onWindowResize", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onWindowResize"), s.prototype), s);
            t.a = f
        }).call(this, i(11), i(20).bind)
    }, , , , function(e, t, i) {
        "use strict";
        (function(e) {
            var n, s = i(2),
                o = i(3),
                a = i(7),
                r = i(0),
                c = i(6),
                h = (n = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = (t.direction, t.damping);
                        Object(s.a)(this, e), this.scrollTop = 0, this.scrollLeft = 0, this.scrollTopTarget = 0, this.scrollLeftTarget = 0, this.direction = "x", this.damping = i || 0, this.infiniteScroll = !1, this.locked = !1, this.lastDelta = 0, this.limit = {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            }
                        }, this.dir = 1
                    }
                    return Object(o.a)(e, [{
                        key: "bind",
                        value: function() {
                            window.addEventListener("wheel", this._handleWheel, !1), r.f && r.f.addMove(this._onPointerMove)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            window.removeEventListener("wheel", this._handleWheel, !1), r.f.removeMove(this._onPointerMove)
                        }
                    }, {
                        key: "infinite",
                        value: function() {
                            this.infiniteScroll = !0
                        }
                    }, {
                        key: "_handleWheel",
                        value: function(e) {
                            if (!this.locked) {
                                var t = 1.1 * e.deltaY;
                                e.deltaX && Math.abs(e.deltaX) > Math.abs(e.deltaY) && (t = 1.1 * e.deltaX), "windows" === r.a.os && (t *= 1.05), "firefox" === r.a.browserName && (1 === e.deltaMode ? t *= 30 : t *= 1.11), this.lastDelta = t, "x" === this.direction ? (this.scrollLeftTarget += t, this.infiniteScroll || (this.scrollLeftTarget = Object(c.a)(this.scrollLeftTarget, this.limit.min.x, this.limit.max.x))) : (this.scrollTopTarget += t, this.infiniteScroll || (this.scrollTopTarget = Object(c.a)(this.scrollTopTarget, this.limit.min.y, this.limit.max.y)))
                            }
                        }
                    }, {
                        key: "_onPointerMove",
                        value: function() {
                            !this.locked && r.f.isDown && ("x" === this.direction ? this.lastDelta -= 1.8 * r.f.velocity.x : this.lastDelta -= 1.8 * r.f.velocity.y)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.desotroyed = !0, this.locked = !0, this.unbind()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.locked || (this.infiniteScroll || (this.scrollLeftTarget = Object(c.a)(this.scrollLeftTarget, this.limit.min.x, this.limit.max.x), this.scrollTopTarget = Object(c.a)(this.scrollTopTarget, this.limit.min.y, this.limit.max.y)), this.lastDelta ? (this.dir = this.lastDelta < 0 ? -1 : 1, this.delta = this.lastDelta, this.lastDelta = 0) : this.delta = 0, this.scrollTop += (this.scrollTopTarget - this.scrollTop) * this.damping, this.scrollLeft += (this.scrollLeftTarget - this.scrollLeft) * this.damping)
                        }
                    }]), e
                }(), Object(a.a)(n.prototype, "_handleWheel", [e], Object.getOwnPropertyDescriptor(n.prototype, "_handleWheel"), n.prototype), Object(a.a)(n.prototype, "_onPointerMove", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onPointerMove"), n.prototype), n);
            t.a = h
        }).call(this, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18), i(19);
            var s, o, a, r = i(2),
                c = i(3),
                h = i(7),
                l = i(0),
                u = i(119),
                d = i(28),
                p = i(13),
                f = i(211),
                v = Object(d.c)("Scenes", "#8a3ebc", !1),
                m = Object(d.c)("Scenes", d.b, !1),
                _ = (a = o = function() {
                    function t(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var n in Object(r.a)(this, t), this._scenesMap = {}, i) this._scenesMap[n.toLowerCase()] = i[n];
                        this._world = e, this._scenes = [], this._current = null, this._last = null, this._changeOrder = [], this._guiFolder = null, Object(p.b)("stats") && (this._stats = new f.a), this.renderScene = new u.a, this._bind()
                    }
                    return Object(c.a)(t, [{
                        key: "create",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            e = e.toLowerCase(), this._world.resume();
                            var n = this._scenesMap[e],
                                s = this.get(e);
                            if (n) {
                                if (s && i) return m("Create() : Scene '".concat(e, "' is already created")), Promise.resolve(s);
                                var o;
                                o = s && !i ? this.destroy(e) : Promise.resolve();
                                var a = new n(e);
                                return this._scenes.push(a), l.b.emit(t.INSTANCED, a), o.then((function() {
                                    return a.create()
                                })).then((function() {
                                    return v("Scene '".concat(e, "' created")), l.b.emit(t.CREATED, a), a
                                }))
                            }
                            m("Create() : Scene '".concat(e, "' does not exist"))
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            var t = this;
                            e = e.toLowerCase();
                            var i = this.get(e);
                            return i ? i.destroy().then((function() {
                                return v("Scene '".concat(e, "' destroyed")), t._scenes.splice(t._scenes.indexOf(i), 1), i
                            })) : (m("Destroy() : Scene '".concat(e, "' does not exist")), Promise.resolve())
                        }
                    }, {
                        key: "change",
                        value: function() {
                            var e = this,
                                i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                            i = i.toLowerCase();
                            var a = this._current,
                                r = Promise.resolve(),
                                c = a && i === a.name;
                            return a && !c ? (r = n ? this.destroy(a.name) : this.pause(a.name), v("Scene changed from '".concat(a.name, "' to '").concat(i, "'"))) : v("Scene changed to '".concat(i, "'")), "loader" !== i && this._world.loading ? (this.pending = i, r) : r.then((function() {
                                return e._changeOrder.push(i), Promise.resolve(e.get(i) || e.create(i))
                            })).then((function(i) {
                                return i && e._changeOrder[e._changeOrder.length - 1] === i.name ? (e._last = e._current, e._current = i, e._world.scene = i, o && e._last ? c || e.swap(e._last, e._current) : e.setVisible(e._current), l.b.emit(t.CHANGED, i), e._updateGUI(), s || !i.running ? e.start(e._current.name) : i) : Promise.resolve()
                            }))
                        }
                    }, {
                        key: "start",
                        value: function(e) {
                            var i = this.get(e);
                            return i ? (clearTimeout(i.runningTo), i.running ? (m("Start() : Scene '".concat(e, "' already started")), Promise.resolve()) : (i.running = !0, i.start().then((function() {
                                return v("Scene '".concat(e, "' started")), l.b.emit(t.STARTED, i), i
                            })))) : (m("Start() : Scene '".concat(e, "' does not exist")), Promise.resolve())
                        }
                    }, {
                        key: "pause",
                        value: function(e) {
                            var i = this.get(e);
                            return i ? i.running ? (clearTimeout(i.runningTo), i.runningTo = setTimeout((function() {
                                i.running = !1
                            }), 1e3), i.pause().then((function() {
                                return v("Scene '".concat(e, "' paused")), l.b.emit(t.PAUSED, i), i
                            }))) : (m("Pause() : Scene '".concat(e, "' already paused")), Promise.resolve()) : (m("Pause() : Scene '".concat(e, "' does not exist")), Promise.resolve())
                        }
                    }, {
                        key: "update",
                        value: function(e, i) {
                            var n = this._scenes;
                            l.b.emit(t.BEFORE_RENDER, e, i), this.delta = e, this.time = i, this._stats && this._stats.begin();
                            for (var s = 0, o = n.length; s < o; s++) {
                                var a = n[s];
                                a.running && a.update(e, i)
                            }
                            this.renderScene.update(e, i), this._stats && this._stats.end(), l.b.emit(t.AFTER_RENDER, e, i)
                        }
                    }, {
                        key: "pauseUpdate",
                        value: function(e, t) {
                            this.renderScene.update(e, t)
                        }
                    }, {
                        key: "get",
                        value: function() {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = 0, i = this._scenes.length; t < i; t++) {
                                var n = this._scenes[t],
                                    s = n.name.toLowerCase();
                                if (s === e) return n
                            }
                            return null
                        }
                    }, {
                        key: "createGUI",
                        value: function() {}
                    }, {
                        key: "destroyGUI",
                        value: function() {}
                    }, {
                        key: "setVisible",
                        value: function(e) {
                            this.renderScene.rtt1 = e.rtt.texture, this.renderScene.rtt2 = e.rtt.texture, this.setSize(), this.renderScene.progress = 1
                        }
                    }, {
                        key: "swap",
                        value: function(i, n) {
                            var s = this;
                            i && (this.renderScene.rtt1 = i.rtt.texture), this.renderScene.rtt2 = n.rtt.texture, this.setSize(), e.killTweensOf(this.renderScene, {
                                progress: !0
                            });
                            var o = "fade",
                                a = {};
                            "loader" !== i.name && ("about" === i.name && "home" === n.name ? (o = "about-reverse", a.ease = "power4.in", a.duration = .6, a.delay = .2) : "about" === n.name && (o = "about", a.ease = "power4.out", a.duration = .6, a.delay = .2)), this.renderScene.setTransition(o), e.set(this.renderScene, {
                                progress: 0
                            }), e.to(this.renderScene, {
                                progress: 1,
                                ease: a.ease || "power2.out",
                                duration: a.duration || .7,
                                delay: a.delay || .3,
                                onComplete: function() {
                                    s.renderScene.setTransition("basic")
                                }
                            }), i.onSwapLeave(n), n.onSwap(i), l.b.emit(t.SWAPPED, i, n), n.update(this.delta || 0, this.time || 0)
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = l.h.width,
                                t = l.h.height;
                            this._last && this.renderScene.delta < 1 && this._last.setSize(e, t), this._current && this._current.setSize(e, t)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            l.h.addResize(this._onResize)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            l.h.removeResize(this._onResize)
                        }
                    }, {
                        key: "_updateGUI",
                        value: function() {}
                    }, {
                        key: "_onResize",
                        value: function() {
                            this.setSize()
                        }
                    }, {
                        key: "scene",
                        get: function() {
                            return this._current
                        }
                    }]), t
                }(), o.INSTANCED = "Scenes_instanced", o.STARTED = "Scenes_started", o.PAUSED = "Scenes_paused", o.CREATED = "Scenes_created", o.CHANGED = "Scenes_changed", o.BEFORE_RENDER = "Scenes_before_render", o.AFTER_RENDER = "Scenes_after_render", o.SWAPPED = "Scenes_swapped", s = a, Object(h.a)(s.prototype, "create", [n], Object.getOwnPropertyDescriptor(s.prototype, "create"), s.prototype), Object(h.a)(s.prototype, "destroy", [n], Object.getOwnPropertyDescriptor(s.prototype, "destroy"), s.prototype), Object(h.a)(s.prototype, "change", [n], Object.getOwnPropertyDescriptor(s.prototype, "change"), s.prototype), Object(h.a)(s.prototype, "start", [n], Object.getOwnPropertyDescriptor(s.prototype, "start"), s.prototype), Object(h.a)(s.prototype, "pause", [n], Object.getOwnPropertyDescriptor(s.prototype, "pause"), s.prototype), Object(h.a)(s.prototype, "_onResize", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onResize"), s.prototype), s);
            t.a = _
        }).call(this, i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(8),
                c = i(5),
                h = i(160),
                l = i(210),
                u = i(294),
                d = i(12),
                p = i(0),
                f = function(t) {
                    function i(e, t) {
                        var s;
                        return Object(n.a)(this, i), (s = Object(o.a)(this, Object(a.a)(i).call(this))).progress = {
                            value: 0
                        }, s.tDiffuse1 = {
                            value: null
                        }, s.tDiffuse2 = {
                            value: null
                        }, s._retinaScene = e, s._loaderScene = t, s._init(), s.setSize(), s
                    }
                    return Object(c.a)(i, t), Object(s.a)(i, [{
                        key: "destroy",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = p.h.width,
                                t = p.h.height;
                            this.scale.set(e, t, 1), this.updateMatrix(), this.mesh.material = this.material
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.material.update(e, t)
                        }
                    }, {
                        key: "setTransition",
                        value: function(e) {
                            switch (e) {
                                case "fade":
                                    this.material = this.fadeTransition;
                                    break;
                                case "about":
                                    this.material = this.aboutTransition, this.material.uniforms.uReverse.value = 0;
                                    break;
                                case "about-reverse":
                                    this.material = this.aboutTransition, this.material.uniforms.uReverse.value = 1;
                                    break;
                                case "basic":
                                default:
                                    this.material = this.noTransition
                            }
                            this.mesh.material = this.material
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            this.geometry = d.a.GEOMS.quad, this.aboutTransition = new u.a(this), this.fadeTransition = new l.a(this), this.noTransition = new h.a(this), this.noTransitionRet = new h.a(this, {}, {
                                retina: !0
                            }), this.material = this.fadeTransition, this.mesh = new e.Mesh(this.geometry, this.material), this.add(this.mesh), this.matrixAutoUpdate = !1
                        }
                    }, {
                        key: "rtt1",
                        get: function() {
                            return this.tDiffuse1.value
                        },
                        set: function(e) {
                            this.tDiffuse1.value = e
                        }
                    }, {
                        key: "rtt2",
                        get: function() {
                            return this.tDiffuse2.value
                        },
                        set: function(e) {
                            this.tDiffuse2.value = e
                        }
                    }]), i
                }(e.Object3D);
            t.a = f
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nattribute vec3 position;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvoid main() {  \n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nvoid main() {\n  gl_FragColor = vec4(0.0);\n}\n"
    }, function(e, t, i) {
        "use strict";
        i(39), i(31), i(25), i(19), i(32);
        var n = i(21),
            s = i(2),
            o = i(4),
            a = i(1),
            r = i(5),
            c = i(76),
            h = i(77),
            l = i(120);

        function u(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }
        var d = function(e) {
            function t(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                Object(s.a)(this, t);
                var r = i.vertexShader || h.a,
                    c = l.a;
                return Object(o.a)(this, Object(a.a)(t).call(this, e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(i), !0).forEach((function(t) {
                            Object(n.a)(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }({}, i, {
                    vertexShader: r,
                    fragmentShader: c
                })))
            }
            return Object(r.a)(t, e), t
        }(c.a);
        t.a = d
    }, function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(4),
            o = i(1),
            a = i(5),
            r = i(56),
            c = i(212),
            h = function(e) {
                function t(e) {
                    var i;
                    Object(n.a)(this, t), (i = Object(s.a)(this, Object(o.a)(t).call(this, e))).domElement.classList.add("stats"), i.domElement.classList.add("stats--is-visible"), document.body.appendChild(i.domElement);
                    return r.a.addUp((function(e, t) {
                        r.a.isDown("shift") && "g" === t && i.domElement.classList.toggle("stats--is-visible")
                    })), i
                }
                return Object(a.a)(t, e), t
            }(i.n(c).a);
        t.a = h
    }, , function(e, t, i) {
        "use strict";
        (function(e) {
            var n, s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(8),
                h = i(5),
                l = i(7),
                u = i(78),
                d = i(79),
                p = i(0),
                f = i(124),
                v = i(87),
                m = i(227),
                _ = i(229),
                y = i(236),
                b = i(239),
                g = i(159),
                w = i(248),
                x = i(253),
                O = i(265),
                k = i(266),
                j = i(93),
                S = (n = function(e) {
                    function t() {
                        var e;
                        return Object(s.a)(this, t), (e = Object(a.a)(this, Object(r.a)(t).call(this, "home", {
                            postProcessing: !1,
                            physics: !0,
                            noBatcher: !0
                        })))._renderer.setClearColor(16777215, 1), e
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "destroy",
                        value: function() {
                            return Object(c.a)(Object(r.a)(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.h.width,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.h.height;
                            Object(c.a)(Object(r.a)(t.prototype), "setSize", this).call(this, e, i), this._pRenderCanvas && (this._pRenderCanvas.width = e, this._pRenderCanvas.height = i);
                            for (var n = 0, s = 0, o = this._screens.length; s < o; s++) {
                                var a = this._screens[s];
                                a.screenOffset = n, n += a.screenWidth
                            }
                            p.i.totalWidth = n;
                            for (var h = 0, l = this._entities.length; h < l; h++) this._entities[h].setSize(e, i);
                            if (!p.a.isMobile) {
                                for (var u = this._camera.position.x % (p.i.totalWidth * p.h.width), d = 0, f = 1 / 0, v = 0, m = this._allScreens.length; v < m; v++) {
                                    var _ = Math.abs(u - this._allScreens[v].screenOffset * p.h.width);
                                    _ < f && (f = _, d = v)
                                }
                                this._camera.position.x = this._camera.positionTarget.x = this._allScreens[d].screenOffset * p.h.width, 0 === d && (this._camera.position.x = this._camera.positionTarget.x = 0)
                            }
                            this._mobile && this._mobile.setSize(e, i), this._overlay.setSize(e, i)
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function(e) {
                            var i = this;
                            Object(c.a)(Object(r.a)(t.prototype), "onSwapLeave", this).call(this, e), clearTimeout(this._resetCamTo), p.a.isMobile || (this._resetCamTo = setTimeout((function() {
                                i._camera.position.x = i._camera.positionTarget.x = 0
                            }), 1200))
                        }
                    }, {
                        key: "onSwap",
                        value: function(e) {
                            Object(c.a)(Object(r.a)(t.prototype), "onSwap", this).call(this, e), clearTimeout(this._resetCamTo), p.b.emit("home:swapped")
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_init", this).call(this)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            var e = this;
                            p.d.addUp(this._onKeyUp), p.b.on("project_overlay:closed", this._onOverlayClosed), p.a.isMobile && p.b.on("home:mounted", (function() {
                                e.setSize()
                            }))
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            p.d.removeUp(this._onKeyUp), p.b.off("project_overlay:closed", this._onOverlayClosed)
                        }
                    }, {
                        key: "_createLights",
                        value: function() {}
                    }, {
                        key: "_createCameras",
                        value: function() {
                            this._camera = new d.a({
                                near: -110,
                                far: 110,
                                isDefault: !0
                            }), this._camera.position.set(0, 0, 100), this._camera.lookAt(0, 0, 0), this._camera.positionTarget = this._camera.position.clone(), this.addCamera(this._camera), this._world.retinaScene.camera = this._camera
                        }
                    }, {
                        key: "_createPostProcessing",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_createPostProcessing", this).call(this)
                        }
                    }, {
                        key: "_createEntities",
                        value: function() {
                            var e = this;
                            Object(c.a)(Object(r.a)(t.prototype), "_createEntities", this).call(this), this._mouse = new f.a(this), this.addEntity(this._mouse), this._world.mouse = this._mouse, this._world.mousePos = this._mouse.mesh.position, p.a.isMobile || (this._firstLoop = new g.a(this, {
                                background: "#cbe2b0",
                                first: !0
                            }), this.addEntity(this._firstLoop));
                            var i, n = j.a.projects;
                            i = p.a.isMobile ? [{
                                type: "intro"
                            }] : [{
                                type: "intro"
                            }, {
                                type: "scroll",
                                opts: {}
                            }, {
                                type: "project",
                                opts: {
                                    data: n[0]
                                }
                            }, {
                                type: "project",
                                opts: {
                                    data: n[1]
                                }
                            }, {
                                type: "project",
                                opts: {
                                    data: n[2]
                                }
                            }, {
                                type: "pause",
                                opts: {
                                    background: "#e8e8e0",
                                    text: "Keep scrooooolling",
                                    id: "e"
                                },
                                textOffset: .23
                            }, {
                                type: "project",
                                opts: {
                                    data: n[3]
                                }
                            }, {
                                type: "project",
                                opts: {
                                    data: n[4]
                                }
                            }, {
                                type: "project",
                                opts: {
                                    data: n[5]
                                }
                            }, {
                                type: "pause",
                                opts: {
                                    background: "#e8e8e0",
                                    text: "It's almost the end!",
                                    id: "l"
                                }
                            }, {
                                type: "project",
                                opts: {
                                    data: n[6]
                                }
                            }, {
                                type: "project",
                                opts: {
                                    data: n[7]
                                }
                            }, {
                                type: "project",
                                opts: {
                                    data: n[8],
                                    last: !0
                                }
                            }, {
                                type: "loop",
                                opts: {}
                            }], this._allScreens = [], this._screens = [], this._projects = [], p.i.screens = this._screens, p.a.isMobile || this._allScreens.push(this._firstLoop);
                            var s = 0;
                            i.forEach((function(t, i) {
                                var n, o = t.type,
                                    a = t.opts;
                                a || (a = {}), a.screenOffset = s, "intro" === o ? n = new w.a(e, a) : "scroll" === o ? n = new O.a(e, a) : "project" === o ? (n = new x.a(e, a), e._projects.push(n)) : "pause" === o ? n = new k.a(e, a) : "loop" === o && (n = new g.a(e, a)), n && (s += n.screenWidth, e.addEntity(n)), e._allScreens.push(n), p.i.screens.push(n)
                            })), p.i.allScreens = this._allScreens, p.i.totalWidth = s, this._ground = new v.a(this, {
                                size: i.length + 2,
                                isHome: !0
                            }), this.addEntity(this._ground);
                            for (var o = 0; o < 10; o++) this._cubeA = new m.a(this), this.addEntity(this._cubeA);
                            p.a.isMobile && (this._mobile = new b.a(this, {}), this.add(this._mobile)), this._overlay = new _.a(this, {}), this.add(this._overlay), this._scroll = new y.a(this, {}), this.addEntity(this._scroll)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_createGUI", this).call(this), this.pane && (this.physics = this.pane.addFolder({
                                title: "🍎 Home Physics"
                            }), this.physics.expanded = !1, this.physics.addInput(this.engine, "constraintIterations", {
                                min: 1,
                                max: 10,
                                step: 1
                            }), this.physics.addInput(this.engine, "positionIterations", {
                                min: 1,
                                max: 10,
                                step: 1
                            }), this.physics.addInput(this.engine, "velocityIterations", {
                                min: 1,
                                max: 10,
                                step: 1
                            }), this.physics.addInput(this.pWorld.gravity, "y", {
                                min: -10,
                                max: 10,
                                step: .01
                            }))
                        }
                    }, {
                        key: "_afterCreate",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_afterCreate", this).call(this), p.b.emit("home:looped", {
                                dir: 1
                            }), p.b.emit("home:looped", {
                                dir: -1
                            }), this.setSize()
                        }
                    }, {
                        key: "_onKeyUp",
                        value: function(e) {
                            80 === e.keyCode && this._togglePhysicRender()
                        }
                    }, {
                        key: "_onUpdate",
                        value: function(e, t) {
                            if (p.i.isOverlay) return this._mouse.update(e, t), p.a.isDesktop && this._camera.position.lerp(this._camera.positionTarget, 1), void this._overlay.update(e, t);
                            p.a.isMobile ? p.i.homeScrollbar && p.i.homeScrollbar.render() : p.i.scroll.update(e, t), p.a.isDesktop ? (this._camera.positionTarget.x += p.i.scroll.delta, this._camera.position.lerp(this._camera.positionTarget, .1), this._camera.position.x < -1 * p.h.width ? (this._camera.positionTarget.x += p.i.totalWidth * p.h.width, this._camera.position.x += p.i.totalWidth * p.h.width, p.b.emit("home:looped", {
                                dir: 1
                            })) : this._camera.position.x > (p.i.totalWidth - 1) * p.h.width && (this._camera.positionTarget.x -= p.i.totalWidth * p.h.width, this._camera.position.x -= p.i.totalWidth * p.h.width, p.b.emit("home:looped", {
                                dir: -1
                            }))) : (this._camera.position.x = 0, p.i.isOverlay || p.i.homeScrollbar && (this._camera.position.y = -p.i.homeScrollbar.scrollTop)), this._updatePhysics();
                            for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t);
                            this._scroll.update(e, t), this._mobile && this._mobile.update(e, t), this._overlay.update(e, t), p.b.emit("home:tick", this, this._screens, this._projects)
                        }
                    }, {
                        key: "_onOverlayClosed",
                        value: function() {}
                    }]), t
                }(u.a), Object(l.a)(n.prototype, "_onKeyUp", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onKeyUp"), n.prototype), Object(l.a)(n.prototype, "_onOverlayClosed", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onOverlayClosed"), n.prototype), n);
            t.a = S
        }).call(this, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        i(19);
        var n = i(2),
            s = i(3),
            o = i(157),
            a = i.n(o),
            r = i(13),
            c = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    Object(n.a)(this, e), this._tasks = t, this._requestId = null, this._runTasks = this._runTasks.bind(this)
                }
                return Object(s.a)(e, [{
                    key: "add",
                    value: function(e) {
                        if ("function" == typeof e) this._tasks.push(e);
                        else if (Object(r.c)(e))
                            for (var t = 0, i = e.length; t < i; t++) this.add(e)
                    }
                }, {
                    key: "execute",
                    value: function() {
                        var e = this;
                        return this._tasks.length ? new Promise((function(t, i) {
                            e._requestId = e._request(t)
                        })) : Promise.resolve()
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this._tasks = null, this._requestId && a.a.cancel(this._requestId)
                    }
                }, {
                    key: "_runTasks",
                    value: function(e, t) {
                        for (; this._tasks.length && e.timeRemaining() > 0;) this._tasks.shift()();
                        this._tasks.length ? this._requestId = this._request(t) : t()
                    }
                }, {
                    key: "_request",
                    value: function(e) {
                        var t = this;
                        return a.a.request((function(i) {
                            return t._runTasks(i, e)
                        }))
                    }
                }]), e
            }();
        t.a = c
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            var s, o = i(2),
                a = i(3),
                r = i(7),
                c = i(12),
                h = i(63),
                l = i(220),
                u = i(42),
                d = i(0),
                p = i(28),
                f = Object(p.c)("PostProcessing", "#2849cc", !1),
                v = (s = function() {
                    function t(i, n, s) {
                        var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        Object(o.a)(this, t), this._renderer = c.a.renderer, this._scene = i, this._camera = n, this.passEnabledNb = 0, this._enabled = s, this._noRenderToScreen = a, this._gui = u.a, this._enabled ? this._composer = new l.a(this._renderer, {
                            noRenderToScreen: this._noRenderToScreen
                        }) : this._defaultRtt = new e.WebGLRenderTarget(d.h.width, d.h.height, {
                            minFilter: e.LinearFilter,
                            magFilter: e.LinearFilter,
                            format: e.RGBAFormat,
                            type: e.UnsignedByteType,
                            depthWrite: !1,
                            depthBuffer: !1,
                            stencilBuffer: !1
                        }), this._bind()
                    }
                    return Object(a.a)(t, [{
                        key: "addPass",
                        value: function(e, t) {
                            this.enabled && this._composer.addPass(e, t)
                        }
                    }, {
                        key: "removePass",
                        value: function(e) {
                            this._composer.removePass(e)
                        }
                    }, {
                        key: "getPass",
                        value: function(e) {
                            return this._composer.getPass(e)
                        }
                    }, {
                        key: "destroyPasses",
                        value: function() {
                            this._composer && this._composer.destroyPasses()
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            if (this._enabled) this._composer.setSize(e, t);
                            else {
                                var i = this.dpr || d.j.DPR;
                                this._defaultRtt.setSize(e * i, t * i)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this._enabled ? this._composer.render(e, t) : (this._renderer.setRenderTarget(this._defaultRtt), this._renderer.clear(), this._renderer.render(this._scene, this._camera))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._unbind(), this._destroyGUI(), this._composer && this._composer.destroy(), this._defaultRtt && this._defaultRtt.dispose()
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            d.b.on(h.a.CHANGED, this._onCameraChanged)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            d.b.off(h.a.CHANGED, this._onCameraChanged)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {}
                    }, {
                        key: "_destroyGUI",
                        value: function() {
                            this._guiFolder && this._gui.removeFolder(this._guiFolder)
                        }
                    }, {
                        key: "_onCameraChanged",
                        value: function(e) {
                            var t = e.scene,
                                i = e.camera;
                            t === this._scene && (this._camera = i)
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            e !== this._enabled && (f(e ? "Enabled" : "Disabled"), this._guiEnabledCtrl && this._guiEnabledCtrl.updateDisplay())
                        }
                    }, {
                        key: "scene",
                        set: function(e) {
                            this._scene = e, this._guiFolder && this._destroyGUI(), this._createGUI()
                        }
                    }, {
                        key: "camera",
                        set: function(e) {
                            this._camera = e
                        }
                    }, {
                        key: "rtt",
                        get: function() {
                            return this._enabled ? this.useWriteBuffer ? this._composer.writeBuffer : this._composer.readBuffer : this._defaultRtt
                        }
                    }]), t
                }(), Object(r.a)(s.prototype, "_onCameraChanged", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onCameraChanged"), s.prototype), s);
            t.a = v
        }).call(this, i(11), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s, o = i(2),
                a = i(3),
                r = i(4),
                c = i(41),
                h = i(1),
                l = i(8),
                u = i(5),
                d = i(7),
                p = i(121),
                f = i(217),
                v = (i(12), s = function(t) {
                    function i() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object(o.a)(this, i), (e = Object(r.a)(this, Object(h.a)(i).call(this, t))).name = t.name || "Orbit Camera", e.controls = new f.a(Object(c.a)(e), t.domEl || document.body), e.controls.enabled = !1, e.controls.enableKeys = !1, e.controls.target.set(0, 0, 0), e.position.set(50, 50, 50), e
                    }
                    return Object(u.a)(i, t), Object(a.a)(i, [{
                        key: "createGUI",
                        value: function(e) {}
                    }, {
                        key: "destroy",
                        value: function() {
                            Object(l.a)(Object(h.a)(i.prototype), "destroy", this).call(this), this.controls.destroy()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            Object(l.a)(Object(h.a)(i.prototype), "update", this).call(this, e, t), this.controls.enabled && this.controls.update()
                        }
                    }, {
                        key: "_onKeyDown",
                        value: function(e, t, i) {
                            switch (i) {
                                case "left":
                                    this._setLeftView();
                                    break;
                                case "up":
                                    this._setTopView();
                                    break;
                                case "right":
                                    this._setRightView();
                                    break;
                                case "down":
                                    this._setBottomView()
                            }
                        }
                    }, {
                        key: "_setTopView",
                        value: function() {
                            this.controls.target.copy(new e.Vector3), this.position.set(0, 200, 0)
                        }
                    }, {
                        key: "_setBottomView",
                        value: function() {
                            this.controls.target.copy(new e.Vector3), this.position.set(0, -200, 0)
                        }
                    }, {
                        key: "_setLeftView",
                        value: function() {
                            this.controls.target.copy(new e.Vector3), this.position.set(-200, 0, 0)
                        }
                    }, {
                        key: "_setRightView",
                        value: function() {
                            this.controls.target.copy(new e.Vector3), this.position.set(200, 0, 0)
                        }
                    }, {
                        key: "_createHelper",
                        value: function() {}
                    }, {
                        key: "_destroyHelper",
                        value: function() {}
                    }]), i
                }(p.a), Object(d.a)(s.prototype, "_onKeyDown", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onKeyDown"), s.prototype), s);
            t.a = v
        }).call(this, i(11), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(336), i(25), i(19);
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(41),
                c = i(5),
                h = function(t) {
                    function i(t, s) {
                        var c, h, l, u, d, p;
                        Object(n.a)(this, i), (c = Object(o.a)(this, Object(a.a)(i).call(this))).object = t, c.domElement = void 0 !== s ? s : document, c.enabled = !0, c.target = new e.Vector3, c.minDistance = 0, c.maxDistance = 1 / 0, c.minZoom = 0, c.maxZoom = 1 / 0, c.minPolarAngle = 0, c.maxPolarAngle = Math.PI, c.minAzimuthAngle = -1 / 0, c.maxAzimuthAngle = 1 / 0, c.enableDamping = !1, c.dampingFactor = .25, c.enableZoom = !0, c.zoomSpeed = 1, c.enableRotate = !0, c.rotateSpeed = 1, c.enablePan = !0, c.keyPanSpeed = 7, c.autoRotate = !1, c.autoRotateSpeed = 2, c.enableKeys = !0, c.keys = {
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            BOTTOM: 40
                        }, c.mouseButtons = {
                            ORBIT: e.MOUSE.LEFT,
                            ZOOM: e.MOUSE.MIDDLE,
                            PAN: e.MOUSE.RIGHT
                        }, c.target0 = c.target.clone(), c.position0 = c.object.position.clone(), c.zoom0 = c.object.zoom, c.getPolarAngle = function() {
                            return w.phi
                        }, c.getAzimuthalAngle = function() {
                            return w.theta
                        }, c.reset = function() {
                            f.target.copy(f.target0), f.object.position.copy(f.position0), f.object.zoom = f.zoom0, f.object.updateProjectionMatrix(), f.dispatchEvent(v), f.update(), b = y.NONE
                        }, c.update = (h = new e.Vector3, l = (new e.Quaternion).setFromUnitVectors(t.up, new e.Vector3(0, 1, 0)), u = l.clone().inverse(), d = new e.Vector3, p = new e.Quaternion, function() {
                            var e = f.object.position;
                            return h.copy(e).sub(f.target), h.applyQuaternion(l), w.setFromVector3(h), f.autoRotate && b === y.NONE && z(2 * Math.PI / 60 / 60 * f.autoRotateSpeed), w.theta += x.theta, w.phi += x.phi, w.theta = Math.max(f.minAzimuthAngle, Math.min(f.maxAzimuthAngle, w.theta)), w.phi = Math.max(f.minPolarAngle, Math.min(f.maxPolarAngle, w.phi)), w.makeSafe(), w.radius *= O, w.radius = Math.max(f.minDistance, Math.min(f.maxDistance, w.radius)), f.target.add(k), h.setFromSpherical(w), h.applyQuaternion(u), e.copy(f.target).add(h), f.object.lookAt(f.target), !0 === f.enableDamping ? (x.theta *= 1 - f.dampingFactor, x.phi *= 1 - f.dampingFactor) : x.set(0, 0, 0), O = 1, k.set(0, 0, 0), !!(j || d.distanceToSquared(f.object.position) > g || 8 * (1 - p.dot(f.object.quaternion)) > g) && (f.dispatchEvent(v), d.copy(f.object.position), p.copy(f.object.quaternion), j = !1, !0)
                        }), c.destroy = function() {
                            f.domElement.removeEventListener("contextmenu", Z, !1), f.domElement.removeEventListener("mousedown", N, !1), f.domElement.removeEventListener("wheel", Y, !1), f.domElement.removeEventListener("touchstart", K, !1), f.domElement.removeEventListener("touchend", Q, !1), f.domElement.removeEventListener("touchmove", X, !1), f.domElement.removeEventListener("mousemove", H, !1), f.domElement.removeEventListener("mouseup", W, !1), window.removeEventListener("keydown", q, !1)
                        };
                        var f = Object(r.a)(c),
                            v = {
                                type: "change"
                            },
                            m = {
                                type: "start"
                            },
                            _ = {
                                type: "end"
                            },
                            y = {
                                NONE: -1,
                                ROTATE: 0,
                                DOLLY: 1,
                                PAN: 2,
                                TOUCH_ROTATE: 3,
                                TOUCH_DOLLY: 4,
                                TOUCH_PAN: 5
                            },
                            b = y.NONE,
                            g = 1e-6,
                            w = new e.Spherical,
                            x = new e.Spherical,
                            O = 1,
                            k = new e.Vector3,
                            j = !1,
                            S = new e.Vector2,
                            C = new e.Vector2,
                            P = new e.Vector2,
                            M = new e.Vector2,
                            E = new e.Vector2,
                            D = new e.Vector2,
                            T = new e.Vector2,
                            L = new e.Vector2,
                            A = new e.Vector2;

                        function B() {
                            return Math.pow(.95, f.zoomSpeed)
                        }

                        function z(e) {
                            x.theta -= e
                        }

                        function U(e) {
                            x.phi -= e
                        }
                        var I, R = (I = new e.Vector3, function(e, t) {
                                I.setFromMatrixColumn(t, 0), I.multiplyScalar(-e), k.add(I)
                            }),
                            F = function() {
                                var t = new e.Vector3;
                                return function(e, i) {
                                    t.setFromMatrixColumn(i, 1), t.multiplyScalar(e), k.add(t)
                                }
                            }(),
                            G = function() {
                                var t = new e.Vector3;
                                return function(e, i) {
                                    var n = f.domElement === document ? f.domElement.body : f.domElement;
                                    if (Object.getPrototypeOf(f.object).isPerspectiveCamera) {
                                        var s = f.object.position;
                                        t.copy(s).sub(f.target);
                                        var o = t.length();
                                        o *= Math.tan(f.object.fov / 2 * Math.PI / 180), R(2 * e * o / n.clientHeight, f.object.matrix), F(2 * i * o / n.clientHeight, f.object.matrix)
                                    } else Object.getPrototypeOf(f.object).isOrthographicCamera ? (R(e * (f.object.right - f.object.left) / f.object.zoom / n.clientWidth, f.object.matrix), F(i * (f.object.top - f.object.bottom) / f.object.zoom / n.clientHeight, f.object.matrix)) : f.enablePan = !1
                                }
                            }();

                        function V(e) {
                            Object.getPrototypeOf(f.object).isPerspectiveCamera ? O /= e : Object.getPrototypeOf(f.object).isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom * e)), f.object.updateProjectionMatrix(), j = !0) : f.enableZoom = !1
                        }

                        function $(e) {
                            Object.getPrototypeOf(f.object).isPerspectiveCamera ? O *= e : Object.getPrototypeOf(f.object).isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom / e)), f.object.updateProjectionMatrix(), j = !0) : f.enableZoom = !1
                        }

                        function N(e) {
                            if (!1 !== f.enabled) {
                                if (e.button === f.mouseButtons.ORBIT) {
                                    if (!1 === f.enableRotate) return;
                                    ! function(e) {
                                        S.set(e.clientX, e.clientY)
                                    }(e), b = y.ROTATE
                                } else if (e.button === f.mouseButtons.ZOOM) {
                                    if (!1 === f.enableZoom) return;
                                    ! function(e) {
                                        T.set(e.clientX, e.clientY)
                                    }(e), b = y.DOLLY
                                } else if (e.button === f.mouseButtons.PAN) {
                                    if (!1 === f.enablePan) return;
                                    ! function(e) {
                                        M.set(e.clientX, e.clientY)
                                    }(e), b = y.PAN
                                }
                                b !== y.NONE && (f.domElement.addEventListener("mousemove", H, !1), f.domElement.addEventListener("mouseup", W, !1), f.dispatchEvent(m))
                            }
                        }

                        function H(e) {
                            if (!1 !== f.enabled)
                                if (b === y.ROTATE) {
                                    if (!1 === f.enableRotate) return;
                                    ! function(e) {
                                        C.set(e.clientX, e.clientY), P.subVectors(C, S);
                                        var t = f.domElement === document ? f.domElement.body : f.domElement;
                                        z(2 * Math.PI * P.x / t.clientWidth * f.rotateSpeed), U(2 * Math.PI * P.y / t.clientHeight * f.rotateSpeed), S.copy(C), f.update()
                                    }(e)
                                } else if (b === y.DOLLY) {
                                if (!1 === f.enableZoom) return;
                                ! function(e) {
                                    L.set(e.clientX, e.clientY), A.subVectors(L, T), A.y > 0 ? V(B()) : A.y < 0 && $(B()), T.copy(L), f.update()
                                }(e)
                            } else if (b === y.PAN) {
                                if (!1 === f.enablePan) return;
                                ! function(e) {
                                    E.set(e.clientX, e.clientY), D.subVectors(E, M), G(D.x, D.y), M.copy(E), f.update()
                                }(e)
                            }
                        }

                        function W(e) {
                            !1 !== f.enabled && (f.domElement.removeEventListener("mousemove", H, !1), f.domElement.removeEventListener("mouseup", W, !1), f.dispatchEvent(_), b = y.NONE)
                        }

                        function Y(e) {
                            !1 === f.enabled || !1 === f.enableZoom || b !== y.NONE && b !== y.ROTATE || (e.stopPropagation(), function(e) {
                                e.deltaY < 0 ? $(B()) : e.deltaY > 0 && V(B()), f.update()
                            }(e), f.dispatchEvent(m), f.dispatchEvent(_))
                        }

                        function q(e) {
                            !1 !== f.enabled && !1 !== f.enableKeys && !1 !== f.enablePan && function(e) {
                                switch (e.keyCode) {
                                    case f.keys.UP:
                                        G(0, f.keyPanSpeed), f.update();
                                        break;
                                    case f.keys.BOTTOM:
                                        G(0, -f.keyPanSpeed), f.update();
                                        break;
                                    case f.keys.LEFT:
                                        G(f.keyPanSpeed, 0), f.update();
                                        break;
                                    case f.keys.RIGHT:
                                        G(-f.keyPanSpeed, 0), f.update()
                                }
                            }(e)
                        }

                        function K(e) {
                            if (!1 !== f.enabled) {
                                switch (e.touches.length) {
                                    case 1:
                                        if (!1 === f.enableRotate) return;
                                        ! function(e) {
                                            S.set(e.touches[0].pageX, e.touches[0].pageY)
                                        }(e), b = y.TOUCH_ROTATE;
                                        break;
                                    case 2:
                                        if (!1 === f.enableZoom) return;
                                        ! function(e) {
                                            var t = e.touches[0].pageX - e.touches[1].pageX,
                                                i = e.touches[0].pageY - e.touches[1].pageY,
                                                n = Math.sqrt(t * t + i * i);
                                            T.set(0, n)
                                        }(e), b = y.TOUCH_DOLLY;
                                        break;
                                    case 3:
                                        if (!1 === f.enablePan) return;
                                        ! function(e) {
                                            M.set(e.touches[0].pageX, e.touches[0].pageY)
                                        }(e), b = y.TOUCH_PAN;
                                        break;
                                    default:
                                        b = y.NONE
                                }
                                b !== y.NONE && f.dispatchEvent(m)
                            }
                        }

                        function X(e) {
                            if (!1 !== f.enabled) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
                                case 1:
                                    if (!1 === f.enableRotate) return;
                                    if (b !== y.TOUCH_ROTATE) return;
                                    ! function(e) {
                                        C.set(e.touches[0].pageX, e.touches[0].pageY), P.subVectors(C, S);
                                        var t = f.domElement === document ? f.domElement.body : f.domElement;
                                        z(2 * Math.PI * P.x / t.clientWidth * f.rotateSpeed), U(2 * Math.PI * P.y / t.clientHeight * f.rotateSpeed), S.copy(C), f.update()
                                    }(e);
                                    break;
                                case 2:
                                    if (!1 === f.enableZoom) return;
                                    if (b !== y.TOUCH_DOLLY) return;
                                    ! function(e) {
                                        var t = e.touches[0].pageX - e.touches[1].pageX,
                                            i = e.touches[0].pageY - e.touches[1].pageY,
                                            n = Math.sqrt(t * t + i * i);
                                        L.set(0, n), A.subVectors(L, T), A.y > 0 ? $(B()) : A.y < 0 && V(B()), T.copy(L), f.update()
                                    }(e);
                                    break;
                                case 3:
                                    if (!1 === f.enablePan) return;
                                    if (b !== y.TOUCH_PAN) return;
                                    ! function(e) {
                                        E.set(e.touches[0].pageX, e.touches[0].pageY), D.subVectors(E, M), G(D.x, D.y), M.copy(E), f.update()
                                    }(e);
                                    break;
                                default:
                                    b = y.NONE
                            }
                        }

                        function Q(e) {
                            !1 !== f.enabled && (f.dispatchEvent(_), b = y.NONE)
                        }

                        function Z(e) {
                            e.preventDefault()
                        }
                        return f.domElement.addEventListener("contextmenu", Z, !1), f.domElement.addEventListener("mousedown", N, !1), f.domElement.addEventListener("wheel", Y, !1), f.domElement.addEventListener("touchstart", K, !1), f.domElement.addEventListener("touchend", Q, !1), f.domElement.addEventListener("touchmove", X, !1), window.addEventListener("keydown", q, !1), c.update(), c
                    }
                    return Object(c.a)(i, t), Object(s.a)(i, [{
                        key: "center",
                        get: function() {
                            return this.target
                        }
                    }, {
                        key: "noZoom",
                        get: function() {
                            return !this.enableZoom
                        },
                        set: function(e) {
                            this.enableZoom = !e
                        }
                    }, {
                        key: "noRotate",
                        get: function() {
                            return !this.enableRotate
                        },
                        set: function(e) {
                            this.enableRotate = !e
                        }
                    }, {
                        key: "noPan",
                        get: function() {
                            return !this.enablePan
                        },
                        set: function(e) {
                            this.enablePan = !e
                        }
                    }, {
                        key: "noKeys",
                        get: function() {
                            return !this.enableKeys
                        },
                        set: function(e) {
                            this.enableKeys = !e
                        }
                    }, {
                        key: "staticMoving",
                        get: function() {
                            return !this.enableDamping
                        },
                        set: function(e) {
                            this.enableDamping = !e
                        }
                    }, {
                        key: "dynamicDampingFactor",
                        get: function() {
                            return this.dampingFactor
                        },
                        set: function(e) {
                            this.dampingFactor = e
                        }
                    }]), i
                }(e.EventDispatcher);
            t.a = h
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        i(18);
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(41),
            r = i(1),
            c = i(8),
            h = i(5),
            l = i(121),
            u = i(219),
            d = function(e) {
                function t() {
                    var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(n.a)(this, t), (e = Object(o.a)(this, Object(r.a)(t).call(this, i))).name = i.name || "Fly Camera", e.controls = new u.a(Object(a.a)(e), i.domEl || document), e.controls.enabled = !1, e.position.set(50, 50, 50), e
                }
                return Object(h.a)(t, e), Object(s.a)(t, [{
                    key: "createGUI",
                    value: function(e) {}
                }, {
                    key: "start",
                    value: function() {
                        this.controls.bind()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.controls.unbind()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        Object(c.a)(Object(r.a)(t.prototype), "destroy", this).call(this), this.controls.destroy()
                    }
                }, {
                    key: "update",
                    value: function(e, i) {
                        Object(c.a)(Object(r.a)(t.prototype), "update", this).call(this, e, i), this.controls.enabled && this.controls.update(e / 1e3, i)
                    }
                }, {
                    key: "_createHelper",
                    value: function() {}
                }, {
                    key: "_destroyHelper",
                    value: function() {}
                }]), t
            }(l.a);
        t.a = d
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            var s, o = i(2),
                a = i(3),
                r = i(7),
                c = i(0),
                h = (s = function() {
                    function t(i) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                        Object(o.a)(this, t), this.enabled = !0, this.movementSpeed = 15, this.accelerationSpeed = 3, this.decelerationSpeed = .25, this.lookSpeed = .1, this.zoomSpeed = 50, this.autoForward = !1, this.activeLook = !0, this._binded = !1, this._camera = i, this._target = new e.Vector3(0, 0, 0), this._domElement = n, this._bodyElement = this._domElement === document ? this._domElement.body : n, this._defaultCameraFov = this._camera.fov, this._lat = 0, this._lon = -90, this._phi = 0, this._theta = 0, this._moveForward = !1, this._moveBackward = !1, this._moveLeft = !1, this._moveRight = !1, this._accelerate = !1, this._decelerate = !1, this._slookSpeed = this.lookSpeed, this._szoomSpeed = this.zoomSpeed, this._zoomIn = !1, this._zoomOut = !1
                    }
                    return Object(a.a)(t, [{
                        key: "bind",
                        value: function() {
                            this._binded || (this._binded = !0, this._bodyElement.requestPointerLock(), this._domElement.addEventListener("pointerlockchange", this._onPointerLockChange, !1), c.f.addUp(this._handlePointerUp), c.f.addDown(this._handlePointerDown), c.f.addMove(this._handlePointerMove), c.d.addUp(this._handleKeyUp), c.d.addDown(this._handleKeyDown))
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            this._binded && (this._binded = !1, this._domElement.exitPointerLock(), this._domElement.removeEventListener("pointerlockchange", this._onPointerLockChange, !1), c.f.removeUp(this._handlePointerUp), c.f.removeDown(this._handlePointerDown), c.f.removeMove(this._handlePointerMove), c.d.removeUp(this._handleKeyUp), c.d.removeDown(this._handleKeyDown))
                        }
                    }, {
                        key: "update",
                        value: function(t, i) {
                            if (!1 !== this.enabled) {
                                var n = t * this.movementSpeed;
                                this._accelerate ? n *= this.accelerationSpeed : this._decelerate && (n *= this.decelerationSpeed), (this._moveForward || this.autoForward && !this._moveBackward) && this._camera.translateZ(-n), this._moveBackward && this._camera.translateZ(n), this._moveLeft && this._camera.translateX(-n), this._moveRight && this._camera.translateX(n), this._moveUp && (this._camera.position.y += n), this._moveDown && (this._camera.position.y -= n), this._lat = Math.max(-85, Math.min(85, this._lat)), this._phi = e.Math.degToRad(90 - this._lat), this._theta = e.Math.degToRad(this._lon);
                                var s = this._target,
                                    o = this._camera.position;
                                s.x = o.x + Math.sin(this._phi) * Math.cos(this._theta), s.y = o.y + Math.cos(this._phi), s.z = o.z + Math.sin(this._phi) * Math.sin(this._theta), this._camera.lookAt(s), (this._zoomIn || this._zoomOut) && (this._camera.fov += t * this._szoomSpeed * (this._zoomIn ? -1 : 1), this._camera.fov = e.Math.clamp(this._camera.fov, 1, 179), this._camera.updateProjectionMatrix());
                                var a = e.Math.mapLinear(this._camera.fov / this.lookSpeed, this._defaultCameraFov / this.lookSpeed, 1 / this.lookSpeed, 1, 0);
                                a = e.Math.clamp(a, .01, 1), this._slookSpeed = this.lookSpeed * a, this._szoomSpeed = this.zoomSpeed * a
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.unbind()
                        }
                    }, {
                        key: "_onPointerLockChange",
                        value: function(e) {
                            this.enabled = this._domElement.pointerLockElement === this._bodyElement
                        }
                    }, {
                        key: "_handlePointerDown",
                        value: function(e) {
                            if (e.preventDefault(), e.stopPropagation(), this._bodyElement.requestPointerLock(), this.activeLook) switch (e.button) {
                                case 0:
                                    this._moveForward = !0;
                                    break;
                                case 2:
                                    this._moveBackward = !0
                            }
                        }
                    }, {
                        key: "_handlePointerUp",
                        value: function(e) {
                            if (e.preventDefault(), e.stopPropagation(), this.activeLook) switch (e.button) {
                                case 0:
                                    this._moveForward = !1;
                                    break;
                                case 2:
                                    this._moveBackward = !1
                            }
                        }
                    }, {
                        key: "_handlePointerMove",
                        value: function(t) {
                            if (this.enabled) {
                                var i = e.Math.clamp(t.movementX || 0, -250, 250),
                                    n = e.Math.clamp(t.movementY || 0, -250, 250);
                                this._lat -= n * this._slookSpeed, this._lon += i * this._slookSpeed
                            }
                        }
                    }, {
                        key: "_handleKeyDown",
                        value: function(e, t) {
                            switch (e.preventDefault(), t) {
                                case "up":
                                    this._moveForward = !0;
                                    break;
                                case "left":
                                    this._moveLeft = !0;
                                    break;
                                case "down":
                                    this._moveBackward = !0;
                                    break;
                                case "right":
                                    this._moveRight = !0;
                                    break;
                                case "e":
                                    this._moveUp = !0;
                                    break;
                                case "q":
                                    this._moveDown = !0;
                                    break;
                                case "shift":
                                    this._accelerate = !0;
                                    break;
                                case "space":
                                    this._decelerate = !0;
                                    break;
                                case "x":
                                    this._zoomIn = !0;
                                    break;
                                case "z":
                                    this._zoomOut = !0
                            }
                        }
                    }, {
                        key: "_handleKeyUp",
                        value: function(e, t) {
                            switch (e.preventDefault(), t) {
                                case "up":
                                    this._moveForward = !1;
                                    break;
                                case "left":
                                    this._moveLeft = !1;
                                    break;
                                case "down":
                                    this._moveBackward = !1;
                                    break;
                                case "right":
                                    this._moveRight = !1;
                                    break;
                                case "e":
                                    this._moveUp = !1;
                                    break;
                                case "q":
                                    this._moveDown = !1;
                                    break;
                                case "shift":
                                    this._accelerate = !1;
                                    break;
                                case "space":
                                    this._decelerate = !1;
                                    break;
                                case "x":
                                    this._zoomIn = !1;
                                    break;
                                case "z":
                                    this._zoomOut = !1
                            }
                        }
                    }]), t
                }(), Object(r.a)(s.prototype, "_onPointerLockChange", [n], Object.getOwnPropertyDescriptor(s.prototype, "_onPointerLockChange"), s.prototype), Object(r.a)(s.prototype, "_handlePointerDown", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handlePointerDown"), s.prototype), Object(r.a)(s.prototype, "_handlePointerUp", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handlePointerUp"), s.prototype), Object(r.a)(s.prototype, "_handlePointerMove", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handlePointerMove"), s.prototype), Object(r.a)(s.prototype, "_handleKeyDown", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handleKeyDown"), s.prototype), Object(r.a)(s.prototype, "_handleKeyUp", [n], Object.getOwnPropertyDescriptor(s.prototype, "_handleKeyUp"), s.prototype), s);
            t.a = h
        }).call(this, i(11), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(18);
            var n = i(2),
                s = i(3),
                o = i(221),
                a = i(223),
                r = i(224),
                c = i(0),
                h = (new e.Vector2, function() {
                    function t(i) {
                        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Object(n.a)(this, t), this._renderer = i, this._context = i.getContext(), this._readBuffer = null, this._writeBuffer = null, this._defaultDPR = c.j.DPR, this._drawBufferSize = new e.Vector2, this._noRenderToScreen = s.noRenderToScreen, null !== this._renderer && (this._renderer.autoClear = !1, this._readBuffer = this._createBuffer(s.depthBuffer, s.stencilBuffer, s.depthTexture), this._writeBuffer = this._readBuffer.clone()), this._passes = [], this._copyPass = new o.a, this._checkPassToRender()
                    }
                    return Object(s.a)(t, [{
                        key: "addPass",
                        value: function(e, t) {
                            var i = this._renderer;
                            c.j.DPR;
                            this._renderer.getDrawingBufferSize(this._drawBufferSize), e.init(i, this._context.getContextAttributes().alpha), e.setSize(this._drawBufferSize.width, this._drawBufferSize.height), void 0 !== t ? this._passes.splice(t, 0, e) : this._passes.push(e), this._checkPassToRender()
                        }
                    }, {
                        key: "destroyPass",
                        value: function(e) {
                            e.destroy(), this._passes.splice(this._passes.indexOf(e), 1)
                        }
                    }, {
                        key: "getPass",
                        value: function(e) {
                            for (var t = 0, i = this._passes.length; t < i; t++) {
                                var n = this._passes[t];
                                if (n.name === e) return n
                            }
                            return null
                        }
                    }, {
                        key: "destroyPasses",
                        value: function() {
                            for (var e = this._passes; e.length > 0;) e.pop().destroy()
                        }
                    }, {
                        key: "render",
                        value: function(e, t) {
                            var i, n, s, o, c, h = this._passes,
                                l = this._renderer,
                                u = this._copyPass,
                                d = this._readBuffer,
                                p = this._writeBuffer,
                                f = !1;
                            for (this.passEnabledNb = 0, o = 0, c = h.length; o < c; ++o) h[o].enabled && this.passEnabledNb++;
                            for (o = 0, c = h.length; o < c; ++o)(i = h[o]).enabled && (i.render(l, d, p, e, t, f), i.needsSwap && (f && ((n = this._context).stencilFunc(n.NOTEQUAL, 1, 4294967295), u.render(l, d, p), n.stencilFunc(n.EQUAL, 1, 4294967295)), s = d, d = p, p = s), i instanceof r.a ? f = !0 : i instanceof a.a && (f = !1))
                        }
                    }, {
                        key: "reset",
                        value: function(e) {
                            var t = this._readBuffer.depthBuffer,
                                i = this._readBuffer.stencilBuffer,
                                n = null !== this._readBuffer.depthTexture;
                            this.destroy(e ? this.createBuffer(t, i, n) : e)
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            null !== this._readBuffer && null !== this._writeBuffer && (this._readBuffer.dispose(), this._writeBuffer.dispose(), this._readBuffer = null, this._writeBuffer = null), this.destroyPasses(), void 0 !== e ? (this._readBuffer = e, this._writeBuffer = this._readBuffer.clone()) : this._copyPass.destroy()
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            var i = this._passes;
                            this._renderer.setSize(c.h.width, c.h.height);
                            var n = this.dpr || c.j.DPR;
                            e *= n, t *= n, this._readBuffer.setSize(e, t), this._writeBuffer.setSize(e, t);
                            for (var s = 0, o = i.length; s < o; ++s) i[s].setSize(e, t)
                        }
                    }, {
                        key: "_createBuffer",
                        value: function() {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            this._renderer.getDrawingBufferSize(this._drawBufferSize);
                            var s = this._context.getContextAttributes().alpha,
                                o = new e.WebGLRenderTarget(this._drawBufferSize.width, this._drawBufferSize.height, {
                                    minFilter: e.LinearFilter,
                                    magFilter: e.LinearFilter,
                                    format: s ? e.RGBAFormat : e.RGBFormat,
                                    depthBuffer: t,
                                    stencilBuffer: i,
                                    depthTexture: n ? new e.DepthTexture : null,
                                    generateMipmaps: !1
                                });
                            return n && i && (o.depthTexture.format = e.DepthStencilFormat, o.depthTexture.type = e.UnsignedInt248Type), o
                        }
                    }, {
                        key: "_checkPassToRender",
                        value: function() {
                            for (var e = 0, t = this._passes.length; e < t; e++) {
                                var i = this._passes[e];
                                i.renderToScreen = !1, e !== t - 1 || this._noRenderToScreen || (i.renderToScreen = !0)
                            }
                        }
                    }, {
                        key: "passes",
                        get: function() {
                            return this._passes
                        }
                    }, {
                        key: "readBuffer",
                        get: function() {
                            return this._readBuffer
                        }
                    }, {
                        key: "writeBuffer",
                        get: function() {
                            return this._writeBuffer
                        }
                    }]), t
                }());
            t.a = h
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(39), i(31), i(25), i(19), i(32);
            var n = i(21),
                s = (i(18), i(2)),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(49),
                l = i(61),
                u = i(16),
                d = i(222);

            function p(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(i), !0).forEach((function(t) {
                        Object(n.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var v = function(t) {
                function i() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.name,
                        o = t.vertexShader,
                        c = t.fragmentShader,
                        h = t.uniforms,
                        l = void 0 === h ? {} : h,
                        u = t.textureID,
                        d = void 0 === u ? "tInput" : u;
                    return Object(s.a)(this, i), (e = Object(a.a)(this, Object(r.a)(i).call(this))).name = n || "ShaderPass", e.textureID = d, e.vertexShader = o, e.fragmentShader = c, e.uniforms = l, e
                }
                return Object(c.a)(i, t), Object(o.a)(i, [{
                    key: "init",
                    value: function(e) {
                        this.material = new l.a({
                            uniforms: f({
                                tInput: {
                                    value: null
                                }
                            }, this.uniforms),
                            vertexShader: this.vertexShader || u.a,
                            fragmentShader: this.fragmentShader || d.a,
                            precision: e.capabilities.precision
                        }), this.quad.material = this.material
                    }
                }, {
                    key: "setSize",
                    value: function(t, i) {
                        this.material.uniforms.uResolution && (this.material.uniforms.uResolution.value = new e.Vector2(t, i))
                    }
                }, {
                    key: "render",
                    value: function(e, t, i, n, s) {
                        var o = this.material;
                        o.uniforms[this.textureID] && (o.uniforms[this.textureID].value = t.texture), this.renderToScreen ? (e.setRenderTarget(null), e.render(this.scene, this.camera)) : (e.setRenderTarget(i), e.render(this.scene, this.camera))
                    }
                }]), i
            }(h.a);
            t.a = v
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tInput;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 color = texture2D(tInput, vUv);\n  gl_FragColor = color;\n}\n"
    }, function(e, t, i) {
        "use strict";
        i(18);
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(5),
            c = function(e) {
                function t() {
                    var e;
                    return Object(n.a)(this, t), (e = Object(o.a)(this, Object(a.a)(t).call(this, null, null, null))).name = "ClearMaskPass", e
                }
                return Object(r.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function(e) {
                        e.state.buffers.stencil.setTest(!1)
                    }
                }]), t
            }(i(49).a);
        t.a = c
    }, function(e, t, i) {
        "use strict";
        i(18);
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(5),
            c = function(e) {
                function t(e, i) {
                    var s;
                    return Object(n.a)(this, t), (s = Object(o.a)(this, Object(a.a)(t).call(this, e, i, null))).name = "MaskPass", s.inverse = !1, s.clearStencil = !0, s
                }
                return Object(r.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function(e, t, i) {
                        var n = e.context,
                            s = e.state,
                            o = this.scene,
                            a = this.camera,
                            r = this.inverse ? 0 : 1,
                            c = 1 - r;
                        s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(n.REPLACE, n.REPLACE, n.REPLACE), s.buffers.stencil.setFunc(n.ALWAYS, r, 4294967295), s.buffers.stencil.setClear(c), this.clearStencil && (e.setRenderTarget(t), e.clearStencil(), e.setRenderTarget(i), e.clearStencil()), e.render(o, a, t), e.render(o, a, i), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.stencil.setFunc(n.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(n.KEEP, n.KEEP, n.KEEP)
                    }
                }]), t
            }(i(49).a);
        t.a = c
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(18);
            var n, s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(8),
                h = i(5),
                l = i(7),
                u = i(0),
                d = i(63),
                p = i(226),
                f = (n = function(e) {
                    function t(e, i) {
                        var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return Object(s.a)(this, t), (n = Object(a.a)(this, Object(r.a)(t).call(this, e, i, null)))._scene = e, n.name = "RenderPass", n.clearPass = new p.a(o), n.overrideMaterial = o.overrideMaterial || null, n.clearDepth = o.clearDepth || !1, n.clear = o.clear || !0, n._bind(), n
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "destroy",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "destroy", this).call(this), this._unbind()
                        }
                    }, {
                        key: "render",
                        value: function(e, t) {
                            var i = this.scene,
                                n = this.renderToScreen ? null : t;
                            this.clear ? this.clearPass.render(e, n) : this.clearDepth && (e.setRenderTarget(n), e.clearDepth()), i.overrideMaterial = this.overrideMaterial, n ? e.setRenderTarget(n) : e.setRenderTarget(null), e.render(i, this.camera), i.overrideMaterial = null
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            u.b.on(d.a.CHANGED, this._handleCameraChange)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            u.b.off(d.a.CHANGED, this._handleCameraChange)
                        }
                    }, {
                        key: "_handleCameraChange",
                        value: function(e) {
                            var t = e.scene,
                                i = e.camera;
                            this._scene === t && (this.camera = i)
                        }
                    }]), t
                }(i(49).a), Object(l.a)(n.prototype, "_handleCameraChange", [e], Object.getOwnPropertyDescriptor(n.prototype, "_handleCameraChange"), n.prototype), n);
            t.a = f
        }).call(this, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(18);
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(5),
                c = i(49),
                h = new e.Color,
                l = function(e) {
                    function t() {
                        var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object(n.a)(this, t), (e = Object(o.a)(this, Object(a.a)(t).call(this, null, null, null))).name = "ClearPass", e.clearColor = i.clearColor || null, e.clearAlpha = i.clearAlpha || 0, e
                    }
                    return Object(r.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function(e, t) {
                            var i, n = this.clearColor;
                            null !== n && (h.copy(e.getClearColor()), i = e.getClearAlpha(), e.setClearColor(n, this.clearAlpha)), t ? (e.setRenderTarget(t), e.clear()) : e.setRenderTarget(null), null !== n && e.setClearColor(h, i)
                        }
                    }]), t
                }(c.a);
            t.a = l
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s, o) {
            i(18);
            var a, r = i(2),
                c = i(3),
                h = i(4),
                l = i(1),
                u = i(5),
                d = i(7),
                p = i(12),
                f = i(10),
                v = i(0),
                m = i(6),
                _ = i(16),
                y = i(228),
                b = e,
                g = b.Bodies,
                w = b.Body,
                x = (a = function(t) {
                    function i(e) {
                        var t;
                        return Object(r.a)(this, i), (t = Object(h.a)(this, Object(l.a)(i).call(this, e)))._size = Object(m.f)(20, 70), t.life = Object(m.f)(3e3, 6e3) / 10, t.name = "cube", t._initMesh(), t._initBody(), t._bind(), t.visible = !0, t
                    }
                    return Object(u.a)(i, t), Object(c.a)(i, [{
                        key: "_initBody",
                        value: function() {
                            this.body = g.circle(Object(m.f)(.2 * v.h.width, 1.5 * v.h.width), Object(m.f)(-100, -20), this._size / 2, {}), this.body.collisionFilter.category = this._world.pGroups[0] | this._world.pGroups[1] | this._world.pGroups[2] | this._world.pGroups[4]
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {
                            this._material = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: _.a,
                                fragmentShader: y.a,
                                uniforms: {
                                    uColor: {
                                        value: new n.Color(1250067)
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this.mesh = new n.Mesh(p.a.GEOMS.plane, this._material), this.mesh.scale.set(1e-5, 1e-5, 1), this.mesh.renderOrder = 10, this.add(this.mesh)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            v.b.on("home:looped", this._onLoop)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            v.b.off("home:looped", this._onLoop)
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            this.middle = .5 * v.h.width
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var t = this;
                            this.life = Object(m.f)(3e3, 6e3), this._isResetting || (this._isResetting = !0, this._needsPopIn = !1, s.to(this.mesh.scale, {
                                x: .01,
                                y: .01,
                                ease: "expo.out",
                                duration: .4,
                                onComplete: function() {
                                    e.World.remove(t._engine.world, t.body), t._needsPopIn = !0, t.visible = !1
                                }
                            }))
                        }
                    }, {
                        key: "popIn",
                        value: function() {
                            this._needsPopIn && (this._needsPopIn = !1, this._isResetting = !1, this.life = Object(m.f)(3e3, 6e3), this.visible = !0, w.setVelocity(this.body, {
                                x: 0,
                                y: 0
                            }), w.setPosition(this.body, {
                                x: Object(m.f)(.1 * v.h.width, 1 * v.h.width),
                                y: -70
                            }), e.World.add(this._engine.world, this.body), s.to(this.mesh.scale, {
                                x: this._size,
                                y: this._size,
                                ease: "back.out",
                                duration: 1,
                                delay: .1
                            }))
                        }
                    }, {
                        key: "_onLoop",
                        value: function(e) {
                            var t = e.dir,
                                i = (v.i.totalWidth, v.h.width, v.i.totalWidth, v.h.width, this.body.position.x);
                            t > 0 ? i > -v.h.width && i < 0 && w.setPosition(this.body, {
                                x: this.body.position.x + v.i.totalWidth * v.h.width,
                                y: this.body.position.y
                            }) : i > (v.i.totalWidth - 1) * v.h.width && i < v.i.totalWidth * v.h.width && w.setPosition(this.body, {
                                x: this.body.position.x - v.i.totalWidth * v.h.width,
                                y: this.body.position.y
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (this._sync(this.mesh, this.body), this.visible) {
                                var i = v.i.scroll.delta;
                                if (Math.abs(i) > 1) {
                                    var n = .0012 * Object(m.a)(i, -20, 20),
                                        s = 4e-4 * Object(m.a)(i, -20, 20);
                                    w.applyForce(this.body, this.body.position, {
                                        x: n,
                                        y: -Math.abs(s)
                                    }), this.body.velocity.x > 25 && w.setVelocity(this.body, {
                                        x: 25,
                                        y: this.body.velocity.y
                                    }), this.body.velocity.x < -25 && w.setVelocity(this.body, {
                                        x: -25,
                                        y: this.body.velocity.y
                                    })
                                }
                            }
                            this.body.position.y > 2 * v.h.height && this.reset(), this.body.position.x > v.h.width ? this.life -= .35 * e : this.body.position.x < 0 ? this.life -= 10 * e : this.life -= e, this._isResetting || (this.life < 0 ? this.reset() : Math.abs(this.body.position.x - this.middle) > 1.5 * v.h.width && this.reset()), v.a.isMobile ? v.i.homeScrollbar && v.i.homeScrollbar.scrollTop < 1.5 * v.h.height && this.popIn() : this._needsPopIn && v.i.screens[0].progress > -.5 && v.i.screens[0].progress < 1.3 && this.popIn()
                        }
                    }]), i
                }(f.a), Object(d.a)(a.prototype, "_onLoop", [o], Object.getOwnPropertyDescriptor(a.prototype, "_onLoop"), a.prototype), a);
            t.a = x
        }).call(this, i(23), i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\n// uniform sampler2D tMap;\nuniform float uAlpha;\nuniform vec3 uColor;\nvarying vec2 vUv;\n\n@import aastep\n@import circle\n\nvoid main() {\n  // gl_FragColor = texture2D(tMap, vUv);\n  gl_FragColor = vec4(uColor, 1.-circle(vUv, .49));\n  gl_FragColor.a *= uAlpha;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(18);
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(5),
                u = i(7),
                d = i(10),
                p = i(0),
                f = i(16),
                v = i(158),
                m = i(230),
                _ = i(231),
                y = i(234),
                b = (o = function(t) {
                    function i(e, t) {
                        var n;
                        return Object(a.a)(this, i), (n = Object(c.a)(this, Object(h.a)(i).call(this, e))).options = t, n.name = "project-shapes", n._parent = t.parent, n._composite = t.composite, n._now = Date.now(), n._initMeshes(), n._createGUI(), n._bind(), n._main = document.body.querySelector("main"), n
                    }
                    return Object(l.a)(i, t), Object(r.a)(i, [{
                        key: "_initMeshes",
                        value: function() {
                            this._bgMaterial = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: f.a,
                                fragmentShader: v.a,
                                uniforms: {
                                    uReverse: {
                                        value: 0
                                    },
                                    uProgress: {
                                        value: 0
                                    },
                                    uColor: {
                                        value: new e.Color("#FCAC14")
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._bg = new e.Mesh(this._world.GEOMS.plane, this._bgMaterial), this.add(this._bg), this._bg.renderOrder = 1e3, this._bgMaterial2 = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: f.a,
                                fragmentShader: v.a,
                                uniforms: {
                                    uReverse: {
                                        value: 0
                                    },
                                    uProgress: {
                                        value: 0
                                    },
                                    uColor: {
                                        value: new e.Color("#EFEFE6")
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._bg2 = new e.Mesh(this._world.GEOMS.plane, this._bgMaterial2), this.add(this._bg2), this._bg2.renderOrder = 1001, p.a.isMobile && (this._bg.visible = !1, this._bg2.visible = !1), this._blockMaterial = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: f.a,
                                fragmentShader: m.a,
                                uniforms: {
                                    uProgress: {
                                        value: 0
                                    },
                                    uColor: {
                                        value: new e.Color("#FCAC14")
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._block = new e.Mesh(this._world.GEOMS.plane, this._blockMaterial), this._block.renderOrder = 1001, this.add(this._block), this._closeButton = new _.a(this.scene, {
                                parent: this
                            }), this.add(this._closeButton), this._titleBlocks = [];
                            for (var t = 0; t < 2; t++) {
                                var i = new y.a(this.scene, {
                                    parent: this,
                                    index: t
                                });
                                this._titleBlocks.push(i), this.add(i)
                            }
                            this.visible = !1
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            if (this.scene.pane && !window.projectOverlayAdded) {
                                window.projectOverlayAdded = !0, this.folder = this.scene.pane.addFolder({
                                    title: "Project Overlay"
                                }), this.folder.expanded = !1;
                                var e = this._bg.material.uniforms;
                                this.folder.addInput(e.uProgress, "value", {
                                    label: "bg progress",
                                    min: -1,
                                    max: 2,
                                    step: .01
                                }), this.folder.addInput(e.uReverse, "value", {
                                    label: "bg reverse",
                                    min: 0,
                                    max: 1,
                                    step: .01
                                })
                            }
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            p.b.on("project_overlay:opened", this.show), p.b.on("project_overlay:closed", this.hide)
                        }
                    }, {
                        key: "show",
                        value: function(e) {
                            var t = e.index;
                            this._index = t, this.visible = !0;
                            var i = this._bg.material.uniforms,
                                s = this._bg2.material.uniforms,
                                o = this._block.material.uniforms;
                            n.killTweensOf(i.uProgress), n.killTweensOf(s.uProgress), n.killTweensOf(o.uProgress), n.set(o.uProgress, {
                                value: 0
                            }), n.set(o.uAlpha, {
                                value: 0
                            }), n.set(i.uReverse, {
                                value: 0
                            }), n.set(s.uReverse, {
                                value: 0
                            }), n.to(i.uProgress, {
                                value: 1,
                                ease: "power4.out",
                                duration: .7
                            }), n.to(s.uProgress, {
                                value: 1,
                                ease: "power4.out",
                                duration: .7,
                                delay: .05
                            }), n.to(o.uAlpha, {
                                value: 1,
                                ease: "cubic.out",
                                duration: .4,
                                delay: .4
                            }), n.to(o.uProgress, {
                                value: 1,
                                ease: "expo.out",
                                duration: 1,
                                delay: .4
                            }), this._closeButton.show();
                            for (var a = 0, r = this._titleBlocks.length; a < r; a++) this._titleBlocks[a].show();
                            this._now = Date.now(), this._main.classList.add("is-project-overlay")
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            var e = this,
                                t = this._bg.material.uniforms,
                                i = this._bg2.material.uniforms,
                                s = this._block.material.uniforms;
                            n.killTweensOf(t.uReverse), n.killTweensOf(t.uProgress), n.killTweensOf(i.uReverse), n.killTweensOf(i.uProgress), n.killTweensOf(s.uProgress), n.set(t.uReverse, {
                                value: 1
                            }), n.set(i.uReverse, {
                                value: 1
                            }), n.to(s.uAlpha, {
                                value: 0,
                                ease: "cubic.out",
                                duration: .2
                            }), n.to(t.uProgress, {
                                value: 0,
                                ease: "cubic.in",
                                duration: .5,
                                delay: .12,
                                onComplete: function() {
                                    e.visible = !1
                                }
                            }), n.to(i.uProgress, {
                                value: 0,
                                ease: "cubic.in",
                                duration: .5,
                                delay: .1,
                                onComplete: function() {
                                    e.visible = !1
                                }
                            }), this._closeButton.hide();
                            for (var o = 0, a = this._titleBlocks.length; o < a; o++) this._titleBlocks[o].hide();
                            if (Date.now() - this._now > 900) {
                                var r = this.scene._camera;
                                if (this.scene._projects[this._index]) {
                                    var c = this.scene._projects[this._index];
                                    r.position.x = r.positionTarget.x = c.screenOffset * p.h.width
                                } - 1 === this._index && (r.position.x = r.positionTarget.x = -1 * p.h.width)
                            }
                            this._main.classList.remove("is-project-overlay")
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.h.width,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.h.height;
                            this._bg.position.set(.5 * p.h.width, .5 * -p.h.height, 0), this._bg.scale.set(p.h.width, p.h.height, 1), this._bg2.position.set(.5 * p.h.width, .5 * -p.h.height, 0), this._bg2.scale.set(p.h.width, p.h.height, 1), this._block.position.y = -35;
                            var i = .4;
                            p.h.width < 1100 && (i = .5), this._block.scale.set(i * p.h.width, p.h.height + 2 * this._block.position.y, 1), this._block.position.x = p.h.width - .5 * this._block.scale.x - 35, this._block.position.y -= .5 * this._block.scale.y, this._block.visible = p.h.width > p.h.height, this._closeButton.setSize(e, t);
                            for (var n = 0, s = this._titleBlocks.length; n < s; n++) this._titleBlocks[n].setSize(e, t);
                            for (var o = 0, a = this._entities.length; o < a; o++) this._entities[o].setSize(e, t)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (this.position.x = this.scene._camera.position.x, this.position.y = this.scene._camera.position.y, p.i.isOverlay) {
                                this._closeButton.update(e, t);
                                for (var i = 0, n = this._titleBlocks.length; i < n; i++) this._titleBlocks[i].update(e, t)
                            }
                        }
                    }]), i
                }(d.a), Object(u.a)(o.prototype, "show", [s], Object.getOwnPropertyDescriptor(o.prototype, "show"), o.prototype), Object(u.a)(o.prototype, "hide", [s], Object.getOwnPropertyDescriptor(o.prototype, "hide"), o.prototype), o);
            t.a = b
        }).call(this, i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nuniform float uProgress;\nuniform float uTime;\nvarying vec2 vUv;\n\n@import aastep\nvoid main() {\n  vec2 uv = vUv;\n  float mask = aastep(mix(uv.x, uv.y, .5), .95 * uProgress);\n  gl_FragColor.rgb = uColor;\n  gl_FragColor.a = uAlpha * mask;\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(55), i(18);
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(5),
                u = i(7),
                d = i(10),
                p = i(0),
                f = i(6),
                v = i(16),
                m = i(126),
                _ = i(232),
                y = i(233),
                b = {
                    dist: {
                        value: .09
                    },
                    distGlobal: {
                        value: .1
                    },
                    coef: {
                        value: -.1
                    },
                    springCoef: {
                        value: .98
                    },
                    springLerp: {
                        value: .14
                    }
                },
                g = new e.Vector2,
                w = new e.Vector2,
                x = (o = function(t) {
                    function i(t, n) {
                        var s;
                        return Object(a.a)(this, i), (s = Object(c.a)(this, Object(h.a)(i).call(this, t))).options = n, s.name = "close-button", s._parent = n.parent, s._composite = n.composite, s._mouse = new e.Vector2, s._coef = 0, s._initMeshes(), s._bind(), s.setSize(), setTimeout((function() {
                            s._createGUI()
                        }), 100), s
                    }
                    return Object(l.a)(i, t), Object(r.a)(i, [{
                        key: "_bind",
                        value: function() {
                            p.b.on("project_overlay:close_hover", this._onHover)
                        }
                    }, {
                        key: "_initMeshes",
                        value: function() {
                            var t = new e.PlaneBufferGeometry(1, 1, 5, 5),
                                i = new Float32Array(2 * t.attributes.position.count);
                            t.setAttribute("offset", new e.BufferAttribute(i, 2)), this._nb = t.attributes.position.count, t.springs = [];
                            for (var n = 0, s = this._nb; n < s; n++) t.springs.push(new e.Vector2);
                            this._material = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: m.a,
                                fragmentShader: _.a,
                                uniforms: {
                                    uHover: {
                                        value: 0
                                    },
                                    uColor: {
                                        value: new e.Color("#131313")
                                    },
                                    uAlpha: {
                                        value: 0
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this.mesh = new e.Mesh(t, this._material), this.mesh.baseScale = new e.Vector3(1, 1, 1), this.mesh.vertices = [], this.mesh.geom2 = t.clone(), this.add(this.mesh), this.mesh.renderOrder = 1007, this.cross = new e.Mesh(this._world.GEOMS.plane, this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: v.a,
                                fragmentShader: y.a,
                                uniforms: {
                                    tMap: {
                                        value: this._textures.get("cross")
                                    },
                                    uColor: {
                                        value: new e.Color("#ffffff")
                                    },
                                    uAlpha: {
                                        value: 0
                                    }
                                }
                            })), this.cross.baseScale = new e.Vector3(1, 1, 1), this.add(this.cross), this.cross.renderOrder = 1008
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && this._parent.folder && (this.folder = this._parent.folder, this.folder.addInput(b.dist, "value", {
                                label: "close dist",
                                min: 0,
                                max: 1,
                                step: .01
                            }).on("change", (function(e) {
                                b.distGlobal.value = b.dist.value * p.h.width
                            })), this.folder.addInput(b.coef, "value", {
                                label: "close coef",
                                min: -1.2,
                                max: 1.2,
                                step: .01
                            }), this.folder.addInput(b.springCoef, "value", {
                                label: "close spring coef",
                                min: 0,
                                max: 5,
                                step: .01
                            }), this.folder.addInput(b.springLerp, "value", {
                                label: "close spring lerp",
                                min: 0,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "show",
                        value: function() {
                            this._isVisible = !0, this.setSize();
                            var e = this.mesh.material.uniforms,
                                t = this.cross.material.uniforms;
                            n.killTweensOf([this.mesh.scale, this.cross.scale]), n.killTweensOf(this, {
                                _coef: !0
                            }), n.set([e.uAlpha, t.uAlpha], {
                                value: 0
                            }), n.set(this.mesh.scale, {
                                x: 1e-4,
                                y: 1e-4
                            }), n.set(this.cross.scale, {
                                x: 1e-4,
                                y: 1e-4
                            }), n.set([e.uAlpha, t.uAlpha], {
                                value: 1,
                                delay: .9
                            }), n.set(this, {
                                _coef: 0
                            }), n.to(this, {
                                _coef: 1,
                                duration: .5,
                                delay: 1.5
                            }), n.to(this.mesh.scale, {
                                x: this.mesh.baseScale.x,
                                y: this.mesh.baseScale.y,
                                ease: "quart.out",
                                duration: .7,
                                delay: .9
                            }), n.to(this.cross.scale, {
                                x: this.cross.baseScale.x,
                                y: this.cross.baseScale.y,
                                ease: "quart.out",
                                duration: .7,
                                delay: 1
                            })
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            this._isVisible = !1;
                            var e = this.mesh.material.uniforms,
                                t = this.cross.material.uniforms;
                            n.killTweensOf([this.mesh.scale, this.cross.scale]), n.to(this.mesh.scale, {
                                x: 1e-4,
                                y: 1e-4,
                                ease: "cubic.out",
                                duration: .3
                            }), n.to(this.cross.scale, {
                                x: 1e-4,
                                y: 1e-4,
                                ease: "cubic.out",
                                duration: .3
                            }), n.to([e.uAlpha, t.uAlpha], {
                                value: 0,
                                duration: .3
                            })
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.h.width, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.h.height;
                            b.distGlobal.value = b.dist.value * p.h.width;
                            var e = p.h.width > p.h.height ? 60 : 40;
                            if (this.mesh.scale.set(e, e, 1), this.visible = p.h.width > p.h.height, this.visible) {
                                p.h.width > p.h.height ? (this.mesh.position.x = p.h.width - 35 - .5 * this.mesh.scale.x, this.mesh.position.y = -35 - .5 * this.mesh.scale.y) : (this.mesh.position.x = p.h.width - 20 - .5 * this.mesh.scale.x, this.mesh.position.y = -20 - .5 * this.mesh.scale.y), this.mesh.baseScale.copy(this.mesh.scale), this.cross.scale.set(14, 14, 1), this.cross.baseScale.copy(this.cross.scale), this.cross.position.copy(this.mesh.position);
                                var t = this.mesh;
                                t.geom2.attributes.position.copyArray(t.geometry.attributes.position.array), t.updateMatrix(), t.geom2.applyMatrix(t.matrix), t.geometry.attributes.offset.needsUpdate = !0
                            }
                        }
                    }, {
                        key: "_onHover",
                        value: function(e) {
                            if (this._isVisible) {
                                var t = this.mesh.material.uniforms;
                                n.killTweensOf(t.uHover), n.to(t.uHover, {
                                    value: e ? 1 : 0,
                                    duration: .3,
                                    ease: "cubic.out"
                                })
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this;
                            if (this.visible) {
                                for (var n = this.mesh, s = n.geom2.attributes, o = s.position.array, a = n.geometry.attributes.offset, r = !1, c = b.springCoef.value, h = b.springLerp.value, l = 0, u = s.position.count; l < u; l++) {
                                    var d = o[3 * l],
                                        v = o[3 * l + 1],
                                        m = n.geometry.springs[l];
                                    g.set(d, v), w.set(p.f.client.x, -p.f.client.y);
                                    var _ = g.distanceTo(w),
                                        y = g.set(d - p.f.client.x, v + p.f.client.y),
                                        x = Object(f.d)(_, 0, b.distGlobal.value, 1, 0, !0),
                                        O = a.array[2 * l + 0],
                                        k = a.array[2 * l + 1],
                                        j = 0,
                                        S = 0;
                                    _ < b.distGlobal.value && (j = y.x * b.coef.value * x * this._coef, S = y.y * b.coef.value * x * this._coef, r = !0), m.x = Object(f.c)(m.x, (j - O) * c, h), m.y = Object(f.c)(m.y, (S - k) * c, h), a.array[2 * l + 0] += m.x, a.array[2 * l + 1] += m.y
                                }
                                r && (this._attrUpdate = !0, clearTimeout(this._attrTo), this._attrTo = setTimeout((function() {
                                    i._attrUpdate = !1
                                }), 1e3)), a.needsUpdate = this._attrUpdate
                            }
                        }
                    }]), i
                }(d.a), Object(u.a)(o.prototype, "show", [s], Object.getOwnPropertyDescriptor(o.prototype, "show"), o.prototype), Object(u.a)(o.prototype, "hide", [s], Object.getOwnPropertyDescriptor(o.prototype, "hide"), o.prototype), Object(u.a)(o.prototype, "_onHover", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onHover"), o.prototype), o);
            t.a = x
        }).call(this, i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nuniform float uHover;\n\nvarying vec2 vUv;\n\n@import aastep\n@import circle\n\nvoid main() {\n  vec2 uv = vUv;\n  float mask = 1. - circle(uv, .49);\n  gl_FragColor = vec4(uColor, mask);\n  gl_FragColor.a *= uAlpha;\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\nvoid main() {\n  float mask = texture2D(tMap, vUv).g;\n  gl_FragColor = vec4(uColor, mask);\n  gl_FragColor.a *= uAlpha;\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(106), i(55), i(18);
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(5),
                u = i(7),
                d = i(10),
                p = i(0),
                f = i(6),
                v = i(126),
                m = i(235),
                _ = {
                    dist: {
                        value: .05
                    },
                    distGlobal: {
                        value: .1
                    },
                    coef: {
                        value: -.1
                    },
                    springCoef: {
                        value: .82
                    },
                    springLerp: {
                        value: .14
                    }
                },
                y = new e.Vector2,
                b = new e.Vector2,
                g = (o = function(t) {
                    function i(t, n) {
                        var s;
                        return Object(a.a)(this, i), (s = Object(c.a)(this, Object(h.a)(i).call(this, t))).options = n, s.name = "title-block", s._index = n.index, s._parent = n.parent, s._composite = n.composite, s._mouse = new e.Vector2, s._coef = 0, s._initMeshes(), s._bind(), s.setSize(), setTimeout((function() {
                            s._createGUI()
                        }), 100), s
                    }
                    return Object(l.a)(i, t), Object(r.a)(i, [{
                        key: "_bind",
                        value: function() {
                            p.b.on("project_overlay:text_in", this._onTextIn)
                        }
                    }, {
                        key: "_initMeshes",
                        value: function() {
                            var t = new e.PlaneBufferGeometry(1, 1, 6, 2),
                                i = new Float32Array(2 * t.attributes.position.count);
                            t.setAttribute("offset", new e.BufferAttribute(i, 2)), this._nb = t.attributes.position.count, t.springs = [];
                            for (var n = 0, s = this._nb; n < s; n++) t.springs.push(new e.Vector2);
                            this._material = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: v.a,
                                fragmentShader: m.a,
                                uniforms: {
                                    uColor: {
                                        value: new e.Color("#ffffff")
                                    },
                                    uProgress: {
                                        value: 0
                                    },
                                    uAlpha: {
                                        value: 1
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this.mesh = new e.Mesh(t, this._material), this.mesh.baseScale = new e.Vector3(1, 1, 1), this.mesh.vertices = [], this.mesh.geom2 = t.clone(), this.add(this.mesh), this.mesh.renderOrder = 1008
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && this._parent.folder && (window.titleBlockAdded || (window.titleBlockAdded = !0, this.folder = this._parent.folder, this.folder.addInput(_.dist, "value", {
                                label: "block dist",
                                min: 0,
                                max: 1,
                                step: .01
                            }).on("change", (function(e) {
                                _.distGlobal.value = _.dist.value * p.h.width
                            })), this.folder.addInput(_.coef, "value", {
                                label: "block coef",
                                min: -1.2,
                                max: 1.2,
                                step: .01
                            }), this.folder.addInput(_.springCoef, "value", {
                                label: "block spring coef",
                                min: 0,
                                max: 5,
                                step: .01
                            }), this.folder.addInput(_.springLerp, "value", {
                                label: "block spring lerp",
                                min: 0,
                                max: 1,
                                step: .01
                            })))
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var e = this._material.uniforms;
                            n.killTweensOf(e.uAlpha), n.killTweensOf(e.uProgress), n.set(e.uProgress, {
                                value: 0
                            }), n.set(this, {
                                _coef: 0
                            }), n.to(this, {
                                _coef: 1,
                                duration: .8,
                                ease: "expo.out",
                                delay: .7 + .1 * this._index
                            }), n.to(e.uProgress, {
                                value: 1,
                                duration: .8,
                                ease: "expo.out",
                                delay: .7 + .1 * this._index
                            }), n.to(e.uAlpha, {
                                value: 1,
                                duration: .3,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            this._coef = 0, this._el = null, n.killTweensOf(this._material.uniforms.uAlpha), n.to(this._material.uniforms.uAlpha, {
                                value: 0,
                                duration: .3,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = this,
                                t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.h.width, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.h.height, document.querySelectorAll(".project-overlay__title-part"));
                            t[this._index] && (this._el = t[this._index]);
                            var i = function() {
                                var t = e.mesh;
                                if (e._el) {
                                    e._bbox = e._el.getBoundingClientRect();
                                    var i = e._bbox,
                                        n = e._el.style.transform;
                                    if (n && (n = n.split("(")[1], n = parseFloat(n)), i.width) {
                                        var s = isNaN(n) ? 0 : n;
                                        t.scale.set(i.width + 5, 1.25 * i.height, 1), t.position.x = i.x + t.scale.x / 2 - 5 - s + 15, t.position.y = -i.y - .4 * t.scale.y, t.baseScale.copy(t.scale)
                                    }
                                    _.distGlobal.value = _.dist.value * p.h.width, t.geom2.attributes.position.copyArray(t.geometry.attributes.position.array), t.updateMatrix(), t.geom2.applyMatrix(t.matrix), t.geometry.attributes.offset.needsUpdate = !0
                                }
                                e.visible = p.h.width > p.h.height
                            };
                            clearTimeout(this._resizeTo), i(), this._resizeTo = setTimeout((function() {
                                i()
                            }), 200)
                        }
                    }, {
                        key: "_onTextIn",
                        value: function(e) {
                            var t = e.els;
                            this._el = t[this._index], this._el ? (this.visible = !0, this.setSize()) : (this.visible = !1, this._el = null)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this;
                            if (this.visible) {
                                for (var n = this.mesh, s = n.geom2.attributes, o = s.position.array, a = n.geometry.attributes.offset, r = !1, c = _.springCoef.value, h = _.springLerp.value, l = 0, u = s.position.count; l < u; l++) {
                                    var d = o[3 * l],
                                        v = o[3 * l + 1],
                                        m = n.geometry.springs[l];
                                    y.set(d, v), b.set(p.f.client.x, -p.f.client.y);
                                    var g = y.distanceTo(b),
                                        w = y.set(d - p.f.client.x, v + p.f.client.y),
                                        x = Object(f.d)(g, 0, _.distGlobal.value, 1, 0, !0),
                                        O = a.array[2 * l + 0],
                                        k = a.array[2 * l + 1],
                                        j = 0,
                                        S = 0;
                                    g < _.distGlobal.value && (j = w.x * _.coef.value * x * this._coef, S = w.y * _.coef.value * x * this._coef, r = !0), m.x = Object(f.c)(m.x, (j - O) * c, h), m.y = Object(f.c)(m.y, (S - k) * c, h), a.array[2 * l + 0] += m.x, a.array[2 * l + 1] += m.y
                                }
                                r && (this._attrUpdate = !0, clearTimeout(this._attrTo), this._attrTo = setTimeout((function() {
                                    i._attrUpdate = !1
                                }), 1e3)), a.needsUpdate = this._attrUpdate
                            }
                        }
                    }]), i
                }(d.a), Object(u.a)(o.prototype, "show", [s], Object.getOwnPropertyDescriptor(o.prototype, "show"), o.prototype), Object(u.a)(o.prototype, "hide", [s], Object.getOwnPropertyDescriptor(o.prototype, "hide"), o.prototype), Object(u.a)(o.prototype, "_onTextIn", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onTextIn"), o.prototype), o);
            t.a = g
        }).call(this, i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\n@import aastep\n@import rectangle\n\nvoid main() {\n  float mask = rectangle(vUv, vec2(.99, .99));\n  mask *= step(vUv.x, uProgress);\n  gl_FragColor = vec4(uColor, mask);\n  gl_FragColor.a *= uAlpha;\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(10),
                l = i(0),
                u = (i(6), i(16)),
                d = i(237),
                p = i(238),
                f = function(t) {
                    function i(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(s.a)(this, i), (t = Object(a.a)(this, Object(r.a)(i).call(this, e, n))).options = n, t._progress = -.01, t._initMesh(), t._arrowVisible = !0, t
                    }
                    return Object(c.a)(i, t), Object(o.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            var t = this._world.GEOMS.plane;
                            this._material = this._createMaterial({
                                vertexShader: u.a,
                                fragmentShader: d.a,
                                depthTest: !1,
                                transparent: !0,
                                uniforms: {
                                    uColor: {
                                        value: new e.Color("#eeeeee")
                                    },
                                    uColorInv: {
                                        value: new e.Color("#131313")
                                    },
                                    uColor2: {
                                        value: new e.Color("#131313")
                                    },
                                    uColor2Inv: {
                                        value: new e.Color("#131313")
                                    },
                                    tMap: {
                                        value: this._textures.get("circle-edge")
                                    },
                                    uReverse: {
                                        value: 0
                                    },
                                    uFill: {
                                        value: 1
                                    },
                                    uProgress: {
                                        value: 0
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this._arrowMaterial = this._createMaterial({
                                vertexShader: u.a,
                                fragmentShader: p.a,
                                depthTest: !1,
                                transparent: !0,
                                uniforms: {
                                    tMap: {
                                        value: this._textures.get("arrow")
                                    },
                                    uColor: {
                                        value: new e.Color("#eeeeee")
                                    },
                                    uColor2: {
                                        value: new e.Color("#131313")
                                    },
                                    uTranslate: {
                                        value: new e.Vector2
                                    },
                                    uReverse: this._material.uniforms.uReverse
                                }
                            }), this.mesh = new e.Mesh(t, this._material), this.mesh.scale.set(1e-5, 1e-5, 1), this.mesh.baseScale = this.mesh.scale.clone(), this.mesh.renderOrder = 10, this.add(this.mesh), this.arrow = new e.Mesh(t, this._arrowMaterial), this.arrow.scale.set(1e-5, 1e-5, 1), this.arrow.baseScale = this.arrow.scale.clone(), this.arrow.renderOrder = 10, this.add(this.arrow), this._reverse = !1
                        }
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "onSwap",
                        value: function(e) {
                            n.set(this.mesh.scale, {
                                x: .001,
                                y: .001
                            }), n.to(this.mesh.scale, {
                                x: this.mesh.baseScale.x,
                                y: this.mesh.baseScale.y,
                                duration: 1,
                                ease: "cubic.out",
                                delay: .2
                            }), n.set(this.arrow.scale, {
                                x: .001,
                                y: .001
                            }), n.to(this.arrow.scale, {
                                x: this.arrow.baseScale.x,
                                y: this.arrow.baseScale.y,
                                duration: 1,
                                ease: "cubic.out",
                                delay: .3
                            }), n.set(this._arrowMaterial.uniforms.uTranslate.value, {
                                x: -1
                            }), n.to(this._arrowMaterial.uniforms.uTranslate.value, {
                                x: 0,
                                duration: 1,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function(e) {}
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            this.position.x = this.scene._camera.position.x, this._size = l.a.isMobile ? 30 : 35, l.a.isMobile ? (this.mesh.position.x = l.h.width - this._size / 2 - 20, this.mesh.position.y = -l.h.height + this._size / 2 + 20) : (this.mesh.position.x = l.h.width - this._size / 2 - 45, this.mesh.position.y = -l.h.height + this._size / 2 + 30), this.mesh.scale.set(this._size, this._size, 1), this.mesh.baseScale.copy(this.mesh.scale), this.arrow.position.copy(this.mesh.position), this.arrow.scale.set(this._size, this._size, 1), this.arrow.baseScale.copy(this.arrow.scale), l.a.isMobile && (this.arrow.rotation.z = -Math.PI / 2);
                            for (var n = 0, s = this._entities.length; n < s; n++) this._entities[n].setSize(e, t)
                        }
                    }, {
                        key: "_pulse",
                        value: function(e) {
                            var t = this._material.uniforms,
                                i = (t.uAlpha, t.uFill);
                            n.set(i, {
                                value: 0
                            }), n.to(i, {
                                value: 1,
                                duration: .5,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "_toggleReverse",
                        value: function(e) {
                            this._reverse = e;
                            var t = this._material.uniforms.uReverse;
                            n.killTweensOf(t), n.to(t, {
                                value: e ? 1 : 0,
                                duration: .3,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "_toggleArrow",
                        value: function(e) {
                            this._arrowVisible = e;
                            var t = this._arrowMaterial.uniforms.uTranslate;
                            n.killTweensOf(t);
                            var i = this.scene._camera.position;
                            if (e) i.x <= 0 && n.set(t.value, {
                                x: 1
                            }), n.to(t.value, {
                                x: 0,
                                duration: .35,
                                ease: "cubic.out"
                            });
                            else {
                                var s = -1;
                                (i.x < 0 || i.x > l.h.width * (l.i.totalWidth - 1.5)) && (s = 1), n.to(t.value, {
                                    x: s,
                                    duration: .35,
                                    ease: "cubic.in"
                                })
                            }
                        }
                    }, {
                        key: "_toggleMobileArrow",
                        value: function(e) {
                            this._arrowVisible = e;
                            var t = this._arrowMaterial.uniforms.uTranslate;
                            n.killTweensOf(t), e ? n.to(t.value, {
                                x: 0,
                                duration: .35,
                                ease: "cubic.out"
                            }) : n.to(t.value, {
                                x: -1,
                                duration: .35,
                                ease: "cubic.in"
                            })
                        }
                    }, {
                        key: "_updateMobile",
                        value: function(e, t) {
                            if (this.position.y = this.scene._camera.position.y, l.i.homeScrollbar) {
                                this._progress = 0, this._material.uniforms.uProgress.value = 0;
                                var i = l.i.homeScrollbar.scrollTop < 10;
                                this._reverse || i ? this._reverse && i && (n.to(this._material.uniforms.uAlpha, {
                                    value: 1,
                                    duration: .3,
                                    ease: "cubic.out"
                                }), n.to(this._arrowMaterial.uniforms.uAlpha, {
                                    value: 1,
                                    duration: .3,
                                    ease: "cubic.out"
                                }), this._reverse = !1) : (n.to(this._material.uniforms.uAlpha, {
                                    value: .01,
                                    duration: .3,
                                    ease: "cubic.out"
                                }), n.to(this._arrowMaterial.uniforms.uAlpha, {
                                    value: .01,
                                    duration: .3,
                                    ease: "cubic.out"
                                }), this._reverse = !0);
                                for (var s = 0, o = this._entities.length; s < o; s++) this._entities[s].update(e, t)
                            }
                        }
                    }, {
                        key: "_updateDesktop",
                        value: function(e, t) {
                            var i = this.scene._camera.position.x / (l.i.totalWidth * l.h.width),
                                n = l.h.width / (l.i.totalWidth * l.h.width),
                                s = 55 / (l.i.totalWidth * l.h.width),
                                o = i > -n + s && i < s;
                            this._reverse || o ? this._reverse && o && this._toggleReverse(!1) : this._toggleReverse(!0), Math.abs(i - this._progress) > .7 && this._pulse(), this._progress = i, this._material.uniforms.uProgress.value = i, this.position.x = this.scene._camera.position.x;
                            for (var a = 0, r = this._entities.length; a < r; a++) this._entities[a].update(e, t)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            l.a.isMobile ? this._updateMobile(e, t) : this._updateDesktop(e, t)
                        }
                    }]), i
                }(h.a);
            t.a = f
        }).call(this, i(11), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform vec3 uColor;\nuniform vec3 uColorInv;\nuniform vec3 uColor2;\nuniform vec3 uColor2Inv;\nuniform float uProgress;\nuniform float uAlpha;\nuniform float uFill;\nuniform float uReverse;\nvarying vec2 vUv;\n\n#define PI 3.1415926535897932384626433832795\n\n@import cmap\n@import aastep\n@import circle\n@import rotateUV\n\nvoid main() {\n  vec2 uv = vUv;\n  uv = rotateUV(uv, -PI/2.);\n  float dx = uv.x - .5;\n  float dy = uv.y - .5;\n\n  float limit = cmap(atan(dy, dx), -PI, PI, 1., 0.);\n  float mask = smoothstep(limit - .001, limit + .001, uProgress);\n\n  float circle = texture2D(tMap, vUv).r;\n\n  vec4 color = mix(vec4(mix(uColor, uColorInv, uReverse), mix(1., .3, uReverse)), vec4(mix(uColor2, uColor2Inv, uReverse), 1.), mask * uFill);\n\n  gl_FragColor = color;\n  gl_FragColor.a *= uAlpha * circle;\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform vec3 uColor;\nuniform vec3 uColor2;\nuniform vec2 uTranslate;\nuniform float uReverse;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import scaleUV\nvoid main() {\n  vec2 uv = vUv;\n  uv += uTranslate;\n  uv = scaleUV(uv, vec2(.55));\n  float arrow = texture2D(tMap, uv).g;\n  gl_FragColor = vec4(mix(uColor, uColor2, uReverse), arrow);\n  gl_FragColor.a *= uAlpha;\n}"
    }, function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(5),
            c = i(10),
            h = i(0),
            l = (i(6), i(26)),
            u = i(241),
            d = function(e) {
                function t(e) {
                    var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(n.a)(this, t), (i = Object(o.a)(this, Object(a.a)(t).call(this, e, s))).options = s, i._initMeshes(), i
                }
                return Object(r.a)(t, e), Object(s.a)(t, [{
                    key: "_initMeshes",
                    value: function() {
                        this._introBg = new l.a(this.scene, {
                            color: "#ffffff"
                        }), this._introBg.mesh.material.transparent = !0, this._addEntity(this._introBg), this._projectBg = new l.a(this.scene, {
                            color: "#EFEFE6"
                        }), this._addEntity(this._projectBg), this._shapes = new u.a(this.scene), this._addEntity(this._shapes), this._moreBg = new l.a(this.scene, {
                            color: "#ffffff"
                        }), this._addEntity(this._moreBg)
                    }
                }, {
                    key: "_bind",
                    value: function() {}
                }, {
                    key: "setSize",
                    value: function(e, t, i) {
                        var n = h.i.homeScrollbar ? h.i.homeScrollbar.scrollTop : 0;
                        clearTimeout(this._rTo);
                        var s = document.querySelector(".project-intro");
                        if (s) {
                            var o = s.getBoundingClientRect();
                            this._introBg.yOffset = -o.top - n, this._introBg.height = o.height;
                            var a = document.querySelector(".home__projects");
                            if (a) {
                                var r = a.getBoundingClientRect();
                                this._projectBg.yOffset = -r.top - n, this._projectBg.height = r.height;
                                var c = document.querySelector(".more-projects-mobile");
                                if (c) {
                                    var l = c.getBoundingClientRect();
                                    this._moreBg.yOffset = -l.top - n, this._moreBg.height = l.height;
                                    for (var u = 0, d = this._entities.length; u < d; u++) this._entities[u].setSize(e, t)
                                }
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t)
                    }
                }]), t
            }(c.a);
        t.a = d
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.);\n  gl_FragColor.a *= uAlpha;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(39), i(31), i(25), i(19), i(32);
            var s, o = i(21),
                a = (i(18), i(2)),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(8),
                u = i(5),
                d = i(7),
                p = i(10),
                f = i(0),
                v = (i(13), i(6)),
                m = i(51),
                _ = i(127),
                y = i(128);

            function b(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(i), !0).forEach((function(t) {
                        Object(o.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : b(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var w = {
                    circle: m.a,
                    triangle: _.a,
                    square: y.a
                },
                x = ["circle", "triangle", "square"],
                O = ["#FCAC14", "#F83D0C", "#8B3BDB", "#AAC3CD", "#E097C2", "#A66333"],
                k = (s = function(t) {
                    function i(t, n) {
                        var s;
                        return Object(a.a)(this, i), (s = Object(c.a)(this, Object(h.a)(i).call(this, t))).options = n, s.name = "project-shapes", s._fakeComposite = e.Composite.create(), s._shapes = [], s._layouts = [
                            [{
                                position: {
                                    x: .7,
                                    y: .9
                                },
                                size: .4,
                                angle: -.3,
                                speed: .1
                            }, {
                                position: {
                                    x: .05,
                                    y: .9
                                },
                                size: .25,
                                angle: -.3,
                                speed: .3
                            }, {
                                position: {
                                    x: .9,
                                    y: .8
                                },
                                size: .45,
                                angle: -.3,
                                speed: .25
                            }],
                            [{
                                position: {
                                    x: .2,
                                    y: .9
                                },
                                size: .22,
                                angle: -.8,
                                speed: .2
                            }, {
                                position: {
                                    x: .9,
                                    y: .9
                                },
                                size: .3,
                                angle: -3.4,
                                speed: .32
                            }, {
                                position: {
                                    x: .1,
                                    y: .9
                                },
                                size: .5,
                                angle: 3.2,
                                speed: .18
                            }],
                            [{
                                position: {
                                    x: .9,
                                    y: .9
                                },
                                size: .2,
                                angle: -.3,
                                speed: .12
                            }, {
                                position: {
                                    x: .1,
                                    y: .9
                                },
                                size: .3,
                                angle: -1.3,
                                speed: .22
                            }, {
                                position: {
                                    x: .8,
                                    y: .9
                                },
                                size: .4,
                                angle: -.1,
                                speed: .3
                            }]
                        ], s._initMeshes(), s
                    }
                    return Object(u.a)(i, t), Object(r.a)(i, [{
                        key: "_initMeshes",
                        value: function() {
                            var e = this;
                            this._els = document.querySelectorAll(".project-screen-mobile"), this._els.length || setTimeout((function() {
                                e._initMeshes()
                            }), 10), this._shapes = [];
                            for (var t = 0, i = 0, n = this._els.length + 1; i < n; i++) {
                                var s = i % 3;
                                i > 0 && 0 === s && ++t >= x.length && (t = 1);
                                var o = w[x[t]],
                                    a = O[i % O.length],
                                    r = g({}, this._layouts[t][s], {
                                        color: a
                                    }),
                                    c = new o(this.scene, {
                                        parent: this,
                                        composite: this._fakeComposite,
                                        mobile: !0,
                                        data: r
                                    });
                                this._addEntity(c), this._shapes.push(c)
                            }
                            this._isInit = !0, this.setSize()
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.h.width,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.h.height;
                            if (this._isInit) {
                                this._els = document.querySelectorAll(".project-screen-mobile");
                                for (var i = f.i.homeScrollbar ? f.i.homeScrollbar.scrollTop : 0, n = 0, s = this._els.length + 1; n < s; n++) {
                                    var o = this._els[Math.max(0, n - 1)];
                                    if (o) {
                                        var a = o.getBoundingClientRect(),
                                            r = this._shapes[n];
                                        r && (r.fixedY = 0 === n ? a.top + i + -.3 * a.height : a.top + i + a.height * r._pos.y)
                                    }
                                }
                                for (var c = 0, h = this._entities.length; c < h; c++) this._entities[c].setSize(e, t)
                            }
                        }
                    }, {
                        key: "onVisible",
                        value: function() {
                            Object(l.a)(Object(h.a)(i.prototype), "onVisible", this).call(this)
                        }
                    }, {
                        key: "update",
                        value: function(e, t, i) {
                            if (this._isInit && f.i.homeScrollbar)
                                for (var n = f.i.homeScrollbar.scrollTop, s = 0, o = this._entities.length; s < o; s++) {
                                    var a = this._entities[s],
                                        r = a.fixedY - a.mesh.baseScale.y / 2 - f.h.height,
                                        c = a.fixedY + a.mesh.baseScale.y / 2,
                                        h = Object(v.d)(n, r, c, -1, 1, !0);
                                    a.update(e, t, h)
                                }
                        }
                    }]), i
                }(p.a), Object(d.a)(s.prototype, "onVisible", [n], Object.getOwnPropertyDescriptor(s.prototype, "onVisible"), s.prototype), s);
            t.a = k
        }).call(this, i(23), i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\nuniform float uTime;\n\n@import aastep\n@import circle\n\nvoid main() {\n  vec2 uv = vUv;  \n  vec3 color = uColor;\n  gl_FragColor = vec4(color, 1.-circle(vUv, .49));\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\nuniform vec2 uMaskScale;\nuniform float uMaskAngle;\nuniform float uTime;\n\n@import aastep\n@import polygon\n@import scaleUV\n@import rotateUV\n@import cmap\n\nvoid main() {\n  vec3 color = uColor;\n  vec2 uv = vUv;\n  vec2 maskUv = vUv;\n  maskUv = scaleUV(maskUv, uMaskScale);\n  maskUv = rotateUV(maskUv, uMaskAngle);\n  gl_FragColor = vec4(color, 1.-polygon(maskUv, .49, 3.));\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\nuniform float uTime;\n\n@import aastep\n@import rectangle\n\nvoid main() {\n  vec3 color = uColor;\n  vec2 uv = vUv;\n  gl_FragColor = vec4(color, rectangle(vUv, vec2(.95)));\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import aastep\n@import circle\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.-circle(vUv, .49));\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import aastep\n@import polygon\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.-polygon(vUv, .49, 3.));\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import aastep\n@import rectangle\n\nvoid main() {\n  gl_FragColor = vec4(uColor, rectangle(vUv, vec2(.95)));\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(110);
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(8),
                c = i(5),
                h = i(50),
                l = i(26),
                u = i(249),
                d = i(51),
                p = i(0),
                f = function(t) {
                    function i() {
                        var e, t;
                        Object(n.a)(this, i);
                        for (var s = arguments.length, r = new Array(s), c = 0; c < s; c++) r[c] = arguments[c];
                        return (t = Object(o.a)(this, (e = Object(a.a)(i)).call.apply(e, [this].concat(r))))._titles = [], t._shapes = [], t._createEntities(), t._bind(), t
                    }
                    return Object(c.a)(i, t), Object(s.a)(i, [{
                        key: "_bind",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "_bind", this).call(this)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "_unbind", this).call(this)
                        }
                    }, {
                        key: "_createEntities",
                        value: function() {
                            var e;
                            this._bg = new l.a(this.scene, {
                                color: "#F83D0C",
                                isFirst: !0
                            }), this._addEntity(this._bg);
                            for (var t = 0, i = (e = p.a.isDesktop ? [{
                                    position: {
                                        x: .57,
                                        y: -.1
                                    },
                                    color: "#131313",
                                    size: .43,
                                    speed: .3,
                                    angle: 0,
                                    static: !0,
                                    align: "top",
                                    small: {
                                        position: {
                                            x: -.1,
                                            y: .58
                                        },
                                        color: "#131313",
                                        size: .035,
                                        distCoef: .5,
                                        coef: .5,
                                        speed: .3,
                                        angle: 0
                                    }
                                }, {
                                    position: {
                                        x: .8,
                                        y: .95
                                    },
                                    color: "#131313",
                                    size: .1,
                                    distCoef: .7,
                                    speed: .6,
                                    angle: 0
                                }, {
                                    position: {
                                        x: 1,
                                        y: .4
                                    },
                                    color: "#131313",
                                    size: .3,
                                    speed: .2,
                                    angle: 0,
                                    small: {
                                        position: {
                                            x: -.55,
                                            y: -.4
                                        },
                                        color: "#131313",
                                        size: .045,
                                        distCoef: .5,
                                        coef: .5,
                                        speed: .2,
                                        angle: 0
                                    }
                                }] : [{
                                    position: {
                                        x: .05,
                                        y: .25
                                    },
                                    color: "#131313",
                                    size: .8,
                                    speed: .17,
                                    angle: 0
                                }, {
                                    position: {
                                        x: 1,
                                        y: .8
                                    },
                                    color: "#131313",
                                    size: 1.13,
                                    speed: .2,
                                    angle: 0,
                                    small: {
                                        position: {
                                            x: -.2,
                                            y: -.6
                                        },
                                        color: "#131313",
                                        size: .15,
                                        distCoef: .5,
                                        coef: .5,
                                        speed: .2,
                                        angle: 0
                                    }
                                }]).length; t < i; t++) {
                                var n = e[t],
                                    s = new d.a(this.scene, {
                                        composite: this.composite,
                                        data: n,
                                        index: t,
                                        total: i,
                                        debug: !0
                                    });
                                if (this._addEntity(s), this._shapes.push(s), n.small) {
                                    var o = new d.a(this.scene, {
                                        composite: this.composite,
                                        data: e[t].small,
                                        parentShape: s,
                                        index: t,
                                        total: i,
                                        debug: !0
                                    });
                                    this._addEntity(o), this._shapes.push(o)
                                }
                            }
                            this._introTitle = new u.a(this.scene, {
                                parent: this,
                                composite: this.composite
                            }), this._addEntity(this._introTitle)
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            this._introTitle.setSize(e * this.screenWidth, t), this._bg.setSize(e * this.screenWidth, t);
                            for (var i = 0, n = this._shapes.length; i < n; i++) this._shapes[i].setSize(e * this.screenWidth, t)
                        }
                    }, {
                        key: "onSwap",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "onSwap", this).call(this), this._shapes.forEach((function(t, i) {
                                var n = t.mesh;
                                e.killTweensOf(n.scale), e.set(n.scale, {
                                    x: .001,
                                    y: .001,
                                    z: .001
                                }), e.to(n.scale, {
                                    x: n.baseScale.x,
                                    y: n.baseScale.y,
                                    z: n.baseScale.z,
                                    duration: 2,
                                    ease: "elastic.out(.6, .4)",
                                    delay: .1 * i + .2
                                })
                            }))
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "onSwapLeave", this).call(this), this._shapes.forEach((function(t, i) {
                                var n = t.mesh;
                                e.killTweensOf(n.scale), e.to(n.scale, {
                                    x: .001,
                                    y: .001,
                                    z: .001,
                                    duration: 1,
                                    ease: "cubic.out",
                                    delay: 1
                                })
                            }))
                        }
                    }, {
                        key: "_onUpdate",
                        value: function(e, t) {
                            for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t, this.progress);
                            p.i.introScreenProgress = this.progress
                        }
                    }, {
                        key: "screenWidth",
                        get: function() {
                            return 1
                        }
                    }]), i
                }(h.a);
            t.a = f
        }).call(this, i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(8),
            c = i(5),
            h = i(10),
            l = i(0),
            u = i(250),
            d = function(e) {
                function t(e) {
                    var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(n.a)(this, t), (i = Object(o.a)(this, Object(a.a)(t).call(this, e, s))).options = s, i._titles = [], i._text = s.text, i.size = s.size || 1, i.index = s.index, i._fontMap = i._textures.get("msdf-map"), i._initMesh(), i._createGUI(), i
                }
                return Object(c.a)(t, e), Object(s.a)(t, [{
                    key: "_initMesh",
                    value: function() {
                        this._titleSize = .09, this._descSize = .007;
                        this._bars = [];
                        for (var e = 0, t = ["Patrick", "Heng"].length; e < t; e++) {
                            var i = new u.a(this.scene, {
                                parent: this,
                                index: e
                            });
                            this._addEntity(i), this._bars.push(i)
                        }
                    }
                }, {
                    key: "_bind",
                    value: function() {}
                }, {
                    key: "onSwap",
                    value: function(e) {
                        this.setSize(), this._bars.forEach((function(t) {
                            return t.onSwap(e)
                        }))
                    }
                }, {
                    key: "onSwapLeave",
                    value: function(e) {
                        Object(r.a)(Object(a.a)(t.prototype), "onSwapLeave", this).call(this, e), clearTimeout(this._to)
                    }
                }, {
                    key: "setSize",
                    value: function(e, t, i) {
                        var n = this,
                            s = document.body.querySelector(".gl-title-top");
                        if (clearTimeout(this._to), s) {
                            var o = document.body.querySelector(".gl-title-bottom"),
                                a = s.getBoundingClientRect(),
                                r = this._bars[0].mesh;
                            l.a.isMobile ? (r.scale.set(.7 * l.h.width, .02 * l.h.width, 1), r.position.set(.04 * l.h.width + r.scale.x / 2, -a.y - .24 * l.h.width, 0)) : (r.scale.set(.3 * l.h.width, .0073 * l.h.width, 1), r.position.set(.1 * l.h.width + r.scale.x / 2, -a.y - .1035 * l.h.width, 0)), "windows" === l.a.os.fullName.toLowerCase() && (r.position.y -= .003 * l.h.width);
                            var c = o.getBoundingClientRect(),
                                h = this._bars[1].mesh;
                            l.a.isMobile ? (h.scale.set(.365 * l.h.width, .02 * l.h.width, 1), h.position.set(.04 * l.h.width + h.scale.x / 2, -c.y - .24 * l.h.width, 0)) : (h.scale.set(.153 * l.h.width, .0073 * l.h.width, 1), h.position.set(.112 * l.h.width, -c.y - .1035 * l.h.width, 0)), "windows" === l.a.os.fullName.toLowerCase() && (h.position.y -= .003 * l.h.width);
                            for (var u = 0, d = this._bars.length; u < d; u++) {
                                this._bars[u].setSize(e, t)
                            }
                        } else this._to = setTimeout((function() {
                            n.setSize(e, t)
                        }), 100)
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t)
                    }
                }]), t
            }(h.a);
        t.a = d
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(55);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(10),
                l = i(0),
                u = i(6),
                d = i(251),
                p = i(252),
                f = new e.Vector2,
                v = new e.Vector2,
                m = {
                    dist: {
                        value: .05
                    },
                    distGlobal: {
                        value: .1
                    },
                    coef: {
                        value: -.3
                    },
                    springCoef: {
                        value: 1.63
                    },
                    springLerp: {
                        value: .17
                    }
                },
                _ = function(t) {
                    function i(t) {
                        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(s.a)(this, i), (n = Object(a.a)(this, Object(r.a)(i).call(this, t, o))).options = o, n.index = o.index, n._prevMouse = new e.Vector2, n._mouse = new e.Vector2, n._attrUpdate = !1, n._coef = 0, l.a.isMobile && (m.dist.value = .25), n._initMesh(), n._createGUI(), n
                    }
                    return Object(c.a)(i, t), Object(o.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            var t = new e.PlaneBufferGeometry(1, 1, 15, 2),
                                i = new Float32Array(2 * t.attributes.position.count);
                            t.setAttribute("offset", new e.BufferAttribute(i, 2)), this._nb = t.attributes.position.count, t.springs = [];
                            for (var n = 0, s = this._nb; n < s; n++) t.springs.push(new e.Vector2);
                            var o = this._createMaterial({
                                    depthTest: !1,
                                    vertexShader: d.a,
                                    fragmentShader: p.a,
                                    transparent: !0,
                                    extensions: {
                                        derivatives: !0
                                    },
                                    uniforms: {
                                        uMouse: {
                                            value: this._mouse
                                        },
                                        uDist: m.distGlobal,
                                        uCoef: m.coef,
                                        uProgress: {
                                            value: 0
                                        },
                                        uColor: {
                                            value: new e.Color("#ffffff")
                                        }
                                    }
                                }),
                                a = new e.Mesh(t, o);
                            this.mesh = a, a.renderOrder = 100, a.scale.set(1, 1, 1), this.add(a), a.vertices = [], a.geom2 = t.clone()
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && !window.barAdded && (window.barAdded = !0, this.folder = this.scene.pane.addFolder({
                                title: "IntroBar"
                            }), this.folder.expanded = !1, this.folder.addInput(m.dist, "value", {
                                label: "dist",
                                min: 0,
                                max: 1,
                                step: .01
                            }).on("change", (function(e) {
                                m.distGlobal.value = m.dist.value * l.h.width
                            })), this.folder.addInput(m.coef, "value", {
                                label: "coef",
                                min: -1.2,
                                max: 1.2,
                                step: .01
                            }), this.folder.addInput(m.springCoef, "value", {
                                label: "spring coef",
                                min: 0,
                                max: 5,
                                step: .01
                            }), this.folder.addInput(m.springLerp, "value", {
                                label: "spring lerp",
                                min: 0,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            m.distGlobal.value = m.dist.value * l.h.width, this.mesh.geom2.attributes.position.copyArray(this.mesh.geometry.attributes.position.array), this.mesh.updateMatrix(), this.mesh.geom2.applyMatrix(this.mesh.matrix), this.mesh.geometry.attributes.offset.needsUpdate = !0
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function() {
                            n.killTweensOf(this, {
                                _coef: !0
                            });
                            var e = this.mesh.material.uniforms.uProgress;
                            n.killTweensOf(e), n.to(this, {
                                _coef: 0,
                                duration: .5
                            }), n.to(e, {
                                value: 0,
                                duration: .4,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "onSwap",
                        value: function() {
                            var e = l.e.hiddenPromiseDone ? .8 : 0;
                            n.killTweensOf(this, {
                                _coef: !0
                            });
                            var t = this.mesh.material.uniforms.uProgress;
                            n.killTweensOf(t), n.set(this, {
                                _coef: 0
                            }), n.to(this, {
                                _coef: 1,
                                duration: 1,
                                delay: 1 + e,
                                ease: "cubic.out"
                            }), n.set(t, {
                                value: 0
                            }), n.to(t, {
                                value: 1,
                                duration: .5,
                                delay: .3 + .2 * this.index + e,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this;
                            this._prevMouse.copy(this._mouse), this._mouse.x = this._world.mousePos.x, this._mouse.y = this._world.mousePos.y;
                            for (var n = m.springCoef.value, s = m.springLerp.value, o = !1, a = this.mesh, r = a.geom2.attributes, c = r.position.array, h = a.geometry.attributes.offset, l = 0, d = r.position.count; l < d; l++) {
                                var p = c[3 * l],
                                    _ = c[3 * l + 1],
                                    y = a.geometry.springs[l];
                                f.set(p, _), v.set(this._mouse.x, this._mouse.y);
                                var b = f.distanceTo(v),
                                    g = f.set(p - this._mouse.x, _ - this._mouse.y),
                                    w = Object(u.d)(b, 0, m.distGlobal.value, 1, 0, !0),
                                    x = h.array[2 * l + 0],
                                    O = h.array[2 * l + 1],
                                    k = 0,
                                    j = 0;
                                b < m.distGlobal.value && (k = g.x * m.coef.value * w * this._coef, j = g.y * m.coef.value * w * this._coef, o = !0), y.x = Object(u.c)(y.x, (k - x) * n, s), y.y = Object(u.c)(y.y, (j - O) * n, s), h.array[2 * l + 0] += y.x, h.array[2 * l + 1] += y.y
                            }
                            o && (this._attrUpdate = !0, clearTimeout(this._attrTo), this._attrTo = setTimeout((function() {
                                i._attrUpdate = !1
                            }), 1e3)), h.needsUpdate = this._attrUpdate
                        }
                    }]), i
                }(h.a);
            t.a = _
        }).call(this, i(11), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec2 offset;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);\n\n  mvPos.x += offset.x;\n  mvPos.y += offset.y;\n\n  gl_Position = projectionMatrix * mvPos;\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform float uAlpha;\nuniform float uProgress;\nuniform vec3 uColor;\nvarying vec2 vUv;\n\n@import aastep\n@import rectangle\n\nvoid main() {\n  float pMask = step(vUv.y, uProgress);\n  gl_FragColor = vec4(uColor, rectangle(vUv, vec2(.99, .95)) * uAlpha * pMask);\n}\n"
    }, function(e, t, i) {
        "use strict";
        i(161), i(18);
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(8),
            c = i(5),
            h = i(50),
            l = i(26),
            u = i(254),
            d = i(264),
            p = function(e) {
                function t(e) {
                    var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(n.a)(this, t), (i = Object(o.a)(this, Object(a.a)(t).call(this, e, s))).options = s, i.screenOffset = s.screenOffset || 0, i._data = s.data, i._animateMargin = 1, i._index = i._data.index, i._titles = [], i._createEntities(), i._bind(), i
                }
                return Object(c.a)(t, e), Object(s.a)(t, [{
                    key: "_bind",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_bind", this).call(this)
                    }
                }, {
                    key: "_unbind",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_unbind", this).call(this)
                    }
                }, {
                    key: "_createEntities",
                    value: function() {
                        this._bg = new l.a(this.scene, {
                            color: this.options.background || "#EFEFE6"
                        }), this._addEntity(this._bg), this._billboard = new u.a(this.scene, {
                            parent: this,
                            composite: this.composite,
                            angles: this._data.angles,
                            text: this._data.name,
                            preview: this._data.preview,
                            index: this._index,
                            line1: this._data.line1,
                            line2: this._data.line2
                        }), this._addEntity(this._billboard), this._shapes = new d.a(this.scene, {
                            parent: this,
                            composite: this.composite,
                            data: this._data,
                            last: this.options.last
                        }), this._addEntity(this._shapes)
                    }
                }, {
                    key: "setSize",
                    value: function(e, t) {
                        for (var i = this.screenOffset * e, n = 0, s = this._entities.length; n < s; n++) this._entities[n].xOffset = i, this._entities[n].setSize(e, t)
                    }
                }, {
                    key: "_onVisible",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_onVisible", this).call(this)
                    }
                }, {
                    key: "_onInvisible",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_onInvisible", this).call(this)
                    }
                }, {
                    key: "_onUpdate",
                    value: function(e, t) {
                        for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t, this.progress)
                    }
                }, {
                    key: "anchor",
                    get: function() {
                        return this._billboard.anchor
                    }
                }, {
                    key: "screenWidth",
                    get: function() {
                        return 1
                    }
                }]), t
            }(h.a);
        t.a = p
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(55), i(161);
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(5),
                u = i(7),
                d = i(10),
                p = i(0),
                f = i(6),
                v = i(13),
                m = i(255),
                _ = i(258),
                y = i(260),
                b = i(262),
                g = i(263),
                w = {
                    dist: {
                        value: .09
                    },
                    distGlobal: {
                        value: .1
                    },
                    coef: {
                        value: -.13
                    },
                    springCoef: {
                        value: .98
                    },
                    springLerp: {
                        value: .14
                    },
                    boardColor: new e.Color("#131313")
                },
                x = new e.Vector2,
                O = new e.Vector2,
                k = (o = function(t) {
                    function i(t) {
                        var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(a.a)(this, i), (n = Object(c.a)(this, Object(h.a)(i).call(this, t, s))).options = s, n._text = s.text, n.size = s.size, n.index = s.index, n._fontMap = n._textures.get("msdf-map"), n._composite = s.composite, n.offset = new e.Vector2(n.options.x || 0, n.options.y || 0), n.padding = new e.Vector2(100, 10), n._prevMouse = new e.Vector2, n._mouse = new e.Vector2, n._attrUpdate = !1, n.anchor = new e.Vector2, n._initMesh(), n._initHitBox(), n._createGUI(), n._bind(), n
                    }
                    return Object(l.a)(i, t), Object(r.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            var t = this;
                            this._meshes = [], this._boards = [], this._materials = [], this._texts = [], this.options.angles && (this._angles = this.options.angles);
                            var i, n = this.options,
                                s = n.line1,
                                o = n.line2;
                            this._image = new _.a(this, {
                                image: this.options.preview
                            }), this._image.rotation.z = this._angles ? this._angles[0] : Object(f.f)(-.04, .04), this._image.baseRot.z = this._image.rotation.z, this._addEntity(this._image), p.a.isDesktop && (this._play = new y.a(this.scene, {
                                parent: this
                            }), this._addEntity(this._play));
                            var a = [s || this._text];
                            o && a.push(o), a.forEach((function(n, s) {
                                i = new m.a(t.scene, {
                                    parent: t,
                                    padding: t.padding,
                                    composite: t._composite,
                                    text: n,
                                    size: .1 * p.h.width,
                                    color: "#ffffff",
                                    index: t.index
                                }), t._addRetinaEntity(i, "home"), t._texts.push(i);
                                var o = 10,
                                    a = 3;
                                Object(v.b)("x") && (o = parseInt(Object(v.b)("x"), 5)), Object(v.b)("y") && (a = parseInt(Object(v.b)("y"), 5));
                                var r = new e.PlaneBufferGeometry(1, 1, o, a),
                                    c = new Float32Array(2 * r.attributes.position.count);
                                r.setAttribute("offset", new e.BufferAttribute(c, 2)), t._nb = r.attributes.position.count, r.springs = [];
                                for (var h = 0, l = t._nb; h < l; h++) r.springs.push(new e.Vector2);
                                var u = t._createMaterial({
                                        vertexShader: b.a,
                                        fragmentShader: g.a,
                                        transparent: !0,
                                        extensions: {
                                            derivatives: !0
                                        },
                                        uniforms: {
                                            uMouse: {
                                                value: t._mouse
                                            },
                                            uDist: w.distGlobal,
                                            uCoef: w.coef,
                                            uColor: {
                                                value: w.boardColor
                                            }
                                        }
                                    }),
                                    d = new e.Mesh(r, u);
                                d.scale.set(1, 1, 1), t.add(d), t._boards.push(d), d.text = i, d.vertices = [], d.geom2 = r.clone(), d.text.rotation.z = d.rotation.z, d.renderOrder = 7
                            }))
                        }
                    }, {
                        key: "_initHitBox",
                        value: function() {
                            this._hitBox = new e.Mesh(this._world.GEOMS.plane, new e.MeshBasicMaterial({
                                color: 16711680
                            })), this._hitBox.material.visible = !1, this.add(this._hitBox)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && !window.staticBillboardAdded && (window.staticBillboardAdded = !0, this.folder = this.scene.pane.addFolder({
                                title: "StaticBillboard"
                            }), this.folder.expanded = !1, this.folder.addInput(w.dist, "value", {
                                label: "dist",
                                min: 0,
                                max: 1,
                                step: .01
                            }).on("change", (function(e) {
                                w.distGlobal.value = w.dist.value * p.h.width
                            })), this.folder.addInput(w.coef, "value", {
                                label: "coef",
                                min: -1.2,
                                max: 1.2,
                                step: .01
                            }), this.folder.addInput(w.springCoef, "value", {
                                label: "spring coef",
                                min: 0,
                                max: 5,
                                step: .01
                            }), this.folder.addInput(w.springLerp, "value", {
                                label: "spring lerp",
                                min: 0,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            p.f.addUp(this._onMouseUp), p.b.on("project_overlay:closed", this._onOverlayClose)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            p.f.removeUp(this._onMouseUp), p.b.off("project_overlay:closed", this._onOverlayClose)
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            this.padding.x = .05 * e, this._image.setSize(e, t), w.distGlobal.value = w.dist.value * p.h.width, this.size = .06 * p.h.width;
                            for (var n = this.xOffset || 0, s = this.yOffset || 0, o = 0, a = 0, r = this._texts.length; a < r; a++) {
                                var c = this._texts[a];
                                c.xOffset = n, c.size = c.isSmall ? .01 * e : this.size, c.setSize(e, t), o += c.height + this.padding.y
                            }
                            for (var h, l = .021 * e, u = 0, d = 0, f = this._boards.length; d < f; d++) {
                                var v = this._boards[d];
                                v.scale.set(v.text.width + this.padding.x, v.text.height + this.padding.y, 1), 1 === f ? v.position.set(this.offset.x + n, this.offset.y - l, 0) : (v.position.set(this.offset.x + n, this.offset.y + o / 2 - l - v.scale.y / 2, 0), l += .7 * v.scale.y), v.position.x += p.h.width / 2, v.position.y -= p.h.height / 2, v.text.position.copy(v.position), v.text.position.y += .44 * v.text.height, v.geom2.attributes.position.copyArray(v.geometry.attributes.position.array), v.updateMatrix(), v.geom2.applyMatrix(v.matrix), v.geometry.attributes.offset.needsUpdate = !0, u = Math.max(u, v.scale.x), h = v
                            }
                            var m = this._boards[0];
                            this._image.position.x = m.position.x, this._image.position.y = m.position.y + m.scale.y - .125 * this._image.scale.y, this._image.basePos.copy(this._image.position), this._play && (this._play.targetPos.x = m.position.x, this._play.targetPos.y = m.position.y + m.scale.y - .125 * this._image.scale.y, this._play.basePos.x = m.position.x, this._play.basePos.y = m.position.y, this._play.setSize()), this._hitBox.position.set(n + p.h.width / 2, s - p.h.height / 2 + .03 * p.h.height, 0), this._hitBox.scale.set(u + .02 * p.h.width, o + this._image.scale.y, 1), p.h.width < p.h.height && p.h.width < 1110 ? this.anchor.set(h.position.x, h.position.y) : this.anchor.set(h.position.x - n + h.scale.x / 2, h.position.y)
                        }
                    }, {
                        key: "_raycast",
                        value: function() {
                            var e = this._world.raycaster;
                            e.setFromCamera({
                                x: 2 * p.f.client.norm.x - 1,
                                y: 2 * -p.f.client.norm.y + 1
                            }, this.scene.camera), e.intersectObject(this._hitBox).length ? (this._hover || this._onMouseEnter(), this._hover = !0) : (this._hover && this._onMouseLeave(), this._hover = !1)
                        }
                    }, {
                        key: "_onMouseUp",
                        value: function() {
                            p.i.isHome && this._hover && !p.i.isOverlay && p.f.pressDuration < 300 && p.f.movement.length < 3 && (p.b.emit("project_overlay:open", {
                                index: this.index
                            }), this._onMouseLeave(), this._hover = !1)
                        }
                    }, {
                        key: "_onOverlayClose",
                        value: function(e) {
                            e.index
                        }
                    }, {
                        key: "_onMouseEnter",
                        value: function() {
                            document.body.classList.add("is-pointer");
                            var e = this._image;
                            e.baseRot.z;
                            n.killTweensOf([e.scale, e.rotation, e.position, e.material.uniforms.uHover]), n.to(e.material.uniforms.uHover, {
                                value: 1,
                                ease: "cubic.out",
                                duration: .3
                            }), this._play && this._play.onHover(!0);
                            for (var t = 0, i = this._boards.length; t < i; t++) {
                                this._boards[t].text.hover(!0)
                            }
                        }
                    }, {
                        key: "_onMouseLeave",
                        value: function() {
                            document.body.classList.remove("is-pointer");
                            var e = this._image;
                            n.killTweensOf([e.scale, e.rotation, e.position, e.material.uniforms.uHover]), n.to(e.material.uniforms.uHover, {
                                value: 0,
                                ease: "cubic.out",
                                duration: .3
                            }), this._play && this._play.onHover(!1);
                            for (var t = 0, i = this._boards.length; t < i; t++) {
                                this._boards[t].text.hover(!1)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this;
                            this._prevMouse.copy(this._mouse), this._mouse.x = this._world.mousePos.x, this._mouse.y = this._world.mousePos.y, this._play && this._play.update(e, t), this._prevMouse.x === this._mouse.x && this._prevMouse.y === this._mouse.y || this._raycast();
                            for (var n = 0, s = this._texts.length; n < s; n++) this._texts[n].update(e, t);
                            for (var o = w.springCoef.value, a = w.springLerp.value, r = !1, c = 0, h = this._boards.length; c < h; c++) {
                                for (var l = this._boards[c], u = l.geom2.attributes, d = u.position.array, p = l.geometry.attributes.offset, v = 0, m = u.position.count; v < m; v++) {
                                    var _ = d[3 * v],
                                        y = d[3 * v + 1],
                                        b = l.geometry.springs[v];
                                    x.set(_, y), O.set(this._mouse.x, this._mouse.y);
                                    var g = x.distanceTo(O),
                                        k = x.set(_ - this._mouse.x, y - this._mouse.y),
                                        j = Object(f.d)(g, 0, w.distGlobal.value, 1, 0, !0),
                                        S = p.array[2 * v + 0],
                                        C = p.array[2 * v + 1],
                                        P = 0,
                                        M = 0;
                                    g < w.distGlobal.value && (P = k.x * w.coef.value * j, M = k.y * w.coef.value * j, r = !0), b.x = Object(f.c)(b.x, (P - S) * o, a), b.y = Object(f.c)(b.y, (M - C) * o, a), p.array[2 * v + 0] += b.x, p.array[2 * v + 1] += b.y
                                }
                                r && (this._attrUpdate = !0, clearTimeout(this._attrTo), this._attrTo = setTimeout((function() {
                                    i._attrUpdate = !1
                                }), 1e3)), p.needsUpdate = this._attrUpdate
                            }
                        }
                    }]), i
                }(d.a), Object(u.a)(o.prototype, "_onMouseUp", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onMouseUp"), o.prototype), Object(u.a)(o.prototype, "_onOverlayClose", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onOverlayClose"), o.prototype), o);
            t.a = k
        }).call(this, i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            for (var o = i(2), a = i(3), r = i(4), c = i(1), h = i(5), l = i(10), u = i(0), d = i(6), p = (i(13), i(29)), f = i(256), v = i(257), m = i(129), _ = (new e.Vector3, n), y = (_.Bodies, _.Body, _.Constraint, {
                    dist: {
                        value: .16
                    },
                    distGlobal: {
                        value: .1
                    },
                    coef: {
                        value: 0
                    }
                }), b = ["#F8B028", "#F64E22", "#8B3BDB", "#B1C3CA", "#E097C2", "#A66333", "#015CD1"], g = 0, w = b.length; g < w; g++) b[g] = new e.Color(b[g]);
            var x = function(t) {
                function i(t) {
                    var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(o.a)(this, i), (n = Object(r.a)(this, Object(c.a)(i).call(this, t, s))).options = s, n._billboard = s.mesh, n._padding = s.padding, n._text = s.text, n.index = s.index, n.size = s.size || 1, n._fontMap = n._textures.get("msdf-map"), n._isHover = !1, n._stiffness = s.stiffness || .2, n._mouse = new e.Vector2, n._composite = s.composite, n.offset = new e.Vector2(n.options.x || 0, n.options.y || 0), n._textData = new m.a({
                        font: p.a.get("msdf-data"),
                        text: n._text,
                        align: "center",
                        size: n.size,
                        getPositions: !1,
                        getSizes: !1,
                        getOffsets: !1
                    }), n._initMesh(), n._bind(), n._createGUI(), n
                }
                return Object(h.a)(i, t), Object(a.a)(i, [{
                    key: "_initMesh",
                    value: function() {
                        var t = new e.BufferGeometry,
                            i = this._textData.buffers;
                        this.geometry = t, t.setAttribute("position", new e.BufferAttribute(i.position, 3)), t.setAttribute("uv", new e.BufferAttribute(i.uv, 2)), t.setAttribute("id", new e.BufferAttribute(i.id, 1)), t.setIndex(new e.BufferAttribute(this._textData.buffers.index, 1));
                        var n = this._createMaterial({
                            depthTest: !1,
                            vertexShader: f.a,
                            fragmentShader: v.a,
                            transparent: !0,
                            uniforms: {
                                uHover: {
                                    value: 0
                                },
                                uColor: {
                                    value: new e.Color(this.options.color || "#ffffff")
                                },
                                tColors: {
                                    value: this._textures.get("colors")
                                },
                                tMap: {
                                    value: this._fontMap
                                },
                                uMouse: {
                                    value: this._mouse
                                },
                                uJump: {
                                    value: 0
                                },
                                uColorSwap: {
                                    value: 0
                                },
                                uMainColorSwap: {
                                    value: 0
                                },
                                uMainColor: {
                                    value: new e.Color(b[this.index % (b.length - 1)])
                                },
                                uColorOffset: {
                                    value: Object(d.g)(0, 8)
                                },
                                uDist: y.distGlobal,
                                uCoef: y.coef
                            },
                            extensions: {
                                derivatives: !0
                            }
                        });
                        this.colorOffset = {
                            value: n.uniforms.uColorOffset.value
                        }, this.material = n, this.mesh = new e.Mesh(t, n), this.mesh.frustumCulled = !1, this.mesh.renderOrder = 9, this.add(this.mesh)
                    }
                }, {
                    key: "_createGUI",
                    value: function() {
                        this.scene.pane && !window.staticBillboardTextAdded && (window.staticBillboardTextAdded = !0, this.folder = this.scene.pane.addFolder({
                            title: "StaticBillboardText"
                        }), this.folder.expanded = !1, this.folder.addInput(y.dist, "value", {
                            label: "dist",
                            min: 0,
                            max: 1,
                            step: .01
                        }).on("change", (function(e) {
                            y.distGlobal.value = y.dist.value * u.h.width
                        })), this.folder.addInput(y.coef, "value", {
                            label: "coef",
                            min: -1.2,
                            max: 1.2,
                            step: .01
                        }))
                    }
                }, {
                    key: "_bind",
                    value: function() {}
                }, {
                    key: "setSize",
                    value: function(e, t, i) {
                        var n = this.size,
                            s = this.xOffset;
                        y.distGlobal.value = y.dist.value * u.h.width, n !== this._textData.lastSize && (this._textData.resize({
                            size: n
                        }), this.offset.x = s + e / 2 - this.width / 2, this.offset.y = t / 2 - .5 * this.height, this._textData.lastSize = n, i && i(), this.geometry.attributes.position.needsUpdate = !0)
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        this._mouse.x = this._world.mousePos.x, this._mouse.y = this._world.mousePos.y
                    }
                }, {
                    key: "hover",
                    value: function(e) {
                        var t = this,
                            i = this.material.uniforms,
                            n = i.uHover,
                            o = i.uColorOffset,
                            a = i.uColorSwap,
                            r = i.uJump,
                            c = i.uMainColorSwap;
                        i.uMainColor;
                        s.killTweensOf(r), s.killTweensOf(n), s.killTweensOf(a), s.killTweensOf(c), s.to(n, {
                            value: e ? 1 : 0,
                            duration: .4,
                            ease: "cubic.out"
                        }), e ? (s.to(r, {
                            value: 1,
                            duration: 1,
                            ease: "elastic.out(.3, .8)"
                        }), s.to(this.colorOffset, {
                            value: this.colorOffset.value + Object(d.g)(4, 5),
                            duration: 1,
                            ease: "expo.out",
                            onUpdate: function() {
                                o.value = Math.ceil(t.colorOffset.value) + .03
                            }
                        }), s.set(a, {
                            value: e ? 1 : 0
                        })) : (s.to(r, {
                            value: 0,
                            duration: 1,
                            ease: "elastic.out(.4, .8)"
                        }), s.to(a, {
                            value: 0,
                            duration: .3,
                            onComplete: function() {}
                        }))
                    }
                }, {
                    key: "width",
                    get: function() {
                        return this._textData.width
                    }
                }, {
                    key: "height",
                    get: function() {
                        return this._textData.height
                    }
                }]), i
            }(l.a);
            t.a = x
        }).call(this, i(11), i(23), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\nattribute float id;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 offset;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uBodyScale;\nvarying vec2 vUv;\nvarying float vId;\n\nuniform vec2 uMouse;\nuniform float uDist;\nuniform float uCoef;\nuniform float uHover;\nuniform float uJump;\nuniform float uTime;\n\n@import cmap\n\nfloat cheapParabola(float x) {\n    return 1.0 - abs(x * 2.0 - 1.0);\n} \n\nvoid main() {\n    vUv = uv;\n    vId = id;\n    vec3 pos = position;\n\n    pos.y += sin(id * 2. + uTime * 2.) * 10. * cheapParabola(uJump);\n    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);\n    float dist = distance(mvPos.xy, uMouse);\n    vec2 offset = mvPos.xy - uMouse;\n    float force = 0.;\n    if (dist < uDist) {\n        force = cmap(dist, 0., uDist, 1., 0.);\n        float coef = force * uCoef;\n        mvPos.x += offset.x * coef;\n        mvPos.y += offset.y * coef;\n    }\n\n    gl_Position = projectionMatrix * mvPos;\n}"
    }, function(e, t, i) {
        "use strict";
        t.a = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform sampler2D tColors;\nuniform float uAlpha;\nuniform float uHover;\nuniform float uColorSwap;\nuniform float uMainColorSwap;\nuniform vec3 uColor;\nuniform vec3 uMainColor;\nuniform float uColorOffset;\nvarying vec2 vUv;\nvarying float vId;\n\nfloat median(float r, float g, float b) {\n  return max(min(r, g), min(max(r, g), b));\n}\n\nvoid main() {\n  vec3 tex = texture2D(tMap, vUv).rgb;\n\n  vec2 lookUp = vec2(mod(vId + uColorOffset, 8.) / 7. + .0001,.5);\n  vec3 color = texture2D(tColors, lookUp).rgb;\n  color = mix(uColor, color, uColorSwap);\n  color = mix(color, uMainColor, uMainColorSwap);\n  // vec3 color = mix(uColor, vec3(1., 0., 0.), vUv.y);\n  float sigDist = median(tex.r, tex.g, tex.b) - 0.5;\n  float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);\n  // float modulo = vId - 5. * floor(vId/5.);\n  // const int index = int(1.);\n\n  gl_FragColor = vec4(color, alpha * uAlpha);\n  if (gl_FragColor.a < .01) discard;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(106);
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(5),
                u = i(7),
                d = i(10),
                p = i(0),
                f = i(16),
                v = i(259),
                m = (o = function(t) {
                    function i(t) {
                        var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(a.a)(this, i), (n = Object(c.a)(this, Object(h.a)(i).call(this, t, s))).options = s, n._src = s.src, n.basePos = new e.Vector3, n.baseRot = new e.Vector3, n.baseScale = new e.Vector3(1, 1, 1), n._initMesh(), n._bind(), n._createGUI(), n
                    }
                    return Object(l.a)(i, t), Object(r.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            if (this._src || (this._src = this.options.image || "https://i.picsum.photos/id/866/1600/900.jpg"), 0 === this._src.indexOf("http")) this._map = this._loadTexture(this._src, this._onMapLoaded);
                            else {
                                var t = this._src,
                                    i = t.split(".");
                                t = i[0] + "_po2.jpg", this._map = this._loadTexture("/images/previews/" + t, this._onMapLoaded)
                            }
                            this.geometry = this._world.GEOMS.plane, this.material = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: f.a,
                                fragmentShader: v.a,
                                extensions: {
                                    derivatives: !0
                                },
                                uniforms: {
                                    uLoaded: {
                                        value: 0
                                    },
                                    uHover: {
                                        value: 0
                                    },
                                    tMap: {
                                        value: this._map
                                    }
                                }
                            }), this.mesh = new e.Mesh(this.geometry, this.material), this.mesh.renderOrder = 7, this.add(this.mesh)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && !window.staticBillBoardImageAdded && (window.staticBillBoardImageAdded = !0)
                        }
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "_onMapLoaded",
                        value: function() {
                            n.to(this.material.uniforms.uLoaded, {
                                value: 1,
                                ease: "cubic.out",
                                duration: 1
                            })
                        }
                    }, {
                        key: "fadeIn",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            this.baseScale.x = .13 * p.h.width, this.baseScale.y = this.baseScale.x / 1.55, this.scale.copy(this.baseScale)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {}
                    }]), i
                }(d.a), Object(u.a)(o.prototype, "_onMapLoaded", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onMapLoaded"), o.prototype), o);
            t.a = m
        }).call(this, i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform float uAlpha;\nuniform float uLoaded;\nuniform float uTime;\nuniform float uHover;\nvarying vec2 vUv;\n\n@import luma\n@import aastep\n@import rectangle\n@import cmap\n@import scaleUV\n\nfloat rand(vec2 n) { \n\treturn fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nvoid main() {\n  vec2 uv = scaleUV(vUv, vec2(cmap(uHover, 0., 1., 1., 1.08)));\n  vec4 texel = texture2D(tMap, uv);\n  vec3 color = mix(vec3(.9), texel.rgb, uLoaded);\n  float lum = luma(color) + rand(vUv + fract(uTime * .001)) * .2 - .1;\n  float alpha = uAlpha * rectangle(vUv, vec2(.99));\n\n  float border = 1. - rectangle(vUv, vec2(.94, .92));\n  lum = min(lum + 1. * border + uHover * .05, 1.);\n  gl_FragColor = vec4(vec3(lum), alpha);\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(10),
                l = i(0),
                u = i(6),
                d = i(16),
                p = i(261),
                f = function(t) {
                    function i(t) {
                        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(s.a)(this, i), (n = Object(a.a)(this, Object(r.a)(i).call(this, t, o))).options = o, n._src = o.src, n.basePos = new e.Vector3, n.targetPos = new e.Vector3, n.hover = 0, n.baseRot = new e.Vector3, n.baseScale = new e.Vector3(1, 1, 1), n._initMesh(), n._bind(), n._createGUI(), n.visible = !1, n
                    }
                    return Object(c.a)(i, t), Object(o.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            this.geometry = this._world.GEOMS.plane, this.material = this._createMaterial({
                                depthTest: !1,
                                transparent: !0,
                                vertexShader: d.a,
                                fragmentShader: p.a,
                                extensions: {
                                    derivatives: !0
                                },
                                uniforms: {
                                    tMap: {
                                        value: this._textures.get("play")
                                    }
                                }
                            }), this.mesh = new e.Mesh(this.geometry, this.material), this.mesh.renderOrder = 7, this.add(this.mesh)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {}
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "fadeIn",
                        value: function() {}
                    }, {
                        key: "onHover",
                        value: function(e) {
                            var t = this;
                            n.killTweensOf(this, {
                                hover: !0
                            }), n.killTweensOf(this.scale), n.killTweensOf(this.rotation), e ? (this.visible = !0, n.to(this.rotation, {
                                z: 0,
                                duration: 1,
                                ease: "elastic.out(.8, .5)"
                            }), n.to(this.scale, {
                                x: this.baseScale.x,
                                y: this.baseScale.y,
                                duration: .5,
                                ease: "cubic.out"
                            }), n.to(this, {
                                hover: 1,
                                duration: .6,
                                ease: "elastic.out(.5, .5)"
                            })) : (n.to(this.rotation, {
                                z: -1,
                                duration: .4,
                                delay: .3,
                                ease: "cubic.out"
                            }), n.to(this.scale, {
                                x: .8 * this.baseScale.x,
                                y: .8 * this.baseScale.y,
                                duration: .4,
                                ease: "cubic.out"
                            }), n.to(this, {
                                hover: 0,
                                duration: .3,
                                ease: "elastic.in(.5, .5)",
                                onComplete: function() {
                                    t.visible = !1
                                }
                            }))
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            this.baseScale.x = .04 * l.h.width, this.baseScale.y = this.baseScale.x, this.scale.copy(this.baseScale), this.hover < .01 && (n.set(this.scale, {
                                x: .8 * this.baseScale.x,
                                y: .8 * this.baseScale.y
                            }), n.set(this.rotation, {
                                z: -1
                            }))
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.visible && (this.position.x = Object(u.c)(this.basePos.x, this.targetPos.x, this.hover), this.position.y = Object(u.c)(this.basePos.y, this.targetPos.y, this.hover))
                        }
                    }]), i
                }(h.a);
            t.a = f
        }).call(this, i(11), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\nuniform float uTime;\n\nvoid main() {\n  // vec3 color = uColor;\n  gl_FragColor = texture2D(tMap, vUv);\n  gl_FragColor.a *= uAlpha;\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec2 offset;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);\n\n  mvPos.x += offset.x;\n  mvPos.y += offset.y;\n\n  gl_Position = projectionMatrix * mvPos;\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\n// uniform vec3 uColor;\nuniform float uAlpha;\nuniform vec3 uColor;\nvarying vec2 vUv;\n\n@import aastep\n@import rectangle\n\nvoid main() {\n  gl_FragColor = vec4(uColor, rectangle(vUv, vec2(.99, .95)));\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(110), i(18);
            var n, s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(8),
                h = i(5),
                l = i(7),
                u = i(10),
                d = i(0),
                p = i(13),
                f = i(6),
                v = i(51),
                m = i(127),
                _ = i(128),
                y = {
                    circle: v.a,
                    triangle: m.a,
                    square: _.a
                },
                b = ["circle", "triangle", "square"],
                g = ["#FCAC14", "#F83D0C", "#8B3BDB", "#AAC3CD", "#E097C2", "#A66333"],
                w = 0,
                x = (n = function(e) {
                    function t(e, i) {
                        var n;
                        return Object(s.a)(this, t), (n = Object(a.a)(this, Object(r.a)(t).call(this, e))).options = i, n.name = "project-shapes", n._parent = i.parent, n._composite = i.composite, n._data = i.data || {}, n._index = n._data.index, n._shapes = [], n._layouts = [
                            [{
                                position: {
                                    x: .2,
                                    y: .25
                                },
                                size: .2,
                                angle: -.3
                            }, {
                                position: {
                                    x: .4,
                                    y: .97
                                },
                                size: .15,
                                angle: .3,
                                small: {
                                    position: [{
                                        x: -.55,
                                        y: -.3
                                    }, {
                                        x: -.42,
                                        y: -.4
                                    }, {
                                        x: .52,
                                        y: -.4
                                    }, {
                                        x: .55,
                                        y: -.2
                                    }],
                                    size: .012,
                                    distCoef: .5,
                                    coef: .5,
                                    angle: 0
                                }
                            }, {
                                position: {
                                    x: .9,
                                    y: .2
                                },
                                size: .4,
                                angle: -.4,
                                small: {
                                    position: [{
                                        x: -.4,
                                        y: .4
                                    }, {
                                        x: .1,
                                        y: .53
                                    }, {
                                        x: -.53,
                                        y: 0
                                    }],
                                    size: .012,
                                    distCoef: .4,
                                    coef: .5,
                                    angle: 0
                                }
                            }],
                            [{
                                position: {
                                    x: .1,
                                    y: .74
                                },
                                size: .17,
                                angle: Math.PI / 4 - .3
                            }, {
                                position: {
                                    x: .3,
                                    y: .05
                                },
                                size: .2,
                                angle: 3.3,
                                small: {
                                    position: [{
                                        x: .35,
                                        y: .15
                                    }, {
                                        x: -.4,
                                        y: .44
                                    }, {
                                        x: .35,
                                        y: .3
                                    }],
                                    size: .012,
                                    distCoef: .5,
                                    coef: .5,
                                    angle: 0
                                }
                            }, {
                                position: {
                                    x: .85,
                                    y: .7
                                },
                                size: .4,
                                angle: .7,
                                small: {
                                    position: [{
                                        x: -0,
                                        y: -.4
                                    }],
                                    size: .012,
                                    distCoef: .5,
                                    coef: .5,
                                    angle: 0
                                }
                            }],
                            [{
                                position: {
                                    x: .1,
                                    y: .2
                                },
                                size: .12,
                                angle: 1
                            }, {
                                position: {
                                    x: .4,
                                    y: .88
                                },
                                size: .16,
                                angle: -1.5,
                                small: {
                                    position: [{
                                        x: .7,
                                        y: .3
                                    }, {
                                        x: -.7,
                                        y: .2
                                    }, {
                                        x: -.65,
                                        y: -.4
                                    }, {
                                        x: .6,
                                        y: -.6
                                    }, {
                                        x: .7,
                                        y: -.35
                                    }],
                                    size: .012,
                                    distCoef: .5,
                                    coef: .5,
                                    angle: 0
                                }
                            }, {
                                position: {
                                    x: .8,
                                    y: .05
                                },
                                size: .3,
                                angle: -2.5,
                                small: {
                                    position: [{
                                        x: -.4,
                                        y: .44
                                    }, {
                                        x: .7,
                                        y: .2
                                    }, {
                                        x: -.7,
                                        y: -0
                                    }, {
                                        x: -.5,
                                        y: .35
                                    }],
                                    size: .012,
                                    distCoef: .5,
                                    coef: .5,
                                    angle: 0
                                }
                            }]
                        ], n._initMeshes(), n.visible = !1, n
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "_initMeshes",
                        value: function() {
                            var e = this._data.shapeType || b[this._index % b.length],
                                t = y[e],
                                i = this._getLayout(e);
                            if (i && i.length)
                                for (var n = 0, s = i.length; n < s; n++) {
                                    var o = new t(this.scene, {
                                        parent: this,
                                        composite: this._composite,
                                        data: i[n],
                                        parentShape: !!i[n].isSmall && this._shapes[this._shapes.length - 1],
                                        index: i[n].index,
                                        total: i[n].total
                                    });
                                    o.mesh.renderOrder = 6, this._addEntity(o), this._shapes.push(o)
                                }
                        }
                    }, {
                        key: "_getLayout",
                        value: function(e) {
                            var t = this._index % this._layouts.length,
                                i = this._layouts[t],
                                n = 1;
                            "triangle" === e && (n = 1.1), "square" === e && (n = .8);
                            for (var s = [], o = 0, a = i.length; o < a; o++) {
                                var r = JSON.parse(JSON.stringify(i[o]));
                                if (r.position.x += Object(f.f)(-.02, .02), this.options.last && (r.position.x -= .05), r.position.y += Object(f.f)(-.02, .02), r.color = g[w++ % g.length], r.size *= n, r.angle += Object(f.f)(-.05, .05), r.speed = "circle" === e && 2 === o ? .21 : Object(f.f)(0, .22), r.index = o, r.total = a, s.push(r), r.small) {
                                    var c = r.small;
                                    c.position.length && (c.position = Object(p.e)(c.position)), c.color = r.color, c.angle = Object(f.f)(-Math.PI, Math.PI), c.speed = r.speed, c.index = o, c.isSmall = !0, c.total = a, s.push(c)
                                }
                            }
                            return s
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.h.width, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.h.height, i = this.xOffset, n = 0, s = this._entities.length; n < s; n++) this._entities[n].xOffset = i, this._entities[n].setSize(e, t)
                        }
                    }, {
                        key: "onVisible",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "onVisible", this).call(this), this.visible = !0
                        }
                    }, {
                        key: "onAnimateIn",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "onAnimateIn", this).call(this), this.setSize(), this.isVisible = !0, this._shapes.forEach((function(e) {
                                e.animateIn && e.animateIn()
                            }))
                        }
                    }, {
                        key: "onAnimateOut",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "onAnimateOut", this).call(this), this.isVisible = !1, this._shapes.forEach((function(e) {
                                e.animateOut && e.animateOut()
                            }))
                        }
                    }, {
                        key: "update",
                        value: function(e, t, i) {
                            for (var n = 0, s = this._entities.length; n < s; n++) this._entities[n].progress = this._parent.progress, this._entities[n].update(e, t, i)
                        }
                    }]), t
                }(u.a), Object(l.a)(n.prototype, "onVisible", [e], Object.getOwnPropertyDescriptor(n.prototype, "onVisible"), n.prototype), n);
            t.a = x
        }).call(this, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(8),
            c = i(5),
            h = i(50),
            l = i(26),
            u = i(0),
            d = function(e) {
                function t(e) {
                    var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(n.a)(this, t), (i = Object(o.a)(this, Object(a.a)(t).call(this, e, s))).options = s, i.screenOffset = s.screenOffset || 0, i._data = s.data, i._createEntities(), i._bind(), i
                }
                return Object(c.a)(t, e), Object(s.a)(t, [{
                    key: "_bind",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_bind", this).call(this)
                    }
                }, {
                    key: "_unbind",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_unbind", this).call(this)
                    }
                }, {
                    key: "_createEntities",
                    value: function() {
                        this._bg = new l.a(this.scene, {
                            color: "#ffffff"
                        }), this._addEntity(this._bg), this._bg.mesh.material.transparent = !0
                    }
                }, {
                    key: "setSize",
                    value: function(e, t) {
                        for (var i = this.screenOffset * e, n = 0, s = this._entities.length; n < s; n++) this._entities[n].xOffset = i, this._entities[n].setSize(e, t)
                    }
                }, {
                    key: "_animateIn",
                    value: function() {}
                }, {
                    key: "_onUpdate",
                    value: function(e, t) {
                        for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t)
                    }
                }, {
                    key: "screenWidth",
                    get: function() {
                        return 470 / u.h.width
                    }
                }]), t
            }(h.a);
        t.a = d
    }, function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(8),
            c = i(5),
            h = i(50),
            l = i(26),
            u = i(267),
            d = i(269),
            p = i(272),
            f = i(274),
            v = i(0),
            m = i(6),
            _ = function(e) {
                function t(e) {
                    var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(n.a)(this, t), (i = Object(o.a)(this, Object(a.a)(t).call(this, e, s))).options = s, i._id = s.id, i.screenOffset = s.screenOffset || 0, i._data = s.data, i._createEntities(), i._bind(), i
                }
                return Object(c.a)(t, e), Object(s.a)(t, [{
                    key: "_bind",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_bind", this).call(this)
                    }
                }, {
                    key: "_unbind",
                    value: function() {
                        Object(r.a)(Object(a.a)(t.prototype), "_unbind", this).call(this)
                    }
                }, {
                    key: "_createEntities",
                    value: function() {
                        this._farBg = new l.a(this.scene, {
                            color: "#EFEFE6"
                        }), this._addEntity(this._farBg), this._bg = new l.a(this.scene, {
                            color: "#131313"
                        }), this._bg.mesh.material.transparent = !0, this._bg.mesh.renderOrder = 2, this._addEntity(this._bg), this._title = new d.a(this.scene, {
                            parent: this,
                            composite: this.composite,
                            text: this.options.text || "It's almost the end...",
                            x: 0,
                            y: 0,
                            size: .1 * v.h.width,
                            color: "#F9F9F9"
                        }), this._title.mesh.renderOrder = 3, this._addEntity(this._title), this._circleMask = new u.a(this.scene, {
                            color: "#EFEFE6"
                        }), this._addEntity(this._circleMask), this._walls = new f.a(this.scene, {
                            composite: this.composite
                        }), this._addEntity(this._walls);
                        for (var e = 0; e < 15; e++) {
                            var t = new p.a(this.scene, {
                                parent: this,
                                composite: this.composite,
                                id: this._id,
                                index: e
                            });
                            t.mesh.renderOrder = 4, this._addEntity(t)
                        }
                    }
                }, {
                    key: "setSize",
                    value: function() {
                        var e = this,
                            t = function() {
                                var t = v.h.width,
                                    i = v.h.height,
                                    n = e.screenOffset * t;
                                e._walls.left = n, e._walls.right = n + e.screenWidth * t, v.h.width < v.h.height && v.h.width < 1100 ? e._title.size = .055 * t * .65 : e._title.size = .055 * t * .4, e._title.getSize(), e._title.offset.x = n + t * e.screenWidth / 2 - .5 * e._title._textData.width, e._title.offset.y = .5 * i - .5 * e._title._textData.height;
                                for (var s = 0, o = e._entities.length; s < o; s++) e._entities[s].xOffset = n, e._entities[s].setSize(t, i)
                            };
                        t(), clearTimeout(this._rTo), this._rTo = setTimeout((function() {
                            t()
                        }), 500)
                    }
                }, {
                    key: "_onUpdate",
                    value: function(e, t) {
                        this._bg.position.x = Object(m.d)(this.progress, -1, .5, this._bg.basePos.x + .06 * v.h.width, this._bg.basePos.x - .06 * v.h.width, !0);
                        for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t, this.progress)
                    }
                }, {
                    key: "screenWidth",
                    get: function() {
                        return .5
                    }
                }]), t
            }(h.a);
        t.a = _
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(8),
                c = i(5),
                h = i(10),
                l = i(0),
                u = i(13),
                d = i(6),
                p = i(16),
                f = i(268),
                v = 0,
                m = new e.Vector2,
                _ = new e.Vector2,
                y = function(t) {
                    function i(t) {
                        var s, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(n.a)(this, i), (s = Object(o.a)(this, Object(a.a)(i).call(this, t, r))).xOffset = 0, s.yOffset = 0, s.basePos = s.position.clone(), s.options = r, s._createEntities(), s._bind(), s.index = v, s._mouseTilt = new e.Vector2, v++, s
                    }
                    return Object(c.a)(i, t), Object(s.a)(i, [{
                        key: "_bind",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "_bind", this).call(this)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            Object(r.a)(Object(a.a)(i.prototype), "_unbind", this).call(this)
                        }
                    }, {
                        key: "_createEntities",
                        value: function() {
                            this.geometry = this._world.GEOMS.plane, this._scale = new e.Vector2(1, 1), this.material = this._createMaterial({
                                extensions: {
                                    derivatives: !0
                                },
                                transparent: !0,
                                depthTest: !1,
                                vertexShader: p.a,
                                fragmentShader: f.a,
                                uniforms: {
                                    uColor: {
                                        value: new e.Color(this.options.color)
                                    },
                                    uScale: {
                                        value: this._scale
                                    }
                                }
                            }), this.mesh = new e.Mesh(this.geometry, this.material), this.mesh.position.x = .5, this.mesh.position.y = -.5, this.add(this.mesh), this.mesh.renderOrder = 5
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            var i = this.xOffset,
                                n = this.yOffset,
                                s = this._parent && this._parent.screenWidth ? this._parent.screenWidth : 1;
                            this.options.width && (s = this.options.width);
                            var o = s * l.h.width;
                            this.scale.set(1.4 * o, 1.1 * t, 1), this.position.x = i - .2 * o, this.position.y = n + .05 * t, this.basePos.copy(this.position);
                            var a = Object(u.a)(!0, o, this.scale.y, .8 * this.scale.y, .8 * this.scale.y);
                            this._scale.set(a.width / this.scale.x, a.height / this.scale.y)
                        }
                    }, {
                        key: "update",
                        value: function(e, t, i) {
                            this.position.x = Object(d.d)(i, -1, .5, this.basePos.x + .06 * l.h.width, this.basePos.x - .06 * l.h.width, !0), this.position.y = this.basePos.y, m.set(this._world.mousePos.x, this._world.mousePos.y), _.set(this.position.x + this.scale.x / 2, this.position.y - this.scale.y / 2);
                            var n = m.distanceTo(_),
                                s = Object(d.d)(n, .1 * l.h.width, .5 * l.h.width, 1, 0, !0),
                                o = (m.x - _.x) / this.scale.x * 50 * s,
                                a = (m.y - _.y) / this.scale.x * 50 * s;
                            this._mouseTilt.x += .2 * (o - this._mouseTilt.x), this._mouseTilt.y += .2 * (a - this._mouseTilt.y), this.position.x += this._mouseTilt.x, this.position.y += this._mouseTilt.y
                        }
                    }]), i
                }(h.a);
            t.a = y
        }).call(this, i(11))
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform vec2 uScale;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import aastep\n@import circle\n@import scaleUV\n\nvoid main() {\n  float circleMask = circle(scaleUV(vUv, uScale), .45);\n  gl_FragColor = vec4(uColor, 1.);\n  gl_FragColor.a *= uAlpha * circleMask;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(55);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(10),
                l = i(0),
                u = i(6),
                d = i(13),
                p = i(29),
                f = i(270),
                v = i(271),
                m = i(129),
                _ = (new e.Vector3, n),
                y = _.Bodies,
                b = _.Body,
                g = _.Constraint,
                w = (_.Sleeping, function(t) {
                    function i(t) {
                        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(s.a)(this, i), (n = Object(a.a)(this, Object(r.a)(i).call(this, t, o))).options = o, n._text = o.text || "BROCOLIS", n.size = o.size || 1, n._fontMap = n._textures.get("msdf-map"), n._isHover = !1, n._composite = o.composite, n.offset = new e.Vector2(n.options.x || 0, n.options.y || 0), n._textData = new m.a({
                            font: p.a.get("msdf-data"),
                            text: n._text,
                            align: "left",
                            size: n.size,
                            letterSpacing: .036,
                            getPositions: !0,
                            getSizes: !0,
                            getOffsets: !0
                        }), n._initMesh(), n._initPhysics(), n._bind(), n._createGUI(), n
                    }
                    return Object(c.a)(i, t), Object(o.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            var t = new e.BufferGeometry,
                                i = this._textData.buffers;
                            this.geometry = t, this._rotation = new Float32Array(4 * this._textData.positions.length), t.setAttribute("offset", new e.BufferAttribute(i.offset, 3)), t.setAttribute("position", new e.BufferAttribute(i.position, 3)), t.setAttribute("uv", new e.BufferAttribute(i.uv, 2)), t.setAttribute("size", new e.BufferAttribute(i.size, 2)), t.setAttribute("rotation", new e.BufferAttribute(this._rotation, 1)), t.setAttribute("id", new e.BufferAttribute(i.id, 1)), t.setIndex(new e.BufferAttribute(this._textData.buffers.index, 1)), this._offsetAttr = t.attributes.offset, this._rotAttr = t.attributes.rotation, this._baseOffset = i.offset.slice(0), this._nb = i.offset.length, this._bodyScale = new e.Vector2(.8, .8);
                            var n = this._createMaterial({
                                vertexShader: f.a,
                                fragmentShader: v.a,
                                transparent: !0,
                                uniforms: {
                                    uColor: {
                                        value: new e.Color(this.options.color || "#ffffff")
                                    },
                                    uBodyScale: {
                                        value: this._bodyScale
                                    },
                                    tMap: {
                                        value: this._fontMap
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            });
                            this.material = n, this.mesh = new e.Mesh(t, n), this.mesh.frustumCulled = !1, this.add(this.mesh)
                        }
                    }, {
                        key: "_initPhysics",
                        value: function() {
                            for (var e = this._textData, t = (e.width, e.height, e.positions), i = e.sizes, n = e.offsets, s = e.glyphs, o = 0, a = t.length; o < a; o++) {
                                var r = s[o],
                                    c = t[o],
                                    h = n[o],
                                    l = i[o],
                                    u = y.rectangle(0, 0, 1, 1, {
                                        isStatic: Object(d.b)("static")
                                    });
                                u.collisionFilter.category = this._world.pGroups[0], u.collisionFilter.mask = this._world.pGroups[1], u.size = l, u.tData = {
                                    size: l,
                                    position: c,
                                    offset: h,
                                    glyph: r
                                }, this._addBody(u, this._composite);
                                var p = this.offset.x + c.x + l.x / 2,
                                    f = this.offset.y - h.y - c.y + l.y / 2;
                                u.basePos = {
                                    x: p,
                                    y: f
                                }, b.setPosition(u, {
                                    x: p,
                                    y: f
                                }), this._scaleBody(u, u.size.x * this._bodyScale.x, u.size.y * this._bodyScale.y)
                            }
                        }
                    }, {
                        key: "createConstraints",
                        value: function() {
                            this._removeConstraints(this._composite), this.constraints = [];
                            for (var e = this.bodies[0], t = 0, i = this.bodies.length; t < i; t++) {
                                var n = this.bodies[t - 1],
                                    s = this.bodies[t],
                                    o = void 0;
                                n && (s.prevBody = n, o = g.create({
                                    bodyA: n,
                                    bodyB: s,
                                    pointA: {
                                        x: 0,
                                        y: e.position.y - n.position.y
                                    },
                                    pointB: {
                                        x: 0,
                                        y: e.position.y - s.position.y
                                    },
                                    length: Object(u.b)(n.position.x, n.position.y, s.position.x, s.position.y),
                                    stiffness: .2
                                }), this._addConstraint(o, this._composite), s.prevConstraint = o);
                                var a = g.create({
                                    pointA: {
                                        x: s.position.x,
                                        y: s.position.y
                                    },
                                    bodyB: s,
                                    length: 1,
                                    stiffness: .04
                                });
                                this._addConstraint(a, this._composite), s.constraintStatic = a;
                                var r = g.create({
                                    bodyA: s,
                                    bodyB: s,
                                    angleAStiffness: .045,
                                    angleAMin: -0,
                                    angleAMax: 0
                                });
                                this._addConstraint(r, this._composite), s.constraintR = r
                            }
                        }
                    }, {
                        key: "_createProgramGUI",
                        value: function() {}
                    }, {
                        key: "_createGUI",
                        value: function() {}
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "fadeIn",
                        value: function() {}
                    }, {
                        key: "getSize",
                        value: function() {
                            var e = this.size;
                            this._textData.resize({
                                size: e
                            })
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            var n = this.size;
                            if (n !== this._textData.lastSize) {
                                this._textData.resize({
                                    size: n
                                }), this._textData.lastSize = n, i && i();
                                for (var s = 0, o = this.bodies.length; s < o; s++) {
                                    var a = this.bodies[s];
                                    b.setAngle(a, 0), a.angularVelocity = 0, a.velocity.x = a.velocity.y = 0;
                                    var r = a.tData,
                                        c = r.size,
                                        h = r.position,
                                        l = r.offset;
                                    b.setPosition(a, {
                                        x: this.offset.x + h.x + c.x / 2,
                                        y: this.offset.y - l.y - h.y + c.y / 2
                                    }), this._scaleBody(a, c.x * this._bodyScale.x, c.y * this._bodyScale.y)
                                }
                                this.geometry.attributes.offset.needsUpdate = !0, this.geometry.attributes.position.needsUpdate = !0, this.geometry.attributes.uv.needsUpdate = !0, this.geometry.attributes.size.needsUpdate = !0, this.geometry.attributes.rotation.needsUpdate = !0, this.createConstraints()
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.updatePosition(e, t)
                        }
                    }, {
                        key: "updatePosition",
                        value: function(e, t) {
                            var i = l.i.scroll.delta;
                            if (Math.abs(i) > 10)
                                for (var n = 0, s = this.bodies.length; n < s; n++) this.bodies[n], Object(u.a)(i, -20, 20);
                            for (var o = this._offsetAttr.array, a = this._rotAttr.array, r = this._baseOffset, c = 0, h = 0, d = this.bodies.length; h < d; h++)
                                for (var p = this.bodies[h], f = p.position.x, v = p.position.y, m = 0; m < 4; m++) a[c] = p.angle, o[3 * c + 0] = f - p.size.x / 2, o[3 * c + 1] = -v + p.size.y / 2, o[3 * c + 2] = r[3 * c + 2], c++;
                            this._offsetAttr.needsUpdate = !0, this._rotAttr.needsUpdate = !0
                        }
                    }]), i
                }(h.a));
            t.a = w
        }).call(this, i(11), i(23))
    }, function(e, t, i) {
        "use strict";
        t.a = "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\nattribute float id;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 offset;\nattribute vec2 size;\nattribute float rotation;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uBodyScale;\nvarying vec2 vUv;\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n\tmat4 m = rotationMatrix(axis, angle);\n\treturn (m * vec4(v, 1.0)).xyz;\n}\n\nvoid main() {\n    vUv = uv;\n    // position -> 4 corner of a plane without letter spacing\n    // offset -> offset pos for a letter, letter-spacing and line-height applied\n    // rotate adding pivot offset and remove it later \n    vec3 pivot = vec3(-size.x*.5, size.y*.5, 0.);\n    vec3 pos = offset + rotate(position + pivot, vec3(0., 0., 1.), rotation) - pivot;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}"
    }, function(e, t, i) {
        "use strict";
        t.a = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform float uAlpha;\nuniform vec3 uColor;\nvarying vec2 vUv;\n\nfloat median(float r, float g, float b) {\nreturn max(min(r, g), min(max(r, g), b));\n}\n\nvoid main() {\n    vec3 tex = texture2D(tMap, vUv).rgb;\n    // float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;\n    // float d = fwidth(signedDist);\n    // float alpha = smoothstep(-d, d, signedDist);\n    // if (alpha < 0.01) discard;\n    // gl_FragColor.rgb = vec3(1.0);\n    // gl_FragColor.a = alpha;\n\n    float sigDist = median(tex.r, tex.g, tex.b) - 0.5;\n    float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);\n    gl_FragColor = vec4(uColor, alpha * uAlpha);\n    if (gl_FragColor.a < .01) discard;\n    // gl_FragColor = vec4(1., 1., 1., 1.);\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s, o) {
            var a, r = i(2),
                c = i(3),
                h = i(4),
                l = i(1),
                u = i(5),
                d = i(7),
                p = i(12),
                f = i(10),
                v = i(0),
                m = i(6),
                _ = i(16),
                y = i(273),
                b = e,
                g = b.Bodies,
                w = b.Body,
                x = (a = function(e) {
                    function t(e, i) {
                        var n;
                        return Object(r.a)(this, t), (n = Object(h.a)(this, Object(l.a)(t).call(this, e))).parent = i.parent, n._id = i.id, n._index = i.index, n._composite = i.composite, n._size = 20, n.life = Object(m.f)(3e3, 6e3), n._initMesh(), n._initBody(), n._bind(), n.reset(), n
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "_initBody",
                        value: function() {
                            var e = this.parent.screenOffset * v.h.width + .25 * v.h.width;
                            this.body = g.circle(Object(m.f)(e - .2 * v.h.width, e + .2 * v.h.width), Object(m.f)(-100, -20), 1, {
                                restitution: .7
                            }), this.body.collisionFilter.category = this._world.pGroups[0] | this._world.pGroups[1] | this._world.pGroups[2], this._addBody(this.body, this._composite)
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {
                            var e = this._index % 5;
                            this._material = this._createMaterial({
                                transparent: !0,
                                vertexShader: _.a,
                                fragmentShader: y.a,
                                uniforms: {
                                    tMap: {
                                        value: this._textures.get(this._id + "-" + e)
                                    }
                                }
                            }), this.mesh = new n.Mesh(p.a.GEOMS.plane, this._material), this.mesh.scale.set(2 * this._size, 2 * this._size, 1), this.add(this.mesh)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            v.b.on("home:looped", this._onLoop)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            v.b.off("home:looped", this._onLoop)
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            this._size = Object(m.d)(e, 300, 1600, 8, 16, !0), this._scaleBody(this.body, this._size, this._size), this.middle = this.parent.screenOffset * v.h.width + .25 * v.h.width
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var e = this;
                            this._isResetting || (this._isResetting = !0, s.to(this.mesh.scale, {
                                x: .01,
                                y: .01,
                                ease: "expo.out",
                                duration: .4,
                                onComplete: function() {
                                    e._isResetting = !1, e.life = Object(m.f)(3e3, 6e3), e.mesh.scale.set(2 * e._size, 2 * e._size, 1), w.setVelocity(e.body, {
                                        x: 0,
                                        y: 0
                                    }), w.setAngle(e.body, Math.random() * Math.PI * 2), w.setPosition(e.body, {
                                        x: Object(m.f)(e.middle - .17 * v.h.width, e.middle + .17 * v.h.width),
                                        y: Object(m.f)(-100, -20)
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "_onLoop",
                        value: function(e) {
                            e.dir
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this._sync(this.mesh, this.body), this.life -= e;
                            var i = v.i.scroll.delta;
                            if (Math.abs(i) > 1) {
                                var n = .002 * Object(m.a)(i, -20, 20) * .001,
                                    s = .001 * Object(m.a)(i, -20, 20) * .001;
                                w.applyForce(this.body, this.body.position, {
                                    x: n,
                                    y: -Math.abs(s)
                                }), this.body.velocity.x > 30 && w.setVelocity(this.body, {
                                    x: 30,
                                    y: this.body.velocity.y
                                }), this.body.velocity.x < -30 && w.setVelocity(this.body, {
                                    x: -30,
                                    y: this.body.velocity.y
                                })
                            }
                            this._isResetting || (this.life < 0 ? this.reset() : Math.abs(this.body.position.x - this.middle) > .5 * v.h.width && this.reset())
                        }
                    }]), t
                }(f.a), Object(d.a)(a.prototype, "_onLoop", [o], Object.getOwnPropertyDescriptor(a.prototype, "_onLoop"), a.prototype), a);
            t.a = x
        }).call(this, i(23), i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform float uAlpha;\nvarying vec2 vUv;\n\nvoid main() {\n  gl_FragColor = texture2D(tMap, vUv);\n  gl_FragColor.a *= uAlpha;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(5),
                c = i(10),
                h = i(0),
                l = e,
                u = l.Bodies,
                d = l.Body,
                p = function(e) {
                    function t(e, i) {
                        var s, r = i.composite;
                        return Object(n.a)(this, t), (s = Object(o.a)(this, Object(a.a)(t).call(this, e)))._composite = r, s._initMesh(), s._initBodies(), s
                    }
                    return Object(r.a)(t, e), Object(s.a)(t, [{
                        key: "_initBodies",
                        value: function() {
                            this.lBody = u.rectangle(0, 0, 1, 1, {
                                isStatic: !0
                            }), this.lBody.scale = {
                                x: 1,
                                y: 1
                            }, this.rBody = u.rectangle(h.h.width, 0, 1, 1, {
                                isStatic: !0
                            }), this.rBody.scale = {
                                x: 1,
                                y: 1
                            }, this.lBody.collisionFilter.category = this._world.pGroups[0], this.rBody.collisionFilter.category = this._world.pGroups[0], this._addBody(this.lBody, this._composite), this._addBody(this.rBody, this._composite)
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            d.scale(this.lBody, 1 / this.lBody.scale.x, 1 / this.lBody.scale.y), this.lBody.scale.x = 30, this.lBody.scale.y = h.h.height, d.scale(this.lBody, this.lBody.scale.x, this.lBody.scale.y), d.scale(this.rBody, 1 / this.rBody.scale.x, 1 / this.rBody.scale.y), this.rBody.scale.x = 30, this.rBody.scale.y = h.h.height, d.scale(this.rBody, this.rBody.scale.x, this.rBody.scale.y), d.setPosition(this.lBody, {
                                x: this.left || 0,
                                y: this.lBody.scale.y / 2
                            }), d.setPosition(this.rBody, {
                                x: this.right || 0,
                                y: this.rBody.scale.y / 2
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {}
                    }]), t
                }(c.a);
            t.a = p
        }).call(this, i(23))
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            i(110);
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(8),
                u = i(5),
                d = i(7),
                p = i(78),
                f = i(79),
                v = i(0),
                m = i(6),
                _ = i(276),
                y = i(124),
                b = i(51),
                g = i(26),
                w = i(277),
                x = i(87),
                O = i(280),
                k = i(281),
                j = (o = function(t) {
                    function i() {
                        var t;
                        return Object(a.a)(this, i), (t = Object(c.a)(this, Object(h.a)(i).call(this, "about", {
                            postProcessing: !1,
                            physics: !0,
                            noBatcher: !0
                        })))._renderer.setClearColor(16777215, 1), t.composite = e.Composite.create(), e.World.add(t.engine.world, t.composite), t.pWorld.gravity.y = 0, t._panelRightX = 0, t
                    }
                    return Object(u.a)(i, t), Object(r.a)(i, [{
                        key: "destroy",
                        value: function() {
                            return Object(l.a)(Object(h.a)(i.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.h.width,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.h.height,
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            Object(l.a)(Object(h.a)(i.prototype), "setSize", this).call(this, e, t), clearTimeout(this._rTO), v.a.isMobile ? this._mobileSetSize(e = v.h.width, t = v.h.height, n) : this._desktopSetSize(e = v.h.width, t = v.h.height, n)
                        }
                    }, {
                        key: "_mobileSetSize",
                        value: function(e, t, i) {
                            this._mainBg.height = v.h.height - 100;
                            for (var n = 0, s = this._entities.length; n < s; n++) this._entities[n].setSize(e, t, i)
                        }
                    }, {
                        key: "_desktopSetSize",
                        value: function(e, t, i) {
                            var n = this,
                                s = document.querySelector(".about-credits");
                            s || (this._rTO = setTimeout((function() {
                                n.setSize(v.h.width, v.h.height, !0)
                            }), 100));
                            var o = {
                                left: 1e4,
                                width: 600
                            };
                            s && (o = s.getBoundingClientRect()), this._endBg.xOffset = o.left + v.i.aboutX, this._endBg.options.width = o.width;
                            for (var a = 0, r = this._rightCircles.length; a < r; a++) {
                                this._rightCircles[a].xOffset = o.left + v.i.aboutX
                            }
                            this._pRenderCanvas && (this._pRenderCanvas.width = e, this._pRenderCanvas.height = t), this._ceiling && (this._ceiling.fixedSize = Math.max(1.5 * v.i.aboutLimit.max, 3 * v.h.width)), this._ground && (this._ground.fixedSize = Math.max(1.5 * v.i.aboutLimit.max, 3 * v.h.width)), this._introBg.xOffset = .9 * e;
                            for (var c = 0, h = this._entities.length; c < h; c++) this._entities[c].setSize(e, t, i);
                            var l = this._splash.mesh.position.y + this._splash.mesh.baseScale;
                            this._circles[1]._pos.y = l / v.h.height, this._circles[1].setSize(e, t, i)
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            Object(l.a)(Object(h.a)(i.prototype), "_init", this).call(this)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            v.d.addUp(this._onKeyUp)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {
                            v.d.removeUp(this._onKeyUp)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            Object(l.a)(Object(h.a)(i.prototype), "_createGUI", this).call(this), this.pane && (this.physics = this.pane.addFolder({
                                title: "🍎 About Physics"
                            }), this.physics.expanded = !1, this.physics.addInput(this.engine, "constraintIterations", {
                                min: 1,
                                max: 10,
                                step: 1
                            }), this.physics.addInput(this.engine, "positionIterations", {
                                min: 1,
                                max: 10,
                                step: 1
                            }), this.physics.addInput(this.engine, "velocityIterations", {
                                min: 1,
                                max: 10,
                                step: 1
                            }), this.physics.addInput(this.pWorld.gravity, "y", {
                                min: -10,
                                max: 10,
                                step: .01
                            }))
                        }
                    }, {
                        key: "_createCameras",
                        value: function() {
                            this._camera = new f.a({
                                near: -110,
                                far: 110,
                                isDefault: !0
                            }), this._camera.position.set(0, 0, 100), this._camera.lookAt(0, 0, 0), this._camera.positionTarget = this._camera.position.clone(), this.addCamera(this._camera), v.i.aboutCamera = this._camera
                        }
                    }, {
                        key: "_createPostProcessing",
                        value: function() {
                            Object(l.a)(Object(h.a)(i.prototype), "_createPostProcessing", this).call(this)
                        }
                    }, {
                        key: "_createEntities",
                        value: function() {
                            var e;
                            Object(l.a)(Object(h.a)(i.prototype), "_createEntities", this).call(this), this.mouse = v.a.isMobile ? new y.a(this) : new _.a(this), this.addEntity(this.mouse), v.a.isDesktop && (this._ceiling = new x.a(this, {
                                size: 3,
                                ceiling: !0
                            }), this.addEntity(this._ceiling), this._ground = new x.a(this, {
                                size: 3
                            }), this.addEntity(this._ground), this._walls = new O.a(this), this.addEntity(this._walls)), this._mainBg = new g.a(this, {
                                color: "#8B3BDB",
                                width: 1,
                                isFirst: !0
                            }), this.addEntity(this._mainBg), v.a.isDesktop && (this._introBg = new g.a(this, {
                                color: "#ffffff",
                                width: 1
                            }), this.addEntity(this._introBg)), this._splash = new w.a(this), this._splash.splash = !0, this.addEntity(this._splash), v.a.isDesktop && (this._endBg = new g.a(this, {
                                color: "#8B3BDB"
                            }), this.addEntity(this._endBg)), this._shapes = new k.a(this, {
                                composite: this.composite
                            }), this.addEntity(this._shapes), e = v.a.isDesktop ? [{
                                position: {
                                    x: .7,
                                    y: .95
                                },
                                color: "#131313",
                                size: .15,
                                coef: .5,
                                speed: .3,
                                angle: 0
                            }, {
                                position: {
                                    x: .35,
                                    y: .8
                                },
                                color: "#131313",
                                size: .02,
                                coef: .8,
                                speed: .3,
                                align: "top",
                                angle: 0
                            }, {
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                right: !0,
                                color: "#131313",
                                fixedSize: 230,
                                fixedPos: {
                                    x: 350,
                                    y: 50
                                },
                                coef: .9,
                                speed: .04,
                                angle: 0
                            }, {
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                right: !0,
                                color: "#131313",
                                fixedSize: 540,
                                fixedPos: {
                                    x: 600,
                                    y: 500
                                },
                                coef: 1.5,
                                speed: 0,
                                angle: 0
                            }, {
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                right: !0,
                                color: "#131313",
                                fixedSize: 80,
                                fixedPos: {
                                    x: 280,
                                    y: 780
                                },
                                coef: .6,
                                speed: .1,
                                angle: 0
                            }] : [{
                                position: {
                                    x: .15,
                                    y: .05
                                },
                                color: "#131313",
                                size: .5,
                                coef: 1,
                                speed: .3,
                                angle: 0
                            }, {
                                position: {
                                    x: .2,
                                    y: .7
                                },
                                color: "#131313",
                                size: .1,
                                coef: .8,
                                speed: .3,
                                align: "top",
                                angle: 0
                            }], this._circles = [], this._rightCircles = [];
                            for (var t = 0, n = e.length; t < n; t++) {
                                var s = e[t],
                                    o = new b.a(this, {
                                        composite: this.composite,
                                        data: s,
                                        index: t,
                                        total: n,
                                        mouse: this.mouse
                                    });
                                if (this.addEntity(o), s.right ? this._rightCircles.push(o) : this._circles.push(o), s.small) {
                                    var a = new b.a(this, {
                                        composite: this.composite,
                                        data: e[t].small,
                                        parentShape: o,
                                        index: t,
                                        total: n,
                                        mouse: this.mouse
                                    });
                                    this.addEntity(a), this._circles.push(a)
                                }
                            }
                        }
                    }, {
                        key: "_afterCreate",
                        value: function() {
                            Object(l.a)(Object(h.a)(i.prototype), "_afterCreate", this).call(this)
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function(e) {
                            var t = this;
                            Object(l.a)(Object(h.a)(i.prototype), "onSwapLeave", this).call(this, e), clearTimeout(this._rto), clearTimeout(this._resetCamTo), this._resetCamTo = setTimeout((function() {
                                t._camera.position.x = t._camera.positionTarget.x = 0, t._camera.position.y = t._camera.positionTarget.y = 0
                            }), 1200), clearTimeout(this._to)
                        }
                    }, {
                        key: "onSwap",
                        value: function(e) {
                            var t = this;
                            Object(l.a)(Object(h.a)(i.prototype), "onSwap", this).call(this, e), clearTimeout(this._resetCamTo), this._introBg, v.b.emit("about:swapped"), clearTimeout(this._rto);
                            for (var s = function(e, i) {
                                    var s = t._circles[e];
                                    n.killTweensOf(s.mesh.scale), s.isAnimating = !0, clearTimeout(s.timeout), s.timeout = setTimeout((function() {
                                        s.isAnimating = !1, s.setSize()
                                    }), 1e3), n.set(s.mesh.scale, {
                                        x: 1e-4,
                                        y: 1e-4
                                    }), n.to(s.mesh.scale, {
                                        x: s.mesh.baseScale.x,
                                        y: s.mesh.baseScale.y,
                                        duration: 1.4,
                                        ease: "elastic.out(.4, .5)",
                                        delay: .4,
                                        stagger: .1
                                    })
                                }, o = 0, a = this._circles.length; o < a; o++) s(o);
                            this._groud && (this._ground.setSize(), this._ceiling.setSize(), this._walls.setSize(), this._rto = setTimeout((function(e) {
                                t._ground.setSize(), t._ceiling.setSize(), t._walls.setSize()
                            }), 500))
                        }
                    }, {
                        key: "_onKeyUp",
                        value: function(e) {
                            80 === e.keyCode && this._togglePhysicRender()
                        }
                    }, {
                        key: "_onUpdate",
                        value: function(e, t) {
                            v.i.scroll.update(e, t), v.a.isMobile ? (this._camera.position.x = 0, v.i.aboutScrollbar && (v.i.aboutScrollbar.render(), this._camera.position.y = -v.i.aboutScrollbar.scrollTop)) : (this._camera.positionTarget.x += v.i.scroll.delta, this._camera.positionTarget.x = Object(m.a)(this._camera.positionTarget.x, v.i.aboutLimit.min, v.i.aboutLimit.max), this._camera.position.lerp(this._camera.positionTarget, .1)), this._updatePhysics();
                            for (var i = 0, n = this._entities.length; i < n; i++) {
                                var s = Math.min(this._camera.position.x / v.h.width, 1);
                                this._entities[i].isRight && this._endBg && (s = Object(m.d)(this._camera.position.x, this._endBg.xOffset - v.h.width, this._endBg.xOffset - v.h.width + 500, 0, 1, !0)), this._entities[i].update(e, t, s)
                            }
                            v.b.emit("about:tick", this)
                        }
                    }]), i
                }(p.a), Object(d.a)(o.prototype, "_onKeyUp", [s], Object.getOwnPropertyDescriptor(o.prototype, "_onKeyUp"), o.prototype), o);
            t.a = j
        }).call(this, i(23), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(18);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(12),
                l = i(10),
                u = i(0),
                d = i(16),
                p = i(125),
                f = e,
                v = f.Bodies,
                m = f.Body,
                _ = (f.Constraint, .1),
                y = function(e) {
                    function t(e) {
                        var i;
                        return Object(s.a)(this, t), (i = Object(a.a)(this, Object(r.a)(t).call(this, e))).name = "about-mouse", i._radius = 30, i._initMesh(), i._initBody(), i._createGUI(), i
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "_initBody",
                        value: function() {
                            this.bodies = [], this.body = v.circle(0, 0, this._radius), this.body.restitution = _, this.body.collisionFilter.category = this._world.pGroups[0] | this._world.pGroups[1] | this._world.pGroups[2], this.bodies.push(this.body), this._createConstraints()
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {
                            this._material = this._createMaterial({
                                transparent: !0,
                                vertexShader: d.a,
                                fragmentShader: p.a,
                                uniforms: {
                                    uColor: {
                                        value: new n.Color("#F7DE5D")
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            }), this.mesh = new n.Mesh(h.a.GEOMS.plane, this._material), this.mesh.scale.set(1.5 * this._radius, 1.5 * this._radius, 1), this.mesh.position.z += .1, this._material.visible = !1, this.add(this.mesh)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && (this.folder = this.scene.pane.addFolder({
                                title: "Mouse"
                            }), this.folder.expanded = !1)
                        }
                    }, {
                        key: "_createConstraints",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t) {}
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = u.f.client.x + this.scene._camera.position.x,
                                n = u.f.client.y - this.scene._camera.position.y;
                            m.setVelocity(this.body, {
                                x: i - this.body.position.x,
                                y: n - this.body.position.y
                            }), this._sync(this.mesh, this.body)
                        }
                    }]), t
                }(l.a);
            t.a = y
        }).call(this, i(23), i(11))
    }, function(e, t, i) {
        "use strict";
        (function(e, n) {
            i(55);
            var s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(5),
                h = i(10),
                l = i(0),
                u = i(6),
                d = i(278),
                p = i(279),
                f = new e.Vector2,
                v = new e.Vector2,
                m = {
                    dist: {
                        value: .18
                    },
                    distGlobal: {
                        value: .18
                    },
                    coef: {
                        value: -.26
                    },
                    springCoef: {
                        value: .65
                    },
                    springLerp: {
                        value: .2
                    }
                },
                _ = function(t) {
                    function i(t) {
                        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(s.a)(this, i), (n = Object(a.a)(this, Object(r.a)(i).call(this, t, o))).options = o, n.index = o.index, n._prevMouse = new e.Vector2, n._mouse = new e.Vector2, n._attrUpdate = !1, n._coef = 0, n._initMesh(), n._createGUI(), n
                    }
                    return Object(c.a)(i, t), Object(o.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            var t = new e.PlaneBufferGeometry(1, 1, 8, 8),
                                i = new Float32Array(2 * t.attributes.position.count);
                            t.setAttribute("offset", new e.BufferAttribute(i, 2)), this._nb = t.attributes.position.count, t.springs = [];
                            for (var n = 0, s = this._nb; n < s; n++) t.springs.push(new e.Vector2);
                            var o = this._createMaterial({
                                    depthTest: !1,
                                    vertexShader: d.a,
                                    fragmentShader: p.a,
                                    transparent: !0,
                                    extensions: {
                                        derivatives: !0
                                    },
                                    uniforms: {
                                        uMouse: {
                                            value: this._mouse
                                        },
                                        uDist: m.distGlobal,
                                        uCoef: m.coef,
                                        uColor: {
                                            value: new e.Color("#131313")
                                        },
                                        tMap: {
                                            value: this._textures.get("splash")
                                        }
                                    }
                                }),
                                a = new e.Mesh(t, o);
                            this.mesh = a, a.renderOrder = -1, this.add(a), a.vertices = [], a.geom2 = t.clone(), this.getScale()
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && !window.barAdded && (this.folder = this.scene.pane.addFolder({
                                title: "Splash"
                            }), this.folder.expanded = !1, this.folder.addInput(m.dist, "value", {
                                label: "dist",
                                min: 0,
                                max: 1,
                                step: .01
                            }).on("change", (function(e) {
                                m.distGlobal.value = m.dist.value * l.h.width
                            })), this.folder.addInput(m.coef, "value", {
                                label: "coef",
                                min: -1.2,
                                max: 1.2,
                                step: .01
                            }), this.folder.addInput(m.springCoef, "value", {
                                label: "spring coef",
                                min: 0,
                                max: 5,
                                step: .01
                            }), this.folder.addInput(m.springLerp, "value", {
                                label: "spring lerp",
                                min: 0,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "getScale",
                        value: function(e) {
                            var t = Math.min(1024, .46 * l.h.width);
                            l.a.isMobile && (t = 1.1 * l.h.width), e || (this.mesh.scale.x = this.mesh.scale.y = t), this.mesh.baseScale = t
                        }
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            l.a.isMobile && (m.dist.value = .4), l.a.isMobile && (m.coef.value = -.3), m.distGlobal.value = m.dist.value * l.h.width, this.getScale(i), l.a.isMobile ? (this.mesh.position.x = .77 * l.h.width, this.mesh.position.y = -.5 * (l.h.height - 100)) : (this.mesh.position.x = this.mesh.baseScale / 2 + .12 * l.h.width, this.mesh.position.y = -this.mesh.baseScale / 2 + .08 * l.h.width), this.mesh.geom2.attributes.position.copyArray(this.mesh.geometry.attributes.position.array), this.mesh.updateMatrix(), this.mesh.geom2.applyMatrix(this.mesh.matrix), this.mesh.geometry.attributes.offset.needsUpdate = !0
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function() {
                            n.killTweensOf(this, {
                                _coef: !0
                            }), n.to(this, {
                                _coef: 0,
                                duration: .5
                            })
                        }
                    }, {
                        key: "onSwap",
                        value: function() {
                            var e = l.e.hiddenPromiseDone ? .3 : .5;
                            n.killTweensOf(this, {
                                _coef: !0
                            }), n.killTweensOf(this.mesh.scale), n.set(this, {
                                _coef: 0
                            }), n.set(this.mesh.scale, {
                                x: 1e-4,
                                y: 1e-4
                            }), n.killTweensOf(this, {
                                _coef: !0
                            }), n.killTweensOf(this.mesh.scale), n.set(this, {
                                _coef: 0
                            }), n.set(this.mesh.scale, {
                                x: 1e-4,
                                y: 1e-4
                            }), n.to(this.mesh.scale, {
                                x: this.mesh.baseScale,
                                y: this.mesh.baseScale,
                                duration: 1,
                                ease: "elastic.out(.7, .4)",
                                delay: e
                            }), n.to(this, {
                                _coef: 1,
                                duration: 1,
                                delay: e,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this;
                            this._prevMouse.copy(this._mouse), this._mouse.x = this.scene.mouse.mesh.position.x, this._mouse.y = this.scene.mouse.mesh.position.y;
                            for (var n = m.springCoef.value, s = m.springLerp.value, o = !1, a = this.mesh, r = a.geom2.attributes, c = r.position.array, h = a.geometry.attributes.offset, l = 0, d = r.position.count; l < d; l++) {
                                var p = c[3 * l],
                                    _ = c[3 * l + 1],
                                    y = a.geometry.springs[l];
                                f.set(p, _), v.set(this._mouse.x, this._mouse.y);
                                var b = f.distanceTo(v),
                                    g = f.set(p - this._mouse.x, _ - this._mouse.y),
                                    w = Object(u.d)(b, 0, m.distGlobal.value, 1, 0, !0),
                                    x = h.array[2 * l + 0],
                                    O = h.array[2 * l + 1],
                                    k = 0,
                                    j = 0;
                                b < m.distGlobal.value && (k = g.x * m.coef.value * w * this._coef, j = g.y * m.coef.value * w * this._coef, o = !0), y.x = Object(u.c)(y.x, (k - x) * n, s), y.y = Object(u.c)(y.y, (j - O) * n, s), h.array[2 * l + 0] += y.x, h.array[2 * l + 1] += y.y
                            }
                            o && (this._attrUpdate = !0, clearTimeout(this._attrTo), this._attrTo = setTimeout((function() {
                                i._attrUpdate = !1
                            }), 1e3)), h.needsUpdate = this._attrUpdate
                        }
                    }]), i
                }(h.a);
            t.a = _
        }).call(this, i(11), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec2 offset;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);\n\n  mvPos.x += offset.x;\n  mvPos.y += offset.y;\n\n  gl_Position = projectionMatrix * mvPos;\n}\n"
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\nvoid main() {\n  float mask = texture2D(tMap, vUv).g;\n  gl_FragColor.rgb = uColor;\n  gl_FragColor.a = uAlpha * mask;\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(18);
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(5),
                c = i(10),
                h = i(0),
                l = e,
                u = l.Bodies,
                d = l.Body,
                p = function(e) {
                    function t(e) {
                        var i;
                        return Object(n.a)(this, t), (i = Object(o.a)(this, Object(a.a)(t).call(this, e))).name = "walls", i._initMesh(), i._initBodies(), i
                    }
                    return Object(r.a)(t, e), Object(s.a)(t, [{
                        key: "_initBodies",
                        value: function() {
                            this.lBody = u.rectangle(0, 0, 1, 1, {
                                isStatic: !0
                            }), this.lBody.scale = {
                                x: 1,
                                y: 1
                            }, this.rBody = u.rectangle(h.h.width, 0, 1, 1, {
                                isStatic: !0
                            }), this.rBody.scale = {
                                x: 1,
                                y: 1
                            }, this.lBody.collisionFilter.category = this._world.pGroups[0], this.rBody.collisionFilter.category = this._world.pGroups[0], this.lBody.restitution = 1.2, this.rBody.restitution = 1.2, this._addBody(this.lBody), this._addBody(this.rBody)
                        }
                    }, {
                        key: "_initMesh",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            d.scale(this.lBody, 1 / this.lBody.scale.x, 1 / this.lBody.scale.y), this.lBody.scale.x = 100, this.lBody.scale.y = h.h.height, d.scale(this.lBody, this.lBody.scale.x, this.lBody.scale.y), d.scale(this.rBody, 1 / this.rBody.scale.x, 1 / this.rBody.scale.y), this.rBody.scale.x = 100, this.rBody.scale.y = h.h.height, d.scale(this.rBody, this.rBody.scale.x, this.rBody.scale.y), d.setPosition(this.lBody, {
                                x: .9 * h.h.width - 50,
                                y: this.lBody.scale.y / 2
                            }), d.setPosition(this.rBody, {
                                x: h.i.aboutLimit.max + h.h.width + 45 - 600,
                                y: this.rBody.scale.y / 2
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {}
                    }]), t
                }(c.a);
            t.a = p
        }).call(this, i(23))
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            i(39), i(31), i(25), i(19), i(32);
            var n = i(21),
                s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(8),
                h = i(5),
                l = i(10),
                u = i(0),
                d = (i(6), i(282)),
                p = i(284);

            function f(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(i), !0).forEach((function(t) {
                        Object(n.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var m = e,
                _ = (m.Bodies, m.Body, m.Constraint, function(e) {
                    function t(e, i, n) {
                        var o;
                        return Object(s.a)(this, t), (o = Object(a.a)(this, Object(r.a)(t).call(this, e))).options = i, o._config = [{
                            type: "infos",
                            scale: .4,
                            color: "#f4f4f4",
                            x: .8,
                            y: .6,
                            stiffness: 2,
                            angle: .3,
                            speed: 1,
                            mX: .3,
                            mY: 120,
                            mScale: 160
                        }, {
                            type: "contact",
                            scale: .5,
                            color: "#f4f4f4",
                            x: .8,
                            y: .2,
                            stiffness: 2,
                            angle: -.3,
                            speed: .7,
                            mX: .8,
                            mY: 100,
                            mScale: 140
                        }, {
                            type: "recognation",
                            scale: .6,
                            color: "#f4f4f4",
                            x: .5,
                            y: .7,
                            stiffness: 1.5,
                            angle: .7,
                            speed: 1.1,
                            mX: .3,
                            mY: 90,
                            mScale: 140
                        }], o._composite = i.composite, o._shapes = [], o._initMeshes(), o
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "_initMeshes",
                        value: function() {
                            for (var e = 0, t = this._config.length; e < t; e++) {
                                var i = this._config[e],
                                    n = new d.a(this.scene, v({}, i, {
                                        parent: this,
                                        composite: this._composite
                                    }));
                                this._addEntity(n), this._shapes.push(n)
                            }
                            if (u.a.isDesktop)
                                for (var s = 0; s < 7; s++) {
                                    var o = new p.a(this.scene, {
                                        parent: this,
                                        composite: this._composite
                                    });
                                    this._addEntity(o), this._shapes.push(o)
                                }
                        }
                    }, {
                        key: "_initBody",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function() {
                            for (var e = 0, t = this._shapes.length; e < t; e++) this._shapes[e].setSize()
                        }
                    }, {
                        key: "onSwap",
                        value: function() {
                            var e = this;
                            Object(c.a)(Object(r.a)(t.prototype), "onSwap", this).call(this), clearTimeout(this._to), this._to = setTimeout((function() {
                                e.setSize()
                            }), 1e3)
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "onSwapLeave", this).call(this), clearTimeout(this._to)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            for (var i = 0, n = this._shapes.length; i < n; i++) this._shapes[i].update(e, t)
                        }
                    }]), t
                }(l.a));
            t.a = _
        }).call(this, i(23))
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            var o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(8),
                l = i(5),
                u = i(10),
                d = i(0),
                p = i(6),
                f = i(16),
                v = i(283),
                m = e,
                _ = m.Bodies,
                y = m.Body,
                b = m.Constraint,
                g = (m.Svg, new n.Vector2(-.11, -.11)),
                w = new n.Vector2(.74, .74);
            window.offsetDebug = g, window.scaleDebug = w;
            var x = [{
                    x: 89.2,
                    y: 90
                }, {
                    x: 96.3,
                    y: 50.9
                }, {
                    x: 73.6,
                    y: 18.3
                }, {
                    x: 34.4999,
                    y: 11.2
                }, {
                    x: 1.9,
                    y: 33.9
                }, {
                    x: 13.9,
                    y: 41.6
                }, {
                    x: 37.6,
                    y: 25.2
                }, {
                    x: 66,
                    y: 30.3
                }, {
                    x: 82.4,
                    y: 54
                }, {
                    x: 77.3,
                    y: 82.4
                }],
                O = function(t) {
                    function i(e, t, n) {
                        var s;
                        return Object(o.a)(this, i), (s = Object(r.a)(this, Object(c.a)(i).call(this, e))).scene = e, s.options = t, s.offset = g, s._composite = t.composite, s._lastX = 0, s._lastY = 0, s._initMesh(), s._initBody(), s._createGUI(), s.setSize(), s
                    }
                    return Object(l.a)(i, t), Object(a.a)(i, [{
                        key: "_initMesh",
                        value: function() {
                            this.mesh = new n.Mesh(this._world.GEOMS.plane, this._createMaterial({
                                transparent: !0,
                                depthTest: !1,
                                vertexShader: f.a,
                                fragmentShader: v.a,
                                uniforms: {
                                    uOffset: {
                                        value: g
                                    },
                                    uScale: {
                                        value: w
                                    },
                                    uColor: {
                                        value: new n.Color("#ededed")
                                    },
                                    tMap: {
                                        value: this._textures.get("elipse")
                                    }
                                }
                            })), this.mesh.renderOrder = 100, this.add(this.mesh), this.mesh.baseScale = this.mesh.scale.clone(), this.mesh.basePos = this.mesh.position.clone()
                        }
                    }, {
                        key: "_initBody",
                        value: function() {
                            document.createElement("div").innerHTML = '<svg x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M89.2,90c7.4-11.6,10-25.6,7.1-39.1S85.2,25.7,73.6,18.3c-11.6-7.4-25.6-10-39.1-7.1C21.1,14.1,9.4,22.3,1.9,33.9l12,7.7\n       c5.4-8.4,13.9-14.3,23.7-16.4c9.8-2.1,20-0.3,28.4,5.1c8.4,5.4,14.3,13.9,16.4,23.7c2.1,9.8,0.3,20-5.1,28.4L89.2,90z"/>\n     </svg>';
                            var e = [];
                            e.push(x), this.vertices = e, this.body = _.fromVertices(0, 0, this.vertices), this.body.frictionAir = .03, this.body.restitution = .01;
                            for (var t = 0, i = this.body.parts.length; t < i; t++) this.body.parts[t].basePos = {
                                x: this.body.parts[t].position.x,
                                y: this.body.parts[t].position.y
                            };
                            this._addBody(this.body, this._composite), y.setAngle(this.body, Object(p.f)(-3, 3)), this.body.collisionFilter.category = this._world.pGroups[0] | this._world.pGroups[1] | this._world.pGroups[2] | this._world.pGroups[4]
                        }
                    }, {
                        key: "_resetBody",
                        value: function() {
                            this.body && this._removeBody(this.body, this._composite), this.body = _.fromVertices(0, 0, this.vertices), this.body.frictionAir = .03, this.body.restitution = .01;
                            for (var e = 0, t = this.body.parts.length; e < t; e++) this.body.parts[e].basePos = {
                                x: this.body.parts[e].position.x,
                                y: this.body.parts[e].position.y
                            };
                            this._addBody(this.body, this._composite), this.body.collisionFilter.category = this._world.pGroups[0] | this._world.pGroups[1] | this._world.pGroups[2] | this._world.pGroups[4], y.setAngle(this.body, this.options.angle)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && !window.aboutShapeAdded && (window.aboutShapeAdded = !0, this.folder = this.scene.pane.addFolder({
                                title: "AboutShape"
                            }), this.folder.expanded = !1, this.folder.addInput(w, "x", {
                                label: "sx",
                                min: -1,
                                max: 1,
                                step: .01
                            }), this.folder.addInput(w, "y", {
                                label: "sy",
                                min: -1,
                                max: 1,
                                step: .01
                            }), this.folder.addInput(g, "x", {
                                label: "ox",
                                min: -1,
                                max: 1,
                                step: .01
                            }), this.folder.addInput(g, "y", {
                                label: "oy",
                                min: -1,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = this,
                                t = this.options.type,
                                i = null;
                            "infos" === t ? i = document.querySelector(".about-infos") : "contact" === t ? i = document.querySelector(".about-contact") : "recognation" === t && (i = document.querySelector(".about-awards")), i && (clearTimeout(this._to), this._to = setTimeout((function() {
                                e._resetBody();
                                var t = i.getBoundingClientRect();
                                if (d.a.isMobile) {
                                    e.mesh.basePos.x = e.options.mX * d.h.width;
                                    var n = d.i.aboutScrollbar ? d.i.aboutScrollbar.scrollTop : 0;
                                    e.mesh.basePos.y = t.top + t.height - e.options.mY + n, e.mesh.baseScale.setScalar(e.options.mScale), e.mesh.scale.copy(e.mesh.baseScale)
                                } else {
                                    var s = t.left + d.i.aboutX,
                                        o = e.options.scale || .3;
                                    e.mesh.baseScale.setScalar(t.width * o), e.mesh.scale.copy(e.mesh.baseScale), e.mesh.basePos.x = s + e.options.x * t.width, e.mesh.basePos.y = t.height * e.options.y
                                }
                                e._scaleBody(e.body, .008 * e.mesh.scale.x, .008 * e.mesh.scale.y), y.setPosition(e.body, {
                                    x: e.mesh.basePos.x,
                                    y: e.mesh.basePos.y
                                }), e._createConstraint()
                            }), 100))
                        }
                    }, {
                        key: "onSwap",
                        value: function() {
                            Object(h.a)(Object(c.a)(i.prototype), "onSwap", this).call(this), this.setSize(), s.killTweensOf(this.mesh.material.uniforms.uAlpha), this.mesh.material.uniforms.uAlpha.value = 0, s.to(this.mesh.material.uniforms.uAlpha, {
                                value: 1,
                                duration: 1,
                                delay: 1 + Object(p.f)(.1, .6)
                            })
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function() {
                            s.killTweensOf(this.mesh.material.uniforms.uAlpha), s.to(this.mesh.material.uniforms.uAlpha, {
                                value: 0,
                                duration: .3
                            })
                        }
                    }, {
                        key: "_createConstraint",
                        value: function() {
                            this.body.constraint && e.Composite.remove(this._composite, this.body.constraint), this._removeConstraints(this._composite), this.constraints = [], y.setAngularVelocity(this.body, 0), y.setVelocity(this.body, {
                                x: 0,
                                y: 0
                            });
                            var t = b.create({
                                bodyA: this.body,
                                pointA: {
                                    x: 0,
                                    y: 0
                                },
                                pointB: {
                                    x: this.body.position.x,
                                    y: this.body.position.y
                                },
                                length: 1,
                                stiffness: .002 * this.options.stiffness
                            });
                            this.body.constraint = t, this._addConstraint(t, this._composite)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (d.a.isMobile) {
                                if (d.i.aboutScrollbar) {
                                    var i = d.i.aboutScrollbar.scrollTop - this._lastY,
                                        n = Math.abs(d.i.aboutScrollbar.scrollTop - this._lastY);
                                    n < 100 && n > .1 && y.setAngularVelocity(this.body, .003 * i), this._lastY = d.i.aboutScrollbar.scrollTop
                                }
                            } else {
                                var s = d.i.aboutX - this._lastX,
                                    o = Math.abs(d.i.aboutX - this._lastX);
                                o < 100 && o > .1 && y.setAngularVelocity(this.body, .001 * s), this._lastX = d.i.aboutX
                            }
                            this._sync(this.mesh, this.body)
                        }
                    }]), i
                }(u.a);
            t.a = O
        }).call(this, i(23), i(11), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform vec2 uOffset;\nuniform vec2 uScale;\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import scaleUV\n@import translateUV\nvoid main() {\n  vec2 uv = vUv;\n  uv = scaleUV(uv, uScale);\n  uv = translateUV(uv, uOffset);\n  // uv.x += .1;\n  float mask = texture2D(tMap, uv).g;\n  gl_FragColor = vec4(uColor, mask);\n  gl_FragColor.a *= uAlpha;\n}"
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            var o = i(2),
                a = i(3),
                r = i(4),
                c = i(1),
                h = i(8),
                l = i(5),
                u = i(10),
                d = i(0),
                p = i(6),
                f = i(16),
                v = i(285),
                m = e,
                _ = m.Bodies,
                y = m.Body,
                b = (m.Constraint, function(e) {
                    function t(e, i, n) {
                        var s;
                        return Object(o.a)(this, t), (s = Object(r.a)(this, Object(c.a)(t).call(this, e))).scene = e, s.options = i, s._composite = i.composite, s._initMesh(), s._initBody(), s._createGUI(), s.setSize(), s
                    }
                    return Object(l.a)(t, e), Object(a.a)(t, [{
                        key: "_initMesh",
                        value: function() {
                            this._scale = .01, this.mesh = new n.Mesh(this._world.GEOMS.plane, this._createMaterial({
                                transparent: !0,
                                depthTest: !1,
                                vertexShader: f.a,
                                fragmentShader: v.a,
                                uniforms: {
                                    uColor: {
                                        value: new n.Color("#ededed")
                                    }
                                },
                                extensions: {
                                    derivatives: !0
                                }
                            })), this.mesh.renderOrder = 100, this.add(this.mesh), this.mesh.baseScale = this.mesh.scale.clone(), this.mesh.basePos = this.mesh.position.clone()
                        }
                    }, {
                        key: "_initBody",
                        value: function() {
                            this.body = _.circle(0, 0, 1), this.body.frictionAir = .04, this.body.restitution = .01, this._addBody(this.body, this._composite), this.body.collisionFilter.category = this._world.pGroups[0] | this._world.pGroups[1] | this._world.pGroups[2] | this._world.pGroups[4]
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = this;
                            clearTimeout(this._to), this._to = setTimeout((function() {
                                y.setVelocity(e.body, {
                                    x: 0,
                                    y: 0
                                });
                                var t = .9 * d.h.width,
                                    i = e.basePos.x < d.i.aboutLimit.max - 50 - 600 && e.basePos.x > t + 50,
                                    n = e.basePos.y < d.h.height - 25 && e.basePos.y > 25;
                                i && n || (e.basePos = {
                                    x: t + Object(p.f)(d.i.aboutLimit.min + 100, d.i.aboutLimit.max - 100 - 600),
                                    y: Object(p.f)(100, d.h.height - 100)
                                }, y.setPosition(e.body, e.basePos)), e.mesh.baseScale.setScalar(Math.max(e._scale * d.h.width, 35)), e.mesh.scale.setScalar(Math.max(e._scale * d.h.width, 35)), e._scaleBody(e.body, e.mesh.baseScale.x / 2, e.mesh.baseScale.y / 2)
                            }), 100)
                        }
                    }, {
                        key: "onSwap",
                        value: function() {
                            Object(h.a)(Object(c.a)(t.prototype), "onSwap", this).call(this), this.basePos = {
                                x: .9 * d.h.width + Object(p.f)(d.i.aboutLimit.min + 100, d.i.aboutLimit.max - 100),
                                y: Object(p.f)(100, d.h.height - 100)
                            }, this._scale = Object(p.f)(.03, .05), y.setPosition(this.body, this.basePos), this.setSize(), s.killTweensOf(this.mesh.material.uniforms.uAlpha), this.mesh.material.uniforms.uAlpha.value = 0, s.to(this.mesh.material.uniforms.uAlpha, {
                                value: 1,
                                duration: 1,
                                delay: 2 + Object(p.f)(.1, .6)
                            })
                        }
                    }, {
                        key: "onSwapLeave",
                        value: function() {
                            s.killTweensOf(this.mesh.material.uniforms.uAlpha), s.to(this.mesh.material.uniforms.uAlpha, {
                                value: 0,
                                duration: .3
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this._sync(this.mesh, this.body)
                        }
                    }]), t
                }(u.a));
            t.a = b
        }).call(this, i(23), i(11), i(22).gsap)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import aastep\n@import circle\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.-circle(vUv, .49));\n  gl_FragColor.a *= uAlpha;\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            var n, s = i(2),
                o = i(3),
                a = i(4),
                r = i(1),
                c = i(8),
                h = i(5),
                l = i(7),
                u = i(78),
                d = i(79),
                p = i(0),
                f = i(26),
                v = i(287),
                m = (n = function(e) {
                    function t() {
                        var e;
                        return Object(s.a)(this, t), (e = Object(a.a)(this, Object(r.a)(t).call(this, "loader", {
                            postProcessing: !1,
                            physics: !1,
                            noBatcher: !0
                        })))._renderer.setClearColor(16777215, 0), e._bind(), e
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "destroy",
                        value: function() {
                            return Object(c.a)(Object(r.a)(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.h.width,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.h.height;
                            Object(c.a)(Object(r.a)(t.prototype), "setSize", this).call(this, e, i);
                            for (var n = 0, s = this._entities.length; n < s; n++) this._entities[n].setSize(e, i)
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_init", this).call(this)
                        }
                    }, {
                        key: "_bind",
                        value: function() {
                            p.b.on(p.e.PROGRESSED, this._onProgress), p.b.on(p.e.COMPLETED, this._onComplete)
                        }
                    }, {
                        key: "_unbind",
                        value: function() {}
                    }, {
                        key: "_createCameras",
                        value: function() {
                            this._camera = new d.a({
                                near: -110,
                                far: 110,
                                isDefault: !0
                            }), this._camera.position.set(0, 0, 100), this._camera.lookAt(0, 0, 0), this._camera.positionTarget = this._camera.position.clone(), this.addCamera(this._camera), this._world.retinaScene.camera = this._camera
                        }
                    }, {
                        key: "_createPostProcessing",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_createPostProcessing", this).call(this)
                        }
                    }, {
                        key: "_createEntities",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_createEntities", this).call(this), this._bg = new f.a(this, {
                                color: "#EFEFE6"
                            }), this.addEntity(this._bg), this._circles = new v.a(this), this.addEntity(this._circles)
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_createGUI", this).call(this), this.pane
                        }
                    }, {
                        key: "_afterCreate",
                        value: function() {
                            Object(c.a)(Object(r.a)(t.prototype), "_afterCreate", this).call(this)
                        }
                    }, {
                        key: "_onProgress",
                        value: function(e) {
                            this._circles.onProgress(e)
                        }
                    }, {
                        key: "_onComplete",
                        value: function(e) {
                            var t = this;
                            this._circles.onComplete(e, (function() {
                                t._world.loading = !1, t._world.scenes.change(t._world.scenes.pending), p.b.emit(p.e.HIDDEN), p.e.hiddenPromise.resolve(), setTimeout((function() {
                                    p.e.hiddenPromiseDone = !0
                                }), 300)
                            }))
                        }
                    }, {
                        key: "_onKeyUp",
                        value: function(e) {}
                    }, {
                        key: "_onUpdate",
                        value: function(e, t) {
                            for (var i = 0, n = this._entities.length; i < n; i++) this._entities[i].update(e, t)
                        }
                    }]), t
                }(u.a), Object(l.a)(n.prototype, "_onProgress", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onProgress"), n.prototype), Object(l.a)(n.prototype, "_onComplete", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onComplete"), n.prototype), Object(l.a)(n.prototype, "_onKeyUp", [e], Object.getOwnPropertyDescriptor(n.prototype, "_onKeyUp"), n.prototype), n);
            t.a = m
        }).call(this, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        (function(e, n, s) {
            var o, a = i(2),
                r = i(3),
                c = i(4),
                h = i(1),
                l = i(5),
                u = i(7),
                d = i(10),
                p = i(0),
                f = i(6),
                v = i(16),
                m = i(288),
                _ = i(9),
                y = (o = function(t) {
                    function i(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(a.a)(this, i), (t = Object(c.a)(this, Object(h.a)(i).call(this, e, n))).options = n, t._radius = 0, t._mainScale = 20, t._progress = .04, t._complete = 0, t._bind(), t._initMeshes(), t._createGUI(), t.setSize(), t
                    }
                    return Object(l.a)(i, t), Object(r.a)(i, [{
                        key: "_initMeshes",
                        value: function() {
                            var t = this;
                            this.geometry = this._world.GEOMS.plane, this._circles = [];
                            var i = window.location.href.indexOf("about") > 1 ? ["#8B3BDB", "#FCAC14", "#F83D0C", "#AAC3CD", "#E097C2", "#A66333"] : ["#F83D0C", "#8B3BDB", "#FCAC14", "#AAC3CD", "#E097C2", "#A66333"];
                            [1, .5, .3, .1].forEach((function(n, s) {
                                var o = new e.Mesh(t.geometry, t._createMaterial({
                                    depthTest: !1,
                                    transparent: !0,
                                    vertexShader: v.a,
                                    fragmentShader: m.a,
                                    uniforms: {
                                        uColor: {
                                            value: new e.Color(i[s])
                                        }
                                    },
                                    extensions: {
                                        derivatives: !0
                                    }
                                }));
                                o.renderOrder = 1004 - s, o.index = s, t._circles.push(o), t.add(o), o.scale.set(t._mainScale, t._mainScale, 1)
                            }))
                        }
                    }, {
                        key: "_createGUI",
                        value: function() {
                            this.scene.pane && (this.folder = this.scene.pane.addFolder({
                                title: "PreloaderCircles"
                            }), this.folder.expended = !1, this.folder.addInput(this, "_progress", {
                                min: 0,
                                max: 1,
                                step: .01
                            }), this.folder.addInput(this, "_complete", {
                                min: 0,
                                max: 1,
                                step: .01
                            }))
                        }
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t, i) {
                            this.position.x = p.h.width / 2, this.position.y = -p.h.height / 2
                        }
                    }, {
                        key: "onProgress",
                        value: function(e) {
                            var t = e.progress,
                                i = _.k.easeIn(Object(f.d)(t, 0, 100, .1, 1, !0));
                            n.to(this, {
                                _progress: i,
                                duration: 2,
                                ease: "cubic.out"
                            })
                        }
                    }, {
                        key: "onComplete",
                        value: function(e, t) {
                            clearTimeout(this._to), n.to(this, {
                                _complete: 1,
                                duration: 1,
                                delay: 1,
                                ease: "expo.inOut"
                            }), this._to = setTimeout((function() {
                                t()
                            }), 1600)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this._circles[0],
                                n = .002 * t,
                                s = Math.max(p.h.width, p.h.height) * (.13 + 3.1 * this._complete);
                            this._radius = .2 * s * this._progress * (1 - this._complete), this._mainScale = .5 * s * this._progress, i.position.x = Math.cos(n) * -this._radius, i.position.y = Math.sin(n) * this._radius, i.scale.set(this._mainScale, this._mainScale, 1);
                            for (var o = 1, a = this._circles.length; o < a; o++) {
                                var r = this._circles[o - 1],
                                    c = this._circles[o];
                                c.position.x = Object(f.d)(this._complete, 0, .1, Math.cos(n - .5 * o) * -this._radius, i.position.x, !0), c.position.y = Object(f.d)(this._complete, 0, .1, Math.sin(n - .5 * o) * this._radius, i.position.y, !0), this._complete < .1 && (c.scale.x = .94 * r.scale.x, c.scale.y = .94 * r.scale.y)
                            }
                        }
                    }]), i
                }(d.a), Object(u.a)(o.prototype, "onProgress", [s], Object.getOwnPropertyDescriptor(o.prototype, "onProgress"), o.prototype), Object(u.a)(o.prototype, "onComplete", [s], Object.getOwnPropertyDescriptor(o.prototype, "onComplete"), o.prototype), o);
            t.a = y
        }).call(this, i(11), i(22).gsap, i(20).bind)
    }, function(e, t, i) {
        "use strict";
        t.a = "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform float uAlpha;\nvarying vec2 vUv;\n\n@import aastep\n@import circle\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.-circle(vUv, .49));\n  gl_FragColor.a *= uAlpha;\n}\n"
    }, function(e, t, i) {
        "use strict";
        (function(e) {
            var n = i(2),
                s = i(3),
                o = i(4),
                a = i(1),
                r = i(41),
                c = i(5),
                h = i(12),
                l = i(0),
                u = function(t) {
                    function i() {
                        var t;
                        Object(n.a)(this, i), (t = Object(o.a)(this, Object(a.a)(i).call(this)))._entities = [], t._renderer = h.a.renderer;
                        var s = l.h.width,
                            c = l.h.height;
                        return t.active = l.j.useRetinaScene, t.camera = new e.OrthographicCamera(s / -2, s / 2, c / 2, c / -2, -100, 100), t.rtt = new e.WebGLRenderTarget(1, 1, {
                            minFilter: e.LinearFilter,
                            magFilter: e.LinearFilter,
                            format: e.RGBAFormat,
                            generateMipmaps: !1
                        }), t._bind(), t._init(), t.setSize(), t.groups = {
                            home: new e.Group
                        }, t.currentId = "home", window.retinaScene = Object(r.a)(t), t.add(t.groups.home), t
                    }
                    return Object(c.a)(i, t), Object(s.a)(i, [{
                        key: "addEntity",
                        value: function(e, t) {
                            var i = this.groups[t];
                            l.j.useRetinaScene && i.add(e), e.retinaGroup = i, e.retina = !0, e.retinaMode = !0
                        }
                    }, {
                        key: "swapGroup",
                        value: function(e) {
                            if (this.currentId !== e)
                                for (var t in this.currentId = e, this.groups) {
                                    var i = this.groups[t];
                                    t === e ? this.add(i) : this.remove(i)
                                }
                        }
                    }, {
                        key: "swapMode",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentId,
                                i = this.groups[t];
                            if (e)
                                for (var n = 0, s = i.children.length; n < s; n++) {
                                    var o = i.children[n];
                                    o && o.retina && !o.retinaMode && o.retinaGroup.add(o)
                                } else
                                    for (var a = 0, r = i.children.length; a < r; a++) {
                                        var c = i.children[a];
                                        c && c.retina && c.retinaMode && c.baseGroup.add(c)
                                    }
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.children.length && this.active && (this._renderer.setRenderTarget(this.rtt), this._renderer.clear(), this._renderer.render(this, this.camera), this._renderer.setRenderTarget(null))
                        }
                    }, {
                        key: "_bind",
                        value: function() {}
                    }, {
                        key: "_unbind",
                        value: function() {}
                    }, {
                        key: "setSize",
                        value: function(e, t) {
                            var i = this.active;
                            this.active = l.j.useRetinaScene, this.active !== i && this.swapMode(this.active), this.camera.left = e / -2, this.camera.right = e / 2, this.camera.top = t / 2, this.camera.bottom = t / -2, this.camera.updateProjectionMatrix(), this.rtt.setSize(e, t)
                        }
                    }, {
                        key: "_init",
                        value: function() {}
                    }]), i
                }(e.Scene);
            t.a = u
        }).call(this, i(11))
    }, , function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(5),
            c = i(61),
            h = i(16),
            l = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n  gl_FragColor = vec4(vUv.x, vUv.y, 0.3, 1.);\n}\n",
            u = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(n.a)(this, t), e.vertexShader = h.a, e.fragmentShader = l, Object(o.a)(this, Object(a.a)(t).call(this, e))
                }
                return Object(r.a)(t, e), Object(s.a)(t, [{
                    key: "update",
                    value: function(e, t) {}
                }]), t
            }(c.a);
        t.a = u
    }, function(e, t, i) {
        "use strict";
        var n = i(2),
            s = i(3),
            o = i(12),
            a = {},
            r = i(86),
            c = function() {
                function e(t) {
                    Object(n.a)(this, e), window.sceneDebug = this, this.scene = null, t = t.toLowerCase(), this._getData(t)
                }
                return Object(s.a)(e, [{
                    key: "_getData",
                    value: function(e) {
                        var t = this,
                            i = !1;
                        for (var n in r.a) {
                            var s = n.toLowerCase();
                            if (s === e) {
                                i = {
                                    key: s,
                                    id: n,
                                    class: r.a[n],
                                    type: "scene"
                                };
                                break
                            }
                        }
                        if (!i)
                            for (var c in a) {
                                var h = c.toLowerCase();
                                if (h === e) {
                                    i = {
                                        key: h,
                                        id: c,
                                        class: a[c],
                                        type: "entity"
                                    };
                                    break
                                }
                            }
                        i && (this.data = i, "scene" === i.type ? o.a.initialized.then((function() {
                            o.a.scenes.change(i.key)
                        })) : o.a.initialized.then((function() {
                            o.a.scenes.change("entityDebug").then((function(e) {
                                t.entity = new i.class(e), e.addDebugEntity(t.entity)
                            }))
                        })))
                    }
                }]), e
            }();
        t.a = c
    }, , function(e, t, i) {
        "use strict";
        i(39), i(31), i(25), i(19), i(32);
        var n = i(21),
            s = i(2),
            o = i(4),
            a = i(1),
            r = i(5),
            c = i(76),
            h = i(77),
            l = "#define GLSLIFY 1\n#define SHADER_NAME AboutTransition\n\nuniform sampler2D tDiffuse1;\nuniform sampler2D tDiffuse2;\nuniform float uTime;\nuniform float uProgress;\nuniform float uReverse;\n\nvarying vec2 vUv;\n\n@import aastep\n\nvec4 getFromColor(vec2 uv) {\n  return texture2D(tDiffuse1, uv);\n}\n\nvec4 getToColor(vec2 uv) {\n  return texture2D(tDiffuse2, uv);\n}\n\nvoid main() {\n  float mask = aastep(1. - (1.-vUv.y) * (1.-vUv.x), uProgress);\n  float reverseMask = aastep(vUv.y * vUv.x, uProgress);\n  mask = mix(mask, reverseMask, uReverse);\n  gl_FragColor = mix(getFromColor(vUv), getToColor(vUv), mask);\n}\n";

        function u(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }
        var d = function(e) {
            function t(e) {
                var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                Object(s.a)(this, t);
                var c = r.vertexShader || h.a,
                    d = l;
                return (i = Object(o.a)(this, Object(a.a)(t).call(this, e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(i), !0).forEach((function(t) {
                            Object(n.a)(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }({}, r, {
                    vertexShader: c,
                    fragmentShader: d,
                    extensions: {
                        derivatives: !0
                    }
                })))).uniforms.uReverse = {
                    value: 0
                }, i
            }
            return Object(r.a)(t, e), t
        }(c.a);
        t.a = d
    }, function(e, t, i) {
        "use strict";
        i(142), i(150);
        var n = i(2),
            s = i(3),
            o = i(4),
            a = i(1),
            r = i(8),
            c = i(5),
            h = function(e) {
                function t() {
                    var e;
                    return Object(n.a)(this, t), (e = Object(o.a)(this, Object(a.a)(t).call(this)))._tasks = {}, e
                }
                return Object(c.a)(t, e), Object(s.a)(t, [{
                    key: "_addTask",
                    value: function(e, t) {
                        this._tasks[e] = t || null
                    }
                }, {
                    key: "add",
                    value: function(e, i) {
                        Object(r.a)(Object(a.a)(t.prototype), "add", this).call(this, e), this._addTask(e, i)
                    }
                }, {
                    key: "first",
                    value: function(e, i) {
                        Object(r.a)(Object(a.a)(t.prototype), "first", this).call(this, e), this._addTask(e, i)
                    }
                }, {
                    key: "last",
                    value: function(e, i) {
                        Object(r.a)(Object(a.a)(t.prototype), "last", this).call(this, e), this._addTask(e, i)
                    }
                }, {
                    key: "before",
                    value: function(e, i, n) {
                        Object(r.a)(Object(a.a)(t.prototype), "before", this).call(this, e, i), this._addTask(i, n)
                    }
                }, {
                    key: "after",
                    value: function(e, i, n) {
                        Object(r.a)(Object(a.a)(t.prototype), "after", this).call(this, e, i), this._addTask(i, n)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = this,
                            i = new RegExp("^".concat(e));
                        return this.order.filter((function(e) {
                            return e.match(i)
                        })).map((function(e) {
                            return t._tasks[e]
                        })).join("\n")
                    }
                }, {
                    key: "getAll",
                    value: function() {
                        var e = this;
                        return this.order.map((function(t) {
                            return e._tasks[t]
                        }))
                    }
                }]), t
            }(function() {
                function e() {
                    Object(n.a)(this, e), this.order = [], this.rules = {}
                }
                return Object(s.a)(e, [{
                    key: "exists",
                    value: function(e) {
                        return -1 !== this.order.indexOf(e)
                    }
                }, {
                    key: "index",
                    value: function(e) {
                        return this.order.indexOf(e)
                    }
                }, {
                    key: "_add",
                    value: function(e) {
                        this.exists(e) || (this.order.push(e), this.rules[e] = {
                            before: this.order.slice(0, this.order.length - 1),
                            after: []
                        })
                    }
                }, {
                    key: "before",
                    value: function(e, t) {
                        this._add(t), this._add(e), this.updateRules(t, e, "before"), this.reorder()
                    }
                }, {
                    key: "after",
                    value: function(e, t) {
                        this._add(t), this._add(e), this.updateRules(t, e, "after"), this.reorder()
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        this._add(e), this.refreshRules()
                    }
                }, {
                    key: "first",
                    value: function(e) {
                        this.order[0] ? this.before(this.order[0], e) : this.add(e)
                    }
                }, {
                    key: "last",
                    value: function(e) {
                        this.order[this.order.length - 1] ? this.after(this.order[this.order.length - 1], e) : this.add(e)
                    }
                }, {
                    key: "rule",
                    value: function(e, t, i) {
                        if (-1 === this.rules[t][e].indexOf(i)) {
                            this.rules[t][e].push(i);
                            var n = "before" === e ? "after" : "before",
                                s = this.rules[t][n].indexOf(i); - 1 !== s && this.rules[t][n].splice(s, 1)
                        }
                    }
                }, {
                    key: "refreshRules",
                    value: function() {
                        for (var e = {}, t = 0, i = this.order.length; t < i; t++) e[this.order[t]] = {
                            before: this.order.slice(0, t),
                            after: this.order.slice(t + 1, i)
                        };
                        this.rules = e
                    }
                }, {
                    key: "updateRules",
                    value: function(e, t, i) {
                        "before" === i ? (this.rules[e].after = this.rules[t].after.slice(0), this.rules[e].after.push(t), this.rules[e].before = this.rules[t].before.slice(0)) : (this.rules[e].before = this.rules[t].before.slice(0), this.rules[e].before.push(t), this.rules[e].after = this.rules[t].after.slice(0));
                        for (var n = 0, s = this.order.length; n < s; n++) this.rules[e].before.indexOf(this.order[n]) > -1 && this.rule("after", this.order[n], e), this.rules[e].after.indexOf(this.order[n]) > -1 && this.rule("before", this.order[n], e)
                    }
                }, {
                    key: "reorder",
                    value: function() {
                        for (var e, t, i = [this.order[0]], n = 0, s = 1, o = this.order.length; s < o; s++) {
                            e = this.order[s], n = 0;
                            for (var a = 0, r = i.length; a < r; a++) t = i[a], this.rules[t].before.indexOf(e) > -1 && n--;
                            var c = Math.max(0, i.length + n);
                            i.splice(c, 0, e)
                        }
                        this.order = i, this.refreshRules()
                    }
                }]), e
            }());
        t.a = h
    }, , , function(e, t, i) {
        e.exports = i(299)
    }, function(e, t, i) {
        "use strict";
        i.r(t),
            function(e) {
                i(135), i(141), i(31);
                var t = i(62),
                    n = (i(101), i(142), i(36)),
                    s = (i(171), i(173), i(25), i(19), i(32), i(18), i(146), i(309), i(316), i(318), i(14)),
                    o = i(196),
                    a = i(153),
                    r = i(17),
                    c = i(57),
                    h = i(131);
                s.a.component(h.a.name, h.a), s.a.component("NLink", h.a), e.fetch || (e.fetch = o.a);
                var l, u, d = [],
                    p = window.__NUXT__ || {};
                Object.assign(s.a.config, {
                    silent: !0,
                    performance: !1
                });
                var f = s.a.config.errorHandler || console.error;

                function v(e, t, i) {
                    var n = function(e) {
                        var n = function(e, t) {
                            if (!e || !e.options || !e.options[t]) return {};
                            var i = e.options[t];
                            if ("function" == typeof i) {
                                for (var n = arguments.length, s = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) s[o - 2] = arguments[o];
                                return i.apply(void 0, s)
                            }
                            return i
                        }(e, "transition", t, i) || {};
                        return "string" == typeof n ? {
                            name: n
                        } : n
                    };
                    return e.map((function(e) {
                        var t = Object.assign({}, n(e));
                        if (i && i.matched.length && i.matched[0].components.default) {
                            var s = n(i.matched[0].components.default);
                            Object.keys(s).filter((function(e) {
                                return s[e] && e.toLowerCase().includes("leave")
                            })).forEach((function(e) {
                                t[e] = s[e]
                            }))
                        }
                        return t
                    }))
                }

                function m(e, t, i) {
                    return _.apply(this, arguments)
                }

                function _() {
                    return (_ = Object(n.a)(regeneratorRuntime.mark((function e(t, i, n) {
                        var s, o, a, c, h = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._pathChanged = Boolean(l.nuxt.err) || i.path !== t.path, this._queryChanged = JSON.stringify(t.query) !== JSON.stringify(i.query), this._diffQuery = this._queryChanged ? Object(r.g)(t.query, i.query) : [], this._pathChanged && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 4, this._pathChanged || !this._queryChanged) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 8, Object(r.n)(t, (function(e, t) {
                                        return {
                                            Component: e,
                                            instance: t
                                        }
                                    }));
                                case 8:
                                    s = e.sent, s.some((function(e) {
                                        var n = e.Component,
                                            s = e.instance,
                                            o = n.options.watchQuery;
                                        return !0 === o || (Array.isArray(o) ? o.some((function(e) {
                                            return h._diffQuery[e]
                                        })) : "function" == typeof o && o.apply(s, [t.query, i.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 11:
                                    n(), e.next = 25;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(4), o = e.t0 || {}, a = o.statusCode || o.status || o.response && o.response.status || 500, c = o.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(c)) {
                                        e.next = 22;
                                        break
                                    }
                                    return window.location.reload(!0), e.abrupt("return");
                                case 22:
                                    this.error({
                                        statusCode: a,
                                        message: c
                                    }), this.$nuxt.$emit("routeChanged", t, i, o), n();
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [4, 14]
                        ])
                    })))).apply(this, arguments)
                }

                function y(e, t) {
                    return p.serverRendered && t && Object(r.a)(e, t), e._Ctor = e, e
                }

                function b(e) {
                    var t = Object(r.d)(e.options.base, e.options.mode);
                    return Object(r.c)(e.match(t), function() {
                        var e = Object(n.a)(regeneratorRuntime.mark((function e(t, i, n, s, o) {
                            var a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("function" != typeof t || t.options) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, t();
                                    case 3:
                                        t = e.sent;
                                    case 4:
                                        return a = y(Object(r.o)(t), p.data ? p.data[o] : null), n.components[s] = a, e.abrupt("return", a);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, i, n, s, o) {
                            return e.apply(this, arguments)
                        }
                    }())
                }

                function g(e, t, i) {
                    var n = this,
                        s = [],
                        o = !1;
                    if (void 0 !== i && (s = [], (i = Object(r.o)(i)).options.middleware && (s = s.concat(i.options.middleware)), e.forEach((function(e) {
                            e.options.middleware && (s = s.concat(e.options.middleware))
                        }))), s = s.map((function(e) {
                            return "function" == typeof e ? e : ("function" != typeof a.a[e] && (o = !0, n.error({
                                statusCode: 500,
                                message: "Unknown middleware " + e
                            })), a.a[e])
                        })), !o) return Object(r.k)(s, t)
                }

                function w(e, t, i) {
                    return x.apply(this, arguments)
                }

                function x() {
                    return (x = Object(n.a)(regeneratorRuntime.mark((function e(t, i, n) {
                        var s, o, a, h, u, p, f, m, _, y, b, w, x, O, k, j, S, C, P = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 2:
                                    return t === i ? d = [] : (s = [], d = Object(r.e)(i, s).map((function(e, t) {
                                        return Object(r.b)(i.matched[s[t]].path)(i.params)
                                    }))), o = !1, a = function(e) {
                                        i.path === e.path && P.$loading.finish && P.$loading.finish(), i.path !== e.path && P.$loading.pause && P.$loading.pause(), o || (o = !0, n(e))
                                    }, e.next = 7, Object(r.p)(l, {
                                        route: t,
                                        from: i,
                                        next: a.bind(this)
                                    });
                                case 7:
                                    if (this._dateLastError = l.nuxt.dateErr, this._hadError = Boolean(l.nuxt.err), h = [], (u = Object(r.e)(t, h)).length) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.next = 14, g.call(this, u, l.context);
                                case 14:
                                    if (!o) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 16:
                                    return p = (c.a.options || c.a).layout, e.next = 19, this.loadLayout("function" == typeof p ? p.call(c.a, l.context) : p);
                                case 19:
                                    return f = e.sent, e.next = 22, g.call(this, u, l.context, f);
                                case 22:
                                    if (!o) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 24:
                                    return l.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", n());
                                case 26:
                                    return u.forEach((function(e) {
                                        e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                    })), this.setTransitions(v(u, t, i)), e.prev = 28, e.next = 31, g.call(this, u, l.context);
                                case 31:
                                    if (!o) {
                                        e.next = 33;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 33:
                                    if (!l.context._errored) {
                                        e.next = 35;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 35:
                                    return "function" == typeof(m = u[0].options.layout) && (m = m(l.context)), e.next = 39, this.loadLayout(m);
                                case 39:
                                    return m = e.sent, e.next = 42, g.call(this, u, l.context, m);
                                case 42:
                                    if (!o) {
                                        e.next = 44;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 44:
                                    if (!l.context._errored) {
                                        e.next = 46;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 46:
                                    _ = !0, e.prev = 47, y = !0, b = !1, w = void 0, e.prev = 51, x = u[Symbol.iterator]();
                                case 53:
                                    if (y = (O = x.next()).done) {
                                        e.next = 65;
                                        break
                                    }
                                    if ("function" == typeof(k = O.value).options.validate) {
                                        e.next = 57;
                                        break
                                    }
                                    return e.abrupt("continue", 62);
                                case 57:
                                    return e.next = 59, k.options.validate(l.context);
                                case 59:
                                    if (_ = e.sent) {
                                        e.next = 62;
                                        break
                                    }
                                    return e.abrupt("break", 65);
                                case 62:
                                    y = !0, e.next = 53;
                                    break;
                                case 65:
                                    e.next = 71;
                                    break;
                                case 67:
                                    e.prev = 67, e.t0 = e.catch(51), b = !0, w = e.t0;
                                case 71:
                                    e.prev = 71, e.prev = 72, y || null == x.return || x.return();
                                case 74:
                                    if (e.prev = 74, !b) {
                                        e.next = 77;
                                        break
                                    }
                                    throw w;
                                case 77:
                                    return e.finish(74);
                                case 78:
                                    return e.finish(71);
                                case 79:
                                    e.next = 85;
                                    break;
                                case 81:
                                    return e.prev = 81, e.t1 = e.catch(47), this.error({
                                        statusCode: e.t1.statusCode || "500",
                                        message: e.t1.message
                                    }), e.abrupt("return", n());
                                case 85:
                                    if (_) {
                                        e.next = 88;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", n());
                                case 88:
                                    return e.next = 90, Promise.all(u.map((function(e, n) {
                                        if (e._path = Object(r.b)(t.matched[h[n]].path)(t.params), e._dataRefresh = !1, P._pathChanged && P._queryChanged || e._path !== d[n]) e._dataRefresh = !0;
                                        else if (!P._pathChanged && P._queryChanged) {
                                            var s = e.options.watchQuery;
                                            !0 === s ? e._dataRefresh = !0 : Array.isArray(s) ? e._dataRefresh = s.some((function(e) {
                                                return P._diffQuery[e]
                                            })) : "function" == typeof s && (j || (j = Object(r.f)(t)), e._dataRefresh = s.apply(j[n], [t.query, i.query]))
                                        }
                                        if (P._hadError || !P._isMounted || e._dataRefresh) {
                                            var o = [],
                                                a = e.options.asyncData && "function" == typeof e.options.asyncData,
                                                c = Boolean(e.options.fetch),
                                                u = a && c ? 30 : 45;
                                            if (a) {
                                                var p = Object(r.m)(e.options.asyncData, l.context).then((function(t) {
                                                    Object(r.a)(e, t), P.$loading.increase && P.$loading.increase(u)
                                                }));
                                                o.push(p)
                                            }
                                            if (P.$loading.manual = !1 === e.options.loading, c) {
                                                var f = e.options.fetch(l.context);
                                                f && (f instanceof Promise || "function" == typeof f.then) || (f = Promise.resolve(f)), f.then((function(e) {
                                                    P.$loading.increase && P.$loading.increase(u)
                                                })), o.push(f)
                                            }
                                            return Promise.all(o)
                                        }
                                    })));
                                case 90:
                                    o || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), n()), e.next = 107;
                                    break;
                                case 93:
                                    if (e.prev = 93, e.t2 = e.catch(28), "ERR_REDIRECT" !== (S = e.t2 || {}).message) {
                                        e.next = 98;
                                        break
                                    }
                                    return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, i, S));
                                case 98:
                                    return d = [], Object(r.i)(S), "function" == typeof(C = (c.a.options || c.a).layout) && (C = C(l.context)), e.next = 104, this.loadLayout(C);
                                case 104:
                                    this.error(S), this.$nuxt.$emit("routeChanged", t, i, S), n();
                                case 107:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [28, 93],
                            [47, 81],
                            [51, 67, 71, 79],
                            [72, , 74, 78]
                        ])
                    })))).apply(this, arguments)
                }

                function O(e, i) {
                    Object(r.c)(e, (function(e, i, n, o) {
                        return "object" !== Object(t.a)(e) || e.options || ((e = s.a.extend(e))._Ctor = e, n.components[o] = e), e
                    }))
                }

                function k(e) {
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
                    var t = this.$options.nuxt.err ? (c.a.options || c.a).layout : e.matched[0].components.default.options.layout;
                    "function" == typeof t && (t = t(l.context)), this.setLayout(t)
                }

                function j(e, t) {
                    var i = this;
                    if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                        var n = Object(r.f)(e),
                            o = Object(r.e)(e);
                        s.a.nextTick((function() {
                            n.forEach((function(e, t) {
                                if (e && !e._isDestroyed && e.constructor._dataRefresh && o[t] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                    var i = e.constructor.options.data.call(e);
                                    for (var n in i) s.a.set(e.$data, n, i[n]);
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            })), k.call(i, e)
                        }))
                    }
                }

                function S(e) {
                    window.onNuxtReadyCbs.forEach((function(t) {
                        "function" == typeof t && t(e)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), u.afterEach((function(t, i) {
                        s.a.nextTick((function() {
                            return e.$nuxt.$emit("routeChanged", t, i)
                        }))
                    }))
                }

                function C() {
                    return (C = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        var i, n, o, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l = t.app, u = t.router, t.store, i = new s.a(l), n = function() {
                                        i.$mount("#__nuxt"), u.afterEach(O), u.afterEach(j.bind(i)), s.a.nextTick((function() {
                                            S(i)
                                        }))
                                    }, e.next = 7, Promise.all(b(u));
                                case 7:
                                    if (o = e.sent, i.setTransitions = i.$options.nuxt.setTransitions.bind(i), o.length && (i.setTransitions(v(o, u.currentRoute)), d = u.currentRoute.matched.map((function(e) {
                                            return Object(r.b)(e.path)(u.currentRoute.params)
                                        }))), i.$loading = {}, p.error && i.error(p.error), u.beforeEach(m.bind(i)), u.beforeEach(w.bind(i)), !p.serverRendered) {
                                        e.next = 17;
                                        break
                                    }
                                    return n(), e.abrupt("return");
                                case 17:
                                    a = function() {
                                        O(u.currentRoute, u.currentRoute), k.call(i, u.currentRoute), n()
                                    }, w.call(i, u.currentRoute, u.currentRoute, (function(e) {
                                        if (e) {
                                            var t = u.afterEach((function(e, i) {
                                                t(), a()
                                            }));
                                            u.push(e, void 0, (function(e) {
                                                e && f(e)
                                            }))
                                        } else a()
                                    }));
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(c.b)().then((function(e) {
                    return C.apply(this, arguments)
                })).catch(f)
            }.call(this, i(48))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
        "use strict";
        var n = i(111);
        i.n(n).a
    }, function(e, t, i) {
        "use strict";
        var n = i(112);
        i.n(n).a
    }, , , function(e, t, i) {
        "use strict";
        var n = i(114);
        i.n(n).a
    }, , , , , , , , , , function(e, t, i) {
        "use strict";
        var n = i(115);
        i.n(n).a
    }, function(e, t, i) {
        "use strict";
        var n = i(117);
        i.n(n).a
    }, function(e, t, i) {
        "use strict";
        var n = i(118);
        i.n(n).a
    }, function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "state", (function() {
            return a
        })), i.d(t, "mutations", (function() {
            return r
        })), i.d(t, "actions", (function() {
            return c
        }));
        i(39), i(31), i(25), i(19), i(32);
        var n = i(21),
            s = i(93);

        function o(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }
        var a = function() {
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(i), !0).forEach((function(t) {
                            Object(n.a)(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }({}, s.a, {
                    ua: ""
                })
            },
            r = {
                SET_UA: function(e, t) {
                    e.ua = t
                }
            },
            c = {}
    }],
    [
        [298, 4, 1, 5]
    ]
]);