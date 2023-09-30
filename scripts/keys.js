// SPACEBAR PAUSE/PLAY VID

document.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.keyCode === 32 || e.key === ' ') {
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
        let bigVid = document.querySelector(`.big-vid`);
        if (!bigVid) return;
        screen1.removeChild(bigVid);
        s22.innerHTML = message;
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
        currentVid.volume = volLevel;
    };
};

function volDown(e) {
    e.preventDefault();
    volLevel = Math.max(volLevel - 0.1, 0);
    if (typeof currentVid !== 'undefined') {
        currentVid.volume = volLevel;
    };
};

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
