//define mathematical functions
var add = function(x, y){
	var sum = x + y;
	return sum;
};

var substract = function (x, y){
	var diff = x - y;
	return diff;
};

var multiply = function (x, y){
	var product = x * y;
	return product;
};

var divide = function (x, y){
	var quotient = x / y;
	if (y === 0) {
		return NaN;
	}
		return quotient;
};

$(document).ready(function(){
	var operands = [ ],
	    operator, 
	    screen = $('#calcScreen');

	$('.number').click(function(){
		operands[0] = $(this).text();


	});

	$('.operator').click(function(){
		operator = $(this).text();
	});



	//equal sign pressed
	$('span#equals').click(function(){
		switch(operator){
			case '+':
				result = add(operands[0], operands[1]);
				console.log(result);
				operants = [ ];
				operator = "";
				break;
			case '-':
				result = substract(operands[0], operands[1]);
				console.log(result);
				operants = [ ];
				operator = "";
				break;
			case '*':
				result = substract(operands[0], operands[1]);
				console.log(result);
				operants = [ ];
				operator = "";
				break;
			case '/':
				result = substract(operands[0], operands[1]);
				console.log(result);
				operants = [ ];
				operator = "";
				break;
		}
	});

	//clear button pressed
	$('span#clear').click(function(){
		operands = [ ];
		operator = "";
		console.log(operands.toString());
		console.log(operator);
	});
});

