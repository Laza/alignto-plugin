// alignTo plugin :: http://lazaworx.com/alignto-plugin/

var ALIGN_LEFT = ALIGN_TOP = 0,
	ALIGN_CENTER = ALIGN_MIDDLE = 1,
	ALIGN_RIGHT = ALIGN_BOTTOM = 2;

(function($) {

	$.fn.alignTo = function( el, settings ) {
		
		settings = $.extend( {}, $.fn.alignTo.defaults, settings );
		
		if (typeof el === 'string') {
			el = $(el);
		}
		if (!(el instanceof $ && el.length)) {
			return;
		}
		
		var to = el.offset(),
			tw = el.outerWidth(),
			th = el.outerHeight();
		
		return $(this).each( function() {
			var w = $(this).outerWidth(),
				h = $(this).outerHeight(),
				rx = Math.round(to.left + settings.toX * tw / 2 + 
					(settings.toX - 1) * settings.gap);
				ry = Math.round(to.top + settings.toY * th / 2 + 
					(settings.toY - 1) * settings.gap);
				l = Math.round(rx - settings.posX * w / 2),
				t = Math.round(ry - settings.posY * h / 2);
			
			if ( t < 0 ) {
				if ( settings.toX !== ALIGN_CENTER ) {
					t = 0;
				} else if ( settings.toY !== ALIGN_BOTTOM  ) {
					t = to.top + el.outerHeight() + settings.gap;
				}
			} else if ( (t + h) > $(window).height() ) {
				if ( settings.toX !== ALIGN_CENTER ) {
					t = $(window).height() - h;
				} else if ( settings.toY !== ALIGN_TOP ) {
					t = to.top - h - settings.gap;
				}
			}

			if ( l < 0 ) {
				if ( settings.toY !== ALIGN_MIDDLE ) {
					l = 0;
				} else if ( settings.toX != ALIGN_RIGHT ) {
					l = to.left + el.outerWidth() + settings.gap;
				}
			} else if ( (l + w) > $(window).width() ) {
				if ( settings.toY !== ALIGN_MIDDLE ) {
					l = $(window).width() - w;
				} else if ( settings.toX != ALIGN_LEFT ) {
					l = to.left - w - settings.gap;
				}
			}
			
			$(this).css({
				position: 'absolute',
				left: l, 
				top: t 
			});
		});
	};

	$.fn.alignTo.defaults = {
		gap: 5,
		posX: ALIGN_CENTER,
		posY: ALIGN_BOTTOM,
		toX: ALIGN_CENTER,
		toY: ALIGN_TOP
	};

})(jQuery);		

