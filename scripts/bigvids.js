// retrieve name of html file to identify current vid

const path = window.location.pathname;
const currentFileName = path.substring(path.lastIndexOf('/') + 1);
let last7Characters = currentFileName.slice(-7);
let vidIndex = last7Characters.replace('.html', '').replace(/[^0-9]/g, '');

// append iframe with relevant youtube url to screen1

const screen1 = document.querySelector("#screen-1");
const iframe = document.createElement("iframe");

iframe.src = "https://www.youtube.com/embed/" + urls[vidIndex];
iframe.title = "YouTube video player";
iframe.frameBorder = "0";
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.referrerPolicy = "strict-origin-when-cross-origin";
iframe.allowFullscreen = true;

screen1.appendChild(iframe);

// set up left and right arrow links

const arrowLeft = document.querySelector("#arrow-left-svg");
const arrowRight = document.querySelector("#arrow-right-svg");

arrowLeft.addEventListener("click", () => {
	let prev = vidIndex - 1;
	window.location.href = `vid` + prev + `.html`;
});

arrowRight.addEventListener("click", () => {
	let next = ++vidIndex;
	window.location.href = `vid` + next + `.html`;
});

// reveal vidinfo on screen2

const homeContainer = document.querySelector("#home-container");
const vidInfoContainer = document.querySelector("#vid-info-container");

homeContainer.style.transition = "opacity .2s ease";
homeContainer.style.opacity = 0;
setTimeout(function () {
	homeContainer.style.display = "none";
	vidInfoContainer.style.display = "flex";
}, 200);
vidInfoContainer.style.transition = "opacity .2s ease";
vidInfoContainer.style.opacity = 1;

// add albumart and text

const songInfo = document.querySelectorAll(".song-info");
const albumArt = document.querySelector("#album-art");

albumArt.innerHTML = `<img src="pics/album-art/` + vidIndex + `.webp">`;

let parts = titles[vidIndex].split(' - ');
songInfo[0].innerHTML = parts[1];
songInfo[1].innerHTML = parts[0];
songInfo[2].innerHTML = `\"` + flava[vidIndex] + `\"`;

// add text scrolling

let stopScrolling = false;

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
