'use strict';


// let secretNumber = Math.trunc(Math.random() * 20) + 1;

const secret = function(){
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    return secretNumber;
}
let num = secret();

let score = 20;

let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
(
    'click', function(){
        const guess = Number(document.querySelector('.guess').value);

        //When there is no input
        if(!guess){

            displayMessage('No Number Found ⛔');

        }else if(guess !== num){
            
            if(score > 1){
                displayMessage(guess > num ? 'Too High! 📈' : 'Too Low! 📉')
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = 'You Lost 💔';
                document.querySelector('.score').textContent = 0;
            }

        }
        //When the number is Right
        else if(guess === num){

            displayMessage('Correct Number 🎊🎊🎊');

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = num;

            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }

    }
);


document.querySelector('.again').addEventListener(
    'click', function(){
        score = 20
        document.querySelector('.score').textContent = score;
        num = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem'
    }
);