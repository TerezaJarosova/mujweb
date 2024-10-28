document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    let currentImageIndex = 0;

    // Otevření lightboxu
    gallery.addEventListener('click', (e) => {
        const clickedImage = e.target.closest('.gallery-item img');
        if (!clickedImage) return;

        currentImageIndex = Array.from(galleryItems).indexOf(clickedImage);
        showImage(currentImageIndex);
        lightbox.classList.add('active');
    });

    // Zavření lightboxu křížkem
    closeButton.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Zavření pomocí klávesy Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
        if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
        if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });

    // Navigační tlačítka
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    function showImage(index) {
        currentImageIndex = index;
        lightboxImage.src = galleryItems[index].src;
        lightboxImage.alt = galleryItems[index].alt;
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        showImage(currentImageIndex);
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        showImage(currentImageIndex);
    }
});