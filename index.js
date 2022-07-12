// HOME SCORE

let homeScore = document.getElementById("home-score")
let homeScoreAdded = 0

function addHome1Point() {
    homeScoreAdded += 1
    homeScore.textContent = homeScoreAdded
}

function addHome2Points() {
    homeScoreAdded += 2
    homeScore.textContent = homeScoreAdded
}

function addHome3Points() {
    homeScoreAdded += 3
    homeScore.textContent = homeScoreAdded
}


// GUEST SCORE

let guestScore = document.getElementById("guest-score")
let guestScoreAdded = 0

function addGuest1Point() {
    guestScoreAdded += 1
    guestScore.textContent = guestScoreAdded
}

function addGuest2Points() {
    guestScoreAdded += 2
    guestScore.textContent = guestScoreAdded
}

function addGuest3Points() {
    guestScoreAdded += 3
    guestScore.textContent = guestScoreAdded
}


// NEW GAME

function newGame() {
    homeScoreAdded = 0
    guestScoreAdded = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}