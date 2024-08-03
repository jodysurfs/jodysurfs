// ESCAPE KEY back to home

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc' || event.code === 'Escape') {
        window.location.href = `home.html`;
    }
});
