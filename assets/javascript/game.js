//funtion returns all indices of given letter in a given string. Undefined if letter is not in string.
function checkLetterInWord(letter, word){
	for (var letterNumber = word.indexOf(letter); letterNumber >= 0; letterNumber = word.indexOf(letter, letterNumber + 1)){
    	return (letterNumber);
	}
}

function pushAndPrintString(string1, array1, htmlElementVariable){		
	//Push the latest guess to the guessedLettersArray
	array1.push(string1);
	//Display latest guess on the page
	htmlElementVariable.textContent = array1;
}