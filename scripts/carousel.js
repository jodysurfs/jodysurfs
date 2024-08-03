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
    let rnd123 = Math.floor(Math.random() * 3) + 1;
    newVid.src = 'vids/120trim/trim120vid' + rnd + '.mp4';
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd + "." + rnd123 + ".webp";
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
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd2 + "." + rnd123 + ".webp";
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
    let rnd123 = Math.floor(Math.random() * 3) + 1;
    newVid.src = 'vids/120trim/trim120vid' + rnd + '.mp4';
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd + "." + rnd123 + ".webp";
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
    newVid.poster = "vids/120trim/poster/poster-vid" + rnd2 + "." + rnd123 + ".webp";
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

// link to relevant vid.html page

let currentVidIndex = 0;

carouselVids.forEach((element, index) => {
    element.addEventListener("click", () => {
        let fullSrc = element.src;
        let last6Characters = fullSrc.slice(-6);
        let cleanedSrc = last6Characters.replace('.mp4', '').replace(/[^0-9]/g, '');
        window.location.href = `vid${cleanedSrc}.html`;
    });
});
