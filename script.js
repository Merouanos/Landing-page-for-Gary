const mainImages = [
    '/images/image3.jpg',
    '/images/image4.jpg', 
    '/images/image1.jpg',
    
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