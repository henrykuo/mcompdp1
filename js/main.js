!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.register('2', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $gallery, $content, $contentPanel, $contentPanelInner, $contentShim, $pullUpButton, $overlay, $colorOption, $sizeOptionContainer, $sizeSelection, $sizeSelect, $sizeOptions, $productActions, $productActionsShim, $productPricing, $productPricingShim, $summary, $summaryShim, $summaryDrag, $swatchOption1, $swatchOption2, $swatchOption3, $galleryImageSwap1a, $galleryImageSwap2a, $galleryImageSwap3a, $galleryImageSwap4a, $galleryImageSwap5a, $galleryImageSwap1b, $galleryImageSwap2b, $galleryImageSwap3b, $galleryImageSwap4b, $galleryImageSwap5b, $modelInfo, $modelInfoHeadline, contentFixedPanelHeight, content_fixed, content_fixed_top, content_original_height, activeSwatch, galleryFadeActive, touchY_track_start, touchY_track_1, touchY_track_2, touchY_track_diff_from_prev, touchY_track_diff_from_start, touchY_track_array, touchY_direction, product_tag_timer;

	// =======================================================================================
	// FUNCTIONS
	// ----------------- FIX CONTENT -----------------
	function fix_content() {
		// Get distance of gallery from bottom. We're using the gallery to measure toggle point, because content height may shift. We cannot use a fixed/determined point. We have to constantly calculate at every scroll.
		var galleryDistFromBottom = $gallery[0].getBoundingClientRect().bottom - window.innerHeight;
		// Toggle fixed class on content
		if (galleryDistFromBottom <= -contentFixedPanelHeight - 10) {
			// Unfix it
			if (content_fixed === 0) {
				$content.removeClass('fixed');
				$contentShim.hide();
				// Reset position colors when not in fixed bar
				$summaryShim.css({ 'top': 0 });
				content_fixed = 1;
				//debounce_reposition_colors.cancel();
			}
		} else {
				// Fix it
				if (content_fixed === 1) {
					$content.addClass('fixed');
					$contentShim.show();
					$content.css({ 'bottom': '-1px' });
					content_fixed = 0;
					// Remove this class. This was added to slow down the panel dropping down while auto-scrolling to content position
					$content.removeClass('jumping-to-content');
				}
				// Get height of summary to measure how much need to shift top position of colors to show in the fixed bar
				//reposition_colors();
				//debounce_reposition_colors();
			}
	}
	/* 
 function reposition_colors() {
 	let topOffset = $summary.outerHeight() + 4;
 	//lg(`topOffset: ${topOffset}`);
 	$summaryShim.css({'top': -topOffset});
 }
  */
	// ----------------- FIX CONTENT TO TOP -----------------
	function fix_content_top() {
		var x = $productActions[0].getBoundingClientRect().top;
		var y = $sizeOptionContainer[0].getBoundingClientRect().bottom;
		//lg(`y: ${y}`);
		if (y < -12) {
			// Fix to top
			if (content_fixed_top === 0) {
				$content.addClass('fixed-top');
				$productActionsShim.show();
				$productPricingShim.show();
				content_fixed_top = 1;
				//lg ('fix to top');
			}
		} else {
				// Unfix from top
				if (content_fixed_top === 1) {
					$content.removeClass('fixed-top');
					$productActionsShim.hide();
					$productPricingShim.hide();
					content_fixed_top = 0;
					//lg ('unfix it');
				}
			}
	}
	// ----------------- SCROLL TO CONTENT -----------------
	function scroll_to_content(speed) {
		var scroll_target = $contentShim.offset().top - window.innerHeight * .2;
		$('html, body').animate({
			scrollTop: scroll_target
		}, {
			duration: speed,
			queue: false
		});
	}
	// ----------------- CHANGE COLOR INIT -----------------
	function change_color_init(num) {
		if (num === 1 && activeSwatch !== 1) {
			change_color('navy');
			activeSwatch = 1;
			$modelInfoHeadline.html('Meghan is 5\' 10" wearing size 9');
			$gallery.attr('data-color', 'navy');
			$('.product-option.color').find('.heading').find('.selection').html('Navy');
			prototype_tag_animate();
		} else if (num === 2 && activeSwatch !== 2) {
			change_color('champagne');
			activeSwatch = 2;
			$modelInfoHeadline.html('Holly is 5\' 7" wearing size 8');
			$gallery.attr('data-color', 'champagne');
			$('.product-option.color').find('.heading').find('.selection').html('Champagne');
			prototype_tag_animate();
		} else if (num === 3 && activeSwatch !== 3) {
			change_color('purple');
			activeSwatch = 3;
			$modelInfoHeadline.html('Katarina is 6\' 1" wearing size 9');
			$gallery.attr('data-color', 'purple');
			$('.product-option.color').find('.heading').find('.selection').html('Purple');
			prototype_tag_animate();
		}
	}
	// ----------------- CHANGE COLOR -----------------
	function change_color(color) {
		if (galleryFadeActive === 1) {
			$galleryImageSwap1b.attr('src', 'img/p8948728/' + color + '-1.jpg');
			$galleryImageSwap2b.attr('src', 'img/p8948728/' + color + '-2.jpg');
			$galleryImageSwap3b.attr('src', 'img/p8948728/' + color + '-3.jpg');
			$galleryImageSwap4b.attr('src', 'img/p8948728/' + color + '-4.jpg');
			$galleryImageSwap5b.attr('src', 'img/p8948728/' + color + '-5.jpg');
			$gallery.addClass('fade2');
			$gallery.removeClass('fade1');
			galleryFadeActive = 2;
		} else {
			$galleryImageSwap1a.attr('src', 'img/p8948728/' + color + '-1.jpg');
			$galleryImageSwap2a.attr('src', 'img/p8948728/' + color + '-2.jpg');
			$galleryImageSwap3a.attr('src', 'img/p8948728/' + color + '-3.jpg');
			$galleryImageSwap4a.attr('src', 'img/p8948728/' + color + '-4.jpg');
			$galleryImageSwap5a.attr('src', 'img/p8948728/' + color + '-5.jpg');
			$gallery.addClass('fade1');
			$gallery.removeClass('fade2');
			galleryFadeActive = 1;
		}
	}
	// ----------------- ANIMATE PRODUCT TAG -----------------
	function product_tag_animate($this) {
		$this.removeClass('anim-step-1');
		clearTimeout(product_tag_timer);
		var product_tag_timer = setTimeout(function () {
			$this.addClass('anim-step-1');
		}, 500);
	}
	// ----------------- ANIMATE TAG 1 and TAG 2 -----------------
	function prototype_tag_animate() {
		product_tag_animate($('.tag1'));
		product_tag_animate($('.tag2'));
	}
	// ----------------- TOGGLE SIZE OPTIONS -----------------
	function toggleSizeOptions() {
		if ($sizeOptionContainer.hasClass('expanded')) {
			// COLLAPSE OPTIONS
			$sizeSelect.css({ 'height': 0 });
			$sizeOptionContainer.removeClass('expanded');
		} else {
			// EXPAND OPTIONS
			var targetHeight = $sizeOptions.outerHeight();
			$sizeSelect.css({ 'height': targetHeight });
			$sizeOptionContainer.addClass('expanded');
		}
	}
	// ----------------- SUMMARY DRAG START -----------------
	function summaryDragStart(e) {
		// Get touch start position
		touchY_track_start = e.originalEvent.touches[0].pageY;
		// Add dragged class which removes transition timing
		$content.addClass('dragged');
		// On drag, adding this active class increases the height of the drag area, safeguarding from touching outside of it during drag
		$summaryDrag.addClass('active');
	}
	// ----------------- SUMMARY DRAG -----------------
	function summaryDrag(e) {
		// Get this touch
		touchY_track_1 = e.originalEvent.touches[0].pageY;

		// Measure diff from start
		touchY_track_diff_from_start = touchY_track_start - touchY_track_1;

		// Set panel based on distance from start
		$content.css({ 'bottom': touchY_track_diff_from_start });

		// Measure diff from last touch
		touchY_track_diff_from_prev = touchY_track_1 - touchY_track_2;

		// Push diff into array
		touchY_track_array.push(touchY_track_diff_from_prev);
		touchY_track_array.shift();

		// Set the last touch to this touch
		touchY_track_2 = touchY_track_1;

		// Get average of array to check direction/momentum of drag
		touchY_direction = _.mean(touchY_track_array);
	}
	// ----------------- SUMMARY DRAG END -----------------
	function summaryDragEnd() {
		// Check distance moved and direction of momentum
		if (touchY_track_diff_from_start > 150 && touchY_direction < 0) {
			// Scroll down to content
			scroll_to_content(450);
			$content.css({ 'bottom': '-1px' });
			// Add class "jumping-to-content" to make transition very slow while it scrolls down
			$content.addClass('jumping-to-content');
		} else {
			// Drop panel back to fixed state
			$content.css({ 'bottom': '-1px' });
		}
		// Remove dragged class to allow transition timing again
		$content.removeClass('dragged');
		// Remove active class to revert drag area to original size
		$summaryDrag.removeClass('active');
	}
	//let debounce_summaryDragEnd = _.debounce(summaryDragEnd, 300);
	// =======================================================================================
	// EVENTS
	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$gallery = $('.gallery');
			$content = $('.content-page');
			$contentPanel = $content.find('.panel');
			$contentPanelInner = $contentPanel.find('.inner');
			$contentShim = $('.content-shim');
			$pullUpButton = $('.pull-up-button');
			$overlay = $('.overlay');
			$colorOption = $('.product-option.color').find('.option');
			$sizeOptionContainer = $('.product-option.size');
			$sizeSelection = $('.product-option.size').find('.selection');
			$sizeSelect = $('.product-option.size').find('.select');
			$sizeOptions = $('.product-option.size').find('.options');
			$productActions = $('.product-actions');
			$productActionsShim = $('.product-actions-shim');
			$productPricing = $('.product-pricing');
			$productPricingShim = $('.product-pricing-shim');
			$summary = $('.content-page').find('.summary');
			$summaryShim = $('.content-page').find('.summary-shim');
			$summaryDrag = $('.summary-drag-area');
			$swatchOption1 = $('.product-option.color').find('.option-1');
			$swatchOption2 = $('.product-option.color').find('.option-2');
			$swatchOption3 = $('.product-option.color').find('.option-3');
			$galleryImageSwap1a = $('.gallery').find('.swap-1').find('.fade1').find('img');
			$galleryImageSwap2a = $('.gallery').find('.swap-2').find('.fade1').find('img');
			$galleryImageSwap3a = $('.gallery').find('.swap-3').find('.fade1').find('img');
			$galleryImageSwap4a = $('.gallery').find('.swap-4').find('.fade1').find('img');
			$galleryImageSwap5a = $('.gallery').find('.swap-5').find('.fade1').find('img');
			$galleryImageSwap1b = $('.gallery').find('.swap-1').find('.fade2').find('img');
			$galleryImageSwap2b = $('.gallery').find('.swap-2').find('.fade2').find('img');
			$galleryImageSwap3b = $('.gallery').find('.swap-3').find('.fade2').find('img');
			$galleryImageSwap4b = $('.gallery').find('.swap-4').find('.fade2').find('img');
			$galleryImageSwap5b = $('.gallery').find('.swap-5').find('.fade2').find('img');
			$modelInfo = $('.model-info');
			$modelInfoHeadline = $modelInfo.find('.headline').find('.hide-expanded');

			// =======================================================================================
			// VARS
			contentFixedPanelHeight = $content.outerHeight();
			content_fixed = 0;
			content_fixed_top = 0;
			content_original_height = $content.outerHeight();
			activeSwatch = 1;
			galleryFadeActive = 1;
			touchY_track_start = 0;
			touchY_track_1 = 0;
			touchY_track_2 = 0;
			touchY_track_diff_from_prev = 0;
			touchY_track_diff_from_start = 0;
			touchY_track_array = [0, 0, 0, 0, 0];
			touchY_direction = 0;
			product_tag_timer = undefined;
			$summaryDrag.on('touchstart', function (e) {
				e.preventDefault();
				summaryDragStart(e);
			}).on('touchmove', function (e) {
				e.preventDefault();
				summaryDrag(e);
			}).on('touchend', function (e) {
				e.preventDefault();
				summaryDragEnd();
			});

			$colorOption.on('click', function () {
				$colorOption.removeClass('selected');
				$(this).addClass('selected');
			});
			$swatchOption1.on('click', function () {
				change_color_init(1);
			});
			$swatchOption2.on('click', function () {
				change_color_init(2);
			});
			$swatchOption3.on('click', function () {
				change_color_init(3);
			});
			$sizeSelection.on('click', function () {
				toggleSizeOptions();
			});
			window.addEventListener('scroll', fix_content);
			window.addEventListener('scroll', fix_content_top);
			// =======================================================================================
			// INIT

			// Set content shim to equal height of content. This shim is put in place of the fixed content panel. When the content panel becomes "unfixed", we essentially swap the shim with the real content panel.
			$contentShim.css({ 'height': $contentPanelInner.outerHeight() });
			$productActionsShim.css({ 'height': $productActions.outerHeight() });
			$productPricingShim.css({ 'height': $productPricing.outerHeight() });
			//content_fixed = 1;
			fix_content();
			prototype_tag_animate();

			// =======================================================================================
			// CHECK END
			//lg(`{orange{PDP loaded}}`);
		}
	};
});

//$productPricingActionGroup = $('.pricing-action-group'),
$__System.register('6', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $gallery, $inspoDrawer, $inspoContent, $inspoTab, $inspoBoardGroup, $overlay, inspo_drawer_fix_point, inspo_drawer_visible, inspo_drawer_active, inspo_top_original, inspo_active_board_num;

	// =======================================================================================
	// FUNCTIONS
	// ----------------- FIX INSPO DRAWER -----------------
	function fix_inspo_drawer() {
		var gallery_offset_top = $gallery.offset().top - 50;
		var window_scroll_pos = $(window).scrollTop();
		var diff = gallery_offset_top - window_scroll_pos;
		var galleryDistFromBottom = $gallery[0].getBoundingClientRect().bottom - window.innerHeight;
		if (diff <= 0 && galleryDistFromBottom > -500) {
			// Show the mini inspo drawer
			if (inspo_drawer_visible === 0) {
				var x = $inspoDrawer.offset().top - gallery_offset_top;
				$inspoDrawer.removeClass('hidden');
				$inspoDrawer.removeClass('extra-collapsed');
				inspo_drawer_visible = 1;
			}
		} else if (galleryDistFromBottom >= -490) {
			// Hide the mini inspo drawer when scrolled above fix point
			if (inspo_drawer_visible === 1) {
				$inspoDrawer.addClass('hidden');
				inspo_drawer_visible = 0;
			}
		} else {
			// Hide the mini inspo drawer when scrolled below fix point
			if (inspo_drawer_visible === 1) {
				//$inspoDrawer.addClass('extra-collapsed');
				$inspoDrawer.addClass('hidden');
				inspo_drawer_visible = 0;
			}
		}
	}
	// ----------------- OPEN INSPO DRAWER -----------------
	function open_inspo_drawer() {
		if (inspo_drawer_active === 0) {
			$inspoDrawer.removeClass('collapsed');
			$inspoDrawer.addClass('active');
			$overlay.addClass('active');
			$overlay.scrollTop(10000); // Using overlay with invisible scrolling with a long empty div within. Setting scroll position here so neither scrolling up or down will be anywhere close to scroll limit.
			//$('body').css({'height': window.innerHeight, 'overflow': 'hidden'});
			inspo_drawer_active = 1;
		}
	}
	// ----------------- CLOSE INSPO DRAWER -----------------
	function close_inspo_drawer() {
		if (inspo_drawer_active === 1) {
			$inspoDrawer.addClass('collapsed');
			$inspoDrawer.removeClass('active');
			$overlay.removeClass('active');
			// Reset Inspo Drawer State
			$inspoBoardGroup.css({ 'left': 0 });
			$inspoTab.removeClass('active');
			$inspoDrawer.find('.tab:first-child').addClass('active');
			inspo_active_board_num = 1;
			$inspoContent.scrollTop(0);
			//$('body').css({'height': 'auto', 'overflow': 'visible'});
			inspo_drawer_active = 0;
		}
	}
	// ----------------- SWITCH INSPO BOARD -----------------
	function switch_inspo_board(num) {
		inspo_active_board_num = num;
		$inspoBoardGroup.css({ 'left': '-' + 100 * (num - 1) + '%' });
		$inspoContent.animate({
			scrollTop: 0
		}, {
			duration: 150,
			queue: false
		});
	}
	// =======================================================================================
	// EVENTS
	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$gallery = $('.gallery');
			$inspoDrawer = $('.inspo-drawer');
			$inspoContent = $('.inspo-content');
			$inspoTab = $inspoDrawer.find('.tab');
			$inspoBoardGroup = $inspoDrawer.find('.product-groups');
			$overlay = $('.overlay');

			// =======================================================================================
			// VARS
			inspo_drawer_fix_point = 20;
			inspo_drawer_visible = 0;
			inspo_drawer_active = 0;
			inspo_top_original = $inspoDrawer.css('top');
			inspo_active_board_num = 1;
			$inspoDrawer.on('click', function (e) {
				open_inspo_drawer();
			});
			$overlay.on('click', function () {
				close_inspo_drawer();
			});
			//$inspoClose
			//	.on('click', function(){
			//		close_inspo_drawer();
			//	});
			$inspoTab.on('click', function () {
				var num = $(this).index() + 1;
				if (num !== inspo_active_board_num) {
					switch_inspo_board(num);
					$inspoTab.removeClass('active');
					$(this).addClass('active');
				}
			});
			window.addEventListener('scroll', fix_inspo_drawer);
			// =======================================================================================
			// INIT
			// =======================================================================================
			// CHECK END
			//lg(`{green{PDP Inspo loaded}}`);
		}
	};
});

//$inspoClose = $inspoDrawer.find('.close-button'),
$__System.register('7', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $reviewCarousel, $review, $reviewReadMore, $filterButton, $reviewContentRow, $reviewFilters, review_expanded, review_carousel_scrolling, filters_open, touch_x_start, touch_x_end, lastMove;

	// =======================================================================================
	// FUNCTIONS
	// ----------------- EXPAND REVIEW -----------------
	function expandReview($this) {
		var $review = $this.closest('.review');
		$review.addClass('expanded');

		var target_height = $this.parent().find('.review-message-content').outerHeight();
		var $reviewMessage = $this.parent().find('.review-message');
		$reviewMessage.css({ 'max-height': target_height });

		review_expanded = 1;
	}
	// ----------------- CLOSE REVIEW -----------------
	function collapseReviews() {
		$review.map(function (v, k) {
			var isExpanded = $(k).hasClass('expanded');
			if (isExpanded) {
				$(k).removeClass('expanded');
				var $reviewMessage = $(k).find('.review-message');
				$reviewMessage.css({ 'max-height': 160 });
			}
		});
		review_expanded = 0;
	}
	// ----------------- TIMER TO CLOSE REVIEW -----------------
	function timer_to_close_review() {
		clearTimeout(review_carousel_scrolling);
		review_carousel_scrolling = setTimeout(function () {
			if (review_expanded) {
				collapseReviews();
			}
		}, 600);
	}
	// ----------------- OPEN FILTER -----------------
	function open_filters() {
		$filterButton.addClass('active');
		$reviewContentRow.addClass('expanded');
		//$reviewFilters.css({'height': $reviewFilters.find('.filters').outerHeight()});
	}
	// ----------------- CLOSE FILTER -----------------
	function close_filters() {
		$filterButton.removeClass('active');
		$reviewContentRow.removeClass('expanded');
		//$reviewFilters.css({'height': 0});
	}
	// =======================================================================================
	// EVENTS
	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$reviewCarousel = $('.review-carousel');
			$review = $reviewCarousel.find('.review');
			$reviewReadMore = $('.review-carousel').find('.review').find('.review-content').find('.read-more');
			$filterButton = $('.review-summary').find('.review-filter-button');
			$reviewContentRow = $('.row-review-filters');
			$reviewFilters = $('.review-filters');

			// =======================================================================================
			// VARS
			review_expanded = 0;
			review_carousel_scrolling = undefined;
			filters_open = 0;
			touch_x_start = undefined;
			touch_x_end = undefined;
			lastMove = null;

			$reviewReadMore.on('click', function () {
				expandReview($(this));
			});
			$reviewCarousel.on('touchstart', function (e) {
				touch_x_start = e.originalEvent.touches[0].pageX;
			}).on('touchend', function (e) {
				touch_x_end = e.originalEvent.changedTouches[0].pageX;
				var diff = Math.abs(touch_x_start - touch_x_end);
				if (diff > 50) {
					timer_to_close_review();
				}
			});
			$filterButton.on('click', function () {
				if (filters_open === 0) {
					open_filters();
					filters_open = 1;
				} else {
					close_filters();
					filters_open = 0;
				}
			});
			// =======================================================================================
			// INIT
			// =======================================================================================
			// CHECK END
			//lg(`{green{PDP Reviews loaded}}`);
		}
	};
});
$__System.register('8', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $freeGift, $freeGiftSummary, $freeGiftDetails, $freeGiftDetailsContents, free_gift_open;

	// =======================================================================================
	// FUNCTIONS
	// ----------------- OPEN FREE GIFT -----------------
	function open_free_gift() {
		$freeGift.addClass('expanded');
		$freeGiftDetails.css({ 'height': $freeGiftDetailsContents.outerHeight() });
	}
	// ----------------- CLOSE FREE GIFT -----------------
	function close_free_gift() {
		$freeGift.removeClass('expanded');
		$freeGiftDetails.css({ 'height': 0 });
	}
	// =======================================================================================
	// EVENTS
	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$freeGift = $('.free-gift');
			$freeGiftSummary = $freeGift.find('.summary');
			$freeGiftDetails = $freeGift.find('.details');
			$freeGiftDetailsContents = $freeGiftDetails.find('.contents');

			// =======================================================================================
			// VARS
			free_gift_open = 0;
			$freeGiftSummary.on('click', function () {
				if (free_gift_open === 0) {
					open_free_gift();
					free_gift_open = 1;
				} else {
					close_free_gift();
					free_gift_open = 0;
				}
			});
			// =======================================================================================
			// INIT
			// =======================================================================================
			// CHECK END
			//lg(`{green{PDP Free Gift loaded}}`);
		}
	};
});
$__System.register('9', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $modelInfo, $modelInfoDetails, $modelInfoDetailsContents, $modelInfoHeadline, $sizeFitLink, model_info_open;

	// =======================================================================================
	// FUNCTIONS
	// ----------------- OPEN MODEL INFO -----------------
	function open_model_info() {
		$modelInfo.addClass('expanded');
		$modelInfoDetails.css({ 'height': $modelInfoDetailsContents.outerHeight() });
	}
	// ----------------- CLOSE MODEL INFO -----------------
	function close_model_info() {
		$modelInfo.removeClass('expanded');
		$modelInfoDetails.css({ 'height': 0 });
	}
	// =======================================================================================
	// EVENTS
	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$modelInfo = $('.model-info');
			$modelInfoDetails = $modelInfo.find('.details');
			$modelInfoDetailsContents = $modelInfoDetails.find('.contents');
			$modelInfoHeadline = $modelInfo.find('.headline').find('.hide-expanded');
			$sizeFitLink = $('.size-fit-link');

			// =======================================================================================
			// VARS
			model_info_open = 0;
			$modelInfo.on('click', function () {
				if (model_info_open === 0) {
					open_model_info();
					model_info_open = 1;
				} else {
					close_model_info();
					model_info_open = 0;
				}
			});
			// =======================================================================================
			// INIT
			// =======================================================================================
			// CHECK END
			//lg(`{green{PDP Model Info loaded}}`);
		}
	};
});
$__System.register('a', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $sizeFitLink;

	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$sizeFitLink = $('.size-fit-link');

			// =======================================================================================
			// VARS
			// =======================================================================================
			// FUNCTIONS
			// =======================================================================================
			// EVENTS
			$sizeFitLink.on('click', function (e) {
				e.preventDefault();
			});
			// =======================================================================================
			// INIT
			// =======================================================================================
			// CHECK END
			//lg(`{green{PDP Size Fit loaded}}`);
		}
	};
});
$__System.register('b', ['3', '4', '5'], function (_export) {
  // =======================================================================================
  // DOM
  // =======================================================================================
  // VARS
  // =======================================================================================
  // FUNCTIONS
  // =======================================================================================
  // EVENTS
  // =======================================================================================
  // INIT
  // =======================================================================================
  // CHECK END
  //lg(`{green{PDP Zoom loaded}}`);
  'use strict';

  var $, _, lg;

  return {
    setters: [function (_2) {
      $ = _2['default'];
    }, function (_3) {
      _ = _3['default'];
    }, function (_4) {
      lg = _4.lg;
    }],
    execute: function () {}
  };
});
$__System.register('c', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $video;

	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$video = $('.video');

			// =======================================================================================
			// VARS
			// =======================================================================================
			// FUNCTIONS
			// =======================================================================================
			// EVENTS
			$video.on('click', function () {
				var vidID = $(this).data('vid-id');
				var myVideo = document.getElementById(vidID);
				myVideo.currentTime = 0;
				myVideo.play();
			});
			// =======================================================================================
			// INIT
			// =======================================================================================
			// CHECK END
			//lg(`{green{video-mobile loaded}}`);
		}
	};
});
$__System.registerDynamic('d', ['@empty'], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
  (function (Buffer, process) {
    ;
    (function () {
      var undefined;
      var VERSION = '4.17.15';
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
          FUNC_ERROR_TEXT = 'Expected a function';
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = '__lodash_placeholder__';
      var CLONE_DEEP_FLAG = 1,
          CLONE_FLAT_FLAG = 2,
          CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1,
          WRAP_BIND_KEY_FLAG = 2,
          WRAP_CURRY_BOUND_FLAG = 4,
          WRAP_CURRY_FLAG = 8,
          WRAP_CURRY_RIGHT_FLAG = 16,
          WRAP_PARTIAL_FLAG = 32,
          WRAP_PARTIAL_RIGHT_FLAG = 64,
          WRAP_ARY_FLAG = 128,
          WRAP_REARG_FLAG = 256,
          WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30,
          DEFAULT_TRUNC_OMISSION = '...';
      var HOT_COUNT = 800,
          HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1,
          LAZY_MAP_FLAG = 2,
          LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0,
          MAX_SAFE_INTEGER = 9007199254740991,
          MAX_INTEGER = 1.7976931348623157e+308,
          NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295,
          MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
          HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          asyncTag = '[object AsyncFunction]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          domExcTag = '[object DOMException]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          nullTag = '[object Null]',
          objectTag = '[object Object]',
          promiseTag = '[object Promise]',
          proxyTag = '[object Proxy]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]',
          undefinedTag = '[object Undefined]',
          weakMapTag = '[object WeakMap]',
          weakSetTag = '[object WeakSet]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var reEmptyStringLeading = /\b__p \+= '';/g,
          reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
          reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
          reUnescapedHtml = /[&<>"']/g,
          reHasEscapedHtml = RegExp(reEscapedHtml.source),
          reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g,
          reEvaluate = /<%([\s\S]+?)%>/g,
          reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
          reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrim = /^\s+|\s+$/g,
          reTrimStart = /^\s+/,
          reTrimEnd = /\s+$/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
          reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = '\\ud800-\\udfff',
          rsComboMarksRange = '\\u0300-\\u036f',
          reComboHalfMarksRange = '\\ufe20-\\ufe2f',
          rsComboSymbolsRange = '\\u20d0-\\u20ff',
          rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
          rsDingbatRange = '\\u2700-\\u27bf',
          rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
          rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
          rsPunctuationRange = '\\u2000-\\u206f',
          rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          rsVarRange = '\\ufe0e\\ufe0f',
          rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]",
          rsAstral = '[' + rsAstralRange + ']',
          rsBreak = '[' + rsBreakRange + ']',
          rsCombo = '[' + rsComboRange + ']',
          rsDigits = '\\d+',
          rsDingbat = '[' + rsDingbatRange + ']',
          rsLower = '[' + rsLowerRange + ']',
          rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
          rsFitz = '\\ud83c[\\udffb-\\udfff]',
          rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
          rsNonAstral = '[^' + rsAstralRange + ']',
          rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          rsUpper = '[' + rsUpperRange + ']',
          rsZWJ = '\\u200d';
      var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
          rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
          rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
          rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
          reOptMod = rsModifier + '?',
          rsOptVar = '[' + rsVarRange + ']?',
          rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
          rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
          rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
      var reApos = RegExp(rsApos, 'g');
      var reComboMark = RegExp(rsCombo, 'g');
      var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
      var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
      var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = ['Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object', 'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcc': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xec': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u0104': 'A',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u0105': 'a',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010a': 'C',
        '\u010c': 'C',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010b': 'c',
        '\u010d': 'c',
        '\u010e': 'D',
        '\u0110': 'D',
        '\u010f': 'd',
        '\u0111': 'd',
        '\u0112': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u0118': 'E',
        '\u011a': 'E',
        '\u0113': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u0119': 'e',
        '\u011b': 'e',
        '\u011c': 'G',
        '\u011e': 'G',
        '\u0120': 'G',
        '\u0122': 'G',
        '\u011d': 'g',
        '\u011f': 'g',
        '\u0121': 'g',
        '\u0123': 'g',
        '\u0124': 'H',
        '\u0126': 'H',
        '\u0125': 'h',
        '\u0127': 'h',
        '\u0128': 'I',
        '\u012a': 'I',
        '\u012c': 'I',
        '\u012e': 'I',
        '\u0130': 'I',
        '\u0129': 'i',
        '\u012b': 'i',
        '\u012d': 'i',
        '\u012f': 'i',
        '\u0131': 'i',
        '\u0134': 'J',
        '\u0135': 'j',
        '\u0136': 'K',
        '\u0137': 'k',
        '\u0138': 'k',
        '\u0139': 'L',
        '\u013b': 'L',
        '\u013d': 'L',
        '\u013f': 'L',
        '\u0141': 'L',
        '\u013a': 'l',
        '\u013c': 'l',
        '\u013e': 'l',
        '\u0140': 'l',
        '\u0142': 'l',
        '\u0143': 'N',
        '\u0145': 'N',
        '\u0147': 'N',
        '\u014a': 'N',
        '\u0144': 'n',
        '\u0146': 'n',
        '\u0148': 'n',
        '\u014b': 'n',
        '\u014c': 'O',
        '\u014e': 'O',
        '\u0150': 'O',
        '\u014d': 'o',
        '\u014f': 'o',
        '\u0151': 'o',
        '\u0154': 'R',
        '\u0156': 'R',
        '\u0158': 'R',
        '\u0155': 'r',
        '\u0157': 'r',
        '\u0159': 'r',
        '\u015a': 'S',
        '\u015c': 'S',
        '\u015e': 'S',
        '\u0160': 'S',
        '\u015b': 's',
        '\u015d': 's',
        '\u015f': 's',
        '\u0161': 's',
        '\u0162': 'T',
        '\u0164': 'T',
        '\u0166': 'T',
        '\u0163': 't',
        '\u0165': 't',
        '\u0167': 't',
        '\u0168': 'U',
        '\u016a': 'U',
        '\u016c': 'U',
        '\u016e': 'U',
        '\u0170': 'U',
        '\u0172': 'U',
        '\u0169': 'u',
        '\u016b': 'u',
        '\u016d': 'u',
        '\u016f': 'u',
        '\u0171': 'u',
        '\u0173': 'u',
        '\u0174': 'W',
        '\u0175': 'w',
        '\u0176': 'Y',
        '\u0177': 'y',
        '\u0178': 'Y',
        '\u0179': 'Z',
        '\u017b': 'Z',
        '\u017d': 'Z',
        '\u017a': 'z',
        '\u017c': 'z',
        '\u017e': 'z',
        '\u0132': 'IJ',
        '\u0133': 'ij',
        '\u0152': 'Oe',
        '\u0153': 'oe',
        '\u0149': "'n",
        '\u017f': 's'
      };
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
      };
      var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };
      var freeParseFloat = parseFloat,
          freeParseInt = parseInt;
      var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function('return this')();
      var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function () {
        try {
          var types = freeModule && freeModule.require && freeModule.require('util').types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {}
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
          nodeIsDate = nodeUtil && nodeUtil.isDate,
          nodeIsMap = nodeUtil && nodeUtil.isMap,
          nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
          nodeIsSet = nodeUtil && nodeUtil.isSet,
          nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty('length');
      function asciiToArray(string) {
        return string.split('');
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function (value, key, collection) {
          if (predicate(value, key, collection)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function (object) {
          return object == null ? undefined : object[key];
        };
      }
      function basePropertyOf(object) {
        return function (key) {
          return object == null ? undefined : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function (value, index, collection) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result,
            index = -1,
            length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined) {
            result = result === undefined ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function (key) {
          return [key, object[key]];
        });
      }
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function (key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1,
            length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length,
            result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data,
            result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function (value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function (value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function (value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array = context.Array,
            Date = context.Date,
            Error = context.Error,
            Function = context.Function,
            Math = context.Math,
            Object = context.Object,
            RegExp = context.RegExp,
            String = context.String,
            TypeError = context.TypeError;
        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;
        var coreJsData = context['__core-js_shared__'];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object);
        var oldDash = root._;
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var Buffer = moduleExports ? context.Buffer : undefined,
            Symbol = context.Symbol,
            Uint8Array = context.Uint8Array,
            allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
            getPrototype = overArg(Object.getPrototypeOf, Object),
            objectCreate = Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice,
            spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
            symIterator = Symbol ? Symbol.iterator : undefined,
            symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = function () {
          try {
            var func = getNative(Object, 'defineProperty');
            func({}, '', {});
            return func;
          } catch (e) {}
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
            ctxNow = Date && Date.now !== root.Date.now && Date.now,
            ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math.ceil,
            nativeFloor = Math.floor,
            nativeGetSymbols = Object.getOwnPropertySymbols,
            nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
            nativeIsFinite = context.isFinite,
            nativeJoin = arrayProto.join,
            nativeKeys = overArg(Object.keys, Object),
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeNow = Date.now,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random,
            nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, 'DataView'),
            Map = getNative(context, 'Map'),
            Promise = getNative(context, 'Promise'),
            Set = getNative(context, 'Set'),
            WeakMap = getNative(context, 'WeakMap'),
            nativeCreate = getNative(Object, 'create');
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, '__wrapped__')) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function () {
          function object() {}
          return function (proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result = new object();
            object.prototype = undefined;
            return result;
          };
        }();
        function baseLodash() {}
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined;
        }
        lodash.templateSettings = {
          'escape': reEscape,
          'evaluate': reEvaluate,
          'interpolate': reInterpolate,
          'variable': '',
          'imports': { '_': lodash }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result = new LazyWrapper(this.__wrapped__);
          result.__actions__ = copyArray(this.__actions__);
          result.__dir__ = this.__dir__;
          result.__filtered__ = this.__filtered__;
          result.__iteratees__ = copyArray(this.__iteratees__);
          result.__takeCount__ = this.__takeCount__;
          result.__views__ = copyArray(this.__views__);
          return result;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result = new LazyWrapper(this);
            result.__dir__ = -1;
            result.__filtered__ = true;
          } else {
            result = this.clone();
            result.__dir__ *= -1;
          }
          return result;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(),
              dir = this.__dir__,
              isArr = isArray(array),
              isRight = dir < 0,
              arrLength = isArr ? array.length : 0,
              view = getView(0, arrLength, this.__views__),
              start = view.start,
              end = view.end,
              length = end - start,
              index = isRight ? end : start - 1,
              iteratees = this.__iteratees__,
              iterLength = iteratees.length,
              resIndex = 0,
              takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1,
                value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex],
                  iteratee = data.iteratee,
                  type = data.type,
                  computed = iteratee(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result[resIndex++] = value;
          }
          return result;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result = this.has(key) && delete this.__data__[key];
          this.size -= result ? 1 : 0;
          return result;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result = getMapData(this, key)['delete'](key);
          this.size -= result ? 1 : 0;
          return result;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key),
              size = data.size;
          data.set(key, value);
          this.size += data.size == size ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values) {
          var index = -1,
              length = values == null ? 0 : values.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__,
              result = data['delete'](key);
          this.size = data.size;
          return result;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value),
              isArg = !isArr && isArguments(value),
              isBuff = !isArr && !isArg && isBuffer(value),
              isType = !isArr && !isArg && !isBuff && isTypedArray(value),
              skipIndexes = isArr || isArg || isBuff || isType,
              result = skipIndexes ? baseTimes(value.length, String) : [],
              length = result.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || isIndex(key, length)))) {
              result.push(key);
            }
          }
          return result;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee, accumulator) {
          baseEach(collection, function (value, key, collection) {
            setter(accumulator, value, iteratee(value), collection);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == '__proto__' && defineProperty) {
            defineProperty(object, key, {
              'configurable': true,
              'enumerable': true,
              'value': value,
              'writable': true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1,
              length = paths.length,
              result = Array(length),
              skip = object == null;
          while (++index < length) {
            result[index] = skip ? undefined : get(object, paths[index]);
          }
          return result;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result,
              isDeep = bitmask & CLONE_DEEP_FLAG,
              isFlat = bitmask & CLONE_FLAT_FLAG,
              isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result);
            }
          } else {
            var tag = getTag(value),
                isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result);
          if (isSet(value)) {
            value.forEach(function (subValue) {
              result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function (subValue, key) {
              result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined : keysFunc(value);
          arrayEach(props || value, function (subValue, key) {
            if (props) {
              key = subValue;
              subValue = value[key];
            }
            assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
          });
          return result;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function (object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (length--) {
            var key = props[length],
                predicate = source[key],
                value = object[key];
            if (value === undefined && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function () {
            func.apply(undefined, args);
          }, wait);
        }
        function baseDifference(array, values, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              isCommon = true,
              length = array.length,
              result = [],
              valuesLength = values.length;
          if (!length) {
            return result;
          }
          if (iteratee) {
            values = arrayMap(values, baseUnary(iteratee));
          }
          if (comparator) {
            includes = arrayIncludesWith;
            isCommon = false;
          } else if (values.length >= LARGE_ARRAY_SIZE) {
            includes = cacheHas;
            isCommon = false;
            values = new SetCache(values);
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee == null ? value : iteratee(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result.push(value);
            } else if (!includes(values, computed, comparator)) {
              result.push(value);
            }
          }
          return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result = true;
          baseEach(collection, function (value, index, collection) {
            result = !!predicate(value, index, collection);
            return result;
          });
          return result;
        }
        function baseExtremum(array, iteratee, comparator) {
          var index = -1,
              length = array.length;
          while (++index < length) {
            var value = array[index],
                current = iteratee(value);
            if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current,
                  result = value;
            }
          }
          return result;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result = [];
          baseEach(collection, function (value, index, collection) {
            if (predicate(value, index, collection)) {
              result.push(value);
            }
          });
          return result;
        }
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1,
              length = array.length;
          predicate || (predicate = isFlattenable);
          result || (result = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
          return object && baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function (key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0,
              length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee, comparator) {
          var includes = comparator ? arrayIncludesWith : arrayIncludes,
              length = arrays[0].length,
              othLength = arrays.length,
              othIndex = othLength,
              caches = Array(othLength),
              maxLength = Infinity,
              result = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee) {
              array = arrayMap(array, baseUnary(iteratee));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
          }
          array = arrays[0];
          var index = -1,
              seen = caches[0];
          outer: while (++index < length && result.length < maxLength) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseInverter(object, setter, iteratee, accumulator) {
          baseForOwn(object, function (value, key, object) {
            setter(accumulator, iteratee(value), key, object);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = objIsArr ? arrayTag : getTag(object),
              othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag,
              othIsObj = othTag == objectTag,
              isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                  othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == 'function') {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == 'object') {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != 'constructor') {
              result.push(key);
            }
          }
          return result;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object),
              result = [];
          for (var key in object) {
            if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee) {
          var index = -1,
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function (value, key, collection) {
            result[++index] = iteratee(value, key, collection);
          });
          return result;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function (object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function (object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function (srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key),
              srcValue = safeGet(source, key),
              stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
          var isCommon = newValue === undefined;
          if (isCommon) {
            var isArr = isArray(srcValue),
                isBuff = !isArr && isBuffer(srcValue),
                isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack['delete'](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined;
        }
        function baseOrderBy(collection, iteratees, orders) {
          var index = -1;
          iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
          var result = baseMap(collection, function (value, key, collection) {
            var criteria = arrayMap(iteratees, function (iteratee) {
              return iteratee(value);
            });
            return {
              'criteria': criteria,
              'index': ++index,
              'value': value
            };
          });
          return baseSortBy(result, function (object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function (value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1,
              length = paths.length,
              result = {};
          while (++index < length) {
            var path = paths[index],
                value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result, castPath(path, object), value);
            }
          }
          return result;
        }
        function basePropertyDeep(path) {
          return function (object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values, iteratee, comparator) {
          var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
              index = -1,
              length = values.length,
              seen = array;
          if (array === values) {
            values = copyArray(values);
          }
          if (iteratee) {
            seen = arrayMap(array, baseUnary(iteratee));
          }
          while (++index < length) {
            var fromIndex = 0,
                value = values[index],
                computed = iteratee ? iteratee(value) : value;
            while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0,
              lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);
          while (length--) {
            result[fromRight ? length : ++index] = start;
            start += step;
          }
          return result;
        }
        function baseRepeat(string, n) {
          var result = '';
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result;
          }
          do {
            if (n % 2) {
              result += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + '');
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1,
              length = path.length,
              lastIndex = length - 1,
              nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]),
                newValue = value;
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined;
              if (newValue === undefined) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function (func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function (func, string) {
          return defineProperty(func, 'toString', {
            'configurable': true,
            'enumerable': false,
            'value': constant(string),
            'writable': true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }
        function baseSome(collection, predicate) {
          var result;
          baseEach(collection, function (value, index, collection) {
            result = predicate(value, index, collection);
            return !result;
          });
          return !!result;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0,
              high = array == null ? low : array.length;
          if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1,
                  computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee, retHighest) {
          value = iteratee(value);
          var low = 0,
              high = array == null ? 0 : array.length,
              valIsNaN = value !== value,
              valIsNull = value === null,
              valIsSymbol = isSymbol(value),
              valIsUndefined = value === undefined;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2),
                computed = iteratee(array[mid]),
                othIsDefined = computed !== undefined,
                othIsNull = computed === null,
                othIsReflexive = computed === computed,
                othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee) {
          var index = -1,
              length = array.length,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result;
        }
        function baseToNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == 'string') {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + '';
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function baseUniq(array, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              length = array.length,
              isCommon = true,
              result = [],
              seen = result;
          if (comparator) {
            isCommon = false;
            includes = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set = iteratee ? null : createSet(array);
            if (set) {
              return setToArray(set);
            }
            isCommon = false;
            includes = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee ? [] : result;
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee) {
                seen.push(computed);
              }
              result.push(value);
            } else if (!includes(seen, computed, comparator)) {
              if (seen !== result) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length,
              index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result = value;
          if (result instanceof LazyWrapper) {
            result = result.value();
          }
          return arrayReduce(actions, function (result, action) {
            return action.func.apply(action.thisArg, arrayPush([result], action.args));
          }, result);
        }
        function baseXor(arrays, iteratee, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1,
              result = Array(length);
          while (++index < length) {
            var array = arrays[index],
                othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result, 1), iteratee, comparator);
        }
        function baseZipObject(props, values, assignFunc) {
          var index = -1,
              length = props.length,
              valsLength = values.length,
              result = {};
          while (++index < length) {
            var value = index < valsLength ? values[index] : undefined;
            assignFunc(result, props[index], value);
          }
          return result;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == 'function' ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function (id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length,
              result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result);
          return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result).set(new Uint8Array(arrayBuffer));
          return result;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result.lastIndex = regexp.lastIndex;
          return result;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined,
                valIsNull = value === null,
                valIsReflexive = value === value,
                valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined,
                othIsNull = other === null,
                othIsReflexive = other === other,
                othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1,
              objCriteria = object.criteria,
              othCriteria = other.criteria,
              length = objCriteria.length,
              ordersLength = orders.length;
          while (++index < length) {
            var result = compareAscending(objCriteria[index], othCriteria[index]);
            if (result) {
              if (index >= ordersLength) {
                return result;
              }
              var order = orders[index];
              return result * (order == 'desc' ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersLength = holders.length,
              leftIndex = -1,
              leftLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(leftLength + rangeLength),
              isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result[leftIndex++] = args[argsIndex++];
          }
          return result;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersIndex = -1,
              holdersLength = holders.length,
              rightIndex = -1,
              rightLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(rangeLength + rightLength),
              isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result;
        }
        function copyArray(source, array) {
          var index = -1,
              length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1,
              length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
            if (newValue === undefined) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function (collection, iteratee) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator,
                accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function (object, sources) {
            var index = -1,
                length = sources.length,
                customizer = length > 1 ? sources[length - 1] : undefined,
                guard = length > 2 ? sources[2] : undefined;
            customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function (collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function (object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG,
              Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function (string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function (string) {
            return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
          };
        }
        function createCtor(Ctor) {
          return function () {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype),
                result = Ctor.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length,
                placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function (collection, predicate, fromIndex) {
            var iterable = Object(collection);
            if (!isArrayLike(collection)) {
              var iteratee = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function (key) {
                return iteratee(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function (funcs) {
            var length = funcs.length,
                index = length,
                prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func),
                  data = funcName == 'wrapper' ? getData(func) : undefined;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function () {
              var args = arguments,
                  value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index = 0,
                  result = length ? funcs[index].apply(this, args) : value;
              while (++index < length) {
                result = funcs[index].call(this, result);
              }
              return result;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG,
              isBind = bitmask & WRAP_BIND_FLAG,
              isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
              isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
              isFlip = bitmask & WRAP_FLIP_FLAG,
              Ctor = isBindKey ? undefined : createCtor(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper),
                  holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
            }
            var thisBinding = isBind ? thisArg : this,
                fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary < length) {
              args.length = ary;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function (object, iteratee) {
            return baseInverter(object, setter, toIteratee(iteratee), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function (value, other) {
            var result;
            if (value === undefined && other === undefined) {
              return defaultValue;
            }
            if (value !== undefined) {
              result = value;
            }
            if (other !== undefined) {
              if (result === undefined) {
                return other;
              }
              if (typeof value == 'string' || typeof other == 'string') {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result = operator(value, other);
            }
            return result;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function (iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function (args) {
              var thisArg = this;
              return arrayFunc(iteratees, function (iteratee) {
                return apply(iteratee, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined ? ' ' : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG,
              Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1,
                argsLength = arguments.length,
                leftIndex = -1,
                leftLength = partials.length,
                args = Array(leftLength + argsLength),
                fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function (start, end, step) {
            if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
              end = step = undefined;
            }
            start = toFinite(start);
            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function (value, other) {
            if (!(typeof value == 'string' && typeof other == 'string')) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG,
              newHolders = isCurry ? holders : undefined,
              newHoldersRight = isCurry ? undefined : holders,
              newPartials = isCurry ? partials : undefined,
              newPartialsRight = isCurry ? undefined : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
          var result = wrapFunc.apply(undefined, newData);
          if (isLaziable(func)) {
            setData(result, newData);
          }
          result.placeholder = placeholder;
          return setWrapToString(result, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function (number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + 'e').split('e'),
                  value = func(pair[0] + 'e' + (+pair[1] + precision));
              pair = (toString(value) + 'e').split('e');
              return +(pair[0] + 'e' + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
          return new Set(values);
        };
        function createToPairs(keysFunc) {
          return function (object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
          }
          ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
          arity = arity === undefined ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials,
                holdersRight = holders;
            partials = holders = undefined;
          }
          var data = isBindKey ? undefined : getData(func);
          var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result = createPartial(func, bitmask, thisArg, partials);
          } else {
            result = createHybrid.apply(undefined, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
            stack['delete'](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
              arrLength = array.length,
              othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var stacked = stack.get(array);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var index = -1,
              result = true,
              seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function (othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result = false;
              break;
            }
          }
          stack['delete'](array);
          stack['delete'](other);
          return result;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + '';
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack['delete'](object);
              return result;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
              objProps = getAllKeys(object),
              objLength = objProps.length,
              othProps = getAllKeys(other),
              othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var stacked = stack.get(object);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == 'constructor');
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;
            if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack['delete'](object);
          stack['delete'](other);
          return result;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined, flatten), func + '');
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function (func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result = func.name + '',
              array = realNames[result],
              length = hasOwnProperty.call(realNames, result) ? array.length : 0;
          while (length--) {
            var data = array[length],
                otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result = lodash.iteratee || iteratee;
          result = result === iteratee ? baseIteratee : result;
          return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }
        function getMatchData(object) {
          var result = keys(object),
              length = result.length;
          while (length--) {
            var key = result[length],
                value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
          }
          return result;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined;
            var unmasked = true;
          } catch (e) {}
          var result = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
          if (object == null) {
            return [];
          }
          object = Object(object);
          return arrayFilter(nativeGetSymbols(object), function (symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
          var result = [];
          while (object) {
            arrayPush(result, getSymbols(object));
            object = getPrototype(object);
          }
          return result;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function (value) {
            var result = baseGetTag(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : '';
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        function getView(start, end, transforms) {
          var index = -1,
              length = transforms.length;
          while (++index < length) {
            var data = transforms[index],
                size = data.size;
            switch (data.type) {
              case 'drop':
                start += size;
                break;
              case 'dropRight':
                end -= size;
                break;
              case 'take':
                end = nativeMin(end, start + size);
                break;
              case 'takeRight':
                start = nativeMax(start, end - size);
                break;
            }
          }
          return {
            'start': start,
            'end': end
          };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1,
              length = path.length,
              result = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result || ++index != length) {
            return result;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length,
              result = new array.constructor(length);
          if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
          }
          return result;
        }
        function initCloneObject(object) {
          return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
          details = details.join(length > 2 ? ', ' : ' ');
          return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func),
              other = lodash[funcName];
          if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function (object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
          };
        }
        function memoizeCapped(func) {
          var result = memoize(func, function (key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result.cache;
          return result;
        }
        function mergeData(data, source) {
          var bitmask = data[1],
              srcBitmask = source[1],
              newBitmask = bitmask | srcBitmask,
              isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result = [];
          if (object != null) {
            for (var key in Object(object)) {
              result.push(key);
            }
          }
          return result;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function () {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length,
              length = nativeMin(indexes.length, arrLength),
              oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === 'constructor' && typeof object[key] === 'function') {
            return;
          }
          if (key == '__proto__') {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function (func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + '';
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0,
              lastCalled = 0;
          return function () {
            var stamp = nativeNow(),
                remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined, arguments);
          };
        }
        function shuffleSelf(array, size) {
          var index = -1,
              length = array.length,
              lastIndex = length - 1;
          size = size === undefined ? length : size;
          while (++index < size) {
            var rand = baseRandom(index, lastIndex),
                value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size;
          return array;
        }
        var stringToPath = memoizeCapped(function (string) {
          var result = [];
          if (string.charCodeAt(0) === 46) {
            result.push('');
          }
          string.replace(rePropName, function (match, number, quote, subString) {
            result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
          });
          return result;
        });
        function toKey(value) {
          if (typeof value == 'string' || isSymbol(value)) {
            return value;
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function (pair) {
            var value = '_.' + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result.__actions__ = copyArray(wrapper.__actions__);
          result.__index__ = wrapper.__index__;
          result.__values__ = wrapper.__values__;
          return result;
        }
        function chunk(array, size, guard) {
          if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
            size = 1;
          } else {
            size = nativeMax(toInteger(size), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size < 1) {
            return [];
          }
          var index = 0,
              resIndex = 0,
              result = Array(nativeCeil(length / size));
          while (index < length) {
            result[resIndex++] = baseSlice(array, index, index += size);
          }
          return result;
        }
        function compact(array) {
          var index = -1,
              length = array == null ? 0 : array.length,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array(length - 1),
              array = arguments[0],
              index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function (array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function (array, values) {
          var iteratee = last(values);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
        });
        var differenceWith = baseRest(function (array, values) {
          var comparator = last(values);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1,
              length = pairs == null ? 0 : pairs.length,
              result = {};
          while (++index < length) {
            var pair = pairs[index];
            result[pair[0]] = pair[1];
          }
          return result;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function (arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function (arrays) {
          var iteratee = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee === last(mapped)) {
            iteratee = undefined;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
        });
        var intersectionWith = baseRest(function (arrays) {
          var comparator = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == 'function' ? comparator : undefined;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? '' : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values) {
          return array && array.length && values && values.length ? basePullAll(array, values) : array;
        }
        function pullAllBy(array, values, iteratee) {
          return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
        }
        function pullAllWith(array, values, comparator) {
          return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
        }
        var pullAt = flatRest(function (array, indexes) {
          var length = array == null ? 0 : array.length,
              result = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function (index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result;
        });
        function remove(array, predicate) {
          var result = [];
          if (!(array && array.length)) {
            return result;
          }
          var index = -1,
              indexes = [],
              length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function (arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function (arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
        });
        var unionWith = baseRest(function (arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == 'function' ? comparator : undefined;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == 'function' ? comparator : undefined;
          return array && array.length ? baseUniq(array, undefined, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function (group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function (index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee) {
          if (!(array && array.length)) {
            return [];
          }
          var result = unzip(array);
          if (iteratee == null) {
            return result;
          }
          return arrayMap(result, function (group) {
            return apply(iteratee, undefined, group);
          });
        }
        var without = baseRest(function (array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        var xor = baseRest(function (arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function (arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
        });
        var xorWith = baseRest(function (arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == 'function' ? comparator : undefined;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values) {
          return baseZipObject(props || [], values || [], assignValue);
        }
        function zipObjectDeep(props, values) {
          return baseZipObject(props || [], values || [], baseSet);
        }
        var zipWith = baseRest(function (arrays) {
          var length = arrays.length,
              iteratee = length > 1 ? arrays[length - 1] : undefined;
          iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
          return unzipWith(arrays, iteratee);
        });
        function chain(value) {
          var result = lodash(value);
          result.__chain__ = true;
          return result;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function (paths) {
          var length = paths.length,
              start = length ? paths[0] : 0,
              value = this.__wrapped__,
              interceptor = function (object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
          });
          return new LodashWrapper(value, this.__chain__).thru(function (array) {
            if (length && !array.length) {
              array.push(undefined);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length,
              value = done ? undefined : this.__values__[this.__index__++];
          return {
            'done': done,
            'value': value
          };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result,
              parent = this;
          while (parent instanceof baseLodash) {
            var clone = wrapperClone(parent);
            clone.__index__ = 0;
            clone.__values__ = undefined;
            if (result) {
              previous.__wrapped__ = clone;
            } else {
              result = clone;
            }
            var previous = clone;
            parent = parent.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              'func': thru,
              'args': [reverse],
              'thisArg': undefined
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function (result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            ++result[key];
          } else {
            baseAssignValue(result, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), 1);
        }
        function flatMapDeep(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), INFINITY);
        }
        function flatMapDepth(collection, iteratee, depth) {
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee), depth);
        }
        function forEach(collection, iteratee) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee, 3));
        }
        function forEachRight(collection, iteratee) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee, 3));
        }
        var groupBy = createAggregator(function (result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            result[key].push(value);
          } else {
            baseAssignValue(result, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function (collection, path, args) {
          var index = -1,
              isFunc = typeof path == 'function',
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function (value) {
            result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result;
        });
        var keyBy = createAggregator(function (result, value, key) {
          baseAssignValue(result, key, value);
        });
        function map(collection, iteratee) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function (result, value, key) {
          result[key ? 0 : 1].push(value);
        }, function () {
          return [[], []];
        });
        function reduce(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function (collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function () {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function () {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
          var result;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function () {
            if (--n > 0) {
              result = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined;
            }
            return result;
          };
        }
        var bind = baseRest(function (func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function (object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curry.placeholder;
          return result;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curryRight.placeholder;
          return result;
        }
        function debounce(func, wait, options) {
          var lastArgs,
              lastThis,
              maxWait,
              result,
              timerId,
              lastCallTime,
              lastInvokeTime = 0,
              leading = false,
              maxing = false,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = 'maxWait' in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs,
                thisArg = lastThis;
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
          }
          function cancel() {
            if (timerId !== undefined) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
          }
          function flush() {
            return timerId === undefined ? result : trailingEdge(now());
          }
          function debounced() {
            var time = now(),
                isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function (func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function (func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function () {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result) || cache;
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function () {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function (func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function (args) {
            var index = -1,
                length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function (func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
        });
        var partialRight = baseRest(function (func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        var rearg = flatRest(function (func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
        });
        function rest(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function (args) {
            var array = args[start],
                otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            'leading': leading,
            'maxWait': wait,
            'trailing': trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function (value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function () {
          return arguments;
        }()) ? baseIsArguments : function (value) {
          return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
        };
        var isArray = Array.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          var result = customizer ? customizer(value, other) : undefined;
          return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == 'number' && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == 'number' && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == 'object' || type == 'function');
        }
        function isObjectLike(value) {
          return value != null && typeof value == 'object';
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
          return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function (value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value),
              func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result = toFinite(value),
              remainder = result % 1;
          return result === result ? remainder ? result - remainder : result : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? other + '' : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? '' : baseToString(value);
        }
        var assign = createAssigner(function (object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function (object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function (object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result = baseCreate(prototype);
          return properties == null ? result : baseAssign(result, properties);
        }
        var defaults = baseRest(function (object, sources) {
          object = Object(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function (args) {
          args.push(undefined, customDefaultsMerge);
          return apply(mergeWith, undefined, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee) {
          return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        function forInRight(object, iteratee) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        function forOwn(object, iteratee) {
          return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        function forOwnRight(object, iteratee) {
          return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function (result, value, key) {
          if (value != null && typeof value.toString != 'function') {
            value = nativeObjectToString.call(value);
          }
          result[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function (result, value, key) {
          if (value != null && typeof value.toString != 'function') {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function (value, key, object) {
            baseAssignValue(result, iteratee(value, key, object), value);
          });
          return result;
        }
        function mapValues(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function (value, key, object) {
            baseAssignValue(result, key, iteratee(value, key, object));
          });
          return result;
        }
        var merge = createAssigner(function (object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function (object, paths) {
          var result = {};
          if (object == null) {
            return result;
          }
          var isDeep = false;
          paths = arrayMap(paths, function (path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result);
          if (isDeep) {
            result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result, paths[length]);
          }
          return result;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function (object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function (prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function (value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1,
              length = path.length;
          if (!length) {
            length = 1;
            object = undefined;
          }
          while (++index < length) {
            var value = object == null ? undefined : object[toKey(path[index])];
            if (value === undefined) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee, accumulator) {
          var isArr = isArray(object),
              isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee = getIteratee(iteratee, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
            return iteratee(accumulator, value, index, object);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined) {
            upper = lower;
            lower = undefined;
          }
          if (upper !== undefined) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined;
          }
          if (floating === undefined) {
            if (typeof upper == 'boolean') {
              floating = upper;
              upper = undefined;
            } else if (typeof lower == 'boolean') {
              floating = lower;
              lower = undefined;
            }
          }
          if (lower === undefined && upper === undefined) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function (result, word, index) {
          word = word.toLowerCase();
          return result + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        var kebabCase = createCompounder(function (result, word, index) {
          return result + (index ? '-' : '') + word.toLowerCase();
        });
        var lowerCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst('toLowerCase');
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments,
              string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function (result, word, index) {
          return result + (index ? '_' : '') + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined;
          }
          limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
              importsKeys = keys(imports),
              importsValues = baseValues(imports, importsKeys);
          var isEscaping,
              isEvaluating,
              index = 0,
              interpolate = options.interpolate || reNoMatch,
              source = "__p += '";
          var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
          var sourceURL = '//# sourceURL=' + (hasOwnProperty.call(options, 'sourceURL') ? (options.sourceURL + '').replace(/[\r\n]/g, ' ') : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
          string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, 'variable') && options.variable;
          if (!variable) {
            source = 'with (obj) {\n' + source + '\n}\n';
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
          source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
          var result = attempt(function () {
            return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
          });
          result.source = source;
          if (isError(result)) {
            throw result;
          }
          return result;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrim, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              chrSymbols = stringToArray(chars),
              start = charsStartIndex(strSymbols, chrSymbols),
              end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join('');
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimEnd, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join('');
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimStart, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join('');
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH,
              omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = 'separator' in options ? options.separator : separator;
            length = 'length' in options ? toInteger(options.length) : length;
            omission = 'omission' in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
          if (separator === undefined) {
            return result + omission;
          }
          if (strSymbols) {
            end += result.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match,
                  substring = result;
              if (!separator.global) {
                separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result = result.slice(0, newEnd === undefined ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result.lastIndexOf(separator);
            if (index > -1) {
              result = result.slice(0, index);
            }
          }
          return result + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + word.toUpperCase();
        });
        var upperFirst = createCaseFirst('toUpperCase');
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;
          if (pattern === undefined) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function (func, args) {
          try {
            return apply(func, undefined, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = flatRest(function (object, methodNames) {
          arrayEach(methodNames, function (key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length,
              toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function (pair) {
            if (typeof pair[1] != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function (args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function () {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function (path, args) {
          return function (object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function (object, args) {
          return function (path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source),
              methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
              isFunc = isFunction(object);
          arrayEach(methodNames, function (methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function () {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__),
                      actions = result.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    'func': func,
                    'args': arguments,
                    'thisArg': object
                  });
                  result.__chain__ = chainAll;
                  return result;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {}
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function (args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function (path) {
            return object == null ? undefined : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return '';
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH,
              length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee = getIteratee(iteratee);
          n -= MAX_ARRAY_LENGTH;
          var result = baseTimes(length, iteratee);
          while (++index < n) {
            iteratee(index);
          }
          return result;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function (augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound('ceil');
        var divide = createMathOperation(function (dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound('floor');
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
        }
        function maxBy(array, iteratee) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee) {
          return baseMean(array, getIteratee(iteratee, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
        }
        function minBy(array, iteratee) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
        }
        var multiply = createMathOperation(function (multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound('round');
        var subtract = createMathOperation(function (minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee) {
          return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function () {
          var source = {};
          baseForOwn(lodash, function (func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { 'chain': false });
        lodash.VERSION = VERSION;
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(['drop', 'take'], function (methodName, index) {
          LazyWrapper.prototype[methodName] = function (n) {
            n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
            var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result.__filtered__) {
              result.__takeCount__ = nativeMin(n, result.__takeCount__);
            } else {
              result.__views__.push({
                'size': nativeMin(n, MAX_ARRAY_LENGTH),
                'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
              });
            }
            return result;
          };
          LazyWrapper.prototype[methodName + 'Right'] = function (n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(['filter', 'map', 'takeWhile'], function (methodName, index) {
          var type = index + 1,
              isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function (iteratee) {
            var result = this.clone();
            result.__iteratees__.push({
              'iteratee': getIteratee(iteratee, 3),
              'type': type
            });
            result.__filtered__ = result.__filtered__ || isFilter;
            return result;
          };
        });
        arrayEach(['head', 'last'], function (methodName, index) {
          var takeName = 'take' + (index ? 'Right' : '');
          LazyWrapper.prototype[methodName] = function () {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(['initial', 'tail'], function (methodName, index) {
          var dropName = 'drop' + (index ? '' : 'Right');
          LazyWrapper.prototype[methodName] = function () {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function () {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function (predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function (predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {
          if (typeof path == 'function') {
            return new LazyWrapper(this);
          }
          return this.map(function (value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function (predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function (start, end) {
          start = toInteger(start);
          var result = this;
          if (result.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result);
          }
          if (start < 0) {
            result = result.takeRight(-start);
          } else if (start) {
            result = result.drop(start);
          }
          if (end !== undefined) {
            end = toInteger(end);
            result = end < 0 ? result.dropRight(-end) : result.take(end - start);
          }
          return result;
        };
        LazyWrapper.prototype.takeRightWhile = function (predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function () {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
              isTaker = /^(?:head|last)$/.test(methodName),
              lodashFunc = lodash[isTaker ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName],
              retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function () {
            var value = this.__wrapped__,
                args = isTaker ? [1] : arguments,
                isLazy = value instanceof LazyWrapper,
                iteratee = args[0],
                useLazy = isLazy || isArray(value);
            var interceptor = function (value) {
              var result = lodashFunc.apply(lodash, arrayPush([value], args));
              return isTaker && chainAll ? result[0] : result;
            };
            if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__,
                isHybrid = !!this.__actions__.length,
                isUnwrapped = retUnwrapped && !chainAll,
                onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result = func.apply(value, args);
              result.__actions__.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': undefined
              });
              return new LodashWrapper(result, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
          };
        });
        arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (methodName) {
          var func = arrayProto[methodName],
              chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
              retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function () {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function (value) {
              return func.apply(isArray(value) ? value : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + '';
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({
              'name': methodName,
              'func': lodashFunc
            });
          }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
          'name': 'wrapper',
          'func': undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _ = runInContext();
      if (typeof undefined == 'function' && typeof define.amd == 'object' && define.amd) {
        root._ = _;
        define(function () {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(this);
  })($__require('@empty').Buffer, $__require('@empty'));
});
$__System.registerDynamic("4", ["d"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("d");
});
(function() {
var define = $__System.amdDefine;
(function(global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  var arr = [];
  var document = window.document;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var version = "2.2.3",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    selector: "",
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      var realStringObj = obj && obj.toString();
      return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
    },
    isPlainObject: function(obj) {
      var key;
      if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
        return false;
      }
      for (key in obj) {}
      return key === undefined || hasOwn.call(obj, key);
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      var script,
          indirect = eval;
      code = jQuery.trim(code);
      if (code) {
        if (code.indexOf("use strict") === 1) {
          script = document.createElement("script");
          script.text = code;
          document.head.appendChild(script).parentNode.removeChild(script);
        } else {
          indirect(code);
        }
      }
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback) {
      var length,
          i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        MAX_NEGATIVE = 1 << 31,
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function(list, elem) {
          var i = 0,
              len = list.length;
          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        rescape = /'|\\/g,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
        unloadHandler = function() {
          setDocument();
        };
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          nidselect,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                if ((elem = context.getElementById(m))) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector;
            } else if (context.nodeName.toLowerCase() !== "object") {
              if ((nid = context.getAttribute("id"))) {
                nid = nid.replace(rescape, "\\$&");
              } else {
                context.setAttribute("id", (nid = expando));
              }
              groups = tokenize(selector);
              i = groups.length;
              nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
              while (i--) {
                groups[i] = nidselect + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }
            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var div = document.createElement("div");
      try {
        return !!fn(div);
      } catch (e) {
        return false;
      } finally {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
        div = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          parent,
          doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document);
      if ((parent = document.defaultView) && parent.top !== parent) {
        if (parent.addEventListener) {
          parent.addEventListener("unload", unloadHandler, false);
        } else if (parent.attachEvent) {
          parent.attachEvent("onunload", unloadHandler);
        }
      }
      support.attributes = assert(function(div) {
        div.className = "i";
        return !div.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(div) {
        div.appendChild(document.createComment(""));
        return !div.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(document.getElementsByClassName);
      support.getById = assert(function(div) {
        docElem.appendChild(div).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var m = context.getElementById(id);
            return m ? [m] : [];
          }
        };
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
      } else {
        delete Expr.find["ID"];
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(document.querySelectorAll))) {
        assert(function(div) {
          docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
          if (div.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!div.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function(div) {
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          div.appendChild(input).setAttribute("name", "D");
          if (div.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(div) {
          support.disconnectedMatch = matches.call(div, "div");
          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                node = parent;
                outerCache = node[expando] || (node[expando] = {});
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": function(elem) {
          return elem.disabled === false;
        },
        "disabled": function(elem) {
          return elem.disabled === true;
        },
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : function(elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
              if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                uniqueCache[dir] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context === document || context || outermost;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument !== document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(div1) {
      return div1.compareDocumentPosition(document.createElement("div")) & 1;
    });
    if (!assert(function(div) {
      div.innerHTML = "<a href='#'></a>";
      return div.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(div) {
      div.innerHTML = "<input/>";
      div.firstChild.setAttribute("value", "");
      return div.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(div) {
      return div.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var dir = function(elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;
    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = jQuery.filter(qualifier, elements);
    }
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) > -1) !== not;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          len = this.length,
          ret = [],
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function(selector, context, root) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem && elem.parentNode) {
                this.length = 1;
                this[0] = elem;
              }
              this.context = document;
              this.selector = selector;
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this.context = this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
          this.selector = selector.selector;
          this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
            matched.push(cur);
            break;
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnotwhite = (/\S+/g);
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing,
        memory,
        fired,
        locked,
        list = [],
        queue = [],
        firingIndex = -1,
        fire = function() {
          locked = options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (jQuery.isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            then: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(subordinate) {
      var i = 0,
          resolveValues = slice.call(arguments),
          length = resolveValues.length,
          remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
          deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
          updateFunc = function(i, contexts, values) {
            return function(value) {
              contexts[i] = this;
              values[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (values === progressValues) {
                deferred.notifyWith(contexts, values);
              } else if (!(--remaining)) {
                deferred.resolveWith(contexts, values);
              }
            };
          },
          progressValues,
          progressContexts,
          resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  var readyList;
  jQuery.fn.ready = function(fn) {
    jQuery.ready.promise().done(fn);
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  }
  jQuery.ready.promise = function(obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        window.setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed);
      }
    }
    return readyList.promise(obj);
  };
  jQuery.ready.promise();
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  var acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    register: function(owner, initial) {
      var value = initial || {};
      if (owner.nodeType) {
        owner[this.expando] = value;
      } else {
        Object.defineProperty(owner, this.expando, {
          value: value,
          writable: true,
          configurable: true
        });
      }
      return owner[this.expando];
    },
    cache: function(owner) {
      if (!acceptData(owner)) {
        return {};
      }
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop,
          cache = this.cache(owner);
      if (typeof data === "string") {
        cache[data] = value;
      } else {
        for (prop in data) {
          cache[prop] = data[prop];
        }
      }
      return cache;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
    },
    access: function(owner, key, value) {
      var stored;
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        stored = this.get(owner, key);
        return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          name,
          camel,
          cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key === undefined) {
        this.register(owner);
      } else {
        if (jQuery.isArray(key)) {
          name = key.concat(key.map(jQuery.camelCase));
        } else {
          camel = jQuery.camelCase(key);
          if (key in cache) {
            name = [key, camel];
          } else {
            name = camel;
            name = name in cache ? [name] : (name.match(rnotwhite) || []);
          }
        }
        i = name.length;
        while (i--) {
          delete cache[name[i]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value) {
        var data,
            camelKey;
        if (elem && value === undefined) {
          data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
          if (data !== undefined) {
            return data;
          }
          camelKey = jQuery.camelCase(key);
          data = dataUser.get(elem, camelKey);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, camelKey, undefined);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        camelKey = jQuery.camelCase(key);
        this.each(function() {
          var data = dataUser.get(this, camelKey);
          dataUser.set(this, camelKey, value);
          if (key.indexOf("-") > -1 && data !== undefined) {
            dataUser.set(this, key, value);
          }
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHidden = function(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale = 1,
        maxIterations = 20,
        currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3];
      valueParts = valueParts || [];
      initialInUnit = +initial || 1;
      do {
        scale = scale || ".5";
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  var rtagName = (/<([\w:-]+)/);
  var rscriptType = (/^$|\/(?:java|ecma)script/i);
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn,
        type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(event) {
      event = jQuery.event.fix(event);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue = [],
          args = slice.call(arguments),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          matches,
          sel,
          handleObj,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
      filter: function(event, original) {
        var eventDoc,
            doc,
            body,
            button = original.button;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.which && button !== undefined) {
          event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
        }
        return event;
      }
    },
    fix: function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      rnoInnerhtml = /<script|<style|<link/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);
    if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    domManip: domManip,
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe,
      elemdisplay = {
        HTML: "block",
        BODY: "block"
      };
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = jQuery.css(elem[0], "display");
    elem.detach();
    return display;
  }
  function defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === "none" || !display) {
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
        doc = iframe[0].contentDocument;
        doc.write();
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  var swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var documentElement = document.documentElement;
  (function() {
    var pixelPositionVal,
        boxSizingReliableVal,
        pixelMarginRightVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
    container.appendChild(div);
    function computeStyleTests() {
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
      div.innerHTML = "";
      documentElement.appendChild(container);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";
      reliableMarginLeftVal = divStyle.marginLeft === "2px";
      boxSizingReliableVal = divStyle.width === "4px";
      div.style.marginRight = "50%";
      pixelMarginRightVal = divStyle.marginRight === "4px";
      documentElement.removeChild(container);
    }
    jQuery.extend(support, {
      pixelPosition: function() {
        computeStyleTests();
        return pixelPositionVal;
      },
      boxSizingReliable: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return boxSizingReliableVal;
      },
      pixelMarginRight: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return pixelMarginRightVal;
      },
      reliableMarginLeft: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return reliableMarginLeftVal;
      },
      reliableMarginRight: function() {
        var ret,
            marginDiv = div.appendChild(document.createElement("div"));
        marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
        marginDiv.style.marginRight = marginDiv.style.width = "0";
        div.style.width = "1px";
        documentElement.appendChild(container);
        ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
        documentElement.removeChild(container);
        div.removeChild(marginDiv);
        return ret;
      }
    });
  })();
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
    if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
      ret = jQuery.style(elem, name);
    }
    if (computed) {
      if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;
  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
        val = 0;
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (document.msFullscreenElement && window.top !== window) {
      if (elem.getClientRects().length) {
        val = Math.round(elem.getBoundingClientRect()[name] * 100);
      }
    }
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  function showHide(elements, show) {
    var display,
        elem,
        hidden,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = dataPriv.get(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);
        if (display !== "none" || !hidden) {
          dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }
    return elements;
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches,
            styles = extra && getStyles(elem),
            subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[name] = value;
          value = jQuery.css(elem, name);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
    if (computed) {
      return swap(elem, {"display": "inline-block"}, curCSS, [elem, "marginRight"]);
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
  function createFxNow() {
    window.setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
        style.display = "inline-block";
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = undefined;
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = dataPriv.access(elem, "fxshow", {});
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop;
        dataPriv.remove(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {"*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]},
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnotwhite);
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    window.clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function() {
        window.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}},
    removeAttr: function(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          propName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            elem[propName] = false;
          }
          elem.removeAttribute(name);
        }
      }
    }
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle;
      if (!isXML) {
        handle = attrHandle[name];
        attrHandle[name] = ret;
        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
        attrHandle[name] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return (elem[name] = value);
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {tabIndex: {get: function(elem) {
          var tabindex = jQuery.find.attr(elem, "tabindex");
          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
        }}},
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  var rclass = /[\t\r\n\f]/g;
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }
      return this.each(function() {
        var className,
            i,
            self,
            classNames;
        if (type === "string") {
          i = 0;
          self = jQuery(this);
          classNames = value.match(rnotwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, "__className__", className);
          }
          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g,
      rspaces = /[\x20\t\r\n\f]+/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one" || index < 0,
              values = one ? null : [],
              max = one ? index + 1 : options.length,
              i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  jQuery.extend(jQuery.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  });
  jQuery.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }});
  support.focusin = "onfocusin" in window;
  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  var location = window.location;
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": jQuery.parseJSON,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          urlAnchor,
          fireGlobals,
          i,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          state = 0,
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (state === 2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return state === 2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              var lname = name.toLowerCase();
              if (!state) {
                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (!state) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (state < 2) {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                } else {
                  jqXHR.always(map[jqXHR.status]);
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        jqXHR[i](s[i]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (state === 2) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  jQuery.expr.filters.hidden = function(elem) {
    return !jQuery.expr.filters.visible(elem);
  };
  jQuery.expr.filters.visible = function(elem) {
    return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
  };
  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, value) {
          value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
    0: 200,
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback,
        errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete(xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = callback("error");
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || document;
    var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  var _load = jQuery.fn.load;
  jQuery.fn.load = function(url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off > -1) {
      selector = jQuery.trim(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          elem = this[0],
          box = {
            top: 0,
            left: 0
          },
          doc = elem && elem.ownerDocument;
      if (!doc) {
        return;
      }
      docElem = doc.documentElement;
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }
      box = elem.getBoundingClientRect();
      win = getWindow(doc);
      return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    size: function() {
      return this.length;
    }
  });
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if (typeof define === "function" && define.amd) {
    define("e", [], function() {
      return jQuery;
    }) && define("jquery", ["e"], function(m) {
      return m;
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
}));

})();
(function() {
var define = $__System.amdDefine;
define("3", ["e"], function(main) {
  return main;
});

})();
$__System.register('5', ['3'], function (_export) {
	// ====================================
	// Quick and Dirty Debugging
	//
	// This is my quick way for printing things to the screen without having to open the inspector or
	// have the inspector take up screen real estate. It's basically a better unintrusive "alert"
	// meant for simple logging only.
	//
	// Text can be colored for easy scanning with the following colors:
	//
	// {red{ text }}
	// {orange{ text }}
	// {yellow{ text }}
	// {green{ text }}
	// {blue{ text }}
	// {purple{ text }}
	// {gray{ text }}

	'use strict';

	var $, html_snippet;

	function lg(x) {
		var y = x
		//.replace(/^#/, '<span style="color:#7a7a7a;">#</span>')
		//.replace(/^\//g, '<span style="color:#7a7a7a;">/</span>')
		.replace(/\{blue\{/g, '<span style="color:#42bab7;">').replace(/\{purple\{/g, '<span style="color:#d238ce;">').replace(/\{orange\{/g, '<span style="color:#ff5f21;">').replace(/\{gray\{/g, '<span style="color:#7a7a7a;">').replace(/\{green\{/g, '<span style="color:#3bbb33;">').replace(/\{red\{/g, '<span style="color:#dc0101;">').replace(/\{yellow\{/g, '<span style="color:#e2e03c;">').replace(/\}\}/g, '</span>');
		$('#lg').css({ 'display': 'block' }).append('<span style="color:#7a7a7a;"># </span>' + y + '<br>');
	}

	function lgObj(o) {
		var out = '';
		for (var p in o) {
			out += p + ': ' + o[p] + '\n';
		}
		lg(out);
	}return {
		setters: [function (_) {
			$ = _['default'];
		}],
		execute: function () {
			html_snippet = '<div id=lg style="\n\tbackground:rgba(0,0,0,.78);\n\tposition:fixed;\n\tbottom:0;\n\tright:0;\n\tcolor:#ccc;\n\tpadding:5px;\n\tfont-family:Inconsolata, arial;\n\tfont-size:.7em;\n\tz-index:9999;\n\t-webkit-font-smoothing:subpixel-antialiased;\n\tdisplay:none;\n\tline-height:1.1em;\n\tborder-top-left-radius: 5px;\n\t"></div>';

			$('body').append(html_snippet);

			$('#lg').on('mouseenter', function () {
				$(this).html('').css({ 'display': 'none' });
			});;

			_export('lg', lg);

			_export('lgObj', lgObj);

			//lg(`quick-log {blue{loaded}}`);
		}
	};
});
$__System.register('f', ['3', '4', '5'], function (_export) {
	// =======================================================================================
	// DOM
	'use strict';

	var $, _, lg, $accordion, $accordionTrigger;

	// =======================================================================================
	// VARS
	// =======================================================================================
	// FUNCTIONS
	// ----------------- TOGGLE ACCORDION -----------------
	function toggle_accordion($this) {
		var $parent_accordion = $this.parent();
		var $details = $this.parent().find('.accordion-details');
		var $contents = $this.parent().find('.accordion-details .accordion-contents');
		var is_expanded = $parent_accordion.hasClass('expanded');
		if (!is_expanded) {
			//OPEN
			var target_height = $contents.outerHeight();
			$details.css({ 'height': target_height });
			$parent_accordion.addClass('expanded');
		} else {
			//CLOSE
			$parent_accordion.removeClass('expanded');
			$details.css({ 'height': 0 });
		}
	}
	// =======================================================================================
	// EVENTS
	return {
		setters: [function (_2) {
			$ = _2['default'];
		}, function (_3) {
			_ = _3['default'];
		}, function (_4) {
			lg = _4.lg;
		}],
		execute: function () {
			$accordion = $('.accordion');
			$accordionTrigger = $accordion.find('.accordion-summary');
			$accordionTrigger.on('click', function () {
				toggle_accordion($(this));
			});
			// =======================================================================================
			// INIT
			// If the accordion has the class "expanded" already, then expand this accordion on page load
			$accordion.map(function (v, k) {
				if ($(k).hasClass('expanded')) {
					$(k).removeClass('expanded');
					toggle_accordion($(k).find('.accordion-summary'));
				}
			});
			// =======================================================================================
			// CHECK END
			//lg(`{green{accordion loaded}}`);
		}
	};
});
$__System.register('1', ['2', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'f'], function (_export) {

													// Global
													//import './forms';
													//import './header';
													'use strict';

													var lg;
													return {
																										setters: [function (_2) {}, function (_) {
																																							lg = _.lg;
																										}, function (_3) {}, function (_4) {}, function (_5) {}, function (_6) {}, function (_a) {}, function (_b) {}, function (_c) {}, function (_f) {}],
																										execute: function () {}
													};
});

//import './slider';

// Components

//lg(`{orange{main loaded}}`);
})
(function(factory) {
  factory();
});
//# sourceMappingURL=main.js.map