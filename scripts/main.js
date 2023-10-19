const vid7 = document.querySelector("#vid7");
const playBtn = document.querySelector("#play-btn");
const muteBtn = document.querySelector("#mute-btn");

function pauseCurrentVid() {
    vid7.pause();
    playBtn.innerHTML = `<svg width="14px" fill="currentColor" viewBox="0 0 210 210">
    <path d="M179.07,105L30.93,210V0L179.07,105z" />
</svg>`;
};

// playBtn.addEventListener('click', playVid);

function playVid() {
    if (vid7.paused || vid7.ended) {
        // vid7.volume = volLevel;
        vid7.play();
        playBtn.innerHTML = `<svg width="24px" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-width="1.5" d="M8.75 6.75V17.25" />
        <path stroke="currentColor" stroke-width="1.5" d="M15.25 6.75V17.25" />
    </svg>`;
    } else {
        pauseCurrentVid();
    }
};

const homeMessage = document.querySelector("#home-message");
homeMessage.innerHTML = message;
