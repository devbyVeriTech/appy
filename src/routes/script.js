let seekbar = document.querySelector('.seek-bar');
let volumebar = document.querySelector('.seek-bar');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.fa-shuffle');

let isRandom = false;
let track_index = 0;


function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seekbar.value = "0";

}


function randomTrack() {
    isRandom ? offRandom() : onRandom() ;
}

function onRandom() {
    isRandom = true ;
    randomIcon.classList.add('randomActive');
}

function offRandom() {
    isRandom = false ;
    randomIcon.classList.remove('randomActive');
}

function repeatTrack() {
    let currenSongIndex = track_index ;

}
