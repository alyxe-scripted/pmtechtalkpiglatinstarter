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
  	// var firstLetter = ;
	
	//if(){
	// 	return true;
	// } else {
	// 	return false;
	//}
}

// Create the wordStartsWithVowelTransformation function that takes a word as a parameter
	// Appends "way" to the end of the word 
function wordStartsWithVowelTransformation(word) {
	//Declare a variable called newWord
	
	//Assign: newWord the value of  word + "ay"
	
	//Add "ay" to the end of the word
	
	// Retun the new word.
	
}


// Create the wordStartsWithConsonantTransformation function that takes a word as a parameter
	// Moves the first consonant to the end of the word and appends "ay" to the end of the word
function wordStartsWithConsonantTransformation(word) {
//Declare a variable called newWord

	
//Declare a variable called firstLetter and assign it the value of the first letter of the word
	
//Declare a variable called lastLetters assign it the value of the last letters of the word
	
	
//Reassign newWord the lastletters + firstLetter + "ay"

//return the new word
	
}


// Create the toPigLatinWord function that takes a word as a parameter. 
	// If the word starts with a vowel return the result the wordStartsWithVowelTransformation function. 
	// Otherwise return the result of the wordStartsWithVowelTransformation. 

function toPigLatinWord(word) {
// if(){
	
//} else {
	
//}
	
}


// Create the toPigLatinSentence function that takes a sentence as a parameter
	//Itterates through all the words in the sentence and transforms each word to pig latin

