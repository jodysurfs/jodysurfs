const modal = document.querySelector("#controls-modal");
const vid7 = document.querySelector("#vid7");
const playBtn = document.querySelector("#play-btn");
const muteBtn = document.querySelector("#mute-btn");
const logoAnim = document.querySelector("#logo-anim");
const logoAnim2 = document.querySelector("#logo-anim2");

function playLogoAnim(i) {
    if (i < 166) {
        let iPadded = i.toString().padStart(4, '0');
        logoAnim.src = "pics/logo-anim/logo_" + iPadded + ".png";
        setTimeout(function () {
            playLogoAnim(i + 1);
        }, 25);
    }
}

function rotateLogoAnim(i) {
    if (i < 166) {
        logoAnim.style.transform = `rotate(${90 -i}deg)`;
        setTimeout(function () {
            rotateLogoAnim(i + 1);
        }, 25);
    }
}

function swirl() {
    playLogoAnim(0);
    rotateLogoAnim(0);
    delayLogoAnim2(0);
};

setTimeout(swirl, 3000);

setInterval(function () {
    logoAnim.style.transform = `rotate(0deg)`;
    playLogoAnim(0);
}, 20000);

function playLogoAnim2(i) {
    if (i < 166) {
        let iPadded = i.toString().padStart(4, '0');
        logoAnim2.src = "pics/logo-anim2/logo_" + iPadded + ".png";
        logoAnim2.style.transform = `rotate(${-i}deg)`;
        setTimeout(function () {
            playLogoAnim2(i + 1);
        }, 25);
    }
};

function delayLogoAnim2() {
    setTimeout(function () {
        playLogoAnim2(0);
    }, 1000); // Wait for 1 second before initiating the animation
}

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
