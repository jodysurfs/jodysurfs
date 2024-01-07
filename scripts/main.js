const loadingScreen = document.querySelector("#loading-screen");
const overlayContainer = document.querySelector("#overlay-container");
const modal = document.querySelector("#controls-modal");
const fuzz = document.querySelector("#fuzz");
const vid7 = document.querySelector("#vid7");
const playBtn = document.querySelector("#play-btn");
const muteBtn = document.querySelector("#mute-btn");
const logoAnim = document.querySelector("#logo-anim");
const logoAnim2 = document.querySelector("#logo-anim2");
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

if (screenHeight > 2000) {
    document.getElementById('fuzzVideo').src = 'vids/fuzz/fuzz-big.mp4';
}

function fadePage() {
    loadingScreen.style.opacity = 0;
    overlayContainer.style.filter = 'blur(0px)';
}
setTimeout(fadePage, 50);

function fadeFuzz() {
    fuzz.style.opacity = 0;
}
setTimeout(fadeFuzz, 6000);

const loadingMessage = document.querySelector("#loading-message");
const homeMessage = document.querySelector("#home-message");
// const homeTitles = document.querySelector("#home-titles");
setTimeout(function () {
    loadingMessage.style.opacity = 0;
    setTimeout(function () {
        homeMessage.style.opacity = 1;
    }, 1000);
    setTimeout(function () {
        homeTitles.style.opacity = 1;
    }, 2000);
}, 6500);

// SWIRLY LOGO ANIMATION

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

// function swirl() {
//     playLogoAnim(0);
//     rotateLogoAnim(0);
//     delayLogoAnim2(0);
// };

// setTimeout(swirl, 3000);

// setInterval(function () {
//     logoAnim.style.transform = `rotate(0deg)`;
//     playLogoAnim(0);
// }, 20000);

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
    }, 1000);
}
