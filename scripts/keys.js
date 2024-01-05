// SPACEBAR PAUSE/PLAY VID

document.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        let bigVid = document.querySelector(`.big-vid`);
        if (bigVid.paused || bigVid.ended) {
            bigVid.play();
        } else {
            bigVid.pause();
        }
    }
});

// ESCAPE KEY back to menu


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc' || event.code === 'Escape') {
        if (modal.style.display === 'none') {
            let bigVid = document.querySelector(`.big-vid`);
            if (!bigVid) return;
            stopScrolling = true;
            screen1.removeChild(bigVid);
            homeContainer.style.opacity = 0;
            homeContainer.style.transition = "opacity .2s ease";
            vidInfoContainer.style.transition = "opacity .2s ease";
            vidInfoContainer.style.opacity = 0;
            setTimeout(function () {
                homeContainer.style.display = "flex";
                homeContainer.style.opacity = 1;
                vidInfoContainer.style.display = "none";
            }, 200);
        }
        else {
            modal.style.transition = "opacity .2s ease";
            modal.style.opacity = 0;
            setTimeout(function () {
                modal.style.display = "none";
            }, 200);
        }
    }
});

// ARROWS functions below

document.addEventListener('keydown', e => {
    if (e.code.startsWith('Arrow')) {
        switch (e.code) {
            case 'ArrowUp':
                speedUp(e);
                break;
            case 'ArrowDown':
                slowDown(e);
                break;
            case 'ArrowLeft':
                skipBack(e);
                break;
            case 'ArrowRight':
                skipFwd(e);
                break;
        }
    }
});

// UP+DOWN - change vid speed

function speedUp(e) {
    e.preventDefault();
    e.preventDefault();
    let bigVid = document.querySelector(`.big-vid`);
    if (!bigVid) return;
    bigVid.playbackRate = bigVid.playbackRate + 0.1;
};

function slowDown(e) {
    e.preventDefault();
    let bigVid = document.querySelector(`.big-vid`);
    if (!bigVid) return;
    bigVid.playbackRate = bigVid.playbackRate - 0.1;
};

// UP+DOWN - INCREMENT VOLUME 

function volUp(e) {
    e.preventDefault();
    volLevel = Math.min(volLevel + 0.1, 1);
    if (typeof currentVid !== 'undefined') {
        currentVid.volume = volLevel; bigVid
    };
};

function volDown(e) {
    e.preventDefault();
    volLevel = Math.max(volLevel - 0.1, 0);
    if (typeof currentVid !== 'undefined') {
        currentVid.volume = volLevel;
    };
};

// M to mute video

document.addEventListener('keydown', e => {
    if (e.code === 'KeyM' || e.key.toLowerCase === 'm' || e.key === 'M') {
        e.preventDefault();
        let bigVid = document.querySelector(`.big-vid`);
        console.log(`m pressed`);
        if (bigVid) {
            bigVid.muted = !bigVid.muted;
        }
    }
});


// LEFT+RIGHT - SKIP 10 SECONDS BACKWARDS+ FORWARD

function skipFwd(e) {
    e.preventDefault();
    let bigVid = document.querySelector(`.big-vid`);
    if (!bigVid) return;
    const currentTime = bigVid.currentTime;
    bigVid.currentTime = currentTime + 5;
}

function skipBack(e) {
    e.preventDefault();
    let bigVid = document.querySelector(`.big-vid`);
    if (!bigVid) return;
    const currentTime = bigVid.currentTime;
    bigVid.currentTime = currentTime - 5;
}

// 1234567890 skip to different points in the video

document.addEventListener('keydown', function (event) {
    if (/^[0-9]$/.test(event.key)) {
        let bigVid = document.querySelector(`.big-vid`);
        if (!bigVid) return;
        let totalDuration = bigVid.duration;
        let segmentDuration = totalDuration / 10;
        let segmentNumber = parseInt(event.key);
        let targetTime = segmentNumber * segmentDuration;
        bigVid.currentTime = targetTime;
    }
});
