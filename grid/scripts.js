/* http://webdesignerwall.com/tutorials/jquery-tutorials-for-designers 
When an elment with class="btn-slide" is clicked, it will slideToggle (up/down) the 
<div id="panel"> element and then toggle a CSS class="active" to the <a class="btn-slide"> 
element. The .active class will toggle the background position of the arrow image (by CSS).
*/

$(document).ready(function(){
	
	//solution #1
	/*$('#container div').hover(function(){
		$(this).addClass('active');
	});

	$('.btn').click(function(){
		$('#container').empty();
		var total = prompt("Enter number of boxes in the grid");
		for (var i = 1; i<=total; i++) {
			$('#container').append('<div></div>');
		} 
		$('#container div').hover(function(){
			$(this).addClass('active');
		});
	});*/

	//solution #2
	for (var i = 1; i<= 32; i++) {
		$('#container').append('<div></div>')
	}
	$('#container div').hover(function(){
		$(this).addClass('active');
	});

	$('.btn').click(function(){
		$('#container').empty();
		var width = prompt("Enter a new grid width");

		if(width > 19) {
		var height = prompt('Grid width must be 18 or less');
		}

		var height = prompt ("Enter a new grid height")
		
		if(height > 41) {
		var height = prompt('Grid height must be 40 or less');
		}

		for (var i = 1; i<=height; i++) {
			$('#container').append('<ul></ul>');
		}

		for (var i = 1; i<=width; i++) {
			$('ul').append('<li></li>');
		} 

		$('li').hover(function(){
			$(this).addClass('active');
		});
	});
});