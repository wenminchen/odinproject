/*
- display the first image
- loop through to show the other images while hiding the previous image
- if reaching the end of the loop start from the beginning again
 */

sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);
	startSlider();
});

function startSlider(){
	count=$('#slider > img').size();

	loop = setInterval(function(){
		if(sliderNext > count){
			sliderNext = 1;
			sliderInt = 1;
		}

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + sliderNext).fadeIn(300);
		
		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;
	
	}, 3000)
}

function prev(){
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop(){
	window.clearInterval(loop);
}

function showSlide(id){
	stopLoop();
	if(id > count){
		id = 1;
	} else if(id < 1) {
		id = count;
	}

	$('#slider > img').fadeOut(300);
	$('#slider > img#' + id).fadeIn(300);
	
	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
}

$("#slider > img").hover(				 
	function(){
		stopLoop();
	},
		 
	function() {
		startSlider();
	}					 
)

// NOT WORKING: thumbnail bar - based on http://buildinternet.com/2011/06/make-a-fluid-thumbnail-bar-with-jquery/
$(document).ready(function(){

	/* Variables
	----------------------------*/
	var thumbTray = '#thumb-wrapper',
		thumbList = '#thumb-list',
		thumbNext = '.thumb-next',
		thumbPrev = '.thumb-prev',
		thumbInterval,
		thumbPage = 0;
	
	/* Setup
	----------------------------*/
	// Adjust to true width of thumb markers
	$(thumbList).width($('> li', thumbList).length * $('> li', thumbList).outerWidth(true));
	
	// Hide thumb arrows if not needed
	if ($(thumbList).width() <= $(thumbTray).width())
		$(thumbPrev+","+thumbNext).fadeOut(0);

	// Thumb Intervals
	thumbInterval = Math.floor($(thumbTray).width() / $('> li', thumbList).outerWidth(true)) * $('> li', thumbList).outerWidth(true);
	/* Thumb Navigation
	----------------------------*/	
	$(thumbNext).click(function(){
		if (thumbPage - thumbInterval <= -$(thumbList).width()){
			thumbPage = 0;
			$(thumbList).stop().animate({'left': thumbPage}, {duration:500, easing:'easeOutExpo'});
		}else{
			thumbPage = thumbPage - thumbInterval;
			$(thumbList).stop().animate({'left': thumbPage}, {duration:500, easing:'easeOutExpo'});
		}
	});
	
	
	$(thumbPrev).click(function(){
		if (thumbPage + thumbInterval > 0){
			thumbPage = Math.floor($(thumbList).width() / thumbInterval) * -thumbInterval;
			if ($(thumbList).width() <= -thumbPage) thumbPage = thumbPage + thumbInterval;
			$(thumbList).stop().animate({'left': thumbPage}, {duration:500, easing:'easeOutExpo'});
		}else{
			thumbPage = thumbPage + thumbInterval;
			$(thumbList).stop().animate({'left': thumbPage}, {duration:500, easing:'easeOutExpo'});
		}
	});
	
	
	/* Window Resize
	----------------------------*/
	$(window).resize(function(){
	
		// Update Thumb Interval & Page
		thumbPage = 0;	
		thumbInterval = Math.floor($(thumbTray).width() / $('> li', thumbList).outerWidth(true)) * $('> li', thumbList).outerWidth(true);
		
		// Adjust thumbnail markers
		if ($(thumbList).width() > $(thumbTray).width()){
			$(thumbPrev+","+thumbNext).fadeIn('fast');
			$(thumbList).stop().animate({'left':0}, 200);
		}else{
			$(thumbPrev+","+thumbNext).fadeOut('fast');
		}
		
	});
	
});