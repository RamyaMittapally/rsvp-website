let images;
let currentIndex = 0;
let startX = 0;
let endX = 0;

window.onload = function () {
    images = document.querySelectorAll(".gallery-track img");
};

function openModal(img) {

    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;

    images.forEach((image, index) => {
        if (image.src === img.src) {
            currentIndex = index;
        }
    });
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function changeImage(direction) {

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("modalImg").src = images[currentIndex].src;
}

window.onclick = function (event) {

    const modal = document.getElementById("myModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("keydown", function (event) {

    const modal = document.getElementById("myModal");

    if (modal.style.display === "flex") {

        if (event.key === "ArrowRight") {
            changeImage(1);
        }

        if (event.key === "ArrowLeft") {
            changeImage(-1);
        }

        if (event.key === "Escape") {
            closeModal();
        }
    }
});