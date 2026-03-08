function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close if clicked outside image
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}