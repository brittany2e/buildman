process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var game = require('./buildman.js');

function startGame() {
    game.introduction();
    process.stdin.on('data', function (text) {
        if(text.length === 2) {
            game.guessALetter(text[0]);
            game.printPuzzleInProgress();
        }
        if(game.isFinished()) {
            done();
        }
        if (text === 'quit\n') {
            done();
        }
    });
}

function done() {
    console.log('Thank you for playing!');
    process.exit();
}

startGame();