// 1. Danh sách link ảnh của bạn
const certImages = [
    "cer1.png",
    "cer2.jpeg",
    "cer1.png"
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("fullCertImage");
    
    modalImg.src = certImages[currentIndex];
    modal.style.display = "flex";
    
    // Tạo độ trễ nhỏ để hiệu ứng mượt hơn
    setTimeout(() => {
        modal.classList.add("active");
    }, 10);
    
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("certModal");
    modal.classList.remove("active");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
    document.body.style.overflow = "auto";
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex >= certImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = certImages.length - 1;
    
    const modalImg = document.getElementById("fullCertImage");
    // Hiệu ứng mờ dần khi đổi ảnh
    modalImg.style.opacity = "0";
    setTimeout(() => {
        modalImg.src = certImages[currentIndex];
        modalImg.style.opacity = "1";
    }, 150);
}

// Phím tắt bàn phím
document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowLeft": changeImage(-1); break;
        case "ArrowRight": changeImage(1); break;
        case "Escape": closeModal(); break;
    }
};