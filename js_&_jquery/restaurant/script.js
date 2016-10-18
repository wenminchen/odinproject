$(document).ready(function(){
	//add image and headline
	var header = '<header>' + 
				 '<img src="logo.png" alt="restaurant logo" width="209px" height="81px">' +
				 '<h1>Come enjoy Arabic food at its finest!</h1>' + 
				 '</header>',
		   nav = '<nav>' +
		   		 '<ul>' + 
		   		 '<li><a href="#" class="about active">About</a></li>' + 
		         '<li><a href="#" class="contact">Contact</a></li>' +
		         '<li><a href="#" class="menu">Menu</a></li>' +
		         '</ul>' +
		         '</nav>',
	   section = '<section>' +
	   			 '<div class="about-content">Olcena specializes in innovative Middle Eastern cusine.</div>' +
	   			 '<div class="contact-content hidden">Our phone number is 617-333-9294.</div>' +
	   			 '<div class="menu-content hidden">Check out our delicious menu.</div>' +
	             '</section>';
    
	$('#content').append(header).append(nav).append(section);
	
	//add tabs
	var about = $( '.about' ),
		contact = $( '.contact' ),
		menu = $( '.menu' ),
		aboutDiv = $( '.about-content' ),
		contactDiv = $( '.contact-content' ),
		menuDiv = $( '.menu-content' );
    
    var menuActive = function( addA, removeA1, removeA2 ) {
		addA.addClass( 'active' );
		removeA1.removeClass( 'active' );
		removeA2.removeClass( 'active' );
	};

	var divShown = function( showA, hideA1, hideA2 ) {
		showA.show();
		hideA1.hide();
		hideA2.hide();
	};

	about.click(function(){
		menuActive(about, contact, menu);
		divShown(aboutDiv, contactDiv, menuDiv);
	});

	contact.click(function(){
		menuActive(contact, about, menu);
		divShown(contactDiv, aboutDiv, menuDiv);
	});

	menu.click(function(){
		menuActive(menu, about, contact);
		divShown(menuDiv, aboutDiv, contactDiv);
	});
});