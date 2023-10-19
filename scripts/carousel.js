const message = "Pick a Video!";
const carousel = document.querySelectorAll(".carousel");
const carouselLeft = document.querySelectorAll(".carousel-left");
const carouselRight = document.querySelectorAll(".carousel-right");
const topCarousel = document.querySelector("#top-carousel");
const bottomCarousel = document.querySelector("#bottom-carousel");
let videoFileTitles = [];

for (i = 0; i < howManyVids; i++) {
    videoFileTitles.push('vid' + i + '.mp4');
};

for (index = 0; index < howManyVids; index++) {
    let newVid = document.createElement('video');
    let carouselItem = document.createElement('div');
    let rnd = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120/trim/trim120vid' + rnd + '.mp4';
    newVid.classList.add(`carousel-video`);
    carouselItem.classList.add(`carousel-item`);
    carouselItem.appendChild(newVid);
    for (i = 0; i < 2; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselLeft[i].appendChild(clone);
        playRnd;
    };
    let rnd2 = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120/trim/trim120vid' + rnd2 + '.mp4';
    for (i = 0; i < 2; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselRight[i].appendChild(clone);
        playRnd;
    }
};

for (index = 0; index < howManyVids; index++) {
    let newVid = document.createElement('video');
    let carouselItem = document.createElement('div');
    let rnd = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120/trim/trim120vid' + rnd + '.mp4';
    newVid.classList.add(`carousel-video`);
    carouselItem.classList.add(`carousel-item`);
    carouselItem.appendChild(newVid);
    for (i = 2; i < 4; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselLeft[i].appendChild(clone);
        playRnd;
    };
    let rnd2 = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120/trim/trim120vid' + rnd2 + '.mp4';
    for (i = 2; i < 4; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselRight[i].appendChild(clone);
        playRnd;
    }
};

const carouselVids = document.querySelectorAll(".carousel-video");

// add properties to carousel vids 

function carouselVidsProperties() {
    carouselVids.forEach((element, index) => {
        element.loop = true;
        element.muted = true;
        element.controls = false;
    });
};
carouselVidsProperties();

// start playing carousel vids from a random point 

function playRnd() {
    carouselVids.forEach((element, index) => {
        element.play();
        element.addEventListener("loadedmetadata", function () {
            let randomseconds = Math.round(Math.random() * carouselVids[index].duration);
            element.currentTime = randomseconds;
            element.play();
        });
    });
};
playRnd();

// slow down playback speed + enlarge vids on hover + show video title on bottom screen

const homeTitles = document.querySelector("#home-titles");

carouselVids.forEach((element, index) => {
    element.addEventListener("mouseover", function () {
        element.playbackRate = 0.5;
        element.style.scale = 1.5;
        let cleanedSrc = element.src.slice(-6).replace('.mp4', '').replace(/[^0-9]/g, '');
        homeTitles.innerHTML = titles[cleanedSrc];
    });
    element.addEventListener("mouseleave", function () {
        element.playbackRate = 1;
        element.style.scale = 1;
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
const songInfo = document.querySelectorAll(".song-info");
const albumArt = document.querySelector("#album-art");

function infiniteTextScroll() {
    songInfo[1].style.transform = 'translateX(-100%)';
}

let stopScrolling = false;

carouselVids.forEach((element, index) => {
    element.addEventListener("click", () => {
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
        homeContainer.style.display = "none";
        albumArt.innerHTML = `<img src="pics/album-art/` + cleanedSrc +  `.webp">`;
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
        screen2.addEventListener("click", () => {
            if (bigVid && screen1.contains(bigVid)) {
                screen1.removeChild(bigVid);
            }
            s22.innerHTML = message;
        });
    });
});