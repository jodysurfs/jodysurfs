const carousel = document.querySelectorAll(".carousel");
const carouselLeft = document.querySelectorAll(".carousel-left");
const carouselRight = document.querySelectorAll(".carousel-right");
const topCarousel = document.querySelector("#top-carousel");
const bottomCarousel = document.querySelector("#bottom-carousel");
let carouselVids = document.querySelectorAll(".carousel-video");
let videoFileTitles = [];

for (i = 0; i < howManyVids; i++) {
    videoFileTitles.push('vid' + i + '.mp4');
};

for (index = 0; index < howManyVids; index++) {
    let newVid = document.createElement('video');
    let carouselItem = document.createElement('div');
    let rnd = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120trim/trim120vid' + rnd + '.mp4';
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd + ".1.webp";
    newVid.classList.add(`carousel-video`);
    carouselItem.classList.add(`carousel-item`);
    carouselItem.appendChild(newVid);
    for (i = 0; i < 2; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselLeft[i].appendChild(clone);
        carouselVids = document.querySelectorAll(".carousel-video");
        carouselVidsProperties();
        // playRnd();
    };
    let rnd2 = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120trim/trim120vid' + rnd2 + '.mp4';
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd2 + ".1.webp";
    for (i = 0; i < 2; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselRight[i].appendChild(clone);
        carouselVids = document.querySelectorAll(".carousel-video");
        carouselVidsProperties();
        // playRnd();
    }
};

for (index = 0; index < howManyVids; index++) {
    let newVid = document.createElement('video');
    let carouselItem = document.createElement('div');
    let rnd = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120trim/trim120vid' + rnd + '.mp4';
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd + ".1.webp";
    newVid.classList.add(`carousel-video`);
    carouselItem.classList.add(`carousel-item`);
    carouselItem.appendChild(newVid);
    for (i = 2; i < 4; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselLeft[i].appendChild(clone);
        carouselVids = document.querySelectorAll(".carousel-video");
        carouselVidsProperties();
        document.addEventListener("DOMContentLoaded", function () {
            // playRnd();
        });
    };
    let rnd2 = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120trim/trim120vid' + rnd2 + '.mp4';
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd2 + ".1.webp";
    for (i = 2; i < 4; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselRight[i].appendChild(clone);
        carouselVids = document.querySelectorAll(".carousel-video");
        carouselVidsProperties();
        document.addEventListener("DOMContentLoaded", function () {
            playRnd();
        });
    }
};


// add properties to carousel vids

function carouselVidsProperties() {
    carouselVids.forEach((element, index) => {
        element.loop = true;
        element.muted = true;
        // element.autoplay = false;
        element.controls = false;
    });
};

carouselVidsProperties();

function showVids() {
    carouselVids.forEach((element, index) => {
        element.style.opacity = 1;
    });
};

setTimeout(showVids, 5000);

// start playing carousel vids from a random point

function playRnd() {
    carouselVids.forEach((element, index) => {
        element.addEventListener("loadedmetadata", function () {
            randomsec = Math.min(Math.floor(Math.random() * 30), 30);
            element.currentTime = randomsec;
            element.play();
        });
    });
};

// slow down playback speed + enlarge vids on hover + show video title on bottom screen

const homeTitles = document.querySelector("#home-titles");

carouselVids.forEach((element, index) => {
    element.addEventListener("mouseover", function () {
        element.playbackRate = 0.5;
        element.style.transition = 'filter 0.5s';
        element.style.filter = 'brightness(110%) contrast(110%)';
        let cleanedSrc = element.src.slice(-6).replace('.mp4', '').replace(/[^0-9]/g, '');
        homeTitles.innerHTML = titles[cleanedSrc];
    });
    element.addEventListener("mouseleave", function () {
        element.playbackRate = 1;
        element.style.transition = 'filter 0.5s';
        element.style.filter = 'brightness(100%) contrast(100%)';
    });
});

const screen1 = document.querySelector("#screen-1");
screen1.addEventListener("mouseleave", function () {
    homeTitles.innerHTML = '';
});

// stop animation on hover

carousel[0].addEventListener("mouseenter", function () {
    carouselLeft[0].style.animationPlayState = "paused";
    carouselLeft[1].style.animationPlayState = "paused";
});
carousel[0].addEventListener("mouseleave", function () {
    carouselLeft[0].style.animationPlayState = "running";
    carouselLeft[1].style.animationPlayState = "running";
});
carousel[1].addEventListener("mouseenter", function () {
    carouselRight[0].style.animationPlayState = "paused";
    carouselRight[1].style.animationPlayState = "paused";
});
carousel[1].addEventListener("mouseleave", function () {
    carouselRight[0].style.animationPlayState = "running";
    carouselRight[1].style.animationPlayState = "running";
});
carousel[2].addEventListener("mouseenter", function () {
    carouselLeft[2].style.animationPlayState = "paused";
    carouselLeft[3].style.animationPlayState = "paused";
});
carousel[2].addEventListener("mouseleave", function () {
    carouselLeft[2].style.animationPlayState = "running";
    carouselLeft[3].style.animationPlayState = "running";
});
carousel[3].addEventListener("mouseenter", function () {
    carouselRight[2].style.animationPlayState = "paused";
    carouselRight[3].style.animationPlayState = "paused";
});
carousel[3].addEventListener("mouseleave", function () {
    carouselRight[2].style.animationPlayState = "running";
    carouselRight[3].style.animationPlayState = "running";
});

// carousel vids go big on click

const screen2 = document.querySelector("#screen-2");
const homeContainer = document.querySelector("#home-container");
const vidInfoContainer = document.querySelector("#vid-info-container");
const songInfo = document.querySelectorAll(".song-info");
const albumArt = document.querySelector("#album-art");

function infiniteTextScroll() {
    songInfo[1].style.transform = 'translateX(-100%)';
}

let stopScrolling = false;

carouselVids.forEach((element, index) => {
    element.addEventListener("click", () => {
        // swirl();
        stopScrolling = false;
        let fullSrc = element.src;
        let last6Characters = fullSrc.slice(-6);
        let cleanedSrc = last6Characters.replace('.mp4', '').replace(/[^0-9]/g, '');
        let bigVid = document.createElement('video');
        bigVid.src = 'vids/240/240vid' + cleanedSrc + '.mp4';
        bigVid.classList.add(`big-vid`);
        bigVid.autoplay = true;
        bigVid.muted = true;
        bigVid.controls = false;
        bigVid.loop = true;
        bigVid.style.height = getComputedStyle(screen1).height;
        screen1.appendChild(bigVid);
        bigVid.addEventListener('click', () => {
            if (bigVid.paused || bigVid.ended) {
                bigVid.play();
            } else {
                bigVid.pause();
            }
        });
        homeContainer.style.transition = "opacity .2s ease";
        homeContainer.style.opacity = 0;
        setTimeout(function () {
            homeContainer.style.display = "none";
            vidInfoContainer.style.display = "flex";
        }, 200);
        vidInfoContainer.style.transition = "opacity .2s ease";
        vidInfoContainer.style.opacity = 1;
        albumArt.innerHTML = `<img src="pics/album-art/` + cleanedSrc + `.webp">`;
        let parts = titles[cleanedSrc].split(' - ');
        songInfo[0].innerHTML = parts[1];
        songInfo[1].innerHTML = parts[0];
        songInfo[2].innerHTML = `\"` + flava[cleanedSrc] + `\"`;
        songInfo.forEach((element, index) => {
            element.style.transition = 'transform 0s linear';
            element.style.transform = 'translateX(0%)';
            let textLength = element.innerHTML.length;
            if (textLength > 19) {
                function scroll1() {
                    element.style.transition = `transform ${textLength / 6}s linear`;
                    element.style.transform = `translateX(-${textLength * 4}%)`;
                    setTimeout(scroll2, (textLength / 6) * 1000);
                };
                function scroll2() {
                    if (stopScrolling) {
                        element.style.transition = 'transform 0s linear';
                        element.style.transform = 'translateX(0%)';
                        return;
                    };
                    element.style.transition = 'transform 0s linear';
                    element.style.transform = 'translateX(80%)';
                    setTimeout(function () {
                        if (stopScrolling) {
                            element.style.transition = 'transform 0s linear';
                            element.style.transform = 'translateX(0%)';
                            return;
                        };
                        element.style.transition = `transform ${textLength / 3}s linear`;
                        element.style.transform = `translateX(-${textLength * 4}%)`;
                        setTimeout(scroll2, (textLength / 3) * 1000);
                    }, 10);
                };
                setTimeout(scroll1, 1000);
            }
            else {
                element.style.transition = 'transform 0s linear';
                element.style.transform = 'translateX(0%)';
                return;
            };
        });
    });
});
