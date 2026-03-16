const mainImages = [
    '/images/image3.avif',
    '/images/bill-and-nancy-after.avif',
    '/images/kathy-after-shows-chair-folded-up.avif'
    
];

let currentIndex = 0;
const heroImg = document.getElementById('hero-main-img');

function alternateImages() {
    heroImg.style.opacity = '0';

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % mainImages.length;
        heroImg.src = mainImages[currentIndex];
        

        heroImg.style.opacity = '1';
    }, 1000); 
}


setInterval(alternateImages, 5000);