let home_score = 0;
let guest_score = 0;

const home = document.getElementById("home-score");
const guest = document.getElementById("guest-score");

home.innerText = home_score;
guest.innerText = guest_score;

const result = document.getElementById("result");

function updateResult() {
    if (home_score > guest_score) {
        result.innerHTML = "<strong>Home</strong> is in the lead";
    } else if (home_score < guest_score) {
        result.innerHTML = "<strong>Guest</strong> is in the lead";
    } else {
        result.innerHTML = "Both teams are tied";
    }
}

updateResult();

function add1Point(team) {
    if (team === "home") {
        home_score++;
        home.innerText = home_score;
    }
    if (team === "guest") {
        guest_score++;
        guest.innerText = guest_score;
    }
    updateResult();
}
function add2Point(team) {
    if (team === "home") {
        home_score += 2;
        home.innerText = home_score;
    }
    if (team === "guest") {
        guest_score += 2;
        guest.innerText = guest_score;
    }
    updateResult();
}
function add3Point(team) {
    if (team === "home") {
        home_score += 3;
        home.innerText = home_score;
    }
    if (team === "guest") {
        guest_score += 3;
        guest.innerText = guest_score;
    }
    updateResult();
}

function newGame() {
    home_score = 0;
    guest_score = 0;

    home.innerText = home_score;
    guest.innerText = guest_score;
    updateResult();
}
