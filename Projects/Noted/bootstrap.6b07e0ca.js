parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ffow":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(t){"use strict";t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});return setTimeout(function(){i||t(o).trigger(t.support.transition.end)},e),this},t(function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.close=function(e){var o=t(this),n=o.attr("data-target");n||(n=(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,""));var s=t("#"===n?[]:n);function a(){s.detach().trigger("closed.bs.alert").remove()}e&&e.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",a).emulateTransitionEnd(i.TRANSITION_DURATION):a())};var o=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var o=t(this),n=o.data("bs.alert");n||o.data("bs.alert",n=new i(this)),"string"==typeof e&&n[e].call(o)})},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery),function(e){"use strict";var i=function t(i,o){this.$element=e(i),this.options=e.extend({},t.DEFAULTS,o),this.isLoading=!1};function o(o){return this.each(function(){var n=e(this),s=n.data("bs.button"),a="object"==t(o)&&o;s||n.data("bs.button",s=new i(this,a)),"toggle"==o?s.toggle():o&&s.setState(o)})}i.VERSION="3.3.7",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(t){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();t+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(e.proxy(function(){o[n](null==s[t]?this.options[t]:s[t]),"loadingText"==t?(this.isLoading=!0,o.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=o,e.fn.button.Constructor=i,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var i=e(t.target).closest(".btn");o.call(i,"toggle"),e(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),i.is("input,button")?i.trigger("focus"):i.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(e){"use strict";var i=function(t,i){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};function o(o){return this.each(function(){var n=e(this),s=n.data("bs.carousel"),a=e.extend({},i.DEFAULTS,n.data(),"object"==t(o)&&o),r="string"==typeof o?o:a.slide;s||n.data("bs.carousel",s=new i(this,a)),"number"==typeof o?s.to(o):r?s[r]():a.interval&&s.pause().cycle()})}i.VERSION="3.3.7",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){if(!this.sliding)return this.slide("next")},i.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},i.prototype.slide=function(t,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(t,n),a=this.interval,r="next"==t?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=e.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=e(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=e.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return e.support.transition&&this.$element.hasClass("slide")?(s.addClass(t),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([t,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=o,e.fn.carousel.Constructor=i,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this};var s=function(t){var i,n=e(this),s=e(n.attr("data-target")||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=e.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),o.call(s,a),r&&s.data("bs.carousel").to(r),t.preventDefault()}};e(document).on("click.bs.carousel.data-api","[data-slide]",s).on("click.bs.carousel.data-api","[data-slide-to]",s),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var t=e(this);o.call(t,t.data())})})}(jQuery),function(e){"use strict";var i=function t(i,o){this.$element=e(i),this.options=e.extend({},t.DEFAULTS,o),this.$trigger=e('[data-toggle="collapse"][href="#'+i.id+'"],[data-toggle="collapse"][data-target="#'+i.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function o(t){var i,o=t.attr("data-target")||(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return e(o)}function n(o){return this.each(function(){var n=e(this),s=n.data("bs.collapse"),a=e.extend({},i.DEFAULTS,n.data(),"object"==t(o)&&o);!s&&a.toggle&&/show|hide/.test(o)&&(a.toggle=!1),s||n.data("bs.collapse",s=new i(this,a)),"string"==typeof o&&s[o]()})}i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(t=o.data("bs.collapse"))&&t.transitioning)){var s=e.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),t||o.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return r.call(this);var l=e.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",e.proxy(r,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var o=this.dimension();this.$element[o](this.$element[o]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!e.support.transition)return n.call(this);this.$element[o](0).one("bsTransitionEnd",e.proxy(n,this)).emulateTransitionEnd(i.TRANSITION_DURATION)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(t,i){var n=e(i);this.addAriaAndCollapsedClass(o(n),n)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var s=e.fn.collapse;e.fn.collapse=n,e.fn.collapse.Constructor=i,e.fn.collapse.noConflict=function(){return e.fn.collapse=s,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var i=e(this);i.attr("data-target")||t.preventDefault();var s=o(i),a=s.data("bs.collapse")?"toggle":i.data();n.call(s,a)})}(jQuery),function(t){"use strict";var e=".dropdown-backdrop",i='[data-toggle="dropdown"]',o=function(e){t(e).on("click.bs.dropdown",this.toggle)};function n(e){var i=e.attr("data-target");i||(i=(i=e.attr("href"))&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function s(o){o&&3===o.which||(t(e).remove(),t(i).each(function(){var e=t(this),i=n(e),s={relatedTarget:this};i.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&t.contains(i[0],o.target)||(i.trigger(o=t.Event("hide.bs.dropdown",s)),o.isDefaultPrevented()||(e.attr("aria-expanded","false"),i.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}o.VERSION="3.3.7",o.prototype.toggle=function(e){var i=t(this);if(!i.is(".disabled, :disabled")){var o=n(i),a=o.hasClass("open");if(s(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",s);var r={relatedTarget:this};if(o.trigger(e=t.Event("show.bs.dropdown",r)),e.isDefaultPrevented())return;i.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},o.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var s=n(o),a=s.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&s.find(i).trigger("focus"),o.trigger("click");var r=s.find(".dropdown-menu li:not(.disabled):visible a");if(r.length){var l=r.index(e.target);38==e.which&&l>0&&l--,40==e.which&&l<r.length-1&&l++,~l||(l=0),r.eq(l).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new o(this)),"string"==typeof e&&n[e].call(i)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",i,o.prototype.toggle).on("keydown.bs.dropdown.data-api",i,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(e){"use strict";var i=function(t,i){this.options=i,this.$body=e(document.body),this.$element=e(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function o(o,n){return this.each(function(){var s=e(this),a=s.data("bs.modal"),r=e.extend({},i.DEFAULTS,s.data(),"object"==t(o)&&o);a||s.data("bs.modal",a=new i(this,r)),"string"==typeof o?a[o](n):r.show&&a.show(n)})}i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(t){var o=this,n=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=e.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(t){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=e.support.transition&&n;if(this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;s?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),t&&t()};e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else t&&t()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=e.fn.modal;e.fn.modal=o,e.fn.modal.Constructor=i,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var i=e(this),n=i.attr("href"),s=e(i.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(n)&&n},s.data(),i.data());i.is("a")&&t.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),o.call(s,a,this)})}(jQuery),function(e){"use strict";var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(t,i,o){if(this.enabled=!0,this.type=t,this.$element=e(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(t){return(t=e.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},i.prototype.getDelegateOptions=function(){var t={},i=this.getDefaults();return this._options&&e.each(this._options,function(e,o){i[e]!=o&&(t[e]=o)}),t},i.prototype.enter=function(t){var i=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,i)),t instanceof e.Event&&(i.inState["focusin"==t.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState)i.hoverState="in";else{if(clearTimeout(i.timeout),i.hoverState="in",!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)}},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(t){var i=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,i)),t instanceof e.Event&&(i.inState["focusout"==t.type?"focus":"hover"]=!1),!i.isInStateTrue()){if(clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)}},i.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var o=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&d.bottom+c>u.bottom?"top":"top"==r&&d.top-c<u.top?"bottom":"right"==r&&d.right+p>u.width?"left":"left"==r&&d.left-p<u.left?"right":r,s.removeClass(f).addClass(r)}var g=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(g,r);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};e.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(t,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),t.top+=a,t.left+=r,e.offset.setOffset(o[0],e.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(t.top=t.top+s-h);var d=this.getViewportAdjustedDelta(i,t,l,h);d.left?t.left+=d.left:t.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(t),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(t){var o=this,n=e(this.$tip),s=e.Event("hide.bs."+this.type);function a(){"in"!=o.hoverState&&n.detach(),o.$element&&o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),t&&t()}if(this.$element.trigger(s),!s.isDefaultPrevented())return n.removeClass("in"),e.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",a).emulateTransitionEnd(i.TRANSITION_DURATION):a(),this.hoverState=null,this},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(t){var i=(t=t||this.$element)[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=e.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,a=o?{top:0,left:0}:s?null:t.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},l=o?{width:e(window).width(),height:e(window).height()}:null;return e.extend({},n,r,l,a)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},i.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=e(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(t){var i=this;t&&((i=e(t.currentTarget).data("bs."+this.type))||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,i))),t?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=e.fn.tooltip;e.fn.tooltip=function(o){return this.each(function(){var n=e(this),s=n.data("bs.tooltip"),a="object"==t(o)&&o;!s&&/destroy|hide/.test(o)||(s||n.data("bs.tooltip",s=new i(this,a)),"string"==typeof o&&s[o]())})},e.fn.tooltip.Constructor=i,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=o,this}}(jQuery),function(e){"use strict";var i=function(t,e){this.init("popover",t,e)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.7",i.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=e.fn.popover;e.fn.popover=function(o){return this.each(function(){var n=e(this),s=n.data("bs.popover"),a="object"==t(o)&&o;!s&&/destroy|hide/.test(o)||(s||n.data("bs.popover",s=new i(this,a)),"string"==typeof o&&s[o]())})},e.fn.popover.Constructor=i,e.fn.popover.noConflict=function(){return e.fn.popover=o,this}}(jQuery),function(e){"use strict";function i(t,o){this.$body=e(document.body),this.$scrollElement=e(t).is(document.body)?e(window):e(t),this.options=e.extend({},i.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function o(o){return this.each(function(){var n=e(this),s=n.data("bs.scrollspy"),a="object"==t(o)&&o;s||n.data("bs.scrollspy",s=new i(this,a)),"string"==typeof o&&s[o]()})}i.VERSION="3.3.7",i.DEFAULTS={offset:10},i.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},i.prototype.refresh=function(){var t=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=e(this),n=t.data("target")||t.attr("href"),s=/^#./.test(n)&&e(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},i.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},i.prototype.activate=function(t){this.activeTarget=t,this.clear();var i=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',o=e(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},i.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=e.fn.scrollspy;e.fn.scrollspy=o,e.fn.scrollspy.Constructor=i,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);o.call(t,t.data())})})}(jQuery),function(t){"use strict";var e=function(e){this.element=t(e)};function i(i){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new e(this)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.7",e.TRANSITION_DURATION=150,e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=(o=e.attr("href"))&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},e.prototype.activate=function(i,o,n){var s=o.find("> .active"),a=n&&t.support.transition&&(s.length&&s.hasClass("fade")||!!o.find("> .fade").length);function r(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(i[0].offsetWidth,i.addClass("in")):i.removeClass("fade"),i.parent(".dropdown-menu").length&&i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}s.length&&a?s.one("bsTransitionEnd",r).emulateTransitionEnd(e.TRANSITION_DURATION):r(),s.removeClass("in")};var o=t.fn.tab;t.fn.tab=i,t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(e){e.preventDefault(),i.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),function(e){"use strict";var i=function t(i,o){this.options=e.extend({},t.DEFAULTS,o),this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(i),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function o(o){return this.each(function(){var n=e(this),s=n.data("bs.affix"),a="object"==t(o)&&o;s||n.data("bs.affix",s=new i(this,a)),"string"==typeof o&&s[o]()})}i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&l+(r?a:e)>=t-o&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var o=this.$element.height(),n=this.options.offset,s=n.top,a=n.bottom,r=Math.max(e(document).height(),e(document.body).height());"object"!=t(n)&&(a=s=n),"function"==typeof s&&(s=n.top(this.$element)),"function"==typeof a&&(a=n.bottom(this.$element));var l=this.getState(r,o,s,a);if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");var h="affix"+(l?"-"+l:""),d=e.Event(h+".bs.affix");if(this.$element.trigger(d),d.isDefaultPrevented())return;this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"==l&&this.$element.offset({top:r-o-a})}};var n=e.fn.affix;e.fn.affix=o,e.fn.affix.Constructor=i,e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),i=t.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),o.call(t,i)})})}(jQuery);
},{}]},{},["ffow"], null)
//# sourceMappingURL=/bootstrap.6b07e0ca.js.map