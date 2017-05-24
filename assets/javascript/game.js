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
};

//function that picks a random integer between min and max (inclusive)
function getRandomIntInclusive(min, max) {
        	min = Math.ceil(min);
        	max = Math.floor(max);
        	return Math.floor(Math.random() * (max - min + 1)) + min;
};


function initializeGame(){
	//Set target word that the player is trying to guess.		
	targetWord = dictionary[getRandomIntInclusive(0, (dictionary.length - 1))];
	

	//fill array with empty letter spaces to be filled in by the user, and display it onscreen.
	targetWordArray = [];

	//empty the array that will hold the user's guesses. & print it to the screen
	guessedLettersArray = [];
	guessedLetters.textContent = guessedLettersArray;
	

	//Set variable for end-game win condition
	winGame = false;

	for (i = 0; i < targetWord.length; i++){
				targetWordArray.push(" _ ")
			}
	targetWordArrayPrint.textContent = targetWordArray.join("");
	tracker = 7;
	trackerPrint.textContent = tracker;

};

//function that checks whether an element is already present in a target array
function isInArray(targetArray, newElement){
	for(i = 0; i < targetArray.length; i++){
		if (targetArray[i] === newElement){
			return true;
		}

		else if (i == (targetArray.length - 1)){
			return false;
		}
	}
};

//function that takes in an object, pushes it to an existing array, and adds the resulting array to the HTML of an onscreen element.
function pushAndPrintString(string1, array1, htmlElementVariable){		
	//Push the latest guess to the guessedLettersArray
	array1.push(string1);
	//Display latest guess on the page
	htmlElementVariable.textContent = array1;
};

 function resizeBg() {
				
	if ( (window.innerWidth / window.innerHeight) < aspectRatio ) {
	    wallpaper.removeAttribute("class");
	    wallpaper.className += "bgheight z-index-neg1";
	} 

	else {
	    wallpaper.removeAttribute("class");
	    wallpaper.className += "bgwidth z-index-neg1";
	}
				
};
