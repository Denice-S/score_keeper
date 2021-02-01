let player1Score = document.querySelector('.player1_score');
let player2Score = document.querySelector('.player2_score');
let level = document.querySelector('.level');
let player1btn = document.querySelector('.player1btn');
let player2btn = document.querySelector('.player2btn');
let resetbutton = document.querySelector('.resetbtn');
let p1score = 0;
let p2score = 0;
let winningScore = 5;
let gameOver = false;

player1btn.addEventListener('click', () => {
    if (!gameOver) {
        p1score += 1;
        if (p1score == winningScore) {
            gameOver = true;
            player1Score.classList.add('winner');
            player2Score.classList.add('loser');
            player1btn.disabled = true;
            player2btn.disabled = true;

        }
        player1Score.textContent = p1score;
    }
});

player2btn.addEventListener('click', () => {
    if (!gameOver) {
        p2score += 1;
        if (p2score == winningScore) {
            gameOver = true;
            player2Score.classList.add('winner');
            player1Score.classList.add('loser');
            player1btn.disabled = true;
            player2btn.disabled = true;
        }
        player2Score.textContent = p2score;
    }
});

resetbutton.addEventListener('click', reset);

level.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    gameOver = false;
    p1score = 0;
    p2score = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.classList.remove('winner', 'loser');
    player2Score.classList.remove('winner', 'loser');
    player1btn.disabled = false;
    player2btn.disabled = false;
}
