/*
Build a function my_max() which takes an array and returns the maximum number.
needs to use Math.max.apply instead of Math.max because the former accepts an array
while the latter only accepts a list. You could use either Math or null as the 1st parameter.
 */
var my_max = function(numArray) {
  console.log(Math.max.apply(null, numArray));
};

my_max([1,56,2,3,-1,0]);

//Build a function vowel_count() which takes a string and returns the number of vowels (AEIOUY).
var vowel_count = function(myString){
	var count = 0;
	var myArray = myString.split("");
	var is_vowel = function(c){
		if(c === "a" || c === "e" || c === "i" || c === "o" || c === "u"){
			return true;
		}
		return false;
	};
	for (var i = 0; i < myArray.length; i++){
		if(is_vowel(myArray[i])){
			count ++;
		}
	}
	return count;
};

vowel_count("Wenmin"); //returns 2

//vowel_count() alternative solution
var vowel_count = function(str) {
	var count = 0;
	var vowels =['A','E','I','O','U','Y'];
	
	for (var i=0; i<str.length; i++){
		if (vowels.indexOf(str[i].toUpperCase()) != -1) {
			count ++;
		}
	}
return count;
};

vowel_count("Wenmin");

//Build a function reverse() which takes a string and returns all the characters in the opposite position, e.g. reverse("this is a string") // "gnirts a si siht"
var reverse = function(myString){
	var myArray = myString.split("");
	var text = "";
	for (var i = myArray.length - 1; i >= 0; i--){
		text += myArray[i];
	}
	return text;
};
reverse("Wenmin"); //returns nimnew