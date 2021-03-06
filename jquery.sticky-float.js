/*!
 * jQuery Sticky Float Plugin
 * https://github.com/hyjk2000/jquery.sticky-float
 * @requires jQuery v1.2.6 or later
 */
(function ($) {
    $.fn.stickyFloat = function () {
		$(this).each(function() {
			// Preserve the obj in a closure.
			var _me = $(this);
			
			// Get the REAL position of the obj.
			// Put the obj's margin into account. If you don't do so the obj will jump when switching to position:fixed.
			var x = _me.offset().left - parseFloat(_me.css('margin-left').replace(/auto/, 0));
			var _top = _me.offset().top - parseFloat(_me.css('margin-top').replace(/auto/, 0));

			// Get the y offset of container's bottom
			// For collision detecting
			var _container = _me.offsetParent();
			var _y_max = _container.offset().top + _container.height() - _me.outerHeight(true);

			$(window).scroll(function () {
				// What the y position of the scroll is?
				var y = $(this).scrollTop();
				
				// Whether that's below the obj.
				if (y >= _top) {
					// Whether that's below the bottom of container
					if (y >= _y_max) {
						// Fix it to the bottom of container
						_me.attr('style', 'position:absolute;bottom:0');
					} else {
						// Fix it to the top of screen.
						_me.attr('style', 'position:fixed;top:0;left:' + x + 'px');
					}
				} else {
					// Otherwise restore it.
					_me.removeAttr('style');
				}
			});
			
			$(window).resize(function () {
				// Un-float 
				_me.removeAttr('style');
				
				// Get x position
				x = _me.offset().left - parseFloat(_me.css('margin-left').replace(/auto/, 0));
				
				// Float it again?
				var y = $(this).scrollTop();
				if (y >= _top) _me.attr('style', 'position:fixed;top:0;left:' + x + 'px');
			});
		});
    };
})(jQuery);
