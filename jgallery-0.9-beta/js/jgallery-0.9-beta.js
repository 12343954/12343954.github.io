/*!
 * jGallery v0.9-beta
 * http://jgallery.jakubkowalczyk.pl/
 *
 * Released under the MIT license
 *
 * Date: 2013-08-19
 */
(function (a) {
    a.fn.jGallery = function (n) {
        a.fn.jGalleryOptions = a.extend({
            autostart: false,
            canClose: true,
            canResize: true,
            descriptions: false,
            thumbnails: true,
            thumbnailsFullScreen: true,
            thumbType: "image",
            thumbnailsPosition: "bottom",
            thumbWidth: 100,
            thumbHeight: 100,
            thumbWidthOnFullScreen: 100,
            thumbHeightOnFullScreen: 100,
            showEffect: "rotate-room-right",
            hideEffect: "rotate-room-right",
            showTimingFunction: "linear",
            hideTimingFunction: "linear",
            showDuration: "0.5s",
            hideDuration: "0.5s",
            zoomSize: "fitToWindow",
            title: true,
            titleShowEffect: "fade",
            titleHideEffect: "fade",
            titleShowTimingFunction: "ease",
            titleHideTimingFunction: "ease",
            titleShowDuration: "0.5s",
            titleHideDuration: "0.5s",
            slideshow: true,
            slideshowAutostart: false,
            slideshowCanRandom: true,
            slideshowRandom: false,
            slideshowRandomAutostart: false,
            slideshowInterval: "8s",
            preloadAll: false,
            theme: "black",
            disabledOnIE7AndOlder: true,
            initGallery: function () { },
            showPhoto: function () { },
            beforeLoadPhoto: function () { },
            afterLoadPhoto: function () { },
            showGallery: function () { },
            closeGallery: function () { }
        }, n);
        var b = ["slide-up", "slide-down", "slide-right", "slide-left", "slide-up-left", "slide-up-right", "slide-down-left", "slide-down-right", "fade"];
        var l = b.length;
        var c = a(window);
        if (a.fn.jGalleryOptions.disabledOnIE7AndOlder && a.browser.version < 8) {
            return
        }
        function e() {
            return a("#jGallery").length == 1
        }
        if (e()) {
            return
        }
        function o() {
            return a.fn.jGalleryOptions.thumbnailsPosition == "top" || a.fn.jGalleryOptions.thumbnailsPosition == "bottom"
        }
        function h() {
            return a.fn.jGalleryOptions.thumbnailsPosition == "left" || a.fn.jGalleryOptions.thumbnailsPosition == "right"
        }
        function d(p) {
            return a.browser.webkit ? p.css("-webkit-transition") : p.css("transition")
        }
        function f(p, q) {
            p.css({
                "-webkit-transition": q,
                "-moz-transition-duration": q,
                "-o-transition-duration": q,
                transition: q
            })
        }
        function g(q, p) {
            q.css({
                "-webkit-transition-duration": p,
                "-moz-transition-duration": p,
                "-o-transition-duration": p,
                "transition-duration": p
            })
        }
        function m(q, p) {
            q.css({
                "-webkit-transition-timing-function": p,
                "-moz-transition-timing-function": p,
                "-o-transition-timing-function": p,
                "transition-timing-function": p
            })
        }
        function j(q, p) {
            return Math.floor(Math.random() * (p - q + 1)) + q
        }
        function k(p) {
            return p.width() > p.height()
        }
        function i(X) {
            var ac;
            var U;
            var aZ;
            var ak;
            var aJ;
            var ay;
            var J;
            var N = a();
            var K = a();
            var aM;
            var B;
            var aC;
            var x;
            var D;
            var ai;
            var aE;
            var aO;
            var aF;
            var aL;
            var ad;
            var aU;
            var aS;
            var V;
            var aG;
            var W;
            var ae;
            var u;
            var aB = false;
            var Y;
            var aP = false;
            var aX;
            var av;
            var s;
            var aN;
            var R = X.find(".album:has(a:has(img:first-child:last-child))").length > 1;
            function aa(a2) {
                a2.clear = function () {
                    a2.stop(false, true).css({
                        width: 0
                    });
                    return a2
                }
                    ;
                a2.start = function (a3, a4) {
                    a2.animate({
                        width: a3
                    }, parseInt(a.fn.jGalleryOptions.slideshowInterval) * 1000, "linear", a4);
                    return a2
                }
                    ;
                a2.pause = function () {
                    a2.stop(true).clear();
                    return a2
                }
                    ;
                return a2
            }
            function M() {
                ac = a("body");
                aZ = a("#jGallery");
                aG = aZ.children(".zoom-container");
                ae = aG.children(".title");
                ak = aG.children(".prev");
                aJ = aG.children(".next");
                V = aG.children(".zoom");
                J = aa(aG.children(".progress"));
                aC = aZ.find(".descriptions");
                x = aZ.find(".thumbnails");
                D = x.find(".container");
                ai = x.children(".prev");
                aE = x.children(".next");
                aO = x.find("a");
                aF = x.find("img");
                aU = x.find(".album")
            }
            function E() {
                var a3;
                var a6 = 1;
                var a5 = 1;
                var a2 = a("#jGallery .thumbnails .container-inner");
                function a4(a8, a9) {
                    a8.find("a:has(img:first-child:last-child)").each(function () {
                        a9.append(a(this));
                        a9.children(":last-child").attr("data-jgallery-photo-id", a6++)
                    })
                }
                function a7() {
                    var a9 = a(this);
                    var a8 = a9.is("[data-jgallery-album-title]") ? a9.attr("data-jgallery-album-title") : "Album " + a5;
                    var ba = a2.append('<div class="album" data-jgallery-album-title="' + a8 + '"></div>').children(":last-child");
                    if (a5 == 1) {
                        ba.addClass("active")
                    }
                    a4(a9, ba);
                    a5++
                }
                a("body").append('<div id="jGalleryTmp" style="position: absolute; top: 0; left: 0; width: 0; height: 0; z-index: -1; overflow: hidden;">' + X.html() + "</div>");
                a3 = a("#jGalleryTmp");
                if (R) {
                    a3.find(".album:has(a:has(img:first-child:last-child))").each(a7)
                } else {
                    a4(a3, a2)
                }
                a3.remove()
            }
            function at() {
                a.fn.jGalleryOptions.initGallery();
                a("body").append('                    <div id="jGallery" style="display: none;">                        <div class="thumbnails hidden">                            <div class="container"><div class="container-inner"></div></div>                            <span class="prev btn hidden"><span class="icon-chevron-left ico"></span></span>                            <span class="next btn hidden"><span class="icon-chevron-right ico"></span></span>                        </div>                        <div class="descriptions"></div>                        <div class="zoom-container">                            <div class="title before"></div>                            <div id="pt-main" class="zoom before pt-perspective"></div>                            <span class="icon-chevron-left prev btn btn-large"></span>                            <span class="icon-chevron-right next btn btn-large"></span>                            <span class="progress"></span>                            <div class="nav"></div>                            <div class="nav-bottom"></div>                            <canvas id="canvas" width="1920" height="1200"></canvas>                        </div>                    </div>');
                E();
                M();
                if (a.fn.jGalleryOptions.theme == "white") {
                    aZ.addClass("white")
                }
                if (a.fn.jGalleryOptions.preloadAll) {
                    I()
                }
                aY();
                if (a.fn.jGalleryOptions.canResize) {
                    aG.find(".nav").append('<span class="icon- resize btn btn-small"></span>');
                    ay = aG.find(".resize")
                }
                if (a.fn.jGalleryOptions.canClose) {
                    aG.find(".nav").append('<span class="icon-remove close btn btn-small"></span>')
                }
                if (!a.fn.jGalleryOptions.thumbnails) {
                    x.hide();
                    a.fn.jGalleryOptions.thumbnailsPosition = ""
                }
                if (a.fn.jGalleryOptions.slideshow) {
                    aG.find(".nav-bottom").append('<span class="icon- icon-play slideshow btn btn-small"></span>');
                    N = aG.find(".slideshow");
                    if (a.fn.jGalleryOptions.slideshowCanRandom) {
                        aG.find(".nav-bottom").append('<span class="icon- icon-random random btn btn-small inactive"></span>');
                        K = aG.find(".random");
                        if (a.fn.jGalleryOptions.slideshowRandom) {
                            K.addClass("active")
                        }
                    }
                }
                if (a.fn.jGalleryOptions.thumbnailsFullScreen && a.fn.jGalleryOptions.thumbType == "image") {
                    aG.find(".nav-bottom").append('<span class="icon- icon-th full-screen btn btn-small"></span>');
                    aM = aG.find(".full-screen");
                    x.append('<span class="icon- icon-remove btn close btn-small"></span>');
                    aL = x.find(".close")
                }
                (function () {
                    if (R) {
                        aG.find(".nav-bottom").append('<span class="icon- icon-list-ul change-album btn btn-small"><span class="menu btn"></span></span>');
                        B = aG.find(".change-album");
                        ad = B.find(".menu");
                        aU.each(function () {
                            var a2 = a(this).attr("data-jgallery-album-title");
                            ad.append('<span class="item" data-jgallery-album-title="' + a2 + '">' + a2 + "</span>")
                        })
                    }
                }
                )();
                if (!a.fn.jGalleryOptions.descriptions) {
                    aC.hide()
                }
                if (a.fn.jGalleryOptions.zoomSize == "fitToWindow") {
                    ay.addClass("icon-resize-full")
                }
                if (a.fn.jGalleryOptions.zoomSize == "100%") {
                    ay.addClass("icon-resize-small")
                }
                a0();
                a1();
                F();
                ar();
                aQ()
            }
            function aY() {
                x.addClass("thumbnails-" + a.fn.jGalleryOptions.thumbnailsPosition);
                if (h()) {
                    x.addClass("thumbnails-vertical")
                }
                if (o()) {
                    x.addClass("thumbnails-horizontal")
                }
                if (a.fn.jGalleryOptions.thumbType == "square") {
                    S()
                }
                if (a.fn.jGalleryOptions.thumbType == "number") {
                    ao()
                }
                if (a.fn.jGalleryOptions.thumbType == "image") {
                    aK()
                }
            }
            function S() {
                var a2 = 1;
                x.addClass("square");
                aO.each(function () {
                    a(this).append(a2++)
                })
            }
            function ao() {
                x.addClass("number");
                S()
            }
            function aK() {
                x.addClass("images");
                a("head").append('                    <style type="text/css">\n                        #jGallery .thumbnails a {\n                            width: ' + a.fn.jGalleryOptions.thumbWidth + "px;\n                            height: " + a.fn.jGalleryOptions.thumbHeight + "px;\n                            font-size: " + a.fn.jGalleryOptions.thumbHeight + "px;\n                        }\n                        #jGallery .thumbnails.full-screen a {\n                            width: " + a.fn.jGalleryOptions.thumbWidthOnFullScreen + "px;\n                            height: " + a.fn.jGalleryOptions.thumbHeightOnFullScreen + "px;\n                            font-size: " + a.fn.jGalleryOptions.thumbHeightOnFullScreen + "px;\n                        }\n                        #jGallery .thumbnails-horizontal {\n                            height: " + parseInt(a.fn.jGalleryOptions.thumbHeight + 2) + "px;\n                        }\n                        #jGallery .thumbnails-vertical {\n                            width: " + parseInt(a.fn.jGalleryOptions.thumbWidth + 2) + "px;\n                        }\n                        #jGallery .thumbnails-top.hidden {\n                            top: -" + a.fn.jGalleryOptions.thumbHeight + "px;\n                        }\n                        #jGallery .thumbnails-bottom.hidden {\n                            bottom: -" + a.fn.jGalleryOptions.thumbHeight + "px;\n                        }\n                        #jGallery .thumbnails-left.hidden {\n                            left: -" + a.fn.jGalleryOptions.thumbWidth + "px;\n                        }\n                        #jGallery .thumbnails-right.hidden {\n                            right: -" + a.fn.jGalleryOptions.thumbWidth + "px;\n                        }\n                    </style>\n                ");
                ag()
            }
            function aQ() {
                X.find("a").on({
                    click: function (a2) {
                        a2.preventDefault();
                        aR(a(this))
                    }
                });
                aO.on({
                    click: function (a2) {
                        var a3 = a(this);
                        a2.preventDefault();
                        if (a3.is(":not(.active)")) {
                            q();
                            aR(a3)
                        } else {
                            if (w()) {
                                az()
                            }
                        }
                    }
                });
                ai.on({
                    click: function () {
                        A()
                    }
                });
                aE.on({
                    click: function () {
                        G()
                    }
                });
                ak.on({
                    click: function () {
                        q();
                        p()
                    }
                });
                aJ.on({
                    click: function () {
                        q();
                        P()
                    }
                });
                aG.find(".close").on({
                    click: function () {
                        aw()
                    }
                });
                K.on({
                    click: function () {
                        r()
                    }
                });
                ay.on({
                    click: function () {
                        an()
                    }
                });
                N.on({
                    click: function () {
                        z()
                    }
                });
                aM.on({
                    click: function () {
                        aA()
                    }
                });
                aL.on({
                    click: function () {
                        az()
                    }
                });
                B.on({
                    click: function (a2) {
                        t();
                        a2.stopPropagation()
                    }
                });
                B.find(".item").on({
                    click: function () {
                        var a2 = a(this);
                        if (a2.is(".active")) {
                            return
                        }
                        aR(aU.filter('[data-jgallery-album-title="' + a2.attr("data-jgallery-album-title") + '"]').find("a").eq(0))
                    }
                })
            }
            function t() {
                B.toggleClass("active")
            }
            function T() {
                B.removeClass("active")
            }
            function I() {
                aO.each(function () {
                    var a2 = a(this);
                    if (!aW(a2)) {
                        V.append('<div class="container pt-page before ' + v(a.fn.jGalleryOptions.showEffect) + '"><img src="' + a2.attr("href") + '" /></div>')
                    }
                })
            }
            function a0() {
                if (!a.browser.msie) {
                    aZ.addClass("text-shadow")
                }
            }
            function H() {
                var a3;
                var a2;
                if (o()) {
                    a3 = c.width();
                    a2 = c.height() - x.outerHeight(true)
                } else {
                    if (h()) {
                        a3 = c.width() - x.outerWidth(true);
                        a2 = c.height()
                    } else {
                        a3 = c.width();
                        a2 = c.height()
                    }
                }
                return a3 / a2
            }
            function ar() {
                aG.css({
                    width: h() ? c.width() - x.outerWidth(true) : "auto",
                    height: o() ? c.height() - x.outerHeight(true) : c.height(),
                    "margin-top": a.fn.jGalleryOptions.thumbnailsPosition == "top" ? x.outerHeight(true) : 0,
                    "margin-left": a.fn.jGalleryOptions.thumbnailsPosition == "left" ? x.outerWidth(true) : 0,
                    "margin-right": a.fn.jGalleryOptions.thumbnailsPosition == "right" ? x.outerWidth(true) : 0
                })
            }
            function af() {
                var a2 = V.find("img.active");
                a2.css({
                    width: "auto",
                    height: "auto",
                    "min-width": 0,
                    "min-height": 0,
                    "max-width": h() ? c.width() - x.outerWidth(true) : c.width(),
                    "max-height": o() ? c.height() - x.outerHeight(true) : c.height()
                });
                a2.css({
                    "margin-top": -a2.height() / 2,
                    "margin-left": -a2.width() / 2
                });
                ay.addClass("icon-resize-full").removeClass("icon-resize-small")
            }
            function aq() {
                var a2 = V.find("img.active");
                a2.css({
                    "max-width": "none",
                    "max-height": "none",
                    "min-width": h() ? c.width() - x.outerWidth(true) : c.width(),
                    "min-height": o() ? c.height() - x.outerHeight(true) : c.height()
                });
                if (Y / H() > 1) {
                    a2.css({
                        width: "auto",
                        height: o() ? c.height() - x.outerHeight(true) : c.height()
                    })
                } else {
                    a2.css({
                        width: h() ? c.width() - x.outerWidth(true) : c.width(),
                        height: "auto"
                    })
                }
                a2.css({
                    "margin-top": -a2.height() / 2,
                    "margin-left": -a2.width() / 2
                });
                ay.addClass("icon-resize-small").removeClass("icon-resize-full")
            }
            function ax() {
                if (w()) {
                    return
                }
                ar();
                if (a.fn.jGalleryOptions.zoomSize == "fitToWindow") {
                    af()
                } else {
                    if (a.fn.jGalleryOptions.zoomSize == "100%") {
                        aq()
                    }
                }
                V.addClass("visible")
            }
            function an() {
                var a2 = V.find("img.active");
                a2.stop(false, true).fadeOut(parseFloat(a.fn.jGalleryOptions.showDuration) * 1000, function () {
                    if (a.fn.jGalleryOptions.zoomSize == "fitToWindow") {
                        a.fn.jGalleryOptions.zoomSize = "100%";
                        aq()
                    } else {
                        if (a.fn.jGalleryOptions.zoomSize == "100%") {
                            a.fn.jGalleryOptions.zoomSize = "fitToWindow";
                            af()
                        }
                    }
                    a2.fadeIn(parseFloat(a.fn.jGalleryOptions.hideDuration) * 1000)
                })
            }
            function a1() {
                if (h() || w()) {
                    aI()
                } else {
                    if (o()) {
                        O()
                    }
                }
            }
            function O() {
                var a3 = aU.filter(".active");
                var a2 = a.fn.jGalleryOptions.thumbType == "image" ? aO.outerWidth(true) * a3.find("img").length : aO.outerWidth(true) * a3.find("a").length;
                D.scrollLeft() > 0 ? ai.addClass("visible") : ai.removeClass("visible");
                a2 > D.width() + D.scrollLeft() ? aE.addClass("visible") : aE.removeClass("visible")
            }
            function aI() {
                D.scrollTop() > 0 ? ai.addClass("visible") : ai.removeClass("visible");
                D.find(".container-inner").height() > D.height() + D.scrollTop() ? aE.addClass("visible") : aE.removeClass("visible")
            }
            function F() {
                var a2 = x.find(".active");
                a2.prev("a").length == 1 ? ak.removeClass("hidden") : ak.addClass("hidden");
                a2.next("a").length == 1 ? aJ.removeClass("hidden") : aJ.addClass("hidden")
            }
            function A() {
                if (h() || w()) {
                    D.stop(false, true).animate({
                        scrollTop: "-=" + c.height() * 0.7
                    }, function () {
                        a1()
                    })
                } else {
                    if (o()) {
                        D.stop(false, true).animate({
                            scrollLeft: "-=" + c.width() * 0.7
                        }, function () {
                            a1()
                        })
                    }
                }
            }
            function G() {
                if (h() || w()) {
                    D.stop(false, true).animate({
                        scrollTop: "+=" + c.height() * 0.7
                    }, function () {
                        a1()
                    })
                } else {
                    if (o()) {
                        D.stop(false, true).animate({
                            scrollLeft: "+=" + c.width() * 0.7
                        }, function () {
                            a1()
                        })
                    }
                }
            }
            function aA() {
                q();
                x.addClass("full-screen");
                if (o()) {
                    x.addClass("thumbnails-vertical").removeClass("thumbnails-horizontal")
                }
                aI()
            }
            function az() {
                x.removeClass("full-screen");
                if (o()) {
                    x.addClass("thumbnails-horizontal").removeClass("thumbnails-vertical")
                }
                ax();
                a1()
            }
            function w() {
                return x.is(".full-screen")
            }
            function aw() {
                if (!a.fn.jGalleryOptions.canClose) {
                    return
                }
                a("#jGallery:visible").stop(false, true).addClass("hidden").fadeOut(500, function () {
                    ac.css({
                        overflow: "visible"
                    })
                });
                aP = false;
                clearTimeout(u);
                V.hide().removeAttr("src");
                ae.addClass("hidden");
                ak.addClass("hidden");
                aJ.addClass("hidden");
                ag();
                q();
                ac.overlay({
                    hide: true
                });
                a.fn.jGalleryOptions.closeGallery()
            }
            function y() {
                ac.css({
                    overflow: "hidden"
                });
                if (typeof aS == "undefined") {
                    ap()
                }
                a("#jGallery:not(:visible)").removeClass("hidden").stop(false, true).fadeIn(500);
                aD();
                ar();
                ac.overlay({
                    show: true,
                    showLoader: false
                });
                ae.removeClass("hidden");
                a.fn.jGalleryOptions.showGallery()
            }
            function au(a2) {
                if (o()) {
                    aT(a2)
                }
                if (h()) {
                    am(a2)
                }
            }
            function aT(a2) {
                D.stop(false, true).animate({
                    scrollLeft: a2.position().left - D.scrollLeft() * -1 - a2.outerWidth() / -2 - D.outerWidth() / 2
                }, function () {
                    a1()
                })
            }
            function am(a2) {
                D.stop(false, true).animate({
                    scrollTop: a2.position().top - D.scrollTop() * -1 - a2.outerHeight() / -2 - D.outerHeight() / 2
                }, function () {
                    a1()
                })
            }
            function v(a2) {
                return a2 == "random" ? b[Math.floor((Math.random() * l))] : a2
            }
            function aR(a2) {
                var a3 = a2.children("img");
                if (!e()) {
                    Z()
                }
                if (aP) {
                    return
                }
                aP = true;
                a.fn.jGalleryOptions.showPhoto();
                if (a("#jGallery").is(":not(:visible)")) {
                    y()
                }
                az();
                if (true || !a2.is("[data-jgallery-photo-id]")) {
                    C(aU.filter('[data-jgallery-album-title="' + a2.parents(".album").eq(0).attr("data-jgallery-album-title") + '"]'))
                }
                L(a2);
                aC.html("");
                F();
                clearTimeout(U);
                g(a(V).add(W), a.fn.jGalleryOptions.hideDuration);
                m(a(V).add(W), a.fn.jGalleryOptions.hideTimingFunction);
                av = v(a.fn.jGalleryOptions.hideEffect);
                V.addClass("zoom");
                V.find("img.active").parent().removeClass("visible").removeClass(aX).addClass("after").addClass(av);
                if (a.fn.jGalleryOptions.title) {
                    g(ae, a.fn.jGalleryOptions.titleHideDuration);
                    m(ae, a.fn.jGalleryOptions.titleHideTimingFunction);
                    aN = v(a.fn.jGalleryOptions.titleHideEffect);
                    if (typeof s != "undefined") {
                        ae.removeClass(s)
                    }
                    ae.addClass("after " + aN)
                }
                u = setTimeout(function () {
                    var a4 = aW(a2);
                    aX = v(a.fn.jGalleryOptions.showEffect);
                    V.find("img.active").parent().removeClass("after").removeClass(av).addClass("before").addClass(aX);
                    if (!a4) {
                        V.append('<div class="container pt-page before ' + aX + '"><img src="' + a2.attr("href") + '" /></div>')
                    }
                    V.find("img").removeClass("active").parent().attr("class", "container pt-page before " + aX);
                    aG.find('[src="' + a2.attr("href") + '"]').addClass("active");
                    if (a.fn.jGalleryOptions.title && a3.is("[alt]")) {
                        s = v(a.fn.jGalleryOptions.titleShowEffect);
                        ae.removeClass(aN).addClass(s).removeClass("after").addClass("before")
                    }
                    if (!a4 || a.fn.jGalleryOptions.preloadAll) {
                        a.fn.jGalleryOptions.preloadAll = false;
                        aG.overlay({
                            show: true,
                            showLoader: true
                        });
                        a.fn.jGalleryOptions.beforeLoadPhoto();
                        ah(V, a2)
                    } else {
                        aV(a3)
                    }
                }, Math.max(parseFloat(a.fn.jGalleryOptions.hideDuration) * 1000, parseFloat(a.fn.jGalleryOptions.titleHideDuration) * 1000))
            }
            function aW(a2) {
                return V.find("img").filter('[src="' + a2.attr("href") + '"]').length > 0
            }
            function ah(a2, a4) {
                var a5 = a4.children("img");
                var a3 = 0;
                a2.jLoader({
                    interval: 500,
                    skip: ".loaded",
                    start: function () {
                        aG.find(".overlay .imageLoaderPositionAbsolute:not(:has(.progress-value))").append('<span class="progress-value"></span>');
                        aG.find(".progress-value").html("0")
                    },
                    success: function () {
                        a2.find("img").addClass("loaded");
                        aG.overlay({
                            hide: true,
                            hideLoader: true
                        });
                        clearInterval(U);
                        aC.html(a4.attr("data-description"));
                        U = setTimeout(function () {
                            aV(a5)
                        }, 500)
                    },
                    progress: function (a6) {
                        a3 = a6.percent;
                        aG.find(".overlay .imageLoaderPositionAbsolute").find(".progress-value").html(a3)
                    }
                })
            }
            function aV(a3) {
                var a2 = V.find("img.active");
                g(a(V).add(W), a.fn.jGalleryOptions.showDuration);
                m(a(V).add(W), a.fn.jGalleryOptions.showTimingFunction);
                if (a.fn.jGalleryOptions.title && a3.is("[alt]")) {
                    ae.html(a3.attr("alt")).removeClass("before").removeClass("after");
                    g(ae, a.fn.jGalleryOptions.titleShowDuration);
                    m(ae, a.fn.jGalleryOptions.titleShowTimingFunction)
                }
                V.show().find("img.active").parent().removeClass("before");
                Y = a2.width() / a2.height();
                ax();
                a1();
                if (aB) {
                    Q()
                }
                a.fn.jGalleryOptions.afterLoadPhoto();
                aP = false;
                if (a.fn.jGalleryOptions.autostart && a.fn.jGalleryOptions.slideshowAutostart && a.fn.jGalleryOptions.slideshow) {
                    a.fn.jGalleryOptions.slideshowAutostart = false;
                    ab()
                }
            }
            function Z() {
                a("body").overlay({
                    imageLoaderPositionAbsolute: true,
                    fadeIn: false,
                    show: true
                });
                at()
            }
            function p() {
                var a2 = aO.filter(".active").prev("a");
                if (a2.length == 1) {
                    aR(a2)
                }
            }
            function P() {
                var a2 = aO.filter(".active").next("a");
                if (a2.length == 1) {
                    aR(a2)
                }
            }
            function aH() {
                var a2 = aO.filter(".active").next("a");
                if (a2.length == 0) {
                    a2 = aU.filter(".active").find("a").eq(0)
                }
                aR(a2)
            }
            function al() {
                var a2 = aU.filter(".active").find("a:not(.active)");
                aR(a2.eq(Math.floor(Math.random() * a2.length)))
            }
            function ag() {
                x.addClass("hidden");
                aO.addClass("hidden")
            }
            function aD() {
                if (!x.is(".hidden")) {
                    return
                }
                x.removeClass("hidden");
                if (!x.is(".loaded")) {
                    x.jLoader({
                        start: function () { },
                        success: function () {
                            aj();
                            x.addClass("loaded");
                            aF.each(function () {
                                var a2 = a(this);
                                k(a2) ? a2.css("max-height", "100%") : a2.css("max-width", "100%")
                            })
                        }
                    })
                } else {
                    aj()
                }
            }
            function aj() {
                aO.removeClass("hidden");
                return;
                var a2 = aO.filter(".hidden").eq(0);
                setTimeout(function () {
                    a2.removeClass("hidden");
                    if (a2.length) {
                        aj()
                    }
                }, 70)
            }
            function L(a3) {
                var a2 = a3.find("img");
                var a4 = aU.filter(".active");
                var a3 = a4.find('img[src="' + a2.attr("src") + '"]').parent("a");
                x.find("a").removeClass("active");
                a3.addClass("active");
                if (a4.find("a.active").length == 0) {
                    a4.find("a:first-child").eq(0).addClass("active")
                }
                au(a3)
            }
            function C(a2) {
                aU.not(a2.get(0)).removeClass("active");
                a2.addClass("active");
                ad.find(".item").removeClass("active").filter('[data-jgallery-album-title="' + a2.attr("data-jgallery-album-title") + '"]').addClass("active")
            }
            function ap() {
                aS = a('body > .overlay > [class*="imageLoader"]');
                if (a.fn.jGalleryOptions.thumbnails) {
                    if (a.fn.jGalleryOptions.thumbnailsPosition == "top") {
                        aS.css({
                            "margin-top": "+=" + x.outerHeight(true) / 2
                        })
                    }
                    if (a.fn.jGalleryOptions.thumbnailsPosition == "bottom") {
                        aS.css({
                            "margin-top": "-=" + x.outerHeight(true) / 2
                        })
                    }
                }
            }
            function z() {
                N.is(".icon-play") ? ab() : q()
            }
            function ab() {
                if (aP || aB) {
                    return
                }
                aB = true;
                N.removeClass("icon-play").addClass("icon-stop");
                Q()
            }
            function q() {
                J.pause();
                N.removeClass("icon-stop").addClass("icon-play");
                aB = false
            }
            function Q() {
                J.clear().start(aG.width(), function () {
                    J.clear();
                    a.fn.jGalleryOptions.slideshowRandom ? al() : aH()
                })
            }
            function r() {
                if (a.fn.jGalleryOptions.slideshowRandom) {
                    K.removeClass("active");
                    a.fn.jGalleryOptions.slideshowRandom = false
                } else {
                    K.addClass("active");
                    a.fn.jGalleryOptions.slideshowRandom = true
                }
            }
            if (a.fn.jGalleryOptions.autostart) {
                aR(X.find("a:has(img:first-child:last-child)").eq(0))
            } else {
                at()
            }
            c.scroll(function () {
                ax();
                a1()
            });
            c.resize(function () {
                ax();
                a1()
            });
            a("html").on({
                keydown: function (a2) {
                    if (a("#jGallery").is(":visible")) {
                        if (a2.which == 27) {
                            a2.preventDefault();
                            if (x.is(".full-screen")) {
                                az();
                                return
                            }
                            aw()
                        }
                        if (a2.which == 37) {
                            a2.preventDefault();
                            p()
                        }
                        if (a2.which == 39) {
                            a2.preventDefault();
                            P()
                        }
                    }
                },
                click: function () {
                    T()
                }
            })
        }
        return this.each(function () {
            i(a(this))
        })
    }
        ;
    a.fn.overlay = function (b) {
        var c = {
            show: false,
            hide: false,
            showLoader: false,
            hideLoader: false,
            fadeIn: true,
            fadeOut: true,
            fadeInLoader: true,
            fadeOutLoader: true
        };
        b = a.extend({}, c, b);
        this.each(function () {
            var k = a(this), l, j, i = k.is(".overlayContainer:has(.overlay)"), h = function () {
                var p = Math.max(k.offset().top, a("body, html").scrollTop())
                    , o = Math.min(k.offset().top + k.outerHeight(), a("body, html").scrollTop() + a(window).height())
                    , n = p + (o - p) / 2 - k.offset().top;
                j.css({
                    top: n + "px"
                })
            }, f = function () {
                k.children(".overlay").css({
                    width: k.outerWidth(),
                    height: k.is("body") ? a("html").outerHeight() : k.outerHeight()
                })
            }, g = function () {
                b.fadeIn ? l.fadeIn(500) : l.show()
            }, e = function () {
                b.fadeOut ? l.fadeOut(500) : l.hide()
            }, m = function () {
                b.fadeInLoader ? j.not(":visible").fadeIn(500) : j.not(":visible").show()
            }, d = function () {
                b.fadeOutLoader ? j.filter(":visible").fadeOut(500) : j.filter(":visible").hide()
            };
            a(window).scroll(function () {
                h()
            });
            a(window).resize(function () {
                h();
                f()
            });
            if (k.is("table")) {
                if (k.parent().is(".overlayContainer")) {
                    k = k.parent()
                }
            }
            if (!i) {
                if (k.is("table")) {
                    k.wrap("<div></div>");
                    k = k.parent()
                }
                k.addClass("overlayContainer");
                k.append('<div class="overlay" style="display: none;"><div class="imageLoaderPositionAbsolute" style="display: none;"></div></div>')
            }
            l = k.children(".overlay");
            j = k.find(".imageLoaderPositionAbsolute");
            l.stop(false, true);
            j.stop(false, true);
            if (b.show) {
                g()
            } else {
                if (b.hide) {
                    e()
                }
            }
            if (b.showLoader) {
                m()
            } else {
                if (b.hideLoader) {
                    d()
                }
            }
            h();
            f()
        })
    }
        ;
    a.fn.jLoader = function (c) {
        c = a.extend({
            interval: 1000,
            skip: ":not(*)",
            start: function () {
                a("body").overlay({
                    fadeIn: false,
                    fadeOut: false,
                    show: true,
                    showLoader: true
                });
                a("body").show()
            },
            success: function () {
                a("body").overlay({
                    hide: true
                })
            },
            progress: function () { }
        }, c);
        function b(d) {
            return (/https?\:\/\//.exec(d))
        }
        this.each(function () {
            var j = a(this);
            var h = a();
            var f = a();
            var i;
            var g = 0;
            function e() {
                var l = true;
                var n = 0;
                var k = 0;
                var m;
                f.each(function () {
                    n++;
                    if (a(this)[0].complete) {
                        k++
                    } else {
                        l = false
                    }
                    if (n == g) {
                        m = parseInt(k * 100 / g);
                        c.progress({
                            percent: m
                        });
                        if (l) {
                            clearTimeout(i);
                            h.remove();
                            c.success()
                        } else {
                            i = setTimeout(e, c.interval)
                        }
                    }
                })
            }
            function d() {
                var l = f.eq(0);
                var k = new XMLHttpRequest();
                k.open("GET", l.attr("src"));
                k.onprogress = function (m) {
                    if (m.lengthComputable) {
                        c.progress({
                            percent: parseInt(m.loaded / m.total * 100)
                        })
                    }
                }
                    ;
                k.onloadend = function () {
                    h.remove();
                    c.success()
                }
                    ;
                k.send()
            }
            j.append('<div class="jLoaderTmp" style="position: absolute; width: 0; height: 0; line-height: 0; font-size: 0; visibility: hidden; overflow: hidden; z-index: -1;"></div>');
            h = j.children(".jLoaderTmp:last-child");
            a(j).add(j.find("*")).each(function () {
                var k;
                if (!a(this).is(c.skip)) {
                    return
                }
                if (a(this).css("background-image") != "none") {
                    k = a(this).css("background-image");
                    if (/url/.exec(k)) {
                        k = k.replace('"', "").replace("'", "").replace(" ", "").replace("url(", "").replace(")", "");
                        h.append('<img src="' + k + '">')
                    }
                }
            });
            f = j.find("img").not(c.skip);
            if (j.is("img")) {
                if (!j.is(c.skip)) {
                    f = f.add(j)
                }
            }
            g = parseInt(f.length);
            c.start();
            g == 1 && !b(f.eq(0).attr("src")) && document.location.hostname != "" ? d() : e()
        })
    }
}
)(jQuery);
