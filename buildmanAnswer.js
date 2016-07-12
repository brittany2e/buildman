var secretPhrase = "This is a secret phrase";
var inProgressPhrase = secretPhrase.split(/[a-z]/i).join('-');

exports.introduction = function() {
    console.log("Welcome to the buildman game. Guess a letter");
    console.log(inProgressPhrase);
}

exports.guessALetter = function(letter) {
    console.log("You guessed", letter);
    
    // 1. Look at each character in your secret phrase (hint: keep track of the index)
    // 2. If the guessed letter is found in the secret phrase,
    // 3. Then update your inProgressPhrase to have the guessed letter instead of a -
    
    // Write your code here
    for (var index = 0; index < secretPhrase.length; index++) {
        if (secretPhrase.charAt(index) === letter) {
            inProgressPhrase = inProgressPhrase.substr(0, index) + letter + inProgressPhrase.substr(index + 1, secretPhrase.length);
        }
    }
}

exports.printPuzzleInProgress = function() {
    console.log(inProgressPhrase);
}

exports.isFinished = function() {
    var isInProgress = inProgressPhrase.includes('-');
    return !isInProgress;
}