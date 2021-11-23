'use strict';
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let initialScore = 20;
// console.log(secretNumber)
// document.querySelector('.again').addEventListener('click', function () {
//     window.location.reload();
// })
// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     // console.log(guess)
//     if (guess > 0 && guess <= 20) {

//         if (guess === secretNumber) {
//             document.querySelector('.message').textContent = 'number matches';
//             document.querySelector('body').style.backgroundColor = '#60b347';
//             document.querySelector('.number').style.width = '30rem';
//             document.querySelector('.number').textContent = guess;
//             document.querySelector('.highscore').textContent = initialScore;


//         }

//         else if (guess < secretNumber) {
//             document.querySelector('.message').textContent = 'too low';
//             if (initialScore > 1) {
//                 initialScore = initialScore - 1;
//                 document.querySelector('.score').textContent = initialScore;
//             }
//             else {
//                 document.querySelector('.score').textContent = 'GAME OVER';
//                 document.querySelector('body').style.backgroundColor = '#ff0000';
//             }
//         }


//         else if (guess > secretNumber) {
//             document.querySelector('.message').textContent = 'too high';
//             if (initialScore > 1) {
//                 initialScore = initialScore - 1;
//                 document.querySelector('.score').textContent = initialScore;
//             }
//             else {
//                 document.querySelector('.score').textContent = 'GAME OVER';
//                 document.querySelector('body').style.backgroundColor = '#ff0000';
//             }
//         }
//     }
//     else {
//         document.querySelector('.message').textContent = 'enter the number between 1 and 20'
//     }
// })

// document.querySelector('.guess').value
// document.querySelector('.number').value

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
console.log(secretNumber)
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //  console.log(guess)
    if (guess === secretNumber && score > 1) {
        document.querySelector('.message').textContent = "You Won..!"
    }
    else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "too high"
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.score').textContent = "game over"
            document.querySelector('.message').textContent = "you loose Try again"
        }
    }
    else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "too low"
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.score').textContent = "game over"
            document.querySelector('.message').textContent = "you loose Try Again"
        }
    }
})


























