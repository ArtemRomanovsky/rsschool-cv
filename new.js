const videoPlayer = document.querySelector('.video_player');
const video = document.getElementById('video_itself');
const progressBar = document.querySelector('.progress_bar');
const togglePlay = document.querySelector('.play_pause');
const range = document.querySelector('.volume_tumbler');
const tumblerVolume = document.querySelector('.volume_tumbler');
const buttonFullscreen = document.querySelector('.fullscreen');
const soundButton = document.querySelector('.sound');
// functions
function playPause() {
    if (video.paused) {
        video.play();
    } else { video.pause(); }

}
// eventlisteners

function changeButton() {
    const icon = this.paused ? '►' : '❚❚';
    togglePlay.textContent = icon;
}

function checkProgress() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.value = percentage;
}




function scrub(e) {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


function toggleFullscreen() {
    if (video === document.fullscreenElement) {
        document.exitFullscreen();
    } else { video.requestFullscreen(); }
}


function spacebarPress(e) {
    if (e.keyCode === 32) {
        e.preventDefault();
        playPause();

    }
}

function muteForM(e) {
    if (e.keyCode === 77) {
        muteVideo();
    }

}

function fullscrnForF(e) {
    if (e.keyCode === 70) {
        toggleFullscreen();
    }
}

function muteVideo() {
    if (video.muted) {
        video.muted = false;
        soundButton.textContent = '🔊';
    } else {
        video.muted = true;
        soundButton.textContent = '🔇'
    }
}

function updateVolume(e) {
    video.volume = parseFloat(tumblerVolume.value); 
}

video.addEventListener('click', playPause);
togglePlay.addEventListener('click', playPause);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);



document.body.addEventListener('keydown', spacebarPress);
document.body.addEventListener('keydown', muteForM);
document.body.addEventListener('keydown', fullscrnForF);


tumblerVolume.addEventListener('change', updateVolume);
progressBar.addEventListener('click', scrub);


buttonFullscreen.addEventListener('click', toggleFullscreen);


soundButton.addEventListener('click', muteVideo);

function changeClass() {
    video.classList.toggle('MyClass');
}

video.addEventListener('playing', function () { setInterval(checkProgress, 16) });