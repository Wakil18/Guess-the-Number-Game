'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 15;
// document.querySelector('.message').textContent = 'Correct Number 🎉';
// document.querySelector('.guess').value = 11;


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener
(
    'click', function(){
        const guess = Number(document.querySelector('.guess').value);

        //When there is no input
        if(!guess){

            document.querySelector('.message').textContent = 'No Number Found ⛔'

        //When the number is too High
        }else if(guess > secretNumber){
                    
            if(score > 1){
                document.querySelector('.message').textContent = 'Too High 📈';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = 'You Lost 💔';
                document.querySelector('.score').textContent = 0;
            }

        //When the number is too Low
        }else if(guess < secretNumber){

            if(score > 1){
                document.querySelector('.message').textContent = 'Too Low 📉';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = 'You Lost 💔';
                document.querySelector('.score').textContent = 0;
            }

        //When the number is Right
        }else if(guess === secretNumber){

            document.querySelector('.message').textContent = 'Correct Number 🎊🎊🎊';

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = secretNumber;

        }

    }
);


document.querySelector('.again').addEventListener(
    'click', function(){
        score = 20
        document.querySelector('.score').textContent = score;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem'
    }
);