let scoreHomeEl = document.getElementById("score-home-el");
let scoreAwayEl = document.getElementById("score-away-el");
let scoreHome = 0;
let scoreAway = 0;

function homeAddPoint(){
    scoreHome += 1;
    scoreHomeEl.textContent = scoreHome;
}

function homeAddTwoPoints(){
    scoreHome += 2;
    scoreHomeEl.textContent = scoreHome;
}

function homeAddThreePoints(){
    scoreHome += 3;
    scoreHomeEl.textContent = scoreHome;
}

function awayAddPoint(){
    scoreAway += 1;
    scoreAwayEl.textContent = scoreAway;
}

function awayAddTwoPoints(){
    scoreAway += 2;
    scoreAwayEl.textContent = scoreAway;
}

function awayAddThreePoints(){
    scoreAway += 3;
    scoreAwayEl.textContent = scoreAway;
}


