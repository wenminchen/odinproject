/* 
1. Loop through the images. 
2. As you loop through the images corresponding circle should be changed to a different color
3. Click on previous and next to navigate to a different image. Once clicked, the loop should stop running and go to the next image. But it will start looping again once it's at the next image.
*/

sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);
	$('.circleNav li:first-child').addClass('active');
	
	startSlider();

	$('#slider > img').hover(				 
		function(){
			stopLoop();
		},
			 
		function() {
			startSlider();
		}					 
	);

	$('a.prev').click(function(){
		prev();
		return false;
	});

	$('a.next').click(function(){
		next();
		return false;
	});

	$('.circleNav li').click(function(){
		$('.circleNav li').removeClass('active');
		$(this).addClass('active');

		var index = $(this).index() + 1;
        showSlide(index);
	});

	function startSlider(){
		count=$('#slider > img').size();

		loop = setInterval(function(){
			if(sliderNext > count){
				sliderNext = 1;
				sliderInt = 1;
			}

			$('#slider > img').fadeOut(300);
			$('.circleNav li').removeClass('active');
			$('#slider > img#' + sliderNext).fadeIn(300);
			$('.circleNav li').eq(sliderNext-1).addClass('active');
			
			sliderInt = sliderNext;
			sliderNext = sliderNext + 1;
		
		}, 5000);
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
		$('.circleNav li').removeClass('active');
		
		$('#slider > img#' + id).fadeIn(300);
		$('.circleNav li').eq(id-1).addClass('active');
		
		sliderInt = id;
		sliderNext = id + 1;
		startSlider();
	}
});


