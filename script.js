const mainImages = [
    '/images/top-slider1.png',
    '/images/top-slider2.png',
    '/images/sandstone-after4.avif',
     '/images/sandstone-after5.avif',
      '/images/sandstone-after3.avif',
       '/images/sandstone-after2.avif',
    '/images/sandstoe-after1.avif'
    
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