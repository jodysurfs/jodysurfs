var swipe1 = document.getElementById('swipe-1');
var popSound = document.getElementById('pop-sound');

carouselVids.forEach((element, index) => {
	element.addEventListener("mouseover", function () {
		popSound.play();
	});
});

carouselVids.forEach((element, index) => {
	element.addEventListener("click", () => {
		swipe1.play();
	})
});
