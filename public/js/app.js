//Обновление данных в личном кабинете (кнопка Сохранить)
$('body').on('submit', '#account-form',
    function(e) {
        e.preventDefault();
        //Получение данных формы
        let formData = $(this).serialize();
        //Изменение данных личного кабинета в базе данных
        //$.get('/update', formData);
        $.ajax({
            method: 'PUT',
            data: formData,
            url: '/update',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    }
);

//Кнопка Выйти из личного кабинета
$('.logout-btn').on('click',
    function() {
        $.get('/exit', function() {
            window.location.pathname = "/login";
        });
    }
);
! function(i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function(a) {
    "use strict";
    var s, l = window.Slick || {};
    s = 0, (l = function(i, e) {
        var t, o = this;
        o.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(i), appendDots: a(i), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(i, e) { return a('<button type="button" />').text(e + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, o.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = a(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, t = a(i).data("slick") || {}, o.options = a.extend({}, o.defaults, e, t), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = a.proxy(o.autoPlay, o), o.autoPlayClear = a.proxy(o.autoPlayClear, o), o.autoPlayIterator = a.proxy(o.autoPlayIterator, o), o.changeSlide = a.proxy(o.changeSlide, o), o.clickHandler = a.proxy(o.clickHandler, o), o.selectHandler = a.proxy(o.selectHandler, o), o.setPosition = a.proxy(o.setPosition, o), o.swipeHandler = a.proxy(o.swipeHandler, o), o.dragHandler = a.proxy(o.dragHandler, o), o.keyHandler = a.proxy(o.keyHandler, o), o.instanceUid = s++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
    }).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, l.prototype.addSlide = l.prototype.slickAdd = function(i, e, t) {
        var o = this;
        if ("boolean" == typeof e) t = e, e = null;
        else if (e < 0 || e >= o.slideCount) return !1;
        o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? a(i).appendTo(o.$slideTrack) : t ? a(i).insertBefore(o.$slides.eq(e)) : a(i).insertAfter(o.$slides.eq(e)) : !0 === t ? a(i).prependTo(o.$slideTrack) : a(i).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(i, e) { a(e).attr("data-slick-index", i) }), o.$slidesCache = o.$slides, o.reinit()
    }, l.prototype.animateHeight = function() {
        var i, e = this;
        1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.animate({ height: i }, e.options.speed))
    }, l.prototype.animateSlide = function(i, e) {
        var t = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (i = -i), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({ left: i }, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({ top: i }, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), a({ animStart: o.currentLeft }).animate({ animStart: i }, { duration: o.options.speed, easing: o.options.easing, step: function(i) { i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate(" + i + "px, 0px)" : t[o.animType] = "translate(0px," + i + "px)", o.$slideTrack.css(t) }, complete: function() { e && e.call() } })) : (o.applyTransition(), i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[o.animType] = "translate3d(0px," + i + "px, 0px)", o.$slideTrack.css(t), e && setTimeout(function() { o.disableTransition(), e.call() }, o.options.speed))
    }, l.prototype.getNavTarget = function() { var i = this.options.asNavFor; return i && null !== i && (i = a(i).not(this.$slider)), i }, l.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = a(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, l.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, l.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, l.prototype.autoPlayClear = function() { this.autoPlayTimer && clearInterval(this.autoPlayTimer) }, l.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, l.prototype.buildArrows = function() { var i = this;!0 === i.options.arrows && (i.$prevArrow = a(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = a(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, l.prototype.buildDots = function() {
        var i, e, t = this;
        if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
            for (t.$slider.addClass("slick-dotted"), e = a("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) e.append(a("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = e.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active")
        }
    }, l.prototype.buildOut = function() {
        var i = this;
        i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, e) { a(e).attr("data-slick-index", i).data("originalStyling", a(e).attr("style") || "") }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? a('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), a("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable")
    }, l.prototype.buildRows = function() {
        var i, e, t, o = this,
            s = document.createDocumentFragment(),
            n = o.$slider.children();
        if (0 < o.options.rows) {
            for (t = o.options.slidesPerRow * o.options.rows, e = Math.ceil(n.length / t), i = 0; i < e; i++) {
                for (var l = document.createElement("div"), r = 0; r < o.options.rows; r++) {
                    for (var d = document.createElement("div"), a = 0; a < o.options.slidesPerRow; a++) {
                        var c = i * t + (r * o.options.slidesPerRow + a);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    l.appendChild(d)
                }
                s.appendChild(l)
            }
            o.$slider.empty().append(s), o.$slider.children().children().children().css({ width: 100 / o.options.slidesPerRow + "%", display: "inline-block" })
        }
    }, l.prototype.checkResponsive = function(i, e) {
        var t, o, s, n = this,
            l = !1,
            r = n.$slider.width(),
            d = window.innerWidth || a(window).width();
        if ("window" === n.respondTo ? s = d : "slider" === n.respondTo ? s = r : "min" === n.respondTo && (s = Math.min(d, r)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            for (t in o = null, n.breakpoints) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[t] && (o = n.breakpoints[t]) : s > n.breakpoints[t] && (o = n.breakpoints[t]));
            null !== o ? null !== n.activeBreakpoint && o === n.activeBreakpoint && !e || (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = a.extend({}, n.originalSettings, n.breakpointSettings[o]), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), l = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i), l = o), i || !1 === l || n.$slider.trigger("breakpoint", [n, l])
        }
    }, l.prototype.changeSlide = function(i, e) {
        var t, o, s = this,
            n = a(i.currentTarget);
        switch (n.is("a") && i.preventDefault(), n.is("li") || (n = n.closest("li")), t = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, i.data.message) {
            case "previous":
                o = 0 == t ? s.options.slidesToScroll : s.options.slidesToShow - t, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, e);
                break;
            case "next":
                o = 0 == t ? s.options.slidesToScroll : t, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, e);
                break;
            case "index":
                var l = 0 === i.data.index ? 0 : i.data.index || n.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, e), n.children().trigger("focus");
                break;
            default:
                return
        }
    }, l.prototype.checkNavigable = function(i) {
        var e = this.getNavigableIndexes(),
            t = 0;
        if (i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) { i = t; break }
                t = e[o]
            }
        return i
    }, l.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots && null !== i.$dots && (a("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", a.proxy(i.interrupt, i, !0)).off("mouseleave.slick", a.proxy(i.interrupt, i, !1)), !0 === i.options.accessibility && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), a(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().off("click.slick", i.selectHandler), a(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), a(window).off("resize.slick.slick-" + i.instanceUid, i.resize), a("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), a(window).off("load.slick.slick-" + i.instanceUid, i.setPosition)
    }, l.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", a.proxy(i.interrupt, i, !1))
    }, l.prototype.cleanUpRows = function() {
        var i;
        0 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(i))
    }, l.prototype.clickHandler = function(i) {!1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, l.prototype.destroy = function(i) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), a(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { a(this).attr("style", a(this).data("originalStyling")) }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, i || e.$slider.trigger("destroy", [e])
    }, l.prototype.disableTransition = function(i) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(i).css(e)
    }, l.prototype.fadeSlide = function(i, e) { var t = this;!1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function() { t.disableTransition(i), e.call() }, t.options.speed)) }, l.prototype.fadeSlideOut = function(i) { var e = this;!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, l.prototype.filterSlides = l.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, l.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var e = a(this);
            setTimeout(function() { t.options.pauseOnFocus && (t.focussed = e.is(":focus"), t.autoPlay()) }, 0)
        })
    }, l.prototype.getCurrent = l.prototype.slickCurrentSlide = function() { return this.currentSlide }, l.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, l.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            l = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), l = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (l = i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, l = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (l = n.slideOffset = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + l, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, l.prototype.getOption = l.prototype.slickGetOption = function(i) { return this.options[i] }, l.prototype.getNavigableIndexes = function() { for (var i = this, e = 0, t = 0, o = [], s = !1 === i.options.infinite ? i.slideCount : (e = -1 * i.options.slidesToScroll, t = -1 * i.options.slidesToScroll, 2 * i.slideCount); e < s;) o.push(e), e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; return o }, l.prototype.getSlick = function() { return this }, l.prototype.getSlideCount = function() {
        var t, o = this,
            s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0;
        return !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(i, e) { if (e.offsetLeft - s + a(e).outerWidth() / 2 > -1 * o.swipeLeft) return t = e, !1 }), Math.abs(a(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, l.prototype.goTo = l.prototype.slickGoTo = function(i, e) { this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, l.prototype.init = function(i) {
        var e = this;
        a(e.$slider).hasClass("slick-initialized") || (a(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), i && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, l.prototype.initADA = function() {
        var o = this,
            t = Math.ceil(o.slideCount / o.options.slidesToShow),
            s = o.getNavigableIndexes().filter(function(i) { return 0 <= i && i < o.slideCount });
        o.$slides.add(o.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== o.$dots && (o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function(i) {
            var e, t = s.indexOf(i);
            a(this).attr({ role: "tabpanel", id: "slick-slide" + o.instanceUid + i, tabindex: -1 }), -1 !== t && (e = "slick-slide-control" + o.instanceUid + t, a("#" + e).length && a(this).attr({ "aria-describedby": e }))
        }), o.$dots.attr("role", "tablist").find("li").each(function(i) {
            var e = s[i];
            a(this).attr({ role: "presentation" }), a(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + o.instanceUid + i, "aria-controls": "slick-slide" + o.instanceUid + e, "aria-label": i + 1 + " of " + t, "aria-selected": null, tabindex: "-1" })
        }).eq(o.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
        for (var i = o.currentSlide, e = i + o.options.slidesToShow; i < e; i++) o.options.focusOnChange ? o.$slides.eq(i).attr({ tabindex: "0" }) : o.$slides.eq(i).removeAttr("tabindex");
        o.activateADA()
    }, l.prototype.initArrowEvents = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, l.prototype.initDotEvents = function() { var i = this;!0 === i.options.dots && i.slideCount > i.options.slidesToShow && (a("li", i.$dots).on("click.slick", { message: "index" }, i.changeSlide), !0 === i.options.accessibility && i.$dots.on("keydown.slick", i.keyHandler)), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && i.slideCount > i.options.slidesToShow && a("li", i.$dots).on("mouseenter.slick", a.proxy(i.interrupt, i, !0)).on("mouseleave.slick", a.proxy(i.interrupt, i, !1)) }, l.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover && (i.$list.on("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", a.proxy(i.interrupt, i, !1)))
    }, l.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", { action: "start" }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", { action: "move" }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", { action: "end" }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), a(document).on(i.visibilityChange, a.proxy(i.visibility, i)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), a(window).on("orientationchange.slick.slick-" + i.instanceUid, a.proxy(i.orientationChange, i)), a(window).on("resize.slick.slick-" + i.instanceUid, a.proxy(i.resize, i)), a("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), a(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), a(i.setPosition)
    }, l.prototype.initUI = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show() }, l.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }))
    }, l.prototype.lazyLoad = function() {
        var i, e, t, n = this;

        function o(i) {
            a("img[data-lazy]", i).each(function() {
                var i = a(this),
                    e = a(this).attr("data-lazy"),
                    t = a(this).attr("data-srcset"),
                    o = a(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    s = document.createElement("img");
                s.onload = function() { i.animate({ opacity: 0 }, 100, function() { t && (i.attr("srcset", t), o && i.attr("sizes", o)), i.attr("src", e).animate({ opacity: 1 }, 200, function() { i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, i, e]) }) }, s.onerror = function() { i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, i, e]) }, s.src = e
            })
        }
        if (!0 === n.options.centerMode ? t = !0 === n.options.infinite ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, t = Math.ceil(e + n.options.slidesToShow), !0 === n.options.fade && (0 < e && e--, t <= n.slideCount && t++)), i = n.$slider.find(".slick-slide").slice(e, t), "anticipated" === n.options.lazyLoad)
            for (var s = e - 1, l = t, r = n.$slider.find(".slick-slide"), d = 0; d < n.options.slidesToScroll; d++) s < 0 && (s = n.slideCount - 1), i = (i = i.add(r.eq(s))).add(r.eq(l)), s--, l++;
        o(i), n.slideCount <= n.options.slidesToShow ? o(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? o(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && o(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, l.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, l.prototype.next = l.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, l.prototype.orientationChange = function() { this.checkResponsive(), this.setPosition() }, l.prototype.pause = l.prototype.slickPause = function() { this.autoPlayClear(), this.paused = !0 }, l.prototype.play = l.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, l.prototype.postSlide = function(i) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && a(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
    }, l.prototype.prev = l.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, l.prototype.preventDefault = function(i) { i.preventDefault() }, l.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var e, t, o, s, n, l = this,
            r = a("img[data-lazy]", l.$slider);
        r.length ? (e = r.first(), t = e.attr("data-lazy"), o = e.attr("data-srcset"), s = e.attr("data-sizes") || l.$slider.attr("data-sizes"), (n = document.createElement("img")).onload = function() { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, e, t]), l.progressiveLazyLoad() }, n.onerror = function() { i < 3 ? setTimeout(function() { l.progressiveLazyLoad(i + 1) }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, e, t]), l.progressiveLazyLoad()) }, n.src = t) : l.$slider.trigger("allImagesLoaded", [l])
    }, l.prototype.refresh = function(i) {
        var e, t = this,
            o = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > o && (t.currentSlide = o), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), e = t.currentSlide, t.destroy(!0), a.extend(t, t.initials, { currentSlide: e }), t.init(), i || t.changeSlide({ data: { message: "index", index: e } }, !1)
    }, l.prototype.registerBreakpoints = function() {
        var i, e, t, o = this,
            s = o.options.responsive || null;
        if ("array" === a.type(s) && s.length) {
            for (i in o.respondTo = o.options.respondTo || "window", s)
                if (t = o.breakpoints.length - 1, s.hasOwnProperty(i)) {
                    for (e = s[i].breakpoint; 0 <= t;) o.breakpoints[t] && o.breakpoints[t] === e && o.breakpoints.splice(t, 1), t--;
                    o.breakpoints.push(e), o.breakpointSettings[e] = s[i].settings
                }
            o.breakpoints.sort(function(i, e) { return o.options.mobileFirst ? i - e : e - i })
        }
    }, l.prototype.reinit = function() {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
    }, l.prototype.resize = function() {
        var i = this;
        a(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() { i.windowWidth = a(window).width(), i.checkResponsive(), i.unslicked || i.setPosition() }, 50))
    }, l.prototype.removeSlide = l.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, l.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + e + ", " + t + ")" : s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)
    }, l.prototype.setDimensions = function() { var i = this;!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, l.prototype.setFade = function() {
        var t, o = this;
        o.$slides.each(function(i, e) { t = o.slideWidth * i * -1, !0 === o.options.rtl ? a(e).css({ position: "relative", right: t, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: t, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 }) }), o.$slides.eq(o.currentSlide).css({ zIndex: o.options.zIndex - 1, opacity: 1 })
    }, l.prototype.setHeight = function() {
        var i, e = this;
        1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.css("height", i))
    }, l.prototype.setOption = l.prototype.slickSetOption = function() {
        var i, e, t, o, s, n = this,
            l = !1;
        if ("object" === a.type(arguments[0]) ? (t = arguments[0], l = arguments[1], s = "multiple") : "string" === a.type(arguments[0]) && (o = arguments[1], l = arguments[2], "responsive" === (t = arguments[0]) && "array" === a.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) n.options[t] = o;
        else if ("multiple" === s) a.each(t, function(i, e) { n.options[i] = e });
        else if ("responsive" === s)
            for (e in o)
                if ("array" !== a.type(n.options.responsive)) n.options.responsive = [o[e]];
                else {
                    for (i = n.options.responsive.length - 1; 0 <= i;) n.options.responsive[i].breakpoint === o[e].breakpoint && n.options.responsive.splice(i, 1), i--;
                    n.options.responsive.push(o[e])
                }
        l && (n.unload(), n.reinit())
    }, l.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, l.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, l.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this,
            l = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode ? (o = n.options.slidesToShow % 2 == 0 ? 1 : 0, s = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (s <= i && i <= n.slideCount - 1 - s ? n.$slides.slice(i - s + o, i + s + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = n.options.slidesToShow + i, l.slice(e - s + 1 + o, e + s + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? l.eq(l.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && l.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : 0 <= i && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : l.length <= n.options.slidesToShow ? l.addClass("slick-active").attr("aria-hidden", "false") : (t = n.slideCount % n.options.slidesToShow, e = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? l.slice(e - (n.options.slidesToShow - t), e + t).addClass("slick-active").attr("aria-hidden", "false") : l.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, l.prototype.setupInfinite = function() {
        var i, e, t, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e = null, o.slideCount > o.options.slidesToShow)) {
            for (t = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount; i > o.slideCount - t; --i) e = i - 1, a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < t + o.slideCount; i += 1) e = i, a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() { a(this).attr("id", "") })
        }
    }, l.prototype.interrupt = function(i) { i || this.autoPlay(), this.interrupted = i }, l.prototype.selectHandler = function(i) {
        var e = a(i.target).is(".slick-slide") ? a(i.target) : a(i.target).parents(".slick-slide"),
            t = (t = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(t, !1, !0) : this.slideHandler(t)
    }, l.prototype.slideHandler = function(i, e, t) {
        var o, s, n, l, r, d, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, r = a.getLeft(o), l = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? l : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(l, function() { a.postSlide(o) }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(l, function() { a.postSlide(o) }) : a.postSlide(o));
        else { if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (d = (d = a.getNavTarget()).slick("getSlick")).slideCount <= d.options.slidesToShow && d.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight();!0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() { a.postSlide(s) }) : a.postSlide(s) }
    }, l.prototype.startLoad = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, l.prototype.swipeDirection = function() {
        var i = this,
            e = i.touchObject.startX - i.touchObject.curX,
            t = i.touchObject.startY - i.touchObject.curY,
            o = Math.atan2(t, e),
            s = Math.round(180 * o / Math.PI);
        return s < 0 && (s = 360 - Math.abs(s)), s <= 45 && 0 <= s || s <= 360 && 315 <= s ? !1 === i.options.rtl ? "left" : "right" : 135 <= s && s <= 225 ? !1 === i.options.rtl ? "right" : "left" : !0 === i.options.verticalSwiping ? 35 <= s && s <= 135 ? "down" : "up" : "vertical"
    }, l.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1;
        if (o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, l.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, l.prototype.swipeMove = function(i) {
        var e, t, o, s, n, l = this,
            r = void 0 !== i.originalEvent ? i.originalEvent.touches : null;
        return !(!l.dragging || l.scrolling || r && 1 !== r.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== r ? r[0].pageX : i.clientX, l.touchObject.curY = void 0 !== r ? r[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && 4 < n ? !(l.scrolling = !0) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = n), t = l.swipeDirection(), void 0 !== i.originalEvent && 4 < l.touchObject.swipeLength && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, (l.touchObject.edgeHit = !1) === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, l.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, l.prototype.unfilterSlides = l.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, l.prototype.unload = function() {
        var i = this;
        a(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, l.prototype.unslick = function(i) { this.$slider.trigger("unslick", [this, i]), this.destroy() }, l.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2);
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, l.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, l.prototype.visibility = function() { this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1) }, a.fn.slick = function() {
        for (var i, e = this, t = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = e.length, n = 0; n < s; n++)
            if ("object" == typeof t || void 0 === t ? e[n].slick = new l(e[n], t) : i = e[n].slick[t].apply(e[n].slick, o), void 0 !== i) return i;
        return e
    }
}), $(function() {
    $(".smooth__link").on("click", function(i) { var e; "" !== this.hash && (i.preventDefault(), e = this.hash, $("html, body").animate({ scrollTop: $(e).offset().top }, 800, function() { window.location.hash = e })) }), $(".game-btn").click(function() { $(".game-btn-pressed").length && $(".game-btn-pressed").removeClass("game-btn-pressed").addClass("game-btn"), $(this).removeClass("game-btn").addClass("game-btn-pressed") }), $(".card__btn").click(function() { $(".popup").removeClass("popup").addClass("popup-visible") }), $(".popup__close").click(function() { $(".popup-visible").removeClass("popup-visible").addClass("popup") }), $("#stock").slick({ arrows: !1, dots: !1, speed: 800, appendArrows: ".slider__controls", slidesToShow: 1, slidesToScroll: 1, autoplay: !0 }), $("#prev").on("click", function(i) { i.preventDefault(), $("#stock").slick("slickPrev") }), $("#next").on("click", function(i) { i.preventDefault(), $("#stock").slick("slickNext") });
    var t, o, s, n, l = $(".stock");
    l.length && ((s = document.createElement("div")).classList.add("slider__counter"), n = function(i, e) { t = i.slickCurrentSlide() + 1, o = i.slideCount, $(s).text(t + "/" + o) }, l.on("init", function(i, e) { i.preventDefault(), l.append(s), n(e) }), l.on("afterChange", function(i, e, t) { i.preventDefault(), n(e) }), l.slick()), $(".card__btn").on("click", function(e) {
        $(".popup").css({ visibility: "visible", opacity: "1" });
        $(".popup").removeClass("popup").addClass("popup-visible");
        let categ = e.target.id;
        let data = "categ=" + categ;

        $('.popup__content').load('/models/consolesProductsModel.php', data);

    }), $(".popup__close").on("click", function() { $(".popup").css({ visibility: "hidden", opacity: "0" }) })
});
//Кнопка Добавить в корзину

$('body').on('click', '.add-cart',
    function(e) {

        //Получение id товара
        let reg = /(\d+-\d+)/;
        let add_prod = e.target.id.match(reg);

        //Добавление товара в массив корзины, вычисление общей цены
        let data = add_prod[0];

        $.ajax({
            method: 'POST',
            url: '/add-cart/' + data,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        //Смена кнопки с Добавить в корзину на Перейти в корзину
        $(e.target).removeClass('displayblock').addClass('displaynone');
        $(e.target).next('.go-cart').removeClass('displaynone').addClass('displayblock');
    }
);

//Кнопка Удалить из корзины

$('body').on('click', '.del-cart',
    function(e) {

        //Получение id товара
        let reg = /(\d+-\d+)/;
        let del_prod = e.target.id.match(reg);
        let data = del_prod[0];

        //Удаление товара из массива корзины
        $.ajax({
            method: 'DELETE',
            dataType: 'json',
            url: '/del-cart/' + data,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(data) {

                //Если в корзине нет товаров, вывести текст
                if (data.total_count == 0) {
                    $('.bucket__content-cards').text('Корзина пуста');
                    $('.bucket__final__sum').remove();
                }

                //Удаление строки товара из корзины
                $(e.target).parent().remove();



                //Изменение вывод измененного числа товаров и цены
                let total_count = 'Товары: ' + data.total_count;
                $('.goods').text(total_count);
                let price = '<b>' + data.total_price + '&#8381;</b>';
                $('.goods__price').html(price);



            }
        });
    }
);

//Кнопка Перейти в корзину
/*
$('body').on('click', '.go-cart',
    function() {
        window.location.href = "/controllers/pageController.php?page_id=cart";
    }
);
*/
//Кнопки перехода на разделы главной страницы из дочерних страниц
$('.nav__sega').on('click', function(e) {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#sega';
    }
});
$('.nav__nintendo').on('click', function() {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#nintendo';
    }
});
$('.nav__games').on('click', function() {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#games';
    }
});
$('.nav__about').on('click', function() {
    if (window.location.pathname != '/') {
        e.preventDefault();
        window.location.pathname = '/#about';
    }
});
//Кнопка Войти в личный кабинет

$('#signin-form').on('submit',
    function(e) {

        e.preventDefault();

        //Получение данных формы
        let formData = $(this).serialize();

        //Вход в личный кабинет, либо выдача ошибки
        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: '/login-valid',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            statusCode: {
                //Вывод ошибки на экран
                422: function(data) {
                    console.log(data);
                    if (data.responseJSON.email != null) {
                        $('.signin__email').text(data.responseJSON.email);
                        $('.signin__email').css('color', '#DF2121');
                        $('.signin__email').next().css('border-color', '#DF2121');
                    }
                    if (data.responseJSON.password != null) {
                        $('.signin__passw').text(data.responseJSON.password);
                        $('.signin__passw').css('color', '#DF2121');
                        $('.signin__passw').next().css('border-color', '#DF2121');
                    }

                },
                //Переход в личный кабинет, если аутентификация успешна
                200: function() {
                    window.location.pathname = "/account";
                }
            }
        });

    }
);

//Изменение подписей полей ввода при наборе текста после отображения ошибки

$('.email__input').on('input',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Ваш Email');
    }
);

$('.email__input').on('click',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Ваш Email');
    }
);

$('.password__input').on('input',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Введите пароль');
    }
);

$('.password__input').on('click',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Введите пароль');
    }
);
//Кнопка Оформить заказ
$('.sum-btn').on("click", function() {
    let formData = $('#bucket-form').serialize();
    $.ajax({
        method: 'PUT',
        data: formData,
        url: '/make-order',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        statusCode: {
            200: function() {
                window.location.pathname = "/";
            }
        }

    });
});
//Вывод карточек товаров с игровыми приставками в модальное окно

$(".card__btn").on("click",
    function(e) {

        //Получение id категории товара
        let data = e.target.id;

        //Загрузка товаров в модальное окно из базы данных
        $.getJSON('/consoles/' + data, function(console) {

            let content = '<div class="popup__main-text"><span class="popup__console-name">' + console[0].category_name + '</span>&nbsp;&nbsp;&nbsp;&nbsp;Товары в наличии</div>';

            $.each(console, function() {

                if (this.cart == 0) {
                    var display_add = ' displayblock';
                    var display_go = ' displaynone';


                }
                if (this.cart == 1) {
                    var display_add = ' displaynone';
                    var display_go = ' displayblock';
                }

                content = content + '<div class="popup__card"><div class="popup__img"><img src="/images/consoles/' + this.image + '" alt="\" class="popup-img"></div><div class="popup__title"><h3>' + this.name + '</h3></div><div class="popup__text">Состояние:&nbsp;' + this.condition_rating + '<br>' + this.description + '<br> Комплект:&nbsp;' + this.bundle + '<br> Регион:&nbsp;' + this.region + '<br> Цена:&nbsp;' + this.price + ' ₽</div><button type="button" class="btn popap-btn add-cart' + display_add + '" id="add_' + this.section_id + '-' + this.product_id + '">Добавить в Корзину</button><a href="/cart" class="btn popap-btn go-cart' + display_go + '">Перейти в корзину</a></div>';
            });
            $('.popup__cards').html(content);

        })
    }
);


//Вывод карточек товаров с играми на главную страницу при ее загрузке
$(window).on('load',
    function() {

        //Выбор категории товаров Игры для Sega Saturn
        let data = "2-7";

        //Загрузка карточек товаров с играми на главную страницу
        $.getJSON('/games/' + data, function(game) {
            let content = '';

            $.each(game, function() {

                if (this.cart == 0) {
                    var display_add = ' displayblock';
                    var display_go = ' displaynone';


                }
                if (this.cart == 1) {
                    var display_add = ' displaynone';
                    var display_go = ' displayblock';
                }

                content = content + '<div class="game__card"><div class="game__img"><img src="/images/games/' + this.image + '" alt="" class="game-img"></div><div class="game__title">' + this.name + '</div><button class="btn game-btn-buy add-cart' + display_add + '" id="add_' + this.section_id + '-' + this.product_id + '">В корзину</button><a href="/cart" class="btn game-btn-buy go-cart' + display_go + '">&nbsp;Перейти<br> в корзину</a></div>';

            });

            $('.tabs__content').html(content);
        });
    }

);


//Вывод карточек товаров с играми на главную страницу при переключении табов
$(".game-btn").on("click",
    function(e) {

        //Получение id категории товара
        let data = e.target.id

        //Загрузка карточек товаров с играми на главную страницу
        $.getJSON('/games/' + data, function(game) {
            let content = '';
            $.each(game, function() {

                if (this.cart == 0) {
                    var display_add = ' displayblock';
                    var display_go = ' displaynone';


                }
                if (this.cart == 1) {
                    var display_add = ' displaynone';
                    var display_go = ' displayblock';
                }

                content = content + '<div class="game__card"><div class="game__img"><img src="/images/games/' + this.image + '" alt="" class="game-img"></div><div class="game__title">' + this.name + '</div><button class="btn game-btn-buy add-cart' + display_add + '" id="add_' + this.section_id + '-' + this.product_id + '">В корзину</button><a href="/cart" class="btn game-btn-buy go-cart' + display_go + '">&nbsp;Перейти<br> в корзину</a></div>';

            });
            $('.tabs__content').html(content);
        });
    });
//Кнопка Зарегистрироваться

$('#signup-form').on('submit',
    function(e) {

        e.preventDefault();

        //Получение данных формы
        let formData = $(this).serialize();

        //Регистрация, либо выдача сообщения об ошибке
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: '/reg-valid',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            statusCode: {
                //Вывод ошибки на экран
                422: function(data) {
                    console.log(data.responseJSON.email);
                    if (data.responseJSON.email != null) {
                        $('.signup__email').text(data.responseJSON.email);
                        $('.signup__email').css('color', '#DF2121');
                        $('.signup__email').next().css('border-color', '#DF2121');
                    }
                    if (data.responseJSON.password != null) {
                        $('.signup__passw1').text(data.responseJSON.password_rep);
                        $('.signup__passw1').css('color', '#DF2121');
                        $('.signup__passw1').next().css('border-color', '#DF2121');
                    }
                    if (data.responseJSON.password_rep != null) {
                        $('.signup__passw2').text(data.responseJSON.password_rep);
                        $('.signup__passw2').css('color', '#DF2121');
                        $('.signup__passw2').next().css('border-color', '#DF2121');
                    }

                },
                //Переход в личный кабинет, если аутентификация успешна
                200: function() {
                    window.location.pathname = "/";
                }

            }

        });

    }
);

//Изменение подписей полей ввода при наборе текста после отображения ошибки

$('.password-rep__input').on('input',
    function() {
        $(this).css('border-color', '#5E6572');
        $(this).prev().css('color', '#5E6572');
        $(this).prev().text('Повторите пароль');
    }
);