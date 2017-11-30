// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add way to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.


// Create a Document Ready Function. 
	// Create a click handler that takes in the value from the input box. 
		// transfrom the input to pig latin. 
		// Displays the result to the screen
$(document).ready(function() {
	$(".btn").click(function(){
		var input = $(".form-control").val()
		var result = input
   		$('.result-text').html("<h3>" + result + "</h3>")
    });
});


// Create the wordStartsWithVowel function that takes a word as a parameter
	// This function should return true if the input word starts with a vowel, otherwise it should return false.
function wordStartsWithVowel(word) {
  	
}

// Create the wordStartsWithVowelTransformation function that takes a word as a parameter
	// Appends "way" to the end of the word 
function wordStartsWithVowelTransformation(word) {
  
	
}


// Create the wordStartsWithConsonantTransformation function that takes a word as a parameter
	// Moves the first consonant to the end of the word and appends "ay" to the end of the word
function wordStartsWithConsonantTransformation(word) {
  
	
}


// Create the toPigLatinWord function that takes a word as a parameter. 
	// If the word starts with a vowel return the result the wordStartsWithVowelTransformation function. 
	// Otherwise return the result of the wordStartsWithVowelTransformation. 

function toPigLatinWord(word) {
  
	
}


// Create the toPigLatinSentence function that takes a sentence as a parameter
	//Itterates through all the words in the sentence and transforms each word to pig latin

