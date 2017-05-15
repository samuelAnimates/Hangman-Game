//funtion loops through word and returns each index that the letter occupies. Returns a value of -1 for letterNumber if letter is not in word.
function checkLetterInWord(letter, word, wordArray){
	var result = {
		wordArray: [],
		letterNumber: -1,
	};

	for (var letterNumber = word.indexOf(letter); letterNumber >= 0; letterNumber = word.indexOf(letter, letterNumber + 1)){
    		wordArray[letterNumber] = letter;
    		result.wordArray = wordArray;
    		result.letterNumber = letterNumber;
    	}
    return result;
}


function pushAndPrintString(string1, array1, htmlElementVariable){		
	//Push the latest guess to the guessedLettersArray
	array1.push(string1);
	//Display latest guess on the page
	htmlElementVariable.textContent = array1;
}