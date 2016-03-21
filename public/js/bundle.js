(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
      if (void 0 !== a.style[c]) return { end: b[c] };
    }return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      } });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.6", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);if (i.length) {
          var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function g() {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;if (!a) {
      var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
    }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide());
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
        g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~ ~(1e6 * Math.random());
    } while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.6", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function c(b) {
    this.element = a(b);
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);

},{}],2:[function(require,module,exports){
'use strict';

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#_token').getAttribute('value');

new Vue({
	el: '#app',

	data: {
		messages: {},
		newMessage: { name: '', message: '' },
		submitted: false
	},

	computed: {
		errors: function errors() {
			for (var key in this.newMessage) {
				if (!this.newMessage[key]) return true;
			}
			return false;
		}
	},

	ready: function ready() {
		this.fetchMessages();
	},

	methods: {
		fetchMessages: function fetchMessages() {
			this.$http.get('api/messages').then(function (messages) {
				this.messages = messages.data;
			});
		},

		onSubmitForm: function onSubmitForm(e) {
			e.preventDefault();
			var message = this.newMessage;
			this.messages.push(message);
			this.newMessage = { name: '', message: '' };
			this.submitted = true;
			//send POST ajax request
			this.$http.post('api/messages', message);
		}
	}
});

},{}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * vue-validator v2.0.0-beta.3
 * (c) 2016 kazuya kawaguchi
 * Released under the MIT License.
 */
(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.VueValidator = factory();
})(undefined, function () {
  'use strict';

  var babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers;

  /**
   * Utilties
   */

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * warn
   *
   * @param {String} msg
   * @param {Error} [err]
   *
   */

  function warn(msg, err) {
    if (window.console) {
      console.warn('[vue-validator] ' + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }

  /**
   * empty
   *
   * @param {Array|Object} target
   * @return {Boolean}
   */

  function empty(target) {
    if (target === null || target === undefined) {
      return true;
    }

    if (Array.isArray(target)) {
      if (target.length > 0) {
        return false;
      }
      if (target.length === 0) {
        return true;
      }
    } else if (exports$1.Vue.util.isPlainObject(target)) {
      for (var key in target) {
        if (exports$1.Vue.util.hasOwn(target, key)) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * each
   *
   * @param {Array|Object} target
   * @param {Function} iterator
   * @param {Object} [context]
   */

  function each(target, iterator, context) {
    if (Array.isArray(target)) {
      for (var i = 0; i < target.length; i++) {
        iterator.call(context || target[i], target[i], i);
      }
    } else if (exports$1.Vue.util.isPlainObject(target)) {
      var hasOwn = exports$1.Vue.util.hasOwn;
      for (var key in target) {
        if (hasOwn(target, key)) {
          iterator.call(context || target[key], target[key], key);
        }
      }
    }
  }

  /**
   * pull
   *
   * @param {Array} arr
   * @param {Object} item
   * @return {Object|null}
   */

  function pull(arr, item) {
    var index = exports$1.Vue.util.indexOf(arr, item);
    return ~index ? arr.splice(index, 1) : null;
  }

  /**
   * trigger
   *
   * @param {Element} el
   * @param {String} event
   * @param {Object} [args]
   */

  function trigger(el, event, args) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(event, true, false);

    if (args) {
      for (var prop in args) {
        e[prop] = args[prop];
      }
    }

    // Due to Firefox bug, events fired on disabled
    // non-attached form controls can throw errors
    try {
      el.dispatchEvent(e);
    } catch (e) {}
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Fundamental validate functions
   */

  /**
   * required
   *
   * This function validate whether the value has been filled out.
   *
   * @param {*} val
   * @return {Boolean}
   */

  function required(val) {
    if (Array.isArray(val)) {
      if (val.length !== 0) {
        var valid = true;
        for (var i = 0, l = val.length; i < l; i++) {
          valid = required(val[i]);
          if (!valid) {
            break;
          }
        }
        return valid;
      } else {
        return false;
      }
    } else if (typeof val === 'number' || typeof val === 'function') {
      return true;
    } else if (typeof val === 'boolean') {
      return val;
    } else if (typeof val === 'string') {
      return val.length > 0;
    } else if (val !== null && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object') {
      return Object.keys(val).length > 0;
    } else if (val === null || val === undefined) {
      return false;
    }
  }

  /**
   * pattern
   *
   * This function validate whether the value matches the regex pattern
   *
   * @param val
   * @param {String} pat
   * @return {Boolean}
   */

  function pattern(val, pat) {
    if (typeof pat !== 'string') {
      return false;
    }

    var match = pat.match(new RegExp('^/(.*?)/([gimy]*)$'));
    if (!match) {
      return false;
    }

    return new RegExp(match[1], match[2]).test(val);
  }

  /**
   * minlength
   *
   * This function validate whether the minimum length.
   *
   * @param {String|Array} val
   * @param {String|Number} min
   * @return {Boolean}
   */

  function minlength(val, min) {
    if (typeof val === 'string') {
      return isInteger(min, 10) && val.length >= parseInt(min, 10);
    } else if (Array.isArray(val)) {
      return val.length >= parseInt(min, 10);
    } else {
      return false;
    }
  }

  /**
   * maxlength
   *
   * This function validate whether the maximum length.
   *
   * @param {String|Array} val
   * @param {String|Number} max
   * @return {Boolean}
   */

  function maxlength(val, max) {
    if (typeof val === 'string') {
      return isInteger(max, 10) && val.length <= parseInt(max, 10);
    } else if (Array.isArray(val)) {
      return val.length <= parseInt(max, 10);
    } else {
      return false;
    }
  }

  /**
   * min
   *
   * This function validate whether the minimum value of the numberable value.
   *
   * @param {*} val
   * @param {*} arg minimum
   * @return {Boolean}
   */

  function min(val, arg) {
    return !isNaN(+val) && !isNaN(+arg) && +val >= +arg;
  }

  /**
   * max
   *
   * This function validate whether the maximum value of the numberable value.
   *
   * @param {*} val
   * @param {*} arg maximum
   * @return {Boolean}
   */

  function max(val, arg) {
    return !isNaN(+val) && !isNaN(+arg) && +val <= +arg;
  }

  /**
   * isInteger
   *
   * This function check whether the value of the string is integer.
   *
   * @param {String} val
   * @return {Boolean}
   * @private
   */

  function isInteger(val) {
    return (/^(-?[1-9]\d*|0)$/.test(val)
    );
  }

  var validators = Object.freeze({
    required: required,
    pattern: pattern,
    minlength: minlength,
    maxlength: maxlength,
    min: min,
    max: max
  });

  function Asset(Vue) {
    var extend = Vue.util.extend;

    // set global validators asset
    var assets = Object.create(null);
    extend(assets, validators);
    Vue.options.validators = assets;

    // set option merge strategy
    var strats = Vue.config.optionMergeStrategies;
    if (strats) {
      strats.validators = function (parent, child) {
        if (!child) {
          return parent;
        }
        if (!parent) {
          return child;
        }
        var ret = Object.create(null);
        extend(ret, parent);
        for (var key in child) {
          ret[key] = child[key];
        }
        return ret;
      };
    }

    /**
     * Register or retrieve a global validator definition.
     *
     * @param {String} id
     * @param {Function} definition
     */

    Vue.validator = function (id, definition) {
      if (!definition) {
        return Vue.options['validators'][id];
      } else {
        Vue.options['validators'][id] = definition;
      }
    };
  }

  function Override(Vue) {
    // override _init
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (!this._validatorMaps) {
        this._validatorMaps = Object.create(null);
      }
      init.call(this, options);
    };

    // override _destroy
    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      destroy.apply(this, arguments);
      this._validatorMaps = null;
    };
  }

  function Validate(Vue) {
    var _ = Vue.util;
    var vIf = Vue.directive('if');
    var FragmentFactory = Vue.FragmentFactory;
    var parseDirective = Vue.parsers.directive.parseDirective;
    var REGEX_FILTER = /[^|]\|[^|]/;

    // register `v-validate` as terminal directive
    Vue.compiler.terminalDirectives.push('validate');

    /**
     * `v-validate` directive
     */

    Vue.directive('validate', {
      priority: vIf.priority + 1,

      params: ['group', 'field', 'detect-blur', 'detect-change', 'initial'],

      paramWatchers: {
        detectBlur: function detectBlur(val, old) {
          this.validation.detectBlur = this.isDetectBlur(val);
          this.validator.validate(this.field);
        },
        detectChange: function detectChange(val, old) {
          this.validation.detectChange = this.isDetectChange(val);
          this.validator.validate(this.field);
        }
      },

      bind: function bind() {
        if (this.el.__vue__) {
          warn('v-validate="' + this.expression + '" cannot be ' + 'used on an instance root element.');
          return;
        }

        var validatorName = this.vm.$options._validator;
        if (!validatorName) {
          warn('v-validate need to use into validator element directive: ' + '(e.g. <validator name="validator">' + '<input type="text" v-validate:field1="[\'required\']">' + '</validator>).');
          return;
        }

        var raw = this.el.getAttribute('v-model');

        var _parseModelRaw = this.parseModelRaw(raw);

        var model = _parseModelRaw.model;
        var filters = _parseModelRaw.filters;

        this.model = model;

        this.setupFragment();
        this.setupValidate(validatorName, model, filters);
        this.listen();
      },
      update: function update(value, old) {
        if (!value) {
          return;
        }

        if (_.isPlainObject(value)) {
          this.handleObject(value);
        } else if (Array.isArray(value)) {
          this.handleArray(value);
        }

        this.validator.validate({ field: this.field, noopable: this._initialNoopValidation });
        if (this._initialNoopValidation) {
          this._initialNoopValidation = null;
        }
      },
      unbind: function unbind() {
        this.unlisten();
        this.teardownValidate();
        this.teardownFragment();

        this.model = null;
      },
      parseModelRaw: function parseModelRaw(raw) {
        if (REGEX_FILTER.test(raw)) {
          var parsed = parseDirective(raw);
          return { model: parsed.expression, filters: parsed.filters };
        } else {
          return { model: raw };
        }
      },
      setupValidate: function setupValidate(name, model, filters) {
        var params = this.params;
        var validator = this.validator = this.vm._validatorMaps[name];

        this.field = _.camelize(this.arg ? this.arg : params.field);

        this.validation = validator.manageValidation(this.field, model, this.vm, this.frag.node, this._scope, filters, this.isDetectBlur(params.detectBlur), this.isDetectChange(params.detectChange));

        params.group && validator.addGroupValidation(params.group, this.field);

        this._initialNoopValidation = this.isInitialNoopValidation(params.initial);
      },
      listen: function listen() {
        var model = this.model;
        var validation = this.validation;
        var el = this.frag.node;

        this.onBlur = _.bind(validation.listener, validation);
        _.on(el, 'blur', this.onBlur);
        if ((el.type === 'radio' || el.tagName === 'SELECT') && !model) {
          this.onChange = _.bind(validation.listener, validation);
          _.on(el, 'change', this.onChange);
        } else if (el.type === 'checkbox') {
          if (!model) {
            this.onChange = _.bind(validation.listener, validation);
            _.on(el, 'change', this.onChange);
          } else {
            this.onClick = _.bind(validation.listener, validation);
            _.on(el, 'click', this.onClick);
          }
        } else {
          if (!model) {
            this.onInput = _.bind(validation.listener, validation);
            _.on(el, 'input', this.onInput);
          }
        }
      },
      unlisten: function unlisten() {
        var el = this.frag.node;

        if (this.onInput) {
          _.off(el, 'input', this.onInput);
          this.onInput = null;
        }

        if (this.onClick) {
          _.off(el, 'click', this.onClick);
          this.onClick = null;
        }

        if (this.onChange) {
          _.off(el, 'change', this.onChange);
          this.onChange = null;
        }

        if (this.onBlur) {
          _.off(el, 'blur', this.onBlur);
          this.onBlur = null;
        }
      },
      teardownValidate: function teardownValidate() {
        if (this.validator && this.validation) {
          var el = this.frag.node;

          this.params.group && this.validator.removeGroupValidation(this.params.group, this.field);

          this.validator.unmanageValidation(this.field, el);

          this.validator = null;
          this.validation = null;
          this.field = null;
        }
      },
      setupFragment: function setupFragment() {
        this.anchor = _.createAnchor('v-validate');
        _.replace(this.el, this.anchor);

        this.factory = new FragmentFactory(this.vm, this.el);
        this.frag = this.factory.create(this._host, this._scope, this._frag);
        this.frag.before(this.anchor);
      },
      teardownFragment: function teardownFragment() {
        if (this.frag) {
          this.frag.remove();
          this.frag = null;
          this.factory = null;
        }

        _.replace(this.anchor, this.el);
        this.anchor = null;
      },
      handleArray: function handleArray(value) {
        var _this = this;

        each(value, function (val) {
          _this.validation.setValidation(val);
        });
      },
      handleObject: function handleObject(value) {
        var _this2 = this;

        each(value, function (val, key) {
          if (_.isPlainObject(val)) {
            if ('rule' in val) {
              var msg = 'message' in val ? val.message : null;
              var initial = 'initial' in val ? val.initial : null;
              _this2.validation.setValidation(key, val.rule, msg, initial);
            }
          } else {
            _this2.validation.setValidation(key, val);
          }
        });
      },
      isDetectBlur: function isDetectBlur(detectBlur) {
        return detectBlur === undefined || detectBlur === 'on' || detectBlur === true;
      },
      isDetectChange: function isDetectChange(detectChange) {
        return detectChange === undefined || detectChange === 'on' || detectChange === true;
      },
      isInitialNoopValidation: function isInitialNoopValidation(initial) {
        return initial === 'off' || initial === false;
      }
    });
  }

  /**
   * BaseValidation class
   */

  var BaseValidation = function () {
    function BaseValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, BaseValidation);

      this.field = field;
      this.touched = false;
      this.dirty = false;
      this.modified = false;

      this._modified = false;
      this._model = model;
      this._filters = filters;
      this._validator = validator;
      this._vm = vm;
      this._el = el;
      this._forScope = scope;
      this._init = this._getValue(el);
      this._validators = {};
      this._detectBlur = detectBlur;
      this._detectChange = detectChange;
    }

    BaseValidation.prototype.manageElement = function manageElement(el) {
      var _this = this;

      var scope = this._getScope();
      var model = this._model;
      if (model) {
        el.value = this._evalModel(model, this._filters) || '';
        this._unwatch = scope.$watch(model, function (val, old) {
          if (val !== old) {
            if (_this.guardValidate(el, 'input')) {
              return;
            }
            _this.handleValidate(el);
          }
        }, { deep: true });
      }
    };

    BaseValidation.prototype.unmanageElement = function unmanageElement(el) {
      this._unwatch && this._unwatch();
    };

    BaseValidation.prototype.setValidation = function setValidation(name, arg, msg, initial) {
      var validator = this._validators[name];
      if (!validator) {
        validator = this._validators[name] = {};
        validator.name = name;
      }

      validator.arg = arg;
      if (msg) {
        validator.msg = msg;
      }

      if (initial) {
        validator.initial = initial;
        validator._isNoopable = true;
      }
    };

    BaseValidation.prototype.willUpdateFlags = function willUpdateFlags() {
      var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      touched && this.willUpdateTouched(this._el, 'blur');
      this.willUpdateDirty(this._el);
      this.willUpdateModified(this._el);
    };

    BaseValidation.prototype.willUpdateTouched = function willUpdateTouched(el, type) {
      if (type && type === 'blur') {
        this.touched = true;
        this._fireEvent(el, 'touched');
      }
    };

    BaseValidation.prototype.willUpdateDirty = function willUpdateDirty(el) {
      if (!this.dirty && this._checkModified(el)) {
        this.dirty = true;
        this._fireEvent(el, 'dirty');
      }
    };

    BaseValidation.prototype.willUpdateModified = function willUpdateModified(el) {
      this.modified = this._checkModified(el);
      if (this._modified !== this.modified) {
        this._fireEvent(el, 'modified', { modified: this.modified });
        this._modified = this.modified;
      }
    };

    BaseValidation.prototype.listener = function listener(e) {
      if (this.guardValidate(e.target, e.type)) {
        return;
      }

      this.handleValidate(e.target, e.type);
    };

    BaseValidation.prototype.handleValidate = function handleValidate(el, type) {
      this.willUpdateTouched(el, type);
      this.willUpdateDirty(el);
      this.willUpdateModified(el);

      this._validator.validate(this.field);
    };

    BaseValidation.prototype.validate = function validate(cb) {
      var _this2 = this;

      var noopable = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var _ = exports$1.Vue.util;

      var results = {};
      var errors = [];
      var valid = true;

      this._runValidators(function (descriptor, name, done) {
        var asset = _this2._resolveValidator(name);
        var validator = null;
        var msg = null;

        if (_.isPlainObject(asset)) {
          if (asset.check && typeof asset.check === 'function') {
            validator = asset.check;
          }
          if (asset.message) {
            msg = asset.message;
          }
        } else if (typeof asset === 'function') {
          validator = asset;
        }

        if (descriptor.msg) {
          msg = descriptor.msg;
        }

        if (noopable) {
          results[name] = false;
          return done();
        }

        if (descriptor._isNoopable) {
          results[name] = false;
          descriptor._isNoopable = null;
          return done();
        }

        if (validator) {
          var value = _this2._getValue(_this2._el);
          _this2._invokeValidator(_this2._vm, validator, value, descriptor.arg, function (ret, err) {
            if (!ret) {
              valid = false;
              if (err) {
                // async error message
                errors.push({ validator: name, message: err });
                results[name] = err;
              } else if (msg) {
                var error = { validator: name };
                error.message = typeof msg === 'function' ? msg.call(_this2._vm, _this2.field, descriptor.arg) : msg;
                errors.push(error);
                results[name] = error.message;
              } else {
                results[name] = !ret;
              }
            } else {
              results[name] = !ret;
            }

            done();
          });
        } else {
          done();
        }
      }, function () {
        // finished
        _this2._fireEvent(_this2._el, valid ? 'valid' : 'invalid');

        var props = {
          valid: valid,
          invalid: !valid,
          touched: _this2.touched,
          untouched: !_this2.touched,
          dirty: _this2.dirty,
          pristine: !_this2.dirty,
          modified: _this2.modified
        };
        if (!empty(errors)) {
          props.errors = errors;
        }
        _.extend(results, props);

        cb(results);
      });
    };

    BaseValidation.prototype.resetFlags = function resetFlags() {
      this.touched = false;
      this.dirty = false;
      this.modified = false;
      this._modified = false;
    };

    BaseValidation.prototype.reset = function reset() {
      each(this._validators, function (descriptor, key) {
        if (descriptor.initial && !descriptor._isNoopable) {
          descriptor._isNoopable = true;
        }
      });
      this.resetFlags();
      this._init = this._getValue(this._el);
    };

    BaseValidation.prototype.guardValidate = function guardValidate(el, type) {
      if (type && type === 'blur' && !this.detectBlur) {
        return true;
      }

      if (type && type === 'input' && !this.detectChange) {
        return true;
      }

      if (type && type === 'change' && !this.detectChange) {
        return true;
      }

      if (type && type === 'click' && !this.detectChange) {
        return true;
      }

      return false;
    };

    BaseValidation.prototype._getValue = function _getValue(el) {
      return el.value;
    };

    BaseValidation.prototype._getScope = function _getScope() {
      return this._forScope || this._vm;
    };

    BaseValidation.prototype._checkModified = function _checkModified(target) {
      return this._init !== this._getValue(target);
    };

    BaseValidation.prototype._fireEvent = function _fireEvent(el, type, args) {
      trigger(el, type, args);
    };

    BaseValidation.prototype._evalModel = function _evalModel(model, filters) {
      var scope = this._getScope();

      if (filters) {
        var val = scope.$get(model);
        return filters ? this._applyFilters(val, null, filters) : val;
      } else {
        return scope.$get(model);
      }
    };

    BaseValidation.prototype._applyFilters = function _applyFilters(value, oldValue, filters, write) {
      var resolveAsset = exports$1.Vue.util.resolveAsset;
      var scope = this._getScope();

      var filter = void 0,
          fn = void 0,
          args = void 0,
          arg = void 0,
          offset = void 0,
          i = void 0,
          l = void 0,
          j = void 0,
          k = void 0;
      for (i = 0, l = filters.length; i < l; i++) {
        filter = filters[i];
        fn = resolveAsset(this._vm.$options, 'filters', filter.name);
        if (!fn) {
          continue;
        }

        fn = write ? fn.write : fn.read || fn;
        if (typeof fn !== 'function') {
          continue;
        }

        args = write ? [value, oldValue] : [value];
        offset = write ? 2 : 1;
        if (filter.args) {
          for (j = 0, k = filter.args.length; j < k; j++) {
            arg = filter.args[j];
            args[j + offset] = arg.dynamic ? scope.$get(arg.value) : arg.value;
          }
        }

        value = fn.apply(this._vm, args);
      }

      return value;
    };

    BaseValidation.prototype._runValidators = function _runValidators(fn, cb) {
      var validators = this._validators;
      var length = Object.keys(validators).length;

      var count = 0;
      each(validators, function (descriptor, name) {
        fn(descriptor, name, function () {
          ++count;
          count >= length && cb();
        });
      });
    };

    BaseValidation.prototype._invokeValidator = function _invokeValidator(vm, validator, val, arg, cb) {
      var future = validator.call(this, val, arg);
      if (typeof future === 'function') {
        // function
        if (future.resolved) {
          // cached
          cb(future.resolved);
        } else if (future.requested) {
          // pool callbacks
          future.pendingCallbacks.push(cb);
        } else {
          (function () {
            future.requested = true;
            var cbs = future.pendingCallbacks = [cb];
            future(function () {
              // resolve
              future.resolved = true;
              for (var i = 0, l = cbs.length; i < l; i++) {
                cbs[i](true);
              }
            }, function (msg) {
              // reject
              cb(false, msg);
            });
          })();
        }
      } else if (isPromise(future)) {
        // promise
        future.then(function () {
          // resolve
          cb(true);
        }, function (msg) {
          // reject
          cb(false, msg);
        }).catch(function (err) {
          cb(false, err.message);
        });
      } else {
        // sync
        cb(future);
      }
    };

    BaseValidation.prototype._resolveValidator = function _resolveValidator(name) {
      var resolveAsset = exports$1.Vue.util.resolveAsset;
      return resolveAsset(this._vm.$options, 'validators', name);
    };

    babelHelpers.createClass(BaseValidation, [{
      key: 'vm',
      get: function get() {
        return this._vm;
      }
    }, {
      key: 'el',
      get: function get() {
        return this._el;
      }
    }, {
      key: 'detectChange',
      get: function get() {
        return this._detectChange;
      },
      set: function set(val) {
        this._detectChange = val;
      }
    }, {
      key: 'detectBlur',
      get: function get() {
        return this._detectBlur;
      },
      set: function set(val) {
        this._detectBlur = val;
      }
    }]);
    return BaseValidation;
  }();

  /**
   * CheckboxValidation class
   */

  var CheckboxValidation = function (_BaseValidation) {
    babelHelpers.inherits(CheckboxValidation, _BaseValidation);

    function CheckboxValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, CheckboxValidation);

      var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

      _this._inits = [];
      return _this;
    }

    CheckboxValidation.prototype.manageElement = function manageElement(el) {
      var _this2 = this;

      var scope = this._getScope();
      var item = this._addItem(el);
      var model = item.model = this._model;
      if (model) {
        var value = this._evalModel(model, this._filters);
        if (Array.isArray(value)) {
          this._setChecked(value, item.el);
          item.unwatch = scope.$watch(model, function (val, old) {
            if (val !== old) {
              if (_this2.guardValidate(item.el, 'change')) {
                return;
              }
              _this2.handleValidate(item.el);
            }
          });
        } else {
          el.checked = value || false;
          this._init = el.checked;
          item.init = el.checked;
          item.value = el.value;
          item.unwatch = scope.$watch(model, function (val, old) {
            if (val !== old) {
              if (_this2.guardValidate(el, 'change')) {
                return;
              }
              _this2.handleValidate(el);
            }
          });
        }
      } else {
        this._validator.validate({ field: this.field });
      }
    };

    CheckboxValidation.prototype.unmanageElement = function unmanageElement(el) {
      var found = -1;
      each(this._inits, function (item, index) {
        if (item.el === el) {
          found = index;
          if (item.unwatch && item.model) {
            item.unwatch();
            item.unwatch = null;
            item.model = null;
          }
        }
      });
      if (found === -1) {
        return;
      }

      this._inits.splice(found, 1);
      this._validator.validate({ field: this.field });
    };

    CheckboxValidation.prototype.willUpdateFlags = function willUpdateFlags() {
      var _this3 = this;

      each(this._inits, function (item, index) {
        _this3.willUpdateDirty(item.el);
        _this3.willUpdateModified(item.el);
      });
    };

    CheckboxValidation.prototype.reset = function reset() {
      this.resetFlags();
      each(this._inits, function (item, index) {
        item.init = item.el.checked;
        item.value = item.el.value;
      });
    };

    CheckboxValidation.prototype._addItem = function _addItem(el) {
      var item = {
        el: el,
        init: el.checked,
        value: el.value
      };
      this._inits.push(item);
      return item;
    };

    CheckboxValidation.prototype._setChecked = function _setChecked(values, el) {
      for (var i = 0, l = values.length; i < l; i++) {
        var value = values[i];
        if (!el.disabled && el.value === value && !el.checked) {
          el.checked = true;
        }
      }
    };

    CheckboxValidation.prototype._getValue = function _getValue(el) {
      var _this4 = this;

      if (!this._inits || this._inits.length === 0) {
        return el.checked;
      } else {
        var _ret = function () {
          var vals = [];
          each(_this4._inits, function (item, index) {
            item.el.checked && vals.push(item.el.value);
          });
          return {
            v: vals
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
      }
    };

    CheckboxValidation.prototype._checkModified = function _checkModified(target) {
      var _this5 = this;

      if (this._inits.length === 0) {
        return this._init !== target.checked;
      } else {
        var _ret2 = function () {
          var modified = false;
          each(_this5._inits, function (item, index) {
            if (!modified) {
              modified = item.init !== item.el.checked;
            }
          });
          return {
            v: modified
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
      }
    };

    return CheckboxValidation;
  }(BaseValidation);

  /**
   * RadioValidation class
   */

  var RadioValidation = function (_BaseValidation) {
    babelHelpers.inherits(RadioValidation, _BaseValidation);

    function RadioValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, RadioValidation);

      var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

      _this._inits = [];
      return _this;
    }

    RadioValidation.prototype.manageElement = function manageElement(el) {
      var _this2 = this;

      var scope = this._getScope();
      var item = this._addItem(el);
      var model = item.model = this._model;
      if (model) {
        var value = this._evalModel(model, this._filters);
        this._setChecked(value, el, item);
        item.unwatch = scope.$watch(model, function (val, old) {
          if (val !== old) {
            if (_this2.guardValidate(item.el, 'change')) {
              return;
            }
            _this2.handleValidate(el);
          }
        });
      } else {
        this._validator.validate({ field: this.field });
      }
    };

    RadioValidation.prototype.unmanageElement = function unmanageElement(el) {
      var found = -1;
      each(this._inits, function (item, index) {
        if (item.el === el) {
          found = index;
        }
      });
      if (found === -1) {
        return;
      }

      this._inits.splice(found, 1);
      this._validator.validate({ field: this.field });
    };

    RadioValidation.prototype.willUpdateFlags = function willUpdateFlags() {
      var _this3 = this;

      each(this._inits, function (item, index) {
        _this3.willUpdateDirty(item.el);
        _this3.willUpdateModified(item.el);
      });
    };

    RadioValidation.prototype.reset = function reset() {
      this.resetFlags();
      each(this._inits, function (item, index) {
        item.init = item.el.checked;
        item.value = item.el.value;
      });
    };

    RadioValidation.prototype._addItem = function _addItem(el) {
      var item = {
        el: el,
        init: el.checked,
        value: el.value
      };
      this._inits.push(item);
      return item;
    };

    RadioValidation.prototype._setChecked = function _setChecked(value, el, item) {
      if (el.value === value) {
        el.checked = true;
        this._init = el.checked;
        item.init = el.checked;
        item.value = value;
      }
    };

    RadioValidation.prototype._getValue = function _getValue(el) {
      var _this4 = this;

      if (!this._inits || this._inits.length === 0) {
        return el.checked;
      } else {
        var _ret = function () {
          var vals = [];
          each(_this4._inits, function (item, index) {
            item.el.checked && vals.push(item.el.value);
          });
          return {
            v: vals
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
      }
    };

    RadioValidation.prototype._checkModified = function _checkModified(target) {
      var _this5 = this;

      if (this._inits.length === 0) {
        return this._init !== target.checked;
      } else {
        var _ret2 = function () {
          var modified = false;
          each(_this5._inits, function (item, index) {
            if (!modified) {
              modified = item.init !== item.el.checked;
            }
          });
          return {
            v: modified
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
      }
    };

    return RadioValidation;
  }(BaseValidation);

  /**
   * SelectValidation class
   */

  var SelectValidation = function (_BaseValidation) {
    babelHelpers.inherits(SelectValidation, _BaseValidation);

    function SelectValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
      babelHelpers.classCallCheck(this, SelectValidation);

      var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

      _this._multiple = _this._el.hasAttribute('multiple');
      return _this;
    }

    SelectValidation.prototype.manageElement = function manageElement(el) {
      var _this2 = this;

      var scope = this._getScope();
      var model = this._model;
      if (model) {
        var value = this._evalModel(model, this._filters);
        var values = !Array.isArray(value) ? [value] : value;
        this._setOption(values, el);
        this._unwatch = scope.$watch(model, function (val, old) {
          var values1 = !Array.isArray(val) ? [val] : val;
          var values2 = !Array.isArray(old) ? [old] : old;
          if (values1.slice().sort().toString() !== values2.slice().sort().toString()) {
            if (_this2.guardValidate(el, 'change')) {
              return;
            }
            _this2.handleValidate(el);
          }
        });
      }
    };

    SelectValidation.prototype.unmanageElement = function unmanageElement(el) {
      this._unwatch && this._unwatch();
    };

    SelectValidation.prototype.reset = function reset() {
      this.resetFlags();
    };

    SelectValidation.prototype._getValue = function _getValue(el) {
      var ret = [];

      for (var i = 0, l = el.options.length; i < l; i++) {
        var option = el.options[i];
        if (!option.disabled && option.selected) {
          ret.push(option.value);
        }
      }

      return ret;
    };

    SelectValidation.prototype._setOption = function _setOption(values, el) {
      for (var i = 0, l = values.length; i < l; i++) {
        var value = values[i];
        for (var j = 0, m = el.options.length; j < m; j++) {
          var option = el.options[j];
          if (!option.disabled && option.value === value && (!option.hasAttribute('selected') || !option.selected)) {
            option.selected = true;
          }
        }
      }
    };

    SelectValidation.prototype._checkModified = function _checkModified(target) {
      var values = this._getValue(target).slice().sort();
      if (this._init.length !== values.length) {
        return true;
      } else {
        var inits = this._init.slice().sort();
        return inits.toString() !== values.toString();
      }
    };

    return SelectValidation;
  }(BaseValidation);

  var eventRE = /^v-on:|^@/;

  /**
   * Validator class
   */

  var Validator$1 = function () {
    function Validator(name, dir, groups) {
      var _this = this;

      babelHelpers.classCallCheck(this, Validator);

      this.name = name;

      this._scope = {};
      this._dir = dir;
      this._validations = {};
      this._checkboxValidations = {};
      this._radioValidations = {};
      this._groups = groups;
      this._groupValidations = {};
      this._events = {};
      this._modified = false;

      each(groups, function (group) {
        _this._groupValidations[group] = [];
      });
    }

    Validator.prototype.enableReactive = function enableReactive() {
      var _this2 = this;

      var vm = this._dir.vm;

      // define the validation scope
      exports$1.Vue.util.defineReactive(vm, this.name, this._scope);
      vm._validatorMaps[this.name] = this;

      // define the validation resetting meta method to vue instance
      vm.$resetValidation = function (cb) {
        _this2._resetValidation(cb);
      };

      // define the validate manually meta method to vue instance
      vm.$validate = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var field = null;
        var touched = false;
        var cb = null;

        each(args, function (arg, index) {
          if (typeof arg === 'string') {
            field = arg;
          } else if (typeof arg === 'boolean') {
            touched = arg;
          } else if (typeof arg === 'function') {
            cb = arg;
          }
        });

        _this2.validate({ field: field, touched: touched, cb: cb });
      };

      // define manually the validation errors
      vm.$setValidationErrors = function (errors) {
        _this2._setValidationErrors(errors);
      };
    };

    Validator.prototype.disableReactive = function disableReactive() {
      var vm = this._dir.vm;
      vm.$setValidationErrors = undefined;
      vm.$validate = undefined;
      vm.$validatorReset = undefined;
      vm._validatorMaps[this.name] = null;
      vm[this.name] = null;
    };

    Validator.prototype.registerEvents = function registerEvents() {
      var attrs = this._dir.el.attributes;
      for (var i = 0, l = attrs.length; i < l; i++) {
        var event = attrs[i].name;
        if (eventRE.test(event)) {
          event = event.replace(eventRE, '');
          this._events[this._getEventName(event)] = this._dir.vm.$eval(attrs[i].value, true);
        }
      }
    };

    Validator.prototype.unregisterEvents = function unregisterEvents() {
      var _this3 = this;

      each(this._events, function (handler, event) {
        _this3._events[event] = null;
        delete _this3._events[event];
      });
    };

    Validator.prototype.manageValidation = function manageValidation(field, model, vm, el, scope, filters, detectBlur, detectChange) {
      var validation = null;

      if (el.tagName === 'SELECT') {
        validation = this._manageSelectValidation(field, model, vm, el, scope, filters, detectBlur, detectChange);
      } else if (el.type === 'checkbox') {
        validation = this._manageCheckboxValidation(field, model, vm, el, scope, filters, detectBlur, detectChange);
      } else if (el.type === 'radio') {
        validation = this._manageRadioValidation(field, model, vm, el, scope, filters, detectBlur, detectChange);
      } else {
        validation = this._manageBaseValidation(field, model, vm, el, scope, filters, detectBlur, detectChange);
      }

      return validation;
    };

    Validator.prototype.unmanageValidation = function unmanageValidation(field, el) {
      if (el.type === 'checkbox') {
        this._unmanageCheckboxValidation(field, el);
      } else if (el.type === 'radio') {
        this._unmanageRadioValidation(field, el);
      } else if (el.tagName === 'SELECT') {
        this._unmanageSelectValidation(field, el);
      } else {
        this._unmanageBaseValidation(field, el);
      }
    };

    Validator.prototype.addGroupValidation = function addGroupValidation(group, field) {
      var indexOf = exports$1.Vue.util.indexOf;

      var validation = this._validations[field] || this._checkboxValidations[field].validation || this._radioValidations[field].validation;
      var validations = this._groupValidations[group];

      validations && ! ~indexOf(validations, validation) && validations.push(validation);
    };

    Validator.prototype.removeGroupValidation = function removeGroupValidation(group, field) {
      var validation = this._validations[field] || this._checkboxValidations[field].validation || this._radioValidations[field].validation;
      var validations = this._groupValidations[group];

      validations && pull(validations, validation);
    };

    Validator.prototype.validate = function validate() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$field = _ref.field;
      var field = _ref$field === undefined ? null : _ref$field;
      var _ref$touched = _ref.touched;
      var touched = _ref$touched === undefined ? false : _ref$touched;
      var _ref$noopable = _ref.noopable;
      var noopable = _ref$noopable === undefined ? false : _ref$noopable;
      var _ref$cb = _ref.cb;
      var cb = _ref$cb === undefined ? null : _ref$cb;

      if (!field) {
        // all
        each(this.validations, function (validation, key) {
          validation.willUpdateFlags(touched);
        });
        this._validates(cb);
      } else {
        // each field
        this._validate(field, touched, noopable, cb);
      }
    };

    Validator.prototype.setupScope = function setupScope() {
      var _this4 = this;

      this._defineProperties(function () {
        return _this4.validations;
      }, function () {
        return _this4._scope;
      });

      each(this._groups, function (name) {
        var validations = _this4._groupValidations[name];
        var group = {};
        exports$1.Vue.set(_this4._scope, name, group);
        _this4._defineProperties(function () {
          return validations;
        }, function () {
          return group;
        });
      });
    };

    Validator.prototype.waitFor = function waitFor(cb) {
      var method = '$activateValidator';
      var vm = this._dir.vm;

      vm[method] = function () {
        cb();
        vm[method] = null;
      };
    };

    Validator.prototype._validate = function _validate(field) {
      var touched = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var _this5 = this;

      var noopable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
      var cb = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

      var scope = this._scope;

      var validation = this._getValidationFrom(field);
      if (validation) {
        validation.willUpdateFlags(touched);
        validation.validate(function (results) {
          exports$1.Vue.set(scope, field, results);
          _this5._fireEvents();
          cb && cb();
        }, noopable);
      }
    };

    Validator.prototype._validates = function _validates(cb) {
      var _this6 = this;

      var scope = this._scope;

      this._runValidates(function (validation, key, done) {
        validation.validate(function (results) {
          exports$1.Vue.set(scope, key, results);
          done();
        });
      }, function () {
        // finished
        _this6._fireEvents();
        cb && cb();
      });
    };

    Validator.prototype._getValidationFrom = function _getValidationFrom(field) {
      var validation = this._validations[field];
      if (!validation && this._checkboxValidations[field]) {
        validation = this._checkboxValidations[field].validation;
      } else if (!validation && this._radioValidations[field]) {
        validation = this._radioValidations[field].validation;
      }
      return validation;
    };

    Validator.prototype._resetValidation = function _resetValidation(cb) {
      each(this.validations, function (validation, key) {
        validation.reset();
      });
      this._validates(cb);
    };

    Validator.prototype._setValidationErrors = function _setValidationErrors(errors) {
      var _this7 = this;

      var extend = exports$1.Vue.util.extend;

      // make tempolaly errors
      var temp = {};
      each(errors, function (error, index) {
        if (!temp[error.field]) {
          temp[error.field] = [];
        }
        temp[error.field].push(error);
      });

      // set errors
      each(temp, function (values, field) {
        var validation = _this7._scope[field];
        var newValidation = {};
        each(values, function (error) {
          if (error.validator) {
            validation[error.validator] = error.message;
          }
        });
        validation.valid = false;
        validation.invalid = true;
        validation.errors = values;
        extend(newValidation, validation);
        exports$1.Vue.set(_this7._scope, field, newValidation);
      });
    };

    Validator.prototype._manageBaseValidation = function _manageBaseValidation(field, model, vm, el, scope, filters, detectBlur, detectChange) {
      var validation = this._validations[field] = new BaseValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
      validation.manageElement(el);
      return validation;
    };

    Validator.prototype._unmanageBaseValidation = function _unmanageBaseValidation(field, el) {
      var validation = this._validations[field];
      if (validation) {
        validation.unmanageElement(el);
        exports$1.Vue.delete(this._scope, field);
        this._validations[field] = null;
        delete this._validations[field];
      }
    };

    Validator.prototype._manageCheckboxValidation = function _manageCheckboxValidation(field, model, vm, el, scope, filters, detectBlur, detectChange) {
      var validationSet = this._checkboxValidations[field];
      if (!validationSet) {
        var validation = new CheckboxValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
        validationSet = { validation: validation, elements: 0 };
        this._checkboxValidations[field] = validationSet;
      }

      validationSet.elements++;
      validationSet.validation.manageElement(el);
      return validationSet.validation;
    };

    Validator.prototype._unmanageCheckboxValidation = function _unmanageCheckboxValidation(field, el) {
      var validationSet = this._checkboxValidations[field];
      if (validationSet) {
        validationSet.elements--;
        validationSet.validation.unmanageElement(el);
        if (validationSet.elements === 0) {
          exports$1.Vue.delete(this._scope, field);
          this._checkboxValidations[field] = null;
          delete this._checkboxValidations[field];
        }
      }
    };

    Validator.prototype._manageRadioValidation = function _manageRadioValidation(field, model, vm, el, scope, filters, detectBlur, detectChange) {
      var validationSet = this._radioValidations[field];
      if (!validationSet) {
        var validation = new RadioValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
        validationSet = { validation: validation, elements: 0 };
        this._radioValidations[field] = validationSet;
      }

      validationSet.elements++;
      validationSet.validation.manageElement(el);
      return validationSet.validation;
    };

    Validator.prototype._unmanageRadioValidation = function _unmanageRadioValidation(field, el) {
      var validationSet = this._radioValidations[field];
      if (validationSet) {
        validationSet.elements--;
        validationSet.validation.unmanageElement(el);
        if (validationSet.elements === 0) {
          exports$1.Vue.delete(this._scope, field);
          this._radioValidations[field] = null;
          delete this._radioValidations[field];
        }
      }
    };

    Validator.prototype._manageSelectValidation = function _manageSelectValidation(field, model, vm, el, scope, filters, detectBlur, detectChange) {
      var validation = this._validations[field] = new SelectValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
      validation.manageElement(el);
      return validation;
    };

    Validator.prototype._unmanageSelectValidation = function _unmanageSelectValidation(field, el) {
      var validation = this._validations[field];
      if (validation) {
        validation.unmanageElement(el);
        exports$1.Vue.delete(this._scope, field);
        this._validations[field] = null;
        delete this._validations[field];
      }
    };

    Validator.prototype._fireEvent = function _fireEvent(type) {
      var handler = this._events[this._getEventName(type)];

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      handler && handler.apply(null, args);
    };

    Validator.prototype._fireEvents = function _fireEvents() {
      var scope = this._scope;

      scope.touched && this._fireEvent('touched');
      scope.dirty && this._fireEvent('dirty');

      if (this._modified !== scope.modified) {
        this._fireEvent('modified', scope.modified);
        this._modified = scope.modified;
      }

      var valid = scope.valid;
      this._fireEvent(valid ? 'valid' : 'invalid');
    };

    Validator.prototype._getEventName = function _getEventName(type) {
      return this.name + ':' + type;
    };

    Validator.prototype._defineProperties = function _defineProperties(validationsGetter, targetGetter) {
      var _this8 = this;

      var bind = exports$1.Vue.util.bind;

      each({
        valid: { fn: this._defineValid, arg: validationsGetter },
        invalid: { fn: this._defineInvalid, arg: targetGetter },
        touched: { fn: this._defineTouched, arg: validationsGetter },
        untouched: { fn: this._defineUntouched, arg: targetGetter },
        modified: { fn: this._defineModified, arg: validationsGetter },
        dirty: { fn: this._defineDirty, arg: validationsGetter },
        pristine: { fn: this._definePristine, arg: targetGetter },
        errors: { fn: this._defineErrors, arg: validationsGetter }
      }, function (descriptor, name) {
        Object.defineProperty(targetGetter(), name, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return bind(descriptor.fn, _this8)(descriptor.arg);
          }
        });
      });
    };

    Validator.prototype._runValidates = function _runValidates(fn, cb) {
      var length = Object.keys(this.validations).length;

      var count = 0;
      each(this.validations, function (validation, key) {
        fn(validation, key, function () {
          ++count;
          count >= length && cb();
        });
      });
    };

    Validator.prototype._walkValidations = function _walkValidations(validations, property, condition) {
      var _this9 = this;

      var hasOwn = exports$1.Vue.util.hasOwn;
      var ret = condition;

      each(validations, function (validation, key) {
        if (ret === !condition) {
          return;
        }
        if (hasOwn(_this9._scope, validation.field)) {
          var target = _this9._scope[validation.field];
          if (target && target[property] === !condition) {
            ret = !condition;
          }
        }
      });

      return ret;
    };

    Validator.prototype._defineValid = function _defineValid(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'valid', true);
    };

    Validator.prototype._defineInvalid = function _defineInvalid(scopeGetter) {
      return !scopeGetter().valid;
    };

    Validator.prototype._defineTouched = function _defineTouched(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'touched', false);
    };

    Validator.prototype._defineUntouched = function _defineUntouched(scopeGetter) {
      return !scopeGetter().touched;
    };

    Validator.prototype._defineModified = function _defineModified(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'modified', false);
    };

    Validator.prototype._defineDirty = function _defineDirty(validationsGetter) {
      return this._walkValidations(validationsGetter(), 'dirty', false);
    };

    Validator.prototype._definePristine = function _definePristine(scopeGetter) {
      return !scopeGetter().dirty;
    };

    Validator.prototype._defineErrors = function _defineErrors(validationsGetter) {
      var _this10 = this;

      var hasOwn = exports$1.Vue.util.hasOwn;
      var isPlainObject = exports$1.Vue.util.isPlainObject;
      var errors = [];

      each(validationsGetter(), function (validation, key) {
        if (hasOwn(_this10._scope, validation.field)) {
          var target = _this10._scope[validation.field];
          if (target && !empty(target.errors)) {
            each(target.errors, function (err, index) {
              var error = { field: validation.field };
              if (isPlainObject(err)) {
                if (err.validator) {
                  error.validator = err.validator;
                }
                error.message = err.message;
              } else if (typeof err === 'string') {
                error.message = err;
              }
              errors.push(error);
            });
          }
        }
      });

      return empty(errors) ? undefined : errors;
    };

    babelHelpers.createClass(Validator, [{
      key: 'validations',
      get: function get() {
        var extend = exports$1.Vue.util.extend;

        var ret = {};
        extend(ret, this._validations);

        each(this._checkboxValidations, function (dataset, key) {
          ret[key] = dataset.validation;
        });

        each(this._radioValidations, function (dataset, key) {
          ret[key] = dataset.validation;
        });

        return ret;
      }
    }]);
    return Validator;
  }();

  function Validator(Vue) {
    var _ = Vue.util;
    var FragmentFactory = Vue.FragmentFactory;
    var parseTemplate = Vue.parsers.template.parseTemplate;
    var vIf = Vue.directive('if');
    var camelize = Vue.util.camelize;

    /**
     * `validator` element directive
     */

    Vue.elementDirective('validator', {
      params: ['name', 'groups', 'lazy'],

      bind: function bind() {
        var params = this.params;

        if (!params.name) {
          warn('validator element directive need to specify \'name\' param attribute: ' + '(e.g. <validator name="validator1">...</validator>)');
          return;
        }

        this.validatorName = '$' + camelize(params.name);
        if (!this.vm._validatorMaps) {
          throw new Error('Invalid validator management error');
        }

        this.setupValidator();
        this.setupFragment(params.lazy);
      },
      unbind: function unbind() {
        this.teardownFragment();
        this.teardownValidator();
      },
      getGroups: function getGroups() {
        var params = this.params;
        var groups = [];

        if (params.groups) {
          if (_.isArray(params.groups)) {
            groups = params.groups;
          } else if (!_.isPlainObject(params.groups) && typeof params.groups === 'string') {
            groups.push(params.groups);
          }
        }

        return groups;
      },
      setupValidator: function setupValidator() {
        var validator = this.validator = new Validator$1(this.validatorName, this, this.getGroups());
        validator.enableReactive();
        validator.setupScope();
        validator.registerEvents();
      },
      teardownValidator: function teardownValidator() {
        this.validator.unregisterEvents();
        this.validator.disableReactive();

        if (this.validatorName) {
          this.validatorName = null;
          this.validator = null;
        }
      },
      setupFragment: function setupFragment(lazy) {
        var _this = this;

        var vm = this.vm;

        this.validator.waitFor(function () {
          _this.anchor = _.createAnchor('vue-validator');
          _.replace(_this.el, _this.anchor);
          _.extend(vm.$options, { _validator: _this.validatorName });
          _this.factory = new FragmentFactory(vm, parseTemplate(_this.el, true));
          vIf.insert.call(_this);
        });

        !lazy && vm.$activateValidator();
      },
      teardownFragment: function teardownFragment() {
        vIf.unbind.call(this);
      }
    });
  }

  function ValidatorError(Vue) {
    /**
     * ValidatorError component
     */

    var error = {
      name: 'validator-error',

      props: {
        field: {
          type: String,
          required: true
        },
        validator: {
          type: String
        },
        message: {
          type: String,
          required: true
        },
        partial: {
          type: String,
          default: 'validator-error-default'
        }
      },

      template: '<div><partial :name="partial"></partial></div>',

      partials: {}
    };

    // only use ValidatorError component
    error.partials['validator-error-default'] = '<p>{{field}}: {{message}}</p>';

    return error;
  }

  function Errors(Vue) {
    var _ = Vue.util;
    var error = ValidatorError(Vue); // import ValidatorError component

    /**
     * ValidatorErrors component
     */

    var errors = {
      name: 'validator-errors',

      props: {
        validation: {
          type: Object,
          required: true
        },
        group: {
          type: String,
          default: null
        },
        field: {
          type: String,
          default: null
        },
        component: {
          type: String,
          default: 'validator-error'
        }
      },

      computed: {
        errors: function errors() {
          var _this = this;

          if (this.group !== null) {
            return this.validation[this.group].errors;
          } else if (this.field !== null) {
            var target = this.validation[this.field];
            if (!target.errors) {
              return;
            }

            return target.errors.map(function (error) {
              var err = { field: _this.field };
              if (_.isPlainObject(error)) {
                if (error.validator) {
                  err.validator = error.validator;
                }
                err.message = error.message;
              } else if (typeof error === 'string') {
                err.message = error;
              }
              return err;
            });
          } else {
            return this.validation.errors;
          }
        }
      },

      template: '<template v-for="error in errors">' + '<component :is="component" :partial="partial" :field="error.field" :validator="error.validator" :message="error.message">' + '</component>' + '</template>',

      components: {}
    };

    // define 'partial' prop
    errors.props['partial'] = error.props['partial'];

    // only use ValidatorErrors component
    errors.components[error.name] = error;

    // install ValidatorErrors component
    Vue.component(errors.name, errors);

    return errors;
  }

  /**
   * plugin
   *
   * @param {Function} Vue
   * @param {Object} options
   */

  function plugin(Vue) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (plugin.installed) {
      warn('already installed.');
      return;
    }

    exports$1.Vue = Vue;
    Asset(Vue);
    Errors(Vue);

    Override(Vue);
    Validator(Vue);
    Validate(Vue);
  }

  plugin.version = '2.0.0-beta.3';

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
  }

  return plugin;
});

},{}]},{},[2,1,3]);

//# sourceMappingURL=bundle.js.map
