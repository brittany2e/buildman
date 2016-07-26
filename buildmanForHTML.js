var secretPhrase = "Let us try another";
var inProgressPhrase = secretPhrase.split(/[a-z]/i).join('-');


var introduction = function() {
    return inProgressPhrase;
}

var guessALetter = function(letter) {
    
    // 1. Look at each character in your secret phrase (hint: keep track of the index)
    // 2. If the guessed letter is found in the secret phrase,
    // 3. Then update your inProgressPhrase to have the guessed letter instead of a -
    
    // Write your code here
    for (var index = 0; index < secretPhrase.length; index++) {
        var secretLetter = secretPhrase.charAt(index).toUpperCase();
        if ( secretLetter === letter.toUpperCase() ) {
            var beginning = inProgressPhrase.substr(0, index);
            var middle = letter.toUpperCase();
            var end = inProgressPhrase.substr(index + 1, secretPhrase.length);
            inProgressPhrase =  beginning + middle + end;
        }
    }
    return inProgressPhrase;
}

var printPuzzleInProgress = function() {
    return inProgressPhrase;
}

var isFinished = function() {
    var isInProgress = inProgressPhrase.includes('-');
    return !isInProgress;
}


