const closeModal = document.querySelector("#close-modal");
const controlsButton = document.querySelector("#controls-button");

controlsButton.addEventListener("click", () => {
    modal.style.display = "block";
    modal.style.transition = "opacity .8s ease";
    setTimeout(function () {
        modal.style.opacity = 1;
    }, 1);
})

closeModal.addEventListener("click", () => {
    modal.style.transition = "opacity .2s ease";
    modal.style.opacity = 0;
    setTimeout(function () {
        modal.style.display = "none";
    }, 200);
})