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

// title banner

var titleText = document.querySelector('#title-text');

// function updateBanner() {
//     titleText.innerHTML = "";
//     for (i = 0; i < 100; i++) {
//         titleText.innerHTML += titles[0] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//         titleText.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//     };
// }

// updateBanner();
const s21 = document.querySelector("#s2-1");
const s22 = document.querySelector("#s2-2");
const s23 = document.querySelector("#s2-3");
const s24 = document.querySelector("#s2-4");
s22.innerHTML = message;
