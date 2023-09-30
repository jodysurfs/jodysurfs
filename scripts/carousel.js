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
    newVid.src = 'vids/120/120vid' + rnd + '.mp4';
    newVid.classList.add(`carousel-video`);
    carouselItem.classList.add(`carousel-item`);
    // newVid.poster = 'vids/240/poster/240vid' + rnd + '.jpg';
    carouselItem.appendChild(newVid);
    for (i = 0; i < 2; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselLeft[i].appendChild(clone);
    };
    let rnd2 = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120/120vid' + rnd2 + '.mp4';
    // newVid.poster = 'vids/240/poster/240vid' + rnd2 + '.jpg';
    for (i = 0; i < 2; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselRight[i].appendChild(clone);
    }
};

let temp = 4;
for (index = 0; index < howManyVids; index++) {
    if (temp == howManyVids) {
        temp = 0;
    }
    let newVid = document.createElement('video');
    let carouselItem = document.createElement('div');
    let rnd = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120/120vid' + rnd + '.mp4';
    newVid.classList.add(`carousel-video`);
    carouselItem.classList.add(`carousel-item`);
    // newVid.poster = 'vids/240/poster/240vid' + rnd + '.jpg';
    carouselItem.appendChild(newVid);
    for (i = 2; i < 4; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselLeft[i].appendChild(clone);
    };
    let rnd2 = Math.floor(Math.random() * howManyVids);
    newVid.src = 'vids/120/120vid' + rnd2 + '.mp4';
    // newVid.poster = 'vids/240/poster/240vid' + rnd2 + '.jpg';
    for (i = 2; i < 4; i++) {
        let clone = carouselItem.cloneNode(true);
        carouselRight[i].appendChild(clone);
    }
    temp++;
};

const carouselVids = document.querySelectorAll(".carousel-video");

// add properties to carousel vids 

function carouselVidsProperties() {
    carouselVids.forEach((element, index) => {
        element.loop = true;
        element.volume = 0;
        element.controls = false;
    });
};
carouselVidsProperties();

// start playing carousel vids from a random point 

carouselVids.forEach((element, index) => {
    element.addEventListener("loadedmetadata", function () {
        let randomseconds = Math.round(Math.random() * carouselVids[index].duration);
        element.currentTime = randomseconds;
        element.play();
    });
});

// slow down playback speed + enlarge vids on hover + show video title on bottom screen

carouselVids.forEach((element, index) => {
    element.addEventListener("mouseover", function () {
        element.playbackRate = 0.5;
        element.style.scale = 1.5;
        let cleanedSrc = element.src.slice(-6).replace('.mp4', '').replace(/[^0-9]/g, '');
        s23.innerHTML = titles[cleanedSrc];
    });
    element.addEventListener("mouseleave", function () {
        element.playbackRate = 1;
        element.style.scale = 1;
    });
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


const screen1 = document.querySelector("#screen-1");
const screen2 = document.querySelector("#screen-2");

carouselVids.forEach((element, index) => {
    element.addEventListener("click", () => {
        let fullSrc = element.src;
        let last6Characters = fullSrc.slice(-6);
        let cleanedSrc = last6Characters.replace('.mp4', '').replace(/[^0-9]/g, '');
        let bigVid = document.createElement('video');
        bigVid.src = 'vids/240/240vid' + cleanedSrc + '.mp4';
        bigVid.classList.add(`big-vid`);
        bigVid.autoplay = true;
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
        let esc = document.createElement('div');
        esc.id = 'esc';        
        // esc.innerHTML = "Esc."
        s21.appendChild(esc);
        s22.innerHTML = flava[cleanedSrc];
        s23.innerHTML = "Back to Menu";
        screen2.addEventListener("click", () => {
            if (bigVid && screen1.contains(bigVid)) {
                screen1.removeChild(bigVid);
            }
            s22.innerHTML = message;
        });
    });
});

