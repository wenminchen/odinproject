//slider content
$(function() {
	$('#slides').slidesjs({
		height: 235,
		navigation: false,
		pagination: false,
		effect: { 
			fade: {
				speed: 400
			}
		},callback:
		{
			start: function(number){
				$("#slider_content1,#slider_content2,#slider_content3").fadeOut(500);
			},
			complete: function(number){
				$("#slider_content" + number).delay(500).fadeIn(1000);
			}
		},
		play:
		{
			active: false,
			auto: true,
			interval: 6000,
			pauseOnHover: false
		}
	});
});

(function ($, window, document, undefined){
	'use strict';
	
	$(function (){
	    $("#mobileMenu").hide();
	    $(".toggleMobile").click(function()
	    {
	    	$(this).toggleClass("active");
	        $("#mobileMenu").slideToggle(500);
	    });
	});
	$(window).on("resize", function(){
		if($(this).width() > 500)
		{
			$("#mobileMenu").hide();
			$(".toggleMobile").removeClass("active");
		}
	});
})(jQuery, window, document);