const carousel = document.getElementById('container-car');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');



let currentPosition = 0;

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentPosition < 200){
        currentPosition += 100; 
    } else {
        currentPosition = 0;
    }
    carousel.style.transform = `translateX(-${currentPosition}vw)`;
});

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentPosition > 0){
        currentPosition -= 100; 
    } else {
        currentPosition = 200;
    }
    carousel.style.transform = `translateX(-${currentPosition}vw)`;
});