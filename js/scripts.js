/**
 *	Ready Function
 */
jQuery(document).ready(function($) {

	// Responsive Menu
	$('.openresponsivemenu').click(function() {
		$('ul').toggleClass("responsivemenu");
	});

	// Masonry
	var $container = $('.gallery');
	$container.imagesLoaded( function(){
		$container.masonry({
			itemSelector : 'dl.gallery-item'
		});
	});

	// Nivo Lightbox
	$(document).ready(function(){
	    $('a.nivo-lightbox').nivoLightbox();
	});

});

// Limit Menu
var full_width = 0;

jQuery("nav ul:first > li").each(function( index ) {
	if((jQuery(this).width() + full_width) > 600) {
		jQuery(this).remove();
	}
	full_width = full_width + jQuery(this).width();
});