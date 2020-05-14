/* scripts */
jQuery(document).ready(function($) {
	$(".section-head").click(function() {
		$(this).next().slideToggle();
		$(this).find("span").toggleClass("active");
	});
});