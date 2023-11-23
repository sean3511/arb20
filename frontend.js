this.kubio = this.kubio || {}, this.kubio.frontend = function(t) {
	var e = {};

	function i(s) {
		if (e[s]) return e[s].exports;
		var n = e[s] = {
			i: s,
			l: !1,
			exports: {}
		};
		return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	return i.m = t, i.c = e, i.d = function(t, e, s) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: s
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
		var s = Object.create(null);
		if (i.r(s), Object.defineProperty(s, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var n in t) i.d(s, n, function(e) {
				return t[e]
			}.bind(null, n));
		return s
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "", i(i.s = 655)
}({
	206: function(t, e) {
		! function() {
			t.exports = this.kubio.scripts
		}()
	},
	621: function(t, e) {
		! function(t) {
			const e = function(e) {
				const i = t.extend({
					animationType: "rotate-1",
					animationDelay: 2500,
					barAnimationDelay: 3800,
					barWaiting: 800,
					lettersDelay: 50,
					typeLettersDelay: 150,
					selectionDuration: 500,
					typeAnimationDelay: 1300,
					revealDuration: 600,
					revealAnimationDelay: 1500
				}, e);
				let s = i.animationDelay;

				function n(t) {
					const e = l(t);
					if (t.parents(".ah-headline").hasClass("type")) {
						const s = t.parent(".ah-words-wrapper");
						s.addClass("selected").removeClass("waiting"), setTimeout((function() {
							s.removeClass("selected"), t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
						}), i.selectionDuration), setTimeout((function() {
							o(e, i.typeLettersDelay)
						}), i.typeAnimationDelay)
					} else if (t.parents(".ah-headline").hasClass("letters")) {
						const s = t.children("i").length >= e.children("i").length;
						a(t.find("i").eq(0), t, s, i.lettersDelay), r(e.find("i").eq(0), e, s, i.lettersDelay)
					} else t.parents(".ah-headline").hasClass("clip") ? t.parents(".ah-words-wrapper").animate({
						width: "2px"
					}, i.revealDuration, (function() {
						h(t, e), o(e)
					})) : t.parents(".ah-headline").hasClass("loading-bar") ? (t.parents(".ah-words-wrapper").removeClass("is-loading"), h(t, e), setTimeout((function() {
						n(e)
					}), i.barAnimationDelay), setTimeout((function() {
						t.parents(".ah-words-wrapper").addClass("is-loading")
					}), i.barWaiting)) : (h(t, e), setTimeout((function() {
						n(e)
					}), i.animationDelay))
				}

				function o(t, e) {
					t.parents(".ah-headline").hasClass("type") ? (r(t.find("i").eq(0), t, !1, e), t.addClass("is-visible").removeClass("is-hidden")) : t.parents(".ah-headline").hasClass("clip") && t.parents(".ah-words-wrapper").animate({
						width: t.width() + 10
					}, i.revealDuration, (function() {
						setTimeout((function() {
							n(t)
						}), i.revealAnimationDelay)
					}))
				}

				function a(e, s, o, r) {
					if (e.removeClass("in").addClass("out"), e.is(":last-child") ? o && setTimeout((function() {
							n(l(s))
						}), i.animationDelay) : setTimeout((function() {
							a(e.next(), s, o, r)
						}), r), e.is(":last-child") && t("html").hasClass("no-csstransitions")) {
						const t = l(s);
						h(s, t)
					}
				}

				function r(t, e, s, o) {
					t.addClass("in").removeClass("out"), t.is(":last-child") ? (e.parents(".ah-headline").hasClass("type") && setTimeout((function() {
						e.parents(".ah-words-wrapper").addClass("waiting")
					}), 200), s || setTimeout((function() {
						n(e)
					}), i.animationDelay)) : setTimeout((function() {
						r(t.next(), e, s, o)
					}), o)
				}

				function l(t) {
					return t.is(":last-child") ? t.parent().children().eq(0) : t.next()
				}

				function h(t, e) {
					t.removeClass("is-visible").addClass("is-hidden"), e.removeClass("is-hidden").addClass("is-visible")
				}
				this.each((function() {
					const e = t(this);
					if (i.animationType && ("type" === i.animationType || "rotate-2" === i.animationType || "rotate-3" === i.animationType || "scale" === i.animationType ? e.find(".ah-headline").addClass("letters " + i.animationType) : "clip" === i.animationType ? e.find(".ah-headline").addClass(i.animationType + " is-full-width") : e.find(".ah-headline").addClass(i.animationType)), t(".ah-headline.letters").find("b").each((function() {
							const e = t(this),
								i = e.text().split(""),
								s = e.hasClass("is-visible");
							for (const t in i) e.parents(".rotate-2").length > 0 && (i[t] = "<em>" + i[t] + "</em>"), i[t] = s ? '<i class="in">' + i[t] + "</i>" : "<i>" + i[t] + "</i>";
							const n = i.join("");
							e.html(n).css("opacity", 1)
						})), e.hasClass("loading-bar")) s = i.barAnimationDelay, setTimeout((function() {
						e.find(".ah-words-wrapper").addClass("is-loading")
					}), i.barWaiting);
					else if (e.hasClass("clip")) {
						const t = e.find(".ah-words-wrapper"),
							i = t.width() + 10;
						t.css("width", i)
					} else if (!e.find(".ah-headline").hasClass("type")) {
						let i = e.find(".ah-words-wrapper b"),
							s = 0;
						i.each((function() {
							const e = t(this).width();
							e > s && (s = e)
						})), e.find(".ah-words-wrapper").css("width", s)
					}
					setTimeout((function() {
						n(e.find(".is-visible").eq(0))
					}), s)
				}))
			};
			window.wp && window.wp.customize ? t.fn.animatedHeadline = function() {
				const t = this,
					i = arguments;
				setTimeout((() => {
					e.apply(t, i)
				}), 100)
			} : t.fn.animatedHeadline = e
		}(jQuery)
	},
	622: function(t, e) {
		! function(t, e) {
			const i = "fancy-title",
				s = function(t, s) {
					this.namespace = i, this.defaults = {
						typeAnimationDurationIn: .1,
						typeAnimationDurationOut: .1,
						animationDuration: 1
					}, e.apply(this, arguments), this.start()
				};
			s.prototype = {
				start() {
					if ("type" !== this.opts.typeAnimation) jQuery(this.$element).animatedHeadline({
						animationType: this.opts.typeAnimation,
						animationDelay: 1e3 * this.opts.animationDuration
					});
					else if (!this.isIE()) {
						jQuery(this.$element).attr("fancy-id");
						const t = this.opts.rotatingWords.split("\n");
						t.unshift(this.opts.word);
						const e = {
							strings: t,
							typeSpeed: 1e3 * this.opts.typeAnimationDurationIn,
							backSpeed: 1e3 * this.opts.typeAnimationDurationOut,
							contentType: "html",
							smartBackspace: !1,
							loop: !0
						};
						this.$element.empty(), new Typed(this.$element[0], e)
					}
				},
				isIE() {
					const t = navigator.userAgent;
					return t.indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	623: function(t, e) {
		! function(t, e) {
			const i = "video";
			class s {
				constructor(t, e = {}) {
					this.$element = t, this.data = e
				}
				play() {}
				stop() {}
				pause() {}
				startIfAutoplay() {
					this.data.autoPlay && this.play()
				}
				getContentWindow() {
					const t = this.$element.find("iframe");
					if (!(t.length < 1)) return t.get(0).contentWindow
				}
			}
			class n extends s {
				play() {
					this.runCommand("playVideo")
				}
				pause() {
					this.runCommand("pauseVideo")
				}
				stop() {
					this.runCommand("stopVideo")
				}
				runCommand(t) {
					const e = this.getContentWindow();
					if (!e) return;
					const i = JSON.stringify({
						event: "command",
						func: t
					});
					e.postMessage(i, "https://www.youtube.com")
				}
			}
			class o extends s {
				play() {
					this.runCommand("play")
				}
				pause() {
					this.runCommand("pause")
				}
				stop() {
					this.runCommand("pause"), this.runCommand("setCurrentTime", "0")
				}
				runCommand(t, e) {
					const i = this.getContentWindow();
					if (!i) return;
					const s = JSON.stringify({
						method: t,
						value: e
					});
					i.postMessage(s, "*")
				}
			}
			class a extends s {
				constructor(t, e) {
					super(t, e), this.video = this.$element.find("video").get(0), this.video.loop && e.startTime && e.endTime && this.video.addEventListener("timeupdate", (() => {
						this.video.currentTime >= e.endTime && (this.video.currentTime = e.startTime, this.play())
					}))
				}
				play() {
					this.video.play().catch((t => {
						this.video.muted = !0
					}))
				}
				pause() {
					this.video.pause()
				}
				stop() {
					this.pause(), this.video.currentTime = 0
				}
			}
			const r = function(t, s) {
				this.namespace = i, this.defaults = {
					data: {}
				}, e.apply(this, arguments), this.start()
			};
			r.prototype = {
				start() {
					switch ((this.opts || {}).displayAs) {
						case "posterImage":
							this.addPosterImageLogic();
							break;
						case "iconWithLightbox":
							this.addIconWithLightBoxLogic()
					}
					this.addVideoHandler();
					let t = !1;
					this.intersectionObserver = this.$element.respondToVisibility((e => {
						e && t && this.handler.startIfAutoplay(), t || (t = !0)
					}))
				},
				stop() {
					this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = null)
				},
				addVideoHandler() {
					switch (this.opts.videoCategory) {
						case "internal":
							this.handler = new a(this.$element, this.opts);
							break;
						case "youtube":
							this.handler = new n(this.$element, this.opts);
							break;
						case "vimeo":
							this.handler = new o(this.$element, this.opts)
					}
				},
				addPosterImageLogic() {
					const t = this.opts,
						e = this.$element.find(".wp-block-kubio-video__poster");
					if (0 !== e.length) {
						const i = e.find("a"),
							s = e.find(".h-svg-icon");
						0 !== i.length && (i.removeAttr("href"), i.click({
							element: this.$element,
							data: t
						}, this.startVideo.bind(this))), 0 !== s.length && s.click({
							element: this.$element,
							data: t
						}, this.startVideo.bind(this))
					}
				},
				addIconWithLightBoxLogic() {
					const t = this.opts,
						e = this.$element.find(".wp-block-kubio-video__lightbox");
					0 !== e.length && e.find(".h-svg-icon ").click({
						element: this.$element,
						data: t
					}, this.startVideo)
				},
				startVideo(e) {
					const i = e.data.element,
						s = e.data.data.lightBox;
					if (s || i.find(".wp-block-kubio-video__poster").hide(), "internal" !== e.data.data.videoCategory) {
						const e = i.find("iframe");
						if (s) {
							let s = e.attr("src");
							s = s.replace("autoplay=0", "autoplay=1"), s = s.replace("autopause=0", ""), t.fancybox.open({
								src: s,
								opts: {
									beforeClose(t, e) {
										i.find(".wp-block-kubio-video__poster").show()
									}
								}
							})
						} else this.handler.play()
					} else s ? (i.find(".wp-block-kubio-video__video"), t.fancybox.open({
						src: i.find("video"),
						type: "inline",
						modal: !1,
						touch: !1,
						showCloseButton: !0,
						opts: {
							afterLoad(t, e) {
								const i = e.$content.find("video");
								0 !== i.length && i.removeClass("h-video-main")
							},
							beforeClose(t, e) {
								i.find(".wp-block-kubio-video__poster").show()
							}
						}
					})) : this.handler.play()
				}
			}, r.inherits(e), e[i] = r, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	624: function(t, e) {
		! function(t, e) {
			const i = "dropdown-menu",
				s = function() {
					this.namespace = i, this.defaults = {
						menuSelector: ".kubio-menu",
						$menu: null
					}, e.apply(this, arguments), this.start()
				};
			s.prototype = {
				start() {
					const t = this.$element.find(this.opts.menuSelector).first();
					this.opts.$menu = t;
					const e = t.find("> ul > li.current-menu-item").get(0);
					this.stop(), this.addListener(), this.addFocusListener(), this.addReverseMenuLogic(), this.addTabletMenuLogic(), this.addMenuScrollSpy(t, e)
				},
				toggleFocus(e, i = !0) {
					for (; this.opts.$menu[0] !== e;) "li" === e.tagName.toLowerCase() && (i ? (t(e).closest("li.menu-item-has-children").children("a").addClass("hover"), e.classList.add("hover"), t(e).children("a").addClass("hover")) : (t(e).closest("li.menu-item-has-children").children("a").removeClass("hover"), e.classList.remove("hover"), t(e).children("a").removeClass("hover"))), e = e.parentElement
				},
				addFocusListener() {
					const t = this.opts.$menu.find("li");
					t.on("mouseover", (t => {
						this.toggleFocus(t.currentTarget)
					})), t.on("mouseout", (t => {
						this.toggleFocus(t.currentTarget, !1)
					}));
					const e = this.opts.$menu.find("li > a");
					e.on("focus", (t => {
						this.toggleFocus(t.currentTarget)
					})), e.on("blur", (t => {
						this.toggleFocus(t.currentTarget, !1)
					}))
				},
				stop() {
					this.removeListeners()
				},
				copyLiEventTaA(e) {
					let i = "";
					e.target && e.target.tagName && (i = e.target.tagName), "a" !== i.toLowerCase() && t(e.currentTarget).find("> a")[0].click()
				},
				addListener() {
					this.opts.$menu.find("li").on("click", this.copyLiEventTaA)
				},
				removeListeners() {
					const t = this.opts.$menu;
					t.off("mouseover.navigation"), t.find("li").off("click", this.copyLiEventTaA), this.removeTabletLogic()
				},
				removeTabletLogic() {
					this.opts.$menu.off("tap.navigation")
				},
				addReverseMenuLogic() {
					const e = this.opts.$menu,
						i = this;
					e.on("mouseover.navigation", "li", (function() {
						e.find("li.hover").removeClass("hover"), i.setOpenReverseClass(e, t(this))
					}))
				},
				setOpenReverseClass(t, e) {
					if (this.getItemLevel(t, e) > 0) {
						const t = e.children("ul"),
							i = t.length && e.offset().left + e.width() + 300 > window.innerWidth,
							s = t.length && e.closest(".open-reverse").length;
						i || s ? t.addClass("open-reverse") : t.length && t.removeClass("open-reverse")
					}
				},
				getItemLevel(t, e) {
					const i = this.opts.menuSelector;
					return e.parentsUntil(i).filter("li").length
				},
				addTabletMenuLogic() {
					const t = this.opts.$menu;
					this.opts.clickOnLink || (this.opts.clickOnLink = this.clickOnLink.bind(this)), this.opts.clickOnArrow || (this.opts.clickOnArrow = this.clickOnArrow.bind(this)), t.off("tap.navigation", this.opts.clickOnArrow), t.on("tap.navigation", "li.menu-item > a svg", this.opts.clickOnArrow), t.off("tap.navigation", this.opts.clickOnLink), t.on("tap.navigation", "li.menu-item > a", this.opts.clickOnLink)
				},
				clickOnLink(e, i = !1) {
					const s = this,
						n = t(e.target),
						o = n.closest("li"),
						a = n.closest("a"),
						r = this.opts.$menu;
					if (o.children("ul").length)
						if (s.isSelectedItem(o)) {
							const n = a.attr("href");
							if (0 === n.indexOf("#")) {
								const e = n.replace("#", "").trim();
								if (!e || !t("#" + e).length) return
							}
							e.stopPropagation(), i && e.preventDefault(), s.deselectItems(r, o)
						} else e.stopPropagation(), e.preventDefault(), s.selectItem(r, o);
					else e.stopPropagation(), (i || !i && s.isSelectedItem(o)) && e.preventDefault(), s.deselectItems(r, o)
				},
				clickOnArrow(t) {
					this.clickOnLink(t, !0)
				},
				selectItem(e, i) {
					this.deselectItems(e, i), i.attr("data-selected-item", !0), this.clearMenuHovers(e, i), i.addClass("hover"), this.setOpenReverseClass(e, i);
					const s = this;
					t("body").on("tap.navigation-clear-selection", "*", (function() {
						const t = jQuery(this);
						s.clearSelectionWhenTapOutside(t, e)
					})), t(window).on("scroll.navigation-clear-selection", (function() {
						const t = jQuery(this);
						s.clearSelectionWhenTapOutside(t, e)
					}))
				},
				deselectItems(e, i) {
					i.removeClass("hover"), e.find("[data-selected-item]").each((function() {
						t(this).removeAttr("data-selected-item");
						const i = e.children("ul");
						e.is(".mobile-menu") && i.slideDown()
					}))
				},
				isSelectedItem: t => t.is("[data-selected-item]"),
				clearMenuHovers(e, i) {
					const s = this;
					e.find("li.hover").each((function() {
						i && s.containsSelectedItem(t(this)) || t(this).removeClass("hover")
					}))
				},
				containsSelectedItem: t => t.find("[data-selected-item]").length > 0 || t.is("[data-selected-item]"),
				clearSelectionWhenTapOutside(e, i) {
					t("body").off("tap.navigation-clear-selection"), t(window).off("scroll.navigation-clear-selection"), e.is(i) || t.contains(i[0], this) || this.clearMenuHovers(i)
				},
				addMenuScrollSpy(e, i) {
					const s = e;
					t.fn.kubioScrollSpy && s.find("a").kubioScrollSpy({
						onChange() {
							s.find(".current-menu-item, .current_page_item").removeClass("current-menu-item current_page_item"), t(this).closest("li").addClass("current-menu-item current_page_item")
						},
						onLeave() {
							const e = s.closest(".h-navigation_sticky");
							t(this).closest("li").removeClass("current-menu-item current_page_item hover"), !s.find(".current-menu-item, .current_page_item").length && i && (e || s.find(".current-menu-item, .current_page_item").removeClass("current-menu-item current_page_item"), t(i).addClass("current-menu-item current_page_item"))
						},
						smoothScrollAnchor: !0,
						offset() {
							const t = s.closest(".h-navigation_sticky");
							return t.length ? t[0].getBoundingClientRect().height : 0
						}
					}), t(window).trigger("smoothscroll.update")
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	625: function(t, e) {
		! function(t, e) {
			const i = "accordion-menu",
				s = function(t, s) {
					this.namespace = i, this.defaults = {
						menuSelector: ".kubio-menu",
						offCanvasWrapper: ".kubio-menu-container",
						linkSelector: ".menu-item-has-children > a, .page_item_has_children > a",
						linkLeafsSelector: "li:not(.menu-item-has-children):not(.page_item_has_children) > a",
						arrowSelector: "svg",
						$menu: null
					}, e.apply(this, arguments), this.initBindedFunctions(), this.initEventListenersData(), this.start()
				};
			s.prototype = {
				start() {
					const t = this.$element.find(this.opts.menuSelector).first();
					this.opts.$menu = t;
					const e = t.find("> ul > li.current-menu-item").get(0);
					this.opts.$menu.find("a").data("allow-propagation", !0), this.opts.$menu.find(this.opts.arrowSelector).attr("tabIndex", 0), this.removeEventListeners(), this.addEventListeners(), this.addMenuScrollSpy(t, e);
					const i = this.opts.$menu.find(".current-menu-parent").first();
					i.length && this.openDropDown(i), this.addFocusListener()
				},
				initBindedFunctions() {
					this.debounceApplyDropdownLogic = t.debounce(this.applyDropdownLogic.bind(this), 10), this.bindedLinkEventHandler = this.linkEventHandler.bind(this), this.bindedLinkArrowEventHandler = this.linkArrowEventHandler.bind(this)
				},
				initEventListenersData() {
					const t = ".accordion-menu",
						e = ["click", "tap"].map((e => `${e}${t}`)),
						i = e.map((t => t + ".link-selector")).join(" "),
						s = e.concat([`keyup${t}`]).map((t => t + " svg")).join(" "),
						n = e.map((t => t + ".off-canvas")).join(" ");
					this._eventOptions = {
						menuNamespace: t,
						linkSelectorEvent: i,
						arrowSelectorEvent: s,
						offCanvasEvent: n
					}
				},
				toggleFocus(e, i = !0) {
					for (; this.opts.$menu[0] !== e;) "li" === e.tagName.toLowerCase() && (i ? (t(e).closest("li.menu-item-has-children").children("a").addClass("hover"), e.classList.add("hover"), t(e).children("a").addClass("hover")) : (t(e).closest("li.menu-item-has-children").children("a").removeClass("hover"), e.classList.remove("hover"), t(e).children("a").removeClass("hover"))), e = e.parentElement
				},
				addFocusListener() {
					const t = this.opts.$menu.find("a");
					t.on("focus", (t => {
						this.toggleFocus(t.currentTarget)
					})), t.on("blur", (t => {
						this.toggleFocus(t.currentTarget, !1)
					}))
				},
				addEventListeners() {
					const e = this.opts.$menu,
						i = this._eventOptions;
					e.on(i.arrowSelectorEvent, this.opts.arrowSelector, this.bindedLinkArrowEventHandler), window.wp && window.wp.customize && e.off(i.linkSelectorEvent, this.opts.linkSelector), e.on(i.linkSelectorEvent, this.opts.linkSelector, this.bindedLinkEventHandler), e.on(i.offCanvasEvent, this.opts.linkLeafsSelector, this.closeOffcanvasPanel), t(document).on("keyup." + this.namespace, t.proxy(this.handleKeyboard, this))
				},
				removeEventListeners() {
					const e = this.opts.$menu,
						i = this._eventOptions;
					e.off(i.menuNamespace), t(document).on("keyup." + this.namespace)
				},
				stop() {
					this.removeEventListeners(), this.removeAllSvgArrows()
				},
				handleKeyboard(e) {
					let i = e.target;
					"svg" === i.tagName.toLowerCase() && (i = i.parentNode), t.contains(this.opts.$menu[0], i) && t(i).siblings("ul").length && (37 === e.which && this.closeDropDown(t(i).closest("li")), 39 === e.which && this.openDropDown(t(i).closest("li")))
				},
				openDropDown(e) {
					e && ((e = t(e).is("a") ? t(e).closest("li") : t(e)).addClass("open"), e.children("ul").slideDown(100))
				},
				closeDropDown(e) {
					e && ((e = t(e).is("a") ? t(e).closest("li") : t(e)).removeClass("open"), e.children("ul").slideUp(100))
				},
				isDropDownOpen: t => t.is(".open"),
				closeOffcanvasPanel() {
					window.wp && window.wp.customize
				},
				linkEventHandler(e, i) {
					const s = window.wp && window.wp.customize;
					s && e.preventDefault();
					const n = t(e.target).closest("li");
					0 === n.find("ul").length || !i && n.hasClass("open") && !s ? this.closeOffcanvasPanel() : ((i || !i && !n.hasClass("open")) && (e.preventDefault(), e.stopPropagation()), this.debounceApplyDropdownLogic(e, i))
				},
				linkArrowEventHandler(t) {
					"keyup" === t.type ? 13 === t.which && this.linkEventHandler(t, !0) : this.linkEventHandler(t, !0)
				},
				applyDropdownLogic(e, i) {
					const s = t(e.target).closest("li");
					0 !== s.find("ul").length ? i && this.isDropDownOpen(s) ? this.closeDropDown(s) : this.openDropDown(s) : this.closeOffcanvasPanel()
				},
				removeAllSvgArrows() {
					this.opts.$menu && this.opts.$menu.find(this.opts.arrowSelector).remove()
				},
				addMenuScrollSpy(e, i) {
					const s = e,
						n = this;
					if (t.fn.kubioScrollSpy) {
						const e = n.opts.linkSelector,
							o = n.opts.arrowSelector;
						s.find("a").not(e).not(o).kubioScrollSpy({
							onChange() {
								s.find(".current-menu-item,.current_page_item").removeClass("current-menu-item current_page_item"), t(this).closest("li").addClass("current-menu-item current_page_item")
							},
							onLeave() {
								t(this).closest("li").removeClass("current-menu-item current_page_item"), !s.find(".current-menu-item, .current_page_item").length && i && t(i).addClass("current-menu-item current_page_item")
							},
							clickCallback() {
								n.closeOffcanvasPanel()
							},
							smoothScrollAnchor: !0,
							offset() {
								const t = s.closest('[data-kubio-component="navigation"]');
								return t.length ? t[0].getBoundingClientRect().height + 20 : 20
							}
						})
					}
					t(window).trigger("smoothscroll.update")
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	626: function(t, e) {
		! function(t, e) {
			const i = "offcanvas",
				s = function(t, i) {
					this.namespace = "offcanvas", this.defaults = {
						target: null,
						push: !0,
						width: "250px",
						direction: "left",
						toggleEvent: "click",
						clickOutside: !0,
						animationOpen: "slideInLeft",
						animationClose: "slideOutLeft",
						callbacks: ["open", "opened", "close", "closed"],
						offcanvasOverlayId: null,
						$overlayElement: null,
						targetId: null
					}, e.apply(this, arguments), this.utils = new e.Utils, this.detect = new e.Detect, this.start()
				};
			s.prototype = {
				start() {
					if (!this.hasTarget()) return;
					const e = this.opts.offcanvasOverlayId;
					this.opts.$overlayElement = t("#" + e), this.buildTargetWidth(), this.buildAnimationDirection(), this.$close = this.getCloseLink(), this.$element.on(this.opts.toggleEvent + "." + this.namespace, t.proxy(this.toggle, this)), this.$target.addClass("offcanvas"), this.$target.trigger("kubio.offcanvas.ready"), this.moveOffcanvas(), this.addOffcanvasOverlayLogic()
				},
				stop() {
					this.closeAll(), this.removeOffcanvasElements(), this.$element.off("." + this.namespace), this.$close && this.$close.off("." + this.namespace), t(document).off("." + this.namespace)
				},
				removeOffcanvasElements() {
					this.$target.remove(), this.opts.$overlayElement.remove()
				},
				moveOffcanvas() {
					const t = this.$target[0];
					document.querySelector("html > body").appendChild(t);
					const e = this.opts.$overlayElement[0];
					document.querySelector("html > body").appendChild(e)
				},
				preventDefault: t => (t.preventDefault(), t.stopPropagation(), !1),
				addOffcanvasOverlayLogic() {
					const t = this.opts.$overlayElement,
						e = this.$target;
					e.length && (t[0].addEventListener("scroll", this.preventDefault, {
						passive: !0
					}), t[0].addEventListener("touchmove", this.preventDefault, {
						passive: !0
					}), t[0].addEventListener("mousewheel", this.preventDefault, {
						passive: !0
					}), e.on("kubio.offcanvas.open", (function() {
						t.addClass("h-offcanvas-opened")
					})), e.on("kubio.offcanvas.close", (function() {
						t.removeClass("h-offcanvas-opened")
					})))
				},
				toggle(t) {
					this.isOpened() ? this.close(t) : this.open(t)
				},
				buildTargetWidth() {
					this.opts.width = t(window).width() < parseInt(this.opts.width) ? "100%" : this.opts.width
				},
				buildAnimationDirection() {
					"right" === this.opts.direction && (this.opts.animationOpen = "slideInRight", this.opts.animationClose = "slideOutRight")
				},
				getCloseLink() {
					return this.$target.find(".close")
				},
				open(i) {
					i && i.preventDefault(), this.isOpened() || (this.closeAll(), this.callback("open"), this.$target.addClass("offcanvas-" + this.opts.direction), this.$target.css("width", Math.min(parseInt(this.opts.width), window.innerWidth - 100)), this.$target.css("right", "-" + Math.min(parseInt(this.opts.width), window.innerWidth - 100)), this.$target.trigger("kubio.offcanvas.open"), e.animate(this.$target, this.opts.animationOpen, t.proxy(this.onOpened, this)), this.$element.trigger("kubio.offcanvas.open"))
				},
				closeAll() {
					const i = t(document).find(".offcanvas");
					0 !== i.length && (i.each((function() {
						const i = t(this);
						i.hasClass("open") && (i.css("width", ""), e.animate(i, "hide"), i.removeClass("open offcanvas-left offcanvas-right"))
					})), t(document).off("." + this.namespace), t("body").css("left", ""))
				},
				close(i) {
					if (i) {
						const e = t(i.target);
						if (("A" === e[0].tagName || "INPUT" === e[0].tagName || "BUTTON" === e[0].tagName || e.parents("button, a").length) && 0 !== e.closest(".offcanvas").length && !e.hasClass("close") && window.location.href !== i.target.href) return;
						i.preventDefault()
					}
					this.isOpened() && (this.callback("close"), this.$target.trigger("kubio.offcanvas.close"), e.animate(this.$target, this.opts.animationClose, t.proxy(this.onClosed, this)))
				},
				isOpened() {
					return this.$target.hasClass("open")
				},
				onOpened() {
					this.$target.find("a").eq(0).focus(), this.$target.removeClass("hide"), this.opts.clickOutside && t(document).on("click." + this.namespace + " tap." + this.namespace, t.proxy(this.close, this)), this.detect.isMobileScreen() && t("html").addClass("no-scroll"), t(document).on("keyup." + this.namespace, t.proxy(this.handleKeyboard, this)), t(document).on("keydown." + this.namespace, t.proxy(this.handleKeyDown, this)), this.$close.on("click." + this.namespace, t.proxy(this.close, this)), this.$target.addClass("open"), this.callback("opened")
				},
				onClosed() {
					t("html").removeClass("no-scroll"), this.$target.css("width", "").removeClass("offcanvas-" + this.opts.direction), this.$close.off("." + this.namespace), t(document).off("." + this.namespace), this.$target.removeClass("open"), this.callback("closed"), this.$target.trigger("kubio.offcanvas.closed")
				},
				handleKeyboard(e) {
					27 === e.which && (document.activeElement && t(document.activeElement).closest(".offcanvas").length && this.$element.focus(), this.close())
				},
				handleKeyDown(t) {
					if (9 === t.which) {
						const e = this.$target.find("a:visible"),
							i = t.shiftKey;
						if (e.last().is(t.target) && !i) return e.first().focus(), t.preventDefault(), void t.stopPropagation();
						e.first().is(t.target) && i && (e.last().focus(), t.preventDefault(), t.stopPropagation())
					}
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	627: function(t, e) {
		! function(t, e) {
			const i = "accordion",
				s = function(t, s) {
					this.namespace = i, this.defaults = {
						target: null,
						toggle: !0,
						active: !1,
						toggleClass: "h-accordion-item-title",
						boxClass: "h-accordion-item-content__container",
						activeClass: "accordion-active h-custom-active-state",
						callbacks: ["open", "opened", "close", "closed"],
						hashes: [],
						currentHash: !1,
						currentItem: !1
					}, e.apply(this, arguments), this.start()
				};
			s.prototype = {
				start() {
					this.$items = this.getItems(), this.$items.each(t.proxy(this.loadItems, this)), this.$boxes = this.getBoxes(), this.setInitialOpenedItems(), this.setActiveItem()
				},
				stop() {
					this.closeAll()
				},
				restart() {
					this.updateOpts(), this.stop(), this.start()
				},
				getItems() {
					return this.$element.find(`> .h-accordion-item > .${this.opts.toggleClass}`)
				},
				setInitialOpenedItems() {
					let e = !1;
					this.$items.each(((i, s) => {
						"true" !== t(s).attr("data-open-by-default") || this.opts.toggle && (!this.opts.toggle || e) || (e = !0, this.addActive(this.getItem(s)))
					}))
				},
				getBoxes() {
					return this.$element.find(`> .h-accordion-item > .${this.opts.boxClass}, > .h-accordion-item > .h-accordion-item-content`)
				},
				loadItems(e, i) {
					const s = this.getItem(i);
					s.$el.attr("rel", s.hash), s.$el.hasClass(this.opts.activeClass) && (this.opts.currentItem = s, this.opts.active = s.hash);
					const n = ["click", "tap"].map((t => `${t}.${this.namespace} `)).join(" ");
					s.$el.off(n).on(n, t.proxy(this.toggle, this))
				},
				setActiveItem() {
					!1 !== this.opts.active && (this.opts.currentItem = this.getItemBy(this.opts.active), this.opts.active = this.opts.currentItem.hash), !1 !== this.opts.currentItem && (this.addActive(this.opts.currentItem), this.opts.currentItem.$box.removeClass("hide"))
				},
				addActive(t) {
					t.$box.find(".h-element").trigger("colibriContainerOpened"), t.$box.removeClass("hide").addClass("open"), t.$el.addClass(this.opts.activeClass), !1 !== t.$caret && t.$caret.removeClass("down").addClass("up"), !1 !== t.$parent && t.$parent.addClass(this.opts.activeClass), this.opts.currentItem = t
				},
				removeActive(t) {
					t.$box.removeClass("open"), t.$el.removeClass(this.opts.activeClass), !1 !== t.$caret && t.$caret.addClass("down").removeClass("up"), !1 !== t.$parent && t.$parent.removeClass(this.opts.activeClass), this.opts.currentItem = !1
				},
				toggle(e) {
					e && e.preventDefault();
					const i = t(e.target).closest("." + this.opts.toggleClass).get(0) || e.target,
						s = this.getItem(i);
					this.isOpened(s.hash) ? this.close(s.hash) : this.open(e)
				},
				openAll() {
					this.$items.addClass(this.opts.activeClass), this.$boxes.addClass("open").removeClass("hide")
				},
				open(e, i) {
					if (void 0 === e) return;
					"object" == typeof e && e.preventDefault();
					const s = t(e.target).closest("." + this.opts.toggleClass).get(0) || e.target,
						n = "object" == typeof e ? this.getItem(s) : this.getItemBy(e);
					n.$box.hasClass("open") || (this.opts.toggle && this.closeAll(), this.callback("open", n), this.addActive(n), this.onOpened())
				},
				onOpened() {
					this.callback("opened", this.opts.currentItem)
				},
				closeAll() {
					this.$items.removeClass(this.opts.activeClass).closest("li").removeClass(this.opts.activeClass), this.$boxes.removeClass("open").addClass("hide")
				},
				close(t) {
					const e = this.getItemBy(t);
					this.callback("close", e), this.opts.currentItem = e, this.onClosed()
				},
				onClosed() {
					const t = this.opts.currentItem;
					this.removeActive(t), this.callback("closed", t)
				},
				isOpened(e) {
					return t("[rel=" + e + "]").hasClass(this.opts.activeClass)
				},
				getItem(e) {
					const i = {};
					i.$el = t(e), i.hash = i.$el.attr("href"), i.$box = t(i.hash);
					const s = i.$el.parent();
					i.$parent = "LI" === s[0].tagName && s;
					const n = i.$el.find(".caret");
					return i.$caret = 0 !== n.length && n, i
				},
				getItemBy(t) {
					const e = "number" == typeof t ? this.$items.eq(t - 1) : this.$element.find('[rel="' + t + '"]');
					return this.getItem(e)
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	628: function(t, e) {
		! function(t, e) {
			const i = "tabs",
				s = function(t, s) {
					this.namespace = i, this.defaults = {
						equals: !1,
						active: !1,
						hash: !0,
						contentActiveClass: "h-tabs-content-active",
						navActiveClass: "h-tabs-navigation-active-item h-custom-active-state",
						callbacks: ["init", "next", "prev", "open", "opened", "close", "closed"]
					}, e.apply(this, arguments), this.start()
				};
			s.prototype = {
				start() {
					this.tabsCollection = [], this.hashesCollection = [], this.currentHash = [], this.currentItem = !1, this.$items = this.getItems(), this.$items.length && (this.$items.each(t.proxy(this.loadItems, this)), this.$tabs = this.getTabs(), this.currentHash = this.getLocationHash(), this.closeAll(), this.setActiveItem(), this.setItemHeight(), this.callback("init"), window.addEventListener("hashchange", this.onHashChange.bind(this), !1))
				},
				restart() {
					this.updateOpts(), this.stop(), this.start()
				},
				stop() {
					this.$items.length > 0 && this.$items.each(t.proxy(this.unbindItem, this))
				},
				unbindItem(t, e) {
					const i = ["click", "tap"].map((t => `${t}.${this.namespace} `)).join(" ");
					this.getItem(e).$el.off(i)
				},
				getTabs() {
					return t(this.tabsCollection).map((function() {
						return this.toArray()
					}))
				},
				elementIsVisible(t) {
					let e = t.offsetTop;
					const i = t.offsetHeight;
					for (; t.offsetParent;) e += (t = t.offsetParent).offsetTop;
					return e < window.pageYOffset + window.innerHeight && e + i > window.pageYOffset
				},
				tabsIsVisible() {
					return this.elementIsVisible(this.$element.get(0))
				},
				tabsTopIsVisible() {
					const t = this.$element.get(0).getBoundingClientRect();
					return this.tabsIsVisible() && t.top > 0
				},
				onHashChange(t) {
					this.closeAll(), this.currentHash = this.getLocationHash(), this.setActiveItem(), this.currentHash && !this.tabsTopIsVisible() && this.$element.get(0).scrollIntoView()
				},
				getItems() {
					return this.$element.find("> .h-tabs-navigation .h-tabs-navigation-item")
				},
				loadItems(e, i) {
					const s = this.getItem(i);
					s.$el.attr("rel", s.hash), this.collectItem(s), s.$el.hasClass(this.opts.navActiveClass) && (this.currentItem = s, this.opts.active = s.hash);
					const n = ["click", "tap"].map((t => `${t}.${this.namespace} `)).join(" ");
					s.$el.off(n).on(n, t.proxy(this.open, this))
				},
				collectItem(t) {
					this.tabsCollection.push(t.$tab), this.hashesCollection.push(t.hash)
				},
				setActiveItem() {
					this.currentHash ? (this.currentItem = this.getItemBy(this.currentHash), this.opts.active = this.currentHash) : !1 === this.opts.active ? (this.currentItem = this.getItem(this.$items.first()), this.opts.active = this.currentItem.hash) : this.opts.active && (this.currentItem = this.getItemBy(this.opts.active)), this.addActive(this.currentItem)
				},
				addActive(t) {
					t.$tab.find(".h-element").trigger("colibriContainerOpened"), t.$tab.find('[data-kubio="kubio/slider"], [data-kubio="kubio/carousel"], [data-kubio="kubio/counter"]').trigger("colibriContainerOpened"), t.$el.addClass(this.opts.navActiveClass), t.$tab.removeClass("hide").addClass(this.opts.contentActiveClass), this.currentItem = t
				},
				removeActive(t) {
					t.$el.removeClass(this.opts.navActiveClass), t.$tab.addClass("hide").removeClass(this.opts.contentActiveClass), this.currentItem = !1
				},
				next(t) {
					t && t.preventDefault();
					const e = this.getItem(this.fetchElement("next"));
					this.open(e.hash), this.callback("next", e)
				},
				prev(t) {
					t && t.preventDefault();
					const e = this.getItem(this.fetchElement("prev"));
					this.open(e.hash), this.callback("prev", e)
				},
				fetchElement(t) {
					let e;
					if (!1 !== this.currentItem) {
						if (e = this.currentItem.$parent[t]().find("a"), 0 === e.length) return
					} else e = this.$items[0];
					return e
				},
				open(t, e) {
					if (void 0 === t) return;
					"object" == typeof t && t.preventDefault();
					const i = "object" == typeof t ? this.getItem(t.target) : this.getItemBy(t);
					this.closeAll(), this.callback("open", i), this.addActive(i), this.pushStateOpen(e, i), this.callback("opened", i)
				},
				pushStateOpen(t, e) {
					if (!1 !== t && !1 !== this.opts.hash) try {
						window.history.pushState(!1, !1, e.hash)
					} catch (t) {}
				},
				close(t) {
					const e = this.getItemBy(t);
					e.$el.hasClass(this.opts.navActiveClass) && (this.callback("close", e), this.removeActive(e), this.pushStateClose(), this.callback("closed", e))
				},
				pushStateClose() {
					!1 !== this.opts.hash && history.pushState(!1, !1, " ")
				},
				closeAll() {
					this.$tabs.removeClass("open").addClass("hide").removeClass(this.opts.contentActiveClass), this.$items.removeClass(this.opts.navActiveClass)
				},
				getItem(e) {
					const i = {};
					return i.$el = t(e), i.$el.is("a") || (i.$el = i.$el.parents("a").eq(0)), i.hash = i.$el.attr("href"), i.$parent = i.$el.parent(), i.$tab = this.$element.find(i.hash), i
				},
				getItemBy(t) {
					const e = "number" == typeof t ? this.$items.eq(t - 1) : this.$element.find('[rel="' + t + '"]');
					return this.getItem(e)
				},
				getLocationHash() {
					return !1 !== this.opts.hash && !!this.isHash() && top.location.hash
				},
				isHash() {
					return !("" === top.location.hash || -1 === t.inArray(top.location.hash, this.hashesCollection))
				},
				setItemHeight() {
					if (this.opts.equals) {
						const t = this.getItemMaxHeight() + "px";
						this.$tabs.css("min-height", t)
					}
				},
				getItemMaxHeight() {
					let e = 0;
					return this.$tabs.each((function() {
						const i = t(this).outerHeight();
						e = i > e ? i : e
					})), e
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	629: function(t, e) {
		! function(t, e, i) {
			const s = function() {
					const t = {
						getAll: t => i.defaultView.getComputedStyle(t),
						get(t, e) {
							return this.getAll(t)[e]
						},
						toFloat: t => parseFloat(t, 10) || 0,
						getFloat(t, e) {
							return this.toFloat(this.get(t, e))
						},
						_getAllCurrentStyle: t => t.currentStyle
					};
					return i.documentElement.currentStyle && (t.getAll = t._getAllCurrentStyle), t
				}(),
				n = function() {
					function e(t) {
						this.element = t, this.replacer = i.createElement("div"), this.replacer.style.visibility = "hidden", this.hide(), t.parentNode.insertBefore(this.replacer, t)
					}
					return e.prototype = {
						replace() {
							const t = this.replacer.style,
								e = s.getAll(this.element);
							t.width = this._width(), t.height = this._height(), t.marginTop = e.marginTop, t.marginBottom = e.marginBottom, t.marginLeft = e.marginLeft, t.marginRight = e.marginRight, t.cssFloat = e.cssFloat, t.styleFloat = e.styleFloat, t.position = e.position, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.display = e.display
						},
						hide() {
							this.replacer.style.display = "none"
						},
						_width() {
							return this.element.getBoundingClientRect().width + "px"
						},
						_widthOffset() {
							return this.element.offsetWidth + "px"
						},
						_height() {
							return jQuery(this.element).outerHeight() + "px"
						},
						_heightOffset() {
							return this.element.offsetHeight + "px"
						},
						destroy() {
							t(this.replacer).remove();
							for (const t in this) this.hasOwnProperty(t) && (this[t] = null)
						}
					}, i.documentElement.getBoundingClientRect().width || (e.prototype._width = e.prototype._widthOffset, e.prototype._height = e.prototype._heightOffset), {
						MimicNode: e,
						computedStyle: s
					}
				}();

			function o() {
				this._vendor = null
			}
			o.prototype = {
				_vendors: {
					webkit: {
						cssPrefix: "-webkit-",
						jsPrefix: "Webkit"
					},
					moz: {
						cssPrefix: "-moz-",
						jsPrefix: "Moz"
					},
					ms: {
						cssPrefix: "-ms-",
						jsPrefix: "ms"
					},
					opera: {
						cssPrefix: "-o-",
						jsPrefix: "O"
					}
				},
				_prefixJsProperty: (t, e) => t.jsPrefix + e[0].toUpperCase() + e.substr(1),
				_prefixValue: (t, e) => t.cssPrefix + e,
				_valueSupported(t, e, i) {
					try {
						return i.style[t] = e, i.style[t] === e
					} catch (t) {
						return !1
					}
				},
				propertySupported: t => void 0 !== i.documentElement.style[t],
				getJsProperty(t) {
					if (this.propertySupported(t)) return t;
					if (this._vendor) return this._prefixJsProperty(this._vendor, t);
					let e;
					for (const i in this._vendors)
						if (e = this._prefixJsProperty(this._vendors[i], t), this.propertySupported(e)) return this._vendor = this._vendors[i], e;
					return null
				},
				getCssValue(t, e) {
					const s = i.createElement("div"),
						n = this.getJsProperty(t);
					if (this._valueSupported(n, e, s)) return e;
					let o;
					if (this._vendor && (o = this._prefixValue(this._vendor, e), this._valueSupported(n, o, s))) return o;
					for (const t in this._vendors)
						if (o = this._prefixValue(this._vendors[t], e), this._valueSupported(n, o, s)) return this._vendor = this._vendors[t], o;
					return null
				}
			};
			const a = new o,
				r = a.getJsProperty("transform");
			let l;
			const h = a.getCssValue("position", "sticky"),
				c = a.getCssValue("position", "fixed");
			let d;

			function p(e, i, s) {
				this.child = e, this._$child = t(e), this.parent = i, this.options = {
					className: "fixto-fixed",
					startAfterNode: {
						enabled: !1,
						selector: ""
					},
					animations: {
						enabled: !1,
						currentInAnimationClass: "",
						currentOutAnimationClass: "",
						allInAnimationsClasses: "",
						allOutAnimationsClasses: "",
						duration: 0
					},
					top: 0,
					zIndex: ""
				}, this._setOptions(s), this._initAnimations()
			}

			function u(t, e, i) {
				p.call(this, t, e, i), this._replacer = new n.MimicNode(t), this._ghostNode = this._replacer.replacer, this._saveStyles(), this._saveViewportHeight(), this._proxied_onscroll = this._bind(this._onscroll, this), this._proxied_onresize = this._bind(this._onresize, this), this.start()
			}

			function m(t, e, i) {
				p.call(this, t, e, i), this.start()
			}
			"Microsoft Internet Explorer" === navigator.appName && (d = parseFloat(navigator.appVersion.split("MSIE")[1])), p.prototype = {
				_mindtop() {
					let t = 0;
					if (this._$mind) {
						let e, i;
						for (let n = 0, o = this._$mind.length; n < o; n++)
							if (e = this._$mind[n], i = e.getBoundingClientRect(), i.height) t += i.height;
							else {
								const i = s.getAll(e);
								t += e.offsetHeight + s.toFloat(i.marginTop) + s.toFloat(i.marginBottom)
							}
					}
					return t
				},
				_updateOutAnimationDuration() {
					let t = this.options.animations.duration;
					isNaN(t) && (t = 0), this._animationDuration = t
				},
				_initAnimations() {
					const e = this.options.animations;
					this._$child.removeClass(e.allInAnimationsClasses), this._$child.removeClass(e.allOutAnimationsClasses);
					const i = this;
					this._updateOutAnimationDuration(), this._animationOutDebounce = t.debounce((function() {
						i._$child.removeClass(i.options.animations.allOutAnimationsClasses), i._inOutAnimation = !1, i._unfix(), i._removeTransitionFromOutAnimation()
					}), 100), this._animationInDebounce = t.debounce((function() {
						i._inInAnimation = !1, i._$child.removeClass(i.options.animations.allInAnimationsClasses)
					}), this._animationDuration)
				},
				_removeTransitionFromOutAnimation() {
					const t = "h-global-transition-disable";
					this._$child.addClass(t);
					let e = this._$child.css("transition-duration").match(/\d+/)[0];
					e || (e = 0);
					const i = this;
					setTimeout((function() {
						i._$child && i._$child.removeClass(t)
					}), 1e3 * e + 500)
				},
				_passedStartAfterNode() {
					const t = this._$startAfterNode;
					if (t && t.length > 0) {
						const e = this._afterElementOffsetTop,
							i = t.outerHeight();
						return this._scrollTop > e + i
					}
					return !0
				},
				stop() {
					this._stop(), this._running = !1
				},
				start() {
					this._running || (this._start(), this._running = !0)
				},
				destroy() {
					this.stop(), this._destroy(), this._$child.removeData("fixto-instance");
					for (const t in this) this.hasOwnProperty(t) && (this[t] = null)
				},
				_setOptions(e) {
					t.extend(!0, this.options, e), this.options.mind && (this._$mind = t(this.options.mind)), this.options.startAfterNode.enabled && this.options.startAfterNode.selector && (this._$startAfterNode = t(this.options.startAfterNode.selector))
				},
				setOptions(t) {
					this._setOptions(t), this.refresh()
				},
				_stop() {},
				_start() {},
				_destroy() {},
				refresh() {}
			}, u.prototype = new p, t.extend(u.prototype, {
				_bind: (t, e) => function() {
					return t.call(e)
				},
				_toresize: 8 === d ? i.documentElement : e,
				_scriptCallIsValid(e) {
					if (!Colibri.isCustomizerPreview()) return !0;
					const i = t(e).closest(".h-navigation_outer").get(0);
					return !i || !!i.__vue__
				},
				_onscroll: function() {
					if (this._scrollingContainer = t(".edit-site-visual-editor")[0], this._scrollTop = i.documentElement.scrollTop || i.body.scrollTop || (this._scrollingContainer ? this._scrollingContainer.scrollTop : 0), this._parentBottom = this.parent.offsetHeight + this._fullOffset("offsetTop", this.parent), !this.options.startAfterNode || this._passedStartAfterNode())
						if (this.fixed) {
							if (this.options.toBottom) {
								if (this._scrollTop >= this._fullOffset("offsetTop", this._ghostNode)) return void this._unfixFromScrollListener()
							} else if (this._scrollTop > this._parentBottom || this._scrollTop <= this._fullOffset("offsetTop", this._ghostNode) - this.options.top - this._mindtop()) return void this._unfixFromScrollListener();
							this._adjust()
						} else {
							const t = s.getAll(this.child);
							(this._scrollTop < this._parentBottom && this._scrollTop > this._fullOffset("offsetTop", this.child) - this.options.top - this._mindtop() && this._viewportHeight > this.child.offsetHeight + s.toFloat(t.marginTop) + s.toFloat(t.marginBottom) || this.options.toBottom) && (this._fix(), this._adjust())
						}
					else this.fixed && !this._inOutAnimation && this._unfixFromScrollListener()
				},
				_adjust: function() {
					let e = 0;
					const i = this._mindtop();
					let n = 0;
					const o = s.getAll(this.child);
					let a = null;
					if (l && (a = this._getContext(), a && (e = Math.abs(a.getBoundingClientRect().top))), n = this._parentBottom - this._scrollTop - (this.child.offsetHeight + s.toFloat(o.marginBottom) + i + this.options.top), n > 0 && (n = 0), this.options.toBottom);
					else {
						let a = this.options.top;
						0 === a && (a = t("body").offset().top), this.child.style.top = Math.round(n + i + e + a - s.toFloat(o.marginTop)) + "px"
					}
				},
				_fullOffset: function(t, e, i) {
					let s = e[t],
						n = e.offsetParent;
					for (; null !== n && n !== i;) s += n[t], n = n.offsetParent;
					return s
				},
				_getContext() {
					let t, e, n = this.child,
						o = null;
					for (; !o;) {
						if (t = n.parentNode, t === i.documentElement) return null;
						if (e = s.getAll(t), "none" !== e[r]) {
							o = t;
							break
						}
						n = t
					}
					return o
				},
				_fix: function() {
					const e = this.child,
						n = e.style,
						o = s.getAll(e);
					let a = e.getBoundingClientRect().left,
						r = o.width;
					if (this._$child.trigger("fixto-add"), this._saveStyles(), i.documentElement.currentStyle && (r = e.offsetWidth, "border-box" !== o.boxSizing && (r -= s.toFloat(o.paddingLeft) + s.toFloat(o.paddingRight) + s.toFloat(o.borderLeftWidth) + s.toFloat(o.borderRightWidth)), r += "px"), l && (this._getContext(), a = this._$child.offset().left), this._replacer.replace(), n.left = a - s.toFloat(o.marginLeft) + "px", n.width = r, n.position = "fixed", this.options.toBottom) n.top = "", n.bottom = this.options.top + s.toFloat(o.marginBottom) + "px";
					else {
						n.bottom = "";
						let e = this.options.top;
						0 === e && (e = t("body").offset().top), n.top = this._mindtop() + e - s.toFloat(o.marginTop) + "px"
					}
					this.options.zIndex && (this.child.style.zIndex = this.options.zIndex), this._$child.addClass(this.options.className);
					const h = this.options.animations;
					this._$child.removeClass(h.allInAnimationsClasses), h.enabled && (this._$child.addClass(h.currentInAnimationClass), this._inInAnimation || (this._inInAnimation = !0, this._animationInDebounce())), this.fixed = !0, this._$child.trigger("fixto-added")
				},
				_unfixFromScrollListener() {
					this._$child.trigger("fixto-unnfix-from-scroll"), this.options.animations.enabled ? this._unfixTriggerAnimation() : this._unfix()
				},
				_getAfterElementOffsetTop() {
					const t = this._$startAfterNode;
					if (t && t.length > 0) {
						let e = t.get(0),
							i = 0;
						do {
							i += e.offsetTop, e = e.offsetParent
						} while (e);
						return i = i < 0 ? 0 : i, i
					}
					return 0
				},
				_unfix: function() {
					this._replacer.hide();
					const t = this.child.style;
					t.position = this._childOriginalPosition, t.top = this._childOriginalTop, t.bottom = this._childOriginalBottom, t.width = this._childOriginalWidth, t.left = this._childOriginalLeft, t.zIndex = this._childOriginalZIndex, this.options.always || (this._$child.removeClass(this.options.className), this._$child.trigger("fixto-removed")), this.fixed = !1
				},
				_unfixTriggerAnimation() {
					this._$child.trigger("fixto-animated-remove"), this._animationInDebounce.flush();
					const t = this.options.animations;
					this._$child.removeClass(t.allInAnimationsClasses), this._$child.removeClass(t.allOutAnimationsClasses), t.enabled && this._$child.addClass(t.currentOutAnimationClass), this._inOutAnimation = !0, this._animationOutDebounce()
				},
				_saveStyles() {
					this._animationOutDebounce.flush();
					const t = this.child.style;
					this._childOriginalPosition = t.position, this.options.toBottom ? (this._childOriginalTop = "", this._childOriginalBottom = t.bottom) : (this._childOriginalTop = t.top, this._childOriginalBottom = ""), this._childOriginalWidth = t.width, this._childOriginalLeft = t.left, this._childOriginalZIndex = t.zIndex, this._afterElementOffsetTop = this._getAfterElementOffsetTop()
				},
				_onresize() {
					this.refresh()
				},
				_saveViewportHeight() {
					this._viewportHeight = e.innerHeight || i.documentElement.clientHeight
				},
				_stop() {
					this._unfix(), e.removeEventListener("scroll", this._proxied_onscroll), e.removeEventListener("mousewheel", this._proxied_onscroll)
				},
				_start() {
					this._onscroll(), e.addEventListener("scroll", this._proxied_onscroll, {
						passive: !0
					}), e.addEventListener("mousewheel", this._proxied_onscroll, {
						passive: !0
					}), t(this._toresize).on("resize.fixto", this._proxied_onresize)
				},
				_destroy() {
					this._replacer.destroy()
				},
				refresh() {
					this._saveViewportHeight(), this._unfix(), this._onscroll()
				}
			}), m.prototype = new p, t.extend(m.prototype, {
				_start() {
					const t = s.getAll(this.child);
					this._childOriginalPosition = t.position, this._childOriginalTop = t.top, this.child.style.position = h, this.refresh()
				},
				_stop() {
					this.child.style.position = this._childOriginalPosition, this.child.style.top = this._childOriginalTop
				},
				refresh() {
					this.child.style.top = this._mindtop() + this.options.top + "px"
				}
			});
			let f = function(t, e, s) {
				return h && !s || h && s && !1 !== s.useNativeSticky ? new m(t, e, s) : c ? (void 0 === l && (l = function() {
					let t = !1;
					const e = i.createElement("div"),
						s = i.createElement("div");
					return e.appendChild(s), e.style[r] = "translate(0)", e.style.marginTop = "10px", e.style.visibility = "hidden", s.style.position = "fixed", s.style.top = 0, i.body.appendChild(e), s.getBoundingClientRect().top > 0 && !0, i.body.removeChild(e), !1
				}()), new u(t, e, s)) : "Neither fixed nor sticky positioning supported"
			};
			d < 8 && (f = function() {
				return "not supported"
			}), t.fn.fixTo = function(e, i) {
				const s = t(e);
				let n = 0;
				return this.each((function() {
					const o = t(this).data("fixto-instance");
					o ? o[e].call(o, i) : t(this).data("fixto-instance", f(this, s[n], i)), n++
				}))
			}
		}(window.jQuery, window, document)
	},
	630: function(t, e) {
		! function(t, e) {
			const i = "navigation",
				s = {
					slideDown: { in : "slideInDown",
						out: "slideOutDownNavigation"
					},
					fade: { in : "fadeIn",
						out: "fadeOut"
					},
					none: { in : "h-global-transition-disable",
						out: "h-global-transition-disable"
					}
				},
				n = function(s, n) {
					this.namespace = i, this.scrollingContainer = t(".edit-site-visual-editor"), this.defaults = {
						sticky: {
							className: "h-navigation_sticky",
							topSpacing: 0,
							top: this.scrollingContainer.length ? this.scrollingContainer.offset().top : 0,
							stickyOnMobile: !0,
							stickyOnTablet: !0,
							startAfterNode: {
								enabled: !1,
								selector: ".wp-block-kubio-header"
							},
							animations: {
								enabled: !1,
								name: "none",
								duration: 0
							},
							zIndex: 9999,
							responsiveWidth: !0,
							center: !0,
							useShrink: !0,
							toBottom: !1,
							useNativeSticky: !1,
							always: !1,
							prepare: !0,
							onShow: !1
						},
						overlap: !1,
						overlapIsActive: !1
					}, e.apply(this, arguments), this.computeOverlapPaddingDelayed = jQuery.debounce(this.computeOverlapPadding.bind(this), 10), this.start()
				};
			n.prototype = {
				getStickyData() {
					const e = this.opts.sticky.animations,
						i = e.duration;
					return t.extend(!0, {}, this.opts.sticky, {
						animations: {
							allInAnimationsClasses: "slideInDown fadeIn h-global-transition-disable",
							allOutAnimationsClasses: "slideOutDownNavigation fadeOut h-global-transition-disable",
							currentInAnimationClass: s[e.name].in,
							currentOutAnimationClass: s[e.name].out,
							duration: "none" === e.name ? 0 : 1e3 * i
						}
					})
				},
				start() {
					this.opts.sticky && this.startSticky(this.getStickyData()), this.opts.overlap && this.startOverlap()
				},
				startOverlap() {
					let e = this.$element.closest(".h-navigation_overlap");
					0 === e.length && (e = this.$element), this.overlapTarget = e.get(0), this.overlapIsActive = !0, t(window).on("resize.overlap orientationchange.overlap", this.computeOverlapPaddingDelayed), window.addResizeListener(this.overlapTarget, this.computeOverlapPaddingDelayed), this.computeOverlapPadding()
				},
				stopOverlap() {
					this.overlapIsActive = !1, this.$sheet && (document.head.removeChild(this.$sheet), this.$sheet = null), t(window).off(".overlap"), window.removeResizeListener(this.overlapTarget, this.computeOverlapPaddingDelayed)
				},
				computeOverlapPadding() {
					if (!this.overlapIsActive) return;
					this.$sheet || (this.$sheet = document.createElement("style"), document.head.appendChild(this.$sheet));
					const t = this.overlapTarget.offsetHeight + "px !important;";
					this.$sheet.innerHTML = ".h-navigation-padding{padding-top:" + t + "}"
				},
				startSticky(e) {
					const i = this;
					this.$element.data("stickData", e), this.$element.fixTo("body", e), this.opts.sticky.prepare && this.prepareSticky(), this.$element.on("fixto-added.sticky", (function() {
						i.$element.attr("data-in-sticky-state", !0)
					})), this.$element.on("fixto-add.sticky", (function() {
						i.clearResetTimeouts();
						const t = i.navigationWrapper();
						t.css("animation-duration", ""), t.css("min-height", t[0].offsetHeight)
					})), this.$element.on("fixto-removed.sticky", (function() {
						i.$element.removeAttr("data-in-sticky-state"), i.resetParentHeight()
					})), t(window).on("resize.sticky orientationchange.sticky", (function() {
						setTimeout(i.resizeCallback.bind(i), 50)
					})), t(window).trigger("resize.sticky")
				},
				stopSticky() {
					const e = this.fixToInstance();
					e && (this.$element.off(".sticky"), e.destroy(), t(window).off(".sticky"), this.$element.removeData("fixto-instance"), this.resetParentHeight())
				},
				navigationWrapper() {
					return this.$element.closest("[class*=navigation__outer]")
				},
				resetParentHeight() {
					this.clearResetTimeouts();
					const t = this.navigationWrapper(),
						e = 1e3 * parseFloat(this.$element.css("animation-duration"));
					t.css("animation-duration", "0s"), this.resetTimeoutHeight = setTimeout((() => {
						t.css("min-height", "")
					}), 1e3), this.resetTimeoutAnimation = setTimeout((() => {
						t.css("animation-duration", "")
					}), e + 50)
				},
				clearResetTimeouts() {
					clearTimeout(this.resetTimeoutHeight), clearTimeout(this.resetTimeoutAnimation)
				},
				stop() {
					this.stopSticky(), this.stopOverlap()
				},
				prepareSticky() {
					const e = this;
					this.normal = this.$element.find("[data-nav-normal]"), this.sticky = this.$element.find("[data-nav-sticky]"), this.sticky.find("span[data-placeholder]").each((function() {
						t(this).parent().attr("data-placeholder", t(this).attr("data-placeholder")), t(this).remove()
					})), this.sticky.length && this.sticky.children().length && (this.$element.on("fixto-added.sticky", (function() {
						e.moveElementsToSticky()
					})), this.$element.on("fixto-removed.sticky", (function() {
						e.moveElementsToNormal()
					})))
				},
				moveElementsToSticky() {
					const e = this.sticky.find("[data-placeholder]"),
						i = this;
					e.each((function(e, s) {
						$this = t(this);
						const n = $this.attr("data-placeholder"),
							o = i.normal.find("[data-placeholder-provider=" + n + "] .h-column__content >"),
							a = $this;
						a && o.length && t(a).append(o)
					})), this.normal.hide(), this.sticky.show()
				},
				moveElementsToNormal() {
					const e = this.sticky.find("[data-placeholder]"),
						i = this;
					e.each((function(e, s) {
						$this = t(this);
						const n = $this.attr("data-placeholder"),
							o = i.sticky.find("[data-placeholder=" + n + "] >"),
							a = i.normal.find("[data-placeholder-provider=" + n + "] .h-column__content");
						a && o.length && t(a).append(o)
					})), this.normal.show(), this.sticky.hide()
				},
				fixToInstance() {
					const t = this.$element.data();
					return !(!t || !t.fixtoInstance) && t.fixtoInstance
				},
				resizeCallback() {
					if (window.innerWidth < 1024) {
						const i = (t = this.$element.data()).stickData;
						if (!i) return;
						if (!(e = t.fixtoInstance)) return !0;
						window.innerWidth <= 767 ? i.stickyOnMobile || e.stop() : i.stickyOnTablet || e.stop()
					} else {
						var t, e;
						if (!(t = this.$element.data())) return;
						if (!(e = t.fixtoInstance)) return !0;
						e.refresh(), e.start()
					}
				}
			}, n.inherits(e), e[i] = n, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	631: function(t, e) {
		! function(t, e) {
			const i = "overlap",
				s = function() {
					this.namespace = i, this.defaults = {
						data: {}
					}, e.apply(this, arguments), this.start()
				};
			s.prototype = {
				start() {
					t(window).on("resize.overlap orientationchange.overlap", this.computePadding), this.overlapTarget = this.$element[0], new ResizeObserver(this.computePadding).observe(this.overlapTarget)
				},
				stop() {
					t(window).off(".overlap"), this.$sheet && (document.head.removeChild(this.$sheet), this.$sheet = null)
				},
				computePadding(t) {
					if (!t || !t[0] || !t[0].target) return;
					this.$sheet || (this.$sheet = document.createElement("style"), document.head.appendChild(this.$sheet));
					const e = t[0].target.offsetHeight + "px !important;";
					this.$sheet.innerHTML = ".h-navigation-padding{padding-top:" + e + "}"
				},
				resizeCallback() {
					this.computePadding()
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	632: function(t, e) {
		! function(t, e) {
			const i = "image-gallery",
				s = function() {
					this.namespace = i, this.defaults = {
						data: {}
					}, e.apply(this, arguments), this.firstImageLastWidth = this.getFirstImageWidth(), this.resizeObserverCallbackDebounce = t.debounce(this.resizeObserverCallback.bind(this), 500), this.resizeObserver = new window.ResizeObserver(this.resizeObserverCallbackDebounce), this.start()
				};
			s.prototype = {
				start() {
					t(this.$element).find(".wp-block-kubio-image-gallery-item__link.lightbox").on("click", (e => {
						e.preventDefault();
						let i = 1;
						const s = t(e.currentTarget).closest(".wp-block-kubio-image-gallery__gallery").find(".wp-block-kubio-image-gallery-item__link.lightbox"),
							n = [];
						t(s).each((function(s) {
							const o = t(this).attr("href");
							o === t(e.currentTarget).attr("href") && (i = s), n.push({
								src: o,
								opts: {}
							})
						})), t.fancybox.open(n, {
							arrows: !0,
							index: i
						})
					})), this.settings.showMasonry && this.startMasonry()
				},
				startMasonry() {
					if (this.cleanObservers(), 0 === this.$element.parent().length) return;
					this.$element.masonry({
						itemSelector: ".image-gallery-grid-item",
						percentPosition: !0
					});
					const e = this.$element;
					! function() {
						const i = e.find("img");
						let s = 0,
							n = 0;

						function o() {
							if (s++, i.length === s) try {
								e.data().masonry.layout()
							} catch (t) {
								console.error(t)
							}
						}
						i.each((function() {
							this.complete ? (n++, o()) : (t(this).on("load", o), t(this).on("error", o))
						})), i.length !== n && "complete" == document.readyState && setTimeout((function() {
							e.data().masonry.layout()
						}), 10), t(window).on("load", (function() {
							e.data().masonry.layout()
						}))
					}();
					const i = this.getFirstImage();
					i.length > 0 && this.resizeObserver.observe(i.get(0)), this.resizeObserver.observe(this.$element[0])
				},
				cleanObservers() {
					this.resizeObserver && this.resizeObserver.disconnect()
				},
				resizeObserverCallback() {
					this.firstImageLastWidth !== this.getFirstImageWidth() && (this.firstImageLastWidth = this.getFirstImageWidth(), this.masonryLayout())
				},
				getFirstImage() {
					return this.$element.find("figure img").first()
				},
				getFirstImageWidth() {
					return this.getFirstImage().width()
				},
				masonryLayout() {
					try {
						this.$element.data().masonry.layout()
					} catch (t) {}
				},
				stopMasonry() {
					if (this.cleanObservers(), this.$element.data("masonry")) try {
						this.$element.masonry("destroy")
					} catch (t) {}
				},
				restartMasonry() {
					this.stopMasonry(), this.startMasonry()
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	633: function(t, e) {
		! function(t, e) {
			const i = "downarrow",
				s = function() {
					this.namespace = i, this.defaults = {
						arrowSelector: "",
						scrollTargetSelector: ""
					}, e.apply(this, arguments), this.start()
				};
			s.prototype = {
				start() {
					if (!(this.opts && this.opts.arrowSelector && this.opts.scrollTargetSelector)) return;
					this.$arrow = this.$element.find(this.opts.arrowSelector);
					const e = t(this.opts.scrollTargetSelector);
					this.$arrow.smoothScrollAnchor({
						target: e
					})
				},
				stop() {
					this.$arrow && this.$arrow.off("click.smooth-scroll tap.smooth-scroll")
				},
				reset(t) {},
				restart() {
					this.stop(), this.start()
				},
				ready() {
					this.opts.firstTime || (this.opts.firstTime = !0)
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	634: function(t, e) {
		! function(t, e) {
			const i = "footer-parallax",
				s = function(s, n) {
					this.namespace = i, this.defaults = {
						activeClasses: {
							header: "h-footer-parallax-header-class",
							content: "h-footer-parallax-content-class",
							footer: "h-footer-parallax",
							container: "new-stacking-context"
						},
						selectors: {
							header: '[data-kubio="kubio/header"], .header',
							content: '.entry-content, .wp-block-kubio-section, [data-kubio], [class*="wp-block"]'
						}
					}, this.bindedResizeListener = t.debounce(this.resizeListener.bind(this), 100), e.apply(this, arguments), this.scriptStarted = !1, this.initMediaById(), this.start(), window.addEventListener("resize", this.bindedResizeListener), setTimeout((() => {
						this.bindedResizeListener()
					}), 5e3)
				};
			s.prototype = {
				start() {},
				stop() {
					this.scriptStarted = !1;
					const t = this.opts.activeClasses;
					this.$container && (this.$container.removeClass(t.container), this.$header.removeClass(t.header), this.$content.removeClass(t.content), this.$element.removeClass(t.footer), this.$content.css("margin-bottom", ""))
				},
				isInsideCustomizer: () => !!wp.customize,
				restart() {
					this.stop(), this.updateOpts(), this.start()
				},
				resizeListener() {
					this.updateSiblingStyle(), "desktop" !== this.getCurrentMedia() ? this.stop() : this.isEnabled && !this.footerParallaxStarted() && this.start()
				},
				footerParallaxStarted() {
					return this.scriptStarted
				},
				initMediaById() {
					this.mediaById = {
						desktop: {
							min: 1024
						},
						tablet: {
							min: 768,
							max: 1023
						},
						mobile: {
							max: 767
						}
					}
				},
				getCurrentMedia() {
					const t = window.innerWidth;
					let e = null;
					return Object.keys(this.mediaById).forEach((i => {
						const s = this.mediaById[i];
						(!s.min || s.min && t >= s.min) && (!s.max || s.max && t <= s.max) && (e = i)
					})), e
				},
				updateSiblingStyle() {
					if (!this.$content) return;
					if (!this.footerParallaxStarted()) return;
					const t = this.$element.outerHeight();
					this.$content.css("margin-bottom", t + "px")
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	635: function(t, e) {
		! function(t, e) {
			const i = "counter",
				s = function() {
					this.namespace = i, this.defaults = {
						oldCheck: !1,
						newCheck: !1,
						firstTime: !1
					}, e.apply(this, arguments), this.bindedReady = this.ready.bind(this), this.start(), this.addListener()
				};
			s.prototype = {
				start() {
					this.removeScrollListener(), this.bindedReady(), this.addScrollListener()
				},
				stop() {
					this.removeScrollListener()
				},
				removeScrollListener() {
					t(e.getScrollingElement()).off("scroll", this.bindedReady)
				},
				addScrollListener() {
					t(e.getScrollingElement()).on("scroll", this.bindedReady)
				},
				reset(t) {
					const e = t.$element.children();
					t.$element.children().remove(), t.$element.append(e)
				},
				restart() {
					this.stop(), this.start()
				},
				ready() {
					const {
						type: t
					} = this.opts;
					if (!this.opts.firstTime && this.isScrolledIntoView(this) && this.opts.oldCheck !== this.opts.newCheck && (this.opts.firstTime = !0, t)) switch (this.reset(this), t) {
						case "number":
							this.countTo(this);
							break;
						case "circle":
							this.progressCircle(this);
							break;
						case "bar":
							this.progressBar(this)
					}
				},
				addListener() {
					e.isBlockEditor() || this.$element.on("colibriContainerOpened", this.restart)
				},
				isScrolledIntoView(i) {
					if (e.isBlockEditor() && top.window.document.body.classList.contains("kubio-iframe-holder--hide")) return !1;
					const s = t(window).scrollTop(),
						n = s + t(window).height(),
						o = i.$element.closest(".wp-block-kubio-counter__outer"),
						a = t(o.parent()).offset().top,
						r = a + t(o.parent()).height(),
						l = i.opts.newCheck,
						h = a <= n && r >= s;
					return i.opts.oldCheck = l, i.opts.newCheck = h, h && this.removeScrollListener(), h
				},
				countTo(e) {
					const i = e.opts;
					t(this).prop("Counter", i.min).animate({
						Counter: i.max
					}, {
						duration: 1e3 * i.duration,
						easing: "swing",
						step(t) {
							let s = e.decimalAdjust("round", t, -i.decimals).toLocaleString("en").replace("-0", "0");
							"," !== i.separator && (s = s.replace(/,/gi, i.separator)), this.$element.text(i.prefix + s + i.suffix)
						}
					})
				},
				progressBar(e) {
					e.$element.parents(".wp-block-kubio-counter__outer").each((function() {
						t(this).find(".wp-block-kubio-counter__progressBar").removeClass("progress-bar__animation").removeClass("hide-animation").addClass("progress-bar__animation"), "hide" !== e.opts.counterPosition && e.countTo(e)
					}))
				},
				progressCircle(e) {
					const i = e.opts.circle;
					e.opts.titlePosition, e.$element.parents(".wp-block-kubio-counter__outer").find(".h-circle-progress").each((function() {
						const s = t(this).find(".wp-block-kubio-counter__counter-wrapper"),
							n = t(this).find(".title-circle");
						i.fill.color = e.getRGBValueFromCSSVar(i.fill.color), t(this).empty(), t(this).circleProgress({
							value: i.progress / 100,
							size: i.size,
							fill: i.fill,
							animation: i.animation,
							lineCap: "round",
							insertMode: "append",
							emptyFill: e.getRGBValueFromCSSVar(i.emptyFill),
							reverse: !1,
							animationStartValue: 0,
							startAngle: -Math.PI / 2,
							thickness: 15,
							showPercent: !1
						}), t(this).css({
							display: "inline-block"
						}), t(this).append('<div class="content-circle-inside" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)"></div>'), t(this).find(".content-circle-inside").append(n).append(s), e.countTo(e)
					}))
				},
				getRGBValueFromCSSVar(t) {
					if (!t) return t;
					const e = t.indexOf("var(");
					if (-1 !== e) {
						const i = t.indexOf("),"),
							s = t.slice(e + 4, i),
							n = window.getComputedStyle(document.documentElement).getPropertyValue(s);
						return t.substring(0, e) + n + t.substring(i + 1)
					}
					return t
				},
				decimalAdjust: (t, e, i) => void 0 === i || 0 == +i ? Math[t](e) : (e = +e, i = +i, isNaN(e) || "number" != typeof i || i % 1 != 0 ? NaN : (e = e.toString().split("e"), +((e = (e = Math[t](+(e[0] + "e" + (e[1] ? +e[1] - i : -i)))).toString().split("e"))[0] + "e" + (e[1] ? +e[1] + i : i))))
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	636: function(t, e) {
		! function(t) {
			function e(t) {
				this.init(t)
			}
			e.prototype = {
				value: 0,
				size: 100,
				startAngle: -Math.PI,
				thickness: "auto",
				fill: {
					gradient: ["#3aeabb", "#fdd250"]
				},
				emptyFill: "rgba(0, 0, 0, .1)",
				animation: {
					duration: 1200,
					easing: "circleProgressEasing"
				},
				animationStartValue: 0,
				reverse: !1,
				lineCap: "butt",
				constructor: e,
				el: null,
				canvas: null,
				ctx: null,
				radius: 0,
				arcFill: null,
				lastFrameValue: 0,
				init(e) {
					t.extend(this, e), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw()
				},
				initWidget() {
					const e = this.canvas = this.canvas || t("<canvas>").prependTo(this.el)[0];
					e.width = this.size, e.height = this.size, this.ctx = e.getContext("2d")
				},
				initFill() {
					const e = this,
						i = this.fill,
						s = this.ctx,
						n = this.size;
					if (!i) throw Error("The fill is not specified!");
					if (i.color && (this.arcFill = i.color), i.gradient) {
						const e = i.gradient;
						if (1 == e.length) this.arcFill = e[0];
						else if (e.length > 1) {
							const o = i.gradientAngle || 0,
								a = i.gradientDirection || [n / 2 * (1 - Math.cos(o)), n / 2 * (1 + Math.sin(o)), n / 2 * (1 + Math.cos(o)), n / 2 * (1 - Math.sin(o))],
								r = s.createLinearGradient.apply(s, a);
							for (let i = 0; i < e.length; i++) {
								let s = e[i],
									n = i / (e.length - 1);
								t.isArray(s) && (n = s[1], s = s[0]), r.addColorStop(n, s)
							}
							this.arcFill = r
						}
					}
					var o;

					function a() {
						const i = t("<canvas>")[0];
						i.width = e.size, i.height = e.size, i.getContext("2d").drawImage(o, 0, 0, n, n), e.arcFill = e.ctx.createPattern(i, "no-repeat"), e.drawFrame(e.lastFrameValue)
					}
					i.image && (i.image instanceof Image ? o = i.image : (o = new Image).src = i.image, o.complete ? a() : o.onload = a)
				},
				draw() {
					this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
				},
				drawFrame(t) {
					this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t)
				},
				drawArc(t) {
					const e = this.ctx,
						i = this.radius,
						s = this.getThickness(),
						n = this.startAngle;
					e.save(), e.beginPath(), this.reverse ? e.arc(i, i, i - s / 2, n - 2 * Math.PI * t, n) : e.arc(i, i, i - s / 2, n, n + 2 * Math.PI * t), e.lineWidth = s, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore()
				},
				drawEmptyArc(t) {
					const e = this.ctx,
						i = this.radius,
						s = this.getThickness(),
						n = this.startAngle;
					t < 1 && (e.save(), e.beginPath(), t <= 0 ? e.arc(i, i, i - s / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - s / 2, n, n - 2 * Math.PI * t) : e.arc(i, i, i - s / 2, n + 2 * Math.PI * t, n), e.lineWidth = s, e.strokeStyle = this.emptyFill, e.stroke(), e.restore())
				},
				drawAnimated(e) {
					const i = this,
						s = this.el,
						n = t(this.canvas);
					n.stop(!0, !1), s.trigger("circle-animation-start"), n.css({
						animationProgress: 0
					}).animate({
						animationProgress: 1
					}, t.extend({}, this.animation, {
						step(t) {
							const n = i.animationStartValue * (1 - t) + e * t;
							i.drawFrame(n), s.trigger("circle-animation-progress", [t, n])
						}
					})).promise().always((function() {
						s.trigger("circle-animation-end")
					}))
				},
				getThickness() {
					return t.isNumeric(this.thickness) ? this.thickness : this.size / 14
				},
				getValue() {
					return this.value
				},
				setValue(t) {
					this.animation && (this.animationStartValue = this.lastFrameValue), this.value = t, this.draw()
				}
			}, t.circleProgress = {
				defaults: e.prototype
			}, t.easing.circleProgressEasing = function(t, e, i, s, n) {
				return (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
			}, t.fn.circleProgress = function(i, s) {
				const n = "circle-progress",
					o = this.data(n);
				if ("widget" == i) {
					if (!o) throw Error('Calling "widget" method on not initialized instance is forbidden');
					return o.canvas
				}
				if ("value" == i) {
					if (!o) throw Error('Calling "value" method on not initialized instance is forbidden');
					if (void 0 === s) return o.getValue();
					const e = arguments[1];
					return this.each((function() {
						t(this).data(n).setValue(e)
					}))
				}
				return this.each((function() {
					let s = t(this),
						o = s.data(n),
						a = t.isPlainObject(i) ? i : {};
					if (o) o.init(a);
					else {
						const i = t.extend({}, s.data());
						"string" == typeof i.fill && (i.fill = JSON.parse(i.fill)), "string" == typeof i.animation && (i.animation = JSON.parse(i.animation)), a = t.extend(i, a), a.el = s, o = new e(a)
					}
				}))
			}
		}(jQuery)
	},
	637: function(t, e) {
		! function(t, e) {
			const i = "slider",
				s = function() {
					this.namespace = i, e.apply(this, arguments), this.initData(), this.start(), this.addListener()
				};
			s.prototype = {
				initData() {
					this.$swiperElement = this.$element.find(this.opts.swiperSelector), this.swiperElement = this.$swiperElement.get(0);
					const e = this;
					this.bindedRestart = t.debounce((() => {
						e.restart()
					}), 500), this.bindedMouseEnter = () => {
						this.swiper.autoplay.stop()
					}, this.bindedMouseLeave = () => {
						this.swiper.autoplay.start()
					}
				},
				start() {
					if (e.isBlockEditor()) return;
					const t = this.swiperElement;
					t && (this.swiperOptions = this.getSwiperOptions(), this.swiperOptions.pagination.el = this.$element.find(this.opts.pagination.el), this.swiperOptions.navigation.nextEl = this.$element.find(this.opts.navigation.nextEl), this.swiperOptions.navigation.prevEl = this.$element.find(this.opts.navigation.prevEl), this.swiper = new Swiper(t, this.swiperOptions), this.addSwiperEnhancements(), this.swiperUpdate())
				},
				stop() {
					!1 !== this.opts.autoplay && this.opts.autoplay.pauseOnMouseEnter && this.removeSwiperStopOnHoverListeners(), this.swiper && this.swiper.destroy && this.swiper.destroy()
				},
				restart() {
					this.stop(), this.start()
				},
				getSwiperOptions() {
					let e = this.opts && this.opts.swiperOptions || {};
					return e = t.extend({}, e, this.getExtraSwiperOptions()), e = t.extend({}, e, this.$element.data("kubio-settings")), t.extend({}, e)
				},
				changeSlidesVideosState() {
					const t = this.getActiveSlides();
					t.find("video").each(((t, e) => {
						e.autoplay && e.play()
					})), t.find(".kubio-video-background")["kubio.video-background"]("play");
					const e = this.getInactiveSlides();
					e.find("video").each(((t, e) => {
						e.pause(), e.currentTime = 0
					})), e.find(".kubio-video-background")["kubio.video-background"]("stopVideo")
				},
				getExtraSwiperOptions() {
					const t = this;
					return {
						on: {
							slideChangeTransitionEnd() {
								t.changeSlidesVideosState()
							},
							init() {
								setTimeout((() => {
									t.addScriptsToDummySlides()
								}), 1e3)
							}
						}
					}
				},
				addScriptsToDummySlides() {
					this.$element.find(".swiper-slide-duplicate").find("[data-kubio-component]").not("[data-disabled]").each((function() {
						const e = t(this),
							i = "kubio." + e.data("kubio-component");
						e.attr("data-loaded", !0);
						try {
							e[i]()
						} catch (t) {
							console.error(t)
						}
					}))
				},
				getActiveSlides() {
					return this.$element.find(".swiper-slide-active")
				},
				getInactiveSlides() {
					return this.$element.find(".swiper-slide:not(.swiper-slide-active)")
				},
				addListener() {
					e.isBlockEditor() || (this.$element.on("colibriContainerOpened", this.bindedRestart), window.addResizeListener(this.swiperElement, this.bindedRestart))
				},
				removeResizeListener() {
					window.removeResizeListener(this.$swiperElement, this.bindedRestart)
				},
				addSwiperEnhancements() {
					!1 !== this.opts.autoplay && this.opts.autoplay.pauseOnMouseEnter && this.addSwiperStopOnHoverListeners()
				},
				removeSwiperStopOnHoverListeners() {
					this.$swiperElement.off("mouseenter", this.bindedMouseEnter), this.$swiperElement.off("mouseleave", this.bindedMouseLeave)
				},
				addSwiperStopOnHoverListeners() {
					this.$swiperElement.on("mouseenter", this.bindedMouseEnter), this.$swiperElement.on("mouseleave", this.bindedMouseLeave)
				},
				swiperUpdate() {
					this.swiper.update && this.swiper.update(), this.swiper.navigation && this.swiper.navigation.update(), this.swiper.pagination && this.swiper.pagination.render(), this.swiper.pagination && this.swiper.pagination.update()
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	655: function(t, e, i) {
		"use strict";
		i.r(e), i(206), i(621), i(622), i(623), i(624), i(625), i(626), i(627), i(628), i(629), i(630), i(631), i(632), i(633), i(634), i(635), i(636);
		const s = "hFlipIn",
			n = "BackX",
			o = "BackY",
			a = `${s}${o}`,
			r = [`${s}${n}`, `${s}${o}`],
			l = {
				BOUNCE: "bounceIn",
				FLIP: s,
				FADE: "fadeIn",
				ROTATE: "rotateIn",
				SLIDE: "slideIn",
				ZOOM: "zoomIn"
			},
			h = ["webkit", "moz", "MS", "o", ""],
			c = (t, e, i) => {
				for (let s = 0; s < h.length; s++) h[s] || (e = e.toLowerCase()), t.removeEventListener(h[s] + e, i, !1), t.addEventListener(h[s] + e, i, !1)
			};
		! function(t, e) {
			const i = "flipbox",
				s = function(t, s) {
					this.namespace = i, this.defaults = {
						inEditor: !1,
						isNormalState: !0,
						isHoverState: !1,
						forceHover: !1,
						reloadAnimation: null,
						blockAnimationClass: "cs-block-animation"
					}, e.apply(this, arguments), this.bindedAnimationStart = this.animationStartCallback.bind(this), this.bindedAnimationEnd = this.animationEndCallback.bind(this), this.oldReloadAnimation = 0, this.start()
				};
			s.prototype = {
				start() {
					this.$hover = this.$element.find("[data-hover]"), this.$normal = this.$element.find("[data-normal]"), this.$parentInner = this.$element.find("[data-inner]"), this.isAnimating = !1, this.runBack = !1, this.entering = !1, this.isFlipEffect = this.getIsFlipEffect(), this.oldReloadAnimation !== this.opts.reloadAnimation && (this.oldReloadAnimation = this.opts.reloadAnimation, this.forceAnimation = !0);
					const e = this.opts.hoverEffect.replace("In", "Out");
					this.endEffectClass = `${e}EndEffect`, this.opts.parentInnerClasses = (t => {
						const e = [];
						return r.includes(t) ? e.push("flipper") : e.push("swap__overflow"), e
					})(this.opts.hoverEffect), this.$parentInner.removeClass(["flipper", "swap__overflow"].join(" ")), this.$parentInner.addClass(this.opts.parentInnerClasses.join(" ")), this.$element.removeClass(["flip-container", "vertical"].join(" "));
					const i = (t => {
						const e = [];
						return r.includes(t) && (e.push("flip-container"), t === a && e.push("vertical")), e
					})(this.opts.hoverEffect);
					this.$element.addClass(i), -1 !== this.opts.hoverEffect.toLowerCase().indexOf("slide") && this.$normal.parent().css("overflow", "hidden"), this.$element.css("transform", "translateZ(0)"), !1 === this.opts.inEditor ? this.$element.hover(t.debounce(t.proxy(this.onMouseOver, this), 50), t.debounce(t.proxy(this.onMouseOut, this), 50)) : this.runEditorLogic(), c(this.$hover[0], "AnimationStart", this.bindedAnimationStart), c(this.$hover[0], "AnimationEnd", this.bindedAnimationEnd), this.$hover.css({
						position: "absolute"
					}), !this.isFlipEffect && this.opts.showHover
				},
				runEditorLogic() {
					this.opts.isNormalState && !this.forceAnimation && (this.resetAnimationClasses(this.$normal), this.$hover.css("display", "none")), (this.opts.isHoverState || this.forceAnimation) && this.onMouseOver(), this.forceAnimation = !1
				},
				animationStartCallback() {
					this.isAnimating = !0
				},
				animationEndCallback(t) {
					const e = this;
					e.isAnimating = !1;
					const i = this.opts.hoverEffect,
						s = i.replace("In", "Out"),
						n = t.animationName;
					this.opts.inEditor && this.isFlipEffect && this.opts.isNormalState && (this.resetAnimationClasses(this.$normal), this.resetAnimationClasses(this.$hover)), this.opts.inEditor && i === n && !this.opts.isHoverState && this.$hover.css("display", "none"), s !== n || this.isFlipEffect || this.$hover.css("display", "none"), e.runBack && e.startOutAnimation()
				},
				resetAnimationClasses(t) {
					const e = Object.values(l).map((t => t.replace("In", ""))),
						i = t.get(0),
						s = i.className.split(" ").filter((function(t) {
							return !e.find((e => t.includes(e)))
						}));
					i.className = s.join(" ").trim()
				},
				stop() {},
				restart() {
					this.stop(), this.updateOpts(), this.start()
				},
				getIsFlipEffect() {
					return this.opts.hoverEffect.includes("hFlip")
				},
				toggleExecuteBack(t) {
					this.runBack = t
				},
				onMouseOver() {
					this.toggleExecuteBack(!1), this.isAnimating = !0, this.startOverAnimation()
				},
				onMouseOut() {
					this.isAnimating ? this.toggleExecuteBack(!0) : (this.isAnimating = !0, this.startOutAnimation())
				},
				startOverAnimation() {
					const t = this.opts.hoverEffect,
						e = t.replace("In", "Out"),
						i = t.replace("Out", "In"),
						s = (e.replace("Back", "Front"), i.replace("Back", "Front")),
						n = "h-hide-animation";
					this.isFlipEffect ? this.$normal.removeClass(n) : this.$normal.addClass(n), this.$hover.addClass(n), this.resetAnimationClasses(this.$hover), this.$hover.addClass(i), this.$hover.css({
						display: "flex"
					}), this.$hover.get(0).offsetWidth, this.$hover.removeClass(n), this.isFlipEffect && (this.$normal.addClass(n), this.resetAnimationClasses(this.$normal), this.$normal.addClass(s), this.$normal.get(0).offsetWidth, this.$normal.removeClass(n))
				},
				startOutAnimation() {
					if (this.opts.inEditor && this.opts.showHover && this.isFlipEffect) return;
					const t = this.opts.hoverEffect,
						e = t.replace("Out", "In"),
						i = t.replace("In", "Out"),
						s = i.replace("Back", "Front"),
						n = e.replace("Back", "Front");
					this.$hover.removeClass(e), this.$hover.addClass(i), this.isFlipEffect && (this.$normal.removeClass(n), this.$normal.addClass(s))
				}
			}, s.inherits(e), e[i] = s, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri), i(637);
		try {
			Colibri.Plugin.init()
		} catch (t) {}
	}
});